function Task1()
{
    let n1 = parseInt(prompt('Введите число', 'Начало диапазона'));
    if(n1 !== n1) {
        alert('Это было не число!');
        return;
    }
    let n2 = parseInt(prompt('Введите число', 'Конец диапазона'));
    if(n2 !== n2) {
        alert('Это было не число!');
        return;
    }
    if (n1 > n2) {
        var tmp = n1;
        n1 = n2;
        n2 = tmp;
    }
    let n3 = 0;
    for (var i = n1; i <= n2; i++) {
        n3 += i;
    }
    alert('Сумма чисел от ' + n1 + ' до ' + n2 + ' = ' + n3);
}

function Task2()
{
    let n1 = parseInt(prompt('Введите число', '1-е число'));
    if(n1 !== n1) {
        alert('Это было не число!');
        return;
    }
    let n2 = parseInt(prompt('Введите число', '2-е число'));
    if(n2 !== n2) {
        alert('Это было не число!');
        return;
    }
    let a = n1;
    let b = n2;
    while (a != b)
    {
        if (a > b)
        {
            a -= b;
        }
        else
        {
            b -= a;
        }
    }
    alert('наибольший общий делитель ' + n1 + ' и ' + n2 + ' = ' + a);
}

function Task3()
{
    let n1 = parseInt(prompt('Введите число', 'Число'));
    if(n1 !== n1) 
    {
        alert('Это было не число!');
        return;
    }

    if (n1 > 0)
    {
        a = 1;
        b = n1;
    }
    else if (n1 == 0)
    {
        alert('У 0 нет делителей!');
        return;
    }
    else
    {
        a = n1;
        b = -1;
    }

    let result = 'Делители числа ' + n1 + ': ';
    for (var i = a; i <= b; i++)
    {
        if (n1 % i == 0)
        {
            result += i + ' ';
        }
    }
    alert(result);
}

function Task4()
{
    let n1 = parseInt(prompt('Введите число', 'Число'));
    if(n1 !== n1) 
    {
        alert('Это было не число!');
        return;
    }
    let n2 = 0;
    if (n1 < 0) n2 = -n1;
    else n2 = n1;

    let res = 0;

    if (n2 != 0)
    {
        while (n2 % 10 != 0)
        {
            res++;
            n2 = parseInt(n2 / 10);
        }
    }
    else res = 1;
    
    alert('В числе ' + n1 + ' = ' + res + ' цифр');
}
function Task4a()
{
    let n1 = parseInt(prompt('Введите число', 'Число'));
    if(n1 !== n1) 
    {
        alert('Это было не число!');
        return;
    }
    let n2;
    if (n1 < 0) n2 = -n1 + '';
    else n2 = n1 + '';

    alert('В числе ' + n1 + ' = ' + n2.toString().length + ' цифр');
}

function Task5()
{
    let positive = negative = zero = 0;
    let counter = 1;

    while (counter <= 10)
    {
        let n1 = parseInt(prompt('Введите ' + counter + '-е число', 'Число'));
        if(n1 !== n1) 
        {
            alert('Это было не число! Приложите усилия!');
        }
        else
        {
            if(n1 > 0) positive++;
            else if (n1 < 0) negative++;
            else zero++;

            counter++;
        }
    }
    alert('Положительных: ' + positive + ', Отрицательных: ' + negative + ', Нулей: ' + zero);
}

function Task6()
{
    while(true)
    {
        let n1 = prompt("Введите число (или X для выхода)", '1-е число');
        if (n1 == 'X') break;
        n1 = parseInt(n1);
        if(n1 !== n1) 
        {
            alert('Это было не число!');
            continue;
        }

        let sign = prompt('Введите знак арифметической операции ((или X для выхода))', '+ - * /');
        if (sign == 'X') break;
        if (sign !== '+' && sign == '-' && sign == '*' && sign == '/')
        {
            alert('Это не был знак арифметической операции!');
            continue;
        }

        let n2 = prompt('Введите число (или X для выхода)', '2-е число');
        if (n2 == 'X') break;
        n2 = parseInt(n2);
        if(n2 !== n2) 
        {
            alert('Это было не число!');
            continue;
        }

        let result = 0;

        if (sign == '+') result = n1 + n2;
        else if (sign == '-') result = n1 - n2;
        else if (sign == '*') result = n1 * n2;
        else if (sign == '/') result = n1 / n2;

        alert('Результат: ' + result);

        if (!confirm('Продолжим?')) break;
    }
}

function Task7()
{
    let n1 = parseInt(prompt('Введите число', '1-е число'));
    if(n1 !== n1) {
        alert('Это было не число!');
        return;
    }

    let n2 = parseInt(prompt('На сколько позиций сдвинуть цифры?', 'Сдвиг на...'));
    if(n2 !== n2) {
        alert('Это было не число!');
        return;
    }

    if (n2 < 0) n2 = - n2;
    
    let n3 = n1 + '';
    let c = '';

    for (let i = 1; i <= n2; i++)
    {
        c = n3[0];
        n3 = n3.slice(1);
        n3 += c;
    }

    alert('Результат: ' + n3);
}

function Task8()
{
    let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];
    let i = 0;
    while (true)
    {
        if (confirm("День недели: " + days[i] + "! Хотите увидеть какой следующий день?"))
        {
            i = parseInt((++i) % 7);
        }
        else
        {
            break;
        }
    }
}

function Task9()
{
    while (true)
    {
        for (let i = 2; i <= 9; i++)
        {
            let result = "";
            for (let j = 1; j <= 10; j++)
            {
                result = result + i + " x " + j + " = " + (i * j) + "\n";
            }
            alert ("Таблица умножения для " + i + ":\n" + result);
        }
        if (!confirm("Повторить?")) break;
    }
}

function Task10()
{
    alert ("Загадайте число\nОт 0 до 100...");
    let i = 0;
    let j = 100;
    let N = parseInt((j - i) / 2);
    while (!confirm("Вы загадали " + N + " ?\n(Yes - Да; Cansel - Нет.)"))
    {
        if (confirm("Ваше число больше " + N + " ?\n(Yes - Да; Cansel - Нет.)"))
        {
            i = N + 1;
        }
        else{
            j = N - 1;
        }
        N = parseInt((j - i) / 2) + i;
        alert("i = " + i + ", j = " + j + ", N = " + N);
    }
}