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


const random_element = (array) => {
    const array_length = array.length;
    const random_number = Math.floor( Math.random() * array_length );

    return array[random_number];
}


const first_name  = random_element(names);
const attitude    = random_element(attitudes);
const second_name = random_element(names);


const random_phrase = first_name + ' ' + attitude + ' ' + second_name;
console.log(random_phrase);