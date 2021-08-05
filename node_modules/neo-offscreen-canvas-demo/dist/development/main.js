/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/neo.mjs/src/main/addon lazy recursive ^\\.\\/.*\\.mjs$":
/*!*****************************************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/addon/ lazy ^\.\/.*\.mjs$ strict namespace object ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AmCharts.mjs": [
		"./node_modules/neo.mjs/src/main/addon/AmCharts.mjs",
		"node_modules_neo_mjs_src_main_addon_AmCharts_mjs"
	],
	"./AnalyticsByGoogle.mjs": [
		"./node_modules/neo.mjs/src/main/addon/AnalyticsByGoogle.mjs",
		"node_modules_neo_mjs_src_main_addon_AnalyticsByGoogle_mjs"
	],
	"./CloneNode.mjs": [
		"./node_modules/neo.mjs/src/main/addon/CloneNode.mjs",
		"node_modules_neo_mjs_src_main_addon_CloneNode_mjs"
	],
	"./Cookie.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Cookie.mjs",
		"node_modules_neo_mjs_src_main_addon_Cookie_mjs"
	],
	"./DragDrop.mjs": [
		"./node_modules/neo.mjs/src/main/addon/DragDrop.mjs",
		"vendors-node_modules_neo_mjs_src_main_addon_DragDrop_mjs"
	],
	"./HighlightJS.mjs": [
		"./node_modules/neo.mjs/src/main/addon/HighlightJS.mjs",
		"vendors-node_modules_neo_mjs_src_main_addon_HighlightJS_mjs"
	],
	"./LocalStorage.mjs": [
		"./node_modules/neo.mjs/src/main/addon/LocalStorage.mjs",
		"node_modules_neo_mjs_src_main_addon_LocalStorage_mjs"
	],
	"./MapboxGL.mjs": [
		"./node_modules/neo.mjs/src/main/addon/MapboxGL.mjs",
		"vendors-node_modules_neo_mjs_src_main_addon_MapboxGL_mjs"
	],
	"./Markdown.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Markdown.mjs",
		"node_modules_neo_mjs_src_main_addon_Markdown_mjs"
	],
	"./Siesta.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Siesta.mjs",
		"node_modules_neo_mjs_src_main_addon_Siesta_mjs"
	],
	"./Stylesheet.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Stylesheet.mjs",
		"node_modules_neo_mjs_src_main_addon_Stylesheet_mjs"
	],
	"./WindowPosition.mjs": [
		"./node_modules/neo.mjs/src/main/addon/WindowPosition.mjs",
		"node_modules_neo_mjs_src_main_addon_WindowPosition_mjs"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./node_modules/neo.mjs/src/main/addon lazy recursive ^\\.\\/.*\\.mjs$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/neo.mjs/src/DefaultConfig.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/DefaultConfig.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultConfig)
/* harmony export */ });
const Neo = self.Neo || {};

Neo.config = Neo.config || {};

/**
 * Config object for the neo.mjs framework which will get passed to all workers
 * You can change the configs, e.g. inside the index.html of your app
 * @memberOf module:Neo
 * @name config
 * @type Object
 */
const DefaultConfig = {
    /**
     * true will apply 'neo-body' to the document.body classList
     * @default true
     * @memberOf! module:Neo
     * @name config.applyBodyCls
     * @type Boolean
     */
    applyBodyCls: true,
    /**
     * Path to your app.mjs file. You can create multiple apps there if needed.
     * @default null
     * @memberOf! module:Neo
     * @name config.appPath
     * @type String|null
     */
    appPath: null,
    /**
     * Path to the neo.mjs directory
     * @default './'
     * @memberOf! module:Neo
     * @name config.basePath
     * @type String
     */
    basePath: './',
    /**
     * The current environment. Valid values: 'development', 'dist/development', 'dist/production'
     * This config will get auto-generated
     * @default 'dist/production'
     * @memberOf! module:Neo
     * @name config.environment
     * @type String
     */
    environment: 'dist/production',
    /**
     * In case you are using the GoogleAnalytics mainThreadAddon or useGoogleAnalytics: true,
     * you can change the gtag id here. Required for the online examples (gh pages)
     * @default 'UA-153734404-1'
     * @memberOf! module:Neo
     * @name config.gtagId
     * @type String
     */
    gtagId: 'UA-153734404-1',
    /**
     * Flag for running on https://neomjs.github.io/pages/
     * => to use local images paths instead of raw.githubusercontent.com
     * @default false
     * @memberOf! module:Neo
     * @name config.isGitHubPages
     * @type Boolean
     */
    isGitHubPages: false,
    /**
     * Flag for running the Neo main thread inside an iframe (Siesta Browser Harness)
     * @default false
     * @memberOf! module:Neo
     * @name config.isInsideSiesta
     * @type Boolean
     */
    isInsideSiesta: false,
    /**
     * Used by Intl.DateTimeFormat, for details take a look at:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @default 'default'
     * @memberOf! module:Neo
     * @name config.locale
     * @type String
     */
    locale: 'default',
    /**
     * true will log the delta updates inside the main thread(s) as well as the requestAnimation frames
     * @default false
     * @memberOf! module:Neo
     * @name config.logDeltaUpdates
     * @type Boolean
     */
    logDeltaUpdates: false,
    /**
     * Add addons for the main thread
     * Possible values: AmCharts, AnalyticsByGoogle, DragDrop, HighlightJS, LocalStorage, MapboxGL, Markdown, Siesta, Stylesheet, WindowPosition
     * (src/main/addon)
     * @default ['DragDrop','Stylesheet']
     * @memberOf! module:Neo
     * @name config.mainThreadAddons
     * @type String[]
     */
    mainThreadAddons: ['DragDrop', 'Stylesheet'],
    /**
     * You can visually show the amount of delta updates per second using this config.
     * It expects a dom node with the id "neo-delta-updates" as the rendering target.
     * @default false
     * @memberOf! module:Neo
     * @name config.renderCountDeltas
     * @type Boolean
     */
    renderCountDeltas: false,
    /**
     * Add themes you want to use here. The first theme will get applied.
     * If config.useCssVars === true, other theme variables will get included as well
     * @default ['neo-theme-light', 'neo-theme-dark']
     * @memberOf! module:Neo
     * @name config.themes
     * @type String[]
     */
    themes: ['neo-theme-light', 'neo-theme-dark'],
    /**
     * Flag for standalone Siesta module tests => prevent registerRemote worker messages
     * @default false
     * @memberOf! module:Neo
     * @name config.unitTestMode
     * @type Boolean
     */
    unitTestMode: false,
    /**
     * Flag if CSS variable based stylesheets are in use (important for switching themes)
     * @default true
     * @memberOf! module:Neo
     * @name config.useCssVars
     * @type Boolean
     */
    useCssVars: true,
    /**
     * Experimental flag if an offscreen canvas worker should get created.
     * @default false
     * @memberOf! module:Neo
     * @name config.useCssVars
     * @type Boolean
     */
    useCanvasWorker: false,
    /**
     * Flag if vdom ids should get mapped into DOM element ids.
     * false will convert them into a "data-neo-id" attribute.
     * @default true
     * @memberOf! module:Neo
     * @name config.useDomIds
     * @type Boolean
     */
    useDomIds: true,
    /**
     * True will automatically include the stylesheet
     * @default true
     * @memberOf! module:Neo
     * @name config.useFontAwesome
     * @type Boolean
     */
    useFontAwesome: true,
    /**
     * Intended for the online examples where we need an easy way to add GA to every generated app
     * @default false
     * @memberOf! module:Neo
     * @name config.useGoogleAnalytics
     * @type Boolean
     */
    useGoogleAnalytics: false,
    /**
     * Creates App, Data & VDom as SharedWorkers.
     * Set this one to true in case you want to connect multiple main threads.
     * @default false
     * @memberOf! module:Neo
     * @name config.useSharedWorkers
     * @type Boolean
     */
    useSharedWorkers: false,
    /**
     * Adds global dom event listeners for mobile related events like rotate, swipe, tap
     * @default true
     * @memberOf! module:Neo
     * @name config.useTouchEvents
     * @type Boolean
     */
    useTouchEvents: true
};

Object.assign(DefaultConfig, {
    /**
     * Path to the top level neo.mjs resources folder
     * @default Neo.config.basePath + 'resources/'
     * @memberOf! module:Neo
     * @name config.resourcesPath
     * @type String
     */
    resourcesPath: `${Neo.config.basePath || DefaultConfig.basePath}resources/`,
    /**
     * The default base URL for web worker entry points (App, Data, Vdom)
     * @default Neo.config.basePath + 'src/worker/'
     * @memberOf! module:Neo
     * @name config.workerBasePath
     * @type String
     */
    workerBasePath: `${Neo.config.basePath || DefaultConfig.basePath}src/worker/`,
});




/***/ }),

/***/ "./node_modules/neo.mjs/src/Neo.mjs":
/*!******************************************!*\
  !*** ./node_modules/neo.mjs/src/Neo.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Neo)
/* harmony export */ });
/* harmony import */ var _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultConfig.mjs */ "./node_modules/neo.mjs/src/DefaultConfig.mjs");


const configSymbol = Symbol.for('configSymbol'),
      getSetCache  = Symbol('getSetCache');

/**
 * The base module to enhance classes, create instances and the Neo namespace
 * @module Neo
 * @singleton
 * @borrows Neo.core.Util.bindMethods       as bindMethods
 * @borrows Neo.core.Util.capitalize        as capitalize
 * @borrows Neo.core.Util.createStyleObject as createStyleObject
 * @borrows Neo.core.Util.createStyles      as createStyles
 * @borrows Neo.core.Util.decamel           as decamel
 * @borrows Neo.core.Util.isArray           as isArray
 * @borrows Neo.core.Util.isBoolean         as isBoolean
 * @borrows Neo.core.Util.isDefined         as isDefined
 * @borrows Neo.core.Compare.isEqual        as isEqual
 * @borrows Neo.core.Util.isNumber          as isNumber
 * @borrows Neo.core.Util.isObject          as isObject
 * @borrows Neo.core.Util.isString          as isString
 * @borrows Neo.core.Util.toArray           as toArray
 * @tutorial 01_Concept
 */
let Neo = self.Neo || {};

Neo = self.Neo = Object.assign({
    /**
     * A map containing ntypes as key and Neo classes or singletons as values
     * @memberOf! module:Neo
     * @protected
     * @type Object
     */
    ntypeMap: {},
    /**
     * Needed for Neo.create. False for the main thread, true for the App, Data & Vdom worker
     * @memberOf! module:Neo
     * @protected
     * @type Boolean
     */
    insideWorker: typeof DedicatedWorkerGlobalScope !== 'undefined' || typeof WorkerGlobalScope !== 'undefined',

    /**
     * Internally used at the end of each class / module definition
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls The Neo class to apply configs to
     * @protected
     * @tutorial 02_ClassSystem
     */
    applyClassConfig(cls) {
        let baseCfg       = null,
            baseStaticCfg = null,
            proto         = cls.prototype || cls,
            protos        = [],
            config, ctor, staticConfig;

        while (proto.__proto__) {
            ctor = proto.constructor;

            if (ctor.hasOwnProperty('classConfigApplied')) {
                baseCfg       = Neo.clone(ctor.config,       true);
                baseStaticCfg = Neo.clone(ctor.staticConfig, true);
                break;
            }

            protos.unshift(proto);
            proto = proto.__proto__;
        }

        config       = baseCfg       || {};
        staticConfig = baseStaticCfg || {};

        protos.forEach(element => {
            ctor = element.constructor;
            let cfg       = ctor.getConfig      ?.() || {},
                staticCfg = ctor.getStaticConfig?.() || {},
                mixins;

            if (cfg) {
                Object.entries(cfg).forEach(([key, value]) => {
                    if (key.slice(-1) === '_') {
                        delete cfg[key];
                        key = key.slice(0, -1);
                        cfg[key] = value;
                        autoGenerateGetSet(element, key);
                    }

                    // only apply properties which have no setters inside the prototype chain
                    // those will get applied on create (Neo.core.Base -> initConfig)
                    else if (!hasPropertySetter(element, key)) {
                        Object.defineProperty(element, key, {
                            enumerable: true,
                            value     : value,
                            writable  : true
                        });
                    }
                });
            }

            Object.assign(ctor, staticCfg);

            if (cfg.hasOwnProperty('ntype')) {
                Neo.ntypeMap[cfg.ntype] = cfg.className;
            }

            mixins = config.hasOwnProperty('mixins') && config.mixins || [];

            if (staticCfg?.observable) {
                mixins.push('Neo.core.Observable');
            }

            if (cfg.hasOwnProperty('mixins') && Array.isArray(cfg.mixins) && cfg.mixins.length > 0) {
                mixins.push(...cfg.mixins);
            }

            if (mixins.length > 0) {
                applyMixins(ctor, mixins);

                if (Neo.ns('Neo.core.Observable', false, ctor.prototype.mixins)) {
                    staticCfg.observable = true;
                }
            }

            delete cfg.mixins;
            delete config.mixins;

            Object.assign(config, cfg);
            Object.assign(staticConfig, staticCfg);

            Object.assign(ctor, {
                classConfigApplied: true,
                config            : Neo.clone(config, true),
                isClass           : true,
                staticConfig      : Neo.clone(staticConfig, true)
            });

            delete ctor.getConfig;
            delete ctor.getStaticConfig;

            if (!config.singleton) {
                this.applyToGlobalNs(cls);
            }
        });
    },

    /**
     * Maps methods from one namespace to another one
     * @example
     * // aliases
     * Neo.applyFromNs(Neo, Util, {
     *     createStyleObject: 'createStyleObject',
     *     createStyles     : 'createStyles',
     *     capitalize       : 'capitalize'
     * }, true);
     *
     * // e.g. Neo.core.Util.isObject => Neo.isObject
     * @memberOf module:Neo
     * @param {Neo|Neo.core.Base} target The target class or singleton Instance or Neo
     * @param {Neo.core.Base} namespace The class containing the methods
     * @param {Object} config
     * @param {Boolean} [bind] set this to true in case you want to bind methods to the "from" namespace
     * @returns {Object} target
     */
    applyFromNs(target, namespace, config, bind) {
        let fnName;

        if (target && Neo.typeOf(config) === 'Object') {
            Object.entries(config).forEach(([key, value]) => {
                fnName = namespace[value];
                target[key] = bind ? fnName.bind(namespace) : fnName;
            });
        }

        return target;
    },

    /**
     * Maps a class to the global Neo or App namespace.
     * Can get called for classes and singleton instances
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls
     */
    applyToGlobalNs(cls) {
        let proto = typeof cls === 'function' ? cls.prototype: cls,
            className, nsArray, key, ns;

        if (proto.constructor.registerToGlobalNs === true) {
            className = proto.isClass ? proto.config.className : proto.className;

            nsArray = className.split('.');
            key     = nsArray.pop();
            ns      = Neo.ns(nsArray, true);
            ns[key] = cls;
        }
    },

    /**
     * Copies all keys of defaults into target, in case they don't already exist
     * @memberOf module:Neo
     * @param {Object} target The target object
     * @param {Object} defaults The object containing the keys you want to copy
     * @returns {Object} target
     */
    assignDefaults(target, defaults) {
        if (target && Neo.typeOf(defaults) === 'Object') {
            Object.entries(defaults).forEach(([key, value]) => {
                if (!target.hasOwnProperty(key)) {
                    target[key] = value;
                }
            });
        }

        return target;
    },

    /**
     * @memberOf module:Neo
     * @param {Object|Array|*} obj
     * @param {Boolean} [deep=false] Set this to true in case you want to clone nested objects as well
     * @param {Boolean} [ignoreNeoInstances=false] returns existing instances if set to true
     * @returns {Object|Array|*} the cloned input
     */
    clone(obj, deep=false, ignoreNeoInstances=false) {
        let out;

        switch (Neo.typeOf(obj)) {
            case 'Array': {
                return !deep ? [...obj] : [...obj.map(val => Neo.clone(val, deep, ignoreNeoInstances))];
            }

            case 'Date': {
                return new Date(obj.valueOf());
            }

            case 'Map': {
                return new Map(obj); // shallow copy
            }

            case 'NeoInstance': {
                return ignoreNeoInstances ? obj : this.cloneNeoInstance(obj);
            }

            case 'Object': {
                out = {};

                Object.entries(obj).forEach(([key, value]) => {
                    out[key] = !deep ? value : Neo.clone(value, deep, ignoreNeoInstances);
                });

                return out;
            }

            case 'Set': {
                return new Set(obj); // shallow copy
            }

            default: {
                return obj; // return all other data types
            }
        }
    },

    /**
     * Creates a new instance using the originalConfig without the id
     * @memberOf module:Neo
     * @param {Neo.core.Base} instance
     * @returns {Neo.core.Base} the cloned instance
     */
    cloneNeoInstance(instance) {
        let config = {...instance.originalConfig};

        delete config._id;
        delete config.id;

        return Neo.create(instance.className, config);
    },

    /**
     * Use Neo.create() instead of "new" to create instances of all Neo classes
     * @example
     * import Button from '../button/Base.mjs';
     *
     * Neo.create(Button, {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * import Button from '../button/Base.mjs';
     *
     * Neo.create({
     *     module : Button,
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create('Neo.button.Base' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create({
     *     className: 'Neo.button.Base',
     *     iconCls  : 'fa fa-home',
     *     text     : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object|Neo.core.Base} className
     * @param {Object} [config]
     * @returns {Neo.core.Base|null} The new class instance
     * @tutorial 02_ClassSystem
     */
    create(className, config) {
        let type = Neo.typeOf(className),
            cls, instance;

        if (type === 'NeoClass') {
            cls = className;
        } else {
            if (type === 'Object') {
                config = className;

                if (!config.className && !config.module) {
                    // using console.error instead of throw to show the config object
                    console.error('Class created with object configuration missing className or module property', config);
                    return null;
                }

                className = config.className || config.module.prototype.className;
            }

            if (!exists(className)) {
                throw new Error('Class ' + className + ' does not exist');
            }

            cls = Neo.ns(className);
        }

        instance = new cls(config);

        instance.onConstructed();
        instance.onAfterConstructed();
        instance.init();

        return instance;
    },

    emptyFn() {},

    /**
     * Maps a className string into a global namespace
     * @example
     * Neo.ns('Neo.button.Base', true);
     * // =>
     * // self.Neo = self.Neo || {};
     * // self.Neo.component = self.Neo.component || {};
     * // self.Neo.button.Base = self.Neo.button.Base || {};
     * // return self.Neo.button.Base;
     *
     * @memberOf module:Neo
     * @param {Array|String} names The class name string containing dots or an Array of the string parts
     * @param {Boolean} [create] Set create to true to create empty objects for non existing parts
     * @param {Object} [scope] Set a different starting point as self
     * @returns {Object} reference to the toplevel namespace
     */
    ns(names, create, scope) {
        names = Array.isArray(names) ? names : names.split('.');

        return names.reduce((prev, current) => {
            if (create && !prev[current]) {
                prev[current] = {};
            }
            if (prev) {
                return prev[current];
            }
        }, scope || self);
    },

    /**
     * Creates instances of Neo classes using their ntype instead of the class name
     * @example
     * Neo.ntype('button' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.ntype({
     *     ntype  : 'button',
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object} ntype
     * @param {Object} [config]
     * @returns {Neo.core.Base}
     * @see {@link module:Neo.create create}
     */
    ntype(ntype, config) {
        if (typeof ntype === 'object') {
            config = ntype;
            if (!config.ntype) {
                throw new Error('Class defined with object configuration missing ntype property. ' + config.ntype);
            }
            ntype = config.ntype;
        }

        let className = Neo.ntypeMap[ntype];

        if (!className) {
            throw new Error('ntype ' + ntype + ' does not exist');
        }
        return Neo.create(className, config);
    },

    /**
     *
     * @param {*} item
     * @returns {String|null}
     */
    typeOf(item) {
        if (item === null || item === undefined) {
            return null;
        }

        switch (typeof item) {
            case 'function': {
                if (item.prototype?.constructor.isClass) {
                    return 'NeoClass';
                }

                break;
            }

            case 'object': {
                if (item.constructor.isClass && item instanceof Neo.core.Base) {
                    return 'NeoInstance';
                }
            }
        }

        return item.constructor.name;
    }
}, Neo);

/**
 * List of class properties which are not supposed to get mixed into other classes
 * @type {string[]}
 * @private
 */
const ignoreMixin = [
    '_name',
    'classConfigApplied',
    'className',
    'constructor',
    'isClass',
    'mixin',
    'ntype',
    'observable',
    'registerToGlobalNs'
];

/**
 *
 * @param {Neo.core.Base} cls
 * @param {Array} mixins
 * @private
 */
function applyMixins(cls, mixins) {
    if (!Array.isArray(mixins)) {
        mixins = [mixins];
    }

    let i            = 0,
        len          = mixins.length,
        mixinClasses = {},
        mixin, mixinCls, mixinProto;

    for (;i < len;i++) {
        mixin = mixins[i];

        if (mixin.isClass) {
            mixinProto = mixin.prototype;
            mixinCls   = Neo.ns(mixinProto.className);
        } else {
            if (!exists(mixin)) {
                throw new Error('Attempting to mixin an undefined class: ' + mixin + ', ' + cls.prototype.className);
            }
            mixinCls   = Neo.ns(mixin);
            mixinProto = mixinCls.prototype;
        }

        mixinProto.className.split('.').reduce(mixReduce(mixinCls), mixinClasses);

        Object.getOwnPropertyNames(mixinProto).forEach(mixinProperty(cls.prototype, mixinProto));
    }

    cls.prototype.mixins = mixinClasses; // todo: we should do a deep merge
}

/**
 * Creates get / set methods for class configs ending with an underscore
 * @param {Neo.core.Base} proto
 * @param {String} key
 * @private
 * @tutorial 02_ClassSystem
 */
function autoGenerateGetSet(proto, key) {
    if (hasPropertySetter(proto, key)) {
        throw('Config ' + key + '_ (' + proto.className + ') already has a set method, use beforeGet, beforeSet & afterSet instead');
    }

    if (!Neo[getSetCache]) {
        Neo[getSetCache] = {};
    }

    if (!Neo[getSetCache][key]) {
        Neo[getSetCache][key] = {
            get() {
                let me        = this,
                    beforeGet = `beforeGet${key[0].toUpperCase() + key.slice(1)}`,
                    hasNewKey = me[configSymbol].hasOwnProperty(key),
                    newKey    = me[configSymbol][key],
                    value     = hasNewKey ? newKey : me['_' + key];

                if (Array.isArray(value)) {
                    if (key !== 'items') {
                        value = [...value];
                    }
                } else if (value instanceof Date) {
                    value = new Date(value.valueOf());
                }

                if (hasNewKey) {
                    me[key] = value; // we do want to trigger the setter => beforeSet, afterSet
                    value = me['_' + key]; // return the value parsed by the setter
                    delete me[configSymbol][key];
                }

                if (typeof me[beforeGet] === 'function') {
                    value = me[beforeGet](value);
                }

                return value;
            },

            set(value) {
                let me        = this,
                    _key      = '_' + key,
                    uKey = key[0].toUpperCase() + key.slice(1),
                    beforeSet = 'beforeSet' + uKey,
                    afterSet  = 'afterSet'  + uKey,
                    oldValue  = me[_key];

                // every set call has to delete the matching symbol
                delete me[configSymbol][key];

                if (key !== 'items') {
                    value = Neo.clone(value, true, true);
                }

                // we do want to store the value before the beforeSet modification as well,
                // since it could get pulled by other beforeSet methods of different configs
                me[_key] = value;

                if (typeof me[beforeSet] === 'function') {
                    value = me[beforeSet](value, oldValue);

                    // If they don't return a value, that means no change
                    if (value === undefined) {
                        me[_key] = oldValue;
                        return;
                    }

                    me[_key] = value;
                }

                if (!Neo.isEqual(value, oldValue)) {
                    me[afterSet]?.(value, oldValue);
                    me.afterSetConfig?.(key, value, oldValue);
                }
            }
        };
    }

    Object.defineProperty(proto, key, Neo[getSetCache][key]);
}

/**
 * Checks if the class name exists inside the Neo or app namespace
 * @param {String} className
 * @returns {Boolean}
 * @private
 */
function exists(className) {
    try {
        return !!className.split('.').reduce((prev, current) => {
            return prev[current];
        }, self);
    } catch(e) {
        return false;
    }
}

/**
 * Checks if there is a set method for a given property key inside the prototype chain
 * @param {Neo.core.Base} proto The top level prototype of a class
 * @param {String} key the property key to test
 * @returns {Boolean}
 * @private
 */
function hasPropertySetter(proto, key) {
    let descriptor;

    while (proto.__proto__) {
        descriptor = Object.getOwnPropertyDescriptor(proto, key);

        if (typeof descriptor === 'object' && typeof descriptor.set === 'function') {
            return true;
        }
        proto = proto.__proto__;
    }

    return false;
}

/**
 *
 * @param {Neo.core.Base} proto
 * @param {Neo.core.Base} mixinProto
 * @returns {Function}
 * @private
 */
function mixinProperty(proto, mixinProto) {
    return function(key) {
        if (~ignoreMixin.indexOf(key)) {
            return;
        }
        if (proto[key]?._from) {
            if (mixinProto.className === proto[key]._from) {
                console.warn('Mixin set multiple times or already defined on a Base Class', proto.className, mixinProto.className, key);
                return;
            }
            throw new Error(
                `${proto.className}: Multiple mixins defining same property (${mixinProto.className}, ${proto[key]._from}) => ${key}`
            );
        }

        proto[key] = mixinProto[key];

        Object.getOwnPropertyDescriptor(proto, key)._from = mixinProto.className;

        if (typeof proto[key] === 'function') {
            proto[key]._name = key;
        }
    };
}

/**
 *
 * @param mixinCls
 * @returns {Function}
 * @private
 */
function mixReduce(mixinCls) {
    return (prev, current, idx, arr) => {
        return prev[current] = idx !== arr.length -1 ? prev[current] || {} : mixinCls;
    };
}

Neo.config = Neo.config || {};

Neo.assignDefaults(Neo.config, _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__.default);




/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Base.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Base.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Base)
/* harmony export */ });
/* harmony import */ var _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");


const configSymbol       = Symbol.for('configSymbol'),
      forceAssignConfigs = Symbol('forceAssignConfigs'),
      isInstance         = Symbol('isInstance');

/**
 * The base class for (almost) all classes inside the Neo namespace
 * Exceptions are e.g. core.IdGenerator, vdom.VNode
 * @class Neo.core.Base
 */
class Base {
    /**
     * The return value will get applied to the class constructor
     * @returns {Object} staticConfig
     * @static
     * @tutorial 02_ClassSystem
     */
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @protected
         * @static
         */
        registerToGlobalNs: true
    }}

    /**
     * The return value will get applied to each class instance
     * @returns {Object} staticConfig
     * @tutorial 02_ClassSystem
     */
    static getConfig() {return {
        /**
         * The class name which will get mapped into the Neo or app namespace
         * @member {String} className='Neo.core.Base'
         * @protected
         */
        className: 'Neo.core.Base',
        /**
         * The class shortcut-name to use for e.g. creating child components inside a JSON-format
         * @member {String} ntype='base'
         * @protected
         */
        ntype: 'base',
        /**
         * The unique component id
         * @member {String|null} id_=null
         */
        id_: null,
        /**
         * Neo.create() will change this flag to true after the onConstructed() chain is done.
         * @member {Boolean} isConstructed=false
         * @protected
         */
        isConstructed: false,
        /**
         * Add mixins as an array of classNames, imported modules or a mixed version
         * @member {String[]|Neo.core.Base[]|null} mixins=null
         */
        mixins: null,
        /**
         * You can create a new instance by passing an imported class (JS module default export)
         * @member {Class} module=null
         * @protected
         */
        module: null
    }}

    /**
     * Consumes the static getConfig() return object.
     * Applies the observable mixin if needed, grants remote access if needed.
     * @param {Object} config={}
     */
    constructor(config={}) {
        let me = this;

        Object.defineProperties(me, {
            [configSymbol]: {
                configurable: true,
                enumerable  : false,
                value       : {},
                writable    : true
            },
            [isInstance]: {
                enumerable: false,
                value     : true
            }
        });

        me.createId(config.id || me.id);
        delete config.id;

        if (me.constructor.config) {
            delete me.constructor.config.id;
        }

        me.getStaticConfig('observable') && me.initObservable(config);

        me.initConfig(config);

        Object.defineProperty(me, 'configsApplied', {
            enumerable: false,
            value     : true
        });

        me.remote && setTimeout(me.initRemote.bind(me), 1);
    }

    /**
     * Triggered after the id config got changed.
     * You can dynamically change instance ids if needed. They need to stay unique at any given point.
     * Use case: e.g. component based lists, where you want to re-use item instances.
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetId(value, oldValue) {
        let me = this;

        if (oldValue) {
            if (Base.instanceManagerAvailable === true) {
                Neo.manager.Instance.unregister(oldValue);
            } else {
                delete Neo.idMap[oldValue];
            }
        }

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.register(me);
        } else {
            Neo.idMap = Neo.idMap || {};
            Neo.idMap[me.id] = me;
        }
    }

    /**
     * Convenience method for beforeSet functions which test if a given value is inside a static array
     * @param {String|Number} value
     * @param {String|Number} oldValue
     * @param {String} name config name
     * @param {Array|String} [staticName=name + 's'] name of the static config array
     * @returns {String|Number} value or oldValue
     */
    beforeSetEnumValue(value, oldValue, name, staticName = name + 's') {
        const values = Array.isArray(staticName) ? staticName : this.getStaticConfig(staticName);

        if (!values.includes(value)) {
            Neo.logError(`Supported values for ${name} are: ${values.join(', ')}`, this);
            return oldValue;
        }

        return value;
    }

    /**
     * Uses the IdGenerator to create an id if a static one is not explicitly set.
     * Registers the instance to manager.Instance if this one is already created,
     * otherwise stores it inside a tmp map.
     * @param {String} id
     */
    createId(id) {
        this.id = id || _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__.default.getId(this.getIdKey());
    }

    /**
     * Unregisters this instance from Neo.manager.Instance
     * and removes all object entries from this instance
     */
    destroy() {
        let me = this;

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.unregister(me);
        } else if (Neo.idMap) {
            delete Neo.idMap[me.id];
        }

        Object.keys(me).forEach(key => {
            if (Object.getOwnPropertyDescriptor(me, key).writable) {
                delete me[key];
            }
        });
    }

    /**
     * Used inside createId() as the default value passed to the IdGenerator.
     * Override this method as needed.
     * @returns {String}
     */
    getIdKey() {
        return this.ntype;
    }

    /**
     * Returns the value of a static config key or the staticConfig object itself in case no value is set
     * @param {String} [key] The key of a staticConfig defined inside static getStaticConfig
     * @returns {*}
     */
    getStaticConfig(key) {
        let cfg = this.constructor.staticConfig;
        return (key ? cfg[key] : cfg);
    }

    /**
     * Gets triggered after onConstructed() is done
     * @see {@link Neo.core.Base#onConstructed onConstructed}
     * @tutorial 02_ClassSystem
     */
    init() {}

    /**
     * Applies all class configs to this instance
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     */
    initConfig(config, preventOriginalConfig) {
        let me = this;

        Object.assign(me[configSymbol], me.mergeConfig(config, preventOriginalConfig));
        me.processConfigs();
    }

    /**
     * Does get triggered with a delay to ensure that Neo.workerId & Neo.worker.Manager are defined
     * Remote method access via promises
     */
    initRemote() {
        let me            = this,
            remote        = me.remote,
            className     = me.className,
            currentWorker = Neo.currentWorker,
            listenerId;

        if (!me.singleton) {
            throw new Error('Remote method access is only functional for Singleton classes ' + className);
        }

        if (!Neo.config.unitTestMode && Neo.isObject(remote)) {
            if (Neo.workerId !== 'main' && currentWorker.isSharedWorker && !currentWorker.isConnected) {
                listenerId = currentWorker.on('connected', () => {
                    currentWorker.un('connected', listenerId);
                    Base.sendRemotes(className, remote);
                });
            } else {
                Base.sendRemotes(className, remote);
            }
        }
    }

    /**
     * Override this method to change the order configs are applied to this instance.
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     * @returns {Object} config
     */
    mergeConfig(config, preventOriginalConfig) {
        let me   = this,
            ctor = me.constructor;

        if (!ctor.config) {
            throw new Error('Neo.applyClassConfig has not been run on ' + me.className);
        }

        if (!preventOriginalConfig) {
            me.originalConfig = Neo.clone(config, true, true);
        }

        return {...ctor.config, ...config};
    }

    /**
     *
     */
    onAfterConstructed() {
        let me = this;

        me.isConstructed = true;

        // We can only fire the event in case the Observable mixin is included.
        me.getStaticConfig('observable') && me.fire('constructed', me);
    }

    /**
     * Gets triggered after all constructors are done
     * @tutorial 02_ClassSystem
     */
    onConstructed() {}

    /**
     * Helper method to replace string based values containing "@config:" with the matching config value
     * of this instance.
     * @param {Object|Object[]} items
     */
    parseItemConfigs(items) {
        let me = this;

        if (items) {
            if (!Array.isArray(items)) {
                items = [items];
            }

            items.forEach(item => {
                Object.entries(item).forEach(([key, value]) => {
                    if (Array.isArray(value)) {
                        me.parseItemConfigs(value);
                    } else if (typeof value === 'string' && value.startsWith('@config:')) {
                        value = value.substr(8).trim();

                        if (!me[value] && !me.hasOwnProperty(value)) {
                            console.error('The used @config does not exist:', value, me);
                        } else {
                            // The config might not be processed yet, especially for configs
                            // not ending with an underscore, so we need to check the configSymbol first.
                            item[key] = me[configSymbol][value] || me[value];
                        }
                    }
                });
            });
        }
    }

    /**
     * When using set(), configs without a trailing underscore can already be assigned,
     * so the hasOwnProperty() check will return true
     * @param {Boolean} [forceAssign=false]
     */
    processConfigs(forceAssign=false) {
        let me   = this,
            keys = Object.keys(me[configSymbol]);

        me[forceAssignConfigs] = forceAssign;

        // We do not want to iterate over the keys, since 1 config can remove more than 1 key (beforeSetX, afterSetX)
        if (keys.length > 0) {
            // The hasOwnProperty check is intended for configs without a trailing underscore
            // => they could already got assigned inside an afterSet-method
            if (forceAssign || !me.hasOwnProperty(keys[0])) {
                me[keys[0]] = me[configSymbol][keys[0]];
            }

            // there is a delete call inside the config getter as well (Neo.mjs => autoGenerateGetSet())
            // we need to keep this one for configs, which do not use getters (no trailing underscore)
            delete me[configSymbol][keys[0]];

            me.processConfigs(forceAssign);
        }
    }

    /**
     *
     * @param {String} className
     * @param {Object} remote
     */
    static sendRemotes(className, remote) {
        let origin;

        Object.entries(remote).forEach(([worker, methods]) => {
            if (Neo.workerId !== worker) {
                origin = Neo.workerId === 'main' ? Neo.worker.Manager : Neo.currentWorker;

                origin.sendMessage(worker, {
                    action: 'registerRemote',
                    methods,
                    className
                });
            }
        });
    }

    /**
     * Change multiple configs at once, ensuring that all afterSet methods get all new assigned values
     * @param {Object} values={}
     */
    set(values={}) {
        let me = this;

        // If the initial config processing is still running,
        // finish this one first before dropping new values into the configSymbol.
        // see: https://github.com/neomjs/neo/issues/2201
        if (me[forceAssignConfigs] !== true && Object.keys(me[configSymbol]).length > 0) {
            me.processConfigs();
        }

        Object.assign(me[configSymbol], values);

        me.processConfigs(true);
    }

    /**
     * Sets the value of a static config by a given key
     * @param {String} key The key of a staticConfig defined inside static getStaticConfig
     * @param {*} value
     * @returns {Boolean} true in case the config exists and got changed
     */
    setStaticConfig(key, value) {
        let staticConfig = this.constructor.staticConfig;

        if (staticConfig.hasOwnProperty(key)) {
            staticConfig[key] = value;
            return true;
        }

        return false;
    }

    /**
     * <p>Enhancing the toString() method, e.g.</p>
     * `Neo.create('Neo.button.Base').toString() => "[object Neo.button.Base (neo-button-1)]"`
     * @returns {String}
     */
    get [Symbol.toStringTag]() {
        return `${this.className} (id: ${this.id})`;
    }

    /**
     * <p>Enhancing the instanceof method. Without this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => true`
     * <p>With this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => false`<br>
     * `Neo.create(Neo.collection.Base) instanceof Neo.core.Base => true`
     * @returns {Boolean}
     */
    static [Symbol.hasInstance](instance) {
        if (!instance) {
            return false;
        }

        return instance[isInstance] === true ? super[Symbol.hasInstance](instance) : false;
    }
}

Neo.applyClassConfig(Base);

Base.instanceManagerAvailable = false;




/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Compare.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Compare.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Compare
 * @extends Neo.core.Base
 */
class Compare extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Compare'
         * @protected
         */
        className: 'Neo.core.Compare'
    }}

    /**
     *
     * @param {*} item1
     * @param {*} item2
     * @returns {Boolean}
     */
    static isEqual(item1, item2) {
        if (item1 === item2) {
            return true;
        }

        let type1 = Neo.typeOf(item1),
            type2 = Neo.typeOf(item2),
            key;

        if (type1 !== type2) {
            return false;
        }

        switch (type1) {
            case 'Array': {
                if (item1.length !== item2.length) {
                    return false;
                }

                for (const [i, v] of item1.entries()) {
                    if (!Compare.isEqual(v, item2[i])) {
                        return false;
                    }
                }

                break;
            }

            case 'Date': {
                return item1.valueOf() === item2.valueOf();
            }

            case 'Function': {
                if (item1.name !== item2.name) {
                    return false;
                }

                return item1.toString() === item2.toString();
            }

            case 'Map': {
                if (item1.size !== item2.size) {
                    return false;
                }

                let val2;

                for (const [key, val] of item1) {
                    val2 = item2.get(key);

                    if (val2 !== val || val2 === undefined && !item2.has(key)) {
                        return false;
                    }
                }

                break;
            }

            case 'NeoInstance': {
                if (item1.id !== item2.id) {
                    return false;
                }

                break;
            }

            case 'Object': {
                if (Object.keys(item1).length !== Object.keys(item2).length) {
                    return false;
                }

                for (key in item1) {
                    if (!Compare.isEqual(item1[key], item2[key])) {
                        return false;
                    }
                }

                break;
            }

            case 'RegExp': {
                if (item1.toString() !== item2.toString()) {
                    return false;
                }

                break;
            }

            case 'Set': {
                if (item1.size !== item2.size) {
                    return false;
                }

                for (key of item1) {
                    if (!item2.has(key)) {
                        return false;
                    }
                }

                break;
            }

            default: {
                return item1 === item2;
            }
        }

        return true;
    }
}

Neo.applyClassConfig(Compare);

// alias
Neo.isEqual = Compare.isEqual;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Compare);


/***/ }),

/***/ "./node_modules/neo.mjs/src/core/IdGenerator.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/IdGenerator.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This class gets used by core.Base, so it can not extend it.
 * It could get simplified to just being an object (needs to manually get put into the Neo namespace in this case).
 * @class Neo.core.IdGenerator
 * @singleton
 */
