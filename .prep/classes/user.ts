class User {
  userName: string;
  mail: string;
  name: string;
  surname: string;
  age: number;
  hobbies: string[] = []; // Varsayılan değer olarak boş bir dizi atandı
  gender: string;
  country: string;

  constructor(
    userName: string,
    mail: string,
    name: string,
    surname: string,
    age: number,
    hobbies: string[] = [],
    gender: string,
    country: string,
  ) {
    this.userName = userName;
    this.mail = mail;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.hobbies = hobbies;
    this.gender = gender;
    this.country = country;
  }

  getDetails(): string {
    return `${this.name} is ${this.age} years old and is ${this.gender}.`;
  }
}

