"use client"
import { useState } from "react"

export default function addProduct() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const onSubmit = () => alert(`Product ${name} has been created with price $${price}.`)

    return (
        <div>
            <div>
                <label className="block">Product Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-orange-600"
                />
            </div>
            <div>
                <label className="block">Product Price</label>
                <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="text-orange-600"
                    type="number"
                />
            </div>
            <button
                onClick={onSubmit}
                disabled={!name.length || !price.length}
            >Submit</button>
        </div>
    );
}
