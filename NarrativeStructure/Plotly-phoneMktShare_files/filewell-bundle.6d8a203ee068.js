webpackJsonp([1],{0:function(e,t,r){e.exports=r(1576)},1576:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r(2),r(299);var a=r(395),o=n(a),u=r(543),s=r(1577),i=n(s),l=r(485),c=n(l),d=r(302),f=n(d),p=r(1572),E=r(490),y=r(851),_=r(1578),v=r(1583),S=n(v),T=c["default"].getHistory(),A=window.location,O=A.pathname,h=A.search,g=A.hash;T.replace(decodeURI(O+h+g));var I=(0,S["default"])();I.dispatch(o["default"].initializeApp()),I.dispatch({type:(0,E.actionType)("user")}),(0,_.syncHistoryWithStore)(T,I),(0,y.render)(f["default"].createElement(p.AppContainer,null,f["default"].createElement(i["default"],{store:I,history:T})),document.getElementById("filewell-content")),window.FILEWELL_PRESENT=!0,window.showExternalGrids=function(e){I.dispatch((0,u.createTablesFromExternal)(e))},window.showExternalPlot=function(e){I.dispatch((0,u.createPlotFromExternal)(e))}},1577:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{loggedInUser:e.stores.user.loggedInUser}}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(302),c=n(l),d=r(331),f=n(d),p=r(504),E=r(332),y=r(753),_=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"getChildContext",value:function(){var e=this.props.loggedInUser;return{loggedInUser:e}}},{key:"render",value:function(){var e=this.props,t=e.store,r=e.history;return c["default"].createElement(p.Provider,{store:t},c["default"].createElement(E.Router,{history:r},f["default"]))}}]),t}(l.Component);_.propTypes={store:l.PropTypes.object.isRequired,loggedInUser:y.loggedInUserOrNull.isDefined,history:l.PropTypes.object.isRequired},_.childContextTypes={loggedInUser:y.loggedInUserOrNull.isDefined},e.exports=(0,p.connect)(s)(_)},1578:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.routerMiddleware=t.routerActions=t.goForward=t.goBack=t.go=t.replace=t.push=t.CALL_HISTORY_METHOD=t.routerReducer=t.LOCATION_CHANGE=t.syncHistoryWithStore=void 0;var a=r(1579);Object.defineProperty(t,"LOCATION_CHANGE",{enumerable:!0,get:function(){return a.LOCATION_CHANGE}}),Object.defineProperty(t,"routerReducer",{enumerable:!0,get:function(){return a.routerReducer}});var o=r(1580);Object.defineProperty(t,"CALL_HISTORY_METHOD",{enumerable:!0,get:function(){return o.CALL_HISTORY_METHOD}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return o.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return o.replace}}),Object.defineProperty(t,"go",{enumerable:!0,get:function(){return o.go}}),Object.defineProperty(t,"goBack",{enumerable:!0,get:function(){return o.goBack}}),Object.defineProperty(t,"goForward",{enumerable:!0,get:function(){return o.goForward}}),Object.defineProperty(t,"routerActions",{enumerable:!0,get:function(){return o.routerActions}});var u=r(1581),s=n(u),i=r(1582),l=n(i);t.syncHistoryWithStore=s["default"],t.routerMiddleware=l["default"]},1579:function(e,t){"use strict";function r(){var e=arguments.length<=0||void 0===arguments[0]?o:arguments[0],t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=t.type,u=t.payload;return r===a?n({},e,{locationBeforeTransitions:u}):e}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.routerReducer=r;var a=t.LOCATION_CHANGE="@@router/LOCATION_CHANGE",o={locationBeforeTransitions:null}},1580:function(e,t){"use strict";function r(e){return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return{type:n,payload:{method:e,args:r}}}}Object.defineProperty(t,"__esModule",{value:!0});var n=t.CALL_HISTORY_METHOD="@@router/CALL_HISTORY_METHOD",a=t.push=r("push"),o=t.replace=r("replace"),u=t.go=r("go"),s=t.goBack=r("goBack"),i=t.goForward=r("goForward");t.routerActions={push:a,replace:o,go:u,goBack:s,goForward:i}},1581:function(e,t,r){"use strict";function n(e,t){var r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=r.selectLocationState,s=void 0===n?u:n,i=r.adjustUrlOnReplay,l=void 0===i||i;if("undefined"==typeof s(t.getState()))throw new Error("Expected the routing state to be available either as `state.routing` or as the custom expression you can specify as `selectLocationState` in the `syncHistoryWithStore()` options. Ensure you have added the `routerReducer` to your store's reducers via `combineReducers` or whatever method you use to isolate your reducers.");var c=void 0,d=void 0,f=void 0,p=void 0,E=function(e){var r=s(t.getState());return r.locationBeforeTransitions||(e?c:void 0)},y=E();if(l){var _=function(){var t=E(!0);y!==t&&(d=!0,y=t,e.transitionTo(a({},t,{action:"PUSH"})),d=!1)};f=t.subscribe(_),_()}var v=function(e){d||(y=e,!c&&(c=e,E())||t.dispatch({type:o.LOCATION_CHANGE,payload:e}))};return p=e.listen(v),a({},e,{listen:function(e){var r=E(!0),n=!1,a=t.subscribe(function(){var t=E(!0);t!==r&&(r=t,n||e(r))});return e(r),function(){n=!0,a()}},unsubscribe:function(){l&&f(),p()}})}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t["default"]=n;var o=r(1579),u=function(e){return e.routing}},1582:function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(e){return function(){return function(t){return function(r){if(r.type!==o.CALL_HISTORY_METHOD)return t(r);var a=r.payload,u=a.method,s=a.args;e[u].apply(e,n(s))}}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var o=r(1580)},1583:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=R.applyMiddleware.apply(void 0,[T["default"],m].concat(a(t))),n=(0,R.createStore)(b,e,r);return(0,I.addPlotlyDevToolsRequiringStore)(n),n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=r(1584),s=n(u),i=r(304),l=n(i),c=r(1585),d=n(c),f=r(1586),p=n(f),E=r(1587),y=n(E),_=r(1569),v=n(_),S=r(1571),T=n(S),A=r(1570),O=n(A),h=r(1588),g=n(h),I=r(1561),R=r(511),L=r(1578),b=(0,R.combineReducers)((0,l["default"])({},{api:s["default"],files:d["default"],modal:p["default"],plot:y["default"],routing:L.routerReducer,stores:v["default"],user:O["default"],workspace:g["default"]})),m=function(){return function(e){return function(t){return e(t)}}};window.ENV&&"vagrant"===window.ENV.PLOTLY_ENV&&(m=function(e){return function(t){return function(r){console.groupCollapsed(r.type),console.info("%c dispatching","color: #4CAF50; font-weight: bold",r);var n=t(r);return console.info("%c new state","color: #2196F3; font-weight: bold",e.getState()),console.groupEnd(r.type),n}}})},1584:function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1],r=[t.resource,t.verb];switch((t.id||""===t.id)&&r.push(t.id),t.type){case o.RESET:return(0,a.assocPath)(r,(0,a.path)(r,u),e);case o.REQUEST:return(0,a.assocPath)(r,{status:o.REQUEST},e);case o.SUCCESS:return(0,a.assocPath)(r,{status:o.SUCCESS,content:t.content},e);case o.FAILURE:return(0,a.assocPath)(r,{status:o.FAILURE,error:t.error},e);default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var a=r(434),o=r(467),u={users:{current:null,login:{},create:{},update:{},changePassword:{},resetApiKey:{},createStreamToken:{},createMapboxToken:{},deleteMapboxToken:{},collaborators:{},retrieve:{}},files:{retrieve:{},sources:{},collaborators:{},collaboratorsAdd:{},collaboratorsRemove:{}},folders:{create:null,detail:{},retrieve:{},all:null},plots:{content:{}},grids:{content:{},retrieve:{}},subscriptions:{list:null},code:{retrieve:{}},dashboards:{retrieve:{},create:null,update:{}},notebooks:{html:{},upload:{},update:{}},presentations:{content:{},upload:{},update:{}}}},1585:function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case o.PUT:return(0,a.assoc)(t.id,t.file,e);default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var a=r(434),o=r(464)},1586:function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{opened:null,closing:!1,history:[]},t=arguments[1];switch(t.type){case o.OPEN_MODAL:var r={type:t.typeName,data:t.data};return{opened:r,closing:!1,history:(0,a.append)(r,e.history)};case o.SET_CLOSING_MODAL:return(0,a.assoc)("closing",!0,e);case o.CLOSE_MODAL:return(0,a.merge)((0,a.clone)(e),{opened:null,closing:!1});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(434),o=r(525);t["default"]=n},1587:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new u["default"].Map,t=arguments[1];switch(t.type){case i:return e.set(t.fileId,{status:i});case l:return e.set(t.fileId,{status:l,data:t.content});case c:return e.set(t.fileId,{status:c,error:t.error});default:return e}}var o=r(404),u=n(o),s=r(511),i="PLOT_CONTENT_REQUEST",l="PLOT_CONTENT_SUCCESS",c="PLOT_CONTENT_FAILURE",d=(0,s.combineReducers)({content:a});[i,l,c].forEach(function(e){d[e]=e}),e.exports=d},1588:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(511),o=r(446),u=r(1589),s=r(1590),i=r(1591),l=n(i),c=void 0,d=(0,a.combineReducers)({analysisData:s.analysisData,analysisIds:s.analysisIds,columnIdMap:u.columnIdMap,columnMeta:u.columnMeta,editMode:u.editMode,fidMap:u.fidMap,figure:u.figure,graphEncoding:u.graphEncoding,graphMode:u.graphMode,plotId:u.plotId,selectedTableId:u.selectedTableId,shareFid:u.shareFid,sqlConnector:l["default"],styleMode:u.styleMode,tableIds:u.tableIds,tables:u.tables}),f=function(e,t){switch(t.type){case o.CLEAR_WORKSPACE:return d(c,t);default:return d(e,t)}};t["default"]=f},1589:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L.EDIT_MODE.GRAPH,t=arguments[1];switch(t.type){case L.SELECT_EDIT_MODE:return t.payload;default:return e}}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L.STYLE_MODE.TRACES,t=arguments[1];switch(t.type){case L.SELECT_STYLE_MODE:return t.payload;default:return e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L.GRAPH_MODE.CREATE,t=arguments[1];switch(t.type){case L.SELECT_GRAPH_MODE:return t.payload;default:return e}}function i(e){var t=!0,r=!1,n=void 0;try{for(var a,o=(0,I.keys)(e)[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var u=a.value;if((0,b.parseFid)(u).type!==R.FID_TYPES.TEMP)throw new Error("Only temp fids can be keys of fidMap.");if((0,b.parseFid)(e[u]).type!==R.FID_TYPES.REF)throw new Error("Only ref fids can be values in fidMap.")}}catch(s){r=!0,n=s}finally{try{!t&&o["return"]&&o["return"]()}finally{if(r)throw n}}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case L.UPDATE_FID_MAP:return i(t.payload),O({},e,t.payload);case L.MARK_FID_AS_UNSAVED:case L.REMOVE_TABLE:return(0,I.omit)(t.payload,e);default:return e}}function c(e){var t=!0,r=!1,n=void 0;try{for(var a,o=(0,I.keys)(e)[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var u=a.value,s=(0,b.parseSrc)(u),i=(0,b.parseColRef)(s.colRef);if(s.type!==R.SRC_TYPES.TEMP)throw new Error("Keys in columnIdMap must be temp type.");if(i.type!==R.COL_REF_TYPES.SINGLE)throw new Error("Keys in columnIdMap must be single type.");var l=(0,b.parseSrc)(e[u]),c=(0,b.parseColRef)(l.colRef);if(l.type!==R.SRC_TYPES.REF)throw new Error("Values of columnIdMap must be ref type.");if(c.type!==R.COL_REF_TYPES.SINGLE)throw new Error("Values of columnIdMap must be single type.")}}catch(d){r=!0,n=d}finally{try{!t&&o["return"]&&o["return"]()}finally{if(r)throw n}}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case L.UPDATE_COLUMN_ID_MAP:return c(t.payload),O({},e,t.payload);case L.REMOVE_COLUMN_IDS_FROM_COLUMN_ID_MAP:var r=e,n=!0,a=!1,o=void 0;try{for(var u,s=t.payload.columnIds[Symbol.iterator]();!(n=(u=s.next()).done);n=!0){var i=u.value;r[i]&&(r=(0,I.omit)(i,r))}}catch(l){a=!0,o=l}finally{try{!n&&s["return"]&&s["return"]()}finally{if(a)throw o}}return r;case L.MARK_FID_AS_UNSAVED:case L.REMOVE_TABLE:return(0,I.omit)((0,I.filter)(function(e){return(0,b.parseSrc)(e).fid===t.payload},(0,I.keys)(e)),e);default:return e}}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];switch(t.type){case L.ADD_SHARE_FID:return t.payload;default:return e}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];switch(t.type){case L.ADD_PLOT_ID:if(""!==e)throw new Error("Plot id already initialized!");return t.payload;default:return e}}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g["default"].List(),t=arguments[1];switch(t.type){case L.ADD_EMPTY_TABLE:var r=t.payload.tableId;return e.includes(r)?e:e.push(r);case L.MERGE_COLUMNS_AND_TABLES:var n=function(){if(!t.payload.tables)return{v:e};var r=e;return t.payload.tables.forEach(function(e,t){r.includes(t)||(r=r.push(t))}),{v:r}}();if("object"===("undefined"==typeof n?"undefined":A(n)))return n.v;case L.REMOVE_TABLE:var a=e.indexOf(t.payload);return a>=0?e.remove(a):e;default:return e}}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case L.ADD_EMPTY_TABLE:return t.payload.tableId;case L.SELECT_TABLE:return t.payload;case L.REMOVE_TABLE:return t.payload===e?null:e;case L.MERGE_COLUMNS_AND_TABLES:return t.payload.tables?t.payload.tables.keySeq().first():e;default:return e}}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments[1];switch(t.type){case L.ADD_EMPTY_TABLE:var r=t.payload.tableId;return e.merge(a({},r,m.set("fid",r)));case L.MERGE_COLUMNS_AND_TABLES:return t.payload.tables?e.mergeDeep(t.payload.tables):e;case L.REMOVE_COLUMNS_FROM_TABLE:var n=t.payload,o=n.columnIds,u=n.tableId,s=e,i=!0,l=!1,c=void 0;try{for(var d,f=o[Symbol.iterator]();!(i=(d=f.next()).done);i=!0){var p=d.value,E=s.getIn([u,"columnIds"]).indexOf(p);s=s.removeIn([u,"columnIds",E])}}catch(y){l=!0,c=y}finally{try{!i&&f["return"]&&f["return"]()}finally{if(l)throw c}}return s;case L.REMOVE_TABLE:return e.remove(t.payload);default:return e}}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments[1];switch(t.type){case L.MARK_FID_AS_UNSAVED:var r=function(){var r=e,n=Date.now();return e.forEach(function(e,a){(0,b.parseSrc)(a).fid===t.payload&&(r=r.setIn([a,"dirty"],n))}),{v:r}}();if("object"===("undefined"==typeof r?"undefined":A(r)))return r.v;case L.MERGE_COLUMNS_AND_TABLES:return t.payload.columnMeta?e.merge(t.payload.columnMeta):e;case L.REMOVE_COLUMNS_FROM_TABLE:var n=e,a=!0,o=!1,u=void 0;try{for(var s,i=t.payload.columnIds[Symbol.iterator]();!(a=(s=i.next()).done);a=!0){var l=s.value;n=n.remove(l)}}catch(c){o=!0,u=c}finally{try{!a&&i["return"]&&i["return"]()}finally{if(o)throw u}}return n;case L.REMOVE_TABLE:var d=function(){var r=e;return e.forEach(function(e,n){(0,b.parseSrc)(n).fid===t.payload&&(r=r.remove(n))}),{v:r}}();if("object"===("undefined"==typeof d?"undefined":A(d)))return d.v;default:return e}}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments[1];switch(t.type){case L.PLOTLY_NEW_PLOT:return e.merge({newPlot:t.payload});case L.PLOTLY_RESTYLE:return e.merge({restyleArray:t.payload});case L.PLOTLY_RELAYOUT:return e.merge({layoutUpdate:t.payload});case L.PLOTLY_ADD_FRAMES:return e.merge({framesToAdd:t.payload});case L.PLOTLY_DELETE_FRAMES:return e.merge({framesToDelete:t.payload});case L.ADD_BREAKPOINT:return e.setIn(["breakpoints",e.get("breakpoints").size],t.payload);case L.SET_BREAKPOINT:return e.setIn(["breakpoints",t.payload.index],t.payload.breakpoint);case L.DELETE_BREAKPOINT:return e.deleteIn(["breakpoints",t.payload]);case L.SET_BASE_LAYOUT:return e.merge({baseLayout:t.payload});case L.SELECT_FRAME:return e.merge({selectedFrameName:t.payload});case L.REMOVE_ENCODING_LAYER:return e.set("tracesToDelete",g["default"].fromJS((0,I.sort)(function(e,t){return t-e},t.payload.layerIds)));default:return e}}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments[1];switch(t.type){case L.ASSIGN_COLUMN:var r=t.payload,n=r.key,a=r.src,o=r.index,u=e;return e.size>0&&!e.getIn([o,"type"])&&(u=e.setIn([o,"type"],e.getIn([0,"type"]))),u.setIn([o,n],a);case L.SWITCH_CHART_TYPE:return e.setIn([t.payload.index,"type"],t.payload.chartId);case L.NEW_ENCODING_LAYER:var s=void 0,i=e.filter(function(e){return e.get("visible",!0)});return s=0===i.size?g["default"].fromJS({type:L.DEFAULT_ENCODING_TYPE}):i.last(),t.payload&&t.payload.visible===!1&&(s=s.set("visible",!1)),e.push(s);case L.REMOVE_ENCODING_LAYER:return t.payload.layerIds.forEach(function(t){e=e["delete"](t)}),e;case L.SET_ENCODING:return g["default"].fromJS(t.payload);default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.INITIAL_FIGURE=void 0;var A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.editMode=o,t.styleMode=u,t.graphMode=s,t.fidMap=l,t.columnIdMap=d,t.shareFid=f,t.plotId=p,t.tableIds=E,t.selectedTableId=y,t.tables=_,t.columnMeta=v,t.figure=S,t.graphEncoding=T;var h=r(404),g=n(h),I=r(434),R=r(402),L=r(446),b=r(433),m=g["default"].fromJS({columnIds:[],sql:{query:" ",connectionId:null,refreshInterval:60,dirty:!0,saved:!1}}),C=g["default"].Map(),N=g["default"].Map(),M=t.INITIAL_FIGURE=g["default"].fromJS({restyleArray:[{data:{mode:["markers"],type:["scatter"]},target:0}],layoutUpdate:{hovermode:"closest"},newPlot:null,tracesToDelete:[],framesToDelete:[],framesToAdd:[],selectedFrameName:"",breakpoints:[],baseLayout:{}}),P=g["default"].fromJS([{type:L.DEFAULT_ENCODING_TYPE}])},1590:function(e,t,r){"use strict";function n(e){if(!e.type)throw new Error("type is a required specification of newMovingAverage");return(0,i.fromJS)(e)}function a(e){var t={type:e,inputColumns:[],parameters:{},results:[]};return e!==c.ANALYSES_TYPES.CHI_SQUARED_TEST&&e!==c.ANALYSES_TYPES.CORRELATION||(t.parameters.isMatrix=!0),(0,i.fromJS)(t)}function o(e){switch(e){case c.ANALYSES_TYPES.FIT:return(0,l.newFitAnalysis)();case c.ANALYSES_TYPES.ANOVA_TEST:case c.ANALYSES_TYPES.CHI_SQUARED_TEST:case c.ANALYSES_TYPES.T_TEST:case c.ANALYSES_TYPES.DESCRIPTIVE:case c.ANALYSES_TYPES.CORRELATION:return a(e);case c.ANALYSES_TYPES.AVERAGE:case c.ANALYSES_TYPES.MOVING_AVERAGE:return n({type:e});default:throw new Error("unrecognized analysis type "+e)}}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i.Map({}),t=arguments[1],r=t.payload,n=t.type;switch(n){case c.UPDATE_ANALYSIS:return e.mergeIn([r.analysisId],r.analysisUpdate);case c.ADD_ANALYSIS:return e.set(r.analysisId,o(r.analysisType));case c.REMOVE_ANALYSIS:return e.remove(t.payload.analysisId);default:return e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i.List([]),t=arguments[1],r=t.payload,n=t.type;switch(n){case c.UPDATE_ANALYSIS:return e.contains(r.analysisId)?e:e.push(r.analysisId);case c.ADD_ANALYSIS:return e.push(r.analysisId);case c.REMOVE_ANALYSIS:return e.filter(function(e){return e!==r.analysisId});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.newMovingAverage=n,t.newBasic=a,t.analysisData=u,t.analysisIds=s;var i=r(404),l=r(587),c=r(446)},1591:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.DEFAULT_URL,t=arguments[1];return t.type===l.UPDATE_URL?t.payload:e}function o(e){return(0,f.createApiReducer)({requestType:l[e+"_REQUEST"],successType:l[e+"_SUCCESS"],failureType:l[e+"_FAILURE"]})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case l.LEGACY_CONNECTOR_REQUEST:return(0,c.merge)(e,{status:l.LEGACY_CONNECTOR_REQUEST});case l.LEGACY_CONNECTOR_SUCCESS:return(0,c.merge)(e,{status:l.LEGACY_CONNECTOR_SUCCESS,content:t.content});case l.LEGACY_CONNECTOR_FAILURE:return(0,c.merge)(e,{status:l.LEGACY_CONNECTOR_FAILURE,error:t.error});default:return e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case l.CONNECTIONS_REQUEST:return(0,c.merge)(e,{status:l.CONNECTIONS_REQUEST});case l.CONNECTIONS_SUCCESS:return(0,c.merge)(e,{status:l.CONNECTIONS_SUCCESS,content:t.content});case l.CONNECTIONS_FAILURE:return(0,c.merge)(e,{status:l.CONNECTIONS_FAILURE,error:t.error});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(545),l=n(i),c=r(434),d=r(511),f=r(533),p=o(l.ADD_QUERY_TO_GRID),E=o(l.APACHE_DRILL_S3_KEYS),y=o(l.APACHE_DRILL_STORAGE),_=o(l.CONNECT),v=o(l.ELASTICSEARCH_MAPPINGS),S=o(l.FETCH_PERSISTENT_QUERY),T=o(l.QUERY),A=o(l.REGISTER_PERSISTENT_QUERY),O=o(l.REMOVE_QUERY_FROM_GRID),h=o(l.S3_KEYS),g=o(l.SQL_TABLES),I=o(l.UNREGISTER_PERSISTENT_QUERY);t["default"]=(0,d.combineReducers)({url:a,connectRequest:_,queryRequest:T,fetchPersistentQueryRequest:S,registerPersistentQueryRequest:A,unregisterPersistentQueryRequest:I,addQueryToGridRequest:p,removeQueryFromGridRequest:O,sqlTablesRequest:g,s3KeysRequest:h,apacheDrillStorageRequest:y,apacheDrillS3KeysRequest:E,elasticsearchMappingsRequest:v,connections:s,legacyConnectorRequest:u})}});
/*
//@ sourceMappingURL=filewell-bundle.js.map
//# sourceMappingURL=filewell-bundle.js.map
*/