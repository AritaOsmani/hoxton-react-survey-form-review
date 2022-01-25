import Input from "./Input"

function BestFeaturesCheckbox({ formState, setFormState }) {

    const bestFeaturesNode = document.querySelectorAll('input[name ="bestFeatures"]')
    let bestFeaturesInput = [...bestFeaturesNode]

    function onChange(event) {
        let newState = [...formState.bestFeatures]
        if (bestFeaturesInput.length === 0) {

            bestFeaturesInput = [event.target.value]
            newState = bestFeaturesInput
            const updated = { ...formState, bestFeatures: newState }
            setFormState(updated)
        } else {
            bestFeaturesInput = bestFeaturesInput.filter(input => input.checked).map(input => input.value)
            newState = bestFeaturesInput
            const updated = { ...formState, bestFeatures: newState }
            setFormState(updated)

        }
    }

    return <ul>
        <li>
            <label>
                <Input type='checkbox' name='bestFeatures' value='colour' onChange={onChange}></Input>
                It's
                yellow!
            </label>
        </li>
        <li>
            <label>
                <Input type='checkbox' name='bestFeatures' value='sound' onChange={onChange}></Input>
                It
                squeaks!
            </label>
        </li>
        <li>
            <label>
                <Input type='checkbox' name='bestFeatures' value='logo' onChange={onChange}></Input>
                It has a
                logo!
            </label>
        </li>
        <li>
            <label  >
                <Input type='checkbox' name='bestFeatures' value='size' onChange={onChange}></Input>
                Its big!
            </label>
        </li>
    </ul>

}
export default BestFeaturesCheckbox