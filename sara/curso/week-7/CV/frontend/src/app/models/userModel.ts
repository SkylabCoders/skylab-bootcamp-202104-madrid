export default interface User {
    userInfo: {
      name: string,
      mail: string,
      phone: number,
    },
    skills: Array<string>,
    education: Array<string>,
    experience: Array<string>,
    _id: String,
};
