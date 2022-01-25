import Input from "./Input"

function Checkboxes({ formState, setFormState, name, options, question }) {

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
    return <div className="form__group">

        <h3>{question}</h3>
        <ul>
            {options.map((option, index) => <label>
                <Input key={index} type='checkbox' name={name} value={option.value} onChange={onChange}></Input>
                {option.content}
            </label>)}

        </ul>
    </div>
}
export default Checkboxes