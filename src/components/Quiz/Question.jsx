import Answers from "./Answers";
import QuestionTimer from "./QuestionTImer";

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer
}) {
  return (
    <div id="question">
      <QuestionTimer
        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <p>{questionText}</p>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelectAnswer={onSelectAnswer}
      />
    </div>
  );
}
