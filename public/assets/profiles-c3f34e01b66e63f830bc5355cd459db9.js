$(document).ready(function(){function e(){var e=getViewport()[0],a=getViewport()[1];if(e!=o){var n=e/3;t.css("height",n)}i=a,o=e}o=getViewport()[0],i=getViewport()[1],widthIsWide=o>768,window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};var t=$(".section-cover");if(widthIsWide&&t.length>0){t=t.first();var o=getViewport()[0],i=getViewport()[1],a=o/3;t.css("height",a);var n;$(window).on("resize",function(){clearTimeout(n),n=setTimeout(e,1e3)});var r=$("nav"),s=r.outerHeight(),d=t.find(".section-cover-image"),c=t.find("h1");parallaxBackground=function(){var e=window.pageYOffset-s,o=e-10,i=t.offset().top,a=t.outerHeight(),n=i+a+s;if(e>0&&n>=e){var r=o/3+"px",f=o/5+"px",g=1-o/a;d.css({transform:"translateY("+r+")",opacity:g}),c.css({transform:"translateY("+f+")",opacity:g})}else d.css({transform:"",opacity:""}),c.css({transform:"",opacity:""})},parallaxBackground()}else parallaxBackground=function(){};if(MSIE||/(iPad|iPhone|iPod|Android)/g.test(navigator.userAgent)||window.addEventListener("scroll",function(){requestAnimationFrame(parallaxBackground)},!1),$(".no-bio").length>0){var f=["/assets/food-joke-1.jpg","/assets/food-joke-2.jpg","/assets/food-joke-3.jpg"],g=f[Math.floor(Math.random()*f.length)];$(".food-joke").attr("src",g)}});