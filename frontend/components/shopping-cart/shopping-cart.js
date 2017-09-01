'use strict';

import compiledTemplate from './template.hbs';
import Component from '../component.js';

export default class ShoppingCart extends Component {
  constructor(options) {
    super(options.el);

    this._products = [];

    this.render();



  }

  render() {
  
    this._el.innerHTML = compiledTemplate({
      products: this._products
    });
  }

  addProducts(product) {
    this._products.push(product);

    this.render();
  }


}
