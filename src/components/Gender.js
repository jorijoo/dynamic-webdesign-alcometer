//  GENDER OPTIONS LOOPER
//
//  Copyright Jori Hiltunen 2023
//

import LOCAL_DEFAULTS from '../constants/en_defaults'


/**
 * Return a labeled group of radio buttons
 * @param {function} chooseGender   React callback handler
 * @param {string} label            Label for radio buttons
 * @returns {React.Component}       Labeled radio buttons generated from LOCAL_DEFAULTS.GENDER[]
 */

const Gender = ({ chooseGender, label }) => {

    return (
        <div className="form-group row">
            <div className="col">{label}</div>
            <div className='col text-end px-1'>
                {
                    LOCAL_DEFAULTS.GENDER.map((gender, index) => (
                            <div className="form-check form-check-inline m-0 p-0 text-end" key={index}>
                                <input
                                    className="btn-check"
                                    id={'form_' + gender}
                                    type="radio"
                                    name="gender"
                                    value={gender}
                                    key={index}
                                    autoComplete="off"
                                    onChange={e => { chooseGender(gender) }}
                                    defaultChecked={index === 0}
                                />
                                <label className='btn btn-outline-primary mx-2' htmlFor={'form_' + gender}>{gender}</label>
                            </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Gender