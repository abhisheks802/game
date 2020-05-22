let GameManager = {
    setGameStart: function (classtype) {
        this.resetPlayer(classtype);
        this.setPreFight();
    },
    resetPlayer: function (classtype) {
        switch (classtype) {
            case "Goku":
                player = new Player(classtype,250,220,100,50,150);
                break;
            case "Vegeta":
                player = new Player(classtype,180,150,70,50,100);
                break;
            case "Trunks":
                player = new Player(classtype,100,130,50,30,90);
                break;
            case "Piccolo":
                player = new Player(classtype,150,140,65,40,100);
                break;
        }
        let getInterface = document.querySelector(".interface")
        getInterface.innerHTML = '<img src="img/Team/' + classtype.toLowerCase() + '.png" class="img-avatar"><div><h3>' + classtype + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Mana: ' + player.mana + '</p><p>Speed: ' + player.speed + '</p></div>'
    },
    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".action");
        let getArena = document.querySelector(".Arena");
        getHeader.innerHTML = '<p>Task: Find an enemy !</p>'
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search For an enemy</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".action");
        let getEnemy = document.querySelector(".enemy");

        let enemy00 = new Enemy("Frieza",100, 130, 60, 40, 120);
        let enemy01 = new Enemy("Buu",150, 150, 70, 40, 140);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));

        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move !</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack</a>';
        getEnemy.innerHTML = '<img src="img/Enemy/' + enemy.enemytype.toLowerCase() + '.png" alt="' + enemy.enemytype + '" class="img-avatar"><div><h3>' + enemy.enemytype + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Mana: ' + enemy.mana + '</p><p>Speed: ' + enemy.speed + '</p></div>'
    }
}