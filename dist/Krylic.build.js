!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Krylic=e():t.Krylic=e()}(this,(function(){return function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e){function o(t,e,i){if(!(this instanceof o))return new o(t);void 0!==t&&(this.canvas="string"==typeof t?document.querySelector(t):t,this.ctx=this.canvas.getContext("2d"),this.width=e,this.height=i,this.canvas.width=CANVAS_WIDTH=this.width,this.canvas.height=CANVAS_HEIGHT=this.height),this.idIndex=0,this.screenBuffers={},this.fireCallback=!1,this.resCount=0,this.doFill=!0,this.doStroke=!0,this.rectmode="CORNER",this.font=["24px","Arial"],this.animateLoop=!0,this.preload=function(){return null},this.trypreload(),this._initCanvas()}o.prototype.trypreload=function(){if(window.preload||this.preload)var t=window.setInterval(function(){if(this.resCount<=0){var e=(performance.now()/1e3).toFixed(2);return console.log("%cAll Resources Loaded in "+e+"s","color : green"),(void 0===window.preload?this.preload:window.preload)(),void window.clearInterval(t)}}.bind(this),10)},o.prototype.resize=function(t){window.addEventListener("resize",function(){this.resizeCanvas(this.canvas,t)}.bind(this)),this.resizeCanvas(this.canvas,t)},o.prototype.createCanvas=function(t,e){return this.canvas=document.createElement("canvas"),this.canvas.id="KrylicCanvas-"+this.idIndex,this.canvas.width=t||200,this.canvas.height=e||200,CANVAS_WIDTH=this.canvas.width,CANVAS_HEIGHT=this.canvas.height,this.ctx=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.index++,this},o.prototype.createScreenBuffer=function(t,e,i){let n=document.createElement("canvas");return n.id="KrylicCanvasOffscreen-"+this.idIndex,n.width=e||this.canvas.width,n.height=i||this.canvas.height,this.screenBuffers[t]=new o(n,n.width,n.height),this.screenBuffers[t]},o.prototype.putScreenBuffer=function(t){this.ctx.drawImage(t.canvas,0,0)},o.prototype._initCanvas=function(){window.addEventListener("DOMContentLoaded",function(){window.animate&&this.fireCallback&&animate()}.bind(this))},o.prototype.noLoop=function(){this.animateLoop=!1},o.prototype.loop=function(t){if(this.animateLoop)return window.animate?requestAnimationFrame(animate):requestAnimationFrame(t);this.animateLoop=!0},o.prototype.resizeCanvas=function(t,e){let o=9*window.innerWidth/16;window.innerHeight>o?(e?(t.width=window.innerWidth,t.height=o):(t.style.width=window.innerWidth+"px",t.style.height=o+"px"),t.style.left="0px",t.style.top=(window.innerHeight-o)/2+"px"):(e?(t.width=16*window.innerHeight/9,t.height=window.innerHeight):(t.style.width=16*window.innerHeight/9+"px",t.style.height=window.innerHeight+"px"),t.style.left=(window.innerWidth-t.width)/2+"px",t.style.top="0px")},t.exports=o},function(t,e,o){const i=o(0);o(2),o(3),o(4),o(5),t.exports=i},function(t,e,o){const i=o(0);i.prototype.noFill=function(){return this.doFill=!1,this},i.prototype.noStroke=function(){return this.doStroke=!1,this},i.prototype.fill=function(t,e,o,i){let n=this._parseColor(t,e,o,i);if("object"==typeof t&&!(t instanceof CanvasGradient)){let e=k.ctx.createLinearGradient(100,0,0,100);for(let o=0;o<t.length;o++)e.addColorStop(o/t.length,t[o]);return this.ctx.fillStyle=e,this.doFill=!0,!0}return this.ctx.fillStyle=n,this.doFill=!0,void 0===t?(this.ctx.fill(),this):this},i.prototype.stroke=function(t,e,o,i){let n=this._parseColor(t,e,o,i);if("object"==typeof t&&!(t instanceof CanvasGradient)){let e=k.ctx.createLinearGradient(100,0,0,100);for(let o=0;o<t.length;o++)e.addColorStop(o/t.length,t[o]);return this.ctx.strokeStyle=e,this.doStroke=!0,!0}return this.ctx.strokeStyle=n,this.doStroke=!0,void 0===t?(this.ctx.stroke(),this):this},i.prototype.linearGradient=function(t,e,o,i,n){let r=this.ctx.createLinearGradient(t,e,o,i);for(let t=0;t<n.length;t++){let e=t/n.length,o=n[t].split("-");void 0!==o[1]&&(e=o[1]),r.addColorStop(e,o[0])}return r},i.prototype.radialGradient=function(t,e,o,i,n){let r=this.ctx.createRadialGradient(t,e,o,t,e,i);for(let t=0;t<n.length;t++){let e=t/n.length,o=n[t].split("-");void 0!==o[1]&&(e=o[1]),r.addColorStop(e,o[0])}return r},i.prototype.shadow=function(t,e,o,i){this.ctx.shadowColor=i||"rgba(100,100,100,.4)",this.ctx.shadowOffsetX=t||0,this.ctx.shadowOffsetY=e||0,this.ctx.shadowBlur=o||0},i.prototype.noShadow=function(){this.ctx.shadowColor="rgba(0, 0, 0, 0)",this.ctx.shadowOffsetX=0,this.ctx.shadowOffsetY=0,this.ctx.shadowBlur=0},i.prototype.strokeWeight=function(t){return this.ctx.lineWidth=t,this},i.prototype.clear=function(t,e,o,i){let n=this._parseColor(t,e,o,i);return n?(this.ctx.fillStyle=n,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this):(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this)},i.prototype.rectMode=function(t){this.rectmode=t},i.prototype.rect=function(t,e,o,i,n,r,s,h){void 0===i&&(i=o),void 0===r&&(r=n),void 0===s&&(s=r),void 0===h&&(h=s);let c=o/2,a=i/2;return n?(this.ctx.beginPath(),"center"===this.rectmode?(this.ctx.moveTo(t-c+n,e-a),this.ctx.arcTo(t-c+o,e-a,t-c+o,e-a+i,r),this.ctx.arcTo(t-c+o,e-a+i,t-c,e-a+i,s),this.ctx.arcTo(t-c,e-a+i,t-c,e-a,h),this.ctx.arcTo(t-c,e-a,t-c+o,e-a,n)):(this.ctx.moveTo(t+n,e),this.ctx.arcTo(t+o,e,t+o,e+i,r),this.ctx.arcTo(t+o,e+i,t,e+i,s),this.ctx.arcTo(t,e+i,t,e,h),this.ctx.arcTo(t,e,t+o,e,n)),this.doFill&&this.ctx.fill(),this.doStroke&&this.ctx.stroke(),this.ctx.closePath(),this):(this.ctx.beginPath(),"center"===this.rectmode?this.ctx.rect(t-o/2,e-i/2,o,i):this.ctx.rect(t,e,o,i),this.doFill&&this.ctx.fill(),this.doStroke&&this.ctx.stroke(),this.ctx.closePath(),this)},i.prototype.triangle=function(t,e,o,i){this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(t+o/2,e-i),this.ctx.lineTo(t+o,e),this.ctx.closePath(),this.doFill&&this.ctx.fill(),this.doStroke&&this.ctx.stroke()},i.prototype.circle=function(t,e,o){return this.ctx.beginPath(),this.ctx.arc(t,e,o,0,2*Math.PI),this.doFill&&this.ctx.fill(),this.doStroke&&this.ctx.stroke(),this.ctx.closePath(),this},i.prototype.line=function(t,e,o,i){return this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(o,i),this.doFill&&this.ctx.fill(),this.doStroke&&this.ctx.stroke(),this.ctx.closePath(),this},i.prototype.begin=function(){this.ctx.beginPath()},i.prototype.close=function(){this.ctx.closePath()},i.prototype.from=function(t,e){return console.log(typeof t),"object"==typeof t&&this.ctx.moveTo(t.x,t.y),this.ctx.moveTo(t,e),this},i.prototype.to=function(t,e){return"object"==typeof t&&this.ctx.lineTo(t.x,t.y),this.ctx.lineTo(t,e),this},i.prototype.image=function(t,e,o,i,n,r,s,h,c){t.complete?5===arguments.length?this.ctx.drawImage(t,e,o,i,n):this.ctx.drawImage(t,e,o,i,n,r,s,h,c):window.setTimeout(()=>{5===arguments.length?this.image(t,e,o,i,n):this.image(t,e,o,i,n,r,s,h,c)},50)},i.prototype.textAlign=function(t){this.ctx.textAlign=t},i.prototype.textBaseline=function(t){this.ctx.textBaseline=t},i.prototype.textFont=function(t){return this.font[1]=t,this},i.prototype.textSize=function(t){return this.font[0]=t+"px",this},i.prototype.text=function(t,e,o,i,n){return this.ctx.font=this.font.join(" "),this.doFill&&this.ctx.fillText(t,e,o,i,n),this.doStroke&&this.ctx.strokeText(t,e,o,i,n),this},i.prototype.blendMode=function(t){this.ctx.globalCompositeOperation=t},i.prototype.alpha=function(t){this.ctx.globalAlpha=t},i.prototype.translate=function(t,e){return void 0===e&&(e=t),this.ctx.translate(t,e),this},i.prototype.rotate=function(t){return this.ctx.rotate(t),this},i.prototype.transRot=function(t,e,o){return this.ctx.translate(t,e),this.ctx.rotate(o),this},i.prototype.push=function(){this.ctx.save()},i.prototype.pop=function(){this.ctx.restore()},i.prototype.smooth=function(t){"imageSmoothingEnabled"in this.ctx&&(this.ctx.imageSmoothingEnabled=!0,this.ctx.imageSmoothingQuality=t)},i.prototype.noSmooth=function(){"imageSmoothingEnabled"in this.ctx&&(this.ctx.imageSmoothingEnabled=!1)},t.exports=i},function(t,e,o){const i=o(0);i.prototype.loadImage=function(t){this.resCount++;let e=new Image;return e.src=t,e.onload=function(){this.resCount--}.bind(this),e},i.prototype.loadJSON=function(t,e){this.resCount++;let o=new XMLHttpRequest;o.open("GET",t,!0),o.onload=()=>{this.resCount--,4===o.readyState&&200===o.status?e(null,o.responseText):e("Error loading JSON",null)},o.send()},i.prototype.drawJSON=function(t){for(const e in t){let o=e.split("-")[0];switch(o){case"fill":case"stroke":this[o](t[o]);break;default:"object"==typeof t[o]?this[o].apply(this,t[o]):this[o].call(this,t[o])}}},t.exports=i},function(t,e,o){const i=o(0);i.prototype._parseColor=function(t,e,o,i){let n=t;return"number"==typeof t&&(n=rgba(t,e,o)),"number"!=typeof t||!e||o||i||(i=e,n=rgba(t,t,t,e)),"number"==typeof t&&"number"==typeof e&&"number"==typeof o&&(n=rgba(t,e,o,i)),n},i.prototype.keyIsPressed=function(t){return!0===CURRENT_KEYS[t]},t.exports=i},function(t,e,o){(function(t){function e(){t.WINDOW_WIDTH=window.innerWidth-6,t.WINDOW_HEIGHT=window.innerHeight-6}t.rgba=function(t,e,o,i){return void 0===e&&(e=t),void 0===o&&(o=t),void 0===i&&(i=1),i>1&&(i/=255),"rgba("+clamp(t,0,255)+","+clamp(e,0,255)+","+clamp(o,0,255)+","+clamp(i,0,1)+")"},t.rgb=function(t,e,o){return void 0===e&&(e=t),void 0===o&&(o=t),"rgb("+clamp(t,0,255)+","+clamp(e,0,255)+","+clamp(o,0,255)+")"},t.hsla=function(t,e,o,i){return"hsla("+t+"deg, "+clamp(e,0,100)+"%, "+clamp(o,0,100)+"%, "+(void 0===i?1:i)+")"},t.hsl=function(t,e,o){return"hsl("+t+"deg, "+clamp(e,0,100)+"%, "+clamp(o,0,100)+"%)"},t.randomRGB=function(t,e,o){let i=randomInt(t||255),n=randomInt(e||255),r=randomInt(o||255);return rgb(i,n,r)},t.randomHSLA=function(t,e,o,i){randomInt(t||360),randomInt(e||100),randomInt(o||100)},t.radians=function(t){return t*Math.PI/180},t.norm=function(t,e,o){return(t-e)/(o-e)},t.lerp=function(t,e,o){return(o-e)*t+e},t.map=function(t,e,o,i,n){return this.lerp(this.norm(t,e,o),i,n)},t.dist=function(t,e,o,i){let n=t-o,r=e-i;return Math.sqrt(n*n+r*r)},t.random=function(t,e){return void 0===e?Math.random()*(void 0===t?1:t):t+Math.random()*(e-t)},t.randomInt=function(t,e){return Math.floor(random(t,e))},t.clamp=function(t,e,o){return Math.min(Math.max(t,Math.min(e,o)),Math.max(e,o))},t.tween=function(t,e,o){return null==o&&(o=20),t+=(e-t)/o},t.checkType=function(t,e){if(void 0!==t){if("object"==typeof t){if(-1===t.constructor.toString().toLowerCase().indexOf(e+"()"))throw"Type Cheking Error : ("+typeof t+" "+t+") is not typeof "+e;return t}if(typeof t!==e)throw"Type Cheking Error : ("+typeof t+" "+t+") is not typeof "+e;return t}},t.optional=function(t,e){return void 0===t&&(t=e),t},t.intersects=function(t,e){let o=t.x,i=t.x+t.width,n=t.y,r=t.y+t.height,s=e.x,h=e.x+e.width,c=e.y,a=e.y+e.height;return t.width&&t.height||(i=t.x,r=t.y),e.width&&e.height||(h=e.x,a=e.y),t.width&&t.height||e.width&&e.height,!(s>=i||o>=h||c>=r||n>=a)},t.mouseX=0,t.mouseY=0,t.mouseDown=!1,window.addEventListener("mousemove",(function(e){t.mouseX=e.offsetX,t.mouseY=e.offsetY})),window.addEventListener("mousedown",(function(){t.mouseDown=!0})),window.addEventListener("mouseup",(function(){t.mouseDown=!1})),t.CURRENT_KEYS={},t.KEY_W=87,t.KEY_A=65,t.KEY_S=83,t.KEY_D=68,t.KEY_SPACE=32,t.ARROW_UP=38,t.ARROW_DOWN=40,t.ARROW_LEFT=37,t.ARROW_RIGHT=39,window.addEventListener("keydown",(function(e){t.code=e.keyCode||e.which,t.CURRENT_KEYS[code]=!0,window.onKeyPressed&&t.onKeyPressed(code,e)})),window.addEventListener("keyup",(function(e){t.code=e.keyCode||e.which,t.CURRENT_KEYS[code]=!1})),t.CANVAS_WIDTH=0,t.CANVAS_HEIGHT=0,t.WINDOW_WIDTH=0,t.WINDOW_HEIGHT=0,e(),window.addEventListener("resize",e),t.ADD="lighter",t.DIFFERENCE="difference",t.EXCLUSION="exclusion",t.SCREEN="screen",t.XOR="xor",t.COPY="copy",t.SRC_OVER="source-over",t.SRC_OUT="source-out",t.SRC_IN="source-in",t.SRC_TOP="source-atop",t.DEST_OVER="destination-over",t.DEST_OUT="destination-out",t.DEST_IN="destination-in",t.DEST_TOP="destination-atop",t.CENTER="center",t.MIDDLE="middle",t.CORNER="corner"}).call(this,o(6))},function(t,e){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"==typeof window&&(o=window)}t.exports=o}])}));
//# sourceMappingURL=Krylic.build.js.map