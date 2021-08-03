import { Business } from "./Business.js"
import { getBusinesses } from "./dataAccess.js"



export const ActiveBusinesses = () => {
    const contentTarget = document.querySelector(".businessList--active")
    const businessesArray = getBusinesses()
    contentTarget.innerHTML = "<h2>Active Businesses</h2>"
    businessesArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
            
        }
    )
}
