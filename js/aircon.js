$(window).on('load', function () {
  ajaxStart();

  var list = JSON.parse(localStorage.getItem(conf.storage.appliances));
  if(!list || list.length === 0) {
    alert('login error');
    ajaxEnd();
    location.href = '/error.html';
    
  } else {    
    init(list);
  }
});

function init(list) {
  var query = {}; 
  location.search.substring(1).split('&').forEach(
    function(item) {
      var ary = item.split('='); 
      query[ary[0]] = ary[1]; 
    }
  );
  
  if (!query.cid) {
    alert('param error');
    ajaxEnd();
    location.href = '/main.html';

  } else {  
    var cid = decodeURI(query.cid);
    var aircon = list.filter(function(item){ return item.id === cid });
    ajaxEnd();
    main(aircon[0]);
  }
}

// aircon class
var Aircon = function(ar) {
  var id_ = ar.id;
  var settings_ = ar.settings;
  var nickname_ = ar.nickname;
  var modes_ = ar.aircon.range.modes;

  return {
    getId: function() { return id_ },
    getNickname: function () { return nickname_ },
    getModes: function () { return modes_ },
    isNowPower: function() { return settings_.button === ''},
    powerCheck: function() {  return this.isNowPower() ? 'checked' : ''},
    getNowMode: function () { return settings_.mode },
    getNowTemp: function () { return settings_.temp },
    getNowVolume: function () { return settings_.vol },
    getNowDirection: function () { return (settings_.dir === '') ? 'auto' : 'swing'},
    changePower: function(sig) { this.postSetting({ button: sig }) },
    postSetting: function(obj) {
      ajaxStart();
      postAirconSetting(conf.TOKEN, conf.url.sendAirconSettings, this.getId(), obj)
        .then(function (data) {
          alert('successed !');
          ajaxEnd();
        }, function (err) {
          alert('send signal error');
          ajaxEnd();
          location.reload();
        });
    }
  };
}

function main(aircon) {
  var ar = new Aircon(aircon);
  changeTitle(ar.getNickname());
  makeList(ar);
}

function changeTitle(name){
  $('#title').html(name);
}

function makeList(ar) {
  var ul = $('#listTarget');
  var li = ''
        + '<li class="li-has-toggle">'
        + '  <label>on/off</label>'
        + '  <div class="ui-toggleswitch">'
        + '    <input id="powerBox" type="checkbox" class="ui-switch-input" ' + ar.powerCheck() +'>'
        + '    <div class="ui-switch-button"></div>'
        + '  </div>'
        + '</li>'
        + '<li class="li-has-action-icon">'
        + '  <a class="li-action-text">モード</a>'
        + '  <button class="li-action-icon-button list-icon-' + ar.getNowMode() + '"></button>'
        + '</li>'
        + '<li class="li-has-action-icon">'
        + '  <a class="li-action-text">設定温度</a>'
        + '  <button class="li-action-icon-button list-span">'+ ar.getNowTemp() +'°</button>'
        + '</li>'
        + '<li class="li-has-action-icon">'
        + '  <a class="li-action-text">風量</a>'
        + '  <button class="li-action-icon-button list-span">'+ ar.getNowVolume() +'</button>'
        + '</li>'
         + '<li class="li-has-action-icon">'
        + '  <a class="li-action-text">風向</a>'
        + '  <button class="li-action-icon-button list-icon-fan-' + ar.getNowDirection() + '"></button>'
        + '</li>';
  ul.append(li);

  // powerBox listener
  $(document).on('change', '#powerBox', function () {
    if ($(this).prop('checked')) {
      ar.changePower('')
    } else {
      ar.changePower('power-off')
    }
  });
}