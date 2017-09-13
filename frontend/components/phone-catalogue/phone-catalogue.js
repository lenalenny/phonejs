'use strict';

import compiledTemplate from './template.hbs';
import './style.css';
import Component from '../component.js';

export default class PhoneCatalogue extends Component {
  constructor(options) {
    super(options.el);

    this._phones = [];

    this._render();

    this.on('click', this._onPhoneClick.bind(this));
  }

  _render() {
    this._el.innerHTML = compiledTemplate({
      phones: this._phones
    });
  }

  setPhones(phones) {
    this._phones = phones;
    this._render();
  }



  _onPhoneClick(event) {
    let phoneElement = event.target.closest('[data-element="phone"]'); //клик внутри нужного элемента

    if (!phoneElement) {
      return;
    }

    console.log(phoneElement.dataset.phoneId);

    //при клике генерируется наше событие phoneSelected

    this.trigger('phoneSelected', phoneElement.dataset.phoneId);
  }


}
