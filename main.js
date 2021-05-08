require('./styles.scss');
const Swal = require('sweetalert2')

const pow = prompt('Wprowadź, do której potęgi chcesz podnieść liczbę 2.');
const result = Math.pow(2, pow);
Swal.fire(`2 podniesione do potęgi ${pow} wynosi ${result}`);

