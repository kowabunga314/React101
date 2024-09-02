import Image from "next/image";
import { Button } from "./components/core";

export default function Home() {
  return (
    <div>
      <Button title="Next" className="h-8" /> 
      <Button title="Previous" style={{ marginLeft: 20 }} /> 
    </div>
  );
}
