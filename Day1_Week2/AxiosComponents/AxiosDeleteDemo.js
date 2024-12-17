import { useEffect, useState } from "react"
import axios from "axios";


const AxiosDeleteDemo = ({posts,setPosts}) => {
    
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    deletePost(id);
    setId("");
};

    const deletePost = (id) => {
        axios.delete(`http://localhost:8000/posts/${id}`)
        .then((res)=>{
          const newPosts=posts.filter(posts=>posts.id!==id);
        setPosts(newPosts);
      })

        
    }

  return(
    <>
        <h4>Delete Post</h4>
        <form onSubmit={handleSubmit}>
            <label>Id:<input type="text" value={id} onChange={(e)=>setId(e.target.value)}></input></label>
            <input type="submit"/>
        </form>
        </>
  )
}

export default AxiosDeleteDemo