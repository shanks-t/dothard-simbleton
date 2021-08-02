import { Businesses } from "./database.js"

const businesses = Businesses()

export const getBusinesses = () => {
    const copyOfBusinesses = businesses.map(business => ({...business}))
    return copyOfBusinesses
}

const isNewYork = (businessObject) => {
    if (businessObject.addressStateCode === "NY") {
        return true
    }
    return false
}

export const isManufacturing = (businessObject) => {
    if (businessObject.companyIndustry === "Manufacturing") {
        return true
    }
    return false
}

export const NewYorkBusinessesArray = () => {
    const filteredItems = businesses.filter(isNewYork)
    return filteredItems
}

export const ManufacturingBusinessesArray = () => {
    const filteredItems = businesses.filter(isManufacturing)
    return filteredItems
}