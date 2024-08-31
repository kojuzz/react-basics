import { useState } from "react";
import PostItem from "../components/PostItem";

const Home = () => {
    const [ posts, setPosts] = useState(
        [
            {
                title: "Game and books",
                body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptate. Deserunt maiores nulla ipsum vero aliquid, nesciunt quaerat placeat vitae excepturi, ex autem nemo numquam sapiente ea aspernatur facilis eveniet.",
                created_at: "10/25/2023",
                id: 1,
            },
            {
                title: "Best JS framework",
                body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi rerum officia id atque hic fugiat nam temporibus veritatis quis incidunt. Ea nemo labore tempore consectetur libero amet officiis quae ipsum ullam, fuga voluptatem. Quidem voluptatibus laudantium at expedita nisi laboriosam?",
                created_at: "11/25/2023",
                id: 2,
            }
        ]
    )
    const handleDelete = (id) => {
        setPosts(posts.filter((posts) => posts.id !== id))
    }
    return (
        <>
            <PostItem posts={posts} handleDelete={handleDelete} />
        </>
    ) 
}
export default Home;