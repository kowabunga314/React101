
import Link from "next/link";

export default function Home() {
  // Set page state variables

  // Define page layout
  return (
    <div>
      <h1>
        Dashboard
      </h1>
      <Link href={'/shops'}>
        <h1>Shops</h1>
      </Link>
      <div>
      </div>
    </div>
  );
}
