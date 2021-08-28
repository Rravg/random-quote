(async function getQuote() {
    let url = 'https://type.fit/api/quotes';
    let response = await fetch(url);
    let data = await response.json();
    randomNumber = Math.floor(Math.random()*data.length)
    document.getElementById('content').innerHTML = data[randomNumber].text;
    if (data[randomNumber].author == null) {
        document.getElementById('author').innerHTML = 'Unknow';  
    } else {
        document.getElementById('author').innerHTML = data[randomNumber].author;
    }
    
})();





