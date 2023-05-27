const Button = ({ text, onClick, type, style }) => {
    return (
        <button className="action-button" onClick={onClick} type={type} style={style}>
            {text}
        </button>
    );
}

export default Button;