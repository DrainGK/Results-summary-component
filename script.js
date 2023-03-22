const resultsContent = document.querySelector(".summary-content");

let arraySummaryResults = [];

async function fetchSummaryResults(){

    await fetch("data.json")
    .then((res) => res.json())
    .then((data) => (arraySummaryResults=data));

    console.log(arraySummaryResults);
}

function resultsDisplay() {

    resultsContent.innerHTML = arraySummaryResults.map((res) => {

        return`
        <li class="my-result">

            <div class="symbol">
                <img src="${res.icon}" alt="${res.category} icon"/>
                <p class="category"> ${res.category} </p>
            </div>
           
            <div class="percent">
                <p class="score"> ${res.score}</p>
                <p class="hundred">/ 100 </p>
            </div>
        </li>
        `
    }).join("")
}

window.addEventListener("load", () => {
    fetchSummaryResults().then(() => resultsDisplay());
})