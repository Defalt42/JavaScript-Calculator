let numButtons = document.querySelectorAll('button');
let result = document.querySelector('#result');

numButtons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    result.textContent = btn.textContent;
  });
});
