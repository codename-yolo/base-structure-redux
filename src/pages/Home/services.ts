class HomeService {
    static async getPosts(email:string) {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        return data.json();
    }
}

export default HomeService;
