const quotes = [
    {
        quotes: "Man is distinguished from all other creatures by the faculty of laughter.",
        author: "Joseph Addison",
    },
    {
        quotes: "Everything in your world is created by what you think.",
        author: "Oprah Winfrey",
    },
    {
        quotes: "Always laugh when you can. It is cheap medicine.",
        author: "Lord Byron",
    },
    {
        quotes: "Perpetual optimism is a force multiplier.",
        author: "Colin Powell",
    },
    {
        quotes: "Laughter is by definition healthy.",
        author: "Doris Lessing",
    },
    {
        quotes: "To travel hopefully is a better thing than to arrive.",
        author: "Robert Louis Stevenson",
    },
    {
        quotes: "The human race has one really effective weapon, and that is laughter.",
        author: "Mark Twain",
    },
    {
        quotes: "Don't be afraid your life will end; be afraid that it will never begin.",
        author: "Grace Hansen",
    },
    {
        quotes: "Wheresoever you go, go with all your heart.",
        author: "Confucius",
    },
    {
        quotes: "Paradise is where I am.",
        author: "Voltaire",
    },
    {
        quotes: "I was always looking outside myself for strength and confidence, but it comes from within. It is there all the time.",
        author: "Anna Freud",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;