import { postUrl } from "../constants/url";

export class PostService {
    getPosts() {
        return fetch(postUrl)
    }
}