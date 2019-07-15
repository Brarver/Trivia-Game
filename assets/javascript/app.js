 var items = [{
     question: 'Which of these is not a widely believed cause of death for Kurt Cobain?',
     choices: ['Suicide', 'Heroin overdose', 'Murder', 'Pneumaonia'],
     answer: 'Suicide',
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
    git: 'https://media.giphy.com/media/PT55g5kdMcPQs/giphy.gif'
}]

var count = 0
var number = 30
var intervalId
var correct
var incorrect
var unanswered

$('.question').html('<button class="start">START</button')

$('.start').on('click', function () {

})


function start () {
    intervalId = setInterval(decrement, 1000)
}

function decrement () {
    number--
    $('.time').html('<h2>' + number + '<h2>')

    if (number === 0) {
        timesUp()
    }
}

function timesUp () {
    clearInterval(intervalId)
}

function displayQ () {
    $('.question').html('<h3>' + items[count].question + '<h3>')
    $.each(items[count].choices, function (index, key) {
        $('.choices').append($('<h3>' + key + '</h3>'))
    })
}



displayQ()









//  $('.title').append('<img src=' + items[0].gif + '>')
//  console.log(items[2].choices[1])