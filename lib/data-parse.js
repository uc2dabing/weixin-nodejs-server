// author : zhangbing
// time : 2013-10-07
// 微信推送的xml数据解析器(xml2json)

var parseString = require('xml2js').parseString;

exports.parseXml = function(xmlData, callback){

	parseString(xmlData, function(err, result){

		var data = result.xml;
		if(typeof callback == 'function'){
			callback(data);
		}
	});
};