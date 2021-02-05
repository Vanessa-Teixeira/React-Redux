import react from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
    const statetitulo = useSelector((state) => state.tituloReducer.titulo);

    return (
    
  
        
        <div className="bg-success text-center">
        
        
        < h1 > { statetitulo } </h1>  
        
        
         </div >
         
    )
}
export default Menu;