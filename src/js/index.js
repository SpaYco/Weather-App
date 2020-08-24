import weather from './weather';
import main from '../css/main.scss';

document.getElementById('type').addEventListener('click', () => {
  const btn = document.getElementById('type');
  if (btn.value === 'C') {
    btn.value = 'F';
  } else {
    btn.value = 'C';
  }
});

document.getElementById('btn').addEventListener('click', weather);