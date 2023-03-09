import { useState } from "react";
import axios from "axios";


const Search = ({data}) => {

    const [city, setCity] = useState('')
    
    const onSubmit = e => {
        // este método evita que se cargue la página
        e.preventDefault();
    }

    const functionSearchCity = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3fb11a0079cd98b2e305f5727e30d0a1&units=metric`)
            .then(reps => data(reps.data))
            .catch(error => console.error(error))
    }

    return (
        <div className="search">
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" placeholder="Busca una ciudad" onChange={e => setCity(e.target.value)} value={city} className="input" />
                    <button type="submit" className="btn__search" onClick={functionSearchCity}>Buscar</button>
                </div>
            </form> 
            
        </div>
    );
};

export default Search;