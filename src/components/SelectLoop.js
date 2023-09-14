const SelectLoop = ({ chooseHook, count, label }) => {
    count = new Array(count + 1).fill(null).map((_, i) => i++);
    console.log(chooseHook)

    return (
        <div>
            <label htmlFor={'form_' + label}>{label} </label>
            <select className="form-control" id={'form_' + label} defaultValue="0" onChange={e => {console.log(e.target.value); chooseHook(e.target.value)}}>
                {
                    count.map((number, index) => (
                        <option value={number} key={index}>{number}</option>
                    ))
                }
            </select>
        </div >
    )
}

export default SelectLoop