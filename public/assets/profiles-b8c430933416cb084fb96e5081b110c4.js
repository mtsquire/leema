$(document).ready(function(){function e(){var e=getViewport()[0],o=getViewport()[1];if(e!=i){var a=e/3;t.css("height",a)}n=o,i=e}i=getViewport()[0],n=getViewport()[1],widthIsWide=i>768,window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};var t=$(".section-cover");if(widthIsWide&&t.length>0){t=t.first();var i=getViewport()[0],n=getViewport()[1],o=i/3;t.css("height",o);var a;$(window).on("resize",function(){clearTimeout(a),a=setTimeout(e,1e3)});var r=$("nav"),s=r.outerHeight(),c=t.find(".section-cover-image"),d=t.find("h1");parallaxBackground=function(){var e=window.pageYOffset-s,i=e-10,n=t.offset().top,o=t.outerHeight(),a=n+o+s;if(e>0&&a>=e){var r=i/2+"px",w=i/5+"px",u=1-i/o;c.css({transform:"translateY("+r+")",opacity:u}),d.css({transform:"translateY("+w+")",opacity:u})}else c.css({transform:"",opacity:""}),d.css({transform:"",opacity:""})},parallaxBackground()}else parallaxBackground=function(){};MSIE||/(iPad|iPhone|iPod|Android)/g.test(navigator.userAgent)||window.addEventListener("scroll",function(){requestAnimationFrame(parallaxBackground)},!1)});