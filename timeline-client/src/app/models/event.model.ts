import { Image } from "./image.model";
import { Reference } from "./reference.model";

export class Event {
  eventId: number;
  title: string;
  description: string;
  era: string;
  year: number;
  eventDate: string;
  countryId: number;

  timelineId: number;
  isReviewed: boolean;
  isDeleted: boolean;
  isApproved: boolean;
  reviewerUserId: number;
  reviewDate: string;
  creatorUserId: number;
  createDate: string;
  approverUserId: number;
  approveDate: string;
  lastUpdateDate: string;
  lastUpdaterUserId: number;

  images: Image[];
  references: Reference[];
}

export class NewEvent {
  constructor(public title: string, public description: string, public era: string, public year: number,
    public eventDate: string, public countryId: number, public imageUrls: string[], public referenceUrls: string[]){}
}

export class EventViewModel extends Event {
  countryName: string;
}

