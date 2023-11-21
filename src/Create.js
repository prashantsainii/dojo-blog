import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTtitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('morio');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = {title,body,author};

        console.log(blog);

        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value = {title}
                    onChange = {(event) => setTtitle(event.target.value)}
                />

                <label>Blog body:</label>
                <textarea 
                    required
                    value = {body}
                    onChange = {(event) => setBody(event.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <select
                    value = {author}
                    onChange={(event) => setAuthor(event.target.value)}
                >
                    <option value="morio">Prashant</option>
                    <option value="yoshi">Saini</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
                
            </form>
        </div>
    );
}
 
export default Create;
