"use strict"

let input = document.querySelector('#searchInput');
let pic = document.querySelector('#pic')
let userName = document.querySelector('#userName');
let login = document.querySelector('#login');
let userUrl = document.querySelector('#userUrl');
let blog = document.querySelector('#blog');
let city = document.querySelector('#city');
let email = document.querySelector('#email');
let followers = document.querySelector('#followers');
let following = document.querySelector('#following');
let errorInfo = document.querySelector('.error');
let infoBlock = document.querySelector('.info__block');
//errorInfo.style.display = 'none';



input.addEventListener('keyup', (e)=>{
    if(e.keyCode === 13)
    {
        if (input.value !== '')
        {
            getInfo();
        }
        else alert('Input Login to search');
    }
})

async function getInfo()
{
    let response = await fetch(`https://api.github.com/users/${input.value}`);
    let info = await response.json();
    if(info.message === 'Not Found')
    {
        infoBlock.style.display = 'none';
        errorInfo.style.display = 'flex';
        console.log('No user');
    }
    else
    {
        errorInfo.style.display = 'none';
        infoBlock.style.display = 'flex';
        showInfo(info);
    }
}

function showInfo(info)
{
    console.log('info', info);
    pic.src = info.avatar_url;
    userName.innerText = info.name;
    login.innerText = info.login;
    userUrl.innerText = info.html_url;
    if (info.blog !== '') blog.innerText = info.blog;
    else blog.innerText = 'No blog';
    if (info.location !== '' && info.location !== null) city.innerText = info.location;
    else city.innerText = 'No city';
    if (info.email !== '' && info.email !== null) email.innerText = info.email;
    else email.innerText = 'No email';
    if (info.followers !== '') followers.innerText = info.email;
    else email.innerText = 'No email';
    followers.innerText = info.followers;
    following.innerText = info.following;
    input.value = '';
}