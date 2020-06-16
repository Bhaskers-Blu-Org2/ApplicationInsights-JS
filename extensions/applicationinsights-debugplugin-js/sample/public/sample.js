if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

function myFunc() {

  var toTrack = [
    'trackEvent',
    'trackPageView',
    'trackPageViewPerformance',
    'trackException',
    'trackTrace',
    'trackMetric',
    'trackDependencyData',
    'throwInternal',        // called when a message is logged internally
    'logInternalMessage',   // called when a message is logged internally
    'triggerSend',          // called when data is queued to be sent to the server
    '_sender',              // called when data is sent to the server
  ];

  var debugPlugin = Microsoft.ApplicationInsights.DebugPlugin.DebugPlugin;
  var debugPluginInstance = new debugPlugin();
  window.debugPluginInstance = debugPluginInstance;

  !function(T,l,y){var S=T.location,u="script",k="instrumentationKey",D="ingestionendpoint",C="disableExceptionTracking",E="ai.device.",I="toLowerCase",b="crossOrigin",w="POST",e="appInsightsSDK",t=y.name||"appInsights";(y.name||T[e])&&(T[e]=t);var n=T[t]||function(d){var g=!1,f=!1,m={initialize:!0,queue:[],sv:"3",version:2,config:d};function v(e,t){var n={},a="Browser";return n[E+"id"]=a[I](),n[E+"type"]=a,n["ai.operation.name"]=S&&S.pathname||"_unknown_",n["ai.internal.sdkVersion"]="javascript:snippet_"+(m.sv||m.version),{time:function(){var e=new Date;function t(e){var t=""+e;return 1===t.length&&(t="0"+t),t}return e.getUTCFullYear()+"-"+t(1+e.getUTCMonth())+"-"+t(e.getUTCDate())+"T"+t(e.getUTCHours())+":"+t(e.getUTCMinutes())+":"+t(e.getUTCSeconds())+"."+((e.getUTCMilliseconds()/1e3).toFixed(3)+"").slice(2,5)+"Z"}(),iKey:e,name:"Microsoft.ApplicationInsights."+e.replace(/-/g,"")+"."+t,sampleRate:100,tags:n,data:{baseData:{ver:2}}}}var h=d.url||y.src;if(h){function a(e){var t,n,a,i,r,o,s,c,p,l,u;g=!0,m.queue=[],f||(f=!0,t=h,s=function(){var e={},t=d.connectionString;if(t)for(var n=t.split(";"),a=0;a<n.length;a++){var i=n[a].split("=");2===i.length&&(e[i[0][I]()]=i[1])}if(!e[D]){var r=e.endpointsuffix,o=r?e.location:null;e[D]="https://"+(o?o+".":"")+"dc."+(r||"services.visualstudio.com")}return e}(),c=s[k]||d[k]||"",p=s[D],l=p?p+"/v2/track":config.endpointUrl,(u=[]).push((n="SDK LOAD Failure: Failed to load Application Insights SDK script (See stack for details)",a=t,i=l,(o=(r=v(c,"Exception")).data).baseType="ExceptionData",o.baseData.exceptions=[{typeName:"SDKLoadFailed",message:n.replace(/\./g,"-"),hasFullStack:!1,stack:n+"\nSnippet failed to load ["+a+"] -- Telemetry is disabled\nHelp Link: https://go.microsoft.com/fwlink/?linkid=2128109\nHost: "+(S&&S.pathname||"_unknown_")+"\nEndpoint: "+i,parsedStack:[]}],r)),u.push(function(e,t,n,a){var i=v(c,"Message"),r=i.data;r.baseType="MessageData";var o=r.baseData;return o.message='AI (Internal): 99 message:"'+("SDK LOAD Failure: Failed to load Application Insights SDK script (See stack for details) ("+n+")").replace(/\"/g,"")+'"',o.properties={endpoint:a},i}(0,0,t,l)),function(e,t){if(JSON){var n=T.fetch;if(n&&!y.useXhr)n(t,{method:w,body:JSON.stringify(e),mode:"cors"});else if(XMLHttpRequest){var a=new XMLHttpRequest;a.open(w,t),a.setRequestHeader("Content-type","application/json"),a.send(JSON.stringify(e))}}}(u,l))}function i(e,t){f||setTimeout(function(){!t&&m.core||a()},500)}var e=function(){var n=l.createElement(u);n.src=h;var e=y[b];return!e&&""!==e||"undefined"==n[b]||(n[b]=e),n.onload=i,n.onerror=a,n.onreadystatechange=function(e,t){"loaded"!==n.readyState&&"compvare"!==n.readyState||i(0,t)},n}();y.ld<0?l.getElementsByTagName("head")[0].appendChild(e):setTimeout(function(){l.getElementsByTagName(u)[0].parentNode.appendChild(e)},y.ld||0)}try{m.cookie=l.cookie}catch(p){}function t(e){for(;e.length;){var t=e.pop();m[t]=function(){var e=arguments;g||m.queue.push(function(){m[t].apply(m,e)})}}}var n="track",r="TrackPage",o="TrackEvent";t([n+"Event",n+"PageView",n+"Exception",n+"Trace",n+"DependencyData",n+"Metric",n+"PageViewPerformance","start"+r,"stop"+r,"start"+o,"stop"+o,"addTelemetryInitializer","setAuthenticatedUserContext","clearAuthenticatedUserContext","flush"]),m.SeverityLevel={Verbose:0,Information:1,Warning:2,Error:3,Critical:4};var s=(d.extensionConfig||{}).ApplicationInsightsAnalytics||{};if(!0!==d[C]&&!0!==s[C]){method="onerror",t(["_"+method]);var c=T[method];T[method]=function(e,t,n,a,i){var r=c&&c(e,t,n,a,i);return!0!==r&&m["_"+method]({message:e,url:t,lineNumber:n,columnNumber:a,error:i}),r},d.autoExceptionInstrumented=!0}return m}(y.cfg);(T[t]=n).queue&&0===n.queue.length&&n.trackPageView({})}(window,document,{
  src: "https://az416426.vo.msecnd.net/scripts/b/ai.2.min.js", // The SDK URL Source
  crossOrigin: "anonymous",
  cfg: { // Application Insights Configuration
      instrumentationKey: "MyInstrumentationKey",
      appId: "OSKAR",
      disableFetchTracking: false,
      enableCorsCorrelation: true,
      disableCorrelationHeaders: false,
      // correlationHeaderExcludedDomains: [
      // "*.com",
      // ],
      maxBatchInterval: 5000,
      extensions: [
        debugPluginInstance
      ],
      extensionConfig: {
        [debugPlugin.identifier]: {
          trackers: toTrack
        }
      },
      correlationHeaderDomains: ["oskarsvc", "localhost"],
  }});

  var testBtnFns = {
    trackEvent: function () { window.appInsights.trackEvent({name: 'some event'}); },
    trackPageView: function () { window.appInsights.trackPageView({name: 'some page'}); },
    trackPageViewPerformance: function () { window.appInsights.trackPageViewPerformance({name : 'some page', url: 'some url'}); },
    trackException: function () { window.appInsights.trackException({exception: new Error('some error')}); },
    trackTrace: function () { window.appInsights.trackTrace({message: 'some trace'}); },
    trackMetric: function () { window.appInsights.trackMetric({name: 'some metric', average: 42}); },
    trackDependencyData: function () { window.appInsights.trackDependencyData({absoluteUrl: 'some url', responseCode: 200, method: 'GET', id: 'some id'}); },
    triggerErrorImmediate: function () {
      throw new Error('testErrorImmediate');
    },
    triggerErrorAsync: function () {
      setTimeout(function() {throw new Error('testErrorAsync')}, 1000);
    },
    throwInternal: function () {
      window.appInsights.core.logger.throwInternal(1, 42069, 'test internal err');
    },
    send: function () {
      var idx = window.appInsights.core._extensions.findIndex(function(v) { return v.identifier === 'ChannelControllerPlugin' });
      window.appInsights.core._extensions[idx].getChannelControls()[0][0].triggerSend();
    }
  }

  var keys = Object.keys(testBtnFns);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var fn = testBtnFns[key];

    var btn = document.createElement('button');
    btn.style.display = 'block';
    btn.style.width = '300px';
    btn.style.height = '30px';
    btn.textContent = "trigger " + key;
    btn.onclick = fn;
    document.body.appendChild(btn);
  }
}

myFunc();