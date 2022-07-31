export class EventModel {
  public isReviewed = false;
  public isApproved = false;
  constructor(public id: number, public title: string, public era: string,
    public year: number){}
}
