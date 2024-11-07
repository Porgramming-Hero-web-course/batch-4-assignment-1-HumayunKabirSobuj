
interface Profile {
    name: string;
    age: number;
    email: string;
}


const updateProfile = (object: Profile, update: Partial<Profile>) => {
    return { ...object, ...update }
}

