'use strict';

import PhoneCatalogue from '../phone-catalogue/phone-catalogue.js';
import PhoneViewer from '../phone-viewer/phone-viewer.js';
import ShoppingCart from '../shopping-cart/shopping-cart.js';
import PhoneService from '../../services/phone.service.js';

export default class PhonePage {
  constructor(options) {
    this._el = options.el;

    this._catalogue = new PhoneCatalogue({
      el: this._el.querySelector('[data-component="phone-catalogue"]'),
    });

    this._viewer = new PhoneViewer({
      el: this._el.querySelector('[data-component="phone-viewer"]')
    });

    this._shoppingCart = new ShoppingCart({
      el: this._el.querySelector('[data-component="shopping-cart"]')
    });

    // this._catalogue.hide();
    // this._viewer.show();

    //страница должна подписаться на событие каталога onSelected
    this._catalogue.on('phoneSelected', this._onPhoneSelected.bind(this));
    this._viewer.on('back', this._onPhoneViewerBack.bind(this));
    this._viewer.on('add', this._onPhoneViewerAdd.bind(this));

    //инициализация всех телефонов
    PhoneService.getAll(this._showPhones.bind(this)); 
  }


  _onPhoneSelected(event) {

    let phoneId = event.detail;

    PhoneService.get(phoneId, this._showPhoneDetails.bind(this));

  }

  _showPhones(phones) {
    this._catalogue.setPhones(phones);
  }



  _showPhoneDetails(phoneDetails) {
    this._viewer.setPhone( phoneDetails );
    this._catalogue.hide();
    this._viewer.show();
  }

  _onPhoneViewerBack() {

    this._viewer.hide();
    this._catalogue.show();
   
  }

  _onPhoneViewerAdd(event) {
    this._shoppingCart.addProducts(event.detail);
  }
}
