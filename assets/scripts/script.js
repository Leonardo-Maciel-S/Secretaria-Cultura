const arrowLeft = document.getElementById('fa-arrow-left')
const arrowRight = document.getElementById('fa-arrow-right')
const imgPrincipal = document.getElementById('img-principal')

const gallerySection = document.getElementById('gallery')
const galleryContainer = document.getElementById('gallery-container')
const galleryDetails = document.getElementById('gallery-details')



const body = document.querySelector('body')


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
        path: 'assets/img/gallery/caverna.png',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odio aliquid, perferendis quisquam et quis consequuntur quos eos reprehenderit dolorem nesciunt modi fuga optio nihil suscipit dolor maiores fugit repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        title: 'Lagoa',
        path: 'assets/img/gallery/lagoa.png',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odio aliquid, perferendis quisquam et quis consequuntur quos eos reprehenderit dolorem nesciunt modi fuga optio nihil suscipit dolor maiores fugit repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        title: 'Rampa do Voo Livre',
        path: 'assets/img/gallery/vooLivre.jpeg',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odio aliquid, perferendis quisquam et quis consequuntur quos eos reprehenderit dolorem nesciunt modi fuga optio nihil suscipit dolor maiores fugit repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        title: 'Igreja',
        path: 'assets/img/gallery/igreja.jpeg',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odio aliquid, perferendis quisquam et quis consequuntur quos eos reprehenderit dolorem nesciunt modi fuga optio nihil suscipit dolor maiores fugit repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
     {
        title: 'Cruz',
        path: 'assets/img/gallery/cruz.jpg',
         info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odio aliquid, perferendis quisquam et quis.',
    },
    {
        title: 'lagoa Norte',
        path: 'assets/img/gallery/lagoa2.jpg',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odio aliquid, perferendis quisquam et quis consequuntur quos eos reprehenderit dolorem nesciunt modi fuga optio nihil suscipit dolor.'
    },
    {
        title: 'Rampa do Voo Livre Norte',
        path: 'assets/img/gallery/vooLivre2.jpg',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odio aliquid, perferendis quisquam et quis consequuntur quos eos reprehenderit dolorem nesciunt modi fuga optio nihil suscipit dolor maiores fugit repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        title: 'Parque Ecologico',
        path: 'assets/img/gallery/parqueEcologico.jpg',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    }
]


function createSlideBall() {

    const div = document.getElementById('event-slide-ball')
    
    let slideBallContent = ``

    for (let index = 0; index < events.length; index++) {
        if (index == position) {
            //cria a bolinha de cor amarela na posição da img
            slideBallContent = slideBallContent + `
            <i id="ball${index}" class="fa-solid fa-circle color-yellow" onclick="changeEventsByBall(${index})"></i>
            `
        } else {
            //cria a bolinha de cor branca para o resto das img
            slideBallContent = slideBallContent + `
            <i id="ball${index}" class="fa-solid fa-circle color-white" onclick="changeEventsByBall(${index})"></i>
            `
        }
    }

    div.innerHTML = slideBallContent
}

function changeColorBall(last) {

    console.log(last, 'teste', position)

    document.getElementById(`ball${last}`).style.color = 'white'
    document.getElementById(`ball${position}`).style.color = 'yellow'

    

}

function changeEventsByBall(id) {

    let lastPosition = position

    position = id

    imgPrincipal.src = events[parseInt(position)].path
    
    changeColorBall(lastPosition)
   
}

function createGallery(object){
    let tag = ``

    for (let img of object) {

        tag = tag + `
        <div class="gallery-field" onclick="openDetails('${object.indexOf(img)}')">
            <div class="gallery-img">
                <img src="${img.path}" alt="" onclick="open"> 
            </div>
        </div>
        `
    }

    galleryContainer.innerHTML = tag
    

}

