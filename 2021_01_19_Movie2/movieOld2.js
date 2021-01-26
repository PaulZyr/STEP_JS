"use strict";
let k = 1;
let data;
let title;
let divIco;
let timeIco;

let line = document.querySelector('#line');

class MovieService {
    async search(title, type, page = 1) {
        let response = await fetch(`http://www.omdbapi.com/?apikey=cd3aa8a7&s=${title}&type=${type}&page=${page}`);
        if (response.ok)
        {
            //console.log('MovieService = DONE!!!');
            let movies = await response.json();
            showMovies.showAllItems(movies);
        }
    }
    async getDetails(imdbID) {
        let response = await fetch(`http://www.omdbapi.com/?apikey=cd3aa8a7&i=${imdbID}`);
        if (response.ok) {
            //console.log('GetDetails = DONE!!!');
            let details = await response.json();
            showMovies.showDetails(details);
        }
    }
}
class ShowMovies {
    showAllItems(movies) {
        result.innerHTML = '';
        films.hidden = false;
        if (movies.Response === 'True')
        {
            for(let movie of movies.Search)
            {
                console.log('this', this);
                this.createItem(movie);
            }
            createNav(movies.totalResults);
            titleSearch.value = '';
            animIcon(false);
            divIco.remove();
        }
        else {
            result.innerHTML = movies.Error;
        }
    }
    createItem(item) {
        let div = document.createElement('div');
        div.className = 'res-item';
        div.innerHTML = `<div class="left"><img src="${item.Poster}" alt=""></div>
            <div class="right"><span>movie</span><h5>${item.Title}</h5>
            <span>${item.Year}</span><button class="details" type="button" data-imdbID="${item.imdbID}">Details</button></div>`;
        result.append(div);
        }
    showDetails(dtl) {
        //console.log('details = ', dtl);
        titleDetails.innerText = dtl.Title;
        releaseDetails.innerText = dtl.Released;
        genreDetails.innerText = dtl.Genre;
        countryDetails.innerText = dtl.Country;
        directorDetails.innerText = dtl.Director;
        writerDetails.innerText = dtl.Writer;
        actorsDetails.innerText = dtl.Actors;
        awardsDetails.innerText = dtl.Awards;
        pictDet.src = dtl.Poster;
        showDet.hidden = false;
        animIcon(false);
        divIco.remove();
    }
}

let moviesService = new MovieService();
let showMovies = new ShowMovies();

searchButton.addEventListener('click', ()=>{
    title = titleSearch.value;
    if(title !== '')
    {
        k = 1;
        divIco = createIco();
        icoSearch.append(divIco);
        animIcon(true);
        showDet.hidden = true;
        moviesService.search(title, typeSearch.value, k);
    }
    else {
        alert("Input title!");
    }
})
nav.addEventListener('click', (e)=>{
    if (e.target.className === 'nav-item')
    {
        divIco = createIco();
        icoResult.append(divIco);
        animIcon(true);
        let buttons = document.querySelectorAll('.nav-item');
        buttons.forEach(elem => {
            elem.disabled = true;
        });
        showDet.hidden = true;
        k = e.target.id;
        moviesService.search(title, typeSearch.value, k);
    }
})
document.addEventListener('click', (e)=>{
    if(e.target.className === 'details')
    {
        divIco = createIco();
        icoDetails.append(divIco);
        animIcon(true);
        moviesService.getDetails(e.target.dataset.imdbid);
        showDet.hidden = false;
    }
})

function createNav(num)
{
    nav.style.display='flex';
    nav.innerHTML = '';
    createNavItem('First', 1);
    if (+k > 1)
    {
        createNavItem('Previous', +k-1);
    }
    if (num >= 10)
    {
        createNavItem('Next', +k+1);
    }
}
function createNavItem(str,n)
{
    let button = document.createElement('button');
    button.type = 'button';
    button.className = 'nav-item';
    button.innerText = str;
    button.id = n;
    nav.append(button)
}

function createIco()
{
    let div = document.createElement('div');
    div.innerHTML = `<div class="loadIco" id="loadIco">
    <div class="line" style="transform: rotate(0deg);"></div>
    <div class="line" style="transform: rotate(30deg);"></div>
    <div class="line" style="transform: rotate(60deg);"></div>
    <div class="line" style="transform: rotate(90deg);"></div>
    <div class="line" style="transform: rotate(120deg);"></div>
    <div class="line" style="transform: rotate(150deg);"></div>
    <div id="line" style="transform: rotate(300deg);">
    <div class="line-part1"></div><div class="line-part2"></div></div>
    <div class="circle"></div></div>`;
    return div;
}

function animIcon(b)
{
    if (b) {
        //console.log('animIco here');
        let ang = 300;
        let item = document.querySelector('#line');
        timeIco = setInterval(()=>{
            item.style.transform=`rotate(${ang}deg)`;
            ang = (+ang + 30) % 360;
        }, 100);
    }
    else clearInterval(timeIco);
}
