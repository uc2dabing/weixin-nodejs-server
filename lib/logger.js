/**
 * author : zhangbing
 * date : 2013-10-13
 */
var path = require('path');

var logFilePath = path.join(__dirname, '../logs');

var logger = require('tracer').dailyfile({
	root : logFilePath,
	logPathFormat : '{{root}}/{{prefix}}_{{date}}.log',
	splitFormat : 'yyyy-mm-dd',
	dateformat : 'yyyy-mm-dd HH:MM:ss'
});

console.log(logger);
console.log(logFilePath);
exports.logger = logger;









