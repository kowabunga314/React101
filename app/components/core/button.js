"use client"
import { useEffect } from "react";

export const Button = ({ title, style, className }) => {

    // // Handle lifecycle hooks
    // useEffect(() => {
    //     // Run on mount
    //     alert('Welcome to the course!');
    //     // Run on exit
    //     return () => alert('I am leaving.');
    // }, [
    //     // Dependencies listed here update this component when changed
    // ] );

    // Return component
    return <button style={{ width: 200, ...style }} className={ "bg-orange-200 rounded p-2 hover:bg-sky-700 " + className }>
        {title}
    </button>;
}
