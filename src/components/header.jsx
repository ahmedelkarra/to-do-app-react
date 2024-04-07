import React from "react";
import logo from '../media/logo.png'

const Header = () => {
    return (
        <div className="text-end align-self-start my-2">
            <img src={logo} alt="ToDoListLogo" draggable={false} width={200} height={200} style={{ cursor: "pointer" }} />
        </div>
    )
}

export default Header 