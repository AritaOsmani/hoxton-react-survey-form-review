import Input from "./Input"

function NameInput({ formState, setFormState }) {

    function onChange(event) {
        const newState = { ...formState, username: event.target.value }
        setFormState(newState)
    }


    return <label >
        Put your name here (if you feel like it):

        <Input name='username' type="text" onChange={onChange} ></Input>
    </label>
}
export default NameInput