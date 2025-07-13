import React from "react"
import ReactDOM  from "react-dom/client"
import Header from "./Components/Header"
// const AppLayout = ()=>{
//     return(
//         <div className="app">
//             <Header/>
//             <Body/>
//         </div>
//     )
// }

const AppLayout =()=>{
    return(
        <div className="app">
            <Header></Header>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)