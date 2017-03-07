   // 字体大小变化
   (function() {
       var ft = document.getElementsByTagName("html")[0]; //获取到html标签
       var s = window.screen.width; //获取屏幕的宽度
       window.onresize = function() { //屏幕尺寸改变触发
           var w = document.body.offsetWidth; //获取浏览器内容的宽度
           ft.style.fontSize = w / s * 16 + "px";
       }
   })();
   //判断在什么设备浏览器上打开
   var browser = {
       versions: function() {
           var u = navigator.userAgent,
               app = navigator.appVersion;
           return { //移动终端浏览器版本信息
               trident: u.indexOf('Trident') > -1, //IE内核
               presto: u.indexOf('Presto') > -1, //opera内核
               webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
               gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
               mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
               ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
               android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
               iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
               iPad: u.indexOf('iPad') > -1, //是否iPad
               webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
           };
       }(),
       language: (navigator.browserLanguage || navigator.language).toLowerCase()
   }
   if (browser.versions.mobile) { //判断是否是移动设备打开。browser代码在下面
       var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
       if (ua.match(/MicroMessenger/i) == "micromessenger") {
           //在微信中打开
           // alert('你在微信中打开')
       }
       if (ua.match(/WeiBo/i) == "weibo") {
           //在新浪微博客户端打开
       }
       if (ua.match(/QQ/i) == "qq") {
           //在QQ空间打开
       }
       if (browser.versions.ios) {
           //是否在IOS浏览器打开
       }
       if (browser.versions.android) {
           //是否在安卓浏览器打开
       }
   } else {
       //否则就是PC浏览器打开
   }

   window.onload = function() {
       //        var wh = window.screen.height;
       var wh = document.body.clientHeight
       boxH = wh - 90;
       $('.boxH').css('max-height', (boxH / 16) + 'rem');
       //        console.log(boxH)
       //        alert((boxH / 16) + 'rem')
       $('.pojList').on('touchstart', function() {
           $('.box').fadeIn();
       })
       $('.box').on('touchstart', function(event) {
           var event = event || e;
           $(this).fadeOut();
           event.stopPropagation()
       });


   }