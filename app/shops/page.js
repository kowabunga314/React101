import Link from "next/link";


export default function Shops() {
    return (
        <div>
            <h5>
                <Link href={'/'} className="text-slate-400">Go Home</Link>
            </h5>
            <h1>Shops Dashboard</h1>
            <Link href={'/shops/add'}>Add a shop</Link>
            <h3>Here is a list of shops:</h3>
        </div>
    )
}