/**
 * [index description]
 * @param  {[type]} req
 * @param  {[type]} res
 * @return {[type]}
 */

var dataWrapper = require('../lib/data-wrapper.js');
var dataParse = require('../lib/data-parse.js');

exports.index = function(req, res){

	dataParse.parseXml(req.xmlBody, function(data){

		console.log(data.MsgType[0]);
		 switch(data.MsgType[0]){
			
			case 'event' : dataWrapper.event(data, function(result){ res.end(result); }); break;

			case 'text' : dataWrapper.text(data, function(result){ res.end(result); }); break;

			case 'location' : dataWrapper.location(data, function(result){ res.end(result); }); break;

			case 'link' : dataWrapper.link(data, function(result){ res.end(result); }); break;

			case 'image' : dataWrapper.image(data, function(result){ res.end(result); }); break;
		}

	});
};