function changeDetails(index) {
    const detailsTitle = document.getElementById('details-title')
    const info = document.getElementById('details-info')
    const detailsImg = document.getElementById('details-img')

    console.log(document.getElementById('gallery').style.filter)


    detailsImg.src = gallery[index].path
    detailsTitle.innerHTML = gallery[index].title
    info.innerHTML = gallery[index].info
    
}

function changeHost(index) {
    const hostTitle = document.getElementById('host-title')
    const info = document.getElementById('host-info')
    const hostImg = document.getElementById('host-img')

    hostImg.src = gallery[parseInt(index)].path
    hostTitle.innerHTML = gallery[parseInt(index)].title
    info.innerHTML = gallery[parseInt(index)].info
    
}

function changeEvent(direction) {

    const lastPosition = position
    //botão pra esquerda
    if (direction == "left") {

        
        position = position - 1

        //se a posição tiver fora do escopo da lista ele mantem no primeiro evento
        if (!events[position]) {
            position = events.length -1
        }

        imgPrincipal.src = events[position].path
        
        
    }

    //botão pra direita
    if (direction == "right") {
        position = position + 1

        //se a posição tiver fora do escopo da lista ele mantem no ultimo evento
        if (!events[position]) {
            position = 0
        }

        imgPrincipal.src = events[position].path
    

    }

        
    changeColorBall(lastPosition)


}

function closeDetails(event) {
    
    if (event.target.contains(document.getElementById('gallery-details'))) {
        document.getElementById('gallery-details-container').style.display = 'none'
    }
}
   
function openDetails(title) {
    
    document.getElementById('gallery-details-container').style.display = 'flex'
    changeDetails(title)
    document.getElementById('gallery-details').style.display = 'flex'

    
}


function openHost(title) {
    
    const detailsContainer = document.getElementById('host-details-container')
    detailsContainer.style.display = 'flex'
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';


    changeHost(title)
}

function closeHost(event) {

    const detailsContainer = document.getElementById('host-details-container')

     if (event.target.contains(document.getElementById('host-details'))) {
        detailsContainer.style.display = 'none'
         
        document.getElementsByTagName('html')[0].style.overflow = 'visible';

    }
}


createGallery(gallery)
arrowLeft.onclick = () => { changeEvent('left') }
arrowRight.onclick = () => {changeEvent('right')}

// function para abrir e fechar os detalhes com o click fora da div

document.getElementById('closeBtnDetails').onclick = () => {
    
    document.getElementById('gallery-details-container').style.display = 'none'
    document.getElementsByTagName('html')[0].style.overflow = 'visible';

}

document.getElementById('gallery-details-container').onclick = (event) => { closeDetails(event) }

document.getElementById('host-details-container').onclick = (event) => { closeHost(event) }

document.getElementById('closeBtnHost').onclick = () => {
    document.getElementById('host-details-container').style.display = 'none'
    document.getElementsByTagName('html')[0].style.overflow = 'visible';
}


function centralizarNaSecaoAtual(divClicada) {
    // Obtém a seção atual
    var secaoAtual = divClicada.closest('section');

    // Verifica se a seção atual existe
    if (secaoAtual) {
        // Obtém a posição superior da seção atual em relação ao topo da página
        var posicaoSecao = secaoAtual.offsetTop;

        // Obtém a altura da barra de navegação (se houver)
        var alturaBarraNavegacao = document.querySelector('nav').offsetHeight || 0;

        // Calcula a posição para centralizar a seção na tela
        var posicaoCentralizada = posicaoSecao - (window.innerHeight / 2) + (secaoAtual.offsetHeight / 2);

        // Centraliza a tela na posição calculada
        window.scrollTo({
            top: posicaoCentralizada,
            behavior: 'smooth' // Para uma animação suave, se o navegador suportar
        });
    }
}

// Adicione um evento de clique à sua div específica
document.getElementById('gallery-container').addEventListener('click', function() {
    centralizarNaSecaoAtual(this);
});

document.getElementById('host-container').addEventListener('click', function() {
    centralizarNaSecaoAtual(this);
});



createSlideBall()

