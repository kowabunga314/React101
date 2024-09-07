
import { StatBox, Title } from "@/components";

export default function Dashboard() {
  return (
    <div>
      <div>
        <Title className="ml-4" value="Dashboard" />
      </div>
      <div className="flex flex-wrap">
        <StatBox label='Total Customers' value='2500' className='ml-10 mt-4' />
        <StatBox label='Total Products' value='1000' className='ml-10 mt-4' />
        <StatBox label='Total Categories' value='100' className='ml-10 mt-4' />
        <StatBox label='Average Revenue' value='$2500' className='ml-10 mt-4' />

        <StatBox label='Total Customers' value='2500' className='ml-10 mt-4' />
        <StatBox label='Total Products' value='1000' className='ml-10 mt-4' />
        <StatBox label='Total Categories' value='100' className='ml-10 mt-4' />
        <StatBox label='Average Revenue' value='$2500' className='ml-10 mt-4' />
      </div>
    </div>
  );
}
