
export const Title = ({ value, color, className }) => {
    return (
        <h3
            style={{color: color}}
            className={`text-lg font-bold ${className}`}
        >
            {value}
        </h3>
    );
}