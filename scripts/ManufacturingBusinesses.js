import { ManufacturingBusinessesArray } from "./dataAccess.js"
import { Business } from "./Business.js"

const contentTarget = document.querySelector(".businessList--manufacturing")

export const ManufacturingBusinesses = () => {
const manufacturingBusinessArray = ManufacturingBusinessesArray()
    contentTarget.innerHTML = "<h2>Manufacturing Businesses</h2>"
    
    manufacturingBusinessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
}