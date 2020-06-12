// 返回基本路径
(function(){
	var loc = document.location;
	var protocol = loc.protocol;
	var host = loc.host;
	var pathname = loc.pathname;
	window.urls = document.location.href;
	//window.basePath = protocol + '//' + host + '/' + (pathname.split('/'))[1];
    window.basePath =(function(){
		var pagePath;
		if(location.href.indexOf("mbank_api") >=0){
			pagePath=location.href.match(/[a-zA-Z0-9:_./\-]*\/mbank_api\//)[0];
			return pagePath.replace('/mbank_api/','');
		}else{
         pagePath=location.href.match(/[a-zA-Z0-9:_./\-]*\/page\//)[0];
        return pagePath.replace('/page/','');
		}
    })();

	// 返回URL中的参数
	window['_getParameter'] = function (name, location){
		var value = String(location || loc).match(new RegExp('[?&]' + name + '=([^&]*)(&?)', 'i'));
		return value ? value[1] : null;
	};
	var pp = window['__pageParam'] = {};
	var body = document.body;
	var page_vers = body && body.getAttribute("data-page-vers");
	if (page_vers) {
		pp['pv'] = page_vers;
	}

	// 外部库
	var plugins = ["jquery/jquery-2.1.1.min" ,"jquery/fastclick" ,"juicer/juicer-1.0.min", "seajs/sea-min" ];//,"echarts-2.1.8/build/dist/echarts"
	for (var i = 0, j = plugins.length; i < j; i++) {
		document.write('<script src="' + basePath + '/js/' + plugins[i] + '.js?v=1"></script>');
	}

	//每个页面都绑定一个同名JS 和 css
	var path = document.location.href;
    path = path.substring(basePath.length + 1, path.lastIndexOf("."));
    document.write('<script src="' + basePath + "/" + path +  '.js?v=1"></script>');
    document.write('<link type="text/css" rel="stylesheet" href="' + basePath + "/" + path +  '.css?v=1" />');
})();