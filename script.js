let btn = document.getElementById('new-quote');
let quote = document.getElementById('quote');
let person = document.getElementById('person');

const quotes = [{
    quote:'i am ironman',
    person:'Tony stark'
},{
    quote:'suii',
    person: 'cristiano ronaldo'
},{
    quote:'i am batman',
    person: 'Bruce wayne'
}];

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random].quote;
    person.textContent = quotes[random].person;
})