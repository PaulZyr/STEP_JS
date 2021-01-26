$(document).ready( ()=> {
    let rightMove = false;
    let leftMove = false;
    let rightY;
    let leftY;
    $("#rightMiddle").on('mousedown', (e)=>{
        rightMove = true;
    })
    $("#leftMiddle").on('mousedown', (e)=>{
        leftMove = true;
    })
    $(document).on('mousemove', (e)=>{
        if(rightMove) {
            let y = e.clientY - 10;
            if (y >= 100 && y <= (innerHeight - 120)) {
                $("#rightTop").css('height', y);
                $("#rightBottom").css('height', innerHeight - (+y+20));
            }
        }
        if(leftMove) {
            let y = e.clientY - 10;
            if (y >= 100 && y <= (innerHeight - 120)) {
                $("#leftTop").css('height', e.clientY - 10);
                $("#leftBottom").css('height', innerHeight - (+y+20));
            }
        }
    })
    $(document).on('mouseup', ()=>{
        rightMove = false;
        leftMove = false;
    })
    $("#panel").on('click', ()=>{
        $(".arrowR, .arrowL, .left").toggle();
        $(".right").toggleClass('minimus');
    })
});
