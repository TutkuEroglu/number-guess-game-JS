const inputNumber = document.querySelector(".numberInput")
const checkButton = document.querySelector(".numberButton")
const info = document.querySelector(".numberInfoDiv")
const score = document.querySelector(".scoreDiv")
const highScore = document.querySelector(".highScoreDiv")
const againButton = document.querySelector(".againButton")

let secretNumber = Math.floor(Math.random() * 20) + 1

let scoreNumber = 20
let highScoreNumber = 0

info.textContent = "✨ Now it's your turn to guess"
score.textContent = `⭐ Score: ${scoreNumber}`
highScore.textContent = `🌟 Highscore: ${highScoreNumber}`

function changeInfo(text) {
    info.textContent = text
}

checkButton.addEventListener("click", function () {
    const playerGuess = Number(inputNumber.value)

    if (!playerGuess) {
        changeInfo("⛔ Your guess cannot be empty or text!")
    } else {
    if (playerGuess) {
        if (scoreNumber > 1) {
        if (playerGuess === secretNumber) {
            changeInfo("🎉 Correct number!")
            scoreNumber += 5
            score.textContent = `⭐ Score: ${scoreNumber}`
            let newSecretNumber = Math.floor(Math.random() * 20) + 1
            secretNumber = newSecretNumber
            if (scoreNumber > highScoreNumber) {
                highScoreNumber = scoreNumber
                highScore.textContent = `🌟 Highscore: ${highScoreNumber}`
            }   
        } else if (playerGuess > secretNumber) {
            changeInfo("📈 Your guess too high!")
            scoreNumber--
            score.textContent = `⭐ Score: ${scoreNumber}`
        } else  {
            changeInfo("📉 Your guess too low!")
            scoreNumber--
            score.textContent = `⭐ Score: ${scoreNumber}`
        }
    } else {
        changeInfo("💥 You lost. Try again!")
    }
    }
}
})


againButton.addEventListener("click", function () {
    StartAgain()
})

function StartAgain() {
    scoreNumber = 20
    changeInfo("✨ Now it's your turn to guess")
    score.textContent = `⭐ Score: ${scoreNumber}`
    let newSecretNumber = Math.floor(Math.random() * 20) + 1
    secretNumber = newSecretNumber
}

