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

// 返回的文字信息模版
var textTpl = ['<xml>',
 					'<ToUserName><![CDATA[<%= toUser %>]]></ToUserName>',
 					'<FromUserName><![CDATA[<%= fromUser %>]]></FromUserName>',
 					'<CreateTime><%= createTime %></CreateTime>',
 					'<MsgType><![CDATA[text]]></MsgType>',
 					'<Content><![CDATA[<%= content %>]]></Content>',
 				'</xml>'].join('');

// 返回的图文信息模版
var newsTpl = ['<xml>',
					'<ToUserName><![CDATA[<%= toUser %>]]></ToUserName>',
					'<FromUserName><![CDATA[<%= fromUser %>]]></FromUserName>',
					'<CreateTime><%= createTime %></CreateTime>',
					'<MsgType><![CDATA[news]]></MsgType>',
					'<ArticleCount><%= articles.length %></ArticleCount>',
					'<Articles>',
						'<% if (articles.length){ %>',
							'<% articles.forEach(function(item){ %>',
								'<item>',
									'<Title><![CDATA[<%= item.title %>]]></Title>',
									'<Description><![CDATA[<%= item.description %>]]></Description>',
									'<PicUrl><![CDATA[<%= item.picurl %>]]></PicUrl>',
									'<Url><![CDATA[<%= item.url %>]]></Url>',
								'</item>',
							'<% }) %>',
						'<% } %>',
					'</Articles>',
				'</xml>'].join('');

// 返回的音乐信息模版
var musicTpl = ['<xml>',
 					'<ToUserName><![CDATA[<%= toUser %>]]></ToUserName>',
 					'<FromUserName><![CDATA[<%= fromUser %>]]></FromUserName>',
 					'<CreateTime><%= createTime %></CreateTime>',
 					'<MsgType><![CDATA[music]]></MsgType>',
 					'<Music>',
 						'<Title><![CDATA[<%= title %>]]></Title>',
 						'<Description><![CDATA[<%= description %>]]></Description>',
 						'<MusicUrl><![CDATA[<%= musicUrl %>]]></MusicUrl>',
 						'<HQMusicUrl><![CDATA[<%= musicHqUrl %>]]></HQMusicUrl>',
 					'</Music>',
 				'</xml>'].join('');

// 文字消息
exports.text = function(data, callback){

	var result = ejs.render(textTpl, {
		toUser : data.FromUserName,
		fromUser : data.ToUserName,
		createTime : Date.now(),
		content : '欢迎关注echo－info'
	});

	console.log(result);
	callback(result);
};

// 图片消息
exports.image = function(data, callback){

	console.log(data);

	var result = ejs.render(newsTpl, {
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

// 时间消息
exports.event = function(data, callback){

	var result = '';
	if('subscribe' == data.MsgType[0]){
		result = ejs.render(textTpl, {
			toUser : data.FromUserName,
			fromUser : data.ToUserName,
			createTime : Date.now(),
			content : '欢迎关注echo－info'
		});
		callback(result);
	}
};

// 位置消息
exports.location = function(data, callback){

};




