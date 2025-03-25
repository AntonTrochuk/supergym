const name = document.getElementById('name');
const phone = document.getElementById('phone');
const nameError = document.querySelector('.form__name-error');
const phoneError = document.querySelector('.form__phone-error');
const formButton = document.querySelector('.form__button');

const hideErrorOnValidInput = (input, errorElement) => {
  if (input.validity.valid) {
    errorElement.classList.add('visually-hidden');
    input.classList.remove('form__input-error');
  }
};

const validateForm = () => {
  formButton.addEventListener('click', (evt) => {
    if (!name.validity.valid) {
      if (name.validity.patternMismatch) {
        nameError.classList.remove('visually-hidden');
        name.classList.add('form__input-error');
        nameError.textContent = 'Допускаются только буквы и пробелы';
      } else if (name.validity.valueMissing) {
        nameError.classList.remove('visually-hidden');
        name.classList.add('form__input-error');
        nameError.textContent = 'Поле обязательно для заполнения';
      }
      evt.preventDefault();
    }

    if (!phone.validity.valid) {
      if (phone.validity.patternMismatch) {
        phoneError.classList.remove('visually-hidden');
        phone.classList.add('form__input-error');
        phoneError.textContent = 'Допускаются только цифры, пробелы и символы +-()';
      } else if (phone.validity.valueMissing) {
        phoneError.classList.remove('visually-hidden');
        phone.classList.add('form__input-error');
        phoneError.textContent = 'Поле обязательно для заполнения';
      }
      evt.preventDefault();
    }
  });

  name.addEventListener('input', () => {
    hideErrorOnValidInput(name, nameError);
  });

  phone.addEventListener('input', () => {
    hideErrorOnValidInput(phone, phoneError);
  });
};

export { validateForm };
