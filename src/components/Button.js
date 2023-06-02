const Button = ({ text, onClick, type, style, disabled = false }) => {
    return (
        <button className="action-button" onClick={onClick} type={type} style={style} disabled={disabled}>
            {text}
        </button>
    );
}

export default Button;