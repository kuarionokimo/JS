// Создайте конструктор function Card(from, to){…}, создающий объекты карточки со свойствами from, to и методом show(), выводящим свойство отдельного объекта.
function Card(from, to) {
    this.from = from;
    this.to = to;
    this.show = function () {
        console.log(this);
    }
}
var card1 = new Card(10, 12);
card1.show();
//     Создайте конструктор function Card(option){…}, создающий объекты карточки со свойствами from, to и методом show(), выводящим свойство отдельного объекта.
// Примечание: option — объект со свойствами from и to.
function Card3(option) {
    for (var p in option) {
        this[p] = option[p];
    }
    this.show = function () {
        console.log(this);
    }
}
var card2 = new Card3({
    from: 12,
    to: 2,
})
card2.show();
//     Создайте конструктор function Human(){…}, который создает объекты со свойствами name, age и height. Создайте массив humans из десяти объектов.
function Human(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
}
var unit1 = new Human("Enishi", 25, 185);
var unit2 = new Human("John", 29, 184);
var unit3 = new Human("Brox", 57, 207);
var unit4 = new Human("Varian", 31, 175);
var unit5 = new Human("Jaina", 45, 167);
var unit6 = new Human("Aegwynn", 874, 180);
var unit7 = new Human("Malfurion", 10074, 230);
var unit8 = new Human("Kael\'thas", 42, 242);
var unit9 = new Human("Neltarion", 12574, 35024);
var unit10 = new Human("Anduin", 11, 132);
var humans = [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10];

// (*) Отсортируйте массив humans из предыдущего задания по каждому свойству отдельно.

function compareObjects(a, b) {
    if (a.name > b.name) {
        return 1
    }
    if (a.name < b.name) {
        return -1
    }
    return 0;
}
var humansByName = [];
for (let i = 0; i < humans.length; i++) {
    humansByName[i] = humans[i];
}
humansByName.sort(compareObjects);
console.log(humansByName);

function myFunc(prop) {
    function my(m, n) {
        return m[prop] - n[prop];
    }

    return my;
}
var humansByAge = [];
for (let i = 0; i < humans.length; i++) {
    humansByAge[i] = humans[i];
}
humansByAge.sort(myFunc("age"));
console.log(humansByAge);

var humansByHeight = [];
for (let i = 0; i < humans.length; i++) {
    humansByHeight[i] = humans[i];
}
humansByHeight.sort(myFunc("height"));
console.log(humansByHeight);
//     Расширьте свойства и методы любых объектов через прототип конструктора
Card.prototype.color = "red";
console.log(card1);
// Получите текущую дату при помощи конструктора Date()
var a = new Date();
console.log(a);
// Найдите кол-во секунд, которое прошло с 1 января 1970 года по текущий момент.
var b = new Date();
console.log(Math.round(b.getTime() / 1000));
//     Напишите функцию, которая принимает номер месяца и год, а возвращает количество дней в месяце
function getDaysInMonth(year, month) {
    return ((Date.UTC(year, month + 1) - Date.UTC(year, month)) / (1000 * 60 * 60 * 24));
}
console.log(getDaysInMonth(2016, 8));
// (*) Напишите функцию calendar(year,month), которая принимает два параметра — номер месяца и год, а возвращает разметку календаря HTML на указанный месяц.
function getDay(date) {
    return date.getDay() == 0 ? 6 : date.getDay() - 1;
}
function calendar(year, month) {
    var monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    month--;
    var days = getDaysInMonth(year, month);
    var start = new Date(year, month);
    var index = getDay(start);
    var table = "<table border = 1>";
    table += "<caption>" + monthNames[month] + " " + year;
    table += "</caption>"
    var rows = Math.ceil((days + index) / 7);
    var k = 1 - index;
    for (let i = 0; i < rows; i++) {
        table += "<tr>"
        for (let j = 0; j < 7; j++) {
            table += "<td>"
            if (k > 0 && k <= days) {
                table += k;
            }
            k++
        }

    }

    table += "</table>";
    document.write(table);

}
calendar(2017, 9);
// (*) Через прототип расширьте встроенный объект Number методом isOdd(), который возвращает true, если число нечетное.
Number.prototype.sOdd = function () {
   if (this.toString() % 2 == 1){console.log("true")}
};
var l =9;
l.sOdd();
// (*) Создайте конструктор, который поддерживает на своих методах цепочечный синтаксис.

// (*) Представьте, что разрабатываете игру. Создайте конструктор Unit(), создающий объекты с координатами x, y. При помощи прототипного наследования расширьте Unit(), создав новый конструктор Fighter() с свойством power. Примечание: не забудьте о геттерах и сеттерах./**

//  * Created by Enishi on 25.09.2016.

