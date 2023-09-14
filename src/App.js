import CONTENT from './constants/en'
import LOCAL_DEFAULTS from './constants/en_defaults'
import Gender from './components/Gender'
import SelectLoop from './components/SelectLoop'
import calculateAlco from './utilities/calculateAlco'
import React, { useState } from 'react'

function App() {
    const [weight, setWeight] = useState(LOCAL_DEFAULTS.WEIGHT)
    const [bottles, setBottles] = useState(LOCAL_DEFAULTS.BOTTLES)
    const [time, setTime] = useState(LOCAL_DEFAULTS.TIME)
    const [promilles, setPromilles] = useState((0).toFixed(2))
    const [gender, setGender] = useState(LOCAL_DEFAULTS.GENDER[0])

    console.log(LOCAL_DEFAULTS.BOTTLES, bottles, LOCAL_DEFAULTS.TIME, time, LOCAL_DEFAULTS.GENDER[0], gender)

    return (
        <div>
            <h1>{CONTENT.HEADING}</h1>
            <form action="#" onSubmit={(e) => { e.preventDefault(); calculateAlco(weight, bottles, time, gender, setPromilles) }}>
                <div>
                    <label htmlFor="form_weight"> {CONTENT.LABEL_WEIGHT}</label>
                    <input type="text" id="form_weight" className="form-control" value={weight} onChange={e => setWeight(e.target.value)} />
                </div>
                <SelectLoop chooseHook={(bottles) => { setBottles(bottles) }} count={36} label={CONTENT.LABEL_BOTTLES}/>
                <SelectLoop chooseHook={(time) => { setTime(time) }} count={24} label={CONTENT.LABEL_TIME}/>
                <Gender chooseGender={(gender) => { setGender(gender) }} label={CONTENT.LABEL_GENDER} />
                <div>
                    <label htmlFor="form_output">{CONTENT.OUTCOME} </label>
                    <output id="form_output">{promilles}</output>
                </div>
                <div><input type="submit" value={CONTENT.CALCULATE} /></div>
            </form>
        </div>
    )
}

export default App;