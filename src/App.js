import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './components/menu';

function App() {
    // formularios
    const [inputfrutas, setinputfrutas] = React.useState("");
    const [inputTitulo, setInputTitulo] = React.useState("");
    //Redux
    const frutas = useSelector((state) => state.frutasReducer.frutas);
    const statetitulo = useSelector((state) => state.tituloReducer.titulo);

    const dispatch = useDispatch();

    function adicionarfruta(event) {
        event.preventDefault();

        const objfrutas = {
            nome: inputfrutas
        }

        dispatch({ type: "ADICIONAR", value: objfrutas });

    }

    function alterarTitulo(event) {
        setInputTitulo(event.target.value);


        dispatch({ type: "ALTERAR", value: event.target.value });

    }

    return (

        <
        div className = "bg-secondary text-center" >

        < Menu / >
        < form >
        <label > Titulo </label> 

        < input placeholder = "Digite o Tilulo"
        value = { inputTitulo }
        onChange = { alterarTitulo } />

        </form>  

        < h1 > { statetitulo } </h1>

        <form onSubmit = { adicionarfruta } >

        < input placeholder = "Digite uma fruta..."
        value = { inputfrutas }
        onChange = {
            (event) => setinputfrutas(event.target.value)
        }
        /> 

        <button > Enviar </button>

        </form>


        {
            frutas.map((frutas) => {
                return (

                    <li > { frutas.nome } </li>
                )
            })
        }

        </div>

    );
}

export default App;