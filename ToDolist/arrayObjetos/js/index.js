import { Tasks} from "./dataSource.js"



[Tasks].map( ({notCompleted}) =>{
     
    notCompleted.forEach( item =>   console.log(item) )      
    
});




console.log(Tasks);