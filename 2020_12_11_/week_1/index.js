// ----- task 1 -----
function task1()
{
    let brand = document.getElementById("brand").value;
    let model = document.getElementById("model").value;
    let year = document.getElementById("year").value;
    let speed = parseInt(document.getElementById("speed").value);
    let dist = parseInt(document.getElementById("distance").value);
    if (speed != speed || dist != dist)
    {
        document.getElementById("res1").value = "В полях 'Средняя скорость' и 'Дистанция' должны быть числа!\n";
        return;
    }
    let car = new Car(brand, model, year, speed);
    document.getElementById("res1").value = (carToString(car) + countTime(car, dist));
}

function Car (brand, model, year, speed)
{
    return {
        'Brand': brand,
        'Model': model,
        'Year': year,
        'Speed': speed
    }
}

function carToString(car)
{
    return "Car:\nBrand: " + car.Brand + "\nModel: " + car.Model + "\nYear: " 
            + car.Year + "\nAver. Speed: " + car.Speed + '\n';
}

function countTime(car, dist)
{
    let res = dist / car.Speed;
    // let increase = Math.floor(res / 4);
    res += Math.floor(res / 4);
    let hours = Math.floor(res);
    let minutes = Math.floor((res - hours) * 60);
    return 'Машина преодолеет дистанцию за:\n' + hours + ' ч. ' + minutes + ' мин.\n';
}

// ----- task2 -----

function task2(q)
{
    let num1 = parseInt(document.getElementById("numer1").value);
    let den1 = parseInt(document.getElementById("denom1").value);
    let num2 = parseInt(document.getElementById("numer2").value);
    let den2 = parseInt(document.getElementById("denom2").value);

    if (den1 === 0 || den2 === 0)
    {
        document.getElementById("res2").value = "Знаменатель не может быть равен 0";
        return;
    }

    let frac1 = new fraction(num1, den1);
    let frac2 = new fraction(num2, den2);
    let res = 'Дробь 1: ' + fracToString(frac1) + '\nДробь 2: ' + fracToString(frac2) + '\n';
    
    if(q === '1')
    {
        res += "Результат сложения:\n" + fracToString(sumFrac(frac1, frac2));
    }
    else if(q === '2')
    {
        res +=  "Результат вычитания:\n" + fracToString(subtractFrac(frac1, frac2));
    }
    else if(q === '3')
    {
        res +=  "Результат умножения:\n" + fracToString(multipleFrac(frac1, frac2));
    }
    else if(q === '4')
    {
        if (frac2.Numerator === 0)
        {
            res +=  "Вторая дробь равна 0\nНа ноль делить за пределами Теоретической Математики запрещено\nЖалобы не принимаются!\n";
        }
        else if (frac1.Numerator === 0)
        {
            res +=  "Результат деления:\n0";
        }
        else 
        {
            res += "Результат деления:\n" + fracToString(divideFrac(frac1, frac2));
        }
        
    }
    document.getElementById("res2").value = res;
}

function fraction(numer, denom)
{
    if (denom < 0)
    {
        numer = - numer;
        denom = - denom;
    }
    return {
        'Numerator': numer,
        'Denominator': denom
    }
}

function fracToString(frac)
{
    let res = '';
    let a = frac.Numerator;
    let b = frac.Denominator;
    let c = 0;
    let minus = false;

    if (b < 0) 
    {
        a = -a;
    }
    if (a < 0)
    {
        minus = true;
        a = -a;
    }
    if (a === b) 
    {
        res = '1';
    }
    else if (a > b)
    {
        c = Math.floor(a / b);
        a = a - c * b;
        if (a === b)
        {
            res = c + '';
        }
        else{
            res = c + ' ' + a + "/" + b;
        }
    }
    else
    {
        res = a + "/" + b;
    }
    if (minus)
    {
        res = '- ' + res;
    }
    return res;
}

function reductionFraction(frac)
{
    let minus = false;
    let a = frac.Numerator;
    let b = frac.Denominator;
    if (b < 0)
    {
        b = -b;
        a = -a;
    }
    if (a < 0 )
    {
        a = -a;
        minus = true;
    }
    while (a !== b)
    {
        if (a > b) a -=b;
        else b -= a;
    }
    let a2 = frac.Numerator / a;
    let b2 = frac.Denominator / a;
    let c2 = 0;
    if (minus) a = -a;
    return new fraction(frac.Numerator / a, frac.Denominator / a);
}

