/**
 * author : zhangbing
 * date : 2013-11-02
 */

 var http = require('http');

var dataApi = 'http://112.124.36.248/weixin.php';

function buildRequestParams(data){

	var data = data || {};
	var result = '';

	for(var item in data){
		result += '' + item + '=' + encodeURIComponent(data[item]) + '&';
	}

	if(result.length > 0){
		result = result.slice(0, -1);
	}

	// console.log(result);
	return result;
}

exports.getData = function(params, callback)
{	
	// var params = {keyword : "js设计模式"};
	var url = dataApi + '?' + buildRequestParams(params);

	console.log(url);
	var data = '';
	var httpReq = http.get(url, function(response){
		// console.dir(response);
		response.on('data', function(chunk){
			data += chunk;
		});
		// console.log(response.statusCode);

		response.on('end', function(){
			// console.log('end');
			// console.dir(JSON.parse(JSON.stringify(data)));

			// 先把buffer转成json字符串，然后parse成对象，但是第一次parse以后还是string，再次parse
			var result = JSON.parse(JSON.parse(JSON.stringify(data)));

			callback(result['items']);
		});
	});

	httpReq.on('error', function(error){
		console.dir(error);
	});
};

// 	   authors: '吕凤翥  编著 / 2007-08-01 清华大学出版社',
//     title: ' C++  语言基础教程题解与上机指导（第2版） ',
//     sourceSite: '当当 ',
//     link: 'http://product.dangdang.com/20013386.html#ddclick?act=click&pos=20013386_2_1_q&cat=&key=c%2B%2B&qinfo=6267_1_48&pinfo=&minfo=&ninfo=&custid=&permid=&ref=&rcount=&type=&t=1383374797000',
//     oriPrice: '¥20.00',
//     nowPrice: '¥16.00',
//     sendInfo: '' }


// buildRequestParams({test:'test'});
// exports.getData();

