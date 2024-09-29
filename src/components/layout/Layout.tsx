import React from "react"

//set type for layout
type TLayout = {
    children: React.ReactNode;
}

export default function Layout({children}: TLayout) {
    return(
        <>
            <div>{children}</div>
        </>
    )
}