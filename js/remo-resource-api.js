var REMO_URL = 'https://api.nature.global';

function sendRemoSignal(token, url, sid) {
	return new Promise(function(res, rej) {
		$.ajax({
			url: REMO_URL + url.replace(':sid', sid),
			type: 'post',
			dataType: 'json',
			beforeSend: function (xhr, settings) {
				xhr.setRequestHeader('Authorization', 'Bearer ' + token);
			}
		}).done(function (data) {
			res(data);
		}).fail(function (data) {
			rej(data);
		});
	});
}

function postAirconSetting(token, url, sid, query) {
	return new Promise(function (res, rej) {
		$.ajax({
			url: REMO_URL + url.replace(':sid', sid),
			type: 'post',
			dataType: 'json',
			data: query,
			beforeSend: function (xhr, settings) {
				xhr.setRequestHeader('Authorization', 'Bearer ' + token);
			}
		}).done(function (data) {
			res(data);
		}).fail(function (data) {
			rej(data);
		});
	});
}



function getRemoResource(token, url) {
	return new Promise(function(res, rej) {
		 $.ajax({
		 	url: REMO_URL + url,
		 	type: 'get',
		 	dataType: 'json',
		 	beforeSend: function(xhr, settings) {
		 		xhr.setRequestHeader('Authorization', 'Bearer ' + token);
		 	}
		 }).done(function(data) {
		   debugger;
		 	res(data);
		 }).fail(function(data) {
		   debugger;
		 	rej(data);
		 });
	});
}