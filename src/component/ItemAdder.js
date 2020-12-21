import React,{useState} from 'react'; 
import ReactDOM from 'react-dom';
import App from "../App";
import "../css/ItemAdder.css"; 

function ItemAdder(props){
    let [name,setName] = useState('');
    let [description,setDescription]=useState('');
    let [price,setPrice] = useState('');
    let [image,setImage] = useState('');

    let addNewItem = ()=> {        
        if(name){
            props.addItem(name,description,price,image); 
            ReactDOM.render(<App />,document.getElementById('root'))
        }
    }
    console.log(name)
    return(
    <div className="item-input container-fluid">
        <h2>Enter New Item Info</h2>
        <form>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" placeholder="Decription" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
        <input type="text" placeholder="Price" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
        <input type="text" placeholder="Link to an image" value={image} onChange={(e)=>{setImage(e.target.value)}} />
        <br />
        <button onClick={addNewItem}>Add to the list</button>
        </form>
    </div>)
}
export default ItemAdder;