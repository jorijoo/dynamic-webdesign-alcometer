export default Gender = () => {
    return (
        <div className="form-group row my-3">
        <div className="col-1">
            <label>{CONTENT.LABEL_GENDER}</label>
        </div>
        <div className="form-check col-1 form-check-inline">
            <label>{LOCAL_DEFAULTS.GENDER.FEMALE_GENDER} </label>
            <input type="radio" name="gender" className="form-check-input" value="female" onChange={e => { setGender(e.target.value) }} defaultChecked />
        </div>
        <div className="form-check col-1 form-check-inline">
            <label>{LOCAL_DEFAULTS.GENDER.MALE_GENDER}</label>
            <input type="radio" name="gender" className="form-check-input" value="male" onChange={e => { setGender(e.target.value) }} />
        </div>
    </div>
    )
}