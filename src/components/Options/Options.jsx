import css from "../Options/Options.module.css";

const CustomButton = ({ children, callback, value }) => {
  return (
    <button value={value} onClick={() => callback(value)}>
      {children}
    </button>
  );
};

export default function Options({ onUpdate, total }) {
  if (total > 0) {
    return (
      <div className={css.btnMenu}>
        <CustomButton value="good" callback={onUpdate}>
          Good
        </CustomButton>
        <CustomButton value="bad" callback={onUpdate}>
          Bad
        </CustomButton>
        <CustomButton value="neutral" callback={onUpdate}>
          Neutral
        </CustomButton>
        <CustomButton value="reset" callback={onUpdate}>
          Reset
        </CustomButton>
      </div>
    );
  } else
    return (
      <div className={css.btnMenu}>
        <CustomButton value="good" callback={onUpdate}>
          Good
        </CustomButton>
        <CustomButton value="bad" callback={onUpdate}>
          Bad
        </CustomButton>
        <CustomButton value="neutral" callback={onUpdate}>
          Neutral
        </CustomButton>
      </div>
    );
}
