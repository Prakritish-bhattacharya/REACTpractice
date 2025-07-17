import { LOGO_URL } from "../utils/constants"
const Header = ()=>{

    return(
        <div className="mother-container">
            <div className="logo-image">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contacts</li>
                    <li>Menu</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header