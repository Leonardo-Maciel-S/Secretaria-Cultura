const arrowLeft = document.getElementById('fa-arrow-left')
const arrowRight = document.getElementById('fa-arrow-right')
const imgPrincipal = document.getElementById('img-principal')


const events = [
    /*
        lista dos eventos com os seguintes atributos
        eventTitle = nome do evento
        path = caminho da imagem
    */
    {
        eventTitle: 'Futebol',
        path: 'https://images.pexels.com/photos/3651674/pexels-photo-3651674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        //path: 'assets/img/soccer.jpg',
    }, 
    {
        eventTitle: 'Breakdance',
        path: 'https://images.pexels.com/photos/2820896/pexels-photo-2820896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        //path: 'assets/img/break dance.jpg'
    }, 
    {
        eventTitle: 'Show',
        path: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        //path: 'assets/img/show.jpeg'
    },
]

let position = Math.floor(events.length / 2)

const gallery = [
    /*
        lista dos pontos turisticos com os seguintes atributos
        eventTitle = nome do evento
        path = caminho da imagem
    */
    {
        title: 'Caverna',
        path: 'assets/img/gallery/caverna.pn'
    },
    {
        title: 'Lagoa',
        path: 'assets/img/gallery/lagoa.png'
    },
    {
        title: 'Rampa do Voo Livre',
        path: 'assets/img/gallery/vooLivre.jpeg'
    },
    {
        title: 'Igreja',
        path: 'assets/img/gallery/igreja.jpeg'
    }
]

function createSlideBall() {

    const div = document.getElementById('event-slide-ball')
    
    let slideBallContent = ``

    for (let index = 0; index < events.length; index++) {
        if (index == position) {
            //cria a bolinha de cor amarela na posição da img
            slideBallContent = slideBallContent + `
            <i id="fa-circle-middle" class="fa-solid fa-circle" style="color: #FFD700;"></i>
            `
        } else {
            //cria a bolinha de cor branca para o resto das img
            slideBallContent = slideBallContent + `
            <i id="fa-circle-middle" class="fa-solid fa-circle" style="color: #EDEDED;"></i>
            `
        }
    }

    div.innerHTML = slideBallContent
}

function createGallery(object){
    let tag = ``

}

async function changeEvent(direction) {

    //botão pra esquerda
    if (direction == "left") {
        position = position - 1

        //se a posição tiver fora do escopo da lista ele mantem no primeiro evento
        if (!events[position]) {
            position = 0
        }

        document.getElementById('img-principal').src = events[position].path
        
    }

    //botão pra direita
    if (direction == "right") {
        position = position + 1

        //se a posição tiver fora do escopo da lista ele mantem no ultimo evento
        if (!events[position]) {
            position = events.length - 1
        }

        document.getElementById('img-principal').src = events[position].path
    

    }

    createSlideBall()
 
}



arrowLeft.onclick = () => { changeEvent('left') }
arrowRight.onclick = () => {changeEvent('right')}



function toggleContent() {
    const content = document.getElementById('gallery-details');
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('click', function(event) {
    const content = document.getElementById('gallery-details');
    const container = document.querySelector('#gallery');
    console.log("teste")

    if (!container.contains(event.target) && content.style.display === 'block') {
        content.style.display = 'none';
        console.log('teste2')
    }
});