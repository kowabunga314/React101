"use client"

import { Button, Select } from "@/components";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const options = [
  { value: 'coffee_shop', label: 'Coffee Shop' },
  { value: 'restaurant', label: 'Restaurant' }
]

export default function AddShop() {
    // Set up state variables
    const [selectedOption, setSelectedOption] = useState()

    const router = useRouter()
    const onSubmit = () => {
        // Call API backend
        // Return to Shops page
        router.back()
    }
    const animatedComponents = makeAnimated()

    return (
        <div>
            <h1>Add a shop</h1>
            <div className="mt-2">
                <label className="mr-4 text-slate-200">Shop Name</label>
                <input className="text-slate-700" id='shop_name'></input>
            </div>
            <div className="mt-2">
                <label className="mr-4 text-slate-200">Shop Address</label>
                <input className="text-slate-700" id='shop_address'></input>
            </div>
            <div className="mt-2">
                <label className="mr-4 text-slate-200">Shop Category</label>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    components={animatedComponents}
                    isMulti
                    options={options}
                />
            </div>
            <Button onClick={onSubmit} className="mt-8">Submit</Button>
        </div>
    )
}