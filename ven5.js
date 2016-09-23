// Задание 1
console.log('\nЗадание 1\n');
function Card(from, to) {
    if (typeof from == "object") {
        for (var p in from) {
            this[p] = from[p];
        }
    }
    else {
        this.from = from;
        this.to = to;
    }
}

Card.prototype.show = function (param) {
    console.log(this[param]);
    return this;
};
var card1 = new Card('Moscow', 'Yaroslavl');
card1.show('from').show('to');

// Задание 2
console.log('\nЗадание 2\n');

var obj = {
    from: 'Argentina',
    to: 'Malaysia'
};

var card2 = new Card(obj);

card2.show('from').show('to');

// Задание 3
console.log('\nЗадание 3\n');

function Human(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
}

var names = ['Вован', 'Маша', 'Григорий', 'John', 'Elena', 'Petr', 'Vasya', 'sdgfdsf', 'dsfsdf', 'sdfghhj'];
var ages = [20, 12, 45, 67, 34, 23, 56, 94, 45, 33];
var heights = [187, 112, 156, 190, 147, 123, 199, 167, 175, 169];
var humans = [];
for (let i = 0; i < 10; i++) {
    humans[i] = new Human(names[i], ages[i], heights[i]);
}

console.log(humans);

// Задание 4
console.log('\nЗадание 4\n');

function sortAges(a, b) {
    if (a.age < b.age) return -1;
    else if (a.age > b.age) return 1;
    else return 0;
}

function sortNames(a, b) {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    else return 0;
}

function sortHeights(a, b) {
    if (a.height < b.height) return -1;
    else if (a.height > b.height) return 1;
    else return 0;
}

humans.sort(sortAges);
console.log(humans);

console.log('\n');

humans.sort(sortHeights);
console.log(humans);

console.log('\n');

humans.sort(sortNames);
console.log(humans);


// Задание 5
console.log('\nЗадание 5\n');
