import './Button.css';

const Button = ({ children, onClickHandler, disabled = false }) => {
  return (
    <button className='buttons' onClick={onClickHandler} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
