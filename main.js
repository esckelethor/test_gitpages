new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();

		xhr.onerror = function () {
			return reject(new Error('XHR.onerror Exception...'));
		}

		xhr.onload = function() {
			if (this.status == 200) {
				data = JSON.parse(this.responseText);
				return resolve(data);
			} else {
				return reject(new Error('XHR.onload Exception (Non 200 Response)... Refer to previous error'));
			}
		}

		xhr.open('GET', './php/main.php', true);
		xhr.send();
	}).then(function(data) {
    document.getElementById('change').innerHTML = data;
  });