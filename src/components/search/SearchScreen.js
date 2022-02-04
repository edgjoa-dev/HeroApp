import React, { useMemo } from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../../Hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heros/HeroCard';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const [FormValues, handleInputChange] = useForm({
        searchText: q,
    });

    const {searchText} = FormValues;

    const heroesFileted = useMemo(() => getHeroesByName(q), [q]) 
    
    



    const handleSearch = (e) => {   
        console.log(searchText);
        e.preventDefault();
        navigate(`?q=${searchText}`)
    };
    


    return (
        <div>
            <h1>Search</h1>
            <hr/>

            <div className="row" >

                <div className="col-5" >

                    <form  onSubmit={handleSearch}
                        className="m-3" >
                        <input 
                        type="text" 
                        placeholder="Search a Hero"
                        name='searchText'
                        autoComplete="off"
                        value={searchText}
                        onChange={handleInputChange}
                        className="row"
                        />

                        <button 
                        className="row btn btn-outline-primary mt-1 "
                        type="submit"
                        >
                            Buscar                        
                        </button>

                    </form>
                </div>

                <div className="col-7" >

                <h4>Resultados</h4> 
                <hr/>

                    {
                        (q === '')
                        ? <div className="alert alert-info">Buscar un Héroe</div>
                        : (heroesFileted.length === 0) && <div className="alert alert-danger">No se encontraron resultados de: {q}</div>
                    }

                    {
                        

                        heroesFileted.map( hero => (
                            <HeroCard 
                            key={hero.id}
                            {...hero}
                            />
                        ))

                    }
                </div>
            </div>
        </div>
    )
}
