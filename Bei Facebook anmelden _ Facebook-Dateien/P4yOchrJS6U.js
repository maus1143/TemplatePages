;/*FB_PKG_DELIM*/

__d("Nectar",["Env","getContextualParent"],(function(a,b,c,d,e,f){var g;function h(a){a.nctr||(a.nctr={})}function i(a){if((g||(g=b("Env"))).module||!a)return(g||(g=b("Env"))).module;var c={fbpage_fan_confirm:!0,photos_snowlift:!0},d;while(a&&a.getAttribute){var e=a.getAttribute("id");if(e!=null&&e.startsWith("pagelet_"))return e;!d&&c[e]&&(d=e);a=b("getContextualParent")(a)}return d}a={addModuleData:function(a,b){b=i(b);b&&(h(a),a.nctr._mod=b)}};e.exports=a}),null);
__d("AsyncRequestNectarLogging",["AsyncRequest","Nectar"],(function(a,b,c,d,e,f,g){Object.assign(c("AsyncRequest").prototype,{setNectarModuleData:function(a){this.method=="POST"&&d("Nectar").addModuleData(this.data,a)}})}),34);
__d("Button",["csx","cx","invariant","CSS","DOM","DataStore","Event","Parent","emptyFunction","isNode"],(function(a,b,c,d,e,f,g,h,i,j){var k="uiButtonDisabled",l="uiButtonDepressed",m="_42fr",n="_42fs",o="button:blocker",p="href",q="ajaxify";function r(a,b){var e=d("DataStore").get(a,o);b?e&&(e.remove(),d("DataStore").remove(a,o)):e||d("DataStore").set(a,o,c("Event").listen(a,"click",c("emptyFunction").thatReturnsFalse,c("Event").Priority.URGENT))}function s(a){a=d("Parent").byClass(a,"uiButton")||d("Parent").bySelector(a,"._42ft");if(!a)throw new Error("invalid use case");return a}function t(a){return c("DOM").isNodeOfType(a,"a")}function u(a){return c("DOM").isNodeOfType(a,"button")}function v(a){return d("CSS").matchesSelector(a,"._42ft")}var w={getInputElement:function(a){a=s(a);if(t(a))throw new Error("invalid use case");if(u(a)){a instanceof HTMLButtonElement||j(0,21261);return a}return c("DOM").find(a,"input")},isEnabled:function(a){return!(d("CSS").hasClass(s(a),k)||d("CSS").hasClass(s(a),m))},setEnabled:function(a,b){a=s(a);var c=v(a)?m:k;d("CSS").conditionClass(a,c,!b);if(t(a)){c=a.getAttribute("href");var e=a.getAttribute("ajaxify"),f=d("DataStore").get(a,p,"#"),g=d("DataStore").get(a,q);b?(c||a.setAttribute("href",f),!e&&g&&a.setAttribute("ajaxify",g),a.removeAttribute("tabIndex")):(c&&c!==f&&d("DataStore").set(a,p,c),e&&e!==g&&d("DataStore").set(a,q,e),a.removeAttribute("href"),a.removeAttribute("ajaxify"),a.setAttribute("tabIndex","-1"));r(a,b)}else{f=w.getInputElement(a);f.disabled=!b;r(f,b)}},setDepressed:function(a,b){a=s(a);var c=v(a)?n:l;d("CSS").conditionClass(a,c,b)},isDepressed:function(a){a=s(a);var b=v(a)?n:l;return d("CSS").hasClass(a,b)},setLabel:function(a,b){a=s(a);if(v(a)){var e=[];b&&e.push(b);var f=c("DOM").scry(a,".img");for(var g=0;g<f.length;g++){var h=f[g],i=h.parentNode;i.classList&&(i.classList.contains("_4o_3")||i.classList.contains("_-xe"))?a.firstChild===i?e.unshift(i):e.push(i):a.firstChild==h?e.unshift(h):e.push(h)}c("DOM").setContent(a,e)}else if(t(a)){i=c("DOM").find(a,"span.uiButtonText");c("DOM").setContent(i,b)}else w.getInputElement(a).value=b;h=v(a)?"_42fv":"uiButtonNoText";d("CSS").conditionClass(a,h,!b)},getIcon:function(a){a=s(a);return c("DOM").scry(a,".img")[0]},setIcon:function(a,b){if(b&&!c("isNode")(b))return;var e=w.getIcon(a);if(!b){e&&c("DOM").remove(e);return}d("CSS").addClass(b,"customimg");e!=b&&(e?c("DOM").replace(e,b):c("DOM").prependContent(s(a),b))}};a=w;g["default"]=a}),98);
__d("CSTXCookieRecordConsentControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/cookie/consent/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("MaybeSymbol",[],(function(a,b,c,d,e,f){"use strict";b=a.Symbol?a.Symbol:null;c=b;f["default"]=c}),66);
__d("URLSearchParams",["MaybeSymbol"],(function(a,b,c,d,e,f,g){var h=/\+/g,i=/[!\'()*]/g,j=/%20/g,k=c("MaybeSymbol")?c("MaybeSymbol").iterator:null;function l(a){return encodeURIComponent(a).replace(j,"+").replace(i,function(a){return"%"+a.charCodeAt(0).toString(16)})}function m(a){return decodeURIComponent((a=a)!=null?a:"").replace(h," ")}function n(a){var b=a.slice(0),c={next:function(){var a=b.length,c=b.shift();return{done:c===void 0&&a<=0,value:c}}};k&&(c[k]=function(){return c});return c}a=function(){function a(a){a===void 0&&(a="");a=a;a[0]==="?"&&(a=a.substr(1));this.$1=a.length?a.split("&").map(function(a){a=a.split("=");var b=a[0];a=a[1];return[m(b),m(a)]}):[]}var b=a.prototype;b.append=function(a,b){this.$1.push([a,String(b)])};b["delete"]=function(a){for(var b=0;b<this.$1.length;b++)this.$1[b][0]===a&&(this.$1.splice(b,1),b--)};b.entries=function(){if(k)return this.$1[k]();var a=this.$1.slice(0);return n(a)};b.get=function(a){for(var b=0,c=this.$1.length;b<c;b++)if(this.$1[b][0]===a)return this.$1[b][1];return null};b.getAll=function(a){var b=[];for(var c=0,d=this.$1.length;c<d;c++)this.$1[c][0]===a&&b.push(this.$1[c][1]);return b};b.has=function(a){for(var b=0,c=this.$1.length;b<c;b++)if(this.$1[b][0]===a)return!0;return!1};b.keys=function(){var a=this.$1.map(function(a){var b=a[0];a[1];return b});return k?a[k]():n(a)};b.set=function(a,b){var c=!1;for(var d=0;d<this.$1.length;d++)this.$1[d][0]===a&&(c?(this.$1.splice(d,1),d--):(this.$1[d][1]=String(b),c=!0));c||this.$1.push([a,String(b)])};b.toString=function(){return this.$1.map(function(a){var b=a[0];a=a[1];return l(b)+"="+l(a)}).join("&")};b.values=function(){var a=this.$1.map(function(a){a[0];a=a[1];return a});return k?a[k]():n(a)};b[k]=function(){return this.entries()};return a}();g["default"]=a}),98);
__d("DeferredCookie",["CSTXCookieRecordConsentControllerRouteBuilder","Cookie","CookieConsent","SubscriptionList","URLSearchParams","cr:1083116","cr:1083117","cr:3376","flattenPHPQueryData","nullthrows","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";var h,i=new Map(),j=!1,k=new Map(),l={addToQueue:function(a,b,d,e,f,g,j,k){if((h||(h=c("CookieConsent"))).hasConsent(1)){f?c("Cookie").setWithoutChecksIfFirstPartyContext(a,b,d,e,j,k):c("Cookie").setWithoutChecks(a,b,d,e,j,k);return}if(i.has(a))return;i.set(a,{name:a,value:b,nMilliSecs:d,path:e,firstPartyOnly:f,secure:j,domain:k})},getIsDeferredCookieInQueue:function(a){return i.has(a)},flushAllCookiesWithoutRecordingConsentDONOTCALLBEFORECONSENT:function(){i.forEach(function(a,b){a.firstPartyOnly?c("Cookie").setWithoutChecksIfFirstPartyContext(a.name,a.value,a.nMilliSecs,a.path,a.secure,a.domain):c("Cookie").setWithoutChecks(a.name,a.value,a.nMilliSecs,a.path,a.secure,a.domain)});i.clear();(h||(h=c("CookieConsent"))).setConsented();for(var a=k,b=Array.isArray(a),d=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(b){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;e[1].fireCallbacks()}},flushAllCookiesINTERNALONLY:function(a,d,e,f,g,h,i){a===void 0&&(a=!1);e===void 0&&(e=!1);f===void 0&&(f=!1);h===void 0&&(h=!1);l.flushAllCookiesWithoutRecordingConsentDONOTCALLBEFORECONSENT();var k={accept_only_essential:f,opted_in_controls:g,consent_to_everything:h};d!=null&&(d=Object.fromEntries(d),k={optouts:d,accept_only_essential:f,opted_in_controls:g,consent_to_everything:h});d=c("flattenPHPQueryData")(k);if(!j){f=c("CSTXCookieRecordConsentControllerRouteBuilder").buildUri({});g=new(c("URLSearchParams"))(location.search).get("ig_3p_controls");if(g==="on"){h=f.addQueryParam("ig_3p_controls","on");f=(k=h)!=null?k:f}j=!0;var m=function(){i&&i();a&&location.reload();if(e){var b=document.getElementsByTagName("iframe");b.length>0&&location.reload()}};b("cr:3376")!=null?c("promiseDone")(b("cr:3376")(f.toString(),{data:d,method:"POST"}),function(){return m()},function(a){b("cr:1083117")&&b("cr:1083117")("Cookie consent has not been set successfully: "+a.errorMsg,"comet_infra")}):b("cr:1083116")!=null&&new(b("cr:1083116"))(f.toString()).setData(d).setHandler(function(){return m()}).send()}},registerCallbackOnCookieFlush:function(a,b){(h||(h=c("CookieConsent"))).hasConsent(a)?b():(k.has(a)||k.set(a,new(c("SubscriptionList"))()),c("nullthrows")(k.get(a)).add(b))}};a=l;g["default"]=a}),98);
__d("ErrorMessageConsole",["ErrorPubSub","cr:1458113"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){if(a.type!=="fatal")return;b("cr:1458113")&&b("cr:1458113").showErrorDialog(a)}var i=!1;function d(){if(i)return;i=!0;(h||(h=c("ErrorPubSub"))).addListener(j)}function j(a){if(a.type!=="fatal")return;b("cr:1458113")&&b("cr:1458113").showErrorDialog(a)}g.addError=a;g.listenForUncaughtErrors=d}),98);
__d("FlipDirection",["DOM","Input","Style"],(function(a,b,c,d,e,f){a={setDirection:function(a,c,d){c===void 0&&(c=5);d===void 0&&(d=!1);var e=b("DOM").isNodeOfType(a,"input")&&a.type=="text",f=b("DOM").isNodeOfType(a,"textarea");if(!(e||f)||a.getAttribute("data-prevent-auto-flip"))return;e=b("Input").getValue(a);f=a.style&&a.style.direction;if(!f||d){f=0;d=!0;for(var g=0;g<e.length;g++){var h=e.charCodeAt(g);if(h>=48){d&&(d=!1,f++);if(h>=1470&&h<=1920){b("Style").set(a,"direction","rtl");a.setAttribute("dir","rtl");return}if(f==c){b("Style").set(a,"direction","ltr");a.setAttribute("dir","ltr");return}}else d=!0}}else e.length===0&&(b("Style").set(a,"direction",""),a.removeAttribute("dir"))}};e.exports=a}),null);
__d("FlipDirectionOnKeypress",["Event","FlipDirection"],(function(a,b,c,d,e,f,g){a=function(a){a=a.getTarget();d("FlipDirection").setDirection(a)};c("Event").listen(document.documentElement,{keyup:a,input:a})}),34);
__d("VirtualCursorStatus",["UserAgent","cr:5662","emptyFunction","setImmediate"],(function(a,b,c,d,e,f){var g=null,h=null;function i(){h||(h=b("cr:5662").listen(window,"blur",function(){g=null,j()}))}function j(){h&&(h.remove(),h=null)}function a(a){g=a.keyCode,i()}function c(){g=null,j()}if(typeof window!=="undefined"&&window.document&&window.document.createElement){d=document.documentElement;if(d)if(d.addEventListener)d.addEventListener("keydown",a,!0),d.addEventListener("keyup",c,!0);else if(d.attachEvent){f=d.attachEvent;f("onkeydown",a);f("onkeyup",c)}}var k={isKeyDown:function(){return!!g},getKeyDownCode:function(){return g}},l=!1,m=!1,n=null,o=!1;function p(a){var c=new Set(),d=k.isKeyDown(),e=a.clientX,f=a.clientY,g=a.isTrusted,h=a.offsetX,i=a.offsetY,j=a.mozInputSource,n=a.WEBKIT_FORCE_AT_MOUSE_DOWN,o=a.webkitForce;a=a.target;var p=a.clientWidth;a=a.clientHeight;e===0&&f===0&&h>=0&&i>=0&&m&&g&&j==null&&c.add("Chrome");l&&m&&!d&&o!=null&&o<n&&h===0&&i===0&&j==null&&c.add("Safari-edge");e===0&&f===0&&h<0&&i<0&&m&&j==null&&c.add("Safari-old");!l&&!m&&!d&&g&&b("UserAgent").isBrowser("IE >= 10")&&j==null&&(e<0&&f<0?c.add("IE"):(h<0||h>p)&&(i<0||i>a)&&c.add("MSIE"));j===0&&g&&c.add("Firefox");return c}function q(){l=!0,b("setImmediate")(function(){l=!1})}function r(){m=!0,b("setImmediate")(function(){m=!1})}function s(a,c){n===null&&(n=p(a));o=n.size>0;a=a.target.getAttribute("data-accessibilityid")==="virtual_cursor_trigger";c(o,n,a);b("setImmediate")(function(){o=!1,n=null})}d={isVirtualCursorTriggered:function(){return o},add:function(a,c){c===void 0&&(c=b("emptyFunction"));var d=function(a){return s(a,c)};a.addEventListener("click",d);var e=b("cr:5662").listen(a,"mousedown",q),f=b("cr:5662").listen(a,"mouseup",r);return{remove:function(){a.removeEventListener("click",d),e.remove(),f.remove()}}}};e.exports=d}),null);
__d("FocusRing",["cx","CSS","Event","KeyEventController","Keys","VirtualCursorStatus","emptyFunction"],(function(a,b,c,d,e,f,g,h){var i=["mousedown","mouseup"],j=[(e=c("Keys")).UP,e.RIGHT,e.DOWN,e.LEFT,e.TAB,e.RETURN,e.SPACE,e.ESC];function a(){if(n)return;o=!1;k();m();document.body&&d("CSS").addClass(document.body,"_19_u");n=!0}function b(){return o}function k(){document.documentElement&&d("VirtualCursorStatus").add(document.documentElement,s)}function l(){q=i.map(function(a){return c("Event").listen(document.documentElement,a,p)})}function m(){w=c("Event").listen(document.documentElement,"keydown",t)}var n=!1,o=!0;function p(){v()}var q=i.map(function(a){return{remove:c("emptyFunction")}});function r(){q.forEach(function(a){return a.remove()})}function s(a){a&&u()}function t(a){j.indexOf(c("Event").getKeyCode(a))>-1&&c("KeyEventController").filterEventTargets(a,"keydown")&&u()}function u(){w.remove(),l(),o=!0,document.body&&d("CSS").removeClass(document.body,"_19_u")}function v(){r(),m(),o=!1,document.body&&d("CSS").addClass(document.body,"_19_u")}var w={remove:c("emptyFunction")};({remove:c("emptyFunction")});g.KEY_CODES=j;g.init=a;g.usingKeyboardNavigation=b;g._attachVirtualCursorListener=k;g._attachMouseListeners=l;g._attachKeyDownListener=m;g._onMouseEvent=p;g._removeMouseListeners=r;g._onClick=s;g._onKeyDown=t;g._showFocusRing=u;g._hideFocusRing=v}),98);
__d("FullScreen",["ArbiterMixin","CSS","Event","Keys","UserAgent","UserAgent_DEPRECATED","mixin","throttle"],(function(a,b,c,d,e,f,g){var h={},i=!1;function j(a){c("Event").getKeyCode(a)===c("Keys").ESC&&a.stopPropagation()}function k(){i||(document.addEventListener("keydown",j,!0),i=!0)}function l(){i&&(document.removeEventListener("keydown",j,!0),i=!1)}a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(b=c=a.call.apply(a,[this].concat(f))||this,c.onChange=function(){var a=c.isFullScreen(),b=document.body;b&&d("CSS").conditionClass(b,"fullScreen",a);c.inform("changed");a||l()},b)||babelHelpers.assertThisInitialized(c)}var e=b.prototype;e.listenForEvent=function(a){var b=c("throttle")(this.onChange,0,this);h[a.id]||(h[a.id]=!0,c("Event").listen(a,{webkitfullscreenchange:b,mozfullscreenchange:b,MSFullscreenChange:b,fullscreenchange:b}))};e.enableFullScreen=function(a){this.listenForEvent(a);a=a;if(a.webkitRequestFullScreen)d("UserAgent_DEPRECATED").chrome()?a.webkitRequestFullScreen==null?void 0:a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):a.webkitRequestFullScreen==null?void 0:a.webkitRequestFullScreen();else if(a.mozRequestFullScreen)a.mozRequestFullScreen();else if(a.msRequestFullscreen)k(),a.msRequestFullscreen==null?void 0:a.msRequestFullscreen();else if(a.requestFullScreen)a.requestFullScreen==null?void 0:a.requestFullScreen();else return!1;return!0};e.disableFullScreen=function(){var a=document;if(a.webkitCancelFullScreen)a.webkitCancelFullScreen();else if(a.mozCancelFullScreen)a.mozCancelFullScreen();else if(a.msExitFullscreen)a.msExitFullscreen();else if(a.cancelFullScreen)a.cancelFullScreen();else if(a.exitFullScreen)a.exitFullScreen();else return!1;return!0};e.isFullScreen=function(){var a=document;return Boolean(a.webkitIsFullScreen||a.fullScreen||a.mozFullScreen||a.msFullscreenElement)};e.toggleFullScreen=function(a){if(this.isFullScreen()){this.disableFullScreen();return!1}else return this.enableFullScreen(a)};e.isSupportedWithKeyboardInput=function(){return this.isSupported()&&!c("UserAgent").isBrowser("Safari")};e.isSupported=function(){var a=document,b=a.webkitFullscreenEnabled||a.mozFullScreenEnabled||a.msFullscreenEnabled||a.fullscreenEnabled;return Boolean(b||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen||a.cancelFullScreen||a.exitFullScreen)};return b}(c("mixin")(c("ArbiterMixin")));b=new a();e=c("throttle")(b.onChange,0,b);c("Event").listen(document,{webkitfullscreenchange:e,mozfullscreenchange:e,MSFullscreenChange:e,fullscreenchange:e});f=b;g["default"]=f}),98);
__d("LoggedOutSwitchingLocaleTypedLogger",["Banzai","GeneratedLoggerUtils"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setIndex=function(a){this.$1.index=a;return this};c.setNewLocale=function(a){this.$1.new_locale=a;return this};c.setOldLocale=function(a){this.$1.old_locale=a;return this};c.setReferrer=function(a){this.$1.referrer=a;return this};return a}();c={index:!0,new_locale:!0,old_locale:!0,referrer:!0};f["default"]=a}),66);
__d("XIntlAccountSetLocaleAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/intl/ajax/save_locale/",{loc:{type:"String"},href:{type:"String"},index:{type:"Int"},ref:{type:"String"},ls_ref:{type:"Enum",defaultValue:"unknown",enumType:1},should_redirect:{type:"Bool",defaultValue:!0},is_caa:{type:"Bool",defaultValue:!1}})}),null);
__d("XIntlSaveXModeAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/intl/save_xmode/",{})}),null);
__d("IntlUtils",["invariant","AsyncRequest","Cookie","LoggedOutSwitchingLocaleTypedLogger","ReloadPage","XIntlAccountSetLocaleAsyncController","XIntlSaveXModeAsyncController","goURI"],(function(a,b,c,d,e,f,g,h){var i=c("XIntlSaveXModeAsyncController").getURIBuilder().getURI();function a(a){new(c("AsyncRequest"))().setURI(i).setData({xmode:a}).setHandler(function(){d("ReloadPage").now()}).send()}function b(a){return a.replace(new RegExp("\xa0","g"),"&nbsp;")}function e(a){return a.replace(new RegExp("&nbsp;","g"),"\xa0")}function f(a){new(c("AsyncRequest"))().setURI(i).setData({rmode:a}).setHandler(function(){d("ReloadPage").now()}).send()}function j(a){new(c("AsyncRequest"))().setURI(i).setData({string_manager_mode:a}).setHandler(function(){d("ReloadPage").now()}).send()}function k(a,b,e,f){f=e;f||(a!=null||h(0,19476),f=a.options[a.selectedIndex].value);e=c("XIntlAccountSetLocaleAsyncController").getURIBuilder().getURI();new(c("AsyncRequest"))().setURI(e).setData({loc:f,ref:b,should_redirect:!1}).setHandler(function(a){d("ReloadPage").now()}).send()}function l(a){var b="lh",d=c("Cookie").get(b),e=[],f=5;if(d!=null&&d!=""){e=d.split(",");e.push(a);for(d=0;d<e.length-1;d++)e[d]==e[d+1]&&e.splice(d,1);e.length>=f&&e.slice(1,f)}else e.push(a);c("Cookie").set(b,e.toString())}function m(a,b,d,e,f){e===void 0&&(e="unknown"),f===void 0&&(f=null),c("Cookie").setWithoutCheckingUserConsent_DANGEROUS("locale",a),l(a),new(c("LoggedOutSwitchingLocaleTypedLogger"))().setNewLocale(a).setOldLocale(b).setIndex(f).setReferrer(e).log(),c("goURI")(d)}g.setXmode=a;g.encodeSpecialCharsForXController=b;g.decodeSpecialCharsFromXController=e;g.setRmode=f;g.setSmode=j;g.setLocale=k;g.appendCookieLocaleHistory=l;g.setCookieLocale=m}),98);
__d("KeyboardActivityTypedLogger",["Banzai","GeneratedLoggerUtils"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setDuration=function(a){this.$1.duration=a;return this};c.setKey=function(a){this.$1.key=a;return this};return a}();c={duration:!0,key:!0};f["default"]=a}),66);
__d("KeyboardActivityLogger",["Event","KeyboardActivityTypedLogger","Keys","isElementInteractive"],(function(a,b,c,d,e,f,g){b=["tab","right","left","up","down","enter"];var h=b.reduce(function(a,b){a[b]={count:0,startTS:0};return a},{}),i=20;function a(){document.addEventListener("keydown",j)}function j(a){var b=a.getTarget();if(c("isElementInteractive")(b))return;switch(c("Event").getKeyCode(a)){case c("Keys").TAB:k("tab");break;case c("Keys").RIGHT:k("right");break;case c("Keys").LEFT:k("left");break;case c("Keys").UP:k("up");break;case c("Keys").DOWN:k("down");break;case c("Keys").RETURN:k("enter");break}}function k(a){var b=h[a];b.count++;b.startTS===0&&(b.startTS=Date.now());b.count===i&&(l(a),b.count=0,b.startTS=0)}function l(a){var b=h[a];b=Date.now()-b.startTS;new(c("KeyboardActivityTypedLogger"))().setKey(a).setDuration(b).log()}g.init=a;g._listenForKey=j;g._checkKeyActivity=k;g._log=l}),98);
__d("ResetScrollOnUnload",["Run"],(function(a,b,c,d,e,f,g){function a(){d("Run").onUnload(function(){window.history.scrollRestoration="manual"})}function b(a){d("Run").onUnload(function(){window.history.scrollRestoration="manual",a.style.opacity="0",window.scrollTo(0,0)})}g.disableScrollRestoration=a;g.init=b}),98);
__d("UITinyViewportAction",["Arbiter","ArbiterMixin","CSS","Event","FullScreen","getDocumentScrollElement","queryThenMutateDOM","throttle"],(function(a,b,c,d,e,f){var g=document.documentElement,h,i,j,k,l=!1,m=!1,n=!1,o={init:function(a){a=b("throttle")(function(){if(b("FullScreen").isFullScreen())return;b("queryThenMutateDOM")(function(){k=k||b("getDocumentScrollElement")(),i=g.clientWidth<k.scrollWidth-1,j=g.clientHeight<400,h=j||i},function(){if(h!==l||i!==m||j!==n){var a;(a=b("CSS")).conditionClass(g,"tinyViewport",h);a.conditionClass(g,"tinyWidth",i);a.conditionClass(g,"tinyHeight",j);a.conditionClass(g,"canHaveFixedElements",!h);o.inform("change",h);b("Arbiter").inform("tinyViewport/change",{tiny:h,tinyWidth:i,tinyHeight:j},"state");l=h;m=i;n=j}},"TinyViewport")});a();b("Arbiter").subscribe("quickling/response",a);b("Event").listen(window,"resize",a);b("FullScreen").subscribe("changed",a)},isTiny:function(){return h},isTinyWidth:function(){return i},isTinyHeight:function(){return j}};Object.assign(o,b("ArbiterMixin"));e.exports=o}),null);
__d("XAsyncRequest",["cr:1042"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1042")}),98);
__d("XAsyncRequestWWW",["AsyncRequest"],(function(a,b,c,d,e,f,g){a=function(){function a(a){var b=this;this.setAllowCrossPageTransition=function(a){b.$1.setAllowCrossPageTransition(a);return b};this.$1=new(c("AsyncRequest"))(a)}var b=a.prototype;b.setURI=function(a){this.$1.setURI(a);return this};b.setTimeoutHandler=function(a,b){this.$1.setTimeoutHandler(a,b);return this};b.setOption=function(a,b){this.$1.setOption(a,b);return this};b.setMethod=function(a){this.$1.setMethod(a);return this};b.setAutoProcess=function(a){this.$1.setOption("suppressEvaluation",a);return this};b.setData=function(a){this.$1.setData(a);return this};b.setHandler=function(a){this.$1.setHandler(a);return this};b.setPayloadHandler=function(a){this.setHandler(function(b){return a(b.payload)});return this};b.setErrorHandler=function(a){this.$1.setErrorHandler(a);return this};b.send=function(){this.$1.send();return this};b.abort=function(){this.$1.abort()};b.setReadOnly=function(a){this.$1.setReadOnly(a);return this};b.setAllowCrossOrigin=function(a){this.$1.setAllowCrossOrigin(a);return this};b.setAllowCredentials=function(a){this.$1.setAllowCredentials(a);return this};return a}();g["default"]=a}),98);
__d("legacy:intl-base",["IntlUtils"],(function(a,b,c,d,e,f,g){a.intl_set_string_manager_mode=(b=d("IntlUtils")).setSmode;a.intl_set_xmode=b.setXmode;a.intl_set_rmode=b.setRmode;a.intl_set_locale=b.setLocale}),35);