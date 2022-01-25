import Input from "./Input"

function RadioButtons({ formState, setFormState, name }) {

    function onChange(event) {
        // let newState = { ...formState, consistency: Number(event.target.value) }
        let newState = { ...formState }
        newState[`${name}`] = Number(event.target.value)
        setFormState(newState)
    }

    return <ul>
        <li>

            <Input id={`${name}1`} type="radio" name={name} value="1" onChange={onChange}></Input>

            <label
                htmlFor={`${name}1`}
            >1</label
            >
        </li>
        <li>
            <Input id={`${name}2`} type="radio" name={name} value="2" onChange={onChange}></Input>
            <label
                htmlFor={`${name}2`}
            >2</label
            >
        </li>
        <li>
            <Input id={`${name}3`} type="radio" name={name} value="3" onChange={onChange}></Input>
            <label
                htmlFor={`${name}3`}
            >3</label
            >
        </li>
        <li>
            <Input id={`${name}4`} type="radio" name={name} value="4" onChange={onChange}></Input>
            <label
                htmlFor={`${name}4`}
            >4</label
            >
        </li>
    </ul>
}
export default RadioButtons