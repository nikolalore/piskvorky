let currentPlayer = 'circle';

const selectButton = (event) => {
  const btn = event.target;
  event.target.disabled = true;
  if (currentPlayer === 'circle') {
    btn.classList.add('game__board--circle');
    document.querySelector('.game__menu--icon').src = 'ikony/cross.svg';
    currentPlayer = 'cross';
  } else {
    btn.classList.add('game__board--cross');
    document.querySelector('.game__menu--icon').src = 'ikony/circle.svg';
    currentPlayer = 'circle';
  }
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', selectButton);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', selectButton);

document
  .querySelector('.button__restart')
  .addEventListener('click', (event) => {
    if (!confirm('Opravdu chcete začít znovu')) {
      event.preventDefault();
    }
  });
