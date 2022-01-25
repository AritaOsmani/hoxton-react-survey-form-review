import Input from "./Input"

function ColourRadioButtons({ formState, setFormState }) {

    function onChange(event) {
        let newState = { ...formState, colour: Number(event.target.value) }
        setFormState(newState)
    }

    return <ul>
        <li>
            <Input id="colour1" type="radio" name="colour" value="1" onChange={onChange}></Input>
            <label
                htmlFor="colour1"
            >1</label
            >
        </li>
        <li>

            <Input id="colour2" type="radio" name="colour" value="2" onChange={onChange}></Input>
            <label
                htmlFor="colour2"
            >2</label
            >
        </li>
        <li>

            <Input id="colour3" type="radio" name="colour" value="3" onChange={onChange}></Input>
            <label
                htmlFor="colour3"
            >3</label
            >
        </li>
        <li>

            <Input id="colour4" type="radio" name="colour" value="4" onChange={onChange}></Input>
            <label
                htmlFor="colour4"
            >4</label
            >
        </li>
    </ul>

}
export default ColourRadioButtons