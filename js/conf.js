var conf = {};
conf.TOKEN = tizen.application.getAppMetaData(null).filter(function(item){ return item.key === 'TOKEN'; })[0].value;

conf.url = {
  usersMe: '/1/users/me',
  appliances: '/1/appliances',
  sendSignal: '/1/signals/:sid/send',
  sendAirconSettings: '/1/appliances/:sid/aircon_settings'
};

conf.storage = {
  usersMe: 'usersMe',
  appliances: 'appliances'
};

conf.controls = [
  {
    remoIconString: 'ico_ac_1',
    title: 'aircon',
    iconImage: '/css/images/controls/ic_control-aircon.png'
  },
  {
    remoIconString: 'ico_audio',
    title: 'audio',
    iconImage: '/css/images/controls/ic_control-audio.png'
  },
  {
    remoIconString: 'ico_av',
    title: 'AVR',
    iconImage: '/css/images/controls/ic_control-avr.png'
  },
  {
    remoIconString: 'ico_robot',
    title: 'cleaner',
    iconImage: '/css/images/controls/ic_control-cleaner.png'
  },
  {
    remoIconString: 'ico_curtain',
    title: 'curtain',
    iconImage: '/css/images/controls/ic_control-curtain.png'
  },
  {
    remoIconString: 'ico_fan',
    title: 'fan',
    iconImage: '/css/images/controls/ic_control-fan.png'
  },
  {
    remoIconString: 'ico_light',
    title: 'lignt',
    iconImage: '/css/images/controls/ic_control-light.png'
  },
  {
    remoIconString: 'ico_tv',
    title: 'TV',
    iconImage: '/css/images/controls/ic_control-tv.png'
  }
];

conf.signals = [
  {
    remoIconString: 'ico_broadcast',
    className: 'icon-screencast'
  },
  {
    remoIconString: 'ico_subtitle',
    className: 'icon-subtitle'
  },
  {
    remoIconString: 'ico_number_7',
    className: 'icon-seven'
  },
  {
    remoIconString: 'ico_arrow_right',
    className: 'icon-arrow_right'
  },
  {
    remoIconString: 'ico_number_11',
    className: 'icon-eleven'
  },
  {
    remoIconString: 'ico_arrow_left',
    className: 'icon-arrow_left'
  },
  {
    remoIconString: 'ico_bs',
    className: 'icon-bs'
  },
  {
    remoIconString: 'ico_lightup',
    className: 'icon-brightness_high'
  },
  {
    remoIconString: 'ico_tv_guide',
    className: 'icon-table'
  },
  {
    remoIconString: 'ico_menu',
    className: 'icon-list'
  },
  {
    remoIconString: 'ico_cs',
    className: 'icon-cs'
  },
  {
    remoIconString: 'ico_number_6',
    className: 'icon-six'
  },
  {
    remoIconString: 'ico_blast',
    className: 'icon-blast'
  },
  {
    remoIconString: 'ico_am',
    className: 'icon-am'
  },
  {
    remoIconString: 'ico_number_2',
    className: 'icon-two'
  },
  {
    remoIconString: 'ico_number_0',
    className: 'icon-zero'
  },
  {
    remoIconString: 'ico_number_4',
    className: 'icon-four'
  },
  {
    remoIconString: 'ico_text_close',
    className: 'icon-text_close'
  },
  {
    remoIconString: 'ico_d',
    className: 'icon-dbutton'
  },
  {
    remoIconString: 'ico_forward',
    className: 'icon-forward'
  },
  {
    remoIconString: 'ico_backward',
    className: 'icon-backward'
  },
  {
    remoIconString: 'ico_input',
    className: 'icon-linein'
  },
  {
    remoIconString: 'ico_number_10',
    className: 'icon-ten'
  },
  {
    remoIconString: 'ico_fm',
    className: 'icon-fm'
  },
  {
    remoIconString: 'ico_ac_fan',
    className: 'icon-fan'
  },
  {
    remoIconString: 'ico_timer',
    className: 'icon-timer'
  },
  {
    remoIconString: 'ico_stop',
    className: 'icon-stop'
  },
  {
    remoIconString: 'ico_text_stop',
    className: 'icon-text_stop'
  },
  {
    remoIconString: 'ico_minus',
    className: 'icon-minus'
  },
  {
    remoIconString: 'ico_display',
    className: 'icon-monitor'
  },
  {
    remoIconString: 'ico_number_8',
    className: 'icon-eight'
  },
  {
    remoIconString: 'ico_plus',
    className: 'icon-plus'
  },
  {
    remoIconString: 'ico_lightdown',
    className: 'icon-brightness_low'
  },
  {
    remoIconString: 'ico_pause',
    className: 'icon-pause'
  },
  {
    remoIconString: 'ico_cross',
    className: 'icon-cross'
  },
  {
    remoIconString: 'ico_previous',
    className: 'icon-previous'
  },
  {
    remoIconString: 'ico_ac_warm',
    className: 'icon-warm'
  },
  {
    remoIconString: 'ico_off',
    className: 'icon-off'
  },
  {
    remoIconString: 'ico_mute',
    className: 'icon-mute'
  },
  {
    remoIconString: 'ico_option',
    className: 'icon-more'
  },
  {
    remoIconString: 'ico_io',
    className: 'icon-power'
  },
  {
    remoIconString: 'ico_unknown',
    className: 'icon-unknown'
  },
  {
    remoIconString: 'ico_next',
    className: 'icon-next'
  },
  {
    remoIconString: 'ico_text_open',
    className: 'icon-text_open'
  },
  {
    remoIconString: 'ico_number_12',
    className: 'icon-twelve'
  },
  {
    remoIconString: 'ico_mode_auto',
    className: 'icon-repeat'
  },
  {
    remoIconString: 'ico_number_9',
    className: 'icon-nine'
  },
  {
    remoIconString: 'ico_play',
    className: 'icon-play'
  },
  {
    remoIconString: 'ico_ac_eco',
    className: 'icon-eco'
  },
  {
    remoIconString: 'ico_number_3',
    className: 'icon-three'
  },
  {
    remoIconString: 'ico_check',
    className: 'icon-check'
  },
  {
    remoIconString: 'ico_arrow_bottom',
    className: 'icon-arrow_bottom'
  },
  {
    remoIconString: 'ico_record',
    className: 'icon-record'
  },
  {
    remoIconString: 'ico_tv',
    className: 'icon-tv'
  },
  {
    remoIconString: 'ico_number_1',
    className: 'icon-one'
  },
  {
    remoIconString: 'ico_on',
    className: 'icon-on'
  },
  {
    remoIconString: 'ico_ac_cool',
    className: 'icon-cool'
  },
  {
    remoIconString: 'ico_arrow_top',
    className: 'icon-arrow_top'
  },
  {
    remoIconString: 'ico_return',
    className: 'icon-return'
  },
  {
    remoIconString: 'ico_ac_dry',
    className: 'icon-ac_dry'
  },
  {
    remoIconString: 'ico_number_5',
    className: 'icon-five'
  },
  {
    remoIconString: 'ico_ac0',
    className: 'icon-ac0'
  },
  {
    remoIconString: 'ico_ac1',
    className: 'icon-ac1'
  }
];