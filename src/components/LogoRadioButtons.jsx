import Input from "./Input"

function LogoRadioButtons({ formState, setFormState }) {

    function onChange(event) {
        let newState = { ...formState, logo: Number(event.target.value) }
        setFormState(newState)
    }

    return <ul>
        <li>
            <Input id="logo1" type="radio" name="logo" value="1" onChange={onChange}></Input>
            <label
                htmlFor="logo1"
            >1</label
            >
        </li>
        <li>

            <Input id="logo2" type="radio" name="logo" value="2" onChange={onChange}></Input>
            <label
                htmlFor="logo2"
            >2</label
            >
        </li>
        <li>
            <Input id="logo3" type="radio" name="logo" value="3" onChange={onChange}></Input>
            <label
                htmlFor="logo3"
            >3</label
            >
        </li>
        <li>

            <Input id="logo4" type="radio" name="logo" value="4" onChange={onChange}></Input>
            <label
                htmlFor="logo4"
            >4</label
            >
        </li>
    </ul>
}
export default LogoRadioButtons