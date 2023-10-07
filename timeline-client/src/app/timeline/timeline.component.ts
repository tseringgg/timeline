import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { EventViewModel } from '../models/event.model';
import { TimelineDataService } from '../services/timeline-data.service';
import { Timeline } from '../models/timeline.model';
import { CountryDataService } from '../services/country-data.service';

export interface EventTextPosition {
  top: string,
  left: string,
  position: string
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent implements OnInit, AfterViewInit {

  @Input() timelines:Timeline[] = [];

  hasZeroCenturyDone:boolean = false;

  spaceUnit: number = 4;

  centuryTopBorderPos: number = 0;
  centuryBottomBorderPos: number = 0;

  currentTextPos: number = 0;
  currentAdTextPos: number = 0;
  nexTextPos: number = 0;

  zeroReached: boolean = false;

  bubblePositions: string[] = [];
  horizontalLinePositions: string[] = [];

  containerHeight: string = '';

  eventTextPositions: EventTextPosition[][] = [];
  isCached: boolean = false;
  hasEvent: boolean = false;
  isReady: boolean = false;
  eventCount: number = 0;
  totalEvents: EventViewModel[] = [];
  verticalLineEndPos: number;
  testData: any;

  constructor(private timelineDataService: TimelineDataService, private countryDataService: CountryDataService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initialize();
  }

  initialize(): void {
    setTimeout(() => {
       this.timelines.forEach(x => {
        this.totalEvents = this.totalEvents.concat(x.events.map(x => x));
      });

      let element = document.getElementById('container');
      let verticalLineElement = document.getElementById('vertical-line');

      const arrLength = this.eventTextPositions.length;
      const lastItem = this.eventTextPositions[arrLength - 1];

      let lastTop:string = "";
      if (lastItem !== null && lastItem !== undefined) {
        const eventArrLength = lastItem.length;
        const lastEventArrItem = lastItem[eventArrLength - 1];
        lastTop = lastEventArrItem?.top;
      }

      if (this.containerHeight !== '') {
        return;
      }

      if (element != null) {
        this.containerHeight = this.centuryBottomBorderPos + 70 + "vmin";
        element.style["height"] = this.containerHeight;
      }

      if (verticalLineElement != undefined) {
        verticalLineElement.style["height"] = this.centuryBottomBorderPos + "vmin";
      }

      this.isCached = true;
      this.isReady = true;

    }, 500);
  }

  private calculateBcEventPositions(era:string, centuryId:number, index: number): void {
    const events = this.timelines.filter(x => x.era === era && x.centuryId === centuryId)[0].events;

    if (centuryId == 0 && !this.hasZeroCenturyDone) {
      this.hasZeroCenturyDone = true;
      this.centuryTopBorderPos = this.centuryTopBorderPos - 20;
      this.centuryBottomBorderPos = this.centuryBottomBorderPos + 10;
      return;
    }

    let minSpaceUnit:number = this.spaceUnit;

    if (index > 0) {
      if (events.length === 1) {
        minSpaceUnit = 8;
      }
    }

    if (centuryId === 0 && era === "AD") {
      const divider: number = 8;
      this.centuryTopBorderPos = this.centuryBottomBorderPos + divider;
      this.centuryBottomBorderPos = this.centuryBottomBorderPos + events?.length * minSpaceUnit + divider;
    } else {
      this.centuryTopBorderPos = this.centuryBottomBorderPos;
      this.centuryBottomBorderPos = this.centuryBottomBorderPos + events?.length * minSpaceUnit;
    }
  }

  isZeroAdReached(era: string, centuryId: number): boolean {
    if (this.zeroReached) {
      return true;
    }

    if (era.toLocaleUpperCase() === "AD" && centuryId === 0) {
      this.zeroReached = true;
    }
    return this.zeroReached;
  }

  getBubbleTopPosition(era:string, centuryId:number, index: number): string {
    this.calculateBcEventPositions(era, centuryId, index);

    if (!this.isCached) {
      this.eventTextPositions[index] = [];
    }

    let bubbleTopPosition = this.bubblePositions[index];

    if (!!bubbleTopPosition) {
      return bubbleTopPosition;
    } else {
      if (era === "BC") {
        this.bubblePositions[index] = this.centuryBottomBorderPos + 'vmin';
      } else {
        this.bubblePositions[index] = this.centuryTopBorderPos + 'vmin';
      }
    }
    return this.bubblePositions[index];
  }

  getHorizontalLinePosition(timeline: Timeline, index:number): string {
    const padding = 4;
    let retVal: string = '';

    let position = this.horizontalLinePositions[index];

    if (!!position) {
      return position;
    } else {
      if (timeline.era === "AD") {
        this.horizontalLinePositions[index] = this.centuryTopBorderPos + padding + 'vmin';
      } else {
        this.horizontalLinePositions[index] = this.centuryBottomBorderPos + padding + 'vmin';
      }
    }

    return this.horizontalLinePositions[index];
  }

  private isLastElement(currentCount:number): boolean {
    if (this.totalEvents.length === currentCount) {
      return true;
    }
    return false;
  }

  getEventTextPosition(era: string, event:EventViewModel, eventCount: number, index:number, textIndex: number): object {
    let spaceDelta:number = 0;
    let topPos: string = '';
    let leftPos: string = '';
    let i = index;
    let j = textIndex;

    this.eventCount = ++this.eventCount;

    if (this.isLastElement(this.eventCount)) {
      this.verticalLineEndPos = this.centuryBottomBorderPos;
      this.isReady = true;
    }

    const key = this.eventTextPositions[index];

    if (key?.length > 0) {
      let textPosition = key[textIndex];

      if (!!textPosition) {
        this.hasEvent = true;
        return textPosition;
      }
    }

    spaceDelta = this.centuryBottomBorderPos - this.centuryTopBorderPos;
    const unit = spaceDelta / eventCount;

    if (event.countryName.toLocaleLowerCase() === 'tibet') {
      leftPos = '5%'; //'15em';
    } else {
      leftPos = '55%'; //'50em';
    }

    if (era == "BC") {
      if (index == 0 && this.nexTextPos == 0) {
        this.currentTextPos = this.centuryTopBorderPos;
      } else {
        this.currentTextPos = this.nexTextPos;
      }

      this.nexTextPos = this.currentTextPos + unit;
      topPos = this.currentTextPos + 5 + 'vmin';
    }

      if (era.toLocaleUpperCase() == "AD") {
        if (this.currentAdTextPos == 0) {
          this.currentAdTextPos = this.centuryBottomBorderPos;
        } else {
          this.currentAdTextPos = this.nexTextPos;
        }

        this.nexTextPos = this.currentAdTextPos + unit;
        topPos = this.currentAdTextPos + -5 + 'vmin';
      }

      if (!this.eventTextPositions[i]) {
        this.hasEvent = false;
        return {};
      }
      this.hasEvent = true;
      this.eventTextPositions[i][j] = {
        'top': topPos,
        'position': 'absolute',
        'left': leftPos,
      };

      return this.eventTextPositions[i][j];
  }

  getEvents(era: string, centuryId: number): EventViewModel[] | undefined {
    return this.timelines.find(x => x.era === era && x.centuryId === centuryId)?.events;
  }

  getCenturyBackgroundTopPos(): string {
    return this.centuryTopBorderPos + 4 + "vmin";
  }

  getCenturyBackgroundHeight(): string {
    return this.centuryBottomBorderPos - this.centuryTopBorderPos + "vmin";
  }

  getVerticalLineLength(): object {
    return {
      top: "5vmin",
      height: this.verticalLineEndPos + "vmin"
    }
  }
}
