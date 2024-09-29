import React from "react"

//set type for container
type TContainer = {
    children: React.ReactNode;
}

export default function Container({children}: TContainer) {
    return(
        <>
            <div className="mx-10">{children}</div>
        </>
    )
}