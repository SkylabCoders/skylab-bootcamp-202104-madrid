export default interface User {
  userInfo: {
    name: string,
    mail: string,
    phone: number
  }
  _id: string,
  skills: Array<string>,
  experience: Array<string>,
  education: Array<string>,
}
