import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form";

function Main({ formState, setFormState, initialForm }) {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answerLists, setAnswerList] = useState([])

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answersList={answerLists} />
      </section>
      <section className="main__form">
        {/* a form should be here */}
        <Form
          formState={formState}
          setFormState={setFormState}
          answerLists={answerLists}
          setAnswerList={setAnswerList}
          initialForm={initialForm} />
      </section>
    </main>
  );
}

export default Main;
