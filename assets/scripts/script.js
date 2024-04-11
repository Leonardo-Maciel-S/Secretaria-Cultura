const arrowLeft = document.getElementById('fa-arrow-left')
const arrowRight = document.getElementById('fa-arrow-right')
const imgPrincipal = document.getElementById('img-principal')


const events = [
    {
        eventTitle: 'Futebol',
        path: 'assets/img/soccer.jpg',
    }, 
    {
        eventTitle: 'Breakdance',
        path: 'assets/img/break dance.jpg'
    }, 
    {
        eventTitle: 'Show',
        path: 'assets/img/show.jpeg'
    },
]


function createSlideBall() {
    const div = document.getElementById('event-slide-ball')
    console.log(div) 
    let slideBallContent = ``

    for (let index = 0; index < events.length; index++) {
        if (index == position) {
            slideBallContent = slideBallContent + `
            <i id="fa-circle-middle" class="fa-solid fa-circle" style="color: #FFD700;"></i>
            `
        } else {
            slideBallContent = slideBallContent + `
            <i id="fa-circle-middle" class="fa-solid fa-circle" style="color: #EDEDED;"></i>
            `
        }
    }

    div.innerHTML = slideBallContent
}

let position = Math.floor(events.length / 2)


async function changeEvent(direction) {

    if (!events[position]) {
        return
    }

    if (direction == "left") {

        position = position - 1

        if (!events[position]) {
            position = 0
        }
        
        document.getElementById('img-principal').src = events[position].path
        document.getElementById('event-title').innerHTML = await events[position].eventTitle
        
        console.log(position)
    }

    if (direction == "right") {
        position = position + 1

        if (!events[position]) {
            position = events.length - 1
        }

        document.getElementById('img-principal').src = events[position].path
        document.getElementById('event-title').innerHTML = await events[position].eventTitle
        
        console.log(position)

    }

    createSlideBall()

 
}


arrowLeft.onclick = () => { changeEvent('left') }
arrowRight.onclick = () => {changeEvent('right')}


