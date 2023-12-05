/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

// this the commpare with number 
const month = 5; 

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('Ferbury');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;

    default:
        console.log('default case match');
        break;
}

// this the commpare with String

const week = 'Tuesday'
switch (week) {
    case 'Saturday':
        console.log('Saturday');
        break;
    case 'Sunday':
        console.log('Sunday');
        break;
    case 'Monday':
        console.log('Monday');
        break;
    case 'Tuesday':
        console.log('Tuesday');
        break;
    case 'Wednesday':
        console.log('Wednesday');
        break;
    case 'Thursday':
        console.log('Thursday');
        break;
    case 'Friday':
        console.log('Friday');
        break;

    default:
        console.log('Nothing Match');
        break;
}