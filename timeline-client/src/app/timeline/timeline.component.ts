import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EventModel } from '../models/event.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineDisplayComponent implements OnInit, AfterViewInit {
  title = 'drawgraph';

  @ViewChild('myCanvas', {static: false}) myCanvas: ElementRef<HTMLCanvasElement>;

  public context: CanvasRenderingContext2D;
  ctx: CanvasRenderingContext2D;

  readonly verticalLineColor = "black";
  readonly timelineColor = "seagreen";
  readonly eventTextColor = "black";

  readonly tibetEventsHeader = "Tibet Events";
  readonly worldEventsHeader = "World Events";

  readonly tibetEventTextColor = "black";
  readonly worldEventTextColor = "firebrick";

  readonly timeGapPixels = 130;
  readonly verticalStartPos = 70;

  /* Events */
  xPos = 70;
  yPos = this.verticalStartPos;
  labelPos = 70;
  readonly timeIncrement = this.timeGapPixels;

  /* Date Unit */
  readonly xPosLabel = 0;
  yPosLabel = this.verticalStartPos;
  readonly dateIncrement = this.timeGapPixels;

  readonly eventHeaderXPos = 20;

  horizontalLineLength = 600;

  circleColors = [
    "navajowhite", "yellow", "lightpink", "peachpuff", "aquamarine", "aqua", "lightgreen", "lightblue", "lavender", "thistle"
  ]

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.ctx = this.myCanvas?.nativeElement.getContext('2d');

    const data = [
      {
        "centuryId": "600",
        "period": "BC",
        "events": [{ "year": "673", "event": "Birth of Jesus", "country": "China" }],
      },
      {
        "centuryId": "500",
        "period": "BC",
        "events": [{ "year": "563", "event": "Birth of Buddha Shakyamuni", "country": "tibet" }],
      },
      {
        "centuryId": "400",
        "period": "BC",
        "events": [{ "year": "452", "event": "Birth of Jesus", "country": "China" }],
      },
      {
        "centuryId": "300",
        "period": "BC",
        "events": [{ "year": "342", "event": "Birth of Jesus", "country": "India" }],
      },
      {
        "centuryId": "200",
        "period": "BC",
        "events": [{ "year": "212", "event": "Birth of Jesus", "country": "China" }],
      },
      {
        "centuryId": "100",
        "period": "BC",
        "events": [{ "year": "113", "event": "Birth of Jesus", "country": "Tibet" }],
      },
      {
        "centuryId": "0",
        "period": "AD",
        "events": [{ "year": "12", "event": "Birth of Jesus", "period": "AD", "country": "India"  }],
      },
      {
        "centuryId": "100",
        "period": "AD",
        "events": []
      },
      {
        "centuryId": "200",
        "period": "AD",
        "events": [{ "year": "256", "event": "256 Birth of Foo Tsenpo lljl afakkj adfllll df af lasdfj \ln alfjalfjlj saf llalsf lal ", "country": "Tibet" }],
      },
      {
        "centuryId": "300",
        "period": "AD",
        "events": []
      },
      {
        "centuryId": "400",
        "period": "AD",
        "events": [{ "year": "436", "event": "436 Birth of Foo Tsenpo", "country": "China" }],
      },
      {
        "centuryId": "500",
        "period": "AD",
        "events": []
      },
      {
        "centuryId": "600",
        "period": "AD",
        "events": [{ "year": "655", "event": "655 Birth of Foo Tsenpo", "country": "India" }],
      },
      {
        "centuryId": "700",
        "period": "AD",
        "events": []
      },
      {
        "centuryId": "800",
        "period": "AD",
       "events": []
      },
      {
        "centuryId": "900",
        "period": "AD",
        "events": [{ "year": "956", "event": "956 Birth of Foo Tsenpo", "country": "Tibet" }],
      },
      {
        "centuryId": "1000",
        "period": "AD",
        "events": []
      },
      {
        "centuryId": "1100",
        "period": "AD",
        "events": []
      },
      {
        "centuryId": "1200",
        "period": "AD",
        "events": [{ "year": "1256", "event": "1234 Birth of Foo Tsenpo", "country": "Tibet" }],
      },
      {
        "centuryId": "1300",
        "period": "AD",
        "events": []
      },
      {
        "centuryId": "1400",
        "period": "AD",
        "events": [{ "year": "1426", "event": "1434 Birth of Foo Tsenpo", "country": "Tibet" }],
      },
      {
        "centuryId": "1500",
        "period": "AD",
        "events": []
      },
    ]

    this.ctx.beginPath();
    this.moveToBaseLine();

    data.forEach(x => {
      this.drawCircle();
      this.drawVerticalLine();
      this.drawTimelineLabel(x['centuryId'], x['period']);
      if (x['events'].length > 0) {
        this.drawEvent(x);
      }
      this.incrementYPos();
      this.incrementDateLabelYPos();
    });

    this.ctx.stroke();
  }

  drawCircle(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.xPos, this.yPos, 16, 0, 2 * Math.PI);
    const colorId = Math.floor(Math.random() * 10);
    this.ctx.fillStyle = this.circleColors[colorId];
    this.ctx.fill();

    this.ctx.lineTo(this.horizontalLineLength, this.yPos);
    this.ctx.stroke();
  }

  moveToBaseLine(): void {
    this.ctx.moveTo(this.xPos, this.verticalStartPos);
  }

  drawVerticalLine(): void {
    this.moveToBaseLine();
    this.ctx.lineWidth = .3;
    this.ctx.fillStyle = this.verticalLineColor;
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

  drawEvent(entry: any): void {
    let event = entry['events'][0];
    let title = event.event;
    let year = +event.year;
    let centuryId = +entry.centuryId;
    let period = entry.period;
    let country:string = event.country.toString();

    let temp = (this.timeGapPixels / 100) * (year - centuryId);
    let timelinePos = this.yPos + temp;
    this.ctx.font = "14px Calibri";

    this.ctx.fillText(`- ${year} ${period} -`, this.xPos + 8, timelinePos);
    this.ctx.fillStyle = country.toLowerCase() === "tibet" ? this.tibetEventTextColor : this.worldEventTextColor;

    this.ctx.fillText(`${title}`, this.xPos + 66, timelinePos);
  }
}
