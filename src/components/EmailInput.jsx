import Input from "./Input"

function EmailInput({ formState, setFormState, question }) {

    function onChange(event) {
        const newState = { ...formState, email: event.target.value }
        setFormState(newState)
    }

    return <label>
        {question}
        <Input type="email"
            name="email"
            onChange={onChange}
        ></Input>
    </label >
}
export default EmailInput