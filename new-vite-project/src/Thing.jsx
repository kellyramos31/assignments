import React from 'react';

export default function Thing(props){
    const {title, imgUrl, description} = props


    console.log("title", title)

    function deleteItem(e){
        e.preventDefault()

    }

    return(
        <>
        <h1 className="title">{title}</h1>
        <img src={imgUrl} alt=""></img>
        <h1 className="description">{description}</h1>
        
        <div>
        <button onClick={deleteItem} className="deleteItem" >Delete Item</button>

        <input></input>
        <button>Update</button>
        </div>
        </>
    )
}