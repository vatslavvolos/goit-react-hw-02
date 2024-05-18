import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import { useState, useEffect } from "react";

function App() {
  const [feedback, setfeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-Feedback");
    console.log(localStorage);
    if (savedFeedback !== null) {
      console.log(savedFeedback);
      return JSON.parse(savedFeedback);
    } else
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
  });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round((feedback.good / totalFeedback) * 100);
  const updateFeedback = (type) => {
    switch (type) {
      case "good":
        setfeedback({
          ...feedback,

          [type]: feedback.good + 1,
        });
        break;
      case "bad":
        setfeedback({
          ...feedback,

          [type]: feedback.bad + 1,
        });
        break;
      case "neutral":
        setfeedback({
          ...feedback,

          [type]: feedback.neutral + 1,
        });
        break;
      default:
        setfeedback({
          good: 0,
          neutral: 0,
          bad: 0,
        });
    }
  };
  useEffect(() => {
    window.localStorage.setItem("saved-Feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description></Description>
      <Options
        props={feedback}
        onUpdate={updateFeedback}
        total={totalFeedback}
      ></Options>
      <Feedback
        total={totalFeedback}
        props={feedback}
        callback={setfeedback}
        pos={positive}
      ></Feedback>
    </div>
  );
}

export default App;
