import { observable, action, makeAutoObservable, computed} from "mobx"; 

class Store {
    
    constructor(){
        makeAutoObservable(this,{
            items: observable, 
            setItem: action, 
            addItem: action, 
            removeItem: action,
            pinItem: action,
            unpinItem: action,
            search: action,
            sortedList: computed          
        })     
          
    }
    
    items = [
        {id: 0, pinned: false, name: "8K 2020", description: "lifestyle", price: 100, image: "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/229bfefccc8d49b88277aba2011de53d_9366/Krossovki_8K_2020_chernyj_FW0997_01_standard.jpg" },
        {id: 1, pinned: false, name: "Ultra Boost", description: "running", price: 180, image: "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/b7662322c24f4dc18f1baba301598b58_9366/Krossovki_Streetball_Bordovyj_FV4851_01_standard.jpg"}, 
        {id: 2, pinned: false, name: "NMD_R1", description: "originals", price: 140, image: "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/459ff194c35e45ea91b1a8ba00fc4876_9366/NMD_R1_Shoes_Black_B42200_01_standard.jpg"}
    ]  
  
    setItem(payload){
        this.items.replace(payload); 
    }
    
    get sortedList(){
     const items = this.items
     .slice()
     .sort((a,b)=>(a.pinned===b.pinned ? 0: a.pinned? 1:-1))
     .reverse()  
     return items     
    }
    
    search(string){
        const items = this.items
        .slice()
        .sort((item)=>(item.name.includes(string)||item.description.includes(string)))
        this.setItem(items);
    }

    addItem(name,description,price,image){
        let items = this.items; 
        items.push({
            id: items.length, 
            name: name, 
            description: description, 
            price: price,
            image: image
        })
        this.setItem(items); 
        
    }

    pinItem(id){
        let items = this.items;
        const index = items.map(task=>task.id).indexOf(id); 
        if(this.items.filter(item=>item.pinned).length===0){
            items[index].pinned = true; 
            this.setItem(items);
            console.log("pinned"+items[index].id)
        } else {
            alert("You can pin just one item")
        }
    }

    unpinItem(id){
        let items = this.items; 
        const index = items.map(task=>task.id).indexOf(id);
        items[index].pinned = false; 
        this.setItem(items);
    }

    removeItem(id){
        this.setItem(this.items.filter(item=>item.id !==id));
    }
}




export default new Store(); 