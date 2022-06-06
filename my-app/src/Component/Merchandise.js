import React, { useState, useContext } from 'react'
import { AppContext } from '../App';

const Merchandise = ({ merchandise }) => {
    const { substractFromCounter, addToCounter, showCheckOut, currencyRate } = useContext(AppContext)

    // keep selected number of merchandise in basket
    let countCK = 0;
    if (showCheckOut) {
        countCK = merchandise.Count
    }
    const [count, setCount] = useState(countCK)

    const addToInput = async (id) => {

        if (count >= 5) {
            alert("There is no stock available.")
        } else {
            setCount(count + 1)
            await addToCounter(merchandise.Id)
        }
    }

    const substractFromInput = (id) => {
        if (count <= 0) {
            alert("You have not selected any stock.")
        } else {
            setCount(count - 1)
            substractFromCounter(merchandise.Id)
        }
    }

    return (
        <div>
            <h3>
                <label className='label-width'>{merchandise.Name}</label>
            </h3>
            <h4>
                <button data-testid='substractFromInput' className='float:left;' onClick={substractFromInput}>-</button>
                <input data-testid='inputValue' className='text-center' type="number" value={count} readOnly

                />
                <button data-testid='addToInput' className='float:right;' onClick={addToInput}>+</button>
            </h4>
            <p>
                {Number((merchandise.Price * currencyRate)).toFixed(2)}$
            </p>
        </div>
    )
}

Merchandise.defaultProps = {
    showCheckOut: false
}

export default Merchandise

