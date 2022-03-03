const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];


// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';

    // Instead of forloop use Map method
    // Code here
    detailedPlayers= players.map(function(item,index,arr){
        arr = {
            name:item,
            image: "images/super-" + (index) + ".png",
            strength: getRandomStrength(),
            type: (index % 2 == 0) ? "hero" : "villain"
        }
        return arr;
    });

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    fragment += players.filter(function(item,index,arr){
            arr = {
                name:item,
                image: "images/super-" + (index) + ".png",
                strength: getRandomStrength(),
                type: type
            }
            return arr;
        }).map(function(item,arr1){
            
            arr1 =`<div class="player">
                <img src="${item.image}"alt=" ">
                <div class="name">${item.name}</div>
                <div class="strength">${item.strength}</div>
            </div>`
            
            return arr1
        });
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}