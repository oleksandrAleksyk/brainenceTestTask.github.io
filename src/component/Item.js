import React from 'react'; 
import "../css/Item.css";

function Item(props){
    const PinButton = () => (
        <div className="action-button" >
            {!props.item.pinned ? (
                <button onClick={()=>{props.pinItem()}}>Pin</button> //item`s not pinned
            ):(
                <button onClick={()=>{props.unpinItem()}}>Unpin</button> //item`s pinned
            )}
        </div>
    )

    const RemoveButton=()=>(
        <div className="action-button">
            <button  className="remove" onClick={()=>{props.removeItem()}}>Remove</button>
        </div>
    )


    return(
    <div className="col-md-4">
        <div className="card" width={25+"rem"}>
        <img className="card-image-top" src={props.item.image} alt="alt-text-of-item" />
        <PinButton />
        <RemoveButton />
        <div className="card-body">
        <h4 className="card-title">{props.item.name}</h4>
        <p>{props.item.description}</p>
        <h6>${props.item.price}</h6>
        </div>
        </div>
    </div>)
}


export default Item; 


