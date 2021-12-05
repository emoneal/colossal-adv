const readline = require("readline-sync")
let playerInv = { item: "apple" }
let playerHP = 50
let monsterList = ["snake", "boar", "minotaur"]
let snakeHP = 20
let boarHP = 20
let minotaurHP = 30
let isCompleted = false

const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)

}

const useItem = (item) => {
    if (item === apple) {
        playerHP += 10
        console.log(`You use ${item}. Your HP is now ${playerHP}`)
        return playerHP
    }
}




console.log("You have entered a realm of darkness. You only have the warmth of your latern in this scary cave that you are attempting to escape from. You meet an old man in the cave.  He asks:")
const playerName = readline.question("What is your name? \n")
console.log("Hello " + playerName.charAt(0).toUpperCase() + playerName.slice(1) + " ! \nTo start your adventure, please press the w key to continue walking forward.")

while (monsterList.length > 0) {
    console.log("Please type w and press enter to walk further into the dungeon.  Enter p to see your inventory")
    let answer = readline.question("What will you do? \n")
    if (answer === "w") {
        onWalk()
    } else if (answer === "p") {
        if (playerInv.item.length === 0) {
            console.log("You don't have anything yet...")
        } else if (answer === "p" && playerInv.item.length >= 1) {
            console.log("You currently have: " + playerInv.item)
            console.log("To use an item, say use <item>")

        } else if (answer === "use apple") {
            useItem(apple)
        }

    }
    if (snakeHP > 0 && minotaurHP > 0 && boarHP > 0) {
        console.log("You progress further down the dungeon")

    } else if (snakeHP <= 0 && minotaurHP <= 0 && boarHP <= 0) {
        console.log("You have completed the dungeon and escaped the cave! You win!")
        isCompleted = true
        return isCompleted
    } else if (playerHP <= 0) {
        console.log("You have died a terrible death with a lot of pain. Try again!")
        break
    }

function ohEncounter(HP, enemyName){
    while (HP > 0 && playerHP > 0) {
        let battleCommand = readline.question("You encounter a wild snake! You have " + playerHP + "HP Will you attack or run?\n")
        if (battleCommand === "attack") {
            if (Math.random() * 100 < 50) {
                HP -= getRandomInt(5, 10)
                console.log("You hit the snake! The snake now has " + HP + "HP")
                playerHP -= getRandomInt(5, 10)
                console.log("The snake hits back!  Your HP is now " + playerHP + " HP")
            } else {
                console.log("You miss!")
            }
            if (HP <= 0) {
                let index = monsterList.indexOf("snake")
                monsterList.splice(index, 1)
                console.log("The snake faints!")
                playerHP += 10
                console.log("You recover 10 HP.  You now have " + playerHP + " HP")
                return HP, playerHP
            }
        }

        if (battleCommand === "run") {
            if (Math.random() * 100 < 50) {
                console.log("You escape from the snake!")
                return playerHP, HP

            } else if (Math.random.random() * 100 > 50) {
                console.log("You attempt to escape, but you can't!")
            }
        }
    }
}

    

    function onWalk() {

        if (Math.random() * 100 < 30 && snakeHP !== 0) {
            ohEncounter(snakeHP, "snake")
            while (snakeHP > 0 && playerHP > 0) {
                let battleCommand = readline.question("You encounter a wild snake! You have " + playerHP + "HP Will you attack or run?\n")
                if (battleCommand === "attack") {
                    if (Math.random() * 100 < 50) {
                        snakeHP -= getRandomInt(5, 10)
                        console.log("You hit the snake! The snake now has " + snakeHP + "HP")
                        playerHP -= getRandomInt(5, 10)
                        console.log("The snake hits back!  Your HP is now " + playerHP + " HP")
                    } else {
                        console.log("You miss!")
                    }
                    if (snakeHP <= 0) {
                        let index = monsterList.indexOf("snake")
                        monsterList.splice(index, index)
                        console.log("The snake faints!")
                        playerHP += 10
                        console.log("You recover 10 HP.  You now have " + playerHP + " HP")
                        return snakeHP, playerHP
                    }
                }

                if (battleCommand === "run") {
                    if (Math.random() * 100 < 50) {
                        console.log("You escape from the snake!")
                        return playerHP, snakeHP

                    } else if (Math.random.random() * 100 > 50) {
                        console.log("You attempt to escape, but you can't!")
                    }
                }
            }
        }

        if (Math.random() * 100 < 30 && minotaurHP !== 0) {
            while (minotaurHP > 0 && playerHP > 0) {
                let battleCommand = readline.question("You encounter a wild minotaur! Will you attack or run?\n")
                if (battleCommand === "attack") {
                    if (Math.random() * 100 < 50) {
                        minotaurHP -= getRandomInt(5, 10)
                        console.log("You hit the minotaur! The minotaur now has " + minotaurHP + "HP")
                        playerHP -= getRandomInt(5, 10)
                        console.log("The minotaur hits back!  Your HP is now " + playerHP + " HP")

                        if (minotaurHP <= 0) {
                            let index = monsterList.indexOf("minotaur")
                            monsterList.splice(index, index)
                            console.log("The minotaur faints!")
                            playerHP += 10
                            console.log("You recover 10 HP.  You now have " + playerHP + " HP")
                            return minotaurHP, playerHP

                        }
                    }
                }
                if (battleCommand === "run") {
                    if (Math.random() * 100 < 50) {
                        console.log("You escape from the minotaur!")
                        return minotaurHP, playerHP
                        break
                    } else {
                        console.log("You attempt to escape the minotaur, but you can't!")
                    }
                }
            }
        } else if (Math.random() * 100 < 30 && boarHP !== 0) {
            while (boarHP > 0 && playerHP > 0) {
                let battleCommand = readline.question("You encounter a wild boar! Will you attack or run?\n")
                if (battleCommand === "attack") {
                    if (Math.random() * 100 < 50) {
                        boarHP -= getRandomInt(5, 10)
                        console.log("You hit the boar! The boar now has " + boarHP + "HP")
                        playerHP -= getRandomInt(5, 10)
                        console.log("The boar hits back!  Your HP is now " + playerHP + "HP")
                        if (boarHP <= 0) {
                            let index = monsterList.indexOf("boar")
                            monsterList.splice(index, index)
                            console.log("The boar faints!")
                            playerHP += 10
                            console.log("You recover 10 HP.  You now have " + playerHP + " HP")
                            return playerHP, boarHP
                            break
                        }
                    }
                }
                if (battleCommand === "run") {
                    if (Math.random() * 100 < 50) {
                        console.log("You escape from the boar!")
                        return boarHP, playerHP
                        break
                    } else {
                        console.log("You attempt to escape the boar, but you can't!")
                    }
                }
            }


        }
    }
}