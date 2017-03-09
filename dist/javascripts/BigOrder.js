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



   //        var wh = window.screen.height;


   var wh = document.body.clientHeight //可视区
   boxH = wh - 90;
   var boxLi = $('.box ul li').length * $('.box ul li').height();
   $('.boxH').css('max-height', (boxH / 16) + 'rem');
   if (wh < boxLi) {
       $('.box').css('height', 'auto');
   }
   $('.pojList').on('click', function() {
       $('.box').fadeToggle();
   })
   $('.box').on('click', function() {
       $(this).fadeOut();
   });





   $(function() {
       var _move = false; //移动标记
       var _x, _y; //鼠标离控件左上角的相对位置
       $(".drag").mousedown(function(e) {
           _move = true;
           _x = e.pageX - parseInt($(".drag").css("left"));
           _y = e.pageY - parseInt($(".drag").css("top"));
           $(".drag").fadeTo(20, 0.5); //点击后开始拖动并透明显示
       });
       $(document).mousemove(function(e) {
           if (_move) {
               var x = e.pageX - _x; //移动时根据鼠标位置计算控件左上角的绝对位置
               var y = e.pageY - _y;
               $(".drag").css({
                   top: y,
                   left: x
               }); //控件新位置
           }
       }).mouseup(function() {
           _move = false;
           $(".drag").fadeTo("fast", 1); //松开鼠标后停止移动并恢复成不透明
       });
   });



   var isdrag = false;
   var tx, x, ty, y;
   $(function() {
       document.getElementById("tap").addEventListener('touchend', function() {
           isdrag = false;
       });
       document.getElementById("tap").addEventListener('touchstart', selectmouse);
       document.getElementById("tap").addEventListener('touchmove', movemouse);
   });

   function movemouse(e) {
       e.preventDefault();
       if (isdrag) {
           var n = tx + e.touches[0].pageX - x;
           m = ty + e.touches[0].pageY - y;
           $("#tap").css({
               "left": n,
               "top": m
           });
           return false;
       }
   }

   function selectmouse(e) {
       isdrag = true;
       tx = parseInt(document.getElementById("tap").style.left + 0);
       ty = parseInt(document.getElementById("tap").style.top + 0);
       x = e.touches[0].pageX;
       y = e.touches[0].pageY;
       return false;
   }