//  ALCOMETER
//  OAMK assignment
//
//  Copyright Jori Hiltunen 2023

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

    return (
        <div className='container'>
            <div className="container col-lg-6 col-sm-10">
                <form className="" onSubmit={(e) => {calculateAlco(e, weight, bottles, time, gender, setPromilles, setWeight)}}>
                    <h1>{CONTENT.HEADING}</h1>
                    <div className='form-group row my-3'>
                        <label htmlFor="form_weight" className='col'> {CONTENT.LABEL_WEIGHT}</label>
                        <div className='col-3'>
                            <input
                                type="text"
                                id="form_weight"
                                className="form-control"
                                maxLength={3}
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                                onFocus={(e) => e.target.select()}
                            />
                        </div>
                    </div>
                    <SelectLoop chooseHook={(bottles) => { setBottles(bottles) }} count={36} label={CONTENT.LABEL_BOTTLES} />
                    <SelectLoop chooseHook={(time) => { setTime(time) }} count={24} label={CONTENT.LABEL_TIME} />
                    <Gender chooseGender={(gender) => { setGender(gender) }} label={CONTENT.LABEL_GENDER} />
                    <div className='row my-3'>
                        <div className='col h3 text-center'>
                            <label htmlFor="form_output">{CONTENT.OUTCOME} </label>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <output id="form_output" className='col h1 text-center'>{promilles}</output>
                    </div>
                    <div className='form-group row my-3'>
                        <input type="submit" className='btn btn-primary py-3' value={CONTENT.CALCULATE} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default App;