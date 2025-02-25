/*------------------------------------------------------------------
* Project:        Yatriiworld
* Author:         CN-InfoTech
* URL:            hthttps://themeforest.net/user/cn-infotech
* Created:        02/25/2021
-------------------------------------------------------------------
/*

 TABLE OF CONTENT
  
  3. Slick
  4. Easing
  5. Animate(Wow)
  6. Modal Video
  7. Lightbox
  8. Swiper
  9. jPanelMenu
  10. SLicknav
  11. Bootstrap-select
  12. Moment
  13. Wickedpicker
  14. Rangeslider
  15. Nice Select
  16. Masonry
  17. imagesLoaded
  18. Particles
  19. BootstrapValidator
  20. Jquery Validator

*/

// SmoothScroll

!function(){var s,i,c,a,o={frameRate:150,animationTime:800,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},p=o,u=!1,d=!1,n={x:0,y:0},f=!1,m=document.documentElement,l=[],h=/^Mac/.test(navigator.platform),w={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},v={37:1,38:1,39:1,40:1};function y(){if(!f&&document.body){f=!0;var e=document.body,t=document.documentElement,o=window.innerHeight,n=e.scrollHeight;if(m=0<=document.compatMode.indexOf("CSS")?t:e,s=e,p.keyboardSupport&&Y("keydown",x),top!=self)d=!0;else if(Q&&o<n&&(e.offsetHeight<=o||t.offsetHeight<=o)){var r,a=document.createElement("div");a.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+m.scrollHeight+"px",document.body.appendChild(a),c=function(){r=r||setTimeout(function(){u||(a.style.height="0",a.style.height=m.scrollHeight+"px",r=null)},500)},setTimeout(c,10),Y("resize",c);if((i=new R(c)).observe(e,{attributes:!0,childList:!0,characterData:!1}),m.offsetHeight<=o){var l=document.createElement("div");l.style.clear="both",e.appendChild(l)}}p.fixedBackground||u||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll")}}var b=[],g=!1,r=Date.now();function S(d,f,m){if(function(e,t){e=0<e?1:-1,t=0<t?1:-1,n.x===e&&n.y===t||(n.x=e,n.y=t,b=[],r=0)}(f,m),1!=p.accelerationMax){var e=Date.now()-r;if(e<p.accelerationDelta){var t=(1+50/e)/2;1<t&&(t=Math.min(t,p.accelerationMax),f*=t,m*=t)}r=Date.now()}if(b.push({x:f,y:m,lastX:f<0?.99:-.99,lastY:m<0?.99:-.99,start:Date.now()}),!g){var o=q(),h=d===o||d===document.body;null==d.$scrollBehavior&&function(e){var t=M(e);if(null==B[t]){var o=getComputedStyle(e,"")["scroll-behavior"];B[t]="smooth"==o}return B[t]}(d)&&(d.$scrollBehavior=d.style.scrollBehavior,d.style.scrollBehavior="auto");var w=function(e){for(var t=Date.now(),o=0,n=0,r=0;r<b.length;r++){var a=b[r],l=t-a.start,i=l>=p.animationTime,c=i?1:l/p.animationTime;p.pulseAlgorithm&&(c=F(c));var s=a.x*c-a.lastX>>0,u=a.y*c-a.lastY>>0;o+=s,n+=u,a.lastX+=s,a.lastY+=u,i&&(b.splice(r,1),r--)}h?window.scrollBy(o,n):(o&&(d.scrollLeft+=o),n&&(d.scrollTop+=n)),f||m||(b=[]),b.length?j(w,d,1e3/p.frameRate+1):(g=!1,null!=d.$scrollBehavior&&(d.style.scrollBehavior=d.$scrollBehavior,d.$scrollBehavior=null))};j(w,d,0),g=!0}}function e(e){f||y();var t=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if(N(s,"embed")||N(t,"embed")&&/\.pdf/i.test(t.src)||N(s,"object")||t.shadowRoot)return!0;var o=-e.wheelDeltaX||e.deltaX||0,n=-e.wheelDeltaY||e.deltaY||0;h&&(e.wheelDeltaX&&K(e.wheelDeltaX,120)&&(o=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&K(e.wheelDeltaY,120)&&(n=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),o||n||(n=-e.wheelDelta||0),1===e.deltaMode&&(o*=40,n*=40);var r=z(t);return r?!!function(e){if(!e)return;l.length||(l=[e,e,e]);e=Math.abs(e),l.push(e),l.shift(),clearTimeout(a),a=setTimeout(function(){try{localStorage.SS_deltaBuffer=l.join(",")}catch(e){}},1e3);var t=120<e&&P(e),o=!P(120)&&!P(100)&&!t;return e<50||o}(n)||(1.2<Math.abs(o)&&(o*=p.stepSize/120),1.2<Math.abs(n)&&(n*=p.stepSize/120),S(r,o,n),e.preventDefault(),void C()):!d||!W||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function x(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==w.spacebar;document.body.contains(s)||(s=document.activeElement);var n=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||/^(textarea|select|embed|object)$/i.test(t.nodeName)||N(t,"input")&&!n.test(t.type)||N(s,"video")||function(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}(e)||t.isContentEditable||o)return!0;if((N(t,"button")||N(t,"input")&&n.test(t.type))&&e.keyCode===w.spacebar)return!0;if(N(t,"input")&&"radio"==t.type&&v[e.keyCode])return!0;var r=0,a=0,l=z(s);if(!l)return!d||!W||parent.keydown(e);var i=l.clientHeight;switch(l==document.body&&(i=window.innerHeight),e.keyCode){case w.up:a=-p.arrowScroll;break;case w.down:a=p.arrowScroll;break;case w.spacebar:a=-(e.shiftKey?1:-1)*i*.9;break;case w.pageup:a=.9*-i;break;case w.pagedown:a=.9*i;break;case w.home:l==document.body&&document.scrollingElement&&(l=document.scrollingElement),a=-l.scrollTop;break;case w.end:var c=l.scrollHeight-l.scrollTop-i;a=0<c?10+c:0;break;case w.left:r=-p.arrowScroll;break;case w.right:r=p.arrowScroll;break;default:return!0}S(l,r,a),e.preventDefault(),C()}function t(e){s=e.target}var k,D,M=(k=0,function(e){return e.uniqueID||(e.uniqueID=k++)}),E={},T={},B={};function C(){clearTimeout(D),D=setInterval(function(){E=T=B={}},1e3)}function H(e,t,o){for(var n=o?E:T,r=e.length;r--;)n[M(e[r])]=t;return t}function z(e){var t=[],o=document.body,n=m.scrollHeight;do{var r=(!1?E:T)[M(e)];if(r)return H(t,r);if(t.push(e),n===e.scrollHeight){var a=O(m)&&O(o)||X(m);if(d&&L(m)||!d&&a)return H(t,q())}else if(L(e)&&X(e))return H(t,e)}while(e=e.parentElement)}function L(e){return e.clientHeight+10<e.scrollHeight}function O(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function X(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function Y(e,t,o){window.addEventListener(e,t,o||!1)}function A(e,t,o){window.removeEventListener(e,t,o||!1)}function N(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{l=localStorage.SS_deltaBuffer.split(",")}catch(e){}function K(e,t){return Math.floor(e/t)==e/t}function P(e){return K(l[0],e)&&K(l[1],e)&&K(l[2],e)}var $,j=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},R=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,q=($=document.scrollingElement,function(){if(!$){var e=document.createElement("div");e.style.cssText="height:10000px;width:1px;",document.body.appendChild(e);var t=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),$=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)}return $});function V(e){var t;return((e*=p.pulseScale)<1?e-(1-Math.exp(-e)):(e-=1,(t=Math.exp(-1))+(1-Math.exp(-e))*(1-t)))*p.pulseNormalize}function F(e){return 1<=e?1:e<=0?0:(1==p.pulseNormalize&&(p.pulseNormalize/=V(1)),V(e))}var I=window.navigator.userAgent,_=/Edge/.test(I),W=/chrome/i.test(I)&&!_,U=/safari/i.test(I)&&!_,G=/mobile/i.test(I),J=/Windows NT 6.1/i.test(I)&&/rv:11/i.test(I),Q=U&&(/Version\/8/i.test(I)||/Version\/9/i.test(I)),Z=(W||U||J)&&!G,ee=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ee=!0}}))}catch(e){}var te=!!ee&&{passive:!1},oe="onwheel"in document.createElement("div")?"wheel":"mousewheel";function ne(e){for(var t in e)o.hasOwnProperty(t)&&(p[t]=e[t])}oe&&Z&&(Y(oe,e,te),Y("mousedown",t),Y("load",y)),ne.destroy=function(){i&&i.disconnect(),A(oe,e),A("mousedown",t),A("keydown",x),A("resize",c),A("load",y)},window.SmoothScrollOptions&&ne(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return ne}):"object"==typeof exports?module.exports=ne:window.SmoothScroll=ne}();

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        // If any child element receives focus within the slider we need to pause the autoplay
        _.$slider
            .off('focus.slick blur.slick')
            .on(
                'focus.slick',
                '*', 
                function(event) {
                    var $sf = $(this);

                    setTimeout(function() {
                        if( _.options.pauseOnFocus ) {
                            if ($sf.is(':focus')) {
                                _.focussed = true;
                                _.autoPlay();
                            }
                        }
                    }, 0);
                }
            ).on(
                'blur.slick',
                '*', 
                function(event) {
                    var $sf = $(this);

                    // When a blur occurs on any elements within the slider we become unfocused
                    if( _.options.pauseOnFocus ) {
                        _.focussed = false;
                        _.autoPlay();
                    }
                }
            );
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, swipeTarget, centerOffset;

        centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
        swipeTarget = (_.swipeLeft * -1) + centerOffset;

        if (_.options.swipeToSlide === true) {

            _.$slideTrack.find('.slick-slide').each(function(index, slide) {

                var slideOuterWidth, slideOffset, slideRightBoundary;
                slideOuterWidth = $(slide).outerWidth();
                slideOffset = slide.offsetLeft;
                if (_.options.centerMode !== true) {
                    slideOffset += (slideOuterWidth / 2);
                }

                slideRightBoundary = slideOffset + (slideOuterWidth);

                if (swipeTarget < slideRightBoundary) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq( _.options.slidesToShow + _.slideCount + 1 )
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158; 
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

 
!function(a){a.fn.animationCounter=function(b){return this.each(function(){try{var c=a(this),d={start:0,end:null,step:1,delay:1e3,txt:""},e=a.extend(d,b||{}),f=e.start,g=e.end;c.text(f+e.txt);var h=function(){null!=g&&f>=g||(f+=e.step,c.text(f+e.txt))};setInterval(h,e.delay)}catch(a){alert(a+" at line "+a.lineNumber)}})}}(jQuery);


/* 003 ! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/
(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a,b){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(b){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);

/**
 * Modules in this bundle
 * @license
 *
 * modal-video:
 *   license: appleple
 *   author: appleple
 *   homepage: http://developer.a-blogcms.jp
 *   version: 2.4.1
 */
!function e(t,n,o){function i(a,l){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!l&&u)return u(a,!0);if(r)return r(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return i(n||e)},s,s.exports,e,t,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){try{var o=new window.CustomEvent("test");if(o.preventDefault(),!0!==o.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var i=function(e,t){var n,o;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o=n.preventDefault,n.preventDefault=function(){o.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};i.prototype=window.Event.prototype,window.CustomEvent=i}},{}],2:[function(e,t,n){"use strict";function o(e,t){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var n=Object(e),o=1;o<arguments.length;o++){var i=arguments[o];if(void 0!==i&&null!==i)for(var r=Object.keys(Object(i)),a=0,l=r.length;a<l;a++){var u=r[a],d=Object.getOwnPropertyDescriptor(i,u);void 0!==d&&d.enumerable&&(n[u]=i[u])}}return n}function i(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:i}},{}],3:[function(e,t,n){"use strict";var o=e("../index"),i=function(e){e.fn.modalVideo=function(e){return"strings"==typeof e||new o(this,e),this}};if("function"==typeof define&&define.amd)define(["jquery"],i);else{var r=window.jQuery?window.jQuery:window.$;void 0!==r&&i(r)}t.exports=i},{"../index":5}],4:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();e("custom-event-polyfill");var r=e("../lib/util"),a=e("es6-object-assign").assign,l={channel:"youtube",facebook:{},youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",nocookie:!1},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}},u=function(){function e(t,n){var i=this;o(this,e);var u=a({},l,n),d="string"==typeof t?document.querySelectorAll(t):t,s=document.querySelector("body"),c=u.classNames,f=u.animationSpeed;[].forEach.call(d,function(e){e.addEventListener("click",function(t){"A"===e.tagName&&t.preventDefault();var n=e.dataset.videoId,o=e.dataset.channel||u.channel,a=(0,r.getUniqId)(),l=e.dataset.videoUrl||i.getVideoUrl(u,o,n),d=i.getHtml(u,l,a);(0,r.append)(s,d);var v=document.getElementById(a),m=v.querySelector(".js-modal-video-dismiss-btn");v.focus(),v.addEventListener("click",function(){(0,r.addClass)(v,c.modalVideoClose),setTimeout(function(){(0,r.remove)(v),e.focus()},f)}),v.addEventListener("keydown",function(e){9===e.which&&(e.preventDefault(),document.activeElement===v?m.focus():(v.setAttribute("aria-label",""),v.focus()))}),m.addEventListener("click",function(){(0,r.triggerEvent)(v,"click")})})})}return i(e,[{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"getQueryString",value:function(e){var t="";return Object.keys(e).forEach(function(n){t+=n+"="+e[n]+"&"}),t.substr(0,t.length-1)}},{key:"getVideoUrl",value:function(e,t,n){return"youtube"===t?this.getYoutubeUrl(e.youtube,n):"vimeo"===t?this.getVimeoUrl(e.vimeo,n):"facebook"===t?this.getFacebookUrl(e.facebook,n):""}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoutubeUrl",value:function(e,t){var n=this.getQueryString(e);return!0===e.nocookie?"//www.youtube-nocookie.com/embed/"+t+"?"+n:"//www.youtube.com/embed/"+t+"?"+n}},{key:"getFacebookUrl",value:function(e,t){return"//www.facebook.com/v2.10/plugins/video.php?href=https://www.facebook.com/facebook/videos/"+t+"&"+this.getQueryString(e)}},{key:"getHtml",value:function(e,t,n){var o=this.getPadding(e.ratio),i=e.classNames;return'\n      <div class="'+i.modalVideo+'" tabindex="-1" role="dialog" aria-label="'+e.aria.openMessage+'" id="'+n+'">\n        <div class="'+i.modalVideoBody+'">\n          <div class="'+i.modalVideoInner+'">\n            <div class="'+i.modalVideoIframeWrap+'" style="padding-bottom:'+o+'">\n              <button class="'+i.modalVideoCloseBtn+' js-modal-video-dismiss-btn" aria-label="'+e.aria.dismissBtnMessage+"\"></button>\n              <iframe width='460' height='230' src=\""+t+"\" frameborder='0' allowfullscreen="+e.allowFullScreen+' tabindex="-1"/>\n            </div>\n          </div>\n        </div>\n      </div>\n    '}}]),e}();n.default=u,t.exports=n.default},{"../lib/util":6,"custom-event-polyfill":1,"es6-object-assign":2}],5:[function(e,t,n){"use strict";t.exports=e("./core/")},{"./core/":4}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.append=function(e,t){var n=document.createElement("div");for(n.innerHTML=t;n.children.length>0;)e.appendChild(n.children[0])},n.getUniqId=function(){return(Date.now().toString(36)+Math.random().toString(36).substr(2,5)).toUpperCase()},n.remove=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},n.addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},n.triggerEvent=function(e,t,n){var o=void 0;window.CustomEvent?o=new CustomEvent(t,{cancelable:!0}):(o=document.createEvent("CustomEvent"),o.initCustomEvent(t,!1,!1,n)),e.dispatchEvent(o)}},{}]},{},[3]);


jQuery(document).ready(function($){
  window.loopcounter = function( idWarp ) {
    if(typeof idWarp!= 'undefined'){
      var date = $('.'+idWarp).data('date');
      if(typeof date != 'undefined'){
        var start = new Date( date.replace(/-/g, "/") ),
          end   = new Date(),
          diff  = new Date( start - end ),
          time  = diff/1000/60/60/24;

        var day = parseInt(time);
        var hour = parseInt( 24 - (diff/1000/60/60)%24 );
        var min = parseInt( 60 - (diff/1000/60)%60 );
        var sec = parseInt( 60 - (diff/1000)%60 );
        
        counterDate(idWarp,day,hour,min,sec);

        var interval = setInterval(function () {
          if( sec==0 && min!=0 ){
            min--;
            sec = 60;
          }
          if(min == 0 && sec == 0 && hour!=0 ){
            hour--;
            min = 59;
            sec = 60;
          }
          if(min == 0 && sec == 0 && hour == 0 && day!=0 ){
            day--;
            hour = 23;
            min = 59;
            sec = 60;
          }
          if(min == 0 && sec == 0 && hour == 0 && day==0 ){
            clearInterval(interval);
          }else{
            sec--;
          }
          counterDate(idWarp,day,hour,min,sec);
        }, 1000 );

        function counterDate(id,day,hour,min,sec){
          if (time < 0) { day = hour = min = sec = 0; }
          $( '.'+id+' .days').html( counterDoubleDigit(day) );
          $( '.'+id+' .hours').html( counterDoubleDigit(hour) );
          $( '.'+id+' .minutes').html( counterDoubleDigit(min) );
          $( '.'+id+' .seconds').html( counterDoubleDigit(sec) );
        }
        function counterDoubleDigit( arg ){
          if( arg.toString().length <= 1 ){
            arg = ('0' + arg).slice(-2);
          }
          return arg;
        }
      }
    }
    }
//loopcounter( 'counter-id' );
});


// Lightbox
!function(t,i){"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof exports?module.exports=i(require("jquery")):t.lightbox=i(t.jQuery)}(this,function(t){function i(i){this.album=[],this.currentImageIndex=void 0,this.init(),this.options=t.extend({},this.constructor.defaults),this.option(i)}return i.defaults={albumLabel:"Image %1 of %2",alwaysShowNavOnTouchDevices:!1,fadeDuration:600,fitImagesInViewport:!0,imageFadeDuration:600,positionFromTop:50,resizeDuration:700,showImageNumberLabel:!0,wrapAround:!1,disableScrolling:!1,sanitizeTitle:!1},i.prototype.option=function(i){t.extend(this.options,i)},i.prototype.imageCountLabel=function(t,i){return this.options.albumLabel.replace(/%1/g,t).replace(/%2/g,i)},i.prototype.init=function(){var i=this;t(document).ready(function(){i.enable(),i.build()})},i.prototype.enable=function(){var i=this;t("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(e){return i.start(t(e.currentTarget)),!1})},i.prototype.build=function(){if(!(t("#lightbox").length>0)){var i=this;t('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" aria-label="Previous image" href="" ></a><a class="lb-next" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(t("body")),this.$lightbox=t("#lightbox"),this.$overlay=t("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.$image=this.$lightbox.find(".lb-image"),this.$nav=this.$lightbox.find(".lb-nav"),this.containerPadding={top:parseInt(this.$container.css("padding-top"),10),right:parseInt(this.$container.css("padding-right"),10),bottom:parseInt(this.$container.css("padding-bottom"),10),left:parseInt(this.$container.css("padding-left"),10)},this.imageBorderWidth={top:parseInt(this.$image.css("border-top-width"),10),right:parseInt(this.$image.css("border-right-width"),10),bottom:parseInt(this.$image.css("border-bottom-width"),10),left:parseInt(this.$image.css("border-left-width"),10)},this.$overlay.hide().on("click",function(){return i.end(),!1}),this.$lightbox.hide().on("click",function(e){"lightbox"===t(e.target).attr("id")&&i.end()}),this.$outerContainer.on("click",function(e){return"lightbox"===t(e.target).attr("id")&&i.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return 0===i.currentImageIndex?i.changeImage(i.album.length-1):i.changeImage(i.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return i.currentImageIndex===i.album.length-1?i.changeImage(0):i.changeImage(i.currentImageIndex+1),!1}),this.$nav.on("mousedown",function(t){3===t.which&&(i.$nav.css("pointer-events","none"),i.$lightbox.one("contextmenu",function(){setTimeout(function(){this.$nav.css("pointer-events","auto")}.bind(i),0)}))}),this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){return i.end(),!1})}},i.prototype.start=function(i){var e=this,n=t(window);n.on("resize",t.proxy(this.sizeOverlay,this)),this.sizeOverlay(),this.album=[];var a=0;function o(t){e.album.push({alt:t.attr("data-alt"),link:t.attr("href"),title:t.attr("data-title")||t.attr("title")})}var s,h=i.attr("data-lightbox");if(h){s=t(i.prop("tagName")+'[data-lightbox="'+h+'"]');for(var r=0;r<s.length;r=++r)o(t(s[r])),s[r]===i[0]&&(a=r)}else if("lightbox"===i.attr("rel"))o(i);else{s=t(i.prop("tagName")+'[rel="'+i.attr("rel")+'"]');for(var l=0;l<s.length;l=++l)o(t(s[l])),s[l]===i[0]&&(a=l)}var d=n.scrollTop()+this.options.positionFromTop,g=n.scrollLeft();this.$lightbox.css({top:d+"px",left:g+"px"}).fadeIn(this.options.fadeDuration),this.options.disableScrolling&&t("body").addClass("lb-disable-scrolling"),this.changeImage(a)},i.prototype.changeImage=function(i){var e=this,n=this.album[i].link,a=n.split(".").slice(-1)[0],o=this.$lightbox.find(".lb-image");this.disableKeyboardNav(),this.$overlay.fadeIn(this.options.fadeDuration),t(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var s=new Image;s.onload=function(){var h,r,l,d,g,b;o.attr({alt:e.album[i].alt,src:n}),t(s),o.width(s.width),o.height(s.height),b=t(window).width(),g=t(window).height(),d=b-e.containerPadding.left-e.containerPadding.right-e.imageBorderWidth.left-e.imageBorderWidth.right-20,l=g-e.containerPadding.top-e.containerPadding.bottom-e.imageBorderWidth.top-e.imageBorderWidth.bottom-e.options.positionFromTop-70,"svg"===a&&(0!==s.width&&0!==s.height||(o.width(d),o.height(l))),e.options.fitImagesInViewport?(e.options.maxWidth&&e.options.maxWidth<d&&(d=e.options.maxWidth),e.options.maxHeight&&e.options.maxHeight<l&&(l=e.options.maxHeight)):(d=e.options.maxWidth||s.width||d,l=e.options.maxHeight||s.height||l),(s.width>d||s.height>l)&&(s.width/d>s.height/l?(r=d,h=parseInt(s.height/(s.width/r),10),o.width(r),o.height(h)):(h=l,r=parseInt(s.width/(s.height/h),10),o.width(r),o.height(h))),e.sizeContainer(o.width(),o.height())},s.src=this.album[i].link,this.currentImageIndex=i},i.prototype.sizeOverlay=function(){var i=this;setTimeout(function(){i.$overlay.width(t(document).width()).height(t(document).height())},0)},i.prototype.sizeContainer=function(t,i){var e=this,n=this.$outerContainer.outerWidth(),a=this.$outerContainer.outerHeight(),o=t+this.containerPadding.left+this.containerPadding.right+this.imageBorderWidth.left+this.imageBorderWidth.right,s=i+this.containerPadding.top+this.containerPadding.bottom+this.imageBorderWidth.top+this.imageBorderWidth.bottom;function h(){e.$lightbox.find(".lb-dataContainer").width(o),e.$lightbox.find(".lb-prevLink").height(s),e.$lightbox.find(".lb-nextLink").height(s),e.$overlay.focus(),e.showImage()}n!==o||a!==s?this.$outerContainer.animate({width:o,height:s},this.options.resizeDuration,"swing",function(){h()}):h()},i.prototype.showImage=function(){this.$lightbox.find(".lb-loader").stop(!0).hide(),this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},i.prototype.updateNav=function(){var t=!1;try{document.createEvent("TouchEvent"),t=!!this.options.alwaysShowNavOnTouchDevices}catch(t){}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(t&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),t&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),t&&this.$lightbox.find(".lb-next").css("opacity","1"))))},i.prototype.updateDetails=function(){var t=this;if(void 0!==this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title){var i=this.$lightbox.find(".lb-caption");this.options.sanitizeTitle?i.text(this.album[this.currentImageIndex].title):i.html(this.album[this.currentImageIndex].title),i.fadeIn("fast")}if(this.album.length>1&&this.options.showImageNumberLabel){var e=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find(".lb-number").text(e).fadeIn("fast")}else this.$lightbox.find(".lb-number").hide();this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return t.sizeOverlay()})},i.prototype.preloadNeighboringImages=function(){this.album.length>this.currentImageIndex+1&&((new Image).src=this.album[this.currentImageIndex+1].link);this.currentImageIndex>0&&((new Image).src=this.album[this.currentImageIndex-1].link)},i.prototype.enableKeyboardNav=function(){this.$lightbox.on("keyup.keyboard",t.proxy(this.keyboardAction,this)),this.$overlay.on("keyup.keyboard",t.proxy(this.keyboardAction,this))},i.prototype.disableKeyboardNav=function(){this.$lightbox.off(".keyboard"),this.$overlay.off(".keyboard")},i.prototype.keyboardAction=function(t){var i=t.keyCode;27===i?(t.stopPropagation(),this.end()):37===i?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):39===i&&(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},i.prototype.end=function(){this.disableKeyboardNav(),t(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),this.options.disableScrolling&&t("body").removeClass("lb-disable-scrolling")},new i});


/**
 * Swiper 4.5.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 13, 2019
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,function(){"use strict";var e="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,t="undefined"==typeof window?{document:e,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,i=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function s(s,a){var r=[],n=0;if(s&&!a&&s instanceof i)return s;if(s)if("string"==typeof s){var o,l,d=s.trim();if(d.indexOf("<")>=0&&d.indexOf(">")>=0){var h="div";for(0===d.indexOf("<li")&&(h="ul"),0===d.indexOf("<tr")&&(h="tbody"),0!==d.indexOf("<td")&&0!==d.indexOf("<th")||(h="tr"),0===d.indexOf("<tbody")&&(h="table"),0===d.indexOf("<option")&&(h="select"),(l=e.createElement(h)).innerHTML=d,n=0;n<l.childNodes.length;n+=1)r.push(l.childNodes[n])}else for(o=a||"#"!==s[0]||s.match(/[ .<>:~]/)?(a||e).querySelectorAll(s.trim()):[e.getElementById(s.trim().split("#")[1])],n=0;n<o.length;n+=1)o[n]&&r.push(o[n])}else if(s.nodeType||s===t||s===e)r.push(s);else if(s.length>0&&s[0].nodeType)for(n=0;n<s.length;n+=1)r.push(s[n]);return new i(r)}function a(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}s.fn=i.prototype,s.Class=i,s.Dom7=i;var r={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.add(t[i]);return this},removeClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.remove(t[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.toggle(t[i]);return this},attr:function(e,t){var i=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===i.length)this[s].setAttribute(e,t);else for(var a in e)this[s][a]=e[a],this[s].setAttribute(a,e[a]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var i;if(void 0!==t){for(var s=0;s<this.length;s+=1)(i=this[s]).dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=t;return this}if(i=this[0]){if(i.dom7ElementDataStorage&&e in i.dom7ElementDataStorage)return i.dom7ElementDataStorage[e];var a=i.getAttribute("data-"+e);return a||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var a=t[0],r=t[1],n=t[2],o=t[3];function l(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),s(t).is(r))n.apply(t,i);else for(var a=s(t).parents(),o=0;o<a.length;o+=1)s(a[o]).is(r)&&n.apply(a[o],i)}}function d(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(a=(e=t)[0],n=e[1],o=e[2],r=void 0),o||(o=!1);for(var h,p=a.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(h=0;h<p.length;h+=1){var v=p[h];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[v]||(u.dom7LiveListeners[v]=[]),u.dom7LiveListeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,o)}else for(h=0;h<p.length;h+=1){var f=p[h];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[f]||(u.dom7Listeners[f]=[]),u.dom7Listeners[f].push({listener:n,proxyListener:d}),u.addEventListener(f,d,o)}}return this},off:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(s=(e=t)[0],r=e[1],n=e[2],a=void 0),n||(n=!1);for(var o=s.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],h=0;h<this.length;h+=1){var p=this[h],c=void 0;if(!a&&p.dom7Listeners?c=p.dom7Listeners[d]:a&&p.dom7LiveListeners&&(c=p.dom7LiveListeners[d]),c&&c.length)for(var u=c.length-1;u>=0;u-=1){var v=c[u];r&&v.listener===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r||(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1))}}return this},trigger:function(){for(var i=[],s=arguments.length;s--;)i[s]=arguments[s];for(var a=i[0].split(" "),r=i[1],n=0;n<a.length;n+=1)for(var o=a[n],l=0;l<this.length;l+=1){var d=this[l],h=void 0;try{h=new t.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0})}catch(t){(h=e.createEvent("Event")).initEvent(o,!0,!0),h.detail=r}d.dom7EventData=i.filter(function(e,t){return t>0}),d.dispatchEvent(h),d.dom7EventData=[],delete d.dom7EventData}return this},transitionEnd:function(e){var t,i=["webkitTransitionEnd","transitionend"],s=this;function a(r){if(r.target===this)for(e.call(this,r),t=0;t<i.length;t+=1)s.off(i[t],a)}if(e)for(t=0;t<i.length;t+=1)s.on(i[t],a);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var i=this[0],s=i.getBoundingClientRect(),a=e.body,r=i.clientTop||a.clientTop||0,n=i.clientLeft||a.clientLeft||0,o=i===t?t.scrollY:i.scrollTop,l=i===t?t.scrollX:i.scrollLeft;return{top:s.top+o-r,left:s.left+l-n}}return null},css:function(e,i){var s;if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1)for(var a in e)this[s].style[a]=e[a];return this}if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(s=0;s<this.length;s+=1)this[s].style[e]=i;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(a){var r,n,o=this[0];if(!o||void 0===a)return!1;if("string"==typeof a){if(o.matches)return o.matches(a);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(a);if(o.msMatchesSelector)return o.msMatchesSelector(a);for(r=s(a),n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}if(a===e)return o===e;if(a===t)return o===t;if(a.nodeType||a instanceof i){for(r=a.nodeType?[a]:a,n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,s=this.length;return new i(e>s-1?[]:e<0?(t=s+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var t,s=[],a=arguments.length;a--;)s[a]=arguments[a];for(var r=0;r<s.length;r+=1){t=s[r];for(var n=0;n<this.length;n+=1)if("string"==typeof t){var o=e.createElement("div");for(o.innerHTML=t;o.firstChild;)this[n].appendChild(o.firstChild)}else if(t instanceof i)for(var l=0;l<t.length;l+=1)this[n].appendChild(t[l]);else this[n].appendChild(t)}return this},prepend:function(t){var s,a;for(s=0;s<this.length;s+=1)if("string"==typeof t){var r=e.createElement("div");for(r.innerHTML=t,a=r.childNodes.length-1;a>=0;a-=1)this[s].insertBefore(r.childNodes[a],this[s].childNodes[0])}else if(t instanceof i)for(a=0;a<t.length;a+=1)this[s].insertBefore(t[a],this[s].childNodes[0]);else this[s].insertBefore(t,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&s(this[0].nextElementSibling).is(e)?new i([this[0].nextElementSibling]):new i([]):this[0].nextElementSibling?new i([this[0].nextElementSibling]):new i([]):new i([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.nextElementSibling;){var r=a.nextElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&s(t.previousElementSibling).is(e)?new i([t.previousElementSibling]):new i([]):t.previousElementSibling?new i([t.previousElementSibling]):new i([])}return new i([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.previousElementSibling;){var r=a.previousElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?s(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return s(a(t))},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var r=this[i].parentNode;r;)e?s(r).is(e)&&t.push(r):t.push(r),r=r.parentNode;return s(a(t))},closest:function(e){var t=this;return void 0===e?new i([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var a=this[s].querySelectorAll(e),r=0;r<a.length;r+=1)t.push(a[r]);return new i(t)},children:function(e){for(var t=[],r=0;r<this.length;r+=1)for(var n=this[r].childNodes,o=0;o<n.length;o+=1)e?1===n[o].nodeType&&s(n[o]).is(e)&&t.push(n[o]):1===n[o].nodeType&&t.push(n[o]);return new i(a(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,a;for(i=0;i<e.length;i+=1){var r=s(e[i]);for(a=0;a<r.length;a+=1)this[this.length]=r[a],this.length+=1}return this},styles:function(){return this[0]?t.getComputedStyle(this[0],null):{}}};Object.keys(r).forEach(function(e){s.fn[e]=s.fn[e]||r[e]});var n,o,l={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,i){var s,a,r;void 0===i&&(i="x");var n=t.getComputedStyle(e,null);return t.WebKitCSSMatrix?((a=n.transform||n.webkitTransform).split(",").length>6&&(a=a.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),r=new t.WebKitCSSMatrix("none"===a?"":a)):s=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===i&&(a=t.WebKitCSSMatrix?r.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===i&&(a=t.WebKitCSSMatrix?r.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),a||0},parseUrlQuery:function(e){var i,s,a,r,n={},o=e||t.location.href;if("string"==typeof o&&o.length)for(r=(s=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,i=0;i<r;i+=1)a=s[i].replace(/#\S+/g,"").split("="),n[decodeURIComponent(a[0])]=void 0===a[1]?void 0:decodeURIComponent(a[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var i=Object(e[0]),s=1;s<e.length;s+=1){var a=e[s];if(null!=a)for(var r=Object.keys(Object(a)),n=0,o=r.length;n<o;n+=1){var d=r[n],h=Object.getOwnPropertyDescriptor(a,d);void 0!==h&&h.enumerable&&(l.isObject(i[d])&&l.isObject(a[d])?l.extend(i[d],a[d]):!l.isObject(i[d])&&l.isObject(a[d])?(i[d]={},l.extend(i[d],a[d])):i[d]=a[d])}}return i}},d=(o=e.createElement("div"),{touch:t.Modernizr&&!0===t.Modernizr.touch||!!(t.navigator.maxTouchPoints>0||"ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch),pointerEvents:!!(t.navigator.pointerEnabled||t.PointerEvent||"maxTouchPoints"in t.navigator&&t.navigator.maxTouchPoints>0),prefixedPointerEvents:!!t.navigator.msPointerEnabled,transition:(n=o.style,"transition"in n||"webkitTransition"in n||"MozTransition"in n),transforms3d:t.Modernizr&&!0===t.Modernizr.csstransforms3d||function(){var e=o.style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=o.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),i=0;i<t.length;i+=1)if(t[i]in e)return!0;return!1}(),observer:"MutationObserver"in t||"WebkitMutationObserver"in t,passiveListener:function(){var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});t.addEventListener("testPassiveListener",null,i)}catch(e){}return e}(),gestures:"ongesturestart"in t}),h=function(){return{isIE:!!t.navigator.userAgent.match(/Trident/g)||!!t.navigator.userAgent.match(/MSIE/g),isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:(e=t.navigator.userAgent.toLowerCase(),e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)};var e}(),p=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},c={components:{configurable:!0}};p.prototype.on=function(e,t,i){var s=this;if("function"!=typeof t)return s;var a=i?"unshift":"push";return e.split(" ").forEach(function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)}),s},p.prototype.once=function(e,t,i){var s=this;if("function"!=typeof t)return s;function a(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];t.apply(s,i),s.off(e,a),a.f7proxy&&delete a.f7proxy}return a.f7proxy=t,s.on(e,a,i)},p.prototype.off=function(e,t){var i=this;return i.eventsListeners?(e.split(" ").forEach(function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].length&&i.eventsListeners[e].forEach(function(s,a){(s===t||s.f7proxy&&s.f7proxy===t)&&i.eventsListeners[e].splice(a,1)})}),i):i},p.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s,a,r=this;return r.eventsListeners?("string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),a=r):(i=e[0].events,s=e[0].data,a=e[0].context||r),(Array.isArray(i)?i:i.split(" ")).forEach(function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(a,s)})}}),r):r},p.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach(function(i){var s=t.modules[i];s.params&&l.extend(e,s.params)})},p.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach(function(i){var s=t.modules[i],a=e[i]||{};s.instance&&Object.keys(s.instance).forEach(function(e){var i=s.instance[e];t[e]="function"==typeof i?i.bind(t):i}),s.on&&t.on&&Object.keys(s.on).forEach(function(e){t.on(e,s.on[e])}),s.create&&s.create.bind(t)(a)})},c.components.set=function(e){this.use&&this.use(e)},p.installModule=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;s.prototype.modules||(s.prototype.modules={});var a=e.name||Object.keys(s.prototype.modules).length+"_"+l.now();return s.prototype.modules[a]=e,e.proto&&Object.keys(e.proto).forEach(function(t){s.prototype[t]=e.proto[t]}),e.static&&Object.keys(e.static).forEach(function(t){s[t]=e.static[t]}),e.install&&e.install.apply(s,t),s},p.use=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;return Array.isArray(e)?(e.forEach(function(e){return s.installModule(e)}),s):s.installModule.apply(s,[e].concat(t))},Object.defineProperties(p,c);var u={updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),l.extend(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=this.params,i=this.$wrapperEl,s=this.size,a=this.rtlTranslate,r=this.wrongRTL,n=this.virtual&&e.virtual.enabled,o=n?this.virtual.slides.length:this.slides.length,p=i.children("."+this.params.slideClass),c=n?this.virtual.slides.length:p.length,u=[],v=[],f=[],m=e.slidesOffsetBefore;"function"==typeof m&&(m=e.slidesOffsetBefore.call(this));var g=e.slidesOffsetAfter;"function"==typeof g&&(g=e.slidesOffsetAfter.call(this));var b=this.snapGrid.length,w=this.snapGrid.length,y=e.spaceBetween,x=-m,T=0,E=0;if(void 0!==s){var S,C;"string"==typeof y&&y.indexOf("%")>=0&&(y=parseFloat(y.replace("%",""))/100*s),this.virtualSize=-y,a?p.css({marginLeft:"",marginTop:""}):p.css({marginRight:"",marginBottom:""}),e.slidesPerColumn>1&&(S=Math.floor(c/e.slidesPerColumn)===c/this.params.slidesPerColumn?c:Math.ceil(c/e.slidesPerColumn)*e.slidesPerColumn,"auto"!==e.slidesPerView&&"row"===e.slidesPerColumnFill&&(S=Math.max(S,e.slidesPerView*e.slidesPerColumn)));for(var M,P=e.slidesPerColumn,k=S/P,z=Math.floor(c/e.slidesPerColumn),$=0;$<c;$+=1){C=0;var I=p.eq($);if(e.slidesPerColumn>1){var L=void 0,D=void 0,O=void 0;if("column"===e.slidesPerColumnFill||"row"===e.slidesPerColumnFill&&e.slidesPerGroup>1){if("column"===e.slidesPerColumnFill)O=$-(D=Math.floor($/P))*P,(D>z||D===z&&O===P-1)&&(O+=1)>=P&&(O=0,D+=1);else{var A=Math.floor($/e.slidesPerGroup);D=$-(O=Math.floor($/e.slidesPerView)-A*e.slidesPerColumn)*e.slidesPerView-A*e.slidesPerView}L=D+O*S/P,I.css({"-webkit-box-ordinal-group":L,"-moz-box-ordinal-group":L,"-ms-flex-order":L,"-webkit-order":L,order:L})}else D=$-(O=Math.floor($/k))*k;I.css("margin-"+(this.isHorizontal()?"top":"left"),0!==O&&e.spaceBetween&&e.spaceBetween+"px").attr("data-swiper-column",D).attr("data-swiper-row",O)}if("none"!==I.css("display")){if("auto"===e.slidesPerView){var H=t.getComputedStyle(I[0],null),G=I[0].style.transform,N=I[0].style.webkitTransform;if(G&&(I[0].style.transform="none"),N&&(I[0].style.webkitTransform="none"),e.roundLengths)C=this.isHorizontal()?I.outerWidth(!0):I.outerHeight(!0);else if(this.isHorizontal()){var B=parseFloat(H.getPropertyValue("width")),X=parseFloat(H.getPropertyValue("padding-left")),V=parseFloat(H.getPropertyValue("padding-right")),Y=parseFloat(H.getPropertyValue("margin-left")),F=parseFloat(H.getPropertyValue("margin-right")),R=H.getPropertyValue("box-sizing");C=R&&"border-box"===R&&!h.isIE?B+Y+F:B+X+V+Y+F}else{var q=parseFloat(H.getPropertyValue("height")),W=parseFloat(H.getPropertyValue("padding-top")),j=parseFloat(H.getPropertyValue("padding-bottom")),U=parseFloat(H.getPropertyValue("margin-top")),K=parseFloat(H.getPropertyValue("margin-bottom")),_=H.getPropertyValue("box-sizing");C=_&&"border-box"===_&&!h.isIE?q+U+K:q+W+j+U+K}G&&(I[0].style.transform=G),N&&(I[0].style.webkitTransform=N),e.roundLengths&&(C=Math.floor(C))}else C=(s-(e.slidesPerView-1)*y)/e.slidesPerView,e.roundLengths&&(C=Math.floor(C)),p[$]&&(this.isHorizontal()?p[$].style.width=C+"px":p[$].style.height=C+"px");p[$]&&(p[$].swiperSlideSize=C),f.push(C),e.centeredSlides?(x=x+C/2+T/2+y,0===T&&0!==$&&(x=x-s/2-y),0===$&&(x=x-s/2-y),Math.abs(x)<.001&&(x=0),e.roundLengths&&(x=Math.floor(x)),E%e.slidesPerGroup==0&&u.push(x),v.push(x)):(e.roundLengths&&(x=Math.floor(x)),E%e.slidesPerGroup==0&&u.push(x),v.push(x),x=x+C+y),this.virtualSize+=C+y,T=C,E+=1}}if(this.virtualSize=Math.max(this.virtualSize,s)+g,a&&r&&("slide"===e.effect||"coverflow"===e.effect)&&i.css({width:this.virtualSize+e.spaceBetween+"px"}),d.flexbox&&!e.setWrapperSize||(this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"})),e.slidesPerColumn>1&&(this.virtualSize=(C+e.spaceBetween)*S,this.virtualSize=Math.ceil(this.virtualSize/e.slidesPerColumn)-e.spaceBetween,this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"}),e.centeredSlides)){M=[];for(var Z=0;Z<u.length;Z+=1){var Q=u[Z];e.roundLengths&&(Q=Math.floor(Q)),u[Z]<this.virtualSize+u[0]&&M.push(Q)}u=M}if(!e.centeredSlides){M=[];for(var J=0;J<u.length;J+=1){var ee=u[J];e.roundLengths&&(ee=Math.floor(ee)),u[J]<=this.virtualSize-s&&M.push(ee)}u=M,Math.floor(this.virtualSize-s)-Math.floor(u[u.length-1])>1&&u.push(this.virtualSize-s)}if(0===u.length&&(u=[0]),0!==e.spaceBetween&&(this.isHorizontal()?a?p.css({marginLeft:y+"px"}):p.css({marginRight:y+"px"}):p.css({marginBottom:y+"px"})),e.centerInsufficientSlides){var te=0;if(f.forEach(function(t){te+=t+(e.spaceBetween?e.spaceBetween:0)}),(te-=e.spaceBetween)<s){var ie=(s-te)/2;u.forEach(function(e,t){u[t]=e-ie}),v.forEach(function(e,t){v[t]=e+ie})}}l.extend(this,{slides:p,snapGrid:u,slidesGrid:v,slidesSizesGrid:f}),c!==o&&this.emit("slidesLengthChange"),u.length!==b&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),v.length!==w&&this.emit("slidesGridLengthChange"),(e.watchSlidesProgress||e.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(e){var t,i=[],s=0;if("number"==typeof e?this.setTransition(e):!0===e&&this.setTransition(this.params.speed),"auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)for(t=0;t<Math.ceil(this.params.slidesPerView);t+=1){var a=this.activeIndex+t;if(a>this.slides.length)break;i.push(this.slides.eq(a)[0])}else i.push(this.slides.eq(this.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var r=i[t].offsetHeight;s=r>s?r:s}s&&this.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.slides,a=this.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var r=-e;a&&(r=e),i.removeClass(t.slideVisibleClass),this.visibleSlidesIndexes=[],this.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(t.centeredSlides?this.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),h=d+this.slidesSizesGrid[n];(d>=0&&d<this.size-1||h>1&&h<=this.size||d<=0&&h>=this.size)&&(this.visibleSlides.push(o),this.visibleSlidesIndexes.push(n),i.eq(n).addClass(t.slideVisibleClass))}o.progress=a?-l:l}this.visibleSlides=s(this.visibleSlides)}},updateProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.maxTranslate()-this.minTranslate(),s=this.progress,a=this.isBeginning,r=this.isEnd,n=a,o=r;0===i?(s=0,a=!0,r=!0):(a=(s=(e-this.minTranslate())/i)<=0,r=s>=1),l.extend(this,{progress:s,isBeginning:a,isEnd:r}),(t.watchSlidesProgress||t.watchSlidesVisibility)&&this.updateSlidesProgress(e),a&&!n&&this.emit("reachBeginning toEdge"),r&&!o&&this.emit("reachEnd toEdge"),(n&&!a||o&&!r)&&this.emit("fromEdge"),this.emit("progress",s)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,r=this.realIndex,n=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=n?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=t.eq(0)).addClass(i.slideNextClass);var l=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===l.length&&(l=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,i=this.rtlTranslate?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,r=this.params,n=this.activeIndex,o=this.realIndex,d=this.snapIndex,h=e;if(void 0===h){for(var p=0;p<s.length;p+=1)void 0!==s[p+1]?i>=s[p]&&i<s[p+1]-(s[p+1]-s[p])/2?h=p:i>=s[p]&&i<s[p+1]&&(h=p+1):i>=s[p]&&(h=p);r.normalizeSlideIndex&&(h<0||void 0===h)&&(h=0)}if((t=a.indexOf(i)>=0?a.indexOf(i):Math.floor(h/r.slidesPerGroup))>=a.length&&(t=a.length-1),h!==n){var c=parseInt(this.slides.eq(h).attr("data-swiper-slide-index")||h,10);l.extend(this,{snapIndex:t,realIndex:c,previousIndex:n,activeIndex:h}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),o!==c&&this.emit("realIndexChange"),(this.initialized||this.runCallbacksOnInit)&&this.emit("slideChange")}else t!==d&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=s(e.target).closest("."+t.slideClass)[0],a=!1;if(i)for(var r=0;r<this.slides.length;r+=1)this.slides[r]===i&&(a=!0);if(!i||!a)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(s(i).attr("data-swiper-slide-index"),10):this.clickedIndex=s(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}};var v={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtlTranslate,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;var r=l.getTranslate(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var i=this.rtlTranslate,s=this.params,a=this.$wrapperEl,r=this.progress,n=0,o=0;this.isHorizontal()?n=i?-e:e:o=e,s.roundLengths&&(n=Math.floor(n),o=Math.floor(o)),s.virtualTranslate||(d.transforms3d?a.transform("translate3d("+n+"px, "+o+"px, 0px)"):a.transform("translate("+n+"px, "+o+"px)")),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?n:o;var l=this.maxTranslate()-this.minTranslate();(0===l?0:(e-this.minTranslate())/l)!==r&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}};var f={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;s.autoHeight&&this.updateAutoHeight();var r=t;if(r||(r=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===r)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===r?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex;this.animating=!1,this.setTransition(0);var a=t;if(a||(a=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===a)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===a?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}};var m={slideTo:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=this,r=e;r<0&&(r=0);var n=a.params,o=a.snapGrid,l=a.slidesGrid,h=a.previousIndex,p=a.activeIndex,c=a.rtlTranslate;if(a.animating&&n.preventInteractionOnTransition)return!1;var u=Math.floor(r/n.slidesPerGroup);u>=o.length&&(u=o.length-1),(p||n.initialSlide||0)===(h||0)&&i&&a.emit("beforeSlideChangeStart");var v,f=-o[u];if(a.updateProgress(f),n.normalizeSlideIndex)for(var m=0;m<l.length;m+=1)-Math.floor(100*f)>=Math.floor(100*l[m])&&(r=m);if(a.initialized&&r!==p){if(!a.allowSlideNext&&f<a.translate&&f<a.minTranslate())return!1;if(!a.allowSlidePrev&&f>a.translate&&f>a.maxTranslate()&&(p||0)!==r)return!1}return v=r>p?"next":r<p?"prev":"reset",c&&-f===a.translate||!c&&f===a.translate?(a.updateActiveIndex(r),n.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),"slide"!==n.effect&&a.setTranslate(f),"reset"!==v&&(a.transitionStart(i,v),a.transitionEnd(i,v)),!1):(0!==t&&d.transition?(a.setTransition(t),a.setTranslate(f),a.updateActiveIndex(r),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,s),a.transitionStart(i,v),a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(e){a&&!a.destroyed&&e.target===this&&(a.$wrapperEl[0].removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.$wrapperEl[0].removeEventListener("webkitTransitionEnd",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(i,v))}),a.$wrapperEl[0].addEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.$wrapperEl[0].addEventListener("webkitTransitionEnd",a.onSlideToWrapperTransitionEnd))):(a.setTransition(0),a.setTranslate(f),a.updateActiveIndex(r),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,s),a.transitionStart(i,v),a.transitionEnd(i,v)),!0)},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating;return s.loop?!a&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,this.slideTo(this.activeIndex+s.slidesPerGroup,e,t,i)):this.slideTo(this.activeIndex+s.slidesPerGroup,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.snapGrid,n=this.slidesGrid,o=this.rtlTranslate;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}function l(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d,h=l(o?this.translate:-this.translate),p=r.map(function(e){return l(e)}),c=(n.map(function(e){return l(e)}),r[p.indexOf(h)],r[p.indexOf(h)-1]);return void 0!==c&&(d=n.indexOf(c))<0&&(d=this.activeIndex-1),this.slideTo(d,e,t,i)},slideReset:function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.activeIndex,a=Math.floor(s/this.params.slidesPerGroup);if(a<this.snapGrid.length-1){var r=this.rtlTranslate?this.translate:-this.translate,n=this.snapGrid[a];r-n>(this.snapGrid[a+1]-n)/2&&(s=this.params.slidesPerGroup)}return this.slideTo(s,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,a=t.$wrapperEl,r="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,n=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?n<t.loopedSlides-r/2||n>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),n=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),l.nextTick(function(){t.slideTo(n)})):t.slideTo(n):n>t.slides.length-r?(t.loopFix(),n=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),l.nextTick(function(){t.slideTo(n)})):t.slideTo(n)}else t.slideTo(n)}};var g={loopCreate:function(){var t=this,i=t.params,a=t.$wrapperEl;a.children("."+i.slideClass+"."+i.slideDuplicateClass).remove();var r=a.children("."+i.slideClass);if(i.loopFillGroupWithBlank){var n=i.slidesPerGroup-r.length%i.slidesPerGroup;if(n!==i.slidesPerGroup){for(var o=0;o<n;o+=1){var l=s(e.createElement("div")).addClass(i.slideClass+" "+i.slideBlankClass);a.append(l)}r=a.children("."+i.slideClass)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=r.length),t.loopedSlides=parseInt(i.loopedSlides||i.slidesPerView,10),t.loopedSlides+=i.loopAdditionalSlides,t.loopedSlides>r.length&&(t.loopedSlides=r.length);var d=[],h=[];r.each(function(e,i){var a=s(i);e<t.loopedSlides&&h.push(i),e<r.length&&e>=r.length-t.loopedSlides&&d.push(i),a.attr("data-swiper-slide-index",e)});for(var p=0;p<h.length;p+=1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){var e,t=this.params,i=this.activeIndex,s=this.slides,a=this.loopedSlides,r=this.allowSlidePrev,n=this.allowSlideNext,o=this.snapGrid,l=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var d=-o[i]-this.getTranslate();i<a?(e=s.length-3*a+i,e+=a,this.slideTo(e,0,!1,!0)&&0!==d&&this.setTranslate((l?-this.translate:this.translate)-d)):("auto"===t.slidesPerView&&i>=2*a||i>=s.length-a)&&(e=-s.length+i+a,e+=a,this.slideTo(e,0,!1,!0)&&0!==d&&this.setTranslate((l?-this.translate:this.translate)-d));this.allowSlidePrev=r,this.allowSlideNext=n},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}};var b={setGrabCursor:function(e){if(!(d.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){d.touch||this.params.watchOverflow&&this.isLocked||(this.el.style.cursor="")}};var w={appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&d.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&d.observer||this.update(),this.slideTo(a,0,!1)},addSlide:function(e,t){var i=this.$wrapperEl,s=this.params,a=this.activeIndex;s.loop&&(a-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+s.slideClass));var r=this.slides.length;if(e<=0)this.prependSlide(t);else if(e>=r)this.appendSlide(t);else{for(var n=a>e?a+1:a,o=[],l=r-1;l>=e;l-=1){var h=this.slides.eq(l);h.remove(),o.unshift(h)}if("object"==typeof t&&"length"in t){for(var p=0;p<t.length;p+=1)t[p]&&i.append(t[p]);n=a>e?a+t.length:a}else i.append(t);for(var c=0;c<o.length;c+=1)i.append(o[c]);s.loop&&this.loopCreate(),s.observer&&d.observer||this.update(),s.loop?this.slideTo(n+this.loopedSlides,0,!1):this.slideTo(n,0,!1)}},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(s-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,r=s;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)a=e[n],this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1),r=Math.max(r,0);t.loop&&this.loopCreate(),t.observer&&d.observer||this.update(),t.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},y=function(){var i=t.navigator.userAgent,s={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:t.cordova||t.phonegap,phonegap:t.cordova||t.phonegap},a=i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),r=i.match(/(Android);?[\s\/]+([\d.]+)?/),n=i.match(/(iPad).*OS\s([\d_]+)/),o=i.match(/(iPod)(.*OS\s([\d_]+))?/),l=!n&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(s.os="windows",s.osVersion=a[2],s.windows=!0),r&&!a&&(s.os="android",s.osVersion=r[2],s.android=!0,s.androidChrome=i.toLowerCase().indexOf("chrome")>=0),(n||l||o)&&(s.os="ios",s.ios=!0),l&&!o&&(s.osVersion=l[2].replace(/_/g,"."),s.iphone=!0),n&&(s.osVersion=n[2].replace(/_/g,"."),s.ipad=!0),o&&(s.osVersion=o[3]?o[3].replace(/_/g,"."):null,s.iphone=!0),s.ios&&s.osVersion&&i.indexOf("Version/")>=0&&"10"===s.osVersion.split(".")[0]&&(s.osVersion=i.toLowerCase().split("version/")[1].split(" ")[0]),s.desktop=!(s.os||s.android||s.webView),s.webView=(l||n||o)&&i.match(/.*AppleWebKit(?!.*Safari)/i),s.os&&"ios"===s.os){var d=s.osVersion.split("."),h=e.querySelector('meta[name="viewport"]');s.minimalUi=!s.webView&&(o||l)&&(1*d[0]==7?1*d[1]>=1:1*d[0]>7)&&h&&h.getAttribute("content").indexOf("minimal-ui")>=0}return s.pixelRatio=t.devicePixelRatio||1,s}();function x(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev,a=this.snapGrid;if(this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),e.freeMode){var r=Math.min(Math.max(this.translate,this.maxTranslate()),this.minTranslate());this.setTranslate(r),this.updateActiveIndex(),this.updateSlidesClasses(),e.autoHeight&&this.updateAutoHeight()}else this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0);this.autoplay&&this.autoplay.running&&this.autoplay.paused&&this.autoplay.run(),this.allowSlidePrev=s,this.allowSlideNext=i,this.params.watchOverflow&&a!==this.snapGrid&&this.checkOverflow()}}var T={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsInverse:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},E={update:u,translate:v,transition:f,slide:m,loop:g,grabCursor:b,manipulation:w,events:{attachEvents:function(){var i=this.params,a=this.touchEvents,r=this.el,n=this.wrapperEl;this.onTouchStart=function(i){var a=this.touchEventsData,r=this.params,n=this.touches;if(!this.animating||!r.preventInteractionOnTransition){var o=i;if(o.originalEvent&&(o=o.originalEvent),a.isTouchEvent="touchstart"===o.type,(a.isTouchEvent||!("which"in o)||3!==o.which)&&!(!a.isTouchEvent&&"button"in o&&o.button>0||a.isTouched&&a.isMoved))if(r.noSwiping&&s(o.target).closest(r.noSwipingSelector?r.noSwipingSelector:"."+r.noSwipingClass)[0])this.allowClick=!0;else if(!r.swipeHandler||s(o).closest(r.swipeHandler)[0]){n.currentX="touchstart"===o.type?o.targetTouches[0].pageX:o.pageX,n.currentY="touchstart"===o.type?o.targetTouches[0].pageY:o.pageY;var d=n.currentX,h=n.currentY,p=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,c=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(!p||!(d<=c||d>=t.screen.width-c)){if(l.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),n.startX=d,n.startY=h,a.touchStartTime=l.now(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1),"touchstart"!==o.type){var u=!0;s(o.target).is(a.formElements)&&(u=!1),e.activeElement&&s(e.activeElement).is(a.formElements)&&e.activeElement!==o.target&&e.activeElement.blur();var v=u&&this.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||v)&&o.preventDefault()}this.emit("touchStart",o)}}}}.bind(this),this.onTouchMove=function(t){var i=this.touchEventsData,a=this.params,r=this.touches,n=this.rtlTranslate,o=t;if(o.originalEvent&&(o=o.originalEvent),i.isTouched){if(!i.isTouchEvent||"mousemove"!==o.type){var d="touchmove"===o.type?o.targetTouches[0].pageX:o.pageX,h="touchmove"===o.type?o.targetTouches[0].pageY:o.pageY;if(o.preventedByNestedSwiper)return r.startX=d,void(r.startY=h);if(!this.allowTouchMove)return this.allowClick=!1,void(i.isTouched&&(l.extend(r,{startX:d,startY:h,currentX:d,currentY:h}),i.touchStartTime=l.now()));if(i.isTouchEvent&&a.touchReleaseOnEdges&&!a.loop)if(this.isVertical()){if(h<r.startY&&this.translate<=this.maxTranslate()||h>r.startY&&this.translate>=this.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(d<r.startX&&this.translate<=this.maxTranslate()||d>r.startX&&this.translate>=this.minTranslate())return;if(i.isTouchEvent&&e.activeElement&&o.target===e.activeElement&&s(o.target).is(i.formElements))return i.isMoved=!0,void(this.allowClick=!1);if(i.allowTouchCallbacks&&this.emit("touchMove",o),!(o.targetTouches&&o.targetTouches.length>1)){r.currentX=d,r.currentY=h;var p,c=r.currentX-r.startX,u=r.currentY-r.startY;if(!(this.params.threshold&&Math.sqrt(Math.pow(c,2)+Math.pow(u,2))<this.params.threshold))if(void 0===i.isScrolling&&(this.isHorizontal()&&r.currentY===r.startY||this.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:c*c+u*u>=25&&(p=180*Math.atan2(Math.abs(u),Math.abs(c))/Math.PI,i.isScrolling=this.isHorizontal()?p>a.touchAngle:90-p>a.touchAngle)),i.isScrolling&&this.emit("touchMoveOpposite",o),void 0===i.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){this.allowClick=!1,o.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&o.stopPropagation(),i.isMoved||(a.loop&&this.loopFix(),i.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!a.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",o)),this.emit("sliderMove",o),i.isMoved=!0;var v=this.isHorizontal()?c:u;r.diff=v,v*=a.touchRatio,n&&(v=-v),this.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;var f=!0,m=a.resistanceRatio;if(a.touchReleaseOnEdges&&(m=0),v>0&&i.currentTranslate>this.minTranslate()?(f=!1,a.resistance&&(i.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+i.startTranslate+v,m))):v<0&&i.currentTranslate<this.maxTranslate()&&(f=!1,a.resistance&&(i.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-i.startTranslate-v,m))),f&&(o.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),a.threshold>0){if(!(Math.abs(v)>a.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=this.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}a.followFinger&&((a.freeMode||a.watchSlidesProgress||a.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),a.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[this.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[this.isHorizontal()?"currentX":"currentY"],time:l.now()})),this.updateProgress(i.currentTranslate),this.setTranslate(i.currentTranslate))}}}}else i.startMoving&&i.isScrolling&&this.emit("touchMoveOpposite",o)}.bind(this),this.onTouchEnd=function(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,d=t.snapGrid,h=e;if(h.originalEvent&&(h=h.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",h),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=l.now(),u=c-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(h),t.emit("tap",h),u<300&&c-i.lastClickTime>300&&(i.clickTimeout&&clearTimeout(i.clickTimeout),i.clickTimeout=l.nextTick(function(){t&&!t.destroyed&&t.emit("click",h)},300)),u<300&&c-i.lastClickTime<300&&(i.clickTimeout&&clearTimeout(i.clickTimeout),t.emit("doubleTap",h))),i.lastClickTime=l.now(),l.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,p=s.followFinger?r?t.translate:-t.translate:-i.currentTranslate,s.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var v=i.velocities.pop(),f=i.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(g>150||l.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var b=1e3*s.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,T,E=!1,S=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),x=t.maxTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.maxTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),x=t.minTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.minTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(s.freeModeSticky){for(var C,M=0;M<d.length;M+=1)if(d[M]>-y){C=M;break}y=-(y=Math.abs(d[C]-y)<Math.abs(d[C-1]-y)||"next"===t.swipeDirection?d[C]:d[C-1])}if(T&&t.once("transitionEnd",function(){t.loopFix()}),0!==t.velocity)b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity);else if(s.freeModeSticky)return void t.slideToClosest();s.freeModeMomentumBounce&&E?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),t.setTranslate(x),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeModeSticky)return void t.slideToClosest();(!s.freeModeMomentum||u>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var P=0,k=t.slidesSizesGrid[0],z=0;z<o.length;z+=s.slidesPerGroup)void 0!==o[z+s.slidesPerGroup]?p>=o[z]&&p<o[z+s.slidesPerGroup]&&(P=z,k=o[z+s.slidesPerGroup]-o[z]):p>=o[z]&&(P=z,k=o[o.length-1]-o[o.length-2]);var $=(p-o[P])/k;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&($>=s.longSwipesRatio?t.slideTo(P+s.slidesPerGroup):t.slideTo(P)),"prev"===t.swipeDirection&&($>1-s.longSwipesRatio?t.slideTo(P+s.slidesPerGroup):t.slideTo(P))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(P+s.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(P)}}}.bind(this),this.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(this);var o="container"===i.touchEventsTarget?r:n,h=!!i.nested;if(d.touch||!d.pointerEvents&&!d.prefixedPointerEvents){if(d.touch){var p=!("touchstart"!==a.start||!d.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};o.addEventListener(a.start,this.onTouchStart,p),o.addEventListener(a.move,this.onTouchMove,d.passiveListener?{passive:!1,capture:h}:h),o.addEventListener(a.end,this.onTouchEnd,p)}(i.simulateTouch&&!y.ios&&!y.android||i.simulateTouch&&!d.touch&&y.ios)&&(o.addEventListener("mousedown",this.onTouchStart,!1),e.addEventListener("mousemove",this.onTouchMove,h),e.addEventListener("mouseup",this.onTouchEnd,!1))}else o.addEventListener(a.start,this.onTouchStart,!1),e.addEventListener(a.move,this.onTouchMove,h),e.addEventListener(a.end,this.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&o.addEventListener("click",this.onClick,!0),this.on(y.ios||y.android?"resize orientationchange observerUpdate":"resize observerUpdate",x,!0)},detachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,r="container"===t.touchEventsTarget?s:a,n=!!t.nested;if(d.touch||!d.pointerEvents&&!d.prefixedPointerEvents){if(d.touch){var o=!("onTouchStart"!==i.start||!d.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(i.start,this.onTouchStart,o),r.removeEventListener(i.move,this.onTouchMove,n),r.removeEventListener(i.end,this.onTouchEnd,o)}(t.simulateTouch&&!y.ios&&!y.android||t.simulateTouch&&!d.touch&&y.ios)&&(r.removeEventListener("mousedown",this.onTouchStart,!1),e.removeEventListener("mousemove",this.onTouchMove,n),e.removeEventListener("mouseup",this.onTouchEnd,!1))}else r.removeEventListener(i.start,this.onTouchStart,!1),e.removeEventListener(i.move,this.onTouchMove,n),e.removeEventListener(i.end,this.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",this.onClick,!0),this.off(y.ios||y.android?"resize orientationchange observerUpdate":"resize observerUpdate",x)}},breakpoints:{setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,i=this.loopedSlides;void 0===i&&(i=0);var s=this.params,a=s.breakpoints;if(a&&(!a||0!==Object.keys(a).length)){var r=this.getBreakpoint(a);if(r&&this.currentBreakpoint!==r){var n=r in a?a[r]:void 0;n&&["slidesPerView","spaceBetween","slidesPerGroup"].forEach(function(e){var t=n[e];void 0!==t&&(n[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")});var o=n||this.originalParams,d=o.direction&&o.direction!==s.direction,h=s.loop&&(o.slidesPerView!==s.slidesPerView||d);d&&t&&this.changeDirection(),l.extend(this.params,o),l.extend(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=r,h&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-i+this.loopedSlides,0,!1)),this.emit("breakpoint",o)}}},getBreakpoint:function(e){if(e){var i=!1,s=[];Object.keys(e).forEach(function(e){s.push(e)}),s.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var a=0;a<s.length;a+=1){var r=s[a];this.params.breakpointsInverse?r<=t.innerWidth&&(i=r):r>=t.innerWidth&&!i&&(i=r)}return i||"max"}}},checkOverflow:{checkOverflow:function(){var e=this.isLocked;this.isLocked=1===this.snapGrid.length,this.allowSlideNext=!this.isLocked,this.allowSlidePrev=!this.isLocked,e!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock"),e&&e!==this.isLocked&&(this.isEnd=!1,this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=[];a.push("initialized"),a.push(t.direction),t.freeMode&&a.push("free-mode"),d.flexbox||a.push("no-flexbox"),t.autoHeight&&a.push("autoheight"),i&&a.push("rtl"),t.slidesPerColumn>1&&a.push("multirow"),y.android&&a.push("android"),y.ios&&a.push("ios"),(h.isIE||h.isEdge)&&(d.pointerEvents||d.prefixedPointerEvents)&&a.push("wp8-"+t.direction),a.forEach(function(i){e.push(t.containerModifierClass+i)}),s.addClass(e.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,i,s,a,r,n){var o;function l(){n&&n()}e.complete&&r?l():i?((o=new t.Image).onload=l,o.onerror=l,a&&(o.sizes=a),s&&(o.srcset=s),i&&(o.src=i)):l()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},S={},C=function(e){function t(){for(var i,a,r,n=[],o=arguments.length;o--;)n[o]=arguments[o];1===n.length&&n[0].constructor&&n[0].constructor===Object?r=n[0]:(a=(i=n)[0],r=i[1]),r||(r={}),r=l.extend({},r),a&&!r.el&&(r.el=a),e.call(this,r),Object.keys(E).forEach(function(e){Object.keys(E[e]).forEach(function(i){t.prototype[i]||(t.prototype[i]=E[e][i])})});var h=this;void 0===h.modules&&(h.modules={}),Object.keys(h.modules).forEach(function(e){var t=h.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s||null===s)return;if(!(i in r&&"enabled"in s))return;!0===r[i]&&(r[i]={enabled:!0}),"object"!=typeof r[i]||"enabled"in r[i]||(r[i].enabled=!0),r[i]||(r[i]={enabled:!1})}});var p=l.extend({},T);h.useModulesParams(p),h.params=l.extend({},p,S,r),h.originalParams=l.extend({},h.params),h.passedParams=l.extend({},r),h.$=s;var c=s(h.params.el);if(a=c[0]){if(c.length>1){var u=[];return c.each(function(e,i){var s=l.extend({},r,{el:i});u.push(new t(s))}),u}a.swiper=h,c.data("swiper",h);var v,f,m=c.children("."+h.params.wrapperClass);return l.extend(h,{$el:c,el:a,$wrapperEl:m,wrapperEl:m[0],classNames:[],slides:s(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===h.params.direction},isVertical:function(){return"vertical"===h.params.direction},rtl:"rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction"),rtlTranslate:"horizontal"===h.params.direction&&("rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction")),wrongRTL:"-webkit-box"===m.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:h.params.allowSlideNext,allowSlidePrev:h.params.allowSlidePrev,touchEvents:(v=["touchstart","touchmove","touchend"],f=["mousedown","mousemove","mouseup"],d.pointerEvents?f=["pointerdown","pointermove","pointerup"]:d.prefixedPointerEvents&&(f=["MSPointerDown","MSPointerMove","MSPointerUp"]),h.touchEventsTouch={start:v[0],move:v[1],end:v[2]},h.touchEventsDesktop={start:f[0],move:f[1],end:f[2]},d.touch||!h.params.simulateTouch?h.touchEventsTouch:h.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:l.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:h.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),h.useModules(),h.params.init&&h.init(),h}}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return t.prototype.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,r=1;if(e.centeredSlides){for(var n,o=t[a].swiperSlideSize,l=a+1;l<t.length;l+=1)t[l]&&!n&&(r+=1,(o+=t[l].swiperSlideSize)>s&&(n=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!n&&(r+=1,(o+=t[d].swiperSlideSize)>s&&(n=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(r+=1);return r},t.prototype.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,i=e.params;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(s(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||s(),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function s(){var t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},t.prototype.changeDirection=function(e,t){void 0===t&&(t=!0);var i=this.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e?this:(this.$el.removeClass(""+this.params.containerModifierClass+i+" wp8-"+i).addClass(""+this.params.containerModifierClass+e),(h.isIE||h.isEdge)&&(d.pointerEvents||d.prefixedPointerEvents)&&this.$el.addClass(this.params.containerModifierClass+"wp8-"+e),this.params.direction=e,this.slides.each(function(t,i){"vertical"===e?i.style.width="":i.style.height=""}),this.emit("changeDirection"),t&&this.update(),this)},t.prototype.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"))},t.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i=this,s=i.params,a=i.$el,r=i.$wrapperEl,n=i.slides;return void 0===i.params||i.destroyed?null:(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),a.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(function(e){i.off(e)}),!1!==e&&(i.$el[0].swiper=null,i.$el.data("swiper",null),l.deleteProps(i)),i.destroyed=!0,null)},t.extendDefaults=function(e){l.extend(S,e)},i.extendedDefaults.get=function(){return S},i.defaults.get=function(){return T},i.Class.get=function(){return e},i.$.get=function(){return s},Object.defineProperties(t,i),t}(p),M={name:"device",proto:{device:y},static:{device:y}},P={name:"support",proto:{support:d},static:{support:d}},k={name:"browser",proto:{browser:h},static:{browser:h}},z={name:"resize",create:function(){var e=this;l.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){t.addEventListener("resize",this.resize.resizeHandler),t.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){t.removeEventListener("resize",this.resize.resizeHandler),t.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},$={func:t.MutationObserver||t.WebkitMutationObserver,attach:function(e,i){void 0===i&&(i={});var s=this,a=new(0,$.func)(function(e){if(1!==e.length){var i=function(){s.emit("observerUpdate",e[0])};t.requestAnimationFrame?t.requestAnimationFrame(i):t.setTimeout(i,0)}else s.emit("observerUpdate",e[0])});a.observe(e,{attributes:void 0===i.attributes||i.attributes,childList:void 0===i.childList||i.childList,characterData:void 0===i.characterData||i.characterData}),s.observer.observers.push(a)},init:function(){if(d.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:this.params.observeSlideChildren}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},I={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){l.extend(this,{observer:{init:$.init.bind(this),attach:$.attach.bind(this),destroy:$.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},L={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,r=i.centeredSlides,n=t.params.virtual,o=n.addSlidesBefore,d=n.addSlidesAfter,h=t.virtual,p=h.from,c=h.to,u=h.slides,v=h.slidesGrid,f=h.renderSlide,m=h.offset;t.updateActiveIndex();var g,b,w,y=t.activeIndex||0;g=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(b=Math.floor(s/2)+a+o,w=Math.floor(s/2)+a+d):(b=s+(a-1)+o,w=a+d);var x=Math.max((y||0)-w,0),T=Math.min((y||0)+b,u.length-1),E=(t.slidesGrid[x]||0)-(t.slidesGrid[0]||0);function S(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(l.extend(t.virtual,{from:x,to:T,offset:E,slidesGrid:t.slidesGrid}),p===x&&c===T&&!e)return t.slidesGrid!==v&&E!==m&&t.slides.css(g,E+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:E,from:x,to:T,slides:function(){for(var e=[],t=x;t<=T;t+=1)e.push(u[t]);return e}()}),void S();var C=[],M=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var P=p;P<=c;P+=1)(P<x||P>T)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+P+'"]').remove();for(var k=0;k<u.length;k+=1)k>=x&&k<=T&&(void 0===c||e?M.push(k):(k>c&&M.push(k),k<p&&C.push(k)));M.forEach(function(e){t.$wrapperEl.append(f(u[e],e))}),C.sort(function(e,t){return t-e}).forEach(function(e){t.$wrapperEl.prepend(f(u[e],e))}),t.$wrapperEl.children(".swiper-slide").css(g,E+"px"),S()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var a=i.renderSlide?s(i.renderSlide.call(this,e,t)):s('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return a.attr("data-swiper-slide-index")||a.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=a),a},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this.activeIndex,i=t+1,s=1;if(Array.isArray(e)){for(var a=0;a<e.length;a+=1)e[a]&&this.virtual.slides.unshift(e[a]);i=t+e.length,s=e.length}else this.virtual.slides.unshift(e);if(this.params.virtual.cache){var r=this.virtual.cache,n={};Object.keys(r).forEach(function(e){n[parseInt(e,10)+s]=r[e]}),this.virtual.cache=n}this.virtual.update(!0),this.slideTo(i,0)},removeSlide:function(e){if(null!=e){var t=this.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)this.virtual.slides.splice(e[i],1),this.params.virtual.cache&&delete this.virtual.cache[e[i]],e[i]<t&&(t-=1),t=Math.max(t,0);else this.virtual.slides.splice(e,1),this.params.virtual.cache&&delete this.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);this.virtual.update(!0),this.slideTo(t,0)}},removeAllSlides:function(){this.virtual.slides=[],this.params.virtual.cache&&(this.virtual.cache={}),this.virtual.update(!0),this.slideTo(0,0)}},D={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){l.extend(this,{virtual:{update:L.update.bind(this),appendSlide:L.appendSlide.bind(this),prependSlide:L.prependSlide.bind(this),removeSlide:L.removeSlide.bind(this),removeAllSlides:L.removeAllSlides.bind(this),renderSlide:L.renderSlide.bind(this),slides:this.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){if(this.params.virtual.enabled){this.classNames.push(this.params.containerModifierClass+"virtual");var e={watchSlidesProgress:!0};l.extend(this.params,e),l.extend(this.originalParams,e),this.params.initialSlide||this.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},O={handle:function(i){var s=this.rtlTranslate,a=i;a.originalEvent&&(a=a.originalEvent);var r=a.keyCode||a.charCode;if(!this.allowSlideNext&&(this.isHorizontal()&&39===r||this.isVertical()&&40===r||34===r))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&37===r||this.isVertical()&&38===r||33===r))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||e.activeElement&&e.activeElement.nodeName&&("input"===e.activeElement.nodeName.toLowerCase()||"textarea"===e.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(33===r||34===r||37===r||39===r||38===r||40===r)){var n=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var o=t.innerWidth,l=t.innerHeight,d=this.$el.offset();s&&(d.left-=this.$el[0].scrollLeft);for(var h=[[d.left,d.top],[d.left+this.width,d.top],[d.left,d.top+this.height],[d.left+this.width,d.top+this.height]],p=0;p<h.length;p+=1){var c=h[p];c[0]>=0&&c[0]<=o&&c[1]>=0&&c[1]<=l&&(n=!0)}if(!n)return}this.isHorizontal()?(33!==r&&34!==r&&37!==r&&39!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),(34!==r&&39!==r||s)&&(33!==r&&37!==r||!s)||this.slideNext(),(33!==r&&37!==r||s)&&(34!==r&&39!==r||!s)||this.slidePrev()):(33!==r&&34!==r&&38!==r&&40!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),34!==r&&40!==r||this.slideNext(),33!==r&&38!==r||this.slidePrev()),this.emit("keyPress",r)}},enable:function(){this.keyboard.enabled||(s(e).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(s(e).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},A={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){l.extend(this,{keyboard:{enabled:!1,enable:O.enable.bind(this),disable:O.disable.bind(this),handle:O.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var H={lastScrollTime:l.now(),event:t.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var t="onwheel"in e;if(!t){var i=e.createElement("div");i.setAttribute("onwheel","return;"),t="function"==typeof i.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,i=0,s=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=800)),s&&!t&&(t=s<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:a}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var i=e,s=this,a=s.params.mousewheel;if(!s.mouseEntered&&!a.releaseOnEdges)return!0;i.originalEvent&&(i=i.originalEvent);var r=0,n=s.rtlTranslate?-1:1,o=H.normalize(i);if(a.forceToAxis)if(s.isHorizontal()){if(!(Math.abs(o.pixelX)>Math.abs(o.pixelY)))return!0;r=o.pixelX*n}else{if(!(Math.abs(o.pixelY)>Math.abs(o.pixelX)))return!0;r=o.pixelY}else r=Math.abs(o.pixelX)>Math.abs(o.pixelY)?-o.pixelX*n:-o.pixelY;if(0===r)return!0;if(a.invert&&(r=-r),s.params.freeMode){s.params.loop&&s.loopFix();var d=s.getTranslate()+r*a.sensitivity,h=s.isBeginning,p=s.isEnd;if(d>=s.minTranslate()&&(d=s.minTranslate()),d<=s.maxTranslate()&&(d=s.maxTranslate()),s.setTransition(0),s.setTranslate(d),s.updateProgress(),s.updateActiveIndex(),s.updateSlidesClasses(),(!h&&s.isBeginning||!p&&s.isEnd)&&s.updateSlidesClasses(),s.params.freeModeSticky&&(clearTimeout(s.mousewheel.timeout),s.mousewheel.timeout=l.nextTick(function(){s.slideToClosest()},300)),s.emit("scroll",i),s.params.autoplay&&s.params.autoplayDisableOnInteraction&&s.autoplay.stop(),d===s.minTranslate()||d===s.maxTranslate())return!0}else{if(l.now()-s.mousewheel.lastScrollTime>60)if(r<0)if(s.isEnd&&!s.params.loop||s.animating){if(a.releaseOnEdges)return!0}else s.slideNext(),s.emit("scroll",i);else if(s.isBeginning&&!s.params.loop||s.animating){if(a.releaseOnEdges)return!0}else s.slidePrev(),s.emit("scroll",i);s.mousewheel.lastScrollTime=(new t.Date).getTime()}return i.preventDefault?i.preventDefault():i.returnValue=!1,!1},enable:function(){if(!H.event)return!1;if(this.mousewheel.enabled)return!1;var e=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(e=s(this.params.mousewheel.eventsTarged)),e.on("mouseenter",this.mousewheel.handleMouseEnter),e.on("mouseleave",this.mousewheel.handleMouseLeave),e.on(H.event,this.mousewheel.handle),this.mousewheel.enabled=!0,!0},disable:function(){if(!H.event)return!1;if(!this.mousewheel.enabled)return!1;var e=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(e=s(this.params.mousewheel.eventsTarged)),e.off(H.event,this.mousewheel.handle),this.mousewheel.enabled=!1,!0}},G={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,i=this.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=s(i.nextEl),this.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===this.$el.find(i.nextEl).length&&(e=this.$el.find(i.nextEl))),i.prevEl&&(t=s(i.prevEl),this.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===this.$el.find(i.prevEl).length&&(t=this.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",this.navigation.onNextClick),t&&t.length>0&&t.on("click",this.navigation.onPrevClick),l.extend(this.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click",this.navigation.onNextClick),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click",this.navigation.onPrevClick),i.removeClass(this.params.navigation.disabledClass))}},N={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,a=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,r=this.pagination.$el,n=this.params.loop?Math.ceil((a-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>a-1-2*this.loopedSlides&&(i-=a-2*this.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==this.params.paginationType&&(i=n+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var o,l,d,h=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=h.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),o=i-this.pagination.dynamicBulletIndex,d=((l=o+(Math.min(h.length,t.dynamicMainBullets)-1))+o)/2),h.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),r.length>1)h.each(function(e,a){var r=s(a),n=r.index();n===i&&r.addClass(t.bulletActiveClass),t.dynamicBullets&&(n>=o&&n<=l&&r.addClass(t.bulletActiveClass+"-main"),n===o&&r.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),n===l&&r.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))});else if(h.eq(i).addClass(t.bulletActiveClass),t.dynamicBullets){for(var p=h.eq(o),c=h.eq(l),u=o;u<=l;u+=1)h.eq(u).addClass(t.bulletActiveClass+"-main");p.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),c.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}if(t.dynamicBullets){var v=Math.min(h.length,t.dynamicMainBullets+4),f=(this.pagination.bulletSize*v-this.pagination.bulletSize)/2-d*this.pagination.bulletSize,m=e?"right":"left";h.css(this.isHorizontal()?m:"top",f+"px")}}if("fraction"===t.type&&(r.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),r.find("."+t.totalClass).text(t.formatFractionTotal(n))),"progressbar"===t.type){var g;g=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var b=(i+1)/n,w=1,y=1;"horizontal"===g?w=b:y=b,r.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+y+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(r.html(t.renderCustom(this,i+1,n)),this.emit("paginationRender",this,r[0])):this.emit("paginationUpdate",this,r[0]),r[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,r=0;r<a;r+=1)e.renderBullet?s+=e.renderBullet.call(this,r,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=s(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&1===e.$el.find(t.el).length&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,function(t){t.preventDefault();var i=s(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)}),l.extend(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},B={setTranslate:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=this.rtlTranslate,i=this.progress,s=e.dragSize,a=e.trackSize,r=e.$dragEl,n=e.$el,o=this.params.scrollbar,l=s,h=(a-s)*i;t?(h=-h)>0?(l=s-h,h=0):-h+s>a&&(l=a+h):h<0?(l=s+h,h=0):h+s>a&&(l=a-h),this.isHorizontal()?(d.transforms3d?r.transform("translate3d("+h+"px, 0, 0)"):r.transform("translateX("+h+"px)"),r[0].style.width=l+"px"):(d.transforms3d?r.transform("translate3d(0px, "+h+"px, 0)"):r.transform("translateY("+h+"px)"),r[0].style.height=l+"px"),o.hide&&(clearTimeout(this.scrollbar.timeout),n[0].style.opacity=1,this.scrollbar.timeout=setTimeout(function(){n[0].style.opacity=0,n.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=e.$dragEl,i=e.$el;t[0].style.width="",t[0].style.height="";var s,a=this.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=this.size/this.virtualSize,n=r*(a/this.size);s="auto"===this.params.scrollbar.dragSize?a*r:parseInt(this.params.scrollbar.dragSize,10),this.isHorizontal()?t[0].style.width=s+"px":t[0].style.height=s+"px",i[0].style.display=r>=1?"none":"",this.params.scrollbar.hide&&(i[0].style.opacity=0),l.extend(e,{trackSize:a,divider:r,moveDivider:n,dragSize:s}),e.$el[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](this.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY},setDragPosition:function(e){var t,i=this.scrollbar,s=this.rtlTranslate,a=i.$el,r=i.dragSize,n=i.trackSize,o=i.dragStartPos;t=(i.getPointerPosition(e)-a.offset()[this.isHorizontal()?"left":"top"]-(null!==o?o:r/2))/(n-r),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=this.minTranslate()+(this.maxTranslate()-this.minTranslate())*t;this.updateProgress(l),this.setTranslate(l),this.updateActiveIndex(),this.updateSlidesClasses()},onDragStart:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el,r=i.$dragEl;this.scrollbar.isTouched=!0,this.scrollbar.dragStartPos=e.target===r[0]||e.target===r?i.getPointerPosition(e)-e.target.getBoundingClientRect()[this.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(this.scrollbar.dragTimeout),a.transition(0),t.hide&&a.css("opacity",1),this.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,i=this.$wrapperEl,s=t.$el,a=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),i.transition(0),s.transition(0),a.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this.params.scrollbar,i=this.scrollbar.$el;this.scrollbar.isTouched&&(this.scrollbar.isTouched=!1,t.hide&&(clearTimeout(this.scrollbar.dragTimeout),this.scrollbar.dragTimeout=l.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideToClosest())},enableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!d.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},o=!(!d.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};d.touch?(r.addEventListener(i.start,this.scrollbar.onDragStart,n),r.addEventListener(i.move,this.scrollbar.onDragMove,n),r.addEventListener(i.end,this.scrollbar.onDragEnd,o)):(r.addEventListener(s.start,this.scrollbar.onDragStart,n),e.addEventListener(s.move,this.scrollbar.onDragMove,n),e.addEventListener(s.end,this.scrollbar.onDragEnd,o))}},disableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!d.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},o=!(!d.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};d.touch?(r.removeEventListener(i.start,this.scrollbar.onDragStart,n),r.removeEventListener(i.move,this.scrollbar.onDragMove,n),r.removeEventListener(i.end,this.scrollbar.onDragEnd,o)):(r.removeEventListener(s.start,this.scrollbar.onDragStart,n),e.removeEventListener(s.move,this.scrollbar.onDragMove,n),e.removeEventListener(s.end,this.scrollbar.onDragEnd,o))}},init:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.$el,i=this.params.scrollbar,a=s(i.el);this.params.uniqueNavElements&&"string"==typeof i.el&&a.length>1&&1===t.find(i.el).length&&(a=t.find(i.el));var r=a.find("."+this.params.scrollbar.dragClass);0===r.length&&(r=s('<div class="'+this.params.scrollbar.dragClass+'"></div>'),a.append(r)),l.extend(e,{$el:a,el:a[0],$dragEl:r,dragEl:r[0]}),i.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},X={setTransform:function(e,t){var i=this.rtl,a=s(e),r=i?-1:1,n=a.attr("data-swiper-parallax")||"0",o=a.attr("data-swiper-parallax-x"),l=a.attr("data-swiper-parallax-y"),d=a.attr("data-swiper-parallax-scale"),h=a.attr("data-swiper-parallax-opacity");if(o||l?(o=o||"0",l=l||"0"):this.isHorizontal()?(o=n,l="0"):(l=n,o="0"),o=o.indexOf("%")>=0?parseInt(o,10)*t*r+"%":o*t*r+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",null!=h){var p=h-(h-1)*(1-Math.abs(t));a[0].style.opacity=p}if(null==d)a.transform("translate3d("+o+", "+l+", 0px)");else{var c=d-(d-1)*(1-Math.abs(t));a.transform("translate3d("+o+", "+l+", 0px) scale("+c+")")}},setTranslate:function(){var e=this,t=e.$el,i=e.slides,a=e.progress,r=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t,i){e.parallax.setTransform(i,a)}),i.each(function(t,i){var n=i.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(t/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t,i){e.parallax.setTransform(i,n)})})},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t,i){var a=s(i),r=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),a.transition(r)})}},V={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,a=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(a-i,2))},onGestureStart:function(e){var t=this.params.zoom,i=this.zoom,a=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!d.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,a.scaleStart=V.getDistanceBetweenTouches(e)}a.$slideEl&&a.$slideEl.length||(a.$slideEl=s(e.target).closest(".swiper-slide"),0===a.$slideEl.length&&(a.$slideEl=this.slides.eq(this.activeIndex)),a.$imageEl=a.$slideEl.find("img, svg, canvas"),a.$imageWrapEl=a.$imageEl.parent("."+t.containerClass),a.maxRatio=a.$imageWrapEl.attr("data-swiper-zoom")||t.maxRatio,0!==a.$imageWrapEl.length)?(a.$imageEl.transition(0),this.zoom.isScaling=!0):a.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!d.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=V.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(d.gestures?i.scale=e.scale*i.currentScale:i.scale=s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<t.minRatio&&(i.scale=t.minRatio+1-Math.pow(t.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!d.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!y.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),t.minRatio),s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,i=t.gesture,s=t.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(y.android&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this.zoom,i=t.gesture,s=t.image,a=t.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(this.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=l.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=l.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),this.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var r=s.width*t.scale,n=s.height*t.scale;if(!(r<i.slideWidth&&n<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-r/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-n/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!t.isScaling){if(this.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!this.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=s.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=s.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(s.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(s.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(s.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(s.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=s.touchesCurrent.x,a.prevPositionY=s.touchesCurrent.y,a.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,i=e.image,s=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);i.isTouched=!1,i.isMoved=!1;var a=300,r=300,n=s.x*a,o=i.currentX+n,l=s.y*r,d=i.currentY+l;0!==s.x&&(a=Math.abs((o-i.currentX)/s.x)),0!==s.y&&(r=Math.abs((d-i.currentY)/s.y));var h=Math.max(a,r);i.currentX=o,i.currentY=d;var p=i.width*e.scale,c=i.height*e.scale;i.minX=Math.min(t.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(t.slideHeight/2-c/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),t.$imageWrapEl.transition(h).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,i,a,r,n,o,l,d,h,p,c,u,v,f,m,g,b=this.zoom,w=this.params.zoom,y=b.gesture,x=b.image;(y.$slideEl||(y.$slideEl=this.clickedSlide?s(this.clickedSlide):this.slides.eq(this.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,i="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,i=x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(m=y.$slideEl[0].offsetWidth,g=y.$slideEl[0].offsetHeight,a=y.$slideEl.offset().left+m/2-t,r=y.$slideEl.offset().top+g/2-i,l=y.$imageEl[0].offsetWidth,d=y.$imageEl[0].offsetHeight,h=l*b.scale,p=d*b.scale,v=-(c=Math.min(m/2-h/2,0)),f=-(u=Math.min(g/2-p/2,0)),(n=a*b.scale)<c&&(n=c),n>v&&(n=v),(o=r*b.scale)<u&&(o=u),o>f&&(o=f)):(n=0,o=0),y.$imageWrapEl.transition(300).transform("translate3d("+n+"px, "+o+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this.zoom,t=this.params.zoom,i=e.gesture;i.$slideEl||(i.$slideEl=this.clickedSlide?s(this.clickedSlide):this.slides.eq(this.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+t.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(e.scale=1,e.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+t.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this.zoom;if(!e.enabled){e.enabled=!0;var t=!("touchstart"!==this.touchEvents.start||!d.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1};d.gestures?(this.$wrapperEl.on("gesturestart",".swiper-slide",e.onGestureStart,t),this.$wrapperEl.on("gesturechange",".swiper-slide",e.onGestureChange,t),this.$wrapperEl.on("gestureend",".swiper-slide",e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.on(this.touchEvents.start,".swiper-slide",e.onGestureStart,t),this.$wrapperEl.on(this.touchEvents.move,".swiper-slide",e.onGestureChange,t),this.$wrapperEl.on(this.touchEvents.end,".swiper-slide",e.onGestureEnd,t)),this.$wrapperEl.on(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove)}},disable:function(){var e=this.zoom;if(e.enabled){this.zoom.enabled=!1;var t=!("touchstart"!==this.touchEvents.start||!d.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1};d.gestures?(this.$wrapperEl.off("gesturestart",".swiper-slide",e.onGestureStart,t),this.$wrapperEl.off("gesturechange",".swiper-slide",e.onGestureChange,t),this.$wrapperEl.off("gestureend",".swiper-slide",e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.off(this.touchEvents.start,".swiper-slide",e.onGestureStart,t),this.$wrapperEl.off(this.touchEvents.move,".swiper-slide",e.onGestureChange,t),this.$wrapperEl.off(this.touchEvents.end,".swiper-slide",e.onGestureEnd,t)),this.$wrapperEl.off(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove)}}},Y={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,a=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),n=r.find("."+a.elementClass+":not(."+a.loadedClass+"):not(."+a.loadingClass+")");!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each(function(e,n){var o=s(n);o.addClass(a.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),h=o.attr("data-srcset"),p=o.attr("data-sizes");i.loadImage(o[0],d||l,h,p,!1,function(){if(null!=i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(h&&(o.attr("srcset",h),o.removeAttr("data-srcset")),p&&(o.attr("sizes",p),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(a.loadedClass).removeClass(a.loadingClass),r.find("."+a.preloaderClass).remove(),i.params.loop&&t){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var s=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(s.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0])}}),i.emit("lazyImageLoad",r[0],o[0])})}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,a=e.slides,r=e.activeIndex,n=e.virtual&&i.virtual.enabled,o=i.lazy,l=i.slidesPerView;function d(e){if(n){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(a[e])return!0;return!1}function h(e){return n?s(e).attr("data-swiper-slide-index"):s(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each(function(t,i){var a=n?s(i).attr("data-swiper-slide-index"):s(i).index();e.lazy.loadInSlide(a)});else if(l>1)for(var p=r;p<r+l;p+=1)d(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(r);if(o.loadPrevNext)if(l>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){for(var c=o.loadPrevNextAmount,u=l,v=Math.min(r+u+Math.max(c,u),a.length),f=Math.max(r-Math.max(u,c),0),m=r+l;m<v;m+=1)d(m)&&e.lazy.loadInSlide(m);for(var g=f;g<r;g+=1)d(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+i.slideNextClass);b.length>0&&e.lazy.loadInSlide(h(b));var w=t.children("."+i.slidePrevClass);w.length>0&&e.lazy.loadInSlide(h(w))}}},F={LinearSpline:function(e,t){var i,s,a,r,n,o=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new F.LinearSpline(this.slidesGrid,e.slidesGrid):new F.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,r=a.controller.control;function n(e){var t=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof C&&n(r[o]);else r instanceof C&&t!==r&&n(r)},setTransition:function(e,t){var i,s=this,a=s.controller.control;function r(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.params.autoHeight&&l.nextTick(function(){t.updateAutoHeight()}),t.$wrapperEl.transitionEnd(function(){a&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())}))}if(Array.isArray(a))for(i=0;i<a.length;i+=1)a[i]!==t&&a[i]instanceof C&&r(a[i]);else a instanceof C&&t!==a&&r(a)}},R={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=s(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?this.a11y.disableEl(i):this.a11y.enableEl(i)),t&&t.length>0&&(this.isEnd?this.a11y.disableEl(t):this.a11y.enableEl(t))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each(function(i,a){var r=s(a);e.a11y.makeElFocusable(r),e.a11y.addElRole(r,"button"),e.a11y.addElLabel(r,t.paginationBulletMessage.replace(/{{index}}/,r.index()+1))})},init:function(){this.$el.append(this.a11y.liveRegion);var e,t,i=this.params.a11y;this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&(this.a11y.makeElFocusable(e),this.a11y.addElRole(e,"button"),this.a11y.addElLabel(e,i.nextSlideMessage),e.on("keydown",this.a11y.onEnterKey)),t&&(this.a11y.makeElFocusable(t),this.a11y.addElRole(t,"button"),this.a11y.addElLabel(t,i.prevSlideMessage),t.on("keydown",this.a11y.onEnterKey)),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.on("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},q={init:function(){if(this.params.history){if(!t.history||!t.history.pushState)return this.params.history.enabled=!1,void(this.params.hashNavigation.enabled=!0);var e=this.history;e.initialized=!0,e.paths=q.getPathValues(),(e.paths.key||e.paths.value)&&(e.scrollToSlide(0,e.paths.value,this.params.runCallbacksOnInit),this.params.history.replaceState||t.addEventListener("popstate",this.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||t.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=q.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=t.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),i=e.length;return{key:e[i-2],value:e[i-1]}},setHistory:function(e,i){if(this.history.initialized&&this.params.history.enabled){var s=this.slides.eq(i),a=q.slugify(s.attr("data-history"));t.location.pathname.includes(e)||(a=e+"/"+a);var r=t.history.state;r&&r.value===a||(this.params.history.replaceState?t.history.replaceState({value:a},null,a):t.history.pushState({value:a},null,a))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,i){if(t)for(var s=0,a=this.slides.length;s<a;s+=1){var r=this.slides.eq(s);if(q.slugify(r.attr("data-history"))===t&&!r.hasClass(this.params.slideDuplicateClass)){var n=r.index();this.slideTo(n,e,i)}}else this.slideTo(0,e,i)}},W={onHashCange:function(){var t=e.location.hash.replace("#","");if(t!==this.slides.eq(this.activeIndex).attr("data-hash")){var i=this.$wrapperEl.children("."+this.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===i)return;this.slideTo(i)}},setHash:function(){if(this.hashNavigation.initialized&&this.params.hashNavigation.enabled)if(this.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+this.slides.eq(this.activeIndex).attr("data-hash")||"");else{var i=this.slides.eq(this.activeIndex),s=i.attr("data-hash")||i.attr("data-history");e.location.hash=s||""}},init:function(){if(!(!this.params.hashNavigation.enabled||this.params.history&&this.params.history.enabled)){this.hashNavigation.initialized=!0;var i=e.location.hash.replace("#","");if(i)for(var a=0,r=this.slides.length;a<r;a+=1){var n=this.slides.eq(a);if((n.attr("data-hash")||n.attr("data-history"))===i&&!n.hasClass(this.params.slideDuplicateClass)){var o=n.index();this.slideTo(o,0,this.params.runCallbacksOnInit,!0)}}this.params.hashNavigation.watchState&&s(t).on("hashchange",this.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&s(t).off("hashchange",this.hashNavigation.onHashCange)}},j={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=l.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},i)},start:function(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function(e){this.autoplay.running&&(this.autoplay.paused||(this.autoplay.timeout&&clearTimeout(this.autoplay.timeout),this.autoplay.paused=!0,0!==e&&this.params.autoplay.waitForTransition?(this.$wrapperEl[0].addEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].addEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd)):(this.autoplay.paused=!1,this.autoplay.run())))}},U={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var r=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd(function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}})}}},K={setTranslate:function(){var e,t=this.$el,i=this.$wrapperEl,a=this.slides,r=this.width,n=this.height,o=this.rtlTranslate,l=this.size,d=this.params.cubeEffect,p=this.isHorizontal(),c=this.virtual&&this.params.virtual.enabled,u=0;d.shadow&&(p?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=t.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),t.append(e)));for(var v=0;v<a.length;v+=1){var f=a.eq(v),m=v;c&&(m=parseInt(f.attr("data-swiper-slide-index"),10));var g=90*m,b=Math.floor(g/360);o&&(g=-g,b=Math.floor(-g/360));var w=Math.max(Math.min(f[0].progress,1),-1),y=0,x=0,T=0;m%4==0?(y=4*-b*l,T=0):(m-1)%4==0?(y=0,T=4*-b*l):(m-2)%4==0?(y=l+4*b*l,T=l):(m-3)%4==0&&(y=-l,T=3*l+4*l*b),o&&(y=-y),p||(x=y,y=0);var E="rotateX("+(p?0:-g)+"deg) rotateY("+(p?g:0)+"deg) translate3d("+y+"px, "+x+"px, "+T+"px)";if(w<=1&&w>-1&&(u=90*m+90*w,o&&(u=90*-m-90*w)),f.transform(E),d.slideShadows){var S=p?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),C=p?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===S.length&&(S=s('<div class="swiper-slide-shadow-'+(p?"left":"top")+'"></div>'),f.append(S)),0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(p?"right":"bottom")+'"></div>'),f.append(C)),S.length&&(S[0].style.opacity=Math.max(-w,0)),C.length&&(C[0].style.opacity=Math.max(w,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(p)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var M=Math.abs(u)-90*Math.floor(Math.abs(u)/90),P=1.5-(Math.sin(2*M*Math.PI/360)/2+Math.cos(2*M*Math.PI/360)/2),k=d.shadowScale,z=d.shadowScale/P,$=d.shadowOffset;e.transform("scale3d("+k+", 1, "+z+") translate3d(0px, "+(n/2+$)+"px, "+-n/2/z+"px) rotateX(-90deg)")}var I=h.isSafari||h.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+I+"px) rotateX("+(this.isHorizontal()?0:u)+"deg) rotateY("+(this.isHorizontal()?-u:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},_={setTranslate:function(){for(var e=this.slides,t=this.rtlTranslate,i=0;i<e.length;i+=1){var a=e.eq(i),r=a[0].progress;this.params.flipEffect.limitRotation&&(r=Math.max(Math.min(a[0].progress,1),-1));var n=-180*r,o=0,l=-a[0].swiperSlideOffset,d=0;if(this.isHorizontal()?t&&(n=-n):(d=l,l=0,o=-n,n=0),a[0].style.zIndex=-Math.abs(Math.round(r))+e.length,this.params.flipEffect.slideShadows){var h=this.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),p=this.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");0===h.length&&(h=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),a.append(h)),0===p.length&&(p=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),a.append(p)),h.length&&(h[0].style.opacity=Math.max(-r,0)),p.length&&(p[0].style.opacity=Math.max(r,0))}a.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;i.eq(s).transitionEnd(function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}})}}},Z={setTranslate:function(){for(var e=this.width,t=this.height,i=this.slides,a=this.$wrapperEl,r=this.slidesSizesGrid,n=this.params.coverflowEffect,o=this.isHorizontal(),l=this.translate,h=o?e/2-l:t/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,v=i.length;u<v;u+=1){var f=i.eq(u),m=r[u],g=(h-f[0].swiperSlideOffset-m/2)/m*n.modifier,b=o?p*g:0,w=o?0:p*g,y=-c*Math.abs(g),x=o?0:n.stretch*g,T=o?n.stretch*g:0;Math.abs(T)<.001&&(T=0),Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0);var E="translate3d("+T+"px,"+x+"px,"+y+"px)  rotateX("+w+"deg) rotateY("+b+"deg)";if(f.transform(E),f[0].style.zIndex=1-Math.abs(Math.round(g)),n.slideShadows){var S=o?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),C=o?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===S.length&&(S=s('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),f.append(S)),0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),f.append(C)),S.length&&(S[0].style.opacity=g>0?g:0),C.length&&(C[0].style.opacity=-g>0?-g:0)}}(d.pointerEvents||d.prefixedPointerEvents)&&(a[0].style.perspectiveOrigin=h+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},Q={init:function(){var e=this.params.thumbs,t=this.constructor;e.swiper instanceof t?(this.thumbs.swiper=e.swiper,l.extend(this.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),l.extend(this.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):l.isObject(e.swiper)&&(this.thumbs.swiper=new t(l.extend({},e.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),this.thumbs.swiperCreated=!0),this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),this.thumbs.swiper.on("tap",this.thumbs.onThumbClick)},onThumbClick:function(){var e=this.thumbs.swiper;if(e){var t=e.clickedIndex,i=e.clickedSlide;if(!(i&&s(i).hasClass(this.params.thumbs.slideThumbActiveClass)||null==t)){var a;if(a=e.params.loop?parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"),10):t,this.params.loop){var r=this.activeIndex;this.slides.eq(r).hasClass(this.params.slideDuplicateClass)&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,r=this.activeIndex);var n=this.slides.eq(r).prevAll('[data-swiper-slide-index="'+a+'"]').eq(0).index(),o=this.slides.eq(r).nextAll('[data-swiper-slide-index="'+a+'"]').eq(0).index();a=void 0===n?o:void 0===o?n:o-r<r-n?o:n}this.slideTo(a)}}},update:function(e){var t=this.thumbs.swiper;if(t){var i="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():t.params.slidesPerView;if(this.realIndex!==t.realIndex){var s,a=t.activeIndex;if(t.params.loop){t.slides.eq(a).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,a=t.activeIndex);var r=t.slides.eq(a).prevAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index(),n=t.slides.eq(a).nextAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index();s=void 0===r?n:void 0===n?r:n-a==a-r?a:n-a<a-r?n:r}else s=this.realIndex;t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(s)<0&&(t.params.centeredSlides?s=s>a?s-Math.floor(i/2)+1:s+Math.floor(i/2)-1:s>a&&(s=s-i+1),t.slideTo(s,e?0:void 0))}var o=1,l=this.params.thumbs.slideThumbActiveClass;if(this.params.slidesPerView>1&&!this.params.centeredSlides&&(o=this.params.slidesPerView),t.slides.removeClass(l),t.params.loop||t.params.virtual)for(var d=0;d<o;d+=1)t.$wrapperEl.children('[data-swiper-slide-index="'+(this.realIndex+d)+'"]').addClass(l);else for(var h=0;h<o;h+=1)t.slides.eq(this.realIndex+h).addClass(l)}}},J=[M,P,k,z,I,D,A,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){l.extend(this,{mousewheel:{enabled:!1,enable:H.enable.bind(this),disable:H.disable.bind(this),handle:H.handle.bind(this),handleMouseEnter:H.handleMouseEnter.bind(this),handleMouseLeave:H.handleMouseLeave.bind(this),lastScrollTime:l.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){l.extend(this,{navigation:{init:G.init.bind(this),update:G.update.bind(this),destroy:G.destroy.bind(this),onNextClick:G.onNextClick.bind(this),onPrevClick:G.onPrevClick.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,i=this.navigation,a=i.$nextEl,r=i.$prevEl;!this.params.navigation.hideOnClick||s(e.target).is(r)||s(e.target).is(a)||(a?t=a.hasClass(this.params.navigation.hiddenClass):r&&(t=r.hasClass(this.params.navigation.hiddenClass)),!0===t?this.emit("navigationShow",this):this.emit("navigationHide",this),a&&a.toggleClass(this.params.navigation.hiddenClass),r&&r.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){l.extend(this,{pagination:{init:N.init.bind(this),render:N.render.bind(this),update:N.update.bind(this),destroy:N.destroy.bind(this),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){this.params.pagination.el&&this.params.pagination.hideOnClick&&this.pagination.$el.length>0&&!s(e.target).hasClass(this.params.pagination.bulletClass)&&(!0===this.pagination.$el.hasClass(this.params.pagination.hiddenClass)?this.emit("paginationShow",this):this.emit("paginationHide",this),this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){l.extend(this,{scrollbar:{init:B.init.bind(this),destroy:B.destroy.bind(this),updateSize:B.updateSize.bind(this),setTranslate:B.setTranslate.bind(this),setTransition:B.setTransition.bind(this),enableDraggable:B.enableDraggable.bind(this),disableDraggable:B.disableDraggable.bind(this),setDragPosition:B.setDragPosition.bind(this),getPointerPosition:B.getPointerPosition.bind(this),onDragStart:B.onDragStart.bind(this),onDragMove:B.onDragMove.bind(this),onDragEnd:B.onDragEnd.bind(this),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){l.extend(this,{parallax:{setTransform:X.setTransform.bind(this),setTranslate:X.setTranslate.bind(this),setTransition:X.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i){t[i]=V[i].bind(e)}),l.extend(e,{zoom:t});var i=1;Object.defineProperty(e.zoom,"scale",{get:function(){return i},set:function(t){if(i!==t){var s=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,a=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit("zoomChange",t,s,a)}i=t}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){l.extend(this,{lazy:{initialImageLoaded:!1,load:Y.load.bind(this),loadInSlide:Y.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){this.params.lazy.enabled&&(this.params.lazy.loadOnTransitionStart||!this.params.lazy.loadOnTransitionStart&&!this.lazy.initialImageLoaded)&&this.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){l.extend(this,{controller:{control:this.params.controller.control,getInterpolateFunction:F.getInterpolateFunction.bind(this),setTranslate:F.setTranslate.bind(this),setTransition:F.setTransition.bind(this)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var e=this;l.extend(e,{a11y:{liveRegion:s('<span class="'+e.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(R).forEach(function(t){e.a11y[t]=R[t].bind(e)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){l.extend(this,{history:{init:q.init.bind(this),setHistory:q.setHistory.bind(this),setHistoryPopState:q.setHistoryPopState.bind(this),scrollToSlide:q.scrollToSlide.bind(this),destroy:q.destroy.bind(this)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){l.extend(this,{hashNavigation:{initialized:!1,init:W.init.bind(this),destroy:W.destroy.bind(this),setHash:W.setHash.bind(this),onHashCange:W.onHashCange.bind(this)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var e=this;l.extend(e,{autoplay:{running:!1,paused:!1,run:j.run.bind(e),start:j.start.bind(e),stop:j.stop.bind(e),pause:j.pause.bind(e),onTransitionEnd:function(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===this&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){l.extend(this,{fadeEffect:{setTranslate:U.setTranslate.bind(this),setTransition:U.setTransition.bind(this)}})},on:{beforeInit:function(){if("fade"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"fade");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};l.extend(this.params,e),l.extend(this.originalParams,e)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){l.extend(this,{cubeEffect:{setTranslate:K.setTranslate.bind(this),setTransition:K.setTransition.bind(this)}})},on:{beforeInit:function(){if("cube"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"cube"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};l.extend(this.params,e),l.extend(this.originalParams,e)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){l.extend(this,{flipEffect:{setTranslate:_.setTranslate.bind(this),setTransition:_.setTransition.bind(this)}})},on:{beforeInit:function(){if("flip"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};l.extend(this.params,e),l.extend(this.originalParams,e)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){l.extend(this,{coverflowEffect:{setTranslate:Z.setTranslate.bind(this),setTransition:Z.setTransition.bind(this)}})},on:{beforeInit:function(){"coverflow"===this.params.effect&&(this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){l.extend(this,{thumbs:{swiper:null,init:Q.init.bind(this),update:Q.update.bind(this),onThumbClick:Q.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===C.use&&(C.use=C.Class.use,C.installModule=C.Class.installModule),C.use(J),C});

/**
  *
  * jPanelMenu 1.4.1 (http://jpanelmenu.com)
  * By Anthony Colangelo (http://acolangelo.com)
  *
* */
!function(a){a.jPanelMenu=function(b){"undefined"!=typeof b&&null!=b||(b={});var c={options:a.extend({menu:"#menu",panel:"body",trigger:".menu-trigger",excludedPanelContent:"style, script, .viewer",clone:!0,keepEventHandlers:!1,direction:"left",openPosition:"250px",animated:!1,closeOnContentClick:!1,keyboardShortcuts:[{code:27,open:!1,close:!0},{code:37,open:!1,close:!0},{code:39,open:!0,close:!0},{code:77,open:!0,close:!0}],duration:150,openDuration:b.duration||150,closeDuration:b.duration||150,easing:"ease-in-out",openEasing:b.easing||"ease-in-out",closeEasing:b.easing||"ease-in-out",before:function(){},beforeOpen:function(){},beforeClose:function(){},after:function(){},afterOpen:function(){},afterClose:function(){},beforeOn:function(){},afterOn:function(){},beforeOff:function(){},afterOff:function(){}},b),settings:{transitionsSupported:"WebkitTransition"in document.body.style||"MozTransition"in document.body.style||"msTransition"in document.body.style||"OTransition"in document.body.style||"Transition"in document.body.style,transformsSupported:"WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"Transform"in document.body.style,cssPrefix:"",panelPosition:"static",positionUnits:"px"},menu:"#jPanelMenu-menu",panel:".jPanelMenu-panel",timeouts:{},clearTimeouts:function(){clearTimeout(c.timeouts.open),clearTimeout(c.timeouts.afterOpen),clearTimeout(c.timeouts.afterClose)},setPositionUnits:function(){for(var a=!1,b=["%","px","em"],d=0;d<b.length;d++){var e=b[d];c.options.openPosition.toString().substr(-e.length)==e&&(a=!0,c.settings.positionUnits=e)}a||(c.options.openPosition=parseInt(c.options.openPosition)+c.settings.positionUnits)},computePositionStyle:function(a,b){var d=a?c.options.openPosition:"0"+c.settings.positionUnits,e={};if(c.settings.transformsSupported){var f=a&&"right"==c.options.direction?"-":"",g="translate3d("+f+d+",0,0)",h="transform";b?(e="",""!=c.settings.cssPrefix&&(e=c.settings.cssPrefix+h+":"+g+";"),e+=h+":"+g+";"):(""!=c.settings.cssPrefix&&(e[c.settings.cssPrefix+h]=g),e[h]=g)}else b?(e="",e=c.options.direction+": "+d+";"):e[c.options.direction]=d;return e},setCSSPrefix:function(){c.settings.cssPrefix=c.getCSSPrefix()},setjPanelMenuStyles:function(){var b="background:#fff",d=a("html").css("background-color"),e=a("body").css("background-color"),f=function(b){var c=[];return a.each(["background-color","background-image","background-position","background-repeat","background-attachment","background-size","background-clip"],function(a,d){""!==b.css(d)&&c.push(d+":"+b.css(d))}),c.join(";")};"transparent"!==e&&"rgba(0, 0, 0, 0)"!==e?b=f(a("body")):"transparent"!==d&&"rgba(0, 0, 0, 0)"!==d&&(b=f(a("html"))),0==a("#jPanelMenu-style-master").length&&a("body").append('<style id="jPanelMenu-style-master">body{width:100%}.jPanelMenu,body{overflow-x:hidden}#jPanelMenu-menu{display:block;position:fixed;top:0;'+c.options.direction+":0;height:100%;z-index:-1;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch}.jPanelMenu-panel{position:static;"+c.options.direction+":0;top:0;z-index:2;width:100%;min-height:100%;"+b+";}</style>")},setMenuState:function(b){var d=b?"open":"closed";a(c.options.panel).attr("data-menu-position",d)},getMenuState:function(){return a(c.options.panel).attr("data-menu-position")},menuIsOpen:function(){return"open"==c.getMenuState()},setMenuStyle:function(b){a(c.menu).css(b)},setPanelStyle:function(b){a(c.panel).css(b)},showMenu:function(){c.setMenuStyle({display:"block"}),c.setMenuStyle({"z-index":"1"})},hideMenu:function(){c.setMenuStyle({"z-index":"-1"}),c.setMenuStyle({display:"none"})},enableTransitions:function(b,d){var e=b/1e3,f=c.getCSSEasingFunction(d);c.disableTransitions(),a("body").append('<style id="jPanelMenu-style-transitions">.jPanelMenu-panel{'+c.settings.cssPrefix+"transition: all "+e+"s "+f+"; transition: all "+e+"s "+f+";}</style>")},disableTransitions:function(){a("#jPanelMenu-style-transitions").remove()},getCSSEasingFunction:function(a){switch(a){case"linear":return a;case"ease":return a;case"ease-in":return a;case"ease-out":return a;case"ease-in-out":return a;default:return"ease-in-out"}},getJSEasingFunction:function(a){switch(a){case"linear":return a;default:return"swing"}},getVendorPrefix:function(){if("result"in arguments.callee)return arguments.callee.result;var a=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,b=document.getElementsByTagName("script")[0];for(var c in b.style)if(a.test(c))return arguments.callee.result=c.match(a)[0];return"WebkitOpacity"in b.style?arguments.callee.result="Webkit":"KhtmlOpacity"in b.style?arguments.callee.result="Khtml":arguments.callee.result=""},getCSSPrefix:function(){var a=c.getVendorPrefix();return""!=a?"-"+a.toLowerCase()+"-":""},openMenu:function(b){"undefined"!=typeof b&&null!=b||(b=c.options.animated),c.clearTimeouts(),c.options.before(),c.options.beforeOpen(),c.setMenuState(!0),c.showMenu();var d={none:!b,transitions:!(!b||!c.settings.transitionsSupported)};if(d.transitions||d.none){d.none&&c.disableTransitions(),d.transitions&&c.enableTransitions(c.options.openDuration,c.options.openEasing);var e=c.computePositionStyle(!0);c.setPanelStyle(e),c.timeouts.afterOpen=setTimeout(function(){c.options.after(),c.options.afterOpen(),c.initiateContentClickListeners()},c.options.openDuration)}else{var f=c.getJSEasingFunction(c.options.openEasing),g={};g[c.options.direction]=c.options.openPosition,a(c.panel).stop().animate(g,c.options.openDuration,f,function(){c.options.after(),c.options.afterOpen(),c.initiateContentClickListeners()})}},closeMenu:function(b){"undefined"!=typeof b&&null!=b||(b=c.options.animated),c.clearTimeouts(),c.options.before(),c.options.beforeClose(),c.setMenuState(!1);var d={none:!b,transitions:!(!b||!c.settings.transitionsSupported)};if(d.transitions||d.none){d.none&&c.disableTransitions(),d.transitions&&c.enableTransitions(c.options.closeDuration,c.options.closeEasing);var e=c.computePositionStyle();c.setPanelStyle(e),c.timeouts.afterClose=setTimeout(function(){c.disableTransitions(),c.hideMenu(),c.options.after(),c.options.afterClose(),c.destroyContentClickListeners()},c.options.closeDuration)}else{var f=c.getJSEasingFunction(c.options.closeEasing),g={};g[c.options.direction]=0+c.settings.positionUnits,a(c.panel).stop().animate(g,c.options.closeDuration,f,function(){c.hideMenu(),c.options.after(),c.options.afterClose(),c.destroyContentClickListeners()})}},triggerMenu:function(a){c.menuIsOpen()?c.closeMenu(a):c.openMenu(a)},initiateClickListeners:function(){a(document).on("click touchend",c.options.trigger,function(a){c.triggerMenu(c.options.animated),a.preventDefault()})},destroyClickListeners:function(){a(document).off("click touchend",c.options.trigger,null)},initiateContentClickListeners:function(){return!!c.options.closeOnContentClick&&void a(document).on("click touchend",c.panel,function(a){c.menuIsOpen()&&c.closeMenu(c.options.animated),a.preventDefault()})},destroyContentClickListeners:function(){return!!c.options.closeOnContentClick&&void a(document).off("click touchend",c.panel,null)},initiateKeyboardListeners:function(){var b=["input","textarea","select"];a(document).on("keydown",function(d){var e=a(d.target),f=!1;if(a.each(b,function(){e.is(this.toString())&&(f=!0)}),f)return!0;for(mapping in c.options.keyboardShortcuts)if(d.which==c.options.keyboardShortcuts[mapping].code){var g=c.options.keyboardShortcuts[mapping];g.open&&g.close?c.triggerMenu(c.options.animated):!g.open||g.close||c.menuIsOpen()?!g.open&&g.close&&c.menuIsOpen()&&c.closeMenu(c.options.animated):c.openMenu(c.options.animated),d.preventDefault()}})},destroyKeyboardListeners:function(){a(document).off("keydown",null)},setupMarkup:function(){a("html").addClass("jPanelMenu"),a(c.options.panel+" > *").not(c.menu+", "+c.options.excludedPanelContent).wrapAll('<div class="'+c.panel.replace(".","")+'"/>');var b=c.options.clone?a(c.options.menu).clone(c.options.keepEventHandlers):a(c.options.menu);b.attr("id",c.menu.replace("#","")).insertAfter(c.options.panel+" > "+c.panel)},resetMarkup:function(){a("html").removeClass("jPanelMenu"),a(c.options.panel+" > "+c.panel+" > *").unwrap(),a(c.menu).remove()},init:function(){c.options.beforeOn(),c.setPositionUnits(),c.setCSSPrefix(),c.initiateClickListeners(),"[object Array]"===Object.prototype.toString.call(c.options.keyboardShortcuts)&&c.initiateKeyboardListeners(),c.setjPanelMenuStyles(),c.setMenuState(!1),c.setupMarkup(),c.setPanelStyle({position:c.options.animated&&"static"===c.settings.panelPosition?"relative":c.settings.panelPosition}),c.setMenuStyle({width:c.options.openPosition}),c.closeMenu(!1),c.options.afterOn()},destroy:function(){c.options.beforeOff(),c.closeMenu(),c.destroyClickListeners(),"[object Array]"===Object.prototype.toString.call(c.options.keyboardShortcuts)&&c.destroyKeyboardListeners(),c.resetMarkup();var a={};a[c.options.direction]="auto",c.options.afterOff()}};return{on:c.init,off:c.destroy,trigger:c.triggerMenu,open:c.openMenu,close:c.closeMenu,isOpen:c.menuIsOpen,menu:c.menu,getMenu:function(){return a(c.menu)},panel:c.panel,getPanel:function(){return a(c.panel)},setPosition:function(a){"undefined"!=typeof a&&null!=a||(a=c.options.openPosition),c.options.openPosition=a,c.setMenuStyle({width:c.options.openPosition})}}}}(jQuery);

// jquery.slicknav.min.js
/*!
    SlickNav Responsive Mobile Menu v1.0.2
    (c) 2015 Josh Cope
    licensed under MIT
*/
!function(n,e){function t(e,t){this.element=e,this.settings=n.extend({},a,t),this._defaults=a,this._name=i,this.init()}var a={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,brand:"",init:function(){},open:function(){},close:function(){}},i="slicknav",s="slicknav";t.prototype.init=function(){var t,a,i=this,l=n(this.element),o=this.settings;if(o.duplicate?(i.mobileNav=l.clone(),i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each(function(e,t){n(t).removeAttr("id")})):i.mobileNav=l,t=s+"_icon",""===o.label&&(t+=" "+s+"_no-text"),"a"==o.parentTag&&(o.parentTag='a href="#"'),i.mobileNav.attr("class",s+"_nav"),a=n('<div class="'+s+'_menu"></div>'),""!==o.brand){var r=n('<div class="'+s+'_brand">'+o.brand+"</div>");n(a).append(r)}i.btn=n(["<"+o.parentTag+' aria-haspopup="true" tabindex="0" class="'+s+"_btn "+s+'_collapsed">','<span class="'+s+'_menutxt">'+o.label+"</span>",'<span class="'+t+'">','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>',"</span>","</"+o.parentTag+">"].join("")),n(a).append(i.btn),n(o.prependTo).prepend(a),a.append(i.mobileNav);var d=i.mobileNav.find("li");n(d).each(function(){var e=n(this),t={};if(t.children=e.children("ul").attr("role","menu"),e.data("menu",t),t.children.length>0){var a=e.contents(),l=!1;nodes=[],n(a).each(function(){return n(this).is("ul")?!1:(nodes.push(this),void(n(this).is("a")&&(l=!0)))});var r=n("<"+o.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+s+'_item"/>');if(o.allowParentLinks&&!o.nestedParentLinks&&l)n(nodes).wrapAll('<span class="'+s+"_parent-link "+s+'_row"/>').parent();else{var d=n(nodes).wrapAll(r).parent();d.addClass(s+"_row")}e.addClass(s+"_collapsed"),e.addClass(s+"_parent");var c=n('<span class="'+s+'_arrow">'+o.closedSymbol+"</span>");o.allowParentLinks&&!o.nestedParentLinks&&l&&(c=c.wrap(r).parent()),n(nodes).last().after(c)}else 0===e.children().length&&e.addClass(s+"_txtnode");e.children("a").attr("role","menuitem").click(function(e){o.closeOnClick&&!n(e.target).parent().closest("li").hasClass(s+"_parent")&&n(i.btn).click()}),o.closeOnClick&&o.allowParentLinks&&(e.children("a").children("a").click(function(){n(i.btn).click()}),e.find("."+s+"_parent-link a:not(."+s+"_item)").click(function(){n(i.btn).click()}))}),n(d).each(function(){var e=n(this).data("menu");o.showChildren||i._visibilityToggle(e.children,null,!1,null,!0)}),i._visibilityToggle(i.mobileNav,null,!1,"init",!0),i.mobileNav.attr("role","menu"),n(e).mousedown(function(){i._outlines(!1)}),n(e).keyup(function(){i._outlines(!0)}),n(i.btn).click(function(n){n.preventDefault(),i._menuToggle()}),i.mobileNav.on("click","."+s+"_item",function(e){e.preventDefault(),i._itemClick(n(this))}),n(i.btn).keydown(function(n){var e=n||event;13==e.keyCode&&(n.preventDefault(),i._menuToggle())}),i.mobileNav.on("keydown","."+s+"_item",function(e){var t=e||event;13==t.keyCode&&(e.preventDefault(),i._itemClick(n(e.target)))}),o.allowParentLinks&&o.nestedParentLinks&&n("."+s+"_item a").click(function(n){n.stopImmediatePropagation()})},t.prototype._menuToggle=function(){var n=this,e=n.btn,t=n.mobileNav;e.hasClass(s+"_collapsed")?(e.removeClass(s+"_collapsed"),e.addClass(s+"_open")):(e.removeClass(s+"_open"),e.addClass(s+"_collapsed")),e.addClass(s+"_animating"),n._visibilityToggle(t,e.parent(),!0,e)},t.prototype._itemClick=function(n){var e=this,t=e.settings,a=n.data("menu");a||(a={},a.arrow=n.children("."+s+"_arrow"),a.ul=n.next("ul"),a.parent=n.parent(),a.parent.hasClass(s+"_parent-link")&&(a.parent=n.parent().parent(),a.ul=n.parent().next("ul")),n.data("menu",a)),a.parent.hasClass(s+"_collapsed")?(a.arrow.html(t.openedSymbol),a.parent.removeClass(s+"_collapsed"),a.parent.addClass(s+"_open"),a.parent.addClass(s+"_animating"),e._visibilityToggle(a.ul,a.parent,!0,n)):(a.arrow.html(t.closedSymbol),a.parent.addClass(s+"_collapsed"),a.parent.removeClass(s+"_open"),a.parent.addClass(s+"_animating"),e._visibilityToggle(a.ul,a.parent,!0,n))},t.prototype._visibilityToggle=function(e,t,a,i,l){var o=this,r=o.settings,d=o._getActionItems(e),c=0;a&&(c=r.duration),e.hasClass(s+"_hidden")?(e.removeClass(s+"_hidden"),e.slideDown(c,r.easingOpen,function(){n(i).removeClass(s+"_animating"),n(t).removeClass(s+"_animating"),l||r.open(i)}),e.attr("aria-hidden","false"),d.attr("tabindex","0"),o._setVisAttr(e,!1)):(e.addClass(s+"_hidden"),e.slideUp(c,this.settings.easingClose,function(){e.attr("aria-hidden","true"),d.attr("tabindex","-1"),o._setVisAttr(e,!0),e.hide(),n(i).removeClass(s+"_animating"),n(t).removeClass(s+"_animating"),l?"init"==i&&r.init():r.close(i)}))},t.prototype._setVisAttr=function(e,t){var a=this,i=e.children("li").children("ul").not("."+s+"_hidden");i.each(t?function(){var e=n(this);e.attr("aria-hidden","true");var i=a._getActionItems(e);i.attr("tabindex","-1"),a._setVisAttr(e,t)}:function(){var e=n(this);e.attr("aria-hidden","false");var i=a._getActionItems(e);i.attr("tabindex","0"),a._setVisAttr(e,t)})},t.prototype._getActionItems=function(n){var e=n.data("menu");if(!e){e={};var t=n.children("li"),a=t.find("a");e.links=a.add(t.find("."+s+"_item")),n.data("menu",e)}return e.links},t.prototype._outlines=function(e){e?n("."+s+"_item, ."+s+"_btn").css("outline",""):n("."+s+"_item, ."+s+"_btn").css("outline","none")},t.prototype.toggle=function(){var n=this;n._menuToggle()},t.prototype.open=function(){var n=this;n.btn.hasClass(s+"_collapsed")&&n._menuToggle()},t.prototype.close=function(){var n=this;n.btn.hasClass(s+"_open")&&n._menuToggle()},n.fn[i]=function(e){var a=arguments;if(void 0===e||"object"==typeof e)return this.each(function(){n.data(this,"plugin_"+i)||n.data(this,"plugin_"+i,new t(this,e))});if("string"==typeof e&&"_"!==e[0]&&"init"!==e){var s;return this.each(function(){var l=n.data(this,"plugin_"+i);l instanceof t&&"function"==typeof l[e]&&(s=l[e].apply(l,Array.prototype.slice.call(a,1)))}),void 0!==s?s:this}}}(jQuery,document,window);

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);


//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return sd.apply(null,arguments)}function b(a){sd=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)return!1;return!0}function f(a){return void 0===a}function g(a){return"number"==typeof a||"[object Number]"===Object.prototype.toString.call(a)}function h(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function i(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function j(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function k(a,b){for(var c in b)j(b,c)&&(a[c]=b[c]);return j(b,"toString")&&(a.toString=b.toString),j(b,"valueOf")&&(a.valueOf=b.valueOf),a}function l(a,b,c,d){return sb(a,b,c,d,!0).utc()}function m(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function n(a){return null==a._pf&&(a._pf=m()),a._pf}function o(a){if(null==a._isValid){var b=n(a),c=ud.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function p(a){var b=l(NaN);return null!=a?k(n(b),a):n(b).userInvalidated=!0,b}function q(a,b){var c,d,e;if(f(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),f(b._i)||(a._i=b._i),f(b._f)||(a._f=b._f),f(b._l)||(a._l=b._l),f(b._strict)||(a._strict=b._strict),f(b._tzm)||(a._tzm=b._tzm),f(b._isUTC)||(a._isUTC=b._isUTC),f(b._offset)||(a._offset=b._offset),f(b._pf)||(a._pf=n(b)),f(b._locale)||(a._locale=b._locale),vd.length>0)for(c=0;c<vd.length;c++)d=vd[c],e=b[d],f(e)||(a[d]=e);return a}function r(b){q(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),wd===!1&&(wd=!0,a.updateOffset(this),wd=!1)}function s(a){return a instanceof r||null!=a&&null!=a._isAMomentObject}function t(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=t(b)),c}function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function w(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function x(b,c){var d=!0;return k(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}w(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function y(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),xd[b]||(w(c),xd[b]=!0)}function z(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function A(a){var b,c;for(c in a)b=a[c],z(b)?this[c]=b:this["_"+c]=b;this._config=a,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function B(a,b){var c,e=k({},a);for(c in b)j(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},k(e[c],a[c]),k(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)j(a,c)&&!j(b,c)&&d(a[c])&&(e[c]=k({},e[c]));return e}function C(a){null!=a&&this.set(a)}function D(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return z(d)?d.call(b,c):d}function E(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function F(){return this._invalidDate}function G(a){return this._ordinal.replace("%d",a)}function H(a,b,c,d){var e=this._relativeTime[c];return z(e)?e(a,b,c,d):e.replace(/%d/i,a)}function I(a,b){var c=this._relativeTime[a>0?"future":"past"];return z(c)?c(b):c.replace(/%s/i,b)}function J(a,b){var c=a.toLowerCase();Hd[c]=Hd[c+"s"]=Hd[b]=a}function K(a){return"string"==typeof a?Hd[a]||Hd[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)j(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(a,b){Id[a]=b}function N(a){var b=[];for(var c in a)b.push({unit:c,priority:Id[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function O(b,c){return function(d){return null!=d?(Q(this,b,d),a.updateOffset(this,c),this):P(this,b)}}function P(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function Q(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function R(a){return a=K(a),z(this[a])?this[a]():this}function S(a,b){if("object"==typeof a){a=L(a);for(var c=N(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=K(a),z(this[a]))return this[a](b);return this}function T(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function U(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Md[a]=e),b&&(Md[b[0]]=function(){return T(e.apply(this,arguments),b[1],b[2])}),c&&(Md[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function V(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function W(a){var b,c,d=a.match(Jd);for(b=0,c=d.length;b<c;b++)Md[d[b]]?d[b]=Md[d[b]]:d[b]=V(d[b]);return function(b){var e,f="";for(e=0;e<c;e++)f+=z(d[e])?d[e].call(b,a):d[e];return f}}function X(a,b){return a.isValid()?(b=Y(b,a.localeData()),Ld[b]=Ld[b]||W(b),Ld[b](a)):a.localeData().invalidDate()}function Y(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Kd.lastIndex=0;d>=0&&Kd.test(a);)a=a.replace(Kd,c),Kd.lastIndex=0,d-=1;return a}function Z(a,b,c){ce[a]=z(b)?b:function(a,d){return a&&c?c:b}}function $(a,b){return j(ce,a)?ce[a](b._strict,b._locale):new RegExp(_(a))}function _(a){return aa(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function aa(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ba(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),g(b)&&(d=function(a,c){c[b]=u(a)}),c=0;c<a.length;c++)de[a[c]]=d}function ca(a,b){ba(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function da(a,b,c){null!=b&&j(de,a)&&de[a](b,c._a,c,a)}function ea(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function fa(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||oe).test(b)?"format":"standalone"][a.month()]:c(this._months)?this._months:this._months.standalone}function ga(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[oe.test(b)?"format":"standalone"][a.month()]:c(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=l([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null):(e=ne.call(this._longMonthsParse,g),e!==-1?e:null):"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:(e=ne.call(this._longMonthsParse,g),e!==-1?e:null)):(e=ne.call(this._longMonthsParse,g),e!==-1?e:(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null))}function ia(a,b,c){var d,e,f;if(this._monthsParseExact)return ha.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){if(e=l([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function ja(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=u(b);else if(b=a.localeData().monthsParse(b),!g(b))return a;return c=Math.min(a.date(),ea(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ka(b){return null!=b?(ja(this,b),a.updateOffset(this,!0),this):P(this,"Month")}function la(){return ea(this.year(),this.month())}function ma(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(j(this,"_monthsShortRegex")||(this._monthsShortRegex=re),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function na(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsStrictRegex:this._monthsRegex):(j(this,"_monthsRegex")||(this._monthsRegex=se),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function oa(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)c=l([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b]=aa(d[b]),e[b]=aa(e[b]);for(b=0;b<24;b++)f[b]=aa(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}function pa(a){return qa(a)?366:365}function qa(a){return a%4===0&&a%100!==0||a%400===0}function ra(){return qa(this.year())}function sa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ta(a){var b=new Date(Date.UTC.apply(null,arguments));return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function ua(a,b,c){var d=7+b-c,e=(7+ta(a,0,d).getUTCDay()-b)%7;return-e+d-1}function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=pa(f)+j):j>pa(a)?(f=a+1,g=j-pa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(pa(a)-d+e)/7}function ya(a){return wa(a,this._week.dow,this._week.doy).week}function za(){return this._week.dow}function Aa(){return this._week.doy}function Ba(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ca(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function Da(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Ea(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Fa(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:c(this._weekdays)?this._weekdays:this._weekdays.standalone}function Ga(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ha(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ia(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=l([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:null):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null):"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null)))}function Ja(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ia.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){if(e=l([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Da(a,this.localeData()),this.add(a-b,"d")):b}function La(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ma(a){if(!this.isValid())return null!=a?this:NaN;if(null!=a){var b=Ea(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Na(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(j(this,"_weekdaysRegex")||(this._weekdaysRegex=ye),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Oa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(j(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ze),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Pa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(j(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ae),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Qa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],j=[];for(b=0;b<7;b++)c=l([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),j.push(d),j.push(e),j.push(f);for(g.sort(a),h.sort(a),i.sort(a),j.sort(a),b=0;b<7;b++)h[b]=aa(h[b]),i[b]=aa(i[b]),j[b]=aa(j[b]);this._weekdaysRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}function Ra(){return this.hours()%12||12}function Sa(){return this.hours()||24}function Ta(a,b){U(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Ua(a,b){return b._meridiemParse}function Va(a){return"p"===(a+"").toLowerCase().charAt(0)}function Wa(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Xa(a){return a?a.toLowerCase().replace("_","-"):a}function Ya(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Xa(a[f]).split("-"),b=e.length,c=Xa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Za(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&v(e,c,!0)>=b-1)break;b--}f++}return null}function Za(a){var b=null;if(!Fe[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Be._abbr,require("./locale/"+a),$a(b)}catch(a){}return Fe[a]}function $a(a,b){var c;return a&&(c=f(b)?bb(a):_a(a,b),c&&(Be=c)),Be._abbr}function _a(a,b){if(null!==b){var c=Ee;if(b.abbr=a,null!=Fe[a])y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=Fe[a]._config;else if(null!=b.parentLocale){if(null==Fe[b.parentLocale])return Ge[b.parentLocale]||(Ge[b.parentLocale]=[]),Ge[b.parentLocale].push({name:a,config:b}),null;c=Fe[b.parentLocale]._config}return Fe[a]=new C(B(c,b)),Ge[a]&&Ge[a].forEach(function(a){_a(a.name,a.config)}),$a(a),Fe[a]}return delete Fe[a],null}function ab(a,b){if(null!=b){var c,d=Ee;null!=Fe[a]&&(d=Fe[a]._config),b=B(d,b),c=new C(b),c.parentLocale=Fe[a],Fe[a]=c,$a(a)}else null!=Fe[a]&&(null!=Fe[a].parentLocale?Fe[a]=Fe[a].parentLocale:null!=Fe[a]&&delete Fe[a]);return Fe[a]}function bb(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Be;if(!c(a)){if(b=Za(a))return b;a=[a]}return Ya(a)}function cb(){return Ad(Fe)}function db(a){var b,c=a._a;return c&&n(a).overflow===-2&&(b=c[fe]<0||c[fe]>11?fe:c[ge]<1||c[ge]>ea(c[ee],c[fe])?ge:c[he]<0||c[he]>24||24===c[he]&&(0!==c[ie]||0!==c[je]||0!==c[ke])?he:c[ie]<0||c[ie]>59?ie:c[je]<0||c[je]>59?je:c[ke]<0||c[ke]>999?ke:-1,n(a)._overflowDayOfYear&&(b<ee||b>ge)&&(b=ge),n(a)._overflowWeeks&&b===-1&&(b=le),n(a)._overflowWeekday&&b===-1&&(b=me),n(a).overflow=b),a}function eb(a){var b,c,d,e,f,g,h=a._i,i=He.exec(h)||Ie.exec(h);if(i){for(n(a).iso=!0,b=0,c=Ke.length;b<c;b++)if(Ke[b][1].exec(i[1])){e=Ke[b][0],d=Ke[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Le.length;b<c;b++)if(Le[b][1].exec(i[3])){f=(i[2]||" ")+Le[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Je.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),lb(a)}else a._isValid=!1}function fb(a){var b,c,d,e,f,g,h,i,j={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},k="YXWVUTSRQPONZABCDEFGHIKLM";if(b=a._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),c=Ne.exec(b)){if(d=c[1]?"ddd"+(5===c[1].length?", ":" "):"",e="D MMM "+(c[2].length>10?"YYYY ":"YY "),f="HH:mm"+(c[4]?":ss":""),c[1]){var l=new Date(c[2]),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][l.getDay()];if(c[1].substr(0,3)!==m)return n(a).weekdayMismatch=!0,void(a._isValid=!1)}switch(c[5].length){case 2:0===i?h=" +0000":(i=k.indexOf(c[5][1].toUpperCase())-12,h=(i<0?" -":" +")+(""+i).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:h=j[c[5]];break;default:h=j[" GMT"]}c[5]=h,a._i=c.splice(1).join(""),g=" ZZ",a._f=d+e+f+g,lb(a),n(a).rfc2822=!0}else a._isValid=!1}function gb(b){var c=Me.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(eb(b),void(b._isValid===!1&&(delete b._isValid,fb(b),b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b)))))}function hb(a,b,c){return null!=a?a:null!=b?b:c}function ib(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function jb(a){var b,c,d,e,f=[];if(!a._d){for(d=ib(a),a._w&&null==a._a[ge]&&null==a._a[fe]&&kb(a),null!=a._dayOfYear&&(e=hb(a._a[ee],d[ee]),(a._dayOfYear>pa(e)||0===a._dayOfYear)&&(n(a)._overflowDayOfYear=!0),c=ta(e,0,a._dayOfYear),a._a[fe]=c.getUTCMonth(),a._a[ge]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;b<7;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[he]&&0===a._a[ie]&&0===a._a[je]&&0===a._a[ke]&&(a._nextDay=!0,a._a[he]=0),a._d=(a._useUTC?ta:sa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[he]=24)}}function kb(a){var b,c,d,e,f,g,h,i;if(b=a._w,null!=b.GG||null!=b.W||null!=b.E)f=1,g=4,c=hb(b.GG,a._a[ee],wa(tb(),1,4).year),d=hb(b.W,1),e=hb(b.E,1),(e<1||e>7)&&(i=!0);else{f=a._locale._week.dow,g=a._locale._week.doy;var j=wa(tb(),f,g);c=hb(b.gg,a._a[ee],j.year),d=hb(b.w,j.week),null!=b.d?(e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f}d<1||d>xa(c,f,g)?n(a)._overflowWeeks=!0:null!=i?n(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[ee]=h.year,a._dayOfYear=h.dayOfYear)}function lb(b){if(b._f===a.ISO_8601)return void eb(b);if(b._f===a.RFC_2822)return void fb(b);b._a=[],n(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Y(b._f,b._locale).match(Jd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match($(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&n(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Md[f]?(d?n(b).empty=!1:n(b).unusedTokens.push(f),da(f,d,b)):b._strict&&!d&&n(b).unusedTokens.push(f);n(b).charsLeftOver=i-j,h.length>0&&n(b).unusedInput.push(h),b._a[he]<=12&&n(b).bigHour===!0&&b._a[he]>0&&(n(b).bigHour=void 0),n(b).parsedDateParts=b._a.slice(0),n(b).meridiem=b._meridiem,b._a[he]=mb(b._locale,b._a[he],b._meridiem),jb(b),db(b)}function mb(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}function nb(a){var b,c,d,e,f;if(0===a._f.length)return n(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=q({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],lb(b),o(b)&&(f+=n(b).charsLeftOver,f+=10*n(b).unusedTokens.length,n(b).score=f,(null==d||f<d)&&(d=f,c=b));k(a,c||b)}function ob(a){if(!a._d){var b=L(a._i);a._a=i([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),jb(a)}}function pb(a){var b=new r(db(qb(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function qb(a){var b=a._i,d=a._f;return a._locale=a._locale||bb(a._l),null===b||void 0===d&&""===b?p({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),s(b)?new r(db(b)):(h(b)?a._d=b:c(d)?nb(a):d?lb(a):rb(a),o(a)||(a._d=null),a))}function rb(b){var e=b._i;f(e)?b._d=new Date(a.now()):h(e)?b._d=new Date(e.valueOf()):"string"==typeof e?gb(b):c(e)?(b._a=i(e.slice(0),function(a){return parseInt(a,10)}),jb(b)):d(e)?ob(b):g(e)?b._d=new Date(e):a.createFromInputFallback(b)}function sb(a,b,f,g,h){var i={};return f!==!0&&f!==!1||(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,pb(i)}function tb(a,b,c,d){return sb(a,b,c,d,!1)}function ub(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return tb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}function vb(){var a=[].slice.call(arguments,0);return ub("isBefore",a)}function wb(){var a=[].slice.call(arguments,0);return ub("isAfter",a)}function xb(a){for(var b in a)if(Re.indexOf(b)===-1||null!=a[b]&&isNaN(a[b]))return!1;for(var c=!1,d=0;d<Re.length;++d)if(a[Re[d]]){if(c)return!1;parseFloat(a[Re[d]])!==u(a[Re[d]])&&(c=!0)}return!0}function yb(){return this._isValid}function zb(){return Sb(NaN)}function Ab(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._isValid=xb(b),this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=bb(),this._bubble()}function Bb(a){return a instanceof Ab}function Cb(a){return a<0?Math.round(-1*a)*-1:Math.round(a)}function Db(a,b){U(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+T(~~(a/60),2)+b+T(~~a%60,2)})}function Eb(a,b){var c=(b||"").match(a);if(null===c)return null;var d=c[c.length-1]||[],e=(d+"").match(Se)||["-",0,0],f=+(60*e[1])+u(e[2]);return 0===f?0:"+"===e[0]?f:-f}function Fb(b,c){var d,e;return c._isUTC?(d=c.clone(),e=(s(b)||h(b)?b.valueOf():tb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):tb(b).local()}function Gb(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Hb(b,c,d){var e,f=this._offset||0;if(!this.isValid())return null!=b?this:NaN;if(null!=b){if("string"==typeof b){if(b=Eb(_d,b),null===b)return this}else Math.abs(b)<16&&!d&&(b=60*b);return!this._isUTC&&c&&(e=Gb(this)),this._offset=b,this._isUTC=!0,null!=e&&this.add(e,"m"),f!==b&&(!c||this._changeInProgress?Xb(this,Sb(b-f,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?f:Gb(this)}function Ib(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Jb(a){return this.utcOffset(0,a)}function Kb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Gb(this),"m")),this}function Lb(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var a=Eb($d,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)}return this}function Mb(a){return!!this.isValid()&&(a=a?tb(a).utcOffset():0,(this.utcOffset()-a)%60===0)}function Nb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ob(){if(!f(this._isDSTShifted))return this._isDSTShifted;var a={};if(q(a,this),a=qb(a),a._a){var b=a._isUTC?l(a._a):tb(a._a);this._isDSTShifted=this.isValid()&&v(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Pb(){return!!this.isValid()&&!this._isUTC}function Qb(){return!!this.isValid()&&this._isUTC}function Rb(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Sb(a,b){var c,d,e,f=a,h=null;return Bb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:g(a)?(f={},b?f[b]=a:f.milliseconds=a):(h=Te.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:u(h[ge])*c,h:u(h[he])*c,m:u(h[ie])*c,s:u(h[je])*c,ms:u(Cb(1e3*h[ke]))*c}):(h=Ue.exec(a))?(c="-"===h[1]?-1:1,f={y:Tb(h[2],c),M:Tb(h[3],c),w:Tb(h[4],c),d:Tb(h[5],c),h:Tb(h[6],c),m:Tb(h[7],c),s:Tb(h[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Vb(tb(f.from),tb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new Ab(f),Bb(a)&&j(a,"_locale")&&(d._locale=a._locale),d}function Tb(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function Ub(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Vb(a,b){var c;return a.isValid()&&b.isValid()?(b=Fb(b,a),a.isBefore(b)?c=Ub(a,b):(c=Ub(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function Wb(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(y(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Sb(c,d),Xb(this,e,a),this}}function Xb(b,c,d,e){var f=c._milliseconds,g=Cb(c._days),h=Cb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&Q(b,"Date",P(b,"Date")+g*d),h&&ja(b,P(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Yb(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function Zb(b,c){var d=b||tb(),e=Fb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(z(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,tb(d)))}function $b(){return new r(this)}function _b(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function ac(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function bc(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function cc(a,b){var c,d=s(a)?a:tb(a);return!(!this.isValid()||!d.isValid())&&(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))}function dc(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function ec(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function fc(a,b,c){var d,e,f,g;return this.isValid()?(d=Fb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=gc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:t(g)):NaN):NaN}function gc(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return b-f<0?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function hc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ic(){if(!this.isValid())return null;var a=this.clone().utc();return a.year()<0||a.year()>9999?X(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):z(Date.prototype.toISOString)?this.toDate().toISOString():X(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function jc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",b="Z");var c="["+a+'("]',d=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",e="-MM-DD[T]HH:mm:ss.SSS",f=b+'[")]';return this.format(c+d+e+f)}function kc(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=X(this,b);return this.localeData().postformat(c)}function lc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function mc(a){return this.from(tb(),a)}function nc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function oc(a){return this.to(tb(),a)}function pc(a){var b;return void 0===a?this._locale._abbr:(b=bb(a),null!=b&&(this._locale=b),this)}function qc(){return this._locale}function rc(a){switch(a=K(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function sc(a){return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function tc(){return this._d.valueOf()-6e4*(this._offset||0)}function uc(){return Math.floor(this.valueOf()/1e3)}function vc(){return new Date(this.valueOf())}function wc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function xc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function yc(){return this.isValid()?this.toISOString():null}function zc(){return o(this)}function Ac(){
return k({},n(this))}function Bc(){return n(this).overflow}function Cc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Dc(a,b){U(0,[a,a.length],0,b)}function Ec(a){return Ic.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Fc(a){return Ic.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Gc(){return xa(this.year(),1,4)}function Hc(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ic(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Jc.call(this,a,b,c,d,e))}function Jc(a,b,c,d,e){var f=va(a,b,c,d,e),g=ta(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Kc(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Lc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Mc(a,b){b[ke]=u(1e3*("0."+a))}function Nc(){return this._isUTC?"UTC":""}function Oc(){return this._isUTC?"Coordinated Universal Time":""}function Pc(a){return tb(1e3*a)}function Qc(){return tb.apply(null,arguments).parseZone()}function Rc(a){return a}function Sc(a,b,c,d){var e=bb(),f=l().set(d,b);return e[c](f,a)}function Tc(a,b,c){if(g(a)&&(b=a,a=void 0),a=a||"",null!=b)return Sc(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=Sc(a,d,c,"month");return e}function Uc(a,b,c,d){"boolean"==typeof a?(g(b)&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,g(b)&&(c=b,b=void 0),b=b||"");var e=bb(),f=a?e._week.dow:0;if(null!=c)return Sc(b,(c+f)%7,d,"day");var h,i=[];for(h=0;h<7;h++)i[h]=Sc(b,(h+f)%7,d,"day");return i}function Vc(a,b){return Tc(a,b,"months")}function Wc(a,b){return Tc(a,b,"monthsShort")}function Xc(a,b,c){return Uc(a,b,c,"weekdays")}function Yc(a,b,c){return Uc(a,b,c,"weekdaysShort")}function Zc(a,b,c){return Uc(a,b,c,"weekdaysMin")}function $c(){var a=this._data;return this._milliseconds=df(this._milliseconds),this._days=df(this._days),this._months=df(this._months),a.milliseconds=df(a.milliseconds),a.seconds=df(a.seconds),a.minutes=df(a.minutes),a.hours=df(a.hours),a.months=df(a.months),a.years=df(a.years),this}function _c(a,b,c,d){var e=Sb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function ad(a,b){return _c(this,a,b,1)}function bd(a,b){return _c(this,a,b,-1)}function cd(a){return a<0?Math.floor(a):Math.ceil(a)}function dd(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*cd(fd(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=t(f/1e3),i.seconds=a%60,b=t(a/60),i.minutes=b%60,c=t(b/60),i.hours=c%24,g+=t(c/24),e=t(ed(g)),h+=e,g-=cd(fd(e)),d=t(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function ed(a){return 4800*a/146097}function fd(a){return 146097*a/4800}function gd(a){if(!this.isValid())return NaN;var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+ed(b),"month"===a?c:c/12;switch(b=this._days+Math.round(fd(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function hd(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12):NaN}function id(a){return function(){return this.as(a)}}function jd(a){return a=K(a),this.isValid()?this[a+"s"]():NaN}function kd(a){return function(){return this.isValid()?this._data[a]:NaN}}function ld(){return t(this.days()/7)}function md(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function nd(a,b,c){var d=Sb(a).abs(),e=uf(d.as("s")),f=uf(d.as("m")),g=uf(d.as("h")),h=uf(d.as("d")),i=uf(d.as("M")),j=uf(d.as("y")),k=e<=vf.ss&&["s",e]||e<vf.s&&["ss",e]||f<=1&&["m"]||f<vf.m&&["mm",f]||g<=1&&["h"]||g<vf.h&&["hh",g]||h<=1&&["d"]||h<vf.d&&["dd",h]||i<=1&&["M"]||i<vf.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,md.apply(null,k)}function od(a){return void 0===a?uf:"function"==typeof a&&(uf=a,!0)}function pd(a,b){return void 0!==vf[a]&&(void 0===b?vf[a]:(vf[a]=b,"s"===a&&(vf.ss=b-1),!0))}function qd(a){if(!this.isValid())return this.localeData().invalidDate();var b=this.localeData(),c=nd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function rd(){if(!this.isValid())return this.localeData().invalidDate();var a,b,c,d=wf(this._milliseconds)/1e3,e=wf(this._days),f=wf(this._months);a=t(d/60),b=t(a/60),d%=60,a%=60,c=t(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var sd,td;td=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var ud=td,vd=a.momentProperties=[],wd=!1,xd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var yd;yd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)j(a,b)&&c.push(b);return c};var zd,Ad=yd,Bd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Cd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Dd="Invalid date",Ed="%d",Fd=/\d{1,2}/,Gd={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Hd={},Id={},Jd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Kd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ld={},Md={},Nd=/\d/,Od=/\d\d/,Pd=/\d{3}/,Qd=/\d{4}/,Rd=/[+-]?\d{6}/,Sd=/\d\d?/,Td=/\d\d\d\d?/,Ud=/\d\d\d\d\d\d?/,Vd=/\d{1,3}/,Wd=/\d{1,4}/,Xd=/[+-]?\d{1,6}/,Yd=/\d+/,Zd=/[+-]?\d+/,$d=/Z|[+-]\d\d:?\d\d/gi,_d=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[+-]?\d+(\.\d{1,3})?/,be=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ce={},de={},ee=0,fe=1,ge=2,he=3,ie=4,je=5,ke=6,le=7,me=8;zd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1};var ne=zd;U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),U("MMMM",0,0,function(a){return this.localeData().months(this,a)}),J("month","M"),M("month",8),Z("M",Sd),Z("MM",Sd,Od),Z("MMM",function(a,b){return b.monthsShortRegex(a)}),Z("MMMM",function(a,b){return b.monthsRegex(a)}),ba(["M","MM"],function(a,b){b[fe]=u(a)-1}),ba(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[fe]=e:n(c).invalidMonth=a});var oe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,pe="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),qe="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),re=be,se=be;U("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),J("year","y"),M("year",1),Z("Y",Zd),Z("YY",Sd,Od),Z("YYYY",Wd,Qd),Z("YYYYY",Xd,Rd),Z("YYYYYY",Xd,Rd),ba(["YYYYY","YYYYYY"],ee),ba("YYYY",function(b,c){c[ee]=2===b.length?a.parseTwoDigitYear(b):u(b)}),ba("YY",function(b,c){c[ee]=a.parseTwoDigitYear(b)}),ba("Y",function(a,b){b[ee]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)};var te=O("FullYear",!0);U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),J("week","w"),J("isoWeek","W"),M("week",5),M("isoWeek",5),Z("w",Sd),Z("ww",Sd,Od),Z("W",Sd),Z("WW",Sd,Od),ca(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=u(a)});var ue={dow:0,doy:6};U("d",0,"do","day"),U("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),U("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),U("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),J("day","d"),J("weekday","e"),J("isoWeekday","E"),M("day",11),M("weekday",11),M("isoWeekday",11),Z("d",Sd),Z("e",Sd),Z("E",Sd),Z("dd",function(a,b){return b.weekdaysMinRegex(a)}),Z("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Z("dddd",function(a,b){return b.weekdaysRegex(a)}),ca(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:n(c).invalidWeekday=a}),ca(["d","e","E"],function(a,b,c,d){b[d]=u(a)});var ve="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),we="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),xe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ye=be,ze=be,Ae=be;U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Ra),U("k",["kk",2],0,Sa),U("hmm",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ta("a",!0),Ta("A",!1),J("hour","h"),M("hour",13),Z("a",Ua),Z("A",Ua),Z("H",Sd),Z("h",Sd),Z("k",Sd),Z("HH",Sd,Od),Z("hh",Sd,Od),Z("kk",Sd,Od),Z("hmm",Td),Z("hmmss",Ud),Z("Hmm",Td),Z("Hmmss",Ud),ba(["H","HH"],he),ba(["k","kk"],function(a,b,c){var d=u(a);b[he]=24===d?0:d}),ba(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),ba(["h","hh"],function(a,b,c){b[he]=u(a),n(c).bigHour=!0}),ba("hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d)),n(c).bigHour=!0}),ba("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e)),n(c).bigHour=!0}),ba("Hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d))}),ba("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e))});var Be,Ce=/[ap]\.?m?\.?/i,De=O("Hours",!0),Ee={calendar:Bd,longDateFormat:Cd,invalidDate:Dd,ordinal:Ed,dayOfMonthOrdinalParse:Fd,relativeTime:Gd,months:pe,monthsShort:qe,week:ue,weekdays:ve,weekdaysMin:xe,weekdaysShort:we,meridiemParse:Ce},Fe={},Ge={},He=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ie=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Je=/Z|[+-]\d\d(?::?\d\d)?/,Ke=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Le=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Me=/^\/?Date\((\-?\d+)/i,Ne=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;a.createFromInputFallback=x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),a.ISO_8601=function(){},a.RFC_2822=function(){};var Oe=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:p()}),Pe=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:p()}),Qe=function(){return Date.now?Date.now():+new Date},Re=["year","quarter","month","week","day","hour","minute","second","millisecond"];Db("Z",":"),Db("ZZ",""),Z("Z",_d),Z("ZZ",_d),ba(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Eb(_d,a)});var Se=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var Te=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ue=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Sb.fn=Ab.prototype,Sb.invalid=zb;var Ve=Wb(1,"add"),We=Wb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xe=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Dc("gggg","weekYear"),Dc("ggggg","weekYear"),Dc("GGGG","isoWeekYear"),Dc("GGGGG","isoWeekYear"),J("weekYear","gg"),J("isoWeekYear","GG"),M("weekYear",1),M("isoWeekYear",1),Z("G",Zd),Z("g",Zd),Z("GG",Sd,Od),Z("gg",Sd,Od),Z("GGGG",Wd,Qd),Z("gggg",Wd,Qd),Z("GGGGG",Xd,Rd),Z("ggggg",Xd,Rd),ca(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=u(a)}),ca(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),U("Q",0,"Qo","quarter"),J("quarter","Q"),M("quarter",7),Z("Q",Nd),ba("Q",function(a,b){b[fe]=3*(u(a)-1)}),U("D",["DD",2],"Do","date"),J("date","D"),M("date",9),Z("D",Sd),Z("DD",Sd,Od),Z("Do",function(a,b){return a?b._dayOfMonthOrdinalParse||b._ordinalParse:b._dayOfMonthOrdinalParseLenient}),ba(["D","DD"],ge),ba("Do",function(a,b){b[ge]=u(a.match(Sd)[0],10)});var Ye=O("Date",!0);U("DDD",["DDDD",3],"DDDo","dayOfYear"),J("dayOfYear","DDD"),M("dayOfYear",4),Z("DDD",Vd),Z("DDDD",Pd),ba(["DDD","DDDD"],function(a,b,c){c._dayOfYear=u(a)}),U("m",["mm",2],0,"minute"),J("minute","m"),M("minute",14),Z("m",Sd),Z("mm",Sd,Od),ba(["m","mm"],ie);var Ze=O("Minutes",!1);U("s",["ss",2],0,"second"),J("second","s"),M("second",15),Z("s",Sd),Z("ss",Sd,Od),ba(["s","ss"],je);var $e=O("Seconds",!1);U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),J("millisecond","ms"),M("millisecond",16),Z("S",Vd,Nd),Z("SS",Vd,Od),Z("SSS",Vd,Pd);var _e;for(_e="SSSS";_e.length<=9;_e+="S")Z(_e,Yd);for(_e="S";_e.length<=9;_e+="S")ba(_e,Mc);var af=O("Milliseconds",!1);U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var bf=r.prototype;bf.add=Ve,bf.calendar=Zb,bf.clone=$b,bf.diff=fc,bf.endOf=sc,bf.format=kc,bf.from=lc,bf.fromNow=mc,bf.to=nc,bf.toNow=oc,bf.get=R,bf.invalidAt=Bc,bf.isAfter=_b,bf.isBefore=ac,bf.isBetween=bc,bf.isSame=cc,bf.isSameOrAfter=dc,bf.isSameOrBefore=ec,bf.isValid=zc,bf.lang=Xe,bf.locale=pc,bf.localeData=qc,bf.max=Pe,bf.min=Oe,bf.parsingFlags=Ac,bf.set=S,bf.startOf=rc,bf.subtract=We,bf.toArray=wc,bf.toObject=xc,bf.toDate=vc,bf.toISOString=ic,bf.inspect=jc,bf.toJSON=yc,bf.toString=hc,bf.unix=uc,bf.valueOf=tc,bf.creationData=Cc,bf.year=te,bf.isLeapYear=ra,bf.weekYear=Ec,bf.isoWeekYear=Fc,bf.quarter=bf.quarters=Kc,bf.month=ka,bf.daysInMonth=la,bf.week=bf.weeks=Ba,bf.isoWeek=bf.isoWeeks=Ca,bf.weeksInYear=Hc,bf.isoWeeksInYear=Gc,bf.date=Ye,bf.day=bf.days=Ka,bf.weekday=La,bf.isoWeekday=Ma,bf.dayOfYear=Lc,bf.hour=bf.hours=De,bf.minute=bf.minutes=Ze,bf.second=bf.seconds=$e,bf.millisecond=bf.milliseconds=af,bf.utcOffset=Hb,bf.utc=Jb,bf.local=Kb,bf.parseZone=Lb,bf.hasAlignedHourOffset=Mb,bf.isDST=Nb,bf.isLocal=Pb,bf.isUtcOffset=Qb,bf.isUtc=Rb,bf.isUTC=Rb,bf.zoneAbbr=Nc,bf.zoneName=Oc,bf.dates=x("dates accessor is deprecated. Use date instead.",Ye),bf.months=x("months accessor is deprecated. Use month instead",ka),bf.years=x("years accessor is deprecated. Use year instead",te),bf.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ib),bf.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ob);var cf=C.prototype;cf.calendar=D,cf.longDateFormat=E,cf.invalidDate=F,cf.ordinal=G,cf.preparse=Rc,cf.postformat=Rc,cf.relativeTime=H,cf.pastFuture=I,cf.set=A,cf.months=fa,cf.monthsShort=ga,cf.monthsParse=ia,cf.monthsRegex=na,cf.monthsShortRegex=ma,cf.week=ya,cf.firstDayOfYear=Aa,cf.firstDayOfWeek=za,cf.weekdays=Fa,cf.weekdaysMin=Ha,cf.weekdaysShort=Ga,cf.weekdaysParse=Ja,cf.weekdaysRegex=Na,cf.weekdaysShortRegex=Oa,cf.weekdaysMinRegex=Pa,cf.isPM=Va,cf.meridiem=Wa,$a("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=x("moment.lang is deprecated. Use moment.locale instead.",$a),a.langData=x("moment.langData is deprecated. Use moment.localeData instead.",bb);var df=Math.abs,ef=id("ms"),ff=id("s"),gf=id("m"),hf=id("h"),jf=id("d"),kf=id("w"),lf=id("M"),mf=id("y"),nf=kd("milliseconds"),of=kd("seconds"),pf=kd("minutes"),qf=kd("hours"),rf=kd("days"),sf=kd("months"),tf=kd("years"),uf=Math.round,vf={ss:44,s:45,m:45,h:22,d:26,M:11},wf=Math.abs,xf=Ab.prototype;return xf.isValid=yb,xf.abs=$c,xf.add=ad,xf.subtract=bd,xf.as=gd,xf.asMilliseconds=ef,xf.asSeconds=ff,xf.asMinutes=gf,xf.asHours=hf,xf.asDays=jf,xf.asWeeks=kf,xf.asMonths=lf,xf.asYears=mf,xf.valueOf=hd,xf._bubble=dd,xf.get=jd,xf.milliseconds=nf,xf.seconds=of,xf.minutes=pf,xf.hours=qf,xf.days=rf,xf.weeks=ld,xf.months=sf,xf.years=tf,xf.humanize=qd,xf.toISOString=rd,xf.toString=rd,xf.toJSON=rd,xf.locale=pc,xf.localeData=qc,xf.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",rd),xf.lang=Xe,U("X",0,0,"unix"),U("x",0,0,"valueOf"),Z("x",Zd),Z("X",ae),ba("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),ba("x",function(a,b,c){c._d=new Date(u(a))}),a.version="2.18.1",b(tb),a.fn=bf,a.min=vb,a.max=wb,a.now=Qe,a.utc=l,a.unix=Pc,a.months=Vc,a.isDate=h,a.locale=$a,a.invalid=p,a.duration=Sb,a.isMoment=s,a.weekdays=Xc,a.parseZone=Qc,a.localeData=bb,a.isDuration=Bb,a.monthsShort=Wc,a.weekdaysMin=Zc,a.defineLocale=_a,a.updateLocale=ab,a.locales=cb,a.weekdaysShort=Yc,a.normalizeUnits=K,a.relativeTimeRounding=od,a.relativeTimeThreshold=pd,a.calendarFormat=Yb,a.prototype=bf,a});

// Wickedpicker
!function($,window,document){"use strict";function Wickedpicker(e,t){this.element=$(e),this.options=$.extend({},defaults,t),this.element.addClass("hasWickedpicker"),this.element.attr("onkeypress","return false;"),this.element.attr("aria-showingpicker","false"),this.createPicker(),this.timepicker=$(".wickedpicker"),this.up=$("."+this.options.upArrow),this.down=$("."+this.options.downArrow),this.separator=$(".wickedpicker__controls__control--separator"),this.hoursElem=$(".wickedpicker__controls__control--hours"),this.minutesElem=$(".wickedpicker__controls__control--minutes"),this.secondsElem=$(".wickedpicker__controls__control--seconds"),this.meridiemElem=$(".wickedpicker__controls__control--meridiem"),this.close=$("."+this.options.close);var i=this.timeArrayFromString(this.options.now);this.options.now=new Date(today.getFullYear(),today.getMonth(),today.getDate(),i[0],i[1],i[2]),this.selectedHour=this.parseHours(this.options.now.getHours()),this.selectedMin=this.parseSecMin(this.options.now.getMinutes()),this.selectedSec=this.parseSecMin(this.options.now.getSeconds()),this.selectedMeridiem=this.parseMeridiem(this.options.now.getHours()),this.setHoverState(),this.attach(e),this.setText(e)}"function"!=typeof String.prototype.endsWith&&(String.prototype.endsWith=function(e){return e.length>0&&this.substring(this.length-e.length,this.length)===e});var isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},today=new Date,pluginName="wickedpicker",defaults={now:today.getHours()+":"+today.getMinutes(),twentyFour:!1,upArrow:"wickedpicker__controls__control-up",downArrow:"wickedpicker__controls__control-down",close:"wickedpicker__close",hoverState:"hover-state",title:"Timepicker",showSeconds:!1,secondsInterval:1,minutesInterval:1,beforeShow:null,show:null,clearable:!1};$.extend(Wickedpicker.prototype,{showPicker:function(e){"function"==typeof this.options.beforeShow&&this.options.beforeShow(e,this.timepicker);var t=$(e).offset();if($(e).attr({"aria-showingpicker":"true",tabindex:-1}),this.setText(e),this.showHideMeridiemControl(),this.getText(e)!==this.getTime()){var i=this.getText(e).replace(/:/g,"").split(" "),s={};s.hours=i[0],s.minutes=i[2],this.options.showSeconds?(s.seconds=i[4],s.meridiem=i[5]):s.meridiem=i[3],this.setTime(s)}this.timepicker.css({"z-index":this.element.css("z-index")+1,position:"absolute",left:t.left,top:t.top+$(e)[0].offsetHeight}).show(),"function"==typeof this.options.show&&this.options.show(e,this.timepicker),this.handleTimeAdjustments(e)},hideTimepicker:function(e){function t(e){setTimeout(function(){$('[aria-showingpicker="false"]').attr("tabindex",e)},400)}this.timepicker.hide();var i={start:function(){var e=$.Deferred();return $('[aria-showingpicker="true"]').attr("aria-showingpicker","false"),e.promise()}};i.start().then(t(0))},createPicker:function(){if(0===$(".wickedpicker").length){var e='<div class="wickedpicker"><p class="wickedpicker__title">'+this.options.title+'<span class="wickedpicker__close"></span></p><ul class="wickedpicker__controls"><li class="wickedpicker__controls__control"><span class="'+this.options.upArrow+'"></span><span class="wickedpicker__controls__control--hours" tabindex="-1">00</span><span class="'+this.options.downArrow+'"></span></li><li class="wickedpicker__controls__control--separator"><span class="wickedpicker__controls__control--separator-inner">:</span></li><li class="wickedpicker__controls__control"><span class="'+this.options.upArrow+'"></span><span class="wickedpicker__controls__control--minutes" tabindex="-1">00</span><span class="'+this.options.downArrow+'"></span></li>';this.options.showSeconds&&(e+='<li class="wickedpicker__controls__control--separator"><span class="wickedpicker__controls__control--separator-inner">:</span></li><li class="wickedpicker__controls__control"><span class="'+this.options.upArrow+'"></span><span class="wickedpicker__controls__control--seconds" tabindex="-1">00</span><span class="'+this.options.downArrow+'"></span> </li>'),e+='<li class="wickedpicker__controls__control"><span class="'+this.options.upArrow+'"></span><span class="wickedpicker__controls__control--meridiem" tabindex="-1">AM</span><span class="'+this.options.downArrow+'"></span></li></ul></div>',$("body").append(e),this.attachKeyboardEvents()}},showHideMeridiemControl:function(){this.options.twentyFour===!1?$(this.meridiemElem).parent().show():$(this.meridiemElem).parent().hide()},showHideSecondsControl:function(){this.options.showSeconds?$(this.secondsElem).parent().show():$(this.secondsElem).parent().hide()},attach:function(e){var t=this;this.options.clearable&&t.makePickerInputClearable(e),$(e).attr("tabindex",0),$(e).on("click focus",function(e){$(t.timepicker).is(":hidden")&&(t.showPicker($(this)),$(t.hoursElem).focus())});var i=function(i){$(t.timepicker).is(":visible")&&($(i.target).is(t.close)?t.hideTimepicker(e):$(i.target).closest(t.timepicker).length||$(i.target).closest($(".hasWickedpicker")).length?i.stopPropagation():t.hideTimepicker(e))};$(document).off("click",i).on("click",i)},attachKeyboardEvents:function(){$(document).on("keydown",$.proxy(function(e){switch(e.keyCode){case 9:"hasWickedpicker"!==e.target.className&&$(this.close).trigger("click");break;case 27:$(this.close).trigger("click");break;case 37:e.target.className!==this.hoursElem[0].className?$(e.target).parent().prevAll("li").not(this.separator.selector).first().children()[1].focus():$(e.target).parent().siblings(":last").children()[1].focus();break;case 39:e.target.className!==this.meridiemElem[0].className?$(e.target).parent().nextAll("li").not(this.separator.selector).first().children()[1].focus():$(e.target).parent().siblings(":first").children()[1].focus();break;case 38:$(":focus").prev().trigger("click");break;case 40:$(":focus").next().trigger("click")}},this))},setTime:function(e){this.setHours(e.hours),this.setMinutes(e.minutes),this.setMeridiem(e.meridiem),this.options.showSeconds&&this.setSeconds(e.seconds)},getTime:function(){return[this.formatTime(this.getHours(),this.getMinutes(),this.getMeridiem(),this.getSeconds())]},setHours:function(e){var t=new Date;t.setHours(e);var i=this.parseHours(t.getHours());this.hoursElem.text(i),this.selectedHour=i},getHours:function(){var e=new Date;return e.setHours(this.hoursElem.text()),e.getHours()},parseHours:function(e){return this.options.twentyFour===!1?(e+11)%12+1:e<10?"0"+e:e},setMinutes:function(e){var t=new Date;t.setMinutes(e);var i=t.getMinutes(),s=this.parseSecMin(i);this.minutesElem.text(s),this.selectedMin=s},getMinutes:function(){var e=new Date;return e.setMinutes(this.minutesElem.text()),e.getMinutes()},parseSecMin:function(e){return(e<10?"0":"")+e},setMeridiem:function(e){var t="";if(void 0===e){var i=this.getMeridiem();t="PM"===i?"AM":"PM"}else t=e;this.meridiemElem.text(t),this.selectedMeridiem=t},getMeridiem:function(){return this.meridiemElem.text()},setSeconds:function(e){var t=new Date;t.setSeconds(e);var i=t.getSeconds(),s=this.parseSecMin(i);this.secondsElem.text(s),this.selectedSec=s},getSeconds:function(){var e=new Date;return e.setSeconds(this.secondsElem.text()),e.getSeconds()},parseMeridiem:function(e){return e>11?"PM":"AM"},handleTimeAdjustments:function(e){var t=0;$(this.up).add(this.down).off("mousedown click touchstart").on("mousedown click",{Wickedpicker:this,input:e},function(e){var i=this.className.indexOf("up")>-1?"+":"-",s=e.data;"mousedown"==e.type?t=setInterval($.proxy(function(e){e.Wickedpicker.changeValue(i,e.input,this)},this,{Wickedpicker:s.Wickedpicker,input:s.input}),200):s.Wickedpicker.changeValue(i,s.input,this)}).bind("mouseup touchend",function(){clearInterval(t)})},changeValue:function(operator,input,clicked){var target="+"===operator?clicked.nextSibling:clicked.previousSibling,targetClass=$(target).attr("class");targetClass.endsWith("hours")?this.setHours(eval(this.getHours()+operator+1)):targetClass.endsWith("minutes")?this.setMinutes(eval(this.getMinutes()+operator+this.options.minutesInterval)):targetClass.endsWith("seconds")?this.setSeconds(eval(this.getSeconds()+operator+this.options.secondsInterval)):this.setMeridiem(),this.setText(input)},setText:function(e){$(e).val(this.formatTime(this.selectedHour,this.selectedMin,this.selectedMeridiem,this.selectedSec)).change()},getText:function(e){return $(e).val()},formatTime:function(e,t,i,s){var n=e+" : "+t;return this.options.twentyFour&&(n=e+" : "+t),this.options.showSeconds&&(n+=" : "+s),this.options.twentyFour===!1&&(n+=" "+i),n},setHoverState:function(){var e=this;isMobile()||$(this.up).add(this.down).add(this.close).hover(function(){$(this).toggleClass(e.options.hoverState)})},makePickerInputClearable:function(e){$(e).wrap('<div class="clearable-picker"></div>').after("<span data-clear-picker>&times;</span>"),$("[data-clear-picker]").on("click",function(e){$(this).siblings(".hasWickedpicker").val("")})},timeArrayFromString:function(e){if(e.length){var t=e.split(":");return t[2]=t.length<3?"00":t[2],t}return!1},_time:function(){var e=$(this.element).val();return""===e?this.formatTime(this.selectedHour,this.selectedMin,this.selectedMeridiem,this.selectedSec):e}}),$.fn[pluginName]=function(e,t){return $.isFunction(Wickedpicker.prototype["_"+e])?$(this).hasClass("hasWickedpicker")?void 0!==t?$.data($(this)[t],"plugin_"+pluginName)["_"+e]():$.data($(this)[0],"plugin_"+pluginName)["_"+e]():void 0:this.each(function(){$.data(this,"plugin_"+pluginName)||$.data(this,"plugin_"+pluginName,new Wickedpicker(this,e))})}}(jQuery,window,document);

// rangeslider
(function(e,t){function i(t,i){var s,a,o,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,a=s.name,t.href&&a&&"map"===s.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&n(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,s,a=e(this[0]);a.length&&a[0]!==document;){if(n=a.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function s(t,i,n,s){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?r["inner"+n].call(this):this.each(function(){e(this).css(o,s(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(o,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var s,a=e.ui[t].prototype;for(s in n)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([i,n[s]])},call:function(e,t,i){var n,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[n]>0?!0:(t[n]=1,s=t[n]>0,t[n]=0,s)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,l,h,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),l=a.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-a.width()/2,top:e.pageY-l.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),u["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](u,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[h?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[h?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by HernÃ¡n Sartorio  */
!function(e){e.fn.niceSelect=function(t){function s(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var s=t.next(),n=t.find("option"),i=t.find("option:selected");s.find(".current").html(i.data("display")||i.text()),n.each(function(t){var n=e(this),i=n.data("display");s.find("ul").append(e("<li></li>").attr("data-value",n.val()).attr("data-display",i||null).addClass("option"+(n.is(":selected")?" selected":"")+(n.is(":disabled")?" disabled":"")).html(n.text()))})}if("string"==typeof t)return"update"==t?this.each(function(){var t=e(this),n=e(this).next(".nice-select"),i=n.hasClass("open");n.length&&(n.remove(),s(t),i&&t.next().trigger("click"))}):"destroy"==t?(this.each(function(){var t=e(this),s=e(this).next(".nice-select");s.length&&(s.remove(),t.css("display",""))}),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;this.hide(),this.each(function(){var t=e(this);t.next().hasClass("nice-select")||s(t)}),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",function(t){var s=e(this);e(".nice-select").not(s).removeClass("open"),s.toggleClass("open"),s.hasClass("open")?(s.find(".option"),s.find(".focus").removeClass("focus"),s.find(".selected").addClass("focus")):s.focus()}),e(document).on("click.nice_select",function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")}),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(t){var s=e(this),n=s.closest(".nice-select");n.find(".selected").removeClass("selected"),s.addClass("selected");var i=s.data("display")||s.text();n.find(".current").text(i),n.prev("select").val(s.data("value")).trigger("change")}),e(document).on("keydown.nice_select",".nice-select",function(t){var s=e(this),n=e(s.find(".focus")||s.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return s.hasClass("open")?n.trigger("click"):s.trigger("click"),!1;if(40==t.keyCode){if(s.hasClass("open")){var i=n.nextAll(".option:not(.disabled)").first();i.length>0&&(s.find(".focus").removeClass("focus"),i.addClass("focus"))}else s.trigger("click");return!1}if(38==t.keyCode){if(s.hasClass("open")){var l=n.prevAll(".option:not(.disabled)").first();l.length>0&&(s.find(".focus").removeClass("focus"),l.addClass("focus"))}else s.trigger("click");return!1}if(27==t.keyCode)s.hasClass("open")&&s.trigger("click");else if(9==t.keyCode&&s.hasClass("open"))return!1});var n=document.createElement("a").style;return n.cssText="pointer-events:auto","auto"!==n.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}(jQuery);

// Image Grid
!function(i){function t(t){this.opts=t||{},this.$window=i(window),this.$element=this.opts.element,this.$gridItems=[],this.modal=null,this.imageLoadCount=0;var e=this.opts.cells;this.opts.cells=e<1?1:e>6?6:e,this.onWindowResize=this.onWindowResize.bind(this),this.onImageClick=this.onImageClick.bind(this),this.init()}function e(t){this.opts=t||{},this.imageIndex=null,this.$document=i(document),this.$modal=null,this.$indicator=null,this.close=this.close.bind(this),this.prev=this.prev.bind(this),this.next=this.next.bind(this),this.onIndicatorClick=this.onIndicatorClick.bind(this),this.onImageLoaded=this.onImageLoaded.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.$document.on("keyup",this.onKeyUp)}i.fn.imagesGrid=function(e){var o=arguments;return this.each(function(){if(i.isPlainObject(e)){this._imgGrid instanceof t&&(this._imgGrid.destroy(),delete this._imgGrid);var n=i.extend({},i.fn.imagesGrid.defaults,e);return n.element=i(this),void(this._imgGrid=new t(n))}if("string"==typeof e&&this._imgGrid instanceof t)switch(e){case"modal.open":this._imgGrid.modal.open(o[1]);break;case"modal.close":this._imgGrid.modal.close();break;case"destroy":this._imgGrid.destroy(),delete this._imgGrid}})},i.fn.imagesGrid.defaults={images:[],cells:5,align:!1,nextOnClick:!0,showViewAll:"more",viewAllStartIndex:"auto",getViewAllText:function(i){return"View all "+i+" images"},onGridRendered:i.noop,onGridItemRendered:i.noop,onGridLoaded:i.noop,onGridImageLoaded:i.noop,onModalOpen:i.noop,onModalClose:i.noop,onModalImageClick:i.noop,onModalImageUpdate:i.noop},t.prototype.init=function(){this.setGridClass(),this.renderGridItems(),this.createModal(),this.$window.on("resize",this.onWindowResize)},t.prototype.createModal=function(){var i=this.opts;this.modal=new e({images:i.images,nextOnClick:i.nextOnClick,onModalOpen:i.onModalOpen,onModalClose:i.onModalClose,onModalImageClick:i.onModalImageClick,onModalImageUpdate:i.onModalImageUpdate})},t.prototype.setGridClass=function(){var i=this.opts,t=i.images.length,e=t<i.cells?t:i.cells;this.$element.addClass("imgs-grid imgs-grid-"+e)},t.prototype.renderGridItems=function(){var i=this.opts,t=i.images,e=t.length;if(t){this.$element.empty(),this.$gridItems=[];for(var o=0;o<e&&o!==i.cells;++o)this.renderGridItem(t[o],o);("always"===i.showViewAll||"more"===i.showViewAll&&e>i.cells)&&this.renderViewAll(),i.onGridRendered(this.$element)}},t.prototype.renderGridItem=function(t,e){var o=t,n="",s="",a=this.opts,d=this;i.isPlainObject(t)&&(o=t.thumbnail||t.src,n=t.alt||"",s=t.title||"");var l=i("<div>",{class:"imgs-grid-image",click:this.onImageClick,data:{index:e}});l.append(i("<div>",{class:"image-wrap"}).append(i("<img>",{src:o,alt:n,title:s,on:{load:function(e){d.onImageLoaded(e,i(this),t)}}}))),this.$gridItems.push(l),this.$element.append(l),a.onGridItemRendered(l,t)},t.prototype.renderViewAll=function(){var t=this.opts;this.$element.find(".imgs-grid-image:last .image-wrap").append(i("<div>",{class:"view-all"}).append(i("<span>",{class:"view-all-cover"}),i("<span>",{class:"view-all-text",text:t.getViewAllText(t.images.length)})))},t.prototype.onWindowResize=function(i){this.opts.align&&this.align()},t.prototype.onImageClick=function(t){var e,o=this.opts,n=i(t.currentTarget);e=n.find(".view-all").length>0&&"number"==typeof o.viewAllStartIndex?o.viewAllStartIndex:n.data("index"),this.modal.open(e)},t.prototype.onImageLoaded=function(i,t,e){var o=this.opts;++this.imageLoadCount,o.onGridImageLoaded(i,t,e),this.imageLoadCount===this.$gridItems.length&&(this.imageLoadCount=0,this.onAllImagesLoaded())},t.prototype.onAllImagesLoaded=function(){var i=this.opts;i.align&&this.align(),i.onGridLoaded(this.$element)},t.prototype.align=function(){switch(this.$gridItems.length){case 2:case 3:this.alignItems(this.$gridItems);break;case 4:this.alignItems(this.$gridItems.slice(0,2)),this.alignItems(this.$gridItems.slice(2));break;case 5:case 6:this.alignItems(this.$gridItems.slice(0,3)),this.alignItems(this.$gridItems.slice(3))}},t.prototype.alignItems=function(t){var e=t.map(function(i){return i.find("img").height()}),o=Math.min.apply(null,e);i(t).each(function(){var t=i(this),e=t.find(".image-wrap"),n=t.find("img"),s=n.height();if(e.height(o),s>o){var a=Math.floor((s-o)/2);n.css({top:-a})}})},t.prototype.destroy=function(){this.$window.off("resize",this.onWindowResize),this.$element.empty().removeClass("imgs-grid imgs-grid-"+this.$gridItems.length),this.modal.destroy()},e.prototype.open=function(i){this.isOpened()||(this.imageIndex=parseInt(i)||0,this.render())},e.prototype.close=function(i){if(this.$modal){var t=this.opts;this.$modal.animate({opacity:0},{duration:100,complete:function(){this.$modal.remove(),this.$modal=null,this.$indicator=null,this.imageIndex=null,t.onModalClose()}.bind(this)})}},e.prototype.isOpened=function(){return this.$modal&&this.$modal.is(":visible")},e.prototype.render=function(){var i=this.opts;this.renderModal(),this.renderCaption(),this.renderCloseButton(),this.renderInnerContainer(),this.renderIndicatorContainer(),this.$modal.animate({opacity:1},{duration:100,complete:function(){i.onModalOpen(this.$modal,i.images[this.imageIndex])}.bind(this)})},e.prototype.renderModal=function(){this.$modal=i("<div>",{class:"imgs-grid-modal"}).appendTo("body")},e.prototype.renderCaption=function(){this.$caption=i("<div>",{class:"modal-caption",text:this.getImageCaption(this.imageIndex)}).appendTo(this.$modal)},e.prototype.renderCloseButton=function(){this.$modal.append(i("<div>",{class:"modal-close",click:this.close}))},e.prototype.renderInnerContainer=function(){var t=this.opts,e=this.getImage(this.imageIndex);this.$modal.append(i("<div>",{class:"modal-inner"}).append(i("<div>",{class:"modal-image"}).append(i("<img>",{src:e.src,alt:e.alt,title:e.title,on:{load:this.onImageLoaded,click:function(t){this.onImageClick(t,i(this),e)}.bind(this)}}),i("<div>",{class:"modal-loader",text:"loading..."})),i("<div>",{class:"modal-control left",click:this.prev}).append(i("<div>",{class:"arrow left"})),i("<div>",{class:"modal-control right",click:this.next}).append(i("<div>",{class:"arrow right"})))),t.images.length<=1&&this.$modal.find(".modal-control").hide()},e.prototype.renderIndicatorContainer=function(){var t=this.opts.images.length;if(1!=t){this.$indicator=i("<div>",{class:"modal-indicator"});var e,o=i("<ul>");for(e=0;e<t;++e)o.append(i("<li>",{class:this.imageIndex==e?"selected":"",click:this.onIndicatorClick,data:{index:e}}));this.$indicator.append(o),this.$modal.append(this.$indicator)}},e.prototype.prev=function(){var i=this.opts.images.length;this.imageIndex>0?--this.imageIndex:this.imageIndex=i-1,this.updateImage()},e.prototype.next=function(){var i=this.opts.images.length;this.imageIndex<i-1?++this.imageIndex:this.imageIndex=0,this.updateImage()},e.prototype.updateImage=function(){var i=this.opts,t=this.getImage(this.imageIndex),e=this.$modal.find(".modal-image img");if(e.attr({src:t.src,alt:t.alt,title:t.title}),this.$modal.find(".modal-caption").text(this.getImageCaption(this.imageIndex)),this.$indicator){var o=this.$indicator.find("ul");o.children().removeClass("selected"),o.children().eq(this.imageIndex).addClass("selected")}this.showLoader(),i.onModalImageUpdate(e,t)},e.prototype.onImageClick=function(i,t,e){var o=this.opts;o.nextOnClick&&this.next(),o.onModalImageClick(i,t,e)},e.prototype.onImageLoaded=function(){this.hideLoader()},e.prototype.onIndicatorClick=function(t){var e=i(t.target).data("index");this.imageIndex=e,this.updateImage()},e.prototype.onKeyUp=function(i){if(this.$modal)switch(i.keyCode){case 27:this.close();break;case 37:this.prev();break;case 39:this.next()}},e.prototype.getImage=function(t){var e=this.opts.images[t];return i.isPlainObject(e)?e:{src:e,alt:"",title:""}},e.prototype.getImageCaption=function(i){return this.getImage(i).caption||""},e.prototype.showLoader=function(){this.$modal&&(this.$modal.find(".modal-image img").hide(),this.$modal.find(".modal-loader").show())},e.prototype.hideLoader=function(){this.$modal&&(this.$modal.find(".modal-image img").show(),this.$modal.find(".modal-loader").hide())},e.prototype.destroy=function(){this.$document.off("keyup",this.onKeyUp),this.close()}}(jQuery);

/*!
 * Particleground
 *
 * @author Jonathan Nicol - @mrjnicol
 * @version 1.1.0
 * @description Creates a canvas based particle system background
 *
 * Inspired by http://requestlab.fr/ and http://disruptivebydesign.com/
 */
!function(a,b){"use strict";function c(a){a=a||{};for(var b=1;b<arguments.length;b++){var c=arguments[b];if(c)for(var d in c)c.hasOwnProperty(d)&&("object"==typeof c[d]?deepExtend(a[d],c[d]):a[d]=c[d])}return a}function d(d,g){function h(){if(y){r=b.createElement("canvas"),r.className="pg-canvas",r.style.display="block",d.insertBefore(r,d.firstChild),s=r.getContext("2d"),i();for(var c=Math.round(r.width*r.height/g.density),e=0;c>e;e++){var f=new n;f.setStackPos(e),z.push(f)}a.addEventListener("resize",function(){k()},!1),b.addEventListener("mousemove",function(a){A=a.pageX,B=a.pageY},!1),D&&!C&&a.addEventListener("deviceorientation",function(){F=Math.min(Math.max(-event.beta,-30),30),E=Math.min(Math.max(-event.gamma,-30),30)},!0),j(),q("onInit")}}function i(){r.width=d.offsetWidth,r.height=d.offsetHeight,s.fillStyle=g.dotColor,s.strokeStyle=g.lineColor,s.lineWidth=g.lineWidth}function j(){if(y){u=a.innerWidth,v=a.innerHeight,s.clearRect(0,0,r.width,r.height);for(var b=0;b<z.length;b++)z[b].updatePosition();for(var b=0;b<z.length;b++)z[b].draw();G||(t=requestAnimationFrame(j))}}function k(){i();for(var a=d.offsetWidth,b=d.offsetHeight,c=z.length-1;c>=0;c--)(z[c].position.x>a||z[c].position.y>b)&&z.splice(c,1);var e=Math.round(r.width*r.height/g.density);if(e>z.length)for(;e>z.length;){var f=new n;z.push(f)}else e<z.length&&z.splice(e);for(c=z.length-1;c>=0;c--)z[c].setStackPos(c)}function l(){G=!0}function m(){G=!1,j()}function n(){switch(this.stackPos,this.active=!0,this.layer=Math.ceil(3*Math.random()),this.parallaxOffsetX=0,this.parallaxOffsetY=0,this.position={x:Math.ceil(Math.random()*r.width),y:Math.ceil(Math.random()*r.height)},this.speed={},g.directionX){case"left":this.speed.x=+(-g.maxSpeedX+Math.random()*g.maxSpeedX-g.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*g.maxSpeedX+g.minSpeedX).toFixed(2);break;default:this.speed.x=+(-g.maxSpeedX/2+Math.random()*g.maxSpeedX).toFixed(2),this.speed.x+=this.speed.x>0?g.minSpeedX:-g.minSpeedX}switch(g.directionY){case"up":this.speed.y=+(-g.maxSpeedY+Math.random()*g.maxSpeedY-g.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*g.maxSpeedY+g.minSpeedY).toFixed(2);break;default:this.speed.y=+(-g.maxSpeedY/2+Math.random()*g.maxSpeedY).toFixed(2),this.speed.x+=this.speed.y>0?g.minSpeedY:-g.minSpeedY}}function o(a,b){return b?void(g[a]=b):g[a]}function p(){console.log("destroy"),r.parentNode.removeChild(r),q("onDestroy"),f&&f(d).removeData("plugin_"+e)}function q(a){void 0!==g[a]&&g[a].call(d)}var r,s,t,u,v,w,x,y=!!b.createElement("canvas").getContext,z=[],A=0,B=0,C=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),D=!!a.DeviceOrientationEvent,E=0,F=0,G=!1;return g=c({},a[e].defaults,g),n.prototype.draw=function(){s.beginPath(),s.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,g.particleRadius/2,0,2*Math.PI,!0),s.closePath(),s.fill(),s.beginPath();for(var a=z.length-1;a>this.stackPos;a--){var b=z[a],c=this.position.x-b.position.x,d=this.position.y-b.position.y,e=Math.sqrt(c*c+d*d).toFixed(2);e<g.proximity&&(s.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY),g.curvedLines?s.quadraticCurveTo(Math.max(b.position.x,b.position.x),Math.min(b.position.y,b.position.y),b.position.x+b.parallaxOffsetX,b.position.y+b.parallaxOffsetY):s.lineTo(b.position.x+b.parallaxOffsetX,b.position.y+b.parallaxOffsetY))}s.stroke(),s.closePath()},n.prototype.updatePosition=function(){if(g.parallax){if(D&&!C){var a=(u-0)/60;w=(E- -30)*a+0;var b=(v-0)/60;x=(F- -30)*b+0}else w=A,x=B;this.parallaxTargX=(w-u/2)/(g.parallaxMultiplier*this.layer),this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10,this.parallaxTargY=(x-v/2)/(g.parallaxMultiplier*this.layer),this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10}var c=d.offsetWidth,e=d.offsetHeight;switch(g.directionX){case"left":this.position.x+this.speed.x+this.parallaxOffsetX<0&&(this.position.x=c-this.parallaxOffsetX);break;case"right":this.position.x+this.speed.x+this.parallaxOffsetX>c&&(this.position.x=0-this.parallaxOffsetX);break;default:(this.position.x+this.speed.x+this.parallaxOffsetX>c||this.position.x+this.speed.x+this.parallaxOffsetX<0)&&(this.speed.x=-this.speed.x)}switch(g.directionY){case"up":this.position.y+this.speed.y+this.parallaxOffsetY<0&&(this.position.y=e-this.parallaxOffsetY);break;case"down":this.position.y+this.speed.y+this.parallaxOffsetY>e&&(this.position.y=0-this.parallaxOffsetY);break;default:(this.position.y+this.speed.y+this.parallaxOffsetY>e||this.position.y+this.speed.y+this.parallaxOffsetY<0)&&(this.speed.y=-this.speed.y)}this.position.x+=this.speed.x,this.position.y+=this.speed.y},n.prototype.setStackPos=function(a){this.stackPos=a},h(),{option:o,destroy:p,start:m,pause:l}}var e="particleground",f=a.jQuery;a[e]=function(a,b){return new d(a,b)},a[e].defaults={minSpeedX:.1,maxSpeedX:.7,minSpeedY:.1,maxSpeedY:.7,directionX:"center",directionY:"center",density:1e4,dotColor:"#666666",lineColor:"#666666",particleRadius:7,lineWidth:1,curvedLines:!1,proximity:100,parallax:!0,parallaxMultiplier:5,onInit:function(){},onDestroy:function(){}},f&&(f.fn[e]=function(a){if("string"==typeof arguments[0]){var b,c=arguments[0],g=Array.prototype.slice.call(arguments,1);return this.each(function(){f.data(this,"plugin_"+e)&&"function"==typeof f.data(this,"plugin_"+e)[c]&&(b=f.data(this,"plugin_"+e)[c].apply(this,g))}),void 0!==b?b:this}return"object"!=typeof a&&a?void 0:this.each(function(){f.data(this,"plugin_"+e)||f.data(this,"plugin_"+e,new d(this,a))})})}(window,document),/**


/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s=200==Math.round(t(o.width)),r.isBoxSizeOuter=s,i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,n,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),o&&!this.isTransitioning)return void this.layoutPosition();var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});


// jquery.daterangepicker.js
// version : v0.14.2
// author : Chunlong Liu
// license : MIT
// www.jszen.com
!function(e){"function"==typeof define&&define.amd?define(["jquery","moment"],e):"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery"),require("moment")):e(jQuery,moment)}(function(e,t){"use strict";e.dateRangePickerLanguages={default:{selected:"Selected:",day:"Day",days:"Days",apply:"Close","week-1":"mo","week-2":"tu","week-3":"we","week-4":"th","week-5":"fr","week-6":"sa","week-7":"su","week-number":"W","month-name":["january","february","march","april","may","june","july","august","september","october","november","december"],shortcuts:"Shortcuts","custom-values":"Custom Values",past:"Past",following:"Following",previous:"Previous","prev-week":"Week","prev-month":"Month","prev-year":"Year",next:"Next","next-week":"Week","next-month":"Month","next-year":"Year","less-than":"Date range should not be more than %d days","more-than":"Date range should not be less than %d days","default-more":"Please select a date range longer than %d days","default-single":"Please select a date","default-less":"Please select a date range less than %d days","default-range":"Please select a date range between %d and %d days","default-default":"Please select a date range",time:"Time",hour:"Hour",minute:"Minute"},id:{selected:"Terpilih:",day:"Hari",days:"Hari",apply:"Tutup","week-1":"sen","week-2":"sel","week-3":"rab","week-4":"kam","week-5":"jum","week-6":"sab","week-7":"min","week-number":"W","month-name":["januari","februari","maret","april","mei","juni","juli","agustus","september","oktober","november","desember"],shortcuts:"Pintas","custom-values":"Nilai yang ditentukan",past:"Yang Lalu",following:"Mengikuti",previous:"Sebelumnya","prev-week":"Minggu","prev-month":"Bulan","prev-year":"Tahun",next:"Selanjutnya","next-week":"Minggu","next-month":"Bulan","next-year":"Tahun","less-than":"Tanggal harus lebih dari %d hari","more-than":"Tanggal harus kurang dari %d hari","default-more":"Jarak tanggal harus lebih lama dari %d hari","default-single":"Silakan pilih tanggal","default-less":"Jarak rentang tanggal tidak boleh lebih lama dari %d hari","default-range":"Rentang tanggal harus antara %d dan %d hari","default-default":"Silakan pilih rentang tanggal",time:"Waktu",hour:"Jam",minute:"Menit"},az:{selected:"SeÃƒÂ§ildi:",day:" gÃƒÂ¼n",days:" gÃƒÂ¼n",apply:"tÃ‰â„¢tbiq","week-1":"1","week-2":"2","week-3":"3","week-4":"4","week-5":"5","week-6":"6","week-7":"7","month-name":["yanvar","fevral","mart","aprel","may","iyun","iyul","avqust","sentyabr","oktyabr","noyabr","dekabr"],shortcuts:"QÃ„Â±sayollar",past:"KeÃƒÂ§miÃ…Å¸",following:"NÃƒÂ¶vbÃ‰â„¢ti",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"Ãƒâ€“ncÃ‰â„¢ki hÃ‰â„¢ftÃ‰â„¢","prev-month":"Ãƒâ€“ncÃ‰â„¢ki ay","prev-year":"Ãƒâ€“ncÃ‰â„¢ki il",next:"&nbsp;&nbsp;&nbsp;","next-week":"NÃƒÂ¶vbÃ‰â„¢ti hÃ‰â„¢ftÃ‰â„¢","next-month":"NÃƒÂ¶vbÃ‰â„¢ti ay","next-year":"NÃƒÂ¶vbÃ‰â„¢ti il","less-than":"Tarix aralÃ„Â±Ã„Å¸Ã„Â± %d gÃƒÂ¼ndÃ‰â„¢n ÃƒÂ§ox olmamalÃ„Â±dÃ„Â±r","more-than":"Tarix aralÃ„Â±Ã„Å¸Ã„Â± %d gÃƒÂ¼ndÃ‰â„¢n az olmamalÃ„Â±dÃ„Â±r","default-more":"%d gÃƒÂ¼ndÃ‰â„¢n ÃƒÂ§ox bir tarix seÃƒÂ§in","default-single":"Tarix seÃƒÂ§in","default-less":"%d gÃƒÂ¼ndÃ‰â„¢n az bir tarix seÃƒÂ§in","default-range":"%d vÃ‰â„¢ %d gÃƒÂ¼n aralÃ„Â±Ã„Å¸Ã„Â±nda tarixlÃ‰â„¢r seÃƒÂ§in","default-default":"Tarix aralÃ„Â±Ã„Å¸Ã„Â± seÃƒÂ§in"},cn:{selected:"Ã¥Â·Â²Ã©â‚¬â€°Ã¦â€¹Â©:",day:"Ã¥Â¤Â©",days:"Ã¥Â¤Â©",apply:"Ã§Â¡Â®Ã¥Â®Å¡","week-1":"Ã¤Â¸â‚¬","week-2":"Ã¤ÂºÅ’","week-3":"Ã¤Â¸â€°","week-4":"Ã¥â€ºâ€º","week-5":"Ã¤Âºâ€","week-6":"Ã¥â€¦Â­","week-7":"Ã¦â€”Â¥","week-number":"Ã¥â€˜Â¨","month-name":["Ã¤Â¸â‚¬Ã¦Å“Ë†","Ã¤ÂºÅ’Ã¦Å“Ë†","Ã¤Â¸â€°Ã¦Å“Ë†","Ã¥â€ºâ€ºÃ¦Å“Ë†","Ã¤Âºâ€Ã¦Å“Ë†","Ã¥â€¦Â­Ã¦Å“Ë†","Ã¤Â¸Æ’Ã¦Å“Ë†","Ã¥â€¦Â«Ã¦Å“Ë†","Ã¤Â¹ÂÃ¦Å“Ë†","Ã¥ÂÂÃ¦Å“Ë†","Ã¥ÂÂÃ¤Â¸â‚¬Ã¦Å“Ë†","Ã¥ÂÂÃ¤ÂºÅ’Ã¦Å“Ë†"],shortcuts:"Ã¥Â¿Â«Ã¦ÂÂ·Ã©â‚¬â€°Ã¦â€¹Â©",past:"Ã¨Â¿â€¡Ã¥Å½Â»",following:"Ã¥Â°â€ Ã¦ÂÂ¥",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"Ã¤Â¸Å Ã¥â€˜Â¨","prev-month":"Ã¤Â¸Å Ã¤Â¸ÂªÃ¦Å“Ë†","prev-year":"Ã¥Å½Â»Ã¥Â¹Â´",next:"&nbsp;&nbsp;&nbsp;","next-week":"Ã¤Â¸â€¹Ã¥â€˜Â¨","next-month":"Ã¤Â¸â€¹Ã¤Â¸ÂªÃ¦Å“Ë†","next-year":"Ã¦ËœÅ½Ã¥Â¹Â´","less-than":"Ã¦â€°â‚¬Ã©â‚¬â€°Ã¦â€”Â¥Ã¦Å“Å¸Ã¨Å’Æ’Ã¥â€ºÂ´Ã¤Â¸ÂÃ¨Æ’Â½Ã¥Â¤Â§Ã¤ÂºÅ½%dÃ¥Â¤Â©","more-than":"Ã¦â€°â‚¬Ã©â‚¬â€°Ã¦â€”Â¥Ã¦Å“Å¸Ã¨Å’Æ’Ã¥â€ºÂ´Ã¤Â¸ÂÃ¨Æ’Â½Ã¥Â°ÂÃ¤ÂºÅ½%dÃ¥Â¤Â©","default-more":"Ã¨Â¯Â·Ã©â‚¬â€°Ã¦â€¹Â©Ã¥Â¤Â§Ã¤ÂºÅ½%dÃ¥Â¤Â©Ã§Å¡â€žÃ¦â€”Â¥Ã¦Å“Å¸Ã¨Å’Æ’Ã¥â€ºÂ´","default-less":"Ã¨Â¯Â·Ã©â‚¬â€°Ã¦â€¹Â©Ã¥Â°ÂÃ¤ÂºÅ½%dÃ¥Â¤Â©Ã§Å¡â€žÃ¦â€”Â¥Ã¦Å“Å¸Ã¨Å’Æ’Ã¥â€ºÂ´","default-range":"Ã¨Â¯Â·Ã©â‚¬â€°Ã¦â€¹Â©%dÃ¥Â¤Â©Ã¥Ë†Â°%dÃ¥Â¤Â©Ã§Å¡â€žÃ¦â€”Â¥Ã¦Å“Å¸Ã¨Å’Æ’Ã¥â€ºÂ´","default-single":"Ã¨Â¯Â·Ã©â‚¬â€°Ã¦â€¹Â©Ã¤Â¸â‚¬Ã¤Â¸ÂªÃ¦â€”Â¥Ã¦Å“Å¸","default-default":"Ã¨Â¯Â·Ã©â‚¬â€°Ã¦â€¹Â©Ã¤Â¸â‚¬Ã¤Â¸ÂªÃ¦â€”Â¥Ã¦Å“Å¸Ã¨Å’Æ’Ã¥â€ºÂ´",time:"Ã¦â€”Â¶Ã©â€”Â´",hour:"Ã¥Â°ÂÃ¦â€”Â¶",minute:"Ã¥Ë†â€ Ã©â€™Å¸"},cz:{selected:"VybrÃƒÂ¡no:",day:"Den",days:"Dny",apply:"ZavÃ…â„¢ÃƒÂ­t","week-1":"po","week-2":"ÃƒÂºt","week-3":"st","week-4":"Ã„Ât","week-5":"pÃƒÂ¡","week-6":"so","week-7":"ne","month-name":["leden","ÃƒÂºnor","bÃ…â„¢ezen","duben","kvÃ„â€ºten","Ã„Âerven","Ã„Âervenec","srpen","zÃƒÂ¡Ã…â„¢ÃƒÂ­","Ã…â„¢ÃƒÂ­jen","listopad","prosinec"],shortcuts:"Zkratky",past:"po",following:"nÃƒÂ¡sledujÃƒÂ­cÃƒÂ­",previous:"pÃ…â„¢edchozÃƒÂ­","prev-week":"tÃƒÂ½den","prev-month":"mÃ„â€ºsÃƒÂ­c","prev-year":"rok",next:"dalÃ…Â¡ÃƒÂ­","next-week":"tÃƒÂ½den","next-month":"mÃ„â€ºsÃƒÂ­c","next-year":"rok","less-than":"Rozsah data by nemÃ„â€ºl bÃƒÂ½t vÃ„â€ºtÃ…Â¡ÃƒÂ­ neÃ…Â¾ %d dnÃ…Â¯","more-than":"Rozsah data by nemÃ„â€ºl bÃƒÂ½t menÃ…Â¡ÃƒÂ­ neÃ…Â¾ %d dnÃ…Â¯","default-more":"ProsÃƒÂ­m zvolte rozsah data vÃ„â€ºtÃ…Â¡ÃƒÂ­ neÃ…Â¾ %d dnÃ…Â¯","default-single":"ProsÃƒÂ­m zvolte datum","default-less":"ProsÃƒÂ­m zvolte rozsah data menÃ…Â¡ÃƒÂ­ neÃ…Â¾ %d dnÃ…Â¯","default-range":"ProsÃƒÂ­m zvolte rozsah data mezi %d a %d dny","default-default":"ProsÃƒÂ­m zvolte rozsah data"},de:{selected:"Auswahl:",day:"Tag",days:"Tage",apply:"SchlieÃƒÅ¸en","week-1":"mo","week-2":"di","week-3":"mi","week-4":"do","week-5":"fr","week-6":"sa","week-7":"so","month-name":["januar","februar","mÃƒÂ¤rz","april","mai","juni","juli","august","september","oktober","november","dezember"],shortcuts:"Schnellwahl",past:"Vorherige",following:"Folgende",previous:"Vorherige","prev-week":"Woche","prev-month":"Monat","prev-year":"Jahr",next:"NÃƒÂ¤chste","next-week":"Woche","next-month":"Monat","next-year":"Jahr","less-than":"Datumsbereich darf nicht grÃƒÂ¶ÃƒÅ¸er sein als %d Tage","more-than":"Datumsbereich darf nicht kleiner sein als %d Tage","default-more":"Bitte mindestens %d Tage auswÃƒÂ¤hlen","default-single":"Bitte ein Datum auswÃƒÂ¤hlen","default-less":"Bitte weniger als %d Tage auswÃƒÂ¤hlen","default-range":"Bitte einen Datumsbereich zwischen %d und %d Tagen auswÃƒÂ¤hlen","default-default":"Bitte ein Start- und Enddatum auswÃƒÂ¤hlen",Time:"Zeit",hour:"Stunde",minute:"Minute"},es:{selected:"Seleccionado:",day:"DÃƒÂ­a",days:"DÃƒÂ­as",apply:"Cerrar","week-1":"lu","week-2":"ma","week-3":"mi","week-4":"ju","week-5":"vi","week-6":"sa","week-7":"do","month-name":["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],shortcuts:"Accesos directos",past:"Pasado",following:"Siguiente",previous:"Anterior","prev-week":"Semana","prev-month":"Mes","prev-year":"AÃƒÂ±o",next:"Siguiente","next-week":"Semana","next-month":"Mes","next-year":"AÃƒÂ±o","less-than":"El rango no deberÃƒÂ­a ser mayor de %d dÃƒÂ­as","more-than":"El rango no deberÃƒÂ­a ser menor de %d dÃƒÂ­as","default-more":"Por favor selecciona un rango mayor a %d dÃƒÂ­as","default-single":"Por favor selecciona un dÃƒÂ­a","default-less":"Por favor selecciona un rango menor a %d dÃƒÂ­as","default-range":"Por favor selecciona un rango entre %d y %d dÃƒÂ­as","default-default":"Por favor selecciona un rango de fechas."},fr:{selected:"SÃƒÂ©lection:",day:"Jour",days:"Jours",apply:"Fermer","week-1":"lu","week-2":"ma","week-3":"me","week-4":"je","week-5":"ve","week-6":"sa","week-7":"di","month-name":["janvier","fÃƒÂ©vrier","mars","avril","mai","juin","juillet","aoÃƒÂ»t","septembre","octobre","novembre","dÃƒÂ©cembre"],shortcuts:"Raccourcis",past:"PassÃƒÂ©",following:"Suivant",previous:"PrÃƒÂ©cÃƒÂ©dent","prev-week":"Semaine","prev-month":"Mois","prev-year":"AnnÃƒÂ©e",next:"Suivant","next-week":"Semaine","next-month":"Mois","next-year":"AnnÃƒÂ©e","less-than":"L'intervalle ne doit pas ÃƒÂªtre supÃƒÂ©rieure Ãƒ  %d jours","more-than":"L'intervalle ne doit pas ÃƒÂªtre infÃƒÂ©rieure Ãƒ  %d jours","default-more":"Merci de choisir une intervalle supÃƒÂ©rieure Ãƒ  %d jours","default-single":"Merci de choisir une date","default-less":"Merci de choisir une intervalle infÃƒÂ©rieure %d jours","default-range":"Merci de choisir une intervalle comprise entre %d et %d jours","default-default":"Merci de choisir une date"},hu:{selected:"KivÃƒÂ¡lasztva:",day:"Nap",days:"Nap",apply:"Ok","week-1":"h","week-2":"k","week-3":"sz","week-4":"cs","week-5":"p","week-6":"sz","week-7":"v","month-name":["januÃƒÂ¡r","februÃƒÂ¡r","mÃƒÂ¡rcius","ÃƒÂ¡prilis","mÃƒÂ¡jus","jÃƒÂºnius","jÃƒÂºlius","augusztus","szeptember","oktÃƒÂ³ber","november","december"],shortcuts:"GyorsvÃƒÂ¡lasztÃƒÂ³",past:"MÃƒÂºlt",following:"KÃƒÂ¶vetkezÃ…â€˜",previous:"ElÃ…â€˜zÃ…â€˜","prev-week":"HÃƒÂ©t","prev-month":"HÃƒÂ³nap","prev-year":"Ãƒâ€°v",next:"KÃƒÂ¶vetkezÃ…â€˜","next-week":"HÃƒÂ©t","next-month":"HÃƒÂ³nap","next-year":"Ãƒâ€°v","less-than":"A kivÃƒÂ¡lasztÃƒÂ¡s nem lehet tÃƒÂ¶bb %d napnÃƒÂ¡l","more-than":"A kivÃƒÂ¡lasztÃƒÂ¡s nem lehet tÃƒÂ¶bb %d napnÃƒÂ¡l","default-more":"VÃƒÂ¡lassz ki egy idÃ…â€˜szakot ami hosszabb mint %d nap","default-single":"VÃƒÂ¡lassz egy napot","default-less":"VÃƒÂ¡lassz ki egy idÃ…â€˜szakot ami rÃƒÂ¶videbb mint %d nap","default-range":"VÃƒÂ¡lassz ki egy %d - %d nap hosszÃƒÂº idÃ…â€˜szakot","default-default":"VÃƒÂ¡lassz ki egy idÃ…â€˜szakot"},it:{selected:"Selezionati:",day:"Giorno",days:"Giorni",apply:"Chiudi","week-1":"lu","week-2":"ma","week-3":"me","week-4":"gi","week-5":"ve","week-6":"sa","week-7":"do","month-name":["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],shortcuts:"Scorciatoie",past:"Scorso",following:"Successivo",previous:"Precedente","prev-week":"Settimana","prev-month":"Mese","prev-year":"Anno",next:"Prossimo","next-week":"Settimana","next-month":"Mese","next-year":"Anno","less-than":"L'intervallo non dev'essere maggiore di %d giorni","more-than":"L'intervallo non dev'essere minore di %d giorni","default-more":"Seleziona un intervallo maggiore di %d giorni","default-single":"Seleziona una data","default-less":"Seleziona un intervallo minore di %d giorni","default-range":"Seleziona un intervallo compreso tra i %d e i %d giorni","default-default":"Seleziona un intervallo di date"},ko:{selected:"ÃªÂ¸Â°ÃªÂ°â€ž:",day:"Ã¬ÂÂ¼",days:"Ã¬ÂÂ¼ÃªÂ°â€ž",apply:"Ã«â€¹Â«ÃªÂ¸Â°","week-1":"Ã¬â€ºâ€","week-2":"Ã­â„¢â€","week-3":"Ã¬Ë†Ëœ","week-4":"Ã«ÂªÂ©","week-5":"ÃªÂ¸Ë†","week-6":"Ã­â€  ","week-7":"Ã¬ÂÂ¼","week-number":"Ã¬Â£Â¼","month-name":["1Ã¬â€ºâ€","2Ã¬â€ºâ€","3Ã¬â€ºâ€","4Ã¬â€ºâ€","5Ã¬â€ºâ€","6Ã¬â€ºâ€","7Ã¬â€ºâ€","8Ã¬â€ºâ€","9Ã¬â€ºâ€","10Ã¬â€ºâ€","11Ã¬â€ºâ€","12Ã¬â€ºâ€"],shortcuts:"Ã«â€¹Â¨Ã¬Â¶â€¢Ã­â€šÂ¤Ã«â€œÂ¤",past:"Ã¬Â§â‚¬Ã«â€šÅ“(Ã¬ËœÂ¤Ã«Å ËœÃªÂ¸Â°Ã¬Â¤â‚¬)",following:"Ã¬ÂÂ´Ã­â€ºâ€ž(Ã¬ËœÂ¤Ã«Å ËœÃªÂ¸Â°Ã¬Â¤â‚¬)",previous:"Ã¬ÂÂ´Ã¬ â€ž","prev-week":"1Ã¬Â£Â¼","prev-month":"1Ã«â€¹Â¬","prev-year":"1Ã«â€¦â€ž",next:"Ã«â€¹Â¤Ã¬ÂÅ’","next-week":"1Ã¬Â£Â¼","next-month":"1Ã«â€¹Â¬","next-year":"1Ã«â€¦â€ž","less-than":"Ã«â€š Ã¬Â§Å“ Ã«Â²â€Ã¬Å“â€žÃ«Å â€ %d Ã¬ÂÂ¼Ã«Â³Â´Ã«â€¹Â¤ Ã«Â§Å½Ã¬Ââ€ž Ã¬Ë†Ëœ Ã¬â€”â€ Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤","more-than":"Ã«â€š Ã¬Â§Å“ Ã«Â²â€Ã¬Å“â€žÃ«Å â€ %d Ã¬ÂÂ¼Ã«Â³Â´Ã«â€¹Â¤ Ã¬Å¾â€˜Ã¬Ââ€ž Ã¬Ë†Ëœ Ã¬â€”â€ Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤","default-more":"Ã«â€š Ã¬Â§Å“ Ã«Â²â€Ã¬Å“â€žÃ«Â¥Â¼ %d Ã¬ÂÂ¼Ã«Â³Â´Ã«â€¹Â¤ ÃªÂ¸Â¸ÃªÂ²Å’ Ã¬â€ž Ã­Æ’ÂÃ­â€¢Â´ Ã¬Â£Â¼Ã¬â€žÂ¸Ã¬Å¡â€","default-single":"Ã«â€š Ã¬Â§Å“Ã«Â¥Â¼ Ã¬â€ž Ã­Æ’ÂÃ­â€¢Â´ Ã¬Â£Â¼Ã¬â€žÂ¸Ã¬Å¡â€","default-less":"%d Ã¬ÂÂ¼Ã«Â³Â´Ã«â€¹Â¤ Ã¬Å¾â€˜Ã¬Ââ‚¬ Ã«â€š Ã¬Â§Å“Ã«Â¥Â¼ Ã¬â€ž Ã­Æ’ÂÃ­â€¢Â´ Ã¬Â£Â¼Ã¬â€žÂ¸Ã¬Å¡â€","default-range":"%dÃ¬â„¢â‚¬ %d Ã¬ÂÂ¼ Ã¬â€šÂ¬Ã¬ÂÂ´Ã¬ÂËœ Ã«â€š Ã¬Â§Å“ Ã«Â²â€Ã¬Å“â€žÃ«Â¥Â¼ Ã¬â€ž Ã­Æ’ÂÃ­â€¢Â´ Ã¬Â£Â¼Ã¬â€žÂ¸Ã¬Å¡â€","default-default":"Ã«â€š Ã¬Â§Å“ Ã«Â²â€Ã¬Å“â€žÃ«Â¥Â¼ Ã¬â€ž Ã­Æ’ÂÃ­â€¢Â´ Ã¬Â£Â¼Ã¬â€žÂ¸Ã¬Å¡â€",time:"Ã¬â€¹Å“ÃªÂ°Â",hour:"Ã¬â€¹Å“",minute:"Ã«Â¶â€ž"},no:{selected:"Valgt:",day:"Dag",days:"Dager",apply:"Lukk","week-1":"ma","week-2":"ti","week-3":"on","week-4":"to","week-5":"fr","week-6":"lÃƒÂ¸","week-7":"sÃƒÂ¸","month-name":["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],shortcuts:"Snarveier","custom-values":"Egendefinerte Verdier",past:"Over",following:"FÃƒÂ¸lger",previous:"Forrige","prev-week":"Uke","prev-month":"MÃƒÂ¥ned","prev-year":"Ãƒâ€¦r",next:"Neste","next-week":"Uke","next-month":"MÃƒÂ¥ned","next-year":"Ãƒâ€¦r","less-than":"Datoperioden skal ikkje vÃƒÂ¦re lengre enn %d dager","more-than":"Datoperioden skal ikkje vÃƒÂ¦re kortere enn %d dager","default-more":"Vennligst velg ein datoperiode lengre enn %d dager","default-single":"Vennligst velg ein dato","default-less":"Vennligst velg ein datoperiode mindre enn %d dager","default-range":"Vennligst velg ein datoperiode mellom %d og %d dager","default-default":"Vennligst velg ein datoperiode",time:"Tid",hour:"Time",minute:"Minutter"},nl:{selected:"Geselecteerd:",day:"Dag",days:"Dagen",apply:"Ok","week-1":"ma","week-2":"di","week-3":"wo","week-4":"do","week-5":"vr","week-6":"za","week-7":"zo","month-name":["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],shortcuts:"Snelkoppelingen","custom-values":"Aangepaste waarden",past:"Verleden",following:"Komend",previous:"Vorige","prev-week":"Week","prev-month":"Maand","prev-year":"Jaar",next:"Volgende","next-week":"Week","next-month":"Maand","next-year":"Jaar","less-than":"Interval moet langer dan %d dagen zijn","more-than":"Interval mag niet minder dan %d dagen zijn","default-more":"Selecteer een interval langer dan %dagen","default-single":"Selecteer een datum","default-less":"Selecteer een interval minder dan %d dagen","default-range":"Selecteer een interval tussen %d en %d dagen","default-default":"Selecteer een interval",time:"Tijd",hour:"Uur",minute:"Minuut"},ru:{selected:"Ãâ€™Ã‘â€¹ÃÂ±Ã‘â‚¬ÃÂ°ÃÂ½ÃÂ¾:",day:"Ãâ€ÃÂµÃÂ½Ã‘Å’",days:"Ãâ€ÃÂ½ÃÂµÃÂ¹",apply:"ÃÅ¸Ã‘â‚¬ÃÂ¸ÃÂ¼ÃÂµÃÂ½ÃÂ¸Ã‘â€šÃ‘Å’","week-1":"ÃÂ¿ÃÂ½","week-2":"ÃÂ²Ã‘â€š","week-3":"Ã‘ÂÃ‘â‚¬","week-4":"Ã‘â€¡Ã‘â€š","week-5":"ÃÂ¿Ã‘â€š","week-6":"Ã‘ÂÃÂ±","week-7":"ÃÂ²Ã‘Â","month-name":["Ã‘ÂÃÂ½ÃÂ²ÃÂ°Ã‘â‚¬Ã‘Å’","Ã‘â€žÃÂµÃÂ²Ã‘â‚¬ÃÂ°ÃÂ»Ã‘Å’","ÃÂ¼ÃÂ°Ã‘â‚¬Ã‘â€š","ÃÂ°ÃÂ¿Ã‘â‚¬ÃÂµÃÂ»Ã‘Å’","ÃÂ¼ÃÂ°ÃÂ¹","ÃÂ¸Ã‘Å½ÃÂ½Ã‘Å’","ÃÂ¸Ã‘Å½ÃÂ»Ã‘Å’","ÃÂ°ÃÂ²ÃÂ³Ã‘Æ’Ã‘ÂÃ‘â€š","Ã‘ÂÃÂµÃÂ½Ã‘â€šÃ‘ÂÃÂ±Ã‘â‚¬Ã‘Å’","ÃÂ¾ÃÂºÃ‘â€šÃ‘ÂÃÂ±Ã‘â‚¬Ã‘Å’","ÃÂ½ÃÂ¾Ã‘ÂÃÂ±Ã‘â‚¬Ã‘Å’","ÃÂ´ÃÂµÃÂºÃÂ°ÃÂ±Ã‘â‚¬Ã‘Å’"],shortcuts:"Ãâ€˜Ã‘â€¹Ã‘ÂÃ‘â€šÃ‘â‚¬Ã‘â€¹ÃÂ¹ ÃÂ²Ã‘â€¹ÃÂ±ÃÂ¾Ã‘â‚¬","custom-values":"ÃÅ¸ÃÂ¾ÃÂ»Ã‘Å’ÃÂ·ÃÂ¾ÃÂ²ÃÂ°Ã‘â€šÃÂµÃÂ»Ã‘Å’Ã‘ÂÃÂºÃÂ¸ÃÂµ ÃÂ·ÃÂ½ÃÂ°Ã‘â€¡ÃÂµÃÂ½ÃÂ¸Ã‘Â",past:"ÃÅ¸Ã‘â‚¬ÃÂ¾Ã‘Ë†ÃÂµÃÂ´Ã‘Ë†ÃÂ¸ÃÂµ",following:"ÃÂ¡ÃÂ»ÃÂµÃÂ´Ã‘Æ’Ã‘Å½Ã‘â€°ÃÂ¸ÃÂµ",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"ÃÂÃÂµÃÂ´ÃÂµÃÂ»Ã‘Â","prev-month":"ÃÅ“ÃÂµÃ‘ÂÃ‘ÂÃ‘â€ ","prev-year":"Ãâ€œÃÂ¾ÃÂ´",next:"&nbsp;&nbsp;&nbsp;","next-week":"ÃÂÃÂµÃÂ´ÃÂµÃÂ»Ã‘Â","next-month":"ÃÅ“ÃÂµÃ‘ÂÃ‘ÂÃ‘â€ ","next-year":"Ãâ€œÃÂ¾ÃÂ´","less-than":"Ãâ€ÃÂ¸ÃÂ°ÃÂ¿ÃÂ°ÃÂ·ÃÂ¾ÃÂ½ ÃÂ½ÃÂµ ÃÂ¼ÃÂ¾ÃÂ¶ÃÂµÃ‘â€š ÃÂ±Ã‘â€¹Ã‘â€šÃ‘Å’ ÃÂ±ÃÂ¾ÃÂ»Ã‘Å’Ã‘Ë†ÃÂµ %d ÃÂ´ÃÂ½ÃÂµÃÂ¹","more-than":"Ãâ€ÃÂ¸ÃÂ°ÃÂ¿ÃÂ°ÃÂ·ÃÂ¾ÃÂ½ ÃÂ½ÃÂµ ÃÂ¼ÃÂ¾ÃÂ¶ÃÂµÃ‘â€š ÃÂ±Ã‘â€¹Ã‘â€šÃ‘Å’ ÃÂ¼ÃÂµÃÂ½Ã‘Å’Ã‘Ë†ÃÂµ %d ÃÂ´ÃÂ½ÃÂµÃÂ¹","default-more":"ÃÅ¸ÃÂ¾ÃÂ¶ÃÂ°ÃÂ»Ã‘Æ’ÃÂ¹Ã‘ÂÃ‘â€šÃÂ° ÃÂ²Ã‘â€¹ÃÂ±ÃÂµÃ‘â‚¬ÃÂ¸Ã‘â€šÃÂµ ÃÂ´ÃÂ¸ÃÂ°ÃÂ¿ÃÂ°ÃÂ·ÃÂ¾ÃÂ½ ÃÂ±ÃÂ¾ÃÂ»Ã‘Å’Ã‘Ë†ÃÂµ %d ÃÂ´ÃÂ½ÃÂµÃÂ¹","default-single":"ÃÅ¸ÃÂ¾ÃÂ¶ÃÂ°ÃÂ»Ã‘Æ’ÃÂ¹Ã‘ÂÃ‘â€šÃÂ° ÃÂ²Ã‘â€¹ÃÂ±ÃÂµÃ‘â‚¬ÃÂ¸Ã‘â€šÃÂµ ÃÂ´ÃÂ°Ã‘â€šÃ‘Æ’","default-less":"ÃÅ¸ÃÂ¾ÃÂ¶ÃÂ°ÃÂ»Ã‘Æ’ÃÂ¹Ã‘ÂÃ‘â€šÃÂ° ÃÂ²Ã‘â€¹ÃÂ±ÃÂµÃ‘â‚¬ÃÂ¸Ã‘â€šÃÂµ ÃÂ´ÃÂ¸ÃÂ°ÃÂ¿ÃÂ°ÃÂ·ÃÂ¾ÃÂ½ ÃÂ¼ÃÂµÃÂ½Ã‘Å’Ã‘Ë†ÃÂµ %d ÃÂ´ÃÂ½ÃÂµÃÂ¹","default-range":"ÃÅ¸ÃÂ¾ÃÂ¶ÃÂ°ÃÂ»Ã‘Æ’ÃÂ¹Ã‘ÂÃ‘â€šÃÂ° ÃÂ²Ã‘â€¹ÃÂ±ÃÂµÃ‘â‚¬ÃÂ¸Ã‘â€šÃÂµ ÃÂ´ÃÂ¸ÃÂ°ÃÂ¿ÃÂ°ÃÂ·ÃÂ¾ÃÂ½ ÃÂ¼ÃÂµÃÂ¶ÃÂ´Ã‘Æ’ %d ÃÂ¸ %d ÃÂ´ÃÂ½Ã‘ÂÃÂ¼ÃÂ¸","default-default":"ÃÅ¸ÃÂ¾ÃÂ¶ÃÂ°ÃÂ»Ã‘Æ’ÃÂ¹Ã‘ÂÃ‘â€šÃÂ° ÃÂ²Ã‘â€¹ÃÂ±ÃÂµÃ‘â‚¬ÃÂ¸Ã‘â€šÃÂµ ÃÂ´ÃÂ¸ÃÂ°ÃÂ¿ÃÂ°ÃÂ·ÃÂ¾ÃÂ½",time:"Ãâ€™Ã‘â‚¬ÃÂµÃÂ¼Ã‘Â",hour:"ÃÂ§ÃÂ°Ã‘ÂÃ‘â€¹",minute:"ÃÅ“ÃÂ¸ÃÂ½Ã‘Æ’Ã‘â€šÃ‘â€¹"},pl:{selected:"Wybrany:",day:"DzieÃ…â€ž",days:"Dni",apply:"Zamknij","week-1":"pon","week-2":"wt","week-3":"Ã…â€ºr","week-4":"czw","week-5":"pt","week-6":"so","week-7":"nd","month-name":["styczeÃ…â€ž","luty","marzec","kwiecieÃ…â€ž","maj","czerwiec","lipiec","sierpieÃ…â€ž","wrzesieÃ…â€ž","paÃ…Âºdziernik","listopad","grudzieÃ…â€ž"],shortcuts:"SkrÃƒÂ³ty","custom-values":"Niestandardowe wartoÃ…â€ºci",past:"PrzeszÃ…â€še",following:"NastÃ„â„¢pne",previous:"Poprzednie","prev-week":"tydzieÃ…â€ž","prev-month":"miesiÃ„â€¦c","prev-year":"rok",next:"NastÃ„â„¢pny","next-week":"tydzieÃ…â€ž","next-month":"miesiÃ„â€¦c","next-year":"rok","less-than":"Okres nie powinien byÃ„â€¡ dÃ…â€šuÃ…Â¼szy niÃ…Â¼ %d dni","more-than":"Okres nie powinien byÃ„â€¡ krÃƒÂ³tszy niÃ…Â¼  %d ni","default-more":"Wybierz okres dÃ…â€šuÃ…Â¼szy niÃ…Â¼ %d dni","default-single":"Wybierz datÃ„â„¢","default-less":"Wybierz okres krÃƒÂ³tszy niÃ…Â¼ %d dni","default-range":"Wybierz okres trwajÃ„â€¦cy od %d do %d dni","default-default":"Wybierz okres",time:"Czas",hour:"Godzina",minute:"Minuta"},se:{selected:"Vald:",day:"dag",days:"dagar",apply:"godkÃƒÂ¤nn","week-1":"ma","week-2":"ti","week-3":"on","week-4":"to","week-5":"fr","week-6":"lÃƒÂ¶","week-7":"sÃƒÂ¶","month-name":["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],shortcuts:"genvÃƒÂ¤gar","custom-values":"Anpassade vÃƒÂ¤rden",past:"ÃƒÂ¶ver",following:"fÃƒÂ¶ljande",previous:"fÃƒÂ¶rra","prev-week":"vecka","prev-month":"mÃƒÂ¥nad","prev-year":"ÃƒÂ¥r",next:"nÃƒÂ¤sta","next-week":"vecka","next-month":"mÃƒÂ¥ned","next-year":"ÃƒÂ¥r","less-than":"Datumintervall bÃƒÂ¶r inte vara mindre ÃƒÂ¤n %d dagar","more-than":"Datumintervall bÃƒÂ¶r inte vara mer ÃƒÂ¤n %d dagar","default-more":"VÃƒÂ¤lj ett datumintervall lÃƒÂ¤ngre ÃƒÂ¤n %d dagar","default-single":"VÃƒÂ¤lj ett datum","default-less":"VÃƒÂ¤lj ett datumintervall mindre ÃƒÂ¤n %d dagar","default-range":"VÃƒÂ¤lj ett datumintervall mellan %d och %d dagar","default-default":"VÃƒÂ¤lj ett datumintervall",time:"tid",hour:"timme",minute:"minut"},pt:{selected:"Selecionado:",day:"Dia",days:"Dias",apply:"Fechar","week-1":"seg","week-2":"ter","week-3":"qua","week-4":"qui","week-5":"sex","week-6":"sab","week-7":"dom","week-number":"N","month-name":["janeiro","fevereiro","marÃƒÂ§o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],shortcuts:"Atalhos","custom-values":"Valores Personalizados",past:"Passado",following:"Seguinte",previous:"Anterior","prev-week":"Semana","prev-month":"MÃƒÂªs","prev-year":"Ano",next:"PrÃƒÂ³ximo","next-week":"PrÃƒÂ³xima Semana","next-month":"PrÃƒÂ³ximo MÃƒÂªs","next-year":"PrÃƒÂ³ximo Ano","less-than":"O perÃƒÂ­odo selecionado nÃƒÂ£o deve ser maior que %d dias","more-than":"O perÃƒÂ­odo selecionado nÃƒÂ£o deve ser menor que %d dias","default-more":"Selecione um perÃƒÂ­odo superior a %d dias","default-single":"Selecione uma data","default-less":"Selecione um perÃƒÂ­odo inferior a %d dias","default-range":"Selecione um perÃƒÂ­odo de %d a %d dias","default-default":"Selecione um perÃƒÂ­odo",time:"Tempo",hour:"Hora",minute:"Minuto"},tc:{selected:"Ã¥Â·Â²Ã©ÂÂ¸Ã¦â€œâ€¡:",day:"Ã¥Â¤Â©",days:"Ã¥Â¤Â©",apply:"Ã§Â¢ÂºÃ¥Â®Å¡","week-1":"Ã¤Â¸â‚¬","week-2":"Ã¤ÂºÅ’","week-3":"Ã¤Â¸â€°","week-4":"Ã¥â€ºâ€º","week-5":"Ã¤Âºâ€","week-6":"Ã¥â€¦Â­","week-7":"Ã¦â€”Â¥","week-number":"Ã¥â€˜Â¨","month-name":["Ã¤Â¸â‚¬Ã¦Å“Ë†","Ã¤ÂºÅ’Ã¦Å“Ë†","Ã¤Â¸â€°Ã¦Å“Ë†","Ã¥â€ºâ€ºÃ¦Å“Ë†","Ã¤Âºâ€Ã¦Å“Ë†","Ã¥â€¦Â­Ã¦Å“Ë†","Ã¤Â¸Æ’Ã¦Å“Ë†","Ã¥â€¦Â«Ã¦Å“Ë†","Ã¤Â¹ÂÃ¦Å“Ë†","Ã¥ÂÂÃ¦Å“Ë†","Ã¥ÂÂÃ¤Â¸â‚¬Ã¦Å“Ë†","Ã¥ÂÂÃ¤ÂºÅ’Ã¦Å“Ë†"],shortcuts:"Ã¥Â¿Â«Ã©â‚¬Å¸Ã©ÂÂ¸Ã¦â€œâ€¡",past:"Ã©ÂÅ½Ã¥Å½Â»",following:"Ã¥Â°â€¡Ã¤Â¾â€ ",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"Ã¤Â¸Å Ã©â‚¬Â±","prev-month":"Ã¤Â¸Å Ã¥â‚¬â€¹Ã¦Å“Ë†","prev-year":"Ã¥Å½Â»Ã¥Â¹Â´",next:"&nbsp;&nbsp;&nbsp;","next-week":"Ã¤Â¸â€¹Ã¥â€˜Â¨","next-month":"Ã¤Â¸â€¹Ã¥â‚¬â€¹Ã¦Å“Ë†","next-year":"Ã¦ËœÅ½Ã¥Â¹Â´","less-than":"Ã¦â€°â‚¬Ã©ÂÂ¸Ã¦â€”Â¥Ã¦Å“Å¸Ã§Â¯â€žÃ¥Å“ÂÃ¤Â¸ÂÃ¨Æ’Â½Ã¥Â¤Â§Ã¦â€“Â¼%dÃ¥Â¤Â©","more-than":"Ã¦â€°â‚¬Ã©ÂÂ¸Ã¦â€”Â¥Ã¦Å“Å¸Ã§Â¯â€žÃ¥Å“ÂÃ¤Â¸ÂÃ¨Æ’Â½Ã¥Â°ÂÃ¦â€“Â¼%dÃ¥Â¤Â©","default-more":"Ã¨Â«â€¹Ã©ÂÂ¸Ã¦â€œâ€¡Ã¥Â¤Â§Ã¦â€“Â¼%dÃ¥Â¤Â©Ã§Å¡â€žÃ¦â€”Â¥Ã¦Å“Å¸Ã§Â¯â€žÃ¥Å“Â","default-less":"Ã¨Â«â€¹Ã©ÂÂ¸Ã¦â€œâ€¡Ã¥Â°ÂÃ¦â€“Â¼%dÃ¥Â¤Â©Ã§Å¡â€žÃ¦â€”Â¥Ã¦Å“Å¸Ã§Â¯â€žÃ¥Å“Â","default-range":"Ã¨Â«â€¹Ã©ÂÂ¸Ã¦â€œâ€¡%dÃ¥Â¤Â©Ã¥Ë†Â°%dÃ¥Â¤Â©Ã§Å¡â€žÃ¦â€”Â¥Ã¦Å“Å¸Ã§Â¯â€žÃ¥Å“Â","default-single":"Ã¨Â«â€¹Ã©ÂÂ¸Ã¦â€œâ€¡Ã¤Â¸â‚¬Ã¥â‚¬â€¹Ã¦â€”Â¥Ã¦Å“Å¸","default-default":"Ã¨Â«â€¹Ã©ÂÂ¸Ã¦â€œâ€¡Ã¤Â¸â‚¬Ã¥â‚¬â€¹Ã¦â€”Â¥Ã¦Å“Å¸Ã§Â¯â€žÃ¥Å“Â",time:"Ã¦â€”Â¥Ã¦Å“Å¸",hour:"Ã¥Â°ÂÃ¦â„¢â€š",minute:"Ã¥Ë†â€ Ã©ÂËœ"},ja:{selected:"Ã©ÂÂ¸Ã¦Å Å¾Ã£Ââ€”Ã£ÂÂ¾Ã£Ââ€”Ã£ÂÅ¸:",day:"Ã¦â€”Â¥",days:"Ã¦â€”Â¥Ã£â‚¬â€¦",apply:"Ã©â€“â€°Ã£ÂËœÃ£â€šâ€¹","week-1":"Ã¦â€”Â¥","week-2":"Ã¦Å“Ë†","week-3":"Ã§ÂÂ«","week-4":"Ã¦Â°Â´","week-5":"Ã¦Å“Â¨","week-6":"Ã©â€¡â€˜","week-7":"Ã¥Å“Å¸","month-name":["1Ã¦Å“Ë†","2Ã¦Å“Ë†","3Ã¦Å“Ë†","4Ã¦Å“Ë†","5Ã¦Å“Ë†","6Ã¦Å“Ë†","7Ã¦Å“Ë†","8Ã¦Å“Ë†","9Ã¦Å“Ë†","10Ã¦Å“Ë†","11Ã¦Å“Ë†","12Ã¦Å“Ë†"],shortcuts:"Ã£â€šÂ¯Ã£â€šÂ¤Ã£Æ’Æ’Ã£â€šÂ¯Ã©ÂÂ¸Ã¦Å Å¾",past:"Ã©ÂÅ½Ã¥Å½Â»",following:"Ã¥Â°â€ Ã¦ÂÂ¥",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"Ã¥â€¦Ë†Ã©â‚¬Â±Ã£â‚¬Â","prev-month":"Ã¥â€¦Ë†Ã¦Å“Ë†","prev-year":"Ã¦ËœÂ¨Ã¥Â¹Â´",next:"&nbsp;&nbsp;&nbsp;","next-week":"Ã¦ÂÂ¥Ã©â‚¬Â±","next-month":"Ã¦ÂÂ¥Ã¦Å“Ë†","next-year":"Ã¦ÂÂ¥Ã¥Â¹Â´","less-than":"Ã¦â€”Â¥Ã¤Â»ËœÃ£ÂÂ®Ã§Â¯â€žÃ¥â€ºÂ²Ã£ÂÂ¯ Ã¯Â¼â€¦d Ã¦â€”Â¥Ã¤Â»Â¥Ã¤Â¸Å Ã£ÂÂ«Ã£Ââ„¢Ã£ÂÂ¹Ã£ÂÂÃ£ÂÂ§Ã£ÂÂ¯Ã£Ââ€šÃ£â€šÅ Ã£ÂÂ¾Ã£Ââ€ºÃ£â€šâ€œ","more-than":"Ã¦â€”Â¥Ã¤Â»ËœÃ£ÂÂ®Ã§Â¯â€žÃ¥â€ºÂ²Ã£ÂÂ¯ Ã¯Â¼â€¦d Ã¦â€”Â¥Ã£â€šâ€™Ã¤Â¸â€¹Ã¥â€ºÅ¾Ã£ÂÂ£Ã£ÂÂ¦Ã£ÂÂ¯Ã£Ââ€žÃ£Ââ€˜Ã£ÂÂ¾Ã£Ââ€ºÃ£â€šâ€œ","default-more":"Ã¯Â¼â€¦d Ã¦â€”Â¥Ã£â€šË†Ã£â€šÅ Ã£â€šâ€šÃ©â€¢Â·Ã£Ââ€žÃ¦Å“Å¸Ã©â€“â€œÃ£â€šâ€™Ã©ÂÂ¸Ã¦Å Å¾Ã£Ââ€”Ã£ÂÂ¦Ã£ÂÂÃ£Â Ã£Ââ€¢Ã£Ââ€ž","default-less":"Ã¯Â¼â€¦d Ã¦â€”Â¥Ã¦Å“ÂªÃ¦Âºâ‚¬Ã£ÂÂ®Ã¦Å“Å¸Ã©â€“â€œÃ£â€šâ€™Ã©ÂÂ¸Ã¦Å Å¾Ã£Ââ€”Ã£ÂÂ¦Ã£ÂÂÃ£Â Ã£Ââ€¢Ã£Ââ€ž","default-range":"Ã¯Â¼â€¦d Ã£ÂÂ¨Ã¯Â¼â€¦ dÃ¦â€”Â¥Ã£ÂÂ®Ã©â€“â€œÃ£ÂÂ®Ã¦â€”Â¥Ã¤Â»ËœÃ§Â¯â€žÃ¥â€ºÂ²Ã£â€šâ€™Ã©ÂÂ¸Ã¦Å Å¾Ã£Ââ€”Ã£ÂÂ¦Ã£ÂÂÃ£Â Ã£Ââ€¢Ã£Ââ€ž","default-single":"Ã¦â€”Â¥Ã¤Â»ËœÃ£â€šâ€™Ã©ÂÂ¸Ã¦Å Å¾Ã£Ââ€”Ã£ÂÂ¦Ã£ÂÂÃ£Â Ã£Ââ€¢Ã£Ââ€ž","default-default":"Ã¦â€”Â¥Ã¤Â»ËœÃ§Â¯â€žÃ¥â€ºÂ²Ã£â€šâ€™Ã©ÂÂ¸Ã¦Å Å¾Ã£Ââ€”Ã£ÂÂ¦Ã£ÂÂÃ£Â Ã£Ââ€¢Ã£Ââ€ž",time:"Ã¦â„¢â€šÃ©â€“â€œ",hour:"Ã¦â„¢â€šÃ©â€“â€œ",minute:"Ã¥Ë†â€ "},da:{selected:"Valgt:",day:"Dag",days:"Dage",apply:"Luk","week-1":"ma","week-2":"ti","week-3":"on","week-4":"to","week-5":"fr","week-6":"lÃƒÂ¶","week-7":"sÃƒÂ¶","month-name":["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],shortcuts:"genveje","custom-values":"Brugerdefinerede vÃƒÂ¦rdier",past:"Forbi",following:"FÃƒÂ¸lgende",previous:"Forrige","prev-week":"uge","prev-month":"mÃƒÂ¥nad","prev-year":"ÃƒÂ¥r",next:"NÃƒÂ¦ste","next-week":"NÃƒÂ¦ste uge","next-month":"NÃƒÂ¦ste mÃƒÂ¥ned","next-year":"NÃƒÂ¦ste ÃƒÂ¥r","less-than":"Dato interval bÃƒÂ¸r ikke vÃƒÂ¦re med end %d dage","more-than":"Dato interval bÃƒÂ¸r ikke vÃƒÂ¦re mindre end %d dage","default-more":"VÃƒÂ¦lg datointerval lÃƒÂ¦ngere end %d dage","default-single":"VÃƒÂ¦lg dato","default-less":"VÃƒÂ¦lg datointerval mindre end %d dage","default-range":"VÃƒÂ¦lg datointerval mellem %d og %d dage","default-default":"VÃƒÂ¦lg datointerval",time:"tid",hour:"time",minute:"minut"},fi:{selected:"Valittu:",day:"PÃƒÂ¤ivÃƒÂ¤",days:"PÃƒÂ¤ivÃƒÂ¤ÃƒÂ¤",apply:"Sulje","week-1":"ma","week-2":"ti","week-3":"ke","week-4":"to","week-5":"pe","week-6":"la","week-7":"su","week-number":"V","month-name":["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesÃƒÂ¤kuu","heinÃƒÂ¤kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],shortcuts:"Pikavalinnat","custom-values":"Mukautetut Arvot",past:"Menneet",following:"Tulevat",previous:"Edellinen","prev-week":"Viikko","prev-month":"Kuukausi","prev-year":"Vuosi",next:"Seuraava","next-week":"Viikko","next-month":"Kuukausi","next-year":"Vuosi","less-than":"Aikajakson tulisi olla vÃƒÂ¤hemmÃƒÂ¤n kuin %d pÃƒÂ¤ivÃƒÂ¤ÃƒÂ¤","more-than":"Aikajakson ei tulisi olla vÃƒÂ¤hempÃƒÂ¤ÃƒÂ¤ kuin %d pÃƒÂ¤ivÃƒÂ¤ÃƒÂ¤","default-more":"Valitse pidempi aikajakso kuin %d pÃƒÂ¤ivÃƒÂ¤ÃƒÂ¤","default-single":"Valitse pÃƒÂ¤ivÃƒÂ¤","default-less":"Valitse lyhyempi aikajakso kuin %d pÃƒÂ¤ivÃƒÂ¤ÃƒÂ¤","default-range":"Valitse aikajakso %d ja %d pÃƒÂ¤ivÃƒÂ¤n vÃƒÂ¤liltÃƒÂ¤","default-default":"Valitse aikajakso",time:"Aika",hour:"Tunti",minute:"Minuutti"}},e.fn.dateRangePicker=function(a){a||(a={}),(a=e.extend(!0,{autoClose:!1,format:"YYYY-MM-DD",separator:" to ",language:"auto",startOfWeek:"sunday",getValue:function(){return e(this).val()},setValue:function(t){e(this).attr("readonly")||e(this).is(":disabled")||t==e(this).val()||e(this).val(t)},startDate:!1,endDate:!1,time:{enabled:!1},minDays:0,maxDays:0,showShortcuts:!1,shortcuts:{},customShortcuts:[],inline:!1,container:"body",alwaysOpen:!1,singleDate:!1,lookBehind:!1,batchMode:!1,duration:200,stickyMonths:!1,dayDivAttrs:[],dayTdAttrs:[],selectForward:!1,selectBackward:!1,applyBtnClass:"",singleMonth:"auto",hoveringTooltip:function(e,t,a){return e>1?e+" "+J("days"):""},showTopbar:!0,swapTime:!1,showWeekNumbers:!1,getWeekNumber:function(e){return t(e).format("w")},customOpenAnimation:null,customCloseAnimation:null,customArrowPrevSymbol:null,customArrowNextSymbol:null},a)).start=!1,a.end=!1,a.startWeek=!1,a.isTouchDevice="ontouchstart"in window||navigator.msMaxTouchPoints,a.isTouchDevice&&(a.hoveringTooltip=!1),"auto"==a.singleMonth&&(a.singleMonth=e(window).width()<480),a.singleMonth&&(a.stickyMonths=!1),a.showTopbar||(a.autoClose=!0),a.startDate&&"string"==typeof a.startDate&&(a.startDate=t(a.startDate,a.format).toDate()),a.endDate&&"string"==typeof a.endDate&&(a.endDate=t(a.endDate,a.format).toDate());var n,r,s=function(){if("auto"==a.language){var t=navigator.language?navigator.language:navigator.browserLanguage;if(!t)return e.dateRangePickerLanguages.default;for(var n in t=t.toLowerCase(),e.dateRangePickerLanguages)if(-1!==t.indexOf(n))return e.dateRangePickerLanguages[n];return e.dateRangePickerLanguages.default}return a.language&&a.language in e.dateRangePickerLanguages?e.dateRangePickerLanguages[a.language]:e.dateRangePickerLanguages.default}(),i=!1,o=this,d=e(o).get(0);return e(this).unbind(".datepicker").bind("click.datepicker",function(e){n.is(":visible")||u(a.duration)}).bind("change.datepicker",function(e){m()}).bind("keyup.datepicker",function(){try{clearTimeout(r)}catch(e){}r=setTimeout(function(){m()},2e3)}),function(){var r=this;if(e(this).data("date-picker-opened"))return void I();e(this).data("date-picker-opened",!0),(n=function(){var t,n='<div class="date-picker-wrapper';a.extraClass&&(n+=" "+a.extraClass+" "),a.singleDate&&(n+=" single-date "),a.showShortcuts||(n+=" no-shortcuts "),a.showTopbar||(n+=" no-topbar "),a.customTopBar&&(n+=" custom-topbar "),n+='">',a.showTopbar&&(n+='<div class="drp_top-bar">',a.customTopBar?("function"==typeof a.customTopBar&&(a.customTopBar=a.customTopBar()),n+='<div class="custom-top">'+a.customTopBar+"</div>"):(n+='<div class="normal-top"><span style="color:#333">'+J("selected")+' </span> <b class="start-day">...</b>',a.singleDate||(n+=' <span class="separator-day">'+a.separator+'</span> <b class="end-day">...</b> <i class="selected-days">(<span class="selected-days-num">3</span> '+J("days")+")</i>"),n+="</div>",n+='<div class="error-top">error</div><div class="default-top">default</div>'),n+='<input type="button" class="apply-btn disabled'+(t="",!0===a.autoClose&&(t+=" hide"),""!==a.applyBtnClass&&(t+=" "+a.applyBtnClass),t)+'" value="'+J("apply")+'" />',n+="</div>");var r=a.showWeekNumbers?6:5,s="&lt;";a.customArrowPrevSymbol&&(s=a.customArrowPrevSymbol);var i="&gt;";if(a.customArrowNextSymbol&&(i=a.customArrowNextSymbol),n+='<div class="month-wrapper">   <table class="month1" cellspacing="0" border="0" cellpadding="0">       <thead>           <tr class="caption">               <th style="width:27px;">                   <span class="prev">'+s+'                   </span>               </th>               <th colspan="'+r+'" class="month-name">               </th>               <th style="width:27px;">'+(a.singleDate||!a.stickyMonths?'<span class="next">'+i+"</span>":"")+'               </th>           </tr>           <tr class="week-name">'+H()+"       </thead>       <tbody></tbody>   </table>",a.singleMonth||(n+='<div class="gap">'+function(){for(var e=['<div class="gap-top-mask"></div><div class="gap-bottom-mask"></div><div class="gap-lines">'],t=0;t<20;t++)e.push('<div class="gap-line"><div class="gap-1"></div><div class="gap-2"></div><div class="gap-3"></div></div>');return e.push("</div>"),e.join("")}()+'</div><table class="month2" cellspacing="0" border="0" cellpadding="0">   <thead>   <tr class="caption">       <th style="width:27px;">'+(a.stickyMonths?"":'<span class="prev">'+s+"</span>")+'       </th>       <th colspan="'+r+'" class="month-name">       </th>       <th style="width:27px;">           <span class="next">'+i+'</span>       </th>   </tr>   <tr class="week-name">'+H()+"   </thead>   <tbody></tbody></table>"),n+='<div style="clear:both;height:0;font-size:0;"></div><div class="time"><div class="time1"></div>',a.singleDate||(n+='<div class="time2"></div>'),n+='</div><div style="clear:both;height:0;font-size:0;"></div></div>',n+='<div class="footer">',a.showShortcuts){n+='<div class="shortcuts"><b>'+J("shortcuts")+"</b>";var o=a.shortcuts;if(o){var d;if(o["prev-days"]&&o["prev-days"].length>0){n+='&nbsp;<span class="prev-days">'+J("past");for(var l=0;l<o["prev-days"].length;l++)d=o["prev-days"][l],d+=o["prev-days"][l]>1?J("days"):J("day"),n+=' <a href="javascript:;" shortcut="day,-'+o["prev-days"][l]+'">'+d+"</a>";n+="</span>"}if(o["next-days"]&&o["next-days"].length>0){n+='&nbsp;<span class="next-days">'+J("following");for(var l=0;l<o["next-days"].length;l++)d=o["next-days"][l],d+=o["next-days"][l]>1?J("days"):J("day"),n+=' <a href="javascript:;" shortcut="day,'+o["next-days"][l]+'">'+d+"</a>";n+="</span>"}if(o.prev&&o.prev.length>0){n+='&nbsp;<span class="prev-buttons">'+J("previous");for(var l=0;l<o.prev.length;l++)d=J("prev-"+o.prev[l]),n+=' <a href="javascript:;" shortcut="prev,'+o.prev[l]+'">'+d+"</a>";n+="</span>"}if(o.next&&o.next.length>0){n+='&nbsp;<span class="next-buttons">'+J("next");for(var l=0;l<o.next.length;l++)d=J("next-"+o.next[l]),n+=' <a href="javascript:;" shortcut="next,'+o.next[l]+'">'+d+"</a>";n+="</span>"}}if(a.customShortcuts)for(var l=0;l<a.customShortcuts.length;l++){var u=a.customShortcuts[l];n+='&nbsp;<span class="custom-shortcut"><a href="javascript:;" shortcut="custom">'+u.name+"</a></span>"}n+="</div>"}if(a.showCustomValues&&(n+='<div class="customValues"><b>'+(a.customValueLabel||J("custom-values"))+"</b>",a.customValues))for(var l=0;l<a.customValues.length;l++){var m=a.customValues[l];n+='&nbsp;<span class="custom-value"><a href="javascript:;" custom="'+m.value+'">'+m.name+"</a></span>"}return e(n+="</div></div>")}().hide()).append('<div class="date-range-length-tip"></div>'),e(a.container).append(n),a.inline?n.addClass("inline-wrapper"):l();a.alwaysOpen&&n.find(".apply-btn").hide();var s=K();if(_(s),a.time.enabled)if(a.startDate&&a.endDate||a.start&&a.end)V(t(a.start||a.startDate).toDate(),"time1"),V(t(a.end||a.endDate).toDate(),"time2");else{var o=a.defaultEndTime?a.defaultEndTime:s;V(s,"time1"),V(o,"time2")}var u="";u=a.singleDate?J("default-single"):a.minDays&&a.maxDays?J("default-range"):a.minDays?J("default-more"):a.maxDays?J("default-less"):J("default-default");n.find(".default-top").html(u.replace(/\%d/,a.minDays).replace(/\%d/,a.maxDays)),a.singleMonth?n.addClass("single-month"):n.addClass("two-months");setTimeout(function(){p(),i=!0},0),n.click(function(e){e.stopPropagation()}),e(document).bind("click.datepicker",function(t){(function(t,a){return a.contains(t.target)||t.target==a||null!=a.childNodes&&e.inArray(t.target,a.childNodes)>=0})(t,r[0])||n.is(":visible")&&I()}),n.find(".next").click(function(){a.stickyMonths?function(e){var t=L(a.month1),n=L(a.month2);if(R(n))return;if(!a.singleDate&&N(t,n)>=0)return;Y(t,"month1"),Y(n,"month2"),S()}():function(t){var n=e(t).parents("table").hasClass("month2"),r=n?a.month2:a.month1;if(r=L(r),!a.singleMonth&&!a.singleDate&&!n&&N(r,a.month2)>=0||R(r))return;Y(r,n?"month2":"month1"),W()}(this)}),n.find(".prev").click(function(){a.stickyMonths?function(e){var t=F(a.month1),n=F(a.month2);if(R(t))return;if(!a.singleDate&&N(n,t)<=0)return;Y(n,"month2"),Y(t,"month1"),S()}():function(t){var n=e(t).parents("table").hasClass("month2"),r=n?a.month2:a.month1;if(r=F(r),n&&N(r,a.month1)<=0||R(r))return;Y(r,n?"month2":"month1"),W()}(this)}),n.attr("unselectable","on").css("user-select","none").bind("selectstart",function(e){return e.preventDefault(),!1}),n.find(".apply-btn").click(function(){I();var t=P(new Date(a.start))+a.separator+P(new Date(a.end));e(r).trigger("datepicker-apply",{value:t,date1:new Date(a.start),date2:new Date(a.end)})}),n.find("[custom]").click(function(){var t=e(this).attr("custom");a.start=!1,a.end=!1,n.find(".day.checked").removeClass("checked"),a.setValue.call(d,t),T(),z(!0),S(),a.autoClose&&I()}),n.find("[shortcut]").click(function(){var t,n=e(this).attr("shortcut"),r=new Date,s=!1;if(-1!=n.indexOf("day")){var i=parseInt(n.split(",",2)[1],10);s=new Date((new Date).getTime()+864e5*i),r=new Date(r.getTime()+864e5*(i>0?1:-1))}else if(-1!=n.indexOf("week")){var o;for(t=-1!=n.indexOf("prev,")?-1:1,o=1==t?"monday"==a.startOfWeek?1:0:"monday"==a.startOfWeek?0:6,r=new Date(r.getTime()-864e5);r.getDay()!=o;)r=new Date(r.getTime()+864e5*t);s=new Date(r.getTime()+864e5*t*6)}else if(-1!=n.indexOf("month"))t=-1!=n.indexOf("prev,")?-1:1,(s=1==t?L(r):F(r)).setDate(1),(r=L(s)).setDate(1),r=new Date(r.getTime()-864e5);else if(-1!=n.indexOf("year"))t=-1!=n.indexOf("prev,")?-1:1,(s=new Date).setFullYear(r.getFullYear()+t),s.setMonth(0),s.setDate(1),r.setFullYear(r.getFullYear()+t),r.setMonth(11),r.setDate(31);else if("custom"==n){var d=e(this).html();if(a.customShortcuts&&a.customShortcuts.length>0)for(var l=0;l<a.customShortcuts.length;l++){var u=a.customShortcuts[l];if(u.name==d){var m=[];if((m=u.dates.call())&&2==m.length&&(s=m[0],r=m[1]),m&&1==m.length){var h=m[0];Y(h,"month1"),Y(L(h),"month2"),W()}break}}}s&&r&&(O(s,r),T())}),n.find(".time1 input[type=range]").bind("change touchmove",function(t){var a=t.target,n="hour"==a.name?e(a).val().replace(/^(\d{1})$/,"0$1"):void 0,r="minute"==a.name?e(a).val().replace(/^(\d{1})$/,"0$1"):void 0;v("time1",n,r)}),n.find(".time2 input[type=range]").bind("change touchmove",function(t){var a=t.target,n="hour"==a.name?e(a).val().replace(/^(\d{1})$/,"0$1"):void 0,r="minute"==a.name?e(a).val().replace(/^(\d{1})$/,"0$1"):void 0;v("time2",n,r)})}.call(this),a.alwaysOpen&&u(0),e(this).data("dateRangePicker",{setStart:function(e){return"string"==typeof e&&(e=t(e,a.format).toDate()),a.end=!1,j(e),this},setEnd:function(e,n){var r=new Date;return r.setTime(a.start),"string"==typeof e&&(e=t(e,a.format).toDate()),O(r,e,n),this},setDateRange:function(e,n,r){"string"==typeof e&&"string"==typeof n&&(e=t(e,a.format).toDate(),n=t(n,a.format).toDate()),O(e,n,r)},clear:function(){a.start=!1,a.end=!1,n.find(".day.checked").removeClass("checked"),n.find(".day.last-date-selected").removeClass("last-date-selected"),n.find(".day.first-date-selected").removeClass("first-date-selected"),a.setValue.call(d,""),T(),z(),S()},close:I,open:u,redraw:A,getDatePicker:function(){return n},resetMonthsView:_,destroy:function(){e(o).unbind(".datepicker"),e(o).data("dateRangePicker",""),e(o).data("date-picker-opened",null),n.remove(),e(window).unbind("resize.datepicker",l),e(document).unbind("click.datepicker",I)}}),e(window).bind("resize.datepicker",l),this;function l(){if(!a.inline){var t=e(o).offset();if("relative"==e(a.container).css("position")){var r=e(a.container).offset();n.css({top:t.top-r.top+e(o).outerHeight()+4,left:t.left-r.left})}else t.left<460?n.css({top:t.top+e(o).outerHeight()+parseInt(e("body").css("border-top")||0,10),left:t.left}):n.css({top:t.top+e(o).outerHeight()+parseInt(e("body").css("border-top")||0,10),left:t.left+e(o).width()-n.width()-16})}}function u(t){l(),A(),m(),a.customOpenAnimation?a.customOpenAnimation.call(n.get(0),function(){e(o).trigger("datepicker-opened",{relatedTarget:n})}):n.slideDown(t,function(){e(o).trigger("datepicker-opened",{relatedTarget:n})}),e(o).trigger("datepicker-open",{relatedTarget:n}),W(),p()}function m(){var e=a.getValue.call(d),n=e?e.split(a.separator):"";if(n&&(1==n.length&&a.singleDate||n.length>=2)){var r=a.format;r.match(/Do/)&&(r=r.replace(/Do/,"D"),n[0]=n[0].replace(/(\d+)(th|nd|st)/,"$1"),n.length>=2&&(n[1]=n[1].replace(/(\d+)(th|nd|st)/,"$1"))),i=!1,n.length>=2?O(h(n[0],r,t.locale(a.language)),h(n[1],r,t.locale(a.language))):1==n.length&&a.singleDate&&j(h(n[0],r,t.locale(a.language))),i=!0}}function h(e,a,n){return t(e,a,n).isValid()?t(e,a,n).toDate():t().toDate()}function p(){var e=n.find(".gap").css("margin-left");e&&(e=parseInt(e));var t=n.find(".month1").width(),a=n.find(".gap").width()+(e?2*e:0),r=n.find(".month2").width();n.find(".month-wrapper").width(t+a+r)}function f(e,a){n.find("."+e+" input[type=range].hour-range").val(t(a).hours()),n.find("."+e+" input[type=range].minute-range").val(t(a).minutes()),v(e,t(a).format("HH"),t(a).format("mm"))}function c(e,n){a[e]=parseInt(t(parseInt(n)).startOf("day").add(t(a[e+"Time"]).format("HH"),"h").add(t(a[e+"Time"]).format("mm"),"m").valueOf())}function v(e,r,s){switch(r&&n.find("."+e+" .hour-val").text(r),s&&n.find("."+e+" .minute-val").text(s),e){case"time1":a.start&&i("start",t(a.start)),i("startTime",t(a.startTime||t().valueOf()));break;case"time2":a.end&&i("end",t(a.end)),i("endTime",t(a.endTime||t().valueOf()))}function i(e,t){var n=t.format("HH"),i=t.format("mm");a[e]=t.startOf("day").add(r||n,"h").add(s||i,"m").valueOf()}T(),z(),S()}function g(e){var n=e;return"week-range"===a.batchMode?n="monday"===a.startOfWeek?t(parseInt(e)).startOf("isoweek").valueOf():t(parseInt(e)).startOf("week").valueOf():"month-range"===a.batchMode&&(n=t(parseInt(e)).startOf("month").valueOf()),n}function k(e){var n=e;return"week-range"===a.batchMode?n="monday"===a.startOfWeek?t(parseInt(e)).endOf("isoweek").valueOf():t(parseInt(e)).endOf("week").valueOf():"month-range"===a.batchMode&&(n=t(parseInt(e)).endOf("month").valueOf()),n}function w(n){if(!n.hasClass("invalid")){var r=n.attr("time");if(n.addClass("checked"),a.singleDate?(a.start=r,a.end=!1):"week"===a.batchMode?"monday"===a.startOfWeek?(a.start=t(parseInt(r)).startOf("isoweek").valueOf(),a.end=t(parseInt(r)).endOf("isoweek").valueOf()):(a.end=t(parseInt(r)).endOf("week").valueOf(),a.start=t(parseInt(r)).startOf("week").valueOf()):"workweek"===a.batchMode?(a.start=t(parseInt(r)).day(1).valueOf(),a.end=t(parseInt(r)).day(5).valueOf()):"weekend"===a.batchMode?(a.start=t(parseInt(r)).day(6).valueOf(),a.end=t(parseInt(r)).day(7).valueOf()):"month"===a.batchMode?(a.start=t(parseInt(r)).startOf("month").valueOf(),a.end=t(parseInt(r)).endOf("month").valueOf()):a.start&&a.end||!a.start&&!a.end?(a.start=g(r),a.end=!1):a.start&&(a.end=k(r),a.time.enabled&&c("end",a.end)),a.time.enabled&&(a.start&&c("start",a.start),a.end&&c("end",a.end)),!a.singleDate&&a.start&&a.end&&a.start>a.end){var s=a.end;a.end=k(a.start),a.start=g(s),a.time.enabled&&a.swapTime&&(f("time1",a.start),f("time2",a.end))}a.start=parseInt(a.start),a.end=parseInt(a.end),x(),a.start&&!a.end&&(e(o).trigger("datepicker-first-date-selected",{date1:new Date(a.start)}),D(n)),b(),T(),z(),S(),M()}}function y(e){if(e=parseInt(e,10),a.startDate&&B(e,a.startDate)<0)return!1;if(a.endDate&&B(e,a.endDate)>0)return!1;if(a.start&&!a.end&&!a.singleDate){if(a.maxDays>0&&C(e,a.start)>a.maxDays)return!1;if(a.minDays>0&&C(e,a.start)<a.minDays)return!1;if(a.selectForward&&e<a.start)return!1;if(a.selectBackward&&e>a.start)return!1;if(a.beforeShowDay&&"function"==typeof a.beforeShowDay){for(var t=!0,n=e;C(n,a.start)>1;){if(!a.beforeShowDay(new Date(n))[0]){t=!1;break}if(Math.abs(n-a.start)<864e5)break;n>a.start&&(n-=864e5),n<a.start&&(n+=864e5)}if(!t)return!1}}return!0}function b(){return n.find(".day.invalid.tmp").removeClass("tmp invalid").addClass("valid"),a.start&&!a.end&&n.find(".day.toMonth.valid").each(function(){y(parseInt(e(this).attr("time"),10))?e(this).addClass("valid tmp").removeClass("invalid"):e(this).addClass("invalid tmp").removeClass("valid")}),!0}function D(t){var r=parseInt(t.attr("time")),s="";if(t.hasClass("has-tooltip")&&t.attr("data-tooltip"))s='<span style="white-space:nowrap">'+t.attr("data-tooltip")+"</span>";else if(!t.hasClass("invalid"))if(a.singleDate)n.find(".day.hovering").removeClass("hovering"),t.addClass("hovering");else if(n.find(".day").each(function(){var t=parseInt(e(this).attr("time"));a.start,a.end;t==r?e(this).addClass("hovering"):e(this).removeClass("hovering"),a.start&&!a.end&&(a.start<t&&r>=t||a.start>t&&r<=t)?e(this).addClass("hovering"):e(this).removeClass("hovering")}),a.start&&!a.end){var i=C(r,a.start);a.hoveringTooltip&&("function"==typeof a.hoveringTooltip?s=a.hoveringTooltip(i,a.start,r):!0===a.hoveringTooltip&&i>1&&(s=i+" "+J("days")))}if(s){var o=t.offset(),d=n.offset(),l=o.left-d.left,u=o.top-d.top;l+=t.width()/2;var m=n.find(".date-range-length-tip"),h=m.css({visibility:"hidden",display:"none"}).html(s).width(),p=m.height();l-=h/2,u-=p,setTimeout(function(){m.css({left:l,top:u,display:"block",visibility:"visible"})},10)}else n.find(".date-range-length-tip").hide()}function x(){n.find(".day.hovering").removeClass("hovering"),n.find(".date-range-length-tip").hide()}function M(){!0===a.singleDate?i&&a.start&&a.autoClose&&I():i&&a.start&&a.end&&a.autoClose&&I()}function T(){var e=Math.ceil((a.end-a.start)/864e5)+1;a.singleDate?a.start&&!a.end?n.find(".drp_top-bar").removeClass("error").addClass("normal"):n.find(".drp_top-bar").removeClass("error").removeClass("normal"):a.maxDays&&e>a.maxDays?(a.start=!1,a.end=!1,n.find(".day").removeClass("checked"),n.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(J("less-than").replace("%d",a.maxDays))):a.minDays&&e<a.minDays?(a.start=!1,a.end=!1,n.find(".day").removeClass("checked"),n.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(J("more-than").replace("%d",a.minDays))):a.start||a.end?n.find(".drp_top-bar").removeClass("error").addClass("normal"):n.find(".drp_top-bar").removeClass("error").removeClass("normal"),a.singleDate&&a.start&&!a.end||!a.singleDate&&a.start&&a.end?n.find(".apply-btn").removeClass("disabled"):n.find(".apply-btn").addClass("disabled"),a.batchMode&&(a.start&&a.startDate&&B(a.start,a.startDate)<0||a.end&&a.endDate&&B(a.end,a.endDate)>0)&&(a.start=!1,a.end=!1,n.find(".day").removeClass("checked"))}function z(t,r){var s;n.find(".start-day").html("..."),n.find(".end-day").html("..."),n.find(".selected-days").hide(),a.start&&n.find(".start-day").html(P(new Date(parseInt(a.start)))),a.end&&n.find(".end-day").html(P(new Date(parseInt(a.end)))),a.start&&a.singleDate?(n.find(".apply-btn").removeClass("disabled"),s=P(new Date(a.start)),a.setValue.call(d,s,P(new Date(a.start)),P(new Date(a.end))),i&&!r&&e(o).trigger("datepicker-change",{value:s,date1:new Date(a.start)})):a.start&&a.end?(n.find(".selected-days").show().find(".selected-days-num").html(C(a.end,a.start)),n.find(".apply-btn").removeClass("disabled"),s=P(new Date(a.start))+a.separator+P(new Date(a.end)),a.setValue.call(d,s,P(new Date(a.start)),P(new Date(a.end))),i&&!r&&e(o).trigger("datepicker-change",{value:s,date1:new Date(a.start),date2:new Date(a.end)})):t?n.find(".apply-btn").removeClass("disabled"):n.find(".apply-btn").addClass("disabled")}function C(e,t){return Math.abs($(e)-$(t))+1}function O(e,t,n){if(e.getTime()>t.getTime()){var r=t;t=e,e=r,r=null}var s=!0;if(a.startDate&&B(e,a.startDate)<0&&(s=!1),a.endDate&&B(t,a.endDate)>0&&(s=!1),!s)return Y(a.startDate,"month1"),Y(L(a.startDate),"month2"),void W();a.start=e.getTime(),a.end=t.getTime(),a.time.enabled&&(f("time1",e),f("time2",t)),(a.stickyMonths||B(e,t)>0&&0===N(e,t))&&(a.lookBehind?e=F(t):t=L(e)),a.stickyMonths&&!1!==a.endDate&&N(t,a.endDate)>0&&(e=F(e),t=F(t)),a.stickyMonths||0===N(e,t)&&(a.lookBehind?e=F(t):t=L(e)),Y(e,"month1"),Y(t,"month2"),W(),T(),z(!1,n),M()}function j(e){var t=!0;if(a.startDate&&B(e,a.startDate)<0&&(t=!1),a.endDate&&B(e,a.endDate)>0&&(t=!1),t){if(a.start=e.getTime(),a.time.enabled&&f("time1",e),Y(e,"month1"),!0!==a.singleMonth)Y(L(e),"month2");W(),z(),M()}else Y(a.startDate,"month1")}function S(){(a.start||a.end)&&(n.find(".day").each(function(){var n=parseInt(e(this).attr("time")),r=a.start,s=a.end;a.time.enabled&&(n=t(n).startOf("day").valueOf(),r=t(r||t().valueOf()).startOf("day").valueOf(),s=t(s||t().valueOf()).startOf("day").valueOf()),a.start&&a.end&&s>=n&&r<=n||a.start&&!a.end&&t(r).format("YYYY-MM-DD")==t(n).format("YYYY-MM-DD")?e(this).addClass("checked"):e(this).removeClass("checked"),a.start&&t(r).format("YYYY-MM-DD")==t(n).format("YYYY-MM-DD")?e(this).addClass("first-date-selected"):e(this).removeClass("first-date-selected"),a.end&&t(s).format("YYYY-MM-DD")==t(n).format("YYYY-MM-DD")?e(this).addClass("last-date-selected"):e(this).removeClass("last-date-selected")}),n.find(".week-number").each(function(){e(this).attr("data-start-time")==a.startWeek&&e(this).addClass("week-number-selected")}))}function Y(r,s){r=t(r).toDate();var i,o=(i=r.getMonth(),J("month-name")[i]);n.find("."+s+" .month-name").html(o+" "+r.getFullYear()),n.find("."+s+" tbody").html(function(e){var n=[];e.setDate(1);new Date(e.getTime()-864e5);var r,s,i=new Date,o=e.getDay();0===o&&"monday"===a.startOfWeek&&(o=7);if(o>0)for(var d=o;d>0;d--){var l=new Date(e.getTime()-864e5*d);s=y(l.getTime()),a.startDate&&B(l,a.startDate)<0&&(s=!1),a.endDate&&B(l,a.endDate)>0&&(s=!1),n.push({date:l,type:"lastMonth",day:l.getDate(),time:l.getTime(),valid:s})}for(var u=e.getMonth(),d=0;d<40;d++)r=t(e).add(d,"days").toDate(),s=y(r.getTime()),a.startDate&&B(r,a.startDate)<0&&(s=!1),a.endDate&&B(r,a.endDate)>0&&(s=!1),n.push({date:r,type:r.getMonth()==u?"toMonth":"nextMonth",day:r.getDate(),time:r.getTime(),valid:s});for(var m=[],h=0;h<6&&"nextMonth"!=n[7*h].type;h++){m.push("<tr>");for(var l=0;l<7;l++){var p="monday"==a.startOfWeek?l+1:l;r=n[7*h+p];var f=t(r.time).format("L")==t(i).format("L");if(r.extraClass="",r.tooltip="",r.valid&&a.beforeShowDay&&"function"==typeof a.beforeShowDay){var c=a.beforeShowDay(t(r.time).toDate());r.valid=c[0],r.extraClass=c[1]||"",r.tooltip=c[2]||"",""!==r.tooltip&&(r.extraClass+=" has-tooltip ")}var v={time:r.time,"data-tooltip":r.tooltip,class:"day "+r.type+" "+r.extraClass+" "+(r.valid?"valid":"invalid")+" "+(f?"real-today":"")};0===l&&a.showWeekNumbers&&m.push('<td><div class="week-number" data-start-time="'+r.time+'">'+a.getWeekNumber(r.date)+"</div></td>"),m.push("<td "+q({},a.dayTdAttrs,r)+"><div "+q(v,a.dayDivAttrs,r)+">"+E(r.time,r.day)+"</div></td>")}m.push("</tr>")}return m.join("")}(r)),a[s]=r,b(),n.find(".day").unbind("click").click(function(t){w(e(this))}),n.find(".day").unbind("mouseenter").mouseenter(function(t){D(e(this))}),n.find(".day").unbind("mouseleave").mouseleave(function(e){n.find(".date-range-length-tip").hide(),a.singleDate&&x()}),n.find(".week-number").unbind("click").click(function(r){var s,i,o,d;s=e(this),d=parseInt(s.attr("data-start-time"),10),a.startWeek?(n.find(".week-number-selected").removeClass("week-number-selected"),i=new Date(d<a.startWeek?d:a.startWeek),o=new Date(d<a.startWeek?a.startWeek:d),a.startWeek=!1,a.start=t(i).day("monday"==a.startOfWeek?1:0).valueOf(),a.end=t(o).day("monday"==a.startOfWeek?7:6).valueOf()):(a.startWeek=d,s.addClass("week-number-selected"),i=new Date(d),a.start=t(i).day("monday"==a.startOfWeek?1:0).valueOf(),a.end=t(i).day("monday"==a.startOfWeek?7:6).valueOf()),b(),T(),z(),S(),M()})}function V(e,t){n.find("."+t).append("<div><span>"+J("Time")+': <span class="hour-val">00</span>:<span class="minute-val">00</span></span></div><div class="hour"><label>'+J("Hour")+': <input type="range" class="hour-range" name="hour" min="0" max="23"></label></div><div class="minute"><label>'+J("Minute")+': <input type="range" class="minute-range" name="minute" min="0" max="59"></label></div>'),f(t,e)}function P(e){return t(e).format(a.format)}function W(){S();var e=parseInt(t(a.month1).format("YYYYMM")),r=parseInt(t(a.month2).format("YYYYMM")),s=Math.abs(e-r);s>1&&89!=s?n.addClass("has-gap").removeClass("no-gap").find(".gap").css("visibility","visible"):n.removeClass("has-gap").addClass("no-gap").find(".gap").css("visibility","hidden");var i=n.find("table.month1").height(),o=n.find("table.month2").height();n.find(".gap").height(Math.max(i,o)+10)}function I(){if(!a.alwaysOpen){var t=function(){e(o).data("date-picker-opened",!1),e(o).trigger("datepicker-closed",{relatedTarget:n})};a.customCloseAnimation?a.customCloseAnimation.call(n.get(0),t):e(n).slideUp(a.duration,t),e(o).trigger("datepicker-close",{relatedTarget:n})}}function A(){Y(a.month1,"month1"),Y(a.month2,"month2")}function N(e,a){var n=parseInt(t(e).format("YYYYMM"))-parseInt(t(a).format("YYYYMM"));return n>0?1:0===n?0:-1}function B(e,a){var n=parseInt(t(e).format("YYYYMMDD"))-parseInt(t(a).format("YYYYMMDD"));return n>0?1:0===n?0:-1}function L(e){return t(e).add(1,"months").toDate()}function F(e){return t(e).add(-1,"months").toDate()}function H(){var e=a.showWeekNumbers?"<th>"+J("week-number")+"</th>":"";return"monday"==a.startOfWeek?e+"<th>"+J("week-1")+"</th><th>"+J("week-2")+"</th><th>"+J("week-3")+"</th><th>"+J("week-4")+"</th><th>"+J("week-5")+"</th><th>"+J("week-6")+"</th><th>"+J("week-7")+"</th>":e+"<th>"+J("week-7")+"</th><th>"+J("week-1")+"</th><th>"+J("week-2")+"</th><th>"+J("week-3")+"</th><th>"+J("week-4")+"</th><th>"+J("week-5")+"</th><th>"+J("week-6")+"</th>"}function R(e){return e=t(e),!(!a.startDate||!e.endOf("month").isBefore(a.startDate))||!(!a.endDate||!e.startOf("month").isAfter(a.endDate))}function q(t,a,n){var r=e.extend(!0,{},t);e.each(a,function(e,t){var a=t(n);for(var s in a)r.hasOwnProperty(s)?r[s]+=a[s]:r[s]=a[s]});var s="";for(var i in r)r.hasOwnProperty(i)&&(s+=i+'="'+r[i]+'" ');return s}function $(e){return Math.floor(function(e){t.isMoment(e)&&(e=e.toDate().getTime());"object"==typeof e&&e.getTime&&(e=e.getTime());"string"!=typeof e||e.match(/\d{13}/)||(e=t(e,a.format).toDate().getTime());return e=parseInt(e,10)-60*(new Date).getTimezoneOffset()*1e3}(e)/864e5)}function E(e,t){return a.showDateFilter&&"function"==typeof a.showDateFilter?a.showDateFilter(e,t):t}function J(t){var a=t.toLowerCase(),n=t in s?s[t]:a in s?s[a]:null,r=e.dateRangePickerLanguages.default;return null==n&&(n=t in r?r[t]:a in r?r[a]:""),n}function K(){var e=a.defaultTime?a.defaultTime:new Date;return a.lookBehind?(a.startDate&&N(e,a.startDate)<0&&(e=L(t(a.startDate).toDate())),a.endDate&&N(e,a.endDate)>0&&(e=t(a.endDate).toDate())):(a.startDate&&N(e,a.startDate)<0&&(e=t(a.startDate).toDate()),a.endDate&&N(L(e),a.endDate)>0&&(e=F(t(a.endDate).toDate()))),a.singleDate&&(a.startDate&&N(e,a.startDate)<0&&(e=t(a.startDate).toDate()),a.endDate&&N(e,a.endDate)>0&&(e=t(a.endDate).toDate())),e}function _(e){e||(e=K()),a.lookBehind?(Y(F(e),"month1"),Y(e,"month2")):(Y(e,"month1"),Y(L(e),"month2")),a.singleDate&&Y(e,"month1"),S(),W()}}});


/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});


/**
 * BootstrapValidator (http://bootstrapvalidator.com)
 *
 * The best jQuery plugin to validate form fields. Designed to use with Bootstrap 3
 *
 * @version     v0.5.0-dev
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2014 Nguyen Huu Phuoc
 * @license     MIT
 */
!function(a){var b=function(c,d){this.$form=a(c),this.options=a.extend({},b.DEFAULT_OPTIONS,d),this.$invalidFields=a([]),this.$submitButton=null,this.STATUS_NOT_VALIDATED="NOT_VALIDATED",this.STATUS_VALIDATING="VALIDATING",this.STATUS_INVALID="INVALID",this.STATUS_VALID="VALID";var e=function(){for(var a=3,b=document.createElement("div"),c=b.all||[];b.innerHTML="<!--[if gt IE "+ ++a+"]><br><![endif]-->",c[0];);return a>4?a:!a}(),f=document.createElement("div");this._changeEvent=9!==e&&"oninput"in f?"input":"keyup",this._submitIfValid=null,this._cacheFields={},this._init()};b.DEFAULT_OPTIONS={elementClass:"bv-form",message:"This value is not valid",container:null,threshold:null,excluded:[":disabled",":hidden",":not(:visible)"],feedbackIcons:{valid:null,invalid:null,validating:null},submitButtons:'[type="submit"]',submitHandler:null,live:"enabled",fields:{}},b.prototype={constructor:b,_init:function(){var b=this,c={excluded:this.$form.attr("data-bv-excluded"),trigger:this.$form.attr("data-bv-trigger"),message:this.$form.attr("data-bv-message"),container:this.$form.attr("data-bv-container"),submitButtons:this.$form.attr("data-bv-submitbuttons"),threshold:this.$form.attr("data-bv-threshold"),live:this.$form.attr("data-bv-live"),fields:{},feedbackIcons:{valid:this.$form.attr("data-bv-feedbackicons-valid"),invalid:this.$form.attr("data-bv-feedbackicons-invalid"),validating:this.$form.attr("data-bv-feedbackicons-validating")}};this.$form.attr("novalidate","novalidate").addClass(this.options.elementClass).on("submit.bv",function(a){a.preventDefault(),b.validate()}).on("click.bv",this.options.submitButtons,function(){b.$submitButton=a(this),b._submitIfValid=!0}).find("[name], [data-bv-field]").each(function(){var d=a(this);if(!b._isExcluded(d)){var e=d.attr("name")||d.attr("data-bv-field"),f=b._parseOptions(d);f&&(d.attr("data-bv-field",e),c.fields[e]=a.extend({},f,c.fields[e]))}}),this.options=a.extend(!0,this.options,c);for(var d in this.options.fields)this._initField(d);this.$form.trigger(a.Event("init.form.bv"),{options:this.options})},_parseOptions:function(b){var c,d,e,f,g,h,i,j=b.attr("name")||b.attr("data-bv-field"),k={};for(d in a.fn.bootstrapValidator.validators)if(c=a.fn.bootstrapValidator.validators[d],e=b.attr("data-bv-"+d.toLowerCase())+"",i="function"==typeof c.enableByHtml5?c.enableByHtml5(b):null,i&&"false"!=e||i!==!0&&(""==e||"true"==e)){c.html5Attributes=c.html5Attributes||{message:"message"},k[d]=a.extend({},1==i?{}:i,k[d]);for(h in c.html5Attributes)f=c.html5Attributes[h],g=b.attr("data-bv-"+d.toLowerCase()+"-"+h),g&&("true"==g?g=!0:"false"==g&&(g=!1),k[d][f]=g)}var l={feedbackIcons:b.attr("data-bv-feedbackicons"),trigger:b.attr("data-bv-trigger"),message:b.attr("data-bv-message"),container:b.attr("data-bv-container"),selector:b.attr("data-bv-selector"),threshold:b.attr("data-bv-threshold"),validators:k},m=a.isEmptyObject(l),n=a.isEmptyObject(k);return!n||!m&&this.options.fields[j]?(l.validators=k,l):null},_initField:function(b){var c=a([]);switch(typeof b){case"object":c=b,b=b.attr("data-bv-field");break;case"string":c=this.getFieldElements(b),c.attr("data-bv-field",b)}if(null!=this.options.fields[b]&&null!=this.options.fields[b].validators){if(0==c.length)return void delete this.options.fields[b];for(var d in this.options.fields[b].validators)a.fn.bootstrapValidator.validators[d]||delete this.options.fields[b].validators[d];null==this.options.fields[b].enabled&&(this.options.fields[b].enabled=!0);for(var e=this,f=c.length,g=c.attr("type"),h=1==f||"radio"==g||"checkbox"==g,i=0;f>i;i++){var j=c.eq(i),k=j.parents(".form-group"),l=this.options.fields[b].container||this.options.container,m=l&&"tooltip"!=l&&"popover"!=l?a(l):this._getMessageContainer(j);l&&"tooltip"!=l&&"popover"!=l&&m.addClass("has-error"),m.find('.help-block[data-bv-validator][data-bv-for="'+b+'"]').remove(),k.find('i[data-bv-icon-for="'+b+'"]').remove();var n="radio"==g||"checkbox"==g||"file"==g||"SELECT"==j.get(0).tagName?"change":this._changeEvent;j.off(n+".update.bv").on(n+".update.bv",function(){e._submitIfValid=!1,e.updateStatus(a(this),e.STATUS_NOT_VALIDATED)}),j.data("bv.messages",m);for(var d in this.options.fields[b].validators)j.data("bv.result."+d,this.STATUS_NOT_VALIDATED),h&&i!=f-1||a("<small/>").css("display","none").addClass("help-block").attr("data-bv-validator",d).attr("data-bv-for",b).attr("data-bv-result",this.STATUS_NOT_VALIDATED).html(this.options.fields[b].validators[d].message||this.options.fields[b].message||this.options.message).appendTo(m);if(this.options.fields[b].feedbackIcons!==!1&&"false"!==this.options.fields[b].feedbackIcons&&this.options.feedbackIcons&&this.options.feedbackIcons.validating&&this.options.feedbackIcons.invalid&&this.options.feedbackIcons.valid&&(!h||i==f-1)){k.removeClass("has-success").removeClass("has-error").addClass("has-feedback");var o=a("<i/>").css("display","none").addClass("form-control-feedback").attr("data-bv-icon-for",b).insertAfter("checkbox"==g||"radio"==g?j.parent():j);0==k.find("label").length&&o.css("top",0),0!=k.find(".input-group-addon").length&&o.css({top:0,"z-index":100})}}var p=this.options.fields[b].trigger||this.options.trigger||n,q=a.map(p.split(" "),function(a){return a+".live.bv"}).join(" ");switch(this.options.live){case"submitted":break;case"disabled":c.off(q);break;case"enabled":default:c.off(q).on(q,function(){e._exceedThreshold(a(this))&&e.validateField(a(this))})}this.$form.trigger(a.Event("init.field.bv"),{field:b,element:c})}},_getMessageContainer:function(a){var b=a.parent();if(b.hasClass("form-group"))return b;var c=b.attr("class");if(!c)return this._getMessageContainer(b);c=c.split(" ");for(var d=c.length,e=0;d>e;e++)if(/^col-(xs|sm|md|lg)-\d+$/.test(c[e])||/^col-(xs|sm|md|lg)-offset-\d+$/.test(c[e]))return b;return this._getMessageContainer(b)},_submit:function(){var b=this.isValid(),c=b?"success.form.bv":"error.form.bv",d=a.Event(c);this.$form.trigger(d),this.$submitButton&&(b?this._onSuccess(d):this._onError(d))},_isExcluded:function(b){if(this.options.excluded){"string"==typeof this.options.excluded&&(this.options.excluded=a.map(this.options.excluded.split(","),function(b){return a.trim(b)}));for(var c=this.options.excluded.length,d=0;c>d;d++)if("string"==typeof this.options.excluded[d]&&b.is(this.options.excluded[d])||"function"==typeof this.options.excluded[d]&&1==this.options.excluded[d].call(this,b,this))return!0}return!1},_exceedThreshold:function(b){var c=b.attr("data-bv-field"),d=this.options.fields[c].threshold||this.options.threshold;if(!d)return!0;var e=-1!=a.inArray(b.attr("type"),["button","checkbox","file","hidden","image","radio","reset","submit"]);return e||b.val().length>=d},_onError:function(b){if(!b.isDefaultPrevented()){if("submitted"==this.options.live){this.options.live="enabled";var c=this;for(var d in this.options.fields)!function(b){var e=c.getFieldElements(b);if(e.length){var f=a(e[0]).attr("type"),g="radio"==f||"checkbox"==f||"file"==f||"SELECT"==a(e[0]).get(0).tagName?"change":c._changeEvent,h=c.options.fields[d].trigger||c.options.trigger||g,i=a.map(h.split(" "),function(a){return a+".live.bv"}).join(" ");e.off(i).on(i,function(){c._exceedThreshold(a(this))&&c.validateField(a(this))})}}(d)}var e=this.$invalidFields.eq(0);if(e){var f,g=e.parents(".tab-pane");g&&(f=g.attr("id"))&&a('a[href="#'+f+'"][data-toggle="tab"]').tab("show"),e.focus()}}},_onSuccess:function(a){a.isDefaultPrevented()||(this.options.submitHandler&&"function"==typeof this.options.submitHandler?this.options.submitHandler.call(this,this,this.$form):this.disableSubmitButtons(!0).defaultSubmit())},_onFieldValidated:function(b,c){var d=b.attr("data-bv-field"),e=this.options.fields[d].validators,f={},g=0;if(c){var h={field:d,element:b,validator:c};switch(b.data("bv.result."+c)){case this.STATUS_INVALID:this.$form.trigger(a.Event("error.validator.bv"),h);break;case this.STATUS_VALID:this.$form.trigger(a.Event("success.validator.bv"),h)}}f[this.STATUS_NOT_VALIDATED]=0,f[this.STATUS_VALIDATING]=0,f[this.STATUS_INVALID]=0,f[this.STATUS_VALID]=0;for(var i in e){g++;var j=b.data("bv.result."+i);j&&f[j]++}f[this.STATUS_VALID]==g?(this.$invalidFields=this.$invalidFields.not(b),this.$form.trigger(a.Event("success.field.bv"),{field:d,element:b})):0==f[this.STATUS_NOT_VALIDATED]&&0==f[this.STATUS_VALIDATING]&&f[this.STATUS_INVALID]>0&&(this.$invalidFields=this.$invalidFields.add(b),this.$form.trigger(a.Event("error.field.bv"),{field:d,element:b}))},getFieldElements:function(b){return this._cacheFields[b]||(this._cacheFields[b]=this.options.fields[b]&&this.options.fields[b].selector?a(this.options.fields[b].selector):this.$form.find('[name="'+b+'"]')),this._cacheFields[b]},disableSubmitButtons:function(a){return a?"disabled"!=this.options.live&&this.$form.find(this.options.submitButtons).attr("disabled","disabled"):this.$form.find(this.options.submitButtons).removeAttr("disabled"),this},validate:function(){if(!this.options.fields)return this;this.disableSubmitButtons(!0);for(var a in this.options.fields)this.validateField(a);return this._submit(),this},validateField:function(b){var c,d=a([]);switch(typeof b){case"object":d=b,b=b.attr("data-bv-field");break;case"string":d=this.getFieldElements(b)}if(this.options.fields[b]&&0==this.options.fields[b].enabled)return this;for(var e,f,g=this,c=d.attr("type"),h="radio"==c||"checkbox"==c?1:d.length,i="radio"==c||"checkbox"==c,j=this.options.fields[b].validators,k=0;h>k;k++){var l=d.eq(k);if(!this._isExcluded(l))for(e in j){l.data("bv.dfs."+e)&&l.data("bv.dfs."+e).reject();var m=l.data("bv.result."+e);m!=this.STATUS_VALID&&m!=this.STATUS_INVALID?(l.data("bv.result."+e,this.STATUS_VALIDATING),f=a.fn.bootstrapValidator.validators[e].validate(this,l,j[e]),"object"==typeof f?(this.updateStatus(i?b:l,this.STATUS_VALIDATING,e),l.data("bv.dfs."+e,f),f.done(function(a,b,c,d){a.removeData("bv.dfs."+b),d&&l.data("bv.messages").find('.help-block[data-bv-validator="'+b+'"][data-bv-for="'+a.attr("data-bv-field")+'"]').html(d),g.updateStatus(i?a.attr("data-bv-field"):a,c?g.STATUS_VALID:g.STATUS_INVALID,b),c&&1==g._submitIfValid&&g._submit()})):"boolean"==typeof f&&this.updateStatus(i?b:l,f?this.STATUS_VALID:this.STATUS_INVALID,e)):this._onFieldValidated(l,e)}}return this},updateStatus:function(b,c,d){var e,f=a([]);switch(typeof b){case"object":f=b,b=b.attr("data-bv-field");break;case"string":f=this.getFieldElements(b)}for(var g=this,e=f.attr("type"),h="radio"==e||"checkbox"==e?1:f.length,i=0;h>i;i++){var j=f.eq(i),k=j.parents(".form-group"),l=j.data("bv.messages"),m=l.find('.help-block[data-bv-validator][data-bv-for="'+b+'"]'),n=d?m.filter('[data-bv-validator="'+d+'"]'):m,o=k.find('.form-control-feedback[data-bv-icon-for="'+b+'"]'),p=this.options.fields[b].container||this.options.container,q=null;if(d)j.data("bv.result."+d,c);else for(var r in this.options.fields[b].validators)j.data("bv.result."+r,c);n.attr("data-bv-result",c);var s,t,u=j.parents(".tab-pane");switch(u&&(s=u.attr("id"))&&(t=a('a[href="#'+s+'"][data-toggle="tab"]').parent()),c){case this.STATUS_VALIDATING:q=null,this.disableSubmitButtons(!0),k.removeClass("has-success").removeClass("has-error"),o&&o.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).addClass(this.options.feedbackIcons.validating).show(),t&&t.removeClass("bv-tab-success").removeClass("bv-tab-error");break;case this.STATUS_INVALID:q=!1,this.disableSubmitButtons(!0),k.removeClass("has-success").addClass("has-error"),o&&o.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.validating).addClass(this.options.feedbackIcons.invalid).show(),t&&t.removeClass("bv-tab-success").addClass("bv-tab-error");break;case this.STATUS_VALID:q=0==m.filter('[data-bv-result="'+this.STATUS_NOT_VALIDATED+'"]').length?m.filter('[data-bv-result="'+this.STATUS_VALID+'"]').length==m.length:null,null!=q&&(this.disableSubmitButtons(this.$submitButton?!this.isValid():!q),o&&o.removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).removeClass(this.options.feedbackIcons.valid).addClass(q?this.options.feedbackIcons.valid:this.options.feedbackIcons.invalid).show()),k.removeClass("has-error has-success").addClass(this.isValidContainer(k)?"has-success":"has-error"),t&&t.removeClass("bv-tab-success").removeClass("bv-tab-error").addClass(this.isValidContainer(u)?"bv-tab-success":"bv-tab-error");break;case this.STATUS_NOT_VALIDATED:default:q=null,this.disableSubmitButtons(!1),k.removeClass("has-success").removeClass("has-error"),o&&o.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).hide(),t&&t.removeClass("bv-tab-success").removeClass("bv-tab-error")}switch(!0){case o&&"tooltip"==p:q===!1?o.css("cursor","pointer").tooltip("destroy").tooltip({html:!0,placement:"top",title:m.filter('[data-bv-result="'+g.STATUS_INVALID+'"]').eq(0).html()}):o.css("cursor","").tooltip("destroy");break;case o&&"popover"==p:q===!1?o.css("cursor","pointer").popover("destroy").popover({content:m.filter('[data-bv-result="'+g.STATUS_INVALID+'"]').eq(0).html(),html:!0,placement:"top",trigger:"hover click"}):o.css("cursor","").popover("destroy");break;default:c==this.STATUS_INVALID?n.show():n.hide()}this.$form.trigger(a.Event("status.field.bv"),{field:b,element:j,status:c}),this._onFieldValidated(j,d)}return this},isValid:function(){for(var a in this.options.fields)if(!this.isValidField(a))return!1;return!0},isValidField:function(b){var c=a([]);switch(typeof b){case"object":c=b,b=b.attr("data-bv-field");break;case"string":c=this.getFieldElements(b)}if(0==c.length||null==this.options.fields[b]||0==this.options.fields[b].enabled)return!0;for(var d,e,f,g=c.attr("type"),h="radio"==g||"checkbox"==g?1:c.length,i=0;h>i;i++)if(d=c.eq(i),!this._isExcluded(d))for(e in this.options.fields[b].validators)if(f=d.data("bv.result."+e),f!=this.STATUS_VALID)return!1;return!0},isValidContainer:function(b){var c=this,d={};b.find("[data-bv-field]").each(function(){var b=a(this).attr("data-bv-field");d[b]||(d[b]=a(this))});for(var e in d){var f=d[e];if(0!=f.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="'+e+'"]').filter(function(){var b=a(this).attr("data-bv-validator");return f.data("bv.result."+b)&&f.data("bv.result."+b)!=c.STATUS_VALID}).length)return!1}return!0},defaultSubmit:function(){this.$submitButton&&a("<input/>").attr("type","hidden").attr("data-bv-submit-hidden","").attr("name",this.$submitButton.attr("name")).val(this.$submitButton.val()).appendTo(this.$form),this.$form.off("submit.bv").submit()},getInvalidFields:function(){return this.$invalidFields},getSubmitButton:function(){return this.$submitButton},getErrors:function(b){var c=this,d=[],e=a([]);switch(!0){case b&&"object"==typeof b:e=b;break;case b&&"string"==typeof b:var f=this.getFieldElements(b);if(f.length>0){var g=f.attr("type");e="radio"==g||"checkbox"==g?f.eq(0):f}break;default:e=this.$invalidFields}return e.each(function(){d=d.concat(a(this).data("bv.messages").find('.help-block[data-bv-for="'+a(this).attr("data-bv-field")+'"][data-bv-result="'+c.STATUS_INVALID+'"]').map(function(){return a(this).html()}).get())}),d},addField:function(b,c){var d=a([]);switch(typeof b){case"object":d=b,b=b.attr("data-bv-field")||b.attr("name");break;case"string":delete this._cacheFields[b],d=this.getFieldElements(b)}d.attr("data-bv-field",b);for(var e=d.attr("type"),f="radio"==e||"checkbox"==e?1:d.length,g=0;f>g;g++){var h=d.eq(g),i=this._parseOptions(h);i=null==i?c:a.extend(!0,c,i),this.options.fields[b]=a.extend(!0,this.options.fields[b],i),this._cacheFields[b]=this._cacheFields[b]?this._cacheFields[b].add(h):h,this._initField("checkbox"==e||"radio"==e?b:h)}return this.disableSubmitButtons(!1),this.$form.trigger(a.Event("added.field.bv"),{field:b,element:d,options:this.options.fields[b]}),this},removeField:function(b){var c=a([]);switch(typeof b){case"object":c=b,b=b.attr("data-bv-field")||b.attr("name"),c.attr("data-bv-field",b);break;case"string":c=this.getFieldElements(b)}if(0==c.length)return this;for(var d=c.attr("type"),e="radio"==d||"checkbox"==d?1:c.length,f=0;e>f;f++){var g=c.eq(f);this.$invalidFields=this.$invalidFields.not(g),this._cacheFields[b]=this._cacheFields[b].not(g)}return this._cacheFields[b]&&0!=this._cacheFields[b].length||delete this.options.fields[b],("checkbox"==d||"radio"==d)&&this._initField(b),this.disableSubmitButtons(!1),this.$form.trigger(a.Event("removed.field.bv"),{field:b,element:c}),this},resetForm:function(b){var c,d,e,f,g;for(c in this.options.fields){d=this.getFieldElements(c),e=d.length;for(var h=0;e>h;h++)for(g in this.options.fields[c].validators)d.eq(h).removeData("bv.dfs."+g);this.updateStatus(c,this.STATUS_NOT_VALIDATED),b&&(f=d.attr("type"),"radio"==f||"checkbox"==f?d.removeAttr("checked").removeAttr("selected"):d.val(""))}return this.$invalidFields=a([]),this.$submitButton=null,this.disableSubmitButtons(!1),this},enableFieldValidators:function(a,b){return this.options.fields[a].enabled!=b&&(this.options.fields[a].enabled=b,this.updateStatus(a,this.STATUS_NOT_VALIDATED)),this},destroy:function(){var a,b,c,d,e,f;for(a in this.options.fields){b=this.getFieldElements(a),f=this.options.fields[a].container||this.options.container;for(var g=0;g<b.length;g++){if(c=b.eq(g),c.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="'+a+'"]').remove().end().end().removeData("bv.messages").parents(".form-group").removeClass("has-feedback has-error has-success").end().off(".bv").removeAttr("data-bv-field"),e=c.parents(".form-group").find('i[data-bv-icon-for="'+a+'"]'))switch(f){case"tooltip":e.tooltip("destroy").remove();break;case"popover":e.popover("destroy").remove();break;default:e.remove()}for(d in this.options.fields[a].validators)c.removeData("bv.result."+d).removeData("bv.dfs."+d)}}this.disableSubmitButtons(!1),this.$form.removeClass(this.options.elementClass).off(".bv").removeData("bootstrapValidator").find("[data-bv-submit-hidden]").remove()}},a.fn.bootstrapValidator=function(c){var d=arguments;return this.each(function(){var e=a(this),f=e.data("bootstrapValidator"),g="object"==typeof c&&c;f||(f=new b(this,g),e.data("bootstrapValidator",f)),"string"==typeof c&&f[c].apply(f,Array.prototype.slice.call(d,1))})},a.fn.bootstrapValidator.validators={},a.fn.bootstrapValidator.Constructor=b,a.fn.bootstrapValidator.helpers={date:function(a,b,c,d){if(isNaN(a)||isNaN(b)||isNaN(c))return!1;if(1e3>a||a>9999||0==b||b>12)return!1;var e=[31,28,31,30,31,30,31,31,30,31,30,31];if((a%400==0||a%100!=0&&a%4==0)&&(e[1]=29),0>c||c>e[b-1])return!1;if(d===!0){var f=new Date,g=f.getFullYear(),h=f.getMonth(),i=f.getDate();return g>a||a==g&&h>b-1||a==g&&b-1==h&&i>c}return!0},luhn:function(a){for(var b=a.length,c=0,d=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],e=0;b--;)e+=d[c][parseInt(a.charAt(b),10)],c^=1;return e%10===0&&e>0},mod_11_10:function(a){for(var b=5,c=a.length,d=0;c>d;d++)b=(2*(b||10)%11+parseInt(a.charAt(d),10))%10;return 1==b},mod_37_36:function(a,b){b=b||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(var c=b.length,d=a.length,e=Math.floor(c/2),f=0;d>f;f++)e=(2*(e||c)%(c+1)+b.indexOf(a.charAt(f)))%c;return 1==e}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.base64={validate:function(a,b){var c=b.val();return""==c?!0:/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.between={html5Attributes:{message:"message",min:"min",max:"max",inclusive:"inclusive"},enableByHtml5:function(a){return"range"==a.attr("type")?{min:a.attr("min"),max:a.attr("max")}:!1},validate:function(a,b,c){var d=b.val();return""==d?!0:(d=parseFloat(d),c.inclusive===!0||void 0==c.inclusive?d>=c.min&&d<=c.max:d>c.min&&d<c.max)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.callback={validate:function(b,c,d){var e=c.val();if(d.callback&&"function"==typeof d.callback){var f=new a.Deferred,g=d.callback.call(this,e,b,c);return f.resolve(c,"callback","boolean"==typeof g?g:g.valid,"object"==typeof g&&g.message?g.message:null),f}return!0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.choice={html5Attributes:{message:"message",min:"min",max:"max"},validate:function(a,b,c){var d=b.is("select")?a.getFieldElements(b.attr("data-bv-field")).find("option").filter(":selected").length:a.getFieldElements(b.attr("data-bv-field")).filter(":checked").length;return c.min&&d<c.min||c.max&&d>c.max?!1:!0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.creditCard={validate:function(b,c){var d=c.val();if(""==d)return!0;if(/[^0-9-\s]+/.test(d))return!1;if(d=d.replace(/\D/g,""),!a.fn.bootstrapValidator.helpers.luhn(d))return!1;var e,f,g={AMERICAN_EXPRESS:{length:[15],prefix:["34","37"]},DINERS_CLUB:{length:[14],prefix:["300","301","302","303","304","305","36"]},DINERS_CLUB_US:{length:[16],prefix:["54","55"]},DISCOVER:{length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]},JCB:{length:[16],prefix:["3528","3529","353","354","355","356","357","358"]},LASER:{length:[16,17,18,19],prefix:["6304","6706","6771","6709"]},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","6304","6759","6761","6762","6763","6764","6765","6766"]},MASTERCARD:{length:[16],prefix:["51","52","53","54","55"]},SOLO:{length:[16,18,19],prefix:["6334","6767"]},UNIONPAY:{length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]},VISA:{length:[16],prefix:["4"]}};for(e in g)for(f in g[e].prefix)if(d.substr(0,g[e].prefix[f].length)==g[e].prefix[f]&&-1!=a.inArray(d.length,g[e].length))return!0;return!1}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.cusip={validate:function(b,c){var d=c.val();if(""==d)return!0;if(d=d.toUpperCase(),!/^[0-9A-Z]{9}$/.test(d))return!1;for(var e=a.map(d.split(""),function(a){var b=a.charCodeAt(0);return b>="A".charCodeAt(0)&&b<="Z".charCodeAt(0)?b-"A".charCodeAt(0)+10:a}),f=e.length,g=0,h=0;f-1>h;h++){var i=parseInt(e[h]);h%2!=0&&(i*=2),i>9&&(i-=9),g+=i}return g=(10-g%10)%10,g==e[f-1]}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.cvv={html5Attributes:{message:"message",ccfield:"creditCardField"},validate:function(b,c,d){var e=c.val();if(""==e)return!0;if(!/^[0-9]{3,4}$/.test(e))return!1;if(!d.creditCardField)return!0;var f=b.getFieldElements(d.creditCardField).val();if(""==f)return!0;f=f.replace(/\D/g,"");var g,h,i={AMERICAN_EXPRESS:{length:[15],prefix:["34","37"]},DINERS_CLUB:{length:[14],prefix:["300","301","302","303","304","305","36"]},DINERS_CLUB_US:{length:[16],prefix:["54","55"]},DISCOVER:{length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]},JCB:{length:[16],prefix:["3528","3529","353","354","355","356","357","358"]},LASER:{length:[16,17,18,19],prefix:["6304","6706","6771","6709"]},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","6304","6759","6761","6762","6763","6764","6765","6766"]},MASTERCARD:{length:[16],prefix:["51","52","53","54","55"]},SOLO:{length:[16,18,19],prefix:["6334","6767"]},UNIONPAY:{length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]},VISA:{length:[16],prefix:["4"]}},j=null;for(g in i)for(h in i[g].prefix)if(f.substr(0,i[g].prefix[h].length)==i[g].prefix[h]&&-1!=a.inArray(f.length,i[g].length)){j=g;break}return null==j?!1:"AMERICAN_EXPRESS"==j?4==e.length:3==e.length}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.date={html5Attributes:{message:"message",format:"format",separator:"separator"},validate:function(b,c,d){var e=c.val();if(""==e)return!0;d.format=d.format||"MM/DD/YYYY";var f=d.format.split(" "),g=f[0],h=f.length>1?f[1]:null,i=f.length>2?f[2]:null,j=e.split(" "),k=j[0],l=j.length>1?j[1]:null;if(f.length!=j.length)return!1;var m=d.separator;if(m||(m=-1!=k.indexOf("/")?"/":-1!=k.indexOf("-")?"-":null),null==m||-1==k.indexOf(m))return!1;k=k.split(m),g=g.split(m);var n=k[a.inArray("YYYY",g)],o=k[a.inArray("MM",g)],p=k[a.inArray("DD",g)],q=null,r=null,s=null;if(h){if(h=h.split(":"),l=l.split(":"),h.length!=l.length)return!1;if(r=l.length>0?l[0]:null,q=l.length>1?l[1]:null,s=l.length>2?l[2]:null,s&&(s=parseInt(s,10),isNaN(s)||0>s||s>60))return!1;if(r&&(r=parseInt(r,10),isNaN(r)||0>r||r>=24||i&&r>12))return!1;if(q&&(q=parseInt(q,10),isNaN(q)||0>q||q>59))return!1}return p=parseInt(p,10),o=parseInt(o,10),n=parseInt(n,10),a.fn.bootstrapValidator.helpers.date(n,o,p)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.different={html5Attributes:{message:"message",field:"field"},validate:function(a,b,c){var d=b.val();if(""==d)return!0;var e=a.getFieldElements(c.field);return null==e?!0:d!=e.val()?(a.updateStatus(c.field,a.STATUS_VALID,"different"),!0):!1}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.digits={validate:function(a,b){var c=b.val();return""==c?!0:/^\d+$/.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.ean={validate:function(a,b){var c=b.val();if(""==c)return!0;if(!/^(\d{8}|\d{12}|\d{13})$/.test(c))return!1;for(var d=c.length,e=0,f=8==d?[3,1]:[1,3],g=0;d-1>g;g++)e+=parseInt(c.charAt(g))*f[g%2];return e=10-e%10,e==c.charAt(d-1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.emailAddress={enableByHtml5:function(a){return"email"==a.attr("type")},validate:function(a,b){var c=b.val();if(""==c)return!0;var d=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return d.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.file={html5Attributes:{extension:"extension",maxsize:"maxSize",message:"message",type:"type"},validate:function(b,c,d){var e=c.val();if(""==e)return!0;var f,g=d.extension?d.extension.toLowerCase().split(","):null,h=d.type?d.type.toLowerCase().split(","):null,i=window.File&&window.FileList&&window.FileReader;if(i)for(var j=c.get(0).files,k=j.length,l=0;k>l;l++){if(d.maxSize&&j[l].size>parseInt(d.maxSize))return!1;if(f=j[l].name.substr(j[l].name.lastIndexOf(".")+1),g&&-1==a.inArray(f.toLowerCase(),g))return!1;if(h&&-1==a.inArray(j[l].type.toLowerCase(),h))return!1}else if(f=e.substr(e.lastIndexOf(".")+1),g&&-1==a.inArray(f.toLowerCase(),g))return!1;return!0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.greaterThan={html5Attributes:{message:"message",value:"value",inclusive:"inclusive"},enableByHtml5:function(a){var b=a.attr("min");return b?{value:b}:!1},validate:function(a,b,c){var d=b.val();return""==d?!0:(d=parseFloat(d),c.inclusive===!0||void 0==c.inclusive?d>=c.value:d>c.value)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.grid={validate:function(b,c){var d=c.val();return""==d?!0:(d=d.toUpperCase(),/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(d)?(d=d.replace(/\s/g,"").replace(/-/g,""),"GRID:"==d.substr(0,5)&&(d=d.substr(5)),a.fn.bootstrapValidator.helpers.mod_37_36(d)):!1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.hex={validate:function(a,b){var c=b.val();return""==c?!0:/^[0-9a-fA-F]+$/.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.hexColor={enableByHtml5:function(a){return"color"==a.attr("type")},validate:function(a,b){var c=b.val();return""==c?!0:/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.iban={html5Attributes:{message:"message",country:"country"},validate:function(b,c,d){var e=c.val();if(""==e)return!0;var f={AD:"AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",AE:"AE[0-9]{2}[0-9]{3}[0-9]{16}",AL:"AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",AO:"AO[0-9]{2}[0-9]{21}",AT:"AT[0-9]{2}[0-9]{5}[0-9]{11}",AZ:"AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",BA:"BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",BE:"BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",BF:"BF[0-9]{2}[0-9]{23}",BG:"BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",BH:"BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",BI:"BI[0-9]{2}[0-9]{12}",BJ:"BJ[0-9]{2}[A-Z]{1}[0-9]{23}",BR:"BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",CH:"CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",CI:"CI[0-9]{2}[A-Z]{1}[0-9]{23}",CM:"CM[0-9]{2}[0-9]{23}",CR:"CR[0-9]{2}[0-9]{3}[0-9]{14}",CV:"CV[0-9]{2}[0-9]{21}",CY:"CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",CZ:"CZ[0-9]{2}[0-9]{20}",DE:"DE[0-9]{2}[0-9]{8}[0-9]{10}",DK:"DK[0-9]{2}[0-9]{14}",DO:"DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",DZ:"DZ[0-9]{2}[0-9]{20}",EE:"EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",ES:"ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",FI:"FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",FO:"FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",FR:"FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",GB:"GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",GE:"GE[0-9]{2}[A-Z]{2}[0-9]{16}",GI:"GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",GL:"GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",GR:"GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",GT:"GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",HR:"HR[0-9]{2}[0-9]{7}[0-9]{10}",HU:"HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",IE:"IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",IL:"IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",IR:"IR[0-9]{2}[0-9]{22}",IS:"IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",IT:"IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",JO:"JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",KW:"KW[0-9]{2}[A-Z]{4}[0-9]{22}",KZ:"KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",LB:"LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",LI:"LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",LT:"LT[0-9]{2}[0-9]{5}[0-9]{11}",LU:"LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",LV:"LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",MC:"MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",MD:"MD[0-9]{2}[A-Z0-9]{20}",ME:"ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",MG:"MG[0-9]{2}[0-9]{23}",MK:"MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",ML:"ML[0-9]{2}[A-Z]{1}[0-9]{23}",MR:"MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",MT:"MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",MU:"MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",MZ:"MZ[0-9]{2}[0-9]{21}",NL:"NL[0-9]{2}[A-Z]{4}[0-9]{10}",NO:"NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",PK:"PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",PL:"PL[0-9]{2}[0-9]{8}[0-9]{16}",PS:"PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",PT:"PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",QA:"QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",RO:"RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",RS:"RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",SA:"SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",SE:"SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",SI:"SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",SK:"SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",SM:"SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",SN:"SN[0-9]{2}[A-Z]{1}[0-9]{23}",TN:"TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",TR:"TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",VG:"VG[0-9]{2}[A-Z]{4}[0-9]{16}"};e=e.replace(/[^a-zA-Z0-9]/g,"").toUpperCase();var g=d.country||e.substr(0,2);if(!f[g])return!1;if(!new RegExp("^"+f[g]+"$").test(e))return!1;e=e.substr(4)+e.substr(0,4),e=a.map(e.split(""),function(a){var b=a.charCodeAt(0);return b>="A".charCodeAt(0)&&b<="Z".charCodeAt(0)?b-"A".charCodeAt(0)+10:a}),e=e.join("");for(var h=parseInt(e.substr(0,1),10),i=e.length,j=1;i>j;++j)h=(10*h+parseInt(e.substr(j,1),10))%97;return 1==h}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.id={html5Attributes:{message:"message",country:"country"},validate:function(a,b,c){var d=b.val();if(""==d)return!0;var e=c.country||d.substr(0,2),f=["_",e.toLowerCase()].join("");
return this[f]&&"function"==typeof this[f]?this[f](d):!0},_validateJMBG:function(a,b){if(!/^\d{13}$/.test(a))return!1;var c=parseInt(a.substr(0,2),10),d=parseInt(a.substr(2,2),10),e=(parseInt(a.substr(4,3),10),parseInt(a.substr(7,2),10)),f=parseInt(a.substr(12,1),10);if(c>31||d>12)return!1;for(var g=0,h=0;6>h;h++)g+=(7-h)*(parseInt(a.charAt(h))+parseInt(a.charAt(h+6)));if(g=11-g%11,(10==g||11==g)&&(g=0),g!=f)return!1;switch(b.toUpperCase()){case"BA":return e>=10&&19>=e;case"MK":return e>=41&&49>=e;case"ME":return e>=20&&29>=e;case"RS":return e>=70&&99>=e;case"SI":return e>=50&&59>=e;default:return!0}},_ba:function(a){return this._validateJMBG(a,"BA")},_mk:function(a){return this._validateJMBG(a,"MK")},_me:function(a){return this._validateJMBG(a,"ME")},_rs:function(a){return this._validateJMBG(a,"RS")},_si:function(a){return this._validateJMBG(a,"SI")},_bg:function(b){if(!/^\d{10}$/.test(b)&&!/^\d{6}\s\d{3}\s\d{1}$/.test(b))return!1;b=b.replace(/\s/g,"");var c=parseInt(b.substr(0,2),10)+1900,d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10);if(d>40?(c+=100,d-=40):d>20&&(c-=100,d-=20),!a.fn.bootstrapValidator.helpers.date(c,d,e))return!1;for(var f=0,g=[2,4,8,5,10,9,7,3,6],h=0;9>h;h++)f+=parseInt(b.charAt(h))*g[h];return f=f%11%10,f==b.substr(9,1)},_br:function(a){if(/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(a))return!1;if(!/^\d{11}$/.test(a)&&!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(a))return!1;a=a.replace(/\./g,"").replace(/-/g,"");for(var b=0,c=0;9>c;c++)b+=(10-c)*parseInt(a.charAt(c));if(b=11-b%11,(10==b||11==b)&&(b=0),b!=a.charAt(9))return!1;var d=0;for(c=0;10>c;c++)d+=(11-c)*parseInt(a.charAt(c));return d=11-d%11,(10==d||11==d)&&(d=0),d==a.charAt(10)},_ch:function(a){if(!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(a))return!1;a=a.replace(/\D/g,"").substr(3);for(var b=a.length,c=0,d=8==b?[3,1]:[1,3],e=0;b-1>e;e++)c+=parseInt(a.charAt(e))*d[e%2];return c=10-c%10,c==a.charAt(b-1)},_cl:function(a){if(!/^\d{7,8}[-]{0,1}[0-9K]$/.test(a))return!1;for(a=a.replace(/\D/g,"");a.length<9;)a="0"+a;for(var b=0,c=[3,2,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d))*c[d];return b=11-b%11,11==b?b=0:10==b&&(b="K"),b==a.charAt(8)},_cz:function(b){if(!/^\d{9,10}$/.test(b))return!1;var c=1900+parseInt(b.substr(0,2)),d=parseInt(b.substr(2,2))%50%20,e=parseInt(b.substr(4,2));if(9==b.length){if(c>=1980&&(c-=100),c>1953)return!1}else 1954>c&&(c+=100);if(!a.fn.bootstrapValidator.helpers.date(c,d,e))return!1;if(10==b.length){var f=parseInt(b.substr(0,9),10)%11;return 1985>c&&(f%=10),f==b.substr(9,1)}return!0},_dk:function(b){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(b))return!1;b=b.replace(/-/g,"");var c=parseInt(b.substr(0,2),10),d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10);switch(!0){case-1!="5678".indexOf(b.charAt(6))&&e>=58:e+=1800;break;case-1!="0123".indexOf(b.charAt(6)):case-1!="49".indexOf(b.charAt(6))&&e>=37:e+=1900;break;default:e+=2e3}return a.fn.bootstrapValidator.helpers.date(e,d,c)},_ee:function(a){return this._lt(a)},_es:function(a){if(!/^[0-9A-Z]{8}[-]{0,1}[0-9A-Z]$/.test(a)&&!/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-Z]$/.test(a))return!1;a=a.replace(/-/g,"");var b="XYZ".indexOf(a.charAt(0));-1!=b&&(a=b+a.substr(1)+"");var c=parseInt(a.substr(0,8),10);return c="TRWAGMYFPDXBNJZSQVHLCKE"[c%23],c==a.substr(8,1)},_fi:function(b){if(!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(b))return!1;var c=parseInt(b.substr(0,2),10),d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10),f={"+":1800,"-":1900,A:2e3};if(e=f[b.charAt(6)]+e,!a.fn.bootstrapValidator.helpers.date(e,d,c))return!1;var g=parseInt(b.substr(7,3));if(2>g)return!1;var h=b.substr(0,6)+b.substr(7,3)+"";return h=parseInt(h),"0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(h%31)==b.charAt(10)},_hr:function(b){return/^[0-9]{11}$/.test(b)?a.fn.bootstrapValidator.helpers.mod_11_10(b):!1},_ie:function(a){if(!/^\d{7}[A-W][AHWTX]?$/.test(a))return!1;var b=function(a){for(;a.length<7;)a="0"+a;for(var b="WABCDEFGHIJKLMNOPQRSTUV",c=0,d=0;7>d;d++)c+=parseInt(a.charAt(d))*(8-d);return c+=9*b.indexOf(a.substr(7)),b[c%23]};return 9!=a.length||"A"!=a.charAt(8)&&"H"!=a.charAt(8)?a.charAt(7)==b(a.substr(0,7)):a.charAt(7)==b(a.substr(0,7)+a.substr(8)+"")},_is:function(b){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(b))return!1;b=b.replace(/-/g,"");var c=parseInt(b.substr(0,2),10),d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10),f=parseInt(b.charAt(9));if(e=9==f?1900+e:100*(20+f)+e,!a.fn.bootstrapValidator.helpers.date(e,d,c,!0))return!1;for(var g=0,h=[3,2,7,6,5,4,3,2],i=0;8>i;i++)g+=parseInt(b.charAt(i))*h[i];return g=11-g%11,g==b.charAt(8)},_lt:function(b){if(!/^[0-9]{11}$/.test(b))return!1;var c=parseInt(b.charAt(0)),d=parseInt(b.substr(1,2),10),e=parseInt(b.substr(3,2),10),f=parseInt(b.substr(5,2),10),g=c%2==0?17+c/2:17+(c+1)/2;if(d=100*g+d,!a.fn.bootstrapValidator.helpers.date(d,e,f,!0))return!1;for(var h=0,i=[1,2,3,4,5,6,7,8,9,1],j=0;10>j;j++)h+=parseInt(b.charAt(j))*i[j];if(h%=11,10!=h)return h==b.charAt(10);for(h=0,i=[3,4,5,6,7,8,9,1,2,3],j=0;10>j;j++)h+=parseInt(b.charAt(j))*i[j];return h%=11,10==h&&(h=0),h==b.charAt(10)},_lv:function(b){if(!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(b))return!1;b=b.replace(/\D/g,"");var c=parseInt(b.substr(0,2)),d=parseInt(b.substr(2,2)),e=parseInt(b.substr(4,2));if(e=e+1800+100*parseInt(b.charAt(6)),!a.fn.bootstrapValidator.helpers.date(e,d,c,!0))return!1;for(var f=0,g=[10,5,8,4,2,1,6,3,7,9],h=0;10>h;h++)f+=parseInt(b.charAt(h))*g[h];return f=(f+1)%11%10,f==b.charAt(10)},_nl:function(a){for(;a.length<9;)a="0"+a;if(!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(a))return!1;if(a=a.replace(/\./g,""),0==parseInt(a,10))return!1;for(var b=0,c=a.length,d=0;c-1>d;d++)b+=(9-d)*parseInt(a.charAt(d));return b%=11,10==b&&(b=0),b==a.charAt(c-1)},_ro:function(b){if(!/^[0-9]{13}$/.test(b))return!1;var c=parseInt(b.charAt(0));if(0==c||7==c||8==c)return!1;var d=parseInt(b.substr(1,2),10),e=parseInt(b.substr(3,2),10),f=parseInt(b.substr(5,2),10),g={1:1900,2:1900,3:1800,4:1800,5:2e3,6:2e3};if(f>31&&e>12)return!1;if(9!=c&&(d=g[c+""]+d,!a.fn.bootstrapValidator.helpers.date(d,e,f)))return!1;for(var h=0,i=[2,7,9,1,4,6,3,5,8,2,7,9],j=b.length,k=0;j-1>k;k++)h+=parseInt(b.charAt(k))*i[k];return h%=11,10==h&&(h=1),h==b.charAt(j-1)},_se:function(b){if(!/^[0-9]{10}$/.test(b)&&!/^[0-9]{6}[-|+][0-9]{4}$/.test(b))return!1;b=b.replace(/[^0-9]/g,"");var c=parseInt(b.substr(0,2))+1900,d=parseInt(b.substr(2,2)),e=parseInt(b.substr(4,2));return a.fn.bootstrapValidator.helpers.date(c,d,e)?a.fn.bootstrapValidator.helpers.luhn(b):!1},_sk:function(a){return this._cz(a)},_sm:function(a){return/^\d{5}$/.test(a)},_za:function(b){if(!/^[0-9]{10}[0|1][8|9][0-9]$/.test(b))return!1;var c=parseInt(b.substr(0,2)),d=(new Date).getFullYear()%100,e=parseInt(b.substr(2,2)),f=parseInt(b.substr(4,2));return c=c>=d?c+1900:c+2e3,a.fn.bootstrapValidator.helpers.date(c,e,f)?a.fn.bootstrapValidator.helpers.luhn(b):!1}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.identical={html5Attributes:{message:"message",field:"field"},validate:function(a,b,c){var d=b.val();if(""==d)return!0;var e=a.getFieldElements(c.field);return null==e?!0:d==e.val()?(a.updateStatus(c.field,a.STATUS_VALID,"identical"),!0):!1}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.imei={validate:function(b,c){var d=c.val();if(""==d)return!0;switch(!0){case/^\d{15}$/.test(d):case/^\d{2}-\d{6}-\d{6}-\d{1}$/.test(d):case/^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(d):return d=d.replace(/[^0-9]/g,""),a.fn.bootstrapValidator.helpers.luhn(d);case/^\d{14}$/.test(d):case/^\d{16}$/.test(d):case/^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(d):case/^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(d):return!0;default:return!1}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.integer={enableByHtml5:function(a){return"number"==a.attr("type")},validate:function(a,b){var c=b.val();return""==c?!0:/^(?:-?(?:0|[1-9][0-9]*))$/.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.ip={html5Attributes:{message:"message",ipv4:"ipv4",ipv6:"ipv6"},validate:function(b,c,d){var e=c.val();return""==e?!0:(d=a.extend({},{ipv4:!0,ipv6:!0},d),d.ipv4?/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e):d.ipv6?/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(str):!1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.isbn={validate:function(a,b){var c=b.val();if(""==c)return!0;var d;switch(!0){case/^\d{9}[\dX]$/.test(c):case 13==c.length&&/^(\d+)-(\d+)-(\d+)-([\dX])$/.test(c):case 13==c.length&&/^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(c):d="ISBN10";break;case/^(978|979)\d{9}[\dX]$/.test(c):case 17==c.length&&/^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(c):case 17==c.length&&/^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(c):d="ISBN13";break;default:return!1}c=c.replace(/[^0-9X]/gi,"");var e,f=c.split(""),g=f.length,h=0;switch(d){case"ISBN10":h=0;for(var i=0;g-1>i;i++)h+=(10-i)*parseInt(f[i]);return e=11-h%11,11==e?e=0:10==e&&(e="X"),e+""==f[g-1];case"ISBN13":h=0;for(var i=0;g-1>i;i++)h+=i%2==0?parseInt(f[i]):3*parseInt(f[i]);return e=10-h%10,10==e&&(e="0"),e+""==f[g-1];default:return!1}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.isin={COUNTRY_CODES:"AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",validate:function(a,b){var c=b.val();if(""==c)return!0;c=c.toUpperCase();var d=new RegExp("^("+this.COUNTRY_CODES+")[0-9A-Z]{10}$");if(!d.test(c))return!1;for(var e="",f=c.length,g=0;f-1>g;g++){var h=c.charCodeAt(g);e+=h>57?(h-55).toString():c.charAt(g)}var i="",j=e.length,k=j%2!=0?0:1;for(g=0;j>g;g++)i+=parseInt(e[g])*(g%2==k?2:1)+"";var l=0;for(g=0;g<i.length;g++)l+=parseInt(i.charAt(g));return l=(10-l%10)%10,l==c.charAt(f-1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.ismn={validate:function(a,b){var c=b.val();if(""==c)return!0;var d;switch(!0){case/^M\d{9}$/.test(c):case/^M-\d{4}-\d{4}-\d{1}$/.test(c):case/^M\s\d{4}\s\d{4}\s\d{1}$/.test(c):d="ISMN10";break;case/^9790\d{9}$/.test(c):case/^979-0-\d{4}-\d{4}-\d{1}$/.test(c):case/^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(c):d="ISMN13";break;default:return!1}"ISMN10"==d&&(c="9790"+c.substr(1)),c=c.replace(/[^0-9]/gi,"");for(var e=c.length,f=0,g=[1,3],h=0;e-1>h;h++)f+=parseInt(c.charAt(h))*g[h%2];return f=10-f%10,f==c.charAt(e-1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.issn={validate:function(a,b){var c=b.val();if(""==c)return!0;if(!/^\d{4}\-\d{3}[\dX]$/.test(c))return!1;c=c.replace(/[^0-9X]/gi,"");var d=c.split(""),e=d.length,f=0;"X"==d[7]&&(d[7]=10);for(var g=0;e>g;g++)f+=(8-g)*parseInt(d[g]);return f%11==0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.lessThan={html5Attributes:{message:"message",value:"value",inclusive:"inclusive"},enableByHtml5:function(a){var b=a.attr("max");return b?{value:b}:!1},validate:function(a,b,c){var d=b.val();return""==d?!0:(d=parseFloat(d),c.inclusive===!0||void 0==c.inclusive?d<=c.value:d<c.value)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.mac={validate:function(a,b){var c=b.val();return""==c?!0:/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.notEmpty={enableByHtml5:function(a){var b=a.attr("required")+"";return"required"==b||"true"==b},validate:function(b,c){var d=c.attr("type");return"radio"==d||"checkbox"==d?b.getFieldElements(c.attr("data-bv-field")).filter(":checked").length>0:""!=a.trim(c.val())}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.numeric={html5Attributes:{message:"message",separator:"separator"},validate:function(a,b,c){var d=b.val();if(""==d)return!0;var e=c.separator||".";return"."!=e&&(d=d.replace(e,".")),!isNaN(parseFloat(d))&&isFinite(d)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.phone={html5Attributes:{message:"message",country:"country"},validate:function(b,c,d){var e=c.val();if(""==e)return!0;var f=(d.country||"US").toUpperCase();switch(f){case"GB":return e=a.trim(e),/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(e);case"US":default:return e=e.replace(/\D/g,""),/^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(e)&&10==e.length}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.regexp={html5Attributes:{message:"message",regexp:"regexp"},enableByHtml5:function(a){var b=a.attr("pattern");return b?{regexp:b}:!1},validate:function(a,b,c){var d=b.val();if(""==d)return!0;var e="string"==typeof c.regexp?new RegExp(c.regexp):c.regexp;return e.test(d)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.remote={html5Attributes:{message:"message",url:"url",name:"name"},validate:function(b,c,d){var e=c.val();if(""==e)return!0;var f=c.attr("data-bv-field"),g=d.data;null==g&&(g={}),"function"==typeof g&&(g=g.call(this,b)),g[d.name||f]=e;var h=new a.Deferred,i=a.ajax({type:"POST",url:d.url,dataType:"json",data:g});return i.then(function(a){h.resolve(c,"remote",a.valid===!0||"true"===a.valid,a.message?a.message:null)}),h.fail(function(){i.abort()}),h}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.rtn={validate:function(a,b){var c=b.val();if(""==c)return!0;if(!/^\d{9}$/.test(c))return!1;for(var d=0,e=0;e<c.length;e+=3)d+=3*parseInt(c.charAt(e),10)+7*parseInt(c.charAt(e+1),10)+parseInt(c.charAt(e+2),10);return 0!=d&&d%10==0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.sedol={validate:function(a,b){var c=b.val();if(""==c)return!0;if(c=c.toUpperCase(),!/^[0-9A-Z]{7}$/.test(c))return!1;for(var d=0,e=[1,3,1,7,3,9,1],f=c.length,g=0;f-1>g;g++)d+=e[g]*parseInt(c.charAt(g),36);return d=(10-d%10)%10,d==c.charAt(f-1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.siren={validate:function(b,c){var d=c.val();return""==d?!0:/^\d{9}$/.test(d)?a.fn.bootstrapValidator.helpers.luhn(d):!1}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.siret={validate:function(a,b){var c=b.val();if(""==c)return!0;for(var d,e=0,f=c.length,g=0;f>g;g++)d=parseInt(c.charAt(g),10),g%2==0&&(d=2*d,d>9&&(d-=9)),e+=d;return e%10==0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.step={html5Attributes:{message:"message",base:"baseValue",step:"step"},validate:function(b,c,d){var e=c.val();if(""==e)return!0;if(d=a.extend({},{baseValue:0,step:1},d),e=parseFloat(e),isNaN(e)||!isFinite(e))return!1;var f=function(a,b){var c=Math.pow(10,b);a*=c;var d=a>0|-(0>a),e=a%1===.5*d;return e?(Math.floor(a)+(d>0))/c:Math.round(a)/c},g=function(a,b){if(0==b)return 1;var c=(a+"").split("."),d=(b+"").split("."),e=(1==c.length?0:c[1].length)+(1==d.length?0:d[1].length);return f(a-b*Math.floor(a/b),e)},h=g(e-d.baseValue,d.step);return 0==h||h==d.step}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.stringCase={html5Attributes:{message:"message","case":"case"},validate:function(a,b,c){var d=b.val();if(""==d)return!0;var e=(c["case"]||"lower").toLowerCase();switch(e){case"upper":return d===d.toUpperCase();case"lower":default:return d===d.toLowerCase()}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.stringLength={html5Attributes:{message:"message",min:"min",max:"max"},enableByHtml5:function(a){var b=a.attr("maxlength");return b?{max:parseInt(b,10)}:!1},validate:function(b,c,d){var e=c.val();if(""==e)return!0;var f=a.trim(e).length;return d.min&&f<d.min||d.max&&f>d.max?!1:!0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.uri={html5Attributes:{message:"message",allowlocal:"allowLocal"},enableByHtml5:function(a){return"url"==a.attr("type")},validate:function(a,b,c){var d=b.val();if(""==d)return!0;var e=1==c.allowLocal||"true"==c.allowLocal,f=new RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:"+(e?"":"(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")+"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/[^\\s]*)?$","i");return f.test(d)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.uuid={html5Attributes:{message:"message",version:"version"},validate:function(a,b,c){var d=b.val();if(""==d)return!0;var e={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},f=c.version?c.version+"":"all";return null==e[f]?!0:e[f].test(d)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.vat={html5Attributes:{message:"message",country:"country"},validate:function(a,b,c){var d=b.val();if(""==d)return!0;var e=c.country||d.substr(0,2),f=["_",e.toLowerCase()].join("");return this[f]&&"function"==typeof this[f]?this[f](d):!0},_at:function(a){if(!/^ATU[0-9]{8}$/.test(a))return!1;a=a.substr(3);for(var b=0,c=[1,2,1,2,1,2,1],d=0,e=0;7>e;e++)d=parseInt(a.charAt(e))*c[e],d>9&&(d=Math.floor(d/10)+d%10),b+=d;return b=10-(b+4)%10,10==b&&(b=0),b==a.substr(7,1)},_be:function(a){if(!/^BE[0]{0,1}[0-9]{9}$/.test(a))return!1;if(a=a.substr(2),9==a.length&&(a="0"+a),0==a.substr(1,1))return!1;var b=parseInt(a.substr(0,8),10)+parseInt(a.substr(8,2),10);return b%97==0},_bg:function(b){if(!/^BG[0-9]{9,10}$/.test(b))return!1;b=b.substr(2);var c=0,d=0;if(9==b.length){for(d=0;8>d;d++)c+=parseInt(b.charAt(d))*(d+1);if(c%=11,10==c)for(c=0,d=0;8>d;d++)c+=parseInt(b.charAt(d))*(d+3);return c%=10,c==b.substr(8)}if(10==b.length){var e=function(b){var c=parseInt(b.substr(0,2),10)+1900,d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10);if(d>40?(c+=100,d-=40):d>20&&(c-=100,d-=20),!a.fn.bootstrapValidator.helpers.date(c,d,e))return!1;for(var f=0,g=[2,4,8,5,10,9,7,3,6],h=0;9>h;h++)f+=parseInt(b.charAt(h))*g[h];return f=f%11%10,f==b.substr(9,1)},f=function(a){for(var b=0,c=[21,19,17,13,11,9,7,3,1],d=0;9>d;d++)b+=parseInt(a.charAt(d))*c[d];return b%=10,b==a.substr(9,1)},g=function(a){for(var b=0,c=[4,3,2,7,6,5,4,3,2],d=0;9>d;d++)b+=parseInt(a.charAt(d))*c[d];return b=11-b%11,10==b?!1:(11==b&&(b=0),b==a.substr(9,1))};return e(b)||f(b)||g(b)}return!1},_ch:function(a){if(!/^CHE[0-9]{9}(MWST)?$/.test(a))return!1;a=a.substr(3);for(var b=0,c=[5,4,3,2,7,6,5,4],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,10==b?!1:(11==b&&(b=0),b==a.substr(8,1))},_cy:function(a){if(!/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(a))return!1;if(a=a.substr(2),"12"==a.substr(0,2))return!1;for(var b=0,c={0:1,1:0,2:5,3:7,4:9,5:13,6:15,7:17,8:19,9:21},d=0;8>d;d++){var e=parseInt(a.charAt(d),10);d%2==0&&(e=c[e+""]),b+=e}return b="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[b%26],b==a.substr(8,1)},_cz:function(b){if(!/^CZ[0-9]{8,10}$/.test(b))return!1;b=b.substr(2);var c=0,d=0;if(8==b.length){if(b.charAt(0)+""=="9")return!1;for(c=0,d=0;7>d;d++)c+=parseInt(b.charAt(d),10)*(8-d);return c=11-c%11,10==c&&(c=0),11==c&&(c=1),c==b.substr(7,1)}if(9==b.length&&b.charAt(0)+""=="6"){for(c=0,d=0;7>d;d++)c+=parseInt(b.charAt(d+1),10)*(8-d);return c=11-c%11,10==c&&(c=0),11==c&&(c=1),c=[8,7,6,5,4,3,2,1,0,9,10][c-1],c==b.substr(8,1)}if(9==b.length||10==b.length){var e=1900+parseInt(b.substr(0,2)),f=parseInt(b.substr(2,2))%50%20,g=parseInt(b.substr(4,2));if(9==b.length){if(e>=1980&&(e-=100),e>1953)return!1}else 1954>e&&(e+=100);if(!a.fn.bootstrapValidator.helpers.date(e,f,g))return!1;if(10==b.length){var h=parseInt(b.substr(0,9),10)%11;return 1985>e&&(h%=10),h==b.substr(9,1)}return!0}return!1},_de:function(b){return/^DE[0-9]{9}$/.test(b)?(b=b.substr(2),a.fn.bootstrapValidator.helpers.mod_11_10(b)):!1},_dk:function(a){if(!/^DK[0-9]{8}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[2,7,6,5,4,3,2,1],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%11==0},_ee:function(a){if(!/^EE[0-9]{9}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[3,7,1,3,7,1,3,7,1],d=0;9>d;d++)b+=parseInt(a.charAt(d))*c[d];return b%10==0},_es:function(a){if(!/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(a))return!1;a=a.substr(2);var b=function(a){var b=parseInt(a.substr(0,8),10);return b="TRWAGMYFPDXBNJZSQVHLCKE"[b%23],b==a.substr(8,1)},c=function(a){var b=["XYZ".indexOf(a.charAt(0)),a.substr(1)].join("");return b=parseInt(b,10),b="TRWAGMYFPDXBNJZSQVHLCKE"[b%23],b==a.substr(8,1)},d=function(a){var b,c=a.charAt(0);if(-1!="KLM".indexOf(c))return b=parseInt(a.substr(1,8),10),b="TRWAGMYFPDXBNJZSQVHLCKE"[b%23],b==a.substr(8,1);if(-1!="ABCDEFGHJNPQRSUVW".indexOf(c)){for(var d=0,e=[2,1,2,1,2,1,2],f=0,g=0;7>g;g++)f=parseInt(a.charAt(g+1))*e[g],f>9&&(f=Math.floor(f/10)+f%10),d+=f;return d=10-d%10,d==a.substr(8,1)||"JABCDEFGHI"[d]==a.substr(8,1)}return!1},e=a.charAt(0);return/^[0-9]$/.test(e)?b(a):/^[XYZ]$/.test(e)?c(a):d(a)},_fi:function(a){if(!/^FI[0-9]{8}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[7,9,10,5,8,4,2,1],d=0;8>d;d++)b+=parseInt(a.charAt(d))*c[d];return b%11==0},_fr:function(b){if(!/^FR[0-9A-Z]{2}[0-9]{9}$/.test(b))return!1;if(b=b.substr(2),!a.fn.bootstrapValidator.helpers.luhn(b.substr(2)))return!1;if(/^[0-9]{2}$/.test(b.substr(0,2)))return b.substr(0,2)==parseInt(b.substr(2)+"12",10)%97;var c,d="0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";return c=/^[0-9]{1}$/.test(b.charAt(0))?24*d.indexOf(b.charAt(0))+d.indexOf(b.charAt(1))-10:34*d.indexOf(b.charAt(0))+d.indexOf(b.charAt(1))-100,(parseInt(b.substr(2),10)+1+Math.floor(c/11))%11==c%11},_gb:function(a){if(!(/^GB[0-9]{9}$/.test(a)||/^GB[0-9]{12}$/.test(a)||/^GBGD[0-9]{3}$/.test(a)||/^GBHA[0-9]{3}$/.test(a)||/^GB(GD|HA)8888[0-9]{5}$/.test(a)))return!1;a=a.substr(2);var b=a.length;if(5==b){var c=a.substr(0,2),d=parseInt(a.substr(2));return"GD"==c&&500>d||"HA"==c&&d>=500}if(11==b&&("GD8888"==a.substr(0,6)||"HA8888"==a.substr(0,6)))return"GD"==a.substr(0,2)&&parseInt(a.substr(6,3))>=500||"HA"==a.substr(0,2)&&parseInt(a.substr(6,3))<500?!1:parseInt(a.substr(6,3))%97==parseInt(a.substr(9,2));if(9==b||12==b){for(var e=0,f=[8,7,6,5,4,3,2,10,1],g=0;9>g;g++)e+=parseInt(a.charAt(g))*f[g];return e%=97,parseInt(a.substr(0,3))>=100?0==e||42==e||55==e:0==e}return!0},_gr:function(a){if(!/^GR[0-9]{9}$/.test(a))return!1;a=a.substr(2),8==a.length&&(a="0"+a);for(var b=0,c=[256,128,64,32,16,8,4,2],d=0;8>d;d++)b+=parseInt(a.charAt(d))*c[d];return b=b%11%10,b==a.substr(8,1)},_el:function(a){return/^EL[0-9]{9}$/.test(a)?(a="GR"+a.substr(2),this._gr(a)):!1},_hu:function(a){if(!/^HU[0-9]{8}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[9,7,3,1,9,7,3,1],d=0;8>d;d++)b+=parseInt(a.charAt(d))*c[d];return b%10==0},_hr:function(b){return/^HR[0-9]{11}$/.test(b)?(b=b.substr(2),a.fn.bootstrapValidator.helpers.mod_11_10(b)):!1},_ie:function(a){if(!/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(a))return!1;a=a.substr(2);var b=function(a){for(;a.length<7;)a="0"+a;for(var b="WABCDEFGHIJKLMNOPQRSTUV",c=0,d=0;7>d;d++)c+=parseInt(a.charAt(d))*(8-d);return c+=9*b.indexOf(a.substr(7)),b[c%23]};return/^[0-9]+$/.test(a.substr(0,7))?a.charAt(7)==b(a.substr(0,7)+a.substr(8)+""):-1!="ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(a.charAt(1))?a.charAt(7)==b(a.substr(2,5)+a.substr(0,1)+""):!0},_it:function(b){if(!/^IT[0-9]{11}$/.test(b))return!1;if(b=b.substr(2),0==parseInt(b.substr(0,7)))return!1;var c=parseInt(b.substr(7,3));return 1>c||c>201&&999!=c&&888!=c?!1:a.fn.bootstrapValidator.helpers.luhn(b)},_lt:function(a){if(!/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(a))return!1;a=a.substr(2);for(var b=a.length,c=0,d=0;b-1>d;d++)c+=parseInt(a.charAt(d))*(1+d%9);var e=c%11;if(10==e){c=0;for(var d=0;b-1>d;d++)c+=parseInt(a.charAt(d))*(1+(d+2)%9)}return e=e%11%10,e==a.charAt(b-1)},_lu:function(a){return/^LU[0-9]{8}$/.test(a)?(a=a.substr(2),a.substr(0,6)%89==a.substr(6,2)):!1},_lv:function(b){if(!/^LV[0-9]{11}$/.test(b))return!1;b=b.substr(2);var c=parseInt(b.charAt(0)),d=0,e=[],f=0,g=b.length;if(c>3){for(d=0,e=[9,1,4,8,3,10,2,5,7,6,1],f=0;g>f;f++)d+=parseInt(b.charAt(f))*e[f];return d%=11,3==d}var h=parseInt(b.substr(0,2)),i=parseInt(b.substr(2,2)),j=parseInt(b.substr(4,2));if(j=j+1800+100*parseInt(b.charAt(6)),!a.fn.bootstrapValidator.helpers.date(j,i,h))return!1;for(d=0,e=[10,5,8,4,2,1,6,3,7,9],f=0;g-1>f;f++)d+=parseInt(b.charAt(f))*e[f];return d=(d+1)%11%10,d==b.charAt(g-1)},_mt:function(a){if(!/^MT[0-9]{8}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[3,4,6,7,8,9,10,1],d=0;8>d;d++)b+=parseInt(a.charAt(d))*c[d];return b%37==0},_nl:function(a){if(!/^NL[0-9]{9}B[0-9]{2}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[9,8,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d))*c[d];return b%=11,b>9&&(b=0),b==a.substr(8,1)},_no:function(a){if(!/^NO[0-9]{9}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[3,2,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d))*c[d];return b=11-b%11,11==b&&(b=0),b==a.substr(8,1)},_pl:function(a){if(!/^PL[0-9]{10}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[6,5,7,2,3,4,5,6,7,-1],d=0;10>d;d++)b+=parseInt(a.charAt(d))*c[d];return b%11==0},_pt:function(a){if(!/^PT[0-9]{9}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[9,8,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d))*c[d];return b=11-b%11,b>9&&(b=0),b==a.substr(8,1)},_ro:function(a){if(!/^RO[1-9][0-9]{1,9}$/.test(a))return!1;a=a.substr(2);for(var b=a.length,c=[7,5,3,2,1,7,5,3,2].slice(10-b),d=0,e=0;b-1>e;e++)d+=parseInt(a.charAt(e))*c[e];return d=10*d%11%10,d==a.substr(b-1,1)},_ru:function(a){if(!/^RU([0-9]{9}|[0-9]{12})$/.test(a))return!1;if(a=a.substr(2),10==a.length){for(var b=0,c=[2,4,10,3,5,9,4,6,8,0],d=0;10>d;d++)b+=parseInt(a.charAt(d))*c[d];return b%=11,b>9&&(b%=10),b==a.substr(9,1)}if(12==a.length){for(var e=0,f=[7,2,4,10,3,5,9,4,6,8,0],g=0,h=[3,7,2,4,10,3,5,9,4,6,8,0],d=0;11>d;d++)e+=parseInt(a.charAt(d))*f[d],g+=parseInt(a.charAt(d))*h[d];return e%=11,e>9&&(e%=10),g%=11,g>9&&(g%=10),e==a.substr(10,1)&&g==a.substr(11,1)}return!1},_rs:function(a){if(!/^RS[0-9]{9}$/.test(a))return!1;a=a.substr(2);for(var b=10,c=0,d=0;8>d;d++)c=(parseInt(a.charAt(d))+b)%10,0==c&&(c=10),b=2*c%11;return(b+parseInt(a.substr(8,1)))%10==1},_se:function(b){return/^SE[0-9]{10}01$/.test(b)?(b=b.substr(2,10),a.fn.bootstrapValidator.helpers.luhn(b)):!1},_si:function(a){if(!/^SI[0-9]{8}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[8,7,6,5,4,3,2],d=0;7>d;d++)b+=parseInt(a.charAt(d))*c[d];return b=11-b%11,10==b&&(b=0),b==a.substr(7,1)},_sk:function(a){return/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(a)?(a=a.substr(2),a%11==0):!1}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.vin={validate:function(a,b){var c=b.val();if(""==c)return!0;if(!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(c))return!1;c=c.toUpperCase();for(var d={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,0:0},e=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],f=0,g=c.length,h=0;g>h;h++)f+=d[c.charAt(h)+""]*e[h];var i=f%11;return 10==i&&(i="X"),i==c.charAt(8)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.zipCode={html5Attributes:{message:"message",country:"country"},validate:function(a,b,c){var d=b.val();if(""==d||!c.country)return!0;var e=(c.country||"US").toUpperCase();switch(e){case"CA":return/^(?:A|B|C|E|G|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|J|K|L|M|N|P|R|S|T|V|X|Y){1}\s?[0-9]{1}(?:A|B|C|E|G|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}$/i.test(d);case"DK":return/^(DK(-|\s)?)?\d{4}$/i.test(d);case"GB":return this._gb(d);case"IT":return/^(I-|IT-)?\d{5}$/i.test(d);case"NL":return/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(d);case"SE":return/^(S-)?\d{3}\s?\d{2}$/i.test(d);case"US":default:return/^\d{4,5}([\-]\d{4})?$/.test(d)}},_gb:function(a){for(var b="[ABCDEFGHIJKLMNOPRSTUWYZ]",c="[ABCDEFGHKLMNOPQRSTUVWXY]",d="[ABCDEFGHJKPMNRSTUVWXY]",e="[ABEHMNPRVWXY]",f="[ABDEFGHJLNPQRSTUWXYZ]",g=[new RegExp("^("+b+"{1}"+c+"?[0-9]{1,2})(\\s*)([0-9]{1}"+f+"{2})$","i"),new RegExp("^("+b+"{1}[0-9]{1}"+d+"{1})(\\s*)([0-9]{1}"+f+"{2})$","i"),new RegExp("^("+b+"{1}"+c+"{1}?[0-9]{1}"+e+"{1})(\\s*)([0-9]{1}"+f+"{2})$","i"),new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$","i"),/^(GIR)(\s*)(0AA)$/i,/^(BFPO)(\s*)([0-9]{1,4})$/i,/^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,/^([A-Z]{4})(\s*)(1ZZ)$/i,/^(AI-2640)$/i],h=0;h<g.length;h++)if(g[h].test(a))return!0;return!1}}}(window.jQuery);


/*! jQuery Validation Plugin - v1.16.0 - 12/2/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return!c.settings.submitHandler||(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&null!=j.form){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]);var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)a[b]&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);if("function"==typeof f.normalizer){if(i=f.normalizer.call(b,i),"string"!=typeof i)throw new TypeError("The normalizer should return a string value.");delete f.normalizer}for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j instanceof TypeError&&(j.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});

/**
 * Modules in this bundle
 * @license
 *
 * modal-video:
 *   license: appleple
 *   author: appleple
 *   homepage: http://developer.a-blogcms.jp
 *   version: 2.4.1
 */
!function e(t,n,o){function i(a,l){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!l&&u)return u(a,!0);if(r)return r(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return i(n||e)},s,s.exports,e,t,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){try{var o=new window.CustomEvent("test");if(o.preventDefault(),!0!==o.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var i=function(e,t){var n,o;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o=n.preventDefault,n.preventDefault=function(){o.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};i.prototype=window.Event.prototype,window.CustomEvent=i}},{}],2:[function(e,t,n){"use strict";function o(e,t){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var n=Object(e),o=1;o<arguments.length;o++){var i=arguments[o];if(void 0!==i&&null!==i)for(var r=Object.keys(Object(i)),a=0,l=r.length;a<l;a++){var u=r[a],d=Object.getOwnPropertyDescriptor(i,u);void 0!==d&&d.enumerable&&(n[u]=i[u])}}return n}function i(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:i}},{}],3:[function(e,t,n){"use strict";var o=e("../index"),i=function(e){e.fn.modalVideo=function(e){return"strings"==typeof e||new o(this,e),this}};if("function"==typeof define&&define.amd)define(["jquery"],i);else{var r=window.jQuery?window.jQuery:window.$;void 0!==r&&i(r)}t.exports=i},{"../index":5}],4:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();e("custom-event-polyfill");var r=e("../lib/util"),a=e("es6-object-assign").assign,l={channel:"youtube",facebook:{},youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",nocookie:!1},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}},u=function(){function e(t,n){var i=this;o(this,e);var u=a({},l,n),d="string"==typeof t?document.querySelectorAll(t):t,s=document.querySelector("body"),c=u.classNames,f=u.animationSpeed;[].forEach.call(d,function(e){e.addEventListener("click",function(t){"A"===e.tagName&&t.preventDefault();var n=e.dataset.videoId,o=e.dataset.channel||u.channel,a=(0,r.getUniqId)(),l=e.dataset.videoUrl||i.getVideoUrl(u,o,n),d=i.getHtml(u,l,a);(0,r.append)(s,d);var v=document.getElementById(a),m=v.querySelector(".js-modal-video-dismiss-btn");v.focus(),v.addEventListener("click",function(){(0,r.addClass)(v,c.modalVideoClose),setTimeout(function(){(0,r.remove)(v),e.focus()},f)}),v.addEventListener("keydown",function(e){9===e.which&&(e.preventDefault(),document.activeElement===v?m.focus():(v.setAttribute("aria-label",""),v.focus()))}),m.addEventListener("click",function(){(0,r.triggerEvent)(v,"click")})})})}return i(e,[{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"getQueryString",value:function(e){var t="";return Object.keys(e).forEach(function(n){t+=n+"="+e[n]+"&"}),t.substr(0,t.length-1)}},{key:"getVideoUrl",value:function(e,t,n){return"youtube"===t?this.getYoutubeUrl(e.youtube,n):"vimeo"===t?this.getVimeoUrl(e.vimeo,n):"facebook"===t?this.getFacebookUrl(e.facebook,n):""}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoutubeUrl",value:function(e,t){var n=this.getQueryString(e);return!0===e.nocookie?"//www.youtube-nocookie.com/embed/"+t+"?"+n:"//www.youtube.com/embed/"+t+"?"+n}},{key:"getFacebookUrl",value:function(e,t){return"//www.facebook.com/v2.10/plugins/video.php?href=https://www.facebook.com/facebook/videos/"+t+"&"+this.getQueryString(e)}},{key:"getHtml",value:function(e,t,n){var o=this.getPadding(e.ratio),i=e.classNames;return'\n      <div class="'+i.modalVideo+'" tabindex="-1" role="dialog" aria-label="'+e.aria.openMessage+'" id="'+n+'">\n        <div class="'+i.modalVideoBody+'">\n          <div class="'+i.modalVideoInner+'">\n            <div class="'+i.modalVideoIframeWrap+'" style="padding-bottom:'+o+'">\n              <button class="'+i.modalVideoCloseBtn+' js-modal-video-dismiss-btn" aria-label="'+e.aria.dismissBtnMessage+"\"></button>\n              <iframe width='460' height='230' src=\""+t+"\" frameborder='0' allowfullscreen="+e.allowFullScreen+' tabindex="-1"/>\n            </div>\n          </div>\n        </div>\n      </div>\n    '}}]),e}();n.default=u,t.exports=n.default},{"../lib/util":6,"custom-event-polyfill":1,"es6-object-assign":2}],5:[function(e,t,n){"use strict";t.exports=e("./core/")},{"./core/":4}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.append=function(e,t){var n=document.createElement("div");for(n.innerHTML=t;n.children.length>0;)e.appendChild(n.children[0])},n.getUniqId=function(){return(Date.now().toString(36)+Math.random().toString(36).substr(2,5)).toUpperCase()},n.remove=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},n.addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},n.triggerEvent=function(e,t,n){var o=void 0;window.CustomEvent?o=new CustomEvent(t,{cancelable:!0}):(o=document.createEvent("CustomEvent"),o.initCustomEvent(t,!1,!1,n)),e.dispatchEvent(o)}},{}]},{},[3]);


/**
 * menu-aim is a jQuery plugin for dropdown menus that can differentiate
 * between a user trying hover over a dropdown item vs trying to navigate into
 * a submenu's contents.
 *
 * menu-aim assumes that you have are using a menu with submenus that expand
 * to the menu's right. It will fire events when the user's mouse enters a new
 * dropdown item *and* when that item is being intentionally hovered over.
 *
 * __________________________
 * | Monkeys  >|   Gorilla  |
 * | Gorillas >|   Content  |
 * | Chimps   >|   Here     |
 * |___________|____________|
 *
 * In the above example, "Gorillas" is selected and its submenu content is
 * being shown on the right. Imagine that the user's cursor is hovering over
 * "Gorillas." When they move their mouse into the "Gorilla Content" area, they
 * may briefly hover over "Chimps." This shouldn't close the "Gorilla Content"
 * area.
 *
 * This problem is normally solved using timeouts and delays. menu-aim tries to
 * solve this by detecting the direction of the user's mouse movement. This can
 * make for quicker transitions when navigating up and down the menu. The
 * experience is hopefully similar to amazon.com/'s "Shop by Department"
 * dropdown.
 *
 * Use like so:
 *
 *      $("#menu").menuAim({
 *          activate: $.noop,  // fired on row activation
 *          deactivate: $.noop  // fired on row deactivation
 *      });
 *
 *  ...to receive events when a menu's row has been purposefully (de)activated.
 *
 * The following options can be passed to menuAim. All functions execute with
 * the relevant row's HTML element as the execution context ('this'):
 *
 *      .menuAim({
 *          // Function to call when a row is purposefully activated. Use this
 *          // to show a submenu's content for the activated row.
 *          activate: function() {},
 *
 *          // Function to call when a row is deactivated.
 *          deactivate: function() {},
 *
 *          // Function to call when mouse enters a menu row. Entering a row
 *          // does not mean the row has been activated, as the user may be
 *          // mousing over to a submenu.
 *          enter: function() {},
 *
 *          // Function to call when mouse exits a menu row.
 *          exit: function() {},
 *
 *          // Selector for identifying which elements in the menu are rows
 *          // that can trigger the above events. Defaults to "> li".
 *          rowSelector: "> li",
 *
 *          // You may have some menu rows that aren't submenus and therefore
 *          // shouldn't ever need to "activate." If so, filter submenu rows w/
 *          // this selector. Defaults to "*" (all elements).
 *          submenuSelector: "*",
 *
 *          // Direction the submenu opens relative to the main menu. Can be
 *          // left, right, above, or below. Defaults to "right".
 *          submenuDirection: "right"
 *      });
 *
 * https://github.com/kamens/jQuery-menu-aim
 * MIT License
*/
(function($) {

    $.fn.menuAim = function(opts) {
        // Initialize menu-aim for all elements in jQuery collection
        this.each(function() {
            init.call(this, opts);
        });

        return this;
    };

    function init(opts) {
        var $menu = $(this),
            activeRow = null,
            mouseLocs = [],
            lastDelayLoc = null,
            timeoutId = null,
            options = $.extend({
                rowSelector: "> li",
                submenuSelector: "*",
                submenuDirection: "right",
                tolerance: 75,  // bigger = more forgivey when entering submenu
                enter: $.noop,
                exit: $.noop,
                activate: $.noop,
                deactivate: $.noop,
                exitMenu: $.noop
            }, opts);

        var MOUSE_LOCS_TRACKED = 3,  // number of past mouse locations to track
            DELAY = 300;  // ms delay when user appears to be entering submenu

        /**
         * Keep track of the last few locations of the mouse.
         */
        var mousemoveDocument = function(e) {
                mouseLocs.push({x: e.pageX, y: e.pageY});

                if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
                    mouseLocs.shift();
                }
            };

        /**
         * Cancel possible row activations when leaving the menu entirely
         */
        var mouseleaveMenu = function() {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                // If exitMenu is supplied and returns true, deactivate the
                // currently active row on menu exit.
                if (options.exitMenu(this)) {
                    if (activeRow) {
                        options.deactivate(activeRow);
                    }

                    activeRow = null;
                }
            };

        /**
         * Trigger a possible row activation whenever entering a new row.
         */
        var mouseenterRow = function() {
                if (timeoutId) {
                    // Cancel any previous activation delays
                    clearTimeout(timeoutId);
                }

                options.enter(this);
                possiblyActivate(this);
            },
            mouseleaveRow = function() {
                options.exit(this);
            };

        /*
         * Immediately activate a row if the user clicks on it.
         */
        var clickRow = function() {
                activate(this);
            };

        /**
         * Activate a menu row.
         */
        var activate = function(row) {
                if (row == activeRow) {
                    return;
                }

                if (activeRow) {
                    options.deactivate(activeRow);
                }

                options.activate(row);
                activeRow = row;
            };

        /**
         * Possibly activate a menu row. If mouse movement indicates that we
         * shouldn't activate yet because user may be trying to enter
         * a submenu's content, then delay and check again later.
         */
        var possiblyActivate = function(row) {
                var delay = activationDelay();

                if (delay) {
                    timeoutId = setTimeout(function() {
                        possiblyActivate(row);
                    }, delay);
                } else {
                    activate(row);
                }
            };

        /**
         * Return the amount of time that should be used as a delay before the
         * currently hovered row is activated.
         *
         * Returns 0 if the activation should happen immediately. Otherwise,
         * returns the number of milliseconds that should be delayed before
         * checking again to see if the row should be activated.
         */
        var activationDelay = function() {
                if (!activeRow || !$(activeRow).is(options.submenuSelector)) {
                    // If there is no other submenu row already active, then
                    // go ahead and activate immediately.
                    return 0;
                }

                var offset = $menu.offset(),
                    upperLeft = {
                        x: offset.left,
                        y: offset.top - options.tolerance
                    },
                    upperRight = {
                        x: offset.left + $menu.outerWidth(),
                        y: upperLeft.y
                    },
                    lowerLeft = {
                        x: offset.left,
                        y: offset.top + $menu.outerHeight() + options.tolerance
                    },
                    lowerRight = {
                        x: offset.left + $menu.outerWidth(),
                        y: lowerLeft.y
                    },
                    loc = mouseLocs[mouseLocs.length - 1],
                    prevLoc = mouseLocs[0];

                if (!loc) {
                    return 0;
                }

                if (!prevLoc) {
                    prevLoc = loc;
                }

                if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x ||
                    prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
                    // If the previous mouse location was outside of the entire
                    // menu's bounds, immediately activate.
                    return 0;
                }

                if (lastDelayLoc &&
                        loc.x == lastDelayLoc.x && loc.y == lastDelayLoc.y) {
                    // If the mouse hasn't moved since the last time we checked
                    // for activation status, immediately activate.
                    return 0;
                }

                // Detect if the user is moving towards the currently activated
                // submenu.
                //
                // If the mouse is heading relatively clearly towards
                // the submenu's content, we should wait and give the user more
                // time before activating a new row. If the mouse is heading
                // elsewhere, we can immediately activate a new row.
                //
                // We detect this by calculating the slope formed between the
                // current mouse location and the upper/lower right points of
                // the menu. We do the same for the previous mouse location.
                // If the current mouse location's slopes are
                // increasing/decreasing appropriately compared to the
                // previous's, we know the user is moving toward the submenu.
                //
                // Note that since the y-axis increases as the cursor moves
                // down the screen, we are looking for the slope between the
                // cursor and the upper right corner to decrease over time, not
                // increase (somewhat counterintuitively).
                function slope(a, b) {
                    return (b.y - a.y) / (b.x - a.x);
                };

                var decreasingCorner = upperRight,
                    increasingCorner = lowerRight;

                // Our expectations for decreasing or increasing slope values
                // depends on which direction the submenu opens relative to the
                // main menu. By default, if the menu opens on the right, we
                // expect the slope between the cursor and the upper right
                // corner to decrease over time, as explained above. If the
                // submenu opens in a different direction, we change our slope
                // expectations.
                if (options.submenuDirection == "left") {
                    decreasingCorner = lowerLeft;
                    increasingCorner = upperLeft;
                } else if (options.submenuDirection == "below") {
                    decreasingCorner = lowerRight;
                    increasingCorner = lowerLeft;
                } else if (options.submenuDirection == "above") {
                    decreasingCorner = upperLeft;
                    increasingCorner = upperRight;
                }

                var decreasingSlope = slope(loc, decreasingCorner),
                    increasingSlope = slope(loc, increasingCorner),
                    prevDecreasingSlope = slope(prevLoc, decreasingCorner),
                    prevIncreasingSlope = slope(prevLoc, increasingCorner);

                if (decreasingSlope < prevDecreasingSlope &&
                        increasingSlope > prevIncreasingSlope) {
                    // Mouse is moving from previous location towards the
                    // currently activated submenu. Delay before activating a
                    // new menu row, because user may be moving into submenu.
                    lastDelayLoc = loc;
                    return DELAY;
                }

                lastDelayLoc = null;
                return 0;
            };

        /**
         * Hook up initial menu events
         */
        $menu
            .mouseleave(mouseleaveMenu)
            .find(options.rowSelector)
                .mouseenter(mouseenterRow)
                .mouseleave(mouseleaveRow)
                .click(clickRow);

        $(document).mousemove(mousemoveDocument);

    };
})(jQuery);

