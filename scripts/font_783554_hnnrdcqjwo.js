(function(window){var svgSprite='<svg><symbol id="icon-zizhitianshi" viewBox="0 0 1024 1024"><path d="M140.8 742.4s-6.4 0 0 0c-6.4 6.4-12.8 6.4-12.8 12.8l-32 19.2h6.4c-25.6 12.8 179.2 44.8 243.2 6.4l96-211.2s-19.2-83.2-128-89.6-172.8 243.2-249.6 236.8c25.6 32 76.8 25.6 76.8 25.6zM960 716.8c-76.8 6.4-134.4-243.2-249.6-236.8C595.2 486.4 576 569.6 576 569.6l102.4 211.2c64 38.4 275.2 0 249.6-6.4h6.4l-38.4-19.2-6.4-6.4v-6.4s44.8 6.4 70.4-25.6z" fill="#F5F6F6" ></path><path d="M300.8 352a211.2 204.8 0 1 0 422.4 0 211.2 204.8 0 1 0-422.4 0Z" fill="#F7C696" ></path><path d="M339.2 352c0-108.8 83.2-192 192-204.8H512c-115.2 0-211.2 89.6-211.2 204.8S396.8 556.8 512 556.8h19.2c-108.8-6.4-192-96-192-204.8z" fill="#EBBF94" ></path><path d="M556.8 454.4c-25.6-51.2-64-51.2-89.6 0L345.6 704 256 883.2l-12.8 32c-25.6 51.2 0 89.6 57.6 89.6h422.4c57.6 0 83.2-38.4 57.6-89.6L556.8 454.4z" fill="#4DCBB4" ></path><path d="M486.4 492.8c-19.2-12.8-38.4-6.4-44.8 6.4l-198.4 422.4c-6.4 6.4-6.4 19.2-6.4 25.6 0 25.6 25.6 51.2 51.2 51.2h70.4c-25.6 0-51.2-25.6-51.2-51.2v-12.8l19.2-38.4 172.8-371.2c6.4-12.8 0-25.6-12.8-32z" fill="#4DCBB4" ></path><path d="M518.4 576c-70.4 0-128-57.6-128-128V339.2c0-70.4 57.6-128 128-128h6.4c70.4 0 128 57.6 128 128V448C640 518.4 582.4 576 518.4 576z" fill="#FDDAB7" ></path><path d="M512 25.6c-70.4 0-128 19.2-128 44.8s57.6 44.8 128 44.8 128-19.2 128-44.8-57.6-44.8-128-44.8z m0 64c-51.2 0-89.6-6.4-89.6-12.8S467.2 64 512 64c51.2 0 89.6 6.4 89.6 12.8s-38.4 12.8-89.6 12.8z" fill="#F5E088" ></path><path d="M364.8 275.2a89.6 76.8 0 1 0 179.2 0 89.6 76.8 0 1 0-179.2 0Z" fill="#F7C696" ></path><path d="M492.8 268.8a102.4 89.6 90 1 0 179.2 0 102.4 89.6 90 1 0-179.2 0Z" fill="#F7C696" ></path><path d="M448 441.6m-25.6 0a25.6 25.6 0 1 0 51.2 0 25.6 25.6 0 1 0-51.2 0Z" fill="#B39C80" ></path><path d="M576 441.6m-25.6 0a25.6 25.6 0 1 0 51.2 0 25.6 25.6 0 1 0-51.2 0Z" fill="#B39C80" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)