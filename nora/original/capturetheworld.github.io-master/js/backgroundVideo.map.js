{"version":3,"sources":["dist/backgroundVideo.js"],"names":["_createClass","defineProperties","target","props","i","length","descriptor","enumerable","configurable","writable","Object","defineProperty","key","Constructor","protoProps","staticProps","prototype","_typeof","Symbol","iterator","obj","constructor","_classCallCheck","instance","TypeError","root","factory","pluginName","define","amd","exports","module","window","defaults","parallax","effect","pauseVideoOnViewLoss","preventContextMenu","minimumVideoWidth","onBeforeReady","onReady","addClass","el","className","classList","add","BackgroundVideo","element","options","this","document","querySelectorAll","assign","browserPrexix","detectBrowser","shimRequestAnimationFrame","has3d","detect3d","init","value","iteration","playEvent","videoReadyCallback","bind","setVideoWrap","setVideoProperties","insertVideos","readyState","addEventListener","removeEventListener","originalVideoW","videoWidth","originalVideoH","videoHeight","bindEvents","requestTick","ticking","requestAnimationFrame","positionObject","scrollPos","pageYOffset","_scaleObject","scaleObject","xPos","yPos","calculateYPos","transformStyle","style","transform","windowWidth","innerWidth","windowHeight","innerHeight","heightScale","widthScale","scaleFactor","bvVideoWrap","width","height","parseInt","videoPosition","offsetTop","videoOffset","wrapper","createElement","bvVideoWrapClass","position","overflow","zIndex","parentNode","insertBefore","appendChild","querySelector","setAttribute","src","videoTypeArr","split","videoType","addSourceToVideo","type","source","val","navigator","userAgent","toLowerCase","indexOf","lastTime","vendors","x","cancelAnimationFrame","callback","currTime","Date","getTime","timeToCall","Math","max","id","setTimeout","clearTimeout","t","transforms","WebkitTransform","OTransform","MSTransform","MozTransform","body","lastChild","undefined","getComputedStyle","getPropertyValue","removeChild","jQuery","$","fn","each","data"],"mappings":"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","file":"dist/backgroundVideo.js"}