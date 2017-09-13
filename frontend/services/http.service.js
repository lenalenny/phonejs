export default class HTTPService {

	static sendRequest(url, successCallback, method = 'GET') {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send();

    xhr.onerror = () => {
      alert("server error");
    };

    xhr.onload = () => {
    
    //статус устанавливается только после ответа сервера

    if (xhr.status !== 200) {
      console.error("error " + xhr.statusText);
      return
    }

    let responseData = JSON.parse(xhr.responseText);

    successCallback(responseData);
    }
  }
  
}