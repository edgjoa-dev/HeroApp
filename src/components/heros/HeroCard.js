import React from 'react'
import {Link} from 'react-router-dom'
import { heroimg } from '../../helpers/heroImages';


export const HeroCard = ({

    id, 
    superhero,
    alter_ego,
    first_appearance,
    characters

}) => {

    const imgPath = `/assets/heroes/${id}.jpg`;

    return (


        <div className="col" >

            <div className="card">
                
                <div className="row no-gutters">
                    <div className="col-4" >
                        <img src={heroimg(`./${id}.jpg`)} alt={superhero} className="card-img-top" />
                    </div>

                    <div className="col-8" >
                        <h5 className="card-title" >{superhero}</h5>
                        <p className="card-text" >{alter_ego}</p>

                        {
                            (alter_ego !== characters) && <p className="text-muted">{characters}</p>
                        }
                        
                        <p className="card-text" >
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        
                        <Link to={`/hero/${id}`} className="text-info" > Más... </Link>

                    </div>
                </div>

            </div>
        
        </div>
    )


}
