import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventModel } from '../models/event.model';
import { EventDataService } from '../services/event-data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
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
  windowWidthUnit = window.innerWidth / 100;
  canvasWidth = this.windowWidthUnit * 65; //1300;


  xPos = this.canvasWidth / 2; /// vertical line left Pos
  yPos = this.verticalStartPos; // vertical line top pos
  labelPos = 70;
  readonly timeIncrement = this.timeGapPixels;
  earliestCentury = -5;
  latestCentury = 3;
  canvasHeight = 0;



  /* Date Unit */
  readonly xPosLabel =  this.windowWidthUnit * 5;
  yPosLabel = this.verticalStartPos;  readonly dateIncrement = this.timeGapPixels;

  readonly eventHeaderXPos = 20;

  horizontalLineLength = (this.xPos + this.xPos) - 200; //(window.innerWidth / 100) * 35;

  isReady = false;

  xPos_tibetHeading = this.xPos - (this.windowWidthUnit * 20);
  yPos_tibetHeading = 50;

  xPos_worldHeading = this.xPos - (this.windowWidthUnit * -10);
  yPos_worldHeading = 50;

  circleColors = [
    "navajowhite", "yellow", "lightpink", "peachpuff", "aquamarine", "aqua", "lightgreen", "lightblue", "lavender", "thistle"
  ]
  constructor(private eventDataService: EventDataService){}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.eventDataService.get()
          .subscribe({
            next: (data) => {
              this.isReady = true;
              this.eventsList = data;
             this.calculateCanvasDimensions(this.eventsList);
             this.setCanvasHeight();
            },
            error: (err) => {},
            complete: () => {
              setTimeout(() => this.drawTimelines(), 0);
            }
          });
  }

  writeCountryHeaders(): void {
    this.ctx.beginPath();
    this.ctx.fillStyle = 'orange';
    this.ctx.font = "24px Calibri";

    this.ctx.fillText(`Tibet`, this.xPos_tibetHeading, this.yPos_tibetHeading);
    this.ctx.fillText(`World`, this.xPos_worldHeading, this.yPos_worldHeading);
  }

  drawTimelines(): void {

    if (!this.myCanvas) {
      return;
    }

    this.ctx = this.myCanvas?.nativeElement.getContext('2d');

    this.writeCountryHeaders();

    this.drawTimelineLabels();

    this.eventsList?.forEach(x => {
      this.drawEvent(x);
    })

    this.ctx.stroke();
  }

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
  }

  setCanvasHeight() {
    this.canvasHeight = (this.latestCentury - this.earliestCentury) * this.timeGapPixels + this.verticalStartPos * 2;
  }

  drawTimelineLabels(): void {
    for(let i = this.earliestCentury; i <= this.latestCentury; i++){
      let period;
      this.drawCircle();
      this.drawHorizontalCenturyLine();
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
    this.ctx.stroke();

    // this.ctx.strokeStyle = this.verticalLineColor;
    // // this.ctx.setLineDash([3, 15]);
    // this.ctx.lineTo(this.horizontalLineLength, this.yPos);
    // this.ctx.stroke();

    // /** Draw horizontal century line for Tibet timelines */
    // this.ctx.lineTo(this.xPos - 500, this.yPos);
  }

  drawHorizontalCenturyLine(): void {
    // this.moveToBaseLine();
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = .8;
    this.ctx.moveTo(this.xPosLabel + this.windowWidthUnit * 3, this.yPosLabel);
    this.ctx.lineTo(this.xPosLabel + this.windowWidthUnit * 50, this.yPosLabel);
    this.ctx.setLineDash([5, 10]);

    this.ctx.stroke();

    /** Reset back to solid line */
    this.ctx.setLineDash([]);
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
      this.ctx.fillText(`${dateLabel}`, this.xPosLabel, this.yPosLabel + 5);
      // this.ctx.fillText(`${dateLabel}`, this.xPosLabel + 485, this.yPosLabel + 5);
    } else {
      this.ctx.fillText(`${dateLabel} ${period} `, this.xPosLabel, this.yPosLabel + 5);
      // this.ctx.fillText(`${dateLabel} ${period} `, this.xPosLabel + 485, this.yPosLabel + 5);
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

    // let xPos_yearPeriodText = this.xPos + 8;
    // let yPos_yearPeriodText = timelinePos;
    let xPos_titleText = this.xPos + 100;
    let yPos_titleText = timelinePos;
    this.ctx.fillStyle = "silver";

    if (entry.country === "Tibet") {
      this.ctx.fillStyle = "gold";
      // xPos_yearPeriodText = this.xPos - (year.toString.length + (title.length + this.windowWidthUnit * 24));
      // yPos_yearPeriodText = timelinePos;
      xPos_titleText = this.xPos - (title.length + this.windowWidthUnit * 22);
      yPos_titleText = timelinePos;

      // this.ctx.fillText(`${year} ${period} -`, xPos_yearPeriodText, yPos_yearPeriodText);
      this.ctx.fillText(`${year} ${period} - ${title}`, xPos_titleText, yPos_titleText);
    } else {
      // this.ctx.fillText(`------${year} ${period} -`, xPos_yearPeriodText, yPos_yearPeriodText);
      this.ctx.fillText(`${year} ${period} - ${title}`, xPos_titleText, yPos_titleText);
    }
  }
}
