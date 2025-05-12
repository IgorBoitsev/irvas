import { checkNumInputs } from "./checkNumInputs.js";

export const forms = (state) => {

  const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: 'Звгрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  const postData = async (url, formData) => {
    document.querySelector('.status').textContent = message.loading;
    return await fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData)
    });

  };

  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = '';
    })
  };

  forms.forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);

      const formData = {
        user_name: form.querySelector('[name="user_name"]').value,
        user_phone: form.querySelector('[name="user_phone"]').value
      };

      if (form.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData[key] = state[key];
        }
      }

      console.log(formData);

      postData('https://jsonplaceholder.typicode.com/posts', formData)
        .then(response => {
          console.log('OK: ' + response.ok + ', STATUS: ' + response.status);
          statusMessage.textContent = message.success;
        })
        .catch(error => {
          statusMessage.textContent = message.failure;
          console.error(error);
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            document.querySelector('.popup_calc_end').style.display = 'none';
          }, 3000);
        })
    })
  });

}