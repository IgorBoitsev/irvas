export const images = () => {

  const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.style.display = 'none';
  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';


  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target && event.target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = event.target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
    }

    if (event.target && event.target.matches('div.popup')) {
      imgPopup.style.display = 'none';
    }
  })

}