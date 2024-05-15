import React from "react"
import { useSelector } from 'react-redux';
export default function Header() {
    const text = useSelector(state => state.text);

    return (
        <div className="p-5 bg-blue-500 text-white -text-3xl font-bold">
            Micro Frontend Header {text}
        </div>
    )
}