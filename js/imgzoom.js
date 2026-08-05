const img = document.querySelector('.journey-img');
const modal = document.getElementById('journeyModal');
const modalImg = document.getElementById('journeyModalImg');
const closeBtn = document.querySelector('.journey-close');

img.onclick = () => {
  modal.style.display = "block";
  modalImg.src = img.src;
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
