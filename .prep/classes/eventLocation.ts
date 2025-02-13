import OnlineAddress from './onlineAddress';
import OnsiteAddress from './onSiteAddress';

enum LocationType {
  Online = 'online',
  Onsite = 'onsite',
}

class EventLocation {
  location: LocationType;
  address?: string;
  capacity: number;
  onlineAddress?: OnlineAddress;
  onsiteAddress?: OnsiteAddress;

  constructor(
    location: LocationType,
    address: string,
    capacity: number,
    details?: OnlineAddress | OnsiteAddress, // opsiyonel olarak detay adres
  ) {
    this.location = location;
    this.address = address;
    this.capacity = capacity;

    if (location === LocationType.Online && details instanceof OnlineAddress) {
      this.onlineAddress = details;
    } else if (
      location === LocationType.Onsite &&
      details instanceof OnsiteAddress
    ) {
      this.onsiteAddress = details;
    }
  }

  getLocationDetails() {
    if (this.location === LocationType.Online && this.onlineAddress) {
      return `Online event at ${this.onlineAddress.address}, ${this.onlineAddress.city}, ${this.onlineAddress.country}. Capacity: ${this.capacity}`;
    } else if (this.location === LocationType.Onsite && this.onsiteAddress) {
      return `Onsite event at ${this.onsiteAddress.address}, ${this.onsiteAddress.city}, ${this.onsiteAddress.country}. Capacity: ${this.capacity}`;
    }
    return `Event location details are not available.`;
  }
}

export default EventLocation;
