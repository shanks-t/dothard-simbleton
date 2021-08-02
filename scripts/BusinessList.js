import { ActiveBusinesses } from "./ActiveBusinesses.js"
import { NewYorkBusinesses } from "./NewYorkBusinesses.js"
import { ManufacturingBusinesses } from "./ManufacturingBusinesses.js"


export const BusinessList = () => {
    return `
    <section class="businessList--active">
    ${ActiveBusinesses()}
    </section>
    <section class="businessList--newYork">
    ${NewYorkBusinesses()}
    </section>
    <section class="businessList--manufacturing">
    ${ManufacturingBusinesses()}
    </section>
    `
}
