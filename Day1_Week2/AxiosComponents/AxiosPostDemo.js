import { useEffect, useState } from "react"
import axios from "axios";


const AxiosPostDemo = ({posts, setPosts}) => {

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(id,title,body);
        setId("");
        setTitle("");
        setBody("");
    };

    const addPosts = (id, title, body) => {
        axios.post("http://localhost:8000/posts", {
            userId: 1,
            id: id,
            title: title,
            body: body
        })
        .then((res)=>{
            setPosts((prevPosts)=>{return[...prevPosts,res.data];});
        })

    }
    return(
        <>
        <h4>Add Post</h4>
        <form onSubmit={handleSubmit}>
            <label>Id:<input type="text" value={id} onChange={(e)=>setId(e.target.value)}></input></label>
            <label>Title:<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input></label>
            <label>Body:<input type="text" value={body} onChange={(e)=>setBody(e.target.value)}></input></label>
            <input type="submit"/>
        </form>
        </>
    )
    
}

export default AxiosPostDemo