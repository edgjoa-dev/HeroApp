import React from 'react'
import { HeroesList } from '../heros/HeroesList'

export const DcScreen = () => {
    return (
        <div>
            <h1>Dc</h1>
            <hr/> 

                <HeroesList publisher= 'DC Comics' />
            
        </div>
    )
}
