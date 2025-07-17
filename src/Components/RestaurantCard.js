import { BIRIYANI_IMAGE } from "../utils/constants"
import { MOCK_DATA } from "../utils/constants"
const RestaurantCard = ()=>{
    return(
        <div className="res-card">
            <img src={BIRIYANI_IMAGE} ></img>
            <h3>Meghana Foods</h3>
            <h4>{MOCK_DATA.id}</h4>
        </div>
    )
}
export default RestaurantCard