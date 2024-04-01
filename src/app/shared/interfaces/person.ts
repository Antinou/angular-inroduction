export interface Person {
    givenName: string;
    surName: string;
    age: number;
    email: string;
    address: string;
}


export interface EPerson {
    givenName: string;
    surName: string;
    age: number;
    email: string;
    education: string;
}

export const ManyPerson: EPerson[] 