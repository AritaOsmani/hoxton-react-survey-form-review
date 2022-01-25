
import Checkboxes from "./Checkboxes";
import EmailInput from "./EmailInput";
import NameInput from "./NameInput";
import RadioButtons from "./RadioButtons";
import ReviewInput from "./ReviewInput";


function Form({ formState, setFormState, answerLists, setAnswerList, initialForm }) {

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

        <div className="form__group">

            <h3>What would you say that are the best features of your rubber duck?</h3>


            <Checkboxes
                formState={formState}
                setFormState={setFormState}
                name='bestFeatures'
                options={[
                    { content: ` It's yellow!`, value: 'colour' },
                    { content: `It  squeaks!`, value: 'sound' },
                    { content: `  It has a logo!`, value: 'logo' },
                    { content: `Its big!`, value: 'size' }
                ]}
            />
        </div>

        <div className="form__group">
            <h3>What would you say that are the worst bits of your rubber duck?</h3>


            <Checkboxes
                formState={formState}
                setFormState={setFormState}
                name='worstFeatures'
                options={[
                    { content: ` It's yellow!`, value: 'colour' },
                    { content: `It  squeaks!`, value: 'sound' },
                    { content: `  It has a logo!`, value: 'logo' },
                    { content: `Its big!`, value: 'size' }
                ]}
            />
        </div>

        <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>


            <RadioButtons
                formState={formState}
                setFormState={setFormState}
                name='consistency'
                options={[
                    { content: '1', value: 1 },
                    { content: '2', value: 2 },
                    { content: '3', value: 3 },
                    { content: '4', value: 4 }
                ]}
            />
        </div>

        <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>


            <RadioButtons
                formState={formState}
                setFormState={setFormState}
                name='colour'
                options={[
                    { content: '1', value: 1 },
                    { content: '2', value: 2 },
                    { content: '3', value: 3 },
                    { content: '4', value: 4 }
                ]}
            />

        </div>

        <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>


            <RadioButtons
                formState={formState}
                setFormState={setFormState}
                name='logo'
                options={[
                    { content: '1', value: 1 },
                    { content: '2', value: 2 },
                    { content: '3', value: 3 },
                    { content: '4', value: 4 }
                ]}
            />
        </div>

        <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>


            <Checkboxes
                formState={formState}
                setFormState={setFormState}
                name='timeSpent'
                options={[
                    { content: ` Swimming`, value: 'swimming' },
                    { content: `Bathing!`, value: 'bathing' },
                    { content: `Chatting`, value: 'chatting' },
                    { content: `I don't like to spend time with it`, value: 'noTime' }
                ]}
            />
        </div>

        <ReviewInput formState={formState} setFormState={setFormState} />
        <NameInput formState={formState} setFormState={setFormState} />
        <EmailInput formState={formState} setFormState={setFormState} />

        <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>

}
export default Form