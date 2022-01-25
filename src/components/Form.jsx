import BestFeaturesCheckbox from "./BestFeaturesCheckbox"
import ColourRadioButtons from "./ColourRadioButtons";
import ConsistencyRadiobuttons from "./ConsistencyRadioButtons";
import EmailInput from "./EmailInput";
import LogoRadioButtons from "./LogoRadioButtons";
import NameInput from "./NameInput";
import ReviewInput from "./ReviewInput";
import TimeSpentCheckboxes from "./TimeSpentCheckboxes";
import WorstFeaturesCheckbox from "./WorstFeaturesCheckbox";

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

            <BestFeaturesCheckbox formState={formState} setFormState={setFormState} />
        </div>

        <div className="form__group">
            <h3>What would you say that are the worst bits of your rubber duck?</h3>

            <WorstFeaturesCheckbox formState={formState} setFormState={setFormState} />
        </div>

        <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>

            <ConsistencyRadiobuttons formState={formState} setFormState={setFormState} />
        </div>

        <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>

            <ColourRadioButtons formState={formState} setFormState={setFormState} />
        </div>

        <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>

            <LogoRadioButtons formState={formState} setFormState={setFormState} />
        </div>

        <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>

            <TimeSpentCheckboxes formState={formState} setFormState={setFormState} />
        </div>

        <ReviewInput formState={formState} setFormState={setFormState} />
        <NameInput formState={formState} setFormState={setFormState} />
        <EmailInput formState={formState} setFormState={setFormState} />

        <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>

}
export default Form