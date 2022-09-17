var quotes = document.getElementById('quotes')
var author = document.getElementById('author')
var firstRndm = Math.floor(1600 * Math.random())

//it seems quote when the page is opened for the first time
var numb = firstRndm
getData(numb)

function randomNumb() { 
    var randomNumb = Math.floor(1600 * Math.random()) 
    numb = randomNumb 
    getData(numb)
}

function getData(numb){
    fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(data => {
        quotes.innerHTML = data[numb].text 
        author.innerHTML = data[numb].author 
        if(data[numb].author === null){
            author.innerHTML = 'Anonymous'
        }
    })
}