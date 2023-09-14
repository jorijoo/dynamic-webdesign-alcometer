import LOCAL_DEFAULTS from '../constants/en_defaults'

const Gender = ({ chooseGender, label }) => {
    console.log(chooseGender)

    return (
        <div className="form-group row my-3">
            <div className="col-1">{label}</div>
            {
                LOCAL_DEFAULTS.GENDER.map((gender, index) => (
                    <div className="form-check col-1 form-check-inline" key={index}>
                        <label htmlFor={'form_' + gender}>{gender}</label>
                        <input id={'form_' + gender} type="radio"
                            name="gender"
                            className="form-check-input"
                            value={gender}
                            onChange={e => { chooseGender(gender) }}
                            defaultChecked={index === 0}
                        />
                    </div>
                ))
            }
        </div >
    )
}

export default Gender