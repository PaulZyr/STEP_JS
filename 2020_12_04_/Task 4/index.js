function ResetResult()
{
    document.getElementById("result").innerHTML = '? ? ?';
}

// Interaction Functions
function Task1()
{
    let num1 = parseInt(document.getElementById("input__num1").value);
    let num2 = parseInt(document.getElementById("input__num2").value);
    document.getElementById("result").innerHTML = CompareTwoNumbers(num1, num2);
}
function Task2()
{
    let num1 = parseInt(document.getElementById("input__num1").value);
    document.getElementById("result").innerHTML = CountFactorial(num1);
}
function Task3()
{
    let num1 = parseInt(document.getElementById("input__num1").value);
    let num2 = parseInt(document.getElementById("input__num2").value);
    let num3 = parseInt(document.getElementById("input__num3").value);
    document.getElementById("result").innerHTML = MakeNumber(num1, num2, num3);
}
function Task4()
{
    let num1 = document.getElementById("input__num1").value;
    let num2 = document.getElementById("input__num2").value;
    document.getElementById("result").innerHTML = Square(num1, num2);
}
function Task5()
{
    let num = parseInt(document.getElementById("input__num1").value);
    document.getElementById("result").innerHTML = PerfectNumber(num);
}
function Task6()
{
    let num1 = document.getElementById("input__num1").value;
    let num2 = document.getElementById("input__num2").value;
    document.getElementById("result").innerHTML = SeekPerfectNumbersInRange(num1, num2);
}
function Task7()
{
    let hour = document.getElementById("input__hour").value;
    let min = document.getElementById("input__minutes").value;
    let sec = document.getElementById("input__seconds").value;
    document.getElementById("result").innerHTML = TimeInFormat(hour, min, sec);
}
function Task8()
{
    let hour = document.getElementById("input__hour").value;
    let min = document.getElementById("input__minutes").value;
    let sec = document.getElementById("input__seconds").value;
    document.getElementById("result").innerHTML = HHMMSStoSeconds(hour, min, sec);
}
function Task9()
{
    let sec = document.getElementById("input__seconds").value;
    document.getElementById("result").innerHTML = SecondsToHHMMSS(sec);
}
function Task10()
{
    let hour = document.getElementById("input__hour").value;
    let min = document.getElementById("input__minutes").value;
    let sec = document.getElementById("input__seconds").value;
    let hour2 = document.getElementById("input__hour-2").value;
    let min2 = document.getElementById("input__minutes-2").value;
    let sec2 = document.getElementById("input__seconds-2").value;

    document.getElementById("result").innerHTML = SubtractionTime(hour, min, sec, hour2, min2, sec2);
}


// Count Functions
// task 1
function CompareTwoNumbers(n1, n2)
{
    let res = n1 < n2 ? -1 : n1 > n2 ? 1 : 0;
    return res;
}
// task 2
function CountFactorial(n)
{
    if(n===1)
    {
        return 1;
    }
    else if(n<1)
    {
        return NaN;
    }
    else{
        return n * CountFactorial(n-1);
    }
}
// task 3
function MakeNumber(n1, n2, n3)
{
    let res = n1 * 100 + n2 * 10 + n3 * 1;
    return res;
}
// task 4
function Square(...n)
{
    let res = 1;
    for(index in n)
    {
        if(n[index] !== '') {
            res *= parseInt(n[index]);
        }
    }
    return res;
}
// task 5
function PerfectNumber(n)
{
    if(n < 1 || n === 0)
    {
        return false;
    }
    else {
        let res = 0;
        for (let i = 1; i < n; i++)
        {
            if (n % i === 0) res += i;
        }
        if (res === n) return true;
        else return false;
    }
    
}
// task 6
function SeekPerfectNumbersInRange(n1, n2)
{
    let res = "";
    for (let i = n1; i < n2; i++)
    {
        if (PerfectNumber(i))
        {
            res += (i + ', ');
        }
    }
    return res;
}

// task 7
function TimeInFormat(h, m, s)
{
    let t = new Date();
    t.setHours(parseInt(h));
    if (m !== '') t.setMinutes(parseInt(m));
    else t.setMinutes(0);
    if (s !== '') t.setSeconds(parseInt(s));
    else t.setSeconds(0);

    return t.toLocaleTimeString();
}

// task 8
function HHMMSStoSeconds(h, m, s)
{
    let res = 0;
    if (h !== '') res += parseInt(h) * 3600;
    if (m !== '') res += parseInt(m) * 60;
    if (s !== '') res += parseInt(s);
    return res;
}

// task 9
function SecondsToHHMMSS(s)
{
    let t = new Date(0,0,0,0,0,s);
    return t.toLocaleTimeString();
}

// task 10
function SubtractionTime(h, m, s, h2, m2, s2)
{
    let res_1 = HHMMSStoSeconds(h, m, s);
    let res_2 = HHMMSStoSeconds(h2, m2, s2);
    let result = 0;
    if (res_1 > res_2) result = res_1 - res_2;
    else result = res_2 - res_1;

    return SecondsToHHMMSS(result);
}
