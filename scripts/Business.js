
export const Business = ( businessObject ) => {
    return `
        <section class="business">
            <h1 class="business__name">${businessObject.companyName}</h1> 
            <div class="business__address">${businessObject.addressFullStreet} <br />
            ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode} 

            </div>
        </section>
    `
}