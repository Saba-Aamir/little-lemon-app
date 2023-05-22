const Button = ({ text, onClick}) => {
    return (
        <button className="action-button" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;