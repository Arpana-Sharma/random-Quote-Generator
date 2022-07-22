let speech = new SpeechSynthesisUtterance();
speech.lang = "en";
let randomNo = Math.random();
let quote = document.getElementById("quote");
let author = document.getElementById("author");
const copy = document.getElementById("copy");
fetch("https://type.fit/api/quotes")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let x = data[Math.floor(randomNo * data.length)];
        quote.innerHTML = x.text;
        author.innerHTML = x.author;
    });
document.getElementById("new-quote").addEventListener("click", function () {
    randomNo = Math.random();
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let x = data[Math.floor(randomNo * data.length)];
            quote.innerHTML = x.text;
            author.innerHTML = x.author;
        });
});
copy.addEventListener("click",function(){
    navigator.clipboard.writeText(quote.innerHTML);
});

document.getElementById("speech").addEventListener("click",function(){
    speech.text = quote.innerHTML;
    window.speechSynthesis.speak(speech);
});
document.getElementById("tweet").addEventListener("click",function(){
    document.querySelector("a").href = `https://twitter.com/intent/tweet?url=${quote.innerHTML}`;
    document.querySelector("a").click();
});