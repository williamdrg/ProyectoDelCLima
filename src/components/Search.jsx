import { useState } from "react";


const Search = ({modeDark}) => {

    const [city, setCity] = useState('')
    
    const onSubmit = e => {
        // este método evita que se cargue la página
        e.prevenDefaul();
    }

    return (
        <div className="search">
            <form on onSubmit={onSubmit}>
                <div>
                    <input type="text" placeholder="Busca una ciudad" onChange={e=> setCity(e.setCity.value)} className="input" />
                    <button type="submit" className="btn__search">Buscar</button>
                </div>
            </form>
            
        </div>
    );
};

export default Search;