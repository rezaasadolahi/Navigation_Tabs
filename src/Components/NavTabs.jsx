import React, { useState } from 'react'
import './NavTabs.css'




function NavTabs() {
    const [clicked, setClicked] = useState(0)

    const handleToggle = (index) => {
        if (clicked === index) {
            setClicked(index)
        } else {
            setClicked(index)
        }
    }



    return (
        <>
            <nav id="navbar">
                <button onClick={() => handleToggle(0)} className={clicked === 0 ? 'buttonActive' : null}>
                    <p>کالاهای مورد علاقه</p>
                </button>
                <button onClick={() => handleToggle(1)} className={clicked === 1 ? 'buttonActive' : null}>
                    <p>لیست های عمومی</p>
                </button>
                <button onClick={() => handleToggle(2)} className={clicked === 2 ? 'buttonActive' : null}>
                    <p>اطلاع رسانی ها</p>
                </button>
            </nav>
            <div>
                {
                    clicked === 0 ? (<h1>Box 0</h1>) :
                        clicked === 1 ? (<h1>Box 1</h1>) :
                            clicked === 2 ? (<h1>Box 2</h1>) : null
                }
            </div>
        </>
    )
}


export default NavTabs