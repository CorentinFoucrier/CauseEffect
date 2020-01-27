const persons = [
    {
        name: "Dwayne Stormer", street: "3910 Meadowbrook Mall Road", city: "Los Angeles", state: "California", country: "US", telephone: "310-807-2861", birthday: "6/4/1956"
    },
    {
        name: "Gladys Nelson", street: "1865 Roane Avenue", city: "Houston", state: "Texas", country: "US", telephone: "281-987-8924", birthday: "3/8/1957"
    },
    {
        name: "Bobby Bullard", street: "4310 Del Dew Drive", city: "Landover", state: "Maryland", country: "US", telephone: "301-883-3469", birthday: "4/27/1971"
    },
    {
        name: "Terrance Walton", street: "3099 Henery Street", city: "Wichita", state: "Kansas", country: "US", telephone: "316-978-6631", birthday: "11/11/1982"
    }
];

const nameList = document.getElementById("nameList");
const details = document.getElementById("details");
const info = document.getElementById("info");
const address = document.getElementById("address");


for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    nameList.insertAdjacentHTML("beforeend",
        `<div onclick="showDetails(${i})">
            ${person.name}
            <span>
                Street: ${person.street}<br />
                City: ${person.city}<br />
                <hr />
                Click for more infos!
            </span>
        </div>`
    );
}

/**
 * Get details when a name is clicked
 * @param {number} id Id of person details in the data array
 */
const showDetails = id => {
    info.classList.add("d-none");
    details.innerHTML = "";
    for (const [key, value] of Object.entries(persons[id])) {
        details.insertAdjacentHTML("beforeend", `<span class="detailsNames">${key}:</span> ${value}<br />`)
    }
}