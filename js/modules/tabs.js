export const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {

  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    content.forEach(item => {
      item.style.display = 'none';
    });

    tab.forEach(item => {
      item.classList.remove(activeClass);
    })
  }

  const showTabContent = (index = 0) => {
    content[index].style.display = 'block';
    tab[index].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener('click', event => {
    if (event.target &&
        (event.target.classList.contains(tabSelector.replace(/\./, '')) || 
         event.target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
      tab.forEach((elem, i) => {
        if (event.target == elem || event.target.parentNode == elem) {
          hideTabContent();
          showTabContent(i);
        }
      })
    }
  })

}