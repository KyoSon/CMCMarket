import Button from './Button';
import Select from 'react-dropdown-select'
import React, { useContext } from 'react'
import { AppContext } from '../App';

const Header = ({ title }) => {
    const { showCheckOut, buttonToggle, changeCurrencyRate } = useContext(AppContext)

    const currencyRate = [
        { label: "USD", value: 1.00 },
        { label: "NZ", value: 1.55 },
        { label: "AUD", value: 1.41 }
    ]

    const seleted_option = { label: "USD", value: 1.00 }

    return (
        <>
            <div className='header'>
                <h1>{title}</h1>
            </div>
            <div>
                <h4>
                    <Select options={currencyRate} value={seleted_option} onChange={changeCurrencyRate} />
                    <Button className='btn' color={showCheckOut ? 'red' : 'green'} text={showCheckOut ? 'Order' : 'Go To Basket'} onClick={buttonToggle} /></h4>
            </div>

        </>
    )
}

Header.defaultProps = {
    title: 'Merchandises'
}

export default Header