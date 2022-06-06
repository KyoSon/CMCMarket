import Merchandise from './Merchandise'
import React, { useContext } from 'react'
import { AppContext } from '../App';

const Merchandises = () => {
    const { merchandises, substractFromCounter, addToCounter, showCheckOut, currencyRate } = useContext(AppContext)
    return (
        <>
            {merchandises.map((merchandise, index) => (
                merchandise.Count > 0 ?
                    < Merchandise data-testid='merchandise1' key={index}
                        merchandise={merchandise}
                    ></Merchandise> : ''
            ))}
        </>
    )
}
export default Merchandises