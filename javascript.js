
const quotes = [
    {
        quote:"When you reach the end of your rope, tie a knot in it and hang on.", 

        person: "Franklin D. Roosevelt"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else." ,

        person:"-Margaret Mead"
    },
    {
        quote:  "Don't judge each day by the harvest you reap but by the seeds that you plant." ,

        person:"-Robert Louis Stevenson"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams." ,

        person: "-Eleanor Roosevelt"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail." ,

        person: "Ralph Waldo Emerson"
    },

];

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
})
