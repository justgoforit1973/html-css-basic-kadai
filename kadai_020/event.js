

 


const btn = document.getElementById('btn');

btn.addEventListener('click' , () => {
  const text = document.getElementById('text');
  setTimeout(() => {
    text.textContent  = "ボタンをクリックされました。";
  }, 2000);
  
});

