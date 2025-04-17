const year1997 = new Date('1997-01-01').getFullYear();
const currentYear = new Date().getFullYear();

const myage = currentYear - year1997;

document.getElementById('age').innerHTML = myage;

