

const endpoint='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities=[];


fetch(endpoint).then(data=> data.json()).then(res => cities.push(...res));


// console.log(cities);

function filterCities(wordToMatch,cities)
{
    return cities.filter(place=> {
        // console.log(place);
        //g -> global i-> insensitive (case)
        const regex=new RegExp(wordToMatch,'gi')
        //here we need to match with searched city
        return place.city.match(regex) || place.state.match(regex);
    })
}

function getMatches(e){
    const match=filterCities(this.value,cities);
   const html= match.map(eachMatch=> {
        return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>City : ${eachMatch.city} | State : ${eachMatch.state}</span>
      </li>`
    }).join('');
    getListContainer.innerHTML=html.length==0?`<h1 class="nothing-to-see"> Nothing found from your search... </h1>`:html;
}


const searchInput=document.querySelector('.search');
console.log(searchInput);
const getListContainer=document.querySelector('.data-dump');
searchInput.addEventListener('keyup',getMatches);