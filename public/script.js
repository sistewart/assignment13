async function playerProfile(){
    let response = await fetch("/api/players");
    let playersJson = await response.json();

    let contentDiv = document.getElementById("content");

    for(i in playersJson){
        contentDiv.append(makePlayerProfile(playersJson[i]));
    }
}

function makePlayerProfile(player){
    const playerElem = document.createElement("div");
    playerElem.classList.add("player");

    playerName = document.createElement("h2");
    playerName.innerHTML = player.name;
    playerElem.append(playerName);

    playerBio = document.createElement("p");
    playerBio.innerHTML = `He is from ${player.hometown} and is ${player.age} years old.`;
    playerElem.append(playerBio);

    playerTeam = document.createElement("p");
    playerTeam.innerHTML = `He has been playing for ${player.years} years and currently plays for the ${player.current}.`;
    playerElem.append(playerTeam);

    formerTeams = document.createElement("h3");
    formerTeams.innerHTML = `These are the former teams that ${player.name} has played for`;
    playerElem.append(makeFormer(player.former));

    return playerElem;
}

function makeFormer(text){
    let ulElem = document.createElement("ul");

    let dirElem = document.createElement("li");
    dirElem.innerHTML = text;
    ulElem.append(dirElem);

    

    return ulElem;
}

function createImage(path){
    let movImg = document.createElement("img");
    movImg.src = path;

    return movImg;
}

window.onload = function(){
    this.playerProfile();
}