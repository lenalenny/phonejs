'use strict';

import compiledTemplate from './template.hbs';
import Component from '../component.js';

export default class PhoneViewer extends Component {
  constructor(options) {
    super(options.el);

    this._render();

    this._el.addEventListener('click', this._onBackButtonClick.bind(this));
    this._el.addEventListener('click', this._onAddButtonClick.bind(this));
  }

  // render(phoneDetails) {
  //   this._phone = phoneDetails;
  //   this._el.innerHTML = compiledTemplate({
  //     phone: phoneDetails
  //   });
  // }

    setPhone(phone) {
    this._phone = phone;
    this._render();
  }

  _render() {
    this._el.innerHTML = compiledTemplate({
      phone: this._phone
    });
  }




  _onBackButtonClick(event) {
    if (!event.target.closest('[data-element="back-button"]')) {
      return;
    } 

    //вьер не должен дальше управлять, это событие для фонпейджа
    this.trigger('back');
  }

  _onAddButtonClick(event) {
    if (!event.target.closest('[data-element="add-button"]')) {
      return;
    } 


    this.trigger('add', this._phone.id);
   
  }


}
