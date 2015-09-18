!function(){var r={color:"#1D5ECE",bgcolor:"#eaeaea",semi:!1,rounded:!1,clockwise:!0,radius:"15",stroke:"5",max:100,iterations:50,animation:"easeOutCubic",interval:200,showProgressCircleInBrowser:!0,showProgressCircleInDevice:!0};angular.module("ionic-cache-src",["ionic","angular-svg-round-progress","ngCordova","ngStorage"]).provider("$cacheSrc",function(){this.config=r,this.set=function(r,o){var c=typeof r;return"object"==c?angular.extend(this.config,r):"string"==c&&(this.config[r]=o),this},this.$get=function(){return this.config}}).factory("cacheSrcStorage",["$localStorage",function(r){var o={};return o._cache=r.cache_src,o.get=function(r){return o._cache[r]&&getCacheDir()+o._cache[r]},o.set=function(r,c){return o._cache[r]=c,o},o}]).directive("cacheSrc",["$ionicPlatform","$window","$interval","$timeout","$compile","$cacheSrc","$cordovaFileTransfer","$localStorage","$cordovaNetwork",function(r,o,c,e,n,i,s,t,a){return{restrict:"A",scope:{onProgress:"=?",onFinish:"=?",onError:"=?"},link:function(e,a,u){function l(){for(var r="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;16>c;c++)r+=o.charAt(Math.floor(Math.random()*o.length));return r}function h(r,o){return angular.element(o('<div style="text-align:{{textAlign}}"><div round-progress  max="max"  current="progress"  color="{{color}}" bgcolor="{{bgcolor}}"  radius="{{radius}}"  stroke="{{stroke}}"  rounded="rounded" clockwise="clockwise" iterations="{{iterations}}"  animation="{{animation}}"></div></div>')(r))}function d(r,o){for(var c=0;c<o.length;c++){var e=o[c];if(0===r.indexOf(e))return!0}return!1}function g(r){return d(r,["http://","https://","ftp://"])?!0:!1}function f(r,o){r.progress=0,r.max=100,r.radius=o.radius,r.stroke=o.stroke,r.animation=o.animation,r.clockwise=o.clockwise,r.color=o.color,r.bgcolor=o.bgcolor,r.rounded=o.rounded,r.iterations=o.iterations,r.textAlign="center"}function v(){switch(device.platform){case"iOS":return o.cordova.file.documentsDirectory;case"Android":return o.cordova.file.dataDirectory}return""}function p(r){P.showProgressCircleInDevice&&(a.css("display",w),m.remove()),S(r)}function S(r){a[0][P.srcIs||"src"]=r,e.onFinish(r)}if(o.cordova){var m,w,P=(ionic.Platform.isIOS(),ionic.Platform.isAndroid(),{});angular.extend(P,i),angular.extend(P,u),f(e,P),e.onProgress=e.onProgress||function(){},e.onFinish=e.onFinish||function(){},e.onError=e.onError||function(){};var x=t.cache_src=t.cache_src||{};u.$observe("cacheSrc",function(){u.cacheSrc&&(g(u.cacheSrc)?x[u.cacheSrc]?r.ready().then(function(){S(v()+x[u.cacheSrc])}):(P.showProgressCircleInDevice&&(m=h(e,n),w=a.css("display"),a.css("display","none"),a.after(m)),r.ready().then(function(){var r="."+u.cacheSrc.split(".").pop(),o=l()+r;s.download(u.cacheSrc,v()+o,{},!0).then(function(r){x[u.cacheSrc]=o,p(v()+o)},e.onError,function(r){e.progress=r.loaded/r.total*100,e.onProgress(e.progress)})})):S(u.cacheSrc))})}else{var m=h(e,n),P={};angular.extend(P,i),angular.extend(P,u),f(e,P),e.onProgress=e.onProgress||function(){},e.onFinish=e.onFinish||function(){},u.$observe("cacheSrc",function(){if(u.cacheSrc)if(g(u.cacheSrc)){if(P.showProgressCircleInBrowser){var r=a.css("display");a.css("display","none"),a.after(m)}var o=c(function(){e.progress+=10,e.onProgress(e.progress),100==e.progress&&(c.cancel(o),P.showProgressCircleInBrowser&&(a.css("display",r),m.remove()),a[0][P.srcIs||"src"]=u.cacheSrc,e.onFinish(u.cacheSrc))},P.interval)}else a[0][P.srcIs||"src"]=u.cacheSrc,e.onFinish(u.cacheSrc)})}}}}])}();