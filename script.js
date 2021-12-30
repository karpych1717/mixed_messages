console.log('Hello world! ');

const names = ['Micah Conway',
    'Hayley Bullock',
    'Corey Macdonald',
    'Haley Sweeney',
    'Malachi Winters',
    'Ashlynn Mcdaniel',
    'Aidan Morton',
    'Ansley Wiggins',
    'Charles Garner',
    'Nathalia Stanton',
    'Isabel Wilkins',
    'Anderson Espinoza',];

const attitudes = ['hates', 'loves', 'is proud of'];


let random_number;
let array_length;


let first_name = '';
array_length = names.length;
random_number = Math.floor( Math.random() * array_length );
first_name = names[random_number];


let attitude = '';
array_length = attitudes.length;
random_number = Math.floor( Math.random() * array_length );
attitude = attitudes[random_number];

let second_name = '';
array_length = names.length;
random_number = Math.floor( Math.random() * array_length );
second_name = names[random_number];

let random_phrase = first_name + ' ' + attitude + ' ' + second_name;
console.log(random_phrase);