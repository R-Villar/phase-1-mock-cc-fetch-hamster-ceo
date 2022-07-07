// write your code here

// where we will have our hamsters images
const hamsterMenu = document.querySelector('div#hamster-menu')

// where we will have our hamsters details
const hamsterDetails = document.getElementById('hamster-detail')

// where we will display our selected hamster
const detailImage = document.querySelector('.detail-image')

// get all of our hamsters data
fetch('http://localhost:3000/hamsters')
.then(response => response.json())
.then(data => data.forEach(getHamsters))


function getHamsters(data) {
    // adds a new img element for each image in our hamster data
    const hamImages = document.createElement('img')
    hamImages.src = data.image
    hamsterMenu.append(hamImages)

    // displays our selected hamster 
    hamImages.addEventListener('click', () => {
        displayDetails(data)

        // detailImage.src = hamImages.src
    })
   
    displayDetails(data)

}

function displayDetails(data) {
    // this is where we will add our hansters name
    const hamsterName = document.querySelector('.name')
    hamsterName.textContent = data.name 

    // hamster occcupation 
    const occcupation = document.querySelector('.occupation')
    occcupation.textContent = data.occupation

    detailImage.src = data.image
}

// get user imput
const form = document.getElementById('new-hamster')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    // get user imput for new hamsters
    const hamsterName = document.getElementById('new-name').value
    const occupation = document.getElementById('new-occupation').value
    const hamsterImage = document.getElementById('new-image').value

    // adds the new hamster to the top with other hamsters
    const hamster = {
        name: hamsterName,
        occupation: occupation,
        image: hamsterImage
    }

    if (!emptyFields(hamsterName, occupation, hamsterImage)) {
        getHamsters(hamster)
    }
    
    form.reset()
    // after user submits the new hamster it clears the fields
    
})

// validates if the user is submiting an empty fields
function emptyFields(name, occcupation, image) {
    if (name === '') {
        alert('Your hamster needs a name')
        return true 
    } else if (occcupation === '') {
        alert('Your hamster needs to have an occupation')
        return true
    } else if (image === ''){
        alert('Your hamster needs an image')
        return true
    }
}