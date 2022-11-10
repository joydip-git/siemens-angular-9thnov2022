import { Post } from "../models/post";
import { PostService } from "../services/post-service"

export class PostManager {
    constructor() {
        this.postService = new PostService()
    }
    async fetchPosts() {
        const response = await this.postService.getPosts()
        const data = await response.json()
        const allPosts = []
        for (const p of data) {
            const post = new Post(p.userId, p.id, p.body, p.title)
            allPosts.push(post)
        }
        return allPosts
    }
}