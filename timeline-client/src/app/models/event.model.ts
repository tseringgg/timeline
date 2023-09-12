export class TimelineEvent {
  // public isReviewed = false;
  // public isApproved = false;
  constructor(public id: number, public era: string, public year: number, public title: string,
    public country: string, public eventTypeId: number, public description: string, public imageUrl: string){}
}
