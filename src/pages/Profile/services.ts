class ProfileServices {
    static async getProfile(id: string, cb: Function) {
        const data = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        return data.json();
    }
}

export default ProfileServices;
