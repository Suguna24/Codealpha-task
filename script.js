const quotes = [
    {
        quote:"The best way to get started is to quit talking and begin doing.",
        author:"Walt Disney"
    },
     {
        quote: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Do something today that your future self will thank you for.",
        author: "Unknown"
    }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex].quote;
    document.getElementById("author").innerText = "- " + quotes[randomIndex].author;
}