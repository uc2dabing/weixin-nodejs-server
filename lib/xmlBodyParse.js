// 'user-agent': 'Mozilla/4.0',
// accept: '*/*',
// 'content-type': 'text/xml',
// pragma: 'no-cache'

// 解析微信返回的xml数据  connect中间件

module.exports = function(){

	return function(req, res, next){
		
		// console.log(req.headers['content-type']);
		if('text/xml' == req.headers['content-type']){

			var buffer = '';
			req.on('data', function(chunk){
				buffer += chunk;
			});

			req.on('end', function(){
				
				// console.log(buffer);
				req.xmlBody = buffer;
				next();
			})

		}else{
			return next();
		}

	};
};