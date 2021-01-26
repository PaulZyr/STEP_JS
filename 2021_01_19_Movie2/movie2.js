"use strict";
let k = 1;
let title;
let divIco;
let timeIco;

let line = document.querySelector('#line');

class MovieService {
    async search(addr) {
        let response = await fetch(addr);
        if (response.ok)
        {
            return response.json();
        }
    }
    async getDetails(addr) {
        let response = await fetch(addr);
        if (response.ok) {
            return response.json();
        }
    }
}
class ShowMovies {
    showAllItems(movies) {
        //console.log('show this = ', this);
        //console.log('show movies = ', movies);
        result.innerHTML = '';
        films.hidden = false;
        if (movies.Response === 'True')
        {
            for(let movie of movies.Search)
            {
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
            <div class="right"><span>movie</span><h4>${item.Title}</h4>
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
class Interactor {
    constructor() {
        this.moviesService = new MovieService();
        this.showMovies = new ShowMovies();
    }
    async getMovies(title, type, page) {
        let addr = `http://www.omdbapi.com/?apikey=cd3aa8a7&s=${title}&type=${type}&page=${page}`;
        let all = await this.moviesService.search(addr);
        this.showMovies.showAllItems(all);
    }
    async getMovie(imdbID) {
        let addr = `http://www.omdbapi.com/?apikey=cd3aa8a7&i=${imdbID}`;
        let q = await this.moviesService.getDetails(addr);
        this.showMovies.showDetails(q);
    }
}

let interactor = new Interactor();

searchButton.addEventListener('click', ()=>{
    title = titleSearch.value;
    if(title !== '')
    {
        k = 1;
        divIco = createIco();
        icoSearch.append(divIco);
        animIcon(true);
        showDet.hidden = true;
        interactor.getMovies(title, typeSearch.value, k);
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
        interactor.getMovies(title, typeSearch.value, k);
    }
})
document.addEventListener('click', (e)=>{
    if(e.target.className === 'details')
    {
        divIco = createIco();
        icoDetails.append(divIco);
        animIcon(true);
        interactor.getMovie(e.target.dataset.imdbid)
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
        let ang = 300;
        let item = document.querySelector('#line');
        timeIco = setInterval(()=>{
            item.style.transform=`rotate(${ang}deg)`;
            ang = (+ang + 30) % 360;
        }, 100);
    }
    else clearInterval(timeIco);
}
