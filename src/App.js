import React from 'react'; 
import ReactDOM from 'react-dom';
import store from "./store"; 
import {observer} from "mobx-react";
import Item from './component/Item'; 
import ItemAdder from './component/ItemAdder'; 
import "./css/App.css"; 


class App extends React.Component {
  render(){
    const {sortedList} = store;
    const renderNewItemForm = ()=>{
      ReactDOM.render(<ItemAdder addItem={(name,description,price,image)=>{store.addItem(name,description,price,image)}} />,
      document.getElementById('root'))
    }


    
    return(

    <div className="app container-fluid">
      <header className="app--header container-fluid">
      <h2>Logo</h2>
      <div>
      <button onClick={renderNewItemForm}>
        <span><img src="https://image.flaticon.com/icons/png/512/60/60740.png" alt="add-task"/></span>
      </button>
      <input type="search" placeholder="Search by" onChange={(e)=>{store.search(e.target.value)}} />
      </div>
      </header>

      <div className="app--body">
        <div className="row">
          {store.searchResult}
          {sortedList.map(function(item){  return(
          <Item 
          name={item.name} 
          description={item.description}
          image={item.image}
          price={item.price}
          item={item} 
          pinItem={()=>{store.pinItem(item.id)}}
          unpinItem ={()=>{store.unpinItem(item.id)}} 
          removeItem= {()=>{store.removeItem(item.id)}} />  )        
          })}
        </div>
      </div>
    </div>     

     
    )
  }
}

export default observer(App);

