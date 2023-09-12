import { TimelineEvent } from "./event.model";

export class Timeline {

  constructor(public centuryId: number, public era: string, public events: TimelineEvent[]) {
  }
}
