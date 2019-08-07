/* Please Wait javascript file minified, used for Preloader */
!function(a,b){"object"==typeof exports?b(exports):"function"==typeof define&&define.amd?define(["exports"],b):b(a)}(this,function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;g=document.createElement("fakeelement"),e=!1,n=!1,d="animationend",m=null,f="Webkit Moz O ms".split(" "),l={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};for(h in l)if(o=l[h],null!=g.style[h]){m=o,n=!0;break}if(null!=g.style.animationName&&(e=!0),!e)for(p=0,q=f.length;q>p;p++)if(i=f[p],null!=g.style[""+i+"AnimationName"]){switch(i){case"Webkit":d="webkitAnimationEnd";break;case"Moz":d="animationend";break;case"O":d="oanimationend";break;case"ms":d="MSAnimationEnd"}e=!0;break}return c=function(a,b){return b.classList?b.classList.add(a):b.className+=" "+a},k=function(a,b){return b.classList?b.classList.remove(a):b.className=b.className.replace(a,"").trim()},b=function(){function a(a){var b,f,g,h;b=this.constructor._defaultOptions,this.options={},this.loaded=!1,this.finishing=!1;for(f in b)h=b[f],this.options[f]=null!=a[f]?a[f]:h;this._loadingElem=document.createElement("div"),this._loadingHtmlToDisplay=[],this._loadingElem.className="pg-loading-screen",null!=this.options.backgroundColor&&(this._loadingElem.style.backgroundColor=this.options.backgroundColor),this._loadingElem.innerHTML=this.options.template,this._loadingHtmlElem=this._loadingElem.getElementsByClassName("pg-loading-html")[0],null!=this._loadingHtmlElem&&(this._loadingHtmlElem.innerHTML=this.options.loadingHtml),this._readyToShowLoadingHtml=!1,this._logoElem=this._loadingElem.getElementsByClassName("pg-loading-logo")[0],null!=this._logoElem&&(this._logoElem.src=this.options.logo),k("pg-loaded",document.body),c("pg-loading",document.body),document.body.appendChild(this._loadingElem),c("pg-loading",this._loadingElem),this._onLoadedCallback=this.options.onLoadedCallback,g=function(a){return function(b){return a.loaded=!0,a._readyToShowLoadingHtml=!0,c("pg-loaded",a._loadingHtmlElem),e&&a._loadingHtmlElem.removeEventListener(d,g),a._loadingHtmlToDisplay.length>0&&a._changeLoadingHtml(),a.finishing?(null!=b&&b.stopPropagation(),a._finish()):void 0}}(this),null!=this._loadingHtmlElem&&(e?this._loadingHtmlElem.addEventListener(d,g):g(),this._loadingHtmlListener=function(a){return function(){return a._readyToShowLoadingHtml=!0,k("pg-loading",a._loadingHtmlElem),n&&a._loadingHtmlElem.removeEventListener(m,a._loadingHtmlListener),a._loadingHtmlToDisplay.length>0?a._changeLoadingHtml():void 0}}(this),this._removingHtmlListener=function(a){return function(){return a._loadingHtmlElem.innerHTML=a._loadingHtmlToDisplay.shift(),k("pg-removing",a._loadingHtmlElem),c("pg-loading",a._loadingHtmlElem),n?(a._loadingHtmlElem.removeEventListener(m,a._removingHtmlListener),a._loadingHtmlElem.addEventListener(m,a._loadingHtmlListener)):a._loadingHtmlListener()}}(this))}return a._defaultOptions={backgroundColor:null,logo:null,loadingHtml:null,template:"<div class='pg-loading-inner'>\n  <div class='pg-loading-center-outer'>\n    <div class='pg-loading-center-middle'>\n      <h1 class='pg-loading-logo-header'>\n        <img class='pg-loading-logo'></img>\n      </h1>\n      <div class='pg-loading-html'>\n      </div>\n    </div>\n  </div>\n</div>",onLoadedCallback:null},a.prototype.finish=function(a,b){return null==a&&(a=!1),window.document.hidden&&(a=!0),this.finishing=!0,null!=b&&this.updateOption("onLoadedCallback",b),this.loaded||a?this._finish(a):void 0},a.prototype.updateOption=function(a,b){switch(a){case"backgroundColor":return this._loadingElem.style.backgroundColor=b;case"logo":return this._logoElem.src=b;case"loadingHtml":return this.updateLoadingHtml(b);case"onLoadedCallback":return this._onLoadedCallback=b;default:throw new Error("Unknown option '"+a+"'")}},a.prototype.updateOptions=function(a){var b,c,d;null==a&&(a={}),d=[];for(b in a)c=a[b],d.push(this.updateOption(b,c));return d},a.prototype.updateLoadingHtml=function(a,b){if(null==b&&(b=!1),null==this._loadingHtmlElem)throw new Error("The loading template does not have an element of class 'pg-loading-html'");return b?(this._loadingHtmlToDisplay=[a],this._readyToShowLoadingHtml=!0):this._loadingHtmlToDisplay.push(a),this._readyToShowLoadingHtml?this._changeLoadingHtml():void 0},a.prototype._changeLoadingHtml=function(){return this._readyToShowLoadingHtml=!1,this._loadingHtmlElem.removeEventListener(m,this._loadingHtmlListener),this._loadingHtmlElem.removeEventListener(m,this._removingHtmlListener),k("pg-loading",this._loadingHtmlElem),k("pg-removing",this._loadingHtmlElem),n?(c("pg-removing",this._loadingHtmlElem),this._loadingHtmlElem.addEventListener(m,this._removingHtmlListener)):this._removingHtmlListener()},a.prototype._finish=function(a){var b;return null==a&&(a=!1),null!=this._loadingElem?(c("pg-loaded",document.body),"function"==typeof this._onLoadedCallback&&this._onLoadedCallback.apply(this),b=function(a){return function(){return document.body.removeChild(a._loadingElem),k("pg-loading",document.body),e&&a._loadingElem.removeEventListener(d,b),a._loadingElem=null}}(this),!a&&e?(c("pg-loaded",this._loadingElem),this._loadingElem.addEventListener(d,b)):b()):void 0},a}(),j=function(a){return null==a&&(a={}),new b(a)},a.pleaseWait=j,j});

function topFunction() { //Scroll Back to Top Button, When the user clicks on the button, scroll to the top of the document function
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function () {
    /* Swiper Initialized (Experience Section)*/
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        thumbs: {
          swiper: galleryThumbs
        },
        autoplay: {
            delay: 5000
        }
    });
    /* Swiper in Projects Section */
    var swiper = new Swiper('.swiper-proj-container', {
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 3,
        initialSlide: 0,
        keyboardControl: true,
        mousewheelControl: true,
        lazyLoading: true,
        preventClicks: false,
        preventClicksPropagation: false,
        lazyLoadingInPrevNext: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows : false,
        }
    });
  
});