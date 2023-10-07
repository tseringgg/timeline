import { Event, EventViewModel } from "./event.model";

export class Timeline {

  constructor(public timelineId: number, public centuryId: number, public era: string, public events: EventViewModel[]) {
  }
}
