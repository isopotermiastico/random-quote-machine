function fetch_new_quote()
{
const quote_div = document.getElementById("quote");
quote_div.textContent = "Loading quote...";
fetch("https://api.quotable.io/quotes/random").then(result => result.json())
.then(ar => {
    const quote_text = ar[0].content;
  
    quote_div.textContent = quote_text;
});    
}

fetch_new_quote()


const button = document.getElementById("new-quote");
button.addEventListener("click", fetch_new_quote);