function sumFrac(frac1, frac2)
{
    let frac3 = new fraction((frac1.Numerator * frac2.Denominator),(frac1.Denominator * frac2.Denominator));
    let frac4 = new fraction((frac2.Numerator * frac1.Denominator),(frac2.Denominator * frac1.Denominator));
    let result = new fraction((frac3.Numerator + frac4.Numerator), frac3.Denominator);
    return reductionFraction(result);
}

function subtractFrac(frac1, frac2)
{
    let frac3 = new fraction((frac1.Numerator * frac2.Denominator),(frac1.Denominator * frac2.Denominator));
    let frac4 = new fraction((frac2.Numerator * frac1.Denominator),(frac2.Denominator * frac1.Denominator));
    let result = new fraction((frac3.Numerator - frac4.Numerator), frac3.Denominator);
    return reductionFraction(result);
}

function multipleFrac(frac1, frac2)
{
    let result = new fraction((frac1.Numerator * frac2.Numerator),(frac1.Denominator * frac2.Denominator));
    return reductionFraction(result);
}

function divideFrac(frac1, frac2)
{
    let result = new fraction((frac1.Numerator * frac2.Denominator),(frac1.Denominator * frac2.Numerator));
    return reductionFraction(result);
}

// ----- task3 -----
function task3(q) 
{
    let res = '';

    let hour = parseInt(document.getElementById("hour3").value);
    let min = parseInt(document.getElementById("minute3").value);
    let sec = parseInt(document.getElementById("second3").value);
    if (hour !== hour || min !== min || sec !== sec)
    {
        document.getElementById("serrors").innerHTML = "Ошибка!<br>Пустые поля в Исходном времени!";
        return;
    }
    if(hour < 0 || min < 0 || sec < 0)
    {
        document.getElementById("serrors").innerHTML = "Ошибка! Отрицательное время!";
        document.getElementById("time-start").innerHTML = "00:00:00";
        return;
    }

    let startDate = new Date(0,0,0,hour,min,sec);

    if(q === '1')
    {
        printStartTime(startDate);
    }
    else if(q === '2')
    {
        document.getElementById("time-res").innerHTML = addSeconds(startDate).toLocaleTimeString();
    }
    else if(q === '3')
    {
        document.getElementById("time-res").innerHTML = addMinutes(startDate).toLocaleTimeString();
    }
    else if(q === '4')
    {
        document.getElementById("time-res").innerHTML = addHours(startDate).toLocaleTimeString();
    }
    else if(q === '5')
    {
        printStartTime(setResToStart());
    }
}

function printStartTime(date)
{
    document.getElementById("time-start").innerHTML = date.toLocaleTimeString();
}

function addSeconds(date)
{
    let n = parseInt(document.getElementById("second3_2").value);
    if (n !== n)
    {
        document.getElementById("serrors").innerHTML = "Ошибка!<br>Пустое количество секунд для добавления!";
        return;
    }
    let resDate = date;
    resDate.setSeconds(date.getSeconds() + n);
    return resDate;
}
function addMinutes(date)
{
    let n = parseInt(document.getElementById("minute3_3").value);
    if (n !== n)
    {
        document.getElementById("serrors").innerHTML = "Ошибка!<br>Пустое количество минут для добавления!";
        return;
    }
    let resDate = date;
    resDate.setMinutes(date.getMinutes() + n);
    return resDate;
}
function addHours(date)
{
    let n = parseInt(document.getElementById("hour3_4").value);
    if (n !== n)
    {
        document.getElementById("serrors").innerHTML = "Ошибка!<br>Пустое количество часов для добавления!";
        return;
    }
    let resDate = date;
    resDate.setHours(date.getHours() + n);
    return resDate;
}

function setResToStart()
{
    let res = '';
    res += "2020-01-01T";
    res += document.getElementById("time-res").innerHTML;
    return new Date(res);
}