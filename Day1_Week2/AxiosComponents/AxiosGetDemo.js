import { useEffect, useState } from "react"
import axios from "axios";
import DispayPost from "./DisplayPost";
import AxiosPostDemo from "./AxiosPostDemo";
import AxiosDeleteDemo from "./AxiosDeleteDemo";
import AxiosUpdateDemo from "./AxiosUpdateDemo";


const AxiosGetDemo = () => {
    
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/posts")
        .then(res =>{
            setPosts(res.data)
        })
    },[posts])
    return (
        <>
        <h2>Axios Demo</h2>
        <DispayPost posts={posts}/>
        <AxiosPostDemo posts={posts} setPosts={setPosts}/>
        <AxiosDeleteDemo posts={posts} setPosts={setPosts}/>
        <AxiosUpdateDemo posts={posts} setPosts={setPosts}/>
        </>
    )
}

export default AxiosGetDemo