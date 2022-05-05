'use strict';

import './modules/slider.js';
import { modals } from "./modules/modals.js";
import { tabs } from "./modules/tabs.js";
import { forms } from "./modules/forms.js";
import { changeModalState } from "./modules/changeModalState.js";
import { checkNumInputs } from "./modules/checkNumInputs.js";

let modalState = {};

modals();
tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
checkNumInputs();
changeModalState(modalState);
forms(modalState);