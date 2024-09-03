
export const StatBox = ({ label, value, className }) => {
    return (
        <div className={`flex flex-col px-4 py-4 bg-orange-100 h-[150px] w-[150px] rounded ${className}`} >
            <div>
                <label className="text-slate-500 text-xs ml-2 py-4">{label}</label>
            </div>
            <div className="flex flex-1 mt-4 justify-items-center">
                <h1 className="text-slate-600 m-auto">{value}</h1>
            </div>
        </div>
    );
}