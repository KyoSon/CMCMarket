import Merchandise from './Merchandise'
import React, { useContext } from 'react'
import { AppContext } from '../App';


const CheckOut = () => {
    const { baskets, substractFromCounter, addToCounter, showCheckOut, totalMoney, currencyRate } = useContext(AppContext)
    const totalValue = baskets.filter((basket) => basket.Count > 0).length > 0 ? (Number(totalMoney).toFixed(2)) : 0.00;

    return (
        <>
            {baskets.map((basket, index) => (
                basket.Count > 0 ?
                    < Merchandise data-testid='merchandise' key={index}
                        merchandise={basket}
                    ></Merchandise> : ''
            ))}

            <h4 data-testid='totalMoney'>TotalMoney: {totalValue}$</h4>
        </>
    )
}

export default CheckOut