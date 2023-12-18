let s = prompt ("Введите строку, которую хотите закодировать.")
let a = prompt ("Введите ключ кодировки строки.")
a*=1
let t = ""
for (let i of s){
    let vsp = i.charCodeAt(0);
    if (vsp >= 97 && vsp <=122){
        t = t + String.fromCharCode((((vsp + a - 97) + 26) % 26) + 97) //a,b,c,d
    }
    else if (vsp >= 65 && vsp <= 90){
        t = t + String.fromCharCode((((vsp + a - 65) + 26) % 26) + 65) //A,B,C,D
    }
    else if (vsp >= 48 && vsp <= 57){
        t = t + String.fromCharCode((((vsp + a - 48) + 10) % 10) + 48) //0,1,2
    }
}
console.log("Закодированная строка: " + t);
console.log("Ключ кодировки: " + a)

let proverka = prompt("Если хотите ввести свою строку для декодировки, то введите 1")
if (proverka == 1){
t = prompt("Введите свою строку.")
a = prompt("Введите ключ кодировки.")
}
a*=1

let answ = ""
for (let i of t){
    let vsp = i.charCodeAt(0);
    if (vsp >= 97 && vsp <= 122){
        answ = answ + String.fromCharCode((((vsp - a - 97) + 26) % 26) + 97)
    }
    else if (vsp >= 65 && vsp <= 90){
        answ = answ + String.fromCharCode((((vsp - a - 65) + 26) % 26) + 65)
    }
    else if (vsp >= 48 && vsp <= 57){
        answ = answ + String.fromCharCode((((vsp - a - 48) + 10) % 10) + 48)
    }
}
console.log("Декодированная строка: " + answ)