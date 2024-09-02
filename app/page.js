import Image from "next/image";
import { Button, Input } from "./components";

export default function Home() {
  return (
    <div>
      <div>
        <Input isWrong={false} label="Enter username: " placeholder="Please write your username" className='mb-8 w-[400px]' /> 
      </div>
      <div>
        <Button>
          <span>Next</span>
        </Button>
        <Button style={{ marginLeft: 20 }}>
          <h2>Previous</h2>
        </Button> 
      </div>
    </div>
  );
}
