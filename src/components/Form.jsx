
import Checkboxes from "./Checkboxes";
import EmailInput from "./EmailInput";
import NameInput from "./NameInput";
import RadioButtons from "./RadioButtons";
import ReviewInput from "./ReviewInput";

function Form({ formState, setFormState, answerLists, setAnswerList, initialForm }) {

    const formQuestions = [
        {
            question: 'What would you say that are the best features of your rubber duck?',
            formState: formState,
            setFormState: setFormState,
            name: 'bestFeatures',
            type: 'checkboxes',
            options: [
                { content: ` It's yellow!`, value: 'colour' },
                { content: `It  squeaks!`, value: 'sound' },
                { content: `  It has a logo!`, value: 'logo' },
                { content: `Its big!`, value: 'size' }
            ]
        },
        {
            question: 'What would you say that are the worst bits of your rubber duck?',
            formState: formState,
            setFormState: setFormState,
            name: 'worstFeatures',
            type: 'checkboxes',
            options: [
                { content: ` It's yellow!`, value: 'colour' },
                { content: `It  squeaks!`, value: 'sound' },
                { content: `  It has a logo!`, value: 'logo' },
                { content: `Its big!`, value: 'size' }
            ]
        },
        {
            question: 'How do you rate your rubber duck consistency?',
            formState: formState,
            setFormState: setFormState,
            name: 'consistency',
            type: 'radioButtons',
            options: [
                { content: '1', value: 1 },
                { content: '2', value: 2 },
                { content: '3', value: 3 },
                { content: '4', value: 4 }
            ]
        },
        {
            question: 'How do you rate your rubber duck colour?',
            formState: formState,
            setFormState: setFormState,
            name: 'colour',
            type: 'radioButtons',
            options: [
                { content: '1', value: 1 },
                { content: '2', value: 2 },
                { content: '3', value: 3 },
                { content: '4', value: 4 }
            ]
        },
        {
            question: 'How do you rate your rubber duck logo?',
            formState: formState,
            setFormState: setFormState,
            name: 'logo',
            type: 'radioButtons',
            options: [
                { content: '1', value: 1 },
                { content: '2', value: 2 },
                { content: '3', value: 3 },
                { content: '4', value: 4 }
            ]
        },
        {
            question: 'How do you like to spend time with your rubber duck?',
            formState: formState,
            setFormState: setFormState,
            name: 'timeSpent',
            type: 'checkboxes',
            options: [
                { content: ` Swimming`, value: 'swimming' },
                { content: `Bathing!`, value: 'bathing' },
                { content: `Chatting`, value: 'chatting' },
                { content: `I don't like to spend time with it`, value: 'noTime' }
            ]
        },
        {
            formState: formState,
            setFormState: setFormState,
            question: 'What else have you got to say about your rubber duck?',
            type: 'reviewInput'
        },
        {
            formState: formState,
            setFormState: setFormState,
            question: 'Put your name here (if you feel like it):',
            type: 'nameInput'
        },
        {
            formState: formState,
            setFormState: setFormState,
            question: 'Leave us your email pretty please??',
            type: 'emailInput'
        }

    ]

    const formTypes = {
        checkboxes: Checkboxes,
        radioButtons: RadioButtons,
        reviewInput: ReviewInput,
        nameInput: NameInput,
        emailInput: EmailInput
    }

    function handleSubmit(event) {
        if (formState === initialForm) return
        event.preventDefault()
        const newAnswerList = [...answerLists]
        newAnswerList.push(formState)
        setAnswerList(newAnswerList)
        setFormState(initialForm)
        event.target.reset();

    }
    return <form className="form" onSubmit={handleSubmit}>

        <h2>Tell us what you think about your rubber duck!</h2>
        {formQuestions.map(formQuestion => {
            const Component = formTypes[formQuestion.type]
            return <Component {...formQuestion} />
        })}

        <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>

}
export default Form