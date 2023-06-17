import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const { data:blogs, isPending, Error } = useFetch('http://localhost:8000/blogs');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    
    return (
        <div className="home">
            { Error && <div>{error}</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> }

        </div>
    );
}

export default Home;