import { useState } from "react";

const OriginalToDoList = () => {
    const[value,setValue]=useState("");
    const[list,setList]=useState([])
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(value)
        setList((prevList)=>{return[...prevList,value];})
        console.log(list)
        setValue("")
    }
    return (
        <div>
            <h3>To Do List</h3>
            {
                list.map((item)=>(
                    <li key={item}>{item}</li>
                ))
            }
            <form onSubmit={submitHandler}>
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
                <button>Add</button>
            </form>
            <h3>Total Elements: {list.length}</h3>
        </div>
    );
}

export default OriginalToDoList;