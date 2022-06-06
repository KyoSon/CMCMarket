import { useState, useEffect, createContext } from "react"
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Merchandises from "./Component/Merchandises"
import Header from "./Component/Header";
import CheckOut from "./Component/CheckOut";
import ThankYou from "./Component/ThankYou";
import './App.css';

const axios = require('axios')

export const AppContext = createContext(null);

function App() {
  const [merchandises, setMerchandises] = useState([])
  const [baskets, setBaskets] = useState([])
  const [showCheckOut, SetshowCheckOut] = useState(false)
  const [totalMoney, setTotalMoney] = useState(0.0)
  const [currencyRate, setCurrentRate] = useState(1.0)
  let navigate = useNavigate();

  useEffect(() => {
    const getMerchandises = async () => {
      const dataFromServer = await fetchMerchandises()
      setMerchandises(dataFromServer)

      // the basket items to the user
      setBaskets(dataFromServer.map(m => m.Count !== 0 ? { ...m, Count: 0 } : m))
    }
    getMerchandises()
  }, [])

  const fetchMerchandises = async () => {
    const res = await fetch(process.env.REACT_APP_API + 'Merchandise')
    const data = await res.json()
    return data
  }

  const addToCounter = async (id) => {
    const newBaskets = baskets.map(m => m.Id === id ? { ...m, Count: m.Count + 1 } : m);
    setBaskets(newBaskets);

    if (showCheckOut) {
      const data = await fetchTotalMoney(newBaskets)
      setTotalMoney(data);
    }
  }

  const substractFromCounter = async (id) => {
    const newBaskets = baskets.map(m => m.Id === id && m.Count > 0 ? { ...m, Count: m.Count - 1 } : m);
    setBaskets(newBaskets)
    if (showCheckOut) {
      const data = await fetchTotalMoney(newBaskets)
      setTotalMoney(data);
    }
  }

  const fetchTotalMoney = async (newBaskets) => {
    const res = await fetch(process.env.REACT_APP_API + 'Merchandise', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newBaskets)
    })

    const data = await res.json()
    return data
  }

  const buttonToggle = async () => {
    // The checkout page will call a backend to calculate the total shipping cost
    if (!showCheckOut) {
      const newBaskets = baskets;
      const data = await fetchTotalMoney(newBaskets)
      setTotalMoney(data);
    } else {
      setBaskets(baskets.map(m => m.Count > 0 ? { ...m, Count: 0 } : m));
    }
    SetshowCheckOut(!showCheckOut)

    if (showCheckOut) {
      navigate('/thankyou')
    }
  }

  const changeCurrencyRate = async (selectedOption) => {
    setCurrentRate(selectedOption[0].value)
    const newBaskets = baskets.map(m => m.Count >= 0 ? { ...m, Rate: selectedOption[0].value } : m);
    setBaskets(newBaskets);

    if (showCheckOut) {
      const data = await fetchTotalMoney(newBaskets)
      setTotalMoney(data);
    }
  }

  return (
    <>
      <div className="container">
        <AppContext.Provider value={{ showCheckOut, buttonToggle, changeCurrencyRate, merchandises, substractFromCounter, addToCounter, currencyRate, baskets, totalMoney }}>
          <Routes>
            <Route path='/' element={
              <>
                <Header />
                {!showCheckOut && (merchandises.length > 0 ?
                  (<Merchandises />) : ("No Merchandises to show"))}
                {showCheckOut && (baskets.length > 0 ?
                  (<CheckOut />) : ("No Items to show in baskets"))}
              </>
            } />
            <Route path='/thankyou' element={<ThankYou />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
