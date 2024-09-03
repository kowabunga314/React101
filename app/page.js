import Image from "next/image";
import { StatBox, Title } from "../components";

export default function Home() {
  const data = [
    {label: 'Total Customers', value: '2500'},
    {label: 'Total Products', value: '1000'},
    {label: 'Total Categories', value: '100'},
    {label: 'Average Revenue', value: '$2500'},
    {label: 'Total Customers', value: '2500'},
    {label: 'Total Products', value: '1000'},
    {label: 'Total Categories', value: '100'},
    {label: 'Average Revenue', value: '$2500'}
  ]

  return (
    <div>
      <div>
        <Title className="ml-4" value="Dashboard" />
      </div>
      <div className="flex flex-wrap">
        { data.map(el => <StatBox label={el.label} value={el.value} className='ml-10 mt-4' />) }
      </div>
    </div>
  );
}
