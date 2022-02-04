import React, { useMemo } from 'react'
import { getElementByPublisher } from '../../selectors/getElementByPublisher'
import { HeroCard } from './HeroCard'

export const HeroesList = ({publisher}) => {


    const heroes = useMemo(() => getElementByPublisher(publisher),[publisher]);
    
    return (

        <div className="row rows-cols-sm-1 row-cols-md-2 row-cols-xl-4 g-2  animate__animated animate__fadeIn">

                {
                    heroes.map(hero =>(
                        <HeroCard 
                        key={hero.id} 
                        {...hero}
                        />
                    ))
                }
            
        </div>
    )
}
