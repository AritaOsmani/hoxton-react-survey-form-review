import Input from "./Input"

function TimeSpentCheckboxes({ formState, setFormState }) {

    const timeSpentNode = document.querySelectorAll('input[name="timeSpent"]')
    let timeSpentInput = [...timeSpentNode]

    function onChange(event) {
        let newState = [...formState.timeSpent]
        if (timeSpentInput.length === 0) {
            timeSpentInput = [event.target.value]
            newState = timeSpentInput
            const updated = { ...formState, timeSpent: newState }
            setFormState(updated)
        } else {
            timeSpentInput = timeSpentInput.filter(input => input.checked).map(input => input.value)
            newState = timeSpentInput
            const updated = { ...formState, timeSpent: newState }
            setFormState(updated)
        }
    }

    return <ul>
        <li>
            <label >
                <Input name="timeSpent" type="checkbox" value="swimming" onChange={onChange}></Input>
                Swimming
            </label>
        </li>
        <li>
            <label >
                <Input name="timeSpent" type="checkbox" value="bathing" onChange={onChange}></Input>
                Bathing
            </label>
        </li>
        <li>
            <label >
                <Input name="timeSpent" type="checkbox" value="chatting" onChange={onChange}></Input>
                Chatting
            </label >
        </li>
        <li>
            <label >
                <Input name="timeSpent" type="checkbox" value="noTime" onChange={onChange}></Input>
                I don't like to spend time with it

            </label >
        </li>
    </ul>
}
export default TimeSpentCheckboxes