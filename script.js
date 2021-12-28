let quote1 = 'İstediğinin peşinden koşarken ne hale geldiğine dikkat et. - Jim Rohn';
let quote2 = 'Sana ne olduğu değil, ona nasıl tepki verdiğin önemlidir. - Epiktetos';
let quote3 = 'En iyi intikam büyük bir başarıdır. - Frank Sinatra';
let quote4 = "Yapmadığın şutların %100'ünü kaçırıyorsun. - Wayne Gretzy";
let quote5 = 'Kızgınlık, zehir içip düşmanlarının ölmesini beklemek gibidir. - Nelson Mandela';
let quote6 = 'Hayatı fazla ciddiye almayın. Canlı çıkmayacaksın. - Elbert Hubbard';

let quotes=[quote1,quote2,quote3,quote4,quote5,quote6].sort();
let days=["pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"];
console.log(quotes)
function generateQuote(){
    let randomNum =Math.floor(Math.random()*quotes.length) 

    return console.log(`bugün ${days[randomNum]} günü ve bugünün alıntısı ${quotes[randomNum]}`)
}



document.getElementById("btn").addEventListener("click", generateQuote);