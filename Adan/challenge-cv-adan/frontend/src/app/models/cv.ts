export default interface Cv {
    _id: string;
    skills: String,
    info: {
      name: String,
      phoneNumber: Number,
      email: String
    },
    knowledge: {
      language: String,
      academy: String,
      year: Number
    }
}
