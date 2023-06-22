import useFetch from "./useFetch.js";
import BlogList from "./BlogList";
const Home = () => {
    const { data:blogs, isPending, Error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            { Error && <div> {Error} </div> }
            { isPending && <div> Loading... </div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> } {/*Passed as props */}
        </div>
    );
}

export default Home;