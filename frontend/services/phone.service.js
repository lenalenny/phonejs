import HTTPService from '../services/http.service.js';

export default class PhoneService {
	static get(phoneId, callback) {
		let url =  `/data/phones/${phoneId}.json`;

    	HTTPService.sendRequest(url, callback);
	}

	static getAll(callback) {
		let url =  `/data/phones/phones.json`;
		HTTPService.sendRequest(url, callback);
	}
}