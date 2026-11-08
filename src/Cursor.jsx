import React, { useEffect, useState } from 'react'
import './App.css'

function Cursor() {
    const [cursor, setCurSor] = useState({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        const moveCursor = (e) => {
            setCurSor({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor)
        }
    }, [cursor])
    return (
        <>
            <div className='cursor' style={{ left: `${cursor.x}px`, top: `${cursor.y}px` }}>

            </div>
        </>
    );
}

export default Cursor;