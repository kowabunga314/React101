
export const Title = ({ value, className }) => {
    return (
        <h3
            className={`text-lg font-bold text-orange-200 ${className}`}
        >
            {value}
        </h3>
    );
}