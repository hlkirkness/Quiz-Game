document.addEventListener('DOMContentLoaded', () => {
    var scoresDiv = document.querySelector("#scores")

    function getScoresHtml() {
        var highscores = JSON.parse(window.localStorage.getItem("highscores"))
        highscores.sort((score1, score2) => {
            return score2[1] - score1[1]
        })

        var html = ""
        highscores.forEach(score => html += "<div>" + score[0] + " scored " + score[1] + "</div>")

        return html
    }

    scoresDiv.innerHTML += getScoresHtml()
})