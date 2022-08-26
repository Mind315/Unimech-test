const modalBtn = document.querySelector('.btn-open');
const bgLock = document.querySelector('.bg-lock');
const modalContainer = document.querySelector('.form-container');

modalBtn.addEventListener('click', () => {
  bgLock.classList.toggle('bg-lock_active');
  modalContainer.classList.add('form-container_show');
});
bgLock.addEventListener('click', () => {
  bgLock.classList.remove('bg-lock_active');
  modalContainer.classList.remove('form-container_show');
});
