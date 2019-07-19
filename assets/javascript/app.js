 var items = [{
     question: 'Which of these is not a widely believed cause of death for Kurt Cobain?',
     choices: ['Suicide', 'Heroin overdose', 'Murder', 'Pneumonia'],
     answer: 'Pneumonia',
     gif: 'https://media.giphy.com/media/l41m2n5acbmro6raU/giphy.gif'
 },{
    question: 'Which of these bands is not from Seattle?',
    choices: ['Alice in Chains', 'Mudhoney', 'Stone Temple Pilots', 'Soundgarden'],
    answer: 'Stone Temple Pilots',
    gif: 'https://media.giphy.com/media/IJ2DavaXhC1Lq/giphy.gif'
},{
    question: 'Who is Lori Goldston?',
    choices: ['The drummer for Hole', 'The cellist for Nirvana\'s Unplugged', 'The rythm guitarist for L7', 'Billy Corgan\'s love interest'],
    answer: 'The cellist for Nirvana\'s Unplugged',
    gif: 'https://media.giphy.com/media/ZHO08nSe59A0E/giphy.gif'  
},{
    question: 'Who is Pat Smear?',
    choices: ['The guitarist for Alice in Chains', 'The producer of Sixteen Stone', 'Nirvana\'s touring guitarist', 'Nobody. I made him up.'],
    answer: 'Nirvana\'s touring guitarist',
    gif: 'https://media.giphy.com/media/xUOxeYlmjPIDA0MZ5m/giphy.gif'
},{
    question: 'Which of the following is not a Pearl Jam album?',
    choices: ['No Code', 'Badmotorfinger', 'Riot Act', 'Lightning Bolt'],
    answer: 'Badmotorfinger',
    gif: 'https://media.giphy.com/media/PT55g5kdMcPQs/giphy.gif'
}]

var count = 0
var number = 15
var intervalId
var correct = 0
var incorrect = 0
var unanswered = 0

$('.question').html('<button class="start">START</button>')

$('.start').on('click', function () {
    displayQ()    
})


function start() {
    number = 15
    intervalId = setInterval(decrement, 1000)
    $('.time').html('<div class="time-number"><h2>Time Remaining: 15 Seconds<h2></div>')
}

function decrement() {
    number--
    $('.time').html('<div class="time-number"><h2>Time Remaining: ' + number + ' Seconds<h2>')

    if (number === 0) {
        timesUp()
    }
}

function displayQ() {
    console.log(count)

    if (count === items.length) {
        displayStats()
        console.log('bear')
        return
    }

    start()
     
    $('.question').html('<h3 class="test">' + items[count].question + '</h3>')
    
    $.each(items[count].choices, function (index, key) {

        $('.row'+[index]).html($('<div class="check">' + key + '</div>'))
    })

    checkAnswer()
}

function checkAnswer() {
    $('.check').on('click', function (e) {
        if (e.target.innerText === items[count].answer) {
            displayWin()
        } else {
            dispalyLoss()
        }
})
}

function displayWin() {
    
    $('.question').html($('<h3 class="test">CORRECT!</h3>'))
    $('.row0').html('<img class="gif" src=' + items[count].gif + '>')
    $('.row1, .row2, .row3').empty()
    clearInterval(intervalId)
    correct++
    count++
    setTimeout(displayQ, 4000)

}

function dispalyLoss() {
    $('.question').html($('<h3 class="dif">NOPE! <br> The correct answer is: <br>' + items[count].answer + '</h3>'))
    $('.row0').html('<img class="gif" src=' + items[count].gif + '>')
    $('.row1, .row2, .row3').empty()
    incorrect++
    clearInterval(intervalId)
    count++
    setTimeout(displayQ, 4000)
}

function timesUp() {
    clearInterval(intervalId)
    $('.question').html($('<h3 class="dif">TIMES UP!<br>The correct answer was:<br>' + items[count].answer + '</h3>'))
    $('.row0').html('<img class="gif" src=' + items[count].gif + '>')
    $('.row1, .row2, .row3').empty()
    unanswered++
    count++
    setTimeout(displayQ, 4000)

}

function displayStats() {
    $('.row0, .row1, .row2, .row3').empty()
    $('.question').html('<h3 class="test">All done, here\'s how you did!</h3>')
    $('.row0').html($('<div class="q">Correct Answers: ' + correct + '</div>'))
    $('.row1').html($('<div class="q">Incorrect Answers: ' + incorrect + '</div>'))
    $('.row2').html($('<div class="q">Unanswered: ' + unanswered + '</div>'))
    $('.row3').html($('<button class="reset">Start Over</button>'))

    $('.reset').on('click', function () {
        count = 0
        correct = 0
        incorrect = 0
        unanswered = 0

        displayQ()
    })

}


