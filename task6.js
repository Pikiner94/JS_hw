let total = 0;
for (let a = 0; a < 1; ++a) {
  let b = prompt('Введите данные');

  if (b === null) {
    alert(`Сумма введенных чисел ${total}`);
    total = 0;
    --a;
  } else {
    b = +b;
    --a;

    if (isNaN(b)) {
      alert('Введено не число, повторите попытку');
      --a;
    } else {
      --a;
      total += b;
    }
  }
}
