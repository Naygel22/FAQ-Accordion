const questionBars = document.querySelectorAll('.questionBar');


questionBars.forEach((questionBar) => {
  const plusImg = questionBar.querySelector('.plusImg');
  const minusImg = questionBar.querySelector('.minusImg');
  const questionText = questionBar.querySelector('.questionText');
  const answerText = questionBar.nextElementSibling; // Znajdź następnego sąsiada, który zawiera odpowiedź

  answerText.classList.add('hidden');
  minusImg.classList.add('hidden');

  function toggleAnswer() {
    if (answerText.classList.contains('hidden')) {
      questionText.style.color = 'rgb(158, 55, 206)';
      answerText.classList.remove('hidden');
      plusImg.classList.add('hidden');
      minusImg.classList.remove('hidden');
    } else {
      questionText.style.color = 'hsl(292, 42%, 14%)';
      answerText.classList.add('hidden');
      plusImg.classList.remove('hidden');
      minusImg.classList.add('hidden');
    }
  }

  plusImg.addEventListener('click', toggleAnswer);
  minusImg.addEventListener('click', toggleAnswer);
  questionText.addEventListener('click', toggleAnswer);
  
});
