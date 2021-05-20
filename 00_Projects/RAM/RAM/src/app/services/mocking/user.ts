export class User {
    username:string;
    password:string;
    /**
     * @description constructor for mocking user
     * @param  {string} username
     * @param  {string} password
     */
    constructor (username:string, password:string) {
      this.username = username
      this.password = password
    }
}
