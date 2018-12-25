var lock = false;

$(window).on('load', function () {
  ajaxStart();

  var userInfo = JSON.parse(localStorage.getItem(conf.storage.usersMe));
  if(!userInfo || userInfo.length === 0) {
    alert('login error');
    ajaxEnd();
    location.href = '/main.html';
    return;
  }

  var query = {}; 
  location.search.substring(1).split('&').forEach(
    function(item) {
      var ary = item.split('='); 
      query[ary[0]] = ary[1]; 
    }
  );
  
  if (!query.cid) {
    alert('param error');
    location.href = '/main.html';
  }
  var cid = decodeURI(query.cid);

  var appliances = JSON.parse(localStorage.getItem(conf.storage.appliances));
  var apply = appliances.filter(function (item) { return (item.id === cid); });
  
  if(!apply || apply.length === 0) {
    alert('no list error');
    location.href = '/main.html';
  }
  
  makeList(apply[0]);
  ajaxEnd();
  startSelector();
});

function makeList(apply) {
  var targetTag = $('#selector');
  var list = apply.signals.map(function (signal) {
    var itemData = conf.signals.filter(function (item) { return item.remoIconString === signal.image; });
    var className = 'icon-unknown';
    if (itemData.length > 0) {
    	  className = itemData[0].className;
    }
    return '<div class="ui-item ' + className + '" data-title="' + signal.name + '" onclick="sendSignal(' + "'" + signal.id + "'" + ')"></div>';
    
  }).join('');
  targetTag.append(list);  
}

function sendSignal(sid) {
  if (lock) return;

  lock = true;
  ajaxStart();

  sendRemoSignal(conf.TOKEN, conf.url.sendSignal, sid)
    .then(function (data) {
      alert('successed !');
      ajaxEnd();
      lock = false;

    }, function (err) {
      alert('send signal error');
      ajaxEnd();
      lock = false;
      history.back();
    });
}

function startSelector() {
  window.tau.widget.Selector(document.getElementById('selector'));
}