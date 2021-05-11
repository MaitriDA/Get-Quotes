const quotes=document.getElementById('quotes');
const author=document.getElementById('author');
const newBtn=document.getElementById('newBtn');

let orgData="";
let quoteData="";
//Generating Random Number
const   getNewQuotes=()=>{
    let rnum=Math.floor(Math.random()*1643);
    quoteData=orgData[rnum];
    quotes.innerText=`${orgData[rnum].text}`;
    quoteData.author==null
        ?(author.innerText='- UnKnown')
        :(author.innerText=`- ${orgData[rnum].author}`);
}
const getQuotes=async () =>{
    const api="https://type.fit/api/quotes";
    try{
        let data=await fetch(api);
        orgData=await data.json();

        getNewQuotes();
    }
    catch(error){
        console.log(error);
    }
};

newBtn.addEventListener('click',getNewQuotes);
getQuotes();