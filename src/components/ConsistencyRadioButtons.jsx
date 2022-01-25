import Input from "./Input"

function ConsistencyRadiobuttons({ formState, setFormState }) {

    function onChange(event) {
        let newState = { ...formState, consistency: Number(event.target.value) }
        setFormState(newState)
    }

    return <ul>
        <li>

            <Input id="consistency1" type="radio" name="consistency" value="1" onChange={onChange}></Input>

            <label
                htmlFor="consistency1"
            >1</label
            >
        </li>
        <li>
            <Input id="consistency2" type="radio" name="consistency" value="2" onChange={onChange}></Input>
            <label
                htmlFor="consistency2"
            >2</label
            >
        </li>
        <li>
            <Input id="consistency3" type="radio" name="consistency" value="3" onChange={onChange}></Input>
            <label
                htmlFor="consistency3"
            >3</label
            >
        </li>
        <li>
            <Input id="consistency4" type="radio" name="consistency" value="4" onChange={onChange}></Input>
            <label
                htmlFor="consistency4"
            >4</label
            >
        </li>
    </ul>

}
export default ConsistencyRadiobuttons