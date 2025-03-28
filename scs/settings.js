
const _0x2cf381=_0x5ac8;(function(_0x462270,_0x1b791a){const _0x4348ca=_0x5ac8,_0x1220a5=_0x462270();while(!![]){try{const _0x284f60=-parseInt(_0x4348ca(0x1aa))/0x1*(-parseInt(_0x4348ca(0x19b))/0x2)+parseInt(_0x4348ca(0x181))/0x3*(parseInt(_0x4348ca(0x1c7))/0x4)+-parseInt(_0x4348ca(0x1bb))/0x5*(-parseInt(_0x4348ca(0x1ac))/0x6)+-parseInt(_0x4348ca(0x1b9))/0x7+parseInt(_0x4348ca(0x197))/0x8+-parseInt(_0x4348ca(0x180))/0x9+parseInt(_0x4348ca(0x1c8))/0xa;if(_0x284f60===_0x1b791a)break;else _0x1220a5['push'](_0x1220a5['shift']());}catch(_0x54290a){_0x1220a5['push'](_0x1220a5['shift']());}}}(_0x5439,0x711b0));function _0x5ac8(_0x431fb2,_0x7e63c9){const _0x543944=_0x5439();return _0x5ac8=function(_0x5ac8e9,_0x45054f){_0x5ac8e9=_0x5ac8e9-0x176;let _0x45bda4=_0x543944[_0x5ac8e9];return _0x45bda4;},_0x5ac8(_0x431fb2,_0x7e63c9);}function _0x5439(){const _0x49d674=['stanzaId','utf-8','heroku','patch','insert\x20the\x20variable\x20name\x20in\x20capital\x20letter','description','/apps/','2376648aNdqQw','*\x20=>\x20','../Ibrahim/adams','\x20*BMW\x20VAR\x20SETTINGS*\x20\x0a\x0a','30cBmGRI','HEROKU_APY_KEY','\x0aChoose\x20a\x20variable\x20by\x20replying\x20its\x20number','(((.+)+)+)+$','pm2\x20restart\x20all','setprefix','yes','writeFileSync','toString','log','Only\x20Mods\x20can\x20use\x20this\x20command','*Heroku\x20Vars\x20list\x20*\x0a\x0a','BOT_NAME','*Description*\x20:','Bad\x20format\x20;\x20Exemple\x20of\x20using\x20:\x0asetvar\x20OWNER_NAME=Ibrahim\x20Adams','1403OXNXtI','length','129450lSmuko','/config-vars','Error','HEROKU_APP_NAME','extendedTextMessage','sendMessage','keys','AUTO_DOWNLOAD_STATUS','message','error','key','child_process','get\x20a\x20heroku\x20var','4512963ctyWnK','nom','75RtBWvb','command\x20reserved\x20for\x20bot\x20owner','awaitForMessage','variable\x20refresh\x0a\x20restart\x20in\x20progress....','Please\x20fill\x20in\x20the\x20HEROKU_APP_NAME\x20and\x20HEROKU_APY_KEY\x20environment\x20variables','HEROKU','constructor','setvar','heroku-client','BOT_MENU_LINKS','PUBLIC_MODE','Heroku','28dcWpVB','5850420OIfFjA','map','env','STARTING_BOT_MESSAGE','split','text','warncount','\x20\x20\x20\x20*BMW\x20VAR\x20SETTINGS*\x20\x0a\x0a','join','get\x20all\x20heroku\x20vars','only\x20Mods\x20can\x20use\x20this\x20commande','contextInfo','PRESENCE','set.env','8122779LJoyMK','335883OMNmSx','PM_PERMIT','🚘\x20*','The\x20environment\x20variable\x20description\x20was\x20not\x20found.','-\x20*','Heroku\x20vars\x20are\x20rebooting\x20,\x20Redeploying....','get','edit\x20settings\x20of\x20the\x20bot','readFileSync','WARN_COUNT','variable\x20refresh,\x20restart\x20in\x20progress....','\x0a└──────\x20⋆⋅☆⋅⋆\x20──────┘\x0a\x0aPlease\x20reply\x20on\x20message\x20with\x20the\x20number\x20corresponding\x20to\x20your\x20choice','settings','search','parse'];_0x5439=function(){return _0x49d674;};return _0x5439();}const {adams}=require(_0x2cf381(0x199)),s=require('../config'),fs=require('fs'),dotenv=require('dotenv');function getDescriptionFromEnv(_0x396d52){const _0x291b1f=_0x2cf381;filePath='./app.json';const _0x8c8ee0=fs[_0x291b1f(0x189)](filePath,_0x291b1f(0x191)),_0x1fd930=JSON[_0x291b1f(0x18f)](_0x8c8ee0),_0x30138d=_0x1fd930[_0x291b1f(0x1ca)][_0x396d52];return _0x30138d&&_0x30138d['description']?_0x30138d[_0x291b1f(0x195)]:_0x291b1f(0x184);}adams({'nomCom':_0x2cf381(0x1c2),'categorie':'heroku','description':'set\x20a\x20heroku\x20var'},async(_0x4bdf5a,_0x27ad89,_0x4276d9)=>{const _0x3a29b2=_0x2cf381,{ms:_0x19e904,repondre:_0x111d17,superUser:_0x54ed3b,arg:_0x22f28d}=_0x4276d9;if(!_0x54ed3b){_0x111d17(_0x3a29b2(0x17c));return;};if(s['HEROKU_APP_NAME']==null||s[_0x3a29b2(0x19c)]==null){_0x111d17(_0x3a29b2(0x1bf));return;};if(!_0x22f28d[0x0]||!_0x22f28d['join']('')[_0x3a29b2(0x176)]('=')){_0x111d17(_0x3a29b2(0x1a9));return;};const _0x23f1e4=_0x22f28d[_0x3a29b2(0x17a)]('\x20'),_0x343480=require('heroku-client'),_0x131a18=new _0x343480({'token':s[_0x3a29b2(0x19c)]});let _0x4af6f4='/apps/'+s[_0x3a29b2(0x1af)];await _0x131a18[_0x3a29b2(0x193)](_0x4af6f4+_0x3a29b2(0x1ad),{'body':{[_0x23f1e4[_0x3a29b2(0x176)]('=')[0x0]]:_0x23f1e4['split']('=')[0x1]}}),await _0x111d17(_0x3a29b2(0x186));}),adams({'nomCom':'getallvar','categorie':'heroku','description':_0x2cf381(0x17b)},async(_0x3fcb26,_0x29194c,_0x2fcba8)=>{const _0x4899ac=_0x2cf381,{ms:_0x3b642f,repondre:_0x1378b4,superUser:_0x1677ec,arg:_0x5e7639}=_0x2fcba8;if(!_0x1677ec){_0x1378b4('only\x20mods\x20can\x20use\x20this\x20commande');return;};if(s[_0x4899ac(0x1af)]==null||s[_0x4899ac(0x19c)]==null){_0x1378b4(_0x4899ac(0x1bf));return;};const _0x542360=require('heroku-client'),_0x4cfe44=new _0x542360({'token':s[_0x4899ac(0x19c)]});let _0xde26d4='/apps/'+s[_0x4899ac(0x1af)],_0xceffee=await _0x4cfe44[_0x4899ac(0x187)](_0xde26d4+_0x4899ac(0x1ad)),_0x2e958d=_0x4899ac(0x1a6);for(vr in _0xceffee){_0x2e958d+=_0x4899ac(0x183)+vr+'*\x20'+'=\x20'+_0xceffee[vr]+'\x0a';}_0x1378b4(_0x2e958d);}),adams({'nomCom':'getvar','categorie':_0x2cf381(0x192),'description':_0x2cf381(0x1b8)},async(_0x19935c,_0x68589a,_0x222e7f)=>{const _0xc9d09f=_0x2cf381,{ms:_0x58a77f,repondre:_0x2ce9fc,superUser:_0x57592f,arg:_0x51f6ea}=_0x222e7f;if(!_0x57592f){_0x2ce9fc(_0xc9d09f(0x1a5));return;};if(s[_0xc9d09f(0x1af)]==null||s[_0xc9d09f(0x19c)]==null){_0x2ce9fc('Please\x20fill\x20in\x20the\x20HEROKU_APP_NAME\x20and\x20HEROKU_APY_KEY\x20environment\x20variables');return;};if(!_0x51f6ea[0x0]){_0x2ce9fc(_0xc9d09f(0x194));return;};try{const _0xc2d1ce=require('heroku-client'),_0x2a0369=new _0xc2d1ce({'token':s['HEROKU_APY_KEY']});let _0x46c7e7='/apps/'+s[_0xc9d09f(0x1af)],_0x4aa13d=await _0x2a0369[_0xc9d09f(0x187)](_0x46c7e7+_0xc9d09f(0x1ad));for(vr in _0x4aa13d){if(_0x51f6ea['join']('\x20')===vr)return _0x2ce9fc(vr+'=\x20'+_0x4aa13d[vr]);}}catch(_0x13d485){_0x2ce9fc(_0xc9d09f(0x1ae)+_0x13d485);}}),adams({'nomCom':_0x2cf381(0x18d),'categorie':_0x2cf381(0x1c6),'description':_0x2cf381(0x188)},async(_0x20c0fc,_0x21dcce,_0x4ddcd7)=>{const _0xb18a95=_0x2cf381,{ms:_0x5f2fa3,repondre:_0x3e9d56,superUser:_0x2eab65,auteurMessage:_0x5db4c6}=_0x4ddcd7;if(!_0x2eab65){_0x3e9d56('command\x20reserved\x20for\x20bot\x20owner');return;};let _0x40730a=[{'nom':'AUTO_READ_STATUS','choix':['yes','no']},{'nom':_0xb18a95(0x1b3),'choix':[_0xb18a95(0x1a1),'no']},{'nom':_0xb18a95(0x182),'choix':['yes','no']},{'nom':_0xb18a95(0x1c5),'choix':[_0xb18a95(0x1a1),'no']},{'nom':_0xb18a95(0x1cb),'choix':[_0xb18a95(0x1a1),'no']},{'nom':_0xb18a95(0x17e),'choix':['1','2','3']}];function _0x46b434(_0x2a7b5a,_0x1792dc){const _0x524294=_0xb18a95;if(_0x2a7b5a[_0x524294(0x1ba)]<_0x1792dc[_0x524294(0x1ba)])return-0x1;if(_0x2a7b5a[_0x524294(0x1ba)]>_0x1792dc[_0x524294(0x1ba)])return 0x1;return 0x0;}_0x40730a['sort'](_0x46b434);let _0x9b282b=_0xb18a95(0x19a);for(v=0x0;v<_0x40730a['length'];v++){_0x9b282b+=v+0x1+_0xb18a95(0x185)+_0x40730a[v][_0xb18a95(0x1ba)]+'*\x0a';}_0x9b282b+=_0xb18a95(0x19d);let _0x4f5c13=await _0x21dcce[_0xb18a95(0x1b1)](_0x20c0fc,{'text':_0x9b282b},{'quoted':_0x5f2fa3});console[_0xb18a95(0x1a4)](_0x4f5c13);let _0x1b5321=await _0x21dcce[_0xb18a95(0x1bd)]({'chatJid':_0x20c0fc,'sender':_0x5db4c6,'timeout':0xea60,'filter':_0x264053=>_0x264053['message']['extendedTextMessage']&&_0x264053['message'][_0xb18a95(0x1b0)][_0xb18a95(0x17d)]['stanzaId']==_0x4f5c13['key']['id']&&_0x264053[_0xb18a95(0x1b4)][_0xb18a95(0x1b0)][_0xb18a95(0x177)]>0x0&&_0x264053[_0xb18a95(0x1b4)]['extendedTextMessage'][_0xb18a95(0x177)]<=_0x40730a[_0xb18a95(0x1ab)]}),_0x55093c=_0x1b5321['message'][_0xb18a95(0x1b0)][_0xb18a95(0x177)]-0x1,{nom:_0x4ebc57,choix:_0x3f2d7c}=_0x40730a[_0x55093c],_0x1de135=_0xb18a95(0x179);_0x1de135+='*Name*\x20:'+_0x4ebc57+'\x0a',_0x1de135+=_0xb18a95(0x1a8)+getDescriptionFromEnv(_0x4ebc57)+'\x0a\x0a',_0x1de135+='┌──────\x20⋆⋅☆⋅⋆\x20──────┐\x0a\x0a';for(i=0x0;i<_0x3f2d7c[_0xb18a95(0x1ab)];i++){_0x1de135+='*\x20*'+(i+0x1)+_0xb18a95(0x198)+_0x3f2d7c[i]+'\x0a';}_0x1de135+=_0xb18a95(0x18c);let _0x1e2745=await _0x21dcce[_0xb18a95(0x1b1)](_0x20c0fc,{'text':_0x1de135},{'quoted':_0x1b5321}),_0x31adfe=await _0x21dcce[_0xb18a95(0x1bd)]({'chatJid':_0x20c0fc,'sender':_0x5db4c6,'timeout':0xea60,'filter':_0x49d419=>_0x49d419[_0xb18a95(0x1b4)][_0xb18a95(0x1b0)]&&_0x49d419[_0xb18a95(0x1b4)][_0xb18a95(0x1b0)][_0xb18a95(0x17d)][_0xb18a95(0x190)]==_0x1e2745[_0xb18a95(0x1b6)]['id']&&_0x49d419[_0xb18a95(0x1b4)][_0xb18a95(0x1b0)][_0xb18a95(0x177)]>0x0&&_0x49d419['message'][_0xb18a95(0x1b0)]['text']<=_0x3f2d7c['length']}),_0x516d56=_0x31adfe[_0xb18a95(0x1b4)][_0xb18a95(0x1b0)][_0xb18a95(0x177)]-0x1;if(s[_0xb18a95(0x1c0)]=='no')try{const _0x50b364=dotenv[_0xb18a95(0x18f)](fs[_0xb18a95(0x189)]('set.env',{'encoding':_0xb18a95(0x191)}));_0x50b364[_0x4ebc57]=_0x3f2d7c[_0x516d56];const _0x11753b=Object[_0xb18a95(0x1b2)](_0x50b364)['map'](_0x5ea4c4=>_0x5ea4c4+'='+_0x50b364[_0x5ea4c4])['join']('\x0a');fs[_0xb18a95(0x1a2)](_0xb18a95(0x17f),_0x11753b),_0x3e9d56(_0xb18a95(0x1be));const {exec:_0x4f66a0}=require(_0xb18a95(0x1b7));_0x4f66a0(_0xb18a95(0x19f));}catch(_0x5dda05){console[_0xb18a95(0x1b5)](_0x5dda05),_0x3e9d56('Error');}else{if(s['HEROKU_APP_NAME']==null||s[_0xb18a95(0x19c)]==null){_0x3e9d56(_0xb18a95(0x1bf));return;};const _0x5e9d97=require('heroku-client'),_0xf9f99f=new _0x5e9d97({'token':s[_0xb18a95(0x19c)]});let _0x1dff2a=_0xb18a95(0x196)+s[_0xb18a95(0x1af)];await _0xf9f99f[_0xb18a95(0x193)](_0x1dff2a+_0xb18a95(0x1ad),{'body':{[_0x4ebc57]:_0x3f2d7c[_0x516d56]}}),await _0x3e9d56(_0xb18a95(0x18b));}});function changevars(_0x392d30,_0x5ddc3d){const _0x52b59d=_0x2cf381,_0x37c354=(function(){let _0x28c539=!![];return function(_0x35c50c,_0x195e11){const _0x47cdc5=_0x28c539?function(){if(_0x195e11){const _0x2ec45b=_0x195e11['apply'](_0x35c50c,arguments);return _0x195e11=null,_0x2ec45b;}}:function(){};return _0x28c539=![],_0x47cdc5;};}()),_0x509e52=_0x37c354(this,function(){const _0x2259ba=_0x5ac8;return _0x509e52[_0x2259ba(0x1a3)]()[_0x2259ba(0x18e)](_0x2259ba(0x19e))['toString']()[_0x2259ba(0x1c1)](_0x509e52)['search'](_0x2259ba(0x19e));});_0x509e52(),adams({'nomCom':_0x392d30,'categorie':_0x52b59d(0x1c6)},async(_0x510a4d,_0x1b363c,_0x32a845)=>{const _0x2aa192=_0x52b59d,{arg:_0x1162a2,superUser:_0x208224,repondre:_0x48da79}=_0x32a845;if(!_0x208224){_0x48da79(_0x2aa192(0x1bc));return;};if(!_0x1162a2[0x0]){_0x48da79(getDescriptionFromEnv(_0x5ddc3d));return;};if(s['HEROKU']=='no')try{const _0x12db67=dotenv['parse'](fs['readFileSync'](_0x2aa192(0x17f),{'encoding':_0x2aa192(0x191)}));_0x12db67[_0x5ddc3d]=_0x1162a2[_0x2aa192(0x17a)]('\x20');const _0x3f191f=Object[_0x2aa192(0x1b2)](_0x12db67)[_0x2aa192(0x1c9)](_0x17d304=>_0x17d304+'='+_0x12db67[_0x17d304])['join']('\x0a');fs['writeFileSync'](_0x2aa192(0x17f),_0x3f191f),_0x48da79(_0x2aa192(0x1be));const {exec:_0x4fa49e}=require('child_process');_0x4fa49e(_0x2aa192(0x19f));}catch(_0x2830eb){console[_0x2aa192(0x1a4)](_0x2830eb),_0x48da79(_0x2aa192(0x1ae));}else{if(s[_0x2aa192(0x1af)]==null||s[_0x2aa192(0x19c)]==null){_0x48da79(_0x2aa192(0x1bf));return;};const _0x4e9f34=require(_0x2aa192(0x1c3)),_0x15a11c=new _0x4e9f34({'token':s[_0x2aa192(0x19c)]});let _0x3059d5='/apps/'+s[_0x2aa192(0x1af)];await _0x15a11c['patch'](_0x3059d5+_0x2aa192(0x1ad),{'body':{[_0x5ddc3d]:_0x1162a2[_0x2aa192(0x17a)]('\x20')}}),await _0x48da79(_0x2aa192(0x18b));}});};changevars(_0x2cf381(0x1a0),'PREFIX'),changevars('linkmenu',_0x2cf381(0x1c4)),changevars(_0x2cf381(0x178),_0x2cf381(0x18a)),changevars('botname',_0x2cf381(0x1a7));

