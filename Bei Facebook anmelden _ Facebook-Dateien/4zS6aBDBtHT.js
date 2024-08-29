;/*FB_PKG_DELIM*/

__d("Banzai",["cr:7383"],(function(a,b,c,d,e,f,g){g["default"]=b("cr:7383")}),98);
__d("EventEmitterWithValidation",["BaseEventEmitter"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c){var d;d=a.call(this)||this;d.$EventEmitterWithValidation1=Object.keys(b);d.$EventEmitterWithValidation2=Boolean(c);return d}var c=b.prototype;c.emit=function(b){if(this.$EventEmitterWithValidation1.indexOf(b)===-1){if(this.$EventEmitterWithValidation2)return;throw new TypeError(g(b,this.$EventEmitterWithValidation1))}return a.prototype.emit.apply(this,arguments)};return b}(b("BaseEventEmitter"));function g(a,b){a='Unknown event type "'+a+'". ';a+="Known event types: "+b.join(", ")+".";return a}e.exports=a}),null);
__d("JstlMigrationFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1814852");b=d("FalcoLoggerInternal").create("jstl_migration",a);e=b;g["default"]=e}),98);
__d("getDataWithLoggerOptions",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return babelHelpers["extends"]({},a,{__options:babelHelpers["extends"]({event_time:Date.now()/1e3},b)})}f["default"]=a}),66);
__d("GeneratedLoggerUtils",["invariant","Banzai","JstlMigrationFalcoEvent","getDataWithLoggerOptions"],(function(a,b,c,d,e,f,g){"use strict";var h=window.location.search.indexOf("showlog")>-1;function a(a,c,d,e){var f=b("getDataWithLoggerOptions")(c,e);c=a.split(":")[0];var g=a.split(":")[1];c=="logger"?b("JstlMigrationFalcoEvent").log(function(){return{logger_config_name:g,payload:f}}):b("Banzai").post(a,f,d);h}c={log:a,serializeVector:function(a){if(!a)return a;if(Array.isArray(a))return a;if(a.toArray){var b=a;return b.toArray()}if(typeof a==="object"&&a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"])return Array.from(a);g(0,3874,a)},serializeMap:function(a){if(!a)return a;if(a.toJS){var b=a;return b.toJS()}if(typeof a==="object"&&a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]){b=a;var c={};for(var b=b,d=Array.isArray(b),e=0,b=d?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=b.length)break;f=b[e++]}else{e=b.next();if(e.done)break;f=e.value}f=f;c[f[0]]=f[1]}return c}if(Object.prototype.toString.call(a)==="[object Object]")return a;g(0,3875,a)},checkExtraDataFieldNames:function(a,b){Object.keys(a).forEach(function(a){Object.prototype.hasOwnProperty.call(b,a)&&g(0,3876,a)})},warnForInvalidFieldNames:function(a,b,c,d){},throwIfNull:function(a,b){a||g(0,3877,b);return a}};e.exports=c}),null);
__d("NavigationMetrics",["cr:6016"],(function(a,b,c,d,e,f,g){g["default"]=b("cr:6016")}),98);
__d("mixInEventEmitter",["invariant","EventEmitterWithHolding","EventEmitterWithValidation","EventHolder"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a,b,c){b||h(0,3159);var d=a.prototype||a;d.__eventEmitter&&h(0,3160);a=a.constructor;a&&(a===Object||a===Function||h(0,3161));d.__types=babelHelpers["extends"]({},d.__types,b);d.__ignoreUnknownEvents=Boolean(c);Object.assign(d,i)}var i={emit:function(a,b,c,d,e,f,g){return this.__getEventEmitter().emit(a,b,c,d,e,f,g)},emitAndHold:function(a,b,c,d,e,f,g){return this.__getEventEmitter().emitAndHold(a,b,c,d,e,f,g)},addListener:function(a,b,c){return this.__getEventEmitter().addListener(a,b,c)},once:function(a,b,c){return this.__getEventEmitter().once(a,b,c)},addRetroactiveListener:function(a,b,c){return this.__getEventEmitter().addRetroactiveListener(a,b,c)},listeners:function(a){return this.__getEventEmitter().listeners(a)},removeAllListeners:function(){this.__getEventEmitter().removeAllListeners()},removeCurrentListener:function(){this.__getEventEmitter().removeCurrentListener()},releaseHeldEventType:function(a){this.__getEventEmitter().releaseHeldEventType(a)},__getEventEmitter:function(){if(!this.__eventEmitter){var a=new(c("EventEmitterWithValidation"))(this.__types,this.__ignoreUnknownEvents),b=new(c("EventHolder"))();this.__eventEmitter=new(c("EventEmitterWithHolding"))(a,b)}return this.__eventEmitter}};g["default"]=a}),98);
__d("NavigationMetricsCore",["mixInEventEmitter","pageID"],(function(a,b,c,d,e,f,g){var h={NAVIGATION_DONE:"NAVIGATION_DONE",EVENT_OCCURRED:"EVENT_OCCURRED"},i={tti:"tti",e2e:"e2e",all_pagelets_loaded:"all_pagelets_loaded",all_pagelets_displayed:"all_pagelets_displayed"},j=0,k={},l=function(){function a(){this.eventTimings={tti:null,e2e:null,all_pagelets_loaded:null,all_pagelets_displayed:null},this.lid=c("pageID")+":"+j++,this.extras={}}var b=a.prototype;b.getLID=function(){return this.lid};b.setRequestStart=function(a){this.start=a;return this};b.setTTI=function(a){this.eventTimings.tti=a;this.$1(i.tti,a);return this};b.setE2E=function(a){this.eventTimings.e2e=a;this.$1(i.e2e,a);return this};b.setExtra=function(a,b){this.extras[a]=b;return this};b.setDisplayDone=function(a){this.eventTimings.all_pagelets_displayed=a;this.setExtra("all_pagelets_displayed",a);this.$1(i.all_pagelets_displayed,a);return this};b.setAllPageletsLoaded=function(a){this.eventTimings.all_pagelets_loaded=a;this.setExtra("all_pagelets_loaded",a);this.$1(i.all_pagelets_loaded,a);return this};b.setServerLID=function(a){this.serverLID=a;return this};b.$1=function(a,b){var c={};k!=null&&this.serverLID!=null&&k[this.serverLID]!=null&&(c=k[this.serverLID]);c=babelHelpers["extends"]({},c,{event:a,timestamp:b});m.emitAndHold(h.EVENT_OCCURRED,this.serverLID,c);return this};b.doneNavigation=function(){var a=babelHelpers["extends"]({start:this.start,extras:this.extras},this.eventTimings);if(this.serverLID&&k[this.serverLID]){var b=this.serverLID;Object.assign(a,k[b]);delete k[b]}m.emitAndHold(h.NAVIGATION_DONE,this.lid,a)};return a}(),m={Events:h,postPagelet:function(a,b,c){},siteInit:function(a){a(l)},setPage:function(a){if(!a.serverLID)return;k[a.serverLID]={page:a.page,pageType:a.page_type,pageURI:a.page_uri,serverLID:a.serverLID}},getFullPageLoadLid:function(){throw new Error("getFullPageLoadLid is not implemented on this site")}};c("mixInEventEmitter")(m,h);a=m;g["default"]=a}),98);
__d("NavigationMetricsWWW",["Arbiter","BigPipeInstance","NavigationMetricsCore","PageEvents","performance"],(function(a,b,c,d,e,f,g){var h,i="0";c("NavigationMetricsCore").getFullPageLoadLid=function(){return i};c("NavigationMetricsCore").siteInit(function(a){var b=new a(),e=!0;c("Arbiter").subscribe(d("BigPipeInstance").Events.init,function(f,g){var h=e?b:new a();e&&(i=g.lid);e=!1;h.setServerLID(g.lid);f=g.arbiter;f.subscribe(d("BigPipeInstance").Events.tti,function(a,b){a=b.ts;h.setTTI(a)});f.subscribe(c("PageEvents").AJAXPIPE_SEND,function(a,b){a=b.ts;h.setRequestStart(a)});f.subscribe(c("PageEvents").AJAXPIPE_ONLOAD,function(a,b){a=b.ts;h.setE2E(a).doneNavigation()});f.subscribe(d("BigPipeInstance").Events.displayed,function(a,b){a=b.ts;h.setDisplayDone(a)});f.subscribe(d("BigPipeInstance").Events.loaded,function(a,b){a=b.ts;h.setAllPageletsLoaded(a)})});c("Arbiter").subscribe(c("PageEvents").BIGPIPE_ONLOAD,function(a,d){a=d.ts;e=!1;b.setRequestStart((h||(h=c("performance"))).timing&&(h||(h=c("performance"))).timing.navigationStart).setE2E(a).doneNavigation()})});g["default"]=c("NavigationMetricsCore")}),98);
__d("getCrossOriginTransport",["invariant","ExecutionEnvironment","err"],(function(a,b,c,d,e,f,g){var h;function i(){if(!(h||(h=b("ExecutionEnvironment"))).isInBrowser)throw b("err")("getCrossOriginTransport: %s","Cross origin transport unavailable in the server environment.");try{var a=new XMLHttpRequest();!("withCredentials"in a)&&typeof XDomainRequest!=="undefined"&&(a=new XDomainRequest());return a}catch(a){throw b("err")("getCrossOriginTransport: %s",a.message)}}i.withCredentials=function(){var a=i();"withCredentials"in a||g(0,5150);var b=a.open;a.open=function(){b.apply(this,arguments),this.withCredentials=!0};return a};e.exports=i}),null);
__d("ZeroRewrites",["URI","ZeroRewriteRules","getCrossOriginTransport","getSameOriginTransport","isFacebookURI"],(function(a,b,c,d,e,f){var g,h={rewriteURI:function(a){if(!b("isFacebookURI")(a)||h._isWhitelisted(a))return a;var c=h._getRewrittenSubdomain(a);c!==null&&c!==void 0&&(a=a.setSubdomain(c));return a},getTransportBuilderForURI:function(a){return h.isRewritten(a)?b("getCrossOriginTransport").withCredentials:b("getSameOriginTransport")},isRewriteSafe:function(a){if(Object.keys(b("ZeroRewriteRules").rewrite_rules).length===0||!b("isFacebookURI")(a))return!1;var c=h._getCurrentURI().getDomain(),d=new(g||(g=b("URI")))(a).qualify().getDomain();return c===d||h.isRewritten(a)},isRewritten:function(a){a=a.getQualifiedURI();if(Object.keys(b("ZeroRewriteRules").rewrite_rules).length===0||!b("isFacebookURI")(a)||h._isWhitelisted(a))return!1;var c=a.getSubdomain(),d=h._getCurrentURI(),e=h._getRewrittenSubdomain(d);return a.getDomain()!==d.getDomain()&&c===e},_isWhitelisted:function(a){a=a.getPath();a.endsWith("/")||(a+="/");return b("ZeroRewriteRules").whitelist&&b("ZeroRewriteRules").whitelist[a]===1},_getRewrittenSubdomain:function(a){a=a.getQualifiedURI().getSubdomain();return b("ZeroRewriteRules").rewrite_rules[a]},_getCurrentURI:function(){return new(g||(g=b("URI")))("/").qualify()}};e.exports=h}),null);