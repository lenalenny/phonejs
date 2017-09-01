'use strict';

const CLASS_HIDDEN = 'js-hidden';

export default class Component {
	constructor(element) {
		this._el = element;
	}

	show() {
    	this._el.classList.remove(CLASS_HIDDEN);
  	}


   	hide() {
     	this._el.classList.add(CLASS_HIDDEN);
  	}

  	on(eventName, callback) {
  		this._el.addEventListener(eventName, callback);
  	}

  	off(eventName, callback) {
  		this._el.removeEventListener(eventName, callback);
  	}

  	trigger(eventName, data = null) {
  		let customEvent = new CustomEvent(eventName, {
      	bubbles: false,
      	detail: data
    });

    this._el.dispatchEvent(customEvent);
    
  	}
}