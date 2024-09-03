"use client"
import { memo, useEffect } from "react";

export const Button = memo(({ style, className, children, onClick }) => {
    return <button onClick={onClick} style={{ width: 200, ...style }} className={ "bg-orange-200 rounded p-2 hover:bg-sky-700 " + className }>
        {children}
    </button>;
})
