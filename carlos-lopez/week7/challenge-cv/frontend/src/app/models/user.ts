/* eslint-disable semi */
export default interface User {
    _id: string
    skills: string,
    info:{
        name: string,
        phoneNumber: number,
        email: string
    },
    knowledge: [
        {
            language: string
            academy: string
            year: number;
        }
    ]
}
