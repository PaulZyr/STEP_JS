let buyArray = new Array();

function addBuyItem()
{
    let name = document.getElementById("buyName").value;
    let quantity = document.getElementById("buyQuantity").value;
    let buyItem = {
        'Name': name,
        'Quantity': quantity,
        'Done': false
    }
    buyArray.push(buyItem);
    createStructure();
    buyArrayToScreen();
}
function buyItemToString(item)
{
    return item.Name + ' ' + item.Quantity;
}
function buyArrayToScreen()
{
    if (buyArray.length > 0) {
        createStructure();
        for (let i = 0; i < buyArray.length; i++)
        {
            let numStr = "list__item--num-" + i;
            document.getElementById(numStr).innerHTML = (i+1);

            let nameStr = "list__item--name-" + i;
            document.getElementById(nameStr).innerHTML = buyArray[i].Name;

            let qtyStr = "list__item--quantity-" + i;
            document.getElementById(qtyStr).innerHTML = buyArray[i].Quantity;

            let checkStr = "check" + i;
            if (buyArray[i].Done === true)
            {
                document.getElementById(checkStr).checked = true;
            }
        }
    }
    else
    {
        document.getElementById("print-undone").innerHTML = '';
        document.getElementById("print-done").innerHTML = '';
    }
}
function createStructure()
{
    let resultDone = ``;
    let resultUndone = ``;

    for (let i = 0; i < buyArray.length; i++)
    {
        
        if(buyArray[i].Done === true)
        {
            resultDone += '' + `<div class="list__item">
            <div class="idiv list__item-num"><span id="list__item--num-${i}">'---'</span></div>
            <div class="idiv list__item-name"><span id="list__item--name-${i}">'---'</span></div>
            <div class="idiv list__item-quantity"><span id="list__item--quantity-${i}">'---'</span></div>
            <div class="idiv list__item-status"><input type="checkbox" id="check${i}" onclick="checkUndone(this.id)"></div></div>`;
        }
        else
        {
            resultUndone += '' + `<div class="list__item">
            <div class="idiv list__item-num"><span id="list__item--num-${i}">'---'</span></div>
            <div class="idiv list__item-name"><span id="list__item--name-${i}">'---'</span></div>
            <div class="idiv list__item-quantity"><span id="list__item--quantity-${i}">'---'</span></div>
            <div class="idiv list__item-status"><input type="checkbox" id="check${i}" onclick="checkDone(this.id)"></div></div>`;
        }
    }
    document.getElementById("print-undone").innerHTML = resultUndone;
    document.getElementById("print-done").innerHTML = resultDone;
}
function checkDone(buttonId) 
{
    let N = parseInt(buttonId.substr(5));
    buyArray[N].Done = true;
    buyArrayToScreen();
}
function checkUndone(buttonId) 
{
    let N = parseInt(buttonId.substr(5));
    buyArray[N].Done = false;
    buyArrayToScreen();
}
function newList() 
{
    buyArray.length = 0;
    buyArrayToScreen();
}


// -------- task 2 --------------------------


let billArray = new Array();

function addBillItem()
{
    let name = document.getElementById("task2-billName").value;
    let quantity = document.getElementById("task2-billQuantity").value;
    let price = document.getElementById("task2-billPrice").value;

    let billItem = {
        'Name': name,
        'Quantity': quantity,
        'Price': price,
    }

    billArray.push(billItem);
    createBillStructure();
    billArrayToScreen();
}

function createBillStructure()
{
    let billResult = '';

    for (let i=0; i < billArray.length; ++i)
    {
        billResult += `<div class="task2__items">
        <div class="task2__item t2-n"><span id="tsk2-name${i}"></span></div>
        <div class="task2__item t2-p"><span id="tsk2-price${i}"></span></div>
        <div class="task2__item t2-q"><span id="tsk2-qty${i}"></span></div>
        <div class="task2__item t2-s"><span  id="tsk2-sum${i}"></span></div>
        </div>`;
    }

    document.getElementById("print-task2").innerHTML = billResult;
}
function billArrayToScreen()
{
    let all_sum = 0;
    for (let i=0; i < billArray.length; ++i)
    {
        document.getElementById(`tsk2-name${i}`).innerHTML = billArray[i].Name;
        document.getElementById(`tsk2-price${i}`).innerHTML = billArray[i].Price;
        document.getElementById(`tsk2-qty${i}`).innerHTML = billArray[i].Quantity;
        let sum = billArray[i].Price * billArray[i].Quantity;
        document.getElementById(`tsk2-sum${i}`).innerHTML = sum;
        all_sum += sum;
    }
    document.getElementById(`tsk2_sum-all`).innerHTML = all_sum;
}
function newBill()
{
    billArray.length = 0;
    document.getElementById("print-task2").innerHTML = "--- empty ---";
}


// -------- task 3 --------------------------

let styleArray = new Array();

function addStyleItem(buttId)
{
    let obj = new Object();
    obj[`${buttId}`] = document.getElementById(buttId + 'Z').value;

    for (let i = 0; i < styleArray.length; ++i)
    {
        if (buttId in styleArray[i])
        {
            styleArray[i][buttId] = obj[buttId];
            document.getElementById(buttId + 'Z').value = '';
            showStyle();
            return;
        }
    }
    document.getElementById(buttId + 'Z').value = '';
    styleArray.push(obj);
    showStyle();
}

function applyStyles()
{
    let result = `<p style="`;
    for (let i = 0; i < styleArray.length; ++i)
    {
        for (let item in styleArray[i])
        {
            result += item + ':' + styleArray[i][item] + ';';
        }
    }
    result += `padding:20px;`
    result += `">` + document.getElementById("task3-area").value;
    result += `</p>`;
    document.getElementById("task3-res").innerHTML = result;
}

function showStyle()
{
    let result = `style = `;
    for (let i = 0; i < styleArray.length; ++i)
    {
        for (let item in styleArray[i])
        {
            result += ' ' + item + ': ' + styleArray[i][item] + ';';
        }
    }
    document.getElementById("tmp-styles").innerHTML = result;
}