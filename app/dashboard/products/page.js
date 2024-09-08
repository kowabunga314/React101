'use client'

import { Title } from "@/components"
import Link from "next/link"
import { useEffect, useState } from "react";


const columns = [{title: 'Brand'}, {title: 'Equipment'}]

const getAppliances = async (setData) => {
    const apiUrl = 'https://random-data-api.com/api/v2/appliances?size=100'
    fetch(apiUrl)
        .then(response => response.json())
        .then(json => setData(json))
        .then(() => console.log('data: ', data))
        .catch(error => console.error(error));
}

export default function ProductList() {
    const [data, setData] = useState([])
    useEffect(() => {
        getAppliances(setData)
    }, [])
    return (
        <div className="ml-5">
            <Title>This is the Products page</Title>
            <Link href='/dashboard/products/add-product'>Add a new Product</Link>
            <div id='header'>
                {columns.map((col) => <h1 key={col.title} className="inline-block w-[250px] font-bold">{col.title}</h1>)}
            </div>
            <div id='table-body'>
                 {data.map((obj) => {
                     return (
                         <div key={obj.id}>
                             <p className="inline-block w-[250px]">{obj.brand}</p>
                             <p className="inline-block w-[250px]">{obj.equipment}</p>
                         </div>
                     )
                 })}
             </div>
        </div>
    )
}