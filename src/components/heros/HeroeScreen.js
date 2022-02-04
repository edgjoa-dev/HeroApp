import React, { useMemo } from 'react'
import {useParams, Navigate, useNavigate} from 'react-router-dom'
import { heroimg } from '../../helpers/heroImages';
import { getElementById } from '../../selectors/getElementById';





export const HeroeScreen = () => {


    const {heroeId} = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getElementById(heroeId),[heroeId]);
    
    if (!hero) {
        return <Navigate to='/' />
    }

    //const imagePath = `/assets/heroes/${hero.id}.jpg`;


    const handleReturn = ( ) => {
        navigate( -1 );
    };

    const {
        superhero,
        // publisher,
        // alter_ego,
        // first_appearance,
        // character,

    } = hero
    

    return (
        <div className='row mt-5 ' >
            <div className='col-2  animate__animated animate__backInLeft animate__pulse' >

                {/* <img src={imagePath} alt="{hero.superhero}" className='img-thumbnail' /> */}

                <img
                    src={ heroimg(`./${heroeId}.jpg`) }
                    alt={superhero}
                    className='img-thumbnail'
                />
            
            </div>

            <div className='col-8 animate__animated animate__fadeIn ' >
                <h3>{hero.superhero}</h3>
                <ul className='list-group '>
                    <li className='list-group-item'> <b>Alter Ego:</b>{hero.alter_ego}</li>
                    <li className='list-group-item'> <b>Publisher:</b>{hero.publisher}</li>
                    <li className='list-group-item'> <b>First Appearance:</b>{hero.first_appearance}</li>
                </ul>

                <h5 className="mt-5" >Characters</h5>
                <p>{ hero.characters }</p>

                <button 
                className="btn btn-outline-info"
                onClick={ handleReturn}
                >
                Return
                </button>

            </div>
        </div>
    )
}
