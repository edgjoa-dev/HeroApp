import React from 'react'
import { HeroesList } from '../heros/HeroesList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel</h1> <hr/>

                <HeroesList publisher={'Marvel Comics'} />

        </div>
    )
}
