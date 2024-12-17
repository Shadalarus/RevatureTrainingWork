import { useState } from "react";
const ListAdd = ({list, setList}) => {
    const[value,setValue]=useState("");

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(value);
        setList((prevList)=>{return[...prevList,value]});
        console.log(list);
        setValue("");
    }
    return(
        <>
        <form onSubmit={submitHandler}>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button>Add</button>
        </form>
        </>
    )
}

export default ListAdd;