
export const Input = ({ onChange, value, className, label, placeholder, isWrong }) => {
    return (
        <div className={className}>
            <label style={{ display: 'block', color: isWrong ? 'red' : 'blue' }}>{label}</label>
            <input
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                className='w-full p-2 rounded bg-blue-50 text-slate-600'
            />
            { isWrong ? <p>Wrong username or password</p> : null }
        </div>
    );
}
