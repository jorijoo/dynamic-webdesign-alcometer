//  SELECT LOOP
//
//  Copyright Jori Hiltunen 2023
//

/**
 * Return a <select> with {count} number of <option> tags
 * @param {function} chooseHook     React callback handler
 * @param {number} count            Number of <option> tags
 * @param {string} label            Label for <select>
 * @returns {React.Component}       Labeled <select> filled with numbers and callbacks
 */

const SelectLoop = ({ chooseHook, count, label }) => {
    count = new Array(count + 1).fill(null).map((_, i) => i++);

    return (
        <div className="form-group row my-3">
            <div className="col">
                <label htmlFor={'form_' + label}>{label} </label>

            </div>
            <div className="col-3">
                <select className="form-control" id={'form_' + label} defaultValue="0" onChange={e => { chooseHook(e.target.value) }}>

                    {
                        count.map((number, index) => (
                            <option value={number} key={index}>{number}</option>
                        ))
                    }
                </select>
            </div>
        </div >
    )
}

export default SelectLoop