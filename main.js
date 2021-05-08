require('./styles.scss');

const pow = prompt('Wprowadź, do której potęgi chcesz podnieść liczbę 2.');
const result = Math.pow(2, pow);
alert(`2 podniesione do potęgi ${pow} wynosi ${result}`);

