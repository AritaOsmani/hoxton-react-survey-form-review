import Input from "./Input"

function Checkboxes({ formState, setFormState, name, options }) {

    const bestFeaturesNode = document.querySelectorAll(`input[name =${name}]`)
    let bestFeaturesInput = [...bestFeaturesNode]

    function onChange(event) {
        let newState = [...formState[`${name}`]]

        if (bestFeaturesInput.length === 0) {

            bestFeaturesInput = [event.target.value]
            newState = bestFeaturesInput
            // const updated = { ...formState, bestFeatures: newState }
            const updated = { ...formState }
            updated[`${name}`] = newState
            setFormState(updated)
        } else {
            bestFeaturesInput = bestFeaturesInput.filter(input => input.checked).map(input => input.value)
            newState = bestFeaturesInput
            // const updated = { ...formState, bestFeatures: newState }
            const updated = { ...formState }
            updated[`${name}`] = newState
            setFormState(updated)

        }
    }
    return <ul>
        {options.map((option, index) => <label>
            <Input key={index} type='checkbox' name={name} value={option.value} onChange={onChange}></Input>
            {option.content}
        </label>)}

    </ul>
}
export default Checkboxes