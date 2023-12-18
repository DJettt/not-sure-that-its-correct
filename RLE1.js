function RLEin(a) {                                       //основная функция RLE
    let coded = '';                                       //строка, которую позже вернет функция  
    let count = 1;                                        //переменная, считающая количество повторений одного знака (будет играть роль позже)
    for (let i = 0; i < a.length; i++) {                  //цикл с помощью которого будем проверять строку на наличие повторяющихся элементов
      if (a[i] === a[i + 1]) {                            //проверка 2х соседних элементов
        let j = i;                                        //дополнительный итератор чтобы первый цикл не "сломался"
        count = 1;                                        
        while (a[j] === a[j + 1] && count < 255) {        //пока равны или переменная count не больше 255 (столько символов в ascii)
          count++;                                        // увеличение переменной на 1 (идет подсчет одинаковых подряд идущих символов)
          j++;
        }
        if (count <= 3) {                                 //если одинаковых символов <=3 то сжатие делать не выгодно
            for (let iter=i; iter<=j;iter++){
                coded = coded + a[iter];
            }
            i = j;
        }
        else {
             let symbol = String.fromCharCode(count);      //если их больше 4, то происходит сжатие
             coded = coded + '#' + symbol + a[i];          //само сжатие
             i = j;
        }
      } else {
        coded = coded + a[i];                              //перенос посимвольно если нет повторений
      }
    }
    return coded;
  }
  const fs = require('fs');

// Чтение данных из файла
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

  console.log("Не сжатая строка: "+ inText);               //вывод строки до сжатия
  let message = RLEin(inText);
  console.log("Сжатая строка: " + message);                //вывод строки после сжатия 