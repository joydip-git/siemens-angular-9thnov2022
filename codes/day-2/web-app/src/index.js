import { PostManager } from "./manager/post-manager";

const createRows = function (allPosts) {
    const tbody = document.getElementById('tbodyPosts')

    for (const post of allPosts) {
        const row = document.createElement('tr')

        const tdTitle = document.createElement('td')
        tdTitle.innerText = post.title

        const tdBody = document.createElement('td')
        tdBody.innerText = post.body

        row.append(tdTitle, tdBody)
        tbody.appendChild(row)
    }
}


const btn = document.getElementById('btnLoad')
btn.addEventListener(
    'click',
    async function () {
        console.log('button clicked')
        const manager = new PostManager()
        try {
            const posts = await manager.fetchPosts()
            const finalPosts = posts.slice(0, 10)
            createRows(finalPosts)

        } catch (e) {
            console.log(e.message)
        }
    }
)

