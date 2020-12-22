import { useState } from "react"

function Home(){
    return <div>
                <h3>Home - Analyticsgit</h3>
               <Contador />
                
            </div>
        }

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador () {
        setContador(contador + 1);
    }
    return(
        <div>
            <div>{Contador}</div>
            <button onClick={adicionarContador}>adicionarContador</button>
        </div>
    )
}

export default Home