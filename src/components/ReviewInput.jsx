import TextArea from "./TextArea"

function ReviewInput({ formState, setFormState, question }) {

    function onChange(event) {
        const newState = { ...formState, review: event.target.value }
        setFormState(newState)
    }

    return <label
    >{question}

        <TextArea name='review' cols={30} rows={10} onChange={onChange}></TextArea>
    </label >
}
export default ReviewInput