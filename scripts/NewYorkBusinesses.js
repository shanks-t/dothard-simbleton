import { NewYorkBusinessesArray } from "./dataAccess.js"
import { Business } from "./Business.js"

const contentTarget = document.querySelector(".businessList--newYork")

export const NewYorkBusinesses = () => {
const newYorkBusinessesArray = NewYorkBusinessesArray()
    contentTarget.innerHTML = "<h2>New York Businesses</h2>"
    
    newYorkBusinessesArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
}