import { Link } from "react-router-dom";
import { Button } from "../../Components/Button";
import {Header} from "../../Components/Header";

const Home = () =>{
    return(
        <>
            <Header />
            <Button title='Teste 1'/>
            <Button title='Teste 2' variant='Secondary'/>
            
            <Link to='/login' >Ir para login</Link>
        </>
    )
}

export {Home};