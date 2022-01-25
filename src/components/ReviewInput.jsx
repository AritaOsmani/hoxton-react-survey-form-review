import TextArea from "./TextArea"

function ReviewInput({ formState, setFormState }) {

    function onChange(event) {
        const newState = { ...formState, review: event.target.value }
        setFormState(newState)
    }

    return <label
    >What else have you got to say about your rubber duck?

        <TextArea name='review' cols={30} rows={10} onChange={onChange}></TextArea>
    </label >
}
export default ReviewInput