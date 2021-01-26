$(document).ready(()=>{
    $("button").on('click', ()=>{
        if (checkForm()) {
            $("#result").val(generateRandom());
        }
    })
})

function checkForm() {
    if ($("#long").val() < 4) {
        alert('Too short!');
        return false;
    }
    if ($("#long").val() > 128) {
        alert('Too long!');
        return false;
    }
    if($("input:checked").length < 1) {
        alert('Check at least 1 type of characters');
        return false;
    }
    return true;
}

function generateRandom() {
    let str = '';
    while (str.length <= $("#long").val()) {
        let k = getRandom(3);
        console.log('k = ', k);
        switch(k) {
            case 0:
                if ($("#nums").is(':checked')) {
                    str += getRandom(10);
                }
                break;
            case 1:
                if ($("#uppers").is(':checked')) {
                    str += String.fromCharCode(getRandom(26) + 65);
                }
                break;
            case 2:
                if ($("#lowers").is(':checked')) {
                    str += String.fromCharCode(getRandom(26) + 97);
                }
                break;
        }
    }
    return str;
}

function getRandom(n) {
    return Math.floor(Math.random()*100) % n;
}