class IdGenerator {
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @protected
         * @static
         */
        registerToGlobalNs: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.IdGenerator'
         * @protected
         */
        className: 'Neo.core.IdGenerator',
        /**
         * @member {String} ntype='id-generator'
         * @protected
         */
        ntype: 'id-generator',
        /**
         * The default prefix for neo instance ids
         * @member {String} base='neo-'
         */
        base: 'neo-',
        /**
         * @member {Boolean} singleton='true
         * @protected
         */
        singleton: true
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        let me = this;

        me.idCounter = {};

        // alias
        Neo.getId = me.getId.bind(me);
    }

    /**
     *
     * @param name
     * @returns {string}
     */
    getId(name) {
        name = name || 'neo';

        let me      = this,
            counter = me.idCounter,
            count   = counter[name] || 0;

        counter[name] = ++count;

        return me.base + (name === 'neo' ? '' : name + '-') + count;
    }

    init() {}

    onAfterConstructed() {}

    onConstructed() {}
}

Neo.applyClassConfig(IdGenerator);

let instance = Neo.create(IdGenerator);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Logger.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Logger.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Logger
 * @extends Neo.core.Base
 * @singleton
 */
class Logger extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Logger'
         * @protected
         */
        className: 'Neo.core.Logger',
        /**
         * @member {String} ntype='logger'
         * @protected
         */
        ntype: 'logger',
        /**
         * Set this config to false to disable the logging
         * @member {boolean} enableLogs=true
         */
        enableLogs: true,
        /**
         * @member {String} level='log'
         * @protected
         */
        level: 'log',
        /**
         * @member {boolean} enableLogs=true
         * @protected
         */
        singleton: true
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);

        // aliases
        Neo.applyFromNs(Neo, this, {
            error   : 'error',
            info    : 'info',
            log     : 'log',
            logError: 'logError',
            warn    : 'warn'
        }, true);
    }

    /**
     *
     * @param value
     */
    error(value) {
        throw new Error(value);
    }

    /**
     *
     * @param args
     */
    info(...args) {
        this.level = 'info';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    log(...args) {
        this.level = 'log';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    logError(...args) {
        this.level = 'error';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    warn(...args) {
        this.level = 'warn';
        this.write(...args);
    }

    /**
     *
     * @param args
     * @protected
     */
    write(...args) {
        if (this.enableLogs === true) {
            console[this.level](...args);
        }
    }
}

Neo.applyClassConfig(Logger);

let instance = Neo.create(Logger);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Observable.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Observable.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Observable
 * @extends Neo.core.Base
 */
class Observable extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Observable'
         * @protected
         */
        className: 'Neo.core.Observable',
        /**
         * @member {String} ntype='mixin-observable'
         * @protected
         */
        ntype: 'mixin-observable',
        /**
         * @member {Boolean} mixin=true
         * @protected
         */
        mixin: true
    }}

    /**
     *
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String|null} eventId null in case an object gets passed as the name (multiple ids)
     */
    addListener(name, opts, scope, eventId, data, order) {
        let me         = this,
            nameObject = typeof name === 'object',
            listener, existing, eventConfig;

        if (nameObject) {
            if (name.hasOwnProperty('scope')) {
                scope = name.scope;
                delete name.scope;
            }

            Object.entries(name).forEach(([key, value]) => {
                me.addListener(key, value, scope);
            });
        } else if (typeof opts === 'object') {
            scope = scope || opts.scope;
            listener = opts.fn;
            order = order || opts.order;
            eventId = eventId || opts.eventId;
        } else if (typeof opts === 'function') {
            listener = opts;
        } else if (typeof opts === 'string') {
            listener = opts; // VC hook, can get parsed after onConstructed in case the view uses the parent VC
        } else {
            throw new Error('Invalid addListener call: ' + name);
        }

        if (!nameObject) {
            eventConfig = {
                fn    : listener,
                scope : scope,
                data  : data,
                id    : eventId || Neo.getId('event')
            };

            if (existing = me.listeners?.[name]) {
                existing.forEach(cfg => {
                    if (cfg.id === eventId || (cfg.fn === listener && cfg.scope === scope)) {
                        console.error('Duplicate event handler attached:', name, me);
                    }
                });

                if (typeof order === 'number') {
                    existing.splice(order, 0, eventConfig);
                } else if (order === 'before') {
                    existing.unshift(eventConfig);
                } else {
                    existing.push(eventConfig);
                }
            } else {
                me.listeners[name] = [eventConfig];
            }

            return eventConfig.id;
        }

        return null;
    }

    /**
     *
     * @param name
     */
    fire(name) {
        let me        = this,
            args      = [].slice.call(arguments, 1),
            listeners = me.listeners,
            eventConfig, events, i, len;

        if (listeners && listeners[name]) {
            events = [...listeners[name]];
            len    = events.length;

            for (i = 0; i < len; i++) {
                eventConfig = events[i];

                eventConfig.fn.apply(eventConfig.scope || me, eventConfig.data ? args.concat(eventConfig.data) : args);
            }
        }
    }

    initObservable(config) {
        let me = this,
            proto = me.__proto__,
            listeners;

        if (config.listeners) {
            me.listeners = config.listeners;
            delete config.listeners;
        }

        listeners = me.listeners;

        me.listeners = {};

        if (listeners) {
            if (Neo.isObject(listeners)) {
                listeners = {...listeners};
            }

            me.addListener(listeners);
        }

        while (proto?.constructor.isClass) {
            if (proto.constructor.staticConfig.observable && !proto.constructor.listeners) {
                Object.assign(proto.constructor, {
                    addListener   : me.addListener,
                    fire          : me.fire,
                    listeners     : {},
                    on            : me.on,
                    removeListener: me.removeListener,
                    un            : me.un
                });
            }
            proto = proto.__proto__;
        }
    }

    /**
     * Alias for addListener
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String} eventId
     */
    on(...args) {
        return this.addListener(...args);
    }

    /**
     *
     * @param {Object|String} name
     * @param {String} [eventId]
     */
    removeListener(name, eventId) {
        let me = this,
            i, len, listener, listeners, match, scope;

        if (Neo.isObject(name)) {
            if (name.scope) {
                scope = name.scope;
                delete name.scope;
            }

            Object.entries(name).forEach(([key, value]) => {
                listeners = me.listeners[key] || [];
                i         = 0;
                len       = listeners.length;

                for (; i < len; i++) {
                    listener = listeners[i];

                    if (
                        listener.fn.name === (Neo.isString(value) ? value : value.name) &&
                        listener.scope   === scope
                    ) {
                        listeners.splice(i, 1);
                        break;
                    }
                }
            });
        } else if (Neo.isString(eventId)) {
            listeners = me.listeners[name];
            match     = false;

            listeners.forEach((eventConfig, idx) => {
                if (eventConfig.id === eventId) {
                    return match = idx;
                }
            });

            if (match !== false) {
                listeners.splice(match, 1);
            }
        }
    }

    // removeAllListeners: function(name) {

    // },

    // suspendListeners: function(queue) {

    // },

    // resumeListeners: function() {

    // }

    /**
     * Alias for removeListener
     * @param {Object|String} name
     * @param {String} [eventId]
     */
    un(...args) {
        this.removeListener(...args);
    }
}

Neo.applyClassConfig(Observable);




/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Util.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Util.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Util
 * @extends Neo.core.Base
 */
class Util extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getStaticConfig() {return {
        /**
         * A regex to remove camel case syntax
         * @member {RegExp} decamelRegEx=/([a-z])([A-Z])/g
         * @protected
         * @static
         */
        decamelRegEx: /([a-z])([A-Z])/g
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Util'
         * @protected
         */
        className: 'Neo.core.Util',
        /**
         * @member {String} ntype='core-util'
         * @protected
         */
        ntype: 'core-util',
    }}

    /**
     *
     * @param {Object} scope
     * @param {String[]} values
     */
    static bindMethods(scope, values) {
        values.forEach(value => {
            scope[value] = scope[value].bind(scope);
        });
    }

    /**
     * Makes the first character of a string uppercase
     * @param {String} string
     * @returns {Boolean|String} Returns false for non string inputs
     */
    static capitalize(string) {
        return Util.isString(string) && string[0].toUpperCase() + string.slice(1);
    }

    /**
     * Transforms a styles string into a styles object using camelcase syntax
     * @param {String} string The styles string to parse
     * @returns {Object} The camelcase styles object
     */
    static createStyleObject(string) {
        if (!string) {
            return null;
        }

        let parts;

        // split(';') does fetch semicolons inside brackets
        // -> background-image: "url('data:image/png;base64,...

        // TODO: Cache all regex
        return string.split(/;(?=[^\)]*(?:\(|$))/g).reduce((obj, el) => {
            // we have to split by the first colon only
            // -> background-image: url('http://example.com/image.png')
            parts = el.split((/:(.+)/)).map(function (x) {
                let num = parseFloat(x);

                return x == num ? num : x.trim();
            });

            if (parts[0] !== '') {
                parts[0] = parts[0].replace(/-([a-z])/g, (str, letter) => {
                    return letter.toUpperCase();
                });
                obj[parts[0]] = parts[1];
            }
            return obj;
        }, {});
    }

    /**
     * Converts a styles object which can use camelcase syntax into a styles string
     * @param {Object} styles The styles object
     * @returns {String} The styles string (DOM ready)
     */
    static createStyles(styles) {
        let style = '';

        Object.entries(styles).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                style += Util.decamel(key) + ':' + value + ';';
            }
        });

        return style;
    }

    /**
     * Transforms all uppercase characters of a string into lowercase.
     * Does not touch special characters.
     * @param {String} value The input containing uppercase characters
     * @returns {String} The lowercase output
     */
    static decamel(value) {
        return value.replace(Util.decamelRegEx, '$1-$2').toLowerCase();
    }

    /**
     * Returns true if the passed value is an array
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isArray(value) {
        return Array.isArray(value)
    }

    /**
     * Returns true if the passed value is a boolean
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isBoolean(value) {
        return typeof value === 'boolean';
    }

    /**
     * Returns true if the passed value is not undefined
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isDefined(value) {
        return typeof value !== 'undefined';
    }

    /**
     * Returns true if the passed value is an empty Array, Object or String
     * @param {Array|Object|String} value The value to test
     * @returns {Boolean}
     */
    static isEmpty(value) {
        if (Array.isArray(value)) {
            return value.length === 0;
        }

        if (value instanceof Date) {
            return false;
        }

        if (Util.isObject(value)) {
            return Object.keys(value).length === 0;
        }

        if (Util.isString(value)) {
            return value === '';
        }

        return false;
    }

    /**
     * Returns true if the passed value is a function
     * @param {Function} value The value to test
     * @returns {Boolean}
     */
    static isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * Returns true if the passed value is a number. Returns false for non-finite numbers
     * @param {Number} value The value to test
     * @returns {Boolean}
     */
    static isNumber(value){
        return typeof value === 'number' && isFinite(value);
    }

    /**
     * Returns true if the passed value is an object
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    }

    /**
     * Returns true if the passed value is a string
     * @param {String} value The value to test
     * @returns {Boolean}
     */
    static isString(value) {
        return typeof value === 'string';
    }

    /**
     * Converts any iterable (strings, numeric indices and a length property) into a true array
     * @param {Object|String} iterable
     * @param {Number} [start=0] start index
     * @param {Number} [end=iterable.length] end index
     * @returns {Array}
     */
    static toArray(iterable, start, end) {
        let len;

        if (!iterable || !(len = iterable.length)) {
            return [];
        }

        if (typeof iterable === 'string') {
            return iterable.split('');
        }

        return Array.prototype.slice.call(iterable, start || 0, end || len);
    }
}

Neo.applyClassConfig(Util);

// aliases
Neo.applyFromNs(Neo, Util, {
    bindMethods      : 'bindMethods',
    createStyleObject: 'createStyleObject',
    createStyles     : 'createStyles',
    capitalize       : 'capitalize',
    decamel          : 'decamel',
    isArray          : 'isArray',
    isBoolean        : 'isBoolean',
    isDefined        : 'isDefined',
    isEmpty          : 'isEmpty',
    isFunction       : 'isFunction',
    isNumber         : 'isNumber',
    isObject         : 'isObject',
    isString         : 'isString',
    toArray          : 'toArray'
}, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Util);


/***/ }),

/***/ "./node_modules/neo.mjs/src/core/_export.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/_export.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base": () => (/* reexport safe */ _Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Compare": () => (/* reexport safe */ _Compare_mjs__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "IdGenerator": () => (/* reexport safe */ _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "Logger": () => (/* reexport safe */ _Logger_mjs__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "Observable": () => (/* reexport safe */ _Observable_mjs__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "Util": () => (/* reexport safe */ _Util_mjs__WEBPACK_IMPORTED_MODULE_5__.default)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Compare_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Compare.mjs */ "./node_modules/neo.mjs/src/core/Compare.mjs");
/* harmony import */ var _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");
/* harmony import */ var _Logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");










/***/ }),

/***/ "./node_modules/neo.mjs/src/main/DomAccess.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/DomAccess.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _mixin_DeltaUpdates_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixin/DeltaUpdates.mjs */ "./node_modules/neo.mjs/src/main/mixin/DeltaUpdates.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");




/**
 * @class Neo.main.DomAccess
 * @extends Neo.core.Base
 * @singleton
 */
class DomAccess extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.DomAccess'
         * @protected
         */
        className: 'Neo.main.DomAccess',
        /**
         * @member {Number} countDeltas=0
         * @protected
         */
        countDeltas: 0,
        /**
         * @member {Number} countDeltasPer250ms=0
         * @protected
         */
        countDeltasPer250ms: 0,
        /**
         * @member {Number} countUpdates=0
         * @protected
         */
        countUpdates: 0,
        /**
         * @member {Array} mixins=[DeltaUpdates, Observable]
         */
        mixins: [
            _mixin_DeltaUpdates_mjs__WEBPACK_IMPORTED_MODULE_1__.default,
            _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_2__.default
        ],
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: [//...]}
         * @protected
         */
        remote: {
            app: [
                'addScript',
                'applyBodyCls',
                'execCommand',
                'focus',
                'getAttributes',
                'getBoundingClientRect',
                'scrollBy',
                'scrollIntoView',
                'scrollTo',
                'scrollToTableRow',
                'selectNode',
                'setBodyCls',
                'setStyle',
                'windowScrollTo'
            ]
        },
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * Void attributes inside html tags
         * @member {String[]} voidAttributes
         * @protected
         */
        voidAttributes: [
            'checked',
            'required'
        ]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this,
            node;

        if (Neo.config.renderCountDeltas) {
            setInterval(() => {
                node = document.getElementById('neo-delta-updates');

                if (node) {
                   node.innerHTML = String(me.countDeltasPer250ms * 4);
                }

                me.countDeltasPer250ms = 0;
            }, 250);
        }
    }

    /**
     *
     * @param {Object} data
     * @param {Boolean} data.async
     * @param {Boolean} [data.defer=false]
     * @param {String} [data.src=true]
     */
    addScript(data) {
        const script = document.createElement('script');

        if (!data.hasOwnProperty('async')) {
            data.async = true;
        }

        Object.assign(script, data);

        document.head.appendChild(script);
    }

    /**
     *
     * @param {Object} data
     * @param {String[]} data.cls
     */
    applyBodyCls(data) {
        const cls = data.cls || [];
        document.body.classList.add(...cls);
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.command
     * @returns {Object} data
     */
    execCommand(data) {
        document.execCommand(data.command);
        return data;
    }

    /**
     * Calls focus on a node for a given dom node id
     * @param {Object} data
     * @returns {Object} obj.id => the passed id
     */
    focus(data) {
        let node = this.getElement(data.id);

        if (node) {
            node.focus();

            if (Neo.isNumber(node.selectionStart)) {
                node.selectionStart = node.selectionEnd = node.value.length;
            }
        }

        return {id: data.id};
    }

    /**
     * Returns the attributes for a given dom node id
     * @param {Object} data
     * @param {Array|String} data.id either an id or an array of ids
     * @param {Array|String} data.attributes either an attribute or an array of attributes
     * @returns {Array|Object} In case id is an array, an array of atrrbute objects is returned, otherwise an object
     */
    getAttributes(data) {
        let returnData;

        if (Array.isArray(data.id)) {
            returnData = [];

            data.id.forEach(id => {
                returnData.push(this.getAttributes({
                    attributes: data.attributes,
                    id        : id
                }));
            });
        } else {
            let node = this.getElementOrBody(data.id);

            returnData = {};

            if (node) {
                if (!Array.isArray(data.attributes)) {
                    data.attributes = [data.attributes];

                    data.attributes.forEach(attribute => {
                        returnData[attribute] = node[attribute];
                    })
                }
            }
        }

        return returnData;
    }

    /**
     * Returns node.getBoundingClientRect() for a given dom node id
     * @param {Object} data
     * @param {Array|String} data.id either an id or an array of ids
     * @returns {Array|Object} In case id is an array, an array of DomRects is returned, otherwise an DomRect object
     */
    getBoundingClientRect(data) {
        let returnData;

        if (Array.isArray(data.id)) {
            returnData = [];

            data.id.forEach(id => {
                returnData.push(this.getBoundingClientRect({id: id}));
            });
        } else {
            let node = this.getElementOrBody(data.id),
                rect = {};

            returnData = {};

            if (node) {
                rect = node.getBoundingClientRect();

                // DomRect does not support spreading => {...DomRect} => {}
                Object.assign(returnData, {
                    bottom: rect.bottom,
                    height: rect.height,
                    left  : rect.left,
                    right : rect.right,
                    top   : rect.top,
                    width : rect.width,
                    x     : rect.x,
                    y     : rect.y
                });
            }
        }

        return returnData;
    }

    /**
     *
     * @param {String} nodeId
     * @returns {HTMLElement}
     * @protected
     */
    getElement(nodeId) {
        if (Neo.config.useDomIds) {
            return document.getElementById(nodeId);
        }

        return document.querySelector(`[data-neo-id='${nodeId}']`);
    }

    /**
     *
     * @param {String} [nodeId='document.body']
     * @returns {HTMLElement}
     * @protected
     */
    getElementOrBody(nodeId='document.body') {
        if (nodeId === 'body' || nodeId === 'document.body') {
            return document.body;
        }

        return this.getElement(nodeId);
    }

    /**
     * Include a script into the document.head
     * @param {String} src
     * @param {Boolean} [async=true]
     * @returns {Promise<unknown>}
     */
    loadScript(src, async=true) {
        let script;

        return new Promise((resolve, reject) => {
            script = document.createElement('script');

            Object.assign(script, {
                async  : async,
                onerror: reject,
                onload : resolve,
                src    : src
            });

            document.head.appendChild(script);
        });
    }

    /**
     * Include a link into the document.head
     * @param {String} href
     * @returns {Promise<unknown>}
     */
    loadStylesheet(href) {
        let link;

        return new Promise((resolve, reject) => {
            link = document.createElement('link');

            Object.assign(link, {
                href   : href,
                onerror: reject,
                onload : resolve,
                rel    : 'stylesheet',
                type   : 'text/css'
            });

            document.head.appendChild(link);
        });
    }

    /**
     *
     */
    onDomContentLoaded() {
        if (Neo.config.applyBodyCls) {
            this.applyBodyCls({cls: ['neo-body']});
        }
    }

    /**
     * @param {Object} data
     * @param {String} data.nodeId
     */
    onGetOffscreenCanvas(data) {
        let me        = this,
            node      = me.getElement(data.nodeId),
            offscreen = node.transferControlToOffscreen();

        data.offscreen = offscreen;

        Neo.worker.Manager.sendMessage(data.origin, {
            action : 'reply',
            data   : data,
            replyId: data.id,
            success: true
        }, [offscreen]);
    }

    /**
     *
     * @param {Object} data
     * @param {String[]} data.attributes
     * @param {Array} data.functions An array containing strings and/or objects
     * @param {String[]} data.styles
     * @param {String} data.vnodeId
     * @protected
     */
    onReadDom(data) {
        let attributes    = data.attributes || [],
            functions     = data.functions  || [],
            styles        = data.styles     || [],
            vnodeId       = data.vnodeId,
            retAttributes = {},
            retFunctions  = {},
            retStyles     = {},
            element       = vnodeId ? this.getElement(vnodeId) : null,
            fnName, scope;

        attributes.forEach(key => {
            retAttributes[key] = element[key];
        });

        functions.forEach((key, index) => {
            if (Neo.isObject(key)) {
                key.params         = key.params         || [];
                key.paramIsDomNode = key.paramIsDomNode || [];

                scope = key.scope ? document[key.scope] : element;

                key.params.forEach((param, paramIndex) => {
                    if (key.paramIsDomNode[paramIndex] === true) {
                        key.params[paramIndex] = this.getElement(key.params[paramIndex]);
                    }
                });

                fnName = key.returnFnName ? key.returnFnName : index;
                retFunctions[fnName] = scope[key.fn](...key.params);

                if (key.returnValue) {
                    retFunctions[fnName] = retFunctions[fnName][key.returnValue];
                }
            } else {
                retFunctions[key] = element[key]();
            }
        });

        styles.forEach(key => {
            retStyles[key] = element.style[key];
        });

        Object.assign(data, {
            attributes: retAttributes,
            functions : retFunctions,
            styles    : retStyles
        });

        Neo.worker.Manager.sendMessage(data.origin, {
            action : 'reply',
            data   : data,
            replyId: data.id,
            success: true
        });
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    read(data) {
        if (typeof data === 'function') {
            data();
        }
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.direction left, top
     * @param {String} data.id
     * @param {Number} data.value
     * @returns {Object} obj.id => the passed id
     */
    scrollBy(data) {
        let node = this.getElement(data.id);

        if (node) {
            node[`scroll${Neo.capitalize(data.direction)}`] += data.value;
        }

        return {id: data.id};
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.id
     * @param {String} [data.behavior='smooth']
     * @param {String} [data.block='start']
     * @param {String} [data.inline='nearest']
     * @returns {Object} obj.id => the passed id
     */
    scrollIntoView(data) {
        let node = this.getElement(data.id);

        if (node) {
            node.scrollIntoView({
                behavior: data.behavior || 'smooth',
                block   : data.block    || 'start',
                inline  : data.inline   || 'nearest'
            });
        }

        return {id: data.id};
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.direction left, top
     * @param {String} data.id
     * @param {Number} data.value
     * @returns {Object} obj.id => the passed id
     */
    scrollTo(data) {
        let node = this.getElement(data.id);

        if (node) {
            node[`scroll${Neo.capitalize(data.direction)}`] = data.value;
        }

        return {id: data.id};
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.id
     * @param {String} [data.behavior='smooth']
     * @param {String} [data.offset=34]
     * @returns {Object} obj.id => the passed id
     */
    scrollToTableRow(data) {
        let node = this.getElement(data.id); // tr tag

        if (node) {
            let tableNode   = node.parentNode.parentNode,
                wrapperNode = tableNode.parentNode,
                tableTop    = tableNode.getBoundingClientRect().top,
                top         = node.getBoundingClientRect().top;

            wrapperNode.scrollTo({
                top     : top - tableTop - (data.hasOwnProperty('offset') ? data.offset : 34),
                behavior: data.behavior || 'smooth'
            });
        }

        return {id: data.id};
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.id
     * @param {Number} [data.start=0]
     * @param {Number} [data.end=99999]
     * @returns {Object} obj.id => the passed id
     */
    selectNode(data) {
        let node  = this.getElement(data.id),
            start = Neo.isNumber(data.start) || 0,
            end   = Neo.isNumber(data.end)   || 99999;

        if (node) {
            node.select();
            node.setSelectionRange(start, end);
        }

        return {id: data.id};
    }

    /**
     * @param {Object} data
     * @param {String[]} data.add
     * @param {Object[]} data.remove
     */
    setBodyCls(data) {
        document.body.classList.remove(...data.remove || []);
        document.body.classList.add(...data.add || []);
    }

    /**
     * Not recommended to use => stick to vdom updates.
     * Can be handy for custom CSS based animations though.
     * @param {Object} data
     * @param {String} data.id A node id or 'document.body'
     * @param {Object} data.style
     * @returns {Object} obj.id => the passed id
     */
    setStyle(data) {
        let node = this.getElementOrBody(data.id);

        if (node) {
            Object.entries(data.style).forEach(([key, value]) => {
                if (Neo.isString(value) && value.includes('!important')) {
                    value = value.replace('!important', '').trim();
                    node.style.setProperty(Neo.decamel(key), value, 'important');
                } else {
                    node.style[Neo.decamel(key)] = value;
                }
            });
        }

        return {id: data.id};
    }

    /**
     *
     * @param {Object} data
     * @param {String} [data.behavior='smooth'] // auto or smooth
     * @param {String} [data.left=0]
     * @param {String} [data.top=0]
     */
    windowScrollTo(data) {
        window.scrollTo({
            behavior: data.behavior || 'smooth',
            left    : data.left     || 0,
            top     : data.top      || 0
        });
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    write(data) {
        this.du_insertNode({
            index    : data.parentIndex,
            outerHTML: data.html || data.outerHTML,
            parentId : data.parentId
        });
    }
}

Neo.applyClassConfig(DomAccess);

let instance = Neo.create(DomAccess);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/neo.mjs/src/main/DomEvents.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/DomEvents.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _mixin_TouchDomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixin/TouchDomEvents.mjs */ "./node_modules/neo.mjs/src/main/mixin/TouchDomEvents.mjs");




const globalDomEvents = [
    {name: 'change',      handler: 'onChange'},
    {name: 'click',       handler: 'onClick'},
    {name: 'contextmenu', handler: 'onContextMenu'},
    {name: 'dblclick',    handler: 'onDoubleClick'},
    {name: 'focusin',     handler: 'onFocusIn'},
    {name: 'focusout',    handler: 'onFocusOut'},
    {name: 'input',       handler: 'onChange'},
    {name: 'keydown',     handler: 'onKeyDown'},
    {name: 'keyup',       handler: 'onKeyUp'},
    {name: 'mousedown',   handler: 'onMouseDown'},
    {name: 'mouseenter',  handler: 'onMouseEnter', options: {capture: true}},
    {name: 'mouseleave',  handler: 'onMouseLeave', options: {capture: true}},
    {name: 'mouseup',     handler: 'onMouseUp'},
    {name: 'wheel',       handler: 'onWheel',      options: {passive: false}}
];

// Will get applied to the document.body in case Neo.config.useTouchEvents === true (default value)
const touchEvents = [
    {name: 'touchcancel', handler: 'onTouchCancel'},
    {name: 'touchend',    handler: 'onTouchEnd'},
    {name: 'touchenter',  handler: 'onTouchEnter'},
    {name: 'touchleave',  handler: 'onTouchLeave'},
    {name: 'touchmove',   handler: 'onTouchMove'},
    {name: 'touchstart',  handler: 'onTouchStart'}
];

// wheel events fire very often, so we limit the targets to avoid unnecessary post messages from main to the app worker
const globalWheelTargets = [
    'neo-c-m-scrollcontainer',
    'neo-c-w-scrollcontainer',
    'neo-calendar-yearcomponent',
    'neo-circle-component',
    'neo-dateselector',
    'neo-gallery',
    'neo-helix'
];

// separated from globalWheelTargets => performance
// buffer in ms
const globalWheelTargetsBuffer = {
    'neo-c-m-scrollcontainer'   : 100,
    'neo-c-w-scrollcontainer'   : 100,
    'neo-calendar-yearcomponent': 300,
    'neo-dateselector'          : 300
};

// separated from globalWheelTargets => performance
const globalWheelTargetsKeepEvent = [
    'neo-c-m-scrollcontainer',
    'neo-c-w-scrollcontainer'
];

const lastWheelEvent = {
    date  : null,
    target: null
};

const preventClickTargets       = [],
      preventContextmenuTargets = [];

/**
 * @class Neo.main.DomEvents
 * @extends Neo.core.Base
 * @singleton
 */
class DomEvents extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.DomEvents'
         * @protected
         */
        className: 'Neo.main.DomEvents',
        /**
         * todo: conditional dynamic import once the build processes can handle it
         * @member {Array} mixins=[TouchDomEvents]
         */
        mixins: [_mixin_TouchDomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default],
        /**
         * @member {boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: ['addDomListener']}
         * @protected
         */
        remote: {
            app: [
                'addDomListener',
                'registerPreventDefaultTargets'
            ]
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        document.addEventListener('DOMContentLoaded', me.onDomContentLoaded.bind(me));
        window  .addEventListener('hashchange',       me.onHashChange      .bind(me));

        if (Neo.config.useSharedWorkers) {
            window.addEventListener('beforeunload', me.onBeforeUnload.bind(me));
        }
    }

    /**
     *
     * @param {Object} data
     */
    addDomListener(data) {
        let me  = this,
            i   = 0,
            len = data.events.length,
            event, id, targetNode;

        for (; i < len; i++) {
            event = data.events[i];

            if (!me[event.handler]) {
                me[event.handler] = Neo.emptyFn;
            }

            id = event.vnodeId || data.vnodeId;

            if (id === 'document.body') {
                targetNode = document.body;
            } else if (Neo.config.useDomIds) {
                targetNode = document.getElementById(id);
            } else {
                targetNode = document.querySelector(`[data-neo-id='${id}']`);
            }

            targetNode.addEventListener(event.name, me[event.handler].bind(me));
        }

        Neo.worker.Manager.sendMessage(data.origin, {
            action : 'reply',
            data   : data,
            replyId: data.id,
            success: true
        });
    }

    /**
     *
     */
    addGlobalDomListeners() {
        let me = this;

        [...globalDomEvents].concat(Neo.config.useTouchEvents ? touchEvents : []).forEach(event => {
            document.body.addEventListener(event.name, me[event.handler].bind(me), event.options);
        });
    }

    /**
     * Returns the distance between two points
     * @param  {Number} x1 The X position of the first point
     * @param  {Number} y1 The Y position of the first point
     * @param  {Number} x2 The X position of the second point
     * @param  {Number} y2 The Y position of the second point
     * @returns {Number}
     */
    getDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    /**
     * Local domEvent listener
     * @param {Object} event
     */
    domEventListener(event) {
        let me     = this,
            target = event.target,
            config = {
                action   : 'domEvent',
                eventName: event.type,

                data: {
                    ...me.getEventData(event),
                    id   : target.id,
                    value: target.value
                }
            };

        // console.log('domEventListener', event.type, target.id, target.value, event);

        switch (event.type) {
            case 'dragend':
                me.dragElementId = null;
                break;
            case 'dragenter':
                if (me.dragElementId === target.id) {
                    return; // ignore target and source to be the same
                }
                break;
            case 'dragleave':
                if (me.dragElementId === target.id) {
                    return; // ignore target and source to be the same
                }
                break;
            case 'dragover':
                me.onDragOver(event);
                event.preventDefault();
                break;
            case 'dragstart':
                me.dragElementId = target.id;
                break;
            case 'drop':
                if (!me.dragElementId || me.dragElementId === target.id) {
                    return; // drop fires twice by default & drop should not trigger on the drag element
                }
                if (event.stopPropagation) {
                    event.stopPropagation(); // stops the browser from redirecting.
                }
                event.preventDefault();
                config.data.srcId = me.dragElementId;
                me.dragElementId = null;
                break;
            case 'mousemove':
                Object.assign(config.data, me.getMouseEventData(event));
                break;
            default:
                event.preventDefault();
                break;
        }

        Neo.worker.Manager.sendMessage('app', config);
    }

    /**
     *
     * @param {Object} event
     * @returns {Object}
     */
    getEventData(event) {
        let path = event.path || event.composedPath(); // FF does not support path

        return {
            path     : path.map(e => this.getTargetData(e)),
            target   : this.getTargetData(event.target),
            timeStamp: event.timeStamp,
            type     : event.type
        };
    }

    /**
     *
     * @param {Object} event
     * @returns {Object}
     */
    getKeyboardEventData(event) {
        const {altKey, code, ctrlKey, key, keyCode, metaKey, shiftKey} = event;

        return {
            ...this.getEventData(event),
            altKey  : altKey,
            code    : code,
            ctrlKey : ctrlKey,
            key     : key,
            keyCode : keyCode,
            metaKey : metaKey,
            shiftKey: shiftKey
        };
    }

    /**
     *
     * @param {Object} event
     * @returns {Object}
     */
    getMouseEventData(event) {
        const {altKey, clientX, clientY, ctrlKey, metaKey, offsetX, offsetY, pageX, pageY, screenX, screenY, shiftKey} = event;

        return {
            ...this.getEventData(event),
            altKey  : altKey,
            clientX : clientX,
            clientY : clientY,
            ctrlKey : ctrlKey,
            metaKey : metaKey,
            offsetX : offsetX,
            offsetY : offsetY,
            pageX   : pageX,
            pageY   : pageY,
            screenX : screenX,
            screenY : screenY,
            shiftKey: shiftKey
        };
    }

    /**
     *
     * @param {Element} element
     * @returns {Element[]}
     */
    getPathFromElement(element) {
        let path = [];

        if (element) {
            path.push(element);

            while (element.parentNode) {
                path.push(element.parentNode);
                element = element.parentNode;
            }
        }

        return path;
    }

    /**
     *
     * @param {Object} node
     * @returns {Object}
     */
    getTargetData(node) {
        let r    = node.getBoundingClientRect?.(),
            rect = {};

        if (r) {
            Object.assign(rect, {
                bottom: r.bottom,
                height: r.height,
                left  : r.left,
                right : r.right,
                top   : r.top,
                width : r.width,
                x     : r.x,
                y     : r.y
            });
        }

        return {
            checked          : node.checked,
            childElementCount: node.childElementCount,
            clientHeight     : node.clientHeight,
            clientLeft       : node.clientLeft,
            clientTop        : node.clientTop,
            clientWidth      : node.clientWidth,
            cls              : node.classList ? [...node.classList] : [],
            data             : {...node.dataset},
            draggable        : node.draggable,
            hidden           : node.hidden,
            id               : Neo.config.useDomIds ? node.id : node.dataset?.['neoId'],
            inert            : node.inert,
            isConnected      : node.isConnected,
            isContentEditable: node.isContentEditable,
            nodeType         : node.nodeType,
            offsetHeight     : node.offsetHeight,
            offsetLeft       : node.offsetLeft,
            offsetTop        : node.offsetTop,
            offsetWidth      : node.offsetWidth,
            rect,
            scrollHeight     : node.scrollHeight,
            scrollLeft       : node.scrollLeft,
            scrollTop        : node.scrollTop,
            scrollWidth      : node.scrollWidth,
            style            : node.style?.cssText,
            tabIndex         : node.tabIndex,
            tagName          : node.tagName?.toLowerCase()
        };
    }

    /**
     * Returns the first touch event found in touches or changedTouches of a TouchEvent
     * @param {TouchEvent} event
     * @returns {Touch}
     */
    getTouchCoords(event) {
        const {touches, changedTouches} = event;
        return touches?.[0] || changedTouches?.[0];
    }

    /**
     * Only in use if Neo.config.useSharedWorkers = true
     * @param {Object} event
     */
    onBeforeUnload(event) {
        let M = Neo.worker.Manager;

        M.appNames.forEach(appName => {
            M.broadcast({
                action : 'disconnect',
                appName: appName
            });
        })
    }

    /**
     *
     * @param {Object} event
     */
    onChange(event) {
        this.sendMessageToApp({
            ...this.getEventData(event),
            valid: event.target.checkValidity(),
            value: event.target.value
        });
    }

    /**
     *
     * @param {Object} event
     */
    onClick(event) {
        let me = this;

        me.sendMessageToApp(me.getMouseEventData(event));

        if (me.testPathInclusion(event, preventClickTargets)) {
            event.preventDefault();
        }
    }

    /**
     *
     * @param {Object} event
     */
    onContextMenu(event) {
        let me = this;

        me.sendMessageToApp(me.getMouseEventData(event));

        if (me.testPathInclusion(event, preventContextmenuTargets)) {
            event.preventDefault();
        }
    }

    /**
     *
     */
    onDomContentLoaded() {
        this.addGlobalDomListeners();
        this.fire('domContentLoaded');
    }

    /**
     *
     * @param {Object} event
     */
    onDoubleClick(event) {
        let me = this;

        me.sendMessageToApp(me.getMouseEventData(event));

        if (me.testPathInclusion(event, preventClickTargets)) {
            event.preventDefault();
        }
    }

    /**
     *
     * @param {Object} event
     */
    onDragOver(event) {
        event.dataTransfer.dropEffect = 'move';
        //console.log('onDragOver', event);
    }

    /**
     *
     * @param {Object} event
     */
    onFocusIn(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onFocusOut(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     */
    onHashChange() {
        const Manager    = Neo.worker.Manager,
              hashString = location.hash.substr(1);

        Manager.sendMessage('app', {
            action: 'hashChange',
            data  : {
                appNames  : Manager.appNames,
                hash      : this.parseHash(hashString),
                hashString: hashString
            }
        });
    }

    /**
     *
     * @param {Object} event
     */
    onKeyDown(event) {
        this.sendMessageToApp(this.getKeyboardEventData(event));

        if (event.target.nodeName !== 'INPUT') { // see: https://github.com/neomjs/neo/issues/1729
            if (['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'].includes(event.key)) {
                event.preventDefault();
            }
        }
    }

    /**
     *
     * @param {Object} event
     */
    onKeyUp(event) {
        this.sendMessageToApp(this.getKeyboardEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onMouseDown(event) {
        this.sendMessageToApp(this.getMouseEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onMouseEnter(event) {
        let me       = this,
            appEvent = {...me.getMouseEventData(event), fromElementId: event.fromElement?.id || null};

        me.sendMessageToApp(appEvent);
        me.fire('mouseEnter', appEvent);
    }

    /**
     *
     * @param {Object} event
     */
    onMouseLeave(event) {
        let me       = this,
            appEvent = {...me.getMouseEventData(event), toElementId: event.toElement?.id || null};

        me.sendMessageToApp(appEvent);
        me.fire('mouseLeave', appEvent);
    }

    /**
     *
     * @param {Object} event
     */
    onMouseUp(event) {
        this.sendMessageToApp(this.getMouseEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onWheel(event) {
        let target        = this.testPathInclusion(event, globalWheelTargets),
            preventUpdate = false,
            targetCls;

        if (target) {
            targetCls = target.cls;

            if (globalWheelTargetsBuffer[target.cls]) {
                let date = new Date();

                if (lastWheelEvent.date && lastWheelEvent.target === targetCls && date - lastWheelEvent.date < globalWheelTargetsBuffer[targetCls]) {
                    preventUpdate = true;
                } else {
                    Object.assign(lastWheelEvent, {
                        date  : date,
                        target: targetCls
                    });
                }
            }

             if (!preventUpdate) {
                const {deltaX, deltaY, deltaZ} = event;

                this.sendMessageToApp({
                    ...this.getEventData(event),
                    clientHeight: target.node.clientHeight,
                    clientWidth : target.node.clientWidth,
                    deltaX      : deltaX,
                    deltaY      : deltaY,
                    deltaZ      : deltaZ,
                    scrollLeft  : target.node.scrollLeft,
                    scrollTop   : target.node.scrollTop
                });
            }

            if (!globalWheelTargetsKeepEvent.includes(targetCls)) {
                event.preventDefault();
            }
        }
    }

    /**
     * Example for Array values: "categories[]=test1&categories[]=test2"
     * @param {String} str
     * @returns {Object}
     */
    parseHash(str) {
        if (str === '') {
            return {};
        }

        let pieces = str.split('&'),
            data   = {},
            i, key, parts, value;

        for (i = 0; i < pieces.length; i++) {
            parts = pieces[i].split('=');

            if (parts.length < 2) {
                parts.push('');
            }

            key   = decodeURIComponent(parts[0]);
            value = decodeURIComponent(parts[1]);

            if (key.indexOf('[]') !== -1) {
                key = key.substring(0, key.indexOf('[]'));

                if (typeof data[key] === 'undefined') {
                    data[key] = [];
                }

                data[key].push(this.parseValue(value));
            } else {
                data[key] = this.parseValue(value);
            }
        }

        return data;
    }

    /**
     * used by parseHash to convert tokens into boolean or number types if needed
     * @param {String} value
     * @returns {Boolean|Number|String}
     * @protected
     */
    parseValue(value) {
        if (value == parseInt(value)) {
            value = parseInt(value);
        } else if (value === 'false') {
            value = false;
        } else if (value === 'true') {
            value = true;
        }

        return value;
    }

    /**
     *
     * @param {Object} data
     * @param {Array|String} data.cls
     * @param {String} data.name
     */
    registerPreventDefaultTargets(data) {
        let preventArray;

        if (!Array.isArray(data.cls)) {
            data.cls = [data.cls];
        }

        switch (data.name) {
            case 'click':
                preventArray = preventClickTargets;
                break;
            case 'contextmenu':
                preventArray = preventContextmenuTargets;
                break;
        }

        data.cls.forEach(cls => {
            if (!preventArray.includes(cls)) {
                preventArray.push(cls);
            }
        });
    }

    /**
     * Sends the parsed event data to the app worker
     * @param {Object} data
     * @protected
     */
    sendMessageToApp(data) {
        Neo.worker.Manager.sendMessage('app', {
            action   : 'domEvent',
            eventName: data.type,
            data     : data
        });
    }



    /**
     *
     * @param {Object} event
     * @param {Object} targetArray
     * @returns {Object|Boolean} target cls & node if found, false otherwise
     */
    testPathInclusion(event, targetArray) {
        let countTargets = targetArray.length,
            path         = event.path || event.composedPath(),
            i            = 0,
            len          = path.length,
            j, node;

        for (; i < len; i++) {
            node = path[i];

            for (j=0; j < countTargets; j++) {
                if (node.classList?.contains(targetArray[j])) {
                    return {
                        cls : targetArray[j],
                        node: node
                    };
                }
            }
        }

        return false;
    }
}

Neo.applyClassConfig(DomEvents);

let instance = Neo.create(DomEvents);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/neo.mjs/src/main/mixin/DeltaUpdates.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/mixin/DeltaUpdates.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeltaUpdates)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Logic to apply the deltas generated by vdom.Helper to the real DOM
 * @class Neo.main.mixin.DeltaUpdates
 * @extends Neo.core.Base
 * @singleton
 */
class DeltaUpdates extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.mixin.DeltaUpdates'
         * @protected
         */
        className: 'Neo.main.mixin.DeltaUpdates'
    }}

    /**
     *
     * @param {Object} delta
     * @param {String} delta.id
     */
    du_focusNode(delta) {
        this.getElement(delta.id).focus();
    }

    /**
     * node.children contains the "real" nodes (tags)
     * node.childNodes contains texts & comments as nodes too
     * since every vtype:'text' is wrapped inside a comment block (as an id),
     * we need the amount of nodes which are not comments to get the "realIndex".
     * insertAdjacentHTML() is faster than creating a node (template), but only available
     * for children and not for childNodes.
     * In case there are no comments (=> vtype: 'text' nodes), we stick to it for performance reasons.
     *
     * @param {Object} delta
     * @param {String} delta.index
     * @param {String} delta.outerHTML
     * @param {String} delta.parentId
     */
    du_insertNode(delta) {
        let index         = delta.index,
            parentNode    = this.getElementOrBody(delta.parentId),
            countChildren = parentNode.childNodes.length,
            i             = 0,
            realIndex     = index,
            hasComments   = false,
            node;

        // console.log('insertNode', index, countChildren, delta.parentId);

        if (countChildren <= 20 && parentNode.nodeName !== 'TBODY') {
            for (; i < countChildren; i++) {
                if (parentNode.childNodes[i].nodeType === 8) { // ignore comments
                    if (i < realIndex) {
                        realIndex++;
                    }

                    hasComments = true;
                }
            }
        }

        if (!hasComments) {
            countChildren = parentNode.children.length;

            if (index > 0 && index >= countChildren) {
                parentNode.insertAdjacentHTML('beforeend', delta.outerHTML);
                return;
            }

            if (countChildren > 0 && countChildren > index) {
                parentNode.children[index].insertAdjacentHTML('beforebegin', delta.outerHTML);
            } else if (countChildren > 0) {
                parentNode.children[countChildren - 1].insertAdjacentHTML('afterend', delta.outerHTML);
            } else {
                parentNode.insertAdjacentHTML('beforeend', delta.outerHTML);
            }
        } else {
            node = this.htmlStringToElement(delta.outerHTML);

            if (countChildren > 0 && countChildren > realIndex) {
                parentNode.insertBefore(node, parentNode.childNodes[realIndex]);
            } else {
                parentNode.appendChild(node);
            }
        }
    }

    /**
     *
     * @param {Object} delta
     * @param {String} delta.id
     * @param {String} delta.index
     * @param {String} delta.parentId
     */
    du_moveNode(delta) {
        let index      = delta.index,
            node       = this.getElement(delta.id),
            parentNode = this.getElement(delta.parentId);

        if (index >= parentNode.children.length) {
            parentNode.appendChild(node);
        } else {
            //index++; // todo?: increase the index in case same parent, oldIndex < newIndex, direct swap
            if (node && parentNode.children[index].id !== delta.id) {
                parentNode.insertBefore(node, parentNode.children[index]);
            }
        }
    }

    /**
     *
     * @param {Object} delta
     * @param {String} delta.id
     * @param {String} delta.parentId
     */
    du_removeNode(delta) {
        let node = this.getElement(delta.id),
            reg, startTag;

        if (!node) { // could be a vtype: text
            node = this.getElementOrBody(delta.parentId);

            if (node) {
                startTag  = `<!-- ${delta.id} -->`;
                reg       = new RegExp(startTag + '[\\s\\S]*?<!-- \/neo-vtext -->');

                node.innerHTML = node.innerHTML.replace(reg, '');
            } else {
                // console.warn('du_removeNode: dom node not found for id', delta.id);
            }
        } else {
            node.parentNode.removeChild(node);
        }
    }

    /**
     *
     * @param {Object} delta
     * @param {String} delta.fromId
     * @param {String} delta.parentId
     * @param {String} delta.toId
     */
    du_replaceChild(delta) {
        let me   = this,
            node = me.getElement(delta.parentId);

        node.replaceChild(me.getElement(delta.toId), me.getElement(delta.fromId));
    }

    /**
     *
     * @param {Object} delta
     * @param {String} [delta.id]
     * @param {String} [delta.value
     */
    du_setTextContent(delta) {
        let me   = this,
            node = me.getElement(delta.id);

        node.textContent = delta.value;
    }

    /**
     *
     * @param {Object} delta
     * @param {Object} [delta.attributes]
     * @param {String} [delta.cls]
     * @param {String} [delta.id]
     * @param {String} [delta.innerHTML]
     * @param {String} [delta.outerHTML]
     * @param {Object} [delta.style]
     */
    du_updateNode(delta) {
        let node = this.getElementOrBody(delta.id);

        if (!node) {
            console.warn('du_updateNode: node not found for id', delta.id);
        } else {
            Object.entries(delta).forEach(([prop, value]) => {
                switch(prop) {
                    case 'attributes':
                        Object.entries(value).forEach(([key, val]) => {
                            if (this.voidAttributes.includes(key)) {
                                node[key] = val === 'true'; // vnode attribute values get converted into strings
                            } else if (val === null || val === '') {
                                if (key === 'value') {
                                    node[key] = ''; // input fields => pseudo attribute can not be removed
                                } else {
                                    node.removeAttribute(key);
                                }
                            } else if (key === 'id') {
                                node[Neo.config.useDomIds ? 'id' : 'data-neo-id'] = val;
                            }else if (key === 'spellcheck' && val === 'false') {
                                // see https://github.com/neomjs/neo/issues/1922
                                node[key] = false;
                            } else {
                                node[key] = val;
                            }
                        });
                        break;
                    case 'cls':
                        node.classList.add(...value.add || []);
                        node.classList.remove(...value.remove || []);
                        break;
                    case 'innerHTML':
                        node.innerHTML = value || '';
                        break;
                    case 'outerHTML':
                        node.outerHTML = value || '';
                        break;
                    case 'style':
                        if (Neo.isObject(value)) {
                            Object.entries(value).forEach(([key, val]) => {
                                if (Neo.isString(val) && val.includes('!important')) {
                                    val = val.replace('!important', '').trim();
                                    node.style.setProperty(Neo.decamel(key), val, 'important');
                                } else {
                                    node.style[Neo.decamel(key)] = val;
                                }
                            });
                        }
                        break;
                }
            });
        }
    }

    /**
     *
     * @param {Object} delta
     * @param {String} delta.id
     * @param {String} delta.parentId
     * @param {String} delta.value
     */
    du_updateVtext(delta) {
        let me        = this,
            node      = me.getElement(delta.parentId),
            innerHTML = node.innerHTML,
            startTag  = `<!-- ${delta.id} -->`,
            reg       = new RegExp(startTag + '[\\s\\S]*?<!-- \/neo-vtext -->');

        node.innerHTML = innerHTML.replace(reg, delta.value);
    }

    /**
     * @param {String} html representing a single element
     * @returns {ChildNode}
     */
    htmlStringToElement(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content;
    }

    /**
     *
     * @param {Object} data
     * @param {Object|Object[]} data.deltas
     * @param {String} data.id
     * @param {String} [data.origin='app']
     */
    update(data) {
        let me     = this,
            deltas = data.deltas,
            i      = 0,
            len;

        deltas = Array.isArray(deltas) ? deltas : [deltas];
        len    = deltas.length;

        if (Neo.config.logDeltaUpdates && len > 0) {
            me.countDeltas += len;
            me.countUpdates++;
            console.log('update ' + me.countUpdates, 'total deltas ', me.countDeltas, Neo.clone(data, true));
        }

        if (Neo.config.renderCountDeltas && len > 0) {
            me.countDeltasPer250ms += len;
        }

        const map = {
            focusNode     : me.du_focusNode,
            insertNode    : me.du_insertNode,
            moveNode      : me.du_moveNode,
            removeNode    : me.du_removeNode,
            replaceChild  : me.du_replaceChild,
            setTextContent: me.du_setTextContent,
            updateVtext   : me.du_updateVtext,
            default       : me.du_updateNode
        };

        for (; i < len; i++) {
            (map[deltas[i].action] || map['default']).call(me, deltas[i]);
        }

        Neo.worker.Manager.sendMessage(data.origin || 'app', {
            action : 'reply',
            replyId: data.id,
            success: true
        });
    }
}

Neo.applyClassConfig(DeltaUpdates);




/***/ }),

/***/ "./node_modules/neo.mjs/src/main/mixin/TouchDomEvents.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/mixin/TouchDomEvents.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TouchDomEvents)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Will get imported in case Neo.config.useTouchEvents === true
 * @class Neo.main.mixin.TouchDomEvents
 * @extends Neo.core.Base
 * @singleton
 */
class TouchDomEvents extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.mixin.TouchDomEvents'
         * @protected
         */
        className: 'Neo.main.mixin.TouchDomEvents'
    }}

    /**
     *
     * @param {Object} event
     */
    onTouchCancel(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onTouchEnd(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onTouchEnter(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onTouchLeave(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onTouchMove(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onTouchStart(event) {
        console.log('onTouchStart', event);
        this.sendMessageToApp(this.getEventData(event));
    }
}

Neo.applyClassConfig(TouchDomEvents);



/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Manager.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Manager.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/DomAccess.mjs */ "./node_modules/neo.mjs/src/main/DomAccess.mjs");
/* harmony import */ var _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/DomEvents.mjs */ "./node_modules/neo.mjs/src/main/DomEvents.mjs");
/* harmony import */ var _Message_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message.mjs */ "./node_modules/neo.mjs/src/worker/Message.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mixin/RemoteMethodAccess.mjs */ "./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs");







const NeoConfig = Neo.config,
      devMode   = NeoConfig.environment === 'development';

/**
 * The worker manager lives inside the main thread and creates the App, Data & VDom worker.
 * Also responsible for sending messages from the main thread to the different workers.
 * @class Neo.worker.Manager
 * @extends Neo.core.Base
 * @singleton
 */
class Manager extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.Manager'
         * @protected
         */
        className: 'Neo.worker.Manager',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {Number} activeWorkers=0
         * @protected
         */
        activeWorkers: 0,
        /**
         * @member {String[]} appNames=[]
         * @protected
         */
        appNames: [],
        /**
         * The base path for the worker file URLs, can e.g. get set inside the index.html.
         * @member {String|null} basePath=Neo.config.workerBasePath || 'worker/'
         * @protected
         */
        basePath: NeoConfig.workerBasePath || 'worker/',
        /**
         * @member {Number} constructedThreads=0
         * @protected
         */
        constructedThreads: 0,
        /**
         * @member {String[]|Neo.core.Base[]|null} mixins=[Observable, RemoteMethodAccess]
         */
        mixins: [_core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__.default, _mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_5__.default],
        /**
         * True in case the current browser supports window.SharedWorker.
         * @member {Boolean} sharedWorkersEnabled=false
         * @protected
         */
        sharedWorkersEnabled: false,
        /**
         * Internal flag to stop the worker communication in case their creation fails
         * @member {Boolean} stopCommunication=false
         * @protected
         */
        stopCommunication: false,
        /**
         * True in case the current browser supports window.Worker.
         * The neo.mjs framework is not able to run without web workers.
         * @member {Boolean} sharedWorkersEnabled=false
         * @protected
         */
        webWorkersEnabled: false,
        /**
         * Contains the fileNames for the App, Data & Vdom workers
         * @member {Object} workers
         * @protected
         */
        workers: {
            app: {
                fileName: devMode ? 'App.mjs'    : 'appworker.js'
            },
            canvas: {
                fileName: devMode ? 'Canvas.mjs' : 'canvasworker.js'
            },
            data: {
                fileName: devMode ? 'Data.mjs'   : 'dataworker.js'
            },
            vdom: {
                fileName: devMode ? 'VDom.mjs'   : 'vdomworker.js'
            }
        }
    }}

    /**
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.detectFeatures();

        if (!Neo.insideWorker) {
            me.createWorkers();
        }

        Neo.workerId = 'main';

        me.promises = {};

        me.on({
            'message:addDomListener'    : {fn: _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.addDomListener,       scope: _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default},
            'message:getOffscreenCanvas': {fn: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.onGetOffscreenCanvas, scope: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default},
            'message:readDom'           : {fn: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.onReadDom,            scope: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default},
            'message:registerRemote'    : {fn: me.onRegisterRemote,            scope: me},
            'message:workerConstructed' : {fn: me.onWorkerConstructed,         scope: me}
        });
    }

    /**
     * Sends a message to each worker defined inside the this.workers config.
     * @param {String} msg
     */
    broadcast(msg) {
        Object.keys(this.workers).forEach(name => {
            this.sendMessage(name, msg);
        });
    }

    /**
     * Creates a web worker using the passed options as well as adding error & message event listeners.
     * @param {Object} opts
     * @returns {SharedWorker|Worker}
     */
    createWorker(opts) {
        let me       = this,
            fileName = opts.fileName,
            filePath = (opts.basePath || me.basePath) + fileName,
            name     = `neomjs-${fileName.substring(0, fileName.indexOf('.')).toLowerCase()}-worker`,
            isShared = me.sharedWorkersEnabled && NeoConfig.useSharedWorkers,
            cls      = isShared ? SharedWorker : Worker,
            worker   = devMode  // todo: switch to the new syntax to create a worker from a JS module once browsers are ready
                ? new cls(filePath, {name: name, type: 'module'})
                : new cls(filePath, {name: name});

        (isShared ? worker.port : worker).onmessage = me.onWorkerMessage.bind(me);
        (isShared ? worker.port : worker).onerror   = me.onWorkerError  .bind(me);

        me.activeWorkers++;

        return worker;
    }

    /**
     * Calls createWorker for each worker inside the this.workers config.
     */
    createWorkers() {
        let me   = this,
            hash = location.hash,
            key, value;

        // pass the initial hash value as Neo.configs
        if (hash) {
            NeoConfig.hash = {
                hash      : _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.parseHash(hash.substr(1)),
                hashString: hash.substr(1)
            };
        }

        for ([key, value] of Object.entries(me.workers)) {
            if (key === 'canvas' && !NeoConfig.useCanvasWorker) {
                continue;
            }

            try {
                value.worker = me.createWorker(value);
            } catch (e) {
                document.body.innerHTML = e;
                me.stopCommunication = true;
                break;
            }

            me.sendMessage(key, {
                action: 'registerNeoConfig',
                data  : NeoConfig
            });
        }
    }

    /**
     *
     */
    detectFeatures() {
        let me = this;

        NeoConfig.hasTouchEvents = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

        if (window.Worker) {
            me.webWorkersEnabled = true;
        } else {
            throw new Error('Your browser does not support Web Workers');
        }

        if (window.SharedWorker) {
            me.sharedWorkersEnabled = true;
        }
    }

    /**
     * @param {String|Worker} name
     * @returns {Worker}
     */
    getWorker(name) {
        return name instanceof Worker ? name : this.workers[name].worker;
    }

    /**
     * @param {String} path
     */
    loadApplication(path) {
        this.sendMessage('app', {
            action       : 'loadApplication',
            path,
            resourcesPath: NeoConfig.resourcesPath
        });
    }

    /**
     * @param {Object} data
     */
    onWorkerConstructed(data) {
        let me = this;

        me.constructedThreads++;

        if (me.constructedThreads === me.activeWorkers) {
            NeoConfig.appPath && setTimeout(() => { // better save than sorry => all remotes need to be registered
                me.loadApplication(NeoConfig.appPath);
            }, 20);
        }
    }

    /**
     * Handler method for worker error events
     * @param {Object} e
     */
    onWorkerError(e) {
        // starting a worker from a JS module will show JS errors in a correct way
        !devMode && console.log('Worker Error:', e);
    }

    /**
     * Handler method for worker message events
     * @param {Object} e
     */
    onWorkerMessage(e) {
        let me           = this,
            data         = e.data,
            delayPromise = false,
            transfer     = null,
            promise;

        const {action, destination: dest, replyId} = data;

        // console.log('Main: Incoming Worker message: ' + data.origin + ':' + action, data);

        me.fire('message:'+action, data);

        if (promise = action === 'reply' && me.promises[replyId]) {
            if (data.destination === 'main') {
                data = data.data;
            }

            if (data.reject) {
                promise.reject(data);
            } else {
                if (data.data) {
                    if (data.data.autoMount) {
                        me.fire('automount', data);
                        delayPromise = true;
                    }
                    if (data.data.updateVdom) {
                        me.fire('updateVdom', data);
                        delayPromise = true;
                    }
                }

                if (!delayPromise) {
                    promise.resolve(data);
                } else {
                    me.promises[replyId].data = data;
                }
            }

            if (!delayPromise) {
                delete me.promises[replyId];
            }
        }

        if (dest !== 'main' && action !== 'reply') {
            if (data.transfer) {
                transfer = [data.transfer];
            }

            me.promiseMessage(dest, data, transfer).then(response => {
                me.sendMessage(response.destination, response);
            }).catch(err => {
                me.sendMessage(data.origin, {
                    action : 'reply',
                    reject : true,
                    replyId: data.id,
                    error  : err.message
                });
            });
        }

        // only needed for SharedWorkers
        else if (dest === 'main' && action === 'registerAppName') {
            me.appNames.push(data.appName);
        }

        else if (dest === 'main' && action === 'remoteMethod') {
            me.onRemoteMethod(data);
        }
    }

    /**
     * @param {String} dest app, data or vdom
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Promise<any>}
     */
    promiseMessage(dest, opts, transfer) {
        let me = this;

        return new Promise((resolve, reject) => {
            let message = me.sendMessage(dest, opts, transfer),
                msgId   = message.id;

            me.promises[msgId] = {
                reject,
                resolve
            };
        });
    }

    /**
     * @param {String} replyId
     */
    resolveDomOperationPromise(replyId) {
        if (replyId) {
            let promise = this.promises[replyId];

            if (promise) {
                promise.resolve(promise.data);
                delete this.promises[replyId];
            }
        }
    }

    /**
     * @param {String} dest app, data or vdom
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Neo.worker.Message}
     * @protected
     */
    sendMessage(dest, opts, transfer) {
        let me = this,
            message, worker;

        if (!me.stopCommunication) {
            worker = me.getWorker(dest);

            if (!worker) {
                throw new Error('Called sendMessage for a worker that does not exist: ' + dest);
            }

            opts.destination = dest;

            message = new _Message_mjs__WEBPACK_IMPORTED_MODULE_3__.default(opts);

            (me.sharedWorkersEnabled && NeoConfig.useSharedWorkers ? worker.port : worker).postMessage(message, transfer);
            return message;
        }
    }
}

Neo.applyClassConfig(Manager);

let instance = Neo.create(Manager);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Message.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Message.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");


/**
 * A wrapper for worker post messages sent between the App, Data, VDom worker & the main thread.
 * You can add optional params as needed.
 * @class Neo.worker.Message
 */
class Message {
    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        /**
         * @member {String} action
         */

        /**
         * @member {String} destination='main'
         */

        /**
         * @member {String} id=IdGenerator.getId(Neo.workerId)
         */

        /**
         * @member {String} origin=Neo.workerId
         */

        config.destination = config.destination || 'main';
        config.id          = config.id          || _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__.default.getId(Neo.workerId);
        config.origin      = config.origin      || Neo.workerId;

        Object.assign(this, config);
    }
}

const ns = Neo.ns('Neo.worker', true);
ns['Message'] = Message;




/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemoteMethodAccess)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.worker.mixin.RemoteMethodAccess
 * @extends Neo.core.Base
 */
class RemoteMethodAccess extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.mixin.RemoteMethodAccess'
         * @protected
         */
        className: 'Neo.worker.mixin.RemoteMethodAccess',
        /**
         * @member {Boolean} mixin=true
         * @protected
         */
        mixin: true
    }}

    /**
     *
     * @param {Object} remote
     * @param method
     * @returns {function(*=, *=): Promise<any>}
     */
    generateRemote(remote, method) {
        let me     = this,
            origin = remote.origin;

        return function(data, buffer) {
            let opts = {
                action         : 'remoteMethod',
                data,
                destination    : origin,
                remoteClassName: remote.className,
                remoteMethod   : method
            };

            if (me.isSharedWorker) {
                opts.appName = opts.appName || data?.appName;
                opts.port    = opts.port    || data?.port;
            }

            return me.promiseMessage(origin, opts, buffer);
        };
    }

    /**
     *
     * @param {Object} remote
     */
    onRegisterRemote(remote) {
        if (remote.destination === Neo.workerId) {
            let me        = this,
                className = remote.className,
                exists    = false,
                methods   = remote.methods,
                pkg       = Neo.ns(className, true);

            methods.forEach(function(method) {
                if (remote.origin !== 'main' && pkg[method]) {
                    throw new Error('Duplicate remote method definition ' + className + '.' + method);
                }

                if (!pkg[method] ) {
                    pkg[method] = me.generateRemote(remote, method);
                } else {
                    exists = true;
                }
            });

            // todo: inspect if this can get removed
            if (!exists && Neo.workerId !== 'main') {
                me.fire('remoteregistered', remote);
            }
        }
    }

    /**
     *
     * @param {Object} msg
     */
    onRemoteMethod(msg) {
        let me  = this,
            pkg = Neo.ns(msg.remoteClassName),
            out, method;

        if (!pkg) {
            throw new Error('Invalid remote namespace "' + msg.remoteClassName + '"');
        }

        method = pkg[msg.remoteMethod];

        if (!method) {
            throw new Error('Invalid remote method name "' + msg.remoteMethod + '"');
        }

        if (Array.isArray(msg.data)) {
            out = method.call(pkg, ...msg.data);
        } else {
            out = method.call(pkg, msg.data);
        }

        if (out instanceof Promise) {
            out.then(data => {
                me.resolve(msg, data);
            })
            .catch(err => {
                me.reject(msg, err);
            });
        } else {
            me.resolve(msg, out);
        }
    }

    /**
     * Gets called when promiseMessage gets rejected
     * @param {Object} msg
     * @param {Object} data
     */
    reject(msg, data) {
        let opts = {
            action : 'reply',
            data,
            reject : true,
            replyId: msg.id
        };

        if (this.isSharedWorker) {
            opts.appName = msg.appName;
            opts.port    = msg.port;
        }

        this.sendMessage(msg.origin, opts);
    }

    /**
     * Gets called when promiseMessage gets resolved
     * @param {Object} msg
     * @param {Object} data
     */
    resolve(msg, data) {
        let opts = {
            action : 'reply',
            data,
            replyId: msg.id
        };

        if (this.isSharedWorker) {
            opts.appName = msg.appName;
            opts.port    = msg.port;
        }

        this.sendMessage(msg.origin, opts);
    }
}

