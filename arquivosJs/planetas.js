let currentPageUrl = 'https://swapi.dev/api/planets/'

window.onload = async() => {
    try {
      await loadPlanets(currentPageUrl);
    } catch (error) {
    console.log(error);
    alert('Erro ao carregar os cards');
    } 

    const nextButton = document.getElementById("next-button")
    const backButton = document.getElementById("back-button")

    nextButton.addEventListener('click', loadNextPage)
    backButton.addEventListener('click', loadPreviousPage)
};

async function loadPlanets(url) {
    const mainContent = document.getElementById("main-content")
    mainContent.innerHTML = ''; // limpa os resultados

    try {

        const response = await fetch(url);
        const responseJson = await response.json();

        responseJson.results.forEach(async (planets) =>  {
            const card = document.createElement("div"); 
            let urlImg = `https://starwars-visualguide.com/assets/img/planets/${planets.url.replace(/\D/g, "")}.jpg`;
            const response = await fetch(urlImg)
            if(response.status == '404'){
                urlImg = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
            }
            card.style.backgroundImage = `url('${urlImg}')`;
            card.className = "cards"

            const planetsBg = document.createElement("div")
            planetsBg.className = "planets-bg"

            const namePlanets = document.createElement("span")
            namePlanets.className = "name-planets"
            namePlanets.innerText = `${planets.name}`

            planetsBg.appendChild(namePlanets)
            card.appendChild(planetsBg)
            mainContent.appendChild(card)

            card.onclick = () => {
                const modal = document.getElementById("modal")
                modal.style.visibility = "visible"

                const modalContent = document.getElementById("modal-content")
                modalContent.innerHTML = ''

                const planetImage = document.createElement("div")
                planetImage.style.backgroundImage = `url('${urlImg}')`
                planetImage.className = 'planet-image'

                const name = document.createElement("span")
                name.className = 'planet-details'
                name.innerText = `Nome: ${planets.name}`

                const diameter = document.createElement("span")
                diameter.className = 'planet-details'
                diameter.innerText = `Diametro: ${convertDiameter(planets.diameter)}`

                const climate = document.createElement("span")
                climate.className = 'planet-details'
                climate.innerText = `clima: ${convertClimate(planets.climate)}`

                const population = document.createElement("span")
                population.className = 'planet-details'
                population.innerText = `Populacao: ${convertPopulation(planets.population)}`

                const gravity = document.createElement("span")
                gravity.className = 'planet-details'
                gravity.innerText = `Gravidade: ${convertGravity(planets.gravity)}`

                modalContent.appendChild(planetImage)
                modalContent.appendChild(name)
                modalContent.appendChild(diameter)
                modalContent.appendChild(climate)
                modalContent.appendChild(population)
                modalContent.appendChild(gravity)
            }

            mainContent.appendChild(card)

        });

        const nextButton = document.getElementById("next-button")
        const backButton = document.getElementById("back-button")

        nextButton.disabled = !responseJson.next;
        backButton.disabled = !responseJson.previous;

        backButton.style.visibility = responseJson.previous? "visible" : "hidden"
        nextButton.style.visibility = responseJson.next? "visible" : "hidden"

        currentPageUrl = url
        
    } catch {
        alert('erro ao carregars os planetas')
        console.log(error);
        }
    }

async function loadNextPage() {
    if (!currentPageUrl) return;

    try{
        const response = await fetch(currentPageUrl)
        const responseJson =  await response.json()

        await loadPlanets(responseJson.next)

    } catch(error){
        console.log(error)
        alert('Erro ao carregar a próxima página')
    }

}

async function loadPreviousPage() {
    if (!currentPageUrl) return;

    try{
        const response = await fetch(currentPageUrl)
        const responseJson = await response.json()

        await loadPlanets(responseJson.previous)

    } catch(error) {
        console.log(error)
        alert('Erro ao carregar página anterior')
    }
}

function hideModal() {
    const modal = document.getElementById('modal')
    modal.style.visibility = "hidden"
}


function convertClimate(climate) {
    const clima = {
        temperate: "temperado",
        arid: "arido",
        frozen: "congelado",
        murky: "obscuro",
        hot: "quente",
        frigid: "gelado",
        polluted: "poluido",
        unknown:"desconhecido",
        superheated: "superaquecido"
    };

    return clima[climate.toLowerCase()] || climate;
}

function convertGravity(gravity) {
   const gravidade = {
    undefined: "indefinido",
    unknown: "desconecido", 
    

   }
   return gravidade[gravity.toLowerCase()] || gravity;
}

function convertPopulation(population) {
    if (population === "unknown") {
        return "desconhecida"
    }

    return (population )
}

function convertDiameter(diameter) {
    if (diameter === "unknown") {
        return "desconhecido"
    }

    return (diameter)
}


function hamburger() {
    const btnmenu = document.getElementById('btn-menu')
    btnmenu.classList.toggle('ativar')
}

const btnmenu = document.getElementById('btn-menu')

function menuMobile() {
const menu = document.getElementById('menu-mobile')

    menu.classList.toggle('active')
}

btnmenu.addEventListener('click', menuMobile)