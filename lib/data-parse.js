// author : zhangbing
// time : 2013-10-07
// 微信推送的xml数据解析器(xml2json)

var parseString = require('xml2js').parseString;
var logger = require('./logger.js').logger;

exports.parseXml = function(xmlData, callback){
	
	console.log(xmlData);

	parseString(xmlData, function(err, result){

		var data = result.xml;

		// 把返回的数组，转换成字符串
		for(var key in data){
			data[key] = data[key][0];
		}

		logger.info('test', data);

		if(typeof callback == 'function'){
			callback(data);
		}
	});
};

/*

xml通过xml2js转换以后的数据
{ ToUserName: [ 'gh_10309b3242af' ],
  FromUserName: [ 'o-UG3uDiwKX9kLzi0nieOd9kZsLo' ],
  CreateTime: [ '1381592490' ],
  MsgType: [ 'image' ],
  PicUrl: [ 'http://mmbiz.qpic.cn/mmbiz/BTYrt0Ju1tEicv9GhohiayJelvWicehIurf3ehLXoF39YO4bzQQS1q1xvm0foQwRRqmgwrpdvev9nQFafNFhiaiaicWA/0' ],
  MsgId: [ '5933894560949207100' ],
  MediaId: [ 'FjgxporLeQWwlovQXdS-MLbt_b4KFhnJTElEgAD5fW1i7Sb_gF16ApBI3GTAn6Ax' ]
}

微信返回的数据
<xml><ToUserName><![CDATA[gh_10309b3242af]]></ToUserName>
<FromUserName><![CDATA[o-UG3uDiwKX9kLzi0nieOd9kZsLo]]></FromUserName>
<CreateTime>1381592490</CreateTime>
<MsgType><![CDATA[image]]></MsgType>
<PicUrl><![CDATA[http://mmbiz.qpic.cn/mmbiz/BTYrt0Ju1tEicv9GhohiayJelvWicehIurf3ehLXoF39YO4bzQQS1q1xvm0foQwRRqmgwrpdvev9nQFafNFhiaiaicWA/0]]></PicUrl>
<MsgId>5933894560949207100</MsgId>
<MediaId><![CDATA[FjgxporLeQWwlovQXdS-MLbt_b4KFhnJTElEgAD5fW1i7Sb_gF16ApBI3GTAn6Ax]]></MediaId>
</xml>

*/