/**const {
  adams
} = require("../Ibrahim/adams");
const s = require("../config");
const fs = require('fs');
const dotenv = require("dotenv");
function getDescriptionFromEnv(_0x24f7af) {
  filePath = './app.json';
  const _0x4c6300 = fs.readFileSync(filePath, "utf-8");
  const _0x4f2dfc = JSON.parse(_0x4c6300);
  const _0x3b08a6 = _0x4f2dfc.env[_0x24f7af];
  return _0x3b08a6 && _0
  x3b08a6.description ? _0x3b08a6.description : "The environment variable description was not found.";
}
adams({
  'nomCom': "setvar",
  'categorie': "heroku",
  'description': "set a heroku var"
}, async (_0x2023f8, _0x449747, _0x5c07a0) => {
  const {
    ms: _0x2791a3,
    repondre: _0x1e059c,
    superUser: _0xf264c9,
    arg: _0x44e695
  } = _0x5c07a0;
  if (!_0xf264c9) {
    _0x1e059c("only Mods can use this commande");
    return;
  }
  ;
  if (s.HEROKU_APP_NAME == null || s.HEROKU_APY_KEY == null) {
    _0x1e059c("Please fill in the HEROKU_APP_NAME and HEROKU_APY_KEY environment variables");
    return;
  }
  ;
  if (!_0x44e695[0x0] || !_0x44e695.join('').split('=')) {
    _0x1e059c("Bad format ; Exemple of using :\nsetvar OWNER_NAME=Ibrahim Adams");
    return;
  }
  ;
  const _0x1aca38 = _0x44e695.join(" ");
  const _0x45f36d = require("heroku-client");
  const _0x1c95a5 = new _0x45f36d({
    'token': s.HEROKU_APY_KEY
  });
  let _0x273a62 = "/apps/" + s.HEROKU_APP_NAME;
  await _0x1c95a5.patch(_0x273a62 + "/config-vars", {
    'body': {
      [_0x1aca38.split('=')[0x0]]: _0x1aca38.split('=')[0x1]
    }
  });
  await _0x1e059c("Heroku vars are rebooting , Redeploying....");
});
adams({
  'nomCom': "getallvar",
  'categorie': "heroku",
  'description': "get all heroku vars"
}, async (_0x11487a, _0x3ebb5c, _0x482621) => {
  const {
    ms: _0xdcc0da,
    repondre: _0x384994,
    superUser: _0x51f7b4,
    arg: _0x3a3bce
  } = _0x482621;
  if (!_0x51f7b4) {
    _0x384994("only mods can use this commande");
    return;
  }
  ;
  if (s.HEROKU_APP_NAME == null || s.HEROKU_APY_KEY == null) {
    _0x384994("Please fill in the HEROKU_APP_NAME and HEROKU_APY_KEY environment variables");
    return;
  }
  ;
  const _0x51bc18 = require("heroku-client");
  const _0xdce404 = new _0x51bc18({
    'token': s.HEROKU_APY_KEY
  });
  let _0xbd8a38 = '/apps/' + s.HEROKU_APP_NAME;
  let _0x47049d = await _0xdce404.get(_0xbd8a38 + '/config-vars');
  let _0xaaeb86 = "*Heroku Vars list *\n\n";
  for (vr in _0x47049d) {
    _0xaaeb86 += "🚘 *" + vr + "* " + "= " + _0x47049d[vr] + "\n";
  }
  _0x384994(_0xaaeb86);
});
adams({
  'nomCom': "getvar",
  'categorie': "heroku",
  'description': "get a heroku var"
}, async (_0x4c604f, _0x38bdcd, _0x5f598) => {
  const {
    ms: _0x5d32f6,
    repondre: _0x57426b,
    superUser: _0x44ab9d,
    arg: _0x2132ad
  } = _0x5f598;
  if (!_0x44ab9d) {
    _0x57426b("Only Mods can use this command");
    return;
  }
  ;
  if (s.HEROKU_APP_NAME == null || s.HEROKU_APY_KEY == null) {
    _0x57426b("Please fill in the HEROKU_APP_NAME and HEROKU_APY_KEY environment variables");
    return;
  }
  ;
  if (!_0x2132ad[0x0]) {
    _0x57426b("insert the variable name in capital letter");
    return;
  }
  ;
  try {
    const _0x13a40b = require("heroku-client");
    const _0x26609d = new _0x13a40b({
      'token': s.HEROKU_APY_KEY
    });
    let _0x551c10 = "/apps/" + s.HEROKU_APP_NAME;
    let _0x3c5941 = await _0x26609d.get(_0x551c10 + "/config-vars");
    for (vr in _0x3c5941) {
      if (_0x2132ad.join(" ") === vr) {
        return _0x57426b(vr + "= " + _0x3c5941[vr]);
      }
    }
  } catch (_0x4d48ad) {
    _0x57426b("Error" + _0x4d48ad);
  }
});
adams({
  'nomCom': "settings",
  'categorie': "Heroku",
  'description': "edit settings of the bot"
}, async (_0x22a90b, _0x3a0b49, _0xb0bac1) => {
  const {
    ms: _0x1778e3,
    repondre: _0x20e24a,
    superUser: _0x1d63b6,
    auteurMessage: _0x3dfda8
  } = _0xb0bac1;
  if (!_0x1d63b6) {
    _0x20e24a("command reserved for bot owner");
    return;
  }
  ;
  let _0x3d9ece = [{
    'nom': "AUTO_READ_STATUS",
    'choix': ["yes", 'no']
  }, {
    'nom': 'AUTO_DOWNLOAD_STATUS',
    'choix': ["yes", 'no']
  }, {
    'nom': "PM_PERMIT",
    'choix': ["yes", 'no']
  }, {
    'nom': 'PUBLIC_MODE',
    'choix': ["yes", 'no']
  }, {
    'nom': "STARTING_BOT_MESSAGE",
    'choix': ["yes", 'no']
  }, {
    'nom': "PRESENCE",
    'choix': ['1', '2', '3']
  }];
  function _0x46a4bd(_0x4eea55, _0x2c10b0) {
    if (_0x4eea55.nom < _0x2c10b0.nom) {
      return -0x1;
    }
    if (_0x4eea55.nom > _0x2c10b0.nom) {
      return 0x1;
    }
    return 0x0;
  }
  _0x3d9ece.sort(_0x46a4bd);
  let _0x19af99 = " *BMW VAR SETTINGS* \n\n";
  for (v = 0x0; v < _0x3d9ece.length; v++) {
    _0x19af99 += v + 0x1 + "- *" + _0x3d9ece[v].nom + "*\n";
  }
  _0x19af99 += "\nChoose a variable by replying its number";
  let _0x4f6bef = await _0x3a0b49.sendMessage(_0x22a90b, {
    'text': _0x19af99
  }, {
    'quoted': _0x1778e3
  });
  console.log(_0x4f6bef);
  let _0x58a466 = await _0x3a0b49.awaitForMessage({
    'chatJid': _0x22a90b,
    'sender': _0x3dfda8,
    'timeout': 0xea60,
    'filter': _0x11b80a => _0x11b80a.message.extendedTextMessage && _0x11b80a.message.extendedTextMessage.contextInfo.stanzaId == _0x4f6bef.key.id && _0x11b80a.message.extendedTextMessage.text > 0x0 && _0x11b80a.message.extendedTextMessage.text <= _0x3d9ece.length
  });
  let _0x69d604 = _0x58a466.message.extendedTextMessage.text - 0x1;
  let {
    nom: _0x578334,
    choix: _0x25f0c4
  } = _0x3d9ece[_0x69d604];
  let _0x258a95 = "    *BMW VAR SETTINGS* \n\n";
  _0x258a95 += "*Name* :" + _0x578334 + "\n";
  _0x258a95 += "*Description* :" + getDescriptionFromEnv(_0x578334) + "\n\n";
  _0x258a95 += "┌────── ⋆⋅☆⋅⋆ ──────┐\n\n";
  for (i = 0x0; i < _0x25f0c4.length; i++) {
    _0x258a95 += "* *" + (i + 0x1) + "* => " + _0x25f0c4[i] + "\n";
  }
  _0x258a95 += "\n└────── ⋆⋅☆⋅⋆ ──────┘\n\nPlease reply on message with the number corresponding to your choice";
  let _0x5d441e = await _0x3a0b49.sendMessage(_0x22a90b, {
    'text': _0x258a95
  }, {
    'quoted': _0x58a466
  });
  let _0x3e7e0b = await _0x3a0b49.awaitForMessage({
    'chatJid': _0x22a90b,
    'sender': _0x3dfda8,
    'timeout': 0xea60,
    'filter': _0x48d8f3 => _0x48d8f3.message.extendedTextMessage && _0x48d8f3.message.extendedTextMessage.contextInfo.stanzaId == _0x5d441e.key.id && _0x48d8f3.message.extendedTextMessage.text > 0x0 && _0x48d8f3.message.extendedTextMessage.text <= _0x25f0c4.length
  });
  let _0x49e163 = _0x3e7e0b.message.extendedTextMessage.text - 0x1;
  if (s.HEROKU == 'no') {
    try {
      const _0x453ea5 = dotenv.parse(fs.readFileSync("set.env", {
        'encoding': "utf-8"
      }));
      _0x453ea5[_0x578334] = _0x25f0c4[_0x49e163];
      const _0x41e94f = Object.keys(_0x453ea5).map(_0x2b690f => _0x2b690f + '=' + _0x453ea5[_0x2b690f]).join("\n");
      fs.writeFileSync('set.env', _0x41e94f);
      _0x20e24a("variable refresh\n restart in progress....");
      const {
        exec: _0x563f2e
      } = require('child_process');
      _0x563f2e("pm2 restart all");
    } catch (_0x284a0c) {
      console.error(_0x284a0c);
      _0x20e24a("Error");
    }
  } else {
    if (s.HEROKU_APP_NAME == null || s.HEROKU_APY_KEY == null) {
      _0x20e24a("Please fill in the HEROKU_APP_NAME and HEROKU_APY_KEY environment variables");
      return;
    }
    ;
    const _0x16064c = require("heroku-client");
    const _0x521885 = new _0x16064c({
      'token': s.HEROKU_APY_KEY
    });
    let _0x16e01d = "/apps/" + s.HEROKU_APP_NAME;
    await _0x521885.patch(_0x16e01d + "/config-vars", {
      'body': {
        [_0x578334]: _0x25f0c4[_0x49e163]
      }
    });
    await _0x20e24a("variable refresh, restart in progress....");
  }
});
function changevars(_0xa41969, _0x294fac) {
  const _0x4aa666 = function () {
    let _0x51e0de = true;
    return function (_0x2c9b6c, _0x4697d1) {
      const _0x222c97 = _0x51e0de ? function () {
        if (_0x4697d1) {
          const _0x477879 = _0x4697d1.apply(_0x2c9b6c, arguments);
          _0x4697d1 = null;
          return _0x477879;
        }
      } : function () {};
      _0x51e0de = false;
      return _0x222c97;
    };
  }();
  const _0x1c8bcf = _0x4aa666(this, function () {
    return _0x1c8bcf.toString().search("(((.+)+)+)+$").toString().constructor(_0x1c8bcf).search("(((.+)+)+)+$");
  });
  _0x1c8bcf();
  adams({
    'nomCom': _0xa41969,
    'categorie': 'Heroku'
  }, async (_0x5b3184, _0x3c2192, _0x393619) => {
    const {
      arg: _0x3d776c,
      superUser: _0x6330e9,
      repondre: _0x3a1f2b
    } = _0x393619;
    if (!_0x6330e9) {
      _0x3a1f2b("command reserved for bot owner");
      return;
    }
    ;
    if (!_0x3d776c[0x0]) {
      _0x3a1f2b(getDescriptionFromEnv(_0x294fac));
      return;
    }
    ;
    if (s.HEROKU == 'no') {
      try {
        const _0x429fb4 = dotenv.parse(fs.readFileSync("set.env", {
          'encoding': 'utf-8'
        }));
        _0x429fb4[_0x294fac] = _0x3d776c.join(" ");
        const _0x322480 = Object.keys(_0x429fb4).map(_0xbf932e => _0xbf932e + '=' + _0x429fb4[_0xbf932e]).join("\n");
        fs.writeFileSync('set.env', _0x322480);
        _0x3a1f2b("variable refresh\n restart in progress....");
        const {
          exec: _0x7de845
        } = require("child_process");
        _0x7de845("pm2 restart all");
      } catch (_0x2781b7) {
        console.log(_0x2781b7);
        _0x3a1f2b('Error');
      }
    } else {
      if (s.HEROKU_APP_NAME == null || s.HEROKU_APY_KEY == null) {
        _0x3a1f2b("Please fill in the HEROKU_APP_NAME and HEROKU_APY_KEY environment variables");
        return;
      }
      ;
      const _0x537e4b = require("heroku-client");
      const _0x110661 = new _0x537e4b({
        'token': s.HEROKU_APY_KEY
      });
      let _0xc67a29 = "/apps/" + s.HEROKU_APP_NAME;
      await _0x110661.patch(_0xc67a29 + "/config-vars", {
        'body': {
          [_0x294fac]: _0x3d776c.join(" ")
        }
      });
      await _0x3a1f2b("variable refresh, restart in progress....");
    }
  });
}
;
changevars("setprefix", "PREFIX");
changevars("linkmenu", "BOT_MENU_LINKS");
changevars("warncount", "WARN_COUNT");
changevars("botname", "BOT_NAME");**/
