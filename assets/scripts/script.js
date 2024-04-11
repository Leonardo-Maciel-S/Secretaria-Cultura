const arrowLeft = document.getElementById('fa-arrow-left')
const arrowRight = document.getElementById('fa-arrow-right')
const imgPrincipal = document.getElementById('img-principal')


const events = [
    {
        eventTitle: 'Soccer',
        path: 'assets/img/soccer.jpg'
    }, 
    {
        eventTitle: 'Break Dance',
        path: 'assets/img/break dance.jpg'
    }, 
    {
        eventTitle: 'Show',
        path: 'assets/img/show.jpg'
    },
]


let position = Math.floor(events.length / 2)

console.log(
events[position].path)

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

 
}


arrowLeft.onclick = () => { changeEvent('left') }
arrowRight.onclick = () => {changeEvent('right')}
