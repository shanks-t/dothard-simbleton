import { Business } from "./Business.js"
import { getBusinesses } from "./dataAccess.js"

const contentTarget = document.querySelector(".businessList--active")

export const ActiveBusinesses = () => {
    const businessesArray = getBusinesses()
    contentTarget.innerHTML = "<h2>Active Businesses</h2>"
    businessesArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
            
        }
    )
}
