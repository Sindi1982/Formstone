/*! formstone v0.8.24 [scrollbar.js] 2015-10-29 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){r=b.$body}function e(a){w.iterate.call(x,j)}function f(){x=a(t.base)}function g(a){var b="";b+='<div class="'+u.bar+'">',b+='<div class="'+u.track+'">',b+='<span class="'+u.handle+'"></span>',b+="</div></div>",a.paddingRight=parseInt(this.css("padding-right"),10),a.paddingBottom=parseInt(this.css("padding-bottom"),10),this.addClass([u.base,a.customClass,a.horizontal?u.horizontal:""].join(" ")).wrapInner('<div class="'+u.content+'" />').prepend(b),a.$content=this.find(t.content),a.$bar=this.find(t.bar),a.$track=this.find(t.track),a.$handle=this.find(t.handle),a.trackMargin=parseInt(a.trackMargin,10),a.$content.on(v.scroll,a,k),a.mouseWheel&&a.$content.on("DOMMouseScroll"+v.namespace+" mousewheel"+v.namespace,a,l),a.$track.fsTouch({axis:a.horizontal?"x":"y",pan:!0}).on(v.panStart,a,n).on(v.pan,a,o).on(v.panEnd,a,p),j(a),f()}function h(a){a.$track.fsTouch("destroy"),a.$bar.remove(),a.$content.off(v.namespace).contents().unwrap(),this.removeClass([u.base,u.active,a.customClass].join(" ")).off(v.namespace)}function i(b,c,d){var e=d||b.duration,f={};if("number"!==a.type(c)){var g=a(c);if(g.length>0){var h=g.position();c=b.horizontal?h.left+b.$content.scrollLeft():h.top+b.$content.scrollTop()}else c="top"===c?0:"bottom"===c?b.horizontal?b.$content[0].scrollWidth:b.$content[0].scrollHeight:b.$content.scrollTop()}f[b.horizontal?"scrollLeft":"scrollTop"]=c,b.$content.stop().animate(f,e)}function j(a){a.$el.addClass(u.isSetup);var b={},c={},d={},e=0,f=!0;if(a.horizontal){a.barHeight=a.$content[0].offsetHeight-a.$content[0].clientHeight,a.frameWidth=a.$content.outerWidth(),a.trackWidth=a.frameWidth-2*a.trackMargin,a.scrollWidth=a.$content[0].scrollWidth,a.ratio=a.trackWidth/a.scrollWidth,a.trackRatio=a.trackWidth/a.scrollWidth,a.handleWidth=a.handleSize>0?a.handleSize:a.trackWidth*a.trackRatio,a.scrollRatio=(a.scrollWidth-a.frameWidth)/(a.trackWidth-a.handleWidth),a.handleBounds={left:0,right:a.trackWidth-a.handleWidth},a.$content.css({paddingBottom:a.barHeight+a.paddingBottom});var g=a.$content.scrollLeft();e=g*a.ratio,f=a.scrollWidth<=a.frameWidth,b={width:a.frameWidth},c={width:a.trackWidth,marginLeft:a.trackMargin,marginRight:a.trackMargin},d={width:a.handleWidth}}else{a.barWidth=a.$content[0].offsetWidth-a.$content[0].clientWidth,a.frameHeight=a.$content.outerHeight(),a.trackHeight=a.frameHeight-2*a.trackMargin,a.scrollHeight=a.$content[0].scrollHeight,a.ratio=a.trackHeight/a.scrollHeight,a.trackRatio=a.trackHeight/a.scrollHeight,a.handleHeight=a.handleSize>0?a.handleSize:a.trackHeight*a.trackRatio,a.scrollRatio=(a.scrollHeight-a.frameHeight)/(a.trackHeight-a.handleHeight),a.handleBounds={top:0,bottom:a.trackHeight-a.handleHeight};var h=a.$content.scrollTop();e=h*a.ratio,f=a.scrollHeight<=a.frameHeight,b={height:a.frameHeight},c={height:a.trackHeight,marginBottom:a.trackMargin,marginTop:a.trackMargin},d={height:a.handleHeight}}f?a.$el.removeClass(u.active):a.$el.addClass(u.active),a.$bar.css(b),a.$track.css(c),a.$handle.css(d),a.panning=!1,q(a,e),k({data:a}),a.$el.removeClass(u.setup)}function k(a){w.killEvent(a);var b=a.data,c={};if(!b.panning){if(b.horizontal){var d=b.$content.scrollLeft();0>d&&(d=0),b.handleLeft=d/b.scrollRatio,b.handleLeft>b.handleBounds.right&&(b.handleLeft=b.handleBounds.right),c={left:b.handleLeft}}else{var e=b.$content.scrollTop();0>e&&(e=0),b.handleTop=e/b.scrollRatio,b.handleTop>b.handleBounds.bottom&&(b.handleTop=b.handleBounds.bottom),c={top:b.handleTop}}b.$handle.css(c)}}function l(a){var b,c,d=a.data;if(d.horizontal){var e=d.$content[0].scrollLeft,f=d.$content[0].scrollWidth,g=d.$content.outerWidth();if(b="DOMMouseScroll"===a.type?-40*a.originalEvent.detail:a.originalEvent.wheelDelta,c=b>0?"right":"left","left"===c&&-b>f-g-e)return d.$content.scrollLeft(f),m(a);if("right"===c&&b>e)return d.$content.scrollLeft(0),m(a)}else{var h=d.$content[0].scrollTop,i=d.$content[0].scrollHeight,j=d.$content.outerHeight();if(b="DOMMouseScroll"===a.type?-40*a.originalEvent.detail:a.originalEvent.wheelDelta,c=b>0?"up":"down","down"===c&&-b>i-j-h)return d.$content.scrollTop(i),m(a);if("up"===c&&b>h)return d.$content.scrollTop(0),m(a)}}function m(a){return w.killEvent(a),a.returnValue=!1,!1}function n(a){var b,c=a.data,d=c.$track.offset();c.panning=!0,b=c.horizontal?c.handleLeft=a.pageX-d.left-c.handleWidth/2:c.handleTop=a.pageY-d.top-c.handleHeight/2,q(c,b)}function o(a){var b,c=a.data;b=c.horizontal?c.handleLeft+a.deltaX:c.handleTop+a.deltaY,q(c,b)}function p(a){var b=a.data;b.panning=!1,b.horizontal?b.handleLeft+=a.deltaX:b.handleTop+=a.deltaY}function q(a,b){var c={};a.horizontal?(b<a.handleBounds.left&&(b=a.handleBounds.left),b>a.handleBounds.right&&(b=a.handleBounds.right),c={left:b},a.$content.scrollLeft(Math.round(b*a.scrollRatio))):(b<a.handleBounds.top&&(b=a.handleBounds.top),b>a.handleBounds.bottom&&(b=a.handleBounds.bottom),c={top:b},a.$content.scrollTop(Math.round(b*a.scrollRatio))),a.$handle.css(c)}var r,s=b.Plugin("scrollbar",{widget:!0,defaults:{customClass:"",duration:0,handleSize:0,horizontal:!1,mouseWheel:!0,trackMargin:0},classes:["content","bar","track","handle","horizontal","setup","active"],methods:{_setup:d,_construct:g,_destruct:h,_resize:e,scroll:i,resize:j}}),t=s.classes,u=t.raw,v=s.events,w=s.functions,x=(b.$window,[])}(jQuery,Formstone);