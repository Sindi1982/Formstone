/*! formstone v1.3.0 [lightbox.js] 2017-01-10 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./touch","./transition","./viewer"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){ba=b.$body,ca=a("html, body"),da=b.window.location.hash.replace("#","")}function d(){fa&&i()}function e(a){this.on(Z.click,a,h);var b=this.data(V+"-gallery");!ea&&da&&b===da&&(ea=!0,this.trigger(Z.click))}function f(a){j(),this.off(Z.namespace)}function g(b,c){b instanceof a&&h.apply(_,[{data:a.extend(!0,{},{$object:b},W,c||{})}])}function h(c){if(!fa){var d=c.data;fa=a.extend({},{visible:!1,gallery:{active:!1},isMobile:b.isMobile||d.mobile,isTouch:b.support.touch,isAnimating:!0,isZooming:!1,oldContentHeight:0,oldContentWidth:0,metaHeight:0,thumbnailHeight:0,captionOpen:!1,thumbnailsOpen:!1,tapTimer:null},d),fa.isViewer=fa.isMobile&&d.viewer&&void 0!==typeof a.fn.fsViewer;var e=d.$el,f=d.$object,g=e&&e[0].href?e[0].href||"":"",h=e&&e[0].hash?e[0].hash||"":"",i=(g.toLowerCase().split(".").pop().split(/\#|\?/),e?e.data(V+"-type"):""),k="image"===i||g.match(d.fileTypes)||"data:image"===g.substr(0,10),l=S(g),m="url"===i||!k&&!l&&"http"===g.substr(0,4)&&!h,n="element"===i||!k&&!l&&!m&&"#"===h.substr(0,1),o="undefined"!=typeof f;if(n&&(g=h),!(k||l||m||n||o))return void(fa=null);if($.killEvent(c),fa.$viewportMeta=a('meta[name="viewport"]'),fa.viewportContent=!!fa.$viewportMeta.length&&fa.$viewportMeta.attr("content"),fa.margin*=2,k?fa.type="image":l?fa.type="video":fa.type="element",k||l){var q=e.data(V+"-gallery");q&&(fa.gallery.active=!0,fa.gallery.id=q,fa.gallery.$items=a("a[data-lightbox-gallery= "+fa.gallery.id+"], a[rel= "+fa.gallery.id+"]"),fa.gallery.index=fa.gallery.$items.index(fa.$el),fa.gallery.total=fa.gallery.$items.length-1)}fa.thumbnails&&(k||l)&&fa.gallery.active||(fa.thumbnails=!1);var s="";fa.isMobile||(s+='<div class="'+[Y.overlay,fa.theme,fa.customClass].join(" ")+'"></div>');var t=[Y.base,Y.loading,Y.animating,fa.theme,fa.customClass];if(fa.fixed&&t.push(Y.fixed),fa.isMobile&&t.push(Y.mobile),fa.isTouch&&t.push(Y.touch),m&&t.push(Y.iframed),(n||o)&&t.push(Y.inline),fa.thumbnails&&t.push(Y.thumbnailed),s+='<div class="'+t.join(" ")+'" role="dialog" aria-label="lightbox" tabindex="-1">',s+='<button type="button" class="'+Y.close+'">'+fa.labels.close+"</button>",s+='<span class="'+Y.loading_icon+'"></span>',s+='<div class="'+Y.container+'">',fa.gallery.active&&fa.thumbnails){s+='<div class="'+[Y.thumbnails]+'">',s+='<div class="'+[Y.thumbnail_container]+'">';for(var v,x,y=0,z=fa.gallery.$items.length;y<z;y++)v=fa.gallery.$items.eq(y),x=v.data("lightbox-thumbnail"),x||(x=v.find("img").attr("src")),s+='<button class="'+[Y.thumbnail_item]+'">',s+='<img src="'+x+'" alt="">',s+="</button>";s+="</div></div>"}s+='<div class="'+Y.content+'"></div>',(k||l)&&(s+='<div class="'+Y.tools+'">',s+='<div class="'+Y.controls+'">',fa.gallery.active&&(s+='<button type="button" class="'+[Y.control,Y.control_previous].join(" ")+'">'+fa.labels.previous+"</button>",s+='<button type="button" class="'+[Y.control,Y.control_next].join(" ")+'">'+fa.labels.next+"</button>"),fa.isMobile&&fa.isTouch&&(s+='<button type="button" class="'+[Y.toggle,Y.caption_toggle].join(" ")+'">'+fa.labels.captionClosed+"</button>",fa.gallery.active&&fa.thumbnails&&(s+='<button type="button" class="'+[Y.toggle,Y.thumbnail_toggle].join(" ")+'">'+fa.labels.thumbnailsClosed+"</button>")),s+="</div>",s+='<div class="'+Y.meta+'">',s+='<div class="'+Y.meta_content+'">',fa.gallery.active&&(s+='<p class="'+Y.position+'"',fa.gallery.total<1&&(s+=' style="display: none;"'),s+=">",s+='<span class="'+Y.position_current+'">'+(fa.gallery.index+1)+"</span> ",s+=fa.labels.count,s+=' <span class="'+Y.position_total+'">'+(fa.gallery.total+1)+"</span>",s+="</p>"),s+='<div class="'+Y.caption+'">',s+=fa.formatter.call(e,d),s+="</div></div></div>",s+="</div>"),s+="</div></div>",ba.append(s),fa.$overlay=a(X.overlay),fa.$lightbox=a(X.base),fa.$close=a(X.close),fa.$container=a(X.container),fa.$content=a(X.content),fa.$tools=a(X.tools),fa.$meta=a(X.meta),fa.$metaContent=a(X.meta_content),fa.$position=a(X.position),fa.$caption=a(X.caption),fa.$controlBox=a(X.controls),fa.$controls=a(X.control),fa.$thumbnails=a(X.thumbnails),fa.$thumbnailContainer=a(X.thumbnail_container),fa.$thumbnailItems=a(X.thumbnail_item),fa.isMobile?(fa.paddingVertical=fa.$close.outerHeight(),fa.paddingHorizontal=0,fa.mobilePaddingVertical=parseInt(fa.$content.css("paddingTop"),10)+parseInt(fa.$content.css("paddingBottom"),10),fa.mobilePaddingHorizontal=parseInt(fa.$content.css("paddingLeft"),10)+parseInt(fa.$content.css("paddingRight"),10)):(fa.paddingVertical=parseInt(fa.$lightbox.css("paddingTop"),10)+parseInt(fa.$lightbox.css("paddingBottom"),10),fa.paddingHorizontal=parseInt(fa.$lightbox.css("paddingLeft"),10)+parseInt(fa.$lightbox.css("paddingRight"),10),fa.mobilePaddingVertical=0,fa.mobilePaddingHorizontal=0),fa.contentHeight=fa.$lightbox.outerHeight()-fa.paddingVertical,fa.contentWidth=fa.$lightbox.outerWidth()-fa.paddingHorizontal,fa.controlHeight=fa.$controls.outerHeight(),p(),fa.gallery.active&&(fa.$lightbox.addClass(Y.has_controls),J()),aa.on(Z.keyDown,K),ba.on(Z.click,[X.overlay,X.close].join(", "),j).on([Z.focus,Z.focusIn].join(" "),T),fa.gallery.active&&fa.$lightbox.on(Z.click,X.control,E),fa.thumbnails&&fa.$lightbox.on(Z.click,X.thumbnail_item,F),fa.isMobile&&fa.isTouch&&fa.$lightbox.on(Z.click,X.caption_toggle,r).on(Z.click,X.thumbnail_toggle,u),fa.$lightbox.fsTransition({property:"opacity"},function(){k?w(g):l?B(g):m?N(g):n?L(g):o&&O(fa.$object)}).addClass(Y.open),fa.$overlay.addClass(Y.open)}}function i(a){"object"!=typeof a&&(fa.targetHeight=arguments[0],fa.targetWidth=arguments[1]),"element"===fa.type?P(fa.$content.find("> :first-child")):"image"===fa.type?x():"video"===fa.type&&C(),o()}function j(a){$.killEvent(a),fa&&(fa.$lightbox.fsTransition("destroy"),fa.$content.fsTransition("destroy"),fa.$lightbox.addClass(Y.animating).fsTransition({property:"opacity"},function(a){"undefined"!=typeof fa.$inlineTarget&&fa.$inlineTarget.length&&M(),fa.$lightbox.off(Z.namespace),fa.$container.off(Z.namespace),aa.off(Z.keyDown),ba.off(Z.namespace),ba.off(Z.namespace),fa.$overlay.remove(),fa.$lightbox.remove(),fa.$el.focus(),fa=null,aa.trigger(Z.close)}),fa.$lightbox.removeClass(Y.open),fa.$overlay.removeClass(Y.open),fa.isMobile&&(ca.removeClass(Y.lock),fa.viewportContent?fa.$viewportMeta.attr("content",fa.viewportContent):fa.$viewportMeta.remove(),l()))}function k(){ba.on(Z.gestureChange,m).on(Z.gestureStart,m).on(Z.gestureEnd,m)}function l(){ba.off(Z.gestureChange).off(Z.gestureStart).off(Z.gestureEnd)}function m(a){a.preventDefault()}function n(){var b=q();fa.isMobile?0:fa.duration;if(fa.isMobile){var c="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";fa.$viewportMeta.length?fa.$viewportMeta.attr("content",c):fa.$viewportMeta=a("head").append('<meta name="viewport" content="'+c+'">'),k()}else fa.$controls.css({marginTop:(fa.contentHeight-fa.controlHeight-fa.metaHeight+fa.thumbnailHeight)/2});""===fa.$caption.html()?(fa.$caption.hide(),fa.$lightbox.removeClass(Y.has_caption),fa.gallery.active||fa.$tools.hide()):(fa.$caption.show(),fa.$lightbox.addClass(Y.has_caption)),fa.$lightbox.fsTransition({property:fa.contentHeight!==fa.oldContentHeight?"height":"width"},function(){fa.$content.fsTransition({property:"opacity"},function(){fa.$lightbox.removeClass(Y.animating),fa.isAnimating=!1}),fa.$lightbox.removeClass(Y.loading).addClass(Y.ready),fa.visible=!0,aa.trigger(Z.open),fa.gallery.active&&(D(),G(),H()),fa.$lightbox.focus()}),fa.isMobile||fa.$lightbox.css({height:fa.contentHeight+fa.paddingVertical,width:fa.contentWidth+fa.paddingHorizontal,top:fa.fixed?0:b.top});var d=fa.oldContentHeight!==fa.contentHeight||fa.oldContentWidth!==fa.contentWidth;!fa.isMobile&&d||fa.$lightbox.fsTransition("resolve"),fa.oldContentHeight=fa.contentHeight,fa.oldContentWidth=fa.contentWidth,fa.isMobile&&ca.addClass(Y.lock)}function o(){if(fa.visible&&!fa.isMobile){var a=q();fa.$controls.css({marginTop:(fa.contentHeight-fa.controlHeight-fa.metaHeight+fa.thumbnailHeight)/2}),fa.$lightbox.css({height:fa.contentHeight+fa.paddingVertical,width:fa.contentWidth+fa.paddingHorizontal,top:fa.fixed?0:a.top}),fa.oldContentHeight=fa.contentHeight,fa.oldContentWidth=fa.contentWidth}}function p(){var a=q();fa.$lightbox.css({top:fa.fixed?0:a.top})}function q(){if(fa.isMobile)return{left:0,top:0};var a={left:(b.windowWidth-fa.contentWidth-fa.paddingHorizontal)/2,top:fa.top<=0?(b.windowHeight-fa.contentHeight-fa.paddingVertical)/2:fa.top};return fa.fixed!==!0&&(a.top+=aa.scrollTop()),a}function r(a){if($.killEvent(a),fa.captionOpen)s();else{v();var b=parseInt(fa.$metaContent.outerHeight(!0));b+=parseInt(fa.$meta.css("padding-top")),b+=parseInt(fa.$meta.css("padding-bottom")),fa.$meta.css({height:b}),fa.$lightbox.addClass(Y.caption_open).find(X.caption_toggle).text(fa.labels.captionOpen),fa.captionOpen=!0}}function s(){fa.$lightbox.removeClass(Y.caption_open).find(X.caption_toggle).text(fa.labels.captionClosed),fa.captionOpen=!1}function t(){var a=this.attr("title"),b=!(void 0===a||!a)&&a.replace(/^\s+|\s+$/g,"");return b?'<p class="caption">'+b+"</p>":""}function u(a){$.killEvent(a),fa.thumbnailsOpen?v():(s(),fa.$lightbox.addClass(Y.thumbnails_open).find(X.thumbnail_toggle).text(fa.labels.thumbnailsOpen),fa.thumbnailsOpen=!0)}function v(){fa.$lightbox.removeClass(Y.thumbnails_open).find(X.thumbnail_toggle).text(fa.labels.thumbnailsClosed),fa.thumbnailsOpen=!1}function w(b){fa.isViewer?(fa.$imageContainer=a('<div class="'+Y.image_container+'"><img></div>'),fa.$image=fa.$imageContainer.find("img"),fa.$image.attr("src",b).addClass(Y.image),fa.$content.prepend(fa.$imageContainer),x(),fa.$imageContainer.one("loaded.viewer",function(){n()}).fsViewer({theme:fa.theme})):(fa.$imageContainer=a('<div class="'+Y.image_container+'"><img></div>'),fa.$image=fa.$imageContainer.find("img"),fa.$image.one(Z.load,function(){var a=R(fa.$image);fa.naturalHeight=a.naturalHeight,fa.naturalWidth=a.naturalWidth,fa.retina&&(fa.naturalHeight/=2,fa.naturalWidth/=2),fa.$content.prepend(fa.$imageContainer),x(),n()}).on(Z.error,Q).attr("src",b).addClass(Y.image),(fa.$image[0].complete||4===fa.$image[0].readyState)&&fa.$image.trigger(Z.load))}function x(){if(fa.$image){var a=0;for(fa.windowHeight=fa.viewportHeight=b.windowHeight-fa.mobilePaddingVertical-fa.paddingVertical,fa.windowWidth=fa.viewportWidth=b.windowWidth-fa.mobilePaddingHorizontal-fa.paddingHorizontal,fa.contentHeight=1/0,fa.contentWidth=1/0,fa.imageMarginTop=0,fa.imageMarginLeft=0;fa.contentHeight>fa.viewportHeight&&a<2;)fa.imageHeight=0===a?fa.naturalHeight:fa.$image.outerHeight(),fa.imageWidth=0===a?fa.naturalWidth:fa.$image.outerWidth(),fa.metaHeight=0===a?0:fa.metaHeight,fa.spacerHeight=0===a?0:fa.spacerHeight,fa.thumbnailHeight=0===a?0:fa.thumbnailHeight,0===a&&(fa.ratioHorizontal=fa.imageHeight/fa.imageWidth,fa.ratioVertical=fa.imageWidth/fa.imageHeight,fa.isWide=fa.imageWidth>fa.imageHeight),fa.imageHeight<fa.minHeight&&(fa.minHeight=fa.imageHeight),fa.imageWidth<fa.minWidth&&(fa.minWidth=fa.imageWidth),fa.isMobile?(fa.isTouch?(fa.$controlBox.css({width:b.windowWidth}),fa.spacerHeight=fa.$controls.outerHeight(!0)):(fa.$tools.css({width:b.windowWidth}),fa.spacerHeight=fa.$tools.outerHeight(!0)),fa.contentHeight=fa.viewportHeight,fa.contentWidth=fa.viewportWidth,fa.isTouch||fa.$content.css({height:fa.contentHeight-fa.spacerHeight}),fa.spacerHeight+=fa.$thumbnails.outerHeight(!0)+10,y(),fa.imageMarginTop=(fa.contentHeight-fa.targetImageHeight-fa.spacerHeight)/2,fa.imageMarginLeft=(fa.contentWidth-fa.targetImageWidth)/2):(0===a&&(fa.viewportHeight-=fa.margin+fa.paddingVertical,fa.viewportWidth-=fa.margin+fa.paddingHorizontal),fa.viewportHeight-=fa.metaHeight,fa.thumbnails&&(fa.viewportHeight-=fa.thumbnailHeight),y(),fa.contentHeight=fa.targetImageHeight,fa.contentWidth=fa.targetImageWidth),fa.isMobile||fa.isTouch||fa.$meta.css({width:fa.contentWidth}),fa.$image.css({height:fa.targetImageHeight,width:fa.targetImageWidth,marginTop:fa.imageMarginTop,marginLeft:fa.imageMarginLeft}),fa.isMobile||(fa.metaHeight=fa.$meta.outerHeight(!0),fa.contentHeight+=fa.metaHeight),fa.thumbnails&&(fa.thumbnailHeight=fa.$thumbnails.outerHeight(!0),fa.contentHeight+=fa.thumbnailHeight),a++}}function y(){var a=fa.isMobile?fa.contentHeight-fa.spacerHeight:fa.viewportHeight,b=fa.isMobile?fa.contentWidth:fa.viewportWidth;fa.isWide?(fa.targetImageWidth=b,fa.targetImageHeight=fa.targetImageWidth*fa.ratioHorizontal,fa.targetImageHeight>a&&(fa.targetImageHeight=a,fa.targetImageWidth=fa.targetImageHeight*fa.ratioVertical)):(fa.targetImageHeight=a,fa.targetImageWidth=fa.targetImageHeight*fa.ratioVertical,fa.targetImageWidth>b&&(fa.targetImageWidth=b,fa.targetImageHeight=fa.targetImageWidth*fa.ratioHorizontal)),(fa.targetImageWidth>fa.imageWidth||fa.targetImageHeight>fa.imageHeight)&&(fa.targetImageHeight=fa.imageHeight,fa.targetImageWidth=fa.imageWidth),(fa.targetImageWidth<fa.minWidth||fa.targetImageHeight<fa.minHeight)&&(fa.targetImageWidth<fa.minWidth?(fa.targetImageWidth=fa.minWidth,fa.targetImageHeight=fa.targetImageWidth*fa.ratioHorizontal):(fa.targetImageHeight=fa.minHeight,fa.targetImageWidth=fa.targetImageHeight*fa.ratioVertical))}function z(a){return"//www.youtube.com/embed/"+a[1]}function A(a){return"//player.vimeo.com/video/"+a[3]}function B(b){var c=S(b),d=b.split("?");c?(d.length>=2&&(c+="?"+d.slice(1)[0].trim()),fa.$videoWrapper=a('<div class="'+Y.video_wrapper+'"></div>'),fa.$video=a('<iframe class="'+Y.video+'" frameborder="0" seamless="seamless" allowfullscreen></iframe>'),fa.$video.attr("src",c).addClass(Y.video).prependTo(fa.$videoWrapper),fa.$content.prepend(fa.$videoWrapper),C(),n()):Q()}function C(){fa.windowHeight=fa.viewportHeight=b.windowHeight-fa.mobilePaddingVertical-fa.paddingVertical,fa.windowWidth=fa.viewportWidth=b.windowWidth-fa.mobilePaddingHorizontal-fa.paddingHorizontal,fa.videoMarginTop=0,fa.videoMarginLeft=0,fa.isMobile?(fa.isTouch?(fa.$controlBox.css({width:b.windowWidth}),fa.spacerHeight=fa.$controls.outerHeight(!0)+10):(fa.$tools.css({width:b.windowWidth}),fa.spacerHeight=fa.$tools.outerHeight(!0),fa.spacerHeight+=fa.$thumbnails.outerHeight(!0)+10),fa.viewportHeight-=fa.spacerHeight,fa.targetVideoWidth=fa.viewportWidth,fa.targetVideoHeight=fa.targetVideoWidth*fa.videoRatio,fa.targetVideoHeight>fa.viewportHeight&&(fa.targetVideoHeight=fa.viewportHeight,fa.targetVideoWidth=fa.targetVideoHeight/fa.videoRatio),fa.videoMarginTop=(fa.viewportHeight-fa.targetVideoHeight)/2,fa.videoMarginLeft=(fa.viewportWidth-fa.targetVideoWidth)/2):(fa.viewportHeight=fa.windowHeight-fa.margin,fa.viewportWidth=fa.windowWidth-fa.margin,fa.targetVideoWidth=fa.videoWidth>fa.viewportWidth?fa.viewportWidth:fa.videoWidth,fa.targetVideoWidth<fa.minWidth&&(fa.targetVideoWidth=fa.minWidth),fa.targetVideoHeight=fa.targetVideoWidth*fa.videoRatio,fa.contentHeight=fa.targetVideoHeight,fa.contentWidth=fa.targetVideoWidth),fa.isMobile||fa.isTouch||fa.$meta.css({width:fa.contentWidth}),fa.$videoWrapper.css({height:fa.targetVideoHeight,width:fa.targetVideoWidth,marginTop:fa.videoMarginTop,marginLeft:fa.videoMarginLeft}),fa.isMobile||(fa.metaHeight=fa.$meta.outerHeight(!0),fa.contentHeight+=fa.metaHeight),fa.thumbnails&&(fa.thumbnailHeight=fa.$thumbnails.outerHeight(!0),fa.contentHeight+=fa.thumbnailHeight)}function D(b){var c="";fa.gallery.index>0&&(c=fa.gallery.$items.eq(fa.gallery.index-1).attr("href"),S(c)||a('<img src="'+c+'">')),fa.gallery.index<fa.gallery.total&&(c=fa.gallery.$items.eq(fa.gallery.index+1).attr("href"),S(c)||a('<img src="'+c+'">'))}function E(b){$.killEvent(b);var c=a(b.currentTarget);fa.isAnimating||c.hasClass(Y.control_disabled)||(fa.isAnimating=!0,s(),fa.gallery.index+=c.hasClass(Y.control_next)?1:-1,fa.gallery.index>fa.gallery.total&&(fa.gallery.index=fa.infinite?0:fa.gallery.total),fa.gallery.index<0&&(fa.gallery.index=fa.infinite?fa.gallery.total:0),G(),fa.$lightbox.addClass(Y.animating),fa.$content.fsTransition({property:"opacity"},I),fa.$lightbox.addClass(Y.loading))}function F(b){$.killEvent(b);var c=a(b.currentTarget);fa.isAnimating||c.hasClass(Y.active)||(fa.isAnimating=!0,s(),fa.gallery.index=fa.$thumbnailItems.index(c),G(),fa.$lightbox.addClass(Y.animating),fa.$content.fsTransition({property:"opacity"},I),fa.$lightbox.addClass(Y.loading))}function G(){if(fa.thumbnails){var a=fa.$thumbnailItems.eq(fa.gallery.index);fa.$thumbnailItems.removeClass(Y.active),a.addClass(Y.active)}}function H(){if(fa.thumbnails){var a=fa.$thumbnailItems.eq(fa.gallery.index),b=a.position().left+a.outerWidth(!1)/2-fa.$thumbnailContainer.outerWidth(!0)/2;fa.$thumbnailContainer.stop().animate({scrollLeft:b},200,"linear")}}function I(){"undefined"!=typeof fa.$imageContainer&&(fa.isViewer&&fa.$imageContainer.fsViewer("destroy"),fa.$imageContainer.remove()),"undefined"!=typeof fa.$videoWrapper&&fa.$videoWrapper.remove(),fa.$el=fa.gallery.$items.eq(fa.gallery.index),fa.$caption.html(fa.formatter.call(fa.$el,fa)),fa.$position.find(X.position_current).html(fa.gallery.index+1);var a=fa.$el.attr("href"),b=S(a);b?(fa.type="video",B(a)):(fa.type="image",w(a)),J()}function J(){fa.$controls.removeClass(Y.control_disabled),fa.infinite||(0===fa.gallery.index&&fa.$controls.filter(X.control_previous).addClass(Y.control_disabled),fa.gallery.index===fa.gallery.total&&fa.$controls.filter(X.control_next).addClass(Y.control_disabled))}function K(a){!fa.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&fa.$close.trigger(Z.click):($.killEvent(a),fa.$controls.filter(37===a.keyCode?X.control_previous:X.control_next).trigger(Z.click))}function L(b){fa.$inlineTarget=a(b),fa.$inlineContents=fa.$inlineTarget.children().detach(),O(fa.$inlineContents)}function M(){fa.$inlineTarget.append(fa.$inlineContents.detach())}function N(b){b+=b.indexOf("?")>-1?"&"+fa.requestKey+"=true":"?"+fa.requestKey+"=true";var c=a('<iframe class="'+Y.iframe+'" src="'+b+'"></iframe>');O(c)}function O(a){fa.$content.append(a),P(a),n()}function P(a){fa.windowHeight=b.windowHeight-fa.mobilePaddingVertical-fa.paddingVertical,fa.windowWidth=b.windowWidth-fa.mobilePaddingHorizontal-fa.paddingHorizontal,fa.objectHeight=a.outerHeight(!0),fa.objectWidth=a.outerWidth(!0),fa.targetHeight=fa.targetHeight||(fa.$el?fa.$el.data(V+"-height"):null),fa.targetWidth=fa.targetWidth||(fa.$el?fa.$el.data(V+"-width"):null),fa.maxHeight=fa.windowHeight<0?fa.minHeight:fa.windowHeight,fa.isIframe=a.is("iframe"),fa.objectMarginTop=0,fa.objectMarginLeft=0,fa.isMobile||(fa.windowHeight-=fa.margin,fa.windowWidth-=fa.margin),fa.contentHeight=fa.targetHeight?fa.targetHeight:fa.isIframe||fa.isMobile?fa.windowHeight:fa.objectHeight,fa.contentWidth=fa.targetWidth?fa.targetWidth:fa.isIframe||fa.isMobile?fa.windowWidth:fa.objectWidth,(fa.isIframe||fa.isObject)&&fa.isMobile?(fa.contentHeight=fa.windowHeight,fa.contentWidth=fa.windowWidth):fa.isObject&&(fa.contentHeight=fa.contentHeight>fa.windowHeight?fa.windowHeight:fa.contentHeight,fa.contentWidth=fa.contentWidth>fa.windowWidth?fa.windowWidth:fa.contentWidth),fa.isMobile||(fa.contentHeight>fa.maxHeight&&(fa.contentHeight=fa.maxHeight),fa.contentWidth>fa.maxWidth&&(fa.contentWidth=fa.maxWidth))}function Q(){var b=a('<div class="'+Y.error+'"><p>Error Loading Resource</p></div>');fa.type="element",fa.$tools.remove(),fa.$image.off(Z.namespace),O(b),aa.trigger(Z.error)}function R(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()&&(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width})}function S(a){var b,c=fa.videoFormatter;for(var d in c)if(c.hasOwnProperty(d)&&(b=a.match(c[d].pattern),null!==b))return c[d].format.call(fa,b);return!1}function T(b){var c=b.target;a.contains(fa.$lightbox[0],c)||c===fa.$lightbox[0]||c===fa.$overlay[0]||($.killEvent(b),fa.$lightbox.focus())}var U=b.Plugin("lightbox",{widget:!0,defaults:{customClass:"",fileTypes:/\.(jpg|sjpg|jpeg|png|gif)$/i,fixed:!1,formatter:t,infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption",thumbnailsClosed:"View Thumbnails",thumbnailsOpen:"Close Thumbnails"},margin:50,maxHeight:1e4,maxWidth:1e4,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"fs-lightbox",theme:"fs-light",thumbnails:!1,top:0,videoFormatter:{youtube:{pattern:/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,format:z},vimeo:{pattern:/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,format:A}},videoRatio:.5625,videoWidth:800,viewer:!0},classes:["loading","animating","scaling","zooming","fixed","mobile","touch","inline","iframed","open","ready","overlay","close","loading_icon","container","content","image","image_container","video","video_wrapper","tools","meta","meta_content","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","toggle","caption_toggle","caption","caption_open","thumbnailed","thumbnails_open","thumbnail_toggle","thumbnails","thumbnail_container","thumbnail_item","active","has_controls","has_caption","iframe","error","active","lock"],events:{open:"open",close:"close"},methods:{_setup:c,_construct:e,_destruct:f,_resize:d,resize:i},utilities:{_initialize:g,close:j}}),V=U.namespace,W=U.defaults,X=U.classes,Y=X.raw,Z=U.events,$=U.functions,_=b.window,aa=b.$window,ba=null,ca=null,da=!1,ea=!1,fa=null});