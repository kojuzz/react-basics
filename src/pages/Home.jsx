import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";

const Home = () => {
    const [ posts, setPosts] = useState([])
    useEffect (() => {
        fetch("http://localhost:3000/posts")
            .then(res=>res.json())
            .then(data=>setPosts(data))
    }, [])
    const handleDelete = (id) => {
        setPosts(posts.filter((posts) => posts.id !== id))
        fetch("http://localhost:3000/posts/" + id , {
            method: 'DELETE'
        })
    }
    return (
        <>
            <PostItem posts={posts} handleDelete={handleDelete} />
        </>
    ) 
}
export default Home;