const background = document.querySelector('.background');
const envelope = document.querySelector('.envelope');
const btnOpen = envelope.querySelector('.btn-open');

const openCard = () => {
  envelope.style.opacity = '0';
  setTimeout(() => {
    envelope.remove()
  }, 1000)
};
const createBgHeart = () => {
  const hearts = ['🧡', '💛', '💚', '💙', '💜', '🤍', '💗'];
  const randomHeart = hearts[~~(Math.random() * hearts.length)];

  return `<span class="bg-heart">${randomHeart}</span>`;
};
const addBgHeart = () => (background.innerHTML += createBgHeart());
const addBg = () => {
  const newBg = background.cloneNode(true);
  background.after(newBg);
};

function fnRecursive(max, fnAdd) {
  let cnt = 0;
  const addEl = () => {
    cnt++;
    fnAdd();
    if (cnt === max) return;
    addEl();
  };
  addEl();
}

fnRecursive(20, addBgHeart);
fnRecursive(15, addBg);

btnOpen.addEventListener('click', openCard);