import CONTENT from '../constants/en'
import LOCAL_DEFAULTS from '../constants/en_defaults'

const Gender = ({ chooseGender }) => {

    return (
        <div className="form-group row my-3">
            <div className="col-1">
                <label>{CONTENT.LABEL_GENDER}</label>
            </div>
            {
                LOCAL_DEFAULTS.GENDER.map((gender, index) => (
                    <div className="form-check col-1 form-check-inline" key={index}>
                        <label>{gender}</label>
                        <input type="radio" 
                        name="gender" 
                        className="form-check-input" 
                        value={gender} 
                            onChange={e => { chooseGender(gender) }} 
                            defaultChecked={index === 0} />
                    </div>
                ))
            }
        </div>
    )
}

export default Gender