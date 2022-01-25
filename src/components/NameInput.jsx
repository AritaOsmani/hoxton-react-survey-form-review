import Input from "./Input"

function NameInput({ formState, setFormState, question }) {

    function onChange(event) {
        const newState = { ...formState, username: event.target.value }
        setFormState(newState)
    }


    return <label >
        {question}

        <Input name='username' type="text" onChange={onChange} ></Input>
    </label>
}
export default NameInput