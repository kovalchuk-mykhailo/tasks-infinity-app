const requestBaseUrl = "http://localhost:3000/";

// export const generateUserUrl = ({ email, password }) => {
//   return `${requestBaseUrl}users?email=${email}&password=${password}`;
// }


export default class UrlGenerator {

  constructor(baseUrl = requestBaseUrl) {
    console.log('constructor')
    this.url = baseUrl;
    this.sign = '/';// mb ''
  }

  users = () => {
    this.url = this.url.concat`users`;
    this.sign = '?';
    return this;
  }

  withEmail(email) {
    this.url = this.url.concat(`${this.sign}email=${email}`);
    this.sign = '&';
    return this;
  }

  withPassword(password) {
    this.url = this.url.concat(`${this.sign}password=${password}`);
    this.sign = '&';
    return this;
  }

  clear = (baseUrl = requestBaseUrl) => {
    this.url = baseUrl;
    this.sign = '/';// mb ''
    return this;
  }
}

const email = 'lal@i.com';

const url = new UrlGenerator()
  .users()
  .withEmail(email)
  .withPassword('pass')
  .clear()
  .url;
console.log("Url: ", url);

