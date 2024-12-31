const quote=document.querySelector("#quote");
const author=document.querySelector("#author");
const but=document.querySelector("#but");
const twt=document.querySelector("#twt");
const reset=document.querySelector("#reset");
but.addEventListener("click",getQuote);
function getQuote(){
    fetch("https://api.quotable.io/random")
    .then(res=>res.json())
    .then(data=>{
        quote.textContent=data.content;
        author.textContent=data.author;
    }

    )
}
twt.addEventListener("click",tweet);
function tweet(){
    window.open("https://wa.me/?text="+quote.textContent+"--by " + author.textContent);
}
reset.addEventListener("click",re);
function re(){
    quote.textContent="Quote here by...";
    author.textContent="author";

}
