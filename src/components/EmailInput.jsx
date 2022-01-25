import Input from "./Input"

function EmailInput({ formState, setFormState }) {

    function onChange(event) {
        const newState = { ...formState, email: event.target.value }
        setFormState(newState)
    }

    return <label>
        Leave us your email pretty please??
        <Input type="email"
            name="email"
            onChange={onChange}
        ></Input>
    </label >
}
export default EmailInput