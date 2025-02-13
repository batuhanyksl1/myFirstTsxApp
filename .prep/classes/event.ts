import OnsiteAddress from './onSiteAddress';

class CreatedEvent extends OnsiteAddress {
  title: string;
  description: string;
  date: Date;
  attendees: string[] = [];
  maxAttendees: number;
  isOnline: boolean;
  isFree: boolean;
  price: number;
  category: string;
  organizer: string;

  constructor(
    title: string,
    description: string,
    date: Date,
    address: string,
    city: string,
    state: string,
    country: string,
    postalCode: string,
    attendees: string[] = [],
    maxAttendees: number,
    isOnline: boolean,
    isFree: boolean,
    price: number,
    category: string,
    organizer: string,
  ) {
    super(address, city, state, country, postalCode);
    this.title = title;
    this.description = description;
    this.date = date;
    this.attendees = attendees;
    this.maxAttendees = maxAttendees;
    this.isOnline = isOnline;
    this.isFree = isFree;
    this.price = price;
    this.category = category;
    this.organizer = organizer;
  }
}

export default CreatedEvent;
