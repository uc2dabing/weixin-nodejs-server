/**
 * author : zhangbing
 * date : 2013-11-02
 */

// 返回的文字信息模版
exports.textTpl = 
				['<xml>',
					'<ToUserName><![CDATA[<%= toUser %>]]></ToUserName>',
 					'<FromUserName><![CDATA[<%= fromUser %>]]></FromUserName>',
 					'<CreateTime><%= createTime %></CreateTime>',
 					'<MsgType><![CDATA[text]]></MsgType>',
 					'<Content><![CDATA[<%= content %>]]></Content>',
 				'</xml>'].join('');

// 返回的图文信息模版
// description字段 只有单条信息的时候才显示，多条信息只显示title
exports.newsTpl = 
			['<xml>',
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
exports.musicTpl = 
			['<xml>',
 				'<ToUserName><![CDATA[<%= toUser %>]]></ToUserName>',
 				'<FromUserName><![CDATA[<%= fromUser %>]]></FromUserName>',
 				'<CreateTime><%= createTime %></CreateTime>',
 				'<MsgType><![CDATA[music]]></MsgType>',
 				'<Music>',
 					'<Title><![CDATA[<%= title %>]]></Title>',
 					'<Description><![CDATA[<%= description %>]]></Description>',
 					'<MusicUrl><![CDATA[<%= musicUrl %>]]></MusicUrl>',
 					'<HQMusicUrl><![CDATA[<%= musicHqUrl %>]]></HQMusicUrl>',
 					'<ThumbMediaId><![CDATA[<%= mediaId %>]]></ThumbMediaId>',
 				'</Music>',
 			'</xml>'].join('');

// 图片信息模版
exports.imageTpl = 
			['<xml>',
				'<ToUserName><![CDATA[<%= toUser %>]]></ToUserName>',
				'<FromUserName><![CDATA[<%= fromUser %>]]></FromUserName>',
				'<CreateTime><%= createTime %></CreateTime>',
				'<MsgType><![CDATA[image]]></MsgType>',
				'<Image>',
					'<MediaId><![CDATA[<%= mediaId %>]]></MediaId>',
				'</Image>',
			'</xml>'].join('');

// 语音信息模版
exports.voiceTpl = 
			['<xml>',
				'<ToUserName><![CDATA[<%= toUser %>]]></ToUserName>',
				'<FromUserName><![CDATA[<%= fromUser %>]]></FromUserName>',
				'<CreateTime><%= createTime %></CreateTime>',
				'<MsgType><![CDATA[voice]]></MsgType>',
				'<Voice>',
					'<MediaId><![CDATA[<%= mediaId %>]]></MediaId>',
				'</Voice>',
			'</xml>'].join('');

// 视频信息模版
exports.videoTpl = 
			['<xml>',
				'<ToUserName><![CDATA[<%= toUser %>]]></ToUserName>',
				'<FromUserName><![CDATA[<%= fromUser %>]]></FromUserName>',
				'<CreateTime><%= createTime %></CreateTime>',
				'<MsgType><![CDATA[video]]></MsgType>',
				'<Video>',
					'<MediaId><![CDATA[<%= mediaId %>]]></MediaId>',
					'<ThumbMediaId><![CDATA[<%= thumbMediaId %>]]></ThumbMediaId>',
				'</Video>', 
			'</xml>'].join('');
