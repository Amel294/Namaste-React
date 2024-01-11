import React from "react"
import ReactDOM from "react-dom/client"
import logo from './static/images/foodinHome-logos_black.png'
const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const RestoCard = (props) =>{
    return(
        <div className="res-card">
            <img alt="ajva restaurent" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ed5y7mdssh1hqvrhaf5f" className="res-logo"/>
            <h3>{props.name}</h3>
            <h4>{props.cusine}</h4>
            <h4>{props.rating} Stars</h4>
            <h4>{props.time} Minuts</h4>
        </div>
    )
}
const Body = () =>{
    return(
        <div className="body">
            <div className="search">
            search
            </div>
            <div className="res-container">
                <RestoCard name="Ajva" cusine="South Indian" rating="4.4" time="10"></RestoCard>
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (<div className="app">
    <Header/>
    <Body/>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>) 




