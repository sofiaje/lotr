const radioOptionsGender = (handleOnChange, setGender) => {
    const array = [
        {value: "all", id: "allgenders"},
        {value: "male", id: "male"},
        {value: "female", id: "female"},
    ]

    const radioOption = array?.map((option, i) => {
        return (
            <label key={i} htmlFor={option.id}>
                <input type="radio" name="gender" className="accent-black" id={option.id} value={option.value} onChange={(e) => { handleOnChange(e, setGender) }} />
                <span className="px-1">{option.value}</span>
            </label>
        )
    })

    return radioOption
}

export default radioOptionsGender;