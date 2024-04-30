const arrowLeft = document.getElementById("fa-arrow-left");
const arrowRight = document.getElementById("fa-arrow-right");
const imgPrincipal = document.getElementById("img-principal");
const closeBtnDetails = document.getElementById("closeBtnDetails");

const gallerySection = document.getElementById("gallery");
const galleryDetailsContainer = document.getElementById(
  "gallery-details-container"
);
const galleryContainer = document.getElementById("gallery-container");
const galleryDetails = document.getElementById("gallery-details");

const hostContainer = document.getElementById("host-container");
const hostDetailsContainer = document.getElementById("host-details-container");

const events = [
  /*
        lista dos eventos com os seguintes atributos
        eventTitle = nome do evento
        path = caminho da imagem
    */
  {
    eventTitle: "Futebol",
    path: "https://images.pexels.com/photos/3651674/pexels-photo-3651674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //path: 'assets/img/soccer.jpg',
  },
  {
    eventTitle: "Breakdance",
    path: "https://images.pexels.com/photos/2820896/pexels-photo-2820896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //path: 'assets/img/break dance.jpg'
  },
  {
    eventTitle: "Show",
    path: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //path: 'assets/img/show.jpeg'
  },
];

let position = Math.floor(events.length / 2);

const gallery = [
  /*
        lista dos pontos turisticos com os seguintes atributos
        eventTitle = nome do evento
        path = caminho da imagem
    */
  {
    title: "Caverna",
    path: "assets/img/gallery/caverna.png",
    info: "Explorar esta caverna antiga na cidade é uma jornada emocionante pelas eras, onde estalactites e estalagmites contam a história geológica, enquanto artefatos humanos revelam vestígios de antigas civilizações, oferecendo uma experiência única de descoberta e admiração subterrânea.",
    iframe:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15381.988469078586!2d-47.610029!3d-15.45767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a6ffe93024301%3A0x8209598dcff6975a!2sSecretaria%20De%20Cultura%2C%20Esporte%20E%20Lazer!5e0!3m2!1spt-BR!2sbr!4v1713565942548!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    title: "Lagoa",
    path: "assets/img/gallery/lagoa.png",
    info: "Nossa lagoa local é um santuário sereno, onde águas límpidas refletem o céu e a natureza se desdobra em beleza. Um refúgio para contemplação e recreação, onde a vida selvagem floresce e os visitantes se reconectam com a tranquilidade da natureza.",
    iframe:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10149.670225333863!2d-47.55656195488177!3d-15.430242043794149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a7a6d95b93a17%3A0x5da2de126e4edf20!2sLAGOATUR!5e0!3m2!1spt-BR!2sbr!4v1713567733778!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    title: "Rampa do Voo Livre",
    path: "assets/img/gallery/vooLivre.jpeg",
    info: "A rampa do Voo Livre é o playground dos aventureiros, onde sonhos de voar se tornam realidade. Com vistas panorâmicas deslumbrantes e uma emoção indescritível, é o lugar perfeito para quem busca adrenalina e liberdade nos céus, em um ambiente seguro e emocionante.",
    iframe:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492094.63040893024!2d-47.29265296453684!3d-15.51187868032899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9350981e295a1965%3A0x51ee588a03b4920f!2sRampa%20de%20voo%20livre%20do%20Morro%20do%20Urubu!5e0!3m2!1spt-BR!2sbr!4v1713566206854!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    title: "Igreja",
    path: "assets/img/gallery/igreja.jpeg",
    info: "Esta igreja histórica é mais do que um local de adoração; é um monumento à fé e à arte. Sua imponente arquitetura gótica ou barroca, ornamentada com detalhes intricados, conta a história de séculos de devoção e cultura. Desde os seus primeiros alicerces até os elaborados vitrais que filtram a luz celestial, cada elemento é um testemunho da dedicação dos que a construíram e preservaram ao longo dos anos.",
    iframe: "",
  },
  {
    title: "Cruz",
    path: "assets/img/gallery/cruz.jpg",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odio aliquid, perferendis quisquam et quis.",
    iframe: "",
  },
  {
    title: "lagoa Norte",
    path: "assets/img/gallery/lagoa2.jpg",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odio aliquid, perferendis quisquam et quis consequuntur quos eos reprehenderit dolorem nesciunt modi fuga optio nihil suscipit dolor.",
    iframe:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10149.670225333863!2d-47.55656195488177!3d-15.430242043794149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a7a6d95b93a17%3A0x5da2de126e4edf20!2sLAGOATUR!5e0!3m2!1spt-BR!2sbr!4v1713567733778!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    title: "Rampa do Voo Livre Norte",
    path: "assets/img/gallery/vooLivre2.jpg",
    info: "A rampa do Voo Livre é o playground dos aventureiros, onde sonhos de voar se tornam realidade. Com vistas panorâmicas deslumbrantes e uma emoção indescritível, é o lugar perfeito para quem busca adrenalina e liberdade nos céus, em um ambiente seguro e emocionante.",
    iframe:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492094.63040893024!2d-47.29265296453684!3d-15.51187868032899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9350981e295a1965%3A0x51ee588a03b4920f!2sRampa%20de%20voo%20livre%20do%20Morro%20do%20Urubu!5e0!3m2!1spt-BR!2sbr!4v1713566206854!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    title: "Parque Ecologico",
    path: "assets/img/gallery/parqueEcologico.jpg",
    info: "Nosso parque ecológico é um oásis verde no coração da cidade, onde a biodiversidade floresce e a conexão com a natureza é reavivada. Com trilhas serpenteantes, riachos murmurantes e áreas de conservação, é um refúgio para os amantes da natureza, oferecendo educação ambiental e aventuras ao ar livre para todas as idades.",
    iframe:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d836.9180352279313!2d-47.60096901813589!3d-15.459393289691265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a7004900fcdc7%3A0xaa35a6c4a2da8d0b!2s%C3%81rea%20de%20Prote%C3%A7%C3%A3o%20Ambiental%20Parque%20Tur%C3%ADstico%20Nascentes%20do%20Rio%20Maranh%C3%A3o%20-%20APA%20PTNRM!5e0!3m2!1spt-BR!2sbr!4v1713567446186!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
];

const hosts = [
  {
    title: "Hotel Planaltina",
    path: "assets/img/hosts/hotel 1.jpg",
    description: "Hotel",
    info: "Experimente o luxo contemporâneo no coração da cidade, com vistas deslumbrantes e serviços exclusivos para uma estadia inesquecível.",
    iframe:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61529.080180925404!2d-47.689929451367156!3d-15.453876699999974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a6557cb9558ff%3A0x84ac3f1cc4503e17!2sPalace%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1713569371827!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    title: "Hotel Firenze",
    path: "assets/img/hosts/hotel 2.jpg",
    description: "Hotel Fazenda",
    info: "Descubra o charme histórico e a elegância intemporal em um hotel que combina tradição com comodidades modernas, oferecendo uma experiência única.",
    iframe:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35338.87650472722!2d-47.63830020126104!3d-15.45565191296056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a132f6e673749%3A0x82354cdace62f68!2sHotel%20Planaltina!5e0!3m2!1spt-BR!2sbr!4v1713569418290!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    title: "Hotel Marques",
    path: "assets/img/hosts/hotel 3.jpg",
    description: "Hotel ",
    info: "Desfrute de uma escapada eco-friendly em um refúgio cercado pela natureza, com atividades ao ar livre, gastronomia sustentável e aconchego acolhedor.",
    iframe:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61529.50227153523!2d-47.685549351367136!3d-15.452454899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a6555bd6af34b%3A0x5ecfa9fff2f6329a!2sHotel%20Rio%20Sul%20Planaltina%20de%20Goi%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1713569438644!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
];

///////////////////////////////////////////

// funções para criar elementos na tela

function createSlideBall() {
  const div = document.getElementById("event-slide-ball");

  let slideBallContent = ``;

  for (let index = 0; index < events.length; index++) {
    if (index == position) {
      //cria a bolinha de cor amarela na posição da img
      slideBallContent =
        slideBallContent +
        `
            <i id="ball${index}" class="fa-solid fa-circle color-yellow" onclick="changeEventsByBall(${index})"></i>
            `;
    } else {
      //cria a bolinha de cor branca para o resto das img
      slideBallContent =
        slideBallContent +
        `
            <i id="ball${index}" class="fa-solid fa-circle color-white" onclick="changeEventsByBall(${index})"></i>
            `;
    }
  }

  div.innerHTML = slideBallContent;
}

function createGallery(object) {
  let tagGallery = ``;

  for (let place of object) {
    tagGallery =
      tagGallery +
      `
        <div class="gallery-field" onclick="openDetails('${object.indexOf(
          place
        )}')">
            <div class="gallery-img">
                <img src="${place.path}" alt="" onclick="open"> 
            </div>
        </div>
        `;
  }

  galleryContainer.innerHTML = tagGallery;
}

function createHost(object) {
  let tagHost = ``;

  for (let place of object) {
    tagHost =
      tagHost +
      `
            <div class="host-preview">

                    <div class="host-preview-img">
                        <img src="${
                          place.path
                        }" alt="" onclick="openHost('${object.indexOf(
        place
      )}')">
                    </div>
                    
                    <div>
                        <h4>${place.title}</h4>
                        <p>${place.description}</p>
                    </div>
                </div>
        `;
  }

  hostContainer.innerHTML = tagHost;
}

///////////////////////////////////////////

// Funções para mudar informações de algum lugar

function changeColorBall(last) {
  document.getElementById(`ball${last}`).style.color = "white";
  document.getElementById(`ball${position}`).style.color = "yellow";
}

function changeEventsByBall(id) {
  let lastPosition = position;

  position = id;

  imgPrincipal.src = events[parseInt(position)].path;

  changeColorBall(lastPosition);
}

function changeDetails(index) {
  const detailsTitle = document.getElementById("details-title");
  const info = document.getElementById("details-info");
  const detailsImg = document.getElementById("details-img");
  const detailsMaps = document.getElementById("gallery-details-maps");

  detailsImg.src = gallery[index].path;
  detailsTitle.innerHTML = gallery[index].title;
  info.innerHTML = gallery[index].info;

  detailsMaps.innerHTML = gallery[index].iframe;

  const iframe = detailsMaps.children[0];

  const imgExist = gallery[index].iframe.slice(0, 7) == "<iframe";

  if (!imgExist) {
    detailsMaps.innerHTML = "";
    document.getElementById("gallery-details-maps").style.display = "none";
    return;
  }

  document.getElementById("gallery-details-maps").style.display = "flex";
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "100%");
}

function changeHost(index) {
  const hostTitle = document.getElementById("host-title");
  const info = document.getElementById("host-info");
  const hostImg = document.getElementById("host-img");

  hostImg.src = hosts[parseInt(index)].path;
  hostTitle.innerHTML = hosts[parseInt(index)].title;
  info.innerHTML = hosts[parseInt(index)].info;
}

function changeEvent(direction) {
  const lastPosition = position;
  //botão pra esquerda
  if (direction == "left") {
    position = position - 1;

    //se a posição tiver fora do escopo da lista ele mantem no primeiro evento
    if (!events[position]) {
      position = events.length - 1;
    }

    imgPrincipal.src = events[position].path;
  }

  //botão pra direita
  if (direction == "right") {
    position = position + 1;

    //se a posição tiver fora do escopo da lista ele mantem no ultimo evento
    if (!events[position]) {
      position = 0;
    }

    imgPrincipal.src = events[position].path;
  }

  changeColorBall(lastPosition);
}

/////////////////////////////
function disableScroll() {
  document.getElementsByTagName("html")[0].style.overflow = "hidden";
}

function enableScroll() {
  document.getElementsByTagName("html")[0].style.overflow = "visible";
}

//////////////////////

// Abre e fecha detalhes

function openDetails(title) {
  galleryDetailsContainer.style.display = "flex";
  changeDetails(title);
  document.getElementById("gallery-details").style.display = "flex";
  disableScroll();
}

function closeDetails(event) {
  if (event.target.contains(document.getElementById("gallery-details"))) {
    galleryDetailsContainer.style.display = "none";
    enableScroll();
  }
}

function openHost(title) {
  hostDetailsContainer.style.display = "flex";
  disableScroll();

  changeHost(title);
}

function closeHost(event) {
  if (event.target.contains(document.getElementById("host-details"))) {
    hostDetailsContainer.style.display = "none";
    enableScroll();
  }
}

///////////////////////////////////

function centralizarNaSecaoAtual(divClicada) {
  // Obtém a seção atual
  var secaoAtual = divClicada.closest("section");

  // Verifica se a seção atual existe
  if (secaoAtual) {
    // Obtém a posição superior da seção atual em relação ao topo da página
    var posicaoSecao = secaoAtual.offsetTop;

    // Obtém a altura da barra de navegação (se houver)
    var alturaBarraNavegacao = document.querySelector("nav").offsetHeight || 0;

    // Calcula a posição para centralizar a seção na tela
    var posicaoCentralizada =
      posicaoSecao - window.innerHeight / 2 + secaoAtual.offsetHeight / 2;

    // Centraliza a tela na posição calculada
    window.scrollTo({
      top: posicaoCentralizada,
      behavior: "smooth", // Para uma animação suave, se o navegador suportar
    });
  }
}

// Onclick para abrir e fechar os detalhes com o click fora da div
document
  .getElementById("gallery-container")
  .addEventListener("click", function () {
    centralizarNaSecaoAtual(this);
  });

document
  .getElementById("host-container")
  .addEventListener("click", function () {
    centralizarNaSecaoAtual(this);
  });

// function para fechar a tela de detalhes
closeBtnDetails.onclick = () => {
  galleryDetailsContainer.style.display = "none";
  enableScroll();
};

galleryDetailsContainer.onclick = (event) => {
  closeDetails(event);
};

hostDetailsContainer.onclick = (event) => {
  closeHost(event);
};

document.getElementById("closeBtnHost").onclick = () => {
  hostDetailsContainer.style.display = "none";
  document.getElementsByTagName("html")[0].style.overflow = "visible";
};

arrowLeft.onclick = () => {
  changeEvent("left");
};
arrowRight.onclick = () => {
  changeEvent("right");
};

createGallery(gallery);
createHost(hosts);
createSlideBall();
