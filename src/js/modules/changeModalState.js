import { checkNumInputs } from "./checkNumInputs.js";

export const changeModalState = (state) => {

  const windowForms = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  const bindActionToElems = (event, elements, prop) => {
    elements.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch(item.nodeName) {
          case 'SPAN':
            state[prop] = index;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              index === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
              elements.forEach((box, j) => {
                box.checked = false;
                if (index == j)
                  box.checked = true;
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case 'SELECT':
            state[prop] = item.value;
            break;
        }

        console.log(state);
      })
    });
  }

  bindActionToElems('click', windowForms, 'form');
  bindActionToElems('input', windowHeight, 'height');
  bindActionToElems('input', windowWidth, 'width');
  bindActionToElems('change', windowType, 'type');
  bindActionToElems('change', windowProfile, 'profile');

}