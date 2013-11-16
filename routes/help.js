
exports.index = function(req, res){
	
	console.log('help route');

	res.render('help', {title : 'test'}, function(err, html){
		res.end(html);
	})	
};