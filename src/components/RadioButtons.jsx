import Input from "./Input"

function RadioButtons({ formState, setFormState, name, options, question }) {

    function onChange(event) {
        // let newState = { ...formState, consistency: Number(event.target.value) }
        let newState = { ...formState }
        newState[`${name}`] = Number(event.target.value)
        setFormState(newState)
    }

    return <div className="form__group radio">
        <h3>{question}</h3>
        <ul>
            {options.map((option, index) => <li>

                <Input key={index} id={`${name}${option.value}`} type="radio" name={name} value={option.value} onChange={onChange}></Input>

                <label
                    htmlFor={`${name}${option.value}`}
                >{option.content}</label
                >
            </li>)}
        </ul>
    </div>
}
export default RadioButtons