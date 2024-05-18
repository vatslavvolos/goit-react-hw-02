/* eslint-disable react/prop-types */
import css from "./Feedback.module.css";
function Feedback({ props, total, pos }) {
  if (total <= 0) {
    return (
      <div>
        <p>No Feedback jet</p>
      </div>
    );
  } else
    return (
      <div className={css.fdSyle}>
        <p className={css.desc}>Good: {props.good}</p>
        <p className={css.desc}>Neutral: {props.neutral}</p>
        <p className={css.desc}>Bad: {props.bad}</p>
        <p className={css.desc}>Total: {total}</p>
        <p className={css.desc}>Positive: {pos}%</p>
      </div>
    );
}
export default Feedback;
