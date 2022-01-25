import Input from "./Input"

function WorstFeaturesCheckbox({ formState, setFormState }) {
    const worstFeaturesNode = document.querySelectorAll('input[name = "worstFeatures"]')
    let worstFeaturesInput = [...worstFeaturesNode]

    function onChange(event) {
        let newState = [...formState.worstFeatures]
        if (worstFeaturesInput.length === 0) {
            worstFeaturesInput = [event.target.value]
            newState = worstFeaturesInput
            const updated = { ...formState, worstFeatures: newState }
            setFormState(updated)
        } else {
            worstFeaturesInput = worstFeaturesInput.filter(input => input.checked).map(input => input.value)
            newState = worstFeaturesInput
            const updated = { ...formState, worstFeatures: newState }
            setFormState(updated)
        }
    }


    return <ul>
        <li>
            <label >
                <Input name='worstFeatures' type='checkbox' value='colour' onChange={onChange}></Input>
                It's
                yellow!
            </label>
        </li>
        <li>
            <label >

                <Input name="worstFeatures" type="checkbox" value="sound" onChange={onChange}></Input>
                It
                squeaks!
            </label >
        </li>
        <li>
            <label >

                <Input name="worstFeatures" type="checkbox" value="logo" onChange={onChange}></Input>
                It has a
                logo!
            </label >
        </li>
        <li>
            <label>

                <Input name="worstFeatures" type="checkbox" value="size" onChange={onChange}></Input>
                Its big!
            </label>
        </li>
    </ul>
}
export default WorstFeaturesCheckbox