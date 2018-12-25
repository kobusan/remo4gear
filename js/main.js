$(window).on('load', function () {
  ajaxStart();

  var userInfo = JSON.parse(localStorage.getItem(conf.storage.usersMe));
  if(!userInfo || userInfo.length === 0) {
    getRemoResource(conf.TOKEN, conf.url.usersMe)
  	  .then(function (data) {
  	    localStorage.setItem(conf.storage.usersMe, JSON.stringify(data));
  	     main();
    }, function (err) {
  	    alert('login error');
  	    ajaxEnd();
  	    location.href = '/error.html';
  	    return;
    });
  } else {
	  main();
  }
});

function main() {
	getRemoResource(conf.TOKEN, conf.url.appliances)
	.then(function (data) {
	  localStorage.setItem(conf.storage.appliances, JSON.stringify(data));
	  ajaxEnd();  
	  makeList();
	}, function (err) {
	  alert('data fetch error');
	  ajaxEnd();
	  location.href = '/error.html';
	});	
}

function makeList() {
  var list = JSON.parse(localStorage.getItem(conf.storage.appliances));
  var ul = $('#listTarget');
  var li = list.map(function(item) {
    var control = conf.controls.filter(function(con){ return item.image === con.remoIconString; })[0];
    if (item.type === 'AC') {
      return '<li class="li-has-thumb-left" onclick="moveAirconPage(' + "'" + item.id + "'" + ')">' + item.nickname + '<img src="' + control.iconImage + '" class="ui-li-thumb-left ui-item"></li>';
    } else {
      return '<li class="li-has-thumb-left" onclick="moveSignalPage(' + "'" + item.id + "'" + ')">' + item.nickname + '<img src="' + control.iconImage + '" class="ui-li-thumb-left ui-item"></li>';
    }
  }).join('');
  ul.append(li);
}

function moveSignalPage(cid) {
  location.href = '/signal.html?cid=' + encodeURI(cid);
}

function moveAirconPage(cid) {
  location.href = '/aircon.html?cid=' + encodeURI(cid);
}