(function(window){var svgSprite='<svg><symbol id="icon-xinjian-" viewBox="0 0 1024 1024"><path d="M563.2 307.2h-51.2v204.8H307.2v51.2h204.8v204.8h51.2v-204.8h204.8v-51.2h-204.8z m-25.6-204.8a435.2 435.2 0 1 0 435.2 435.2A435.2 435.2 0 0 0 537.6 102.4z m0 819.2a384.512 384.512 0 1 1 384-384 384 384 0 0 1-384 384z" fill="#7C7D7D" ></path></symbol><symbol id="icon-huise" viewBox="0 0 1024 1024"><path d="M734.47314453 179.82287597L673.61437989 116.4921875 264.80761719 512l408.8067627 395.5078125 60.85876464-58.38684083L386.03076172 512z" fill="#666666" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)