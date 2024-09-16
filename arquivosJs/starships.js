let currentPageUrl = 'https://swapi.dev/api/starships/'

window.onload = async () => {

    try {
        await loadStarships(currentPageUrl);
    } catch (error) {
        console.log(error);
        alert('erro ao carregar os cards');
    }

    const nextButton = document.getElementById("next-button")
    const backButton = document.getElementById("back-button")

    nextButton.addEventListener('click', loadNextPage)
    backButton.addEventListener('click', loadPreviousPage)


};

async function loadStarships(url) {
    const mainContent = document.getElementById('main-content')
    mainContent.innerHTML = ''; // Limpa os resultados enteriores

    try {
        const response = await fetch(url);
        const responseJson = await response.json();

        responseJson.results.forEach(async (starships) => {
            const card = document.createElement("div")
            let urlImg = `https://starwars-visualguide.com/assets/img/starships/${starships.url.replace(/\D/g, "")}.jpg`;
           const response = await fetch(urlImg)
           if (response.status == '404'){
            urlImg = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
           }
            card.style.backgroundImage = `url('${urlImg}')`;
            card.className = 'cards'

            const starshipsNameBg = document.createElement("div")
            starshipsNameBg.className = 'starships-name-bg'

            const starshipsName = document.createElement("span")
            starshipsName.className = 'starships-name'
            starshipsName.innerText = `${starships.name}`

            starshipsNameBg.appendChild(starshipsName)
            card.appendChild(starshipsNameBg)

            card.onclick = () => {
                const modal = document.getElementById('modal')
                modal.style.visibility = "visible"

                const modalContent = document.getElementById('modal-content')
                modalContent.innerHTML = ''

                const starshipsImage = document.createElement('div')
                starshipsImage.style.backgroundImage = `url('${urlImg}')`
                starshipsImage.className = "starships-image"

                const name = document.createElement("span")
                name.className = "starships-details"
                name.innerText = `nome: ${starships.name}`

                const model = document.createElement("span")
                model.className = "starships-details"
                model.innerText = `modelo: ${starships.model}`

                const passengers = document.createElement("span")
                passengers.className = "starships-details"
                passengers.innerText = `passageiros: ${convertPassengers(starships.passengers)}`

                const crew = document.createElement("span")
                crew.className = "starships-details"
                crew.innerText = `equipe: ${convertCrew(starships.crew)}`

                const length = document.createElement("span")
                length.className = "starships-details"
                length.innerText = `comprimento: ${starships.length}`

                modalContent.appendChild(starshipsImage)
                modalContent.appendChild(name)
                modalContent.appendChild(model)
                modalContent.appendChild(passengers)
                modalContent.appendChild(crew)
                modalContent.appendChild(length)


            }

            mainContent.appendChild(card)
        })

        const nextButton = document.getElementById("next-button")
        const backButton = document.getElementById("back-button")

        nextButton.disabled = !responseJson.next;
        backButton.disabled = !responseJson.previous;

        backButton.style.visibility = responseJson.previous ? "visible" : "hidden"
        nextButton.style.visibility = responseJson.next ? "visible" : "hidden"

        currentPageUrl = url

    } catch {
        alert('Erro ao carregar as starships')
        console.log(error)
    }
}

async function loadNextPage() {
    if (!currentPageUrl) return;

    try {

        const response = await fetch(currentPageUrl)
        const responseJson = await response.json()

        await loadStarships(responseJson.next)

    } catch {
        console.log(error)
        alert('Erro ao acrregar a próxima página')
    }
}

async function loadPreviousPage() {
    if (!currentPageUrl) return;
    try{

        const response = await fetch(currentPageUrl)
        const responseJson = await response.json()

        await loadStarships(responseJson.previous)

    }catch {
        console.log(erorr)
        alert('Erro ao carregar a página anterior')
    }
}

function hideModal() {
    const modal = document.getElementById('modal')
    modal.style.visibility = "hidden"
}

function convertPassengers(passengers) {
    if (passengers === "unknown") {
        return 'desconhecido'
    }

    return(passengers)
    } 

    function convertCrew(crew) {
        if (crew === "unknown") {
            return 'desconhecido'
        }
    
        return(crew)
        } 
    

        function hamburger() {
            const  btnMenu = document.getElementById('btn-menu')
            btnMenu.classList.toggle('ativar')
        }

        const  btnMenu = document.getElementById('btn-menu')
        
        function menuMobile() {
            const menu = document.getElementById('menu-mobile')
            menu.classList.toggle('active')
        }

        btnMenu.addEventListener('click', menuMobile)