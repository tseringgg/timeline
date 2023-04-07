import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventModel } from '../models/event.model';
import { EventDataService } from '../services/event-data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit, AfterViewInit {
  title = 'drawgraph';
  eventsList: EventModel[];
  subs: Subscription[] = [];

  @ViewChild('myCanvas', {static: false}) myCanvas?: ElementRef<HTMLCanvasElement>;

  public context: CanvasRenderingContext2D;
  ctx: CanvasRenderingContext2D;

  readonly verticalLineColor = "yellow";
  readonly timelineColor = "goldenrod";
  readonly eventTextColor = "black";

  readonly tibetEventsHeader = "Tibet Events";
  readonly worldEventsHeader = "World Events";

  readonly tibetEventTextColor = "white";
  readonly worldEventTextColor = "firebrick";

  readonly timeGapPixels = 130;
  readonly verticalStartPos = 70;

  /* Events */
  xPos = 120; // vertical line left Pos
  yPos = this.verticalStartPos; // vertical line top pos
  labelPos = 70;
  readonly timeIncrement = this.timeGapPixels;
  earliestCentury = -5;
  latestCentury = 3;
  canvasHeight = 0;

  canvasWidth = (window.innerWidth / 100) * 65; //1300;

  /* Date Unit */
  readonly xPosLabel = 0;
  yPosLabel = this.verticalStartPos;  readonly dateIncrement = this.timeGapPixels;

  readonly eventHeaderXPos = 20;

  horizontalLineLength = (window.innerWidth / 100) * 55;

  isReady = false;

  circleColors = [
    "navajowhite", "yellow", "lightpink", "peachpuff", "aquamarine", "aqua", "lightgreen", "lightblue", "lavender", "thistle"
  ]
  constructor(private eventDataService: EventDataService){}

  ngOnInit(): void {
    this.getEvents();
    //this.getSampleEvents();
  }

  ngAfterViewInit(): void {
    //this.getEvents();
    // this.drawTimelines();
  }

  getEvents() {
    this.eventDataService.get()
          .subscribe({
            next: (data) => {
              this.isReady = true;
              this.eventsList = data;
            //  this.drawTimelines();
             this.calculateCanvasDimensions(this.eventsList);
             this.setCanvasHeight();
            },
            error: (err) => {},
            complete: () => {
              // this.drawTimelines();
              setTimeout(() => this.drawTimelines(), 0);
            }
          });
  }

  drawTimelines(): void {


    //this.ctx.beginPath();
    //this.moveToBaseLine();
    // this.calculateCanvasDimensions(this.eventsList);
    // this.setCanvasHeight();

    if (!this.myCanvas) {
      return;
    }

    this.ctx = this.myCanvas?.nativeElement.getContext('2d');

    this.drawTimelineLabels();

    this.eventsList?.forEach(x => {
      this.drawEvent(x);
    })

    this.ctx.stroke();
  }

  // getSampleEvents(){
  //   this.eventsList = [
  //     new EventModel(1, "Death of Bob", "AD", 124),
  //     new EventModel(2, "hfeianfeja", "BC", 111),
  //     new EventModel(3, "Birth of Christ", "BC", 800)
  //   ]
  // }

  calculateCanvasDimensions(list: EventModel[]): void {
    let yearList = new Array<Number>(list.length);
    let earliestYear;
    let latestYear;

    for(let i = 0; i < yearList.length; i++) {
      if(list[i].era == "BC") {
        yearList[i] = list[i].year * -1;
      } else {
        yearList[i] = list[i].year;
      }
    }
    latestYear = earliestYear = yearList[0];

    yearList.forEach(x => {
      if(x > latestYear) {
        latestYear = x;
      }
      if (x < earliestYear){
        earliestYear = x;
      }
    });

    if(earliestYear < 0) {
      this.earliestCentury = Math.floor(earliestYear / 100);
    } else if(earliestYear >= 0) {
      this.earliestCentury = Math.floor(earliestYear / 100);
    }
    if(latestYear < 0) {
      this.latestCentury = Math.ceil(latestYear / 100);
    } else if(latestYear >= 0) {
      this.latestCentury = Math.ceil(latestYear / 100);
    }
    // this.setCanvasHeight();
  }

  setCanvasHeight() {
    this.canvasHeight = (this.latestCentury - this.earliestCentury) * this.timeGapPixels + this.verticalStartPos * 2;
    //console.log(this.canvasHeight);
  }

  drawTimelineLabels(): void {
    for(let i = this.earliestCentury; i <= this.latestCentury; i++){
      let period;
      this.drawCircle();
      this.drawVerticalLine();
      if(i < 0) {
        period = "BC";
      } else {
        period = "AD";
      }
      let centuryId = Math.abs(i)*100
      this.drawTimelineLabel(centuryId.toString(), period);
      this.incrementYPos();
      this.incrementDateLabelYPos();
    }
  }

  drawCircle(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.xPos, this.yPos, 16, 0, 2 * Math.PI);
    const colorId = Math.floor(Math.random() * 10);
    this.ctx.fillStyle = this.circleColors[colorId];
    this.ctx.fill();

    this.ctx.strokeStyle = this.verticalLineColor;
    // this.ctx.setLineDash([3, 15]);
    this.ctx.lineTo(this.horizontalLineLength, this.yPos);
    this.ctx.stroke();
  }

  moveToBaseLine(): void {
    this.ctx.moveTo(this.xPos, this.verticalStartPos);
  }

  drawVerticalLine(): void {
    this.moveToBaseLine();
    this.ctx.lineWidth = .3;
    // this.ctx.fillStyle = this.verticalLineColor;
    this.ctx.strokeStyle = this.verticalLineColor;
    this.ctx.lineTo(this.xPos, this.yPos);
  }

  incrementYPos(): void {
    this.yPos = this.yPos + this.timeIncrement;
  }

  incrementDateLabelYPos(): void {
    this.yPosLabel = this.yPosLabel + this.dateIncrement;
  }

  drawTimelineLabel(dateLabel: string, period: string): void {
    this.ctx.fillStyle = this.timelineColor;
    this.ctx.font = "16px Calibri";

    if (+dateLabel == 0) {
      this.ctx.fillText(`${dateLabel}`, this.xPosLabel + 35, this.yPosLabel + 5);
    } else {
      this.ctx.fillText(`${dateLabel} ${period} `, this.xPosLabel, this.yPosLabel + 5);
    }
  }

  drawEvent(entry: EventModel): void {
    let title = entry.title;
    let year = entry.year;
    let period = entry.era;
    let relativeZero = this.timeGapPixels * Math.abs(this.earliestCentury) + this.verticalStartPos;
    let displacementFromZero = (this.timeGapPixels / 100) * year;

    if(period == "BC"){
      displacementFromZero *= -1;
    }

    let timelinePos = relativeZero + displacementFromZero;
    this.ctx.font = "16px Calibri";

    //console.log(timelinePos);
    this.ctx.fillStyle = "silver";
    this.ctx.fillText(`------${year} ${period} -`, this.xPos + 8, timelinePos);
/** Get char count */
    this.ctx.fillText(`${title}`, this.xPos + 100, timelinePos);
  }
}
