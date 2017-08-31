'use strict';

import compiledTemplate from './template.hbs';
import './style.css';

export default class PhoneCatalogue {
  constructor(options) {
    this._el = options.el;
    this._phones = options.phones;

    this._render();
  }

  _render() {
    this._el.innerHTML = compiledTemplate({
      phones: this._phones
    });
  }
}
