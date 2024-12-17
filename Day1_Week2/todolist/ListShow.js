const ListShow = (prop) => {
    return(
        <>
        {
            prop.list.map((item)=>(
                <li key={item}>{item}</li>
            ))
        }
        </>
    )
}

export default ListShow