Neo.applyClassConfig(RemoteMethodAccess);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "chunks/main/" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "neo-offscreen-canvas-demo:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkneo_offscreen_canvas_demo"] = self["webpackChunkneo_offscreen_canvas_demo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./node_modules/neo.mjs/src/Main.mjs ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Neo.mjs */ "./node_modules/neo.mjs/src/Neo.mjs");
/* harmony import */ var _core_export_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/_export.mjs */ "./node_modules/neo.mjs/src/core/_export.mjs");
/* harmony import */ var _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/DomAccess.mjs */ "./node_modules/neo.mjs/src/main/DomAccess.mjs");
/* harmony import */ var _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/DomEvents.mjs */ "./node_modules/neo.mjs/src/main/DomEvents.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./worker/Manager.mjs */ "./node_modules/neo.mjs/src/worker/Manager.mjs");







/**
 * @class Neo.Main
 * @extends Neo.core.Base
 * @singleton
 */
class Main extends _core_export_mjs__WEBPACK_IMPORTED_MODULE_1__.Base {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.Main'
         * @protected
         */
        className: 'Neo.Main',
        /**
         * @member {String} mode='read'
         * @protected
         */
        mode: 'read',
        /**
         * @member {Object} openWindows={}
         * @protected
         */
        openWindows: {},
        /**
         * @member {Array} readQueue=[]
         * @protected
         */
        readQueue: [],
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: [//...]}
         * @protected
         */
        remote: {
            app: [
                'alert',
                'editRoute',
                'getWindowData',
                'setNeoConfig',
                'setRoute',
                'windowClose',
                'windowMoveTo',
                'windowOpen',
                'windowResizeTo'
            ]
        },
        /**
         * @member {Boolean} running=false
         * @protected
         */
        running: false,
        /**
         * @member {Boolean} showFps=false
         */
        showFps: false,
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {Number} timeLimit=15
         */
        timeLimit: 15,
        /**
         * should be dev only
         * @member {Number} totalFrameCount=0
         * @protected
         */
        totalFrameCount: 0,
        /**
         * @member {Array} updateQueue=[]
         * @protected
         */
        updateQueue: [],
        /**
         * @member {Array} writeQueue=[]
         * @protected
         */
        writeQueue: []
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__.default.config.environment === 'development' && typeof window.webkitConvertPointFromNodeToPage === 'function') {
            document.body.innerHTML = [
                'Please use Chrome for the development mode.</br>',
                'For details, see the open Ticket: ',
                '<a style="color:red;" href="https://github.com/neomjs/neo/issues/191">Safari: Worker should support ES6 modules</a>'
            ].join('');
        }

        super(config);

        let me = this;

        _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__.default.on({
            'automount'        : me.onRender,
            'message:mountDom' : me.onMountDom,
            'message:updateDom': me.onUpdateDom,
            'updateVdom'       : me.onUpdateVdom,
            scope              : me
        });

        _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__.default.on('domContentLoaded', me.onDomContentLoaded, me);

