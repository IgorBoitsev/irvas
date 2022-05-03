export const forms = () => {

  const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]')

  const message = {
    loading: 'Звгрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  const postData = async (url, form) => {
    document.querySelector('.status').textContent = message.loading;
    return await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user_name: form.querySelector('[name="user_name"]'),
        user_phone: form.querySelector('[name="user_phone"]')
      })
    });

  };

  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = '';
    })
  };

  phoneInputs.forEach(phoneInput => {
    phoneInput.addEventListener('input', () => {
      phoneInput.value = phoneInput.value.replace(/\D/, '');
    })
  })

  forms.forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);

      // const formData = new FormData(item);

      postData('https://jsonplaceholder.typicode.com/posts', form)
        .then(response => {
          console.log(response.ok);
          console.log(response.status);
          statusMessage.textContent = message.success;
        })
        .catch(error => statusMessage.textContent = message.failure)
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 3000);
        })
    })
  });

}