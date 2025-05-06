import _ from 'lodash';

// Обернули логику в функцию и экспортировали
export default function runApp() {
  console.log('Hello, Hexlet!');
  console.log(_.last(['one', 'two']));
  
  const fn = (a, b) => {
    const c = a + b;
    return c;
  };
  
  return fn; // Можно вернуть функцию, если нужно
}