        if (document.readyState !== 'loading') {
            _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__.default.onDomContentLoaded();
        }
    }

    /**
     * Workers can not trigger alert(), so we need remote method access.
     * @param {String} value
     */
    alert(value) {
        alert(value);
    }

    /**
     * Edit the location.hash value
     * A value of null will remove the given key.
     * @param {Object} data
     */
    editRoute(data) {
        let hashObj = _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__.default.parseHash(window.location.hash.substr(1)),
            hashArr = [];

        if (typeof data === 'string') {
            data = _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__.default.parseHash(data);
        }

        Object.assign(hashObj, data);

        Object.entries(hashObj).forEach(([key, value]) => {
            if (value !== null) {
                hashArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
            }
        });

        window.location.hash = hashArr.join('&');
    }

    /**
     * window.screen is not spreadable
     * @returns {Object}
     */
    getWindowData() {
        const win    = window,
              screen = win.screen;

        return {
            innerHeight: win.innerHeight,
            innerWidth : win.innerWidth,
            outerHeight: win.outerHeight,
            outerWidth : win.outerWidth,
            screen: {
                availHeight: screen.availHeight,
                availLeft  : screen.availLeft,
                availTop   : screen.availTop,
                availWidth : screen.availWidth,
                colorDepth : screen.colorDepth,
                height     : screen.height,
                orientation: {angle: screen.orientation.angle, type: screen.orientation.type},
                pixelDepth : screen.pixelDepth,
                width      : screen.width
            },
            screenLeft: win.screenLeft,
            screenTop : win.screenTop,
        };
    }

    // todo: https://developer.mozilla.org/en-US/docs/Web/Events/resize
    globalResizeListener(event) {
        console.log('globalResizeListener', event);
    }

    /**
     *
     */
    async onDomContentLoaded() {
        let me      = this,
            config  = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__.default.config,
            imports = [];

        _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_2__.default.onDomContentLoaded();

        // not in use right now
        // window.addEventListener('resize', me.globalResizeListener.bind(me));

        // we need different publicPath values for the main thread inside the webpack based dist envs,
        // depending on the hierarchy level of the app entry point
        if (config.environment !== 'development') {
            __webpack_require__.p = config.basePath.substring(6);
        }

        config.mainThreadAddons.forEach(addon => {
            if (addon !== 'AnalyticsByGoogle') {
                imports.push(__webpack_require__("./node_modules/neo.mjs/src/main/addon lazy recursive ^\\.\\/.*\\.mjs$")(`./${addon}.mjs`));
            }
        });

        // intended for the online examples where we need an easy way to add GA to every generated app
        if (config.useGoogleAnalytics || config.mainThreadAddons.includes('AnalyticsByGoogle')) {
            imports.push(__webpack_require__.e(/*! import() */ "node_modules_neo_mjs_src_main_addon_AnalyticsByGoogle_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./main/addon/AnalyticsByGoogle.mjs */ "./node_modules/neo.mjs/src/main/addon/AnalyticsByGoogle.mjs")));
        }

        const modules = await Promise.all(imports);

        me.addon = {};

        modules.forEach(module => {
            me.addon[module.default.constructor.name] = module.default;
        });

        _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__.default.onWorkerConstructed({
            origin: 'main'
        });
    }

    /**
     *
     * @param data
     */
    onMountDom(data) {
        this.queueWrite(data);

        _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__.default.sendMessage(data.origin || 'app', {
            action : 'reply',
            replyId: data.id,
            success: true
        });
    }

    /**
     *
     * @param data
     */
    onRender(data) {
        data.data.replyId = data.replyId;
        this.queueWrite(data.data);
    }

    /**
     *
     * @param data
     */
    onUpdateDom(data) {
        this.queueUpdate(data);
    }

    /**
     *
     * @param data
     */
    onUpdateVdom(data) {
        data.data.replyId = data.replyId;
        this.queueUpdate(data.data);
    }

    /**
     *
     * @param {Object[]} queue
     * @param {Date} start
     * @returns {Number}
     * @protected
     */
    processQueue(queue, start) {
        let me    = this,
            limit = me.timeLimit,
            operation;

        while (operation = queue.shift()) {
            if (new Date() - start > limit) {
                queue.unshift(operation);
                return requestAnimationFrame(me.renderFrame.bind(me));
            } else {
                _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_2__.default[me.mode](operation);
                _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__.default.resolveDomOperationPromise(operation.replyId);
            }
        }
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    queueRead(data) {
        let me = this;
        me.readQueue.push(data);

        if (!me.running) {
            me.running = true;
            requestAnimationFrame(me.renderFrame.bind(me));
        }
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    queueUpdate(data) {
        let me = this;
        me.updateQueue.push(data);

        if (!me.running) {
            me.running = true;
            requestAnimationFrame(me.renderFrame.bind(me));
        }
    }

    /**
     *
     * @param data
     * @protected
     */
    queueWrite(data) {
        let me = this;
        me.writeQueue.push(data);

        if (!me.running) {
            me.running = true;
            requestAnimationFrame(me.renderFrame.bind(me));
        }
    }

    /**
     * Triggers the different DOM operation queues
     * @protected
     */
    renderFrame() {
        let me      = this,
            read    = me.readQueue,
            update  = me.updateQueue,
            write   = me.writeQueue,
            reading = me.mode === 'read',
            start   = new Date();

        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__.default.config.logDeltaUpdates) {
            me.totalFrameCount++;
            console.log('Total Frames: ' + me.totalFrameCount);
        }

        if (reading || !write.length) {
            me.mode = 'read';
            if (me.processQueue(read, start)) {
                return;
            }
        }

        if (update.length) {
            me.mode = 'update';
            if (me.processQueue(update, start)) {
                return;
            }
        }

        if (write.length) {
            me.mode = 'write';
            if (me.processQueue(write, start)) {
                return;
            }
        }

        me.running = false;
    }

    /**
     * Change the location.hash value
     * @param {Object} data
     * @param {String} data.value
     */
    setRoute(data) {
        window.location.hash = data.value;
    }

    /**
     * Change the location.hash value
     * @param {Object} data
     * @param {String} data.key
     * @param {*} data.value
     */
    setNeoConfig(data) {
        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__.default.config[data.key] = data.value;
    }

    /**
     * Closes popup windows
     * @param {Object} data
     * @param {Array|String} data.names
     */
    windowClose(data) {
        if (!Array.isArray(data.names)) {
            data.names = [data.names];
        }

        data.names.forEach(name => {
            this.openWindows[name].close();
            delete this.openWindows[name];
        })
    }

    /**
     * Move a popup window
     * @param {Object} data
     * @param {String} data.windowName
     * @param {String} data.x
     * @param {String} data.y
     */
    windowMoveTo(data) {
        this.openWindows[data.windowName].moveTo(data.x, data.y);
    }

    /**
     * Open a new popup window
     * @param {Object} data
     * @param {String} data.url
     * @param {String} data.windowFeatures
     * @param {String} data.windowName
     */
    windowOpen(data) {
        this.openWindows[data.windowName] = window.open(data.url, data.windowName, data.windowFeatures);
    }

    /**
     * Move a popup window
     * @param {Object} data
     * @param {Number} [data.height]
     * @param {Number} [data.width]
     * @param {String} data.windowName
     */
    windowResizeTo(data) {
        let win    = this.openWindows[data.windowName],
            height = data.height || win.outerHeight,
            width  = data.width  || win.outerWidth;

        win.resizeTo(width, height);
    }
}

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__.default.applyClassConfig(Main);

let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__.default.create(Main);

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__.default.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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bUZBQXdDO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG9FQUEwQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLEdBQUc7QUFDbEI7QUFDQTtBQUNBLFFBQVEsb0RBQVU7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOERBQW9COztBQUVwQixlQUFlLG9EQUFVOztBQUV6Qiw2REFBbUI7O0FBRW5CLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbnxsYXp5fC9eXFwuXFwvLipcXC5tanMkL3xncm91cE9wdGlvbnM6IHt9fHN0cmljdCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvRGVmYXVsdENvbmZpZy5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9OZW8ubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9CYXNlLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvQ29tcGFyZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0lkR2VuZXJhdG9yLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvTG9nZ2VyLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvT2JzZXJ2YWJsZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL1V0aWwubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9fZXhwb3J0Lm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vRG9tQWNjZXNzLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vRG9tRXZlbnRzLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vbWl4aW4vRGVsdGFVcGRhdGVzLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vbWl4aW4vVG91Y2hEb21FdmVudHMubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL01hbmFnZXIubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL01lc3NhZ2UubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL21peGluL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvTWFpbi5tanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL0FtQ2hhcnRzLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0FtQ2hhcnRzLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fQW1DaGFydHNfbWpzXCJcblx0XSxcblx0XCIuL0FuYWx5dGljc0J5R29vZ2xlLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0FuYWx5dGljc0J5R29vZ2xlLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fQW5hbHl0aWNzQnlHb29nbGVfbWpzXCJcblx0XSxcblx0XCIuL0Nsb25lTm9kZS5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9DbG9uZU5vZGUubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9DbG9uZU5vZGVfbWpzXCJcblx0XSxcblx0XCIuL0Nvb2tpZS5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9Db29raWUubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9Db29raWVfbWpzXCJcblx0XSxcblx0XCIuL0RyYWdEcm9wLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0RyYWdEcm9wLm1qc1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9EcmFnRHJvcF9tanNcIlxuXHRdLFxuXHRcIi4vSGlnaGxpZ2h0SlMubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vSGlnaGxpZ2h0SlMubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0hpZ2hsaWdodEpTX21qc1wiXG5cdF0sXG5cdFwiLi9Mb2NhbFN0b3JhZ2UubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vTG9jYWxTdG9yYWdlLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fTG9jYWxTdG9yYWdlX21qc1wiXG5cdF0sXG5cdFwiLi9NYXBib3hHTC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9NYXBib3hHTC5tanNcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fTWFwYm94R0xfbWpzXCJcblx0XSxcblx0XCIuL01hcmtkb3duLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL01hcmtkb3duLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fTWFya2Rvd25fbWpzXCJcblx0XSxcblx0XCIuL1NpZXN0YS5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9TaWVzdGEubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9TaWVzdGFfbWpzXCJcblx0XSxcblx0XCIuL1N0eWxlc2hlZXQubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vU3R5bGVzaGVldC5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX1N0eWxlc2hlZXRfbWpzXCJcblx0XSxcblx0XCIuL1dpbmRvd1Bvc2l0aW9uLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL1dpbmRvd1Bvc2l0aW9uLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fV2luZG93UG9zaXRpb25fbWpzXCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKCgpID0+IHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbiBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5tanMkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiY29uc3QgTmVvID0gc2VsZi5OZW8gfHwge307XG5cbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xuXG4vKipcbiAqIENvbmZpZyBvYmplY3QgZm9yIHRoZSBuZW8ubWpzIGZyYW1ld29yayB3aGljaCB3aWxsIGdldCBwYXNzZWQgdG8gYWxsIHdvcmtlcnNcbiAqIFlvdSBjYW4gY2hhbmdlIHRoZSBjb25maWdzLCBlLmcuIGluc2lkZSB0aGUgaW5kZXguaHRtbCBvZiB5b3VyIGFwcFxuICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAqIEBuYW1lIGNvbmZpZ1xuICogQHR5cGUgT2JqZWN0XG4gKi9cbmNvbnN0IERlZmF1bHRDb25maWcgPSB7XG4gICAgLyoqXG4gICAgICogdHJ1ZSB3aWxsIGFwcGx5ICduZW8tYm9keScgdG8gdGhlIGRvY3VtZW50LmJvZHkgY2xhc3NMaXN0XG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5hcHBseUJvZHlDbHNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgYXBwbHlCb2R5Q2xzOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIFBhdGggdG8geW91ciBhcHAubWpzIGZpbGUuIFlvdSBjYW4gY3JlYXRlIG11bHRpcGxlIGFwcHMgdGhlcmUgaWYgbmVlZGVkLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuYXBwUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ3xudWxsXG4gICAgICovXG4gICAgYXBwUGF0aDogbnVsbCxcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHRoZSBuZW8ubWpzIGRpcmVjdG9yeVxuICAgICAqIEBkZWZhdWx0ICcuLydcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuYmFzZVBhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICBiYXNlUGF0aDogJy4vJyxcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBlbnZpcm9ubWVudC4gVmFsaWQgdmFsdWVzOiAnZGV2ZWxvcG1lbnQnLCAnZGlzdC9kZXZlbG9wbWVudCcsICdkaXN0L3Byb2R1Y3Rpb24nXG4gICAgICogVGhpcyBjb25maWcgd2lsbCBnZXQgYXV0by1nZW5lcmF0ZWRcbiAgICAgKiBAZGVmYXVsdCAnZGlzdC9wcm9kdWN0aW9uJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5lbnZpcm9ubWVudFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGVudmlyb25tZW50OiAnZGlzdC9wcm9kdWN0aW9uJyxcbiAgICAvKipcbiAgICAgKiBJbiBjYXNlIHlvdSBhcmUgdXNpbmcgdGhlIEdvb2dsZUFuYWx5dGljcyBtYWluVGhyZWFkQWRkb24gb3IgdXNlR29vZ2xlQW5hbHl0aWNzOiB0cnVlLFxuICAgICAqIHlvdSBjYW4gY2hhbmdlIHRoZSBndGFnIGlkIGhlcmUuIFJlcXVpcmVkIGZvciB0aGUgb25saW5lIGV4YW1wbGVzIChnaCBwYWdlcylcbiAgICAgKiBAZGVmYXVsdCAnVUEtMTUzNzM0NDA0LTEnXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmd0YWdJZFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGd0YWdJZDogJ1VBLTE1MzczNDQwNC0xJyxcbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciBydW5uaW5nIG9uIGh0dHBzOi8vbmVvbWpzLmdpdGh1Yi5pby9wYWdlcy9cbiAgICAgKiA9PiB0byB1c2UgbG9jYWwgaW1hZ2VzIHBhdGhzIGluc3RlYWQgb2YgcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmlzR2l0SHViUGFnZXNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgaXNHaXRIdWJQYWdlczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogRmxhZyBmb3IgcnVubmluZyB0aGUgTmVvIG1haW4gdGhyZWFkIGluc2lkZSBhbiBpZnJhbWUgKFNpZXN0YSBCcm93c2VyIEhhcm5lc3MpXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuaXNJbnNpZGVTaWVzdGFcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgaXNJbnNpZGVTaWVzdGE6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIFVzZWQgYnkgSW50bC5EYXRlVGltZUZvcm1hdCwgZm9yIGRldGFpbHMgdGFrZSBhIGxvb2sgYXQ6XG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICAgKiBAZGVmYXVsdCAnZGVmYXVsdCdcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubG9jYWxlXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgbG9jYWxlOiAnZGVmYXVsdCcsXG4gICAgLyoqXG4gICAgICogdHJ1ZSB3aWxsIGxvZyB0aGUgZGVsdGEgdXBkYXRlcyBpbnNpZGUgdGhlIG1haW4gdGhyZWFkKHMpIGFzIHdlbGwgYXMgdGhlIHJlcXVlc3RBbmltYXRpb24gZnJhbWVzXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubG9nRGVsdGFVcGRhdGVzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGxvZ0RlbHRhVXBkYXRlczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQWRkIGFkZG9ucyBmb3IgdGhlIG1haW4gdGhyZWFkXG4gICAgICogUG9zc2libGUgdmFsdWVzOiBBbUNoYXJ0cywgQW5hbHl0aWNzQnlHb29nbGUsIERyYWdEcm9wLCBIaWdobGlnaHRKUywgTG9jYWxTdG9yYWdlLCBNYXBib3hHTCwgTWFya2Rvd24sIFNpZXN0YSwgU3R5bGVzaGVldCwgV2luZG93UG9zaXRpb25cbiAgICAgKiAoc3JjL21haW4vYWRkb24pXG4gICAgICogQGRlZmF1bHQgWydEcmFnRHJvcCcsJ1N0eWxlc2hlZXQnXVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5tYWluVGhyZWFkQWRkb25zXG4gICAgICogQHR5cGUgU3RyaW5nW11cbiAgICAgKi9cbiAgICBtYWluVGhyZWFkQWRkb25zOiBbJ0RyYWdEcm9wJywgJ1N0eWxlc2hlZXQnXSxcbiAgICAvKipcbiAgICAgKiBZb3UgY2FuIHZpc3VhbGx5IHNob3cgdGhlIGFtb3VudCBvZiBkZWx0YSB1cGRhdGVzIHBlciBzZWNvbmQgdXNpbmcgdGhpcyBjb25maWcuXG4gICAgICogSXQgZXhwZWN0cyBhIGRvbSBub2RlIHdpdGggdGhlIGlkIFwibmVvLWRlbHRhLXVwZGF0ZXNcIiBhcyB0aGUgcmVuZGVyaW5nIHRhcmdldC5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5yZW5kZXJDb3VudERlbHRhc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICByZW5kZXJDb3VudERlbHRhczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQWRkIHRoZW1lcyB5b3Ugd2FudCB0byB1c2UgaGVyZS4gVGhlIGZpcnN0IHRoZW1lIHdpbGwgZ2V0IGFwcGxpZWQuXG4gICAgICogSWYgY29uZmlnLnVzZUNzc1ZhcnMgPT09IHRydWUsIG90aGVyIHRoZW1lIHZhcmlhYmxlcyB3aWxsIGdldCBpbmNsdWRlZCBhcyB3ZWxsXG4gICAgICogQGRlZmF1bHQgWyduZW8tdGhlbWUtbGlnaHQnLCAnbmVvLXRoZW1lLWRhcmsnXVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy50aGVtZXNcbiAgICAgKiBAdHlwZSBTdHJpbmdbXVxuICAgICAqL1xuICAgIHRoZW1lczogWyduZW8tdGhlbWUtbGlnaHQnLCAnbmVvLXRoZW1lLWRhcmsnXSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciBzdGFuZGFsb25lIFNpZXN0YSBtb2R1bGUgdGVzdHMgPT4gcHJldmVudCByZWdpc3RlclJlbW90ZSB3b3JrZXIgbWVzc2FnZXNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51bml0VGVzdE1vZGVcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdW5pdFRlc3RNb2RlOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGlmIENTUyB2YXJpYWJsZSBiYXNlZCBzdHlsZXNoZWV0cyBhcmUgaW4gdXNlIChpbXBvcnRhbnQgZm9yIHN3aXRjaGluZyB0aGVtZXMpXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VDc3NWYXJzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUNzc1ZhcnM6IHRydWUsXG4gICAgLyoqXG4gICAgICogRXhwZXJpbWVudGFsIGZsYWcgaWYgYW4gb2Zmc2NyZWVuIGNhbnZhcyB3b3JrZXIgc2hvdWxkIGdldCBjcmVhdGVkLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUNzc1ZhcnNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlQ2FudmFzV29ya2VyOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGlmIHZkb20gaWRzIHNob3VsZCBnZXQgbWFwcGVkIGludG8gRE9NIGVsZW1lbnQgaWRzLlxuICAgICAqIGZhbHNlIHdpbGwgY29udmVydCB0aGVtIGludG8gYSBcImRhdGEtbmVvLWlkXCIgYXR0cmlidXRlLlxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlRG9tSWRzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZURvbUlkczogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBUcnVlIHdpbGwgYXV0b21hdGljYWxseSBpbmNsdWRlIHRoZSBzdHlsZXNoZWV0XG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VGb250QXdlc29tZVxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VGb250QXdlc29tZTogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBJbnRlbmRlZCBmb3IgdGhlIG9ubGluZSBleGFtcGxlcyB3aGVyZSB3ZSBuZWVkIGFuIGVhc3kgd2F5IHRvIGFkZCBHQSB0byBldmVyeSBnZW5lcmF0ZWQgYXBwXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlR29vZ2xlQW5hbHl0aWNzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUdvb2dsZUFuYWx5dGljczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBBcHAsIERhdGEgJiBWRG9tIGFzIFNoYXJlZFdvcmtlcnMuXG4gICAgICogU2V0IHRoaXMgb25lIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBjb25uZWN0IG11bHRpcGxlIG1haW4gdGhyZWFkcy5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VTaGFyZWRXb3JrZXJzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZVNoYXJlZFdvcmtlcnM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEFkZHMgZ2xvYmFsIGRvbSBldmVudCBsaXN0ZW5lcnMgZm9yIG1vYmlsZSByZWxhdGVkIGV2ZW50cyBsaWtlIHJvdGF0ZSwgc3dpcGUsIHRhcFxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlVG91Y2hFdmVudHNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlVG91Y2hFdmVudHM6IHRydWVcbn07XG5cbk9iamVjdC5hc3NpZ24oRGVmYXVsdENvbmZpZywge1xuICAgIC8qKlxuICAgICAqIFBhdGggdG8gdGhlIHRvcCBsZXZlbCBuZW8ubWpzIHJlc291cmNlcyBmb2xkZXJcbiAgICAgKiBAZGVmYXVsdCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ3Jlc291cmNlcy8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnJlc291cmNlc1BhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICByZXNvdXJjZXNQYXRoOiBgJHtOZW8uY29uZmlnLmJhc2VQYXRoIHx8IERlZmF1bHRDb25maWcuYmFzZVBhdGh9cmVzb3VyY2VzL2AsXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgYmFzZSBVUkwgZm9yIHdlYiB3b3JrZXIgZW50cnkgcG9pbnRzIChBcHAsIERhdGEsIFZkb20pXG4gICAgICogQGRlZmF1bHQgTmVvLmNvbmZpZy5iYXNlUGF0aCArICdzcmMvd29ya2VyLydcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcud29ya2VyQmFzZVBhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICB3b3JrZXJCYXNlUGF0aDogYCR7TmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRofXNyYy93b3JrZXIvYCxcbn0pO1xuXG5leHBvcnQge0RlZmF1bHRDb25maWcgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgRGVmYXVsdENvbmZpZyBmcm9tICcuL0RlZmF1bHRDb25maWcubWpzJztcblxuY29uc3QgY29uZmlnU3ltYm9sID0gU3ltYm9sLmZvcignY29uZmlnU3ltYm9sJyksXG4gICAgICBnZXRTZXRDYWNoZSAgPSBTeW1ib2woJ2dldFNldENhY2hlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgbW9kdWxlIHRvIGVuaGFuY2UgY2xhc3NlcywgY3JlYXRlIGluc3RhbmNlcyBhbmQgdGhlIE5lbyBuYW1lc3BhY2VcbiAqIEBtb2R1bGUgTmVvXG4gKiBAc2luZ2xldG9uXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmJpbmRNZXRob2RzICAgICAgIGFzIGJpbmRNZXRob2RzXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNhcGl0YWxpemUgICAgICAgIGFzIGNhcGl0YWxpemVcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVPYmplY3QgYXMgY3JlYXRlU3R5bGVPYmplY3RcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVzICAgICAgYXMgY3JlYXRlU3R5bGVzXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmRlY2FtZWwgICAgICAgICAgIGFzIGRlY2FtZWxcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNBcnJheSAgICAgICAgICAgYXMgaXNBcnJheVxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0Jvb2xlYW4gICAgICAgICBhcyBpc0Jvb2xlYW5cbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNEZWZpbmVkICAgICAgICAgYXMgaXNEZWZpbmVkXG4gKiBAYm9ycm93cyBOZW8uY29yZS5Db21wYXJlLmlzRXF1YWwgICAgICAgIGFzIGlzRXF1YWxcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNOdW1iZXIgICAgICAgICAgYXMgaXNOdW1iZXJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgICAgICAgICAgYXMgaXNPYmplY3RcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNTdHJpbmcgICAgICAgICAgYXMgaXNTdHJpbmdcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwudG9BcnJheSAgICAgICAgICAgYXMgdG9BcnJheVxuICogQHR1dG9yaWFsIDAxX0NvbmNlcHRcbiAqL1xubGV0IE5lbyA9IHNlbGYuTmVvIHx8IHt9O1xuXG5OZW8gPSBzZWxmLk5lbyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIC8qKlxuICAgICAqIEEgbWFwIGNvbnRhaW5pbmcgbnR5cGVzIGFzIGtleSBhbmQgTmVvIGNsYXNzZXMgb3Igc2luZ2xldG9ucyBhcyB2YWx1ZXNcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUgT2JqZWN0XG4gICAgICovXG4gICAgbnR5cGVNYXA6IHt9LFxuICAgIC8qKlxuICAgICAqIE5lZWRlZCBmb3IgTmVvLmNyZWF0ZS4gRmFsc2UgZm9yIHRoZSBtYWluIHRocmVhZCwgdHJ1ZSBmb3IgdGhlIEFwcCwgRGF0YSAmIFZkb20gd29ya2VyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBpbnNpZGVXb3JrZXI6IHR5cGVvZiBEZWRpY2F0ZWRXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyxcblxuICAgIC8qKlxuICAgICAqIEludGVybmFsbHkgdXNlZCBhdCB0aGUgZW5kIG9mIGVhY2ggY2xhc3MgLyBtb2R1bGUgZGVmaW5pdGlvblxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHMgVGhlIE5lbyBjbGFzcyB0byBhcHBseSBjb25maWdzIHRvXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGFwcGx5Q2xhc3NDb25maWcoY2xzKSB7XG4gICAgICAgIGxldCBiYXNlQ2ZnICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgIGJhc2VTdGF0aWNDZmcgPSBudWxsLFxuICAgICAgICAgICAgcHJvdG8gICAgICAgICA9IGNscy5wcm90b3R5cGUgfHwgY2xzLFxuICAgICAgICAgICAgcHJvdG9zICAgICAgICA9IFtdLFxuICAgICAgICAgICAgY29uZmlnLCBjdG9yLCBzdGF0aWNDb25maWc7XG5cbiAgICAgICAgd2hpbGUgKHByb3RvLl9fcHJvdG9fXykge1xuICAgICAgICAgICAgY3RvciA9IHByb3RvLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgICAgICBpZiAoY3Rvci5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NDb25maWdBcHBsaWVkJykpIHtcbiAgICAgICAgICAgICAgICBiYXNlQ2ZnICAgICAgID0gTmVvLmNsb25lKGN0b3IuY29uZmlnLCAgICAgICB0cnVlKTtcbiAgICAgICAgICAgICAgICBiYXNlU3RhdGljQ2ZnID0gTmVvLmNsb25lKGN0b3Iuc3RhdGljQ29uZmlnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvdG9zLnVuc2hpZnQocHJvdG8pO1xuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcgICAgICAgPSBiYXNlQ2ZnICAgICAgIHx8IHt9O1xuICAgICAgICBzdGF0aWNDb25maWcgPSBiYXNlU3RhdGljQ2ZnIHx8IHt9O1xuXG4gICAgICAgIHByb3Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY3RvciA9IGVsZW1lbnQuY29uc3RydWN0b3I7XG4gICAgICAgICAgICBsZXQgY2ZnICAgICAgID0gY3Rvci5nZXRDb25maWcgICAgICA/LigpIHx8IHt9LFxuICAgICAgICAgICAgICAgIHN0YXRpY0NmZyA9IGN0b3IuZ2V0U3RhdGljQ29uZmlnPy4oKSB8fCB7fSxcbiAgICAgICAgICAgICAgICBtaXhpbnM7XG5cbiAgICAgICAgICAgIGlmIChjZmcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhjZmcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnNsaWNlKC0xKSA9PT0gJ18nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2ZnW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXkuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2ZnW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9HZW5lcmF0ZUdldFNldChlbGVtZW50LCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBhcHBseSBwcm9wZXJ0aWVzIHdoaWNoIGhhdmUgbm8gc2V0dGVycyBpbnNpZGUgdGhlIHByb3RvdHlwZSBjaGFpblxuICAgICAgICAgICAgICAgICAgICAvLyB0aG9zZSB3aWxsIGdldCBhcHBsaWVkIG9uIGNyZWF0ZSAoTmVvLmNvcmUuQmFzZSAtPiBpbml0Q29uZmlnKVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaGFzUHJvcGVydHlTZXR0ZXIoZWxlbWVudCwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIGtleSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGUgIDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLCBzdGF0aWNDZmcpO1xuXG4gICAgICAgICAgICBpZiAoY2ZnLmhhc093blByb3BlcnR5KCdudHlwZScpKSB7XG4gICAgICAgICAgICAgICAgTmVvLm50eXBlTWFwW2NmZy5udHlwZV0gPSBjZmcuY2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtaXhpbnMgPSBjb25maWcuaGFzT3duUHJvcGVydHkoJ21peGlucycpICYmIGNvbmZpZy5taXhpbnMgfHwgW107XG5cbiAgICAgICAgICAgIGlmIChzdGF0aWNDZmc/Lm9ic2VydmFibGUpIHtcbiAgICAgICAgICAgICAgICBtaXhpbnMucHVzaCgnTmVvLmNvcmUuT2JzZXJ2YWJsZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2ZnLmhhc093blByb3BlcnR5KCdtaXhpbnMnKSAmJiBBcnJheS5pc0FycmF5KGNmZy5taXhpbnMpICYmIGNmZy5taXhpbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1peGlucy5wdXNoKC4uLmNmZy5taXhpbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWl4aW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhcHBseU1peGlucyhjdG9yLCBtaXhpbnMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKE5lby5ucygnTmVvLmNvcmUuT2JzZXJ2YWJsZScsIGZhbHNlLCBjdG9yLnByb3RvdHlwZS5taXhpbnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NmZy5vYnNlcnZhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSBjZmcubWl4aW5zO1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5taXhpbnM7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBjZmcpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzdGF0aWNDb25maWcsIHN0YXRpY0NmZyk7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3Rvciwge1xuICAgICAgICAgICAgICAgIGNsYXNzQ29uZmlnQXBwbGllZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWcgICAgICAgICAgICA6IE5lby5jbG9uZShjb25maWcsIHRydWUpLFxuICAgICAgICAgICAgICAgIGlzQ2xhc3MgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDb25maWcgICAgICA6IE5lby5jbG9uZShzdGF0aWNDb25maWcsIHRydWUpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZGVsZXRlIGN0b3IuZ2V0Q29uZmlnO1xuICAgICAgICAgICAgZGVsZXRlIGN0b3IuZ2V0U3RhdGljQ29uZmlnO1xuXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5zaW5nbGV0b24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5VG9HbG9iYWxOcyhjbHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFwcyBtZXRob2RzIGZyb20gb25lIG5hbWVzcGFjZSB0byBhbm90aGVyIG9uZVxuICAgICAqIEBleGFtcGxlXG4gICAgICogLy8gYWxpYXNlc1xuICAgICAqIE5lby5hcHBseUZyb21OcyhOZW8sIFV0aWwsIHtcbiAgICAgKiAgICAgY3JlYXRlU3R5bGVPYmplY3Q6ICdjcmVhdGVTdHlsZU9iamVjdCcsXG4gICAgICogICAgIGNyZWF0ZVN0eWxlcyAgICAgOiAnY3JlYXRlU3R5bGVzJyxcbiAgICAgKiAgICAgY2FwaXRhbGl6ZSAgICAgICA6ICdjYXBpdGFsaXplJ1xuICAgICAqIH0sIHRydWUpO1xuICAgICAqXG4gICAgICogLy8gZS5nLiBOZW8uY29yZS5VdGlsLmlzT2JqZWN0ID0+IE5lby5pc09iamVjdFxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW98TmVvLmNvcmUuQmFzZX0gdGFyZ2V0IFRoZSB0YXJnZXQgY2xhc3Mgb3Igc2luZ2xldG9uIEluc3RhbmNlIG9yIE5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gbmFtZXNwYWNlIFRoZSBjbGFzcyBjb250YWluaW5nIHRoZSBtZXRob2RzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2JpbmRdIHNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBiaW5kIG1ldGhvZHMgdG8gdGhlIFwiZnJvbVwiIG5hbWVzcGFjZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxuICAgICAqL1xuICAgIGFwcGx5RnJvbU5zKHRhcmdldCwgbmFtZXNwYWNlLCBjb25maWcsIGJpbmQpIHtcbiAgICAgICAgbGV0IGZuTmFtZTtcblxuICAgICAgICBpZiAodGFyZ2V0ICYmIE5lby50eXBlT2YoY29uZmlnKSA9PT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNvbmZpZykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgZm5OYW1lID0gbmFtZXNwYWNlW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IGJpbmQgPyBmbk5hbWUuYmluZChuYW1lc3BhY2UpIDogZm5OYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYXBzIGEgY2xhc3MgdG8gdGhlIGdsb2JhbCBOZW8gb3IgQXBwIG5hbWVzcGFjZS5cbiAgICAgKiBDYW4gZ2V0IGNhbGxlZCBmb3IgY2xhc3NlcyBhbmQgc2luZ2xldG9uIGluc3RhbmNlc1xuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHNcbiAgICAgKi9cbiAgICBhcHBseVRvR2xvYmFsTnMoY2xzKSB7XG4gICAgICAgIGxldCBwcm90byA9IHR5cGVvZiBjbHMgPT09ICdmdW5jdGlvbicgPyBjbHMucHJvdG90eXBlOiBjbHMsXG4gICAgICAgICAgICBjbGFzc05hbWUsIG5zQXJyYXksIGtleSwgbnM7XG5cbiAgICAgICAgaWYgKHByb3RvLmNvbnN0cnVjdG9yLnJlZ2lzdGVyVG9HbG9iYWxOcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gcHJvdG8uaXNDbGFzcyA/IHByb3RvLmNvbmZpZy5jbGFzc05hbWUgOiBwcm90by5jbGFzc05hbWU7XG5cbiAgICAgICAgICAgIG5zQXJyYXkgPSBjbGFzc05hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGtleSAgICAgPSBuc0FycmF5LnBvcCgpO1xuICAgICAgICAgICAgbnMgICAgICA9IE5lby5ucyhuc0FycmF5LCB0cnVlKTtcbiAgICAgICAgICAgIG5zW2tleV0gPSBjbHM7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFsbCBrZXlzIG9mIGRlZmF1bHRzIGludG8gdGFyZ2V0LCBpbiBjYXNlIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdFxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0cyBUaGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGtleXMgeW91IHdhbnQgdG8gY29weVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxuICAgICAqL1xuICAgIGFzc2lnbkRlZmF1bHRzKHRhcmdldCwgZGVmYXVsdHMpIHtcbiAgICAgICAgaWYgKHRhcmdldCAmJiBOZW8udHlwZU9mKGRlZmF1bHRzKSA9PT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRlZmF1bHRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fCp9IG9ialxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2RlZXA9ZmFsc2VdIFNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBjbG9uZSBuZXN0ZWQgb2JqZWN0cyBhcyB3ZWxsXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbaWdub3JlTmVvSW5zdGFuY2VzPWZhbHNlXSByZXR1cm5zIGV4aXN0aW5nIGluc3RhbmNlcyBpZiBzZXQgdG8gdHJ1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8QXJyYXl8Kn0gdGhlIGNsb25lZCBpbnB1dFxuICAgICAqL1xuICAgIGNsb25lKG9iaiwgZGVlcD1mYWxzZSwgaWdub3JlTmVvSW5zdGFuY2VzPWZhbHNlKSB7XG4gICAgICAgIGxldCBvdXQ7XG5cbiAgICAgICAgc3dpdGNoIChOZW8udHlwZU9mKG9iaikpIHtcbiAgICAgICAgICAgIGNhc2UgJ0FycmF5Jzoge1xuICAgICAgICAgICAgICAgIHJldHVybiAhZGVlcCA/IFsuLi5vYmpdIDogWy4uLm9iai5tYXAodmFsID0+IE5lby5jbG9uZSh2YWwsIGRlZXAsIGlnbm9yZU5lb0luc3RhbmNlcykpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnRGF0ZSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUob2JqLnZhbHVlT2YoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ01hcCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE1hcChvYmopOyAvLyBzaGFsbG93IGNvcHlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnTmVvSW5zdGFuY2UnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlnbm9yZU5lb0luc3RhbmNlcyA/IG9iaiA6IHRoaXMuY2xvbmVOZW9JbnN0YW5jZShvYmopO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdPYmplY3QnOiB7XG4gICAgICAgICAgICAgICAgb3V0ID0ge307XG5cbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9ICFkZWVwID8gdmFsdWUgOiBOZW8uY2xvbmUodmFsdWUsIGRlZXAsIGlnbm9yZU5lb0luc3RhbmNlcyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdTZXQnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTZXQob2JqKTsgLy8gc2hhbGxvdyBjb3B5XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqOyAvLyByZXR1cm4gYWxsIG90aGVyIGRhdGEgdHlwZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIHVzaW5nIHRoZSBvcmlnaW5hbENvbmZpZyB3aXRob3V0IHRoZSBpZFxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfSB0aGUgY2xvbmVkIGluc3RhbmNlXG4gICAgICovXG4gICAgY2xvbmVOZW9JbnN0YW5jZShpbnN0YW5jZSkge1xuICAgICAgICBsZXQgY29uZmlnID0gey4uLmluc3RhbmNlLm9yaWdpbmFsQ29uZmlnfTtcblxuICAgICAgICBkZWxldGUgY29uZmlnLl9pZDtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShpbnN0YW5jZS5jbGFzc05hbWUsIGNvbmZpZyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVzZSBOZW8uY3JlYXRlKCkgaW5zdGVhZCBvZiBcIm5ld1wiIHRvIGNyZWF0ZSBpbnN0YW5jZXMgb2YgYWxsIE5lbyBjbGFzc2VzXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CYXNlLm1qcyc7XG4gICAgICpcbiAgICAgKiBOZW8uY3JlYXRlKEJ1dHRvbiwge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vQmFzZS5tanMnO1xuICAgICAqXG4gICAgICogTmVvLmNyZWF0ZSh7XG4gICAgICogICAgIG1vZHVsZSA6IEJ1dHRvbixcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5jcmVhdGUoJ05lby5idXR0b24uQmFzZScge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmNyZWF0ZSh7XG4gICAgICogICAgIGNsYXNzTmFtZTogJ05lby5idXR0b24uQmFzZScsXG4gICAgICogICAgIGljb25DbHMgIDogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fE5lby5jb3JlLkJhc2V9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfG51bGx9IFRoZSBuZXcgY2xhc3MgaW5zdGFuY2VcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBjcmVhdGUoY2xhc3NOYW1lLCBjb25maWcpIHtcbiAgICAgICAgbGV0IHR5cGUgPSBOZW8udHlwZU9mKGNsYXNzTmFtZSksXG4gICAgICAgICAgICBjbHMsIGluc3RhbmNlO1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnTmVvQ2xhc3MnKSB7XG4gICAgICAgICAgICBjbHMgPSBjbGFzc05hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjbGFzc05hbWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy5jbGFzc05hbWUgJiYgIWNvbmZpZy5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNpbmcgY29uc29sZS5lcnJvciBpbnN0ZWFkIG9mIHRocm93IHRvIHNob3cgdGhlIGNvbmZpZyBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2xhc3MgY3JlYXRlZCB3aXRoIG9iamVjdCBjb25maWd1cmF0aW9uIG1pc3NpbmcgY2xhc3NOYW1lIG9yIG1vZHVsZSBwcm9wZXJ0eScsIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbmZpZy5jbGFzc05hbWUgfHwgY29uZmlnLm1vZHVsZS5wcm90b3R5cGUuY2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyAnICsgY2xhc3NOYW1lICsgJyBkb2VzIG5vdCBleGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbHMgPSBOZW8ubnMoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluc3RhbmNlID0gbmV3IGNscyhjb25maWcpO1xuXG4gICAgICAgIGluc3RhbmNlLm9uQ29uc3RydWN0ZWQoKTtcbiAgICAgICAgaW5zdGFuY2Uub25BZnRlckNvbnN0cnVjdGVkKCk7XG4gICAgICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcblxuICAgIGVtcHR5Rm4oKSB7fSxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBjbGFzc05hbWUgc3RyaW5nIGludG8gYSBnbG9iYWwgbmFtZXNwYWNlXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnMoJ05lby5idXR0b24uQmFzZScsIHRydWUpO1xuICAgICAqIC8vID0+XG4gICAgICogLy8gc2VsZi5OZW8gPSBzZWxmLk5lbyB8fCB7fTtcbiAgICAgKiAvLyBzZWxmLk5lby5jb21wb25lbnQgPSBzZWxmLk5lby5jb21wb25lbnQgfHwge307XG4gICAgICogLy8gc2VsZi5OZW8uYnV0dG9uLkJhc2UgPSBzZWxmLk5lby5idXR0b24uQmFzZSB8fCB7fTtcbiAgICAgKiAvLyByZXR1cm4gc2VsZi5OZW8uYnV0dG9uLkJhc2U7XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBuYW1lcyBUaGUgY2xhc3MgbmFtZSBzdHJpbmcgY29udGFpbmluZyBkb3RzIG9yIGFuIEFycmF5IG9mIHRoZSBzdHJpbmcgcGFydHNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtjcmVhdGVdIFNldCBjcmVhdGUgdG8gdHJ1ZSB0byBjcmVhdGUgZW1wdHkgb2JqZWN0cyBmb3Igbm9uIGV4aXN0aW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV0gU2V0IGEgZGlmZmVyZW50IHN0YXJ0aW5nIHBvaW50IGFzIHNlbGZcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZWZlcmVuY2UgdG8gdGhlIHRvcGxldmVsIG5hbWVzcGFjZVxuICAgICAqL1xuICAgIG5zKG5hbWVzLCBjcmVhdGUsIHNjb3BlKSB7XG4gICAgICAgIG5hbWVzID0gQXJyYXkuaXNBcnJheShuYW1lcykgPyBuYW1lcyA6IG5hbWVzLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgcmV0dXJuIG5hbWVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNyZWF0ZSAmJiAhcHJldltjdXJyZW50XSkge1xuICAgICAgICAgICAgICAgIHByZXZbY3VycmVudF0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlIHx8IHNlbGYpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGluc3RhbmNlcyBvZiBOZW8gY2xhc3NlcyB1c2luZyB0aGVpciBudHlwZSBpbnN0ZWFkIG9mIHRoZSBjbGFzcyBuYW1lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnR5cGUoJ2J1dHRvbicge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLm50eXBlKHtcbiAgICAgKiAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG50eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9XG4gICAgICogQHNlZSB7QGxpbmsgbW9kdWxlOk5lby5jcmVhdGUgY3JlYXRlfVxuICAgICAqL1xuICAgIG50eXBlKG50eXBlLCBjb25maWcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IG50eXBlO1xuICAgICAgICAgICAgaWYgKCFjb25maWcubnR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzIGRlZmluZWQgd2l0aCBvYmplY3QgY29uZmlndXJhdGlvbiBtaXNzaW5nIG50eXBlIHByb3BlcnR5LiAnICsgY29uZmlnLm50eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG50eXBlID0gY29uZmlnLm50eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IE5lby5udHlwZU1hcFtudHlwZV07XG5cbiAgICAgICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbnR5cGUgJyArIG50eXBlICsgJyBkb2VzIG5vdCBleGlzdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGNsYXNzTmFtZSwgY29uZmlnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdHlwZU9mKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodHlwZW9mIGl0ZW0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnByb3RvdHlwZT8uY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ05lb0NsYXNzJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnb2JqZWN0Jzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNvbnN0cnVjdG9yLmlzQ2xhc3MgJiYgaXRlbSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdOZW9JbnN0YW5jZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW0uY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG59LCBOZW8pO1xuXG4vKipcbiAqIExpc3Qgb2YgY2xhc3MgcHJvcGVydGllcyB3aGljaCBhcmUgbm90IHN1cHBvc2VkIHRvIGdldCBtaXhlZCBpbnRvIG90aGVyIGNsYXNzZXNcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGlnbm9yZU1peGluID0gW1xuICAgICdfbmFtZScsXG4gICAgJ2NsYXNzQ29uZmlnQXBwbGllZCcsXG4gICAgJ2NsYXNzTmFtZScsXG4gICAgJ2NvbnN0cnVjdG9yJyxcbiAgICAnaXNDbGFzcycsXG4gICAgJ21peGluJyxcbiAgICAnbnR5cGUnLFxuICAgICdvYnNlcnZhYmxlJyxcbiAgICAncmVnaXN0ZXJUb0dsb2JhbE5zJ1xuXTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHNcbiAqIEBwYXJhbSB7QXJyYXl9IG1peGluc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYXBwbHlNaXhpbnMoY2xzLCBtaXhpbnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWl4aW5zKSkge1xuICAgICAgICBtaXhpbnMgPSBbbWl4aW5zXTtcbiAgICB9XG5cbiAgICBsZXQgaSAgICAgICAgICAgID0gMCxcbiAgICAgICAgbGVuICAgICAgICAgID0gbWl4aW5zLmxlbmd0aCxcbiAgICAgICAgbWl4aW5DbGFzc2VzID0ge30sXG4gICAgICAgIG1peGluLCBtaXhpbkNscywgbWl4aW5Qcm90bztcblxuICAgIGZvciAoO2kgPCBsZW47aSsrKSB7XG4gICAgICAgIG1peGluID0gbWl4aW5zW2ldO1xuXG4gICAgICAgIGlmIChtaXhpbi5pc0NsYXNzKSB7XG4gICAgICAgICAgICBtaXhpblByb3RvID0gbWl4aW4ucHJvdG90eXBlO1xuICAgICAgICAgICAgbWl4aW5DbHMgICA9IE5lby5ucyhtaXhpblByb3RvLmNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhtaXhpbikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gbWl4aW4gYW4gdW5kZWZpbmVkIGNsYXNzOiAnICsgbWl4aW4gKyAnLCAnICsgY2xzLnByb3RvdHlwZS5jbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWl4aW5DbHMgICA9IE5lby5ucyhtaXhpbik7XG4gICAgICAgICAgICBtaXhpblByb3RvID0gbWl4aW5DbHMucHJvdG90eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWl4aW5Qcm90by5jbGFzc05hbWUuc3BsaXQoJy4nKS5yZWR1Y2UobWl4UmVkdWNlKG1peGluQ2xzKSwgbWl4aW5DbGFzc2VzKTtcblxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtaXhpblByb3RvKS5mb3JFYWNoKG1peGluUHJvcGVydHkoY2xzLnByb3RvdHlwZSwgbWl4aW5Qcm90bykpO1xuICAgIH1cblxuICAgIGNscy5wcm90b3R5cGUubWl4aW5zID0gbWl4aW5DbGFzc2VzOyAvLyB0b2RvOiB3ZSBzaG91bGQgZG8gYSBkZWVwIG1lcmdlXG59XG5cbi8qKlxuICogQ3JlYXRlcyBnZXQgLyBzZXQgbWV0aG9kcyBmb3IgY2xhc3MgY29uZmlncyBlbmRpbmcgd2l0aCBhbiB1bmRlcnNjb3JlXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcHJpdmF0ZVxuICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gKi9cbmZ1bmN0aW9uIGF1dG9HZW5lcmF0ZUdldFNldChwcm90bywga2V5KSB7XG4gICAgaWYgKGhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpKSB7XG4gICAgICAgIHRocm93KCdDb25maWcgJyArIGtleSArICdfICgnICsgcHJvdG8uY2xhc3NOYW1lICsgJykgYWxyZWFkeSBoYXMgYSBzZXQgbWV0aG9kLCB1c2UgYmVmb3JlR2V0LCBiZWZvcmVTZXQgJiBhZnRlclNldCBpbnN0ZWFkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFOZW9bZ2V0U2V0Q2FjaGVdKSB7XG4gICAgICAgIE5lb1tnZXRTZXRDYWNoZV0gPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIU5lb1tnZXRTZXRDYWNoZV1ba2V5XSkge1xuICAgICAgICBOZW9bZ2V0U2V0Q2FjaGVdW2tleV0gPSB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZUdldCA9IGBiZWZvcmVHZXQke2tleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpfWAsXG4gICAgICAgICAgICAgICAgICAgIGhhc05ld0tleSA9IG1lW2NvbmZpZ1N5bWJvbF0uaGFzT3duUHJvcGVydHkoa2V5KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3S2V5ICAgID0gbWVbY29uZmlnU3ltYm9sXVtrZXldLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgPSBoYXNOZXdLZXkgPyBuZXdLZXkgOiBtZVsnXycgKyBrZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdpdGVtcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gWy4uLnZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUudmFsdWVPZigpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzTmV3S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW2tleV0gPSB2YWx1ZTsgLy8gd2UgZG8gd2FudCB0byB0cmlnZ2VyIHRoZSBzZXR0ZXIgPT4gYmVmb3JlU2V0LCBhZnRlclNldFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lWydfJyArIGtleV07IC8vIHJldHVybiB0aGUgdmFsdWUgcGFyc2VkIGJ5IHRoZSBzZXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lW2JlZm9yZUdldF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtZVtiZWZvcmVHZXRdKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgX2tleSAgICAgID0gJ18nICsga2V5LFxuICAgICAgICAgICAgICAgICAgICB1S2V5ID0ga2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSksXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNldCA9ICdiZWZvcmVTZXQnICsgdUtleSxcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTZXQgID0gJ2FmdGVyU2V0JyAgKyB1S2V5LFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSAgPSBtZVtfa2V5XTtcblxuICAgICAgICAgICAgICAgIC8vIGV2ZXJ5IHNldCBjYWxsIGhhcyB0byBkZWxldGUgdGhlIG1hdGNoaW5nIHN5bWJvbFxuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnaXRlbXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTmVvLmNsb25lKHZhbHVlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB3ZSBkbyB3YW50IHRvIHN0b3JlIHRoZSB2YWx1ZSBiZWZvcmUgdGhlIGJlZm9yZVNldCBtb2RpZmljYXRpb24gYXMgd2VsbCxcbiAgICAgICAgICAgICAgICAvLyBzaW5jZSBpdCBjb3VsZCBnZXQgcHVsbGVkIGJ5IG90aGVyIGJlZm9yZVNldCBtZXRob2RzIG9mIGRpZmZlcmVudCBjb25maWdzXG4gICAgICAgICAgICAgICAgbWVbX2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVbYmVmb3JlU2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lW2JlZm9yZVNldF0odmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGV5IGRvbid0IHJldHVybiBhIHZhbHVlLCB0aGF0IG1lYW5zIG5vIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVbX2tleV0gPSBvbGRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1lW19rZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFOZW8uaXNFcXVhbCh2YWx1ZSwgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW2FmdGVyU2V0XT8uKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG1lLmFmdGVyU2V0Q29uZmlnPy4oa2V5LCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIGtleSwgTmVvW2dldFNldENhY2hlXVtrZXldKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGNsYXNzIG5hbWUgZXhpc3RzIGluc2lkZSB0aGUgTmVvIG9yIGFwcCBuYW1lc3BhY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXhpc3RzKGNsYXNzTmFtZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAhIWNsYXNzTmFtZS5zcGxpdCgnLicpLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF07XG4gICAgICAgIH0sIHNlbGYpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIHNldCBtZXRob2QgZm9yIGEgZ2l2ZW4gcHJvcGVydHkga2V5IGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvIFRoZSB0b3AgbGV2ZWwgcHJvdG90eXBlIG9mIGEgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgdGhlIHByb3BlcnR5IGtleSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpIHtcbiAgICBsZXQgZGVzY3JpcHRvcjtcblxuICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcbiAgICAgICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZGVzY3JpcHRvci5zZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90b1xuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBtaXhpblByb3RvXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtaXhpblByb3BlcnR5KHByb3RvLCBtaXhpblByb3RvKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAofmlnbm9yZU1peGluLmluZGV4T2Yoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm90b1trZXldPy5fZnJvbSkge1xuICAgICAgICAgICAgaWYgKG1peGluUHJvdG8uY2xhc3NOYW1lID09PSBwcm90b1trZXldLl9mcm9tKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNaXhpbiBzZXQgbXVsdGlwbGUgdGltZXMgb3IgYWxyZWFkeSBkZWZpbmVkIG9uIGEgQmFzZSBDbGFzcycsIHByb3RvLmNsYXNzTmFtZSwgbWl4aW5Qcm90by5jbGFzc05hbWUsIGtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGAke3Byb3RvLmNsYXNzTmFtZX06IE11bHRpcGxlIG1peGlucyBkZWZpbmluZyBzYW1lIHByb3BlcnR5ICgke21peGluUHJvdG8uY2xhc3NOYW1lfSwgJHtwcm90b1trZXldLl9mcm9tfSkgPT4gJHtrZXl9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RvW2tleV0gPSBtaXhpblByb3RvW2tleV07XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KS5fZnJvbSA9IG1peGluUHJvdG8uY2xhc3NOYW1lO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcHJvdG9ba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcHJvdG9ba2V5XS5fbmFtZSA9IGtleTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBtaXhpbkNsc1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbWl4UmVkdWNlKG1peGluQ2xzKSB7XG4gICAgcmV0dXJuIChwcmV2LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xuICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XSA9IGlkeCAhPT0gYXJyLmxlbmd0aCAtMSA/IHByZXZbY3VycmVudF0gfHwge30gOiBtaXhpbkNscztcbiAgICB9O1xufVxuXG5OZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcblxuTmVvLmFzc2lnbkRlZmF1bHRzKE5lby5jb25maWcsIERlZmF1bHRDb25maWcpO1xuXG5leHBvcnQge05lbyBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuL0lkR2VuZXJhdG9yLm1qcydcblxuY29uc3QgY29uZmlnU3ltYm9sICAgICAgID0gU3ltYm9sLmZvcignY29uZmlnU3ltYm9sJyksXG4gICAgICBmb3JjZUFzc2lnbkNvbmZpZ3MgPSBTeW1ib2woJ2ZvcmNlQXNzaWduQ29uZmlncycpLFxuICAgICAgaXNJbnN0YW5jZSAgICAgICAgID0gU3ltYm9sKCdpc0luc3RhbmNlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgY2xhc3MgZm9yIChhbG1vc3QpIGFsbCBjbGFzc2VzIGluc2lkZSB0aGUgTmVvIG5hbWVzcGFjZVxuICogRXhjZXB0aW9ucyBhcmUgZS5nLiBjb3JlLklkR2VuZXJhdG9yLCB2ZG9tLlZOb2RlXG4gKiBAY2xhc3MgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgZ2V0IGFwcGxpZWQgdG8gdGhlIGNsYXNzIGNvbnN0cnVjdG9yXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGljQ29uZmlnXG4gICAgICogQHN0YXRpY1xuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIG9uZSB0byBmYWxzZSBpbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIHN0aWNrXG4gICAgICAgICAqIHRvIHRoZSBcImFudGktcGF0dGVyblwiIHRvIGFwcGx5IGNsYXNzZXMgdG8gdGhlIGdsb2JhbCBOZW8gb3IgQXBwIG5hbWVzcGFjZVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZWdpc3RlclRvR2xvYmFsTnM9dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHJlZ2lzdGVyVG9HbG9iYWxOczogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgZ2V0IGFwcGxpZWQgdG8gZWFjaCBjbGFzcyBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHN0YXRpY0NvbmZpZ1xuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBuYW1lIHdoaWNoIHdpbGwgZ2V0IG1hcHBlZCBpbnRvIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuQmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2xhc3Mgc2hvcnRjdXQtbmFtZSB0byB1c2UgZm9yIGUuZy4gY3JlYXRpbmcgY2hpbGQgY29tcG9uZW50cyBpbnNpZGUgYSBKU09OLWZvcm1hdFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdiYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2Jhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSBjb21wb25lbnQgaWRcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGlkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBpZF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOZW8uY3JlYXRlKCkgd2lsbCBjaGFuZ2UgdGhpcyBmbGFnIHRvIHRydWUgYWZ0ZXIgdGhlIG9uQ29uc3RydWN0ZWQoKSBjaGFpbiBpcyBkb25lLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc0NvbnN0cnVjdGVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGlzQ29uc3RydWN0ZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIG1peGlucyBhcyBhbiBhcnJheSBvZiBjbGFzc05hbWVzLCBpbXBvcnRlZCBtb2R1bGVzIG9yIGEgbWl4ZWQgdmVyc2lvblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXXxOZW8uY29yZS5CYXNlW118bnVsbH0gbWl4aW5zPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1peGluczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGluc3RhbmNlIGJ5IHBhc3NpbmcgYW4gaW1wb3J0ZWQgY2xhc3MgKEpTIG1vZHVsZSBkZWZhdWx0IGV4cG9ydClcbiAgICAgICAgICogQG1lbWJlciB7Q2xhc3N9IG1vZHVsZT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1vZHVsZTogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBDb25zdW1lcyB0aGUgc3RhdGljIGdldENvbmZpZygpIHJldHVybiBvYmplY3QuXG4gICAgICogQXBwbGllcyB0aGUgb2JzZXJ2YWJsZSBtaXhpbiBpZiBuZWVkZWQsIGdyYW50cyByZW1vdGUgYWNjZXNzIGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnPXt9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnPXt9KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWUsIHtcbiAgICAgICAgICAgIFtjb25maWdTeW1ib2xdOiB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGUgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZSAgICA6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbaXNJbnN0YW5jZV06IHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmNyZWF0ZUlkKGNvbmZpZy5pZCB8fCBtZS5pZCk7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG5cbiAgICAgICAgaWYgKG1lLmNvbnN0cnVjdG9yLmNvbmZpZykge1xuICAgICAgICAgICAgZGVsZXRlIG1lLmNvbnN0cnVjdG9yLmNvbmZpZy5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmdldFN0YXRpY0NvbmZpZygnb2JzZXJ2YWJsZScpICYmIG1lLmluaXRPYnNlcnZhYmxlKGNvbmZpZyk7XG5cbiAgICAgICAgbWUuaW5pdENvbmZpZyhjb25maWcpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZSwgJ2NvbmZpZ3NBcHBsaWVkJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZSAgICAgOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnJlbW90ZSAmJiBzZXRUaW1lb3V0KG1lLmluaXRSZW1vdGUuYmluZChtZSksIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaWQgY29uZmlnIGdvdCBjaGFuZ2VkLlxuICAgICAqIFlvdSBjYW4gZHluYW1pY2FsbHkgY2hhbmdlIGluc3RhbmNlIGlkcyBpZiBuZWVkZWQuIFRoZXkgbmVlZCB0byBzdGF5IHVuaXF1ZSBhdCBhbnkgZ2l2ZW4gcG9pbnQuXG4gICAgICogVXNlIGNhc2U6IGUuZy4gY29tcG9uZW50IGJhc2VkIGxpc3RzLCB3aGVyZSB5b3Ugd2FudCB0byByZS11c2UgaXRlbSBpbnN0YW5jZXMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UudW5yZWdpc3RlcihvbGRWYWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBOZW8uaWRNYXBbb2xkVmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS5yZWdpc3RlcihtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOZW8uaWRNYXAgPSBOZW8uaWRNYXAgfHwge307XG4gICAgICAgICAgICBOZW8uaWRNYXBbbWUuaWRdID0gbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGJlZm9yZVNldCBmdW5jdGlvbnMgd2hpY2ggdGVzdCBpZiBhIGdpdmVuIHZhbHVlIGlzIGluc2lkZSBhIHN0YXRpYyBhcnJheVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgY29uZmlnIG5hbWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gW3N0YXRpY05hbWU9bmFtZSArICdzJ10gbmFtZSBvZiB0aGUgc3RhdGljIGNvbmZpZyBhcnJheVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8TnVtYmVyfSB2YWx1ZSBvciBvbGRWYWx1ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsIG5hbWUsIHN0YXRpY05hbWUgPSBuYW1lICsgJ3MnKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkoc3RhdGljTmFtZSkgPyBzdGF0aWNOYW1lIDogdGhpcy5nZXRTdGF0aWNDb25maWcoc3RhdGljTmFtZSk7XG5cbiAgICAgICAgaWYgKCF2YWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoYFN1cHBvcnRlZCB2YWx1ZXMgZm9yICR7bmFtZX0gYXJlOiAke3ZhbHVlcy5qb2luKCcsICcpfWAsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZXMgdGhlIElkR2VuZXJhdG9yIHRvIGNyZWF0ZSBhbiBpZCBpZiBhIHN0YXRpYyBvbmUgaXMgbm90IGV4cGxpY2l0bHkgc2V0LlxuICAgICAqIFJlZ2lzdGVycyB0aGUgaW5zdGFuY2UgdG8gbWFuYWdlci5JbnN0YW5jZSBpZiB0aGlzIG9uZSBpcyBhbHJlYWR5IGNyZWF0ZWQsXG4gICAgICogb3RoZXJ3aXNlIHN0b3JlcyBpdCBpbnNpZGUgYSB0bXAgbWFwLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqL1xuICAgIGNyZWF0ZUlkKGlkKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZCB8fCBJZEdlbmVyYXRvci5nZXRJZCh0aGlzLmdldElkS2V5KCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXJzIHRoaXMgaW5zdGFuY2UgZnJvbSBOZW8ubWFuYWdlci5JbnN0YW5jZVxuICAgICAqIGFuZCByZW1vdmVzIGFsbCBvYmplY3QgZW50cmllcyBmcm9tIHRoaXMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChCYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UudW5yZWdpc3RlcihtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoTmVvLmlkTWFwKSB7XG4gICAgICAgICAgICBkZWxldGUgTmVvLmlkTWFwW21lLmlkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKG1lKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtZSwga2V5KS53cml0YWJsZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGluc2lkZSBjcmVhdGVJZCgpIGFzIHRoZSBkZWZhdWx0IHZhbHVlIHBhc3NlZCB0byB0aGUgSWRHZW5lcmF0b3IuXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgYXMgbmVlZGVkLlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWRLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm50eXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGEgc3RhdGljIGNvbmZpZyBrZXkgb3IgdGhlIHN0YXRpY0NvbmZpZyBvYmplY3QgaXRzZWxmIGluIGNhc2Ugbm8gdmFsdWUgaXMgc2V0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYSBzdGF0aWNDb25maWcgZGVmaW5lZCBpbnNpZGUgc3RhdGljIGdldFN0YXRpY0NvbmZpZ1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldFN0YXRpY0NvbmZpZyhrZXkpIHtcbiAgICAgICAgbGV0IGNmZyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnO1xuICAgICAgICByZXR1cm4gKGtleSA/IGNmZ1trZXldIDogY2ZnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBhZnRlciBvbkNvbnN0cnVjdGVkKCkgaXMgZG9uZVxuICAgICAqIEBzZWUge0BsaW5rIE5lby5jb3JlLkJhc2Ujb25Db25zdHJ1Y3RlZCBvbkNvbnN0cnVjdGVkfVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGluaXQoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBhbGwgY2xhc3MgY29uZmlncyB0byB0aGlzIGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XG4gICAgICovXG4gICAgaW5pdENvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVbY29uZmlnU3ltYm9sXSwgbWUubWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpKTtcbiAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEb2VzIGdldCB0cmlnZ2VyZWQgd2l0aCBhIGRlbGF5IHRvIGVuc3VyZSB0aGF0IE5lby53b3JrZXJJZCAmIE5lby53b3JrZXIuTWFuYWdlciBhcmUgZGVmaW5lZFxuICAgICAqIFJlbW90ZSBtZXRob2QgYWNjZXNzIHZpYSBwcm9taXNlc1xuICAgICAqL1xuICAgIGluaXRSZW1vdGUoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHJlbW90ZSAgICAgICAgPSBtZS5yZW1vdGUsXG4gICAgICAgICAgICBjbGFzc05hbWUgICAgID0gbWUuY2xhc3NOYW1lLFxuICAgICAgICAgICAgY3VycmVudFdvcmtlciA9IE5lby5jdXJyZW50V29ya2VyLFxuICAgICAgICAgICAgbGlzdGVuZXJJZDtcblxuICAgICAgICBpZiAoIW1lLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdGUgbWV0aG9kIGFjY2VzcyBpcyBvbmx5IGZ1bmN0aW9uYWwgZm9yIFNpbmdsZXRvbiBjbGFzc2VzICcgKyBjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFOZW8uY29uZmlnLnVuaXRUZXN0TW9kZSAmJiBOZW8uaXNPYmplY3QocmVtb3RlKSkge1xuICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gJ21haW4nICYmIGN1cnJlbnRXb3JrZXIuaXNTaGFyZWRXb3JrZXIgJiYgIWN1cnJlbnRXb3JrZXIuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcklkID0gY3VycmVudFdvcmtlci5vbignY29ubmVjdGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50V29ya2VyLnVuKCdjb25uZWN0ZWQnLCBsaXN0ZW5lcklkKTtcbiAgICAgICAgICAgICAgICAgICAgQmFzZS5zZW5kUmVtb3RlcyhjbGFzc05hbWUsIHJlbW90ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEJhc2Uuc2VuZFJlbW90ZXMoY2xhc3NOYW1lLCByZW1vdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZSBvcmRlciBjb25maWdzIGFyZSBhcHBsaWVkIHRvIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XG4gICAgICogQHJldHVybnMge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgbWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgY3RvciA9IG1lLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGlmICghY3Rvci5jb25maWcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmVvLmFwcGx5Q2xhc3NDb25maWcgaGFzIG5vdCBiZWVuIHJ1biBvbiAnICsgbWUuY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XG4gICAgICAgICAgICBtZS5vcmlnaW5hbENvbmZpZyA9IE5lby5jbG9uZShjb25maWcsIHRydWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsuLi5jdG9yLmNvbmZpZywgLi4uY29uZmlnfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQWZ0ZXJDb25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pc0NvbnN0cnVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBXZSBjYW4gb25seSBmaXJlIHRoZSBldmVudCBpbiBjYXNlIHRoZSBPYnNlcnZhYmxlIG1peGluIGlzIGluY2x1ZGVkLlxuICAgICAgICBtZS5nZXRTdGF0aWNDb25maWcoJ29ic2VydmFibGUnKSAmJiBtZS5maXJlKCdjb25zdHJ1Y3RlZCcsIG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBhZnRlciBhbGwgY29uc3RydWN0b3JzIGFyZSBkb25lXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIHJlcGxhY2Ugc3RyaW5nIGJhc2VkIHZhbHVlcyBjb250YWluaW5nIFwiQGNvbmZpZzpcIiB3aXRoIHRoZSBtYXRjaGluZyBjb25maWcgdmFsdWVcbiAgICAgKiBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE9iamVjdFtdfSBpdGVtc1xuICAgICAqL1xuICAgIHBhcnNlSXRlbUNvbmZpZ3MoaXRlbXMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFtpdGVtc107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoaXRlbSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUucGFyc2VJdGVtQ29uZmlncyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5zdGFydHNXaXRoKCdAY29uZmlnOicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cig4KS50cmltKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWVbdmFsdWVdICYmICFtZS5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdXNlZCBAY29uZmlnIGRvZXMgbm90IGV4aXN0OicsIHZhbHVlLCBtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBjb25maWcgbWlnaHQgbm90IGJlIHByb2Nlc3NlZCB5ZXQsIGVzcGVjaWFsbHkgZm9yIGNvbmZpZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3QgZW5kaW5nIHdpdGggYW4gdW5kZXJzY29yZSwgc28gd2UgbmVlZCB0byBjaGVjayB0aGUgY29uZmlnU3ltYm9sIGZpcnN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ba2V5XSA9IG1lW2NvbmZpZ1N5bWJvbF1bdmFsdWVdIHx8IG1lW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHVzaW5nIHNldCgpLCBjb25maWdzIHdpdGhvdXQgYSB0cmFpbGluZyB1bmRlcnNjb3JlIGNhbiBhbHJlYWR5IGJlIGFzc2lnbmVkLFxuICAgICAqIHNvIHRoZSBoYXNPd25Qcm9wZXJ0eSgpIGNoZWNrIHdpbGwgcmV0dXJuIHRydWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtmb3JjZUFzc2lnbj1mYWxzZV1cbiAgICAgKi9cbiAgICBwcm9jZXNzQ29uZmlncyhmb3JjZUFzc2lnbj1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSk7XG5cbiAgICAgICAgbWVbZm9yY2VBc3NpZ25Db25maWdzXSA9IGZvcmNlQXNzaWduO1xuXG4gICAgICAgIC8vIFdlIGRvIG5vdCB3YW50IHRvIGl0ZXJhdGUgb3ZlciB0aGUga2V5cywgc2luY2UgMSBjb25maWcgY2FuIHJlbW92ZSBtb3JlIHRoYW4gMSBrZXkgKGJlZm9yZVNldFgsIGFmdGVyU2V0WClcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gVGhlIGhhc093blByb3BlcnR5IGNoZWNrIGlzIGludGVuZGVkIGZvciBjb25maWdzIHdpdGhvdXQgYSB0cmFpbGluZyB1bmRlcnNjb3JlXG4gICAgICAgICAgICAvLyA9PiB0aGV5IGNvdWxkIGFscmVhZHkgZ290IGFzc2lnbmVkIGluc2lkZSBhbiBhZnRlclNldC1tZXRob2RcbiAgICAgICAgICAgIGlmIChmb3JjZUFzc2lnbiB8fCAhbWUuaGFzT3duUHJvcGVydHkoa2V5c1swXSkpIHtcbiAgICAgICAgICAgICAgICBtZVtrZXlzWzBdXSA9IG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoZXJlIGlzIGEgZGVsZXRlIGNhbGwgaW5zaWRlIHRoZSBjb25maWcgZ2V0dGVyIGFzIHdlbGwgKE5lby5tanMgPT4gYXV0b0dlbmVyYXRlR2V0U2V0KCkpXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGtlZXAgdGhpcyBvbmUgZm9yIGNvbmZpZ3MsIHdoaWNoIGRvIG5vdCB1c2UgZ2V0dGVycyAobm8gdHJhaWxpbmcgdW5kZXJzY29yZSlcbiAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleXNbMF1dO1xuXG4gICAgICAgICAgICBtZS5wcm9jZXNzQ29uZmlncyhmb3JjZUFzc2lnbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXG4gICAgICovXG4gICAgc3RhdGljIHNlbmRSZW1vdGVzKGNsYXNzTmFtZSwgcmVtb3RlKSB7XG4gICAgICAgIGxldCBvcmlnaW47XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMocmVtb3RlKS5mb3JFYWNoKChbd29ya2VyLCBtZXRob2RzXSkgPT4ge1xuICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gd29ya2VyKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luID0gTmVvLndvcmtlcklkID09PSAnbWFpbicgPyBOZW8ud29ya2VyLk1hbmFnZXIgOiBOZW8uY3VycmVudFdvcmtlcjtcblxuICAgICAgICAgICAgICAgIG9yaWdpbi5zZW5kTWVzc2FnZSh3b3JrZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAncmVnaXN0ZXJSZW1vdGUnLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2RzLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG11bHRpcGxlIGNvbmZpZ3MgYXQgb25jZSwgZW5zdXJpbmcgdGhhdCBhbGwgYWZ0ZXJTZXQgbWV0aG9kcyBnZXQgYWxsIG5ldyBhc3NpZ25lZCB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzPXt9XG4gICAgICovXG4gICAgc2V0KHZhbHVlcz17fSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIC8vIElmIHRoZSBpbml0aWFsIGNvbmZpZyBwcm9jZXNzaW5nIGlzIHN0aWxsIHJ1bm5pbmcsXG4gICAgICAgIC8vIGZpbmlzaCB0aGlzIG9uZSBmaXJzdCBiZWZvcmUgZHJvcHBpbmcgbmV3IHZhbHVlcyBpbnRvIHRoZSBjb25maWdTeW1ib2wuXG4gICAgICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vaXNzdWVzLzIyMDFcbiAgICAgICAgaWYgKG1lW2ZvcmNlQXNzaWduQ29uZmlnc10gIT09IHRydWUgJiYgT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVbY29uZmlnU3ltYm9sXSwgdmFsdWVzKTtcblxuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncyh0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBhIHN0YXRpYyBjb25maWcgYnkgYSBnaXZlbiBrZXlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgb2YgYSBzdGF0aWNDb25maWcgZGVmaW5lZCBpbnNpZGUgc3RhdGljIGdldFN0YXRpY0NvbmZpZ1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb25maWcgZXhpc3RzIGFuZCBnb3QgY2hhbmdlZFxuICAgICAqL1xuICAgIHNldFN0YXRpY0NvbmZpZyhrZXksIHZhbHVlKSB7XG4gICAgICAgIGxldCBzdGF0aWNDb25maWcgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZztcblxuICAgICAgICBpZiAoc3RhdGljQ29uZmlnLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHN0YXRpY0NvbmZpZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiA8cD5FbmhhbmNpbmcgdGhlIHRvU3RyaW5nKCkgbWV0aG9kLCBlLmcuPC9wPlxuICAgICAqIGBOZW8uY3JlYXRlKCdOZW8uYnV0dG9uLkJhc2UnKS50b1N0cmluZygpID0+IFwiW29iamVjdCBOZW8uYnV0dG9uLkJhc2UgKG5lby1idXR0b24tMSldXCJgXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNsYXNzTmFtZX0gKGlkOiAke3RoaXMuaWR9KWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSBpbnN0YW5jZW9mIG1ldGhvZC4gV2l0aG91dCB0aGlzIGNoYW5nZTo8L3A+XG4gICAgICogYE5lby5jb2xsZWN0aW9uLkJhc2UucHJvdG90eXBlIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiB0cnVlYFxuICAgICAqIDxwPldpdGggdGhpcyBjaGFuZ2U6PC9wPlxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gZmFsc2VgPGJyPlxuICAgICAqIGBOZW8uY3JlYXRlKE5lby5jb2xsZWN0aW9uLkJhc2UpIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiB0cnVlYFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBbU3ltYm9sLmhhc0luc3RhbmNlXShpbnN0YW5jZSkge1xuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2VbaXNJbnN0YW5jZV0gPT09IHRydWUgPyBzdXBlcltTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSA6IGZhbHNlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbkJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID0gZmFsc2U7XG5cbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5Db21wYXJlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIENvbXBhcmUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuQ29tcGFyZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuQ29tcGFyZSdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW0xXG4gICAgICogQHBhcmFtIHsqfSBpdGVtMlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0VxdWFsKGl0ZW0xLCBpdGVtMikge1xuICAgICAgICBpZiAoaXRlbTEgPT09IGl0ZW0yKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0eXBlMSA9IE5lby50eXBlT2YoaXRlbTEpLFxuICAgICAgICAgICAgdHlwZTIgPSBOZW8udHlwZU9mKGl0ZW0yKSxcbiAgICAgICAgICAgIGtleTtcblxuICAgICAgICBpZiAodHlwZTEgIT09IHR5cGUyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHR5cGUxKSB7XG4gICAgICAgICAgICBjYXNlICdBcnJheSc6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbTEubGVuZ3RoICE9PSBpdGVtMi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW2ksIHZdIG9mIGl0ZW0xLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUNvbXBhcmUuaXNFcXVhbCh2LCBpdGVtMltpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdEYXRlJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtMS52YWx1ZU9mKCkgPT09IGl0ZW0yLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnRnVuY3Rpb24nOiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0xLm5hbWUgIT09IGl0ZW0yLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtMS50b1N0cmluZygpID09PSBpdGVtMi50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdNYXAnOiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0xLnNpemUgIT09IGl0ZW0yLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCB2YWwyO1xuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGl0ZW0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbDIgPSBpdGVtMi5nZXQoa2V5KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsMiAhPT0gdmFsIHx8IHZhbDIgPT09IHVuZGVmaW5lZCAmJiAhaXRlbTIuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdOZW9JbnN0YW5jZSc6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbTEuaWQgIT09IGl0ZW0yLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnT2JqZWN0Jzoge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhpdGVtMSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhpdGVtMikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBpdGVtMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUNvbXBhcmUuaXNFcXVhbChpdGVtMVtrZXldLCBpdGVtMltrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ1JlZ0V4cCc6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbTEudG9TdHJpbmcoKSAhPT0gaXRlbTIudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ1NldCc6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbTEuc2l6ZSAhPT0gaXRlbTIuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChrZXkgb2YgaXRlbTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtMi5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTEgPT09IGl0ZW0yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb21wYXJlKTtcblxuLy8gYWxpYXNcbk5lby5pc0VxdWFsID0gQ29tcGFyZS5pc0VxdWFsO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYXJlO1xuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdldHMgdXNlZCBieSBjb3JlLkJhc2UsIHNvIGl0IGNhbiBub3QgZXh0ZW5kIGl0LlxuICogSXQgY291bGQgZ2V0IHNpbXBsaWZpZWQgdG8ganVzdCBiZWluZyBhbiBvYmplY3QgKG5lZWRzIHRvIG1hbnVhbGx5IGdldCBwdXQgaW50byB0aGUgTmVvIG5hbWVzcGFjZSBpbiB0aGlzIGNhc2UpLlxuICogQGNsYXNzIE5lby5jb3JlLklkR2VuZXJhdG9yXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIElkR2VuZXJhdG9yIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhpcyBvbmUgdG8gZmFsc2UgaW4gY2FzZSB5b3UgZG9uJ3Qgd2FudCB0byBzdGlja1xuICAgICAgICAgKiB0byB0aGUgXCJhbnRpLXBhdHRlcm5cIiB0byBhcHBseSBjbGFzc2VzIHRvIHRoZSBnbG9iYWwgTmVvIG9yIEFwcCBuYW1lc3BhY2VcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVnaXN0ZXJUb0dsb2JhbE5zPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICByZWdpc3RlclRvR2xvYmFsTnM6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLklkR2VuZXJhdG9yJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5JZEdlbmVyYXRvcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdpZC1nZW5lcmF0b3InXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnaWQtZ2VuZXJhdG9yJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHByZWZpeCBmb3IgbmVvIGluc3RhbmNlIGlkc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGJhc2U9J25lby0nXG4gICAgICAgICAqL1xuICAgICAgICBiYXNlOiAnbmVvLScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249J3RydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmlkQ291bnRlciA9IHt9O1xuXG4gICAgICAgIC8vIGFsaWFzXG4gICAgICAgIE5lby5nZXRJZCA9IG1lLmdldElkLmJpbmQobWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldElkKG5hbWUpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUgfHwgJ25lbyc7XG5cbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY291bnRlciA9IG1lLmlkQ291bnRlcixcbiAgICAgICAgICAgIGNvdW50ICAgPSBjb3VudGVyW25hbWVdIHx8IDA7XG5cbiAgICAgICAgY291bnRlcltuYW1lXSA9ICsrY291bnQ7XG5cbiAgICAgICAgcmV0dXJuIG1lLmJhc2UgKyAobmFtZSA9PT0gJ25lbycgPyAnJyA6IG5hbWUgKyAnLScpICsgY291bnQ7XG4gICAgfVxuXG4gICAgaW5pdCgpIHt9XG5cbiAgICBvbkFmdGVyQ29uc3RydWN0ZWQoKSB7fVxuXG4gICAgb25Db25zdHJ1Y3RlZCgpIHt9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKElkR2VuZXJhdG9yKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShJZEdlbmVyYXRvcik7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvcmUuTG9nZ2VyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIExvZ2dlciBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5Mb2dnZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLkxvZ2dlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdsb2dnZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbG9nZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIGNvbmZpZyB0byBmYWxzZSB0byBkaXNhYmxlIHRoZSBsb2dnaW5nXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGVuYWJsZUxvZ3M9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgZW5hYmxlTG9nczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbGV2ZWw9J2xvZydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbGV2ZWw6ICdsb2cnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gZW5hYmxlTG9ncz10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICAvLyBhbGlhc2VzXG4gICAgICAgIE5lby5hcHBseUZyb21OcyhOZW8sIHRoaXMsIHtcbiAgICAgICAgICAgIGVycm9yICAgOiAnZXJyb3InLFxuICAgICAgICAgICAgaW5mbyAgICA6ICdpbmZvJyxcbiAgICAgICAgICAgIGxvZyAgICAgOiAnbG9nJyxcbiAgICAgICAgICAgIGxvZ0Vycm9yOiAnbG9nRXJyb3InLFxuICAgICAgICAgICAgd2FybiAgICA6ICd3YXJuJ1xuICAgICAgICB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIGVycm9yKHZhbHVlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcih2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIGluZm8oLi4uYXJncykge1xuICAgICAgICB0aGlzLmxldmVsID0gJ2luZm8nO1xuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBsb2coLi4uYXJncykge1xuICAgICAgICB0aGlzLmxldmVsID0gJ2xvZyc7XG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIGxvZ0Vycm9yKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdlcnJvcic7XG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIHdhcm4oLi4uYXJncykge1xuICAgICAgICB0aGlzLmxldmVsID0gJ3dhcm4nO1xuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgd3JpdGUoLi4uYXJncykge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVMb2dzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zb2xlW3RoaXMubGV2ZWxdKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhMb2dnZXIpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKExvZ2dlcik7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvcmUuT2JzZXJ2YWJsZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBPYnNlcnZhYmxlIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLk9ic2VydmFibGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLk9ic2VydmFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbWl4aW4tb2JzZXJ2YWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdtaXhpbi1vYnNlcnZhYmxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1peGluPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW46IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbb3JkZXJdXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSBldmVudElkIG51bGwgaW4gY2FzZSBhbiBvYmplY3QgZ2V0cyBwYXNzZWQgYXMgdGhlIG5hbWUgKG11bHRpcGxlIGlkcylcbiAgICAgKi9cbiAgICBhZGRMaXN0ZW5lcihuYW1lLCBvcHRzLCBzY29wZSwgZXZlbnRJZCwgZGF0YSwgb3JkZXIpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbmFtZU9iamVjdCA9IHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyxcbiAgICAgICAgICAgIGxpc3RlbmVyLCBleGlzdGluZywgZXZlbnRDb25maWc7XG5cbiAgICAgICAgaWYgKG5hbWVPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KCdzY29wZScpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhuYW1lKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBtZS5hZGRMaXN0ZW5lcihrZXksIHZhbHVlLCBzY29wZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHNjb3BlID0gc2NvcGUgfHwgb3B0cy5zY29wZTtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gb3B0cy5mbjtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIgfHwgb3B0cy5vcmRlcjtcbiAgICAgICAgICAgIGV2ZW50SWQgPSBldmVudElkIHx8IG9wdHMuZXZlbnRJZDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzOyAvLyBWQyBob29rLCBjYW4gZ2V0IHBhcnNlZCBhZnRlciBvbkNvbnN0cnVjdGVkIGluIGNhc2UgdGhlIHZpZXcgdXNlcyB0aGUgcGFyZW50IFZDXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYWRkTGlzdGVuZXIgY2FsbDogJyArIG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuYW1lT2JqZWN0KSB7XG4gICAgICAgICAgICBldmVudENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBmbiAgICA6IGxpc3RlbmVyLFxuICAgICAgICAgICAgICAgIHNjb3BlIDogc2NvcGUsXG4gICAgICAgICAgICAgICAgZGF0YSAgOiBkYXRhLFxuICAgICAgICAgICAgICAgIGlkICAgIDogZXZlbnRJZCB8fCBOZW8uZ2V0SWQoJ2V2ZW50JylcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChleGlzdGluZyA9IG1lLmxpc3RlbmVycz8uW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmcuZm9yRWFjaChjZmcgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2ZnLmlkID09PSBldmVudElkIHx8IChjZmcuZm4gPT09IGxpc3RlbmVyICYmIGNmZy5zY29wZSA9PT0gc2NvcGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdEdXBsaWNhdGUgZXZlbnQgaGFuZGxlciBhdHRhY2hlZDonLCBuYW1lLCBtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JkZXIgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnNwbGljZShvcmRlciwgMCwgZXZlbnRDb25maWcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdiZWZvcmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnVuc2hpZnQoZXZlbnRDb25maWcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnB1c2goZXZlbnRDb25maWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUubGlzdGVuZXJzW25hbWVdID0gW2V2ZW50Q29uZmlnXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50Q29uZmlnLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqL1xuICAgIGZpcmUobmFtZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFyZ3MgICAgICA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycyxcbiAgICAgICAgICAgIGV2ZW50Q29uZmlnLCBldmVudHMsIGksIGxlbjtcblxuICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgZXZlbnRzID0gWy4uLmxpc3RlbmVyc1tuYW1lXV07XG4gICAgICAgICAgICBsZW4gICAgPSBldmVudHMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBldmVudENvbmZpZyA9IGV2ZW50c1tpXTtcblxuICAgICAgICAgICAgICAgIGV2ZW50Q29uZmlnLmZuLmFwcGx5KGV2ZW50Q29uZmlnLnNjb3BlIHx8IG1lLCBldmVudENvbmZpZy5kYXRhID8gYXJncy5jb25jYXQoZXZlbnRDb25maWcuZGF0YSkgOiBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRPYnNlcnZhYmxlKGNvbmZpZykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgcHJvdG8gPSBtZS5fX3Byb3RvX18sXG4gICAgICAgICAgICBsaXN0ZW5lcnM7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIG1lLmxpc3RlbmVycyA9IGNvbmZpZy5saXN0ZW5lcnM7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLmxpc3RlbmVycztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycztcblxuICAgICAgICBtZS5saXN0ZW5lcnMgPSB7fTtcblxuICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KGxpc3RlbmVycykpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSB7Li4ubGlzdGVuZXJzfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuYWRkTGlzdGVuZXIobGlzdGVuZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChwcm90bz8uY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgaWYgKHByb3RvLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZy5vYnNlcnZhYmxlICYmICFwcm90by5jb25zdHJ1Y3Rvci5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHByb3RvLmNvbnN0cnVjdG9yLCB7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RlbmVyICAgOiBtZS5hZGRMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgZmlyZSAgICAgICAgICA6IG1lLmZpcmUsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgb24gICAgICAgICAgICA6IG1lLm9uLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcjogbWUucmVtb3ZlTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIHVuICAgICAgICAgICAgOiBtZS51blxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgYWRkTGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbb3JkZXJdXG4gICAgICogQHJldHVybnMge1N0cmluZ30gZXZlbnRJZFxuICAgICAqL1xuICAgIG9uKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXG4gICAgICovXG4gICAgcmVtb3ZlTGlzdGVuZXIobmFtZSwgZXZlbnRJZCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgaSwgbGVuLCBsaXN0ZW5lciwgbGlzdGVuZXJzLCBtYXRjaCwgc2NvcGU7XG5cbiAgICAgICAgaWYgKE5lby5pc09iamVjdChuYW1lKSkge1xuICAgICAgICAgICAgaWYgKG5hbWUuc2NvcGUpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IG5hbWUuc2NvcGU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUuc2NvcGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVyc1trZXldIHx8IFtdO1xuICAgICAgICAgICAgICAgIGkgICAgICAgICA9IDA7XG4gICAgICAgICAgICAgICAgbGVuICAgICAgID0gbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuZm4ubmFtZSA9PT0gKE5lby5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlLm5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5zY29wZSAgID09PSBzY29wZVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKE5lby5pc1N0cmluZyhldmVudElkKSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzW25hbWVdO1xuICAgICAgICAgICAgbWF0Y2ggICAgID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChldmVudENvbmZpZywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Q29uZmlnLmlkID09PSBldmVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaCA9IGlkeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UobWF0Y2gsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlQWxsTGlzdGVuZXJzOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICAvLyB9LFxuXG4gICAgLy8gc3VzcGVuZExpc3RlbmVyczogZnVuY3Rpb24ocXVldWUpIHtcblxuICAgIC8vIH0sXG5cbiAgICAvLyByZXN1bWVMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIHJlbW92ZUxpc3RlbmVyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtldmVudElkXVxuICAgICAqL1xuICAgIHVuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lciguLi5hcmdzKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE9ic2VydmFibGUpO1xuXG5leHBvcnQge09ic2VydmFibGUgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvcmUuVXRpbFxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBVdGlsIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSByZWdleCB0byByZW1vdmUgY2FtZWwgY2FzZSBzeW50YXhcbiAgICAgICAgICogQG1lbWJlciB7UmVnRXhwfSBkZWNhbWVsUmVnRXg9LyhbYS16XSkoW0EtWl0pL2dcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBkZWNhbWVsUmVnRXg6IC8oW2Etel0pKFtBLVpdKS9nXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5VdGlsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5VdGlsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvcmUtdXRpbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjb3JlLXV0aWwnLFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IHZhbHVlc1xuICAgICAqL1xuICAgIHN0YXRpYyBiaW5kTWV0aG9kcyhzY29wZSwgdmFsdWVzKSB7XG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNjb3BlW3ZhbHVlXSA9IHNjb3BlW3ZhbHVlXS5iaW5kKHNjb3BlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBhIHN0cmluZyB1cHBlcmNhc2VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gICAgICogQHJldHVybnMge0Jvb2xlYW58U3RyaW5nfSBSZXR1cm5zIGZhbHNlIGZvciBub24gc3RyaW5nIGlucHV0c1xuICAgICAqL1xuICAgIHN0YXRpYyBjYXBpdGFsaXplKHN0cmluZykge1xuICAgICAgICByZXR1cm4gVXRpbC5pc1N0cmluZyhzdHJpbmcpICYmIHN0cmluZ1swXS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYSBzdHlsZXMgc3RyaW5nIGludG8gYSBzdHlsZXMgb2JqZWN0IHVzaW5nIGNhbWVsY2FzZSBzeW50YXhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBzdHlsZXMgc3RyaW5nIHRvIHBhcnNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIGNhbWVsY2FzZSBzdHlsZXMgb2JqZWN0XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlT2JqZWN0KHN0cmluZykge1xuICAgICAgICBpZiAoIXN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFydHM7XG5cbiAgICAgICAgLy8gc3BsaXQoJzsnKSBkb2VzIGZldGNoIHNlbWljb2xvbnMgaW5zaWRlIGJyYWNrZXRzXG4gICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IFwidXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsLi4uXG5cbiAgICAgICAgLy8gVE9ETzogQ2FjaGUgYWxsIHJlZ2V4XG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoLzsoPz1bXlxcKV0qKD86XFwofCQpKS9nKS5yZWR1Y2UoKG9iaiwgZWwpID0+IHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gc3BsaXQgYnkgdGhlIGZpcnN0IGNvbG9uIG9ubHlcbiAgICAgICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2V4YW1wbGUuY29tL2ltYWdlLnBuZycpXG4gICAgICAgICAgICBwYXJ0cyA9IGVsLnNwbGl0KCgvOiguKykvKSkubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHBhcnNlRmxvYXQoeCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geCA9PSBudW0gPyBudW0gOiB4LnRyaW0oKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocGFydHNbMF0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC8tKFthLXpdKS9nLCAoc3RyLCBsZXR0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG9ialtwYXJ0c1swXV0gPSBwYXJ0c1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHN0eWxlcyBvYmplY3Qgd2hpY2ggY2FuIHVzZSBjYW1lbGNhc2Ugc3ludGF4IGludG8gYSBzdHlsZXMgc3RyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyBUaGUgc3R5bGVzIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHlsZXMgc3RyaW5nIChET00gcmVhZHkpXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgbGV0IHN0eWxlID0gJyc7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3R5bGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gVXRpbC5kZWNhbWVsKGtleSkgKyAnOicgKyB2YWx1ZSArICc7JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYWxsIHVwcGVyY2FzZSBjaGFyYWN0ZXJzIG9mIGEgc3RyaW5nIGludG8gbG93ZXJjYXNlLlxuICAgICAqIERvZXMgbm90IHRvdWNoIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIGlucHV0IGNvbnRhaW5pbmcgdXBwZXJjYXNlIGNoYXJhY3RlcnNcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbG93ZXJjYXNlIG91dHB1dFxuICAgICAqL1xuICAgIHN0YXRpYyBkZWNhbWVsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKFV0aWwuZGVjYW1lbFJlZ0V4LCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIGFycmF5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQXJyYXkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBib29sZWFuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQm9vbGVhbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgbm90IHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0RlZmluZWQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gZW1wdHkgQXJyYXksIE9iamVjdCBvciBTdHJpbmdcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWwuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgbnVtYmVyLiBSZXR1cm5zIGZhbHNlIGZvciBub24tZmluaXRlIG51bWJlcnNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNOdW1iZXIodmFsdWUpe1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhbnkgaXRlcmFibGUgKHN0cmluZ3MsIG51bWVyaWMgaW5kaWNlcyBhbmQgYSBsZW5ndGggcHJvcGVydHkpIGludG8gYSB0cnVlIGFycmF5XG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBpdGVyYWJsZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnQ9MF0gc3RhcnQgaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2VuZD1pdGVyYWJsZS5sZW5ndGhdIGVuZCBpbmRleFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgdG9BcnJheShpdGVyYWJsZSwgc3RhcnQsIGVuZCkge1xuICAgICAgICBsZXQgbGVuO1xuXG4gICAgICAgIGlmICghaXRlcmFibGUgfHwgIShsZW4gPSBpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhYmxlLnNwbGl0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpdGVyYWJsZSwgc3RhcnQgfHwgMCwgZW5kIHx8IGxlbik7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhVdGlsKTtcblxuLy8gYWxpYXNlc1xuTmVvLmFwcGx5RnJvbU5zKE5lbywgVXRpbCwge1xuICAgIGJpbmRNZXRob2RzICAgICAgOiAnYmluZE1ldGhvZHMnLFxuICAgIGNyZWF0ZVN0eWxlT2JqZWN0OiAnY3JlYXRlU3R5bGVPYmplY3QnLFxuICAgIGNyZWF0ZVN0eWxlcyAgICAgOiAnY3JlYXRlU3R5bGVzJyxcbiAgICBjYXBpdGFsaXplICAgICAgIDogJ2NhcGl0YWxpemUnLFxuICAgIGRlY2FtZWwgICAgICAgICAgOiAnZGVjYW1lbCcsXG4gICAgaXNBcnJheSAgICAgICAgICA6ICdpc0FycmF5JyxcbiAgICBpc0Jvb2xlYW4gICAgICAgIDogJ2lzQm9vbGVhbicsXG4gICAgaXNEZWZpbmVkICAgICAgICA6ICdpc0RlZmluZWQnLFxuICAgIGlzRW1wdHkgICAgICAgICAgOiAnaXNFbXB0eScsXG4gICAgaXNGdW5jdGlvbiAgICAgICA6ICdpc0Z1bmN0aW9uJyxcbiAgICBpc051bWJlciAgICAgICAgIDogJ2lzTnVtYmVyJyxcbiAgICBpc09iamVjdCAgICAgICAgIDogJ2lzT2JqZWN0JyxcbiAgICBpc1N0cmluZyAgICAgICAgIDogJ2lzU3RyaW5nJyxcbiAgICB0b0FycmF5ICAgICAgICAgIDogJ3RvQXJyYXknXG59LCB0cnVlKTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDtcbiIsImltcG9ydCBCYXNlICAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBDb21wYXJlICAgICBmcm9tICcuL0NvbXBhcmUubWpzJztcbmltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuL0lkR2VuZXJhdG9yLm1qcyc7XG5pbXBvcnQgTG9nZ2VyICAgICAgZnJvbSAnLi9Mb2dnZXIubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICBmcm9tICcuL09ic2VydmFibGUubWpzJztcbmltcG9ydCBVdGlsICAgICAgICBmcm9tICcuL1V0aWwubWpzJztcblxuZXhwb3J0IHtCYXNlLCBDb21wYXJlLCBJZEdlbmVyYXRvciwgTG9nZ2VyLCBPYnNlcnZhYmxlLCBVdGlsfTtcbiIsImltcG9ydCBCYXNlICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgRGVsdGFVcGRhdGVzIGZyb20gJy4vbWl4aW4vRGVsdGFVcGRhdGVzLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSAgIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubWFpbi5Eb21BY2Nlc3NcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgRG9tQWNjZXNzIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLkRvbUFjY2VzcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1haW4uRG9tQWNjZXNzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY291bnREZWx0YXM9MFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjb3VudERlbHRhczogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY291bnREZWx0YXNQZXIyNTBtcz0wXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNvdW50RGVsdGFzUGVyMjUwbXM6IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGNvdW50VXBkYXRlcz0wXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNvdW50VXBkYXRlczogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBtaXhpbnM9W0RlbHRhVXBkYXRlcywgT2JzZXJ2YWJsZV1cbiAgICAgICAgICovXG4gICAgICAgIG1peGluczogW1xuICAgICAgICAgICAgRGVsdGFVcGRhdGVzLFxuICAgICAgICAgICAgT2JzZXJ2YWJsZVxuICAgICAgICBdLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgZm9yIG90aGVyIHdvcmtlcnNcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGU9e2FwcDogWy8vLi4uXX1cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlOiB7XG4gICAgICAgICAgICBhcHA6IFtcbiAgICAgICAgICAgICAgICAnYWRkU2NyaXB0JyxcbiAgICAgICAgICAgICAgICAnYXBwbHlCb2R5Q2xzJyxcbiAgICAgICAgICAgICAgICAnZXhlY0NvbW1hbmQnLFxuICAgICAgICAgICAgICAgICdmb2N1cycsXG4gICAgICAgICAgICAgICAgJ2dldEF0dHJpYnV0ZXMnLFxuICAgICAgICAgICAgICAgICdnZXRCb3VuZGluZ0NsaWVudFJlY3QnLFxuICAgICAgICAgICAgICAgICdzY3JvbGxCeScsXG4gICAgICAgICAgICAgICAgJ3Njcm9sbEludG9WaWV3JyxcbiAgICAgICAgICAgICAgICAnc2Nyb2xsVG8nLFxuICAgICAgICAgICAgICAgICdzY3JvbGxUb1RhYmxlUm93JyxcbiAgICAgICAgICAgICAgICAnc2VsZWN0Tm9kZScsXG4gICAgICAgICAgICAgICAgJ3NldEJvZHlDbHMnLFxuICAgICAgICAgICAgICAgICdzZXRTdHlsZScsXG4gICAgICAgICAgICAgICAgJ3dpbmRvd1Njcm9sbFRvJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVm9pZCBhdHRyaWJ1dGVzIGluc2lkZSBodG1sIHRhZ3NcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IHZvaWRBdHRyaWJ1dGVzXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHZvaWRBdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICAnY2hlY2tlZCcsXG4gICAgICAgICAgICAncmVxdWlyZWQnXG4gICAgICAgIF1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIG5vZGU7XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcucmVuZGVyQ291bnREZWx0YXMpIHtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25lby1kZWx0YS11cGRhdGVzJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gU3RyaW5nKG1lLmNvdW50RGVsdGFzUGVyMjUwbXMgKiA0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5jb3VudERlbHRhc1BlcjI1MG1zID0gMDtcbiAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBkYXRhLmFzeW5jXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZGF0YS5kZWZlcj1mYWxzZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEuc3JjPXRydWVdXG4gICAgICovXG4gICAgYWRkU2NyaXB0KGRhdGEpIHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICAgICAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KCdhc3luYycpKSB7XG4gICAgICAgICAgICBkYXRhLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oc2NyaXB0LCBkYXRhKTtcblxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IGRhdGEuY2xzXG4gICAgICovXG4gICAgYXBwbHlCb2R5Q2xzKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2xzID0gZGF0YS5jbHMgfHwgW107XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCguLi5jbHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5jb21tYW5kXG4gICAgICogQHJldHVybnMge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGV4ZWNDb21tYW5kKGRhdGEpIHtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoZGF0YS5jb21tYW5kKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgZm9jdXMgb24gYSBub2RlIGZvciBhIGdpdmVuIGRvbSBub2RlIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIGZvY3VzKGRhdGEpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnQoZGF0YS5pZCk7XG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuZm9jdXMoKTtcblxuICAgICAgICAgICAgaWYgKE5lby5pc051bWJlcihub2RlLnNlbGVjdGlvblN0YXJ0KSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc2VsZWN0aW9uU3RhcnQgPSBub2RlLnNlbGVjdGlvbkVuZCA9IG5vZGUudmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtpZDogZGF0YS5pZH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYXR0cmlidXRlcyBmb3IgYSBnaXZlbiBkb20gbm9kZSBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IGRhdGEuaWQgZWl0aGVyIGFuIGlkIG9yIGFuIGFycmF5IG9mIGlkc1xuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBkYXRhLmF0dHJpYnV0ZXMgZWl0aGVyIGFuIGF0dHJpYnV0ZSBvciBhbiBhcnJheSBvZiBhdHRyaWJ1dGVzXG4gICAgICogQHJldHVybnMge0FycmF5fE9iamVjdH0gSW4gY2FzZSBpZCBpcyBhbiBhcnJheSwgYW4gYXJyYXkgb2YgYXRycmJ1dGUgb2JqZWN0cyBpcyByZXR1cm5lZCwgb3RoZXJ3aXNlIGFuIG9iamVjdFxuICAgICAqL1xuICAgIGdldEF0dHJpYnV0ZXMoZGF0YSkge1xuICAgICAgICBsZXQgcmV0dXJuRGF0YTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuRGF0YSA9IFtdO1xuXG4gICAgICAgICAgICBkYXRhLmlkLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybkRhdGEucHVzaCh0aGlzLmdldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkYXRhLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICAgICAgIGlkICAgICAgICA6IGlkXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudE9yQm9keShkYXRhLmlkKTtcblxuICAgICAgICAgICAgcmV0dXJuRGF0YSA9IHt9O1xuXG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLmF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXR0cmlidXRlcyA9IFtkYXRhLmF0dHJpYnV0ZXNdO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXR0cmlidXRlcy5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5EYXRhW2F0dHJpYnV0ZV0gPSBub2RlW2F0dHJpYnV0ZV07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVybkRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGZvciBhIGdpdmVuIGRvbSBub2RlIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gZGF0YS5pZCBlaXRoZXIgYW4gaWQgb3IgYW4gYXJyYXkgb2YgaWRzXG4gICAgICogQHJldHVybnMge0FycmF5fE9iamVjdH0gSW4gY2FzZSBpZCBpcyBhbiBhcnJheSwgYW4gYXJyYXkgb2YgRG9tUmVjdHMgaXMgcmV0dXJuZWQsIG90aGVyd2lzZSBhbiBEb21SZWN0IG9iamVjdFxuICAgICAqL1xuICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdChkYXRhKSB7XG4gICAgICAgIGxldCByZXR1cm5EYXRhO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICAgICAgICByZXR1cm5EYXRhID0gW107XG5cbiAgICAgICAgICAgIGRhdGEuaWQuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuRGF0YS5wdXNoKHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHtpZDogaWR9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5nZXRFbGVtZW50T3JCb2R5KGRhdGEuaWQpLFxuICAgICAgICAgICAgICAgIHJlY3QgPSB7fTtcblxuICAgICAgICAgICAgcmV0dXJuRGF0YSA9IHt9O1xuXG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gRG9tUmVjdCBkb2VzIG5vdCBzdXBwb3J0IHNwcmVhZGluZyA9PiB7Li4uRG9tUmVjdH0gPT4ge31cbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdCAgOiByZWN0LmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0IDogcmVjdC5yaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdG9wICAgOiByZWN0LnRvcCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggOiByZWN0LndpZHRoLFxuICAgICAgICAgICAgICAgICAgICB4ICAgICA6IHJlY3QueCxcbiAgICAgICAgICAgICAgICAgICAgeSAgICAgOiByZWN0LnlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5EYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZ2V0RWxlbWVudChub2RlSWQpIHtcbiAgICAgICAgaWYgKE5lby5jb25maWcudXNlRG9tSWRzKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobm9kZUlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uZW8taWQ9JyR7bm9kZUlkfSddYCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW25vZGVJZD0nZG9jdW1lbnQuYm9keSddXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBnZXRFbGVtZW50T3JCb2R5KG5vZGVJZD0nZG9jdW1lbnQuYm9keScpIHtcbiAgICAgICAgaWYgKG5vZGVJZCA9PT0gJ2JvZHknIHx8IG5vZGVJZCA9PT0gJ2RvY3VtZW50LmJvZHknKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQobm9kZUlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmNsdWRlIGEgc2NyaXB0IGludG8gdGhlIGRvY3VtZW50LmhlYWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3JjXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbYXN5bmM9dHJ1ZV1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmtub3duPn1cbiAgICAgKi9cbiAgICBsb2FkU2NyaXB0KHNyYywgYXN5bmM9dHJ1ZSkge1xuICAgICAgICBsZXQgc2NyaXB0O1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzY3JpcHQsIHtcbiAgICAgICAgICAgICAgICBhc3luYyAgOiBhc3luYyxcbiAgICAgICAgICAgICAgICBvbmVycm9yOiByZWplY3QsXG4gICAgICAgICAgICAgICAgb25sb2FkIDogcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICBzcmMgICAgOiBzcmNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluY2x1ZGUgYSBsaW5rIGludG8gdGhlIGRvY3VtZW50LmhlYWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaHJlZlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd24+fVxuICAgICAqL1xuICAgIGxvYWRTdHlsZXNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IGxpbms7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obGluaywge1xuICAgICAgICAgICAgICAgIGhyZWYgICA6IGhyZWYsXG4gICAgICAgICAgICAgICAgb25lcnJvcjogcmVqZWN0LFxuICAgICAgICAgICAgICAgIG9ubG9hZCA6IHJlc29sdmUsXG4gICAgICAgICAgICAgICAgcmVsICAgIDogJ3N0eWxlc2hlZXQnLFxuICAgICAgICAgICAgICAgIHR5cGUgICA6ICd0ZXh0L2NzcydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uRG9tQ29udGVudExvYWRlZCgpIHtcbiAgICAgICAgaWYgKE5lby5jb25maWcuYXBwbHlCb2R5Q2xzKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGx5Qm9keUNscyh7Y2xzOiBbJ25lby1ib2R5J119KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEubm9kZUlkXG4gICAgICovXG4gICAgb25HZXRPZmZzY3JlZW5DYW52YXMoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG5vZGUgICAgICA9IG1lLmdldEVsZW1lbnQoZGF0YS5ub2RlSWQpLFxuICAgICAgICAgICAgb2Zmc2NyZWVuID0gbm9kZS50cmFuc2ZlckNvbnRyb2xUb09mZnNjcmVlbigpO1xuXG4gICAgICAgIGRhdGEub2Zmc2NyZWVuID0gb2Zmc2NyZWVuO1xuXG4gICAgICAgIE5lby53b3JrZXIuTWFuYWdlci5zZW5kTWVzc2FnZShkYXRhLm9yaWdpbiwge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEgICA6IGRhdGEsXG4gICAgICAgICAgICByZXBseUlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9LCBbb2Zmc2NyZWVuXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IGRhdGEuYXR0cmlidXRlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGRhdGEuZnVuY3Rpb25zIEFuIGFycmF5IGNvbnRhaW5pbmcgc3RyaW5ncyBhbmQvb3Igb2JqZWN0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IGRhdGEuc3R5bGVzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudm5vZGVJZFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvblJlYWREb20oZGF0YSkge1xuICAgICAgICBsZXQgYXR0cmlidXRlcyAgICA9IGRhdGEuYXR0cmlidXRlcyB8fCBbXSxcbiAgICAgICAgICAgIGZ1bmN0aW9ucyAgICAgPSBkYXRhLmZ1bmN0aW9ucyAgfHwgW10sXG4gICAgICAgICAgICBzdHlsZXMgICAgICAgID0gZGF0YS5zdHlsZXMgICAgIHx8IFtdLFxuICAgICAgICAgICAgdm5vZGVJZCAgICAgICA9IGRhdGEudm5vZGVJZCxcbiAgICAgICAgICAgIHJldEF0dHJpYnV0ZXMgPSB7fSxcbiAgICAgICAgICAgIHJldEZ1bmN0aW9ucyAgPSB7fSxcbiAgICAgICAgICAgIHJldFN0eWxlcyAgICAgPSB7fSxcbiAgICAgICAgICAgIGVsZW1lbnQgICAgICAgPSB2bm9kZUlkID8gdGhpcy5nZXRFbGVtZW50KHZub2RlSWQpIDogbnVsbCxcbiAgICAgICAgICAgIGZuTmFtZSwgc2NvcGU7XG5cbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICByZXRBdHRyaWJ1dGVzW2tleV0gPSBlbGVtZW50W2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9ucy5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICBrZXkucGFyYW1zICAgICAgICAgPSBrZXkucGFyYW1zICAgICAgICAgfHwgW107XG4gICAgICAgICAgICAgICAga2V5LnBhcmFtSXNEb21Ob2RlID0ga2V5LnBhcmFtSXNEb21Ob2RlIHx8IFtdO1xuXG4gICAgICAgICAgICAgICAgc2NvcGUgPSBrZXkuc2NvcGUgPyBkb2N1bWVudFtrZXkuc2NvcGVdIDogZWxlbWVudDtcblxuICAgICAgICAgICAgICAgIGtleS5wYXJhbXMuZm9yRWFjaCgocGFyYW0sIHBhcmFtSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5wYXJhbUlzRG9tTm9kZVtwYXJhbUluZGV4XSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LnBhcmFtc1twYXJhbUluZGV4XSA9IHRoaXMuZ2V0RWxlbWVudChrZXkucGFyYW1zW3BhcmFtSW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm5OYW1lID0ga2V5LnJldHVybkZuTmFtZSA/IGtleS5yZXR1cm5Gbk5hbWUgOiBpbmRleDtcbiAgICAgICAgICAgICAgICByZXRGdW5jdGlvbnNbZm5OYW1lXSA9IHNjb3BlW2tleS5mbl0oLi4ua2V5LnBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnJldHVyblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldEZ1bmN0aW9uc1tmbk5hbWVdID0gcmV0RnVuY3Rpb25zW2ZuTmFtZV1ba2V5LnJldHVyblZhbHVlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldEZ1bmN0aW9uc1trZXldID0gZWxlbWVudFtrZXldKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICByZXRTdHlsZXNba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiByZXRBdHRyaWJ1dGVzLFxuICAgICAgICAgICAgZnVuY3Rpb25zIDogcmV0RnVuY3Rpb25zLFxuICAgICAgICAgICAgc3R5bGVzICAgIDogcmV0U3R5bGVzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lby53b3JrZXIuTWFuYWdlci5zZW5kTWVzc2FnZShkYXRhLm9yaWdpbiwge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEgICA6IGRhdGEsXG4gICAgICAgICAgICByZXBseUlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHJlYWQoZGF0YSkge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGRhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5kaXJlY3Rpb24gbGVmdCwgdG9wXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS52YWx1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IG9iai5pZCA9PiB0aGUgcGFzc2VkIGlkXG4gICAgICovXG4gICAgc2Nyb2xsQnkoZGF0YSkge1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudChkYXRhLmlkKTtcblxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgbm9kZVtgc2Nyb2xsJHtOZW8uY2FwaXRhbGl6ZShkYXRhLmRpcmVjdGlvbil9YF0gKz0gZGF0YS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7aWQ6IGRhdGEuaWR9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5iZWhhdmlvcj0nc21vb3RoJ11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEuYmxvY2s9J3N0YXJ0J11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEuaW5saW5lPSduZWFyZXN0J11cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIHNjcm9sbEludG9WaWV3KGRhdGEpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnQoZGF0YS5pZCk7XG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBkYXRhLmJlaGF2aW9yIHx8ICdzbW9vdGgnLFxuICAgICAgICAgICAgICAgIGJsb2NrICAgOiBkYXRhLmJsb2NrICAgIHx8ICdzdGFydCcsXG4gICAgICAgICAgICAgICAgaW5saW5lICA6IGRhdGEuaW5saW5lICAgfHwgJ25lYXJlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7aWQ6IGRhdGEuaWR9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5kaXJlY3Rpb24gbGVmdCwgdG9wXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS52YWx1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IG9iai5pZCA9PiB0aGUgcGFzc2VkIGlkXG4gICAgICovXG4gICAgc2Nyb2xsVG8oZGF0YSkge1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudChkYXRhLmlkKTtcblxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgbm9kZVtgc2Nyb2xsJHtOZW8uY2FwaXRhbGl6ZShkYXRhLmRpcmVjdGlvbil9YF0gPSBkYXRhLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtpZDogZGF0YS5pZH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLmJlaGF2aW9yPSdzbW9vdGgnXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5vZmZzZXQ9MzRdXG4gICAgICogQHJldHVybnMge09iamVjdH0gb2JqLmlkID0+IHRoZSBwYXNzZWQgaWRcbiAgICAgKi9cbiAgICBzY3JvbGxUb1RhYmxlUm93KGRhdGEpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnQoZGF0YS5pZCk7IC8vIHRyIHRhZ1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBsZXQgdGFibGVOb2RlICAgPSBub2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZSxcbiAgICAgICAgICAgICAgICB3cmFwcGVyTm9kZSA9IHRhYmxlTm9kZS5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIHRhYmxlVG9wICAgID0gdGFibGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcbiAgICAgICAgICAgICAgICB0b3AgICAgICAgICA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuXG4gICAgICAgICAgICB3cmFwcGVyTm9kZS5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgdG9wICAgICA6IHRvcCAtIHRhYmxlVG9wIC0gKGRhdGEuaGFzT3duUHJvcGVydHkoJ29mZnNldCcpID8gZGF0YS5vZmZzZXQgOiAzNCksXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6IGRhdGEuYmVoYXZpb3IgfHwgJ3Ntb290aCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtpZDogZGF0YS5pZH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtkYXRhLnN0YXJ0PTBdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtkYXRhLmVuZD05OTk5OV1cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIHNlbGVjdE5vZGUoZGF0YSkge1xuICAgICAgICBsZXQgbm9kZSAgPSB0aGlzLmdldEVsZW1lbnQoZGF0YS5pZCksXG4gICAgICAgICAgICBzdGFydCA9IE5lby5pc051bWJlcihkYXRhLnN0YXJ0KSB8fCAwLFxuICAgICAgICAgICAgZW5kICAgPSBOZW8uaXNOdW1iZXIoZGF0YS5lbmQpICAgfHwgOTk5OTk7XG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuc2VsZWN0KCk7XG4gICAgICAgICAgICBub2RlLnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtpZDogZGF0YS5pZH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBkYXRhLmFkZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGRhdGEucmVtb3ZlXG4gICAgICovXG4gICAgc2V0Qm9keUNscyhkYXRhKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSguLi5kYXRhLnJlbW92ZSB8fCBbXSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCguLi5kYXRhLmFkZCB8fCBbXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTm90IHJlY29tbWVuZGVkIHRvIHVzZSA9PiBzdGljayB0byB2ZG9tIHVwZGF0ZXMuXG4gICAgICogQ2FuIGJlIGhhbmR5IGZvciBjdXN0b20gQ1NTIGJhc2VkIGFuaW1hdGlvbnMgdGhvdWdoLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWQgQSBub2RlIGlkIG9yICdkb2N1bWVudC5ib2R5J1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLnN0eWxlXG4gICAgICogQHJldHVybnMge09iamVjdH0gb2JqLmlkID0+IHRoZSBwYXNzZWQgaWRcbiAgICAgKi9cbiAgICBzZXRTdHlsZShkYXRhKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5nZXRFbGVtZW50T3JCb2R5KGRhdGEuaWQpO1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhLnN0eWxlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKHZhbHVlKSAmJiB2YWx1ZS5pbmNsdWRlcygnIWltcG9ydGFudCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgnIWltcG9ydGFudCcsICcnKS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoTmVvLmRlY2FtZWwoa2V5KSwgdmFsdWUsICdpbXBvcnRhbnQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW05lby5kZWNhbWVsKGtleSldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2lkOiBkYXRhLmlkfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLmJlaGF2aW9yPSdzbW9vdGgnXSAvLyBhdXRvIG9yIHNtb290aFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5sZWZ0PTBdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLnRvcD0wXVxuICAgICAqL1xuICAgIHdpbmRvd1Njcm9sbFRvKGRhdGEpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIGJlaGF2aW9yOiBkYXRhLmJlaGF2aW9yIHx8ICdzbW9vdGgnLFxuICAgICAgICAgICAgbGVmdCAgICA6IGRhdGEubGVmdCAgICAgfHwgMCxcbiAgICAgICAgICAgIHRvcCAgICAgOiBkYXRhLnRvcCAgICAgIHx8IDBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB3cml0ZShkYXRhKSB7XG4gICAgICAgIHRoaXMuZHVfaW5zZXJ0Tm9kZSh7XG4gICAgICAgICAgICBpbmRleCAgICA6IGRhdGEucGFyZW50SW5kZXgsXG4gICAgICAgICAgICBvdXRlckhUTUw6IGRhdGEuaHRtbCB8fCBkYXRhLm91dGVySFRNTCxcbiAgICAgICAgICAgIHBhcmVudElkIDogZGF0YS5wYXJlbnRJZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKERvbUFjY2Vzcyk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoRG9tQWNjZXNzKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgICAgIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFRvdWNoRG9tRXZlbnRzIGZyb20gJy4vbWl4aW4vVG91Y2hEb21FdmVudHMubWpzJztcblxuY29uc3QgZ2xvYmFsRG9tRXZlbnRzID0gW1xuICAgIHtuYW1lOiAnY2hhbmdlJywgICAgICBoYW5kbGVyOiAnb25DaGFuZ2UnfSxcbiAgICB7bmFtZTogJ2NsaWNrJywgICAgICAgaGFuZGxlcjogJ29uQ2xpY2snfSxcbiAgICB7bmFtZTogJ2NvbnRleHRtZW51JywgaGFuZGxlcjogJ29uQ29udGV4dE1lbnUnfSxcbiAgICB7bmFtZTogJ2RibGNsaWNrJywgICAgaGFuZGxlcjogJ29uRG91YmxlQ2xpY2snfSxcbiAgICB7bmFtZTogJ2ZvY3VzaW4nLCAgICAgaGFuZGxlcjogJ29uRm9jdXNJbid9LFxuICAgIHtuYW1lOiAnZm9jdXNvdXQnLCAgICBoYW5kbGVyOiAnb25Gb2N1c091dCd9LFxuICAgIHtuYW1lOiAnaW5wdXQnLCAgICAgICBoYW5kbGVyOiAnb25DaGFuZ2UnfSxcbiAgICB7bmFtZTogJ2tleWRvd24nLCAgICAgaGFuZGxlcjogJ29uS2V5RG93bid9LFxuICAgIHtuYW1lOiAna2V5dXAnLCAgICAgICBoYW5kbGVyOiAnb25LZXlVcCd9LFxuICAgIHtuYW1lOiAnbW91c2Vkb3duJywgICBoYW5kbGVyOiAnb25Nb3VzZURvd24nfSxcbiAgICB7bmFtZTogJ21vdXNlZW50ZXInLCAgaGFuZGxlcjogJ29uTW91c2VFbnRlcicsIG9wdGlvbnM6IHtjYXB0dXJlOiB0cnVlfX0sXG4gICAge25hbWU6ICdtb3VzZWxlYXZlJywgIGhhbmRsZXI6ICdvbk1vdXNlTGVhdmUnLCBvcHRpb25zOiB7Y2FwdHVyZTogdHJ1ZX19LFxuICAgIHtuYW1lOiAnbW91c2V1cCcsICAgICBoYW5kbGVyOiAnb25Nb3VzZVVwJ30sXG4gICAge25hbWU6ICd3aGVlbCcsICAgICAgIGhhbmRsZXI6ICdvbldoZWVsJywgICAgICBvcHRpb25zOiB7cGFzc2l2ZTogZmFsc2V9fVxuXTtcblxuLy8gV2lsbCBnZXQgYXBwbGllZCB0byB0aGUgZG9jdW1lbnQuYm9keSBpbiBjYXNlIE5lby5jb25maWcudXNlVG91Y2hFdmVudHMgPT09IHRydWUgKGRlZmF1bHQgdmFsdWUpXG5jb25zdCB0b3VjaEV2ZW50cyA9IFtcbiAgICB7bmFtZTogJ3RvdWNoY2FuY2VsJywgaGFuZGxlcjogJ29uVG91Y2hDYW5jZWwnfSxcbiAgICB7bmFtZTogJ3RvdWNoZW5kJywgICAgaGFuZGxlcjogJ29uVG91Y2hFbmQnfSxcbiAgICB7bmFtZTogJ3RvdWNoZW50ZXInLCAgaGFuZGxlcjogJ29uVG91Y2hFbnRlcid9LFxuICAgIHtuYW1lOiAndG91Y2hsZWF2ZScsICBoYW5kbGVyOiAnb25Ub3VjaExlYXZlJ30sXG4gICAge25hbWU6ICd0b3VjaG1vdmUnLCAgIGhhbmRsZXI6ICdvblRvdWNoTW92ZSd9LFxuICAgIHtuYW1lOiAndG91Y2hzdGFydCcsICBoYW5kbGVyOiAnb25Ub3VjaFN0YXJ0J31cbl07XG5cbi8vIHdoZWVsIGV2ZW50cyBmaXJlIHZlcnkgb2Z0ZW4sIHNvIHdlIGxpbWl0IHRoZSB0YXJnZXRzIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHBvc3QgbWVzc2FnZXMgZnJvbSBtYWluIHRvIHRoZSBhcHAgd29ya2VyXG5jb25zdCBnbG9iYWxXaGVlbFRhcmdldHMgPSBbXG4gICAgJ25lby1jLW0tc2Nyb2xsY29udGFpbmVyJyxcbiAgICAnbmVvLWMtdy1zY3JvbGxjb250YWluZXInLFxuICAgICduZW8tY2FsZW5kYXIteWVhcmNvbXBvbmVudCcsXG4gICAgJ25lby1jaXJjbGUtY29tcG9uZW50JyxcbiAgICAnbmVvLWRhdGVzZWxlY3RvcicsXG4gICAgJ25lby1nYWxsZXJ5JyxcbiAgICAnbmVvLWhlbGl4J1xuXTtcblxuLy8gc2VwYXJhdGVkIGZyb20gZ2xvYmFsV2hlZWxUYXJnZXRzID0+IHBlcmZvcm1hbmNlXG4vLyBidWZmZXIgaW4gbXNcbmNvbnN0IGdsb2JhbFdoZWVsVGFyZ2V0c0J1ZmZlciA9IHtcbiAgICAnbmVvLWMtbS1zY3JvbGxjb250YWluZXInICAgOiAxMDAsXG4gICAgJ25lby1jLXctc2Nyb2xsY29udGFpbmVyJyAgIDogMTAwLFxuICAgICduZW8tY2FsZW5kYXIteWVhcmNvbXBvbmVudCc6IDMwMCxcbiAgICAnbmVvLWRhdGVzZWxlY3RvcicgICAgICAgICAgOiAzMDBcbn07XG5cbi8vIHNlcGFyYXRlZCBmcm9tIGdsb2JhbFdoZWVsVGFyZ2V0cyA9PiBwZXJmb3JtYW5jZVxuY29uc3QgZ2xvYmFsV2hlZWxUYXJnZXRzS2VlcEV2ZW50ID0gW1xuICAgICduZW8tYy1tLXNjcm9sbGNvbnRhaW5lcicsXG4gICAgJ25lby1jLXctc2Nyb2xsY29udGFpbmVyJ1xuXTtcblxuY29uc3QgbGFzdFdoZWVsRXZlbnQgPSB7XG4gICAgZGF0ZSAgOiBudWxsLFxuICAgIHRhcmdldDogbnVsbFxufTtcblxuY29uc3QgcHJldmVudENsaWNrVGFyZ2V0cyAgICAgICA9IFtdLFxuICAgICAgcHJldmVudENvbnRleHRtZW51VGFyZ2V0cyA9IFtdO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubWFpbi5Eb21FdmVudHNcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgRG9tRXZlbnRzIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLkRvbUV2ZW50cydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1haW4uRG9tRXZlbnRzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRvZG86IGNvbmRpdGlvbmFsIGR5bmFtaWMgaW1wb3J0IG9uY2UgdGhlIGJ1aWxkIHByb2Nlc3NlcyBjYW4gaGFuZGxlIGl0XG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBtaXhpbnM9W1RvdWNoRG9tRXZlbnRzXVxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBbVG91Y2hEb21FdmVudHNdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgZm9yIG90aGVyIHdvcmtlcnNcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGU9e2FwcDogWydhZGREb21MaXN0ZW5lciddfVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGU6IHtcbiAgICAgICAgICAgIGFwcDogW1xuICAgICAgICAgICAgICAgICdhZGREb21MaXN0ZW5lcicsXG4gICAgICAgICAgICAgICAgJ3JlZ2lzdGVyUHJldmVudERlZmF1bHRUYXJnZXRzJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG1lLm9uRG9tQ29udGVudExvYWRlZC5iaW5kKG1lKSk7XG4gICAgICAgIHdpbmRvdyAgLmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAgICAgICBtZS5vbkhhc2hDaGFuZ2UgICAgICAuYmluZChtZSkpO1xuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLnVzZVNoYXJlZFdvcmtlcnMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBtZS5vbkJlZm9yZVVubG9hZC5iaW5kKG1lKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgYWRkRG9tTGlzdGVuZXIoZGF0YSkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGkgICA9IDAsXG4gICAgICAgICAgICBsZW4gPSBkYXRhLmV2ZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBldmVudCwgaWQsIHRhcmdldE5vZGU7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgZXZlbnQgPSBkYXRhLmV2ZW50c1tpXTtcblxuICAgICAgICAgICAgaWYgKCFtZVtldmVudC5oYW5kbGVyXSkge1xuICAgICAgICAgICAgICAgIG1lW2V2ZW50LmhhbmRsZXJdID0gTmVvLmVtcHR5Rm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlkID0gZXZlbnQudm5vZGVJZCB8fCBkYXRhLnZub2RlSWQ7XG5cbiAgICAgICAgICAgIGlmIChpZCA9PT0gJ2RvY3VtZW50LmJvZHknKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5jb25maWcudXNlRG9tSWRzKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5lby1pZD0nJHtpZH0nXWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXJnZXROb2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQubmFtZSwgbWVbZXZlbnQuaGFuZGxlcl0uYmluZChtZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLndvcmtlci5NYW5hZ2VyLnNlbmRNZXNzYWdlKGRhdGEub3JpZ2luLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSAgIDogZGF0YSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYWRkR2xvYmFsRG9tTGlzdGVuZXJzKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIFsuLi5nbG9iYWxEb21FdmVudHNdLmNvbmNhdChOZW8uY29uZmlnLnVzZVRvdWNoRXZlbnRzID8gdG91Y2hFdmVudHMgOiBbXSkuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQubmFtZSwgbWVbZXZlbnQuaGFuZGxlcl0uYmluZChtZSksIGV2ZW50Lm9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwb2ludHNcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHgxIFRoZSBYIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBwb2ludFxuICAgICAqIEBwYXJhbSAge051bWJlcn0geTEgVGhlIFkgcG9zaXRpb24gb2YgdGhlIGZpcnN0IHBvaW50XG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB4MiBUaGUgWCBwb3NpdGlvbiBvZiB0aGUgc2Vjb25kIHBvaW50XG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB5MiBUaGUgWSBwb3NpdGlvbiBvZiB0aGUgc2Vjb25kIHBvaW50XG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXREaXN0YW5jZSh4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh4MiAtIHgxKSAqKiAyICsgKHkyIC0geTEpICoqIDIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvY2FsIGRvbUV2ZW50IGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgZG9tRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldCA9IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gICA6ICdkb21FdmVudCcsXG4gICAgICAgICAgICAgICAgZXZlbnROYW1lOiBldmVudC50eXBlLFxuXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAuLi5tZS5nZXRFdmVudERhdGEoZXZlbnQpLFxuICAgICAgICAgICAgICAgICAgICBpZCAgIDogdGFyZ2V0LmlkLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZG9tRXZlbnRMaXN0ZW5lcicsIGV2ZW50LnR5cGUsIHRhcmdldC5pZCwgdGFyZ2V0LnZhbHVlLCBldmVudCk7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdkcmFnZW5kJzpcbiAgICAgICAgICAgICAgICBtZS5kcmFnRWxlbWVudElkID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RyYWdlbnRlcic6XG4gICAgICAgICAgICAgICAgaWYgKG1lLmRyYWdFbGVtZW50SWQgPT09IHRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGlnbm9yZSB0YXJnZXQgYW5kIHNvdXJjZSB0byBiZSB0aGUgc2FtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RyYWdsZWF2ZSc6XG4gICAgICAgICAgICAgICAgaWYgKG1lLmRyYWdFbGVtZW50SWQgPT09IHRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGlnbm9yZSB0YXJnZXQgYW5kIHNvdXJjZSB0byBiZSB0aGUgc2FtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcbiAgICAgICAgICAgICAgICBtZS5vbkRyYWdPdmVyKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZHJhZ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBtZS5kcmFnRWxlbWVudElkID0gdGFyZ2V0LmlkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZHJvcCc6XG4gICAgICAgICAgICAgICAgaWYgKCFtZS5kcmFnRWxlbWVudElkIHx8IG1lLmRyYWdFbGVtZW50SWQgPT09IHRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGRyb3AgZmlyZXMgdHdpY2UgYnkgZGVmYXVsdCAmIGRyb3Agc2hvdWxkIG5vdCB0cmlnZ2VyIG9uIHRoZSBkcmFnIGVsZW1lbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gc3RvcHMgdGhlIGJyb3dzZXIgZnJvbSByZWRpcmVjdGluZy5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25maWcuZGF0YS5zcmNJZCA9IG1lLmRyYWdFbGVtZW50SWQ7XG4gICAgICAgICAgICAgICAgbWUuZHJhZ0VsZW1lbnRJZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb3VzZW1vdmUnOlxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLmRhdGEsIG1lLmdldE1vdXNlRXZlbnREYXRhKGV2ZW50KSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBOZW8ud29ya2VyLk1hbmFnZXIuc2VuZE1lc3NhZ2UoJ2FwcCcsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldEV2ZW50RGF0YShldmVudCkge1xuICAgICAgICBsZXQgcGF0aCA9IGV2ZW50LnBhdGggfHwgZXZlbnQuY29tcG9zZWRQYXRoKCk7IC8vIEZGIGRvZXMgbm90IHN1cHBvcnQgcGF0aFxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXRoICAgICA6IHBhdGgubWFwKGUgPT4gdGhpcy5nZXRUYXJnZXREYXRhKGUpKSxcbiAgICAgICAgICAgIHRhcmdldCAgIDogdGhpcy5nZXRUYXJnZXREYXRhKGV2ZW50LnRhcmdldCksXG4gICAgICAgICAgICB0aW1lU3RhbXA6IGV2ZW50LnRpbWVTdGFtcCxcbiAgICAgICAgICAgIHR5cGUgICAgIDogZXZlbnQudHlwZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRLZXlib2FyZEV2ZW50RGF0YShldmVudCkge1xuICAgICAgICBjb25zdCB7YWx0S2V5LCBjb2RlLCBjdHJsS2V5LCBrZXksIGtleUNvZGUsIG1ldGFLZXksIHNoaWZ0S2V5fSA9IGV2ZW50O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi50aGlzLmdldEV2ZW50RGF0YShldmVudCksXG4gICAgICAgICAgICBhbHRLZXkgIDogYWx0S2V5LFxuICAgICAgICAgICAgY29kZSAgICA6IGNvZGUsXG4gICAgICAgICAgICBjdHJsS2V5IDogY3RybEtleSxcbiAgICAgICAgICAgIGtleSAgICAgOiBrZXksXG4gICAgICAgICAgICBrZXlDb2RlIDoga2V5Q29kZSxcbiAgICAgICAgICAgIG1ldGFLZXkgOiBtZXRhS2V5LFxuICAgICAgICAgICAgc2hpZnRLZXk6IHNoaWZ0S2V5XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldE1vdXNlRXZlbnREYXRhKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHthbHRLZXksIGNsaWVudFgsIGNsaWVudFksIGN0cmxLZXksIG1ldGFLZXksIG9mZnNldFgsIG9mZnNldFksIHBhZ2VYLCBwYWdlWSwgc2NyZWVuWCwgc2NyZWVuWSwgc2hpZnRLZXl9ID0gZXZlbnQ7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSxcbiAgICAgICAgICAgIGFsdEtleSAgOiBhbHRLZXksXG4gICAgICAgICAgICBjbGllbnRYIDogY2xpZW50WCxcbiAgICAgICAgICAgIGNsaWVudFkgOiBjbGllbnRZLFxuICAgICAgICAgICAgY3RybEtleSA6IGN0cmxLZXksXG4gICAgICAgICAgICBtZXRhS2V5IDogbWV0YUtleSxcbiAgICAgICAgICAgIG9mZnNldFggOiBvZmZzZXRYLFxuICAgICAgICAgICAgb2Zmc2V0WSA6IG9mZnNldFksXG4gICAgICAgICAgICBwYWdlWCAgIDogcGFnZVgsXG4gICAgICAgICAgICBwYWdlWSAgIDogcGFnZVksXG4gICAgICAgICAgICBzY3JlZW5YIDogc2NyZWVuWCxcbiAgICAgICAgICAgIHNjcmVlblkgOiBzY3JlZW5ZLFxuICAgICAgICAgICAgc2hpZnRLZXk6IHNoaWZ0S2V5XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJucyB7RWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldFBhdGhGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGxldCBwYXRoID0gW107XG5cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHBhdGgucHVzaChlbGVtZW50KTtcblxuICAgICAgICAgICAgd2hpbGUgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHBhdGgucHVzaChlbGVtZW50LnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRUYXJnZXREYXRhKG5vZGUpIHtcbiAgICAgICAgbGV0IHIgICAgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCksXG4gICAgICAgICAgICByZWN0ID0ge307XG5cbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVjdCwge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogci5ib3R0b20sXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiByLmhlaWdodCxcbiAgICAgICAgICAgICAgICBsZWZ0ICA6IHIubGVmdCxcbiAgICAgICAgICAgICAgICByaWdodCA6IHIucmlnaHQsXG4gICAgICAgICAgICAgICAgdG9wICAgOiByLnRvcCxcbiAgICAgICAgICAgICAgICB3aWR0aCA6IHIud2lkdGgsXG4gICAgICAgICAgICAgICAgeCAgICAgOiByLngsXG4gICAgICAgICAgICAgICAgeSAgICAgOiByLnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgICAgOiBub2RlLmNoZWNrZWQsXG4gICAgICAgICAgICBjaGlsZEVsZW1lbnRDb3VudDogbm9kZS5jaGlsZEVsZW1lbnRDb3VudCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCAgICAgOiBub2RlLmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudExlZnQgICAgICAgOiBub2RlLmNsaWVudExlZnQsXG4gICAgICAgICAgICBjbGllbnRUb3AgICAgICAgIDogbm9kZS5jbGllbnRUb3AsXG4gICAgICAgICAgICBjbGllbnRXaWR0aCAgICAgIDogbm9kZS5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIGNscyAgICAgICAgICAgICAgOiBub2RlLmNsYXNzTGlzdCA/IFsuLi5ub2RlLmNsYXNzTGlzdF0gOiBbXSxcbiAgICAgICAgICAgIGRhdGEgICAgICAgICAgICAgOiB7Li4ubm9kZS5kYXRhc2V0fSxcbiAgICAgICAgICAgIGRyYWdnYWJsZSAgICAgICAgOiBub2RlLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIGhpZGRlbiAgICAgICAgICAgOiBub2RlLmhpZGRlbixcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgOiBOZW8uY29uZmlnLnVzZURvbUlkcyA/IG5vZGUuaWQgOiBub2RlLmRhdGFzZXQ/LlsnbmVvSWQnXSxcbiAgICAgICAgICAgIGluZXJ0ICAgICAgICAgICAgOiBub2RlLmluZXJ0LFxuICAgICAgICAgICAgaXNDb25uZWN0ZWQgICAgICA6IG5vZGUuaXNDb25uZWN0ZWQsXG4gICAgICAgICAgICBpc0NvbnRlbnRFZGl0YWJsZTogbm9kZS5pc0NvbnRlbnRFZGl0YWJsZSxcbiAgICAgICAgICAgIG5vZGVUeXBlICAgICAgICAgOiBub2RlLm5vZGVUeXBlLFxuICAgICAgICAgICAgb2Zmc2V0SGVpZ2h0ICAgICA6IG5vZGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgb2Zmc2V0TGVmdCAgICAgICA6IG5vZGUub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIG9mZnNldFRvcCAgICAgICAgOiBub2RlLm9mZnNldFRvcCxcbiAgICAgICAgICAgIG9mZnNldFdpZHRoICAgICAgOiBub2RlLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgcmVjdCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCAgICAgOiBub2RlLnNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIHNjcm9sbExlZnQgICAgICAgOiBub2RlLnNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxUb3AgICAgICAgIDogbm9kZS5zY3JvbGxUb3AsXG4gICAgICAgICAgICBzY3JvbGxXaWR0aCAgICAgIDogbm9kZS5zY3JvbGxXaWR0aCxcbiAgICAgICAgICAgIHN0eWxlICAgICAgICAgICAgOiBub2RlLnN0eWxlPy5jc3NUZXh0LFxuICAgICAgICAgICAgdGFiSW5kZXggICAgICAgICA6IG5vZGUudGFiSW5kZXgsXG4gICAgICAgICAgICB0YWdOYW1lICAgICAgICAgIDogbm9kZS50YWdOYW1lPy50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgdG91Y2ggZXZlbnQgZm91bmQgaW4gdG91Y2hlcyBvciBjaGFuZ2VkVG91Y2hlcyBvZiBhIFRvdWNoRXZlbnRcbiAgICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR9IGV2ZW50XG4gICAgICogQHJldHVybnMge1RvdWNofVxuICAgICAqL1xuICAgIGdldFRvdWNoQ29vcmRzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHt0b3VjaGVzLCBjaGFuZ2VkVG91Y2hlc30gPSBldmVudDtcbiAgICAgICAgcmV0dXJuIHRvdWNoZXM/LlswXSB8fCBjaGFuZ2VkVG91Y2hlcz8uWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ubHkgaW4gdXNlIGlmIE5lby5jb25maWcudXNlU2hhcmVkV29ya2VycyA9IHRydWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkJlZm9yZVVubG9hZChldmVudCkge1xuICAgICAgICBsZXQgTSA9IE5lby53b3JrZXIuTWFuYWdlcjtcblxuICAgICAgICBNLmFwcE5hbWVzLmZvckVhY2goYXBwTmFtZSA9PiB7XG4gICAgICAgICAgICBNLmJyb2FkY2FzdCh7XG4gICAgICAgICAgICAgICAgYWN0aW9uIDogJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICAgICAgICAgIGFwcE5hbWU6IGFwcE5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHtcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSxcbiAgICAgICAgICAgIHZhbGlkOiBldmVudC50YXJnZXQuY2hlY2tWYWxpZGl0eSgpLFxuICAgICAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5zZW5kTWVzc2FnZVRvQXBwKG1lLmdldE1vdXNlRXZlbnREYXRhKGV2ZW50KSk7XG5cbiAgICAgICAgaWYgKG1lLnRlc3RQYXRoSW5jbHVzaW9uKGV2ZW50LCBwcmV2ZW50Q2xpY2tUYXJnZXRzKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Db250ZXh0TWVudShldmVudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAobWUuZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpKTtcblxuICAgICAgICBpZiAobWUudGVzdFBhdGhJbmNsdXNpb24oZXZlbnQsIHByZXZlbnRDb250ZXh0bWVudVRhcmdldHMpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkRvbUNvbnRlbnRMb2FkZWQoKSB7XG4gICAgICAgIHRoaXMuYWRkR2xvYmFsRG9tTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuZmlyZSgnZG9tQ29udGVudExvYWRlZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Eb3VibGVDbGljayhldmVudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAobWUuZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpKTtcblxuICAgICAgICBpZiAobWUudGVzdFBhdGhJbmNsdXNpb24oZXZlbnQsIHByZXZlbnRDbGlja1RhcmdldHMpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkRyYWdPdmVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdvbkRyYWdPdmVyJywgZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Gb2N1c0luKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEV2ZW50RGF0YShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Gb2N1c091dChldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRFdmVudERhdGEoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uSGFzaENoYW5nZSgpIHtcbiAgICAgICAgY29uc3QgTWFuYWdlciAgICA9IE5lby53b3JrZXIuTWFuYWdlcixcbiAgICAgICAgICAgICAgaGFzaFN0cmluZyA9IGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpO1xuXG4gICAgICAgIE1hbmFnZXIuc2VuZE1lc3NhZ2UoJ2FwcCcsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2hhc2hDaGFuZ2UnLFxuICAgICAgICAgICAgZGF0YSAgOiB7XG4gICAgICAgICAgICAgICAgYXBwTmFtZXMgIDogTWFuYWdlci5hcHBOYW1lcyxcbiAgICAgICAgICAgICAgICBoYXNoICAgICAgOiB0aGlzLnBhcnNlSGFzaChoYXNoU3RyaW5nKSxcbiAgICAgICAgICAgICAgICBoYXNoU3RyaW5nOiBoYXNoU3RyaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEtleWJvYXJkRXZlbnREYXRhKGV2ZW50KSk7XG5cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSAhPT0gJ0lOUFVUJykgeyAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlcy8xNzI5XG4gICAgICAgICAgICBpZiAoWydBcnJvd0Rvd24nLCAnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnLCAnQXJyb3dVcCddLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbktleVVwKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEtleWJvYXJkRXZlbnREYXRhKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRNb3VzZUV2ZW50RGF0YShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Nb3VzZUVudGVyKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhcHBFdmVudCA9IHsuLi5tZS5nZXRNb3VzZUV2ZW50RGF0YShldmVudCksIGZyb21FbGVtZW50SWQ6IGV2ZW50LmZyb21FbGVtZW50Py5pZCB8fCBudWxsfTtcblxuICAgICAgICBtZS5zZW5kTWVzc2FnZVRvQXBwKGFwcEV2ZW50KTtcbiAgICAgICAgbWUuZmlyZSgnbW91c2VFbnRlcicsIGFwcEV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uTW91c2VMZWF2ZShldmVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYXBwRXZlbnQgPSB7Li4ubWUuZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpLCB0b0VsZW1lbnRJZDogZXZlbnQudG9FbGVtZW50Py5pZCB8fCBudWxsfTtcblxuICAgICAgICBtZS5zZW5kTWVzc2FnZVRvQXBwKGFwcEV2ZW50KTtcbiAgICAgICAgbWUuZmlyZSgnbW91c2VMZWF2ZScsIGFwcEV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uTW91c2VVcChldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRNb3VzZUV2ZW50RGF0YShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25XaGVlbChldmVudCkge1xuICAgICAgICBsZXQgdGFyZ2V0ICAgICAgICA9IHRoaXMudGVzdFBhdGhJbmNsdXNpb24oZXZlbnQsIGdsb2JhbFdoZWVsVGFyZ2V0cyksXG4gICAgICAgICAgICBwcmV2ZW50VXBkYXRlID0gZmFsc2UsXG4gICAgICAgICAgICB0YXJnZXRDbHM7XG5cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgdGFyZ2V0Q2xzID0gdGFyZ2V0LmNscztcblxuICAgICAgICAgICAgaWYgKGdsb2JhbFdoZWVsVGFyZ2V0c0J1ZmZlclt0YXJnZXQuY2xzXSkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgICAgIGlmIChsYXN0V2hlZWxFdmVudC5kYXRlICYmIGxhc3RXaGVlbEV2ZW50LnRhcmdldCA9PT0gdGFyZ2V0Q2xzICYmIGRhdGUgLSBsYXN0V2hlZWxFdmVudC5kYXRlIDwgZ2xvYmFsV2hlZWxUYXJnZXRzQnVmZmVyW3RhcmdldENsc10pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmVudFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihsYXN0V2hlZWxFdmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSAgOiBkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRDbHNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgaWYgKCFwcmV2ZW50VXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge2RlbHRhWCwgZGVsdGFZLCBkZWx0YVp9ID0gZXZlbnQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAoe1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmdldEV2ZW50RGF0YShldmVudCksXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudEhlaWdodDogdGFyZ2V0Lm5vZGUuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBjbGllbnRXaWR0aCA6IHRhcmdldC5ub2RlLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVggICAgICA6IGRlbHRhWCxcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFZICAgICAgOiBkZWx0YVksXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWiAgICAgIDogZGVsdGFaLFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ICA6IHRhcmdldC5ub2RlLnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcCAgIDogdGFyZ2V0Lm5vZGUuc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZ2xvYmFsV2hlZWxUYXJnZXRzS2VlcEV2ZW50LmluY2x1ZGVzKHRhcmdldENscykpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhhbXBsZSBmb3IgQXJyYXkgdmFsdWVzOiBcImNhdGVnb3JpZXNbXT10ZXN0MSZjYXRlZ29yaWVzW109dGVzdDJcIlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHBhcnNlSGFzaChzdHIpIHtcbiAgICAgICAgaWYgKHN0ciA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwaWVjZXMgPSBzdHIuc3BsaXQoJyYnKSxcbiAgICAgICAgICAgIGRhdGEgICA9IHt9LFxuICAgICAgICAgICAgaSwga2V5LCBwYXJ0cywgdmFsdWU7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBpZWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFydHMgPSBwaWVjZXNbaV0uc3BsaXQoJz0nKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKCcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5ICAgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pO1xuICAgICAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pO1xuXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ1tdJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LnN1YnN0cmluZygwLCBrZXkuaW5kZXhPZignW10nKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtrZXldID0gW107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGF0YVtrZXldLnB1c2godGhpcy5wYXJzZVZhbHVlKHZhbHVlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IHRoaXMucGFyc2VWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB1c2VkIGJ5IHBhcnNlSGFzaCB0byBjb252ZXJ0IHRva2VucyBpbnRvIGJvb2xlYW4gb3IgbnVtYmVyIHR5cGVzIGlmIG5lZWRlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufE51bWJlcnxTdHJpbmd9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHBhcnNlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IHBhcnNlSW50KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gZGF0YS5jbHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5uYW1lXG4gICAgICovXG4gICAgcmVnaXN0ZXJQcmV2ZW50RGVmYXVsdFRhcmdldHMoZGF0YSkge1xuICAgICAgICBsZXQgcHJldmVudEFycmF5O1xuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLmNscykpIHtcbiAgICAgICAgICAgIGRhdGEuY2xzID0gW2RhdGEuY2xzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZGF0YS5uYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdjbGljayc6XG4gICAgICAgICAgICAgICAgcHJldmVudEFycmF5ID0gcHJldmVudENsaWNrVGFyZ2V0cztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbnRleHRtZW51JzpcbiAgICAgICAgICAgICAgICBwcmV2ZW50QXJyYXkgPSBwcmV2ZW50Q29udGV4dG1lbnVUYXJnZXRzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5jbHMuZm9yRWFjaChjbHMgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcmV2ZW50QXJyYXkuaW5jbHVkZXMoY2xzKSkge1xuICAgICAgICAgICAgICAgIHByZXZlbnRBcnJheS5wdXNoKGNscyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIHRoZSBwYXJzZWQgZXZlbnQgZGF0YSB0byB0aGUgYXBwIHdvcmtlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHNlbmRNZXNzYWdlVG9BcHAoZGF0YSkge1xuICAgICAgICBOZW8ud29ya2VyLk1hbmFnZXIuc2VuZE1lc3NhZ2UoJ2FwcCcsIHtcbiAgICAgICAgICAgIGFjdGlvbiAgIDogJ2RvbUV2ZW50JyxcbiAgICAgICAgICAgIGV2ZW50TmFtZTogZGF0YS50eXBlLFxuICAgICAgICAgICAgZGF0YSAgICAgOiBkYXRhXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRBcnJheVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8Qm9vbGVhbn0gdGFyZ2V0IGNscyAmIG5vZGUgaWYgZm91bmQsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqL1xuICAgIHRlc3RQYXRoSW5jbHVzaW9uKGV2ZW50LCB0YXJnZXRBcnJheSkge1xuICAgICAgICBsZXQgY291bnRUYXJnZXRzID0gdGFyZ2V0QXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgcGF0aCAgICAgICAgID0gZXZlbnQucGF0aCB8fCBldmVudC5jb21wb3NlZFBhdGgoKSxcbiAgICAgICAgICAgIGkgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgPSBwYXRoLmxlbmd0aCxcbiAgICAgICAgICAgIGosIG5vZGU7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbm9kZSA9IHBhdGhbaV07XG5cbiAgICAgICAgICAgIGZvciAoaj0wOyBqIDwgY291bnRUYXJnZXRzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3Q/LmNvbnRhaW5zKHRhcmdldEFycmF5W2pdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzIDogdGFyZ2V0QXJyYXlbal0sXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRG9tRXZlbnRzKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShEb21FdmVudHMpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBMb2dpYyB0byBhcHBseSB0aGUgZGVsdGFzIGdlbmVyYXRlZCBieSB2ZG9tLkhlbHBlciB0byB0aGUgcmVhbCBET01cbiAqIEBjbGFzcyBOZW8ubWFpbi5taXhpbi5EZWx0YVVwZGF0ZXNcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgRGVsdGFVcGRhdGVzIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLm1peGluLkRlbHRhVXBkYXRlcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1haW4ubWl4aW4uRGVsdGFVcGRhdGVzJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pZFxuICAgICAqL1xuICAgIGR1X2ZvY3VzTm9kZShkZWx0YSkge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoZGVsdGEuaWQpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbm9kZS5jaGlsZHJlbiBjb250YWlucyB0aGUgXCJyZWFsXCIgbm9kZXMgKHRhZ3MpXG4gICAgICogbm9kZS5jaGlsZE5vZGVzIGNvbnRhaW5zIHRleHRzICYgY29tbWVudHMgYXMgbm9kZXMgdG9vXG4gICAgICogc2luY2UgZXZlcnkgdnR5cGU6J3RleHQnIGlzIHdyYXBwZWQgaW5zaWRlIGEgY29tbWVudCBibG9jayAoYXMgYW4gaWQpLFxuICAgICAqIHdlIG5lZWQgdGhlIGFtb3VudCBvZiBub2RlcyB3aGljaCBhcmUgbm90IGNvbW1lbnRzIHRvIGdldCB0aGUgXCJyZWFsSW5kZXhcIi5cbiAgICAgKiBpbnNlcnRBZGphY2VudEhUTUwoKSBpcyBmYXN0ZXIgdGhhbiBjcmVhdGluZyBhIG5vZGUgKHRlbXBsYXRlKSwgYnV0IG9ubHkgYXZhaWxhYmxlXG4gICAgICogZm9yIGNoaWxkcmVuIGFuZCBub3QgZm9yIGNoaWxkTm9kZXMuXG4gICAgICogSW4gY2FzZSB0aGVyZSBhcmUgbm8gY29tbWVudHMgKD0+IHZ0eXBlOiAndGV4dCcgbm9kZXMpLCB3ZSBzdGljayB0byBpdCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pbmRleFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5vdXRlckhUTUxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEucGFyZW50SWRcbiAgICAgKi9cbiAgICBkdV9pbnNlcnROb2RlKGRlbHRhKSB7XG4gICAgICAgIGxldCBpbmRleCAgICAgICAgID0gZGVsdGEuaW5kZXgsXG4gICAgICAgICAgICBwYXJlbnROb2RlICAgID0gdGhpcy5nZXRFbGVtZW50T3JCb2R5KGRlbHRhLnBhcmVudElkKSxcbiAgICAgICAgICAgIGNvdW50Q2hpbGRyZW4gPSBwYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICByZWFsSW5kZXggICAgID0gaW5kZXgsXG4gICAgICAgICAgICBoYXNDb21tZW50cyAgID0gZmFsc2UsXG4gICAgICAgICAgICBub2RlO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbnNlcnROb2RlJywgaW5kZXgsIGNvdW50Q2hpbGRyZW4sIGRlbHRhLnBhcmVudElkKTtcblxuICAgICAgICBpZiAoY291bnRDaGlsZHJlbiA8PSAyMCAmJiBwYXJlbnROb2RlLm5vZGVOYW1lICE9PSAnVEJPRFknKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50Q2hpbGRyZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlLmNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgPT09IDgpIHsgLy8gaWdub3JlIGNvbW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgcmVhbEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFsSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbW1lbnRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc0NvbW1lbnRzKSB7XG4gICAgICAgICAgICBjb3VudENoaWxkcmVuID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+IDAgJiYgaW5kZXggPj0gY291bnRDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBkZWx0YS5vdXRlckhUTUwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvdW50Q2hpbGRyZW4gPiAwICYmIGNvdW50Q2hpbGRyZW4gPiBpbmRleCkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW5baW5kZXhdLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBkZWx0YS5vdXRlckhUTUwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudENoaWxkcmVuID4gMCkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW5bY291bnRDaGlsZHJlbiAtIDFdLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBkZWx0YS5vdXRlckhUTUwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZGVsdGEub3V0ZXJIVE1MKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmh0bWxTdHJpbmdUb0VsZW1lbnQoZGVsdGEub3V0ZXJIVE1MKTtcblxuICAgICAgICAgICAgaWYgKGNvdW50Q2hpbGRyZW4gPiAwICYmIGNvdW50Q2hpbGRyZW4gPiByZWFsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBwYXJlbnROb2RlLmNoaWxkTm9kZXNbcmVhbEluZGV4XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pbmRleFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5wYXJlbnRJZFxuICAgICAqL1xuICAgIGR1X21vdmVOb2RlKGRlbHRhKSB7XG4gICAgICAgIGxldCBpbmRleCAgICAgID0gZGVsdGEuaW5kZXgsXG4gICAgICAgICAgICBub2RlICAgICAgID0gdGhpcy5nZXRFbGVtZW50KGRlbHRhLmlkKSxcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmdldEVsZW1lbnQoZGVsdGEucGFyZW50SWQpO1xuXG4gICAgICAgIGlmIChpbmRleCA+PSBwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vaW5kZXgrKzsgLy8gdG9kbz86IGluY3JlYXNlIHRoZSBpbmRleCBpbiBjYXNlIHNhbWUgcGFyZW50LCBvbGRJbmRleCA8IG5ld0luZGV4LCBkaXJlY3Qgc3dhcFxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgcGFyZW50Tm9kZS5jaGlsZHJlbltpbmRleF0uaWQgIT09IGRlbHRhLmlkKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgcGFyZW50Tm9kZS5jaGlsZHJlbltpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVsdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEuaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEucGFyZW50SWRcbiAgICAgKi9cbiAgICBkdV9yZW1vdmVOb2RlKGRlbHRhKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5nZXRFbGVtZW50KGRlbHRhLmlkKSxcbiAgICAgICAgICAgIHJlZywgc3RhcnRUYWc7XG5cbiAgICAgICAgaWYgKCFub2RlKSB7IC8vIGNvdWxkIGJlIGEgdnR5cGU6IHRleHRcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmdldEVsZW1lbnRPckJvZHkoZGVsdGEucGFyZW50SWQpO1xuXG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0VGFnICA9IGA8IS0tICR7ZGVsdGEuaWR9IC0tPmA7XG4gICAgICAgICAgICAgICAgcmVnICAgICAgID0gbmV3IFJlZ0V4cChzdGFydFRhZyArICdbXFxcXHNcXFxcU10qPzwhLS0gXFwvbmVvLXZ0ZXh0IC0tPicpO1xuXG4gICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBub2RlLmlubmVySFRNTC5yZXBsYWNlKHJlZywgJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ2R1X3JlbW92ZU5vZGU6IGRvbSBub2RlIG5vdCBmb3VuZCBmb3IgaWQnLCBkZWx0YS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5mcm9tSWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEucGFyZW50SWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEudG9JZFxuICAgICAqL1xuICAgIGR1X3JlcGxhY2VDaGlsZChkZWx0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlID0gbWUuZ2V0RWxlbWVudChkZWx0YS5wYXJlbnRJZCk7XG5cbiAgICAgICAgbm9kZS5yZXBsYWNlQ2hpbGQobWUuZ2V0RWxlbWVudChkZWx0YS50b0lkKSwgbWUuZ2V0RWxlbWVudChkZWx0YS5mcm9tSWQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGVsdGEuaWRdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkZWx0YS52YWx1ZVxuICAgICAqL1xuICAgIGR1X3NldFRleHRDb250ZW50KGRlbHRhKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIG5vZGUgPSBtZS5nZXRFbGVtZW50KGRlbHRhLmlkKTtcblxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gZGVsdGEudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVsdGFcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RlbHRhLmF0dHJpYnV0ZXNdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkZWx0YS5jbHNdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkZWx0YS5pZF1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RlbHRhLmlubmVySFRNTF1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RlbHRhLm91dGVySFRNTF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RlbHRhLnN0eWxlXVxuICAgICAqL1xuICAgIGR1X3VwZGF0ZU5vZGUoZGVsdGEpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnRPckJvZHkoZGVsdGEuaWQpO1xuXG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdkdV91cGRhdGVOb2RlOiBub2RlIG5vdCBmb3VuZCBmb3IgaWQnLCBkZWx0YS5pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkZWx0YSkuZm9yRWFjaCgoW3Byb3AsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtrZXksIHZhbF0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52b2lkQXR0cmlidXRlcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVba2V5XSA9IHZhbCA9PT0gJ3RydWUnOyAvLyB2bm9kZSBhdHRyaWJ1dGUgdmFsdWVzIGdldCBjb252ZXJ0ZWQgaW50byBzdHJpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAndmFsdWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW2tleV0gPSAnJzsgLy8gaW5wdXQgZmllbGRzID0+IHBzZXVkbyBhdHRyaWJ1dGUgY2FuIG5vdCBiZSByZW1vdmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtOZW8uY29uZmlnLnVzZURvbUlkcyA/ICdpZCcgOiAnZGF0YS1uZW8taWQnXSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZiAoa2V5ID09PSAnc3BlbGxjaGVjaycgJiYgdmFsID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvMTkyMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW2tleV0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW2tleV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCguLi52YWx1ZS5hZGQgfHwgW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKC4uLnZhbHVlLnJlbW92ZSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW5uZXJIVE1MJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gdmFsdWUgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb3V0ZXJIVE1MJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUub3V0ZXJIVE1MID0gdmFsdWUgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKHZhbCkgJiYgdmFsLmluY2x1ZGVzKCchaW1wb3J0YW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbC5yZXBsYWNlKCchaW1wb3J0YW50JywgJycpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoTmVvLmRlY2FtZWwoa2V5KSwgdmFsLCAnaW1wb3J0YW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW05lby5kZWNhbWVsKGtleSldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlbHRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLmlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLnBhcmVudElkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLnZhbHVlXG4gICAgICovXG4gICAgZHVfdXBkYXRlVnRleHQoZGVsdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlICAgICAgPSBtZS5nZXRFbGVtZW50KGRlbHRhLnBhcmVudElkKSxcbiAgICAgICAgICAgIGlubmVySFRNTCA9IG5vZGUuaW5uZXJIVE1MLFxuICAgICAgICAgICAgc3RhcnRUYWcgID0gYDwhLS0gJHtkZWx0YS5pZH0gLS0+YCxcbiAgICAgICAgICAgIHJlZyAgICAgICA9IG5ldyBSZWdFeHAoc3RhcnRUYWcgKyAnW1xcXFxzXFxcXFNdKj88IS0tIFxcL25lby12dGV4dCAtLT4nKTtcblxuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVySFRNTC5yZXBsYWNlKHJlZywgZGVsdGEudmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBodG1sIHJlcHJlc2VudGluZyBhIHNpbmdsZSBlbGVtZW50XG4gICAgICogQHJldHVybnMge0NoaWxkTm9kZX1cbiAgICAgKi9cbiAgICBodG1sU3RyaW5nVG9FbGVtZW50KGh0bWwpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtPYmplY3R8T2JqZWN0W119IGRhdGEuZGVsdGFzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEub3JpZ2luPSdhcHAnXVxuICAgICAqL1xuICAgIHVwZGF0ZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVsdGFzID0gZGF0YS5kZWx0YXMsXG4gICAgICAgICAgICBpICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuO1xuXG4gICAgICAgIGRlbHRhcyA9IEFycmF5LmlzQXJyYXkoZGVsdGFzKSA/IGRlbHRhcyA6IFtkZWx0YXNdO1xuICAgICAgICBsZW4gICAgPSBkZWx0YXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLmxvZ0RlbHRhVXBkYXRlcyAmJiBsZW4gPiAwKSB7XG4gICAgICAgICAgICBtZS5jb3VudERlbHRhcyArPSBsZW47XG4gICAgICAgICAgICBtZS5jb3VudFVwZGF0ZXMrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGUgJyArIG1lLmNvdW50VXBkYXRlcywgJ3RvdGFsIGRlbHRhcyAnLCBtZS5jb3VudERlbHRhcywgTmVvLmNsb25lKGRhdGEsIHRydWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLnJlbmRlckNvdW50RGVsdGFzICYmIGxlbiA+IDApIHtcbiAgICAgICAgICAgIG1lLmNvdW50RGVsdGFzUGVyMjUwbXMgKz0gbGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFwID0ge1xuICAgICAgICAgICAgZm9jdXNOb2RlICAgICA6IG1lLmR1X2ZvY3VzTm9kZSxcbiAgICAgICAgICAgIGluc2VydE5vZGUgICAgOiBtZS5kdV9pbnNlcnROb2RlLFxuICAgICAgICAgICAgbW92ZU5vZGUgICAgICA6IG1lLmR1X21vdmVOb2RlLFxuICAgICAgICAgICAgcmVtb3ZlTm9kZSAgICA6IG1lLmR1X3JlbW92ZU5vZGUsXG4gICAgICAgICAgICByZXBsYWNlQ2hpbGQgIDogbWUuZHVfcmVwbGFjZUNoaWxkLFxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnQ6IG1lLmR1X3NldFRleHRDb250ZW50LFxuICAgICAgICAgICAgdXBkYXRlVnRleHQgICA6IG1lLmR1X3VwZGF0ZVZ0ZXh0LFxuICAgICAgICAgICAgZGVmYXVsdCAgICAgICA6IG1lLmR1X3VwZGF0ZU5vZGVcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAobWFwW2RlbHRhc1tpXS5hY3Rpb25dIHx8IG1hcFsnZGVmYXVsdCddKS5jYWxsKG1lLCBkZWx0YXNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLndvcmtlci5NYW5hZ2VyLnNlbmRNZXNzYWdlKGRhdGEub3JpZ2luIHx8ICdhcHAnLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgcmVwbHlJZDogZGF0YS5pZCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhEZWx0YVVwZGF0ZXMpO1xuXG5leHBvcnQge0RlbHRhVXBkYXRlcyBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uLy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIFdpbGwgZ2V0IGltcG9ydGVkIGluIGNhc2UgTmVvLmNvbmZpZy51c2VUb3VjaEV2ZW50cyA9PT0gdHJ1ZVxuICogQGNsYXNzIE5lby5tYWluLm1peGluLlRvdWNoRG9tRXZlbnRzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIFRvdWNoRG9tRXZlbnRzIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLm1peGluLlRvdWNoRG9tRXZlbnRzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5taXhpbi5Ub3VjaERvbUV2ZW50cydcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblRvdWNoQ2FuY2VsKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEV2ZW50RGF0YShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Ub3VjaEVuZChldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRFdmVudERhdGEoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uVG91Y2hFbnRlcihldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRFdmVudERhdGEoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uVG91Y2hMZWF2ZShldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRFdmVudERhdGEoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEV2ZW50RGF0YShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvblRvdWNoU3RhcnQnLCBldmVudCk7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEV2ZW50RGF0YShldmVudCkpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVG91Y2hEb21FdmVudHMpO1xuXG5leHBvcnQge1RvdWNoRG9tRXZlbnRzIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgRG9tQWNjZXNzICAgICAgICAgIGZyb20gJy4uL21haW4vRG9tQWNjZXNzLm1qcyc7XG5pbXBvcnQgRG9tRXZlbnRzICAgICAgICAgIGZyb20gJy4uL21haW4vRG9tRXZlbnRzLm1qcyc7XG5pbXBvcnQgTWVzc2FnZSAgICAgICAgICAgIGZyb20gJy4vTWVzc2FnZS5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgICAgICAgICBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcbmltcG9ydCBSZW1vdGVNZXRob2RBY2Nlc3MgZnJvbSAnLi9taXhpbi9SZW1vdGVNZXRob2RBY2Nlc3MubWpzJztcblxuY29uc3QgTmVvQ29uZmlnID0gTmVvLmNvbmZpZyxcbiAgICAgIGRldk1vZGUgICA9IE5lb0NvbmZpZy5lbnZpcm9ubWVudCA9PT0gJ2RldmVsb3BtZW50JztcblxuLyoqXG4gKiBUaGUgd29ya2VyIG1hbmFnZXIgbGl2ZXMgaW5zaWRlIHRoZSBtYWluIHRocmVhZCBhbmQgY3JlYXRlcyB0aGUgQXBwLCBEYXRhICYgVkRvbSB3b3JrZXIuXG4gKiBBbHNvIHJlc3BvbnNpYmxlIGZvciBzZW5kaW5nIG1lc3NhZ2VzIGZyb20gdGhlIG1haW4gdGhyZWFkIHRvIHRoZSBkaWZmZXJlbnQgd29ya2Vycy5cbiAqIEBjbGFzcyBOZW8ud29ya2VyLk1hbmFnZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgTWFuYWdlciBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLk1hbmFnZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIuTWFuYWdlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGFjdGl2ZVdvcmtlcnM9MFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVXb3JrZXJzOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGFwcE5hbWVzPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGFwcE5hbWVzOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBiYXNlIHBhdGggZm9yIHRoZSB3b3JrZXIgZmlsZSBVUkxzLCBjYW4gZS5nLiBnZXQgc2V0IGluc2lkZSB0aGUgaW5kZXguaHRtbC5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGJhc2VQYXRoPU5lby5jb25maWcud29ya2VyQmFzZVBhdGggfHwgJ3dvcmtlci8nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGJhc2VQYXRoOiBOZW9Db25maWcud29ya2VyQmFzZVBhdGggfHwgJ3dvcmtlci8nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBjb25zdHJ1Y3RlZFRocmVhZHM9MFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3RlZFRocmVhZHM6IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXXxOZW8uY29yZS5CYXNlW118bnVsbH0gbWl4aW5zPVtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IFtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpbiBjYXNlIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgd2luZG93LlNoYXJlZFdvcmtlci5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hhcmVkV29ya2Vyc0VuYWJsZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2hhcmVkV29ya2Vyc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB0byBzdG9wIHRoZSB3b3JrZXIgY29tbXVuaWNhdGlvbiBpbiBjYXNlIHRoZWlyIGNyZWF0aW9uIGZhaWxzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHN0b3BDb21tdW5pY2F0aW9uPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHN0b3BDb21tdW5pY2F0aW9uOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgaW4gY2FzZSB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHdpbmRvdy5Xb3JrZXIuXG4gICAgICAgICAqIFRoZSBuZW8ubWpzIGZyYW1ld29yayBpcyBub3QgYWJsZSB0byBydW4gd2l0aG91dCB3ZWIgd29ya2Vycy5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hhcmVkV29ya2Vyc0VuYWJsZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd2ViV29ya2Vyc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udGFpbnMgdGhlIGZpbGVOYW1lcyBmb3IgdGhlIEFwcCwgRGF0YSAmIFZkb20gd29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHdvcmtlcnNcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd29ya2Vyczoge1xuICAgICAgICAgICAgYXBwOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGRldk1vZGUgPyAnQXBwLm1qcycgICAgOiAnYXBwd29ya2VyLmpzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbnZhczoge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBkZXZNb2RlID8gJ0NhbnZhcy5tanMnIDogJ2NhbnZhc3dvcmtlci5qcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGRldk1vZGUgPyAnRGF0YS5tanMnICAgOiAnZGF0YXdvcmtlci5qcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGRldk1vZGUgPyAnVkRvbS5tanMnICAgOiAndmRvbXdvcmtlci5qcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5kZXRlY3RGZWF0dXJlcygpO1xuXG4gICAgICAgIGlmICghTmVvLmluc2lkZVdvcmtlcikge1xuICAgICAgICAgICAgbWUuY3JlYXRlV29ya2VycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLndvcmtlcklkID0gJ21haW4nO1xuXG4gICAgICAgIG1lLnByb21pc2VzID0ge307XG5cbiAgICAgICAgbWUub24oe1xuICAgICAgICAgICAgJ21lc3NhZ2U6YWRkRG9tTGlzdGVuZXInICAgIDoge2ZuOiBEb21FdmVudHMuYWRkRG9tTGlzdGVuZXIsICAgICAgIHNjb3BlOiBEb21FdmVudHN9LFxuICAgICAgICAgICAgJ21lc3NhZ2U6Z2V0T2Zmc2NyZWVuQ2FudmFzJzoge2ZuOiBEb21BY2Nlc3Mub25HZXRPZmZzY3JlZW5DYW52YXMsIHNjb3BlOiBEb21BY2Nlc3N9LFxuICAgICAgICAgICAgJ21lc3NhZ2U6cmVhZERvbScgICAgICAgICAgIDoge2ZuOiBEb21BY2Nlc3Mub25SZWFkRG9tLCAgICAgICAgICAgIHNjb3BlOiBEb21BY2Nlc3N9LFxuICAgICAgICAgICAgJ21lc3NhZ2U6cmVnaXN0ZXJSZW1vdGUnICAgIDoge2ZuOiBtZS5vblJlZ2lzdGVyUmVtb3RlLCAgICAgICAgICAgIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICAnbWVzc2FnZTp3b3JrZXJDb25zdHJ1Y3RlZCcgOiB7Zm46IG1lLm9uV29ya2VyQ29uc3RydWN0ZWQsICAgICAgICAgc2NvcGU6IG1lfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gZWFjaCB3b3JrZXIgZGVmaW5lZCBpbnNpZGUgdGhlIHRoaXMud29ya2VycyBjb25maWcuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1zZ1xuICAgICAqL1xuICAgIGJyb2FkY2FzdChtc2cpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy53b3JrZXJzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShuYW1lLCBtc2cpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgd2ViIHdvcmtlciB1c2luZyB0aGUgcGFzc2VkIG9wdGlvbnMgYXMgd2VsbCBhcyBhZGRpbmcgZXJyb3IgJiBtZXNzYWdlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEByZXR1cm5zIHtTaGFyZWRXb3JrZXJ8V29ya2VyfVxuICAgICAqL1xuICAgIGNyZWF0ZVdvcmtlcihvcHRzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmaWxlTmFtZSA9IG9wdHMuZmlsZU5hbWUsXG4gICAgICAgICAgICBmaWxlUGF0aCA9IChvcHRzLmJhc2VQYXRoIHx8IG1lLmJhc2VQYXRoKSArIGZpbGVOYW1lLFxuICAgICAgICAgICAgbmFtZSAgICAgPSBgbmVvbWpzLSR7ZmlsZU5hbWUuc3Vic3RyaW5nKDAsIGZpbGVOYW1lLmluZGV4T2YoJy4nKSkudG9Mb3dlckNhc2UoKX0td29ya2VyYCxcbiAgICAgICAgICAgIGlzU2hhcmVkID0gbWUuc2hhcmVkV29ya2Vyc0VuYWJsZWQgJiYgTmVvQ29uZmlnLnVzZVNoYXJlZFdvcmtlcnMsXG4gICAgICAgICAgICBjbHMgICAgICA9IGlzU2hhcmVkID8gU2hhcmVkV29ya2VyIDogV29ya2VyLFxuICAgICAgICAgICAgd29ya2VyICAgPSBkZXZNb2RlICAvLyB0b2RvOiBzd2l0Y2ggdG8gdGhlIG5ldyBzeW50YXggdG8gY3JlYXRlIGEgd29ya2VyIGZyb20gYSBKUyBtb2R1bGUgb25jZSBicm93c2VycyBhcmUgcmVhZHlcbiAgICAgICAgICAgICAgICA/IG5ldyBjbHMoZmlsZVBhdGgsIHtuYW1lOiBuYW1lLCB0eXBlOiAnbW9kdWxlJ30pXG4gICAgICAgICAgICAgICAgOiBuZXcgY2xzKGZpbGVQYXRoLCB7bmFtZTogbmFtZX0pO1xuXG4gICAgICAgIChpc1NoYXJlZCA/IHdvcmtlci5wb3J0IDogd29ya2VyKS5vbm1lc3NhZ2UgPSBtZS5vbldvcmtlck1lc3NhZ2UuYmluZChtZSk7XG4gICAgICAgIChpc1NoYXJlZCA/IHdvcmtlci5wb3J0IDogd29ya2VyKS5vbmVycm9yICAgPSBtZS5vbldvcmtlckVycm9yICAuYmluZChtZSk7XG5cbiAgICAgICAgbWUuYWN0aXZlV29ya2VycysrO1xuXG4gICAgICAgIHJldHVybiB3b3JrZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgY3JlYXRlV29ya2VyIGZvciBlYWNoIHdvcmtlciBpbnNpZGUgdGhlIHRoaXMud29ya2VycyBjb25maWcuXG4gICAgICovXG4gICAgY3JlYXRlV29ya2VycygpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgaGFzaCA9IGxvY2F0aW9uLmhhc2gsXG4gICAgICAgICAgICBrZXksIHZhbHVlO1xuXG4gICAgICAgIC8vIHBhc3MgdGhlIGluaXRpYWwgaGFzaCB2YWx1ZSBhcyBOZW8uY29uZmlnc1xuICAgICAgICBpZiAoaGFzaCkge1xuICAgICAgICAgICAgTmVvQ29uZmlnLmhhc2ggPSB7XG4gICAgICAgICAgICAgICAgaGFzaCAgICAgIDogRG9tRXZlbnRzLnBhcnNlSGFzaChoYXNoLnN1YnN0cigxKSksXG4gICAgICAgICAgICAgICAgaGFzaFN0cmluZzogaGFzaC5zdWJzdHIoMSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZS53b3JrZXJzKSkge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2NhbnZhcycgJiYgIU5lb0NvbmZpZy51c2VDYW52YXNXb3JrZXIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YWx1ZS53b3JrZXIgPSBtZS5jcmVhdGVXb3JrZXIodmFsdWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gZTtcbiAgICAgICAgICAgICAgICBtZS5zdG9wQ29tbXVuaWNhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLnNlbmRNZXNzYWdlKGtleSwge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3JlZ2lzdGVyTmVvQ29uZmlnJyxcbiAgICAgICAgICAgICAgICBkYXRhICA6IE5lb0NvbmZpZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGRldGVjdEZlYXR1cmVzKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lb0NvbmZpZy5oYXNUb3VjaEV2ZW50cyA9ICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IChuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwKTtcblxuICAgICAgICBpZiAod2luZG93Lldvcmtlcikge1xuICAgICAgICAgICAgbWUud2ViV29ya2Vyc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBXZWIgV29ya2VycycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5TaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIG1lLnNoYXJlZFdvcmtlcnNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFdvcmtlcn0gbmFtZVxuICAgICAqIEByZXR1cm5zIHtXb3JrZXJ9XG4gICAgICovXG4gICAgZ2V0V29ya2VyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW5zdGFuY2VvZiBXb3JrZXIgPyBuYW1lIDogdGhpcy53b3JrZXJzW25hbWVdLndvcmtlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgICAqL1xuICAgIGxvYWRBcHBsaWNhdGlvbihwYXRoKSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoJ2FwcCcsIHtcbiAgICAgICAgICAgIGFjdGlvbiAgICAgICA6ICdsb2FkQXBwbGljYXRpb24nLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHJlc291cmNlc1BhdGg6IE5lb0NvbmZpZy5yZXNvdXJjZXNQYXRoXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Xb3JrZXJDb25zdHJ1Y3RlZChkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuY29uc3RydWN0ZWRUaHJlYWRzKys7XG5cbiAgICAgICAgaWYgKG1lLmNvbnN0cnVjdGVkVGhyZWFkcyA9PT0gbWUuYWN0aXZlV29ya2Vycykge1xuICAgICAgICAgICAgTmVvQ29uZmlnLmFwcFBhdGggJiYgc2V0VGltZW91dCgoKSA9PiB7IC8vIGJldHRlciBzYXZlIHRoYW4gc29ycnkgPT4gYWxsIHJlbW90ZXMgbmVlZCB0byBiZSByZWdpc3RlcmVkXG4gICAgICAgICAgICAgICAgbWUubG9hZEFwcGxpY2F0aW9uKE5lb0NvbmZpZy5hcHBQYXRoKTtcbiAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgbWV0aG9kIGZvciB3b3JrZXIgZXJyb3IgZXZlbnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVcbiAgICAgKi9cbiAgICBvbldvcmtlckVycm9yKGUpIHtcbiAgICAgICAgLy8gc3RhcnRpbmcgYSB3b3JrZXIgZnJvbSBhIEpTIG1vZHVsZSB3aWxsIHNob3cgSlMgZXJyb3JzIGluIGEgY29ycmVjdCB3YXlcbiAgICAgICAgIWRldk1vZGUgJiYgY29uc29sZS5sb2coJ1dvcmtlciBFcnJvcjonLCBlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIG1ldGhvZCBmb3Igd29ya2VyIG1lc3NhZ2UgZXZlbnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVcbiAgICAgKi9cbiAgICBvbldvcmtlck1lc3NhZ2UoZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRhdGEgICAgICAgICA9IGUuZGF0YSxcbiAgICAgICAgICAgIGRlbGF5UHJvbWlzZSA9IGZhbHNlLFxuICAgICAgICAgICAgdHJhbnNmZXIgICAgID0gbnVsbCxcbiAgICAgICAgICAgIHByb21pc2U7XG5cbiAgICAgICAgY29uc3Qge2FjdGlvbiwgZGVzdGluYXRpb246IGRlc3QsIHJlcGx5SWR9ID0gZGF0YTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTWFpbjogSW5jb21pbmcgV29ya2VyIG1lc3NhZ2U6ICcgKyBkYXRhLm9yaWdpbiArICc6JyArIGFjdGlvbiwgZGF0YSk7XG5cbiAgICAgICAgbWUuZmlyZSgnbWVzc2FnZTonK2FjdGlvbiwgZGF0YSk7XG5cbiAgICAgICAgaWYgKHByb21pc2UgPSBhY3Rpb24gPT09ICdyZXBseScgJiYgbWUucHJvbWlzZXNbcmVwbHlJZF0pIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmRlc3RpbmF0aW9uID09PSAnbWFpbicpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YS5kYXRhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YS5yZWplY3QpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlamVjdChkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5kYXRhLmF1dG9Nb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuZmlyZSgnYXV0b21vdW50JywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheVByb21pc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEudXBkYXRlVmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuZmlyZSgndXBkYXRlVmRvbScsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXlQcm9taXNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZGVsYXlQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZS5wcm9taXNlc1tyZXBseUlkXS5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZGVsYXlQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lLnByb21pc2VzW3JlcGx5SWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlc3QgIT09ICdtYWluJyAmJiBhY3Rpb24gIT09ICdyZXBseScpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnRyYW5zZmVyKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmZXIgPSBbZGF0YS50cmFuc2Zlcl07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLnByb21pc2VNZXNzYWdlKGRlc3QsIGRhdGEsIHRyYW5zZmVyKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBtZS5zZW5kTWVzc2FnZShyZXNwb25zZS5kZXN0aW5hdGlvbiwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBtZS5zZW5kTWVzc2FnZShkYXRhLm9yaWdpbiwge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgICAgICAgICByZWplY3QgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICByZXBseUlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICBlcnJvciAgOiBlcnIubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbmx5IG5lZWRlZCBmb3IgU2hhcmVkV29ya2Vyc1xuICAgICAgICBlbHNlIGlmIChkZXN0ID09PSAnbWFpbicgJiYgYWN0aW9uID09PSAncmVnaXN0ZXJBcHBOYW1lJykge1xuICAgICAgICAgICAgbWUuYXBwTmFtZXMucHVzaChkYXRhLmFwcE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAoZGVzdCA9PT0gJ21haW4nICYmIGFjdGlvbiA9PT0gJ3JlbW90ZU1ldGhvZCcpIHtcbiAgICAgICAgICAgIG1lLm9uUmVtb3RlTWV0aG9kKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc3QgYXBwLCBkYXRhIG9yIHZkb21cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBjb25maWdzIGZvciBOZW8ud29ya2VyLk1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIEFuIG9wdGlvbmFsIGFycmF5IG9mIFRyYW5zZmVyYWJsZSBvYmplY3RzIHRvIHRyYW5zZmVyIG93bmVyc2hpcCBvZi5cbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cbiAgICAgKiBhbmQgYmVjb21lcyBhdmFpbGFibGUgb25seSB0byB0aGUgd29ya2VyIGl0IHdhcyBzZW50IHRvLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgcHJvbWlzZU1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBtZS5zZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2ZlciksXG4gICAgICAgICAgICAgICAgbXNnSWQgICA9IG1lc3NhZ2UuaWQ7XG5cbiAgICAgICAgICAgIG1lLnByb21pc2VzW21zZ0lkXSA9IHtcbiAgICAgICAgICAgICAgICByZWplY3QsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcGx5SWRcbiAgICAgKi9cbiAgICByZXNvbHZlRG9tT3BlcmF0aW9uUHJvbWlzZShyZXBseUlkKSB7XG4gICAgICAgIGlmIChyZXBseUlkKSB7XG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMucHJvbWlzZXNbcmVwbHlJZF07XG5cbiAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKHByb21pc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucHJvbWlzZXNbcmVwbHlJZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGRhdGEgb3IgdmRvbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIGNvbmZpZ3MgZm9yIE5lby53b3JrZXIuTWVzc2FnZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFt0cmFuc2Zlcl0gQW4gb3B0aW9uYWwgYXJyYXkgb2YgVHJhbnNmZXJhYmxlIG9iamVjdHMgdG8gdHJhbnNmZXIgb3duZXJzaGlwIG9mLlxuICAgICAqIElmIHRoZSBvd25lcnNoaXAgb2YgYW4gb2JqZWN0IGlzIHRyYW5zZmVycmVkLCBpdCBiZWNvbWVzIHVudXNhYmxlIChuZXV0ZXJlZCkgaW4gdGhlIGNvbnRleHQgaXQgd2FzIHNlbnQgZnJvbVxuICAgICAqIGFuZCBiZWNvbWVzIGF2YWlsYWJsZSBvbmx5IHRvIHRoZSB3b3JrZXIgaXQgd2FzIHNlbnQgdG8uXG4gICAgICogQHJldHVybnMge05lby53b3JrZXIuTWVzc2FnZX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc2VuZE1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsIHdvcmtlcjtcblxuICAgICAgICBpZiAoIW1lLnN0b3BDb21tdW5pY2F0aW9uKSB7XG4gICAgICAgICAgICB3b3JrZXIgPSBtZS5nZXRXb3JrZXIoZGVzdCk7XG5cbiAgICAgICAgICAgIGlmICghd29ya2VyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsZWQgc2VuZE1lc3NhZ2UgZm9yIGEgd29ya2VyIHRoYXQgZG9lcyBub3QgZXhpc3Q6ICcgKyBkZXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3B0cy5kZXN0aW5hdGlvbiA9IGRlc3Q7XG5cbiAgICAgICAgICAgIG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShvcHRzKTtcblxuICAgICAgICAgICAgKG1lLnNoYXJlZFdvcmtlcnNFbmFibGVkICYmIE5lb0NvbmZpZy51c2VTaGFyZWRXb3JrZXJzID8gd29ya2VyLnBvcnQgOiB3b3JrZXIpLnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRyYW5zZmVyKTtcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYW5hZ2VyKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShNYW5hZ2VyKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4uL2NvcmUvSWRHZW5lcmF0b3IubWpzJztcblxuLyoqXG4gKiBBIHdyYXBwZXIgZm9yIHdvcmtlciBwb3N0IG1lc3NhZ2VzIHNlbnQgYmV0d2VlbiB0aGUgQXBwLCBEYXRhLCBWRG9tIHdvcmtlciAmIHRoZSBtYWluIHRocmVhZC5cbiAqIFlvdSBjYW4gYWRkIG9wdGlvbmFsIHBhcmFtcyBhcyBuZWVkZWQuXG4gKiBAY2xhc3MgTmVvLndvcmtlci5NZXNzYWdlXG4gKi9cbmNsYXNzIE1lc3NhZ2Uge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhY3Rpb25cbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGVzdGluYXRpb249J21haW4nXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlkPUlkR2VuZXJhdG9yLmdldElkKE5lby53b3JrZXJJZClcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gb3JpZ2luPU5lby53b3JrZXJJZFxuICAgICAgICAgKi9cblxuICAgICAgICBjb25maWcuZGVzdGluYXRpb24gPSBjb25maWcuZGVzdGluYXRpb24gfHwgJ21haW4nO1xuICAgICAgICBjb25maWcuaWQgICAgICAgICAgPSBjb25maWcuaWQgICAgICAgICAgfHwgSWRHZW5lcmF0b3IuZ2V0SWQoTmVvLndvcmtlcklkKTtcbiAgICAgICAgY29uZmlnLm9yaWdpbiAgICAgID0gY29uZmlnLm9yaWdpbiAgICAgIHx8IE5lby53b3JrZXJJZDtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gICAgfVxufVxuXG5jb25zdCBucyA9IE5lby5ucygnTmVvLndvcmtlcicsIHRydWUpO1xubnNbJ01lc3NhZ2UnXSA9IE1lc3NhZ2U7XG5cbmV4cG9ydCB7TWVzc2FnZSBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uLy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ud29ya2VyLm1peGluLlJlbW90ZU1ldGhvZEFjY2Vzc1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBSZW1vdGVNZXRob2RBY2Nlc3MgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5taXhpbi5SZW1vdGVNZXRob2RBY2Nlc3MnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIubWl4aW4uUmVtb3RlTWV0aG9kQWNjZXNzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1peGluPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW46IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXG4gICAgICogQHBhcmFtIG1ldGhvZFxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbigqPSwgKj0pOiBQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBvcmlnaW4gPSByZW1vdGUub3JpZ2luO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhLCBidWZmZXIpIHtcbiAgICAgICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbiAgICAgICAgIDogJ3JlbW90ZU1ldGhvZCcsXG4gICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiAgICA6IG9yaWdpbixcbiAgICAgICAgICAgICAgICByZW1vdGVDbGFzc05hbWU6IHJlbW90ZS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgcmVtb3RlTWV0aG9kICAgOiBtZXRob2RcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChtZS5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgICAgIG9wdHMuYXBwTmFtZSA9IG9wdHMuYXBwTmFtZSB8fCBkYXRhPy5hcHBOYW1lO1xuICAgICAgICAgICAgICAgIG9wdHMucG9ydCAgICA9IG9wdHMucG9ydCAgICB8fCBkYXRhPy5wb3J0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWUucHJvbWlzZU1lc3NhZ2Uob3JpZ2luLCBvcHRzLCBidWZmZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxuICAgICAqL1xuICAgIG9uUmVnaXN0ZXJSZW1vdGUocmVtb3RlKSB7XG4gICAgICAgIGlmIChyZW1vdGUuZGVzdGluYXRpb24gPT09IE5lby53b3JrZXJJZCkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gcmVtb3RlLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBleGlzdHMgICAgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXRob2RzICAgPSByZW1vdGUubWV0aG9kcyxcbiAgICAgICAgICAgICAgICBwa2cgICAgICAgPSBOZW8ubnMoY2xhc3NOYW1lLCB0cnVlKTtcblxuICAgICAgICAgICAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdGUub3JpZ2luICE9PSAnbWFpbicgJiYgcGtnW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgcmVtb3RlIG1ldGhvZCBkZWZpbml0aW9uICcgKyBjbGFzc05hbWUgKyAnLicgKyBtZXRob2QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghcGtnW21ldGhvZF0gKSB7XG4gICAgICAgICAgICAgICAgICAgIHBrZ1ttZXRob2RdID0gbWUuZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHRvZG86IGluc3BlY3QgaWYgdGhpcyBjYW4gZ2V0IHJlbW92ZWRcbiAgICAgICAgICAgIGlmICghZXhpc3RzICYmIE5lby53b3JrZXJJZCAhPT0gJ21haW4nKSB7XG4gICAgICAgICAgICAgICAgbWUuZmlyZSgncmVtb3RlcmVnaXN0ZXJlZCcsIHJlbW90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKi9cbiAgICBvblJlbW90ZU1ldGhvZChtc2cpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBwa2cgPSBOZW8ubnMobXNnLnJlbW90ZUNsYXNzTmFtZSksXG4gICAgICAgICAgICBvdXQsIG1ldGhvZDtcblxuICAgICAgICBpZiAoIXBrZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbW90ZSBuYW1lc3BhY2UgXCInICsgbXNnLnJlbW90ZUNsYXNzTmFtZSArICdcIicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kID0gcGtnW21zZy5yZW1vdGVNZXRob2RdO1xuXG4gICAgICAgIGlmICghbWV0aG9kKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVtb3RlIG1ldGhvZCBuYW1lIFwiJyArIG1zZy5yZW1vdGVNZXRob2QgKyAnXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1zZy5kYXRhKSkge1xuICAgICAgICAgICAgb3V0ID0gbWV0aG9kLmNhbGwocGtnLCAuLi5tc2cuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXQgPSBtZXRob2QuY2FsbChwa2csIG1zZy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdXQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBvdXQudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBtZS5yZXNvbHZlKG1zZywgZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgbWUucmVqZWN0KG1zZywgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucmVzb2x2ZShtc2csIG91dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVqZWN0ZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICByZWplY3QobXNnLCBkYXRhKSB7XG4gICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICByZWplY3QgOiB0cnVlLFxuICAgICAgICAgICAgcmVwbHlJZDogbXNnLmlkXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIG9wdHMuYXBwTmFtZSA9IG1zZy5hcHBOYW1lO1xuICAgICAgICAgICAgb3B0cy5wb3J0ICAgID0gbXNnLnBvcnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKG1zZy5vcmlnaW4sIG9wdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gcHJvbWlzZU1lc3NhZ2UgZ2V0cyByZXNvbHZlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHJlc29sdmUobXNnLCBkYXRhKSB7XG4gICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgb3B0cy5hcHBOYW1lID0gbXNnLmFwcE5hbWU7XG4gICAgICAgICAgICBvcHRzLnBvcnQgICAgPSBtc2cucG9ydDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwgb3B0cyk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhSZW1vdGVNZXRob2RBY2Nlc3MpO1xuXG5leHBvcnQge1JlbW90ZU1ldGhvZEFjY2VzcyBhcyBkZWZhdWx0fTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcImNodW5rcy9tYWluL1wiICsgY2h1bmtJZCArIFwiLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcIm5lby1vZmZzY3JlZW4tY2FudmFzLWRlbW86XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbmVvX29mZnNjcmVlbl9jYW52YXNfZGVtb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtuZW9fb2Zmc2NyZWVuX2NhbnZhc19kZW1vXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJpbXBvcnQgTmVvICAgICAgICAgICBmcm9tICcuL05lby5tanMnO1xuaW1wb3J0ICogYXMgY29yZSAgICAgZnJvbSAnLi9jb3JlL19leHBvcnQubWpzJztcbmltcG9ydCBEb21BY2Nlc3MgICAgIGZyb20gJy4vbWFpbi9Eb21BY2Nlc3MubWpzJztcbmltcG9ydCBEb21FdmVudHMgICAgIGZyb20gJy4vbWFpbi9Eb21FdmVudHMubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICAgIGZyb20gJy4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgV29ya2VyTWFuYWdlciBmcm9tICcuL3dvcmtlci9NYW5hZ2VyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5NYWluXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIE1haW4gZXh0ZW5kcyBjb3JlLkJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZhYmxlOiB0cnVlXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uTWFpbidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLk1haW4nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBtb2RlPSdyZWFkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtb2RlOiAncmVhZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IG9wZW5XaW5kb3dzPXt9XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG9wZW5XaW5kb3dzOiB7fSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSByZWFkUXVldWU9W11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZFF1ZXVlOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW90ZSBtZXRob2QgYWNjZXNzIGZvciBvdGhlciB3b3JrZXJzXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gcmVtb3RlPXthcHA6IFsvLy4uLl19XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbW90ZToge1xuICAgICAgICAgICAgYXBwOiBbXG4gICAgICAgICAgICAgICAgJ2FsZXJ0JyxcbiAgICAgICAgICAgICAgICAnZWRpdFJvdXRlJyxcbiAgICAgICAgICAgICAgICAnZ2V0V2luZG93RGF0YScsXG4gICAgICAgICAgICAgICAgJ3NldE5lb0NvbmZpZycsXG4gICAgICAgICAgICAgICAgJ3NldFJvdXRlJyxcbiAgICAgICAgICAgICAgICAnd2luZG93Q2xvc2UnLFxuICAgICAgICAgICAgICAgICd3aW5kb3dNb3ZlVG8nLFxuICAgICAgICAgICAgICAgICd3aW5kb3dPcGVuJyxcbiAgICAgICAgICAgICAgICAnd2luZG93UmVzaXplVG8nXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBydW5uaW5nPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd0Zwcz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0ZwczogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRpbWVMaW1pdD0xNVxuICAgICAgICAgKi9cbiAgICAgICAgdGltZUxpbWl0OiAxNSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNob3VsZCBiZSBkZXYgb25seVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRvdGFsRnJhbWVDb3VudD0wXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRvdGFsRnJhbWVDb3VudDogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSB1cGRhdGVRdWV1ZT1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB1cGRhdGVRdWV1ZTogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gd3JpdGVRdWV1ZT1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB3cml0ZVF1ZXVlOiBbXVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgaWYgKE5lby5jb25maWcuZW52aXJvbm1lbnQgPT09ICdkZXZlbG9wbWVudCcgJiYgdHlwZW9mIHdpbmRvdy53ZWJraXRDb252ZXJ0UG9pbnRGcm9tTm9kZVRvUGFnZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBbXG4gICAgICAgICAgICAgICAgJ1BsZWFzZSB1c2UgQ2hyb21lIGZvciB0aGUgZGV2ZWxvcG1lbnQgbW9kZS48L2JyPicsXG4gICAgICAgICAgICAgICAgJ0ZvciBkZXRhaWxzLCBzZWUgdGhlIG9wZW4gVGlja2V0OiAnLFxuICAgICAgICAgICAgICAgICc8YSBzdHlsZT1cImNvbG9yOnJlZDtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vaXNzdWVzLzE5MVwiPlNhZmFyaTogV29ya2VyIHNob3VsZCBzdXBwb3J0IEVTNiBtb2R1bGVzPC9hPidcbiAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgV29ya2VyTWFuYWdlci5vbih7XG4gICAgICAgICAgICAnYXV0b21vdW50JyAgICAgICAgOiBtZS5vblJlbmRlcixcbiAgICAgICAgICAgICdtZXNzYWdlOm1vdW50RG9tJyA6IG1lLm9uTW91bnREb20sXG4gICAgICAgICAgICAnbWVzc2FnZTp1cGRhdGVEb20nOiBtZS5vblVwZGF0ZURvbSxcbiAgICAgICAgICAgICd1cGRhdGVWZG9tJyAgICAgICA6IG1lLm9uVXBkYXRlVmRvbSxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIERvbUV2ZW50cy5vbignZG9tQ29udGVudExvYWRlZCcsIG1lLm9uRG9tQ29udGVudExvYWRlZCwgbWUpO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgICAgICAgIERvbUV2ZW50cy5vbkRvbUNvbnRlbnRMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdvcmtlcnMgY2FuIG5vdCB0cmlnZ2VyIGFsZXJ0KCksIHNvIHdlIG5lZWQgcmVtb3RlIG1ldGhvZCBhY2Nlc3MuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgYWxlcnQodmFsdWUpIHtcbiAgICAgICAgYWxlcnQodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVkaXQgdGhlIGxvY2F0aW9uLmhhc2ggdmFsdWVcbiAgICAgKiBBIHZhbHVlIG9mIG51bGwgd2lsbCByZW1vdmUgdGhlIGdpdmVuIGtleS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGVkaXRSb3V0ZShkYXRhKSB7XG4gICAgICAgIGxldCBoYXNoT2JqID0gRG9tRXZlbnRzLnBhcnNlSGFzaCh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpLFxuICAgICAgICAgICAgaGFzaEFyciA9IFtdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGRhdGEgPSBEb21FdmVudHMucGFyc2VIYXNoKGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihoYXNoT2JqLCBkYXRhKTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhoYXNoT2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGhhc2hBcnIucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2hBcnIuam9pbignJicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHdpbmRvdy5zY3JlZW4gaXMgbm90IHNwcmVhZGFibGVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldFdpbmRvd0RhdGEoKSB7XG4gICAgICAgIGNvbnN0IHdpbiAgICA9IHdpbmRvdyxcbiAgICAgICAgICAgICAgc2NyZWVuID0gd2luLnNjcmVlbjtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5uZXJIZWlnaHQ6IHdpbi5pbm5lckhlaWdodCxcbiAgICAgICAgICAgIGlubmVyV2lkdGggOiB3aW4uaW5uZXJXaWR0aCxcbiAgICAgICAgICAgIG91dGVySGVpZ2h0OiB3aW4ub3V0ZXJIZWlnaHQsXG4gICAgICAgICAgICBvdXRlcldpZHRoIDogd2luLm91dGVyV2lkdGgsXG4gICAgICAgICAgICBzY3JlZW46IHtcbiAgICAgICAgICAgICAgICBhdmFpbEhlaWdodDogc2NyZWVuLmF2YWlsSGVpZ2h0LFxuICAgICAgICAgICAgICAgIGF2YWlsTGVmdCAgOiBzY3JlZW4uYXZhaWxMZWZ0LFxuICAgICAgICAgICAgICAgIGF2YWlsVG9wICAgOiBzY3JlZW4uYXZhaWxUb3AsXG4gICAgICAgICAgICAgICAgYXZhaWxXaWR0aCA6IHNjcmVlbi5hdmFpbFdpZHRoLFxuICAgICAgICAgICAgICAgIGNvbG9yRGVwdGggOiBzY3JlZW4uY29sb3JEZXB0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgICAgIDogc2NyZWVuLmhlaWdodCxcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjoge2FuZ2xlOiBzY3JlZW4ub3JpZW50YXRpb24uYW5nbGUsIHR5cGU6IHNjcmVlbi5vcmllbnRhdGlvbi50eXBlfSxcbiAgICAgICAgICAgICAgICBwaXhlbERlcHRoIDogc2NyZWVuLnBpeGVsRGVwdGgsXG4gICAgICAgICAgICAgICAgd2lkdGggICAgICA6IHNjcmVlbi53aWR0aFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcmVlbkxlZnQ6IHdpbi5zY3JlZW5MZWZ0LFxuICAgICAgICAgICAgc2NyZWVuVG9wIDogd2luLnNjcmVlblRvcCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB0b2RvOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvcmVzaXplXG4gICAgZ2xvYmFsUmVzaXplTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbFJlc2l6ZUxpc3RlbmVyJywgZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYXN5bmMgb25Eb21Db250ZW50TG9hZGVkKCkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWcgID0gTmVvLmNvbmZpZyxcbiAgICAgICAgICAgIGltcG9ydHMgPSBbXTtcblxuICAgICAgICBEb21BY2Nlc3Mub25Eb21Db250ZW50TG9hZGVkKCk7XG5cbiAgICAgICAgLy8gbm90IGluIHVzZSByaWdodCBub3dcbiAgICAgICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG1lLmdsb2JhbFJlc2l6ZUxpc3RlbmVyLmJpbmQobWUpKTtcblxuICAgICAgICAvLyB3ZSBuZWVkIGRpZmZlcmVudCBwdWJsaWNQYXRoIHZhbHVlcyBmb3IgdGhlIG1haW4gdGhyZWFkIGluc2lkZSB0aGUgd2VicGFjayBiYXNlZCBkaXN0IGVudnMsXG4gICAgICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgaGllcmFyY2h5IGxldmVsIG9mIHRoZSBhcHAgZW50cnkgcG9pbnRcbiAgICAgICAgaWYgKGNvbmZpZy5lbnZpcm9ubWVudCAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gY29uZmlnLmJhc2VQYXRoLnN1YnN0cmluZyg2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZy5tYWluVGhyZWFkQWRkb25zLmZvckVhY2goYWRkb24gPT4ge1xuICAgICAgICAgICAgaWYgKGFkZG9uICE9PSAnQW5hbHl0aWNzQnlHb29nbGUnKSB7XG4gICAgICAgICAgICAgICAgaW1wb3J0cy5wdXNoKGltcG9ydChgLi9tYWluL2FkZG9uLyR7YWRkb259Lm1qc2ApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaW50ZW5kZWQgZm9yIHRoZSBvbmxpbmUgZXhhbXBsZXMgd2hlcmUgd2UgbmVlZCBhbiBlYXN5IHdheSB0byBhZGQgR0EgdG8gZXZlcnkgZ2VuZXJhdGVkIGFwcFxuICAgICAgICBpZiAoY29uZmlnLnVzZUdvb2dsZUFuYWx5dGljcyB8fCBjb25maWcubWFpblRocmVhZEFkZG9ucy5pbmNsdWRlcygnQW5hbHl0aWNzQnlHb29nbGUnKSkge1xuICAgICAgICAgICAgaW1wb3J0cy5wdXNoKGltcG9ydCgnLi9tYWluL2FkZG9uL0FuYWx5dGljc0J5R29vZ2xlLm1qcycpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vZHVsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChpbXBvcnRzKTtcblxuICAgICAgICBtZS5hZGRvbiA9IHt9O1xuXG4gICAgICAgIG1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICAgICAgbWUuYWRkb25bbW9kdWxlLmRlZmF1bHQuY29uc3RydWN0b3IubmFtZV0gPSBtb2R1bGUuZGVmYXVsdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgV29ya2VyTWFuYWdlci5vbldvcmtlckNvbnN0cnVjdGVkKHtcbiAgICAgICAgICAgIG9yaWdpbjogJ21haW4nXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBvbk1vdW50RG9tKGRhdGEpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVdyaXRlKGRhdGEpO1xuXG4gICAgICAgIFdvcmtlck1hbmFnZXIuc2VuZE1lc3NhZ2UoZGF0YS5vcmlnaW4gfHwgJ2FwcCcsIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXG4gICAgICAgICAgICByZXBseUlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgb25SZW5kZXIoZGF0YSkge1xuICAgICAgICBkYXRhLmRhdGEucmVwbHlJZCA9IGRhdGEucmVwbHlJZDtcbiAgICAgICAgdGhpcy5xdWV1ZVdyaXRlKGRhdGEuZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIG9uVXBkYXRlRG9tKGRhdGEpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVVwZGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgb25VcGRhdGVWZG9tKGRhdGEpIHtcbiAgICAgICAgZGF0YS5kYXRhLnJlcGx5SWQgPSBkYXRhLnJlcGx5SWQ7XG4gICAgICAgIHRoaXMucXVldWVVcGRhdGUoZGF0YS5kYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IHF1ZXVlXG4gICAgICogQHBhcmFtIHtEYXRlfSBzdGFydFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb2Nlc3NRdWV1ZShxdWV1ZSwgc3RhcnQpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIGxpbWl0ID0gbWUudGltZUxpbWl0LFxuICAgICAgICAgICAgb3BlcmF0aW9uO1xuXG4gICAgICAgIHdoaWxlIChvcGVyYXRpb24gPSBxdWV1ZS5zaGlmdCgpKSB7XG4gICAgICAgICAgICBpZiAobmV3IERhdGUoKSAtIHN0YXJ0ID4gbGltaXQpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS51bnNoaWZ0KG9wZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShtZS5yZW5kZXJGcmFtZS5iaW5kKG1lKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIERvbUFjY2Vzc1ttZS5tb2RlXShvcGVyYXRpb24pO1xuICAgICAgICAgICAgICAgIFdvcmtlck1hbmFnZXIucmVzb2x2ZURvbU9wZXJhdGlvblByb21pc2Uob3BlcmF0aW9uLnJlcGx5SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBxdWV1ZVJlYWQoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBtZS5yZWFkUXVldWUucHVzaChkYXRhKTtcblxuICAgICAgICBpZiAoIW1lLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIG1lLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1lLnJlbmRlckZyYW1lLmJpbmQobWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcXVldWVVcGRhdGUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBtZS51cGRhdGVRdWV1ZS5wdXNoKGRhdGEpO1xuXG4gICAgICAgIGlmICghbWUucnVubmluZykge1xuICAgICAgICAgICAgbWUucnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWUucmVuZGVyRnJhbWUuYmluZChtZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBxdWV1ZVdyaXRlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgbWUud3JpdGVRdWV1ZS5wdXNoKGRhdGEpO1xuXG4gICAgICAgIGlmICghbWUucnVubmluZykge1xuICAgICAgICAgICAgbWUucnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWUucmVuZGVyRnJhbWUuYmluZChtZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIGRpZmZlcmVudCBET00gb3BlcmF0aW9uIHF1ZXVlc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZW5kZXJGcmFtZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVhZCAgICA9IG1lLnJlYWRRdWV1ZSxcbiAgICAgICAgICAgIHVwZGF0ZSAgPSBtZS51cGRhdGVRdWV1ZSxcbiAgICAgICAgICAgIHdyaXRlICAgPSBtZS53cml0ZVF1ZXVlLFxuICAgICAgICAgICAgcmVhZGluZyA9IG1lLm1vZGUgPT09ICdyZWFkJyxcbiAgICAgICAgICAgIHN0YXJ0ICAgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLmxvZ0RlbHRhVXBkYXRlcykge1xuICAgICAgICAgICAgbWUudG90YWxGcmFtZUNvdW50Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG90YWwgRnJhbWVzOiAnICsgbWUudG90YWxGcmFtZUNvdW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWFkaW5nIHx8ICF3cml0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1lLm1vZGUgPSAncmVhZCc7XG4gICAgICAgICAgICBpZiAobWUucHJvY2Vzc1F1ZXVlKHJlYWQsIHN0YXJ0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cGRhdGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBtZS5tb2RlID0gJ3VwZGF0ZSc7XG4gICAgICAgICAgICBpZiAobWUucHJvY2Vzc1F1ZXVlKHVwZGF0ZSwgc3RhcnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdyaXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgbWUubW9kZSA9ICd3cml0ZSc7XG4gICAgICAgICAgICBpZiAobWUucHJvY2Vzc1F1ZXVlKHdyaXRlLCBzdGFydCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZS5ydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBsb2NhdGlvbi5oYXNoIHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS52YWx1ZVxuICAgICAqL1xuICAgIHNldFJvdXRlKGRhdGEpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBkYXRhLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgbG9jYXRpb24uaGFzaCB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEua2V5XG4gICAgICogQHBhcmFtIHsqfSBkYXRhLnZhbHVlXG4gICAgICovXG4gICAgc2V0TmVvQ29uZmlnKGRhdGEpIHtcbiAgICAgICAgTmVvLmNvbmZpZ1tkYXRhLmtleV0gPSBkYXRhLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyBwb3B1cCB3aW5kb3dzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gZGF0YS5uYW1lc1xuICAgICAqL1xuICAgIHdpbmRvd0Nsb3NlKGRhdGEpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEubmFtZXMpKSB7XG4gICAgICAgICAgICBkYXRhLm5hbWVzID0gW2RhdGEubmFtZXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5uYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcGVuV2luZG93c1tuYW1lXS5jbG9zZSgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMub3BlbldpbmRvd3NbbmFtZV07XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZSBhIHBvcHVwIHdpbmRvd1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEud2luZG93TmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS55XG4gICAgICovXG4gICAgd2luZG93TW92ZVRvKGRhdGEpIHtcbiAgICAgICAgdGhpcy5vcGVuV2luZG93c1tkYXRhLndpbmRvd05hbWVdLm1vdmVUbyhkYXRhLngsIGRhdGEueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbiBhIG5ldyBwb3B1cCB3aW5kb3dcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnVybFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLndpbmRvd0ZlYXR1cmVzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEud2luZG93TmFtZVxuICAgICAqL1xuICAgIHdpbmRvd09wZW4oZGF0YSkge1xuICAgICAgICB0aGlzLm9wZW5XaW5kb3dzW2RhdGEud2luZG93TmFtZV0gPSB3aW5kb3cub3BlbihkYXRhLnVybCwgZGF0YS53aW5kb3dOYW1lLCBkYXRhLndpbmRvd0ZlYXR1cmVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIGEgcG9wdXAgd2luZG93XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2RhdGEuaGVpZ2h0XVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZGF0YS53aWR0aF1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS53aW5kb3dOYW1lXG4gICAgICovXG4gICAgd2luZG93UmVzaXplVG8oZGF0YSkge1xuICAgICAgICBsZXQgd2luICAgID0gdGhpcy5vcGVuV2luZG93c1tkYXRhLndpbmRvd05hbWVdLFxuICAgICAgICAgICAgaGVpZ2h0ID0gZGF0YS5oZWlnaHQgfHwgd2luLm91dGVySGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGggID0gZGF0YS53aWR0aCAgfHwgd2luLm91dGVyV2lkdGg7XG5cbiAgICAgICAgd2luLnJlc2l6ZVRvKHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoTWFpbik7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==