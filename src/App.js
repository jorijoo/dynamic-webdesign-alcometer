import CONTENT from './constants/en'
import LOCAL_DEFAULTS from './constants/en_defaults'
import Gender from './components/Gender'
import React, { useState } from 'react'

function App() {
    const [weight, setWeight] = useState(LOCAL_DEFAULTS.WEIGHT)
    const [bottles, setBottles] = useState(LOCAL_DEFAULTS.BOTTLES)
    const [time, setTime] = useState(LOCAL_DEFAULTS.TIME)
    const [promilles, setPromilles] = useState(0)
    const [gender, setGender] = useState(LOCAL_DEFAULTS.GENDER[0])

    const chooseGender = (gender) => {
        setGender(gender)
    }

    const numbers = new Array(24).fill(null).map((_,i) => i++);

    const calculate = (e) => {
        e.preventDefault()
        console.log(weight, bottles, time, promilles, gender)

        const litres = bottles * 0.33
        let grams = litres * 8 * 4.5
        const burning = weight / 10
        const gramsleft = grams - (burning * time)
        const genderModifier = (gender === "Female") ? 0.6 : 0.7
    
    
        const result = gramsleft / (weight * genderModifier)

        console.log(result)
        setPromilles(result)
    }

    return (
        <div>
            <h1>{CONTENT.HEADING}</h1>
            <form action="#" onSubmit={calculate}>
                <div>
                    <label>{CONTENT.LABEL_WEIGHT}</label>
                    <input type="text" className="form-control" value={weight} onChange={e => setWeight(e.target.value)} />
                </div>
                <div>
                    <label>{CONTENT.LABEL_BOTTLES} </label>
                    <select className="form-control" defaultValue="0" onChange={e => setBottles(e.target.value)}>
                    {
                        numbers.map(bottle => (
                            <option value={bottle} key={bottle}>{bottle}</option>
                        ))
                    }
                    </select>
                </div>
                <div>
                    <label>{CONTENT.LABEL_TIME} </label>
                    <select className="form-control" defaultValue="0" onChange={e => setTime(e.target.value)}>
                    {
                        numbers.map(hour => (
                            <option value={hour} key={hour}>{hour}</option>
                        ))
                    }
                    </select>
                </div>
                <Gender chooseGender={chooseGender} />
                <div>
                    <label>{CONTENT.OUTCOME} </label>
                    <output>{promilles}</output>
                </div>
                <div><input type="submit" value={CONTENT.CALCULATE} /></div>
            </form>
        </div>
    )
}

export default App;
