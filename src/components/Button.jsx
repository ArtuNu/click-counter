import '../styles/button.css';

export default function Button({ text, isClickButton, clickHandle }) {
  return (
    <button className={isClickButton ? "click-button" : "restart-button"} onClick={clickHandle}>
      {text}
    </button>
  );
}
