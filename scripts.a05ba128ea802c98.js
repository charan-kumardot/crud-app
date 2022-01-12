if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");(function(t){"use strict";var l=jQuery.fn.jquery.split(" ")[0].split(".");if(l[0]<2&&l[1]<9||1==l[0]&&9==l[1]&&l[2]<1||3<l[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")})(),function(t){"use strict";t.fn.emulateTransitionEnd=function(l){var p=!1,f=this;return t(this).one("bsTransitionEnd",function(){p=!0}),setTimeout(function(){p||t(f).trigger(t.support.transition.end)},l),this},t(function(){t.support.transition=function(){var p=document.createElement("bootstrap"),f={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in f)if(void 0!==p.style[n])return{end:f[n]};return!1}(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(l){if(t(l.target).is(this))return l.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(t){"use strict";var l='[data-dismiss="alert"]',p=function(n){t(n).on("click",l,this.close)};p.VERSION="3.4.1",p.TRANSITION_DURATION=150,p.prototype.close=function(n){var e=t(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var s=t(document).find(i);function r(){s.detach().trigger("closed.bs.alert").remove()}n&&n.preventDefault(),s.length||(s=e.closest(".alert")),s.trigger(n=t.Event("close.bs.alert")),n.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",r).emulateTransitionEnd(p.TRANSITION_DURATION):r())};var f=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var i=t(this),s=i.data("bs.alert");s||i.data("bs.alert",s=new p(this)),"string"==typeof e&&s[e].call(i)})},t.fn.alert.Constructor=p,t.fn.alert.noConflict=function(){return t.fn.alert=f,this},t(document).on("click.bs.alert.data-api",l,p.prototype.close)}(jQuery),function(t){"use strict";var l=function(n,e){this.$element=t(n),this.options=t.extend({},l.DEFAULTS,e),this.isLoading=!1};function p(n){return this.each(function(){var e=t(this),i=e.data("bs.button");i||e.data("bs.button",i=new l(this,"object"==typeof n&&n)),"toggle"==n?i.toggle():n&&i.setState(n)})}l.VERSION="3.4.1",l.DEFAULTS={loadingText:"loading..."},l.prototype.setState=function(n){var e="disabled",i=this.$element,s=i.is("input")?"val":"html",r=i.data();n+="Text",null==r.resetText&&i.data("resetText",i[s]()),setTimeout(t.proxy(function(){i[s](null==r[n]?this.options[n]:r[n]),"loadingText"==n?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},l.prototype.toggle=function(){var n=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(n=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(n=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),n&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var f=t.fn.button;t.fn.button=p,t.fn.button.Constructor=l,t.fn.button.noConflict=function(){return t.fn.button=f,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var e=t(n.target).closest(".btn");p.call(e,"toggle"),t(n.target).is('input[type="radio"], input[type="checkbox"]')||(n.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(n){t(n.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(n.type))})}(jQuery),function(t){"use strict";var l=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};function p(e){return this.each(function(){var i=t(this),s=i.data("bs.carousel"),r=t.extend({},l.DEFAULTS,i.data(),"object"==typeof e&&e),d="string"==typeof e?e:r.slide;s||i.data("bs.carousel",s=new l(this,r)),"number"==typeof e?s.to(e):d?s[d]():r.interval&&s.pause().cycle()})}l.VERSION="3.4.1",l.TRANSITION_DURATION=600,l.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},l.prototype.keydown=function(e){if(!/input|textarea/i.test(e.target.tagName)){switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}e.preventDefault()}},l.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},l.prototype.getItemIndex=function(e){return this.$items=e.parent().children(".item"),this.$items.index(e||this.$active)},l.prototype.getItemForDirection=function(e,i){var s=this.getItemIndex(i);return("prev"==e&&0===s||"next"==e&&s==this.$items.length-1)&&!this.options.wrap?i:this.$items.eq((s+("prev"==e?-1:1))%this.$items.length)},l.prototype.to=function(e){var i=this,s=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(e>this.$items.length-1||e<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){i.to(e)}):s==e?this.pause().cycle():this.slide(s<e?"next":"prev",this.$items.eq(e))},l.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},l.prototype.next=function(){if(!this.sliding)return this.slide("next")},l.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},l.prototype.slide=function(e,i){var s=this.$element.find(".item.active"),r=i||this.getItemForDirection(e,s),d=this.interval,o="next"==e?"left":"right",a=this;if(r.hasClass("active"))return this.sliding=!1;var h=r[0],c=t.Event("slide.bs.carousel",{relatedTarget:h,direction:o});if(this.$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,d&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var g=t(this.$indicators.children()[this.getItemIndex(r)]);g&&g.addClass("active")}var u=t.Event("slid.bs.carousel",{relatedTarget:h,direction:o});return t.support.transition&&this.$element.hasClass("slide")?(r.addClass(e),s.addClass(o),r.addClass(o),s.one("bsTransitionEnd",function(){r.removeClass([e,o].join(" ")).addClass("active"),s.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(u)},0)}).emulateTransitionEnd(l.TRANSITION_DURATION)):(s.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger(u)),d&&this.cycle(),this}};var f=t.fn.carousel;t.fn.carousel=p,t.fn.carousel.Constructor=l,t.fn.carousel.noConflict=function(){return t.fn.carousel=f,this};var n=function(e){var i=t(this),s=i.attr("href");s&&(s=s.replace(/.*(?=#[^\s]+$)/,""));var r=i.attr("data-target")||s,d=t(document).find(r);if(d.hasClass("carousel")){var o=t.extend({},d.data(),i.data()),a=i.attr("data-slide-to");a&&(o.interval=!1),p.call(d,o),a&&d.data("bs.carousel").to(a),e.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var e=t(this);p.call(e,e.data())})})}(jQuery),function(t){"use strict";var l=function(e,i){this.$element=t(e),this.options=t.extend({},l.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function p(e){var i,s=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(document).find(s)}function f(e){return this.each(function(){var i=t(this),s=i.data("bs.collapse"),r=t.extend({},l.DEFAULTS,i.data(),"object"==typeof e&&e);!s&&r.toggle&&/show|hide/.test(e)&&(r.toggle=!1),s||i.data("bs.collapse",s=new l(this,r)),"string"==typeof e&&s[e]()})}l.VERSION="3.4.1",l.TRANSITION_DURATION=350,l.DEFAULTS={toggle:!0},l.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},l.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,i=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(i&&i.length&&(e=i.data("bs.collapse"))&&e.transitioning)){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){i&&i.length&&(f.call(i,"hide"),e||i.data("bs.collapse",null));var r=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var d=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return d.call(this);var o=t.camelCase(["scroll",r].join("-"));this.$element.one("bsTransitionEnd",t.proxy(d,this)).emulateTransitionEnd(l.TRANSITION_DURATION)[r](this.$element[0][o])}}}},l.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]()),this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var s=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!t.support.transition)return s.call(this);this.$element[i](0).one("bsTransitionEnd",t.proxy(s,this)).emulateTransitionEnd(l.TRANSITION_DURATION)}}},l.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},l.prototype.getParent=function(){return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(e,i){var s=t(i);this.addAriaAndCollapsedClass(p(s),s)},this)).end()},l.prototype.addAriaAndCollapsedClass=function(e,i){var s=e.hasClass("in");e.attr("aria-expanded",s),i.toggleClass("collapsed",!s).attr("aria-expanded",s)};var n=t.fn.collapse;t.fn.collapse=f,t.fn.collapse.Constructor=l,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(e){var i=t(this);i.attr("data-target")||e.preventDefault();var s=p(i),r=s.data("bs.collapse")?"toggle":i.data();f.call(s,r)})}(jQuery),function(t){"use strict";var l='[data-toggle="dropdown"]',p=function(i){t(i).on("click.bs.dropdown",this.toggle)};function f(i){var s=i.attr("data-target");s||(s=(s=i.attr("href"))&&/#[A-Za-z]/.test(s)&&s.replace(/.*(?=#[^\s]*$)/,""));var r="#"!==s?t(document).find(s):null;return r&&r.length?r:i.parent()}function n(i){i&&3===i.which||(t(".dropdown-backdrop").remove(),t(l).each(function(){var s=t(this),r=f(s),d={relatedTarget:this};r.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(r[0],i.target)||(r.trigger(i=t.Event("hide.bs.dropdown",d)),i.isDefaultPrevented()||(s.attr("aria-expanded","false"),r.removeClass("open").trigger(t.Event("hidden.bs.dropdown",d)))))}))}p.VERSION="3.4.1",p.prototype.toggle=function(i){var s=t(this);if(!s.is(".disabled, :disabled")){var r=f(s),d=r.hasClass("open");if(n(),!d){"ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",n);var o={relatedTarget:this};if(r.trigger(i=t.Event("show.bs.dropdown",o)),i.isDefaultPrevented())return;s.trigger("focus").attr("aria-expanded","true"),r.toggleClass("open").trigger(t.Event("shown.bs.dropdown",o))}return!1}},p.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var s=t(this);if(i.preventDefault(),i.stopPropagation(),!s.is(".disabled, :disabled")){var r=f(s),d=r.hasClass("open");if(!d&&27!=i.which||d&&27==i.which)return 27==i.which&&r.find(l).trigger("focus"),s.trigger("click");var o=r.find(".dropdown-menu li:not(.disabled):visible a");if(o.length){var a=o.index(i.target);38==i.which&&0<a&&a--,40==i.which&&a<o.length-1&&a++,~a||(a=0),o.eq(a).trigger("focus")}}}};var e=t.fn.dropdown;t.fn.dropdown=function(s){return this.each(function(){var r=t(this),d=r.data("bs.dropdown");d||r.data("bs.dropdown",d=new p(this)),"string"==typeof s&&d[s].call(r)})},t.fn.dropdown.Constructor=p,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=e,this},t(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(i){i.stopPropagation()}).on("click.bs.dropdown.data-api",l,p.prototype.toggle).on("keydown.bs.dropdown.data-api",l,p.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",p.prototype.keydown)}(jQuery),function(t){"use strict";var l=function(n,e){this.options=e,this.$body=t(document.body),this.$element=t(n),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function p(n,e){return this.each(function(){var i=t(this),s=i.data("bs.modal"),r=t.extend({},l.DEFAULTS,i.data(),"object"==typeof n&&n);s||i.data("bs.modal",s=new l(this,r)),"string"==typeof n?s[n](e):r.show&&s.show(e)})}l.VERSION="3.4.1",l.TRANSITION_DURATION=300,l.BACKDROP_TRANSITION_DURATION=150,l.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},l.prototype.toggle=function(n){return this.isShown?this.hide():this.show(n)},l.prototype.show=function(n){var e=this,i=t.Event("show.bs.modal",{relatedTarget:n});this.$element.trigger(i),this.isShown||i.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){e.$element.one("mouseup.dismiss.bs.modal",function(s){t(s.target).is(e.$element)&&(e.ignoreBackdropClick=!0)})}),this.backdrop(function(){var s=t.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(e.$body),e.$element.show().scrollTop(0),e.adjustDialog(),e.$element.addClass("in"),e.enforceFocus();var r=t.Event("shown.bs.modal",{relatedTarget:n});s?e.$dialog.one("bsTransitionEnd",function(){e.$element.trigger("focus").trigger(r)}).emulateTransitionEnd(l.TRANSITION_DURATION):e.$element.trigger("focus").trigger(r)}))},l.prototype.hide=function(n){n&&n.preventDefault(),n=t.Event("hide.bs.modal"),this.$element.trigger(n),this.isShown&&!n.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(l.TRANSITION_DURATION):this.hideModal())},l.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(n){document===n.target||this.$element[0]===n.target||this.$element.has(n.target).length||this.$element.trigger("focus")},this))},l.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(n){27==n.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},l.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},l.prototype.hideModal=function(){var n=this;this.$element.hide(),this.backdrop(function(){n.$body.removeClass("modal-open"),n.resetAdjustments(),n.resetScrollbar(),n.$element.trigger("hidden.bs.modal")})},l.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},l.prototype.backdrop=function(n){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&i;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(d){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:d.target===d.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),this.$backdrop.addClass("in"),!n)return;s?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(l.BACKDROP_TRANSITION_DURATION):n()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var r=function(){e.removeBackdrop(),n&&n()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(l.BACKDROP_TRANSITION_DURATION):r()}else n&&n()},l.prototype.handleUpdate=function(){this.adjustDialog()},l.prototype.adjustDialog=function(){var n=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&n?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!n?this.scrollbarWidth:""})},l.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},l.prototype.checkScrollbar=function(){var n=window.innerWidth;if(!n){var e=document.documentElement.getBoundingClientRect();n=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<n,this.scrollbarWidth=this.measureScrollbar()},l.prototype.setScrollbar=function(){var n=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var e=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",n+e),t(this.fixedContent).each(function(i,s){var r=s.style.paddingRight,d=t(s).css("padding-right");t(s).data("padding-right",r).css("padding-right",parseFloat(d)+e+"px")}))},l.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),t(this.fixedContent).each(function(n,e){var i=t(e).data("padding-right");t(e).removeData("padding-right"),e.style.paddingRight=i||""})},l.prototype.measureScrollbar=function(){var n=document.createElement("div");n.className="modal-scrollbar-measure",this.$body.append(n);var e=n.offsetWidth-n.clientWidth;return this.$body[0].removeChild(n),e};var f=t.fn.modal;t.fn.modal=p,t.fn.modal.Constructor=l,t.fn.modal.noConflict=function(){return t.fn.modal=f,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var e=t(this),i=e.attr("href"),s=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),r=t(document).find(s),d=r.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(i)&&i},r.data(),e.data());e.is("a")&&n.preventDefault(),r.one("show.bs.modal",function(o){o.isDefaultPrevented()||r.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),p.call(r,d,this)})}(jQuery),function(t){"use strict";var l=["sanitize","whiteList","sanitizeFn"],p=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],n=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,e=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function i(o,a){var h=o.nodeName.toLowerCase();if(-1!==t.inArray(h,a))return-1===t.inArray(h,p)||Boolean(o.nodeValue.match(n)||o.nodeValue.match(e));for(var c=t(a).filter(function(m,b){return b instanceof RegExp}),g=0,u=c.length;g<u;g++)if(h.match(c[g]))return!0;return!1}function s(o,a,h){if(0===o.length)return o;if(h&&"function"==typeof h)return h(o);if(!document.implementation||!document.implementation.createHTMLDocument)return o;var c=document.implementation.createHTMLDocument("sanitization");c.body.innerHTML=o;for(var g=t.map(a,function(x,E){return E}),u=t(c.body).find("*"),m=0,b=u.length;m<b;m++){var v=u[m],y=v.nodeName.toLowerCase();if(-1!==t.inArray(y,g))for(var w=t.map(v.attributes,function(x){return x}),C=[].concat(a["*"]||[],a[y]||[]),$=0,T=w.length;$<T;$++)i(w[$],C)||v.removeAttribute(w[$].nodeName);else v.parentNode.removeChild(v)}return c.body.innerHTML}var r=function(o,a){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",o,a)};r.VERSION="3.4.1",r.TRANSITION_DURATION=150,r.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]}},r.prototype.init=function(o,a,h){if(this.enabled=!0,this.type=o,this.$element=t(a),this.options=this.getOptions(h),this.$viewport=this.options.viewport&&t(document).find(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var c=this.options.trigger.split(" "),g=c.length;g--;){var u=c[g];if("click"==u)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=u){var b="hover"==u?"mouseleave":"focusout";this.$element.on(("hover"==u?"mouseenter":"focusin")+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(b+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},r.prototype.getDefaults=function(){return r.DEFAULTS},r.prototype.getOptions=function(o){var a=this.$element.data();for(var h in a)a.hasOwnProperty(h)&&-1!==t.inArray(h,l)&&delete a[h];return(o=t.extend({},this.getDefaults(),a,o)).delay&&"number"==typeof o.delay&&(o.delay={show:o.delay,hide:o.delay}),o.sanitize&&(o.template=s(o.template,o.whiteList,o.sanitizeFn)),o},r.prototype.getDelegateOptions=function(){var o={},a=this.getDefaults();return this._options&&t.each(this._options,function(h,c){a[h]!=c&&(o[h]=c)}),o},r.prototype.enter=function(o){var a=o instanceof this.constructor?o:t(o.currentTarget).data("bs."+this.type);if(a||(a=new this.constructor(o.currentTarget,this.getDelegateOptions()),t(o.currentTarget).data("bs."+this.type,a)),o instanceof t.Event&&(a.inState["focusin"==o.type?"focus":"hover"]=!0),a.tip().hasClass("in")||"in"==a.hoverState)a.hoverState="in";else{if(clearTimeout(a.timeout),a.hoverState="in",!a.options.delay||!a.options.delay.show)return a.show();a.timeout=setTimeout(function(){"in"==a.hoverState&&a.show()},a.options.delay.show)}},r.prototype.isInStateTrue=function(){for(var o in this.inState)if(this.inState[o])return!0;return!1},r.prototype.leave=function(o){var a=o instanceof this.constructor?o:t(o.currentTarget).data("bs."+this.type);if(a||(a=new this.constructor(o.currentTarget,this.getDelegateOptions()),t(o.currentTarget).data("bs."+this.type,a)),o instanceof t.Event&&(a.inState["focusout"==o.type?"focus":"hover"]=!1),!a.isInStateTrue()){if(clearTimeout(a.timeout),a.hoverState="out",!a.options.delay||!a.options.delay.hide)return a.hide();a.timeout=setTimeout(function(){"out"==a.hoverState&&a.hide()},a.options.delay.hide)}},r.prototype.show=function(){var o=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(o);var a=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(o.isDefaultPrevented()||!a)return;var h=this,c=this.tip(),g=this.getUID(this.type);this.setContent(),c.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&c.addClass("fade");var u="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,m=/\s?auto?\s?/i,b=m.test(u);b&&(u=u.replace(m,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(u).data("bs."+this.type,this),this.options.container?c.appendTo(t(document).find(this.options.container)):c.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var v=this.getPosition(),y=c[0].offsetWidth,w=c[0].offsetHeight;if(b){var C=u,$=this.getPosition(this.$viewport);u="bottom"==u&&v.bottom+w>$.bottom?"top":"top"==u&&v.top-w<$.top?"bottom":"right"==u&&v.right+y>$.width?"left":"left"==u&&v.left-y<$.left?"right":u,c.removeClass(C).addClass(u)}var T=this.getCalculatedOffset(u,v,y,w);this.applyPlacement(T,u);var x=function(){var E=h.hoverState;h.$element.trigger("shown.bs."+h.type),h.hoverState=null,"out"==E&&h.leave(h)};t.support.transition&&this.$tip.hasClass("fade")?c.one("bsTransitionEnd",x).emulateTransitionEnd(r.TRANSITION_DURATION):x()}},r.prototype.applyPlacement=function(o,a){var h=this.tip(),c=h[0].offsetWidth,g=h[0].offsetHeight,u=parseInt(h.css("margin-top"),10),m=parseInt(h.css("margin-left"),10);isNaN(u)&&(u=0),isNaN(m)&&(m=0),o.top+=u,o.left+=m,t.offset.setOffset(h[0],t.extend({using:function(T){h.css({top:Math.round(T.top),left:Math.round(T.left)})}},o),0),h.addClass("in");var b=h[0].offsetWidth,v=h[0].offsetHeight;"top"==a&&v!=g&&(o.top=o.top+g-v);var y=this.getViewportAdjustedDelta(a,o,b,v);y.left?o.left+=y.left:o.top+=y.top;var w=/top|bottom/.test(a),C=w?2*y.left-c+b:2*y.top-g+v,$=w?"offsetWidth":"offsetHeight";h.offset(o),this.replaceArrow(C,h[0][$],w)},r.prototype.replaceArrow=function(o,a,h){this.arrow().css(h?"left":"top",50*(1-o/a)+"%").css(h?"top":"left","")},r.prototype.setContent=function(){var o=this.tip(),a=this.getTitle();this.options.html?(this.options.sanitize&&(a=s(a,this.options.whiteList,this.options.sanitizeFn)),o.find(".tooltip-inner").html(a)):o.find(".tooltip-inner").text(a),o.removeClass("fade in top bottom left right")},r.prototype.hide=function(o){var a=this,h=t(this.$tip),c=t.Event("hide.bs."+this.type);function g(){"in"!=a.hoverState&&h.detach(),a.$element&&a.$element.removeAttr("aria-describedby").trigger("hidden.bs."+a.type),o&&o()}if(this.$element.trigger(c),!c.isDefaultPrevented())return h.removeClass("in"),t.support.transition&&h.hasClass("fade")?h.one("bsTransitionEnd",g).emulateTransitionEnd(r.TRANSITION_DURATION):g(),this.hoverState=null,this},r.prototype.fixTitle=function(){var o=this.$element;(o.attr("title")||"string"!=typeof o.attr("data-original-title"))&&o.attr("data-original-title",o.attr("title")||"").attr("title","")},r.prototype.hasContent=function(){return this.getTitle()},r.prototype.getPosition=function(o){var a=(o=o||this.$element)[0],h="BODY"==a.tagName,c=a.getBoundingClientRect();null==c.width&&(c=t.extend({},c,{width:c.right-c.left,height:c.bottom-c.top}));var g=window.SVGElement&&a instanceof window.SVGElement,u=h?{top:0,left:0}:g?null:o.offset(),m={scroll:h?document.documentElement.scrollTop||document.body.scrollTop:o.scrollTop()},b=h?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},c,m,b,u)},r.prototype.getCalculatedOffset=function(o,a,h,c){return"bottom"==o?{top:a.top+a.height,left:a.left+a.width/2-h/2}:"top"==o?{top:a.top-c,left:a.left+a.width/2-h/2}:"left"==o?{top:a.top+a.height/2-c/2,left:a.left-h}:{top:a.top+a.height/2-c/2,left:a.left+a.width}},r.prototype.getViewportAdjustedDelta=function(o,a,h,c){var g={top:0,left:0};if(!this.$viewport)return g;var u=this.options.viewport&&this.options.viewport.padding||0,m=this.getPosition(this.$viewport);if(/right|left/.test(o)){var b=a.top-u-m.scroll,v=a.top+u-m.scroll+c;b<m.top?g.top=m.top-b:v>m.top+m.height&&(g.top=m.top+m.height-v)}else{var y=a.left-u,w=a.left+u+h;y<m.left?g.left=m.left-y:w>m.right&&(g.left=m.left+m.width-w)}return g},r.prototype.getTitle=function(){var o=this.$element,a=this.options;return o.attr("data-original-title")||("function"==typeof a.title?a.title.call(o[0]):a.title)},r.prototype.getUID=function(o){for(;o+=~~(1e6*Math.random()),document.getElementById(o););return o},r.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},r.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},r.prototype.enable=function(){this.enabled=!0},r.prototype.disable=function(){this.enabled=!1},r.prototype.toggleEnabled=function(){this.enabled=!this.enabled},r.prototype.toggle=function(o){var a=this;o&&((a=t(o.currentTarget).data("bs."+this.type))||(a=new this.constructor(o.currentTarget,this.getDelegateOptions()),t(o.currentTarget).data("bs."+this.type,a))),o?(a.inState.click=!a.inState.click,a.isInStateTrue()?a.enter(a):a.leave(a)):a.tip().hasClass("in")?a.leave(a):a.enter(a)},r.prototype.destroy=function(){var o=this;clearTimeout(this.timeout),this.hide(function(){o.$element.off("."+o.type).removeData("bs."+o.type),o.$tip&&o.$tip.detach(),o.$tip=null,o.$arrow=null,o.$viewport=null,o.$element=null})},r.prototype.sanitizeHtml=function(o){return s(o,this.options.whiteList,this.options.sanitizeFn)};var d=t.fn.tooltip;t.fn.tooltip=function(a){return this.each(function(){var h=t(this),c=h.data("bs.tooltip"),g="object"==typeof a&&a;!c&&/destroy|hide/.test(a)||(c||h.data("bs.tooltip",c=new r(this,g)),"string"==typeof a&&c[a]())})},t.fn.tooltip.Constructor=r,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=d,this}}(jQuery),function(t){"use strict";var l=function(f,n){this.init("popover",f,n)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");l.VERSION="3.4.1",l.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((l.prototype=t.extend({},t.fn.tooltip.Constructor.prototype)).constructor=l).prototype.getDefaults=function(){return l.DEFAULTS},l.prototype.setContent=function(){var f=this.tip(),n=this.getTitle(),e=this.getContent();if(this.options.html){var i=typeof e;this.options.sanitize&&(n=this.sanitizeHtml(n),"string"===i&&(e=this.sanitizeHtml(e))),f.find(".popover-title").html(n),f.find(".popover-content").children().detach().end()["string"===i?"html":"append"](e)}else f.find(".popover-title").text(n),f.find(".popover-content").children().detach().end().text(e);f.removeClass("fade top bottom left right in"),f.find(".popover-title").html()||f.find(".popover-title").hide()},l.prototype.hasContent=function(){return this.getTitle()||this.getContent()},l.prototype.getContent=function(){var f=this.$element,n=this.options;return f.attr("data-content")||("function"==typeof n.content?n.content.call(f[0]):n.content)},l.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var p=t.fn.popover;t.fn.popover=function(n){return this.each(function(){var e=t(this),i=e.data("bs.popover"),s="object"==typeof n&&n;!i&&/destroy|hide/.test(n)||(i||e.data("bs.popover",i=new l(this,s)),"string"==typeof n&&i[n]())})},t.fn.popover.Constructor=l,t.fn.popover.noConflict=function(){return t.fn.popover=p,this}}(jQuery),function(t){"use strict";function l(n,e){this.$body=t(document.body),this.$scrollElement=t(n).is(document.body)?t(window):t(n),this.options=t.extend({},l.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function p(n){return this.each(function(){var e=t(this),i=e.data("bs.scrollspy");i||e.data("bs.scrollspy",i=new l(this,"object"==typeof n&&n)),"string"==typeof n&&i[n]()})}l.VERSION="3.4.1",l.DEFAULTS={offset:10},l.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},l.prototype.refresh=function(){var n=this,e="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(e="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var s=t(this),r=s.data("target")||s.attr("href"),d=/^#./.test(r)&&t(r);return d&&d.length&&d.is(":visible")&&[[d[e]().top+i,r]]||null}).sort(function(s,r){return s[0]-r[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])})},l.prototype.process=function(){var n,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),s=this.options.offset+i-this.$scrollElement.height(),r=this.offsets,d=this.targets,o=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),s<=e)return o!=(n=d[d.length-1])&&this.activate(n);if(o&&e<r[0])return this.activeTarget=null,this.clear();for(n=r.length;n--;)o!=d[n]&&e>=r[n]&&(void 0===r[n+1]||e<r[n+1])&&this.activate(d[n])},l.prototype.activate=function(n){this.activeTarget=n,this.clear();var i=t(this.selector+'[data-target="'+n+'"],'+this.selector+'[href="'+n+'"]').parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},l.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var f=t.fn.scrollspy;t.fn.scrollspy=p,t.fn.scrollspy.Constructor=l,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=f,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var n=t(this);p.call(n,n.data())})})}(jQuery),function(t){"use strict";var l=function(e){this.element=t(e)};function p(e){return this.each(function(){var i=t(this),s=i.data("bs.tab");s||i.data("bs.tab",s=new l(this)),"string"==typeof e&&s[e]()})}l.VERSION="3.4.1",l.TRANSITION_DURATION=150,l.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),s=e.data("target");if(s||(s=(s=e.attr("href"))&&s.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var r=i.find(".active:last a"),d=t.Event("hide.bs.tab",{relatedTarget:e[0]}),o=t.Event("show.bs.tab",{relatedTarget:r[0]});if(r.trigger(d),e.trigger(o),!o.isDefaultPrevented()&&!d.isDefaultPrevented()){var a=t(document).find(s);this.activate(e.closest("li"),i),this.activate(a,a.parent(),function(){r.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:r[0]})})}}},l.prototype.activate=function(e,i,s){var r=i.find("> .active"),d=s&&t.support.transition&&(r.length&&r.hasClass("fade")||!!i.find("> .fade").length);function o(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),d?e.addClass("in"):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),s&&s()}r.length&&d?r.one("bsTransitionEnd",o).emulateTransitionEnd(l.TRANSITION_DURATION):o(),r.removeClass("in")};var f=t.fn.tab;t.fn.tab=p,t.fn.tab.Constructor=l,t.fn.tab.noConflict=function(){return t.fn.tab=f,this};var n=function(e){e.preventDefault(),p.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),function(t){"use strict";var l=function(n,e){this.options=t.extend({},l.DEFAULTS,e);var i=this.options.target===l.DEFAULTS.target?t(this.options.target):t(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(n),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function p(n){return this.each(function(){var e=t(this),i=e.data("bs.affix");i||e.data("bs.affix",i=new l(this,"object"==typeof n&&n)),"string"==typeof n&&i[n]()})}l.VERSION="3.4.1",l.RESET="affix affix-top affix-bottom",l.DEFAULTS={offset:0,target:window},l.prototype.getState=function(n,e,i,s){var r=this.$target.scrollTop(),d=this.$element.offset(),o=this.$target.height();if(null!=i&&"top"==this.affixed)return r<i&&"top";if("bottom"==this.affixed)return null!=i?!(r+this.unpin<=d.top)&&"bottom":!(r+o<=n-s)&&"bottom";var a=null==this.affixed;return null!=i&&r<=i?"top":null!=s&&n-s<=(a?r:d.top)+(a?o:e)&&"bottom"},l.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(l.RESET).addClass("affix");var n=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-n},l.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},l.prototype.checkPosition=function(){if(this.$element.is(":visible")){var n=this.$element.height(),e=this.options.offset,i=e.top,s=e.bottom,r=Math.max(t(document).height(),t(document.body).height());"object"!=typeof e&&(s=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof s&&(s=e.bottom(this.$element));var d=this.getState(r,n,i,s);if(this.affixed!=d){null!=this.unpin&&this.$element.css("top","");var o="affix"+(d?"-"+d:""),a=t.Event(o+".bs.affix");if(this.$element.trigger(a),a.isDefaultPrevented())return;this.affixed=d,this.unpin="bottom"==d?this.getPinnedOffset():null,this.$element.removeClass(l.RESET).addClass(o).trigger(o.replace("affix","affixed")+".bs.affix")}"bottom"==d&&this.$element.offset({top:r-n-s})}};var f=t.fn.affix;t.fn.affix=p,t.fn.affix.Constructor=l,t.fn.affix.noConflict=function(){return t.fn.affix=f,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var n=t(this),e=n.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),p.call(n,e)})})}(jQuery);