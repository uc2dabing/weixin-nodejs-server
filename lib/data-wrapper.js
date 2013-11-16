// author : zhangbing
// time : 2013-10-07
// 返回给微信的xml格式数据包装器(json2xml)

// https://github.com/trix/nano 最简单的模版引擎
// var nano = function(template, data) {
// 	var template = template.join('');
// 	return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
// 		var keys = key.split("."), v = data[keys.shift()];
//     	for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
//     	return (typeof v !== "undefined" && v !== null) ? v : "";
//   });
// }

var ejs = require('ejs');
var getData = require('./data-request.js').getData;
var TPL = require('./responseTpl.js');

/**
 * 生成返回的Title格式（多条显示）
 * @param  {Object} data 
 * @return {String} 
 */
function generateTitle(data){
		// var titleTpl = '【<%= sourceSite %>】<%= nowPrice %>/<%= oriPrice %>\n作者：<%= authors %>\n<%= title %>';
		var titleTpl = '<%= title %>\n作者:<%= authors %>';
		var result = ejs.render(titleTpl, {
			sourceSite : data.sourceSite,
			nowPrice : data.nowPrice,
			oriPrice : data.oriPrice,
			authors : data.authors,
			title : data.title
		});
		return result;
};

// 文字消息
exports.text = function(data, callback){

	getData({keyword : data.Content}, function(result){

		var articles = [];

		// console.log(result);
		for(var i = 0; i < result.length; i++){
			var tempObj = {
				title : generateTitle(result[i]),
				description : result[i].authors,
				url : result[i].link,
				picurl : result[i].picurl
			};
			articles.push(tempObj);
		}

		var helpUrl = 'http://api.uc2dabing.com/help';
		var helpIconUrl = 'http://api.uc2dabing.com/images/help_icon.jpeg';
		articles.unshift({
			title : '点击，了解一下我们吧',
			description : '',
			url : helpUrl,
			picurl : helpIconUrl
		});

		// console.log(articles);

		var result = ejs.render(TPL.newsTpl, {
			toUser : data.FromUserName,
			fromUser : data.ToUserName,
			createTime : Date.now(),
			articles : articles
		});

		// console.log(result);
		callback(result);
	});
	
};

// 图片消息
exports.image = function(data, callback){

	console.log(data);

	var result = ejs.render(TPL.newsTpl, {
		toUser : data.FromUserName,
		fromUser : data.ToUserName,
		createTime : Date.now(),
		articles : [
			{
				title : '你拍的什么照片',
				description : '点击照片试试什么效果',
				picurl : data.PicUrl,
				url : data.PicUrl
			}
		]
	});

	callback(result);
};

// 链接消息
exports.link = function(data, callback){

};

// event消息
exports.event = function(data, callback){

	var result = '';
	// console.log(data);
	if('event' == data.MsgType && 'subscribe' == data.Event){
		result = ejs.render(TPL.textTpl, {
			toUser : data.FromUserName,
			fromUser : data.ToUserName,
			createTime : Date.now(),
			content : '欢迎关注echo－info，echo－info神奇的公众帐号，试试输入书的名字～～'
		});

		console.log(result);
		callback(result);
	}
};

// 位置消息
exports.location = function(data, callback){

};






