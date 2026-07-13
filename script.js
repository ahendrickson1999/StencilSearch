let stencils = [];

fetch("stencils.json")
    .then(response => response.json())
    .then(data => {
        stencils = data;
    });

function search() {

    const term = document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    const results = stencils.filter(item =>

        Object.values(item).some(value =>

            String(value)
            .toLowerCase()
            .includes(term)
        )

    );

    displayResults(results);
}


function displayResults(results) {

    const div = document.getElementById("results");

    div.innerHTML = "";

    results.forEach(item => {

        div.innerHTML += `

        <div class="card">

            <h3>${item["First Stencil Number"]}</h3>

            <p><b>Stock:</b> ${item["Stock Location"]}</p>

            <p><b>Assembly:</b> ${item["Assembly Number"]}</p>

            <p><b>Board:</b> ${item["Board Number"]}</p>

            <p><b>Second Stencil:</b> ${item["Second Stencil Number"]}</p>

            <p><b>Ordered:</b> ${item["Ordered Date"]}</p>

        </div>

        `;
    });

}