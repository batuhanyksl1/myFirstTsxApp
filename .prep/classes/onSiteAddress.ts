class OnsiteAddress {
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;

  constructor(
    address: string,
    city: string,
    state: string,
    country: string,
    postalCode: string,
  ) {
    this.address = address;
    this.city = city;
    this.state = state;
    this.country = country;
    this.postalCode = postalCode;
  }
}

export default OnsiteAddress;
