export class TimelineEvent {
  // public isReviewed = false;
  // public isApproved = false;
  constructor(public id: number, public title: string, public description: string, public era: string, public year: number,
    public eventDate: string, public country: string, public images: string[], public references: string[]){}
}


export class NewEvent {
  constructor(public title: string, public description: string, public era: string, public year: number,
    public eventDate: string, public country: string, public images: string[], public references: string[]){}
}

