(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { }
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.main = function() {
	ApplicationMain.completed = 0;
	ApplicationMain.loaders = new haxe.ds.StringMap();
	ApplicationMain.urlLoaders = new haxe.ds.StringMap();
	ApplicationMain.total = 0;
	flash.Lib.get_current().loaderInfo = flash.display.LoaderInfo.create(null);
	try {
		if(Reflect.hasField(js.Browser.window,"winParameters")) flash.Lib.get_current().loaderInfo.parameters = (Reflect.field(js.Browser.window,"winParameters"))();
		flash.Lib.get_current().get_stage().loaderInfo = flash.Lib.get_current().loaderInfo;
	} catch( e ) {
	}
	ApplicationMain.preloader = new NMEPreloader();
	flash.Lib.get_current().addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var loader = new flash.display.Loader();
	ApplicationMain.loaders.set("images/1_red.png",loader);
	ApplicationMain.total++;
	var loader1 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/1_red@2x.png",loader1);
	ApplicationMain.total++;
	var loader2 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/2_green.png",loader2);
	ApplicationMain.total++;
	var loader3 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/2_green@2x.png",loader3);
	ApplicationMain.total++;
	var loader4 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/3_blue.png",loader4);
	ApplicationMain.total++;
	var loader5 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/3_blue@2x.png",loader5);
	ApplicationMain.total++;
	var loader6 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/4_yellow.png",loader6);
	ApplicationMain.total++;
	var loader7 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/4_yellow@2x.png",loader7);
	ApplicationMain.total++;
	var loader8 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/5_pink.png",loader8);
	ApplicationMain.total++;
	var loader9 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/5_pink@2x.png",loader9);
	ApplicationMain.total++;
	var loader10 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/btn_ok.png",loader10);
	ApplicationMain.total++;
	var loader11 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/circle_1.png",loader11);
	ApplicationMain.total++;
	var loader12 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/correct.png",loader12);
	ApplicationMain.total++;
	var loader13 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/incorrect.png",loader13);
	ApplicationMain.total++;
	var loader14 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/instruction.png",loader14);
	ApplicationMain.total++;
	var loader15 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/instruction@2x.png",loader15);
	ApplicationMain.total++;
	var loader16 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/life_line_bg_gfx.png",loader16);
	ApplicationMain.total++;
	var loader17 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/life_line_gfx.png",loader17);
	ApplicationMain.total++;
	var loader18 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/logo.png",loader18);
	ApplicationMain.total++;
	var loader19 = new flash.display.Loader();
	ApplicationMain.loaders.set("images/timeUp.png",loader19);
	ApplicationMain.total++;
	var resourcePrefix = "__ASSET__:bitmap_";
	var _g = 0, _g1 = haxe.Resource.listNames();
	while(_g < _g1.length) {
		var resourceName = _g1[_g];
		++_g;
		if(StringTools.startsWith(resourceName,resourcePrefix)) {
			var type = Type.resolveClass(StringTools.replace(resourceName.substring(resourcePrefix.length),"_","."));
			if(type != null) {
				ApplicationMain.total++;
				var instance = Type.createInstance(type,[0,0,true,16777215,ApplicationMain.bitmapClass_onComplete]);
			}
		}
	}
	if(ApplicationMain.total == 0) ApplicationMain.begin(); else {
		var $it0 = ApplicationMain.loaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var loader20 = ApplicationMain.loaders.get(path);
			loader20.contentLoaderInfo.addEventListener("complete",ApplicationMain.loader_onComplete);
			loader20.load(new flash.net.URLRequest(path));
		}
		var $it1 = ApplicationMain.urlLoaders.keys();
		while( $it1.hasNext() ) {
			var path = $it1.next();
			var urlLoader = ApplicationMain.urlLoaders.get(path);
			urlLoader.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader.load(new flash.net.URLRequest(path));
		}
	}
}
ApplicationMain.begin = function() {
	ApplicationMain.preloader.addEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
}
ApplicationMain.bitmapClass_onComplete = function(instance) {
	ApplicationMain.completed++;
	var classType = Type.getClass(instance);
	classType.preload = instance;
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.completed++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.completed,ApplicationMain.total);
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	flash.Lib.get_current().removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	if(Reflect.field(com.saumya.core.ui.Main,"main") == null) {
		var mainDisplayObj = Type.createInstance(DocumentClass,[]);
		if(js.Boot.__instanceof(mainDisplayObj,flash.display.DisplayObject)) flash.Lib.get_current().addChild(mainDisplayObj);
	} else Reflect.field(com.saumya.core.ui.Main,"main").apply(com.saumya.core.ui.Main,[]);
}
var flash = {}
flash.events = {}
flash.events.IEventDispatcher = function() { }
$hxClasses["flash.events.IEventDispatcher"] = flash.events.IEventDispatcher;
flash.events.IEventDispatcher.__name__ = ["flash","events","IEventDispatcher"];
flash.events.IEventDispatcher.prototype = {
	__class__: flash.events.IEventDispatcher
}
flash.events.EventDispatcher = function(target) {
	if(target != null) this.__target = target; else this.__target = this;
	this.__eventMap = [];
};
$hxClasses["flash.events.EventDispatcher"] = flash.events.EventDispatcher;
flash.events.EventDispatcher.__name__ = ["flash","events","EventDispatcher"];
flash.events.EventDispatcher.__interfaces__ = [flash.events.IEventDispatcher];
flash.events.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
flash.events.EventDispatcher.prototype = {
	willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,toString: function() {
		return "[ " + this.__name__ + " ]";
	}
	,setList: function(type,list) {
		this.__eventMap[type] = list;
	}
	,removeEventListener: function(type,listener,inCapture) {
		if(inCapture == null) inCapture = false;
		if(!this.existList(type)) return;
		var list = this.getList(type);
		var capture = inCapture == null?false:inCapture;
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].Is(listener,capture)) {
				list.splice(i,1);
				return;
			}
		}
	}
	,hasEventListener: function(type) {
		return this.existList(type);
	}
	,getList: function(type) {
		return this.__eventMap[type];
	}
	,existList: function(type) {
		return this.__eventMap != null && this.__eventMap[type] != undefined;
	}
	,dispatchEvent: function(event) {
		if(event.target == null) event.target = this.__target;
		var capture = event.eventPhase == flash.events.EventPhase.CAPTURING_PHASE;
		if(this.existList(event.type)) {
			var list = this.getList(event.type);
			var idx = 0;
			while(idx < list.length) {
				var listener = list[idx];
				if(listener.mUseCapture == capture) {
					listener.dispatchEvent(event);
					if(event.__getIsCancelledNow()) return true;
				}
				if(idx < list.length && listener != list[idx]) {
				} else idx++;
			}
			return true;
		}
		return false;
	}
	,addEventListener: function(type,inListener,useCapture,inPriority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(inPriority == null) inPriority = 0;
		if(useCapture == null) useCapture = false;
		var capture = useCapture == null?false:useCapture;
		var priority = inPriority == null?0:inPriority;
		var list = this.getList(type);
		if(!this.existList(type)) {
			list = [];
			this.setList(type,list);
		}
		list.push(new flash.events.Listener(inListener,capture,priority));
		list.sort(flash.events.EventDispatcher.compareListeners);
	}
	,__class__: flash.events.EventDispatcher
}
flash.display = {}
flash.display.IBitmapDrawable = function() { }
$hxClasses["flash.display.IBitmapDrawable"] = flash.display.IBitmapDrawable;
flash.display.IBitmapDrawable.__name__ = ["flash","display","IBitmapDrawable"];
flash.display.IBitmapDrawable.prototype = {
	__class__: flash.display.IBitmapDrawable
}
flash.display.DisplayObject = function() {
	flash.events.EventDispatcher.call(this,null);
	this.___id = flash.utils.Uuid.uuid();
	this.set_parent(null);
	this.set_transform(new flash.geom.Transform(this));
	this.__x = 0.0;
	this.__y = 0.0;
	this.__scaleX = 1.0;
	this.__scaleY = 1.0;
	this.__rotation = 0.0;
	this.__width = 0.0;
	this.__height = 0.0;
	this.set_visible(true);
	this.alpha = 1.0;
	this.__filters = new Array();
	this.__boundsRect = new flash.geom.Rectangle();
	this.__scrollRect = null;
	this.__mask = null;
	this.__maskingObj = null;
	this.set___combinedVisible(this.get_visible());
};
$hxClasses["flash.display.DisplayObject"] = flash.display.DisplayObject;
flash.display.DisplayObject.__name__ = ["flash","display","DisplayObject"];
flash.display.DisplayObject.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.DisplayObject.__super__ = flash.events.EventDispatcher;
flash.display.DisplayObject.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__srUpdateDivs: function() {
		var gfx = this.__getGraphics();
		if(gfx == null || this.parent == null) return;
		if(this.__scrollRect == null) {
			if(this._srAxes != null && gfx.__surface.parentNode == this._srAxes && this._srWindow.parentNode != null) this._srWindow.parentNode.replaceChild(gfx.__surface,this._srWindow);
			return;
		}
		if(this._srWindow == null) {
			this._srWindow = js.Browser.document.createElement("div");
			this._srAxes = js.Browser.document.createElement("div");
			this._srWindow.style.setProperty("position","absolute","");
			this._srWindow.style.setProperty("left","0px","");
			this._srWindow.style.setProperty("top","0px","");
			this._srWindow.style.setProperty("width","0px","");
			this._srWindow.style.setProperty("height","0px","");
			this._srWindow.style.setProperty("overflow","hidden","");
			this._srAxes.style.setProperty("position","absolute","");
			this._srAxes.style.setProperty("left","0px","");
			this._srAxes.style.setProperty("top","0px","");
			this._srWindow.appendChild(this._srAxes);
		}
		var pnt = this.parent.localToGlobal(new flash.geom.Point(this.get_x(),this.get_y()));
		this._srWindow.style.left = pnt.x + "px";
		this._srWindow.style.top = pnt.y + "px";
		this._srWindow.style.width = this.__scrollRect.width + "px";
		this._srWindow.style.height = this.__scrollRect.height + "px";
		this._srAxes.style.left = -pnt.x - this.__scrollRect.x + "px";
		this._srAxes.style.top = -pnt.y - this.__scrollRect.y + "px";
		if(gfx.__surface.parentNode != this._srAxes && gfx.__surface.parentNode != null) {
			gfx.__surface.parentNode.insertBefore(this._srWindow,gfx.__surface);
			flash.Lib.__removeSurface(gfx.__surface);
			this._srAxes.appendChild(gfx.__surface);
		}
	}
	,__getSrWindow: function() {
		return this._srWindow;
	}
	,set_width: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var w = this.__boundsRect.width;
		if(this.__scaleX * w != inValue) {
			if(w == 0) {
				this.__scaleX = 1;
				this.__invalidateMatrix(true);
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				w = this.__boundsRect.width;
			}
			if(w <= 0) return 0;
			this.__scaleX = inValue / w;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_width: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__width;
	}
	,set_y: function(inValue) {
		if(this.__y != inValue) {
			this.__y = inValue;
			this.__invalidateMatrix(true);
			if(this.parent != null) this.parent.__invalidateBounds();
		}
		return inValue;
	}
	,get_y: function() {
		return this.__y;
	}
	,set_x: function(inValue) {
		if(this.__x != inValue) {
			this.__x = inValue;
			this.__invalidateMatrix(true);
			if(this.parent != null) this.parent.__invalidateBounds();
		}
		return inValue;
	}
	,get_x: function() {
		return this.__x;
	}
	,set_visible: function(inValue) {
		if(this.__visible != inValue) {
			this.__visible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.__visible;
	}
	,get_visible: function() {
		return this.__visible;
	}
	,set_transform: function(inValue) {
		this.transform = inValue;
		this.__x = this.transform.get_matrix().tx;
		this.__y = this.transform.get_matrix().ty;
		this.__invalidateMatrix(true);
		return inValue;
	}
	,get__topmostSurface: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return gfx.__surface;
		return null;
	}
	,get_stage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return flash.Lib.__getStage();
		return null;
	}
	,set_scrollRect: function(inValue) {
		this.__scrollRect = inValue;
		this.__srUpdateDivs();
		return inValue;
	}
	,get_scrollRect: function() {
		if(this.__scrollRect == null) return null;
		return this.__scrollRect.clone();
	}
	,set_scaleY: function(inValue) {
		if(this.__scaleY != inValue) {
			this.__scaleY = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleY: function() {
		return this.__scaleY;
	}
	,set_scaleX: function(inValue) {
		if(this.__scaleX != inValue) {
			this.__scaleX = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleX: function() {
		return this.__scaleX;
	}
	,set_rotation: function(inValue) {
		if(this.__rotation != inValue) {
			this.__rotation = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_rotation: function() {
		return this.__rotation;
	}
	,set_parent: function(inValue) {
		if(inValue == this.parent) return inValue;
		this.__invalidateMatrix();
		if(this.parent != null) {
			HxOverrides.remove(this.parent.__children,this);
			this.parent.__invalidateBounds();
		}
		if(inValue != null) {
			inValue.___renderFlags |= 64;
			if(inValue.parent != null) inValue.parent.___renderFlags |= 64;
		}
		if(this.parent == null && inValue != null) {
			this.parent = inValue;
			var evt = new flash.events.Event(flash.events.Event.ADDED,true,false);
			this.dispatchEvent(evt);
		} else if(this.parent != null && inValue == null) {
			this.parent = inValue;
			var evt = new flash.events.Event(flash.events.Event.REMOVED,true,false);
			this.dispatchEvent(evt);
		} else this.parent = inValue;
		return inValue;
	}
	,set___combinedVisible: function(inValue) {
		if(this.__combinedVisible != inValue) {
			this.__combinedVisible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.__combinedVisible;
	}
	,get_mouseY: function() {
		return this.globalToLocal(new flash.geom.Point(0,this.get_stage().get_mouseY())).y;
	}
	,get_mouseX: function() {
		return this.globalToLocal(new flash.geom.Point(this.get_stage().get_mouseX(),0)).x;
	}
	,get__matrixInvalid: function() {
		return (this.___renderFlags & 4) != 0;
	}
	,get__matrixChainInvalid: function() {
		return (this.___renderFlags & 8) != 0;
	}
	,set_mask: function(inValue) {
		if(this.__mask != null) this.__mask.__maskingObj = null;
		this.__mask = inValue;
		if(this.__mask != null) this.__mask.__maskingObj = this;
		return this.__mask;
	}
	,get_mask: function() {
		return this.__mask;
	}
	,set_height: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var h = this.__boundsRect.height;
		if(this.__scaleY * h != inValue) {
			if(h == 0) {
				this.__scaleY = 1;
				this.__invalidateMatrix(true);
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				h = this.__boundsRect.height;
			}
			if(h <= 0) return 0;
			this.__scaleY = inValue / h;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_height: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__height;
	}
	,set_filters: function(filters) {
		var oldFilterCount = this.__filters == null?0:this.__filters.length;
		if(filters == null) {
			this.__filters = null;
			if(oldFilterCount > 0) this.invalidateGraphics();
		} else {
			this.__filters = new Array();
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				this.__filters.push(filter.clone());
			}
			this.invalidateGraphics();
		}
		return filters;
	}
	,get__boundsInvalid: function() {
		var gfx = this.__getGraphics();
		if(gfx == null) return (this.___renderFlags & 64) != 0; else return (this.___renderFlags & 64) != 0 || gfx.boundsDirty;
	}
	,get_filters: function() {
		if(this.__filters == null) return [];
		var result = new Array();
		var _g = 0, _g1 = this.__filters;
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			result.push(filter.clone());
		}
		return result;
	}
	,get__bottommostSurface: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return gfx.__surface;
		return null;
	}
	,__validateMatrix: function() {
		var parentMatrixInvalid = (this.___renderFlags & 8) != 0 && this.parent != null;
		if((this.___renderFlags & 4) != 0 || parentMatrixInvalid) {
			if(parentMatrixInvalid) this.parent.__validateMatrix();
			var m = this.transform.get_matrix();
			if((this.___renderFlags & 16) != 0) this.___renderFlags &= -5;
			if((this.___renderFlags & 4) != 0) {
				m.identity();
				m.scale(this.__scaleX,this.__scaleY);
				var rad = this.__rotation * flash.geom.Transform.DEG_TO_RAD;
				if(rad != 0.0) m.rotate(rad);
				m.translate(this.__x,this.__y);
				this.transform._matrix.copy(m);
				m;
			}
			var cm = this.transform.__getFullMatrix(null);
			var fm = this.parent == null?m:this.parent.transform.__getFullMatrix(m);
			this._fullScaleX = fm._sx;
			this._fullScaleY = fm._sy;
			if(cm.a != fm.a || cm.b != fm.b || cm.c != fm.c || cm.d != fm.d || cm.tx != fm.tx || cm.ty != fm.ty) {
				this.transform.__setFullMatrix(fm);
				this.___renderFlags |= 32;
			}
			this.___renderFlags &= -29;
		}
	}
	,__unifyChildrenWithDOM: function(lastMoveObj) {
		var gfx = this.__getGraphics();
		if(gfx != null && lastMoveObj != null && this != lastMoveObj) {
			var ogfx = lastMoveObj.__getGraphics();
			if(ogfx != null) flash.Lib.__setSurfaceZIndexAfter(this.__scrollRect == null?gfx.__surface:this._srWindow,lastMoveObj.__scrollRect == null?ogfx.__surface:lastMoveObj == this.parent?ogfx.__surface:lastMoveObj._srWindow);
		}
		if(gfx == null) return lastMoveObj; else return this;
	}
	,__testFlag: function(mask) {
		return (this.___renderFlags & mask) != 0;
	}
	,__setMatrix: function(inValue) {
		this.transform._matrix.copy(inValue);
		return inValue;
	}
	,__setFullMatrix: function(inValue) {
		return this.transform.__setFullMatrix(inValue);
	}
	,__setFlagToValue: function(mask,value) {
		if(value) this.___renderFlags |= mask; else this.___renderFlags &= ~mask;
	}
	,__setFlag: function(mask) {
		this.___renderFlags |= mask;
	}
	,__setDimensions: function() {
		if(this.scale9Grid != null) {
			this.__boundsRect.width *= this.__scaleX;
			this.__boundsRect.height *= this.__scaleY;
			this.__width = this.__boundsRect.width;
			this.__height = this.__boundsRect.height;
		} else {
			this.__width = this.__boundsRect.width * this.__scaleX;
			this.__height = this.__boundsRect.height * this.__scaleY;
		}
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		var gfx = this.__getGraphics();
		if(gfx == null) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(gfx.__render(inMask,this.__filters,1,1)) {
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
			this.__applyFilters(gfx.__surface);
			this.___renderFlags |= 32;
		}
		var fullAlpha = (this.parent != null?this.parent.__combinedAlpha:1) * this.alpha;
		if(inMask != null) {
			var m = this.getSurfaceTransform(gfx);
			flash.Lib.__drawToSurface(gfx.__surface,inMask,m,fullAlpha,clipRect);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(gfx);
				flash.Lib.__setSurfaceTransform(gfx.__surface,m);
				this.___renderFlags &= -33;
				this.__srUpdateDivs();
			}
			flash.Lib.__setSurfaceOpacity(gfx.__surface,fullAlpha);
		}
	}
	,__removeFromStage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null && flash.Lib.__isOnStage(gfx.__surface)) {
			flash.Lib.__removeSurface(gfx.__surface);
			var evt = new flash.events.Event(flash.events.Event.REMOVED_FROM_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,__matrixOverridden: function() {
		this.__x = this.transform.get_matrix().tx;
		this.__y = this.transform.get_matrix().ty;
		this.___renderFlags |= 16;
		this.___renderFlags |= 4;
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
	}
	,__isOnStage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null && flash.Lib.__isOnStage(gfx.__surface)) return true;
		return false;
	}
	,__invalidateMatrix: function(local) {
		if(local == null) local = false;
		if(local) this.___renderFlags |= 4; else this.___renderFlags |= 8;
	}
	,__invalidateBounds: function() {
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
	}
	,__getSurface: function() {
		var gfx = this.__getGraphics();
		var surface = null;
		if(gfx != null) surface = gfx.__surface;
		return surface;
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var gfx = this.__getGraphics();
		if(gfx != null) {
			gfx.__render();
			var extX = gfx.__extent.x;
			var extY = gfx.__extent.y;
			var local = this.globalToLocal(point);
			if(local.x - extX <= 0 || local.y - extY <= 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return null;
			if(gfx.__hitTest(local.x,local.y)) return this;
		}
		return null;
	}
	,__getMatrix: function() {
		return this.transform.get_matrix();
	}
	,__getInteractiveObjectStack: function(outStack) {
		var io = this;
		if(io != null) outStack.push(io);
		if(this.parent != null) this.parent.__getInteractiveObjectStack(outStack);
	}
	,__getGraphics: function() {
		return null;
	}
	,__getFullMatrix: function(localMatrix) {
		return this.transform.__getFullMatrix(localMatrix);
	}
	,__fireEvent: function(event) {
		var stack = [];
		if(this.parent != null) this.parent.__getInteractiveObjectStack(stack);
		var l = stack.length;
		if(l > 0) {
			event.__setPhase(flash.events.EventPhase.CAPTURING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.__dispatchEvent(event);
				if(event.__getIsCancelled()) return;
			}
		}
		event.__setPhase(flash.events.EventPhase.AT_TARGET);
		event.currentTarget = this;
		this.__dispatchEvent(event);
		if(event.__getIsCancelled()) return;
		if(event.bubbles) {
			event.__setPhase(flash.events.EventPhase.BUBBLING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.__dispatchEvent(event);
				if(event.__getIsCancelled()) return;
			}
		}
	}
	,__dispatchEvent: function(event) {
		if(event.target == null) event.target = this;
		event.currentTarget = this;
		return flash.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
	}
	,__contains: function(child) {
		return false;
	}
	,__clearFlag: function(mask) {
		this.___renderFlags &= ~mask;
	}
	,__broadcast: function(event) {
		this.__dispatchEvent(event);
	}
	,__applyFilters: function(surface) {
		if(this.__filters != null) {
			var _g = 0, _g1 = this.__filters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				filter.__applyFilter(surface);
			}
		}
	}
	,__addToStage: function(newParent,beforeSibling) {
		var gfx = this.__getGraphics();
		if(gfx == null) return;
		if(newParent.__getGraphics() != null) {
			flash.Lib.__setSurfaceId(gfx.__surface,this.___id);
			if(beforeSibling != null && beforeSibling.__getGraphics() != null) flash.Lib.__appendSurface(gfx.__surface,beforeSibling.get__bottommostSurface()); else {
				var stageChildren = [];
				var _g = 0, _g1 = newParent.__children;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					if(child.get_stage() != null) stageChildren.push(child);
				}
				if(stageChildren.length < 1) flash.Lib.__appendSurface(gfx.__surface,null,newParent.get__topmostSurface()); else {
					var nextSibling = stageChildren[stageChildren.length - 1];
					var container;
					while(js.Boot.__instanceof(nextSibling,flash.display.DisplayObjectContainer)) {
						container = js.Boot.__cast(nextSibling , flash.display.DisplayObjectContainer);
						if(container.__children.length > 0) nextSibling = container.__children[container.__children.length - 1]; else break;
					}
					if(nextSibling.__getGraphics() != gfx) flash.Lib.__appendSurface(gfx.__surface,null,nextSibling.get__topmostSurface()); else flash.Lib.__appendSurface(gfx.__surface);
				}
			}
			flash.Lib.__setSurfaceTransform(gfx.__surface,this.getSurfaceTransform(gfx));
		} else if(newParent.name == "Stage") flash.Lib.__appendSurface(gfx.__surface);
		if(this.__isOnStage()) {
			this.__srUpdateDivs();
			var evt = new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			var gfx = this.__getGraphics();
			if(gfx == null) {
				this.__boundsRect.x = this.get_x();
				this.__boundsRect.y = this.get_y();
				this.__boundsRect.width = 0;
				this.__boundsRect.height = 0;
			} else {
				this.__boundsRect = gfx.__extent.clone();
				if(this.scale9Grid != null) {
					this.__boundsRect.width *= this.__scaleX;
					this.__boundsRect.height *= this.__scaleY;
					this.__width = this.__boundsRect.width;
					this.__height = this.__boundsRect.height;
				} else {
					this.__width = this.__boundsRect.width * this.__scaleX;
					this.__height = this.__boundsRect.height * this.__scaleY;
				}
				gfx.boundsDirty = false;
			}
			this.___renderFlags &= -65;
		}
	}
	,toString: function() {
		return "[DisplayObject name=" + this.name + " id=" + this.___id + "]";
	}
	,setSurfaceVisible: function(inValue) {
		var gfx = this.__getGraphics();
		if(gfx != null && gfx.__surface != null) flash.Lib.__setSurfaceVisible(gfx.__surface,inValue);
	}
	,localToGlobal: function(point) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		return this.transform.__getFullMatrix(null).transformPoint(point);
	}
	,invalidateGraphics: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) {
			gfx.__changed = true;
			gfx.__clearNextCycle = true;
		}
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		var boundingBox = shapeFlag == null?true:!shapeFlag;
		if(!boundingBox) return this.__getObjectUnderPoint(new flash.geom.Point(x,y)) != null; else {
			var gfx = this.__getGraphics();
			if(gfx != null) {
				var extX = gfx.__extent.x;
				var extY = gfx.__extent.y;
				var local = this.globalToLocal(new flash.geom.Point(x,y));
				if(local.x - extX < 0 || local.y - extY < 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return false; else return true;
			}
			return false;
		}
	}
	,hitTestObject: function(obj) {
		if(obj != null && obj.parent != null && this.parent != null) {
			var currentBounds = this.getBounds(this);
			var targetBounds = obj.getBounds(this);
			return currentBounds.intersects(targetBounds);
		}
		return false;
	}
	,handleGraphicsUpdated: function(gfx) {
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		this.__applyFilters(gfx.__surface);
		this.___renderFlags |= 32;
	}
	,globalToLocal: function(inPos) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		return this.transform.__getFullMatrix(null).invert().transformPoint(inPos);
	}
	,getSurfaceTransform: function(gfx) {
		var extent = gfx.__extentWithFilters;
		var fm = this.transform.__getFullMatrix(null);
		fm.__translateTransformed(extent.get_topLeft());
		return fm;
	}
	,getScreenBounds: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__boundsRect.clone();
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,getBounds: function(targetCoordinateSpace) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.get__boundsInvalid()) this.validateBounds();
		var m = this.transform.__getFullMatrix(null);
		if(targetCoordinateSpace != null) m.concat(targetCoordinateSpace.transform.__getFullMatrix(null).invert());
		var rect = this.__boundsRect.transform(m);
		return rect;
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		var oldAlpha = this.alpha;
		this.alpha = 1;
		this.__render(inSurface,clipRect);
		this.alpha = oldAlpha;
	}
	,dispatchEvent: function(event) {
		var result = this.__dispatchEvent(event);
		if(event.__getIsCancelled()) return true;
		if(event.bubbles && this.parent != null) this.parent.dispatchEvent(event);
		return result;
	}
	,__class__: flash.display.DisplayObject
	,__properties__: {set_filters:"set_filters",get_filters:"get_filters",set_height:"set_height",get_height:"get_height",set_mask:"set_mask",get_mask:"get_mask",get_mouseX:"get_mouseX",get_mouseY:"get_mouseY",set_parent:"set_parent",set_rotation:"set_rotation",get_rotation:"get_rotation",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",get_stage:"get_stage",set_transform:"set_transform",set_visible:"set_visible",get_visible:"get_visible",set_width:"set_width",get_width:"get_width",set_x:"set_x",get_x:"get_x",set_y:"set_y",get_y:"get_y",set___combinedVisible:"set___combinedVisible",get__bottommostSurface:"get__bottommostSurface",get__boundsInvalid:"get__boundsInvalid",get__matrixChainInvalid:"get__matrixChainInvalid",get__matrixInvalid:"get__matrixInvalid",get__topmostSurface:"get__topmostSurface"}
});
flash.display.InteractiveObject = function() {
	flash.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.doubleClickEnabled = true;
	this.set_tabIndex(0);
};
$hxClasses["flash.display.InteractiveObject"] = flash.display.InteractiveObject;
flash.display.InteractiveObject.__name__ = ["flash","display","InteractiveObject"];
flash.display.InteractiveObject.__super__ = flash.display.DisplayObject;
flash.display.InteractiveObject.prototype = $extend(flash.display.DisplayObject.prototype,{
	set_tabIndex: function(inIndex) {
		return this.__tabIndex = inIndex;
	}
	,get_tabIndex: function() {
		return this.__tabIndex;
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.mouseEnabled) return null; else return flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,toString: function() {
		return "[InteractiveObject name=" + this.name + " id=" + this.___id + "]";
	}
	,__class__: flash.display.InteractiveObject
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_tabIndex:"set_tabIndex",get_tabIndex:"get_tabIndex"})
});
flash.display.DisplayObjectContainer = function() {
	this.__children = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	flash.display.InteractiveObject.call(this);
	this.__combinedAlpha = this.alpha;
};
$hxClasses["flash.display.DisplayObjectContainer"] = flash.display.DisplayObjectContainer;
flash.display.DisplayObjectContainer.__name__ = ["flash","display","DisplayObjectContainer"];
flash.display.DisplayObjectContainer.__super__ = flash.display.InteractiveObject;
flash.display.DisplayObjectContainer.prototype = $extend(flash.display.InteractiveObject.prototype,{
	set_scrollRect: function(inValue) {
		inValue = flash.display.InteractiveObject.prototype.set_scrollRect.call(this,inValue);
		this.__unifyChildrenWithDOM();
		return inValue;
	}
	,set_visible: function(inVal) {
		this.set___combinedVisible(this.parent != null?this.parent.__combinedVisible && inVal:inVal);
		return flash.display.InteractiveObject.prototype.set_visible.call(this,inVal);
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,set___combinedVisible: function(inVal) {
		if(inVal != this.__combinedVisible) {
			var _g = 0, _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.set___combinedVisible(child.get_visible() && inVal);
			}
		}
		return flash.display.InteractiveObject.prototype.set___combinedVisible.call(this,inVal);
	}
	,set_filters: function(filters) {
		flash.display.InteractiveObject.prototype.set_filters.call(this,filters);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.set_filters(filters);
		}
		return filters;
	}
	,__unifyChildrenWithDOM: function(lastMoveObj) {
		var obj = flash.display.InteractiveObject.prototype.__unifyChildrenWithDOM.call(this,lastMoveObj);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			obj = child.__unifyChildrenWithDOM(obj);
			if(child.get_scrollRect() != null) obj = child;
		}
		return obj;
	}
	,__swapSurface: function(c1,c2) {
		if(this.__children[c1] == null) throw "Null element at index " + c1 + " length " + this.__children.length;
		if(this.__children[c2] == null) throw "Null element at index " + c2 + " length " + this.__children.length;
		var gfx1 = this.__children[c1].__getGraphics();
		var gfx2 = this.__children[c2].__getGraphics();
		if(gfx1 != null && gfx2 != null) {
			var surface1 = this.__children[c1].__scrollRect == null?gfx1.__surface:this.__children[c1].__getSrWindow();
			var surface2 = this.__children[c2].__scrollRect == null?gfx2.__surface:this.__children[c2].__getSrWindow();
			if(surface1 != null && surface2 != null) flash.Lib.__swapSurface(surface1,surface2);
		}
	}
	,__render: function(inMask,clipRect) {
		if(!this.__visible) return;
		if(clipRect == null && this.__scrollRect != null) clipRect = this.__scrollRect;
		flash.display.InteractiveObject.prototype.__render.call(this,inMask,clipRect);
		this.__combinedAlpha = this.parent != null?this.parent.__combinedAlpha * this.alpha:this.alpha;
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__visible) {
				if(clipRect != null) {
					if((child.___renderFlags & 4) != 0 || (child.___renderFlags & 8) != 0) child.__validateMatrix();
				}
				child.__render(inMask,clipRect);
			}
		}
		if(this.__addedChildren) {
			this.__unifyChildrenWithDOM();
			this.__addedChildren = false;
		}
	}
	,__removeFromStage: function() {
		flash.display.InteractiveObject.prototype.__removeFromStage.call(this);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__removeFromStage();
		}
	}
	,__removeChild: function(child) {
		HxOverrides.remove(this.__children,child);
		child.__removeFromStage();
		child.set_parent(null);
		return child;
	}
	,__invalidateMatrix: function(local) {
		if(local == null) local = false;
		if(!((this.___renderFlags & 8) != 0) && !((this.___renderFlags & 4) != 0)) {
			var _g = 0, _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__invalidateMatrix();
			}
		}
		flash.display.InteractiveObject.prototype.__invalidateMatrix.call(this,local);
	}
	,__getObjectsUnderPoint: function(point,stack) {
		var l = this.__children.length - 1;
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = this.__children[l - i].__getObjectUnderPoint(point);
			if(result != null) stack.push(result);
		}
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var l = this.__children.length - 1;
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = null;
			if(this.mouseEnabled) result = this.__children[l - i].__getObjectUnderPoint(point);
			if(result != null) return this.mouseChildren?result:this;
		}
		return flash.display.InteractiveObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__contains: function(child) {
		if(child == null) return false;
		if(this == child) return true;
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c == child || c.__contains(child)) return true;
		}
		return false;
	}
	,__broadcast: function(event) {
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__broadcast(event);
		}
		this.dispatchEvent(event);
	}
	,__addToStage: function(newParent,beforeSibling) {
		flash.display.InteractiveObject.prototype.__addToStage.call(this,newParent,beforeSibling);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__getGraphics() == null || !child.__isOnStage()) child.__addToStage(this);
		}
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.InteractiveObject.prototype.validateBounds.call(this);
			var _g = 0, _g1 = this.__children;
			while(_g < _g1.length) {
				var obj = _g1[_g];
				++_g;
				if(obj.get_visible()) {
					var r = obj.getBounds(this);
					if(r.width != 0 || r.height != 0) {
						if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
					}
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,toString: function() {
		return "[DisplayObjectContainer name=" + this.name + " id=" + this.___id + "]";
	}
	,swapChildrenAt: function(child1,child2) {
		var swap = this.__children[child1];
		this.__children[child1] = this.__children[child2];
		this.__children[child2] = swap;
		swap = null;
	}
	,swapChildren: function(child1,child2) {
		var c1 = -1;
		var c2 = -1;
		var swap;
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == child1) c1 = i; else if(this.__children[i] == child2) c2 = i;
		}
		if(c1 != -1 && c2 != -1) {
			swap = this.__children[c1];
			this.__children[c1] = this.__children[c2];
			this.__children[c2] = swap;
			swap = null;
			this.__swapSurface(c1,c2);
			child1.__unifyChildrenWithDOM();
			child2.__unifyChildrenWithDOM();
		}
	}
	,setChildIndex: function(child,index) {
		if(index > this.__children.length) throw "Invalid index position " + index;
		var oldIndex = this.getChildIndex(child);
		if(oldIndex < 0) {
			var msg = "setChildIndex : object " + child.name + " not found.";
			if(child.parent == this) {
				var realindex = -1;
				var _g1 = 0, _g = this.__children.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(this.__children[i] == child) {
						realindex = i;
						break;
					}
				}
				if(realindex != -1) msg += "Internal error: Real child index was " + Std.string(realindex); else msg += "Internal error: Child was not in __children array!";
			}
			throw msg;
		}
		if(index < oldIndex) {
			var i = oldIndex;
			while(i > index) {
				this.swapChildren(this.__children[i],this.__children[i - 1]);
				i--;
			}
		} else if(oldIndex < index) {
			var i = oldIndex;
			while(i < index) {
				this.swapChildren(this.__children[i],this.__children[i + 1]);
				i++;
			}
		}
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__removeChild(this.__children[index]);
		throw "removeChildAt(" + index + ") : none found?";
	}
	,removeChild: function(inChild) {
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child == inChild) return (function($this) {
				var $r;
				HxOverrides.remove($this.__children,child);
				child.__removeFromStage();
				child.set_parent(null);
				$r = child;
				return $r;
			}(this));
		}
		throw "removeChild : none found?";
	}
	,getObjectsUnderPoint: function(point) {
		var result = new Array();
		this.__getObjectsUnderPoint(point,result);
		return result;
	}
	,getChildIndex: function(inChild) {
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == inChild) return i;
		}
		return -1;
	}
	,getChildByName: function(inName) {
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.name == inName) return child;
		}
		return null;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__children[index];
		throw "getChildAt : index out of bounds " + index + "/" + this.__children.length;
		return null;
	}
	,contains: function(child) {
		return this.__contains(child);
	}
	,addChildAt: function(object,index) {
		if(index > this.__children.length || index < 0) throw "Invalid index position " + index;
		this.__addedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,index);
			return object;
		}
		if(index == this.__children.length) return this.addChild(object); else {
			if(this.__isOnStage()) object.__addToStage(this,this.__children[index]);
			this.__children.splice(index,0,object);
			object.set_parent(this);
		}
		return object;
	}
	,addChild: function(object) {
		if(object == null) throw "DisplayObjectContainer asked to add null child object";
		if(object == this) throw "Adding to self";
		this.__addedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,this.__children.length - 1);
			return object;
		}
		object.set_parent(this);
		if(this.__isOnStage()) object.__addToStage(this);
		if(this.__children == null) this.__children = new Array();
		this.__children.push(object);
		return object;
	}
	,__class__: flash.display.DisplayObjectContainer
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
flash.display.Sprite = function() {
	flash.display.DisplayObjectContainer.call(this);
	this.__graphics = new flash.display.Graphics();
	this.buttonMode = false;
};
$hxClasses["flash.display.Sprite"] = flash.display.Sprite;
flash.display.Sprite.__name__ = ["flash","display","Sprite"];
flash.display.Sprite.__super__ = flash.display.DisplayObjectContainer;
flash.display.Sprite.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	set_useHandCursor: function(cursor) {
		if(cursor == this.useHandCursor) return cursor;
		if(this.__cursorCallbackOver != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OVER,this.__cursorCallbackOver);
		if(this.__cursorCallbackOut != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OUT,this.__cursorCallbackOut);
		if(!cursor) flash.Lib.__setCursor(flash._Lib.CursorType.Default); else {
			this.__cursorCallbackOver = function(_) {
				flash.Lib.__setCursor(flash._Lib.CursorType.Pointer);
			};
			this.__cursorCallbackOut = function(_) {
				flash.Lib.__setCursor(flash._Lib.CursorType.Default);
			};
			this.addEventListener(flash.events.MouseEvent.ROLL_OVER,this.__cursorCallbackOver);
			this.addEventListener(flash.events.MouseEvent.ROLL_OUT,this.__cursorCallbackOut);
		}
		this.useHandCursor = cursor;
		return cursor;
	}
	,get_graphics: function() {
		return this.__graphics;
	}
	,get_dropTarget: function() {
		return this.__dropTarget;
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,toString: function() {
		return "[Sprite name=" + this.name + " id=" + this.___id + "]";
	}
	,stopDrag: function() {
		if(this.__isOnStage()) {
			this.get_stage().__stopDrag(this);
			var l = this.parent.__children.length - 1;
			var obj = this.get_stage();
			var _g1 = 0, _g = this.parent.__children.length;
			while(_g1 < _g) {
				var i = _g1++;
				var result = this.parent.__children[l - i].__getObjectUnderPoint(new flash.geom.Point(this.get_stage().get_mouseX(),this.get_stage().get_mouseY()));
				if(result != null) obj = result;
			}
			if(obj != this) this.__dropTarget = obj; else this.__dropTarget = this.get_stage();
		}
	}
	,startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		if(this.__isOnStage()) this.get_stage().__startDrag(this,lockCenter,bounds);
	}
	,__class__: flash.display.Sprite
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{get_dropTarget:"get_dropTarget",get_graphics:"get_graphics",set_useHandCursor:"set_useHandCursor"})
});
var com = {}
com.saumya = {}
com.saumya.core = {}
com.saumya.core.ui = {}
com.saumya.core.ui.Main = function() {
	flash.display.Sprite.call(this);
	this.initialize();
};
$hxClasses["com.saumya.core.ui.Main"] = com.saumya.core.ui.Main;
com.saumya.core.ui.Main.__name__ = ["com","saumya","core","ui","Main"];
com.saumya.core.ui.Main.__super__ = flash.display.Sprite;
com.saumya.core.ui.Main.prototype = $extend(flash.display.Sprite.prototype,{
	resize: function(stageWidth,stageHeight) {
		this.application.resize(stageWidth,stageHeight);
	}
	,stage_onResize: function(e) {
		this.resize(this.get_stage().get_stageWidth(),this.get_stage().get_stageHeight());
	}
	,construct: function() {
		this.addChild(this.application);
		this.application.setStageSize(this.get_stage().get_stageWidth(),this.get_stage().get_stageHeight());
		this.get_stage().addEventListener(flash.events.Event.RESIZE,$bind(this,this.stage_onResize));
	}
	,onAddedToStage: function(e) {
		this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.onAddedToStage));
		this.application = new com.saumya.catchThemAll.ApplicationView(this.get_stage().get_stageWidth(),this.get_stage().get_stageHeight());
		this.construct();
	}
	,initialize: function() {
		this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.onAddedToStage));
	}
	,__class__: com.saumya.core.ui.Main
});
var DocumentClass = function() {
	com.saumya.core.ui.Main.call(this);
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = com.saumya.core.ui.Main;
DocumentClass.prototype = $extend(com.saumya.core.ui.Main.prototype,{
	get_stage: function() {
		return flash.Lib.get_current().get_stage();
	}
	,__class__: DocumentClass
});
var openfl = {}
openfl.AssetLibrary = function() {
};
$hxClasses["openfl.AssetLibrary"] = openfl.AssetLibrary;
openfl.AssetLibrary.__name__ = ["openfl","AssetLibrary"];
openfl.AssetLibrary.prototype = {
	loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadMovieClip: function(id,handler) {
		handler(this.getMovieClip(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadBytes: function(id,handler) {
		handler(this.getBytes(id));
	}
	,loadBitmapData: function(id,handler) {
		handler(this.getBitmapData(id));
	}
	,load: function(handler) {
		handler(this);
	}
	,isLocal: function(id,type) {
		return true;
	}
	,getSound: function(id) {
		return null;
	}
	,getPath: function(id) {
		return null;
	}
	,getMusic: function(id) {
		return this.getSound(id);
	}
	,getMovieClip: function(id) {
		return null;
	}
	,getFont: function(id) {
		return null;
	}
	,getBytes: function(id) {
		return null;
	}
	,getBitmapData: function(id) {
		return null;
	}
	,exists: function(id,type) {
		return false;
	}
	,__class__: openfl.AssetLibrary
}
var DefaultAssetLibrary = function() {
	openfl.AssetLibrary.call(this);
	DefaultAssetLibrary.className.set("fonts/ArchitectsDaughter.ttf",__ASSET__fonts_architectsdaughter_ttf);
	var value = Reflect.field(openfl.AssetType,"font".toUpperCase());
	DefaultAssetLibrary.type.set("fonts/ArchitectsDaughter.ttf",value);
	DefaultAssetLibrary.path.set("images/1_red.png","images/1_red.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/1_red.png",value);
	DefaultAssetLibrary.path.set("images/1_red@2x.png","images/1_red@2x.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/1_red@2x.png",value);
	DefaultAssetLibrary.path.set("images/2_green.png","images/2_green.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/2_green.png",value);
	DefaultAssetLibrary.path.set("images/2_green@2x.png","images/2_green@2x.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/2_green@2x.png",value);
	DefaultAssetLibrary.path.set("images/3_blue.png","images/3_blue.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/3_blue.png",value);
	DefaultAssetLibrary.path.set("images/3_blue@2x.png","images/3_blue@2x.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/3_blue@2x.png",value);
	DefaultAssetLibrary.path.set("images/4_yellow.png","images/4_yellow.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/4_yellow.png",value);
	DefaultAssetLibrary.path.set("images/4_yellow@2x.png","images/4_yellow@2x.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/4_yellow@2x.png",value);
	DefaultAssetLibrary.path.set("images/5_pink.png","images/5_pink.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/5_pink.png",value);
	DefaultAssetLibrary.path.set("images/5_pink@2x.png","images/5_pink@2x.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/5_pink@2x.png",value);
	DefaultAssetLibrary.path.set("images/btn_ok.png","images/btn_ok.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/btn_ok.png",value);
	DefaultAssetLibrary.path.set("images/circle_1.png","images/circle_1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/circle_1.png",value);
	DefaultAssetLibrary.path.set("images/correct.png","images/correct.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/correct.png",value);
	DefaultAssetLibrary.path.set("images/incorrect.png","images/incorrect.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/incorrect.png",value);
	DefaultAssetLibrary.path.set("images/instruction.png","images/instruction.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/instruction.png",value);
	DefaultAssetLibrary.path.set("images/instruction@2x.png","images/instruction@2x.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/instruction@2x.png",value);
	DefaultAssetLibrary.path.set("images/life_line_bg_gfx.png","images/life_line_bg_gfx.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/life_line_bg_gfx.png",value);
	DefaultAssetLibrary.path.set("images/life_line_gfx.png","images/life_line_gfx.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/life_line_gfx.png",value);
	DefaultAssetLibrary.path.set("images/logo.png","images/logo.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/logo.png",value);
	DefaultAssetLibrary.path.set("images/timeUp.png","images/timeUp.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("images/timeUp.png",value);
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"];
DefaultAssetLibrary.__super__ = openfl.AssetLibrary;
DefaultAssetLibrary.prototype = $extend(openfl.AssetLibrary.prototype,{
	loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadBytes: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.net.URLLoader();
			loader.addEventListener(flash.events.Event.COMPLETE,function(event) {
				var bytes = new flash.utils.ByteArray();
				bytes.writeUTFBytes(event.currentTarget.data);
				bytes.position = 0;
				handler(bytes);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getBytes(id));
	}
	,loadBitmapData: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.display.Loader();
			loader.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,function(event) {
				handler((js.Boot.__cast(event.currentTarget.content , flash.display.Bitmap)).bitmapData);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getBitmapData(id));
	}
	,isLocal: function(id,type) {
		return true;
	}
	,getSound: function(id) {
		return new flash.media.Sound(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
	}
	,getPath: function(id) {
		return DefaultAssetLibrary.path.get(id);
	}
	,getMusic: function(id) {
		return new flash.media.Sound(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
	}
	,getFont: function(id) {
		return js.Boot.__cast(Type.createInstance(DefaultAssetLibrary.className.get(id),[]) , flash.text.Font);
	}
	,getBytes: function(id) {
		var bytes = null;
		var data = ApplicationMain.urlLoaders.get(DefaultAssetLibrary.path.get(id)).data;
		if(js.Boot.__instanceof(data,String)) {
			bytes = new flash.utils.ByteArray();
			bytes.writeUTFBytes(data);
		} else if(js.Boot.__instanceof(data,flash.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	}
	,getBitmapData: function(id) {
		return (js.Boot.__cast(ApplicationMain.loaders.get(DefaultAssetLibrary.path.get(id)).contentLoaderInfo.content , flash.display.Bitmap)).bitmapData;
	}
	,exists: function(id,type) {
		var assetType = DefaultAssetLibrary.type.get(id);
		if(assetType != null) {
			if(assetType == type || (type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC) && (assetType == openfl.AssetType.MUSIC || assetType == openfl.AssetType.SOUND)) return true;
			if(type == openfl.AssetType.BINARY || type == null) return true;
		}
		return false;
	}
	,__class__: DefaultAssetLibrary
});
flash.text = {}
flash.text.Font = function() {
	this.__metrics = [];
	this.__fontScale = 9.0;
	var className = Type.getClassName(Type.getClass(this));
	if(flash.text.Font.__fontData == null) {
		flash.text.Font.__fontData = [];
		flash.text.Font.__fontData["Bitstream_Vera_Sans"] = haxe.Unserializer.run(flash.text.Font.DEFAULT_FONT_DATA);
	}
	if(className == "flash.text.Font") this.set_fontName("Bitstream_Vera_Sans"); else this.set_fontName(className.split(".").pop());
};
$hxClasses["flash.text.Font"] = flash.text.Font;
flash.text.Font.__name__ = ["flash","text","Font"];
flash.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	return flash.text.Font.__registeredFonts.slice();
}
flash.text.Font.__ofResource = function(resourceName,fontName) {
	if(fontName == null) fontName = "";
	var data = haxe.Unserializer.run(haxe.Resource.getString(resourceName));
	if(data == null) {
	} else {
		if(fontName == "") {
			flash.text.Font.__fontData[resourceName] = data.hash;
			fontName = data.fontName;
		}
		flash.text.Font.__fontData[data.fontName] = data.hash;
	}
	return fontName;
}
flash.text.Font.registerFont = function(font) {
	var instance = js.Boot.__cast(Type.createInstance(font,[]) , flash.text.Font);
	if(instance != null) {
		if(Reflect.hasField(font,"resourceName")) instance.set_fontName(flash.text.Font.__ofResource(Reflect.field(font,"resourceName")));
		flash.text.Font.__registeredFonts.push(instance);
	}
}
flash.text.Font.prototype = {
	set_fontName: function(name) {
		if(name == "_sans" || name == "_serif" || name == "_typewriter") name = "Bitstream_Vera_Sans";
		this.fontName = name;
		if(flash.text.Font.__fontData[this.fontName] == null) try {
			flash.text.Font.__ofResource(name);
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		if(flash.text.Font.__fontData[this.fontName] != null) try {
			this.__glyphData = flash.text.Font.__fontData[this.fontName];
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		return name;
	}
	,__setScale: function(scale) {
		this.__fontScale = scale / 1024;
	}
	,__render: function(graphics,inChar,inX,inY,inOutline) {
		var index = 0;
		var glyph = this.__glyphData.get(inChar);
		if(glyph == null) return;
		var commands = glyph.commands;
		var data = glyph.data;
		var _g = 0;
		while(_g < commands.length) {
			var c = commands[_g];
			++_g;
			switch(c) {
			case 1:
				graphics.moveTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			case 2:
				graphics.lineTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			case 3:
				graphics.curveTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale,inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			}
		}
	}
	,__getAdvance: function(inGlyph,height) {
		var m = this.__metrics[inGlyph];
		if(m == null) {
			var glyph = this.__glyphData.get(inGlyph);
			if(glyph == null) return 0;
			this.__metrics[inGlyph] = m = glyph._width * this.__fontScale | 0;
		}
		if(m == null) return 0;
		return m;
	}
	,hasGlyph: function(str) {
		return this.__glyphData.exists(HxOverrides.cca(str,0));
	}
	,__class__: flash.text.Font
	,__properties__: {set_fontName:"set_fontName"}
}
var __ASSET__fonts_architectsdaughter_ttf = function() {
	flash.text.Font.call(this);
};
$hxClasses["__ASSET__fonts_architectsdaughter_ttf"] = __ASSET__fonts_architectsdaughter_ttf;
__ASSET__fonts_architectsdaughter_ttf.__name__ = ["__ASSET__fonts_architectsdaughter_ttf"];
__ASSET__fonts_architectsdaughter_ttf.__super__ = flash.text.Font;
__ASSET__fonts_architectsdaughter_ttf.prototype = $extend(flash.text.Font.prototype,{
	__class__: __ASSET__fonts_architectsdaughter_ttf
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	,matched: function(n) {
		return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
	}
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,__class__: EReg
}
var HxOverrides = function() { }
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
}
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,first: function() {
		return this.h == null?null:this.h[0];
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,__class__: List
}
var IMap = function() { }
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
var NMEPreloader = function() {
	flash.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new flash.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new flash.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = flash.display.Sprite;
NMEPreloader.prototype = $extend(flash.display.Sprite.prototype,{
	onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,onLoaded: function() {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
	}
	,onInit: function() {
	}
	,getWidth: function() {
		var width = 0;
		if(width > 0) return width; else return flash.Lib.get_current().get_stage().get_stageWidth();
	}
	,getHeight: function() {
		var height = 0;
		if(height > 0) return height; else return flash.Lib.get_current().get_stage().get_stageHeight();
	}
	,getBackgroundColor: function() {
		return 16777215;
	}
	,__class__: NMEPreloader
});
var Reflect = function() { }
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.deleteField = function(o,field) {
	if(!Reflect.hasField(o,field)) return false;
	delete(o[field]);
	return true;
}
var Std = function() { }
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	__class__: StringBuf
}
var StringTools = function() { }
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
var Type = function() { }
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	return o.__class__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
}
com.saumya.catchThemAll = {}
com.saumya.catchThemAll.ApplicationView = function(stageWidth,stageHeight) {
	flash.display.Sprite.call(this);
	this.initialize(stageWidth,stageHeight);
};
$hxClasses["com.saumya.catchThemAll.ApplicationView"] = com.saumya.catchThemAll.ApplicationView;
com.saumya.catchThemAll.ApplicationView.__name__ = ["com","saumya","catchThemAll","ApplicationView"];
com.saumya.catchThemAll.ApplicationView.__super__ = flash.display.Sprite;
com.saumya.catchThemAll.ApplicationView.prototype = $extend(flash.display.Sprite.prototype,{
	scaleWithNewSize: function(newWidth,newHeight) {
		this.set_scaleX(newWidth / this.widthX);
		this.set_scaleY(newHeight / this.heightX);
	}
	,resize: function(newWidth,newHeight) {
		this.widthX = newWidth;
		this.heightX = newHeight;
		this.bg.setSize(newWidth,newHeight);
		var xpos = newWidth / 2;
		var ypos = newHeight / 2;
		var p = (newWidth - this.rowHolder.get_width()) / 2;
		this.rowHolder.set_x(p);
		this.cRowResponder.set_x(p);
		this.cRowResponder.set_y(newHeight - 70);
		this.userResponseDisplay.move(xpos,ypos);
		this.scoreView.showBackground(this.widthX,50);
	}
	,setStageSize: function(newWidth,newHeight) {
		this.widthX = newWidth;
		this.heightX = newHeight;
		var xpos = newWidth / 2;
		var ypos = newHeight / 2;
		this.userResponseDisplay.move(xpos,ypos);
		this.scoreView.showBackground(this.widthX,50);
	}
	,checkAttempts: function() {
		if(this.scoreModel.getTotalCount() % 10 == 0) {
			this.homeScreen.set_visible(true);
			this.scoreView.set_visible(false);
		} else this.render();
	}
	,animOutComplete: function(cRow) {
		this.animateOutCount++;
		if(this.animateOutCount >= this.numRows) {
			this.ccModel = new com.saumya.catchThemAll.model.ColorCountModel();
			this.animateOutCount = 0;
			this.checkAttempts();
		}
	}
	,animInComplete: function(cRow) {
		this.animateInCount++;
		if(this.animateInCount >= this.numRows) {
			this.animateInCount = 0;
			this.cRowResponder.set_visible(true);
			this.scoreView.startLife();
		}
	}
	,animateOut: function(cRow) {
		motion.Actuate.tween(cRow,0.8 * (2 * Math.random()),{ x : -2000}).ease(motion.easing.Quad.get_easeIn()).onComplete($bind(this,this.animOutComplete),[cRow]);
	}
	,animateIn: function(cRow) {
		var xVal = 0;
		motion.Actuate.tween(cRow,0.8 * (1 + Math.random()),{ x : xVal}).ease(motion.easing.Quad.get_easeOut()).onComplete($bind(this,this.animInComplete),[cRow]);
	}
	,hideModalResponse: function() {
		motion.Actuate.tween(this.userResponseDisplay,0.2,{ scaleX : 0.01, scaleY : 0.01, alpha : 0}).ease(motion.easing.Quad.get_easeOut());
	}
	,animteToRightSize: function() {
		motion.Actuate.tween(this.userResponseDisplay,0.2,{ scaleX : 1, scaleY : 1}).ease(motion.easing.Quad.get_easeOut());
	}
	,displayModalResponse: function(isCorrect,isTimeUp) {
		if(isTimeUp == null) isTimeUp = false;
		if(isTimeUp == true) this.userResponseDisplay.showTimeUp(); else this.userResponseDisplay.showResponse(isCorrect);
		motion.Actuate.tween(this.userResponseDisplay,0.2,{ scaleX : 1.5, scaleY : 1.5, alpha : 1}).ease(motion.easing.Quad.get_easeIn()).onComplete($bind(this,this.animteToRightSize));
	}
	,onLifeEnd: function(e) {
		this.scoreModel.incrementInCorrectCount();
		this.displayModalResponse(false,true);
		this.scoreView.setScore(this.scoreModel.getTotalCount(),this.scoreModel.getCorrectCount());
		this.cRowResponder.set_visible(false);
	}
	,onUserClickModalLayer: function(e) {
		this.hideModalResponse();
		var _g1 = 0, _g = this.numRows;
		while(_g1 < _g) {
			var i = _g1++;
			var cRow = this.allRows[i];
			this.animateOut(cRow);
		}
	}
	,onUserPicked: function(e) {
		this.scoreView.stopLife();
		var mc = this.ccModel.getMaxCountColor();
		if(e.colorValue == mc.getColor()) {
			this.scoreModel.incrementCorrectCount();
			this.displayModalResponse(true);
		} else {
			this.scoreModel.incrementInCorrectCount();
			this.displayModalResponse(false);
		}
		this.scoreView.setScore(this.scoreModel.getTotalCount(),this.scoreModel.getCorrectCount());
		this.cRowResponder.set_visible(false);
	}
	,render: function() {
		this.addChild(this.rowHolder);
		if(this.scoreModel.getTotalCount() <= 0) {
			var _g1 = 0, _g = this.numRows;
			while(_g1 < _g) {
				var i = _g1++;
				var cRow = new com.saumya.catchThemAll.ui.ColorRow();
				this.scaleFactor = this.widthX / cRow.get_width();
				cRow.set_y(i * 65);
				this.rowHolder.addChild(cRow);
				this.allRows.push(cRow);
				this.animateIn(cRow);
			}
			this.rowHolder.set_x((this.get_stage().get_stageWidth() - this.rowHolder.get_width()) / 2);
			this.cRowResponder = new com.saumya.catchThemAll.ui.ColorRowResponder();
			this.cRowResponder.set_x(this.rowHolder.get_x());
			this.cRowResponder.set_y(this.get_height() - 65);
			this.addChild(this.cRowResponder);
		} else {
			var _g1 = 0, _g = this.numRows;
			while(_g1 < _g) {
				var i = _g1++;
				var cRow = this.allRows[i];
				cRow.set_x(2000);
				cRow.shuffleColors();
				this.animateIn(cRow);
			}
		}
		var red = 0;
		var green = 0;
		var blue = 0;
		var yellow = 0;
		var pink = 0;
		var _g1 = 0, _g = this.numRows;
		while(_g1 < _g) {
			var i = _g1++;
			var cRow = this.allRows[i];
			red += cRow.getCount(com.saumya.core.FiveBasicColor.RED);
			green += cRow.getCount(com.saumya.core.FiveBasicColor.GREEN);
			blue += cRow.getCount(com.saumya.core.FiveBasicColor.BLUE);
			yellow += cRow.getCount(com.saumya.core.FiveBasicColor.YELLOW);
			pink += cRow.getCount(com.saumya.core.FiveBasicColor.PINK);
		}
		var _g = 1;
		while(_g < 6) {
			var j = _g++;
			var c = new com.saumya.catchThemAll.model.vo.ColorCountVO();
			switch(j) {
			case 1:
				c.setColorCount(com.saumya.core.FiveBasicColor.RED,red);
				break;
			case 2:
				c.setColorCount(com.saumya.core.FiveBasicColor.GREEN,green);
				break;
			case 3:
				c.setColorCount(com.saumya.core.FiveBasicColor.BLUE,blue);
				break;
			case 4:
				c.setColorCount(com.saumya.core.FiveBasicColor.YELLOW,yellow);
				break;
			case 5:
				c.setColorCount(com.saumya.core.FiveBasicColor.PINK,pink);
				break;
			}
			this.ccModel.add(c);
		}
		this.ccModel.sortMax();
		this.addChild(this.userResponseDisplay);
		this.addChild(this.scoreView);
		this.scoreView.set_visible(true);
		var mc = this.ccModel.getMaxCountColor();
		this.userResponseDisplay.renderCorrectColor(mc.getColor());
	}
	,construct: function() {
		this.addChild(this.bg);
		this.addChild(this.homeScreen);
	}
	,onAddedToStage: function(e) {
		this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.onAddedToStage));
		this.construct();
	}
	,onOkEventOnHome: function(e) {
		this.homeScreen.set_visible(false);
		this.render();
	}
	,initialize: function(stageWidth,stageHeight) {
		this.widthX = stageWidth;
		this.heightX = stageHeight;
		this.bg = new com.saumya.core.ui.BackgroundView();
		this.bg.setSize(this.widthX,this.heightX);
		this.homeScreen = new com.saumya.catchThemAll.ui.HomeView();
		this.homeScreen.move((stageWidth - this.homeScreen.get_width()) / 2,(stageHeight - this.homeScreen.get_height()) / 2);
		var numR = Math.floor(stageHeight / 80);
		this.numRows = numR;
		this.allRows = new Array();
		this.rowHolder = new flash.display.Sprite();
		this.addChild(this.rowHolder);
		this.ccModel = new com.saumya.catchThemAll.model.ColorCountModel();
		this.scoreModel = new com.saumya.catchThemAll.model.ScoreModel();
		this.userResponseDisplay = new com.saumya.catchThemAll.ui.ResponseDisplay();
		this.scoreView = new com.saumya.catchThemAll.ui.ScoreCardView();
		this.animateInCount = 0;
		this.animateOutCount = 0;
		this.homeScreen.addEventListener(com.saumya.catchThemAll.ui.HomeView.OK_EVENT,$bind(this,this.onOkEventOnHome));
		this.addEventListener(com.saumya.catchThemAll.events.UserSelectionEvent.SELECTED,$bind(this,this.onUserPicked));
		this.addEventListener(com.saumya.core.events.UserEvent.MODAL_LAYER_CLICK,$bind(this,this.onUserClickModalLayer));
		this.addEventListener(com.saumya.catchThemAll.events.LifeEvent.END,$bind(this,this.onLifeEnd));
		this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.onAddedToStage));
	}
	,__class__: com.saumya.catchThemAll.ApplicationView
});
flash.events.Event = function(inType,inBubbles,inCancelable) {
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.__isCancelled = false;
	this.__isCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = flash.events.EventPhase.AT_TARGET;
};
$hxClasses["flash.events.Event"] = flash.events.Event;
flash.events.Event.__name__ = ["flash","events","Event"];
flash.events.Event.prototype = {
	__setPhase: function(phase) {
		this.eventPhase = phase;
	}
	,__getIsCancelledNow: function() {
		return this.__isCancelledNow;
	}
	,__getIsCancelled: function() {
		return this.__isCancelled;
	}
	,__createSimilar: function(type,related,targ) {
		var result = new flash.events.Event(type,this.bubbles,this.cancelable);
		if(targ != null) result.target = targ;
		return result;
	}
	,toString: function() {
		return "[Event type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + "]";
	}
	,stopPropagation: function() {
		this.__isCancelled = true;
	}
	,stopImmediatePropagation: function() {
		this.__isCancelled = true;
		this.__isCancelledNow = true;
	}
	,clone: function() {
		return new flash.events.Event(this.type,this.bubbles,this.cancelable);
	}
	,__class__: flash.events.Event
}
com.saumya.catchThemAll.events = {}
com.saumya.catchThemAll.events.LifeEvent = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = true;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["com.saumya.catchThemAll.events.LifeEvent"] = com.saumya.catchThemAll.events.LifeEvent;
com.saumya.catchThemAll.events.LifeEvent.__name__ = ["com","saumya","catchThemAll","events","LifeEvent"];
com.saumya.catchThemAll.events.LifeEvent.__super__ = flash.events.Event;
com.saumya.catchThemAll.events.LifeEvent.prototype = $extend(flash.events.Event.prototype,{
	clone: function() {
		var e = new com.saumya.catchThemAll.events.UserSelectionEvent(this.type,this.bubbles,this.cancelable);
		return e;
	}
	,__class__: com.saumya.catchThemAll.events.LifeEvent
});
com.saumya.catchThemAll.events.UserSelectionEvent = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = true;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["com.saumya.catchThemAll.events.UserSelectionEvent"] = com.saumya.catchThemAll.events.UserSelectionEvent;
com.saumya.catchThemAll.events.UserSelectionEvent.__name__ = ["com","saumya","catchThemAll","events","UserSelectionEvent"];
com.saumya.catchThemAll.events.UserSelectionEvent.__super__ = flash.events.Event;
com.saumya.catchThemAll.events.UserSelectionEvent.prototype = $extend(flash.events.Event.prototype,{
	clone: function() {
		var e = new com.saumya.catchThemAll.events.UserSelectionEvent(this.type,this.bubbles,this.cancelable);
		e.colorNum = this.colorNum;
		e.colorValue = this.colorValue;
		return e;
	}
	,__class__: com.saumya.catchThemAll.events.UserSelectionEvent
});
com.saumya.catchThemAll.model = {}
com.saumya.catchThemAll.model.ColorCountModel = function() {
	this.initialize();
};
$hxClasses["com.saumya.catchThemAll.model.ColorCountModel"] = com.saumya.catchThemAll.model.ColorCountModel;
com.saumya.catchThemAll.model.ColorCountModel.__name__ = ["com","saumya","catchThemAll","model","ColorCountModel"];
com.saumya.catchThemAll.model.ColorCountModel.prototype = {
	getMax: function(a,b) {
		var ai = a.getCount();
		var bi = b.getCount();
		var result = new com.saumya.catchThemAll.model.vo.ColorCountVO();
		if(ai > bi) result = a; else if(bi > ai) result = b; else result = a;
		return result;
	}
	,findMax: function() {
		if(this.countPoint < this.count.length) {
			var a = this.count[this.countPoint];
			this.maxColorCount = this.getMax(this.maxColorCount,a);
			this.countPoint += 1;
			this.findMax();
		} else {
		}
	}
	,getMaxCountColor: function() {
		return this.maxColorCount;
	}
	,testCall: function() {
		console.log("testCall : TODO : all the sorting implementations");
	}
	,sortMax: function() {
		this.countPoint = 0;
		this.findMax();
	}
	,getAll: function() {
		return this.count;
	}
	,add: function(newColor) {
		this.count.push(newColor);
	}
	,initialize: function() {
		this.count = new Array();
		this.countPoint = 0;
		this.maxColorCount = new com.saumya.catchThemAll.model.vo.ColorCountVO();
	}
	,__class__: com.saumya.catchThemAll.model.ColorCountModel
}
com.saumya.catchThemAll.model.ScoreModel = function() {
	this.initialize();
};
$hxClasses["com.saumya.catchThemAll.model.ScoreModel"] = com.saumya.catchThemAll.model.ScoreModel;
com.saumya.catchThemAll.model.ScoreModel.__name__ = ["com","saumya","catchThemAll","model","ScoreModel"];
com.saumya.catchThemAll.model.ScoreModel.prototype = {
	getWrongCount: function() {
		return this.wrong;
	}
	,getCorrectCount: function() {
		return this.right;
	}
	,getTotalCount: function() {
		return this.total;
	}
	,incrementInCorrectCount: function() {
		this.wrong++;
		this.total++;
	}
	,incrementCorrectCount: function() {
		this.right++;
		this.total++;
	}
	,initialize: function() {
		this.right = 0;
		this.wrong = 0;
		this.total = 0;
	}
	,__class__: com.saumya.catchThemAll.model.ScoreModel
}
com.saumya.catchThemAll.model.vo = {}
com.saumya.catchThemAll.model.vo.ColorCountVO = function() {
	this.initialize();
};
$hxClasses["com.saumya.catchThemAll.model.vo.ColorCountVO"] = com.saumya.catchThemAll.model.vo.ColorCountVO;
com.saumya.catchThemAll.model.vo.ColorCountVO.__name__ = ["com","saumya","catchThemAll","model","vo","ColorCountVO"];
com.saumya.catchThemAll.model.vo.ColorCountVO.prototype = {
	getCount: function() {
		return this.count;
	}
	,getColor: function() {
		return this.color;
	}
	,setColorCount: function(newColor,newCount) {
		this.color = newColor;
		this.count = newCount;
	}
	,initialize: function() {
		this.color = com.saumya.core.FiveBasicColor.RED;
		this.count = 0;
	}
	,__class__: com.saumya.catchThemAll.model.vo.ColorCountVO
}
com.saumya.catchThemAll.ui = {}
com.saumya.catchThemAll.ui.ColorRow = function() {
	flash.display.Sprite.call(this);
	this.initialize();
};
$hxClasses["com.saumya.catchThemAll.ui.ColorRow"] = com.saumya.catchThemAll.ui.ColorRow;
com.saumya.catchThemAll.ui.ColorRow.__name__ = ["com","saumya","catchThemAll","ui","ColorRow"];
com.saumya.catchThemAll.ui.ColorRow.__super__ = flash.display.Sprite;
com.saumya.catchThemAll.ui.ColorRow.prototype = $extend(flash.display.Sprite.prototype,{
	getCount: function(color) {
		var count = 0;
		switch( (color)[1] ) {
		case 0:
			count = this.countRed;
			break;
		case 1:
			count = this.countGreen;
			break;
		case 2:
			count = this.countBlue;
			break;
		case 3:
			count = this.countYellow;
			break;
		case 4:
			count = this.countPink;
			break;
		}
		return count;
	}
	,logCounts: function() {
		console.log("logCounts : red=" + this.countRed + ":green=" + this.countGreen + ":blue=" + this.countBlue + ":yellow=" + this.countYellow + ":pink=" + this.countPink);
	}
	,shuffleColors: function() {
		this.initializeColorCounts();
		var _g1 = 0, _g = this.numSquares;
		while(_g1 < _g) {
			var i = _g1++;
			var n = Math.ceil(this.numSquares * Math.random());
			var cs = this.squares[i];
			switch(n) {
			case 1:
				cs.changeColor(com.saumya.core.FiveBasicColor.RED);
				this.countRed++;
				break;
			case 2:
				cs.changeColor(com.saumya.core.FiveBasicColor.GREEN);
				this.countGreen++;
				break;
			case 3:
				cs.changeColor(com.saumya.core.FiveBasicColor.BLUE);
				this.countBlue++;
				break;
			case 4:
				cs.changeColor(com.saumya.core.FiveBasicColor.YELLOW);
				this.countYellow++;
				break;
			case 5:
				cs.changeColor(com.saumya.core.FiveBasicColor.PINK);
				this.countPink++;
				break;
			default:
			}
		}
	}
	,render: function() {
	}
	,construct: function() {
		var _g1 = 0, _g = this.numSquares;
		while(_g1 < _g) {
			var i = _g1++;
			var n = Math.ceil(this.numSquares * Math.random());
			var cs = new com.saumya.core.ui.shape.ColorSquare();
			switch(n) {
			case 1:
				cs.changeColor(com.saumya.core.FiveBasicColor.RED);
				this.countRed++;
				break;
			case 2:
				cs.changeColor(com.saumya.core.FiveBasicColor.GREEN);
				this.countGreen++;
				break;
			case 3:
				cs.changeColor(com.saumya.core.FiveBasicColor.BLUE);
				this.countBlue++;
				break;
			case 4:
				cs.changeColor(com.saumya.core.FiveBasicColor.YELLOW);
				this.countYellow++;
				break;
			case 5:
				cs.changeColor(com.saumya.core.FiveBasicColor.PINK);
				this.countPink++;
				break;
			default:
			}
			cs.set_x(30 + i * 65);
			cs.set_y(30);
			this.addChild(cs);
			this.squares.push(cs);
		}
		this.render();
	}
	,initializeColorCounts: function() {
		this.countRed = 0;
		this.countGreen = 0;
		this.countBlue = 0;
		this.countYellow = 0;
		this.countPink = 0;
	}
	,initialize: function() {
		this.squares = new Array();
		this.numSquares = 5;
		this.initializeColorCounts();
		this.construct();
	}
	,__class__: com.saumya.catchThemAll.ui.ColorRow
});
com.saumya.catchThemAll.ui.ColorRowInstruction = function() {
	flash.display.Sprite.call(this);
	this.initialize();
};
$hxClasses["com.saumya.catchThemAll.ui.ColorRowInstruction"] = com.saumya.catchThemAll.ui.ColorRowInstruction;
com.saumya.catchThemAll.ui.ColorRowInstruction.__name__ = ["com","saumya","catchThemAll","ui","ColorRowInstruction"];
com.saumya.catchThemAll.ui.ColorRowInstruction.__super__ = flash.display.Sprite;
com.saumya.catchThemAll.ui.ColorRowInstruction.prototype = $extend(flash.display.Sprite.prototype,{
	render: function() {
		console.log("render");
	}
	,construct: function() {
		var _g1 = 0, _g = this.numSquares;
		while(_g1 < _g) {
			var i = _g1++;
			var cs = new com.saumya.core.ui.shape.ColorSquare();
			var _g2 = i + 1;
			switch(_g2) {
			case 1:
				cs.changeColor(com.saumya.core.FiveBasicColor.RED);
				break;
			case 2:
				cs.changeColor(com.saumya.core.FiveBasicColor.GREEN);
				break;
			case 3:
				cs.changeColor(com.saumya.core.FiveBasicColor.BLUE);
				break;
			case 4:
				cs.changeColor(com.saumya.core.FiveBasicColor.YELLOW);
				break;
			case 5:
				cs.changeColor(com.saumya.core.FiveBasicColor.PINK);
				break;
			default:
				console.log("Not Handled YET ! condition=" + i);
			}
			cs.set_x(30 + i * 65);
			cs.set_y(30);
			cs.addTextNumber(i);
			this.addChild(cs);
		}
	}
	,initialize: function() {
		this.squares = new Array();
		this.numSquares = 5;
		this.construct();
	}
	,__class__: com.saumya.catchThemAll.ui.ColorRowInstruction
});
com.saumya.catchThemAll.ui.ColorRowResponder = function() {
	flash.display.Sprite.call(this);
	this.initialize();
};
$hxClasses["com.saumya.catchThemAll.ui.ColorRowResponder"] = com.saumya.catchThemAll.ui.ColorRowResponder;
com.saumya.catchThemAll.ui.ColorRowResponder.__name__ = ["com","saumya","catchThemAll","ui","ColorRowResponder"];
com.saumya.catchThemAll.ui.ColorRowResponder.__super__ = flash.display.Sprite;
com.saumya.catchThemAll.ui.ColorRowResponder.prototype = $extend(flash.display.Sprite.prototype,{
	onUserClick: function(e) {
		var cs = js.Boot.__cast(e.currentTarget , com.saumya.core.ui.shape.ColorSquare);
		var ev = new com.saumya.catchThemAll.events.UserSelectionEvent(com.saumya.catchThemAll.events.UserSelectionEvent.SELECTED);
		ev.colorNum = cs.getColorNum();
		ev.colorValue = cs.getColor();
		this.dispatchEvent(ev);
	}
	,render: function() {
	}
	,construct: function() {
		var _g1 = 0, _g = this.numSquares;
		while(_g1 < _g) {
			var i = _g1++;
			var cs = new com.saumya.core.ui.shape.ColorSquare();
			var _g2 = i + 1;
			switch(_g2) {
			case 1:
				cs.changeColor(com.saumya.core.FiveBasicColor.RED);
				break;
			case 2:
				cs.changeColor(com.saumya.core.FiveBasicColor.GREEN);
				break;
			case 3:
				cs.changeColor(com.saumya.core.FiveBasicColor.BLUE);
				break;
			case 4:
				cs.changeColor(com.saumya.core.FiveBasicColor.YELLOW);
				break;
			case 5:
				cs.changeColor(com.saumya.core.FiveBasicColor.PINK);
				break;
			default:
				console.log("Not Handled YET ! condition=" + i);
			}
			cs.set_x(30 + i * 65);
			cs.set_y(30);
			this.addChild(cs);
			cs.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.onUserClick));
		}
		this.render();
	}
	,initialize: function() {
		this.squares = new Array();
		this.numSquares = 5;
		this.construct();
	}
	,__class__: com.saumya.catchThemAll.ui.ColorRowResponder
});
com.saumya.catchThemAll.ui.HomeView = function() {
	flash.display.Sprite.call(this);
	this.initialize();
};
$hxClasses["com.saumya.catchThemAll.ui.HomeView"] = com.saumya.catchThemAll.ui.HomeView;
com.saumya.catchThemAll.ui.HomeView.__name__ = ["com","saumya","catchThemAll","ui","HomeView"];
com.saumya.catchThemAll.ui.HomeView.__super__ = flash.display.Sprite;
com.saumya.catchThemAll.ui.HomeView.prototype = $extend(flash.display.Sprite.prototype,{
	move: function(xPos,yPos) {
		this.set_x(xPos);
		this.set_y(yPos);
	}
	,render: function() {
		this.addChild(this.logo);
		this.addChild(this.colorRow);
		this.addChild(this.instruction);
		this.addChild(this.btnOK);
	}
	,construct: function() {
		this.render();
	}
	,onUserClick: function(e) {
		var ev = new flash.events.Event(com.saumya.catchThemAll.ui.HomeView.OK_EVENT);
		this.dispatchEvent(ev);
	}
	,initialize: function() {
		this.logo = new com.saumya.core.ui.shape.Logo();
		this.colorRow = new com.saumya.catchThemAll.ui.ColorRowInstruction();
		this.btnOK = new flash.display.Sprite();
		this.btnOK.addChild(new flash.display.Bitmap(openfl.Assets.getBitmapData("images/btn_ok.png")));
		this.btnOK.set_width(80);
		this.btnOK.set_height(44);
		this.colorRow.set_x(15);
		this.colorRow.set_y(110);
		this.instruction = new flash.display.Bitmap(openfl.Assets.getBitmapData("images/instruction.png"));
		this.instruction.set_y(180);
		this.btnOK.set_x(135);
		this.btnOK.set_y(400);
		this.btnOK.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.onUserClick));
		this.construct();
	}
	,__class__: com.saumya.catchThemAll.ui.HomeView
});
com.saumya.catchThemAll.ui.LifeView = function() {
	flash.display.Sprite.call(this);
	this.initialize();
};
$hxClasses["com.saumya.catchThemAll.ui.LifeView"] = com.saumya.catchThemAll.ui.LifeView;
com.saumya.catchThemAll.ui.LifeView.__name__ = ["com","saumya","catchThemAll","ui","LifeView"];
com.saumya.catchThemAll.ui.LifeView.__super__ = flash.display.Sprite;
com.saumya.catchThemAll.ui.LifeView.prototype = $extend(flash.display.Sprite.prototype,{
	updateLife: function(value,remaining) {
		this.life.set_scaleX(value);
		this.lifeCounter.set_text("" + remaining);
	}
	,render: function() {
	}
	,onUserClick: function(e) {
		this.lifeCounter.set_visible(!this.lifeCounter.get_visible());
		this.lifeText.set_visible(!this.lifeText.get_visible());
	}
	,construct: function() {
		this.lifeCounter.set_visible(this.lifeText.set_visible(false));
		this.addChild(this.bg);
		this.addChild(this.life);
		this.addChild(this.lifeText);
		this.addChild(this.lifeCounter);
	}
	,initialize: function() {
		this.bg = new flash.display.Bitmap(openfl.Assets.getBitmapData("images/life_line_bg_gfx.png"));
		this.life = new flash.display.Bitmap(openfl.Assets.getBitmapData("images/life_line_gfx.png"));
		this.bg.set_x(0);
		this.bg.set_y(10);
		this.life.set_x(this.bg.get_x() + 5);
		this.life.set_y(this.bg.get_y() + 5);
		this.lifeText = new flash.text.TextField();
		this.lifeText.selectable = false;
		this.lifeText.set_autoSize("CENTER");
		this.lifeText.embedFonts = true;
		this.lifeCounter = new flash.text.TextField();
		this.lifeCounter.selectable = false;
		this.lifeCounter.set_autoSize("CENTER");
		this.lifeCounter.embedFonts = true;
		var font = openfl.Assets.getFont("fonts/ArchitectsDaughter.ttf");
		var formatGeneral = new flash.text.TextFormat();
		formatGeneral.font = font.fontName;
		formatGeneral.align = flash.text.TextFormatAlign.LEFT;
		formatGeneral.size = 40;
		formatGeneral.color = 16777215;
		this.lifeText.set_defaultTextFormat(formatGeneral);
		this.lifeText.set_x(0);
		this.lifeText.set_y(30);
		this.lifeText.set_text("LIFE");
		this.lifeCounter.set_defaultTextFormat(formatGeneral);
		this.lifeCounter.set_x(0);
		this.lifeCounter.set_y(70);
		this.lifeCounter.set_text("" + 0);
		this.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.onUserClick));
		this.construct();
	}
	,__class__: com.saumya.catchThemAll.ui.LifeView
});
com.saumya.catchThemAll.ui.ResponseDisplay = function() {
	flash.display.Sprite.call(this);
	this.initialize();
};
$hxClasses["com.saumya.catchThemAll.ui.ResponseDisplay"] = com.saumya.catchThemAll.ui.ResponseDisplay;
com.saumya.catchThemAll.ui.ResponseDisplay.__name__ = ["com","saumya","catchThemAll","ui","ResponseDisplay"];
com.saumya.catchThemAll.ui.ResponseDisplay.__super__ = flash.display.Sprite;
com.saumya.catchThemAll.ui.ResponseDisplay.prototype = $extend(flash.display.Sprite.prototype,{
	move: function(xPos,yPos) {
		this.set_x(xPos);
		this.set_y(yPos);
	}
	,hideResponse: function() {
		this.render();
	}
	,showTimeUp: function() {
		this.timeUp.set_visible(true);
		this.correct.set_visible(false);
		this.inCorrect.set_visible(false);
		this.correctColorView.set_visible(true);
	}
	,showResponse: function(isCorrect) {
		if(isCorrect) {
			this.correct.set_visible(true);
			this.inCorrect.set_visible(false);
			this.timeUp.set_visible(false);
			this.correctColorView.set_visible(false);
		} else {
			this.correct.set_visible(false);
			this.inCorrect.set_visible(true);
			this.timeUp.set_visible(false);
			this.correctColorView.set_visible(true);
		}
	}
	,renderCorrectColor: function(color) {
		this.correctColorView.setColor(color);
	}
	,notify: function() {
		var ev = new com.saumya.core.events.UserEvent(com.saumya.core.events.UserEvent.MODAL_LAYER_CLICK);
		this.dispatchEvent(ev);
	}
	,onUserClick: function(e) {
		this.notify();
	}
	,render: function() {
		this.correct.set_visible(false);
		this.inCorrect.set_visible(false);
		this.timeUp.set_visible(false);
		this.correctColorView.set_visible(false);
	}
	,construct: function() {
		this.addChild(this.correct);
		this.addChild(this.inCorrect);
		this.addChild(this.timeUp);
		this.correct.set_x(this.correct.set_y(-(this.correct.get_width() / 2)));
		this.inCorrect.set_x(this.inCorrect.set_y(-(this.inCorrect.get_width() / 2)));
		this.timeUp.set_x(this.timeUp.set_y(-(this.timeUp.get_width() / 2)));
		this.correctColorView.set_scaleX(this.correctColorView.set_scaleY(0.75));
		this.correctColorView.set_y(2 * this.correctColorView.get_height());
		this.addChild(this.correctColorView);
		this.render();
	}
	,initialize: function() {
		this.correct = new flash.display.Bitmap(openfl.Assets.getBitmapData("images/correct.png"));
		this.correct.smoothing = true;
		this.inCorrect = new flash.display.Bitmap(openfl.Assets.getBitmapData("images/incorrect.png"));
		this.inCorrect.smoothing = true;
		this.timeUp = new flash.display.Bitmap(openfl.Assets.getBitmapData("images/timeUp.png"));
		this.timeUp.smoothing = true;
		this.correct.set_visible(false);
		this.inCorrect.set_visible(false);
		this.timeUp.set_visible(false);
		this.correctColorView = new com.saumya.core.ui.shape.ColorSquare();
		this.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.onUserClick));
		this.construct();
	}
	,__class__: com.saumya.catchThemAll.ui.ResponseDisplay
});
com.saumya.catchThemAll.ui.ScoreCardView = function() {
	flash.display.Sprite.call(this);
	this.initialize();
};
$hxClasses["com.saumya.catchThemAll.ui.ScoreCardView"] = com.saumya.catchThemAll.ui.ScoreCardView;
com.saumya.catchThemAll.ui.ScoreCardView.__name__ = ["com","saumya","catchThemAll","ui","ScoreCardView"];
com.saumya.catchThemAll.ui.ScoreCardView.__super__ = flash.display.Sprite;
com.saumya.catchThemAll.ui.ScoreCardView.prototype = $extend(flash.display.Sprite.prototype,{
	stopLife: function() {
		this.timerLife.reset();
		this.lifeRemaining = this.lifeMax;
	}
	,startLife: function() {
		this.timerLife.start();
	}
	,setScore: function(totalNum,correctNum) {
		this.total.set_text(correctNum + " / " + totalNum);
	}
	,showBackground: function(bgWidth,bgHeight) {
		this.lifeView.set_x(bgWidth - (this.lifeView.get_width() + 5));
		this.lifeView.set_y(10);
	}
	,construct: function() {
		this.addChild(this.total);
		this.addChild(this.lifeView);
	}
	,onTimer: function(e) {
		this.lifeRemaining--;
		this.lifeView.updateLife(this.lifeRemaining / this.lifeMax,this.lifeRemaining);
		if(this.lifeRemaining <= 0) {
			this.stopLife();
			var le = new com.saumya.catchThemAll.events.LifeEvent(com.saumya.catchThemAll.events.LifeEvent.END,true);
			this.dispatchEvent(le);
		}
	}
	,onTimerComplete: function(e) {
		console.log("timerComplete");
	}
	,onAddedToStage: function(e) {
		this.lifeMax = 100;
		this.lifeRemaining = this.lifeMax;
		this.timerLife = new flash.utils.Timer(this.lifeMax);
		this.lifeView.updateLife(this.lifeRemaining / this.lifeMax,this.lifeRemaining);
		this.timerLife.addEventListener("timer",$bind(this,this.onTimer));
		this.timerLife.addEventListener("timerComplete",$bind(this,this.onTimerComplete));
		this.construct();
	}
	,initialize: function() {
		this.total = new flash.text.TextField();
		this.correct = new flash.text.TextField();
		this.wrong = new flash.text.TextField();
		this.lifeView = new com.saumya.catchThemAll.ui.LifeView();
		var font = openfl.Assets.getFont("fonts/ArchitectsDaughter.ttf");
		this.formatGeneral = new flash.text.TextFormat();
		this.formatGeneral.font = font.fontName;
		this.formatGeneral.align = flash.text.TextFormatAlign.RIGHT;
		this.formatGeneral.size = 20;
		this.formatGeneral.color = 0;
		this.formatLeftAlign = new flash.text.TextFormat();
		this.formatLeftAlign.font = font.fontName;
		this.formatLeftAlign.align = flash.text.TextFormatAlign.LEFT;
		this.formatLeftAlign.size = 30;
		this.formatLeftAlign.color = 16777215;
		this.formatCenterAlign = new flash.text.TextFormat();
		this.formatCenterAlign.font = font.fontName;
		this.formatCenterAlign.align = flash.text.TextFormatAlign.CENTER;
		this.formatCenterAlign.size = 30;
		this.formatCenterAlign.color = 16777215;
		this.formatRightAlign = new flash.text.TextFormat();
		this.formatRightAlign.font = font.fontName;
		this.formatRightAlign.align = flash.text.TextFormatAlign.RIGHT;
		this.formatRightAlign.size = 16;
		this.formatRightAlign.color = 16777215;
		this.total.set_defaultTextFormat(this.correct.set_defaultTextFormat(this.wrong.set_defaultTextFormat(this.formatLeftAlign)));
		this.total.set_x(this.total.set_y(10));
		this.correct.set_y(30);
		this.wrong.set_y(50);
		this.total.set_width(this.correct.set_width(this.wrong.set_width(200)));
		this.total.set_height(this.correct.set_height(this.wrong.set_height(40)));
		this.total.set_text("TOTAL:0");
		this.correct.set_text("CORRECT:0");
		this.wrong.set_text("Wrong:0");
		this.total.selectable = this.correct.selectable = this.wrong.selectable = false;
		this.total.embedFonts = true;
		this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.onAddedToStage));
	}
	,__class__: com.saumya.catchThemAll.ui.ScoreCardView
});
com.saumya.core.FiveBasicColor = $hxClasses["com.saumya.core.FiveBasicColor"] = { __ename__ : true, __constructs__ : ["RED","GREEN","BLUE","YELLOW","PINK"] }
com.saumya.core.FiveBasicColor.RED = ["RED",0];
com.saumya.core.FiveBasicColor.RED.toString = $estr;
com.saumya.core.FiveBasicColor.RED.__enum__ = com.saumya.core.FiveBasicColor;
com.saumya.core.FiveBasicColor.GREEN = ["GREEN",1];
com.saumya.core.FiveBasicColor.GREEN.toString = $estr;
com.saumya.core.FiveBasicColor.GREEN.__enum__ = com.saumya.core.FiveBasicColor;
com.saumya.core.FiveBasicColor.BLUE = ["BLUE",2];
com.saumya.core.FiveBasicColor.BLUE.toString = $estr;
com.saumya.core.FiveBasicColor.BLUE.__enum__ = com.saumya.core.FiveBasicColor;
com.saumya.core.FiveBasicColor.YELLOW = ["YELLOW",3];
com.saumya.core.FiveBasicColor.YELLOW.toString = $estr;
com.saumya.core.FiveBasicColor.YELLOW.__enum__ = com.saumya.core.FiveBasicColor;
com.saumya.core.FiveBasicColor.PINK = ["PINK",4];
com.saumya.core.FiveBasicColor.PINK.toString = $estr;
com.saumya.core.FiveBasicColor.PINK.__enum__ = com.saumya.core.FiveBasicColor;
com.saumya.core.events = {}
com.saumya.core.events.UserEvent = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = true;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["com.saumya.core.events.UserEvent"] = com.saumya.core.events.UserEvent;
com.saumya.core.events.UserEvent.__name__ = ["com","saumya","core","events","UserEvent"];
com.saumya.core.events.UserEvent.__super__ = flash.events.Event;
com.saumya.core.events.UserEvent.prototype = $extend(flash.events.Event.prototype,{
	clone: function() {
		var e = new com.saumya.core.events.UserEvent(this.type,this.bubbles,this.cancelable);
		return e;
	}
	,__class__: com.saumya.core.events.UserEvent
});
com.saumya.core.ui.BackgroundView = function() {
	flash.display.Sprite.call(this);
	this.initialize();
};
$hxClasses["com.saumya.core.ui.BackgroundView"] = com.saumya.core.ui.BackgroundView;
com.saumya.core.ui.BackgroundView.__name__ = ["com","saumya","core","ui","BackgroundView"];
com.saumya.core.ui.BackgroundView.__super__ = flash.display.Sprite;
com.saumya.core.ui.BackgroundView.prototype = $extend(flash.display.Sprite.prototype,{
	setColor: function(newColor) {
		this.colorX = newColor;
		this.render();
	}
	,setSize: function(newWidth,newHeight) {
		this.widthX = newWidth;
		this.heightX = newHeight;
		this.render();
	}
	,render: function() {
		var g = this.get_graphics();
		g.clear();
		g.beginFill(this.colorX,1.0);
		g.drawRect(0,0,this.widthX,this.heightX);
		g.endFill();
	}
	,construct: function() {
		this.render();
	}
	,initialize: function() {
		this.widthX = 100;
		this.heightX = 100;
		this.colorX = 4473924;
		this.construct();
	}
	,__class__: com.saumya.core.ui.BackgroundView
});
com.saumya.core.ui.shape = {}
com.saumya.core.ui.shape.RectangleBase = function() {
	flash.display.Sprite.call(this);
	this.initialize();
};
$hxClasses["com.saumya.core.ui.shape.RectangleBase"] = com.saumya.core.ui.shape.RectangleBase;
com.saumya.core.ui.shape.RectangleBase.__name__ = ["com","saumya","core","ui","shape","RectangleBase"];
com.saumya.core.ui.shape.RectangleBase.__super__ = flash.display.Sprite;
com.saumya.core.ui.shape.RectangleBase.prototype = $extend(flash.display.Sprite.prototype,{
	setColor: function(newColor) {
		this.red.set_visible(this.green.set_visible(this.blue.set_visible(this.yellow.set_visible(this.pink.set_visible(false)))));
		switch( (newColor)[1] ) {
		case 0:
			this.red.set_visible(true);
			break;
		case 1:
			this.green.set_visible(true);
			break;
		case 2:
			this.blue.set_visible(true);
			break;
		case 3:
			this.yellow.set_visible(true);
			break;
		case 4:
			this.pink.set_visible(true);
			break;
		}
	}
	,setSize: function(newWidth,newHeight) {
		this.widthX = newWidth;
		this.heightX = newHeight;
		this.render();
	}
	,comeBackToNormal: function() {
		motion.Actuate.tween(this,0.2,{ scaleX : 1, scaleY : 1}).ease(motion.easing.Quad.get_easeOut());
	}
	,onUserRollOver: function(e) {
		motion.Actuate.tween(this,0.2,{ scaleX : 1.1, scaleY : 1.1}).ease(motion.easing.Quad.get_easeOut()).onComplete($bind(this,this.comeBackToNormal));
	}
	,render: function() {
		this.addChild(this.red);
		this.addChild(this.green);
		this.addChild(this.blue);
		this.addChild(this.yellow);
		this.addChild(this.pink);
		this.red.set_visible(this.green.set_visible(this.blue.set_visible(this.yellow.set_visible(this.pink.set_visible(false)))));
	}
	,construct: function() {
		this.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.onUserRollOver));
		this.render();
	}
	,initialize: function() {
		this.widthX = 50;
		this.heightX = 100;
		this.colorX = 4473924;
		this.red = new flash.display.Bitmap(openfl.Assets.getBitmapData("images/1_red.png"));
		this.green = new flash.display.Bitmap(openfl.Assets.getBitmapData("images/2_green.png"));
		this.blue = new flash.display.Bitmap(openfl.Assets.getBitmapData("images/3_blue.png"));
		this.yellow = new flash.display.Bitmap(openfl.Assets.getBitmapData("images/4_yellow.png"));
		this.pink = new flash.display.Bitmap(openfl.Assets.getBitmapData("images/5_pink.png"));
		this.red.set_x(this.green.set_x(this.blue.set_x(this.yellow.set_x(this.pink.set_x(-(this.red.get_width() / 2))))));
		this.red.set_y(this.green.set_y(this.blue.set_y(this.yellow.set_y(this.pink.set_y(-(this.red.get_height() / 2))))));
		this.construct();
	}
	,__class__: com.saumya.core.ui.shape.RectangleBase
});
com.saumya.core.ui.shape.ColorSquare = function() {
	com.saumya.core.ui.shape.RectangleBase.call(this);
	this.colorNum = 0;
	this.setSize(60,60);
	this.numText = new flash.text.TextField();
	this.numText.set_width(60);
	this.numText.set_height(40);
	var font = openfl.Assets.getFont("fonts/ArchitectsDaughter.ttf");
	var formatCenterAlign = new flash.text.TextFormat();
	formatCenterAlign.font = font.fontName;
	formatCenterAlign.align = flash.text.TextFormatAlign.CENTER;
	formatCenterAlign.size = 30;
	formatCenterAlign.color = 16777215;
	this.numText.set_defaultTextFormat(formatCenterAlign);
	this.numText.set_text("" + 0);
	this.numText.set_x(this.numText.set_y(-30));
	this.numText.selectable = false;
	this.numText.embedFonts = true;
};
$hxClasses["com.saumya.core.ui.shape.ColorSquare"] = com.saumya.core.ui.shape.ColorSquare;
com.saumya.core.ui.shape.ColorSquare.__name__ = ["com","saumya","core","ui","shape","ColorSquare"];
com.saumya.core.ui.shape.ColorSquare.__super__ = com.saumya.core.ui.shape.RectangleBase;
com.saumya.core.ui.shape.ColorSquare.prototype = $extend(com.saumya.core.ui.shape.RectangleBase.prototype,{
	addTextNumber: function(num) {
		this.addChild(this.numText);
		this.numText.set_text("" + (num + 1));
	}
	,getColor: function() {
		return this.colorValue;
	}
	,getColorNum: function() {
		return this.colorNum;
	}
	,changeColor: function(color) {
		switch( (color)[1] ) {
		case 0:
			this.colorNum = 1;
			break;
		case 1:
			this.colorNum = 2;
			break;
		case 2:
			this.colorNum = 3;
			break;
		case 3:
			this.colorNum = 4;
			break;
		case 4:
			this.colorNum = 5;
			break;
		}
		this.setColor(color);
		this.colorValue = color;
	}
	,__class__: com.saumya.core.ui.shape.ColorSquare
});
com.saumya.core.ui.shape.Logo = function() {
	flash.display.Sprite.call(this);
	this.initialize();
};
$hxClasses["com.saumya.core.ui.shape.Logo"] = com.saumya.core.ui.shape.Logo;
com.saumya.core.ui.shape.Logo.__name__ = ["com","saumya","core","ui","shape","Logo"];
com.saumya.core.ui.shape.Logo.__super__ = flash.display.Sprite;
com.saumya.core.ui.shape.Logo.prototype = $extend(flash.display.Sprite.prototype,{
	centerIt: function(newWidth,newHeight) {
		this.set_x((newWidth - this.get_width()) / 2);
		this.set_y((newHeight - this.get_height()) / 2);
	}
	,move: function(xPos,yPos) {
		this.set_x(xPos);
		this.set_y(yPos);
	}
	,construct: function() {
		this.addChild(this.logoImg);
	}
	,initialize: function() {
		this.logoImg = new flash.display.Bitmap(openfl.Assets.getBitmapData("images/logo.png"));
		this.construct();
	}
	,__class__: com.saumya.core.ui.shape.Logo
});
var haxe = {}
haxe.Timer = function() { }
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
}
flash.Lib = function(rootElement,width,height) {
	this.mKilled = false;
	this.__scr = rootElement;
	if(this.__scr == null) throw "Root element not found";
	this.__scr.style.setProperty("overflow","hidden","");
	this.__scr.style.setProperty("position","absolute","");
	if(this.__scr.style.getPropertyValue("width") != "100%") this.__scr.style.width = width + "px";
	if(this.__scr.style.getPropertyValue("height") != "100%") this.__scr.style.height = height + "px";
};
$hxClasses["flash.Lib"] = flash.Lib;
flash.Lib.__name__ = ["flash","Lib"];
flash.Lib.__properties__ = {get_current:"get_current"}
flash.Lib.addCallback = function(functionName,closure) {
	flash.Lib.mMe.__scr[functionName] = closure;
}
flash.Lib["as"] = function(v,c) {
	return js.Boot.__instanceof(v,c)?v:null;
}
flash.Lib.attach = function(name) {
	return new flash.display.MovieClip();
}
flash.Lib.getTimer = function() {
	return (haxe.Timer.stamp() - flash.Lib.starttime) * 1000 | 0;
}
flash.Lib.getURL = function(request,target) {
	if(target == null) target = "_blank";
	window.open(request.url,target);
}
flash.Lib.preventDefaultTouchMove = function() {
	js.Browser.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
}
flash.Lib.Run = function(tgt,width,height) {
	flash.Lib.mMe = new flash.Lib(tgt,width,height);
	var _g1 = 0, _g = tgt.attributes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var attr = tgt.attributes.item(i);
		if(StringTools.startsWith(attr.name,"data-")) {
			if(attr.name == "data-" + "framerate") flash.Lib.__getStage().set_frameRate(Std.parseFloat(attr.value));
		}
	}
	var _g = 0, _g1 = flash.Lib.HTML_TOUCH_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	var _g = 0, _g1 = flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	var _g = 0, _g1 = flash.Lib.HTML_DIV_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	if(Reflect.hasField(js.Browser.window,"on" + "devicemotion")) js.Browser.window.addEventListener("devicemotion",($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	if(Reflect.hasField(js.Browser.window,"on" + "orientationchange")) js.Browser.window.addEventListener("orientationchange",($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	var _g = 0, _g1 = flash.Lib.HTML_WINDOW_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		js.Browser.window.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),false);
	}
	if(tgt.style.backgroundColor != null && tgt.style.backgroundColor != "") flash.Lib.__getStage().set_backgroundColor(flash.Lib.__parseColor(tgt.style.backgroundColor,function(res,pos,cur) {
		return pos == 0?res | cur << 16:pos == 1?res | cur << 8:pos == 2?res | cur:(function($this) {
			var $r;
			throw "pos should be 0-2";
			return $r;
		}(this));
	})); else flash.Lib.__getStage().set_backgroundColor(16777215);
	flash.Lib.get_current().get_graphics().beginFill(flash.Lib.__getStage().get_backgroundColor());
	flash.Lib.get_current().get_graphics().drawRect(0,0,width,height);
	flash.Lib.__setSurfaceId(flash.Lib.get_current().get_graphics().__surface,"Root MovieClip");
	flash.Lib.__getStage().__updateNextWake();
	return flash.Lib.mMe;
}
flash.Lib.setUserScalable = function(isScalable) {
	if(isScalable == null) isScalable = true;
	var meta = js.Browser.document.createElement("meta");
	meta.name = "viewport";
	meta.content = "user-scalable=" + (isScalable?"yes":"no");
}
flash.Lib.trace = function(arg) {
	if(window.console != null) window.console.log(arg);
}
flash.Lib.__appendSurface = function(surface,before,after) {
	if(flash.Lib.mMe.__scr != null) {
		surface.style.setProperty("position","absolute","");
		surface.style.setProperty("left","0px","");
		surface.style.setProperty("top","0px","");
		surface.style.setProperty("transform-origin","0 0","");
		surface.style.setProperty("-moz-transform-origin","0 0","");
		surface.style.setProperty("-webkit-transform-origin","0 0","");
		surface.style.setProperty("-o-transform-origin","0 0","");
		surface.style.setProperty("-ms-transform-origin","0 0","");
		try {
			if(surface.localName == "canvas") surface.onmouseover = surface.onselectstart = function() {
				return false;
			};
		} catch( e ) {
		}
		if(before != null) before.parentNode.insertBefore(surface,before); else if(after != null && after.nextSibling != null) after.parentNode.insertBefore(surface,after.nextSibling); else flash.Lib.mMe.__scr.appendChild(surface);
	}
}
flash.Lib.__appendText = function(surface,container,text,wrap,isHtml) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		surface.removeChild(surface.childNodes[i]);
	}
	if(isHtml) container.innerHTML = text; else container.appendChild(js.Browser.document.createTextNode(text));
	container.style.setProperty("position","relative","");
	container.style.setProperty("cursor","default","");
	if(!wrap) container.style.setProperty("white-space","nowrap","");
	surface.appendChild(container);
}
flash.Lib.__bootstrap = function() {
	if(flash.Lib.mMe == null) {
		var target = js.Browser.document.getElementById("haxe:openfl");
		if(target == null) target = js.Browser.document.createElement("div");
		var agent = navigator.userAgent;
		if(agent.indexOf("BlackBerry") > -1 && target.style.height == "100%") target.style.height = screen.height + "px";
		if(agent.indexOf("Android") > -1) {
			var version = Std.parseFloat(HxOverrides.substr(agent,agent.indexOf("Android") + 8,3));
			if(version <= 2.3) flash.Lib.mForce2DTransform = true;
		}
		flash.Lib.Run(target,flash.Lib.__getWidth(),flash.Lib.__getHeight());
	}
}
flash.Lib.__copyStyle = function(src,tgt) {
	tgt.id = src.id;
	var _g = 0, _g1 = ["left","top","transform","transform-origin","-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
	}
}
flash.Lib.__createSurfaceAnimationCSS = function(surface,data,template,templateFunc,fps,discrete,infinite) {
	if(infinite == null) infinite = false;
	if(discrete == null) discrete = false;
	if(fps == null) fps = 25;
	if(surface.id == null || surface.id == "") {
		flash.Lib.trace("Failed to create a CSS Style tag for a surface without an id attribute");
		return null;
	}
	var style = null;
	if(surface.getAttribute("data-openfl-anim") != null) style = js.Browser.document.getElementById(surface.getAttribute("data-openfl-anim")); else {
		style = flash.Lib.mMe.__scr.appendChild(js.Browser.document.createElement("style"));
		style.sheet.id = "__openfl_anim_" + surface.id + "__";
		surface.setAttribute("data-openfl-anim",style.sheet.id);
	}
	var keyframeStylesheetRule = "";
	var _g1 = 0, _g = data.length;
	while(_g1 < _g) {
		var i = _g1++;
		var perc = i / (data.length - 1) * 100;
		var frame = data[i];
		keyframeStylesheetRule += perc + "% { " + template.execute(templateFunc(frame)) + " } ";
	}
	var animationDiscreteRule = discrete?"steps(::steps::, end)":"";
	var animationInfiniteRule = infinite?"infinite":"";
	var animationTpl = "";
	var _g = 0, _g1 = ["animation","-moz-animation","-webkit-animation","-o-animation","-ms-animation"];
	while(_g < _g1.length) {
		var prefix = _g1[_g];
		++_g;
		animationTpl += prefix + ": ::id:: ::duration::s " + animationDiscreteRule + " " + animationInfiniteRule + "; ";
	}
	var animationStylesheetRule = new haxe.Template(animationTpl).execute({ id : surface.id, duration : data.length / fps, steps : 1});
	var rules = style.sheet.rules != null?style.sheet.rules:style.sheet.cssRules;
	var _g = 0, _g1 = ["","-moz-","-webkit-","-o-","-ms-"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		try {
			style.sheet.insertRule("@" + variant + "keyframes " + surface.id + " {" + keyframeStylesheetRule + "}",rules.length);
		} catch( e ) {
		}
	}
	style.sheet.insertRule("#" + surface.id + " { " + animationStylesheetRule + " } ",rules.length);
	return style;
}
flash.Lib.__designMode = function(mode) {
	js.Browser.document.designMode = mode?"on":"off";
}
flash.Lib.__disableFullScreen = function() {
}
flash.Lib.__disableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = function() {
			return false;
		};
	} catch( e ) {
		flash.Lib.trace("Disable right click not supported in this browser.");
	}
}
flash.Lib.__drawClippedImage = function(surface,tgtCtx,clipRect) {
	if(clipRect != null) {
		if(clipRect.x < 0) {
			clipRect.width += clipRect.x;
			clipRect.x = 0;
		}
		if(clipRect.y < 0) {
			clipRect.height += clipRect.y;
			clipRect.y = 0;
		}
		if(clipRect.width > surface.width - clipRect.x) clipRect.width = surface.width - clipRect.x;
		if(clipRect.height > surface.height - clipRect.y) clipRect.height = surface.height - clipRect.y;
		tgtCtx.drawImage(surface,clipRect.x,clipRect.y,clipRect.width,clipRect.height,clipRect.x,clipRect.y,clipRect.width,clipRect.height);
	} else tgtCtx.drawImage(surface,0,0);
}
flash.Lib.__drawSurfaceRect = function(surface,tgt,x,y,rect) {
	var tgtCtx = tgt.getContext("2d");
	tgt.width = rect.width;
	tgt.height = rect.height;
	tgtCtx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,0,0,rect.width,rect.height);
	tgt.style.left = x + "px";
	tgt.style.top = y + "px";
}
flash.Lib.__drawToSurface = function(surface,tgt,matrix,alpha,clipRect,smoothing) {
	if(smoothing == null) smoothing = true;
	if(alpha == null) alpha = 1.0;
	var srcCtx = surface.getContext("2d");
	var tgtCtx = tgt.getContext("2d");
	tgtCtx.globalAlpha = alpha;
	flash.Lib.__setImageSmoothing(tgtCtx,smoothing);
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) {
			tgtCtx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) tgtCtx.translate(matrix.tx,matrix.ty); else tgtCtx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			flash.Lib.__drawClippedImage(surface,tgtCtx,clipRect);
			tgtCtx.restore();
		} else flash.Lib.__drawClippedImage(surface,tgtCtx,clipRect);
	}
}
flash.Lib.__enableFullScreen = function() {
	if(flash.Lib.mMe != null) {
		var origWidth = flash.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = flash.Lib.mMe.__scr.style.getPropertyValue("height");
		flash.Lib.mMe.__scr.style.setProperty("width","100%","");
		flash.Lib.mMe.__scr.style.setProperty("height","100%","");
		flash.Lib.__disableFullScreen = function() {
			flash.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			flash.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
		};
	}
}
flash.Lib.__enableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = null;
	} catch( e ) {
		flash.Lib.trace("Enable right click not supported in this browser.");
	}
}
flash.Lib.__fullScreenHeight = function() {
	return js.Browser.window.innerHeight;
}
flash.Lib.__fullScreenWidth = function() {
	return js.Browser.window.innerWidth;
}
flash.Lib.__getHeight = function() {
	var tgt = flash.Lib.mMe != null?flash.Lib.mMe.__scr:js.Browser.document.getElementById("haxe:openfl");
	return tgt != null && tgt.clientHeight > 0?tgt.clientHeight:500;
}
flash.Lib.__getStage = function() {
	if(flash.Lib.mStage == null) {
		var width = flash.Lib.__getWidth();
		var height = flash.Lib.__getHeight();
		flash.Lib.mStage = new flash.display.Stage(width,height);
	}
	return flash.Lib.mStage;
}
flash.Lib.__getWidth = function() {
	var tgt = flash.Lib.mMe != null?flash.Lib.mMe.__scr:js.Browser.document.getElementById("haxe:openfl");
	return tgt != null && tgt.clientWidth > 0?tgt.clientWidth:500;
}
flash.Lib.__isOnStage = function(surface) {
	var p = surface;
	while(p != null && p != flash.Lib.mMe.__scr) p = p.parentNode;
	return p == flash.Lib.mMe.__scr;
}
flash.Lib.__parseColor = function(str,cb) {
	var re = new EReg("rgb\\(([0-9]*), ?([0-9]*), ?([0-9]*)\\)","");
	var hex = new EReg("#([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])","");
	if(re.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = Std.parseInt(re.matched(pos));
			col = cb(col,pos - 1,v);
		}
		return col;
	} else if(hex.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = "0x" + hex.matched(pos) & 255;
			v = cb(col,pos - 1,v);
		}
		return col;
	} else throw "Cannot parse color '" + str + "'.";
}
flash.Lib.__removeSurface = function(surface) {
	if(flash.Lib.mMe.__scr != null) {
		var anim = surface.getAttribute("data-openfl-anim");
		if(anim != null) {
			var style = js.Browser.document.getElementById(anim);
			if(style != null) flash.Lib.mMe.__scr.removeChild(style);
		}
		if(surface.parentNode != null) surface.parentNode.removeChild(surface);
	}
	return surface;
}
flash.Lib.__setSurfaceBorder = function(surface,color,size) {
	surface.style.setProperty("border-color","#" + StringTools.hex(color),"");
	surface.style.setProperty("border-style","solid","");
	surface.style.setProperty("border-width",size + "px","");
	surface.style.setProperty("border-collapse","collapse","");
}
flash.Lib.__setSurfaceClipping = function(surface,rect) {
}
flash.Lib.__setSurfaceFont = function(surface,font,bold,size,color,align,lineHeight) {
	surface.style.setProperty("font-family",font,"");
	surface.style.setProperty("font-weight",Std.string(bold),"");
	surface.style.setProperty("color","#" + StringTools.hex(color),"");
	surface.style.setProperty("font-size",size + "px","");
	surface.style.setProperty("text-align",align,"");
	surface.style.setProperty("line-height",lineHeight + "px","");
}
flash.Lib.__setSurfaceOpacity = function(surface,alpha) {
	surface.style.setProperty("opacity",Std.string(alpha),"");
}
flash.Lib.__setSurfacePadding = function(surface,padding,margin,display) {
	surface.style.setProperty("padding",padding + "px","");
	surface.style.setProperty("margin",margin + "px","");
	surface.style.setProperty("top",padding + 2 + "px","");
	surface.style.setProperty("right",padding + 1 + "px","");
	surface.style.setProperty("left",padding + 1 + "px","");
	surface.style.setProperty("bottom",padding + 1 + "px","");
	surface.style.setProperty("display",display?"inline":"block","");
}
flash.Lib.__setSurfaceTransform = function(surface,matrix) {
	if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1 && surface.getAttribute("data-openfl-anim") == null) {
		surface.style.left = matrix.tx + "px";
		surface.style.top = matrix.ty + "px";
		surface.style.setProperty("transform","","");
		surface.style.setProperty("-moz-transform","","");
		surface.style.setProperty("-webkit-transform","","");
		surface.style.setProperty("-o-transform","","");
		surface.style.setProperty("-ms-transform","","");
	} else {
		surface.style.left = "0px";
		surface.style.top = "0px";
		surface.style.setProperty("transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-moz-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + "px, " + matrix.ty + "px)","");
		if(!flash.Lib.mForce2DTransform) surface.style.setProperty("-webkit-transform","matrix3d(" + matrix.a + ", " + matrix.b + ", " + "0, 0, " + matrix.c + ", " + matrix.d + ", " + "0, 0, 0, 0, 1, 0, " + matrix.tx + ", " + matrix.ty + ", " + "0, 1" + ")",""); else surface.style.setProperty("-webkit-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-o-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-ms-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
	}
}
flash.Lib.__setSurfaceZIndexAfter = function(surface1,surface2) {
	if(surface1 != null && surface2 != null) {
		if(surface1.parentNode != surface2.parentNode && surface2.parentNode != null) surface2.parentNode.appendChild(surface1);
		if(surface2.parentNode != null) {
			var nextSibling = surface2.nextSibling;
			if(surface1.previousSibling != surface2) {
				var swap = flash.Lib.__removeSurface(surface1);
				if(nextSibling == null) surface2.parentNode.appendChild(swap); else surface2.parentNode.insertBefore(swap,nextSibling);
			}
		}
	}
}
flash.Lib.__swapSurface = function(surface1,surface2) {
	var parent1 = surface1.parentNode;
	var parent2 = surface2.parentNode;
	if(parent1 != null && parent2 != null) {
		if(parent1 == parent2) {
			var next1 = surface1.nextSibling;
			var next2 = surface2.nextSibling;
			if(next1 == surface2) parent1.insertBefore(surface2,surface1); else if(next2 == surface1) parent1.insertBefore(surface1,surface2); else {
				parent1.replaceChild(surface2,surface1);
				if(next2 != null) parent1.insertBefore(surface1,next2); else parent1.appendChild(surface1);
			}
		} else {
			var next2 = surface2.nextSibling;
			parent1.replaceChild(surface2,surface1);
			if(next2 != null) parent2.insertBefore(surface1,next2); else parent2.appendChild(surface1);
		}
	}
}
flash.Lib.__setContentEditable = function(surface,contentEditable) {
	if(contentEditable == null) contentEditable = true;
	surface.setAttribute("contentEditable",contentEditable?"true":"false");
}
flash.Lib.__setCursor = function(type) {
	if(flash.Lib.mMe != null) flash.Lib.mMe.__scr.style.cursor = (function($this) {
		var $r;
		switch( (type)[1] ) {
		case 0:
			$r = "pointer";
			break;
		case 1:
			$r = "text";
			break;
		default:
			$r = "default";
		}
		return $r;
	}(this));
}
flash.Lib.__setImageSmoothing = function(context,enabled) {
	var _g = 0, _g1 = ["imageSmoothingEnabled","mozImageSmoothingEnabled","webkitImageSmoothingEnabled"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		context[variant] = enabled;
	}
}
flash.Lib.__setSurfaceAlign = function(surface,align) {
	surface.style.setProperty("text-align",align,"");
}
flash.Lib.__setSurfaceId = function(surface,name) {
	var regex = new EReg("[^a-zA-Z0-9\\-]","g");
	surface.id = regex.replace(name,"_");
}
flash.Lib.__setSurfaceRotation = function(surface,rotate) {
	surface.style.setProperty("transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-moz-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-webkit-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-o-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-ms-transform","rotate(" + rotate + "deg)","");
}
flash.Lib.__setSurfaceScale = function(surface,scale) {
	surface.style.setProperty("transform","scale(" + scale + ")","");
	surface.style.setProperty("-moz-transform","scale(" + scale + ")","");
	surface.style.setProperty("-webkit-transform","scale(" + scale + ")","");
	surface.style.setProperty("-o-transform","scale(" + scale + ")","");
	surface.style.setProperty("-ms-transform","scale(" + scale + ")","");
}
flash.Lib.__setSurfaceSpritesheetAnimation = function(surface,spec,fps) {
	if(spec.length == 0) return surface;
	var div = js.Browser.document.createElement("div");
	div.style.backgroundImage = "url(" + surface.toDataURL("image/png") + ")";
	div.id = surface.id;
	var keyframeTpl = new haxe.Template("background-position: ::left::px ::top::px; width: ::width::px; height: ::height::px; ");
	var templateFunc = function(frame) {
		return { left : -frame.x, top : -frame.y, width : frame.width, height : frame.height};
	};
	flash.Lib.__createSurfaceAnimationCSS(div,spec,keyframeTpl,templateFunc,fps,true,true);
	if(flash.Lib.__isOnStage(surface)) {
		flash.Lib.__appendSurface(div);
		flash.Lib.__copyStyle(surface,div);
		flash.Lib.__swapSurface(surface,div);
		flash.Lib.__removeSurface(surface);
	} else flash.Lib.__copyStyle(surface,div);
	return div;
}
flash.Lib.__setSurfaceVisible = function(surface,visible) {
	if(visible) surface.style.setProperty("display","block",""); else surface.style.setProperty("display","none","");
}
flash.Lib.__setTextDimensions = function(surface,width,height,align) {
	surface.style.setProperty("width",width + "px","");
	surface.style.setProperty("height",height + "px","");
	surface.style.setProperty("overflow","hidden","");
	surface.style.setProperty("text-align",align,"");
}
flash.Lib.__surfaceHitTest = function(surface,x,y) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var node = surface.childNodes[i];
		if(x >= node.offsetLeft && x <= node.offsetLeft + node.offsetWidth && y >= node.offsetTop && y <= node.offsetTop + node.offsetHeight) return true;
	}
	return false;
}
flash.Lib.get_current = function() {
	if(flash.Lib.mMainClassRoot == null) {
		flash.Lib.mMainClassRoot = new flash.display.MovieClip();
		flash.Lib.mCurrent = flash.Lib.mMainClassRoot;
		flash.Lib.__getStage().addChild(flash.Lib.mCurrent);
	}
	return flash.Lib.mMainClassRoot;
}
flash.Lib.prototype = {
	__class__: flash.Lib
}
flash._Lib = {}
flash._Lib.CursorType = $hxClasses["flash._Lib.CursorType"] = { __ename__ : true, __constructs__ : ["Pointer","Text","Default"] }
flash._Lib.CursorType.Pointer = ["Pointer",0];
flash._Lib.CursorType.Pointer.toString = $estr;
flash._Lib.CursorType.Pointer.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Text = ["Text",1];
flash._Lib.CursorType.Text.toString = $estr;
flash._Lib.CursorType.Text.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Default = ["Default",2];
flash._Lib.CursorType.Default.toString = $estr;
flash._Lib.CursorType.Default.__enum__ = flash._Lib.CursorType;
flash._Vector = {}
flash._Vector.Vector_Impl_ = function() { }
$hxClasses["flash._Vector.Vector_Impl_"] = flash._Vector.Vector_Impl_;
flash._Vector.Vector_Impl_.__name__ = ["flash","_Vector","Vector_Impl_"];
flash._Vector.Vector_Impl_.__properties__ = {set_fixed:"set_fixed",get_fixed:"get_fixed",set_length:"set_length",get_length:"get_length"}
flash._Vector.Vector_Impl_._new = function(length,fixed) {
	return new Array();
}
flash._Vector.Vector_Impl_.concat = function(this1,a) {
	return this1.concat(a);
}
flash._Vector.Vector_Impl_.copy = function(this1) {
	return this1.slice();
}
flash._Vector.Vector_Impl_.iterator = function(this1) {
	return HxOverrides.iter(this1);
}
flash._Vector.Vector_Impl_.join = function(this1,sep) {
	return this1.join(sep);
}
flash._Vector.Vector_Impl_.pop = function(this1) {
	return this1.pop();
}
flash._Vector.Vector_Impl_.push = function(this1,x) {
	return this1.push(x);
}
flash._Vector.Vector_Impl_.reverse = function(this1) {
	this1.reverse();
}
flash._Vector.Vector_Impl_.shift = function(this1) {
	return this1.shift();
}
flash._Vector.Vector_Impl_.unshift = function(this1,x) {
	this1.unshift(x);
}
flash._Vector.Vector_Impl_.slice = function(this1,pos,end) {
	return this1.slice(pos,end);
}
flash._Vector.Vector_Impl_.sort = function(this1,f) {
	this1.sort(f);
}
flash._Vector.Vector_Impl_.splice = function(this1,pos,len) {
	return this1.splice(pos,len);
}
flash._Vector.Vector_Impl_.toString = function(this1) {
	return this1.toString();
}
flash._Vector.Vector_Impl_.indexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var _g1 = from, _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this1[i] == x) return i;
	}
	return -1;
}
flash._Vector.Vector_Impl_.lastIndexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var i = this1.length - 1;
	while(i >= from) {
		if(this1[i] == x) return i;
		i--;
	}
	return -1;
}
flash._Vector.Vector_Impl_.ofArray = function(a) {
	return flash._Vector.Vector_Impl_.concat(flash._Vector.Vector_Impl_._new(),a);
}
flash._Vector.Vector_Impl_.convert = function(v) {
	return v;
}
flash._Vector.Vector_Impl_.fromArray = function(a) {
	return a;
}
flash._Vector.Vector_Impl_.toArray = function(this1) {
	return this1;
}
flash._Vector.Vector_Impl_.get_length = function(this1) {
	return this1.length;
}
flash._Vector.Vector_Impl_.set_length = function(this1,value) {
	if(value < this1.length) this1 = this1.slice(0,value);
	while(value > this1.length) this1.push(null);
	return value;
}
flash._Vector.Vector_Impl_.get_fixed = function(this1) {
	return false;
}
flash._Vector.Vector_Impl_.set_fixed = function(this1,value) {
	return value;
}
flash.accessibility = {}
flash.accessibility.AccessibilityProperties = function() {
	this.description = "";
	this.forceSimple = false;
	this.name = "";
	this.noAutoLabeling = false;
	this.shortcut = "";
	this.silent = false;
};
$hxClasses["flash.accessibility.AccessibilityProperties"] = flash.accessibility.AccessibilityProperties;
flash.accessibility.AccessibilityProperties.__name__ = ["flash","accessibility","AccessibilityProperties"];
flash.accessibility.AccessibilityProperties.prototype = {
	__class__: flash.accessibility.AccessibilityProperties
}
flash.display.Bitmap = function(inBitmapData,inPixelSnapping,inSmoothing) {
	if(inSmoothing == null) inSmoothing = false;
	flash.display.DisplayObject.call(this);
	this.pixelSnapping = inPixelSnapping;
	this.smoothing = inSmoothing;
	if(inBitmapData != null) {
		this.set_bitmapData(inBitmapData);
		if(this.bitmapData.__referenceCount == 1) this.__graphics = new flash.display.Graphics(this.bitmapData.___textureBuffer);
	}
	if(this.pixelSnapping == null) this.pixelSnapping = flash.display.PixelSnapping.AUTO;
	if(this.__graphics == null) this.__graphics = new flash.display.Graphics();
	if(this.bitmapData != null) this.__render();
};
$hxClasses["flash.display.Bitmap"] = flash.display.Bitmap;
flash.display.Bitmap.__name__ = ["flash","display","Bitmap"];
flash.display.Bitmap.__super__ = flash.display.DisplayObject;
flash.display.Bitmap.prototype = $extend(flash.display.DisplayObject.prototype,{
	set_bitmapData: function(inBitmapData) {
		if(inBitmapData != this.bitmapData) {
			if(this.bitmapData != null) {
				this.bitmapData.__referenceCount--;
				if(this.__graphics.__surface == this.bitmapData.___textureBuffer) flash.Lib.__setSurfaceOpacity(this.bitmapData.___textureBuffer,0);
			}
			if(inBitmapData != null) inBitmapData.__referenceCount++;
		}
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		this.bitmapData = inBitmapData;
		return inBitmapData;
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		if(this.bitmapData == null) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.bitmapData.___textureBuffer != this.__graphics.__surface) {
			var imageDataLease = this.bitmapData.__lease;
			if(imageDataLease != null && (this.__currentLease == null || imageDataLease.seed != this.__currentLease.seed || imageDataLease.time != this.__currentLease.time)) {
				var srcCanvas = this.bitmapData.___textureBuffer;
				this.__graphics.__surface.width = srcCanvas.width;
				this.__graphics.__surface.height = srcCanvas.height;
				this.__graphics.clear();
				flash.Lib.__drawToSurface(srcCanvas,this.__graphics.__surface);
				this.__currentLease = imageDataLease.clone();
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				this.__applyFilters(this.__graphics.__surface);
				this.___renderFlags |= 32;
			}
		}
		if(inMask != null) {
			this.__applyFilters(this.__graphics.__surface);
			var m = this.getBitmapSurfaceTransform(this.__graphics);
			flash.Lib.__drawToSurface(this.__graphics.__surface,inMask,m,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha,clipRect,this.smoothing);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m = this.getBitmapSurfaceTransform(this.__graphics);
				flash.Lib.__setSurfaceTransform(this.__graphics.__surface,m);
				this.___renderFlags &= -33;
			}
			if(!this.__init) {
				flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,0);
				this.__init = true;
			} else flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha);
		}
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.bitmapData != null) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.get_width() / this.get_scaleX() || local.y > this.get_height() / this.get_scaleY()) return null; else return this;
		} else return flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.DisplayObject.prototype.validateBounds.call(this);
			if(this.bitmapData != null) {
				var r = new flash.geom.Rectangle(0,0,this.bitmapData.get_width(),this.bitmapData.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,toString: function() {
		return "[Bitmap name=" + this.name + " id=" + this.___id + "]";
	}
	,getBitmapSurfaceTransform: function(gfx) {
		var extent = gfx.__extentWithFilters;
		var fm = this.transform.__getFullMatrix(null);
		fm.__translateTransformed(extent.get_topLeft());
		return fm;
	}
	,__class__: flash.display.Bitmap
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_bitmapData:"set_bitmapData"})
});
flash.display.BitmapData = function(width,height,transparent,inFillColor) {
	if(inFillColor == null) inFillColor = -1;
	if(transparent == null) transparent = true;
	this.__locked = false;
	this.__referenceCount = 0;
	this.__leaseNum = 0;
	this.__lease = new flash.display.ImageDataLease();
	this.__lease.set(this.__leaseNum++,new Date().getTime());
	this.___textureBuffer = js.Browser.document.createElement("canvas");
	this.___textureBuffer.width = width;
	this.___textureBuffer.height = height;
	this.___id = flash.utils.Uuid.uuid();
	flash.Lib.__setSurfaceId(this.___textureBuffer,this.___id);
	this.__transparent = transparent;
	this.rect = new flash.geom.Rectangle(0,0,width,height);
	if(this.__transparent) {
		this.__transparentFiller = js.Browser.document.createElement("canvas");
		this.__transparentFiller.width = width;
		this.__transparentFiller.height = height;
		var ctx = this.__transparentFiller.getContext("2d");
		ctx.fillStyle = "rgba(0,0,0,0);";
		ctx.fill();
	}
	if(inFillColor != null && width > 0 && height > 0) {
		if(!this.__transparent) inFillColor |= -16777216;
		this.__initColor = inFillColor;
		this.__fillRect(this.rect,inFillColor);
	}
};
$hxClasses["flash.display.BitmapData"] = flash.display.BitmapData;
flash.display.BitmapData.__name__ = ["flash","display","BitmapData"];
flash.display.BitmapData.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.BitmapData.getRGBAPixels = function(bitmapData) {
	var p = bitmapData.getPixels(new flash.geom.Rectangle(0,0,bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.width:0,bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.height:0));
	var num = (bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.width:0) * (bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.height:0);
	p.position = 0;
	var _g = 0;
	while(_g < num) {
		var i = _g++;
		var pos = p.position;
		var alpha = p.readByte();
		var red = p.readByte();
		var green = p.readByte();
		var blue = p.readByte();
		p.position = pos;
		p.writeByte(red);
		p.writeByte(green);
		p.writeByte(blue);
		p.writeByte(alpha);
	}
	return p;
}
flash.display.BitmapData.loadFromBase64 = function(base64,type,onload) {
	var bitmapData = new flash.display.BitmapData(0,0);
	bitmapData.__loadFromBase64(base64,type,onload);
	return bitmapData;
}
flash.display.BitmapData.loadFromBytes = function(bytes,inRawAlpha,onload) {
	var bitmapData = new flash.display.BitmapData(0,0);
	bitmapData.__loadFromBytes(bytes,inRawAlpha,onload);
	return bitmapData;
}
flash.display.BitmapData.__base64Encode = function(bytes) {
	var blob = "";
	var codex = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	bytes.position = 0;
	while(bytes.position < bytes.length) {
		var by1 = 0, by2 = 0, by3 = 0;
		by1 = bytes.readByte();
		if(bytes.position < bytes.length) by2 = bytes.readByte();
		if(bytes.position < bytes.length) by3 = bytes.readByte();
		var by4 = 0, by5 = 0, by6 = 0, by7 = 0;
		by4 = by1 >> 2;
		by5 = (by1 & 3) << 4 | by2 >> 4;
		by6 = (by2 & 15) << 2 | by3 >> 6;
		by7 = by3 & 63;
		blob += codex.charAt(by4);
		blob += codex.charAt(by5);
		if(bytes.position < bytes.length) blob += codex.charAt(by6); else blob += "=";
		if(bytes.position < bytes.length) blob += codex.charAt(by7); else blob += "=";
	}
	return blob;
}
flash.display.BitmapData.__createFromHandle = function(inHandle) {
	var result = new flash.display.BitmapData(0,0);
	result.___textureBuffer = inHandle;
	return result;
}
flash.display.BitmapData.__isJPG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 255 && bytes.readByte() == 216;
}
flash.display.BitmapData.__isPNG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 137 && bytes.readByte() == 80 && bytes.readByte() == 78 && bytes.readByte() == 71 && bytes.readByte() == 13 && bytes.readByte() == 10 && bytes.readByte() == 26 && bytes.readByte() == 10;
}
flash.display.BitmapData.prototype = {
	get_width: function() {
		if(this.___textureBuffer != null) return this.___textureBuffer.width; else return 0;
	}
	,get_transparent: function() {
		return this.__transparent;
	}
	,get_height: function() {
		if(this.___textureBuffer != null) return this.___textureBuffer.height; else return 0;
	}
	,__onLoad: function(data,e) {
		var canvas = data.texture;
		var width = data.image.width;
		var height = data.image.height;
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(data.image,0,0,width,height);
		data.bitmapData.width = width;
		data.bitmapData.height = height;
		data.bitmapData.rect = new flash.geom.Rectangle(0,0,width,height);
		data.bitmapData.__buildLease();
		if(data.inLoader != null) {
			var e1 = new flash.events.Event(flash.events.Event.COMPLETE);
			e1.target = data.inLoader;
			data.inLoader.dispatchEvent(e1);
		}
	}
	,__loadFromFile: function(inFilename,inLoader) {
		var _g = this;
		var image = js.Browser.document.createElement("img");
		if(inLoader != null) {
			var data = { image : image, texture : this.___textureBuffer, inLoader : inLoader, bitmapData : this};
			image.addEventListener("load",(function(f,a1) {
				return function(e) {
					return f(a1,e);
				};
			})($bind(this,this.__onLoad),data),false);
			image.addEventListener("error",function(e) {
				if(!image.complete) _g.__onLoad(data,e);
			},false);
		}
		image.src = inFilename;
		if(image.complete) {
		}
	}
	,__incrNumRefBitmaps: function() {
		this.__assignedBitmaps++;
	}
	,__getNumRefBitmaps: function() {
		return this.__assignedBitmaps;
	}
	,__loadFromBytes: function(bytes,inRawAlpha,onload) {
		var _g = this;
		var type = "";
		if(flash.display.BitmapData.__isPNG(bytes)) type = "image/png"; else if(flash.display.BitmapData.__isJPG(bytes)) type = "image/jpeg"; else throw new flash.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
		if(inRawAlpha != null) this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,function(_) {
			var ctx = _g.___textureBuffer.getContext("2d");
			var pixels = ctx.getImageData(0,0,_g.___textureBuffer.width,_g.___textureBuffer.height);
			var _g2 = 0, _g1 = inRawAlpha.length;
			while(_g2 < _g1) {
				var i = _g2++;
				pixels.data[i * 4 + 3] = inRawAlpha.readUnsignedByte();
			}
			ctx.putImageData(pixels,0,0);
			if(onload != null) onload(_g);
		}); else this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,onload);
	}
	,__loadFromBase64: function(base64,type,onload) {
		var _g = this;
		var img = js.Browser.document.createElement("img");
		var canvas = this.___textureBuffer;
		var drawImage = function(_) {
			canvas.width = img.width;
			canvas.height = img.height;
			var ctx = canvas.getContext("2d");
			ctx.drawImage(img,0,0);
			_g.rect = new flash.geom.Rectangle(0,0,canvas.width,canvas.height);
			if(onload != null) onload(_g);
		};
		img.addEventListener("load",drawImage,false);
		img.src = "data:" + type + ";base64," + base64;
	}
	,__getLease: function() {
		return this.__lease;
	}
	,__fillRect: function(rect,color) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a = this.__transparent?color >>> 24:255;
		if(!this.__locked) {
			var style = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
			ctx.fillStyle = style;
			ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.__imageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.__imageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.__imageData.data[s + offsetX] = r;
					this.__imageData.data[s + offsetX + 1] = g;
					this.__imageData.data[s + offsetX + 2] = b;
					this.__imageData.data[s + offsetX + 3] = a;
				}
			}
			this.__imageDataChanged = true;
		}
	}
	,__decrNumRefBitmaps: function() {
		this.__assignedBitmaps--;
	}
	,__clearCanvas: function() {
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.clearRect(0,0,this.___textureBuffer.width,this.___textureBuffer.height);
	}
	,__buildLease: function() {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	}
	,unlock: function(changeRect) {
		this.__locked = false;
		var ctx = this.___textureBuffer.getContext("2d");
		if(this.__imageDataChanged) {
			if(changeRect != null) ctx.putImageData(this.__imageData,0,0,changeRect.x,changeRect.y,changeRect.width,changeRect.height); else ctx.putImageData(this.__imageData,0,0);
		}
		var _g = 0, _g1 = this.__copyPixelList;
		while(_g < _g1.length) {
			var copyCache = _g1[_g];
			++_g;
			if(this.__transparent && copyCache.transparentFiller != null) {
				var trpCtx = copyCache.transparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight);
				ctx.putImageData(trpData,copyCache.destX,copyCache.destY);
			}
			ctx.drawImage(copyCache.handle,copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight,copyCache.destX,copyCache.destY,copyCache.sourceWidth,copyCache.sourceHeight);
		}
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	}
	,threshold: function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
		if(copySource == null) copySource = false;
		if(mask == null) mask = -1;
		if(color == null) color = 0;
		console.log("BitmapData.threshold not implemented");
		return 0;
	}
	,setPixels: function(rect,byteArray) {
		rect = this.clipRect(rect);
		if(rect == null) return;
		var len = Math.round(4 * rect.width * rect.height);
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				imageData.data[i] = byteArray.readByte();
			}
			ctx.putImageData(imageData,rect.x,rect.y);
		} else {
			var offset = Math.round(4 * this.__imageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.__imageData.width * 4) > boundR - 1) pos += this.__imageData.width * 4 - boundR;
				this.__imageData.data[pos] = byteArray.readByte();
				pos++;
			}
			this.__imageDataChanged = true;
		}
	}
	,setPixel32: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return;
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.__transparent) imageData.data[3] = (color & -16777216) >>> 24; else imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.__imageData.width + x * 4;
			this.__imageData.data[offset] = (color & 16711680) >>> 16;
			this.__imageData.data[offset + 1] = (color & 65280) >>> 8;
			this.__imageData.data[offset + 2] = color & 255;
			if(this.__transparent) this.__imageData.data[offset + 3] = (color & -16777216) >>> 24; else this.__imageData.data[offset + 3] = 255;
			this.__imageDataChanged = true;
		}
	}
	,setPixel: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return;
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.__transparent) imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.__imageData.width + x * 4;
			this.__imageData.data[offset] = (color & 16711680) >>> 16;
			this.__imageData.data[offset + 1] = (color & 65280) >>> 8;
			this.__imageData.data[offset + 2] = color & 255;
			if(this.__transparent) this.__imageData.data[offset + 3] = 255;
			this.__imageDataChanged = true;
		}
	}
	,scroll: function(x,y) {
		throw "bitmapData.scroll is currently not supported for HTML5";
	}
	,noise: function(randomSeed,low,high,channelOptions,grayScale) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		if(high == null) high = 255;
		if(low == null) low = 0;
		var generator = new flash.display._BitmapData.MinstdGenerator(randomSeed);
		var ctx = this.___textureBuffer.getContext("2d");
		var imageData = null;
		if(this.__locked) imageData = this.__imageData; else imageData = ctx.createImageData(this.___textureBuffer.width,this.___textureBuffer.height);
		var _g1 = 0, _g = this.___textureBuffer.width * this.___textureBuffer.height;
		while(_g1 < _g) {
			var i = _g1++;
			if(grayScale) imageData.data[i * 4] = imageData.data[i * 4 + 1] = imageData.data[i * 4 + 2] = low + generator.nextValue() % (high - low + 1); else {
				imageData.data[i * 4] = (channelOptions & 1) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 1] = (channelOptions & 2) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 2] = (channelOptions & 4) == 0?0:low + generator.nextValue() % (high - low + 1);
			}
			imageData.data[i * 4 + 3] = (channelOptions & 8) == 0?255:low + generator.nextValue() % (high - low + 1);
		}
		if(this.__locked) this.__imageDataChanged = true; else ctx.putImageData(imageData,0,0);
	}
	,lock: function() {
		this.__locked = true;
		var ctx = this.___textureBuffer.getContext("2d");
		this.__imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
		this.__imageDataChanged = false;
		this.__copyPixelList = [];
	}
	,hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
		var type = Type.getClassName(Type.getClass(secondObject));
		firstAlphaThreshold = firstAlphaThreshold & -1;
		var me = this;
		var doHitTest = function(imageData) {
			if(secondObject.__proto__ == null || secondObject.__proto__.__class__ == null || secondObject.__proto__.__class__.__name__ == null) return false;
			var _g = secondObject.__proto__.__class__.__name__[2];
			switch(_g) {
			case "Rectangle":
				var rect = secondObject;
				rect.x -= firstPoint.x;
				rect.y -= firstPoint.y;
				rect = me.clipRect(me.rect);
				if(me.rect == null) return false;
				var boundingBox = new flash.geom.Rectangle(0,0,me.___textureBuffer != null?me.___textureBuffer.width:0,me.___textureBuffer != null?me.___textureBuffer.height:0);
				if(!rect.intersects(boundingBox)) return false;
				var diff = rect.intersection(boundingBox);
				var offset = 4 * (Math.round(diff.x) + Math.round(diff.y) * imageData.width) + 3;
				var pos = offset;
				var boundR = Math.round(4 * (diff.x + diff.width));
				while(pos < offset + Math.round(4 * (diff.width + imageData.width * diff.height))) {
					if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
					if(imageData.data[pos] - firstAlphaThreshold >= 0) return true;
					pos += 4;
				}
				return false;
			case "Point":
				var point = secondObject;
				var x = point.x - firstPoint.x;
				var y = point.y - firstPoint.y;
				if(x < 0 || y < 0 || x >= (me.___textureBuffer != null?me.___textureBuffer.width:0) || y >= (me.___textureBuffer != null?me.___textureBuffer.height:0)) return false;
				if(imageData.data[Math.round(4 * (y * (me.___textureBuffer != null?me.___textureBuffer.width:0) + x)) + 3] - firstAlphaThreshold > 0) return true;
				return false;
			case "Bitmap":
				throw "bitmapData.hitTest with a second object of type Bitmap is currently not supported for HTML5";
				return false;
			case "BitmapData":
				throw "bitmapData.hitTest with a second object of type BitmapData is currently not supported for HTML5";
				return false;
			default:
				throw "BitmapData::hitTest secondObject argument must be either a Rectangle, a Point, a Bitmap or a BitmapData object.";
				return false;
			}
		};
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			return doHitTest(imageData);
		} else return doHitTest(this.__imageData);
	}
	,handle: function() {
		return this.___textureBuffer;
	}
	,getPixels: function(rect) {
		var len = Math.round(4 * rect.width * rect.height);
		var byteArray = new flash.utils.ByteArray();
		if(byteArray.allocated < len) byteArray.___resizeBuffer(byteArray.allocated = Math.max(len,byteArray.allocated * 2) | 0); else if(byteArray.allocated > len) byteArray.___resizeBuffer(byteArray.allocated = len);
		byteArray.length = len;
		len;
		rect = this.clipRect(rect);
		if(rect == null) return byteArray;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				byteArray.writeByte(imagedata.data[i]);
			}
		} else {
			var offset = Math.round(4 * this.__imageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.__imageData.width * 4) > boundR - 1) pos += this.__imageData.width * 4 - boundR;
				byteArray.writeByte(this.__imageData.data[pos]);
				pos++;
			}
		}
		byteArray.position = 0;
		return byteArray;
	}
	,getPixel32: function(x,y) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return 0;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			return this.getInt32(0,ctx.getImageData(x,y,1,1).data);
		} else return this.getInt32(4 * y * this.___textureBuffer.width + x * 4,this.__imageData.data);
	}
	,getPixel: function(x,y) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return 0;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(x,y,1,1);
			return imagedata.data[0] << 16 | imagedata.data[1] << 8 | imagedata.data[2];
		} else {
			var offset = 4 * y * (this.___textureBuffer != null?this.___textureBuffer.width:0) + x * 4;
			return this.__imageData.data[offset] << 16 | this.__imageData.data[offset + 1] << 8 | this.__imageData.data[offset + 2];
		}
	}
	,getInt32: function(offset,data) {
		return (this.__transparent?data[offset + 3]:255) << 24 | data[offset] << 16 | data[offset + 1] << 8 | data[offset + 2];
	}
	,getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) findColor = true;
		var me = this;
		var doGetColorBoundsRect = function(data) {
			var minX = me.___textureBuffer != null?me.___textureBuffer.width:0, maxX = 0, minY = me.___textureBuffer != null?me.___textureBuffer.height:0, maxY = 0, i = 0;
			while(i < data.length) {
				var value = me.getInt32(i,data);
				if(findColor) {
					if((value & mask) == color) {
						var x = Math.round(i % ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4) / 4);
						var y = Math.round(i / ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4));
						if(x < minX) minX = x;
						if(x > maxX) maxX = x;
						if(y < minY) minY = y;
						if(y > maxY) maxY = y;
					}
				} else if((value & mask) != color) {
					var x = Math.round(i % ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4) / 4);
					var y = Math.round(i / ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4));
					if(x < minX) minX = x;
					if(x > maxX) maxX = x;
					if(y < minY) minY = y;
					if(y > maxY) maxY = y;
				}
				i += 4;
			}
			if(minX < maxX && minY < maxY) return new flash.geom.Rectangle(minX,minY,maxX - minX + 1,maxY - minY); else return new flash.geom.Rectangle(0,0,me.___textureBuffer != null?me.___textureBuffer.width:0,me.___textureBuffer != null?me.___textureBuffer.height:0);
		};
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			return doGetColorBoundsRect(imageData.data);
		} else return doGetColorBoundsRect(this.__imageData.data);
	}
	,floodFill: function(x,y,color) {
		var wasLocked = this.__locked;
		if(!this.__locked) this.lock();
		var queue = new Array();
		queue.push(new flash.geom.Point(x,y));
		var old = this.getPixel32(x,y);
		var iterations = 0;
		var search = new Array();
		var _g1 = 0, _g = (this.___textureBuffer != null?this.___textureBuffer.width:0) + 1;
		while(_g1 < _g) {
			var i = _g1++;
			var column = new Array();
			var _g3 = 0, _g2 = (this.___textureBuffer != null?this.___textureBuffer.height:0) + 1;
			while(_g3 < _g2) {
				var i1 = _g3++;
				column.push(false);
			}
			search.push(column);
		}
		var currPoint, newPoint;
		while(queue.length > 0) {
			currPoint = queue.shift();
			++iterations;
			var x1 = currPoint.x | 0;
			var y1 = currPoint.y | 0;
			if(x1 < 0 || x1 >= (this.___textureBuffer != null?this.___textureBuffer.width:0)) continue;
			if(y1 < 0 || y1 >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) continue;
			search[x1][y1] = true;
			if(this.getPixel32(x1,y1) == old) {
				this.setPixel32(x1,y1,color);
				if(!search[x1 + 1][y1]) queue.push(new flash.geom.Point(x1 + 1,y1));
				if(!search[x1][y1 + 1]) queue.push(new flash.geom.Point(x1,y1 + 1));
				if(x1 > 0 && !search[x1 - 1][y1]) queue.push(new flash.geom.Point(x1 - 1,y1));
				if(y1 > 0 && !search[x1][y1 - 1]) queue.push(new flash.geom.Point(x1,y1 - 1));
			}
		}
		if(!wasLocked) this.unlock();
	}
	,fillRect: function(rect,color) {
		if(rect == null) return;
		if(rect.width <= 0 || rect.height <= 0) return;
		if(rect.x == 0 && rect.y == 0 && rect.width == this.___textureBuffer.width && rect.height == this.___textureBuffer.height) {
			if(this.__transparent) {
				if(color >>> 24 == 0 || color == this.__initColor) return this.__clearCanvas();
			} else if((color | -16777216) == (this.__initColor | -16777216)) return this.__clearCanvas();
		}
		return this.__fillRect(rect,color);
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = inSurface.getContext("2d");
		if(matrix != null) {
			ctx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) ctx.translate(matrix.tx,matrix.ty); else {
				flash.Lib.__setImageSmoothing(ctx,smoothing);
				ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			}
			ctx.drawImage(this.___textureBuffer,0,0);
			ctx.restore();
		} else ctx.drawImage(this.___textureBuffer,0,0);
		if(inColorTransform != null) this.colorTransform(new flash.geom.Rectangle(0,0,this.___textureBuffer.width,this.___textureBuffer.height),inColorTransform);
	}
	,draw: function(source,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		source.drawToSurface(this.___textureBuffer,matrix,inColorTransform,blendMode,clipRect,smoothing);
		if(inColorTransform != null) {
			var rect = new flash.geom.Rectangle();
			var object = source;
			rect.x = matrix != null?matrix.tx:0;
			rect.y = matrix != null?matrix.ty:0;
			try {
				rect.width = Reflect.getProperty(source,"width");
				rect.height = Reflect.getProperty(source,"height");
			} catch( e ) {
				rect.width = this.___textureBuffer.width;
				rect.height = this.___textureBuffer.height;
			}
			this.colorTransform(rect,inColorTransform);
		}
	}
	,dispose: function() {
		this.__clearCanvas();
		this.___textureBuffer = null;
		this.__leaseNum = 0;
		this.__lease = null;
		this.__imageData = null;
	}
	,destroy: function() {
		this.___textureBuffer = null;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(sourceBitmapData.___textureBuffer == null || this.___textureBuffer == null || sourceBitmapData.___textureBuffer.width == 0 || sourceBitmapData.___textureBuffer.height == 0 || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.___textureBuffer.width) sourceRect.width = sourceBitmapData.___textureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.___textureBuffer.height) sourceRect.height = sourceBitmapData.___textureBuffer.height - sourceRect.y;
		if(alphaBitmapData != null && alphaBitmapData.__transparent) {
			if(alphaPoint == null) alphaPoint = new flash.geom.Point();
			var bitmapData = new flash.display.BitmapData(sourceBitmapData.___textureBuffer != null?sourceBitmapData.___textureBuffer.width:0,sourceBitmapData.___textureBuffer != null?sourceBitmapData.___textureBuffer.height:0,true);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point(sourceRect.x,sourceRect.y));
			bitmapData.copyChannel(alphaBitmapData,new flash.geom.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new flash.geom.Point(sourceRect.x,sourceRect.y),8,8);
			sourceBitmapData = bitmapData;
		}
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			if(!mergeAlpha) {
				if(this.__transparent && sourceBitmapData.__transparent) {
					var trpCtx = sourceBitmapData.__transparentFiller.getContext("2d");
					var trpData = trpCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
					ctx.putImageData(trpData,destPoint.x,destPoint.y);
				}
			}
			ctx.drawImage(sourceBitmapData.___textureBuffer,sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		} else this.__copyPixelList[this.__copyPixelList.length] = { handle : sourceBitmapData.___textureBuffer, transparentFiller : mergeAlpha?null:sourceBitmapData.__transparentFiller, sourceX : sourceRect.x, sourceY : sourceRect.y, sourceWidth : sourceRect.width, sourceHeight : sourceRect.height, destX : destPoint.x, destY : destPoint.y};
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		this.rect = this.clipRect(this.rect);
		if(this.rect == null) return;
		if(destChannel == 8 && !this.__transparent) return;
		if(sourceBitmapData.___textureBuffer == null || this.___textureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.___textureBuffer.width) sourceRect.width = sourceBitmapData.___textureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.___textureBuffer.height) sourceRect.height = sourceBitmapData.___textureBuffer.height - sourceRect.y;
		var doChannelCopy = function(imageData) {
			var srcCtx = sourceBitmapData.___textureBuffer.getContext("2d");
			var srcImageData = srcCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
			var destIdx = -1;
			if(destChannel == 8) destIdx = 3; else if(destChannel == 4) destIdx = 2; else if(destChannel == 2) destIdx = 1; else if(destChannel == 1) destIdx = 0; else throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
			var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * imageData.width) + destIdx;
			var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
			var setPos = function(val) {
				if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
				imageData.data[pos] = val;
				pos += 4;
			};
			var srcIdx = -1;
			if(sourceChannel == 8) srcIdx = 3; else if(sourceChannel == 4) srcIdx = 2; else if(sourceChannel == 2) srcIdx = 1; else if(sourceChannel == 1) srcIdx = 0; else throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
			while(srcIdx < srcImageData.data.length) {
				setPos(srcImageData.data[srcIdx]);
				srcIdx += 4;
			}
		};
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			doChannelCopy(imageData);
			ctx.putImageData(imageData,0,0);
		} else {
			doChannelCopy(this.__imageData);
			this.__imageDataChanged = true;
		}
	}
	,compare: function(inBitmapTexture) {
		throw "bitmapData.compare is currently not supported for HTML5";
		return 0;
	}
	,colorTransform: function(rect,colorTransform) {
		if(rect == null) return;
		rect = this.clipRect(rect);
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var offsetX;
			var _g1 = 0, _g = imagedata.data.length >> 2;
			while(_g1 < _g) {
				var i = _g1++;
				offsetX = i * 4;
				imagedata.data[offsetX] = imagedata.data[offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
				imagedata.data[offsetX + 1] = imagedata.data[offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
				imagedata.data[offsetX + 2] = imagedata.data[offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
				imagedata.data[offsetX + 3] = imagedata.data[offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
			}
			ctx.putImageData(imagedata,rect.x,rect.y);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.__imageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.__imageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.__imageData.data[s + offsetX] = this.__imageData.data[s + offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
					this.__imageData.data[s + offsetX + 1] = this.__imageData.data[s + offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
					this.__imageData.data[s + offsetX + 2] = this.__imageData.data[s + offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
					this.__imageData.data[s + offsetX + 3] = this.__imageData.data[s + offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
				}
			}
			this.__imageDataChanged = true;
		}
	}
	,clone: function() {
		var bitmapData = new flash.display.BitmapData(this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0,this.__transparent);
		var rect = new flash.geom.Rectangle(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
		bitmapData.setPixels(rect,this.getPixels(rect));
		bitmapData.__lease.set(bitmapData.__leaseNum++,new Date().getTime());
		return bitmapData;
	}
	,clipRect: function(r) {
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= (this.___textureBuffer != null?this.___textureBuffer.width:0)) {
			r.width -= r.x + r.width - (this.___textureBuffer != null?this.___textureBuffer.width:0);
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) {
			r.height -= r.y + r.height - (this.___textureBuffer != null?this.___textureBuffer.height:0);
			if(r.height <= 0) return null;
		}
		return r;
	}
	,clear: function(color) {
		this.fillRect(this.rect,color);
	}
	,applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		if(sourceBitmapData == this && sourceRect.x == destPoint.x && sourceRect.y == destPoint.y) filter.__applyFilter(this.___textureBuffer,sourceRect); else {
			var bitmapData = new flash.display.BitmapData(sourceRect.width | 0,sourceRect.height | 0);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point());
			filter.__applyFilter(bitmapData.___textureBuffer);
			this.copyPixels(bitmapData,bitmapData.rect,destPoint);
		}
	}
	,__class__: flash.display.BitmapData
	,__properties__: {get_height:"get_height",get_transparent:"get_transparent",get_width:"get_width"}
}
flash.display.ImageDataLease = function() {
};
$hxClasses["flash.display.ImageDataLease"] = flash.display.ImageDataLease;
flash.display.ImageDataLease.__name__ = ["flash","display","ImageDataLease"];
flash.display.ImageDataLease.prototype = {
	set: function(s,t) {
		this.seed = s;
		this.time = t;
	}
	,clone: function() {
		var leaseClone = new flash.display.ImageDataLease();
		leaseClone.seed = this.seed;
		leaseClone.time = this.time;
		return leaseClone;
	}
	,__class__: flash.display.ImageDataLease
}
flash.display._BitmapData = {}
flash.display._BitmapData.MinstdGenerator = function(seed) {
	if(seed == 0) this.value = 1; else this.value = seed;
};
$hxClasses["flash.display._BitmapData.MinstdGenerator"] = flash.display._BitmapData.MinstdGenerator;
flash.display._BitmapData.MinstdGenerator.__name__ = ["flash","display","_BitmapData","MinstdGenerator"];
flash.display._BitmapData.MinstdGenerator.prototype = {
	nextValue: function() {
		var lo = 16807 * (this.value & 65535);
		var hi = 16807 * (this.value >>> 16);
		lo += (hi & 32767) << 16;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		lo += hi >>> 15;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		return this.value = lo;
	}
	,__class__: flash.display._BitmapData.MinstdGenerator
}
flash.display.BitmapDataChannel = function() { }
$hxClasses["flash.display.BitmapDataChannel"] = flash.display.BitmapDataChannel;
flash.display.BitmapDataChannel.__name__ = ["flash","display","BitmapDataChannel"];
flash.display.BlendMode = $hxClasses["flash.display.BlendMode"] = { __ename__ : true, __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] }
flash.display.BlendMode.ADD = ["ADD",0];
flash.display.BlendMode.ADD.toString = $estr;
flash.display.BlendMode.ADD.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ALPHA = ["ALPHA",1];
flash.display.BlendMode.ALPHA.toString = $estr;
flash.display.BlendMode.ALPHA.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DARKEN = ["DARKEN",2];
flash.display.BlendMode.DARKEN.toString = $estr;
flash.display.BlendMode.DARKEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
flash.display.BlendMode.DIFFERENCE.toString = $estr;
flash.display.BlendMode.DIFFERENCE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ERASE = ["ERASE",4];
flash.display.BlendMode.ERASE.toString = $estr;
flash.display.BlendMode.ERASE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
flash.display.BlendMode.HARDLIGHT.toString = $estr;
flash.display.BlendMode.HARDLIGHT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.INVERT = ["INVERT",6];
flash.display.BlendMode.INVERT.toString = $estr;
flash.display.BlendMode.INVERT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LAYER = ["LAYER",7];
flash.display.BlendMode.LAYER.toString = $estr;
flash.display.BlendMode.LAYER.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
flash.display.BlendMode.LIGHTEN.toString = $estr;
flash.display.BlendMode.LIGHTEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
flash.display.BlendMode.MULTIPLY.toString = $estr;
flash.display.BlendMode.MULTIPLY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.NORMAL = ["NORMAL",10];
flash.display.BlendMode.NORMAL.toString = $estr;
flash.display.BlendMode.NORMAL.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.OVERLAY = ["OVERLAY",11];
flash.display.BlendMode.OVERLAY.toString = $estr;
flash.display.BlendMode.OVERLAY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SCREEN = ["SCREEN",12];
flash.display.BlendMode.SCREEN.toString = $estr;
flash.display.BlendMode.SCREEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
flash.display.BlendMode.SUBTRACT.toString = $estr;
flash.display.BlendMode.SUBTRACT.__enum__ = flash.display.BlendMode;
flash.display.CapsStyle = $hxClasses["flash.display.CapsStyle"] = { __ename__ : true, __constructs__ : ["NONE","ROUND","SQUARE"] }
flash.display.CapsStyle.NONE = ["NONE",0];
flash.display.CapsStyle.NONE.toString = $estr;
flash.display.CapsStyle.NONE.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.ROUND = ["ROUND",1];
flash.display.CapsStyle.ROUND.toString = $estr;
flash.display.CapsStyle.ROUND.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.SQUARE = ["SQUARE",2];
flash.display.CapsStyle.SQUARE.toString = $estr;
flash.display.CapsStyle.SQUARE.__enum__ = flash.display.CapsStyle;
flash.display.GradientType = $hxClasses["flash.display.GradientType"] = { __ename__ : true, __constructs__ : ["RADIAL","LINEAR"] }
flash.display.GradientType.RADIAL = ["RADIAL",0];
flash.display.GradientType.RADIAL.toString = $estr;
flash.display.GradientType.RADIAL.__enum__ = flash.display.GradientType;
flash.display.GradientType.LINEAR = ["LINEAR",1];
flash.display.GradientType.LINEAR.toString = $estr;
flash.display.GradientType.LINEAR.__enum__ = flash.display.GradientType;
flash.display.Graphics = function(inSurface) {
	flash.Lib.__bootstrap();
	if(inSurface == null) {
		this.__surface = js.Browser.document.createElement("canvas");
		this.__surface.width = 0;
		this.__surface.height = 0;
	} else this.__surface = inSurface;
	this.mLastMoveID = 0;
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.mDrawList = new Array();
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mBitmap = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.boundsDirty = true;
	this.__clearLine();
	this.mLineJobs = [];
	this.__changed = true;
	this.nextDrawIndex = 0;
	this.__extent = new flash.geom.Rectangle();
	this.__extentWithFilters = new flash.geom.Rectangle();
	this._padding = 0.0;
	this.__clearNextCycle = true;
};
$hxClasses["flash.display.Graphics"] = flash.display.Graphics;
flash.display.Graphics.__name__ = ["flash","display","Graphics"];
flash.display.Graphics.__detectIsPointInPathMode = function() {
	var canvas = js.Browser.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) return flash.display.PointInPathMode.USER_SPACE;
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv = ctx.isPointInPath(0.3,0.3)?flash.display.PointInPathMode.USER_SPACE:flash.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	return rv;
}
flash.display.Graphics.prototype = {
	__render: function(maskHandle,filters,sx,sy,clip0,clip1,clip2,clip3) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(!this.__changed) return false;
		this.closePolygon(true);
		var padding = this._padding;
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(Reflect.hasField(filter,"blurX")) padding += Math.max(Reflect.field(filter,"blurX"),Reflect.field(filter,"blurY")) * 4;
			}
		}
		this.__expandFilteredExtent(-(padding * sx) / 2,-(padding * sy) / 2);
		if(this.__clearNextCycle) {
			this.nextDrawIndex = 0;
			this.__clearCanvas();
			this.__clearNextCycle = false;
		}
		if(this.__extentWithFilters.width - this.__extentWithFilters.x > this.__surface.width || this.__extentWithFilters.height - this.__extentWithFilters.y > this.__surface.height) this.__adjustSurface(sx,sy);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(clip0 != null) {
			ctx.beginPath();
			ctx.moveTo(clip0.x * sx,clip0.y * sy);
			ctx.lineTo(clip1.x * sx,clip1.y * sy);
			ctx.lineTo(clip2.x * sx,clip2.y * sy);
			ctx.lineTo(clip3.x * sx,clip3.y * sy);
			ctx.closePath();
			ctx.clip();
		}
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(js.Boot.__instanceof(filter,flash.filters.DropShadowFilter)) filter.__applyFilter(this.__surface,null,true);
			}
		}
		var len = this.mDrawList.length;
		ctx.save();
		if(this.__extentWithFilters.x != 0 || this.__extentWithFilters.y != 0) ctx.translate(-this.__extentWithFilters.x * sx,-this.__extentWithFilters.y * sy);
		if(sx != 1 || sy != 0) ctx.scale(sx,sy);
		var doStroke = false;
		var _g = this.nextDrawIndex;
		while(_g < len) {
			var i = _g++;
			var d = this.mDrawList[len - 1 - i];
			if(d.tileJob != null) this.__drawTiles(d.tileJob.sheet,d.tileJob.drawList,d.tileJob.flags); else {
				if(d.lineJobs.length > 0) {
					var _g1 = 0, _g2 = d.lineJobs;
					while(_g1 < _g2.length) {
						var lj = _g2[_g1];
						++_g1;
						ctx.lineWidth = lj.thickness;
						switch(lj.joints) {
						case 0:
							ctx.lineJoin = "round";
							break;
						case 4096:
							ctx.lineJoin = "miter";
							break;
						case 8192:
							ctx.lineJoin = "bevel";
							break;
						}
						switch(lj.caps) {
						case 256:
							ctx.lineCap = "round";
							break;
						case 512:
							ctx.lineCap = "square";
							break;
						case 0:
							ctx.lineCap = "butt";
							break;
						}
						ctx.miterLimit = lj.miter_limit;
						if(lj.grad != null) ctx.strokeStyle = this.createCanvasGradient(ctx,lj.grad); else ctx.strokeStyle = this.createCanvasColor(lj.colour,lj.alpha);
						ctx.beginPath();
						var _g4 = lj.point_idx0, _g3 = lj.point_idx1 + 1;
						while(_g4 < _g3) {
							var i1 = _g4++;
							var p = d.points[i1];
							switch(p.type) {
							case 0:
								ctx.moveTo(p.x,p.y);
								break;
							case 2:
								ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
								break;
							default:
								ctx.lineTo(p.x,p.y);
							}
						}
						ctx.closePath();
						doStroke = true;
					}
				} else {
					ctx.beginPath();
					var _g1 = 0, _g2 = d.points;
					while(_g1 < _g2.length) {
						var p = _g2[_g1];
						++_g1;
						switch(p.type) {
						case 0:
							ctx.moveTo(p.x,p.y);
							break;
						case 2:
							ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
							break;
						default:
							ctx.lineTo(p.x,p.y);
						}
					}
					ctx.closePath();
				}
				var fillColour = d.fillColour;
				var fillAlpha = d.fillAlpha;
				var g = d.solidGradient;
				var bitmap = d.bitmap;
				if(g != null) ctx.fillStyle = this.createCanvasGradient(ctx,g); else if(bitmap != null && (bitmap.flags & 16) > 0) {
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					if((bitmap.flags & 65536) == 0) {
						ctx.mozImageSmoothingEnabled = false;
						ctx.webkitImageSmoothingEnabled = false;
					}
					ctx.fillStyle = ctx.createPattern(bitmap.texture_buffer,"repeat");
				} else ctx.fillStyle = this.createCanvasColor(fillColour,Math.min(1.0,Math.max(0.0,fillAlpha)));
				ctx.fill();
				if(doStroke) ctx.stroke();
				ctx.save();
				if(bitmap != null && (bitmap.flags & 16) == 0) {
					ctx.clip();
					var img = bitmap.texture_buffer;
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					ctx.drawImage(img,0,0);
				}
				ctx.restore();
			}
		}
		ctx.restore();
		this.__changed = false;
		this.nextDrawIndex = len > 0?len - 1:0;
		this.mDrawList = [];
		return true;
	}
	,__mediaSurface: function(surface) {
		this.__surface = surface;
	}
	,__invalidate: function() {
		this.__changed = true;
		this.__clearNextCycle = true;
	}
	,__hitTest: function(inX,inY) {
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(ctx.isPointInPath(inX,inY)) return true; else if(this.mDrawList.length == 0 && this.__extent.width > 0 && this.__extent.height > 0) return true;
		return false;
	}
	,__expandStandardExtent: function(x,y,thickness) {
		if(thickness == null) thickness = 0;
		if(this._padding > 0) {
			this.__extent.width -= this._padding;
			this.__extent.height -= this._padding;
		}
		if(thickness != null && thickness > this._padding) this._padding = thickness;
		var maxX, minX, maxY, minY;
		minX = this.__extent.x;
		minY = this.__extent.y;
		maxX = this.__extent.width + minX;
		maxY = this.__extent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.__extent.x = minX;
		this.__extent.y = minY;
		this.__extent.width = maxX - minX + this._padding;
		this.__extent.height = maxY - minY + this._padding;
		this.boundsDirty = true;
	}
	,__expandFilteredExtent: function(x,y) {
		var maxX, minX, maxY, minY;
		minX = this.__extent.x;
		minY = this.__extent.y;
		maxX = this.__extent.width + minX;
		maxY = this.__extent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.__extentWithFilters.x = minX;
		this.__extentWithFilters.y = minY;
		this.__extentWithFilters.width = maxX - minX;
		this.__extentWithFilters.height = maxY - minY;
	}
	,__drawTiles: function(sheet,tileData,flags) {
		if(flags == null) flags = 0;
		var useScale = (flags & 1) > 0;
		var useRotation = (flags & 2) > 0;
		var useTransform = (flags & 16) > 0;
		var useRGB = (flags & 4) > 0;
		var useAlpha = (flags & 8) > 0;
		if(useTransform) {
			useScale = false;
			useRotation = false;
		}
		var scaleIndex = 0;
		var rotationIndex = 0;
		var rgbIndex = 0;
		var alphaIndex = 0;
		var transformIndex = 0;
		var numValues = 3;
		if(useScale) {
			scaleIndex = numValues;
			numValues++;
		}
		if(useRotation) {
			rotationIndex = numValues;
			numValues++;
		}
		if(useTransform) {
			transformIndex = numValues;
			numValues += 4;
		}
		if(useRGB) {
			rgbIndex = numValues;
			numValues += 3;
		}
		if(useAlpha) {
			alphaIndex = numValues;
			numValues++;
		}
		var totalCount = tileData.length;
		var itemCount = totalCount / numValues | 0;
		var index = 0;
		var rect = null;
		var center = null;
		var previousTileID = -1;
		var surface = sheet.__bitmap.___textureBuffer;
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) while(index < totalCount) {
			var tileID = tileData[index + 2] | 0;
			if(tileID != previousTileID) {
				rect = sheet.__tileRects[tileID];
				center = sheet.__centerPoints[tileID];
				previousTileID = tileID;
			}
			if(rect != null && center != null) {
				ctx.save();
				ctx.translate(tileData[index],tileData[index + 1]);
				if(useRotation) ctx.rotate(tileData[index + rotationIndex]);
				var scale = 1.0;
				if(useScale) scale = tileData[index + scaleIndex];
				if(useTransform) ctx.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
				if(useAlpha) ctx.globalAlpha = tileData[index + alphaIndex];
				ctx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
				ctx.restore();
			}
			index += numValues;
		}
	}
	,__drawEllipse: function(x,y,rx,ry) {
		this.moveTo(x + rx,y);
		this.curveTo(rx + x,-0.4142 * ry + y,0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(0.4142 * rx + x,-ry + y,x,-ry + y);
		this.curveTo(-0.4142 * rx + x,-ry + y,-0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(-rx + x,-0.4142 * ry + y,-rx + x,y);
		this.curveTo(-rx + x,0.4142 * ry + y,-0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(-0.4142 * rx + x,ry + y,x,ry + y);
		this.curveTo(0.4142 * rx + x,ry + y,0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(rx + x,0.4142 * ry + y,rx + x,y);
	}
	,__clearLine: function() {
		this.mCurrentLine = new flash.display.LineJob(null,-1,-1,0.0,0.0,0,1,0,256,3,3.0);
	}
	,__clearCanvas: function() {
		if(this.__surface != null) {
			var ctx = (function($this) {
				var $r;
				try {
					$r = $this.__surface.getContext("2d");
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(ctx != null) ctx.clearRect(0,0,this.__surface.width,this.__surface.height);
		}
	}
	,__adjustSurface: function(sx,sy) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(Reflect.field(this.__surface,"getContext") != null) {
			var width = Math.ceil((this.__extentWithFilters.width - this.__extentWithFilters.x) * sx);
			var height = Math.ceil((this.__extentWithFilters.height - this.__extentWithFilters.y) * sy);
			if(width <= 5000 && height <= 5000) {
				var dstCanvas = js.Browser.document.createElement("canvas");
				dstCanvas.width = width;
				dstCanvas.height = height;
				flash.Lib.__drawToSurface(this.__surface,dstCanvas);
				if(flash.Lib.__isOnStage(this.__surface)) {
					flash.Lib.__appendSurface(dstCanvas);
					flash.Lib.__copyStyle(this.__surface,dstCanvas);
					flash.Lib.__swapSurface(this.__surface,dstCanvas);
					flash.Lib.__removeSurface(this.__surface);
					if(this.__surface.id != null) flash.Lib.__setSurfaceId(dstCanvas,this.__surface.id);
				}
				this.__surface = dstCanvas;
			}
		}
	}
	,moveTo: function(inX,inY) {
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY);
		if(!this.mFilling) this.closePolygon(false); else {
			this.addLineSegment();
			this.mLastMoveID = this.mPoints.length;
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
		}
	}
	,lineTo: function(inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,1));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
		if(!this.mFilling) this.closePolygon(false);
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		this.addLineSegment();
		if(thickness == null) {
			this.__clearLine();
			return;
		} else {
			this.mCurrentLine.grad = null;
			this.mCurrentLine.thickness = thickness;
			this.mCurrentLine.colour = color == null?0:color;
			this.mCurrentLine.alpha = alpha == null?1.0:alpha;
			this.mCurrentLine.miter_limit = miterLimit == null?3.0:miterLimit;
			this.mCurrentLine.pixel_hinting = pixelHinting == null || !pixelHinting?0:16384;
		}
		if(caps != null) {
			switch( (caps)[1] ) {
			case 1:
				this.mCurrentLine.caps = 256;
				break;
			case 2:
				this.mCurrentLine.caps = 512;
				break;
			case 0:
				this.mCurrentLine.caps = 0;
				break;
			}
		}
		this.mCurrentLine.scale_mode = 3;
		if(scaleMode != null) {
			switch( (scaleMode)[1] ) {
			case 2:
				this.mCurrentLine.scale_mode = 3;
				break;
			case 3:
				this.mCurrentLine.scale_mode = 1;
				break;
			case 0:
				this.mCurrentLine.scale_mode = 2;
				break;
			case 1:
				this.mCurrentLine.scale_mode = 0;
				break;
			}
		}
		this.mCurrentLine.joints = 0;
		if(joints != null) {
			switch( (joints)[1] ) {
			case 1:
				this.mCurrentLine.joints = 0;
				break;
			case 0:
				this.mCurrentLine.joints = 4096;
				break;
			case 2:
				this.mCurrentLine.joints = 8192;
				break;
			}
		}
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.mCurrentLine.grad = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,getContext: function() {
		try {
			return this.__surface.getContext("2d");
		} catch( e ) {
			return null;
		}
	}
	,flush: function() {
		this.closePolygon(true);
	}
	,endFill: function() {
		this.closePolygon(true);
	}
	,drawTiles: function(sheet,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		this.__expandStandardExtent(flash.Lib.get_current().get_stage().get_stageWidth(),flash.Lib.get_current().get_stage().get_stageHeight());
		this.addDrawable(new flash.display.Drawable(null,null,null,null,null,null,new flash.display.TileJob(sheet,tileData,flags)));
		this.__changed = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		if(ry == null) ry = -1;
		if(ry == -1) ry = rx;
		rx *= 0.5;
		ry *= 0.5;
		var w = width * 0.5;
		x += w;
		if(rx > w) rx = w;
		var lw = w - rx;
		var w_ = lw + rx * Math.sin(Math.PI / 4);
		var cw_ = lw + rx * Math.tan(Math.PI / 8);
		var h = height * 0.5;
		y += h;
		if(ry > h) ry = h;
		var lh = h - ry;
		var h_ = lh + ry * Math.sin(Math.PI / 4);
		var ch_ = lh + ry * Math.tan(Math.PI / 8);
		this.closePolygon(false);
		this.moveTo(x + w,y + lh);
		this.curveTo(x + w,y + ch_,x + w_,y + h_);
		this.curveTo(x + cw_,y + h,x + lw,y + h);
		this.lineTo(x - lw,y + h);
		this.curveTo(x - cw_,y + h,x - w_,y + h_);
		this.curveTo(x - w,y + ch_,x - w,y + lh);
		this.lineTo(x - w,y - lh);
		this.curveTo(x - w,y - ch_,x - w_,y - h_);
		this.curveTo(x - cw_,y - h,x - lw,y - h);
		this.lineTo(x + lw,y - h);
		this.curveTo(x + cw_,y - h,x + w_,y - h_);
		this.curveTo(x + w,y - ch_,x + w,y - lh);
		this.lineTo(x + w,y + lh);
		this.closePolygon(false);
	}
	,drawRect: function(x,y,width,height) {
		this.closePolygon(false);
		this.moveTo(x,y);
		this.lineTo(x + width,y);
		this.lineTo(x + width,y + height);
		this.lineTo(x,y + height);
		this.lineTo(x,y);
		this.closePolygon(false);
	}
	,drawGraphicsData: function(points) {
		var $it0 = ((function(_e) {
			return function() {
				return $iterator(flash._Vector.Vector_Impl_)(_e);
			};
		})(points))();
		while( $it0.hasNext() ) {
			var data = $it0.next();
			if(data == null) this.mFilling = true; else switch(data.__graphicsDataType) {
			case flash.display.GraphicsDataType.STROKE:
				var stroke = data;
				if(stroke.fill == null) this.lineStyle(stroke.thickness,0,1.,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit); else switch(stroke.fill.__graphicsFillType) {
				case flash.display.GraphicsFillType.SOLID_FILL:
					var fill = stroke.fill;
					this.lineStyle(stroke.thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
					break;
				case flash.display.GraphicsFillType.GRADIENT_FILL:
					var fill = stroke.fill;
					this.lineGradientStyle(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
					break;
				}
				break;
			case flash.display.GraphicsDataType.PATH:
				var path = data;
				var j = 0;
				var _g1 = 0, _g = flash._Vector.Vector_Impl_.get_length(path.commands);
				while(_g1 < _g) {
					var i = _g1++;
					var command = path.commands[i];
					switch(command) {
					case 1:
						this.moveTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 2:
						this.lineTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 3:
						this.curveTo(path.data[j],path.data[j + 1],path.data[j + 2],path.data[j + 3]);
						j = j + 4;
						break;
					}
				}
				break;
			case flash.display.GraphicsDataType.SOLID:
				var fill = data;
				this.beginFill(fill.color,fill.alpha);
				break;
			case flash.display.GraphicsDataType.GRADIENT:
				var fill = data;
				this.beginGradientFill(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
				break;
			}
		}
	}
	,drawEllipse: function(x,y,rx,ry) {
		this.closePolygon(false);
		rx /= 2;
		ry /= 2;
		this.__drawEllipse(x + rx,y + ry,rx,ry);
		this.closePolygon(false);
	}
	,drawCircle: function(x,y,rad) {
		this.closePolygon(false);
		this.__drawEllipse(x,y,rad,rad);
		this.closePolygon(false);
	}
	,curveTo: function(inCX,inCY,inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(inX,inY,inCX,inCY,2));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
	}
	,createGradient: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		var points = new Array();
		var _g1 = 0, _g = colors.length;
		while(_g1 < _g) {
			var i = _g1++;
			points.push(new flash.display.GradPoint(colors[i],alphas[i],ratios[i]));
		}
		var flags = 0;
		if(type == flash.display.GradientType.RADIAL) flags |= 1;
		if(spreadMethod == flash.display.SpreadMethod.REPEAT) flags |= 2; else if(spreadMethod == flash.display.SpreadMethod.REFLECT) flags |= 4;
		if(matrix == null) {
			matrix = new flash.geom.Matrix();
			matrix.createGradientBox(25,25);
		} else matrix = matrix.clone();
		var focal = focalPointRatio == null?0:focalPointRatio;
		return new flash.display.Grad(points,matrix,flags,focal);
	}
	,createCanvasGradient: function(ctx,g) {
		var gradient;
		var matrix = g.matrix;
		if((g.flags & 1) == 0) {
			var p1 = matrix.transformPoint(new flash.geom.Point(-819.2,0));
			var p2 = matrix.transformPoint(new flash.geom.Point(819.2,0));
			gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
		} else {
			var p1 = matrix.transformPoint(new flash.geom.Point(g.focal * 819.2,0));
			var p2 = matrix.transformPoint(new flash.geom.Point(0,819.2));
			gradient = ctx.createRadialGradient(p1.x,p1.y,0,p2.x,p1.y,p2.y);
		}
		var _g = 0, _g1 = g.points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			var color = this.createCanvasColor(point.col,point.alpha);
			var pos = point.ratio / 255;
			gradient.addColorStop(pos,color);
		}
		return gradient;
	}
	,createCanvasColor: function(color,alpha) {
		var r = (16711680 & color) >> 16;
		var g = (65280 & color) >> 8;
		var b = 255 & color;
		return "rgba" + "(" + r + "," + g + "," + b + "," + alpha + ")";
	}
	,closePolygon: function(inCancelFill) {
		var l = this.mPoints.length;
		if(l > 0) {
			if(l > 1) {
				if(this.mFilling && l > 2) {
					if(this.mPoints[this.mLastMoveID].x != this.mPoints[l - 1].x || this.mPoints[this.mLastMoveID].y != this.mPoints[l - 1].y) this.lineTo(this.mPoints[this.mLastMoveID].x,this.mPoints[this.mLastMoveID].y);
				}
				this.addLineSegment();
				var drawable = new flash.display.Drawable(this.mPoints,this.mFillColour,this.mFillAlpha,this.mSolidGradient,this.mBitmap,this.mLineJobs,null);
				this.addDrawable(drawable);
			}
			this.mLineJobs = [];
			this.mPoints = [];
		}
		if(inCancelFill) {
			this.mFillAlpha = 0;
			this.mSolidGradient = null;
			this.mBitmap = null;
			this.mFilling = false;
		}
		this.__changed = true;
	}
	,clear: function() {
		this.__clearLine();
		this.mPenX = 0.0;
		this.mPenY = 0.0;
		this.mDrawList = new Array();
		this.nextDrawIndex = 0;
		this.mPoints = [];
		this.mSolidGradient = null;
		this.mFilling = false;
		this.mFillColour = 0;
		this.mFillAlpha = 0.0;
		this.mLastMoveID = 0;
		this.__clearNextCycle = true;
		this.boundsDirty = true;
		this.__extent.x = 0.0;
		this.__extent.y = 0.0;
		this.__extent.width = 0.0;
		this.__extent.height = 0.0;
		this._padding = 0.0;
		this.mLineJobs = [];
	}
	,blit: function(inTexture) {
		this.closePolygon(true);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) ctx.drawImage(inTexture.___textureBuffer,this.mPenX,this.mPenY);
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.closePolygon(true);
		this.mFilling = true;
		this.mBitmap = null;
		this.mSolidGradient = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,beginFill: function(color,alpha) {
		this.closePolygon(true);
		this.mFillColour = color;
		this.mFillAlpha = alpha == null?1.0:alpha;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.mBitmap = null;
	}
	,beginBitmapFill: function(bitmap,matrix,in_repeat,in_smooth) {
		if(in_smooth == null) in_smooth = false;
		if(in_repeat == null) in_repeat = true;
		this.closePolygon(true);
		var repeat = in_repeat == null?true:in_repeat;
		var smooth = in_smooth == null?false:in_smooth;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.__expandStandardExtent(bitmap.___textureBuffer != null?bitmap.___textureBuffer.width:0,bitmap.___textureBuffer != null?bitmap.___textureBuffer.height:0);
		this.mBitmap = { texture_buffer : bitmap.___textureBuffer, matrix : matrix == null?matrix:matrix.clone(), flags : (repeat?16:0) | (smooth?65536:0)};
	}
	,addLineSegment: function() {
		if(this.mCurrentLine.point_idx1 > 0) this.mLineJobs.push(new flash.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
		this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
	}
	,addDrawable: function(inDrawable) {
		if(inDrawable == null) return;
		this.mDrawList.unshift(inDrawable);
	}
	,__class__: flash.display.Graphics
}
flash.display.Drawable = function(inPoints,inFillColour,inFillAlpha,inSolidGradient,inBitmap,inLineJobs,inTileJob) {
	this.points = inPoints;
	this.fillColour = inFillColour;
	this.fillAlpha = inFillAlpha;
	this.solidGradient = inSolidGradient;
	this.bitmap = inBitmap;
	this.lineJobs = inLineJobs;
	this.tileJob = inTileJob;
};
$hxClasses["flash.display.Drawable"] = flash.display.Drawable;
flash.display.Drawable.__name__ = ["flash","display","Drawable"];
flash.display.Drawable.prototype = {
	__class__: flash.display.Drawable
}
flash.display.GfxPoint = function(inX,inY,inCX,inCY,inType) {
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
};
$hxClasses["flash.display.GfxPoint"] = flash.display.GfxPoint;
flash.display.GfxPoint.__name__ = ["flash","display","GfxPoint"];
flash.display.GfxPoint.prototype = {
	__class__: flash.display.GfxPoint
}
flash.display.Grad = function(inPoints,inMatrix,inFlags,inFocal) {
	this.points = inPoints;
	this.matrix = inMatrix;
	this.flags = inFlags;
	this.focal = inFocal;
};
$hxClasses["flash.display.Grad"] = flash.display.Grad;
flash.display.Grad.__name__ = ["flash","display","Grad"];
flash.display.Grad.prototype = {
	__class__: flash.display.Grad
}
flash.display.GradPoint = function(inCol,inAlpha,inRatio) {
	this.col = inCol;
	this.alpha = inAlpha;
	this.ratio = inRatio;
};
$hxClasses["flash.display.GradPoint"] = flash.display.GradPoint;
flash.display.GradPoint.__name__ = ["flash","display","GradPoint"];
flash.display.GradPoint.prototype = {
	__class__: flash.display.GradPoint
}
flash.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) {
	this.grad = inGrad;
	this.point_idx0 = inPoint_idx0;
	this.point_idx1 = inPoint_idx1;
	this.thickness = inThickness;
	this.alpha = inAlpha;
	this.colour = inColour;
	this.pixel_hinting = inPixel_hinting;
	this.joints = inJoints;
	this.caps = inCaps;
	this.scale_mode = inScale_mode;
	this.miter_limit = inMiter_limit;
};
$hxClasses["flash.display.LineJob"] = flash.display.LineJob;
flash.display.LineJob.__name__ = ["flash","display","LineJob"];
flash.display.LineJob.prototype = {
	__class__: flash.display.LineJob
}
flash.display.PointInPathMode = $hxClasses["flash.display.PointInPathMode"] = { __ename__ : true, __constructs__ : ["USER_SPACE","DEVICE_SPACE"] }
flash.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
flash.display.PointInPathMode.USER_SPACE.toString = $estr;
flash.display.PointInPathMode.USER_SPACE.__enum__ = flash.display.PointInPathMode;
flash.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
flash.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
flash.display.PointInPathMode.DEVICE_SPACE.__enum__ = flash.display.PointInPathMode;
flash.display.TileJob = function(sheet,drawList,flags) {
	this.sheet = sheet;
	this.drawList = drawList;
	this.flags = flags;
};
$hxClasses["flash.display.TileJob"] = flash.display.TileJob;
flash.display.TileJob.__name__ = ["flash","display","TileJob"];
flash.display.TileJob.prototype = {
	__class__: flash.display.TileJob
}
flash.display.IGraphicsFill = function() { }
$hxClasses["flash.display.IGraphicsFill"] = flash.display.IGraphicsFill;
flash.display.IGraphicsFill.__name__ = ["flash","display","IGraphicsFill"];
flash.display.IGraphicsFill.prototype = {
	__class__: flash.display.IGraphicsFill
}
flash.display.IGraphicsData = function() { }
$hxClasses["flash.display.IGraphicsData"] = flash.display.IGraphicsData;
flash.display.IGraphicsData.__name__ = ["flash","display","IGraphicsData"];
flash.display.IGraphicsData.prototype = {
	__class__: flash.display.IGraphicsData
}
flash.display.GraphicsGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if(focalPointRatio == null) focalPointRatio = 0;
	this.type = type;
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
	this.matrix = matrix;
	this.spreadMethod = spreadMethod;
	this.interpolationMethod = interpolationMethod;
	this.focalPointRatio = focalPointRatio;
	this.__graphicsDataType = flash.display.GraphicsDataType.GRADIENT;
	this.__graphicsFillType = flash.display.GraphicsFillType.GRADIENT_FILL;
};
$hxClasses["flash.display.GraphicsGradientFill"] = flash.display.GraphicsGradientFill;
flash.display.GraphicsGradientFill.__name__ = ["flash","display","GraphicsGradientFill"];
flash.display.GraphicsGradientFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsGradientFill.prototype = {
	__class__: flash.display.GraphicsGradientFill
}
flash.display.IGraphicsPath = function() { }
$hxClasses["flash.display.IGraphicsPath"] = flash.display.IGraphicsPath;
flash.display.IGraphicsPath.__name__ = ["flash","display","IGraphicsPath"];
flash.display.GraphicsPath = function(commands,data,winding) {
	this.commands = commands;
	this.data = data;
	this.winding = winding;
	this.__graphicsDataType = flash.display.GraphicsDataType.PATH;
};
$hxClasses["flash.display.GraphicsPath"] = flash.display.GraphicsPath;
flash.display.GraphicsPath.__name__ = ["flash","display","GraphicsPath"];
flash.display.GraphicsPath.__interfaces__ = [flash.display.IGraphicsPath,flash.display.IGraphicsData];
flash.display.GraphicsPath.prototype = {
	moveTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,1);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,lineTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,2);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,curveTo: function(controlX,controlY,anchorX,anchorY) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,3);
			flash._Vector.Vector_Impl_.push(this.data,anchorX);
			flash._Vector.Vector_Impl_.push(this.data,anchorY);
			flash._Vector.Vector_Impl_.push(this.data,controlX);
			flash._Vector.Vector_Impl_.push(this.data,controlY);
		}
	}
	,__class__: flash.display.GraphicsPath
}
flash.display.GraphicsPathCommand = function() { }
$hxClasses["flash.display.GraphicsPathCommand"] = flash.display.GraphicsPathCommand;
flash.display.GraphicsPathCommand.__name__ = ["flash","display","GraphicsPathCommand"];
flash.display.GraphicsPathWinding = $hxClasses["flash.display.GraphicsPathWinding"] = { __ename__ : true, __constructs__ : ["EVEN_ODD","NON_ZERO"] }
flash.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
flash.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
flash.display.GraphicsPathWinding.EVEN_ODD.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
flash.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
flash.display.GraphicsPathWinding.NON_ZERO.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsSolidFill = function(color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	this.alpha = alpha;
	this.color = color;
	this.__graphicsDataType = flash.display.GraphicsDataType.SOLID;
	this.__graphicsFillType = flash.display.GraphicsFillType.SOLID_FILL;
};
$hxClasses["flash.display.GraphicsSolidFill"] = flash.display.GraphicsSolidFill;
flash.display.GraphicsSolidFill.__name__ = ["flash","display","GraphicsSolidFill"];
flash.display.GraphicsSolidFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsSolidFill.prototype = {
	__class__: flash.display.GraphicsSolidFill
}
flash.display.IGraphicsStroke = function() { }
$hxClasses["flash.display.IGraphicsStroke"] = flash.display.IGraphicsStroke;
flash.display.IGraphicsStroke.__name__ = ["flash","display","IGraphicsStroke"];
flash.display.GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
	if(miterLimit == null) miterLimit = 3;
	if(pixelHinting == null) pixelHinting = false;
	if(thickness == null) thickness = 0.0;
	this.caps = caps != null?caps:null;
	this.fill = fill;
	this.joints = joints != null?joints:null;
	this.miterLimit = miterLimit;
	this.pixelHinting = pixelHinting;
	this.scaleMode = scaleMode != null?scaleMode:null;
	this.thickness = thickness;
	this.__graphicsDataType = flash.display.GraphicsDataType.STROKE;
};
$hxClasses["flash.display.GraphicsStroke"] = flash.display.GraphicsStroke;
flash.display.GraphicsStroke.__name__ = ["flash","display","GraphicsStroke"];
flash.display.GraphicsStroke.__interfaces__ = [flash.display.IGraphicsStroke,flash.display.IGraphicsData];
flash.display.GraphicsStroke.prototype = {
	__class__: flash.display.GraphicsStroke
}
flash.display.GraphicsDataType = $hxClasses["flash.display.GraphicsDataType"] = { __ename__ : true, __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] }
flash.display.GraphicsDataType.STROKE = ["STROKE",0];
flash.display.GraphicsDataType.STROKE.toString = $estr;
flash.display.GraphicsDataType.STROKE.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.SOLID = ["SOLID",1];
flash.display.GraphicsDataType.SOLID.toString = $estr;
flash.display.GraphicsDataType.SOLID.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
flash.display.GraphicsDataType.GRADIENT.toString = $estr;
flash.display.GraphicsDataType.GRADIENT.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.PATH = ["PATH",3];
flash.display.GraphicsDataType.PATH.toString = $estr;
flash.display.GraphicsDataType.PATH.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsFillType = $hxClasses["flash.display.GraphicsFillType"] = { __ename__ : true, __constructs__ : ["SOLID_FILL","GRADIENT_FILL"] }
flash.display.GraphicsFillType.SOLID_FILL = ["SOLID_FILL",0];
flash.display.GraphicsFillType.SOLID_FILL.toString = $estr;
flash.display.GraphicsFillType.SOLID_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.GraphicsFillType.GRADIENT_FILL = ["GRADIENT_FILL",1];
flash.display.GraphicsFillType.GRADIENT_FILL.toString = $estr;
flash.display.GraphicsFillType.GRADIENT_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.InterpolationMethod = $hxClasses["flash.display.InterpolationMethod"] = { __ename__ : true, __constructs__ : ["RGB","LINEAR_RGB"] }
flash.display.InterpolationMethod.RGB = ["RGB",0];
flash.display.InterpolationMethod.RGB.toString = $estr;
flash.display.InterpolationMethod.RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
flash.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
flash.display.InterpolationMethod.LINEAR_RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.JointStyle = $hxClasses["flash.display.JointStyle"] = { __ename__ : true, __constructs__ : ["MITER","ROUND","BEVEL"] }
flash.display.JointStyle.MITER = ["MITER",0];
flash.display.JointStyle.MITER.toString = $estr;
flash.display.JointStyle.MITER.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.ROUND = ["ROUND",1];
flash.display.JointStyle.ROUND.toString = $estr;
flash.display.JointStyle.ROUND.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.BEVEL = ["BEVEL",2];
flash.display.JointStyle.BEVEL.toString = $estr;
flash.display.JointStyle.BEVEL.__enum__ = flash.display.JointStyle;
flash.display.LineScaleMode = $hxClasses["flash.display.LineScaleMode"] = { __ename__ : true, __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] }
flash.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
flash.display.LineScaleMode.HORIZONTAL.toString = $estr;
flash.display.LineScaleMode.HORIZONTAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NONE = ["NONE",1];
flash.display.LineScaleMode.NONE.toString = $estr;
flash.display.LineScaleMode.NONE.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NORMAL = ["NORMAL",2];
flash.display.LineScaleMode.NORMAL.toString = $estr;
flash.display.LineScaleMode.NORMAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
flash.display.LineScaleMode.VERTICAL.toString = $estr;
flash.display.LineScaleMode.VERTICAL.__enum__ = flash.display.LineScaleMode;
flash.display.Loader = function() {
	flash.display.Sprite.call(this);
	this.contentLoaderInfo = flash.display.LoaderInfo.create(this);
};
$hxClasses["flash.display.Loader"] = flash.display.Loader;
flash.display.Loader.__name__ = ["flash","display","Loader"];
flash.display.Loader.__super__ = flash.display.Sprite;
flash.display.Loader.prototype = $extend(flash.display.Sprite.prototype,{
	handleLoad: function(e) {
		e.currentTarget = this;
		this.content.__invalidateBounds();
		this.content.__render(null,null);
		this.contentLoaderInfo.removeEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad));
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.Sprite.prototype.validateBounds.call(this);
			if(this.mImage != null) {
				var r = new flash.geom.Rectangle(0,0,this.mImage.get_width(),this.mImage.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,toString: function() {
		return "[Loader name=" + this.name + " id=" + this.___id + "]";
	}
	,loadBytes: function(buffer) {
		var _g = this;
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			flash.display.BitmapData.loadFromBytes(buffer,null,function(bmd) {
				_g.content = new flash.display.Bitmap(bmd);
				_g.contentLoaderInfo.content = _g.content;
				_g.addChild(_g.content);
				var evt = new flash.events.Event(flash.events.Event.COMPLETE);
				evt.currentTarget = _g;
				_g.contentLoaderInfo.dispatchEvent(evt);
			});
		} catch( e ) {
			console.log("Error " + Std.string(e));
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
		}
	}
	,load: function(request,context) {
		var extension = "";
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var transparent = true;
		this.contentLoaderInfo.url = request.url;
		if(request.contentType == null && request.contentType != "") this.contentLoaderInfo.contentType = (function($this) {
			var $r;
			switch(extension) {
			case "swf":
				$r = "application/x-shockwave-flash";
				break;
			case "jpg":case "jpeg":
				$r = (function($this) {
					var $r;
					transparent = false;
					$r = "image/jpeg";
					return $r;
				}($this));
				break;
			case "png":
				$r = "image/png";
				break;
			case "gif":
				$r = "image/gif";
				break;
			default:
				$r = "application/x-www-form-urlencoded";
			}
			return $r;
		}(this)); else this.contentLoaderInfo.contentType = request.contentType;
		this.mImage = new flash.display.BitmapData(0,0,transparent);
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			this.mImage.__loadFromFile(request.url,this.contentLoaderInfo);
			this.content = new flash.display.Bitmap(this.mImage);
			this.contentLoaderInfo.content = this.content;
			this.addChild(this.content);
		} catch( e ) {
			console.log("Error " + Std.string(e));
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
			return;
		}
		if(this.mShape == null) {
			this.mShape = new flash.display.Shape();
			this.addChild(this.mShape);
		}
	}
	,__class__: flash.display.Loader
});
flash.display.LoaderInfo = function() {
	flash.events.EventDispatcher.call(this);
	this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["flash.display.LoaderInfo"] = flash.display.LoaderInfo;
flash.display.LoaderInfo.__name__ = ["flash","display","LoaderInfo"];
flash.display.LoaderInfo.create = function(ldr) {
	var li = new flash.display.LoaderInfo();
	if(ldr != null) li.loader = ldr; else li.url = "";
	return li;
}
flash.display.LoaderInfo.__super__ = flash.events.EventDispatcher;
flash.display.LoaderInfo.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__class__: flash.display.LoaderInfo
});
flash.display.MovieClip = function() {
	flash.display.Sprite.call(this);
	this.enabled = true;
	this.__currentFrame = 0;
	this.__totalFrames = 0;
	this.loaderInfo = flash.display.LoaderInfo.create(null);
};
$hxClasses["flash.display.MovieClip"] = flash.display.MovieClip;
flash.display.MovieClip.__name__ = ["flash","display","MovieClip"];
flash.display.MovieClip.__super__ = flash.display.Sprite;
flash.display.MovieClip.prototype = $extend(flash.display.Sprite.prototype,{
	get_totalFrames: function() {
		return this.__totalFrames;
	}
	,get_framesLoaded: function() {
		return this.__totalFrames;
	}
	,get_currentFrame: function() {
		return this.__currentFrame;
	}
	,toString: function() {
		return "[MovieClip name=" + this.name + " id=" + this.___id + "]";
	}
	,stop: function() {
	}
	,prevFrame: function() {
	}
	,play: function() {
	}
	,nextFrame: function() {
	}
	,gotoAndStop: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,gotoAndPlay: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,__class__: flash.display.MovieClip
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{get_currentFrame:"get_currentFrame",get_framesLoaded:"get_framesLoaded",get_totalFrames:"get_totalFrames"})
});
flash.display.PixelSnapping = $hxClasses["flash.display.PixelSnapping"] = { __ename__ : true, __constructs__ : ["NEVER","AUTO","ALWAYS"] }
flash.display.PixelSnapping.NEVER = ["NEVER",0];
flash.display.PixelSnapping.NEVER.toString = $estr;
flash.display.PixelSnapping.NEVER.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.AUTO = ["AUTO",1];
flash.display.PixelSnapping.AUTO.toString = $estr;
flash.display.PixelSnapping.AUTO.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
flash.display.PixelSnapping.ALWAYS.toString = $estr;
flash.display.PixelSnapping.ALWAYS.__enum__ = flash.display.PixelSnapping;
flash.display.Shape = function() {
	flash.display.DisplayObject.call(this);
	this.__graphics = new flash.display.Graphics();
};
$hxClasses["flash.display.Shape"] = flash.display.Shape;
flash.display.Shape.__name__ = ["flash","display","Shape"];
flash.display.Shape.__super__ = flash.display.DisplayObject;
flash.display.Shape.prototype = $extend(flash.display.DisplayObject.prototype,{
	get_graphics: function() {
		return this.__graphics;
	}
	,__getObjectUnderPoint: function(point) {
		if(this.parent == null) return null;
		if(this.parent.mouseEnabled && flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point) == this) return this.parent; else return null;
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,toString: function() {
		return "[Shape name=" + this.name + " id=" + this.___id + "]";
	}
	,__class__: flash.display.Shape
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
flash.display.SpreadMethod = $hxClasses["flash.display.SpreadMethod"] = { __ename__ : true, __constructs__ : ["REPEAT","REFLECT","PAD"] }
flash.display.SpreadMethod.REPEAT = ["REPEAT",0];
flash.display.SpreadMethod.REPEAT.toString = $estr;
flash.display.SpreadMethod.REPEAT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.REFLECT = ["REFLECT",1];
flash.display.SpreadMethod.REFLECT.toString = $estr;
flash.display.SpreadMethod.REFLECT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.PAD = ["PAD",2];
flash.display.SpreadMethod.PAD.toString = $estr;
flash.display.SpreadMethod.PAD.__enum__ = flash.display.SpreadMethod;
flash.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["flash.events.MouseEvent"] = flash.events.MouseEvent;
flash.events.MouseEvent.__name__ = ["flash","events","MouseEvent"];
flash.events.MouseEvent.__create = function(type,event,local,target) {
	var __mouseDown = false;
	var delta = 2;
	if(type == flash.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == flash.events.MouseEvent.MOUSE_DOWN) __mouseDown = event.which != null?event.which == 1:event.button != null?event.button == 0:false; else if(type == flash.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) __mouseDown = false; else if(event.button != null) {
				if(event.button == 0) __mouseDown = false; else __mouseDown = false;
			}
		}
	}
	var pseudoEvent = new flash.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,__mouseDown,delta);
	pseudoEvent.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	pseudoEvent.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
}
flash.events.MouseEvent.__super__ = flash.events.Event;
flash.events.MouseEvent.prototype = $extend(flash.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__createSimilar: function(type,related,targ) {
		var result = new flash.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
		if(targ != null) result.target = targ;
		return result;
	}
	,__class__: flash.events.MouseEvent
});
flash.display.Stage = function(width,height) {
	flash.display.DisplayObjectContainer.call(this);
	this.__focusObject = null;
	this.__focusObjectActivated = false;
	this.__windowWidth = width;
	this.__windowHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = flash.display.StageScaleMode.SHOW_ALL;
	this.__stageMatrix = new flash.geom.Matrix();
	this.tabEnabled = true;
	this.set_frameRate(0.0);
	this.set_backgroundColor(16777215);
	this.name = "Stage";
	this.loaderInfo = flash.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.__windowWidth);
	this.loaderInfo.parameters.height = Std.string(this.__windowHeight);
	this.__pointInPathMode = flash.display.Graphics.__detectIsPointInPathMode();
	this.__mouseOverObjects = [];
	this.set_showDefaultContextMenu(true);
	this.__touchInfo = [];
	this.__uIEventsQueue = new Array(1000);
	this.__uIEventsQueueIndex = 0;
};
$hxClasses["flash.display.Stage"] = flash.display.Stage;
flash.display.Stage.__name__ = ["flash","display","Stage"];
flash.display.Stage.getOrientation = function() {
	var rotation = window.orientation;
	var orientation = flash.display.Stage.OrientationPortrait;
	switch(rotation) {
	case -90:
		orientation = flash.display.Stage.OrientationLandscapeLeft;
		break;
	case 180:
		orientation = flash.display.Stage.OrientationPortraitUpsideDown;
		break;
	case 90:
		orientation = flash.display.Stage.OrientationLandscapeRight;
		break;
	default:
		orientation = flash.display.Stage.OrientationPortrait;
	}
	return orientation;
}
flash.display.Stage.__super__ = flash.display.DisplayObjectContainer;
flash.display.Stage.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	get_stageWidth: function() {
		return this.__windowWidth;
	}
	,get_stageHeight: function() {
		return this.__windowHeight;
	}
	,get_stage: function() {
		return flash.Lib.__getStage();
	}
	,set_showDefaultContextMenu: function(showDefaultContextMenu) {
		if(showDefaultContextMenu != this.__showDefaultContextMenu && this.__showDefaultContextMenu != null) {
			if(!showDefaultContextMenu) flash.Lib.__disableRightClick(); else flash.Lib.__enableRightClick();
		}
		this.__showDefaultContextMenu = showDefaultContextMenu;
		return showDefaultContextMenu;
	}
	,get_showDefaultContextMenu: function() {
		return this.__showDefaultContextMenu;
	}
	,set_quality: function(inQuality) {
		return this.quality = inQuality;
	}
	,get_quality: function() {
		return this.quality != null?this.quality:flash.display.StageQuality.BEST;
	}
	,get_mouseY: function() {
		return this._mouseY;
	}
	,get_mouseX: function() {
		return this._mouseX;
	}
	,get_fullScreenHeight: function() {
		return js.Browser.window.innerHeight;
	}
	,get_fullScreenWidth: function() {
		return js.Browser.window.innerWidth;
	}
	,set_frameRate: function(speed) {
		if(speed == 0) {
			var window = js.Browser.window;
			var __requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			if(__requestAnimationFrame == null) speed = 60;
		}
		if(speed != 0) this.__interval = 1000.0 / speed | 0;
		this.__frameRate = speed;
		this.__updateNextWake();
		return speed;
	}
	,get_frameRate: function() {
		return this.__frameRate;
	}
	,set_focus: function(inObj) {
		this.__onFocus(inObj);
		return this.__focusObject;
	}
	,get_focus: function() {
		return this.__focusObject;
	}
	,set_displayState: function(displayState) {
		if(displayState != this.displayState && this.displayState != null) {
			switch( (displayState)[1] ) {
			case 0:
				flash.Lib.__disableFullScreen();
				break;
			case 1:
			case 2:
				flash.Lib.__enableFullScreen();
				break;
			}
		}
		this.displayState = displayState;
		return displayState;
	}
	,get_displayState: function() {
		return this.displayState;
	}
	,set_color: function(col) {
		return this.__backgroundColour = col;
	}
	,get_color: function() {
		return this.__backgroundColour;
	}
	,set_backgroundColor: function(col) {
		return this.__backgroundColour = col;
	}
	,get_backgroundColor: function() {
		return this.__backgroundColour;
	}
	,__onTouch: function(event,touch,type,touchInfo,isPrimaryTouchPoint) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(touch.pageX - rect.left,touch.pageY - rect.top);
		var obj = this.__getObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.TouchEvent.__create(type,event,touch,local,obj);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.__checkInOuts(evt,stack,touchInfo);
			obj.__fireEvent(evt);
			var mouseType = (function($this) {
				var $r;
				switch(type) {
				case "touchBegin":
					$r = flash.events.MouseEvent.MOUSE_DOWN;
					break;
				case "touchEnd":
					$r = flash.events.MouseEvent.MOUSE_UP;
					break;
				default:
					$r = (function($this) {
						var $r;
						if($this.__dragObject != null) $this.__drag(point);
						$r = flash.events.MouseEvent.MOUSE_MOVE;
						return $r;
					}($this));
				}
				return $r;
			}(this));
			obj.__fireEvent(flash.events.MouseEvent.__create(mouseType,evt,local,obj));
		} else {
			var evt = flash.events.TouchEvent.__create(type,event,touch,point,null);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.__checkInOuts(evt,stack,touchInfo);
		}
	}
	,__onResize: function(inW,inH) {
		this.__windowWidth = inW;
		this.__windowHeight = inH;
		var event = new flash.events.Event(flash.events.Event.RESIZE);
		event.target = this;
		this.__broadcast(event);
	}
	,__onMouse: function(event,type) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(event.clientX - rect.left,event.clientY - rect.top);
		if(this.__dragObject != null) this.__drag(point);
		var obj = this.__getObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.MouseEvent.__create(type,event,local,obj);
			this.__checkInOuts(evt,stack);
			if(type == flash.events.MouseEvent.MOUSE_DOWN) this.__onFocus(stack[stack.length - 1]);
			obj.__fireEvent(evt);
		} else {
			var evt = flash.events.MouseEvent.__create(type,event,point,null);
			this.__checkInOuts(evt,stack);
		}
	}
	,__onFocus: function(target) {
		if(target != this.__focusObject) {
			if(this.__focusObject != null) this.__focusObject.__fireEvent(new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_OUT,true,false,this.__focusObject,false,0));
			target.__fireEvent(new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_IN,true,false,target,false,0));
			this.__focusObject = target;
		}
	}
	,__onKey: function(code,pressed,inChar,ctrl,alt,shift,keyLocation) {
		var stack = new Array();
		if(this.__focusObject == null) this.__getInteractiveObjectStack(stack); else this.__focusObject.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			var obj = stack[0];
			var evt = new flash.events.KeyboardEvent(pressed?flash.events.KeyboardEvent.KEY_DOWN:flash.events.KeyboardEvent.KEY_UP,true,false,inChar,code,keyLocation,ctrl,alt,shift);
			obj.__fireEvent(evt);
		}
	}
	,__handleOrientationChange: function() {
	}
	,__handleAccelerometer: function(evt) {
		flash.display.Stage.__acceleration.x = evt.accelerationIncludingGravity.x;
		flash.display.Stage.__acceleration.y = evt.accelerationIncludingGravity.y;
		flash.display.Stage.__acceleration.z = evt.accelerationIncludingGravity.z;
	}
	,__updateNextWake: function() {
		if(this.__frameRate == 0) {
			var __requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			__requestAnimationFrame($bind(this,this.__updateNextWake));
			this.__stageRender();
		} else {
			js.Browser.window.clearInterval(this.__timer);
			this.__timer = js.Browser.window.setInterval($bind(this,this.__stageRender),this.__interval);
		}
	}
	,__stopDrag: function(sprite) {
		this.__dragBounds = null;
		this.__dragObject = null;
	}
	,__startDrag: function(sprite,lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		this.__dragBounds = bounds == null?null:bounds.clone();
		this.__dragObject = sprite;
		if(this.__dragObject != null) {
			var mouse = new flash.geom.Point(this._mouseX,this._mouseY);
			var p = this.__dragObject.parent;
			if(p != null) mouse = p.globalToLocal(mouse);
			if(lockCenter) {
				var bounds1 = sprite.getBounds(this);
				this.__dragOffsetX = this.__dragObject.get_x() - (bounds1.width / 2 + bounds1.x);
				this.__dragOffsetY = this.__dragObject.get_y() - (bounds1.height / 2 + bounds1.y);
			} else {
				this.__dragOffsetX = this.__dragObject.get_x() - mouse.x;
				this.__dragOffsetY = this.__dragObject.get_y() - mouse.y;
			}
		}
	}
	,__stageRender: function(_) {
		if(!this.__stageActive) {
			this.__onResize(this.__windowWidth,this.__windowHeight);
			var event = new flash.events.Event(flash.events.Event.ACTIVATE);
			event.target = this;
			this.__broadcast(event);
			this.__stageActive = true;
		}
		var _g1 = 0, _g = this.__uIEventsQueueIndex;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__uIEventsQueue[i] != null) this.__processStageEvent(this.__uIEventsQueue[i]);
		}
		this.__uIEventsQueueIndex = 0;
		var event = new flash.events.Event(flash.events.Event.ENTER_FRAME);
		this.__broadcast(event);
		if(this.__invalid) {
			var event1 = new flash.events.Event(flash.events.Event.RENDER);
			this.__broadcast(event1);
		}
		this.__renderAll();
	}
	,__renderToCanvas: function(canvas) {
		canvas.width = canvas.width;
		this.__render(canvas);
	}
	,__renderAll: function() {
		this.__render(null,null);
	}
	,__queueStageEvent: function(evt) {
		this.__uIEventsQueue[this.__uIEventsQueueIndex++] = evt;
	}
	,__processStageEvent: function(evt) {
		evt.stopPropagation();
		switch(evt.type) {
		case "resize":
			this.__onResize(flash.Lib.__getWidth(),flash.Lib.__getHeight());
			break;
		case "focus":
			this.__onFocus(this);
			if(!this.__focusObjectActivated) {
				this.__focusObjectActivated = true;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.ACTIVATE));
			}
			break;
		case "blur":
			if(this.__focusObjectActivated) {
				this.__focusObjectActivated = false;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.DEACTIVATE));
			}
			break;
		case "mousemove":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_MOVE);
			break;
		case "mousedown":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_DOWN);
			break;
		case "mouseup":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_UP);
			break;
		case "click":
			this.__onMouse(evt,flash.events.MouseEvent.CLICK);
			break;
		case "mousewheel":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_WHEEL);
			break;
		case "dblclick":
			this.__onMouse(evt,flash.events.MouseEvent.DOUBLE_CLICK);
			break;
		case "keydown":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = flash.ui.Keyboard.__convertMozillaCode(keyCode);
			this.__onKey(keyCode,true,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "keyup":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = flash.ui.Keyboard.__convertMozillaCode(keyCode);
			this.__onKey(keyCode,false,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "touchstart":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = new flash.display._Stage.TouchInfo();
			this.__touchInfo[evt1.changedTouches[0].identifier] = touchInfo;
			this.__onTouch(evt1,evt1.changedTouches[0],"touchBegin",touchInfo,false);
			break;
		case "touchmove":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = this.__touchInfo[evt1.changedTouches[0].identifier];
			this.__onTouch(evt1,evt1.changedTouches[0],"touchMove",touchInfo,true);
			break;
		case "touchend":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = this.__touchInfo[evt1.changedTouches[0].identifier];
			this.__onTouch(evt1,evt1.changedTouches[0],"touchEnd",touchInfo,true);
			this.__touchInfo[evt1.changedTouches[0].identifier] = null;
			break;
		case "devicemotion":
			var evt1 = evt;
			this.__handleAccelerometer(evt1);
			break;
		case "orientationchange":
			this.__handleOrientationChange();
			break;
		default:
		}
	}
	,__isOnStage: function() {
		return true;
	}
	,__drag: function(point) {
		var p = this.__dragObject.parent;
		if(p != null) point = p.globalToLocal(point);
		var x = point.x + this.__dragOffsetX;
		var y = point.y + this.__dragOffsetY;
		if(this.__dragBounds != null) {
			if(x < this.__dragBounds.x) x = this.__dragBounds.x; else if(x > this.__dragBounds.get_right()) x = this.__dragBounds.get_right();
			if(y < this.__dragBounds.y) y = this.__dragBounds.y; else if(y > this.__dragBounds.get_bottom()) y = this.__dragBounds.get_bottom();
		}
		this.__dragObject.set_x(x);
		this.__dragObject.set_y(y);
	}
	,__checkInOuts: function(event,stack,touchInfo) {
		var prev = touchInfo == null?this.__mouseOverObjects:touchInfo.touchOverObjects;
		var changeEvents = touchInfo == null?flash.display.Stage.__mouseChanges:flash.display.Stage.__touchChanges;
		var new_n = stack.length;
		var new_obj = new_n > 0?stack[new_n - 1]:null;
		var old_n = prev.length;
		var old_obj = old_n > 0?prev[old_n - 1]:null;
		if(new_obj != old_obj) {
			if(old_obj != null) old_obj.__fireEvent(event.__createSimilar(changeEvents[0],new_obj,old_obj));
			if(new_obj != null) new_obj.__fireEvent(event.__createSimilar(changeEvents[1],old_obj,new_obj));
			var common = 0;
			while(common < new_n && common < old_n && stack[common] == prev[common]) common++;
			var rollOut = event.__createSimilar(changeEvents[2],new_obj,old_obj);
			var i = old_n - 1;
			while(i >= common) {
				prev[i].dispatchEvent(rollOut);
				i--;
			}
			var rollOver = event.__createSimilar(changeEvents[3],old_obj);
			var i1 = new_n - 1;
			while(i1 >= common) {
				stack[i1].dispatchEvent(rollOver);
				i1--;
			}
			if(touchInfo == null) this.__mouseOverObjects = stack; else touchInfo.touchOverObjects = stack;
		}
	}
	,toString: function() {
		return "[Stage id=" + this.___id + "]";
	}
	,invalidate: function() {
		this.__invalid = true;
	}
	,__class__: flash.display.Stage
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{set_backgroundColor:"set_backgroundColor",get_backgroundColor:"get_backgroundColor",set_color:"set_color",get_color:"get_color",set_displayState:"set_displayState",get_displayState:"get_displayState",set_focus:"set_focus",get_focus:"get_focus",set_frameRate:"set_frameRate",get_frameRate:"get_frameRate",get_fullScreenHeight:"get_fullScreenHeight",get_fullScreenWidth:"get_fullScreenWidth",set_quality:"set_quality",get_quality:"get_quality",set_showDefaultContextMenu:"set_showDefaultContextMenu",get_showDefaultContextMenu:"get_showDefaultContextMenu",get_stageHeight:"get_stageHeight",get_stageWidth:"get_stageWidth"})
});
flash.display._Stage = {}
flash.display._Stage.TouchInfo = function() {
	this.touchOverObjects = [];
};
$hxClasses["flash.display._Stage.TouchInfo"] = flash.display._Stage.TouchInfo;
flash.display._Stage.TouchInfo.__name__ = ["flash","display","_Stage","TouchInfo"];
flash.display._Stage.TouchInfo.prototype = {
	__class__: flash.display._Stage.TouchInfo
}
flash.display.StageAlign = $hxClasses["flash.display.StageAlign"] = { __ename__ : true, __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] }
flash.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
flash.display.StageAlign.TOP_RIGHT.toString = $estr;
flash.display.StageAlign.TOP_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
flash.display.StageAlign.TOP_LEFT.toString = $estr;
flash.display.StageAlign.TOP_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP = ["TOP",2];
flash.display.StageAlign.TOP.toString = $estr;
flash.display.StageAlign.TOP.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.RIGHT = ["RIGHT",3];
flash.display.StageAlign.RIGHT.toString = $estr;
flash.display.StageAlign.RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.LEFT = ["LEFT",4];
flash.display.StageAlign.LEFT.toString = $estr;
flash.display.StageAlign.LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
flash.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
flash.display.StageAlign.BOTTOM_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
flash.display.StageAlign.BOTTOM_LEFT.toString = $estr;
flash.display.StageAlign.BOTTOM_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM = ["BOTTOM",7];
flash.display.StageAlign.BOTTOM.toString = $estr;
flash.display.StageAlign.BOTTOM.__enum__ = flash.display.StageAlign;
flash.display.StageDisplayState = $hxClasses["flash.display.StageDisplayState"] = { __ename__ : true, __constructs__ : ["NORMAL","FULL_SCREEN","FULL_SCREEN_INTERACTIVE"] }
flash.display.StageDisplayState.NORMAL = ["NORMAL",0];
flash.display.StageDisplayState.NORMAL.toString = $estr;
flash.display.StageDisplayState.NORMAL.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",1];
flash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",2];
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = flash.display.StageDisplayState;
flash.display.StageQuality = function() { }
$hxClasses["flash.display.StageQuality"] = flash.display.StageQuality;
flash.display.StageQuality.__name__ = ["flash","display","StageQuality"];
flash.display.StageScaleMode = $hxClasses["flash.display.StageScaleMode"] = { __ename__ : true, __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] }
flash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
flash.display.StageScaleMode.SHOW_ALL.toString = $estr;
flash.display.StageScaleMode.SHOW_ALL.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
flash.display.StageScaleMode.NO_SCALE.toString = $estr;
flash.display.StageScaleMode.NO_SCALE.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
flash.display.StageScaleMode.NO_BORDER.toString = $estr;
flash.display.StageScaleMode.NO_BORDER.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
flash.display.StageScaleMode.EXACT_FIT.toString = $estr;
flash.display.StageScaleMode.EXACT_FIT.__enum__ = flash.display.StageScaleMode;
flash.errors = {}
flash.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["flash.errors.Error"] = flash.errors.Error;
flash.errors.Error.__name__ = ["flash","errors","Error"];
flash.errors.Error.prototype = {
	toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,getStackTrace: function() {
		return haxe.CallStack.toString(haxe.CallStack.exceptionStack());
	}
	,__class__: flash.errors.Error
}
flash.errors.IOError = function(message) {
	if(message == null) message = "";
	flash.errors.Error.call(this,message);
};
$hxClasses["flash.errors.IOError"] = flash.errors.IOError;
flash.errors.IOError.__name__ = ["flash","errors","IOError"];
flash.errors.IOError.__super__ = flash.errors.Error;
flash.errors.IOError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.IOError
});
flash.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.TextEvent"] = flash.events.TextEvent;
flash.events.TextEvent.__name__ = ["flash","events","TextEvent"];
flash.events.TextEvent.__super__ = flash.events.Event;
flash.events.TextEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.TextEvent
});
flash.events.ErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	flash.events.TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
	this.errorID = id;
};
$hxClasses["flash.events.ErrorEvent"] = flash.events.ErrorEvent;
flash.events.ErrorEvent.__name__ = ["flash","events","ErrorEvent"];
flash.events.ErrorEvent.__super__ = flash.events.TextEvent;
flash.events.ErrorEvent.prototype = $extend(flash.events.TextEvent.prototype,{
	__class__: flash.events.ErrorEvent
});
flash.events.Listener = function(inListener,inUseCapture,inPriority) {
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = flash.events.Listener.sIDs++;
};
$hxClasses["flash.events.Listener"] = flash.events.Listener;
flash.events.Listener.__name__ = ["flash","events","Listener"];
flash.events.Listener.prototype = {
	Is: function(inListener,inCapture) {
		return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
	}
	,dispatchEvent: function(event) {
		this.mListner(event);
	}
	,__class__: flash.events.Listener
}
flash.events.EventPhase = function() { }
$hxClasses["flash.events.EventPhase"] = flash.events.EventPhase;
flash.events.EventPhase.__name__ = ["flash","events","EventPhase"];
flash.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	if(inKeyCode == null) inKeyCode = 0;
	if(inShiftKey == null) inShiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.target = inObject;
};
$hxClasses["flash.events.FocusEvent"] = flash.events.FocusEvent;
flash.events.FocusEvent.__name__ = ["flash","events","FocusEvent"];
flash.events.FocusEvent.__super__ = flash.events.Event;
flash.events.FocusEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.FocusEvent
});
flash.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.HTTPStatusEvent"] = flash.events.HTTPStatusEvent;
flash.events.HTTPStatusEvent.__name__ = ["flash","events","HTTPStatusEvent"];
flash.events.HTTPStatusEvent.__super__ = flash.events.Event;
flash.events.HTTPStatusEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.HTTPStatusEvent
});
flash.events.IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if(inText == null) inText = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
};
$hxClasses["flash.events.IOErrorEvent"] = flash.events.IOErrorEvent;
flash.events.IOErrorEvent.__name__ = ["flash","events","IOErrorEvent"];
flash.events.IOErrorEvent.__super__ = flash.events.Event;
flash.events.IOErrorEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.IOErrorEvent
});
flash.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(inShiftKey == null) inShiftKey = false;
	if(inAltKey == null) inAltKey = false;
	if(inCtrlKey == null) inCtrlKey = false;
	if(inKeyLocation == null) inKeyLocation = 0;
	if(inKeyCode == null) inKeyCode = 0;
	if(inCharCode == null) inCharCode = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.altKey = inAltKey == null?false:inAltKey;
	this.charCode = inCharCode == null?0:inCharCode;
	this.ctrlKey = inCtrlKey == null?false:inCtrlKey;
	this.commandKey = commandKeyValue;
	this.controlKey = controlKeyValue;
	this.keyCode = inKeyCode;
	this.keyLocation = inKeyLocation == null?0:inKeyLocation;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
};
$hxClasses["flash.events.KeyboardEvent"] = flash.events.KeyboardEvent;
flash.events.KeyboardEvent.__name__ = ["flash","events","KeyboardEvent"];
flash.events.KeyboardEvent.__super__ = flash.events.Event;
flash.events.KeyboardEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.KeyboardEvent
});
flash.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["flash.events.ProgressEvent"] = flash.events.ProgressEvent;
flash.events.ProgressEvent.__name__ = ["flash","events","ProgressEvent"];
flash.events.ProgressEvent.__super__ = flash.events.Event;
flash.events.ProgressEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.ProgressEvent
});
flash.events.SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.SecurityErrorEvent"] = flash.events.SecurityErrorEvent;
flash.events.SecurityErrorEvent.__name__ = ["flash","events","SecurityErrorEvent"];
flash.events.SecurityErrorEvent.__super__ = flash.events.ErrorEvent;
flash.events.SecurityErrorEvent.prototype = $extend(flash.events.ErrorEvent.prototype,{
	__class__: flash.events.SecurityErrorEvent
});
flash.events.TimerEvent = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.TimerEvent"] = flash.events.TimerEvent;
flash.events.TimerEvent.__name__ = ["flash","events","TimerEvent"];
flash.events.TimerEvent.__super__ = flash.events.Event;
flash.events.TimerEvent.prototype = $extend(flash.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__class__: flash.events.TimerEvent
});
flash.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["flash.events.TouchEvent"] = flash.events.TouchEvent;
flash.events.TouchEvent.__name__ = ["flash","events","TouchEvent"];
flash.events.TouchEvent.__create = function(type,event,touch,local,target) {
	var evt = new flash.events.TouchEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	evt.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	evt.target = target;
	return evt;
}
flash.events.TouchEvent.__super__ = flash.events.Event;
flash.events.TouchEvent.prototype = $extend(flash.events.Event.prototype,{
	__createSimilar: function(type,related,targ) {
		var result = new flash.events.TouchEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey);
		result.touchPointID = this.touchPointID;
		result.isPrimaryTouchPoint = this.isPrimaryTouchPoint;
		if(targ != null) result.target = targ;
		return result;
	}
	,__class__: flash.events.TouchEvent
});
flash.filters = {}
flash.filters.BitmapFilter = function(inType) {
	this._mType = inType;
};
$hxClasses["flash.filters.BitmapFilter"] = flash.filters.BitmapFilter;
flash.filters.BitmapFilter.__name__ = ["flash","filters","BitmapFilter"];
flash.filters.BitmapFilter.prototype = {
	__applyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
	}
	,__preFilter: function(surface) {
	}
	,clone: function() {
		return new flash.filters.BitmapFilter(this._mType);
	}
	,__class__: flash.filters.BitmapFilter
}
flash.filters.DropShadowFilter = function(in_distance,in_angle,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,in_hideObject) {
	if(in_hideObject == null) in_hideObject = false;
	if(in_knockout == null) in_knockout = false;
	if(in_inner == null) in_inner = false;
	if(in_quality == null) in_quality = 1;
	if(in_strength == null) in_strength = 1.0;
	if(in_blurY == null) in_blurY = 4.0;
	if(in_blurX == null) in_blurX = 4.0;
	if(in_alpha == null) in_alpha = 1.0;
	if(in_color == null) in_color = 0;
	if(in_angle == null) in_angle = 45.0;
	if(in_distance == null) in_distance = 4.0;
	flash.filters.BitmapFilter.call(this,"DropShadowFilter");
	this.distance = in_distance;
	this.angle = in_angle;
	this.color = in_color;
	this.alpha = in_alpha;
	this.blurX = in_blurX;
	this.blurY = in_blurX;
	this.strength = in_strength;
	this.quality = in_quality;
	this.inner = in_inner;
	this.knockout = in_knockout;
	this.hideObject = in_hideObject;
	this.___cached = false;
};
$hxClasses["flash.filters.DropShadowFilter"] = flash.filters.DropShadowFilter;
flash.filters.DropShadowFilter.__name__ = ["flash","filters","DropShadowFilter"];
flash.filters.DropShadowFilter.__super__ = flash.filters.BitmapFilter;
flash.filters.DropShadowFilter.prototype = $extend(flash.filters.BitmapFilter.prototype,{
	__applyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
		if(!this.___cached || refreshCache) {
			var distanceX = this.distance * Math.sin(2 * Math.PI * this.angle / 360.0);
			var distanceY = this.distance * Math.cos(2 * Math.PI * this.angle / 360.0);
			var blurRadius = Math.max(this.blurX,this.blurY);
			var context = surface.getContext("2d");
			context.shadowOffsetX = distanceX;
			context.shadowOffsetY = distanceY;
			context.shadowBlur = blurRadius;
			context.shadowColor = "rgba(" + (this.color >> 16 & 255) + "," + (this.color >> 8 & 255) + "," + (this.color & 255) + "," + this.alpha + ")";
			this.___cached = true;
		}
	}
	,clone: function() {
		return new flash.filters.DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout,this.hideObject);
	}
	,__class__: flash.filters.DropShadowFilter
});
flash.geom = {}
flash.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) {
	if(inAlphaOffset == null) inAlphaOffset = 0;
	if(inBlueOffset == null) inBlueOffset = 0;
	if(inGreenOffset == null) inGreenOffset = 0;
	if(inRedOffset == null) inRedOffset = 0;
	if(inAlphaMultiplier == null) inAlphaMultiplier = 1;
	if(inBlueMultiplier == null) inBlueMultiplier = 1;
	if(inGreenMultiplier == null) inGreenMultiplier = 1;
	if(inRedMultiplier == null) inRedMultiplier = 1;
	this.redMultiplier = inRedMultiplier == null?1.0:inRedMultiplier;
	this.greenMultiplier = inGreenMultiplier == null?1.0:inGreenMultiplier;
	this.blueMultiplier = inBlueMultiplier == null?1.0:inBlueMultiplier;
	this.alphaMultiplier = inAlphaMultiplier == null?1.0:inAlphaMultiplier;
	this.redOffset = inRedOffset == null?0.0:inRedOffset;
	this.greenOffset = inGreenOffset == null?0.0:inGreenOffset;
	this.blueOffset = inBlueOffset == null?0.0:inBlueOffset;
	this.alphaOffset = inAlphaOffset == null?0.0:inAlphaOffset;
};
$hxClasses["flash.geom.ColorTransform"] = flash.geom.ColorTransform;
flash.geom.ColorTransform.__name__ = ["flash","geom","ColorTransform"];
flash.geom.ColorTransform.prototype = {
	set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.get_color();
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,concat: function(second) {
		this.redMultiplier += second.redMultiplier;
		this.greenMultiplier += second.greenMultiplier;
		this.blueMultiplier += second.blueMultiplier;
		this.alphaMultiplier += second.alphaMultiplier;
	}
	,__class__: flash.geom.ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
}
flash.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) {
	if(in_ty == null) in_ty = 0;
	if(in_tx == null) in_tx = 0;
	if(in_d == null) in_d = 1;
	if(in_c == null) in_c = 0;
	if(in_b == null) in_b = 0;
	if(in_a == null) in_a = 1;
	this.a = in_a;
	this.b = in_b;
	this.c = in_c;
	this.d = in_d;
	this.set_tx(in_tx);
	this.set_ty(in_ty);
	this._sx = 1.0;
	this._sy = 1.0;
};
$hxClasses["flash.geom.Matrix"] = flash.geom.Matrix;
flash.geom.Matrix.__name__ = ["flash","geom","Matrix"];
flash.geom.Matrix.prototype = {
	set_ty: function(inValue) {
		this.ty = inValue;
		return this.ty;
	}
	,set_tx: function(inValue) {
		this.tx = inValue;
		return this.tx;
	}
	,__translateTransformed: function(inPos) {
		this.set_tx(inPos.x * this.a + inPos.y * this.c + this.tx);
		this.set_ty(inPos.x * this.b + inPos.y * this.d + this.ty);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,__transformY: function(inPos) {
		return inPos.x * this.b + inPos.y * this.d + this.ty;
	}
	,__transformX: function(inPos) {
		return inPos.x * this.a + inPos.y * this.c + this.tx;
	}
	,translate: function(inDX,inDY) {
		var m = new flash.geom.Matrix();
		m.set_tx(inDX);
		m.set_ty(inDY);
		this.concat(m);
	}
	,transformPoint: function(inPos) {
		return new flash.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,toMozString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	}
	,to3DString: function() {
		return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", " + "0, 1" + ")";
	}
	,setRotation: function(inTheta,inScale) {
		if(inScale == null) inScale = 1;
		var scale = inScale;
		this.a = Math.cos(inTheta) * scale;
		this.c = Math.sin(inTheta) * scale;
		this.b = -this.c;
		this.d = this.a;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,scale: function(inSX,inSY) {
		this._sx = inSX;
		this._sy = inSY;
		this.a *= inSX;
		this.b *= inSY;
		this.c *= inSX;
		this.d *= inSY;
		var _g = this;
		_g.set_tx(_g.tx * inSX);
		var _g = this;
		_g.set_ty(_g.ty * inSY);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,rotate: function(inTheta) {
		var cos = Math.cos(inTheta);
		var sin = Math.sin(inTheta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.set_ty(this.tx * sin + this.ty * cos);
		this.set_tx(tx1);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,mult: function(m) {
		var result = this.clone();
		result.concat(m);
		return result;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.set_tx(-this.tx);
			this.set_ty(-this.ty);
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.set_ty(-this.b * this.tx - this.d * this.ty);
			this.set_tx(tx1);
		}
		this._sx /= this._sx;
		this._sy /= this._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
		return this;
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.set_tx(0);
		this.set_ty(0);
		this._sx = 1.0;
		this._sy = 1.0;
	}
	,createGradientBox: function(in_width,in_height,rotation,in_tx,in_ty) {
		if(in_ty == null) in_ty = 0;
		if(in_tx == null) in_tx = 0;
		if(rotation == null) rotation = 0;
		this.a = in_width / 1638.4;
		this.d = in_height / 1638.4;
		if(rotation != null && rotation != 0.0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.set_tx(in_tx != null?in_tx + in_width / 2:in_width / 2);
		this.set_ty(in_ty != null?in_ty + in_height / 2:in_height / 2);
	}
	,copy: function(m) {
		this.a = m.a;
		this.b = m.b;
		this.c = m.c;
		this.d = m.d;
		this.set_tx(m.tx);
		this.set_ty(m.ty);
		this._sx = m._sx;
		this._sy = m._sy;
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.set_ty(this.tx * m.b + this.ty * m.d + m.ty);
		this.set_tx(tx1);
		this._sx *= m._sx;
		this._sy *= m._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,clone: function() {
		var m = new flash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		m._sx = this._sx;
		m._sy = this._sy;
		return m;
	}
	,cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,__class__: flash.geom.Matrix
	,__properties__: {set_tx:"set_tx",set_ty:"set_ty"}
}
flash.geom.Point = function(inX,inY) {
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
};
$hxClasses["flash.geom.Point"] = flash.geom.Point;
flash.geom.Point.__name__ = ["flash","geom","Point"];
flash.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
flash.geom.Point.interpolate = function(pt1,pt2,f) {
	return new flash.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
}
flash.geom.Point.polar = function(len,angle) {
	return new flash.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
}
flash.geom.Point.prototype = {
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,subtract: function(v) {
		return new flash.geom.Point(this.x - v.x,this.y - v.y);
	}
	,setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) return; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,equals: function(toCompare) {
		return toCompare.x == this.x && toCompare.y == this.y;
	}
	,clone: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,add: function(v) {
		return new flash.geom.Point(v.x + this.x,v.y + this.y);
	}
	,__class__: flash.geom.Point
	,__properties__: {get_length:"get_length"}
}
flash.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if(inHeight == null) inHeight = 0;
	if(inWidth == null) inWidth = 0;
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
	this.width = inWidth;
	this.height = inHeight;
};
$hxClasses["flash.geom.Rectangle"] = flash.geom.Rectangle;
flash.geom.Rectangle.__name__ = ["flash","geom","Rectangle"];
flash.geom.Rectangle.prototype = {
	set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,get_topLeft: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_top: function() {
		return this.y;
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_size: function() {
		return new flash.geom.Point(this.width,this.height);
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_left: function() {
		return this.x;
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_bottomRight: function() {
		return new flash.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,union: function(toUnion) {
		var x0 = this.x > toUnion.x?toUnion.x:this.x;
		var x1 = this.get_right() < toUnion.get_right()?toUnion.get_right():this.get_right();
		var y0 = this.y > toUnion.y?toUnion.y:this.y;
		var y1 = this.get_bottom() < toUnion.get_bottom()?toUnion.get_bottom():this.get_bottom();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new flash.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,isEmpty: function() {
		return this.width <= 0 || this.height <= 0;
	}
	,intersects: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return false;
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		return y1 > y0;
	}
	,intersection: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return new flash.geom.Rectangle();
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		if(y1 <= y0) return new flash.geom.Rectangle();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	}
	,extendBounds: function(r) {
		var dx = this.x - r.x;
		if(dx > 0) {
			this.x -= dx;
			this.width += dx;
		}
		var dy = this.y - r.y;
		if(dy > 0) {
			this.y -= dy;
			this.height += dy;
		}
		if(r.get_right() > this.get_right()) this.set_right(r.get_right());
		if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
	}
	,equals: function(toCompare) {
		return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,containsRect: function(rect) {
		if(rect.width <= 0 || rect.height <= 0) return rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right() && rect.get_bottom() < this.get_bottom(); else return rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right() && rect.get_bottom() <= this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,contains: function(inX,inY) {
		return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
	}
	,clone: function() {
		return new flash.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,__class__: flash.geom.Rectangle
	,__properties__: {set_bottom:"set_bottom",get_bottom:"get_bottom",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_left:"set_left",get_left:"get_left",set_right:"set_right",get_right:"get_right",set_size:"set_size",get_size:"get_size",set_top:"set_top",get_top:"get_top",set_topLeft:"set_topLeft",get_topLeft:"get_topLeft"}
}
flash.geom.Transform = function(displayObject) {
	if(displayObject == null) throw "Cannot create Transform with no DisplayObject.";
	this._displayObject = displayObject;
	this._matrix = new flash.geom.Matrix();
	this._fullMatrix = new flash.geom.Matrix();
	this.set_colorTransform(new flash.geom.ColorTransform());
};
$hxClasses["flash.geom.Transform"] = flash.geom.Transform;
flash.geom.Transform.__name__ = ["flash","geom","Transform"];
flash.geom.Transform.prototype = {
	get_pixelBounds: function() {
		return this._displayObject.getBounds(null);
	}
	,set_matrix: function(inValue) {
		this._matrix.copy(inValue);
		this._displayObject.__matrixOverridden();
		return this._matrix;
	}
	,get_matrix: function() {
		return this._matrix.clone();
	}
	,get_concatenatedMatrix: function() {
		return this.__getFullMatrix(this._matrix);
	}
	,set_colorTransform: function(inValue) {
		this.colorTransform = inValue;
		return inValue;
	}
	,__setMatrix: function(inValue) {
		this._matrix.copy(inValue);
	}
	,__setFullMatrix: function(inValue) {
		this._fullMatrix.copy(inValue);
		return this._fullMatrix;
	}
	,__getFullMatrix: function(localMatrix) {
		var m;
		if(localMatrix != null) m = localMatrix.mult(this._fullMatrix); else m = this._fullMatrix.clone();
		return m;
	}
	,__class__: flash.geom.Transform
	,__properties__: {set_colorTransform:"set_colorTransform",get_concatenatedMatrix:"get_concatenatedMatrix",set_matrix:"set_matrix",get_matrix:"get_matrix",get_pixelBounds:"get_pixelBounds"}
}
flash.media = {}
flash.media.Sound = function(stream,context) {
	flash.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	this.__soundChannels = new haxe.ds.IntMap();
	this.__soundIdx = 0;
	if(stream != null) this.load(stream,context);
};
$hxClasses["flash.media.Sound"] = flash.media.Sound;
flash.media.Sound.__name__ = ["flash","media","Sound"];
flash.media.Sound.__canPlayMime = function(mime) {
	var audio = js.Browser.document.createElement("audio");
	var playable = function(ok) {
		if(ok != "" && ok != "no") return true; else return false;
	};
	return playable(audio.canPlayType(mime,null));
}
flash.media.Sound.__canPlayType = function(extension) {
	var mime = flash.media.Sound.__mimeForExtension(extension);
	if(mime == null) return false;
	return flash.media.Sound.__canPlayMime(mime);
}
flash.media.Sound.__mimeForExtension = function(extension) {
	var mime = null;
	switch(extension) {
	case "mp3":
		mime = "audio/mpeg";
		break;
	case "ogg":
		mime = "audio/ogg; codecs=\"vorbis\"";
		break;
	case "wav":
		mime = "audio/wav; codecs=\"1\"";
		break;
	case "aac":
		mime = "audio/mp4; codecs=\"mp4a.40.2\"";
		break;
	default:
		mime = null;
	}
	return mime;
}
flash.media.Sound.__super__ = flash.events.EventDispatcher;
flash.media.Sound.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__onSoundLoaded: function(evt) {
		this.__removeEventListeners();
		var evt1 = new flash.events.Event(flash.events.Event.COMPLETE);
		this.dispatchEvent(evt1);
	}
	,__onSoundLoadError: function(evt) {
		this.__removeEventListeners();
		var evt1 = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		this.dispatchEvent(evt1);
	}
	,__removeEventListeners: function() {
		this.__soundCache.removeEventListener(flash.events.Event.COMPLETE,$bind(this,this.__onSoundLoaded),false);
		this.__soundCache.removeEventListener(flash.events.IOErrorEvent.IO_ERROR,$bind(this,this.__onSoundLoadError),false);
	}
	,__load: function(stream,context,mime) {
		if(mime == null) mime = "";
		this.__streamUrl = stream.url;
		try {
			this.__soundCache = new flash.net.URLLoader();
			this.__addEventListeners();
			this.__soundCache.load(stream);
		} catch( e ) {
		}
	}
	,__addEventListeners: function() {
		this.__soundCache.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.__onSoundLoaded));
		this.__soundCache.addEventListener(flash.events.IOErrorEvent.IO_ERROR,$bind(this,this.__onSoundLoadError));
	}
	,play: function(startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0.0;
		if(this.__streamUrl == null) return null;
		var self = this;
		var curIdx = this.__soundIdx;
		var removeRef = function() {
			self.__soundChannels.remove(curIdx);
		};
		var channel = flash.media.SoundChannel.__create(this.__streamUrl,startTime,loops,sndTransform,removeRef);
		this.__soundChannels.set(curIdx,channel);
		this.__soundIdx++;
		var audio = channel.__audio;
		return channel;
	}
	,load: function(stream,context) {
		this.__load(stream,context);
	}
	,close: function() {
	}
	,__class__: flash.media.Sound
});
flash.media.SoundChannel = function() {
	flash.events.EventDispatcher.call(this,this);
	this.ChannelId = -1;
	this.leftPeak = 0.;
	this.position = 0.;
	this.rightPeak = 0.;
	this.__audioCurrentLoop = 1;
	this.__audioTotalLoops = 1;
};
$hxClasses["flash.media.SoundChannel"] = flash.media.SoundChannel;
flash.media.SoundChannel.__name__ = ["flash","media","SoundChannel"];
flash.media.SoundChannel.__create = function(src,startTime,loops,sndTransform,removeRef) {
	if(loops == null) loops = 0;
	if(startTime == null) startTime = 0.0;
	var channel = new flash.media.SoundChannel();
	channel.__audio = js.Browser.document.createElement("audio");
	channel.__removeRef = removeRef;
	channel.__audio.addEventListener("ended",$bind(channel,channel.__onSoundChannelFinished),false);
	channel.__audio.addEventListener("seeked",$bind(channel,channel.__onSoundSeeked),false);
	channel.__audio.addEventListener("stalled",$bind(channel,channel.__onStalled),false);
	channel.__audio.addEventListener("progress",$bind(channel,channel.__onProgress),false);
	if(loops > 0) {
		channel.__audioTotalLoops = loops;
		channel.__audio.loop = true;
	}
	channel.__startTime = startTime;
	if(startTime > 0.) {
		var onLoad = null;
		onLoad = function(_) {
			channel.__audio.currentTime = channel.__startTime;
			channel.__audio.play();
			channel.__audio.removeEventListener("canplaythrough",onLoad,false);
		};
		channel.__audio.addEventListener("canplaythrough",onLoad,false);
	} else channel.__audio.autoplay = true;
	channel.__audio.src = src;
	return channel;
}
flash.media.SoundChannel.__super__ = flash.events.EventDispatcher;
flash.media.SoundChannel.prototype = $extend(flash.events.EventDispatcher.prototype,{
	set_soundTransform: function(v) {
		this.__audio.volume = v.volume;
		return this.soundTransform = v;
	}
	,__onStalled: function(evt) {
		if(this.__audio != null) this.__audio.load();
	}
	,__onSoundSeeked: function(evt) {
		if(this.__audioCurrentLoop >= this.__audioTotalLoops) {
			this.__audio.loop = false;
			this.stop();
		} else this.__audioCurrentLoop++;
	}
	,__onSoundChannelFinished: function(evt) {
		if(this.__audioCurrentLoop >= this.__audioTotalLoops) {
			this.__audio.removeEventListener("ended",$bind(this,this.__onSoundChannelFinished),false);
			this.__audio.removeEventListener("seeked",$bind(this,this.__onSoundSeeked),false);
			this.__audio.removeEventListener("stalled",$bind(this,this.__onStalled),false);
			this.__audio.removeEventListener("progress",$bind(this,this.__onProgress),false);
			this.__audio = null;
			var evt1 = new flash.events.Event(flash.events.Event.SOUND_COMPLETE);
			evt1.target = this;
			this.dispatchEvent(evt1);
			if(this.__removeRef != null) this.__removeRef();
		} else {
			this.__audio.currentTime = this.__startTime;
			this.__audio.play();
		}
	}
	,__onProgress: function(evt) {
	}
	,stop: function() {
		if(this.__audio != null) {
			this.__audio.pause();
			this.__audio = null;
			if(this.__removeRef != null) this.__removeRef();
		}
	}
	,__class__: flash.media.SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform"}
});
flash.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["flash.media.SoundLoaderContext"] = flash.media.SoundLoaderContext;
flash.media.SoundLoaderContext.__name__ = ["flash","media","SoundLoaderContext"];
flash.media.SoundLoaderContext.prototype = {
	__class__: flash.media.SoundLoaderContext
}
flash.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
	this.leftToLeft = 0;
	this.leftToRight = 0;
	this.rightToLeft = 0;
	this.rightToRight = 0;
};
$hxClasses["flash.media.SoundTransform"] = flash.media.SoundTransform;
flash.media.SoundTransform.__name__ = ["flash","media","SoundTransform"];
flash.media.SoundTransform.prototype = {
	__class__: flash.media.SoundTransform
}
flash.net = {}
flash.net.URLLoader = function(request) {
	flash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(flash.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["flash.net.URLLoader"] = flash.net.URLLoader;
flash.net.URLLoader.__name__ = ["flash","net","URLLoader"];
flash.net.URLLoader.__super__ = flash.events.EventDispatcher;
flash.net.URLLoader.prototype = $extend(flash.events.EventDispatcher.prototype,{
	set_dataFormat: function(inputVal) {
		if(inputVal == flash.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(js.Browser.window,"ArrayBuffer")) this.dataFormat = flash.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,onStatus: function(status) {
		var evt = new flash.events.HTTPStatusEvent(flash.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onSecurityError: function(msg) {
		var evt = new flash.events.SecurityErrorEvent(flash.events.SecurityErrorEvent.SECURITY_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new flash.events.ProgressEvent(flash.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new flash.events.Event(flash.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onData: function(_) {
		var content = this.getData();
		var _g = this;
		switch( (_g.dataFormat)[1] ) {
		case 0:
			this.data = flash.utils.ByteArray.__ofBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new flash.events.Event(flash.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,flash.utils.ByteArray)) {
			var data1 = data;
			var _g = this;
			switch( (_g.dataFormat)[1] ) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,flash.net.URLVariables)) {
			var data1 = data;
			var _g = 0, _g1 = Reflect.fields(data1);
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				if(uri.length != 0) uri += "&";
				uri += StringTools.urlEncode(p) + "=" + StringTools.urlEncode(Reflect.field(data1,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		var _g = this;
		switch( (_g.dataFormat)[1] ) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g1 = 0;
		while(_g1 < requestHeaders.length) {
			var header = requestHeaders[_g1];
			++_g1;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s = (function($this) {
				var $r;
				try {
					$r = subject.status;
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(s == undefined) s = null;
			if(s != null) self.onStatus(s);
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else if(s == 0) {
				self.onError("Unable to make request (may be blocked due to cross-domain permissions)");
				self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
			} else self.onError("Http Error #" + subject.status);
		};
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,getData: function() {
		return null;
	}
	,close: function() {
	}
	,__class__: flash.net.URLLoader
	,__properties__: {set_dataFormat:"set_dataFormat"}
});
flash.net.URLLoaderDataFormat = $hxClasses["flash.net.URLLoaderDataFormat"] = { __ename__ : true, __constructs__ : ["BINARY","TEXT","VARIABLES"] }
flash.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
flash.net.URLLoaderDataFormat.BINARY.toString = $estr;
flash.net.URLLoaderDataFormat.BINARY.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
flash.net.URLLoaderDataFormat.TEXT.toString = $estr;
flash.net.URLLoaderDataFormat.TEXT.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
flash.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
flash.net.URLLoaderDataFormat.VARIABLES.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = flash.net.URLRequestMethod.GET;
	this.contentType = null;
};
$hxClasses["flash.net.URLRequest"] = flash.net.URLRequest;
flash.net.URLRequest.__name__ = ["flash","net","URLRequest"];
flash.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == flash.net.URLRequestMethod.GET || this.data == null) return res;
		if(js.Boot.__instanceof(this.data,String) || js.Boot.__instanceof(this.data,flash.utils.ByteArray)) {
			res = res.slice();
			res.push(new flash.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,__class__: flash.net.URLRequest
}
flash.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["flash.net.URLRequestHeader"] = flash.net.URLRequestHeader;
flash.net.URLRequestHeader.__name__ = ["flash","net","URLRequestHeader"];
flash.net.URLRequestHeader.prototype = {
	__class__: flash.net.URLRequestHeader
}
flash.net.URLRequestMethod = function() { }
$hxClasses["flash.net.URLRequestMethod"] = flash.net.URLRequestMethod;
flash.net.URLRequestMethod.__name__ = ["flash","net","URLRequestMethod"];
flash.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["flash.net.URLVariables"] = flash.net.URLVariables;
flash.net.URLVariables.__name__ = ["flash","net","URLVariables"];
flash.net.URLVariables.prototype = {
	toString: function() {
		var result = new Array();
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			result.push(StringTools.urlEncode(f) + "=" + StringTools.urlEncode(Reflect.field(this,f)));
		}
		return result.join("&");
	}
	,decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g = 0;
		while(_g < fields1.length) {
			var f = fields1[_g];
			++_g;
			var eq = f.indexOf("=");
			if(eq > 0) this[StringTools.urlDecode(HxOverrides.substr(f,0,eq))] = StringTools.urlDecode(HxOverrides.substr(f,eq + 1,null)); else if(eq != 0) this[StringTools.urlDecode(f)] = "";
		}
	}
	,__class__: flash.net.URLVariables
}
flash.system = {}
flash.system.ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.ApplicationDomain"] = flash.system.ApplicationDomain;
flash.system.ApplicationDomain.__name__ = ["flash","system","ApplicationDomain"];
flash.system.ApplicationDomain.prototype = {
	hasDefinition: function(name) {
		return Type.resolveClass(name) != null;
	}
	,getDefinition: function(name) {
		return Type.resolveClass(name);
	}
	,__class__: flash.system.ApplicationDomain
}
flash.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
	this.securityDomain = securityDomain;
	if(applicationDomain != null) this.applicationDomain = applicationDomain; else this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.LoaderContext"] = flash.system.LoaderContext;
flash.system.LoaderContext.__name__ = ["flash","system","LoaderContext"];
flash.system.LoaderContext.prototype = {
	__class__: flash.system.LoaderContext
}
flash.system.SecurityDomain = function() {
};
$hxClasses["flash.system.SecurityDomain"] = flash.system.SecurityDomain;
flash.system.SecurityDomain.__name__ = ["flash","system","SecurityDomain"];
flash.system.SecurityDomain.prototype = {
	__class__: flash.system.SecurityDomain
}
flash.text.FontStyle = $hxClasses["flash.text.FontStyle"] = { __ename__ : true, __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] }
flash.text.FontStyle.REGULAR = ["REGULAR",0];
flash.text.FontStyle.REGULAR.toString = $estr;
flash.text.FontStyle.REGULAR.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.ITALIC = ["ITALIC",1];
flash.text.FontStyle.ITALIC.toString = $estr;
flash.text.FontStyle.ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
flash.text.FontStyle.BOLD_ITALIC.toString = $estr;
flash.text.FontStyle.BOLD_ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD = ["BOLD",3];
flash.text.FontStyle.BOLD.toString = $estr;
flash.text.FontStyle.BOLD.__enum__ = flash.text.FontStyle;
flash.text.FontType = $hxClasses["flash.text.FontType"] = { __ename__ : true, __constructs__ : ["EMBEDDED","DEVICE"] }
flash.text.FontType.EMBEDDED = ["EMBEDDED",0];
flash.text.FontType.EMBEDDED.toString = $estr;
flash.text.FontType.EMBEDDED.__enum__ = flash.text.FontType;
flash.text.FontType.DEVICE = ["DEVICE",1];
flash.text.FontType.DEVICE.toString = $estr;
flash.text.FontType.DEVICE.__enum__ = flash.text.FontType;
flash.text.GridFitType = $hxClasses["flash.text.GridFitType"] = { __ename__ : true, __constructs__ : ["NONE","PIXEL","SUBPIXEL"] }
flash.text.GridFitType.NONE = ["NONE",0];
flash.text.GridFitType.NONE.toString = $estr;
flash.text.GridFitType.NONE.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.PIXEL = ["PIXEL",1];
flash.text.GridFitType.PIXEL.toString = $estr;
flash.text.GridFitType.PIXEL.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.SUBPIXEL = ["SUBPIXEL",2];
flash.text.GridFitType.SUBPIXEL.toString = $estr;
flash.text.GridFitType.SUBPIXEL.__enum__ = flash.text.GridFitType;
flash.text.TextField = function() {
	flash.display.InteractiveObject.call(this);
	this.mWidth = 100;
	this.mHeight = 20;
	this.mHTMLMode = false;
	this.multiline = false;
	this.__graphics = new flash.display.Graphics();
	this.mFace = flash.text.TextField.mDefaultFont;
	this.mAlign = flash.text.TextFormatAlign.LEFT;
	this.mParagraphs = new Array();
	this.mSelStart = -1;
	this.mSelEnd = -1;
	this.scrollH = 0;
	this.scrollV = 1;
	this.mType = flash.text.TextFieldType.DYNAMIC;
	this.set_autoSize("NONE");
	this.mTextHeight = 12;
	this.mMaxHeight = this.mTextHeight;
	this.mHTMLText = " ";
	this.mText = " ";
	this.mTextColour = 0;
	this.tabEnabled = false;
	this.mTryFreeType = true;
	this.selectable = true;
	this.mInsertPos = 0;
	this.__inputEnabled = false;
	this.mDownChar = 0;
	this.mSelectDrag = -1;
	this.mLineInfo = [];
	this.set_defaultTextFormat(new flash.text.TextFormat());
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
	this.gridFitType = flash.text.GridFitType.PIXEL;
	this.sharpness = 0;
};
$hxClasses["flash.text.TextField"] = flash.text.TextField;
flash.text.TextField.__name__ = ["flash","text","TextField"];
flash.text.TextField.__super__ = flash.display.InteractiveObject;
flash.text.TextField.prototype = $extend(flash.display.InteractiveObject.prototype,{
	set_wordWrap: function(inWordWrap) {
		this.wordWrap = inWordWrap;
		this.Rebuild();
		return this.get_wordWrap();
	}
	,get_wordWrap: function() {
		return this.wordWrap;
	}
	,set_width: function(inValue) {
		if(this.parent != null) this.parent.__invalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mWidth) {
			this.mWidth = inValue;
			this.Rebuild();
		}
		return this.mWidth;
	}
	,get_width: function() {
		return Math.max(this.mWidth,this.getBounds(this.get_stage()).width);
	}
	,set_type: function(inType) {
		this.mType = inType;
		this.__inputEnabled = this.mType == flash.text.TextFieldType.INPUT;
		if(this.mHTMLMode) {
			if(this.__inputEnabled) flash.Lib.__setContentEditable(this.__graphics.__surface,true); else flash.Lib.__setContentEditable(this.__graphics.__surface,false);
		} else if(this.__inputEnabled) {
			this.set_htmlText(StringTools.replace(this.mText,"\n","<BR />"));
			flash.Lib.__setContentEditable(this.__graphics.__surface,true);
		}
		this.tabEnabled = this.get_type() == flash.text.TextFieldType.INPUT;
		this.Rebuild();
		return inType;
	}
	,get_type: function() {
		return this.mType;
	}
	,get_textHeight: function() {
		return this.mMaxHeight;
	}
	,get_textWidth: function() {
		return this.mMaxWidth;
	}
	,set_textColor: function(inCol) {
		this.mTextColour = inCol;
		this.RebuildText();
		return inCol;
	}
	,get_textColor: function() {
		return this.mTextColour;
	}
	,set_text: function(inText) {
		this.mText = Std.string(inText);
		this.mHTMLMode = false;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.mText;
	}
	,get_text: function() {
		if(this.mHTMLMode) this.ConvertHTMLToText(false);
		return this.mText;
	}
	,set_scrollV: function(value) {
		return this.scrollV = value;
	}
	,get_scrollV: function() {
		return this.scrollV;
	}
	,set_scrollH: function(value) {
		return this.scrollH = value;
	}
	,get_scrollH: function() {
		return this.scrollH;
	}
	,get_numLines: function() {
		return 0;
	}
	,set_multiline: function(value) {
		return this.multiline = value;
	}
	,get_multiline: function() {
		return this.multiline;
	}
	,get_maxScrollV: function() {
		return 0;
	}
	,get_maxScrollH: function() {
		return 0;
	}
	,set_htmlText: function(inHTMLText) {
		this.mParagraphs = new Array();
		this.mHTMLText = inHTMLText;
		if(!this.mHTMLMode) {
			var domElement = js.Browser.document.createElement("div");
			if(this.background || this.border) {
				domElement.style.width = this.mWidth + "px";
				domElement.style.height = this.mHeight + "px";
			}
			if(this.background) domElement.style.backgroundColor = "#" + StringTools.hex(this.backgroundColor,6);
			if(this.border) domElement.style.border = "1px solid #" + StringTools.hex(this.borderColor,6);
			domElement.style.color = "#" + StringTools.hex(this.mTextColour,6);
			domElement.style.fontFamily = this.mFace;
			domElement.style.fontSize = this.mTextHeight + "px";
			domElement.style.textAlign = Std.string(this.mAlign);
			var wrapper = domElement;
			wrapper.innerHTML = inHTMLText;
			var destination = new flash.display.Graphics(wrapper);
			var __surface = this.__graphics.__surface;
			if(flash.Lib.__isOnStage(__surface)) {
				flash.Lib.__appendSurface(wrapper);
				flash.Lib.__copyStyle(__surface,wrapper);
				flash.Lib.__swapSurface(__surface,wrapper);
				flash.Lib.__removeSurface(__surface);
			}
			this.__graphics = destination;
			this.__graphics.__extent.width = wrapper.width;
			this.__graphics.__extent.height = wrapper.height;
		} else this.__graphics.__surface.innerHTML = inHTMLText;
		this.mHTMLMode = true;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.mHTMLText;
	}
	,get_htmlText: function() {
		return this.mHTMLText;
	}
	,set_height: function(inValue) {
		if(this.parent != null) this.parent.__invalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mHeight) {
			this.mHeight = inValue;
			this.Rebuild();
		}
		return this.mHeight;
	}
	,get_height: function() {
		return Math.max(this.mHeight,this.getBounds(this.get_stage()).height);
	}
	,set_defaultTextFormat: function(inFmt) {
		this.setTextFormat(inFmt);
		this._defaultTextFormat = inFmt;
		return inFmt;
	}
	,get_defaultTextFormat: function() {
		return this._defaultTextFormat;
	}
	,get_caretPos: function() {
		return this.mInsertPos;
	}
	,get_bottomScrollV: function() {
		return 0;
	}
	,set_borderColor: function(inBorderCol) {
		this.borderColor = inBorderCol;
		this.Rebuild();
		return inBorderCol;
	}
	,set_border: function(inBorder) {
		this.border = inBorder;
		this.Rebuild();
		return inBorder;
	}
	,set_backgroundColor: function(inCol) {
		this.backgroundColor = inCol;
		this.Rebuild();
		return inCol;
	}
	,set_background: function(inBack) {
		this.background = inBack;
		this.Rebuild();
		return inBack;
	}
	,set_autoSize: function(inAutoSize) {
		this.autoSize = inAutoSize;
		this.Rebuild();
		return inAutoSize;
	}
	,get_autoSize: function() {
		return this.autoSize;
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.__graphics.__render(inMask,this.__filters,1,1)) {
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
			this.__applyFilters(this.__graphics.__surface);
			this.___renderFlags |= 32;
		}
		if(!this.mHTMLMode && inMask != null) {
			var m = this.getSurfaceTransform(this.__graphics);
			flash.Lib.__drawToSurface(this.__graphics.__surface,inMask,m,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha,clipRect,this.gridFitType != flash.text.GridFitType.PIXEL);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(this.__graphics);
				flash.Lib.__setSurfaceTransform(this.__graphics.__surface,m);
				this.___renderFlags &= -33;
			}
			flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha);
		}
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.mText.length > 1) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.mMaxWidth || local.y > this.mMaxHeight) return null; else return this;
		} else return flash.display.InteractiveObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,toString: function() {
		return "[TextField name=" + this.name + " id=" + this.___id + "]";
	}
	,setTextFormat: function(inFmt,beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		if(inFmt.font != null) this.mFace = inFmt.font;
		if(inFmt.size != null) this.mTextHeight = inFmt.size | 0;
		if(inFmt.align != null) this.mAlign = inFmt.align;
		if(inFmt.color != null) this.mTextColour = inFmt.color;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.getTextFormat();
	}
	,setSelection: function(beginIndex,endIndex) {
	}
	,RenderRow: function(inRow,inY,inCharIdx,inAlign,inInsert) {
		if(inInsert == null) inInsert = 0;
		var h = 0;
		var w = 0;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			if(chr.fh > h) h = chr.fh;
			w += chr.adv;
		}
		if(w > this.mMaxWidth) this.mMaxWidth = w;
		var full_height = h * 1.2 | 0;
		var align_x = 0;
		var insert_x = 0;
		if(inInsert != null) {
			if(this.autoSize != "NONE") {
				this.scrollH = 0;
				insert_x = inInsert;
			} else {
				insert_x = inInsert - this.scrollH;
				if(insert_x < 0) this.scrollH -= (this.mLimitRenderX * 3 >> 2) - insert_x; else if(insert_x > this.mLimitRenderX) this.scrollH += insert_x - (this.mLimitRenderX * 3 >> 2);
				if(this.scrollH < 0) this.scrollH = 0;
			}
		}
		if(this.autoSize == "NONE" && w <= this.mLimitRenderX) {
			if(inAlign == flash.text.TextFormatAlign.CENTER) align_x = Math.round(this.mWidth) - w >> 1; else if(inAlign == flash.text.TextFormatAlign.RIGHT) align_x = Math.round(this.mWidth) - w;
		}
		var x_list = new Array();
		this.mLineInfo.push({ mY0 : inY, mIndex : inCharIdx - 1, mX : x_list});
		var cache_sel_font = null;
		var cache_normal_font = null;
		var x = align_x - this.scrollH;
		var x0 = x;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			var adv = chr.adv;
			if(x + adv > this.mLimitRenderX) break;
			x_list.push(x);
			if(x >= 0) {
				var font = chr.font;
				if(chr.sel) {
					this.__graphics.lineStyle();
					this.__graphics.beginFill(2105440);
					this.__graphics.drawRect(x,inY,adv,full_height);
					this.__graphics.endFill();
					if(cache_normal_font == chr.font) font = cache_sel_font; else {
						font = flash.text.FontInstance.CreateSolid(chr.font.GetFace(),chr.fh,16777215,1.0);
						cache_sel_font = font;
						cache_normal_font = chr.font;
					}
				}
				font.RenderChar(this.__graphics,chr.chr,x,inY + (h - chr.fh) | 0);
			}
			x += adv;
		}
		x += this.scrollH;
		return full_height;
	}
	,RebuildText: function() {
		this.mParagraphs = [];
		if(!this.mHTMLMode) {
			var font = flash.text.FontInstance.CreateSolid(this.mFace,this.mTextHeight,this.mTextColour,1.0);
			var paras = this.mText.split("\n");
			var _g = 0;
			while(_g < paras.length) {
				var paragraph = paras[_g];
				++_g;
				this.mParagraphs.push({ align : this.mAlign, spans : [{ font : font, text : paragraph + "\n"}]});
			}
		}
		this.Rebuild();
	}
	,Rebuild: function() {
		if(this.mHTMLMode) return;
		this.mLineInfo = [];
		this.__graphics.clear();
		if(this.background) {
			this.__graphics.beginFill(this.backgroundColor);
			this.__graphics.drawRect(0,0,this.get_width(),this.get_height());
			this.__graphics.endFill();
		}
		this.__graphics.lineStyle(this.mTextColour);
		var insert_x = null;
		this.mMaxWidth = 0;
		var wrap = this.mLimitRenderX = this.get_wordWrap() && !this.__inputEnabled?this.mWidth | 0:999999;
		var char_idx = 0;
		var h = 0;
		var s0 = this.mSelStart;
		var s1 = this.mSelEnd;
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var row = [];
			var row_width = 0;
			var last_word_break = 0;
			var last_word_break_width = 0;
			var last_word_char_idx = 0;
			var start_idx = char_idx;
			var tx = 0;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				var text = span.text;
				var font = span.font;
				var fh = font.get_height();
				last_word_break = row.length;
				last_word_break_width = row_width;
				last_word_char_idx = char_idx;
				var _g5 = 0, _g4 = text.length;
				while(_g5 < _g4) {
					var ch = _g5++;
					var g = HxOverrides.cca(text,ch);
					var adv = font.__getAdvance(g);
					if(g == 32) {
						last_word_break = row.length;
						last_word_break_width = tx;
						last_word_char_idx = char_idx;
					}
					if(tx + adv > wrap) {
						if(last_word_break > 0) {
							var row_end = row.splice(last_word_break,row.length - last_word_break);
							h += this.RenderRow(row,h,start_idx,paragraph.align);
							row = row_end;
							tx -= last_word_break_width;
							start_idx = last_word_char_idx;
							last_word_break = 0;
							last_word_break_width = 0;
							last_word_char_idx = 0;
							if(row_end.length > 0 && row_end[0].chr == 32) {
								row_end.shift();
								start_idx++;
							}
						} else {
							h += this.RenderRow(row,h,char_idx,paragraph.align);
							row = [];
							tx = 0;
							start_idx = char_idx;
						}
					}
					row.push({ font : font, chr : g, x : tx, fh : fh, sel : char_idx >= s0 && char_idx < s1, adv : adv});
					tx += adv;
					char_idx++;
				}
			}
			if(row.length > 0) {
				h += this.RenderRow(row,h,start_idx,paragraph.align,insert_x);
				insert_x = null;
			}
		}
		var w = this.mMaxWidth;
		if(h < this.mTextHeight) h = this.mTextHeight;
		this.mMaxHeight = h;
		var _g = this;
		switch(_g.autoSize) {
		case "LEFT":
			break;
		case "RIGHT":
			var x0 = this.get_x() + this.get_width();
			this.set_x(this.mWidth - x0);
			break;
		case "CENTER":
			var x0 = this.get_x() + this.get_width() / 2;
			this.set_x(this.mWidth / 2 - x0);
			break;
		default:
			if(this.get_wordWrap()) this.set_height(h);
		}
		if(this.border) {
			this.__graphics.endFill();
			this.__graphics.lineStyle(1,this.borderColor,1,true);
			this.__graphics.drawRect(.5,.5,this.get_width() - .5,this.get_height() - .5);
		}
	}
	,getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		return new flash.text.TextFormat(this.mFace,this.mTextHeight,this.mTextColour);
	}
	,getLineIndexAtPoint: function(inX,inY) {
		if(this.mLineInfo.length < 1) return -1;
		if(inY <= 0) return 0;
		var _g1 = 0, _g = this.mLineInfo.length;
		while(_g1 < _g) {
			var l = _g1++;
			if(this.mLineInfo[l].mY0 > inY) return l == 0?0:l - 1;
		}
		return this.mLineInfo.length - 1;
	}
	,getCharIndexAtPoint: function(inX,inY) {
		var li = this.getLineIndexAtPoint(inX,inY);
		if(li < 0) return -1;
		var line = this.mLineInfo[li];
		var idx = line.mIndex;
		var _g = 0, _g1 = line.mX;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			if(x > inX) return idx;
			idx++;
		}
		return idx;
	}
	,getCharBoundaries: function(a) {
		return null;
	}
	,DecodeColour: function(col) {
		return Std.parseInt("0x" + HxOverrides.substr(col,1,null));
	}
	,ConvertHTMLToText: function(inUnSetHTML) {
		this.mText = "";
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				this.mText += span.text;
			}
		}
		if(inUnSetHTML) {
			this.mHTMLMode = false;
			this.RebuildText();
		}
	}
	,appendText: function(newText) {
		var _g = this;
		_g.set_text(_g.get_text() + newText);
	}
	,__class__: flash.text.TextField
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{set_autoSize:"set_autoSize",set_background:"set_background",set_backgroundColor:"set_backgroundColor",set_border:"set_border",set_borderColor:"set_borderColor",get_bottomScrollV:"get_bottomScrollV",get_caretPos:"get_caretPos",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",get_maxScrollH:"get_maxScrollH",get_maxScrollV:"get_maxScrollV",get_numLines:"get_numLines",set_text:"set_text",get_text:"get_text",set_textColor:"set_textColor",get_textColor:"get_textColor",get_textHeight:"get_textHeight",get_textWidth:"get_textWidth",set_type:"set_type",get_type:"get_type",set_wordWrap:"set_wordWrap",get_wordWrap:"get_wordWrap"})
});
flash.text.FontInstanceMode = $hxClasses["flash.text.FontInstanceMode"] = { __ename__ : true, __constructs__ : ["fimSolid"] }
flash.text.FontInstanceMode.fimSolid = ["fimSolid",0];
flash.text.FontInstanceMode.fimSolid.toString = $estr;
flash.text.FontInstanceMode.fimSolid.__enum__ = flash.text.FontInstanceMode;
flash.text.FontInstance = function(inFont,inHeight) {
	this.mFont = inFont;
	this.mHeight = inHeight;
	this.mTryFreeType = true;
	this.mGlyphs = [];
	this.mCacheAsBitmap = false;
};
$hxClasses["flash.text.FontInstance"] = flash.text.FontInstance;
flash.text.FontInstance.__name__ = ["flash","text","FontInstance"];
flash.text.FontInstance.CreateSolid = function(inFace,inHeight,inColour,inAlpha) {
	var id = "SOLID:" + inFace + ":" + inHeight + ":" + inColour + ":" + inAlpha;
	var f = flash.text.FontInstance.mSolidFonts.get(id);
	if(f != null) return f;
	var font = new flash.text.Font();
	font.__setScale(inHeight);
	font.set_fontName(inFace);
	if(font == null) return null;
	f = new flash.text.FontInstance(font,inHeight);
	f.SetSolid(inColour,inAlpha);
	flash.text.FontInstance.mSolidFonts.set(id,f);
	return f;
}
flash.text.FontInstance.prototype = {
	get_height: function() {
		return this.mHeight;
	}
	,__getAdvance: function(inChar) {
		if(this.mFont == null) return 0;
		return this.mFont.__getAdvance(inChar,this.mHeight);
	}
	,toString: function() {
		return "FontInstance:" + Std.string(this.mFont) + ":" + this.mColour + "(" + this.mGlyphs.length + ")";
	}
	,RenderChar: function(inGraphics,inGlyph,inX,inY) {
		inGraphics.__clearLine();
		inGraphics.beginFill(this.mColour,this.mAlpha);
		this.mFont.__render(inGraphics,inGlyph,inX,inY,this.mTryFreeType);
		inGraphics.endFill();
	}
	,SetSolid: function(inCol,inAlpha) {
		this.mColour = inCol;
		this.mAlpha = inAlpha;
		this.mMode = flash.text.FontInstanceMode.fimSolid;
	}
	,GetFace: function() {
		return this.mFont.fontName;
	}
	,__class__: flash.text.FontInstance
	,__properties__: {get_height:"get_height"}
}
flash.text.TextFieldAutoSize = function() { }
$hxClasses["flash.text.TextFieldAutoSize"] = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.__name__ = ["flash","text","TextFieldAutoSize"];
flash.text.TextFieldType = function() { }
$hxClasses["flash.text.TextFieldType"] = flash.text.TextFieldType;
flash.text.TextFieldType.__name__ = ["flash","text","TextFieldType"];
flash.text.TextFormat = function(in_font,in_size,in_color,in_bold,in_italic,in_underline,in_url,in_target,in_align,in_leftMargin,in_rightMargin,in_indent,in_leading) {
	this.font = in_font;
	this.size = in_size;
	this.color = in_color;
	this.bold = in_bold;
	this.italic = in_italic;
	this.underline = in_underline;
	this.url = in_url;
	this.target = in_target;
	this.align = in_align;
	this.leftMargin = in_leftMargin;
	this.rightMargin = in_rightMargin;
	this.indent = in_indent;
	this.leading = in_leading;
};
$hxClasses["flash.text.TextFormat"] = flash.text.TextFormat;
flash.text.TextFormat.__name__ = ["flash","text","TextFormat"];
flash.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new flash.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.display = this.display;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,__class__: flash.text.TextFormat
}
flash.text.TextFormatAlign = $hxClasses["flash.text.TextFormatAlign"] = { __ename__ : true, __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] }
flash.text.TextFormatAlign.LEFT = ["LEFT",0];
flash.text.TextFormatAlign.LEFT.toString = $estr;
flash.text.TextFormatAlign.LEFT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.RIGHT = ["RIGHT",1];
flash.text.TextFormatAlign.RIGHT.toString = $estr;
flash.text.TextFormatAlign.RIGHT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
flash.text.TextFormatAlign.JUSTIFY.toString = $estr;
flash.text.TextFormatAlign.JUSTIFY.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.CENTER = ["CENTER",3];
flash.text.TextFormatAlign.CENTER.toString = $estr;
flash.text.TextFormatAlign.CENTER.__enum__ = flash.text.TextFormatAlign;
flash.ui = {}
flash.ui.Keyboard = function() { }
$hxClasses["flash.ui.Keyboard"] = flash.ui.Keyboard;
flash.ui.Keyboard.__name__ = ["flash","ui","Keyboard"];
flash.ui.Keyboard.isAccessible = function() {
	return false;
}
flash.ui.Keyboard.__convertMozillaCode = function(code) {
	switch(code) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 14:
		return 13;
	case 16:
		return 16;
	case 17:
		return 17;
	case 20:
		return 18;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 33;
	case 34:
		return 34;
	case 35:
		return 35;
	case 36:
		return 36;
	case 37:
		return 37;
	case 39:
		return 39;
	case 38:
		return 38;
	case 40:
		return 40;
	case 45:
		return 45;
	case 46:
		return 46;
	case 144:
		return 144;
	default:
		return code;
	}
}
flash.ui.Keyboard.__convertWebkitCode = function(code) {
	var _g = code.toLowerCase();
	switch(_g) {
	case "backspace":
		return 8;
	case "tab":
		return 9;
	case "enter":
		return 13;
	case "shift":
		return 16;
	case "control":
		return 17;
	case "capslock":
		return 18;
	case "escape":
		return 27;
	case "space":
		return 32;
	case "pageup":
		return 33;
	case "pagedown":
		return 34;
	case "end":
		return 35;
	case "home":
		return 36;
	case "left":
		return 37;
	case "right":
		return 39;
	case "up":
		return 38;
	case "down":
		return 40;
	case "insert":
		return 45;
	case "delete":
		return 46;
	case "numlock":
		return 144;
	case "break":
		return 19;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + HxOverrides.substr(code,3,null));
	throw "Unrecognized key code: " + code;
	return 0;
}
flash.utils = {}
flash.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this.___resizeBuffer(this.allocated);
};
$hxClasses["flash.utils.ByteArray"] = flash.utils.ByteArray;
flash.utils.ByteArray.__name__ = ["flash","utils","ByteArray"];
flash.utils.ByteArray.fromBytes = function(inBytes) {
	var result = new flash.utils.ByteArray();
	result.byteView = new Uint8Array(inBytes.b);
	result.set_length(result.byteView.length);
	result.allocated = result.length;
	return result;
}
flash.utils.ByteArray.__ofBuffer = function(buffer) {
	var bytes = new flash.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
}
flash.utils.ByteArray.prototype = {
	set_length: function(value) {
		if(this.allocated < value) this.___resizeBuffer(this.allocated = Math.max(value,this.allocated * 2) | 0); else if(this.allocated > value) this.___resizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,get_endian: function() {
		return this.littleEndian?"littleEndian":"bigEndian";
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,__getBuffer: function() {
		return this.data.buffer;
	}
	,___resizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,_getUTFBytesCount: function(value) {
		var count = 0;
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) count += 1; else if(c <= 2047) count += 2; else if(c <= 65535) count += 3; else count += 4;
		}
		return count;
	}
	,__get: function(pos) {
		return this.data.getUint8(pos);
	}
	,__fromBytes: function(inBytes) {
		this.byteView = new Uint8Array(inBytes.b);
		this.set_length(this.byteView.length);
		this.allocated = this.length;
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUnsignedShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeFloat: function(x) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeDouble: function(x) {
		var lengthToEnsure = this.position + 8;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Write error - Out of bounds");
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		var data = this.data;
		data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,toString: function() {
		var cachePosition = this.position;
		this.position = 0;
		var value = this.readUTFBytes(this.length);
		this.position = cachePosition;
		return value;
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c2 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	}
	,readUnsignedShort: function() {
		var uShort = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return uShort;
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readShort: function() {
		var $short = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return $short;
	}
	,readInt: function() {
		var $int = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return $int;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) {
			if(this.allocated < len) this.___resizeBuffer(this.allocated = Math.max(len,this.allocated * 2) | 0); else if(this.allocated > len) this.___resizeBuffer(this.allocated = len);
			this.length = len;
			len;
		}
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			var data = this.data;
			data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readFloat: function() {
		var $float = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return $float;
	}
	,readDouble: function() {
		var $double = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return $double;
	}
	,readBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Read error - Out of bounds");
		if(offset == null) offset = 0;
		if(length == null) length = this.length;
		var lengthToEnsure = offset + length;
		if(bytes.length < lengthToEnsure) {
			if(bytes.allocated < lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = Math.max(lengthToEnsure,bytes.allocated * 2) | 0); else if(bytes.allocated > lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = lengthToEnsure);
			bytes.length = lengthToEnsure;
			lengthToEnsure;
		}
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readBoolean: function() {
		return this.readByte() != 0;
	}
	,clear: function() {
		if(this.allocated < 0) this.___resizeBuffer(this.allocated = Math.max(0,this.allocated * 2) | 0); else if(this.allocated > 0) this.___resizeBuffer(this.allocated = 0);
		this.length = 0;
		0;
	}
	,__class__: flash.utils.ByteArray
	,__properties__: {get_bytesAvailable:"get_bytesAvailable",set_endian:"set_endian",get_endian:"get_endian",set_length:"set_length"}
}
flash.utils.Endian = function() { }
$hxClasses["flash.utils.Endian"] = flash.utils.Endian;
flash.utils.Endian.__name__ = ["flash","utils","Endian"];
flash.utils.Timer = function(delay,repeatCount) {
	if(repeatCount == null) repeatCount = 0;
	flash.events.EventDispatcher.call(this);
	this.running = false;
	this.set_delay(delay);
	this.set_repeatCount(repeatCount);
	this.currentCount = 0;
};
$hxClasses["flash.utils.Timer"] = flash.utils.Timer;
flash.utils.Timer.__name__ = ["flash","utils","Timer"];
flash.utils.Timer.__super__ = flash.events.EventDispatcher;
flash.utils.Timer.prototype = $extend(flash.events.EventDispatcher.prototype,{
	set_repeatCount: function(v) {
		if(this.running && v != 0 && v <= this.currentCount) this.stop();
		this.repeatCount = v;
		return v;
	}
	,set_delay: function(v) {
		if(v != this.delay) {
			var wasRunning = this.running;
			if(this.running) this.stop();
			this.delay = v;
			if(wasRunning) this.start();
		}
		return v;
	}
	,__onInterval: function() {
		this.currentCount++;
		if(this.repeatCount > 0 && this.currentCount >= this.repeatCount) {
			this.stop();
			this.dispatchEvent(new flash.events.TimerEvent("timer"));
			this.dispatchEvent(new flash.events.TimerEvent("timerComplete"));
		} else this.dispatchEvent(new flash.events.TimerEvent("timer"));
	}
	,stop: function() {
		if(this.timerId != null) {
			window.clearInterval(this.timerId);
			this.timerId = null;
		}
		this.running = false;
	}
	,start: function() {
		if(this.running) return;
		this.running = true;
		this.timerId = window.setInterval($bind(this,this.__onInterval),this.delay | 0);
	}
	,reset: function() {
		this.stop();
		this.currentCount = 0;
	}
	,__class__: flash.utils.Timer
	,__properties__: {set_delay:"set_delay",set_repeatCount:"set_repeatCount"}
});
flash.utils.Uuid = function() { }
$hxClasses["flash.utils.Uuid"] = flash.utils.Uuid;
flash.utils.Uuid.__name__ = ["flash","utils","Uuid"];
flash.utils.Uuid.random = function(size) {
	if(size == null) size = 32;
	var nchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".length;
	var uid = new StringBuf();
	var _g = 0;
	while(_g < size) {
		var i = _g++;
		uid.b += Std.string("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.random() * nchars | 0));
	}
	return uid.b;
}
flash.utils.Uuid.uuid = function() {
	return flash.utils.Uuid.random(8) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(12);
}
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : true, __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.CallStack = function() { }
$hxClasses["haxe.CallStack"] = haxe.CallStack;
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
}
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
}
haxe.CallStack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = $e[2];
		b.b += "module ";
		b.b += Std.string(m);
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		b.b += Std.string(file);
		b.b += " line ";
		b.b += Std.string(line);
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b += Std.string(cname);
		b.b += ".";
		b.b += Std.string(meth);
		break;
	case 4:
		var n = $e[2];
		b.b += "local function #";
		b.b += Std.string(n);
		break;
	}
}
haxe.Resource = function() { }
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.listNames = function() {
	var names = new Array();
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		names.push(x.name);
	}
	return names;
}
haxe.Resource.getString = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe.Unserializer.run(x.data);
			return b.toString();
		}
	}
	return null;
}
haxe._Template = {}
haxe._Template.TemplateExpr = $hxClasses["haxe._Template.TemplateExpr"] = { __ename__ : true, __constructs__ : ["OpVar","OpExpr","OpIf","OpStr","OpBlock","OpForeach","OpMacro"] }
haxe._Template.TemplateExpr.OpVar = function(v) { var $x = ["OpVar",0,v]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpExpr = function(expr) { var $x = ["OpExpr",1,expr]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpIf = function(expr,eif,eelse) { var $x = ["OpIf",2,expr,eif,eelse]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpStr = function(str) { var $x = ["OpStr",3,str]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpBlock = function(l) { var $x = ["OpBlock",4,l]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpForeach = function(expr,loop) { var $x = ["OpForeach",5,expr,loop]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpMacro = function(name,params) { var $x = ["OpMacro",6,name,params]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe.Template = function(str) {
	var tokens = this.parseTokens(str);
	this.expr = this.parseBlock(tokens);
	if(!tokens.isEmpty()) throw "Unexpected '" + Std.string(tokens.first().s) + "'";
};
$hxClasses["haxe.Template"] = haxe.Template;
haxe.Template.__name__ = ["haxe","Template"];
haxe.Template.prototype = {
	run: function(e) {
		var $e = (e);
		switch( $e[1] ) {
		case 0:
			var v = $e[2];
			this.buf.b += Std.string(Std.string(this.resolve(v)));
			break;
		case 1:
			var e1 = $e[2];
			this.buf.b += Std.string(Std.string(e1()));
			break;
		case 2:
			var eelse = $e[4], eif = $e[3], e1 = $e[2];
			var v = e1();
			if(v == null || v == false) {
				if(eelse != null) this.run(eelse);
			} else this.run(eif);
			break;
		case 3:
			var str = $e[2];
			this.buf.b += Std.string(str);
			break;
		case 4:
			var l = $e[2];
			var $it0 = l.iterator();
			while( $it0.hasNext() ) {
				var e1 = $it0.next();
				this.run(e1);
			}
			break;
		case 5:
			var loop = $e[3], e1 = $e[2];
			var v = e1();
			try {
				var x = $iterator(v)();
				if(x.hasNext == null) throw null;
				v = x;
			} catch( e2 ) {
				try {
					if(v.hasNext == null) throw null;
				} catch( e3 ) {
					throw "Cannot iter on " + Std.string(v);
				}
			}
			this.stack.push(this.context);
			var v1 = v;
			while( v1.hasNext() ) {
				var ctx = v1.next();
				this.context = ctx;
				this.run(loop);
			}
			this.context = this.stack.pop();
			break;
		case 6:
			var params = $e[3], m = $e[2];
			var v = Reflect.field(this.macros,m);
			var pl = new Array();
			var old = this.buf;
			pl.push($bind(this,this.resolve));
			var $it1 = params.iterator();
			while( $it1.hasNext() ) {
				var p = $it1.next();
				var $e = (p);
				switch( $e[1] ) {
				case 0:
					var v1 = $e[2];
					pl.push(this.resolve(v1));
					break;
				default:
					this.buf = new StringBuf();
					this.run(p);
					pl.push(this.buf.b);
				}
			}
			this.buf = old;
			try {
				this.buf.b += Std.string(Std.string(v.apply(this.macros,pl)));
			} catch( e1 ) {
				var plstr = (function($this) {
					var $r;
					try {
						$r = pl.join(",");
					} catch( e2 ) {
						$r = "???";
					}
					return $r;
				}(this));
				var msg = "Macro call " + m + "(" + plstr + ") failed (" + Std.string(e1) + ")";
				throw msg;
			}
			break;
		}
	}
	,makeExpr2: function(l) {
		var p = l.pop();
		if(p == null) throw "<eof>";
		if(p.s) return this.makeConst(p.p);
		switch(p.p) {
		case "(":
			var e1 = this.makeExpr(l);
			var p1 = l.pop();
			if(p1 == null || p1.s) throw p1.p;
			if(p1.p == ")") return e1;
			var e2 = this.makeExpr(l);
			var p2 = l.pop();
			if(p2 == null || p2.p != ")") throw p2.p;
			return (function($this) {
				var $r;
				switch(p1.p) {
				case "+":
					$r = function() {
						return e1() + e2();
					};
					break;
				case "-":
					$r = function() {
						return e1() - e2();
					};
					break;
				case "*":
					$r = function() {
						return e1() * e2();
					};
					break;
				case "/":
					$r = function() {
						return e1() / e2();
					};
					break;
				case ">":
					$r = function() {
						return e1() > e2();
					};
					break;
				case "<":
					$r = function() {
						return e1() < e2();
					};
					break;
				case ">=":
					$r = function() {
						return e1() >= e2();
					};
					break;
				case "<=":
					$r = function() {
						return e1() <= e2();
					};
					break;
				case "==":
					$r = function() {
						return e1() == e2();
					};
					break;
				case "!=":
					$r = function() {
						return e1() != e2();
					};
					break;
				case "&&":
					$r = function() {
						return e1() && e2();
					};
					break;
				case "||":
					$r = function() {
						return e1() || e2();
					};
					break;
				default:
					$r = (function($this) {
						var $r;
						throw "Unknown operation " + p1.p;
						return $r;
					}($this));
				}
				return $r;
			}(this));
		case "!":
			var e = this.makeExpr(l);
			return function() {
				var v = e();
				return v == null || v == false;
			};
		case "-":
			var e3 = this.makeExpr(l);
			return function() {
				return -e3();
			};
		}
		throw p.p;
	}
	,makeExpr: function(l) {
		return this.makePath(this.makeExpr2(l),l);
	}
	,makePath: function(e,l) {
		var p = l.first();
		if(p == null || p.p != ".") return e;
		l.pop();
		var field = l.pop();
		if(field == null || !field.s) throw field.p;
		var f = field.p;
		haxe.Template.expr_trim.match(f);
		f = haxe.Template.expr_trim.matched(1);
		return this.makePath(function() {
			return Reflect.field(e(),f);
		},l);
	}
	,makeConst: function(v) {
		haxe.Template.expr_trim.match(v);
		v = haxe.Template.expr_trim.matched(1);
		if(HxOverrides.cca(v,0) == 34) {
			var str = HxOverrides.substr(v,1,v.length - 2);
			return function() {
				return str;
			};
		}
		if(haxe.Template.expr_int.match(v)) {
			var i = Std.parseInt(v);
			return function() {
				return i;
			};
		}
		if(haxe.Template.expr_float.match(v)) {
			var f = Std.parseFloat(v);
			return function() {
				return f;
			};
		}
		var me = this;
		return function() {
			return me.resolve(v);
		};
	}
	,parseExpr: function(data) {
		var l = new List();
		var expr = data;
		while(haxe.Template.expr_splitter.match(data)) {
			var p = haxe.Template.expr_splitter.matchedPos();
			var k = p.pos + p.len;
			if(p.pos != 0) l.add({ p : HxOverrides.substr(data,0,p.pos), s : true});
			var p1 = haxe.Template.expr_splitter.matched(0);
			l.add({ p : p1, s : p1.indexOf("\"") >= 0});
			data = haxe.Template.expr_splitter.matchedRight();
		}
		if(data.length != 0) l.add({ p : data, s : true});
		var e;
		try {
			e = this.makeExpr(l);
			if(!l.isEmpty()) throw l.first().p;
		} catch( s ) {
			if( js.Boot.__instanceof(s,String) ) {
				throw "Unexpected '" + s + "' in " + expr;
			} else throw(s);
		}
		return function() {
			try {
				return e();
			} catch( exc ) {
				throw "Error : " + Std.string(exc) + " in " + expr;
			}
		};
	}
	,parse: function(tokens) {
		var t = tokens.pop();
		var p = t.p;
		if(t.s) return haxe._Template.TemplateExpr.OpStr(p);
		if(t.l != null) {
			var pe = new List();
			var _g = 0, _g1 = t.l;
			while(_g < _g1.length) {
				var p1 = _g1[_g];
				++_g;
				pe.add(this.parseBlock(this.parseTokens(p1)));
			}
			return haxe._Template.TemplateExpr.OpMacro(p,pe);
		}
		if(HxOverrides.substr(p,0,3) == "if ") {
			p = HxOverrides.substr(p,3,p.length - 3);
			var e = this.parseExpr(p);
			var eif = this.parseBlock(tokens);
			var t1 = tokens.first();
			var eelse;
			if(t1 == null) throw "Unclosed 'if'";
			if(t1.p == "end") {
				tokens.pop();
				eelse = null;
			} else if(t1.p == "else") {
				tokens.pop();
				eelse = this.parseBlock(tokens);
				t1 = tokens.pop();
				if(t1 == null || t1.p != "end") throw "Unclosed 'else'";
			} else {
				t1.p = HxOverrides.substr(t1.p,4,t1.p.length - 4);
				eelse = this.parse(tokens);
			}
			return haxe._Template.TemplateExpr.OpIf(e,eif,eelse);
		}
		if(HxOverrides.substr(p,0,8) == "foreach ") {
			p = HxOverrides.substr(p,8,p.length - 8);
			var e = this.parseExpr(p);
			var efor = this.parseBlock(tokens);
			var t1 = tokens.pop();
			if(t1 == null || t1.p != "end") throw "Unclosed 'foreach'";
			return haxe._Template.TemplateExpr.OpForeach(e,efor);
		}
		if(haxe.Template.expr_splitter.match(p)) return haxe._Template.TemplateExpr.OpExpr(this.parseExpr(p));
		return haxe._Template.TemplateExpr.OpVar(p);
	}
	,parseBlock: function(tokens) {
		var l = new List();
		while(true) {
			var t = tokens.first();
			if(t == null) break;
			if(!t.s && (t.p == "end" || t.p == "else" || HxOverrides.substr(t.p,0,7) == "elseif ")) break;
			l.add(this.parse(tokens));
		}
		if(l.length == 1) return l.first();
		return haxe._Template.TemplateExpr.OpBlock(l);
	}
	,parseTokens: function(data) {
		var tokens = new List();
		while(haxe.Template.splitter.match(data)) {
			var p = haxe.Template.splitter.matchedPos();
			if(p.pos > 0) tokens.add({ p : HxOverrides.substr(data,0,p.pos), s : true, l : null});
			if(HxOverrides.cca(data,p.pos) == 58) {
				tokens.add({ p : HxOverrides.substr(data,p.pos + 2,p.len - 4), s : false, l : null});
				data = haxe.Template.splitter.matchedRight();
				continue;
			}
			var parp = p.pos + p.len;
			var npar = 1;
			while(npar > 0) {
				var c = HxOverrides.cca(data,parp);
				if(c == 40) npar++; else if(c == 41) npar--; else if(c == null) throw "Unclosed macro parenthesis";
				parp++;
			}
			var params = HxOverrides.substr(data,p.pos + p.len,parp - (p.pos + p.len) - 1).split(",");
			tokens.add({ p : haxe.Template.splitter.matched(2), s : false, l : params});
			data = HxOverrides.substr(data,parp,data.length - parp);
		}
		if(data.length > 0) tokens.add({ p : data, s : true, l : null});
		return tokens;
	}
	,resolve: function(v) {
		if(Reflect.hasField(this.context,v)) return Reflect.field(this.context,v);
		var $it0 = this.stack.iterator();
		while( $it0.hasNext() ) {
			var ctx = $it0.next();
			if(Reflect.hasField(ctx,v)) return Reflect.field(ctx,v);
		}
		if(v == "__current__") return this.context;
		return Reflect.field(haxe.Template.globals,v);
	}
	,execute: function(context,macros) {
		this.macros = macros == null?{ }:macros;
		this.context = context;
		this.stack = new List();
		this.buf = new StringBuf();
		this.run(this.expr);
		return this.buf.b;
	}
	,__class__: haxe.Template
}
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0, _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
}
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
}
haxe.Unserializer.prototype = {
	unserialize: function() {
		var _g = this.buf.charCodeAt(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = StringTools.urlDecode(s);
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n = this.readDigits();
			if(n < 0 || n >= this.cache.length) throw "Invalid reference";
			return this.cache[n];
		case 82:
			var n = this.readDigits();
			if(n < 0 || n >= this.scache.length) throw "Invalid string reference";
			return this.scache[n];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 119:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl)[index];
			if(tag == null) throw "Unknown enum index " + name + "@" + index;
			var e = this.unserializeEnum(edecl,tag);
			this.cache.push(e);
			return e;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h = new haxe.ds.IntMap();
			this.cache.push(h);
			var buf = this.buf;
			var c = this.buf.charCodeAt(this.pos++);
			while(c == 58) {
				var i = this.readDigits();
				h.set(i,this.unserialize());
				c = this.buf.charCodeAt(this.pos++);
			}
			if(c != 104) throw "Invalid IntMap format";
			return h;
		case 77:
			var h = new haxe.ds.ObjectMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 118:
			var d = HxOverrides.strDate(HxOverrides.substr(this.buf,this.pos,19));
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len = this.readDigits();
			var buf = this.buf;
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i = this.pos;
			var rest = len & 3;
			var size = (len >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i + (len - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i < max) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				var c3 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				var c4 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c3 << 6 | c4) & 255;
			}
			if(rest >= 2) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				if(rest == 3) {
					var c3 = codes[buf.charCodeAt(i++)];
					bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				}
			}
			this.pos += len;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			o.hxUnserialize(this);
			if(this.buf.charCodeAt(this.pos++) != 103) throw "Invalid custom data";
			return o;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.buf.charCodeAt(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!js.Boot.__instanceof(k,String)) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_) {
			return null;
		}}; else this.resolver = r;
	}
	,__class__: haxe.Unserializer
}
haxe.ds = {}
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,get: function(key) {
		return this.h[key];
	}
	,set: function(key,value) {
		this.h[key] = value;
	}
	,__class__: haxe.ds.IntMap
}
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		var id = key.__id__;
		if(!this.h.hasOwnProperty(id)) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key.__id__);
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,set: function(key,value) {
		var id = key.__id__ != null?key.__id__:key.__id__ = ++haxe.ds.ObjectMap.count;
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,__class__: haxe.ds.ObjectMap
}
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,__class__: haxe.ds.StringMap
}
haxe.io = {}
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.prototype = {
	toString: function() {
		return this.readString(0,this.length);
	}
	,readString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c2 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,__class__: haxe.io.Bytes
}
haxe.io.Eof = function() { }
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
}
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
var js = {}
js.Boot = function() { }
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					if(cl == Array) return o.__enum__ == null;
					return true;
				}
				if(js.Boot.__interfLoop(o.__class__,cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
js.Browser = function() { }
$hxClasses["js.Browser"] = js.Browser;
js.Browser.__name__ = ["js","Browser"];
var motion = {}
motion.actuators = {}
motion.actuators.IGenericActuator = function() { }
$hxClasses["motion.actuators.IGenericActuator"] = motion.actuators.IGenericActuator;
motion.actuators.IGenericActuator.__name__ = ["motion","actuators","IGenericActuator"];
motion.actuators.IGenericActuator.prototype = {
	__class__: motion.actuators.IGenericActuator
}
motion.actuators.GenericActuator = function(target,duration,properties) {
	this._autoVisible = true;
	this._delay = 0;
	this._reflect = false;
	this._repeat = 0;
	this._reverse = false;
	this._smartRotation = false;
	this._snapping = false;
	this.special = false;
	this.target = target;
	this.properties = properties;
	this.duration = duration;
	this._ease = motion.Actuate.defaultEase;
};
$hxClasses["motion.actuators.GenericActuator"] = motion.actuators.GenericActuator;
motion.actuators.GenericActuator.__name__ = ["motion","actuators","GenericActuator"];
motion.actuators.GenericActuator.__interfaces__ = [motion.actuators.IGenericActuator];
motion.actuators.GenericActuator.prototype = {
	stop: function(properties,complete,sendEvent) {
	}
	,snapping: function(value) {
		if(value == null) value = true;
		this._snapping = value;
		this.special = true;
		return this;
	}
	,smartRotation: function(value) {
		if(value == null) value = true;
		this._smartRotation = value;
		this.special = true;
		return this;
	}
	,reverse: function(value) {
		if(value == null) value = true;
		this._reverse = value;
		this.special = true;
		return this;
	}
	,resume: function() {
	}
	,repeat: function(times) {
		if(times == null) times = -1;
		this._repeat = times;
		return this;
	}
	,reflect: function(value) {
		if(value == null) value = true;
		this._reflect = value;
		this.special = true;
		return this;
	}
	,pause: function() {
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		return this;
	}
	,onRepeat: function(handler,parameters) {
		this._onRepeat = handler;
		if(parameters == null) this._onRepeatParams = []; else this._onRepeatParams = parameters;
		return this;
	}
	,onComplete: function(handler,parameters) {
		this._onComplete = handler;
		if(parameters == null) this._onCompleteParams = []; else this._onCompleteParams = parameters;
		if(this.duration == 0) this.complete();
		return this;
	}
	,move: function() {
	}
	,ease: function(easing) {
		this._ease = easing;
		return this;
	}
	,delay: function(duration) {
		this._delay = duration;
		return this;
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		if(sendEvent) {
			this.change();
			if(this._onComplete != null) this.callMethod(this._onComplete,this._onCompleteParams);
		}
		motion.Actuate.unload(this);
	}
	,change: function() {
		if(this._onUpdate != null) this.callMethod(this._onUpdate,this._onUpdateParams);
	}
	,callMethod: function(method,params) {
		if(params == null) params = [];
		return method.apply(method,params);
	}
	,autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		return this;
	}
	,apply: function() {
		var _g = 0, _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(Reflect.hasField(this.target,i)) this.target[i] = Reflect.field(this.properties,i); else Reflect.setProperty(this.target,i,Reflect.field(this.properties,i));
		}
	}
	,__class__: motion.actuators.GenericActuator
}
motion.actuators.SimpleActuator = function(target,duration,properties) {
	this.active = true;
	this.propertyDetails = new Array();
	this.sendChange = false;
	this.paused = false;
	this.cacheVisible = false;
	this.initialized = false;
	this.setVisible = false;
	this.toggleVisible = false;
	this.startTime = flash.Lib.getTimer() / 1000;
	motion.actuators.GenericActuator.call(this,target,duration,properties);
	if(!motion.actuators.SimpleActuator.addedEvent) {
		motion.actuators.SimpleActuator.addedEvent = true;
		flash.Lib.get_current().get_stage().addEventListener(flash.events.Event.ENTER_FRAME,motion.actuators.SimpleActuator.stage_onEnterFrame);
	}
};
$hxClasses["motion.actuators.SimpleActuator"] = motion.actuators.SimpleActuator;
motion.actuators.SimpleActuator.__name__ = ["motion","actuators","SimpleActuator"];
motion.actuators.SimpleActuator.stage_onEnterFrame = function(event) {
	var currentTime = flash.Lib.getTimer() / 1000;
	var actuator;
	var j = 0;
	var cleanup = false;
	var _g1 = 0, _g = motion.actuators.SimpleActuator.actuatorsLength;
	while(_g1 < _g) {
		var i = _g1++;
		actuator = motion.actuators.SimpleActuator.actuators[j];
		if(actuator.active) {
			if(currentTime > actuator.timeOffset) actuator.update(currentTime);
			j++;
		} else {
			motion.actuators.SimpleActuator.actuators.splice(j,1);
			--motion.actuators.SimpleActuator.actuatorsLength;
		}
	}
}
motion.actuators.SimpleActuator.__super__ = motion.actuators.GenericActuator;
motion.actuators.SimpleActuator.prototype = $extend(motion.actuators.GenericActuator.prototype,{
	update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var i;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g1 = 0, _g = this.detailsLength;
				while(_g1 < _g) {
					var i1 = _g1++;
					details = this.propertyDetails[i1];
					this.setProperty(details,details.start + details.change * easing);
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g1 = 0, _g = this.detailsLength;
				while(_g1 < _g) {
					var i1 = _g1++;
					details = this.propertyDetails[i1];
					if(this._smartRotation && (details.propertyName == "rotation" || details.propertyName == "rotationX" || details.propertyName == "rotationY" || details.propertyName == "rotationZ")) {
						var rotation = details.change % 360;
						if(rotation > 180) rotation -= 360; else if(rotation < -180) rotation += 360;
						endValue = details.start + rotation * easing;
					} else endValue = details.start + details.change * easing;
					if(!this._snapping) {
						if(details.isField) details.target[details.propertyName] = endValue; else Reflect.setProperty(details.target,details.propertyName,endValue);
					} else this.setProperty(details,Math.round(endValue));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._onRepeat != null) this.callMethod(this._onRepeat,this._onRepeatParams);
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,stop: function(properties,complete,sendEvent) {
		if(this.active) {
			if(properties == null) {
				this.active = false;
				if(complete) this.apply();
				this.complete(sendEvent);
				return;
			}
			var _g = 0, _g1 = Reflect.fields(properties);
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				if(Reflect.hasField(this.properties,i)) {
					this.active = false;
					if(complete) this.apply();
					this.complete(sendEvent);
					return;
				}
			}
		}
	}
	,setProperty: function(details,value) {
		if(details.isField) details.target[details.propertyName] = value; else Reflect.setProperty(details.target,details.propertyName,value);
	}
	,setField: function(target,propertyName,value) {
		if(Reflect.hasField(target,propertyName)) target[propertyName] = value; else Reflect.setProperty(target,propertyName,value);
	}
	,resume: function() {
		if(this.paused) {
			this.paused = false;
			this.timeOffset += (flash.Lib.getTimer() - this.pauseTime) / 1000;
		}
	}
	,pause: function() {
		this.paused = true;
		this.pauseTime = flash.Lib.getTimer();
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		this.sendChange = true;
		return this;
	}
	,move: function() {
		this.toggleVisible = Reflect.hasField(this.properties,"alpha") && js.Boot.__instanceof(this.target,flash.display.DisplayObject);
		if(this.toggleVisible && this.properties.alpha != 0 && !this.getField(this.target,"visible")) {
			this.setVisible = true;
			this.cacheVisible = this.getField(this.target,"visible");
			this.setField(this.target,"visible",true);
		}
		this.timeOffset = this.startTime;
		motion.actuators.SimpleActuator.actuators.push(this);
		++motion.actuators.SimpleActuator.actuatorsLength;
	}
	,initialize: function() {
		var details;
		var start;
		var _g = 0, _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			var isField = true;
			if(Reflect.hasField(this.target,i)) start = Reflect.field(this.target,i); else {
				isField = false;
				start = Reflect.getProperty(this.target,i);
			}
			if(js.Boot.__instanceof(start,Float)) {
				details = new motion.actuators.PropertyDetails(this.target,i,start,this.getField(this.properties,i) - start,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,getField: function(target,propertyName) {
		var value = null;
		if(Reflect.hasField(target,propertyName)) value = Reflect.field(target,propertyName); else value = Reflect.getProperty(target,propertyName);
		return value;
	}
	,delay: function(duration) {
		this._delay = duration;
		this.timeOffset = this.startTime + duration;
		return this;
	}
	,autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		if(!value) {
			this.toggleVisible = false;
			if(this.setVisible) this.setField(this.target,"visible",this.cacheVisible);
		}
		return this;
	}
	,__class__: motion.actuators.SimpleActuator
});
motion.easing = {}
motion.easing.Expo = function() { }
$hxClasses["motion.easing.Expo"] = motion.easing.Expo;
motion.easing.Expo.__name__ = ["motion","easing","Expo"];
motion.easing.Expo.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"}
motion.easing.Expo.get_easeIn = function() {
	return new motion.easing.ExpoEaseIn();
}
motion.easing.Expo.get_easeInOut = function() {
	return new motion.easing.ExpoEaseInOut();
}
motion.easing.Expo.get_easeOut = function() {
	return new motion.easing.ExpoEaseOut();
}
motion.easing.IEasing = function() { }
$hxClasses["motion.easing.IEasing"] = motion.easing.IEasing;
motion.easing.IEasing.__name__ = ["motion","easing","IEasing"];
motion.easing.IEasing.prototype = {
	__class__: motion.easing.IEasing
}
motion.easing.ExpoEaseOut = function() {
};
$hxClasses["motion.easing.ExpoEaseOut"] = motion.easing.ExpoEaseOut;
motion.easing.ExpoEaseOut.__name__ = ["motion","easing","ExpoEaseOut"];
motion.easing.ExpoEaseOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseOut.prototype = {
	ease: function(t,b,c,d) {
		return t == d?b + c:c * (1 - Math.pow(2,-10 * t / d)) + b;
	}
	,calculate: function(k) {
		return k == 1?1:1 - Math.pow(2,-10 * k);
	}
	,__class__: motion.easing.ExpoEaseOut
}
motion.Actuate = function() { }
$hxClasses["motion.Actuate"] = motion.Actuate;
motion.Actuate.__name__ = ["motion","Actuate"];
motion.Actuate.apply = function(target,properties,customActuator) {
	motion.Actuate.stop(target,properties);
	if(customActuator == null) customActuator = motion.Actuate.defaultActuator;
	var actuator = Type.createInstance(customActuator,[target,0,properties]);
	actuator.apply();
	return actuator;
}
motion.Actuate.effects = function(target,duration,overwrite) {
	if(overwrite == null) overwrite = true;
	return new motion._Actuate.EffectsOptions(target,duration,overwrite);
}
motion.Actuate.getLibrary = function(target,allowCreation) {
	if(allowCreation == null) allowCreation = true;
	if(!motion.Actuate.targetLibraries.exists(target) && allowCreation) motion.Actuate.targetLibraries.set(target,new Array());
	return motion.Actuate.targetLibraries.get(target);
}
motion.Actuate.motionPath = function(target,duration,properties,overwrite) {
	if(overwrite == null) overwrite = true;
	return motion.Actuate.tween(target,duration,properties,overwrite,motion.actuators.MotionPathActuator);
}
motion.Actuate.pause = function(target) {
	if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).pause(); else {
		var library = motion.Actuate.getLibrary(target,false);
		if(library != null) {
			var _g = 0;
			while(_g < library.length) {
				var actuator = library[_g];
				++_g;
				actuator.pause();
			}
		}
	}
}
motion.Actuate.pauseAll = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.pause();
		}
	}
}
motion.Actuate.reset = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var i = library.length - 1;
		while(i >= 0) {
			library[i].stop(null,false,false);
			i--;
		}
	}
	motion.Actuate.targetLibraries = new haxe.ds.ObjectMap();
}
motion.Actuate.resume = function(target) {
	if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).resume(); else {
		var library = motion.Actuate.getLibrary(target,false);
		if(library != null) {
			var _g = 0;
			while(_g < library.length) {
				var actuator = library[_g];
				++_g;
				actuator.resume();
			}
		}
	}
}
motion.Actuate.resumeAll = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.resume();
		}
	}
}
motion.Actuate.stop = function(target,properties,complete,sendEvent) {
	if(sendEvent == null) sendEvent = true;
	if(complete == null) complete = false;
	if(target != null) {
		if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).stop(null,complete,sendEvent); else {
			var library = motion.Actuate.getLibrary(target,false);
			if(library != null) {
				if(js.Boot.__instanceof(properties,String)) {
					var temp = { };
					Reflect.setField(temp,properties,null);
					properties = temp;
				} else if(js.Boot.__instanceof(properties,Array)) {
					var temp = { };
					var _g = 0, _g1 = js.Boot.__cast(properties , Array);
					while(_g < _g1.length) {
						var property = _g1[_g];
						++_g;
						Reflect.setField(temp,property,null);
					}
					properties = temp;
				}
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(properties,complete,sendEvent);
					i--;
				}
			}
		}
	}
}
motion.Actuate.timer = function(duration,customActuator) {
	return motion.Actuate.tween(new motion._Actuate.TweenTimer(0),duration,new motion._Actuate.TweenTimer(1),false,customActuator);
}
motion.Actuate.transform = function(target,duration,overwrite) {
	if(overwrite == null) overwrite = true;
	if(duration == null) duration = 0;
	return new motion._Actuate.TransformOptions(target,duration,overwrite);
}
motion.Actuate.tween = function(target,duration,properties,overwrite,customActuator) {
	if(overwrite == null) overwrite = true;
	if(target != null) {
		if(duration > 0) {
			if(customActuator == null) customActuator = motion.Actuate.defaultActuator;
			var actuator = Type.createInstance(customActuator,[target,duration,properties]);
			var library = motion.Actuate.getLibrary(actuator.target);
			if(overwrite) {
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(actuator.properties,false,false);
					i--;
				}
			}
			library.push(actuator);
			actuator.move();
			return actuator;
		} else return motion.Actuate.apply(target,properties,customActuator);
	}
	return null;
}
motion.Actuate.unload = function(actuator) {
	var target = actuator.target;
	if(motion.Actuate.targetLibraries.h.hasOwnProperty(target.__id__)) {
		HxOverrides.remove(motion.Actuate.targetLibraries.h[target.__id__],actuator);
		if(motion.Actuate.targetLibraries.h[target.__id__].length == 0) motion.Actuate.targetLibraries.remove(target);
	}
}
motion.Actuate.update = function(target,duration,start,end,overwrite) {
	if(overwrite == null) overwrite = true;
	var properties = { start : start, end : end};
	return motion.Actuate.tween(target,duration,properties,overwrite,motion.actuators.MethodActuator);
}
motion._Actuate = {}
motion._Actuate.EffectsOptions = function(target,duration,overwrite) {
	this.target = target;
	this.duration = duration;
	this.overwrite = overwrite;
};
$hxClasses["motion._Actuate.EffectsOptions"] = motion._Actuate.EffectsOptions;
motion._Actuate.EffectsOptions.__name__ = ["motion","_Actuate","EffectsOptions"];
motion._Actuate.EffectsOptions.prototype = {
	filter: function(reference,properties) {
		properties.filter = reference;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.FilterActuator);
	}
	,__class__: motion._Actuate.EffectsOptions
}
motion._Actuate.TransformOptions = function(target,duration,overwrite) {
	this.target = target;
	this.duration = duration;
	this.overwrite = overwrite;
};
$hxClasses["motion._Actuate.TransformOptions"] = motion._Actuate.TransformOptions;
motion._Actuate.TransformOptions.__name__ = ["motion","_Actuate","TransformOptions"];
motion._Actuate.TransformOptions.prototype = {
	sound: function(volume,pan) {
		var properties = { };
		if(volume != null) properties.soundVolume = volume;
		if(pan != null) properties.soundPan = pan;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.TransformActuator);
	}
	,color: function(value,strength,alpha) {
		if(strength == null) strength = 1;
		if(value == null) value = 0;
		var properties = { colorValue : value, colorStrength : strength};
		if(alpha != null) properties.colorAlpha = alpha;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.TransformActuator);
	}
	,__class__: motion._Actuate.TransformOptions
}
motion._Actuate.TweenTimer = function(progress) {
	this.progress = progress;
};
$hxClasses["motion._Actuate.TweenTimer"] = motion._Actuate.TweenTimer;
motion._Actuate.TweenTimer.__name__ = ["motion","_Actuate","TweenTimer"];
motion._Actuate.TweenTimer.prototype = {
	__class__: motion._Actuate.TweenTimer
}
motion.MotionPath = function() {
	this._x = new motion.ComponentPath();
	this._y = new motion.ComponentPath();
	this._rotation = null;
};
$hxClasses["motion.MotionPath"] = motion.MotionPath;
motion.MotionPath.__name__ = ["motion","MotionPath"];
motion.MotionPath.prototype = {
	get_y: function() {
		return this._y;
	}
	,get_x: function() {
		return this._x;
	}
	,get_rotation: function() {
		if(this._rotation == null) this._rotation = new motion.RotationPath(this._x,this._y);
		return this._rotation;
	}
	,line: function(x,y,strength) {
		if(strength == null) strength = 1;
		this._x.addPath(new motion.LinearPath(x,strength));
		this._y.addPath(new motion.LinearPath(y,strength));
		return this;
	}
	,bezier: function(x,y,controlX,controlY,strength) {
		if(strength == null) strength = 1;
		this._x.addPath(new motion.BezierPath(x,controlX,strength));
		this._y.addPath(new motion.BezierPath(y,controlY,strength));
		return this;
	}
	,__class__: motion.MotionPath
	,__properties__: {get_rotation:"get_rotation",get_x:"get_x",get_y:"get_y"}
}
motion.IComponentPath = function() { }
$hxClasses["motion.IComponentPath"] = motion.IComponentPath;
motion.IComponentPath.__name__ = ["motion","IComponentPath"];
motion.IComponentPath.prototype = {
	__class__: motion.IComponentPath
}
motion.ComponentPath = function() {
	this.paths = new Array();
	this.start = 0;
	this.totalStrength = 0;
};
$hxClasses["motion.ComponentPath"] = motion.ComponentPath;
motion.ComponentPath.__name__ = ["motion","ComponentPath"];
motion.ComponentPath.__interfaces__ = [motion.IComponentPath];
motion.ComponentPath.prototype = {
	get_end: function() {
		if(this.paths.length > 0) {
			var path = this.paths[this.paths.length - 1];
			return path.end;
		} else return this.start;
	}
	,calculate: function(k) {
		if(this.paths.length == 1) return this.paths[0].calculate(this.start,k); else {
			var ratio = k * this.totalStrength;
			var lastEnd = this.start;
			var _g = 0, _g1 = this.paths;
			while(_g < _g1.length) {
				var path = _g1[_g];
				++_g;
				if(ratio > path.strength) {
					ratio -= path.strength;
					lastEnd = path.end;
				} else return path.calculate(lastEnd,ratio / path.strength);
			}
		}
		return 0;
	}
	,addPath: function(path) {
		this.paths.push(path);
		this.totalStrength += path.strength;
	}
	,__class__: motion.ComponentPath
	,__properties__: {get_end:"get_end"}
}
motion.BezierPath = function(end,control,strength) {
	this.end = end;
	this.control = control;
	this.strength = strength;
};
$hxClasses["motion.BezierPath"] = motion.BezierPath;
motion.BezierPath.__name__ = ["motion","BezierPath"];
motion.BezierPath.prototype = {
	calculate: function(start,k) {
		return (1 - k) * (1 - k) * start + 2 * (1 - k) * k * this.control + k * k * this.end;
	}
	,__class__: motion.BezierPath
}
motion.LinearPath = function(end,strength) {
	motion.BezierPath.call(this,end,0,strength);
};
$hxClasses["motion.LinearPath"] = motion.LinearPath;
motion.LinearPath.__name__ = ["motion","LinearPath"];
motion.LinearPath.__super__ = motion.BezierPath;
motion.LinearPath.prototype = $extend(motion.BezierPath.prototype,{
	calculate: function(start,k) {
		return start + k * (this.end - start);
	}
	,__class__: motion.LinearPath
});
motion.RotationPath = function(x,y) {
	this.step = 0.01;
	this._x = x;
	this._y = y;
	this.offset = 0;
	this.start = this.calculate(0.0);
};
$hxClasses["motion.RotationPath"] = motion.RotationPath;
motion.RotationPath.__name__ = ["motion","RotationPath"];
motion.RotationPath.__interfaces__ = [motion.IComponentPath];
motion.RotationPath.prototype = {
	get_end: function() {
		return this.calculate(1.0);
	}
	,calculate: function(k) {
		var dX = this._x.calculate(k) - this._x.calculate(k + this.step);
		var dY = this._y.calculate(k) - this._y.calculate(k + this.step);
		var angle = Math.atan2(dY,dX) * (180 / Math.PI);
		angle = (angle + this.offset) % 360;
		return angle;
	}
	,__class__: motion.RotationPath
	,__properties__: {get_end:"get_end"}
}
motion.actuators.FilterActuator = function(target,duration,properties) {
	this.filterIndex = -1;
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
	if(js.Boot.__instanceof(properties.filter,Class)) {
		this.filterClass = properties.filter;
		var _g = 0, _g1 = (js.Boot.__cast(target , flash.display.DisplayObject)).get_filters();
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(filter,this.filterClass)) this.filter = filter;
		}
	} else {
		this.filterIndex = properties.filter;
		this.filter = (js.Boot.__cast(target , flash.display.DisplayObject)).get_filters()[this.filterIndex];
	}
};
$hxClasses["motion.actuators.FilterActuator"] = motion.actuators.FilterActuator;
motion.actuators.FilterActuator.__name__ = ["motion","actuators","FilterActuator"];
motion.actuators.FilterActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.FilterActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		var filters = (js.Boot.__cast(this.target , flash.display.DisplayObject)).get_filters();
		if(this.filterIndex > -1) Reflect.setField(filters,this.properties.filter,this.filter); else {
			var _g1 = 0, _g = filters.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(js.Boot.__instanceof(filters[i],this.filterClass)) filters[i] = this.filter;
			}
		}
		this.setField(this.target,"filters",filters);
	}
	,initialize: function() {
		var details;
		var start;
		var _g = 0, _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") {
				start = this.getField(this.filter,propertyName);
				details = new motion.actuators.PropertyDetails(this.filter,propertyName,start,Reflect.field(this.properties,propertyName) - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,apply: function() {
		var _g = 0, _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") this.filter[propertyName] = Reflect.field(this.properties,propertyName);
		}
		var filters = this.getField(this.target,"filters");
		Reflect.setField(filters,this.properties.filter,this.filter);
		this.setField(this.target,"filters",filters);
	}
	,__class__: motion.actuators.FilterActuator
});
motion.actuators.MethodActuator = function(target,duration,properties) {
	this.currentParameters = new Array();
	this.tweenProperties = { };
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
	if(!Reflect.hasField(properties,"start")) this.properties.start = new Array();
	if(!Reflect.hasField(properties,"end")) this.properties.end = this.properties.start;
	var _g1 = 0, _g = this.properties.start.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.currentParameters.push(null);
	}
};
$hxClasses["motion.actuators.MethodActuator"] = motion.actuators.MethodActuator;
motion.actuators.MethodActuator.__name__ = ["motion","actuators","MethodActuator"];
motion.actuators.MethodActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.MethodActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		if(this.active) {
			var _g1 = 0, _g = this.properties.start.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
			}
			this.callMethod(this.target,this.currentParameters);
		}
	}
	,initialize: function() {
		var details;
		var propertyName;
		var start;
		var _g1 = 0, _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			propertyName = "param" + i;
			start = this.properties.start[i];
			this.tweenProperties[propertyName] = start;
			if(js.Boot.__instanceof(start,Float) || js.Boot.__instanceof(start,Int)) {
				details = new motion.actuators.PropertyDetails(this.tweenProperties,propertyName,start,this.properties.end[i] - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		var _g1 = 0, _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
		}
		this.callMethod(this.target,this.currentParameters);
		motion.actuators.SimpleActuator.prototype.complete.call(this,sendEvent);
	}
	,apply: function() {
		this.callMethod(this.target,this.properties.end);
	}
	,__class__: motion.actuators.MethodActuator
});
motion.actuators.MotionPathActuator = function(target,duration,properties) {
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
};
$hxClasses["motion.actuators.MotionPathActuator"] = motion.actuators.MotionPathActuator;
motion.actuators.MotionPathActuator.__name__ = ["motion","actuators","MotionPathActuator"];
motion.actuators.MotionPathActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.MotionPathActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g = 0, _g1 = this.propertyDetails;
				while(_g < _g1.length) {
					var details1 = _g1[_g];
					++_g;
					if(details1.isField) details1.target[details1.propertyName] = (js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing); else Reflect.setProperty(details1.target,details1.propertyName,(js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing));
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g = 0, _g1 = this.propertyDetails;
				while(_g < _g1.length) {
					var details1 = _g1[_g];
					++_g;
					if(!this._snapping) {
						if(details1.isField) details1.target[details1.propertyName] = (js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing); else Reflect.setProperty(details1.target,details1.propertyName,(js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing));
					} else if(details1.isField) details1.target[details1.propertyName] = Math.round((js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing)); else Reflect.setProperty(details1.target,details1.propertyName,Math.round((js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing)));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,initialize: function() {
		var details;
		var path;
		var _g = 0, _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			path = js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath);
			if(path != null) {
				var isField = true;
				if(Reflect.hasField(this.target,propertyName)) path.start = Reflect.field(this.target,propertyName); else {
					isField = false;
					path.start = Reflect.getProperty(this.target,propertyName);
				}
				details = new motion.actuators.PropertyPathDetails(this.target,propertyName,path,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,apply: function() {
		var _g = 0, _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(Reflect.hasField(this.target,propertyName)) this.target[propertyName] = (js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath)).get_end(); else Reflect.setProperty(this.target,propertyName,(js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath)).get_end());
		}
	}
	,__class__: motion.actuators.MotionPathActuator
});
motion.actuators.PropertyDetails = function(target,propertyName,start,change,isField) {
	if(isField == null) isField = true;
	this.target = target;
	this.propertyName = propertyName;
	this.start = start;
	this.change = change;
	this.isField = isField;
};
$hxClasses["motion.actuators.PropertyDetails"] = motion.actuators.PropertyDetails;
motion.actuators.PropertyDetails.__name__ = ["motion","actuators","PropertyDetails"];
motion.actuators.PropertyDetails.prototype = {
	__class__: motion.actuators.PropertyDetails
}
motion.actuators.PropertyPathDetails = function(target,propertyName,path,isField) {
	if(isField == null) isField = true;
	motion.actuators.PropertyDetails.call(this,target,propertyName,0,0,isField);
	this.path = path;
};
$hxClasses["motion.actuators.PropertyPathDetails"] = motion.actuators.PropertyPathDetails;
motion.actuators.PropertyPathDetails.__name__ = ["motion","actuators","PropertyPathDetails"];
motion.actuators.PropertyPathDetails.__super__ = motion.actuators.PropertyDetails;
motion.actuators.PropertyPathDetails.prototype = $extend(motion.actuators.PropertyDetails.prototype,{
	__class__: motion.actuators.PropertyPathDetails
});
motion.actuators.TransformActuator = function(target,duration,properties) {
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
};
$hxClasses["motion.actuators.TransformActuator"] = motion.actuators.TransformActuator;
motion.actuators.TransformActuator.__name__ = ["motion","actuators","TransformActuator"];
motion.actuators.TransformActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.TransformActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField(transform,"colorTransform",this.tweenColorTransform);
		}
		if(this.endSoundTransform != null) this.setField(this.target,"soundTransform",this.tweenSoundTransform);
	}
	,initializeSound: function() {
		if(this.getField(this.target,"soundTransform") == null) this.setField(this.target,"soundTransform",new flash.media.SoundTransform());
		var start = this.getField(this.target,"soundTransform");
		this.endSoundTransform = this.getField(this.target,"soundTransform");
		this.tweenSoundTransform = new flash.media.SoundTransform();
		if(Reflect.hasField(this.properties,"soundVolume")) {
			this.endSoundTransform.volume = this.properties.soundVolume;
			this.propertyDetails.push(new motion.actuators.PropertyDetails(this.tweenSoundTransform,"volume",start.volume,this.endSoundTransform.volume - start.volume));
		}
		if(Reflect.hasField(this.properties,"soundPan")) {
			this.endSoundTransform.pan = this.properties.soundPan;
			this.propertyDetails.push(new motion.actuators.PropertyDetails(this.tweenSoundTransform,"pan",start.pan,this.endSoundTransform.pan - start.pan));
		}
	}
	,initializeColor: function() {
		this.endColorTransform = new flash.geom.ColorTransform();
		var color = this.properties.colorValue;
		var strength = this.properties.colorStrength;
		if(strength < 1) {
			var multiplier;
			var offset;
			if(strength < 0.5) {
				multiplier = 1;
				offset = strength * 2;
			} else {
				multiplier = 1 - (strength - 0.5) * 2;
				offset = 1;
			}
			this.endColorTransform.redMultiplier = multiplier;
			this.endColorTransform.greenMultiplier = multiplier;
			this.endColorTransform.blueMultiplier = multiplier;
			this.endColorTransform.redOffset = offset * (color >> 16 & 255);
			this.endColorTransform.greenOffset = offset * (color >> 8 & 255);
			this.endColorTransform.blueOffset = offset * (color & 255);
		} else {
			this.endColorTransform.redMultiplier = 0;
			this.endColorTransform.greenMultiplier = 0;
			this.endColorTransform.blueMultiplier = 0;
			this.endColorTransform.redOffset = color >> 16 & 255;
			this.endColorTransform.greenOffset = color >> 8 & 255;
			this.endColorTransform.blueOffset = color & 255;
		}
		var propertyNames = ["redMultiplier","greenMultiplier","blueMultiplier","redOffset","greenOffset","blueOffset"];
		if(Reflect.hasField(this.properties,"colorAlpha")) {
			this.endColorTransform.alphaMultiplier = this.properties.colorAlpha;
			propertyNames.push("alphaMultiplier");
		} else this.endColorTransform.alphaMultiplier = this.getField(this.target,"alpha");
		var transform = this.getField(this.target,"transform");
		var begin = this.getField(transform,"colorTransform");
		this.tweenColorTransform = new flash.geom.ColorTransform();
		var details;
		var start;
		var _g = 0;
		while(_g < propertyNames.length) {
			var propertyName = propertyNames[_g];
			++_g;
			start = this.getField(begin,propertyName);
			details = new motion.actuators.PropertyDetails(this.tweenColorTransform,propertyName,start,this.getField(this.endColorTransform,propertyName) - start);
			this.propertyDetails.push(details);
		}
	}
	,initialize: function() {
		if(Reflect.hasField(this.properties,"colorValue") && js.Boot.__instanceof(this.target,flash.display.DisplayObject)) this.initializeColor();
		if(Reflect.hasField(this.properties,"soundVolume") || Reflect.hasField(this.properties,"soundPan")) this.initializeSound();
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,apply: function() {
		this.initialize();
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField(transform,"colorTransform",this.endColorTransform);
		}
		if(this.endSoundTransform != null) this.setField(this.target,"soundTransform",this.endSoundTransform);
	}
	,__class__: motion.actuators.TransformActuator
});
motion.easing.ExpoEaseIn = function() {
};
$hxClasses["motion.easing.ExpoEaseIn"] = motion.easing.ExpoEaseIn;
motion.easing.ExpoEaseIn.__name__ = ["motion","easing","ExpoEaseIn"];
motion.easing.ExpoEaseIn.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseIn.prototype = {
	ease: function(t,b,c,d) {
		return t == 0?b:c * Math.pow(2,10 * (t / d - 1)) + b;
	}
	,calculate: function(k) {
		return k == 0?0:Math.pow(2,10 * (k - 1));
	}
	,__class__: motion.easing.ExpoEaseIn
}
motion.easing.ExpoEaseInOut = function() {
};
$hxClasses["motion.easing.ExpoEaseInOut"] = motion.easing.ExpoEaseInOut;
motion.easing.ExpoEaseInOut.__name__ = ["motion","easing","ExpoEaseInOut"];
motion.easing.ExpoEaseInOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseInOut.prototype = {
	ease: function(t,b,c,d) {
		if(t == 0) return b;
		if(t == d) return b + c;
		if((t /= d / 2.0) < 1.0) return c / 2 * Math.pow(2,10 * (t - 1)) + b;
		return c / 2 * (2 - Math.pow(2,-10 * --t)) + b;
	}
	,calculate: function(k) {
		if(k == 0) return 0;
		if(k == 1) return 1;
		if((k /= 0.5) < 1.0) return 0.5 * Math.pow(2,10 * (k - 1));
		return 0.5 * (2 - Math.pow(2,-10 * --k));
	}
	,__class__: motion.easing.ExpoEaseInOut
}
motion.easing.Quad = function() { }
$hxClasses["motion.easing.Quad"] = motion.easing.Quad;
motion.easing.Quad.__name__ = ["motion","easing","Quad"];
motion.easing.Quad.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"}
motion.easing.Quad.get_easeIn = function() {
	return new motion.easing.QuadEaseIn();
}
motion.easing.Quad.get_easeInOut = function() {
	return new motion.easing.QuadEaseInOut();
}
motion.easing.Quad.get_easeOut = function() {
	return new motion.easing.QuadEaseOut();
}
motion.easing.QuadEaseIn = function() {
};
$hxClasses["motion.easing.QuadEaseIn"] = motion.easing.QuadEaseIn;
motion.easing.QuadEaseIn.__name__ = ["motion","easing","QuadEaseIn"];
motion.easing.QuadEaseIn.__interfaces__ = [motion.easing.IEasing];
motion.easing.QuadEaseIn.prototype = {
	ease: function(t,b,c,d) {
		return c * (t /= d) * t + b;
	}
	,calculate: function(k) {
		return k * k;
	}
	,__class__: motion.easing.QuadEaseIn
}
motion.easing.QuadEaseInOut = function() {
};
$hxClasses["motion.easing.QuadEaseInOut"] = motion.easing.QuadEaseInOut;
motion.easing.QuadEaseInOut.__name__ = ["motion","easing","QuadEaseInOut"];
motion.easing.QuadEaseInOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.QuadEaseInOut.prototype = {
	ease: function(t,b,c,d) {
		if((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((t - 1) * (t - 3) - 1) + b;
	}
	,calculate: function(k) {
		if((k *= 2) < 1) return 0.5 * k * k;
		return -0.5 * ((k - 1) * (k - 3) - 1);
	}
	,__class__: motion.easing.QuadEaseInOut
}
motion.easing.QuadEaseOut = function() {
};
$hxClasses["motion.easing.QuadEaseOut"] = motion.easing.QuadEaseOut;
motion.easing.QuadEaseOut.__name__ = ["motion","easing","QuadEaseOut"];
motion.easing.QuadEaseOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.QuadEaseOut.prototype = {
	ease: function(t,b,c,d) {
		return -c * (t /= d) * (t - 2) + b;
	}
	,calculate: function(k) {
		return -k * (k - 2);
	}
	,__class__: motion.easing.QuadEaseOut
}
openfl.AssetCache = function() {
	this.enabled = true;
	this.bitmapData = new haxe.ds.StringMap();
	this.font = new haxe.ds.StringMap();
	this.sound = new haxe.ds.StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl.AssetCache;
openfl.AssetCache.__name__ = ["openfl","AssetCache"];
openfl.AssetCache.prototype = {
	clear: function() {
		this.bitmapData = new haxe.ds.StringMap();
		this.font = new haxe.ds.StringMap();
		this.sound = new haxe.ds.StringMap();
	}
	,__class__: openfl.AssetCache
}
openfl.Assets = function() { }
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = ["openfl","Assets"];
openfl.Assets.exists = function(id,type) {
	openfl.Assets.initialize();
	if(type == null) type = openfl.AssetType.BINARY;
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.exists(symbolName,type);
	return false;
}
openfl.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) return bitmapData;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(library.isLocal(symbolName,openfl.AssetType.IMAGE)) {
				var bitmapData = library.getBitmapData(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.bitmapData.set(id,bitmapData);
				return bitmapData;
			} else console.log("[openfl.Assets] BitmapData asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
}
openfl.Assets.getBytes = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			if(library.isLocal(symbolName,openfl.AssetType.BINARY)) return library.getBytes(symbolName); else console.log("[openfl.Assets] String or ByteArray asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
}
openfl.Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) return openfl.Assets.cache.font.get(id);
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(library.isLocal(symbolName,openfl.AssetType.FONT)) {
				var font = library.getFont(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.font.set(id,font);
				return font;
			} else console.log("[openfl.Assets] Font asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
}
openfl.Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return openfl.Assets.libraries.get(name);
}
openfl.Assets.getMovieClip = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			if(library.isLocal(symbolName,openfl.AssetType.MOVIE_CLIP)) return library.getMovieClip(symbolName); else console.log("[openfl.Assets] MovieClip asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
}
openfl.Assets.getMusic = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) return openfl.Assets.cache.sound.get(id);
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(library.isLocal(symbolName,openfl.AssetType.MUSIC)) {
				var sound = library.getMusic(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound);
				return sound;
			} else console.log("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
}
openfl.Assets.getPath = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,null)) return library.getPath(symbolName); else console.log("[openfl.Assets] There is no asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
}
openfl.Assets.getSound = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(library.isLocal(symbolName,openfl.AssetType.SOUND)) {
				var sound = library.getSound(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound);
				return sound;
			} else console.log("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
}
openfl.Assets.getText = function(id) {
	var bytes = openfl.Assets.getBytes(id);
	if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
}
openfl.Assets.initialize = function() {
	if(!openfl.Assets.initialized) {
		openfl.Assets.registerLibrary("default",new DefaultAssetLibrary());
		openfl.Assets.initialized = true;
	}
}
openfl.Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled) {
		if(type == openfl.AssetType.IMAGE || type == null) {
			if(openfl.Assets.cache.bitmapData.exists(id)) return true;
		}
		if(type == openfl.AssetType.FONT || type == null) {
			if(openfl.Assets.cache.font.exists(id)) return true;
		}
		if(type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC || type == null) {
			if(openfl.Assets.cache.sound.exists(id)) return true;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.isLocal(symbolName,type);
	return false;
}
openfl.Assets.isValidBitmapData = function(bitmapData) {
	return true;
}
openfl.Assets.isValidSound = function(sound) {
	return true;
}
openfl.Assets.loadBitmapData = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) {
			handler(bitmapData);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadBitmapData(symbolName,function(bitmapData) {
				openfl.Assets.cache.bitmapData.set(id,bitmapData);
				handler(bitmapData);
			}); else library.loadBitmapData(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
}
openfl.Assets.loadBytes = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			library.loadBytes(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
}
openfl.Assets.loadFont = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) {
		handler(openfl.Assets.cache.font.get(id));
		return;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadFont(symbolName,function(font) {
				openfl.Assets.cache.font.set(id,font);
				handler(font);
			}); else library.loadFont(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
}
openfl.Assets.loadLibrary = function(name,handler) {
	openfl.Assets.initialize();
	var data = openfl.Assets.getText("libraries/" + name + ".dat");
	if(data != null && data != "") {
		var unserializer = new haxe.Unserializer(data);
		unserializer.setResolver({ resolveEnum : openfl.Assets.resolveEnum, resolveClass : openfl.Assets.resolveClass});
		var library = unserializer.unserialize();
		openfl.Assets.libraries.set(name,library);
		library.load(handler);
	} else console.log("[openfl.Assets] There is no asset library named \"" + name + "\"");
}
openfl.Assets.loadMusic = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		handler(openfl.Assets.cache.sound.get(id));
		return;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadMusic(symbolName,function(sound) {
				openfl.Assets.cache.sound.set(id,sound);
				handler(sound);
			}); else library.loadMusic(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
}
openfl.Assets.loadMovieClip = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			library.loadMovieClip(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
}
openfl.Assets.loadSound = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadSound(symbolName,function(sound) {
				openfl.Assets.cache.sound.set(id,sound);
				handler(sound);
			}); else library.loadSound(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
}
openfl.Assets.loadText = function(id,handler) {
	openfl.Assets.initialize();
	var callback = function(bytes) {
		if(bytes == null) handler(null); else handler(bytes.readUTFBytes(bytes.length));
	};
	openfl.Assets.loadBytes(id,callback);
}
openfl.Assets.registerLibrary = function(name,library) {
	if(openfl.Assets.libraries.exists(name)) openfl.Assets.unloadLibrary(name);
	openfl.Assets.libraries.set(name,library);
}
openfl.Assets.resolveClass = function(name) {
	return Type.resolveClass(name);
}
openfl.Assets.resolveEnum = function(name) {
	var value = Type.resolveEnum(name);
	return value;
}
openfl.Assets.unloadLibrary = function(name) {
	openfl.Assets.initialize();
	var keys = openfl.Assets.cache.bitmapData.keys();
	while( keys.hasNext() ) {
		var key = keys.next();
		var libraryName = key.substring(0,key.indexOf(":"));
		var symbolName = HxOverrides.substr(key,key.indexOf(":") + 1,null);
		if(libraryName == name) openfl.Assets.cache.bitmapData.remove(key);
	}
	openfl.Assets.libraries.remove(name);
}
openfl.AssetData = function() {
};
$hxClasses["openfl.AssetData"] = openfl.AssetData;
openfl.AssetData.__name__ = ["openfl","AssetData"];
openfl.AssetData.prototype = {
	__class__: openfl.AssetData
}
openfl.AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : true, __constructs__ : ["BINARY","FONT","IMAGE","MOVIE_CLIP","MUSIC","SOUND","TEMPLATE","TEXT"] }
openfl.AssetType.BINARY = ["BINARY",0];
openfl.AssetType.BINARY.toString = $estr;
openfl.AssetType.BINARY.__enum__ = openfl.AssetType;
openfl.AssetType.FONT = ["FONT",1];
openfl.AssetType.FONT.toString = $estr;
openfl.AssetType.FONT.__enum__ = openfl.AssetType;
openfl.AssetType.IMAGE = ["IMAGE",2];
openfl.AssetType.IMAGE.toString = $estr;
openfl.AssetType.IMAGE.__enum__ = openfl.AssetType;
openfl.AssetType.MOVIE_CLIP = ["MOVIE_CLIP",3];
openfl.AssetType.MOVIE_CLIP.toString = $estr;
openfl.AssetType.MOVIE_CLIP.__enum__ = openfl.AssetType;
openfl.AssetType.MUSIC = ["MUSIC",4];
openfl.AssetType.MUSIC.toString = $estr;
openfl.AssetType.MUSIC.__enum__ = openfl.AssetType;
openfl.AssetType.SOUND = ["SOUND",5];
openfl.AssetType.SOUND.toString = $estr;
openfl.AssetType.SOUND.__enum__ = openfl.AssetType;
openfl.AssetType.TEMPLATE = ["TEMPLATE",6];
openfl.AssetType.TEMPLATE.toString = $estr;
openfl.AssetType.TEMPLATE.__enum__ = openfl.AssetType;
openfl.AssetType.TEXT = ["TEXT",7];
openfl.AssetType.TEXT.toString = $estr;
openfl.AssetType.TEXT.__enum__ = openfl.AssetType;
openfl.display = {}
openfl.display.Tilesheet = function(image) {
	this.__bitmap = image;
	this.__centerPoints = new Array();
	this.__tileRects = new Array();
	this.__tileUVs = new Array();
};
$hxClasses["openfl.display.Tilesheet"] = openfl.display.Tilesheet;
openfl.display.Tilesheet.__name__ = ["openfl","display","Tilesheet"];
openfl.display.Tilesheet.prototype = {
	getTileUVs: function(index) {
		return this.__tileUVs[index];
	}
	,getTileRect: function(index) {
		return this.__tileRects[index];
	}
	,getTileCenter: function(index) {
		return this.__centerPoints[index];
	}
	,drawTiles: function(graphics,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags);
	}
	,addTileRect: function(rectangle,centerPoint) {
		this.__tileRects.push(rectangle);
		if(centerPoint == null) centerPoint = new flash.geom.Point();
		this.__centerPoints.push(centerPoint);
		this.__tileUVs.push(new flash.geom.Rectangle(rectangle.get_left() / this.__bitmap.get_width(),rectangle.get_top() / this.__bitmap.get_height(),rectangle.get_right() / this.__bitmap.get_width(),rectangle.get_bottom() / this.__bitmap.get_height()));
		return this.__tileRects.length - 1;
	}
	,__class__: openfl.display.Tilesheet
}
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; };
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
Array.prototype.__class__ = $hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
haxe.Resource.content = [{ name : "__ASSET__fonts_architectsdaughter_ttf", data : "s237551:b3k0Omhhc2hxOjExMW95Njphc2NlbnRkMTI2M3k0OmRhdGFhZDY1ZDc4N2Q2NWQ3MDVkMTAxZDY0Ni41ZDEzN2Q1ODhkMTkyZDU0OWQyNDdkNTEwZDMxMmQ0ODkuNWQzNzdkNDY5ZDQzNmQ0NjNkNDkzZDQ2MGQ1NDNkNDc3LjVkNTkzZDQ5NWQ2MjlkNTI3ZDY2NWQ1NTlkNjg0LjVkNjAzZDcwNGQ2NDdkNjk5ZDY5NmQ2OTlkNzc4ZDY2Ni41ZDgzOS41ZDYzNGQ5MDFkNTgwZDk0Mi41ZDUyNmQ5ODRkNDU0LjVkMTAwNC41ZDM4M2QxMDI1ZDMwNWQxMDI1ZDE4N2QxMDI1ZDEyNmQ5NzBkNjVkOTE1ZDY1ZDc4N2QxNTFkODE3ZDE1MWQ4NTlkMTYxLjVkODg0ZDE3MmQ5MDlkMTkyLjVkOTIxLjVkMjEzZDkzNGQyNDIuNWQ5MzhkMjcyZDk0MmQzMTFkOTQyZDM3MWQ5NDJkNDI3ZDkzMC41ZDQ4M2Q5MTlkNTI2ZDg5MS41ZDU2OWQ4NjRkNTk1ZDgxOC41ZDYyMWQ3NzNkNjIxZDcwNWQ2MjFkNjcwZDYxMWQ2MzguNWQ2MDFkNjA3ZDU4MWQ1ODMuNWQ1NjFkNTYwZDUzMmQ1NDZkNTAzZDUzMmQ0NjZkNTMyZDQxN2Q1NDBkMzY4ZDU1MC41ZDMxOWQ1NjFkMjc2ZDU4OC41ZDIzM2Q2MTZkMjAwZDY2OS41ZDE2N2Q3MjNkMTUxZDgxN2h5Njpfd2lkdGhkNzIweTQ6eE1heGQ3MDR5NDp4TWluZDY1eTQ6eU1heGQ1NjR5NDp5TWluZC0xeTc6X2hlaWdodGQ0OTl5NzpsZWFkaW5nZDc3OXk3OmRlc2NlbnRkNTQweTg6Y2hhckNvZGVpMTExeTE1OmxlZnRzaWRlQmVhcmluZ2Q2NXkxMjphZHZhbmNlV2lkdGhkNzIweTg6Y29tbWFuZHNhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjIyM29SMWQxMjYzUjJhZDE4M2QxMjA1ZDk3ZDEyMDVkMTA1ZDExNTBkMTA4ZDEwNzlkMTExZDEwMDhkMTEwLjVkOTI4LjVkMTEwZDg0OWQxMDdkNzY0ZDEwNGQ2NzlkMTAwLjVkNTk2ZDk3ZDUxM2Q5NGQ0MzUuNWQ5MWQzNThkOTFkMjkzZDkxZDI4OWQ5MWQyNzVkOTFkMjYxZDEwMGQyNDVkMTA5ZDIyOWQxMzEuNWQyMTMuNWQxNTRkMTk4ZDE5OGQxOTFkMjY3ZDE3OWQzMzdkMTgwZDQwN2QxODFkNDY4LjVkMTkyLjVkNTMwZDIwNGQ1NzlkMjI1ZDYyOGQyNDZkNjU3ZDI3NC41ZDY4NmQzMDNkNjkwZDMzNi41ZDY5NGQzNzBkNjY1ZDQwN2Q2MzZkNDQ0ZDU3MGQ0ODNkNTA0ZDUyMmQzOTNkNTYwZDU0NmQ1NjhkNjQyZDU5MC41ZDczOGQ2MTNkNzg3ZDY0NGQ4MzZkNjc1ZDg0My41ZDcxMi41ZDg1MWQ3NTBkODI2LjVkNzg5LjVkODAyZDgyOWQ3NTEuNWQ4NjcuNWQ3MDFkOTA2ZDYzNC41ZDkzOWQ1NjhkOTcyZDQ5MC41ZDk5N2Q0MTNkMTAyMmQzMzRkMTAzNWQzMjVkOTM4ZDQ2OGQ5MTdkNTU5ZDg4MmQ2NTBkODQ3ZDY5MWQ4MDcuNWQ3MzJkNzY4ZDcyNC41ZDczMGQ3MTdkNjkyZDY2Mi41ZDY2NS41ZDYwOGQ2MzlkNTA5ZDYyOS41ZDQxMGQ2MjBkMjY4ZDYzOGQyNjJkNTA2ZDMxNmQ0OTVkMzY5LjVkNDgxZDQyM2Q0NjdkNDY2LjVkNDQ5ZDUxMGQ0MzFkNTM3ZDQwOWQ1NjRkMzg3ZDU2NGQzNjBkNTY0ZDMzN2Q1NDlkMzIwLjVkNTM0ZDMwNGQ1MTAuNWQyOTIuNWQ0ODdkMjgxZDQ1Ny41ZDI3My41ZDQyOGQyNjZkMzk5ZDI2MmQzNzBkMjU4ZDM0NWQyNTYuNWQzMjBkMjU1ZDMwNWQyNTVkMzAwZDI1NWQyNzlkMjU1ZDI1OGQyNTVkMjM0ZDI1Ni41ZDIxMGQyNThkMTg5ZDI2Mi41ZDE2OGQyNjdkMTY0ZDI3NmQxODNkMTIwNWhSM2Q5MTBSNGQ4NTFSNWQ5MVI2ZDg0NVI3ZC0xODFSOGQ3NTRSOWQ3NzlSMTBkNTQwUjExaTIyM1IxMmQ5MVIxM2Q5MTBSMTRhaTFpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaGc6MTEwb1IxZDEyNjNSMmFkNTA1ZDUzMmQ1MTJkNTE2ZDQ5MGQ1MTMuNWQ0NjhkNTExZDQzMGQ1MThkMzkyZDUyNWQzNDVkNTQwZDI5OGQ1NTVkMjU1LjVkNTc1LjVkMjEzZDU5NmQxODEuNWQ2MjFkMTUwZDY0NmQxNDNkNjcxZDE0MmQxMDExZDU5ZDEwMTFkNTNkOTk3ZDQ5LjVkOTY2LjVkNDZkOTM2ZDQ0ZDg5NC41ZDQyZDg1M2Q0MS41ZDgwNC41ZDQxZDc1NmQ0MmQ3MDYuNWQ0M2Q2NTdkNDVkNjA5LjVkNDdkNTYyZDQ5LjVkNTIzZDUyZDQ4NGQ1NC41ZDQ1Ny41ZDU3ZDQzMWQ2MGQ0MjJkNzFkNDE0ZDg1ZDQwN2Q5OWQ0MDBkMTEzZDQwMGQxMzFkNDAxZDEzNy41ZDQyMy41ZDE0NGQ0NDZkMTQ0ZDQ3NC41ZDE0NGQ1MDNkMTQwLjVkNTMwZDEzN2Q1NTdkMTM3ZDU2N2QyNDFkNDkwZDMxNmQ0NTVkMzkxZDQyMGQ0NDIuNWQ0MThkNDk0ZDQxNmQ1MjVkNDQyZDU1NmQ0NjhkNTczZDUxNGQ1OTBkNTYwZDU5NS41ZDYyMS41ZDYwMWQ2ODNkNjAyZDc1MWQ2MDNkODE5ZDYwMmQ4ODkuNWQ2MDFkOTYwZDYwNGQxMDI0ZDU5MmQxMDMwZDU4Ny41ZDEwMzFkNTgzZDEwMzJkNTc3LjVkMTAzMC41ZDU3MmQxMDI5ZDU2M2QxMDI3ZDU1NGQxMDI1ZDUzNWQxMDI0ZDUyM2Q5NzVkNTIxLjVkOTEyZDUyMGQ4NDlkNTIxZDc4M2Q1MjJkNzE3ZDUyMGQ2NTJkNTE4ZDU4N2Q1MDVkNTMyaFIzZDY0MFI0ZDYwNFI1ZDQxUjZkNjI0UjdkLThSOGQ1ODNSOWQ3NzlSMTBkNTQwUjExaTExMFIxMmQ0MVIxM2Q2NDBSMTRhaTFpM2kzaTNpM2kzaTNpMmkyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MjIyb1IxZDEyNjNSMmFkMTMyZDk5M2QxMzJkMTAwN2QxMjJkMTAxNC41ZDExMmQxMDIyZDk5LjVkMTAyM2Q4N2QxMDI0ZDc0LjVkMTAxOGQ2MmQxMDEyZDU2ZDk5OGQ1M2Q4MDFkNDNkMTc4ZDM5ZDE1MGQ1NC41ZDEzOGQ3MGQxMjZkODkuNWQxMjZkMTA5ZDEyNmQxMjVkMTM2LjVkMTQxZDE0N2QxMzhkMTY1ZDE0NGQ0NzdkMTgzZDQyNmQyMzQuNWQzODNkMjg2ZDM0MGQzNDBkMzExLjVkMzk0ZDI4M2Q0NDZkMjcyLjVkNDk4ZDI2MmQ1MzlkMjc1LjVkNTgwZDI4OWQ2MDVkMzI5LjVkNjMwZDM3MGQ2MzBkNDQzZDYzMGQ0OTNkNjA2LjVkNTQxLjVkNTgzZDU5MGQ1NDMuNWQ2MzMuNWQ1MDRkNjc3ZDQ1M2Q3MTNkNDAyZDc0OWQzNDdkNzc0ZDI5MmQ3OTlkMjM4ZDgxMWQxODRkODIzZDEzOGQ4MTdkMTMyZDk5M2Q1NTdkNDU1ZDU0NmQ0MDZkNTEwZDM4OC41ZDQ3NGQzNzFkNDI2LjVkMzc5LjVkMzc5ZDM4OGQzMjdkNDE4ZDI3NWQ0NDhkMjMzZDQ5M2QxOTFkNTM4ZDE2Ni41ZDU5NGQxNDJkNjUwZDE0OWQ3MTBkMTQ0ZDcyNmQxNjNkNzMxLjVkMTgyZDczN2QyMTUuNWQ3MzFkMjQ5ZDcyNWQyOTRkNzA1LjVkMzM5ZDY4NmQzODZkNjUyLjVkNDMzZDYxOWQ0NzhkNTcwZDUyM2Q1MjFkNTU3ZDQ1NWhSM2Q2NDdSNGQ2MzBSNWQzOVI2ZDg5OFI3ZDBSOGQ4NTlSOWQ3NzlSMTBkNTQwUjExaTIyMlIxMmQzOVIxM2Q2NDdSMTRhaTFpM2kzaTNpM2kyaTJpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjEwOW9SMWQxMjYzUjJhZDMzZDEwMDRkMzJkOTYzZDM1LjVkOTAwLjVkMzlkODM4ZDQxLjVkNzY2LjVkNDRkNjk1ZDQzLjVkNjIyLjVkNDNkNTUwZDM2ZDQ5MGQzNmQ0NjdkNTJkNDU4LjVkNjhkNDUwZDkwZDQ1MGQ5OGQ0NTBkMTAzLjVkNDY5LjVkMTA5ZDQ4OWQxMTIuNWQ1MTQuNWQxMTZkNTQwZDExOWQ1NjVkMTIyZDU5MGQxMjVkNjAxZDE0MWQ1NzFkMTc2ZDU0N2QyMTFkNTIzZDI1NGQ1MDkuNWQyOTdkNDk2ZDM0Mi41ZDQ5My41ZDM4OGQ0OTFkNDI2ZDUwM2Q0NjRkNTE1ZDQ4OGQ1NDIuNWQ1MTJkNTcwZDUxMmQ2MTdkNTI4ZDU4N2Q1NjhkNTU3LjVkNjA4ZDUyOGQ2NTguNWQ1MDUuNWQ3MDlkNDgzZDc2M2Q0NzAuNWQ4MTdkNDU4ZDg2MS41ZDQ2MC41ZDkwNmQ0NjNkOTM0ZDQ4NGQ5NjJkNTA1ZDk2MWQ1NTBkOTg4ZDEwMTVkOTg4ZDEwMTdkOTcxLjVkMTAyMC41ZDk1NWQxMDI0ZDkzNWQxMDI1ZDkxNWQxMDI2ZDg5OGQxMDIzLjVkODgxZDEwMjFkODgxZDEwMTFkODc5ZDk1NmQ4ODJkODk1LjVkODg1ZDgzNWQ4ODUuNWQ3NzNkODg2ZDcxMWQ4ODEuNWQ2NTAuNWQ4NzdkNTkwZDg1OWQ1MzZkODMwZDUzOGQ3OTQuNWQ1NDQuNWQ3NTlkNTUxZDcyM2Q1NjcuNWQ2ODdkNTg0ZDY1My41ZDYxNC41ZDYyMGQ2NDVkNTk0ZDY5Ni41ZDU2OGQ3NDhkNTUxLjVkODIyLjVkNTM1ZDg5N2Q1MzVkMTAwMmQ1MzBkMTAxOWQ1MTEuNWQxMDI0ZDQ5M2QxMDI5ZDQ3M2QxMDI3ZDQ1M2QxMDI1ZDQzOC41ZDEwMTcuNWQ0MjRkMTAxMGQ0MjdkMTAwMmQ0MzZkOTUwZDQ0MmQ5MTBkNDQ4ZDg3MGQ0NTBkODM2ZDQ1MmQ4MDJkNDUwLjVkNzcyZDQ0OWQ3NDJkNDQ0ZDcxMC41ZDQzOWQ2NzlkNDMwLjVkNjQzLjVkNDIyZDYwOGQ0MTBkNTYyZDM0M2Q1NjJkMjk1LjVkNTgwLjVkMjQ4ZDU5OWQyMTYuNWQ2MzAuNWQxODVkNjYyZDE2Ny41ZDcwNWQxNTBkNzQ4ZDE0MmQ3OTdkMTM0ZDg0NmQxMzRkODk5ZDEzNGQ5NTJkMTM4ZDEwMDRkMTIyZDEwMTBkMTAyLjVkMTAxNy41ZDgzZDEwMjVkNjRkMTAyNWQ1M2QxMDI1ZDQ3ZDEwMjFkNDFkMTAxN2QzM2QxMDA0aFIzZDk5NlI0ZDk4OFI1ZDMyUjZkNTc0UjdkLTVSOGQ1NDJSOWQ3NzlSMTBkNTQwUjExaTEwOVIxMmQzMlIxM2Q5OTZSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoyMjFvUjFkMTI2M1IyYWQzNDdkMTA0N2QzMzlkMTA0N2QzMjQuNWQxMDQyZDMxMGQxMDM3ZDI5Ni41ZDEwMjlkMjgzZDEwMjFkMjc0ZDEwMTAuNWQyNjVkMTAwMGQyNzBkOTg4ZDI3NWQ5ODBkMjgzZDk1OGQyOTFkOTM2ZDMwMWQ5MDUuNWQzMTFkODc1ZDMyMmQ4NDBkMzMzZDgwNWQzNDMuNWQ3NzAuNWQzNTRkNzM2ZDM2M2Q3MDVkMzcyZDY3NGQzNzhkNjUyZDQ0ZDMxMWQzMmQyOTdkMzVkMjg5ZDM4ZDI4MWQ0N2QyNzYuNWQ1NmQyNzJkNjYuNWQyNzFkNzdkMjcwZDgxZDI3MGQ5OGQyNzBkMTE0LjVkMjczZDEzMWQyNzZkMTUwZDI4NS41ZDE2OWQyOTVkMTkyLjVkMzE0LjVkMjE2ZDMzNGQyNDguNWQzNjcuNWQyODFkNDAxZDMyNC41ZDQ1MGQzNjhkNDk5ZDQyNmQ1NjlkNDY0ZDQ1OGQ0OTJkMzg2LjVkNTIwZDMxNWQ1NDIuNWQyNzIuNWQ1NjVkMjMwZDU4NGQyMTJkNjAzZDE5NGQ2MjNkMTkxZDYzNWQxOTFkNjQ2LjVkMTkzLjVkNjU4ZDE5NmQ2NjNkMjEyZDYyNGQyOTVkNTg4LjVkMzk5ZDU1M2Q1MDNkNTE1LjVkNjE1ZDQ3OGQ3MjdkNDM3ZDgzOC41ZDM5NmQ5NTBkMzQ3ZDEwNDdkNDAxZDY1ZDQxNGQ0OWQ0MjZkNDRkNDM4ZDM5ZDQ0NmQ0Mi41ZDQ1NGQ0NmQ0NTlkNTUuNWQ0NjRkNjVkNDY0ZDc2ZDQ2MWQ4OGQ0NTYuNWQ5Ny41ZDQ1MmQxMDdkNDQxZDEyMGQ0MzBkMTMzZDQwOWQxNTEuNWQzODhkMTcwZDM1NGQxOThkMzE1ZDE2M2Q0MDFkNjVoUjNkNjg0UjRkNjYzUjVkMzJSNmQ5ODVSN2QtMjNSOGQ5NTNSOWQ3NzlSMTBkNTQwUjExaTIyMVIxMmQzMlIxM2Q2ODRSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kyaTJoZzoxMDhvUjFkMTI2M1IyYWQyOGQyMTRkMzlkMTk5ZDQ5LjVkMTg1LjVkNjBkMTcyZDgwZDE3MmQ5M2QxNzJkMTA0ZDIwM2QxMTVkMjM0ZDEyM2QyODUuNWQxMzFkMzM3ZDEzN2Q0MDNkMTQzZDQ2OWQxNDdkNTQwZDE1MWQ2MTFkMTUzLjVkNjgxLjVkMTU2ZDc1MmQxNTcuNWQ4MTAuNWQxNTlkODY5ZDE1OS41ZDkxMWQxNjBkOTUzZDE2MGQ5NjhkMTYwZDk4NmQxNTIuNWQ5OTdkMTQ1ZDEwMDhkMTMzLjVkMTAxNC41ZDEyMmQxMDIxZDEwNy41ZDEwMjNkOTNkMTAyNWQ4MGQxMDI1ZDc4ZDEwMjVkNzQuNWQxMDI0LjVkNzFkMTAyNGQ3MGQxMDI0ZDcwZDk5OGQ2OC41ZDk0NC41ZDY3ZDg5MWQ2NWQ4MjMuNWQ2M2Q3NTZkNjFkNjgxLjVkNTlkNjA3ZDU2LjVkNTM5LjVkNTRkNDcyZDUxLjVkNDE4LjVkNDlkMzY1ZDQ4ZDMzOWQ0OGQzMzJkNDUuNWQzMTRkNDNkMjk2ZDQwZDI3NmQzN2QyNTZkMzMuNWQyMzguNWQzMGQyMjFkMjhkMjE0aFIzZDIwMVI0ZDE2MFI1ZDI4UjZkODUyUjdkLTFSOGQ4MjRSOWQ3NzlSMTBkNTQwUjExaTEwOFIxMmQyOFIxM2QyMDFSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MjIwb1IxZDEyNjNSMmFkNTc4ZDg1MWQ1MjdkODk1ZDQ4NC41ZDkyNy41ZDQ0MmQ5NjBkMzk5LjVkOTgwLjVkMzU3ZDEwMDFkMzExZDEwMTBkMjY1ZDEwMTlkMjA3ZDEwMTVkMTI5ZDEwMDZkODlkOTY3LjVkNDlkOTI5ZDM1ZDg3MS41ZDIxZDgxNGQyN2Q3NDNkMzNkNjcyZDQ2LjVkNTk3LjVkNjBkNTIzZDc1LjVkNDUwLjVkOTFkMzc4ZDk2ZDMxOGQxMDBkMzE3ZDExMmQzMTYuNWQxMjRkMzE2ZDEyOGQzMTZkMTYyZDMxMmQxNzJkMzM0ZDE4MmQzNTZkMTc4ZDM5NS41ZDE3NGQ0MzVkMTYxZDQ4Ny41ZDE0OGQ1NDBkMTM1LjVkNTk2LjVkMTIzZDY1M2QxMTZkNzA4ZDEwOWQ3NjNkMTE3LjVkODA4ZDEyNmQ4NTNkMTU0LjVkODgzLjVkMTgzZDkxNGQyNDFkOTIwZDMyMWQ5MjNkMzc2ZDg5OC41ZDQzMWQ4NzRkNDY3ZDgyOS41ZDUwM2Q3ODVkNTIzLjVkNzI0ZDU0NGQ2NjNkNTU0LjVkNTkzZDU2NWQ1MjNkNTY4LjVkNDQ3LjVkNTcyZDM3MmQ1NzRkMjk4ZDU4MGQyNzlkNTkwZDI3MC41ZDYwMGQyNjJkNjEyZDI2MWQ2MjRkMjYwZDYzN2QyNjZkNjUwZDI3MmQ2NjRkMjgyZDY3MGQzNzFkNjY4LjVkNDU5LjVkNjY3ZDU0OGQ2NjMuNWQ2MzcuNWQ2NjBkNzI3ZDY1N2Q4MThkNjU0ZDkwOWQ2NTdkMTAwNGQ2NTdkMTAxOGQ2NDRkMTAyMi41ZDYzMWQxMDI3ZDYxNC41ZDEwMjZkNTk4ZDEwMjVkNTgzZDEwMjAuNWQ1NjhkMTAxNmQ1NjVkMTAxMWQ1NzhkODUxZDU3OGQ4NTFkMjI4ZDE2NmQyMjhkMTYxZDIzNy41ZDE1My41ZDI0N2QxNDZkMjU5ZDE0MGQyNzJkMTMzZDI5MGQxMjVkMzE2ZDEyNWQzMjUuNWQxMzZkMzM1ZDE0N2QzMzVkMTY3ZDMzNWQxODJkMzI3LjVkMTkwLjVkMzIwZDE5OWQzMDguNWQyMDNkMjk3ZDIwN2QyODMuNWQyMDhkMjcwZDIwOWQyNThkMjA5ZDI0MmQyMDlkMjM1ZDE5OS41ZDIyOGQxOTBkMjI4ZDE2NmQ0MDhkMTY2ZDQwOGQxNjFkNDE3LjVkMTUzLjVkNDI3ZDE0NmQ0MzlkMTQwZDQ1M2QxMzNkNDcxZDEyNWQ0OTdkMTI1ZDUwNi41ZDEzNmQ1MTZkMTQ3ZDUxNmQxNjdkNTE2ZDE4MmQ1MDguNWQxOTAuNWQ1MDFkMTk5ZDQ4OS41ZDIwM2Q0NzhkMjA3ZDQ2NGQyMDhkNDUwZDIwOWQ0MzhkMjA5ZDQyMmQyMDlkNDE1ZDE5OS41ZDQwOGQxOTBkNDA4ZDE2NmhSM2Q3MTlSNGQ2NzBSNWQyMVI2ZDg5OVI3ZC0zUjhkODc4UjlkNzc5UjEwZDU0MFIxMWkyMjBSMTJkMjFSMTNkNzE5UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTJpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxMDdvUjFkMTI2M1IyYWQ2MWQ1NTdkNjFkNTA2ZDU3LjVkNDU1ZDU0ZDQwNGQ0OS41ZDM1M2Q0NWQzMDJkNDEuNWQyNTEuNWQzOGQyMDFkMzhkMTUwZDM4ZDEyOGQ0OWQxMTlkNjBkMTEwZDgwZDExMGQ4MmQxMTBkOTAuNWQxMTBkOTlkMTEwZDEwMWQxMTFkMTE0ZDE2NGQxMTkuNWQyMjJkMTI1ZDI4MGQxMjlkMzQ0LjVkMTMzZDQwOWQxMzdkNDc5LjVkMTQxZDU1MGQxNTFkNjI3ZDE2OWQ2MThkMjAzZDU5NC41ZDIzN2Q1NzFkMjc4LjVkNTQxZDMyMGQ1MTFkMzY1ZDQ3OC41ZDQxMGQ0NDZkNDUwLjVkNDE5LjVkNDkxZDM5M2Q1MjIuNWQzNzUuNWQ1NTRkMzU4ZDU2OGQzNThkNTc5ZDM1OGQ1ODUuNWQzNjNkNTkyZDM2OGQ1OTlkMzgxZDU1OGQ0MzNkNTA1LjVkNDc1LjVkNDUzZDUxOGQzOTdkNTU3ZDM0MWQ1OTZkMjg1LjVkNjMzLjVkMjMwZDY3MWQxODRkNzEzZDI2N2Q3MzZkMzQyLjVkNzYwZDQxOGQ3ODRkNDg4LjVkODA0LjVkNTU5ZDgyNWQ2MjcuNWQ4MzkuNWQ2OTZkODU0ZDc2NWQ4NThkNzY1ZDg3M2Q3NjRkODg0ZDc2M2Q4OTVkNzU4ZDkwM2Q3NTNkOTExZDc0Mi41ZDkxNS41ZDczMmQ5MjBkNzEzZDkyMWQ3MDNkOTIxZDY1OGQ5MDhkNTkxLjVkODkzLjVkNTI1ZDg3OWQ0NDkuNWQ4NjMuNWQzNzRkODQ4ZDI5Ny41ZDgzMWQyMjFkODE0ZDE1N2Q3OTdkMTU3ZDgxMGQxNTkuNWQ4MzVkMTYyZDg2MGQxNjNkODg5ZDE2NGQ5MThkMTYxLjVkOTQ2LjVkMTU5ZDk3NWQxNDhkOTk2ZDEzN2QxMDE3ZDExNmQxMDI2ZDk1ZDEwMzVkNjBkMTAyNGQ2MWQ1NTdoUjNkNzg2UjRkNzY1UjVkMzhSNmQ5MTRSN2QtMTFSOGQ4NzZSOWQ3NzlSMTBkNTQwUjExaTEwN1IxMmQzOFIxM2Q3ODZSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaGc6MjE5b1IxZDEyNjNSMmFkNTc4ZDg1MWQ1MjdkODk1ZDQ4NC41ZDkyNy41ZDQ0MmQ5NjBkMzk5LjVkOTgwLjVkMzU3ZDEwMDFkMzExZDEwMTBkMjY1ZDEwMTlkMjA3ZDEwMTVkMTI5ZDEwMDZkODlkOTY3LjVkNDlkOTI5ZDM1ZDg3MS41ZDIxZDgxNGQyN2Q3NDNkMzNkNjcyZDQ2LjVkNTk3LjVkNjBkNTIzZDc1LjVkNDUwLjVkOTFkMzc4ZDk2ZDMxOGQxMDBkMzE3ZDExMmQzMTYuNWQxMjRkMzE2ZDEyOGQzMTZkMTYyZDMxMmQxNzJkMzM0ZDE4MmQzNTZkMTc4ZDM5NS41ZDE3NGQ0MzVkMTYxZDQ4Ny41ZDE0OGQ1NDBkMTM1LjVkNTk2LjVkMTIzZDY1M2QxMTZkNzA4ZDEwOWQ3NjNkMTE3LjVkODA4ZDEyNmQ4NTNkMTU0LjVkODgzLjVkMTgzZDkxNGQyNDFkOTIwZDMyMWQ5MjNkMzc2ZDg5OC41ZDQzMWQ4NzRkNDY3ZDgyOS41ZDUwM2Q3ODVkNTIzLjVkNzI0ZDU0NGQ2NjNkNTU0LjVkNTkzZDU2NWQ1MjNkNTY4LjVkNDQ3LjVkNTcyZDM3MmQ1NzRkMjk4ZDU4MGQyNzlkNTkwZDI3MC41ZDYwMGQyNjJkNjEyZDI2MWQ2MjRkMjYwZDYzN2QyNjZkNjUwZDI3MmQ2NjRkMjgyZDY3MGQzNzFkNjY4LjVkNDU5LjVkNjY3ZDU0OGQ2NjMuNWQ2MzcuNWQ2NjBkNzI3ZDY1N2Q4MThkNjU0ZDkwOWQ2NTdkMTAwNGQ2NTdkMTAxOGQ2NDRkMTAyMi41ZDYzMWQxMDI3ZDYxNC41ZDEwMjZkNTk4ZDEwMjVkNTgzZDEwMjAuNWQ1NjhkMTAxNmQ1NjVkMTAxMWQ1NzhkODUxZDU3OGQ4NTFkMjAyZDE4M2QyMDJkMTY4ZDIxNWQxNDVkMjI4ZDEyMmQyNTJkOTcuNWQyNzZkNzNkMzA5LjVkNDguNWQzNDNkMjRkMzgzZDZkNDEwZDIzZDQzMC41ZDM2LjVkNDUxZDUwZDQ2OWQ2Ni41ZDQ4N2Q4M2Q1MDUuNWQxMDZkNTI0ZDEyOWQ1NDdkMTY2ZDU1NWQxODFkNTU1LjVkMTk0ZDU1NmQyMDdkNTUwZDIxNWQ1NDRkMjIzZDUzMi41ZDIyNGQ1MjFkMjI1ZDUwNWQyMTZkNDg3ZDIwM2Q0NzdkMTk2ZDQ2N2QxODlkNDYxZDE4NC41ZDQ1NWQxODBkNDUwLjVkMTc1ZDQ0NmQxNzBkNDM3LjVkMTYxLjVkNDI5ZDE1M2Q0MTQuNWQxMzhkNDAwZDEyM2QzNzRkOTdkMzQ3ZDExNmQzMjcuNWQxMzJkMzA4ZDE0OGQyOTRkMTYzLjVkMjgwZDE3OWQyNzAuNWQxOTQuNWQyNjFkMjEwZDI1NGQyMjhkMjMxZDIyOGQyMTYuNWQyMjEuNWQyMDJkMjE1ZDIwMmQxODNoUjNkNzE5UjRkNjcwUjVkMjFSNmQxMDE4UjdkLTNSOGQ5OTdSOWQ3NzlSMTBkNTQwUjExaTIxOVIxMmQyMVIxM2Q3MTlSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpMmkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTA2b1IxZDEyNjNSMmFkLTE0MmQxMzgyZC0xNDJkMTM4MWQtMTM5LjVkMTM3NGQtMTM3ZDEzNjdkLTEzNGQxMzU4LjVkLTEzMWQxMzUwZC0xMjhkMTM0M2QtMTI1ZDEzMzZkLTEyNWQxMzM1ZC0xMDRkMTM1MWQtODJkMTM2Ni41ZC02MGQxMzgyZC0zNmQxMzk0ZC0xMmQxNDA2ZDEzZDE0MTMuNWQzOGQxNDIxZDY1ZDE0MjFkODRkMTQyMWQ5OC41ZDE0MDYuNWQxMTNkMTM5MmQxMjIuNWQxMzcwZDEzMmQxMzQ4ZDEzN2QxMzIzLjVkMTQyZDEyOTlkMTQyZDEyNzlkMTQyZDExNzNkMTM0ZDEwNzJkMTI2ZDk3MWQxMTcuNWQ4NzEuNWQxMDlkNzcyZDEwMy41ZDY3MS41ZDk4ZDU3MWQxMDNkNDY0ZDEwMGQ0NDdkMTA4LjVkNDM2ZDExN2Q0MjVkMTMwLjVkNDE5ZDE0NGQ0MTNkMTU5ZDQxMC41ZDE3NGQ0MDhkMTgzZDQwOGQxNzJkNDg5ZDE3Mi41ZDU4MGQxNzNkNjcxZDE3OS41ZDc2NGQxODZkODU3ZDE5NS41ZDk0OGQyMDVkMTAzOWQyMTFkMTEyMS41ZDIxN2QxMjA0ZDIxNi41ZDEyNzNkMjE2ZDEzNDJkMjAzZDEzOTFkMTkwZDE0NDBkMTYyZDE0NjQuNWQxMzRkMTQ4OWQ4NGQxNDgyZDYxZDE0ODJkMjhkMTQ3Ny41ZC01ZDE0NzNkLTM4LjVkMTQ2MS41ZC03MmQxNDUwZC0xMDAuNWQxNDMwLjVkLTEyOWQxNDExZC0xNDJkMTM4MmQxMzhkMTQwZDE1MmQxNTFkMTU2ZDE2OS41ZDE2MGQxODhkMTU1ZDIwMmQxNTBkMjE2ZDEzNS41ZDIyMGQxMjFkMjI0ZDk5ZDIwNGQ5OWQxOTVkMTAwLjVkMTg0ZDEwMmQxNzNkMTA2ZDE2M2QxMTBkMTUzZDExOGQxNDYuNWQxMjZkMTQwZDEzOGQxNDBoUjNkMjI4UjRkMjE3UjVkLTE0MlI2ZDg4NFI3ZC00NjVSOGQxMDI2UjlkNzc5UjEwZDU0MFIxMWkxMDZSMTJkLTE0MlIxM2QyMjhSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaGc6MjE4b1IxZDEyNjNSMmFkNTc4ZDg1MWQ1MjdkODk1ZDQ4NC41ZDkyNy41ZDQ0MmQ5NjBkMzk5LjVkOTgwLjVkMzU3ZDEwMDFkMzExZDEwMTBkMjY1ZDEwMTlkMjA3ZDEwMTVkMTI5ZDEwMDZkODlkOTY3LjVkNDlkOTI5ZDM1ZDg3MS41ZDIxZDgxNGQyN2Q3NDNkMzNkNjcyZDQ2LjVkNTk3LjVkNjBkNTIzZDc1LjVkNDUwLjVkOTFkMzc4ZDk2ZDMxOGQxMDBkMzE3ZDExMmQzMTYuNWQxMjRkMzE2ZDEyOGQzMTZkMTYyZDMxMmQxNzJkMzM0ZDE4MmQzNTZkMTc4ZDM5NS41ZDE3NGQ0MzVkMTYxZDQ4Ny41ZDE0OGQ1NDBkMTM1LjVkNTk2LjVkMTIzZDY1M2QxMTZkNzA4ZDEwOWQ3NjNkMTE3LjVkODA4ZDEyNmQ4NTNkMTU0LjVkODgzLjVkMTgzZDkxNGQyNDFkOTIwZDMyMWQ5MjNkMzc2ZDg5OC41ZDQzMWQ4NzRkNDY3ZDgyOS41ZDUwM2Q3ODVkNTIzLjVkNzI0ZDU0NGQ2NjNkNTU0LjVkNTkzZDU2NWQ1MjNkNTY4LjVkNDQ3LjVkNTcyZDM3MmQ1NzRkMjk4ZDU4MGQyNzlkNTkwZDI3MC41ZDYwMGQyNjJkNjEyZDI2MWQ2MjRkMjYwZDYzN2QyNjZkNjUwZDI3MmQ2NjRkMjgyZDY3MGQzNzFkNjY4LjVkNDU5LjVkNjY3ZDU0OGQ2NjMuNWQ2MzcuNWQ2NjBkNzI3ZDY1N2Q4MThkNjU0ZDkwOWQ2NTdkMTAwNGQ2NTdkMTAxOGQ2NDRkMTAyMi41ZDYzMWQxMDI3ZDYxNC41ZDEwMjZkNTk4ZDEwMjVkNTgzZDEwMjAuNWQ1NjhkMTAxNmQ1NjVkMTAxMWQ1NzhkODUxZDU3OGQ4NTFkMzk2ZDkxZDQwOWQ3NWQ0MjFkNzBkNDMzZDY1ZDQ0MWQ2OC41ZDQ0OWQ3MmQ0NTRkODEuNWQ0NTlkOTFkNDU5ZDEwMmQ0NTZkMTE0ZDQ1MS41ZDEyMy41ZDQ0N2QxMzNkNDM2ZDE0NmQ0MjVkMTU5ZDQwNGQxNzcuNWQzODNkMTk2ZDM0OWQyMjRkMzEwZDE4OWQzOTZkOTFoUjNkNzE5UjRkNjcwUjVkMjFSNmQ5NTlSN2QtM1I4ZDkzOFI5ZDc3OVIxMGQ1NDBSMTFpMjE4UjEyZDIxUjEzZDcxOVIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkyaTFpM2kzaTNpM2kzaTNpM2kzaTJpMmhnOjEwNW9SMWQxMjYzUjJhZDE0NmQ0MzdkMTU1ZDU2MGQxNjJkNjk4LjVkMTY5ZDgzN2QxNzRkOTc4ZDE2OWQ5OThkMTUzLjVkMTAwN2QxMzhkMTAxNmQxMjBkMTAxNi41ZDEwMmQxMDE3ZDg2LjVkMTAxMWQ3MWQxMDA1ZDY3ZDk5NWQ2N2Q0MzdkMTQ2ZDQzN2QzMGQyNjdkMzBkMjQ0ZDQzZDIzNGQ1NmQyMjRkNzRkMjIyLjVkOTJkMjIxZDExMGQyMjZkMTI4ZDIzMWQxMzZkMjM4ZDE0NWQyNzFkMTMzZDI4NmQxMjFkMzAxZDEwMS41ZDMwMi41ZDgyZDMwNGQ2MWQyOTRkNDBkMjg0ZDMwZDI2N2hSM2QxOTRSNGQxNzRSNWQzMFI2ZDgwM1I3ZDdSOGQ3NzNSOWQ3NzlSMTBkNTQwUjExaTEwNVIxMmQzMFIxM2QxOTRSMTRhaTFpM2kzaTNpM2kzaTNpMmkyaTFpM2kzaTNpM2kzaTNpM2kzaGc6MjE3b1IxZDEyNjNSMmFkNTc4ZDg1MWQ1MjdkODk1ZDQ4NC41ZDkyNy41ZDQ0MmQ5NjBkMzk5LjVkOTgwLjVkMzU3ZDEwMDFkMzExZDEwMTBkMjY1ZDEwMTlkMjA3ZDEwMTVkMTI5ZDEwMDZkODlkOTY3LjVkNDlkOTI5ZDM1ZDg3MS41ZDIxZDgxNGQyN2Q3NDNkMzNkNjcyZDQ2LjVkNTk3LjVkNjBkNTIzZDc1LjVkNDUwLjVkOTFkMzc4ZDk2ZDMxOGQxMDBkMzE3ZDExMmQzMTYuNWQxMjRkMzE2ZDEyOGQzMTZkMTYyZDMxMmQxNzJkMzM0ZDE4MmQzNTZkMTc4ZDM5NS41ZDE3NGQ0MzVkMTYxZDQ4Ny41ZDE0OGQ1NDBkMTM1LjVkNTk2LjVkMTIzZDY1M2QxMTZkNzA4ZDEwOWQ3NjNkMTE3LjVkODA4ZDEyNmQ4NTNkMTU0LjVkODgzLjVkMTgzZDkxNGQyNDFkOTIwZDMyMWQ5MjNkMzc2ZDg5OC41ZDQzMWQ4NzRkNDY3ZDgyOS41ZDUwM2Q3ODVkNTIzLjVkNzI0ZDU0NGQ2NjNkNTU0LjVkNTkzZDU2NWQ1MjNkNTY4LjVkNDQ3LjVkNTcyZDM3MmQ1NzRkMjk4ZDU4MGQyNzlkNTkwZDI3MC41ZDYwMGQyNjJkNjEyZDI2MWQ2MjRkMjYwZDYzN2QyNjZkNjUwZDI3MmQ2NjRkMjgyZDY3MGQzNzFkNjY4LjVkNDU5LjVkNjY3ZDU0OGQ2NjMuNWQ2MzcuNWQ2NjBkNzI3ZDY1N2Q4MThkNjU0ZDkwOWQ2NTdkMTAwNGQ2NTdkMTAxOGQ2NDRkMTAyMi41ZDYzMWQxMDI3ZDYxNC41ZDEwMjZkNTk4ZDEwMjVkNTgzZDEwMjAuNWQ1NjhkMTAxNmQ1NjVkMTAxMWQ1NzhkODUxZDU3OGQ4NTFkNDE0ZDIxOWQzOTNkMjczZDM2MWQyNTFkMzQyZDIzN2QzMjNkMjIzZDMxMmQyMTJkMzAxZDIwMWQyOTVkMTkxLjVkMjg5ZDE4MmQyODVkMTY5ZDI4M2QxNTZkMjg0LjVkMTQ0ZDI4NmQxMzJkMjkyZDEyNS41ZDI5OGQxMTlkMzA3LjVkMTIwLjVkMzE3ZDEyMmQzMzBkMTM3ZDQxNGQyMTloUjNkNzE5UjRkNjcwUjVkMjFSNmQ5MDVSN2QtM1I4ZDg4NFI5ZDc3OVIxMGQ1NDBSMTFpMjE3UjEyZDIxUjEzZDcxOVIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkyaTFpMmkzaTNpM2kzaTNpM2kzaTNpMmhnOjEwNG9SMWQxMjYzUjJhZDUxNmQ5OTRkNTE2ZDk0NmQ1MTUuNWQ4OTBkNTE1ZDgzNGQ1MTBkNzg1ZDUwNWQ3MzZkNDk0ZDcwMS41ZDQ4M2Q2NjdkNDYyZDY2MmQ0MDVkNjUxZDM2MGQ2NDYuNWQzMTVkNjQyZDI4MWQ2NDlkMjQ3ZDY1NmQyMjIuNWQ2NzguNWQxOThkNzAxZDE4MWQ3NDRkMTY0ZDc4N2QxNTMuNWQ4NTMuNWQxNDNkOTIwZDEzOGQxMDE1ZDQxZDEwMTVkNDVkODg0ZDQxLjVkNzY4LjVkMzhkNjUzZDM0ZDU1Mi41ZDMwZDQ1MmQyOS41ZDM2N2QyOWQyODJkMzlkMjEzZDQ5ZDE5M2Q2NWQxODkuNWQ4MWQxODZkOTdkMTkzLjVkMTEzZDIwMWQxMjVkMjE2ZDEzN2QyMzFkMTM4ZDI0N2QxMzdkMjU4ZDEzNmQyODNkMTM1ZDMwOGQxMzRkMzQxLjVkMTMzZDM3NWQxMzIuNWQ0MTRkMTMyZDQ1M2QxMzIuNWQ0OTEuNWQxMzNkNTMwZDEzNWQ1NjUuNWQxMzdkNjAxZDE0MmQ2MjdkMTc1ZDYwNWQyMDkuNWQ1ODhkMjQ0ZDU3MWQyODJkNTYyZDMyMGQ1NTNkMzYzZDU1MS41ZDQwNmQ1NTBkNDU3ZDU1OGQ1MDdkNTg0ZDUzNS41ZDYwOC41ZDU2NGQ2MzNkNTc4LjVkNjYxLjVkNTkzZDY5MGQ1OTcuNWQ3MjIuNWQ2MDJkNzU1ZDYwMy41ZDc5Ni41ZDYwNWQ4MzhkNjA3LjVkODkwZDYxMGQ5NDJkNjIxZDEwMDdkNjE2ZDEwMTZkNTk5ZDEwMjJkNTgyZDEwMjhkNTYzLjVkMTAyOGQ1NDVkMTAyOGQ1MzAuNWQxMDIwZDUxNmQxMDEyZDUxNmQ5OTRoUjNkNjM0UjRkNjIxUjVkMjlSNmQ4MzhSN2QtNFI4ZDgwOVI5ZDc3OVIxMGQ1NDBSMTFpMTA0UjEyZDI5UjEzZDYzNFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjIxNm9SMWQxMjYzUjJhZDI4ZDY1MGQyOGQ1NjRkNTcuNWQ0OTNkODdkNDIyZDEzOGQzNzEuNWQxODlkMzIxZDI1OWQyOTNkMzI5ZDI2NWQ0MTBkMjY1ZDQ4OGQyNjVkNTYxLjVkMjg0LjVkNjM1ZDMwNGQ2OTJkMzQ1ZDc0OWQzODZkNzgzLjVkNDQ5LjVkODE4ZDUxM2Q4MThkNjAyZDgxOGQ4MDhkNzIxLjVkOTA3ZDYyNWQxMDA2ZDQyNGQxMDA2ZDMzOWQxMDA2ZDI2Ni41ZDk4NmQxOTRkOTY2ZDE0MWQ5MjMuNWQ4OGQ4ODFkNThkODEzLjVkMjhkNzQ2ZDI4ZDY1MGQxMzBkNjMwZDEzMGQ3NzlkMjA0LjVkODUyZDI3OWQ5MjVkNDI3ZDkyNWQ1MDFkOTI1ZDU2MmQ5MDJkNjIzZDg3OWQ2NjZkODM3LjVkNzA5ZDc5NmQ3MzIuNWQ3MzguNWQ3NTZkNjgxZDc1NmQ2MTFkNzU2ZDU0MWQ3MjZkNDkxLjVkNjk2ZDQ0MmQ2NDhkNDEwLjVkNjAwZDM3OWQ1MzguNWQzNjVkNDc3ZDM1MWQ0MTRkMzUxZDM1OGQzNTFkMzA2LjVkMzczZDI1NWQzOTVkMjE2ZDQzMi41ZDE3N2Q0NzBkMTUzLjVkNTIxZDEzMGQ1NzJkMTMwZDYzMGQxMzhkNzU4ZDE0MGQ3NTBkMTYyLjVkNzEyZDE4NWQ2NzRkMjIxZDYxNy41ZDI1N2Q1NjFkMzAyLjVkNDkwLjVkMzQ4ZDQyMGQzOTUuNWQzNDcuNWQ0NDNkMjc1ZDQ4OC41ZDIwNS41ZDUzNGQxMzZkNTcxZDgwLjVkNjA4ZDI1ZDYzMS41ZC0xMC41ZDY1NWQtNDZkNjU5ZC01MWQ2NjlkLTQ1ZDY2MWQtMTJkNjUzZDIxZDYzMWQ3My41ZDYwOWQxMjZkNTc1LjVkMTkyLjVkNTQyZDI1OWQ1MDEuNWQzMzFkNDYxZDQwM2Q0MTZkNDc1LjVkMzcxZDU0OGQzMjZkNjEyLjVkMjgxZDY3N2QyMzguNWQ3MjguNWQxOTZkNzgwZDE2MWQ4MTBkMTUyZDgxMGQxNDdkODAzLjVkMTQyZDc5N2QxNDBkNzg4ZDEzOGQ3NzlkMTM4ZDc3MC41ZDEzOGQ3NjJkMTM4ZDc1OGhSM2Q4NThSNGQ4MThSNWQyOFI2ZDgxOVI3ZC00MlI4ZDc5MVI5ZDc3OVIxMGQ1NDBSMTFpMjE2UjEyZDI4UjEzZDg1OFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxMDNvUjFkMTI2M1IyYWQzOTdkMTQ3NWQ0MzZkMTQ3NGQ0NjEuNWQxNDYyZDQ4N2QxNDUwZDUwMi41ZDE0MjkuNWQ1MThkMTQwOWQ1MjQuNWQxMzgyZDUzMWQxMzU1ZDUzMGQxMzIzZDUyOWQxMzA0ZDUyOS41ZDEyNjVkNTMwZDEyMjZkNTMxZDExNzdkNTMyZDExMjhkNTMzZDEwNzQuNWQ1MzRkMTAyMWQ1MzVkOTcyZDUzNmQ5MjNkNTM2ZDg4NC41ZDUzNmQ4NDZkNTM1ZDgyNmQ0OTlkODU5ZDQ1NGQ4OTQuNWQ0MDlkOTMwZDM1NmQ5NThkMzAzZDk4NmQyNDJkMTAwMi41ZDE4MWQxMDE5ZDExMmQxMDE0ZDc1ZDEwMTRkNTJkOTk2ZDI5ZDk3OGQyOWQ5NDBkMzFkODk3ZDQ5LjVkODQ2LjVkNjhkNzk2ZDk4LjVkNzQ1LjVkMTI5ZDY5NWQxNjlkNjQ3LjVkMjA5ZDYwMGQyNTQuNWQ1NjRkMzAwZDUyOGQzNDguNWQ1MDYuNWQzOTdkNDg1ZDQ0NC41ZDQ4NWQ0OTJkNDg1ZDUzNS41ZDUxMS41ZDU3OWQ1MzhkNjE0ZDU5N2Q2MjhkNzk5ZDYzMmQ5NDdkNjM2ZDEwOTVkNjMxZDExOTkuNWQ2MjZkMTMwNGQ2MTIuNWQxMzcwZDU5OWQxNDM2ZDU3OGQxNDc1ZDU1N2QxNTE0ZDUyOC41ZDE1MzFkNTAwZDE1NDhkNDY0LjVkMTU1My41ZDQyOWQxNTU5ZDM4N2QxNTU5ZDM0NWQxNTU5ZDI5OGQxNTYzZDI4MWQxNTYzZDI1MGQxNTYzZDIxOWQxNTYzZDE4Ny41ZDE1NTYuNWQxNTZkMTU1MGQxMzNkMTUzNC41ZDExMGQxNTE5ZDExMGQxNDg5ZDM5N2QxNDc1ZDQ0MGQ1NzFkNDAxZDU3MWQzNTlkNTk0ZDMxN2Q2MTdkMjc3LjVkNjUyZDIzOGQ2ODdkMjA1ZDczMGQxNzJkNzczZDE1MWQ4MTMuNWQxMzBkODU0ZDEyNGQ4ODYuNWQxMThkOTE5ZDEzNGQ5MzNkMTQ5ZDk0MmQxODRkOTM1LjVkMjE5ZDkyOWQyNjJkOTExZDMwNWQ4OTNkMzUxZDg2NGQzOTdkODM1ZDQzNWQ4MDBkNDczZDc2NWQ0OTcuNWQ3MjVkNTIyZDY4NWQ1MjJkNjQ0ZDUyMmQ2MjlkNTE0LjVkNjE1LjVkNTA3ZDYwMmQ0OTUuNWQ1OTJkNDg0ZDU4MmQ0NjkuNWQ1NzYuNWQ0NTVkNTcxZDQ0MGQ1NzFoUjNkNjYwUjRkNjM2UjVkMjlSNmQ1MzlSN2QtNTM5UjhkNTEwUjlkNzc5UjEwZDU0MFIxMWkxMDNSMTJkMjlSMTNkNjYwUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MjE1b1IxZDEyNjNSMmFkMTAzZDkwMmQxMDdkODk5ZDEyNmQ4NzhkMTQ1ZDg1N2QxNjguNWQ4MjlkMTkyZDgwMWQyMTQuNWQ3NzIuNWQyMzdkNzQ0ZDI0N2Q3MjVkMjA0ZDY3N2QxNzFkNjQwZDE1N2Q2MjRkMTQzZDYwOWQxMjlkNTk0ZDExOC41ZDU4MmQxMDhkNTcwZDEwMS41ZDU2Mi41ZDk1ZDU1NWQ5NWQ1NTVkMTQ4ZDQ5OGQxNzVkNTMyZDE5Mi41ZDU1NGQyMTBkNTc2ZDIyMWQ1OTFkMjMyZDYwNmQyMzkuNWQ2MTZkMjQ3ZDYyNmQyNTQuNWQ2MzVkMjYyZDY0NGQyNzEuNWQ2NTRkMjgxZDY2NGQyOTdkNjc5ZDMwOWQ2NjNkMzI0LjVkNjQwZDM0MGQ2MTdkMzU3ZDU5MS41ZDM3NGQ1NjZkMzkyLjVkNTQwLjVkNDExZDUxNWQ0MzBkNDkzZDQ1MWQ0OTNkNDYzZDUwNy41ZDQ3NWQ1MjJkNDc1ZDUzNWQ0NTlkNTcwZDQ0MS41ZDU5NS41ZDQyNGQ2MjFkNDA4ZDY0MS41ZDM5MmQ2NjJkMzc4LjVkNjgxZDM2NWQ3MDBkMzU3ZDcyMmQzNzhkNzM3ZDQwMi41ZDc2MWQ0MjdkNzg1ZDQ0OWQ4MDlkNDcxZDgzM2Q0ODguNWQ4NTQuNWQ1MDZkODc2ZDUxM2Q4ODZkNTEzZDg5MGQ1MDlkODk3ZDUwNWQ5MDRkNDk5LjVkOTExZDQ5NGQ5MThkNDg3LjVkOTI0ZDQ4MWQ5MzBkNDc2ZDkzM2Q0NTlkOTI0ZDQ0MGQ5MDNkNDIxZDg4MmQ0MDAuNWQ4NTYuNWQzODBkODMxZDM1Ny41ZDgwNS41ZDMzNWQ3ODBkMzExZDc2M2QyOThkNzc4ZDI3OC41ZDgwMmQyNTlkODI2ZDIzNy41ZDg1MWQyMTZkODc2ZDE5NmQ4OThkMTc2ZDkyMGQxNjJkOTMwZDE1N2Q5MzFkMTQ4LjVkOTI5ZDE0MGQ5MjdkMTMxZDkyM2QxMjJkOTE5ZDExNGQ5MTMuNWQxMDZkOTA4ZDEwM2Q5MDJoUjNkNjAyUjRkNTEzUjVkOTVSNmQ1MzFSN2Q5MVI4ZDQzNlI5ZDc3OVIxMGQ1NDBSMTFpMjE1UjEyZDk1UjEzZDYwMlIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTAyb1IxZDEyNjNSMmFkNjVkODE3ZDU3ZDgxN2Q0OC41ZDgwOS41ZDQwZDgwMmQzM2Q3OTAuNWQyNmQ3NzlkMjEuNWQ3NjVkMTdkNzUxZDE3ZDczOWQyMDdkNjcxZDE5MGQ1MjhkMTg1ZDQyMWQxODBkMzE0ZDE4NWQyMzhkMTkwZDE2MmQyMDVkMTEzZDIyMGQ2NGQyNDRkMzUuNWQyNjhkN2QzMDFkLTMuNWQzMzRkLTE0ZDM3NGQtMTRkNDExZC0xNGQ0NjEuNWQ3ZDUxMmQyOGQ1NTguNWQ2MWQ2MDVkOTRkNjM3LjVkMTM0LjVkNjcwZDE3NWQ2NzBkMjE0ZDY3MGQyMTdkNjY5LjVkMjIzZDY2OWQyMjlkNjY4ZDIzNS41ZDY2N2QyNDJkNjY2ZDI0OGQ2NjVkMjU0ZDY2NGQyNTZkNjQyZDIyN2Q2MTFkMTkzLjVkNTgwZDE2MGQ1NDNkMTMyZDUwNmQxMDRkNDY1ZDg1LjVkNDI0ZDY3ZDM4M2Q2N2QzNDFkNjdkMzE5ZDk2LjVkMjk3ZDEyNmQyODcuNWQxNjhkMjc4ZDIxMGQyNzdkMjU0LjVkMjc2ZDI5OWQyNzZkMzI5ZDI3NmQ0MTJkMjgxZDQ5MWQyODZkNTcwZDMxMWQ2NTBkMzY1ZDY1MGQ0MTguNWQ2NDMuNWQ0NzJkNjM3ZDUyNi41ZDYyOS41ZDU4MWQ2MjJkNjM3ZDYxNWQ2OTNkNjA4ZDc1MWQ2MDdkNzU0ZDYwN2Q3NTUuNWQ2MTQuNWQ3NTdkNjIyZDc1N2Q2MzRkNzU3ZDY0NmQ3NTcuNWQ2NjBkNzU4ZDY3NGQ3NjBkNjg3ZDMzMWQ3MzlkMzU0ZDEwMTZkMjUyZDEwMTJkMjUyZDk0NmQyNDUuNWQ4ODIuNWQyMzlkODE5ZDIyOGQ3NTRkNjVkODE3aFIzZDc2MFI0ZDc2MFI1ZDE3UjZkMTAzOFI3ZDhSOGQxMDIxUjlkNzc5UjEwZDU0MFIxMWkxMDJSMTJkMTdSMTNkNzYwUjE0YWkxaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkyaTJpM2kzaTJoZzoyMTRvUjFkMTI2M1IyYWQyOGQ2NTBkMjhkNTY0ZDU3LjVkNDkzZDg3ZDQyMmQxMzhkMzcxLjVkMTg5ZDMyMWQyNTlkMjkzZDMyOWQyNjVkNDEwZDI2NWQ0ODhkMjY1ZDU2MS41ZDI4NC41ZDYzNWQzMDRkNjkyZDM0NWQ3NDlkMzg2ZDc4My41ZDQ0OS41ZDgxOGQ1MTNkODE4ZDYwMmQ4MThkODA4ZDcyMS41ZDkwN2Q2MjVkMTAwNmQ0MjRkMTAwNmQzMzlkMTAwNmQyNjYuNWQ5ODZkMTk0ZDk2NmQxNDFkOTIzLjVkODhkODgxZDU4ZDgxMy41ZDI4ZDc0NmQyOGQ2NTBkMTMwZDYzMGQxMzBkNzc5ZDIwNC41ZDg1MmQyNzlkOTI1ZDQyN2Q5MjVkNTAxZDkyNWQ1NjJkOTAyZDYyM2Q4NzlkNjY2ZDgzNy41ZDcwOWQ3OTZkNzMyLjVkNzM4LjVkNzU2ZDY4MWQ3NTZkNjExZDc1NmQ1NDFkNzI2ZDQ5MS41ZDY5NmQ0NDJkNjQ4ZDQxMC41ZDYwMGQzNzlkNTM4LjVkMzY1ZDQ3N2QzNTFkNDE0ZDM1MWQzNThkMzUxZDMwNi41ZDM3M2QyNTVkMzk1ZDIxNmQ0MzIuNWQxNzdkNDcwZDE1My41ZDUyMWQxMzBkNTcyZDEzMGQ2MzBkMjg1ZDE3NGQyODVkMTY5ZDI5NC41ZDE2MS41ZDMwNGQxNTRkMzE2ZDE0OGQzMjlkMTQxZDM0N2QxMzNkMzczZDEzM2QzODIuNWQxNDRkMzkyZDE1NWQzOTJkMTc1ZDM5MmQxOTBkMzg0LjVkMTk4LjVkMzc3ZDIwN2QzNjUuNWQyMTFkMzU0ZDIxNWQzNDAuNWQyMTZkMzI3ZDIxN2QzMTVkMjE3ZDI5OWQyMTdkMjkyZDIwNy41ZDI4NWQxOThkMjg1ZDE3NGQ0NjVkMTc0ZDQ2NWQxNjlkNDc0LjVkMTYxLjVkNDg0ZDE1NGQ0OTZkMTQ4ZDUxMGQxNDFkNTI4ZDEzM2Q1NTRkMTMzZDU2My41ZDE0NGQ1NzNkMTU1ZDU3M2QxNzVkNTczZDE5MGQ1NjUuNWQxOTguNWQ1NThkMjA3ZDU0Ni41ZDIxMWQ1MzVkMjE1ZDUyMWQyMTZkNTA3ZDIxN2Q0OTVkMjE3ZDQ3OWQyMTdkNDcyZDIwNy41ZDQ2NWQxOThkNDY1ZDE3NGhSM2Q4NThSNGQ4MThSNWQyOFI2ZDg5MVI3ZDE4UjhkODYzUjlkNzc5UjEwZDU0MFIxMWkyMTRSMTJkMjhSMTNkODU4UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjEwMW9SMWQxMjYzUjJhZDI3ZDg2MGQxOGQ3NzlkNDIuNWQ3MDJkNjdkNjI1ZDExNi41ZDU2NmQxNjZkNTA3ZDIzNmQ0NzIuNWQzMDZkNDM4ZDM4OWQ0NDBkNDAzZDQ0MGQ0MjYuNWQ0NDRkNDUwZDQ0OGQ0NzYuNWQ0NTYuNWQ1MDNkNDY1ZDUyOC41ZDQ3OGQ1NTRkNDkxZDU3My41ZDUwOWQ1OTNkNTI3ZDYwM2Q1NDkuNWQ2MTNkNTcyZDYwOGQ2MDBkNTY3ZDYyOWQ1MTMuNWQ2NDBkNDYwZDY1MWQ0MDQuNWQ2NTUuNWQzNDlkNjYwZDI5NmQ2NjMuNWQyNDNkNjY3ZDIwMy41ZDY4MmQxNjRkNjk3ZDE0Mi41ZDcyOS41ZDEyMWQ3NjJkMTI5ZDgyM2QxNDRkODc4ZDE3OC41ZDkwNGQyMTNkOTMwZDI1OC41ZDkzNS41ZDMwNGQ5NDFkMzU1LjVkOTMwLjVkNDA3ZDkyMGQ0NTYuNWQ5MDNkNTA2ZDg4NmQ1NDlkODY3ZDU5MmQ4NDhkNjIwZDgzNmQ2MzNkODM2ZDY0MmQ4NDUuNWQ2NTFkODU1ZDY1MWQ4NjhkNjI2ZDkxMWQ1NzVkOTQ1ZDUyNGQ5NzlkNDYwZDEwMDBkMzk2ZDEwMjFkMzI2LjVkMTAyNmQyNTdkMTAzMWQxOTZkMTAxNmQxMzVkMTAwMWQ4OWQ5NjNkNDNkOTI1ZDI3ZDg2MGQzODBkNTE1ZDM2MmQ1MTVkMzM2ZDUxOWQzMTBkNTIzZDI4NmQ1MzNkMjYyZDU0M2QyNDQuNWQ1NTlkMjI3ZDU3NWQyMjdkNjAwZDQ3NWQ1NTlkNDU5ZDUzNWQ0MzMuNWQ1MjVkNDA4ZDUxNWQzODBkNTE1aFIzZDY5MlI0ZDY1MVI1ZDE4UjZkNTg2UjdkLTdSOGQ1NjhSOWQ3NzlSMTBkNTQwUjExaTEwMVIxMmQxOFIxM2Q2OTJSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTJpM2kzaGc6MjEzb1IxZDEyNjNSMmFkMjhkNjUwZDI4ZDU2NGQ1Ny41ZDQ5M2Q4N2Q0MjJkMTM4ZDM3MS41ZDE4OWQzMjFkMjU5ZDI5M2QzMjlkMjY1ZDQxMGQyNjVkNDg4ZDI2NWQ1NjEuNWQyODQuNWQ2MzVkMzA0ZDY5MmQzNDVkNzQ5ZDM4NmQ3ODMuNWQ0NDkuNWQ4MThkNTEzZDgxOGQ2MDJkODE4ZDgwOGQ3MjEuNWQ5MDdkNjI1ZDEwMDZkNDI0ZDEwMDZkMzM5ZDEwMDZkMjY2LjVkOTg2ZDE5NGQ5NjZkMTQxZDkyMy41ZDg4ZDg4MWQ1OGQ4MTMuNWQyOGQ3NDZkMjhkNjUwZDEzMGQ2MzBkMTMwZDc3OWQyMDQuNWQ4NTJkMjc5ZDkyNWQ0MjdkOTI1ZDUwMWQ5MjVkNTYyZDkwMmQ2MjNkODc5ZDY2NmQ4MzcuNWQ3MDlkNzk2ZDczMi41ZDczOC41ZDc1NmQ2ODFkNzU2ZDYxMWQ3NTZkNTQxZDcyNmQ0OTEuNWQ2OTZkNDQyZDY0OGQ0MTAuNWQ2MDBkMzc5ZDUzOC41ZDM2NWQ0NzdkMzUxZDQxNGQzNTFkMzU4ZDM1MWQzMDYuNWQzNzNkMjU1ZDM5NWQyMTZkNDMyLjVkMTc3ZDQ3MGQxNTMuNWQ1MjFkMTMwZDU3MmQxMzBkNjMwZDQ0NWQxODZkNDIwZDE2NGQ0MDFkMTQ5ZDM4MmQxMzRkMzYyLjVkMTM1LjVkMzQzZDEzN2QzMTkuNWQxNTkuNWQyOTZkMTgyZDI2MGQyMzVkMjU2ZDIzNWQyNDlkMjM0ZDI0MmQyMzNkMjM1ZDIzMGQyMjhkMjI3ZDIyMmQyMjJkMjE2ZDIxN2QyMTRkMjA5ZDIzM2QxNDlkMjcwLjVkMTAzZDMwOGQ1N2QzNTBkNDBkMzY3ZDMzZDM4Mi41ZDM5ZDM5OGQ0NWQ0MTMuNWQ1Ny41ZDQyOWQ3MGQ0NDMuNWQ4Ni41ZDQ1OGQxMDNkNDczLjVkMTE4ZDQ4OWQxMzNkNTA1LjVkMTQzZDUyMmQxNTNkNTQwZDE1M2Q1NjhkMTUzZDU4My41ZDE0NC41ZDU5OWQxMzZkNjEyZDExOS41ZDYyNWQxMDNkNjQwLjVkNzlkNjU2ZDU1ZDY4NGQyNWQ2OTJkMjVkNzAwZDM4LjVkNzA4ZDUyZDcwOGQ2MmQ3MTNkOTBkNzAyZDExN2Q2OTFkMTQ0ZDY2OS41ZDE2NmQ2NDhkMTg4ZDYxOC41ZDIwM2Q1ODlkMjE4ZDU1OGQyMjIuNWQ1MjdkMjI3ZDQ5Ny41ZDIxOWQ0NjhkMjExZDQ0NWQxODZoUjNkODU4UjRkODE4UjVkMjhSNmQ5OTlSN2QxOFI4ZDk3MVI5ZDc3OVIxMGQ1NDBSMTFpMjEzUjEyZDI4UjEzZDg1OFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTAwb1IxZDEyNjNSMmFkNTEzZDg4NmQ0NDRkOTM5ZDM3NC41ZDk3NC41ZDMwNWQxMDEwZDI0MWQxMDE3ZDE3N2QxMDI0ZDExOS41ZDk5Ny41ZDYyZDk3MWQxN2Q4OTlkM2Q4MzRkMTlkNzc2ZDM1ZDcxOGQ3MmQ2NzBkMTA5ZDYyMmQxNjJkNTg2LjVkMjE1ZDU1MWQyNzVkNTMxZDMzNWQ1MTFkMzk4LjVkNTA5ZDQ2MmQ1MDdkNTIwZDUyNmQ1MjBkNTExZDUyMS41ZDQ4MGQ1MjNkNDQ5ZDUyNWQ0MTBkNTI3ZDM3MWQ1MjlkMzI4ZDUzMWQyODVkNTMzLjVkMjQ2ZDUzNmQyMDdkNTM4ZDE3Ni41ZDU0MGQxNDZkNTQxZDEzMWQ1NDNkMTA3ZDU0Ni41ZDg3ZDU1MGQ2N2Q1NTlkNTJkNTY4ZDM3ZDU4My41ZDI4LjVkNTk5ZDIwZDYyNWQyMGQ2MjVkMTQwZDYxOGQyNTRkNjExZDM2OGQ2MDUuNWQ0ODMuNWQ2MDBkNTk5ZDYwMC41ZDcxOWQ2MDFkODM5ZDYxN2Q5NzJkNjE3ZDEwMDFkNjA2LjVkMTAxM2Q1OTZkMTAyNWQ1NzFkMTAyNWQ1NDdkMTAyNWQ1MzQuNWQxMDA5LjVkNTIyZDk5NGQ1MTcuNWQ5NzIuNWQ1MTNkOTUxZDUxM2Q5MjdkNTEzZDkwM2Q1MTNkODg2ZDEwNGQ4NDdkMTA2ZDg5M2QxMzAuNWQ5MTIuNWQxNTVkOTMyZDE5OWQ5MjRkMjIwZDkyNGQyNjMuNWQ5MTIuNWQzMDdkOTAxZDM1My41ZDg4Mi41ZDQwMGQ4NjRkNDQxZDg0MS41ZDQ4MmQ4MTlkNDk5ZDc5NmQ0OTlkNjMwZDQ5OWQ2MTVkNDkxLjVkNjA2ZDQ4NGQ1OTdkNDcyLjVkNTkyLjVkNDYxZDU4OGQ0NDguNWQ1ODdkNDM2ZDU4NmQ0MjdkNTg2ZDQwMGQ1ODJkMzY0LjVkNTg5LjVkMzI5ZDU5N2QyOTEuNWQ2MTMuNWQyNTRkNjMwZDIxOC41ZDY1NC41ZDE4M2Q2NzlkMTU2ZDcwOS41ZDEyOWQ3NDBkMTE0ZDc3NWQ5OWQ4MTBkMTA0ZDg0N2hSM2Q2NTZSNGQ2MjVSNWQzUjZkMTAwNFI3ZC0xUjhkMTAwMVI5ZDc3OVIxMGQ1NDBSMTFpMTAwUjEyZDNSMTNkNjU2UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MjEyb1IxZDEyNjNSMmFkMjhkNjUwZDI4ZDU2NGQ1Ny41ZDQ5M2Q4N2Q0MjJkMTM4ZDM3MS41ZDE4OWQzMjFkMjU5ZDI5M2QzMjlkMjY1ZDQxMGQyNjVkNDg4ZDI2NWQ1NjEuNWQyODQuNWQ2MzVkMzA0ZDY5MmQzNDVkNzQ5ZDM4NmQ3ODMuNWQ0NDkuNWQ4MThkNTEzZDgxOGQ2MDJkODE4ZDgwOGQ3MjEuNWQ5MDdkNjI1ZDEwMDZkNDI0ZDEwMDZkMzM5ZDEwMDZkMjY2LjVkOTg2ZDE5NGQ5NjZkMTQxZDkyMy41ZDg4ZDg4MWQ1OGQ4MTMuNWQyOGQ3NDZkMjhkNjUwZDEzMGQ2MzBkMTMwZDc3OWQyMDQuNWQ4NTJkMjc5ZDkyNWQ0MjdkOTI1ZDUwMWQ5MjVkNTYyZDkwMmQ2MjNkODc5ZDY2NmQ4MzcuNWQ3MDlkNzk2ZDczMi41ZDczOC41ZDc1NmQ2ODFkNzU2ZDYxMWQ3NTZkNTQxZDcyNmQ0OTEuNWQ2OTZkNDQyZDY0OGQ0MTAuNWQ2MDBkMzc5ZDUzOC41ZDM2NWQ0NzdkMzUxZDQxNGQzNTFkMzU4ZDM1MWQzMDYuNWQzNzNkMjU1ZDM5NWQyMTZkNDMyLjVkMTc3ZDQ3MGQxNTMuNWQ1MjFkMTMwZDU3MmQxMzBkNjMwZDI1NWQyMDlkMjU1ZDE5NGQyNjhkMTcxZDI4MWQxNDhkMzA1ZDEyMy41ZDMyOWQ5OWQzNjIuNWQ3NC41ZDM5NmQ1MGQ0MzZkMzJkNDYzZDQ5ZDQ4My41ZDYyLjVkNTA0ZDc2ZDUyMmQ5Mi41ZDU0MGQxMDlkNTU4LjVkMTMyZDU3N2QxNTVkNjAwZDE5MmQ2MDhkMjA3ZDYwOC41ZDIyMGQ2MDlkMjMzZDYwM2QyNDFkNTk3ZDI0OWQ1ODUuNWQyNTBkNTc0ZDI1MWQ1NThkMjQyZDU0MGQyMjlkNTMwZDIyMmQ1MjBkMjE1ZDUxNGQyMTAuNWQ1MDhkMjA2ZDUwMy41ZDIwMWQ0OTlkMTk2ZDQ5MC41ZDE4Ny41ZDQ4MmQxNzlkNDY3LjVkMTY0ZDQ1M2QxNDlkNDI3ZDEyM2Q0MDBkMTQyZDM4MC41ZDE1OGQzNjFkMTc0ZDM0N2QxODkuNWQzMzNkMjA1ZDMyMy41ZDIyMC41ZDMxNGQyMzZkMzA3ZDI1NGQyODRkMjU0ZDI2OS41ZDI0Ny41ZDI1NWQyNDFkMjU1ZDIwOWhSM2Q4NThSNGQ4MThSNWQyOFI2ZDk5MlI3ZDE4UjhkOTY0UjlkNzc5UjEwZDU0MFIxMWkyMTJSMTJkMjhSMTNkODU4UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6OTlvUjFkMTI2M1IyYWQyN2Q4MjdkMjNkNzgxZDQ0ZDczNS41ZDY1ZDY5MGQxMDIuNWQ2NDguNWQxNDBkNjA3ZDE5MC41ZDU3MS41ZDI0MWQ1MzZkMjk3ZDUxMWQzNTNkNDg2ZDQxMC41ZDQ3My41ZDQ2OGQ0NjFkNTE5ZDQ2NmQ1MzhkNDY2ZDU1N2Q0NjhkNTc2ZDQ3MGQ1OTAuNWQ0NzhkNjA1ZDQ4NmQ2MTRkNTAxZDYyM2Q1MTZkNjIzZDU0MmQ2MjNkNTU1ZDYxNi41ZDU2NWQ2MTBkNTc1ZDYwMC41ZDU4NGQ1OTFkNTkzZDU4MGQ2MDBkNTY5ZDYwN2Q1NjBkNjE0ZDU1N2Q2MDBkNTU0ZDU4Ny41ZDU1MWQ1NzVkNTQ0LjVkNTY1LjVkNTM4ZDU1NmQ1MjcuNWQ1NTAuNWQ1MTdkNTQ1ZDUwMGQ1NDVkNDQxZDU1N2QzNzIuNWQ1ODEuNWQzMDRkNjA2ZDI0Ni41ZDY0MGQxODlkNjc0ZDE1NGQ3MTYuNWQxMTlkNzU5ZDEyN2Q4MDhkMTI3ZDg1MmQxNDRkODc5ZDE2MWQ5MDZkMTg4LjVkOTIxZDIxNmQ5MzZkMjUxLjVkOTQxZDI4N2Q5NDZkMzI0ZDk0NmQzODFkOTQ2ZDQzNC41ZDkyOWQ0ODhkOTEyZDUzOWQ4OTFkNTkwZDg3MGQ2MzlkODUzZDY4OGQ4MzZkNzM1ZDgzNmQ3NDNkODM2ZDc1MS41ZDgzN2Q3NjBkODM4ZDc2Ni41ZDg0Mi41ZDc3M2Q4NDdkNzc1LjVkODU1LjVkNzc4ZDg2NGQ3NzVkODc5ZDc3MGQ4OTdkNzM5LjVkOTE1ZDcwOWQ5MzNkNjY0LjVkOTQ5ZDYyMGQ5NjVkNTY3LjVkOTc5ZDUxNWQ5OTNkNDY1LjVkMTAwM2Q0MTZkMTAxM2QzNzYuNWQxMDE4LjVkMzM3ZDEwMjRkMzE4ZDEwMjRkMjc0ZDEwMjRkMjIzZDEwMTRkMTcyZDEwMDRkMTI4LjVkOTgxZDg1ZDk1OGQ1NmQ5MjAuNWQyN2Q4ODNkMjdkODI3aFIzZDgxMFI0ZDc3OFI1ZDIzUjZkNTYzUjdkMFI4ZDU0MFI5ZDc3OVIxMGQ1NDBSMTFpOTlSMTJkMjNSMTNkODEwUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjIxMW9SMWQxMjYzUjJhZDI4ZDY1MGQyOGQ1NjRkNTcuNWQ0OTNkODdkNDIyZDEzOGQzNzEuNWQxODlkMzIxZDI1OWQyOTNkMzI5ZDI2NWQ0MTBkMjY1ZDQ4OGQyNjVkNTYxLjVkMjg0LjVkNjM1ZDMwNGQ2OTJkMzQ1ZDc0OWQzODZkNzgzLjVkNDQ5LjVkODE4ZDUxM2Q4MThkNjAyZDgxOGQ4MDhkNzIxLjVkOTA3ZDYyNWQxMDA2ZDQyNGQxMDA2ZDMzOWQxMDA2ZDI2Ni41ZDk4NmQxOTRkOTY2ZDE0MWQ5MjMuNWQ4OGQ4ODFkNThkODEzLjVkMjhkNzQ2ZDI4ZDY1MGQxMzBkNjMwZDEzMGQ3NzlkMjA0LjVkODUyZDI3OWQ5MjVkNDI3ZDkyNWQ1MDFkOTI1ZDU2MmQ5MDJkNjIzZDg3OWQ2NjZkODM3LjVkNzA5ZDc5NmQ3MzIuNWQ3MzguNWQ3NTZkNjgxZDc1NmQ2MTFkNzU2ZDU0MWQ3MjZkNDkxLjVkNjk2ZDQ0MmQ2NDhkNDEwLjVkNjAwZDM3OWQ1MzguNWQzNjVkNDc3ZDM1MWQ0MTRkMzUxZDM1OGQzNTFkMzA2LjVkMzczZDI1NWQzOTVkMjE2ZDQzMi41ZDE3N2Q0NzBkMTUzLjVkNTIxZDEzMGQ1NzJkMTMwZDYzMGQ0NDhkODJkNDYxZDY2ZDQ3M2Q2MWQ0ODVkNTZkNDkzZDU5LjVkNTAxZDYzZDUwNmQ3Mi41ZDUxMWQ4MmQ1MTFkOTNkNTA4ZDEwNWQ1MDMuNWQxMTQuNWQ0OTlkMTI0ZDQ4OGQxMzdkNDc3ZDE1MGQ0NTZkMTY4LjVkNDM1ZDE4N2Q0MDFkMjE1ZDM2MmQxODBkNDQ4ZDgyaFIzZDg1OFI0ZDgxOFI1ZDI4UjZkOTY4UjdkMThSOGQ5NDBSOWQ3NzlSMTBkNTQwUjExaTIxMVIxMmQyOFIxM2Q4NThSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTJpMmhnOjk4b1IxZDEyNjNSMmFkMjM3ZDEwMTVkMjMwZDEwMTNkMjEyZDEwMTRkMTk0ZDEwMTVkMTY5ZDEwMTVkMTQ0ZDEwMTVkMTEzLjVkMTAxMmQ4M2QxMDA5ZDUxZDk5OWQ0NmQ5NDJkNDMuNWQ4NzRkNDFkODA2ZDQwLjVkNzMyZDQwZDY1OGQ0MC41ZDU4MC41ZDQxZDUwM2Q0MS41ZDQyNy41ZDQyZDM1MmQ0MS41ZDI4MWQ0MWQyMTBkMzlkMTQ4ZDM1ZDEyMGQ1MC41ZDEwOGQ2NmQ5NmQ4NS41ZDk2ZDEwNWQ5NmQxMjFkMTA2LjVkMTM3ZDExN2QxMzRkMTM1ZDE0MmQ2NzVkMTgxZDYyNGQyMzcuNWQ1NzhkMjk0ZDUzMmQzNTVkNDk5ZDQxNmQ0NjZkNDc3ZDQ0OS41ZDUzOGQ0MzNkNTg2ZDQ0MS41ZDYzNGQ0NTBkNjY0ZDQ4Ny41ZDY5NGQ1MjVkNjk0ZDU5OGQ2OTRkNjQ4ZDY3MWQ2OTRkNjQ4ZDc0MGQ2MTBkNzgxLjVkNTcyZDgyM2Q1MjRkODU5ZDQ3NmQ4OTVkNDI1ZDkyNC41ZDM3NGQ5NTRkMzI1ZDk3N2QyNzZkMTAwMGQyMzdkMTAxNWQ2MjFkNjEwZDYxM2Q1NzNkNTg3LjVkNTU2ZDU2MmQ1MzlkNTI1LjVkNTM5ZDQ4OWQ1MzlkNDQ1LjVkNTU0ZDQwMmQ1NjlkMzU4ZDU5NWQzMTRkNjIxZDI3My41ZDY1NmQyMzNkNjkxZDIwM2Q3MzJkMTczZDc3M2QxNTcuNWQ4MThkMTQyZDg2M2QxNDdkOTA4ZDE0MmQ5MjRkMTY1LjVkOTI2LjVkMTg5ZDkyOWQyMzAuNWQ5MThkMjcyZDkwN2QzMjVkODgyZDM3OGQ4NTdkNDMyLjVkODE4LjVkNDg3ZDc4MGQ1MzdkNzI4ZDU4N2Q2NzZkNjIxZDYxMGhSM2Q3MTlSNGQ2OTRSNWQzNVI2ZDkyOFI3ZDlSOGQ4OTNSOWQ3NzlSMTBkNTQwUjExaTk4UjEyZDM1UjEzZDcxOVIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjIxMG9SMWQxMjYzUjJhZDI4ZDY1MGQyOGQ1NjRkNTcuNWQ0OTNkODdkNDIyZDEzOGQzNzEuNWQxODlkMzIxZDI1OWQyOTNkMzI5ZDI2NWQ0MTBkMjY1ZDQ4OGQyNjVkNTYxLjVkMjg0LjVkNjM1ZDMwNGQ2OTJkMzQ1ZDc0OWQzODZkNzgzLjVkNDQ5LjVkODE4ZDUxM2Q4MThkNjAyZDgxOGQ4MDhkNzIxLjVkOTA3ZDYyNWQxMDA2ZDQyNGQxMDA2ZDMzOWQxMDA2ZDI2Ni41ZDk4NmQxOTRkOTY2ZDE0MWQ5MjMuNWQ4OGQ4ODFkNThkODEzLjVkMjhkNzQ2ZDI4ZDY1MGQxMzBkNjMwZDEzMGQ3NzlkMjA0LjVkODUyZDI3OWQ5MjVkNDI3ZDkyNWQ1MDFkOTI1ZDU2MmQ5MDJkNjIzZDg3OWQ2NjZkODM3LjVkNzA5ZDc5NmQ3MzIuNWQ3MzguNWQ3NTZkNjgxZDc1NmQ2MTFkNzU2ZDU0MWQ3MjZkNDkxLjVkNjk2ZDQ0MmQ2NDhkNDEwLjVkNjAwZDM3OWQ1MzguNWQzNjVkNDc3ZDM1MWQ0MTRkMzUxZDM1OGQzNTFkMzA2LjVkMzczZDI1NWQzOTVkMjE2ZDQzMi41ZDE3N2Q0NzBkMTUzLjVkNTIxZDEzMGQ1NzJkMTMwZDYzMGQ0ODNkMTU1ZDQ2MmQyMDlkNDMwZDE4N2Q0MTFkMTczZDM5MmQxNTlkMzgxZDE0OGQzNzBkMTM3ZDM2NGQxMjcuNWQzNThkMTE4ZDM1NGQxMDVkMzUyZDkyZDM1My41ZDgwZDM1NWQ2OGQzNjFkNjEuNWQzNjdkNTVkMzc2LjVkNTYuNWQzODZkNThkMzk5ZDczZDQ4M2QxNTVoUjNkODU4UjRkODE4UjVkMjhSNmQ5NjlSN2QxOFI4ZDk0MVI5ZDc3OVIxMGQ1NDBSMTFpMjEwUjEyZDI4UjEzZDg1OFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkyaTNpM2kzaTNpM2kzaTNpM2kyaGc6OTdvUjFkMTI2M1IyYWQ1MjVkODE3ZDQ5NmQ4NjJkNDU4ZDg5OC41ZDQyMGQ5MzVkMzc0LjVkOTYwLjVkMzI5ZDk4NmQyNzUuNWQ5OThkMjIyZDEwMTBkMTYzZDEwMDVkMTQyZDEwMDVkMTE4ZDEwMDBkOTRkOTk1ZDczLjVkOTg0ZDUzZDk3M2Q0MGQ5NTVkMjdkOTM3ZDI3ZDkxMGQxNmQ4NTRkMzEuNWQ3OTYuNWQ0N2Q3MzlkODBkNjg1LjVkMTEzZDYzMmQxNjFkNTg2LjVkMjA5ZDU0MWQyNjMuNWQ1MDkuNWQzMThkNDc4ZDM3NS41ZDQ2NGQ0MzNkNDUwZDQ4N2Q0NjBkNTI4ZDQ2MGQ1NTFkNDg3ZDU3NGQ1MTRkNTg1LjVkNTU5ZDU5N2Q2MDRkNjAwZDY2Mi41ZDYwM2Q3MjFkNjA1ZDc4M2Q2MDdkODQ1ZDYxMC41ZDkwNS41ZDYxNGQ5NjZkNjI2ZDEwMTZkNTUyZDEwMTZkNTQ3ZDk4MmQ1NDQuNWQ5NTZkNTQyZDkzMGQ1NDBkOTA3LjVkNTM4ZDg4NWQ1MzQuNWQ4NjRkNTMxZDg0M2Q1MjVkODE3ZDQ0OWQ1NTBkNDEwZDU0N2QzNjguNWQ1NjAuNWQzMjdkNTc0ZDI4OC41ZDU5OC41ZDI1MGQ2MjNkMjE2LjVkNjU2LjVkMTgzZDY5MGQxNThkNzI2ZDEzM2Q3NjJkMTE5LjVkNzk3LjVkMTA2ZDgzM2QxMDguNWQ4NjNkMTExZDg5M2QxMzFkOTE0ZDE1MWQ5MzVkMTkzZDk0MmQyNTNkOTQxZDMwOC41ZDkxMS41ZDM2NGQ4ODJkNDA3LjVkODM4LjVkNDUxZDc5NWQ0ODBkNzQ0LjVkNTA5ZDY5NGQ1MTcuNWQ2NTFkNTI2ZDYwOGQ1MTBkNTc5ZDQ5NGQ1NTBkNDQ5ZDU1MGhSM2Q2NTFSNGQ2MjZSNWQxNlI2ZDU3NFI3ZDhSOGQ1NThSOWQ3NzlSMTBkNTQwUjExaTk3UjEyZDE2UjEzZDY1MVIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MjA5b1IxZDEyNjNSMmFkNjM4ZDEwMjBkNTkxZDkzOGQ1MzAuNWQ4NTQuNWQ0NzBkNzcxZDQwNmQ2ODYuNWQzNDJkNjAyZDI3OWQ1MThkMjE2ZDQzNGQxNjRkMzUxZDE1NWQzOTBkMTUwZDQ0MmQxNDVkNDk0ZDE0Mi41ZDU1M2QxNDBkNjEyZDEzOS41ZDY3NC41ZDEzOWQ3MzdkMTM5ZDc5Ny41ZDEzOWQ4NThkMTM4ZDkxM2QxMzdkOTY4ZDEzNGQxMDExZDExN2QxMDI2ZDEwMy41ZDEwMzBkOTBkMTAzNGQ3MWQxMDM0ZDUzZDEwMzRkNDFkMTAyNy41ZDI5ZDEwMjFkMzFkOTkxZDM3ZDk0MGQ0MmQ4NzMuNWQ0N2Q4MDdkNTAuNWQ3MzMuNWQ1NGQ2NjBkNTZkNTgyZDU4ZDUwNGQ1OWQ0MzAuNWQ2MGQzNTdkNjBkMjkwLjVkNjBkMjI0ZDU4ZDE3M2Q3OGQxNTRkOTFkMTQyLjVkMTA0ZDEzMWQxMTYuNWQxMzFkMTI5ZDEzMWQxNDRkMTQ0ZDE1OWQxNTdkMTgyZDE4OGQyMDVkMjE5ZDI0MGQyNjlkMjc1ZDMxOWQzMjdkMzkzZDM3OWQ0NjdkNDUyLjVkNTY2LjVkNTI2ZDY2NmQ2MjZkNzk1ZDY1MGQxNzNkNjYzZDE0OGQ2NzdkMTM4LjVkNjkxZDEyOWQ3MTRkMTI5ZDczNWQxMjlkNzQ0ZDE0NC41ZDc1M2QxNjBkNzU2ZDE4MWQ3NTlkMjAyZDc1Ny41ZDIyM2Q3NTZkMjQ0ZDc1NmQyNTVkNzU2ZDI5NGQ3NTdkMzYwZDc1OGQ0MjZkNzU4LjVkNTA0ZDc1OWQ1ODJkNzU4LjVkNjY0LjVkNzU4ZDc0N2Q3NTVkODIwZDc1MmQ4OTNkNzQ2ZDk0OC41ZDc0MGQxMDA0ZDcyOWQxMDI4ZDYzOGQxMDIwZDM4M2Q1MmQzNThkMzBkMzM5ZDE1ZDMyMGQwZDMwMC41ZDEuNWQyODFkM2QyNTcuNWQyNS41ZDIzNGQ0OGQxOThkMTAxZDE5NGQxMDFkMTg3ZDEwMGQxODBkOTlkMTczZDk2ZDE2NmQ5M2QxNjBkODhkMTU0ZDgzZDE1MmQ3NWQxNzFkMTVkMjA4LjVkLTMxZDI0NmQtNzdkMjg4ZC05NGQzMDVkLTEwMWQzMjAuNWQtOTVkMzM2ZC04OWQzNTEuNWQtNzYuNWQzNjdkLTY0ZDM4MS41ZC00Ny41ZDM5NmQtMzFkNDExLjVkLTE2ZDQyN2QtMWQ0NDMuNWQ5ZDQ2MGQxOWQ0NzhkMTlkNTA2ZDE5ZDUyMS41ZDEwLjVkNTM3ZDJkNTUwZC0xNC41ZDU2M2QtMzFkNTc4LjVkLTU1ZDU5NGQtNzlkNjIyZC0xMDlkNjMwZC0xMDlkNjM4ZC05NS41ZDY0NmQtODJkNjQ2ZC03MmQ2NTFkLTQ0ZDY0MGQtMTdkNjI5ZDEwZDYwNy41ZDMyZDU4NmQ1NGQ1NTYuNWQ2OWQ1MjdkODRkNDk2ZDg4LjVkNDY1ZDkzZDQzNS41ZDg1ZDQwNmQ3N2QzODNkNTJoUjNkODAzUjRkNzU5UjVkMjlSNmQxMTMzUjdkLTEwUjhkMTEwNFI5ZDc3OVIxMGQ1NDBSMTFpMjA5UjEyZDI5UjEzZDgwM1IxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzo5Nm9SMWQxMjYzUjJhZDE4OWQzNTNkMTY4ZDQwN2QxMzZkMzg1ZDExN2QzNzFkOThkMzU3ZDg3ZDM0NmQ3NmQzMzVkNzBkMzI1LjVkNjRkMzE2ZDYwZDMwM2Q1OGQyOTBkNTkuNWQyNzhkNjFkMjY2ZDY3ZDI1OS41ZDczZDI1M2Q4Mi41ZDI1NC41ZDkyZDI1NmQxMDVkMjcxZDE4OWQzNTNoUjNkMjIwUjRkMTg5UjVkNThSNmQ3NzFSN2Q2MTdSOGQ3MTNSOWQ3NzlSMTBkNTQwUjExaTk2UjEyZDU4UjEzZDIyMFIxNGFpMWkyaTNpM2kzaTNpM2kzaTNpM2kyaGc6MjA4b1IxZDEyNjNSMmFkMTJkNzUwZDEyZDczM2QyNi41ZDcyNi41ZDQxZDcyMGQ1NmQ3MThkNjVkNzE3ZDczLjVkNzE2ZDgyZDcxNWQ5MWQ3MTNkOTFkMjI3ZDk1ZDIyN2QxMDhkMjI3ZDEyMWQyMjdkMTM0LjVkMjI5LjVkMTQ4ZDIzMmQxNTkuNWQyMzhkMTcxZDI0NGQxNzRkMjU2ZDIwMWQyNDdkMjQ0ZDIzOWQyODdkMjMxZDMzOWQyMjcuNWQzOTFkMjI0ZDQ0OC41ZDIyNS41ZDUwNmQyMjdkNTYyZDIzNi41ZDYxOGQyNDZkNjY4LjVkMjY1ZDcxOWQyODRkNzU3LjVkMzE1ZDc5NmQzNDZkODE4LjVkMzkwZDg0MWQ0MzRkODQxZDQ5NWQ4NDZkNTUwZDgyMy41ZDYwMy41ZDgwMWQ2NTdkNzU5ZDcwN2Q3MTdkNzU3ZDY2MGQ4MDJkNjAzZDg0N2Q1MzkuNWQ4ODRkNDc2ZDkyMWQ0MDkuNWQ5NDkuNWQzNDNkOTc4ZDI4M2Q5OTQuNWQyMjNkMTAxMWQxNzIuNWQxMDE1ZDEyMmQxMDE5ZDkxZDEwMDdkOTFkNzgxZDc1ZDc4MmQ2N2Q3ODJkNTZkNzgxZDQ1ZDc4MGQzNS41ZDc3Ni41ZDI2ZDc3M2QxOWQ3NjdkMTJkNzYxZDEyZDc1MGQ3NTdkNTA1ZDc1MGQ0NDRkNzE2ZDQwMy41ZDY4MmQzNjNkNjMyZDMzOS41ZDU4MmQzMTZkNTIxLjVkMzA3LjVkNDYxZDI5OWQ0MDFkMzAxZDM0MWQzMDNkMjg3ZDMxMy41ZDIzM2QzMjRkMTk2ZDMzOWQxOTZkNjk2ZDIxN2Q2OTNkMjM4ZDY5MGQyNTlkNjg3ZDI4MWQ2ODVkMzA2ZDY4NWQzMjMuNWQ2OTMuNWQzNDFkNzAyZDM0Ni41ZDcxMy41ZDM1MmQ3MjVkMzQ1ZDczNy41ZDMzOGQ3NTBkMzE1ZDc1N2QxOTZkNzcwZDE5NmQ5MzVkMjM3ZDkzNWQyOTQuNWQ5MThkMzUyZDkwMWQ0MTQuNWQ4NzFkNDc3ZDg0MWQ1MzguNWQ3OTkuNWQ2MDBkNzU4ZDY0OC41ZDcxMC41ZDY5N2Q2NjNkNzI3ZDYxMC41ZDc1N2Q1NThkNzU3ZDUwNWhSM2Q4NzNSNGQ4NDZSNWQxMlI2ZDgwMFI3ZDVSOGQ3ODhSOWQ3NzlSMTBkNTQwUjExaTIwOFIxMmQxMlIxM2Q4NzNSMTRhaTFpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTJpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpMmkyaTNpM2kzaTNpM2kzaGc6OTVvUjFkMTI2M1IyYWQ3ODFkODc4ZDc5OGQ4NzhkODE0ZDg4Mi41ZDgzMGQ4ODdkODMwZDkwOWQ4MzBkOTI0ZDgyNGQ5MzZkODE4ZDk0OGQ4MDlkOTYyZDcxOGQ5NjRkNjIxLjVkOTY5ZDUyNWQ5NzRkNDI3ZDk4MS41ZDMyOWQ5ODlkMjMxLjVkOTk5LjVkMTM0ZDEwMTBkNDFkMTAyNGQ0MWQxMDIzZDQwLjVkMTAxNmQ0MGQxMDA5ZDQwZDEwMDAuNWQ0MGQ5OTJkNDBkOTg1ZDQwZDk3OGQ0MGQ5NzdkMTA5ZDk0OGQyMDFkOTM2ZDI5M2Q5MjRkMzkzLjVkOTE3LjVkNDk0ZDkxMWQ1OTQuNWQ5MDRkNjk1ZDg5N2Q3ODFkODc4aFIzZDg3OVI0ZDgzMFI1ZDQwUjZkMTQ2UjdkMFI4ZDEwNlI5ZDc3OVIxMGQ1NDBSMTFpOTVSMTJkNDBSMTNkODc5UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoyMDdvUjFkMTI2M1IyYWQ0OGQxMDA0ZDQxZDk4OWQzOGQ5NTEuNWQzNWQ5MTRkMzMuNWQ4NjMuNWQzMmQ4MTNkMzNkNzUzZDM0ZDY5M2QzNS41ZDYzMi41ZDM3ZDU3MmQzOWQ1MTUuNWQ0MWQ0NTlkNDMuNWQ0MTUuNWQ0NmQzNzJkNDdkMzQ1LjVkNDhkMzE5ZDQ4ZDMxOGQ2M2QzMDlkNzQuNWQzMDNkODZkMjk3ZDEwMWQyOTdkMTEwZDI5N2QxMjAuNWQzMDFkMTMxZDMwNWQxMzFkMzE4ZDEzMWQxMDA0ZDEzMWQxMDE3ZDEyMC41ZDEwMjFkMTEwZDEwMjVkMTAxZDEwMjVkODZkMTAyNWQ3NC41ZDEwMTlkNjNkMTAxM2Q0OGQxMDA0ZC01OWQxOTZkLTU5ZDE5MWQtNDkuNWQxODMuNWQtNDBkMTc2ZC0yOGQxNzBkLTE1ZDE2M2QzZDE1NWQyOWQxNTVkMzguNWQxNjZkNDhkMTc3ZDQ4ZDE5N2Q0OGQyMTJkNDAuNWQyMjAuNWQzM2QyMjlkMjEuNWQyMzNkMTBkMjM3ZC0zLjVkMjM4ZC0xN2QyMzlkLTI5ZDIzOWQtNDVkMjM5ZC01MmQyMjkuNWQtNTlkMjIwZC01OWQxOTZkMTIxZDE5NmQxMjFkMTkxZDEzMC41ZDE4My41ZDE0MGQxNzZkMTUyZDE3MGQxNjZkMTYzZDE4NGQxNTVkMjEwZDE1NWQyMTkuNWQxNjZkMjI5ZDE3N2QyMjlkMTk3ZDIyOWQyMTJkMjIxLjVkMjIwLjVkMjE0ZDIyOWQyMDIuNWQyMzNkMTkxZDIzN2QxNzdkMjM4ZDE2M2QyMzlkMTUxZDIzOWQxMzVkMjM5ZDEyOGQyMjkuNWQxMjFkMjIwZDEyMWQxOTZoUjNkMTk0UjRkMjI5UjVkLTU5UjZkODY5UjdkLTFSOGQ5MjhSOWQ3NzlSMTBkNTQwUjExaTIwN1IxMmQtNTlSMTNkMTk0UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjk0b1IxZDEyNjNSMmFkMjJkMzQyZDIyZDMyN2QzNWQzMDRkNDhkMjgxZDcyZDI1Ni41ZDk2ZDIzMmQxMjkuNWQyMDcuNWQxNjNkMTgzZDIwM2QxNjVkMjMwZDE4MmQyNTAuNWQxOTUuNWQyNzFkMjA5ZDI4OWQyMjUuNWQzMDdkMjQyZDMyNS41ZDI2NWQzNDRkMjg4ZDM2N2QzMjVkMzc1ZDM0MGQzNzUuNWQzNTNkMzc2ZDM2NmQzNzBkMzc0ZDM2NGQzODJkMzUyLjVkMzgzZDM0MWQzODRkMzI1ZDM3NWQzMDdkMzYyZDI5N2QzNTVkMjg3ZDM0OGQyODFkMzQzLjVkMjc1ZDMzOWQyNzAuNWQzMzRkMjY2ZDMyOWQyNTcuNWQzMjAuNWQyNDlkMzEyZDIzNC41ZDI5N2QyMjBkMjgyZDE5NGQyNTZkMTY3ZDI3NWQxNDcuNWQyOTFkMTI4ZDMwN2QxMTRkMzIyLjVkMTAwZDMzOGQ5MC41ZDM1My41ZDgxZDM2OWQ3NGQzODdkNTFkMzg3ZDM2LjVkMzgwLjVkMjJkMzc0ZDIyZDM0MmhSM2QzOTNSNGQzNzZSNWQyMlI2ZDg1OVI3ZDYzN1I4ZDgzN1I5ZDc3OVIxMGQ1NDBSMTFpOTRSMTJkMjJSMTNkMzkzUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MjA2b1IxZDEyNjNSMmFkNDhkMTAwNGQ0MWQ5ODlkMzhkOTUxLjVkMzVkOTE0ZDMzLjVkODYzLjVkMzJkODEzZDMzZDc1M2QzNGQ2OTNkMzUuNWQ2MzIuNWQzN2Q1NzJkMzlkNTE1LjVkNDFkNDU5ZDQzLjVkNDE1LjVkNDZkMzcyZDQ3ZDM0NS41ZDQ4ZDMxOWQ0OGQzMThkNjNkMzA5ZDc0LjVkMzAzZDg2ZDI5N2QxMDFkMjk3ZDExMGQyOTdkMTIwLjVkMzAxZDEzMWQzMDVkMTMxZDMxOGQxMzFkMTAwNGQxMzFkMTAxN2QxMjAuNWQxMDIxZDExMGQxMDI1ZDEwMWQxMDI1ZDg2ZDEwMjVkNzQuNWQxMDE5ZDYzZDEwMTNkNDhkMTAwNGQxODRkMjE3ZDE4NGQyMDJkMTk3ZDE3OWQyMTBkMTU2ZDIzNGQxMzEuNWQyNThkMTA3ZDI5MS41ZDgyLjVkMzI1ZDU4ZDM2NWQ0MGQzOTJkNTdkNDEyLjVkNzAuNWQ0MzNkODRkNDUxZDEwMC41ZDQ2OWQxMTdkNDg3LjVkMTQwZDUwNmQxNjNkNTI5ZDIwMGQ1MzdkMjE1ZDUzNy41ZDIyOGQ1MzhkMjQxZDUzMmQyNDlkNTI2ZDI1N2Q1MTQuNWQyNThkNTAzZDI1OWQ0ODdkMjUwZDQ2OWQyMzdkNDU5ZDIzMGQ0NDlkMjIzZDQ0M2QyMTguNWQ0MzdkMjE0ZDQzMi41ZDIwOWQ0MjhkMjA0ZDQxOS41ZDE5NS41ZDQxMWQxODdkMzk2LjVkMTcyZDM4MmQxNTdkMzU2ZDEzMWQzMjlkMTUwZDMwOS41ZDE2NmQyOTBkMTgyZDI3NmQxOTcuNWQyNjJkMjEzZDI1Mi41ZDIyOC41ZDI0M2QyNDRkMjM2ZDI2MmQyMTNkMjYyZDE5OC41ZDI1NS41ZDE4NGQyNDlkMTg0ZDIxN2hSM2QxOTRSNGQyODJSNWQtNzJSNmQ5ODRSN2QtMVI4ZDEwNTZSOWQ3NzlSMTBkNTQwUjExaTIwNlIxMmQtNzJSMTNkMTk0UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6OTNvUjFkMTI2M1IyYWQxMDBkMTA3N2QxNDhkMTA3NGQxOTRkMTA3NGQyNDBkMTA3NGQyODAuNWQxMDcxZDMyMWQxMDY4ZDM1NC41ZDEwNjAuNWQzODhkMTA1M2Q0MTJkMTAzNWQ0MzZkMTAxN2Q0NDlkOTg2LjVkNDYyZDk1NmQ0NjJkOTA3ZDQ2MmQ4MTFkNDU3LjVkNzA3ZDQ1M2Q2MDNkNDQ1ZDQ5N2Q0MzdkMzkxZDQyNmQyODdkNDE1ZDE4M2Q0MDFkODhkMzUzZDg1ZDMwOC41ZDkzZDI2NGQxMDFkMjIwZDExMi41ZDE3NmQxMjRkMTMxLjVkMTM0ZDg3ZDE0NGQzOWQxNDRkMzVkMTQ0ZDI2ZDEzNy41ZDE3ZDEzMWQ5LjVkMTIwLjVkMmQxMTBkMC41ZDk2ZC0xZDgyZDExZDY2ZDExZDY1ZDM1ZDYxLjVkNTlkNThkOTYuNWQ1Mi41ZDEzNGQ0N2QxODEuNWQ0MGQyMjlkMzNkMjc3LjVkMjZkMzI2ZDE5ZDM3MC41ZDEzZDQxNWQ3ZDQ0N2QzZDQ1NmQzZDQ2OC41ZDEuNWQ0ODFkMGQ0OTMuNWQxZDUwNmQyZDUxNmQ2LjVkNTI2ZDExZDUyOWQyNGQ1MjNkMTMxZDUyNC41ZDI2MGQ1MjZkMzg5ZDUzMi41ZDUzMGQ1MzlkNjcxZDU1MGQ4MTguNWQ1NjFkOTY2ZDU3NGQxMTEwZDU2MmQxMTEyZDUyNmQxMTE1ZDQ5MGQxMTE4ZDQ0MS41ZDExMjJkMzkzZDExMjZkMzM4LjVkMTEzMGQyODRkMTEzNGQyMzZkMTEzNy41ZDE4OGQxMTQxZDE1MS41ZDExNDNkMTE1ZDExNDVkMTA0ZDExNDVkMTAyZDExNDVkMTAxZDExMjRkMTAwZDExMDNkMTAwZDEwNzdoUjNkNjkyUjRkNTc0UjVkLTFSNmQxMDI0UjdkLTEyMVI4ZDEwMjVSOWQ3NzlSMTBkNTQwUjExaTkzUjEyZC0xUjEzZDY5MlIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MjA1b1IxZDEyNjNSMmFkNDhkMTAwNGQ0MWQ5ODlkMzhkOTUxLjVkMzVkOTE0ZDMzLjVkODYzLjVkMzJkODEzZDMzZDc1M2QzNGQ2OTNkMzUuNWQ2MzIuNWQzN2Q1NzJkMzlkNTE1LjVkNDFkNDU5ZDQzLjVkNDE1LjVkNDZkMzcyZDQ3ZDM0NS41ZDQ4ZDMxOWQ0OGQzMThkNjNkMzA5ZDc0LjVkMzAzZDg2ZDI5N2QxMDFkMjk3ZDExMGQyOTdkMTIwLjVkMzAxZDEzMWQzMDVkMTMxZDMxOGQxMzFkMTAwNGQxMzFkMTAxN2QxMjAuNWQxMDIxZDExMGQxMDI1ZDEwMWQxMDI1ZDg2ZDEwMjVkNzQuNWQxMDE5ZDYzZDEwMTNkNDhkMTAwNGQxMDFkMTM1ZDExNGQxMTlkMTI2ZDExNGQxMzhkMTA5ZDE0NmQxMTIuNWQxNTRkMTE2ZDE1OWQxMjUuNWQxNjRkMTM1ZDE2NGQxNDZkMTYxZDE1OGQxNTYuNWQxNjcuNWQxNTJkMTc3ZDE0MWQxOTBkMTMwZDIwM2QxMDlkMjIxLjVkODhkMjQwZDU0ZDI2OGQxNWQyMzNkMTAxZDEzNWhSM2QxOTRSNGQxNjRSNWQxNVI2ZDkxNVI3ZC0xUjhkOTAwUjlkNzc5UjEwZDU0MFIxMWkyMDVSMTJkMTVSMTNkMTk0UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kyaTJoZzo5Mm9SMWQxMjYzUjJhZDU1M2QxMDI3ZDQ1NWQ5MTZkMzcxLjVkODEyZDI4OGQ3MDhkMjIyLjVkNjE5LjVkMTU3ZDUzMWQxMDkuNWQ0NjEuNWQ2MmQzOTJkMzVkMzQ5ZDhkMzA2ZDJkMjk0ZC00ZDI4MmQxM2QzMDhkMTNkMjk2ZDE4ZDI4OWQyM2QyODJkMzFkMjc5ZDM5ZDI3NmQ0OC41ZDI3NWQ1OGQyNzRkNjdkMjc0ZDExNWQzMjFkMTU5LjVkMzc4LjVkMjA0ZDQzNmQyNDYuNWQ0OTlkMjg5ZDU2MmQzMzEuNWQ2MjYuNWQzNzRkNjkxZDQxOS41ZDc1M2Q0NjVkODE1ZDUxMy41ZDg3MWQ1NjJkOTI3ZDYxN2Q5NzJkNjE3ZDk5N2Q1OTYuNWQxMDEyZDU3NmQxMDI3ZDU1M2QxMDI3aFIzZDY0M1I0ZDYxN1I1ZC00UjZkNzUwUjdkLTNSOGQ3NTRSOWQ3NzlSMTBkNTQwUjExaTkyUjEyZC00UjEzZDY0M1IxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjIwNG9SMWQxMjYzUjJhZDQ4ZDEwMDRkNDFkOTg5ZDM4ZDk1MS41ZDM1ZDkxNGQzMy41ZDg2My41ZDMyZDgxM2QzM2Q3NTNkMzRkNjkzZDM1LjVkNjMyLjVkMzdkNTcyZDM5ZDUxNS41ZDQxZDQ1OWQ0My41ZDQxNS41ZDQ2ZDM3MmQ0N2QzNDUuNWQ0OGQzMTlkNDhkMzE4ZDYzZDMwOWQ3NC41ZDMwM2Q4NmQyOTdkMTAxZDI5N2QxMTBkMjk3ZDEyMC41ZDMwMWQxMzFkMzA1ZDEzMWQzMThkMTMxZDEwMDRkMTMxZDEwMTdkMTIwLjVkMTAyMWQxMTBkMTAyNWQxMDFkMTAyNWQ4NmQxMDI1ZDc0LjVkMTAxOWQ2M2QxMDEzZDQ4ZDEwMDRkMTQwZDE3MmQxMTlkMjI2ZDg3ZDIwNGQ2OGQxOTBkNDlkMTc2ZDM4ZDE2NWQyN2QxNTRkMjFkMTQ0LjVkMTVkMTM1ZDExZDEyMmQ5ZDEwOWQxMC41ZDk3ZDEyZDg1ZDE4ZDc4LjVkMjRkNzJkMzMuNWQ3My41ZDQzZDc1ZDU2ZDkwZDE0MGQxNzJoUjNkMTk0UjRkMTQwUjVkOVI2ZDk1MlI3ZC0xUjhkOTQzUjlkNzc5UjEwZDU0MFIxMWkyMDRSMTJkOVIxM2QxOTRSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTFpMmkzaTNpM2kzaTNpM2kzaTNpMmhnOjkxb1IxZDEyNjNSMmFkMzlkNTBkODBkNDRkMTI5LjVkMzIuNWQxNzlkMjFkMjMwZDEwZDI4MWQtMWQzMjkuNWQtOS41ZDM3OGQtMThkNDE4ZC0xOGQ0MThkLTEwZDQxOS41ZC0xLjVkNDIxZDdkNDIxZDE1ZDQyMWQyM2Q0MTlkMjkuNWQ0MTdkMzZkNDEwZDQwZDM5NWQ0NGQzNzAuNWQ0OWQzNDZkNTRkMzE3ZDYwZDI4OGQ2NmQyNTcuNWQ3My41ZDIyN2Q4MWQxOTkuNWQ4OC41ZDE3MmQ5NmQxNDkuNWQxMDQuNWQxMjdkMTEzZDExNmQxMjJkMTExZDIzOGQxMjAuNWQzNDguNWQxMzBkNDU5ZDE0Mi41ZDU2OC41ZDE1NWQ2NzhkMTY2LjVkNzg4LjVkMTc4ZDg5OWQxNzhkMTAxNWQ0OTZkOTcyZDQ5NmQ5NzdkNDk5LjVkOTkxLjVkNTAzZDEwMDZkNTA1LjVkMTAyMWQ1MDhkMTAzNmQ1MDhkMTA0OC41ZDUwOGQxMDYxZDUwMWQxMDYzZDgxZDExMjlkMzlkNTBoUjNkNTQ0UjRkNTA4UjVkMzlSNmQxMDQyUjdkLTEwNVI4ZDEwMDNSOWQ3NzlSMTBkNTQwUjExaTkxUjEyZDM5UjEzZDU0NFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpMmkyaGc6MjAzb1IxZDEyNjNSMmFkNDNkMjI2ZDY5ZDIzM2QxMTQuNWQyMzQuNWQxNjBkMjM2ZDIxNC41ZDIzNWQyNjlkMjM0ZDMyOC41ZDIzMmQzODhkMjMwZDQ0MS41ZDIzMGQ0OTVkMjMwZDUzOWQyMzMuNWQ1ODNkMjM3ZDYwOGQyNDZkNjA4ZDMwOGQ1NzRkMzEzZDUxNWQzMTRkNDU2ZDMxNWQzODlkMzE1LjVkMzIyZDMxNmQyNTVkMzE5LjVkMTg4ZDMyM2QxMzhkMzM0ZDEyOWQzNzVkMTI1ZDQwMi41ZDEyMWQ0MzBkMTE5LjVkNDUwLjVkMTE4ZDQ3MWQxMTguNWQ0ODlkMTE5ZDUwN2QxMjAuNWQ1MjcuNWQxMjJkNTQ4ZDEyMy41ZDU3NWQxMjVkNjAyZDEyNWQ2NDFkMTg5ZDY0MWQyNDkuNWQ2MzQuNWQzMTBkNjI4ZDM2OS41ZDYxOS41ZDQyOWQ2MTFkNDg5ZDYwNC41ZDU0OWQ1OThkNjEyZDU5OGQ2MTJkNjY2ZDEzNGQ3MjZkMTQxZDkzMWQyMzVkOTMxZDMxMWQ5MjUuNWQzODdkOTIwZDQ1NS41ZDkxNGQ1MjRkOTA4ZDU5MWQ5MDIuNWQ2NThkODk3ZDczM2Q4OTdkNzMzZDkwOGQ3MjdkOTIzLjVkNzIxZDkzOWQ3MTFkOTUxLjVkNzAxZDk2NGQ2ODguNWQ5NzAuNWQ2NzZkOTc3ZDY2NGQ5NjhkNTk1ZDk3NmQ1MTEuNWQ5ODMuNWQ0MjhkOTkxZDM0Mi41ZDk5OC41ZDI1N2QxMDA2ZDE3Ny41ZDEwMTIuNWQ5OGQxMDE5ZDM4ZDEwMjRkNDNkMjI2ZDIwOGQxNDBkMjA4ZDEzNWQyMTcuNWQxMjcuNWQyMjdkMTIwZDIzOWQxMTRkMjUyZDEwN2QyNzBkOTlkMjk2ZDk5ZDMwNS41ZDExMGQzMTVkMTIxZDMxNWQxNDFkMzE1ZDE1NmQzMDcuNWQxNjQuNWQzMDBkMTczZDI4OC41ZDE3N2QyNzdkMTgxZDI2My41ZDE4MmQyNTBkMTgzZDIzOGQxODNkMjIyZDE4M2QyMTVkMTczLjVkMjA4ZDE2NGQyMDhkMTQwZDM4OGQxNDBkMzg4ZDEzNWQzOTcuNWQxMjcuNWQ0MDdkMTIwZDQxOWQxMTRkNDMzZDEwN2Q0NTFkOTlkNDc3ZDk5ZDQ4Ni41ZDExMGQ0OTZkMTIxZDQ5NmQxNDFkNDk2ZDE1NmQ0ODguNWQxNjQuNWQ0ODFkMTczZDQ2OS41ZDE3N2Q0NThkMTgxZDQ0NGQxODJkNDMwZDE4M2Q0MThkMTgzZDQwMmQxODNkMzk1ZDE3My41ZDM4OGQxNjRkMzg4ZDE0MGhSM2Q3NTdSNGQ3MzNSNWQzOFI2ZDkyNVI3ZDBSOGQ4ODdSOWQ3NzlSMTBkNTQwUjExaTIwM1IxMmQzOFIxM2Q3NTdSMTRhaTFpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjkwb1IxZDEyNjNSMmFkOTYyZDEwMDRkODc3ZDEwMTBkNzY4LjVkMTAxNmQ2NjBkMTAyMmQ1NDguNWQxMDI1ZDQzN2QxMDI4ZDMzNGQxMDI3LjVkMjMxZDEwMjdkMTU3LjVkMTAyMGQ4NGQxMDEzZDUxLjVkOTk5LjVkMTlkOTg2ZDQ4ZDk2MmQ1ODhkMzU5ZDUyMmQzNTVkNDU4ZDM1Ni41ZDM5NGQzNThkMzMxZDM2Mi41ZDI2OGQzNjdkMjA1ZDM3Mi41ZDE0MmQzNzhkNzhkMzgxZDY4ZDM4MWQ2Mi41ZDM3OWQ1N2QzNzdkNTRkMzcwZDUxZDM2M2Q1MGQzNTFkNDlkMzM5ZDQ4ZDMxOGQxMTdkMzExZDE5Ny41ZDMwNGQyNzhkMjk3ZDM2MS41ZDI5MS41ZDQ0NWQyODZkNTI3LjVkMjgyZDYxMGQyNzhkNjg0ZDI3NWQ3MDFkMjc1ZDcxNy41ZDI4MGQ3MzRkMjg1ZDczNGQzMDdkNzIxZDM0NWQ2ODRkMzk2ZDY0N2Q0NDdkNTk4ZDUwNC41ZDU0OWQ1NjJkNDkyLjVkNjIzZDQzNmQ2ODRkMzgyLjVkNzQxZDMyOWQ3OThkMjgzLjVkODQ3LjVkMjM4ZDg5N2QyMTFkOTMzZDI3NmQ5NDZkMzY2ZDk0Ni41ZDQ1NmQ5NDdkNTU1LjVkOTQxZDY1NWQ5MzVkNzU4ZDkyNi41ZDg2MWQ5MThkOTUzZDkxMmQ5NjJkMTAwNGQ5NjJkMTAwNGhSM2QxMDA0UjRkOTYyUjVkMTlSNmQ3NDlSN2QtNFI4ZDczMFI5ZDc3OVIxMGQ1NDBSMTFpOTBSMTJkMTlSMTNkMTAwNFIxNGFpMWkzaTNpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpMmhnOjIwMm9SMWQxMjYzUjJhZDQzZDIyNmQ2OWQyMzNkMTE0LjVkMjM0LjVkMTYwZDIzNmQyMTQuNWQyMzVkMjY5ZDIzNGQzMjguNWQyMzJkMzg4ZDIzMGQ0NDEuNWQyMzBkNDk1ZDIzMGQ1MzlkMjMzLjVkNTgzZDIzN2Q2MDhkMjQ2ZDYwOGQzMDhkNTc0ZDMxM2Q1MTVkMzE0ZDQ1NmQzMTVkMzg5ZDMxNS41ZDMyMmQzMTZkMjU1ZDMxOS41ZDE4OGQzMjNkMTM4ZDMzNGQxMjlkMzc1ZDEyNWQ0MDIuNWQxMjFkNDMwZDExOS41ZDQ1MC41ZDExOGQ0NzFkMTE4LjVkNDg5ZDExOWQ1MDdkMTIwLjVkNTI3LjVkMTIyZDU0OGQxMjMuNWQ1NzVkMTI1ZDYwMmQxMjVkNjQxZDE4OWQ2NDFkMjQ5LjVkNjM0LjVkMzEwZDYyOGQzNjkuNWQ2MTkuNWQ0MjlkNjExZDQ4OWQ2MDQuNWQ1NDlkNTk4ZDYxMmQ1OThkNjEyZDY2NmQxMzRkNzI2ZDE0MWQ5MzFkMjM1ZDkzMWQzMTFkOTI1LjVkMzg3ZDkyMGQ0NTUuNWQ5MTRkNTI0ZDkwOGQ1OTFkOTAyLjVkNjU4ZDg5N2Q3MzNkODk3ZDczM2Q5MDhkNzI3ZDkyMy41ZDcyMWQ5MzlkNzExZDk1MS41ZDcwMWQ5NjRkNjg4LjVkOTcwLjVkNjc2ZDk3N2Q2NjRkOTY4ZDU5NWQ5NzZkNTExLjVkOTgzLjVkNDI4ZDk5MWQzNDIuNWQ5OTguNWQyNTdkMTAwNmQxNzcuNWQxMDEyLjVkOThkMTAxOWQzOGQxMDI0ZDQzZDIyNmQxNzhkMTM1ZDE3OGQxMjBkMTkxZDk3ZDIwNGQ3NGQyMjhkNDkuNWQyNTJkMjVkMjg1LjVkMC41ZDMxOWQtMjRkMzU5ZC00MmQzODZkLTI1ZDQwNi41ZC0xMS41ZDQyN2QyZDQ0NWQxOC41ZDQ2M2QzNWQ0ODEuNWQ1OGQ1MDBkODFkNTIzZDExOGQ1MzFkMTMzZDUzMS41ZDE0NmQ1MzJkMTU5ZDUyNmQxNjdkNTIwZDE3NWQ1MDguNWQxNzZkNDk3ZDE3N2Q0ODFkMTY4ZDQ2M2QxNTVkNDUzZDE0OGQ0NDNkMTQxZDQzN2QxMzYuNWQ0MzFkMTMyZDQyNi41ZDEyN2Q0MjJkMTIyZDQxMy41ZDExMy41ZDQwNWQxMDVkMzkwLjVkOTBkMzc2ZDc1ZDM1MGQ0OWQzMjNkNjhkMzAzLjVkODRkMjg0ZDEwMGQyNzBkMTE1LjVkMjU2ZDEzMWQyNDYuNWQxNDYuNWQyMzdkMTYyZDIzMGQxODBkMjA3ZDE4MGQxOTIuNWQxNzMuNWQxNzhkMTY3ZDE3OGQxMzVoUjNkNzU3UjRkNzMzUjVkMzhSNmQxMDY2UjdkMFI4ZDEwMjhSOWQ3NzlSMTBkNTQwUjExaTIwMlIxMmQzOFIxM2Q3NTdSMTRhaTFpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6ODlvUjFkMTI2M1IyYWQzNDdkMTA0N2QzMzlkMTA0N2QzMjQuNWQxMDQyZDMxMGQxMDM3ZDI5Ni41ZDEwMjlkMjgzZDEwMjFkMjc0ZDEwMTAuNWQyNjVkMTAwMGQyNzBkOTg4ZDI3NWQ5ODBkMjgzZDk1OGQyOTFkOTM2ZDMwMWQ5MDUuNWQzMTFkODc1ZDMyMmQ4NDBkMzMzZDgwNWQzNDMuNWQ3NzAuNWQzNTRkNzM2ZDM2M2Q3MDVkMzcyZDY3NGQzNzhkNjUyZDQ0ZDMxMWQzMmQyOTdkMzVkMjg5ZDM4ZDI4MWQ0N2QyNzYuNWQ1NmQyNzJkNjYuNWQyNzFkNzdkMjcwZDgxZDI3MGQ5OGQyNzBkMTE0LjVkMjczZDEzMWQyNzZkMTUwZDI4NS41ZDE2OWQyOTVkMTkyLjVkMzE0LjVkMjE2ZDMzNGQyNDguNWQzNjcuNWQyODFkNDAxZDMyNC41ZDQ1MGQzNjhkNDk5ZDQyNmQ1NjlkNDY0ZDQ1OGQ0OTJkMzg2LjVkNTIwZDMxNWQ1NDIuNWQyNzIuNWQ1NjVkMjMwZDU4NGQyMTJkNjAzZDE5NGQ2MjNkMTkxZDYzNWQxOTFkNjQ2LjVkMTkzLjVkNjU4ZDE5NmQ2NjNkMjEyZDYyNGQyOTVkNTg4LjVkMzk5ZDU1M2Q1MDNkNTE1LjVkNjE1ZDQ3OGQ3MjdkNDM3ZDgzOC41ZDM5NmQ5NTBkMzQ3ZDEwNDdoUjNkNjg0UjRkNjYzUjVkMzJSNmQ4MzNSN2QtMjNSOGQ4MDFSOWQ3NzlSMTBkNTQwUjExaTg5UjEyZDMyUjEzZDY4NFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MjAxb1IxZDEyNjNSMmFkNDNkMjI2ZDY5ZDIzM2QxMTQuNWQyMzQuNWQxNjBkMjM2ZDIxNC41ZDIzNWQyNjlkMjM0ZDMyOC41ZDIzMmQzODhkMjMwZDQ0MS41ZDIzMGQ0OTVkMjMwZDUzOWQyMzMuNWQ1ODNkMjM3ZDYwOGQyNDZkNjA4ZDMwOGQ1NzRkMzEzZDUxNWQzMTRkNDU2ZDMxNWQzODlkMzE1LjVkMzIyZDMxNmQyNTVkMzE5LjVkMTg4ZDMyM2QxMzhkMzM0ZDEyOWQzNzVkMTI1ZDQwMi41ZDEyMWQ0MzBkMTE5LjVkNDUwLjVkMTE4ZDQ3MWQxMTguNWQ0ODlkMTE5ZDUwN2QxMjAuNWQ1MjcuNWQxMjJkNTQ4ZDEyMy41ZDU3NWQxMjVkNjAyZDEyNWQ2NDFkMTg5ZDY0MWQyNDkuNWQ2MzQuNWQzMTBkNjI4ZDM2OS41ZDYxOS41ZDQyOWQ2MTFkNDg5ZDYwNC41ZDU0OWQ1OThkNjEyZDU5OGQ2MTJkNjY2ZDEzNGQ3MjZkMTQxZDkzMWQyMzVkOTMxZDMxMWQ5MjUuNWQzODdkOTIwZDQ1NS41ZDkxNGQ1MjRkOTA4ZDU5MWQ5MDIuNWQ2NThkODk3ZDczM2Q4OTdkNzMzZDkwOGQ3MjdkOTIzLjVkNzIxZDkzOWQ3MTFkOTUxLjVkNzAxZDk2NGQ2ODguNWQ5NzAuNWQ2NzZkOTc3ZDY2NGQ5NjhkNTk1ZDk3NmQ1MTEuNWQ5ODMuNWQ0MjhkOTkxZDM0Mi41ZDk5OC41ZDI1N2QxMDA2ZDE3Ny41ZDEwMTIuNWQ5OGQxMDE5ZDM4ZDEwMjRkNDNkMjI2ZDM1MWQzOWQzNjRkMjNkMzc2ZDE4ZDM4OGQxM2QzOTZkMTYuNWQ0MDRkMjBkNDA5ZDI5LjVkNDE0ZDM5ZDQxNGQ1MGQ0MTFkNjJkNDA2LjVkNzEuNWQ0MDJkODFkMzkxZDk0ZDM4MGQxMDdkMzU5ZDEyNS41ZDMzOGQxNDRkMzA0ZDE3MmQyNjVkMTM3ZDM1MWQzOWhSM2Q3NTdSNGQ3MzNSNWQzOFI2ZDEwMTFSN2QwUjhkOTczUjlkNzc5UjEwZDU0MFIxMWkyMDFSMTJkMzhSMTNkNzU3UjE0YWkxaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpMmkyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpMWkzaTNpM2kzaTNpM2kzaTNpMmkyaGc6ODhvUjFkMTI2M1IyYWQzNzNkNzQzZDM0MWQ3NzBkMzEyZDgxNGQyODNkODU4ZDI1My41ZDkwMWQyMjRkOTQ0ZDE5MmQ5NzVkMTYwZDEwMDZkMTIxZDEwMDZkODNkMTAwNmQ2NmQ5OTRkNDlkOTgyZDU1ZDk0MWQyOTJkNjYwZDIyOGQ1ODBkMTgzLjVkNTI0ZDEzOWQ0NjhkMTEwLjVkNDMxLjVkODJkMzk1ZDY2LjVkMzc1ZDUxZDM1NWQ0My41ZDM0NWQzNmQzMzVkMzVkMzMzZDM0ZDMzMWQzNGQzMzBkMzRkMzE3ZDQzLjVkMzA4ZDUzZDI5OWQ2Ni41ZDI5NS41ZDgwZDI5MmQ5NGQyOTIuNWQxMDhkMjkzZDExOGQyOThkMzU4ZDU4OGQ2NTZkMjM1ZDcyOWQyOTRkNDI5ZDY1MGQ0NThkNjg5ZDQ5MmQ3MTkuNWQ1MjZkNzUwZDU2MC41ZDc3NmQ1OTVkODAyZDYyNy41ZDgyNWQ2NjBkODQ4ZDY4NC41ZDg3MmQ3MDlkODk2ZDcyNGQ5MjIuNWQ3MzlkOTQ5ZDczOWQ5ODFkNzM1ZDEwMTBkNzEzZDEwMjBkNjkxZDEwMzBkNjU3ZDEwMDRkMzczZDc0M2hSM2Q3NjhSNGQ3MzlSNWQzNFI2ZDc4OVI3ZC02UjhkNzU1UjlkNzc5UjEwZDU0MFIxMWk4OFIxMmQzNFIxM2Q3NjhSMTRhaTFpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTJpMmkyaTJpM2kzaTNpM2kzaTNpM2kzaTJoZzoyMDBvUjFkMTI2M1IyYWQ0M2QyMjZkNjlkMjMzZDExNC41ZDIzNC41ZDE2MGQyMzZkMjE0LjVkMjM1ZDI2OWQyMzRkMzI4LjVkMjMyZDM4OGQyMzBkNDQxLjVkMjMwZDQ5NWQyMzBkNTM5ZDIzMy41ZDU4M2QyMzdkNjA4ZDI0NmQ2MDhkMzA4ZDU3NGQzMTNkNTE1ZDMxNGQ0NTZkMzE1ZDM4OWQzMTUuNWQzMjJkMzE2ZDI1NWQzMTkuNWQxODhkMzIzZDEzOGQzMzRkMTI5ZDM3NWQxMjVkNDAyLjVkMTIxZDQzMGQxMTkuNWQ0NTAuNWQxMThkNDcxZDExOC41ZDQ4OWQxMTlkNTA3ZDEyMC41ZDUyNy41ZDEyMmQ1NDhkMTIzLjVkNTc1ZDEyNWQ2MDJkMTI1ZDY0MWQxODlkNjQxZDI0OS41ZDYzNC41ZDMxMGQ2MjhkMzY5LjVkNjE5LjVkNDI5ZDYxMWQ0ODlkNjA0LjVkNTQ5ZDU5OGQ2MTJkNTk4ZDYxMmQ2NjZkMTM0ZDcyNmQxNDFkOTMxZDIzNWQ5MzFkMzExZDkyNS41ZDM4N2Q5MjBkNDU1LjVkOTE0ZDUyNGQ5MDhkNTkxZDkwMi41ZDY1OGQ4OTdkNzMzZDg5N2Q3MzNkOTA4ZDcyN2Q5MjMuNWQ3MjFkOTM5ZDcxMWQ5NTEuNWQ3MDFkOTY0ZDY4OC41ZDk3MC41ZDY3NmQ5NzdkNjY0ZDk2OGQ1OTVkOTc2ZDUxMS41ZDk4My41ZDQyOGQ5OTFkMzQyLjVkOTk4LjVkMjU3ZDEwMDZkMTc3LjVkMTAxMi41ZDk4ZDEwMTlkMzhkMTAyNGQ0M2QyMjZkMzY0ZDEyOGQzNDNkMTgyZDMxMWQxNjBkMjkyZDE0NmQyNzNkMTMyZDI2MmQxMjFkMjUxZDExMGQyNDVkMTAwLjVkMjM5ZDkxZDIzNWQ3OGQyMzNkNjVkMjM0LjVkNTNkMjM2ZDQxZDI0MmQzNC41ZDI0OGQyOGQyNTcuNWQyOS41ZDI2N2QzMWQyODBkNDZkMzY0ZDEyOGhSM2Q3NTdSNGQ3MzNSNWQzOFI2ZDk5NlI3ZDBSOGQ5NThSOWQ3NzlSMTBkNTQwUjExaTIwMFIxMmQzOFIxM2Q3NTdSMTRhaTFpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkxaTJpM2kzaTNpM2kzaTNpM2kzaTJoZzo4N29SMWQxMjYzUjJhZDkxM2Q5NDFkODk5ZDkyMWQ4NzhkODgwZDg1N2Q4MzlkODMzZDc4OC41ZDgwOWQ3MzhkNzgyLjVkNjg0ZDc1NmQ2MzBkNzI5LjVkNTgzLjVkNzAzZDUzN2Q2NzguNWQ1MDRkNjU0ZDQ3MWQ2MzRkNDYzZDYxOWQ0ODZkNTk5LjVkNTI4LjVkNTgwZDU3MWQ1NTguNWQ2MjMuNWQ1MzdkNjc2ZDUxNS41ZDczNGQ0OTRkNzkyZDQ3NGQ4NDYuNWQ0NTRkOTAxZDQzNy41ZDk0OGQ0MjFkOTk1ZDQxMGQxMDI0ZDMzMmQxMDIwZDIwZDI5OGQxNGQyODVkMjAuNWQyNzZkMjdkMjY3ZDM4ZDI2Mi41ZDQ5ZDI1OGQ2MmQyNTZkNzVkMjU0ZDgyZDI1NGQxMDFkMjU0ZDExMC41ZDI2MmQxMjBkMjcwZDEyNS41ZDI4Mi41ZDEzMWQyOTVkMTM1ZDMxMGQxMzlkMzI1ZDE0NWQzMzlkMTYwZDM3MmQxODFkNDE5ZDIwMmQ0NjZkMjI1ZDUxN2QyNDhkNTY4ZDI3MmQ2MTlkMjk2ZDY3MGQzMTYuNWQ3MTJkMzM3ZDc1NGQzNTIuNWQ3ODJkMzY4ZDgxMGQzNzRkODE2ZDQyNmQ2ODZkNDYzLjVkNTk2ZDUwMWQ1MDZkNTI3LjVkNDQ3LjVkNTU0ZDM4OWQ1NzBkMzU3ZDU4NmQzMjVkNTk1LjVkMzEwZDYwNWQyOTVkNjA5LjVkMjkyZDYxNGQyODlkNjE2ZDI4OWQ2MzJkMjg5ZDY1My41ZDMwOWQ2NzVkMzI5ZDY5OC41ZDM2Mi41ZDcyMmQzOTZkNzQ3LjVkNDM5ZDc3M2Q0ODJkNzk4LjVkNTI4LjVkODI0ZDU3NWQ4NDcuNWQ2MjFkODcxZDY2N2Q4OTEuNWQ3MDYuNWQ5MTJkNzQ2ZDkyOGQ3NzVkOTQ0ZDgwNGQ5NTRkODE2ZDk3MGQ3NjVkOTg1ZDcwNGQxMDAwZDY0M2QxMDEzLjVkNTc3ZDEwMjdkNTExZDEwMzlkNDQyLjVkMTA1MWQzNzRkMTA2MmQzMDlkMTA3M2QyNDRkMTA4MmQxODQuNWQxMDkxZDEyNWQxMDk5ZDc2ZDExMzBkNzZkMTE0N2Q4MmQxMTY0ZDg4ZDExNzEuNWQ5OWQxMTc5ZDExMGQxMTgwLjVkMTI1ZDExODJkMTQwZDExODJkMTU3ZDExODNkMTUzZDExNzguNWQxOTBkMTE3NGQyMjdkMTE2NC41ZDI5M2QxMTU1ZDM1OWQxMTQxZDQ0Ni41ZDExMjdkNTM0ZDExMDlkNjMwZDEwOTFkNzI2ZDEwNjlkODIzLjVkMTA0N2Q5MjFkMTAyMmQxMDA3ZDk5N2QxMDI0ZDk4MC41ZDEwMjVkOTY0ZDEwMjZkOTUyLjVkMTAxNS41ZDk0MWQxMDA1ZDkzMmQ5ODVkOTIzZDk2NWQ5MTNkOTQxaFIzZDEyMDRSNGQxMTgzUjVkMTRSNmQ5NDhSN2QtMlI4ZDkzNFI5ZDc3OVIxMGQ1NDBSMTFpODdSMTJkMTRSMTNkMTIwNFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxOTlvUjFkMTI2M1IyYWQyN2Q3MTJkMjdkNjA5ZDY0ZDUxNWQxMDFkNDIxZDE2NS41ZDM0OS41ZDIzMGQyNzhkMzE3LjVkMjM1LjVkNDA1ZDE5M2Q1MDdkMTkzZDU0OGQxOTNkNTc1LjVkMTk3LjVkNjAzZDIwMmQ2MjBkMjE2LjVkNjM3ZDIzMWQ2NDQuNWQyNThkNjUyZDI4NWQ2NTJkMzMwZDU5NGQyNzJkNTMwLjVkMjU3LjVkNDY3ZDI0M2Q0MDYuNWQyNjAuNWQzNDZkMjc4ZDI5Mi41ZDMyMi41ZDIzOWQzNjdkMjAwLjVkNDI2LjVkMTYyZDQ4NmQxNDIuNWQ1NTUuNWQxMjNkNjI1ZDEzMGQ2OTJkMTMwZDc1NWQxNTIuNWQ4MDIuNWQxNzVkODUwZDIxMy41ZDg4MWQyNTJkOTEyZDMwNGQ5MjcuNWQzNTZkOTQzZDQxNWQ5NDNkNDg5ZDkzN2Q1NDVkOTE4ZDYwMWQ4OTlkNjQ3LjVkODcyZDY5NGQ4NDVkNzM2LjVkODEzLjVkNzc5ZDc4MmQ4MjZkNzUyZDgzNWQ3NTJkODQ0LjVkNzUzZDg1NGQ3NTRkODYyZDc1N2Q4NzBkNzYwZDg3NWQ3NjYuNWQ4ODBkNzczZDg4MGQ3ODVkODMwZDgyOWQ3NzJkODczZDcxNGQ5MTdkNjQ5LjVkOTUxLjVkNTg1ZDk4NmQ1MTQuNWQxMDA2LjVkNDQ0ZDEwMjdkMzcwZDEwMjVkMzA0ZDEwMjVkMjQyZDEwMDIuNWQxODBkOTgwZDEzMmQ5MzguNWQ4NGQ4OTdkNTUuNWQ4MzkuNWQyN2Q3ODJkMjdkNzEyZDMzMGQxMjQ1ZDM3MGQxMjQ5ZDQwOS41ZDEyNDJkNDQ5ZDEyMzVkNDc4LjVkMTIyMy41ZDUwOGQxMjEyZDUyM2QxMTk4ZDUzOGQxMTg0ZDUzMC41ZDExNzNkNTIzZDExNjJkNDg3ZDExNTcuNWQ0NTFkMTE1M2QzNzlkMTE1OWQzNjRkMTE1OWQzNTUuNWQxMTQ0ZDM0N2QxMTI5ZDM0Mi41ZDExMDhkMzM4ZDEwODdkMzM3ZDEwNjRkMzM2ZDEwNDFkMzM2ZDEwMjRkMzMyZDk4OWQzNDAuNWQ5ODIuNWQzNDlkOTc2ZDM2MGQ5ODIuNWQzNzFkOTg5ZDM3OWQxMDAxLjVkMzg3ZDEwMTRkMzgyZDEwMThkMzgyZDEwMzVkMzgxLjVkMTA1MC41ZDM4MWQxMDY2ZDM4M2QxMDc4ZDM4NWQxMDkwZDM5MC41ZDEwOTdkMzk2ZDExMDRkNDA3ZDExMDRkNDY1ZDEwOThkNTAyLjVkMTEwNS41ZDU0MGQxMTEzZDU1OWQxMTI5LjVkNTc4ZDExNDZkNTgxZDExNjguNWQ1ODRkMTE5MWQ1NzNkMTIxNGQ1NjJkMTIzN2Q1MzkuNWQxMjU3LjVkNTE3ZDEyNzhkNDg1LjVkMTI5MWQ0NTRkMTMwNGQ0MTVkMTMwNmQzNzZkMTMwOGQzMzNkMTI5NGQzMzBkMTI5NGQzMzBkMTI4Ny41ZDMzMGQxMjgxZDMzMC41ZDEyNzIuNWQzMzFkMTI2NGQzMzEuNWQxMjU2ZDMzMmQxMjQ4ZDMzMGQxMjQ1aFIzZDkwNlI0ZDg4MFI1ZDI3UjZkODMxUjdkLTI4NFI4ZDgwNFI5ZDc3OVIxMGQ1NDBSMTFpMTk5UjEyZDI3UjEzZDkwNlIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzo4Nm9SMWQxMjYzUjJhZDMyNmQxMDA0ZDMxMGQ5NjFkMjgxZDg5OC41ZDI1MmQ4MzZkMjE3ZDc2N2QxODJkNjk4ZDE0NmQ2MjhkMTEwZDU1OGQ4MC41ZDQ5OWQ1MWQ0NDBkMzIuNWQzOTdkMTRkMzU0ZDE0ZDMzOWQxNGQzMzRkMjMuNWQzMjYuNWQzM2QzMTlkNDVkMzEzZDU5ZDMwNmQ3N2QyOThkMTIxZDM3OWQxNTkuNWQ0NTkuNWQxOThkNTQwZDIzNC41ZDYxMmQyNzFkNjg0ZDMwNi41ZDc0NS41ZDM0MmQ4MDdkMzgwZDg1MWQzODZkODQ0ZDQwNS41ZDgwOGQ0MjVkNzcyZDQ1MS41ZDcxOGQ0NzhkNjY0ZDUxMGQ1OTcuNWQ1NDJkNTMxZDU3M2Q0NjVkNjA0ZDM5OWQ2MzJkMzM5ZDY2MGQyNzlkNjc5ZDIzNmQ2OTlkMjEyZDcxOGQxOTguNWQ3MzdkMTg1ZDc1MWQxODQuNWQ3NjVkMTg0ZDc3My41ZDE5Ni41ZDc4MmQyMDlkNzgyZDIzNmQ0MjdkMTAxNWQ0MTdkMTAyMWQ0MDNkMTAyNC41ZDM4OWQxMDI4ZDM3NC41ZDEwMjhkMzYwZDEwMjhkMzQ3ZDEwMjIuNWQzMzRkMTAxN2QzMjZkMTAwNGhSM2Q4MDJSNGQ3ODJSNWQxNFI2ZDg0MFI3ZC00UjhkODI2UjlkNzc5UjEwZDU0MFIxMWk4NlIxMmQxNFIxM2Q4MDJSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2hnOjE5OG9SMWQxMjYzUjJhZDQ5NmQxMDIwZDQ4MGQxMDE4ZDQ2OGQxMDE1LjVkNDU2ZDEwMTNkNDU0ZDEwMTFkNDIzZDcwOWQyMDNkNzQxZDE5OGQ3NjFkMTg5LjVkNzkzLjVkMTgxZDgyNmQxNjkuNWQ4NjIuNWQxNThkODk5ZDE0M2Q5MzQuNWQxMjhkOTcwZDEwOWQ5OTRkMTA1ZDk5OWQ5My41ZDk5OGQ4MmQ5OTdkNjkuNWQ5OTIuNWQ1N2Q5ODhkNDdkOTgxLjVkMzdkOTc1ZDM3ZDk2OWQzNmQ5NDZkNDkuNWQ4OTYuNWQ2M2Q4NDdkODVkNzgyLjVkMTA3ZDcxOGQxMzVkNjQ1LjVkMTYzZDU3M2QxOTJkNTA1LjVkMjIxZDQzOGQyNDcuNWQzODIuNWQyNzRkMzI3ZDI5NGQyOTVkMzIwZDIzN2QzNTBkMjA4LjVkMzgwZDE4MGQ0MDguNWQxNzVkNDM3ZDE3MGQ0NjEuNWQxODQuNWQ0ODZkMTk5ZDUwMWQyMjZkNTI3ZDIzM2Q1NjZkMjM1LjVkNjA1ZDIzOGQ2NDkuNWQyMzguNWQ2OTRkMjM5ZDc0MWQyMzguNWQ3ODhkMjM4ZDgzMmQyMzkuNWQ4NzZkMjQxZDkxM2QyNDUuNWQ5NTBkMjUwZDk3NWQyNTlkOTc1ZDMyMWQ5NDFkMzI2ZDg5Ni41ZDMyNC41ZDg1MmQzMjNkODAyZDMyMS41ZDc1MmQzMjBkNjk5ZDMyMS41ZDY0NmQzMjNkNTk2ZDMzNGQ1ODdkMzc1ZDU4M2Q0MDIuNWQ1NzlkNDMwZDU3Ny41ZDQ1MC41ZDU3NmQ0NzFkNTc2LjVkNDg5ZDU3N2Q1MDdkNTc4LjVkNTI3LjVkNTgwZDU0OGQ1ODEuNWQ1NzVkNTgzZDYwMmQ1ODNkNjQxZDY0N2Q2NDFkNjkzZDYzNi41ZDczOWQ2MzJkNzgxLjVkNjI2ZDgyNGQ2MjBkODcwZDYxNS41ZDkxNmQ2MTFkOTc5ZDYxMWQ5NzlkNjc5ZDU5MmQ3MjZkNTk5ZDkzMWQ2NjFkOTMxZDcwOC41ZDkyOS41ZDc1NmQ5MjhkNzk1ZDkyNS41ZDgzNGQ5MjNkODY4ZDkyMC41ZDkwMmQ5MThkOTM2LjVkOTE1LjVkOTcxZDkxM2QxMDEwLjVkOTExLjVkMTA1MGQ5MTBkMTEwMGQ5MTBkMTEwNmQ5MTNkMTEwNC41ZDkyMmQxMTAzZDkzMWQxMDk0LjVkOTQyLjVkMTA4NmQ5NTRkMTA3MGQ5NjQuNWQxMDU0ZDk3NWQxMDMxZDk4MWQ4OTNkOTk2ZDc1NWQxMDA1ZDYxN2QxMDE0ZDQ5NmQxMDI0ZDQ5NmQxMDIwZDQyN2QyOTFkMzk4ZDMzNWQzNjguNWQzODEuNWQzMzlkNDI4ZDMxMy41ZDQ3NC41ZDI4OGQ1MjFkMjY5ZDU2NWQyNTBkNjA5ZDI0MWQ2NDZkMjc3ZDY0NmQzMDFkNjQzZDMyNWQ2NDBkMzQ1ZDYzNmQzNjVkNjMyZDM4NmQ2MjguNWQ0MDdkNjI1ZDQzNmQ2MjNkNDMxZDYwMmQ0MzIuNWQ1NjhkNDM0ZDUzNGQ0MzZkNDkwLjVkNDM4ZDQ0N2Q0MzcuNWQzOTYuNWQ0MzdkMzQ2ZDQyN2QyOTFoUjNkMTEyMlI0ZDExMDZSNWQzNlI2ZDg1NFI3ZDBSOGQ4MThSOWQ3NzlSMTBkNTQwUjExaTE5OFIxMmQzNlIxM2QxMTIyUjE0YWkxaTNpM2kyaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6ODVvUjFkMTI2M1IyYWQ1NzhkODUxZDUyN2Q4OTVkNDg0LjVkOTI3LjVkNDQyZDk2MGQzOTkuNWQ5ODAuNWQzNTdkMTAwMWQzMTFkMTAxMGQyNjVkMTAxOWQyMDdkMTAxNWQxMjlkMTAwNmQ4OWQ5NjcuNWQ0OWQ5MjlkMzVkODcxLjVkMjFkODE0ZDI3ZDc0M2QzM2Q2NzJkNDYuNWQ1OTcuNWQ2MGQ1MjNkNzUuNWQ0NTAuNWQ5MWQzNzhkOTZkMzE4ZDEwMGQzMTdkMTEyZDMxNi41ZDEyNGQzMTZkMTI4ZDMxNmQxNjJkMzEyZDE3MmQzMzRkMTgyZDM1NmQxNzhkMzk1LjVkMTc0ZDQzNWQxNjFkNDg3LjVkMTQ4ZDU0MGQxMzUuNWQ1OTYuNWQxMjNkNjUzZDExNmQ3MDhkMTA5ZDc2M2QxMTcuNWQ4MDhkMTI2ZDg1M2QxNTQuNWQ4ODMuNWQxODNkOTE0ZDI0MWQ5MjBkMzIxZDkyM2QzNzZkODk4LjVkNDMxZDg3NGQ0NjdkODI5LjVkNTAzZDc4NWQ1MjMuNWQ3MjRkNTQ0ZDY2M2Q1NTQuNWQ1OTNkNTY1ZDUyM2Q1NjguNWQ0NDcuNWQ1NzJkMzcyZDU3NGQyOThkNTgwZDI3OWQ1OTBkMjcwLjVkNjAwZDI2MmQ2MTJkMjYxZDYyNGQyNjBkNjM3ZDI2NmQ2NTBkMjcyZDY2NGQyODJkNjcwZDM3MWQ2NjguNWQ0NTkuNWQ2NjdkNTQ4ZDY2My41ZDYzNy41ZDY2MGQ3MjdkNjU3ZDgxOGQ2NTRkOTA5ZDY1N2QxMDA0ZDY1N2QxMDE4ZDY0NGQxMDIyLjVkNjMxZDEwMjdkNjE0LjVkMTAyNmQ1OThkMTAyNWQ1ODNkMTAyMC41ZDU2OGQxMDE2ZDU2NWQxMDExZDU3OGQ4NTFkNTc4ZDg1MWhSM2Q3MTlSNGQ2NzBSNWQyMVI2ZDc2NFI3ZC0zUjhkNzQzUjlkNzc5UjEwZDU0MFIxMWk4NVIxMmQyMVIxM2Q3MTlSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpMmhnOjE5N29SMWQxMjYzUjJhZDEwNGQxMDA3ZDEwMGQxMDEyZDg3LjVkMTAxMWQ3NWQxMDEwZDYyZDEwMDVkNDlkMTAwMGQzOS41ZDk5My41ZDMwZDk4N2QzMmQ5ODJkNDJkOTU1ZDYzLjVkODk4ZDg1ZDg0MWQxMTEuNWQ3NjkuNWQxMzhkNjk4ZDE2Ny41ZDYxOWQxOTdkNTQwZDIyMy41ZDQ2OC41ZDI1MGQzOTdkMjcxZDM0MC41ZDI5MmQyODRkMzAyZDI1NmQzMTBkMjMzZDMxM2QyMTMuNWQzMTZkMTk0ZDMyMi41ZDE4MGQzMjlkMTY2ZDM0Mi41ZDE1OC41ZDM1NmQxNTFkMzg1ZDE1MWQ0MjFkMTcyZDQ0NWQyMDAuNWQ0NjlkMjI5ZDQ4N2QyNjIuNWQ1MDVkMjk2ZDUxOC41ZDMzM2Q1MzJkMzcwZDU0NS41ZDQwN2Q1NTlkNDQ0ZDU3NC41ZDQ4MGQ1OTBkNTE2ZDYxM2Q1NDdkNjIxZDU1OWQ2MzYuNWQ1NjNkNjUyZDU2N2Q2NzAuNWQ1NjcuNWQ2ODlkNTY4ZDcwOC41ZDU2Ni41ZDcyOGQ1NjVkNzQ0ZDU2N2Q3NjBkNTY5ZDc3MC41ZDU3NS41ZDc4MWQ1ODJkNzgxZDU5OGQ3ODVkNjE5ZDc3N2Q2MjlkNzY5ZDYzOWQ3NTQuNWQ2NDIuNWQ3NDBkNjQ2ZDcyMS41ZDY0NS41ZDcwM2Q2NDVkNjg3LjVkNjQ0ZDY3MmQ2NDNkNjYyZDY0My41ZDY1MmQ2NDRkNjU0ZDY1MGQ2NjZkNjg3ZDY4MC41ZDczMmQ2OTVkNzc3ZDcxM2Q4MjJkNzMxZDg2N2Q3NTJkOTA5ZDc3M2Q5NTFkNzk4ZDk4MWQ3OTNkOTg3ZDc4MGQ5OTguNWQ3NjdkMTAxMGQ3NTMuNWQxMDIwLjVkNzQwZDEwMzFkNzI4LjVkMTAzOGQ3MTdkMTA0NWQ3MTVkMTA0MmQ1MzlkNjcwZDE5OGQ3NTRkMTkzZDc3NGQxODQuNWQ4MDYuNWQxNzZkODM5ZDE2NC41ZDg3NS41ZDE1M2Q5MTJkMTM4ZDk0Ny41ZDEyM2Q5ODNkMTA0ZDEwMDdkMzc0ZDI5NmQzNjhkMzQxZDM1MS41ZDM4OS41ZDMzNWQ0MzhkMzE0LjVkNDg1LjVkMjk0ZDUzM2QyNzNkNTc3LjVkMjUyZDYyMmQyMzZkNjU5ZDI3MmQ2NTlkMzA4ZDY1MS41ZDM0NGQ2NDRkMzc4ZDYzMi41ZDQxMmQ2MjFkNDQ0ZDYwOGQ0NzZkNTk1ZDUwNWQ1ODRkNTAyZDU3MGQ0OTZkNTQ1LjVkNDkwZDUyMWQ0ODEuNWQ0OTIuNWQ0NzNkNDY0ZDQ2Mi41ZDQzM2Q0NTJkNDAyZDQzOC41ZDM3NWQ0MjVkMzQ4ZDQwOWQzMjdkMzkzZDMwNmQzNzRkMjk2ZDI1NGQ4OGQyNTRkNDZkMjY5ZDIxLjVkMjg0ZC0zZDMwN2QtMTNkMzMwZC0yM2QzNTdkLTIwZDM4NGQtMTdkNDA4ZC0zZDQzMmQxMWQ0NDlkMzMuNWQ0NjZkNTZkNDY5ZDg0ZDQ2OWQxNDdkNDQzZDE2Ny41ZDQxN2QxODhkMzY2ZDE4OGQzNTBkMTg4ZDMzMC41ZDE4MmQzMTFkMTc2ZDI5NGQxNjMuNWQyNzdkMTUxZDI2NS41ZDEzMmQyNTRkMTEzZDI1NGQ4OGQ0MTBkNjNkMzg5ZDQwZDM2NWQzNWQzNDFkMzBkMzI0ZDM5LjVkMzA3ZDQ5ZDMwM2Q3MC41ZDI5OWQ5MmQzMThkMTIzZDM0MWQxNDJkMzYyLjVkMTQ0ZDM4NGQxNDZkMzk4ZDEzNmQ0MTJkMTI2ZDQxNi41ZDEwNi41ZDQyMWQ4N2Q0MTBkNjNoUjNkODIwUjRkNzk4UjVkMzBSNmQxMDQ3UjdkLTIxUjhkMTAxN1I5ZDc3OVIxMGQ1NDBSMTFpMTk3UjEyZDMwUjEzZDgyMFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpMmkzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNoZzo4NG9SMWQxMjYzUjJhZDI4OGQ0MDdkMjFkMzkxZDE2ZDM5MWQxMmQzODYuNWQ4ZDM4MmQ1LjVkMzc1ZDNkMzY4ZDEuNWQzNjFkMGQzNTRkMGQzNDlkMGQzMzJkMTFkMzE1LjVkMjJkMjk5ZDM4ZDI5OWQxMjlkMzAzZDIyMWQzMTFkMzEzZDMxOWQ0MDUuNWQzMjNkNDk4ZDMyN2Q1ODkuNWQzMjRkNjgxZDMyMWQ3NzFkMzA0ZDc3OGQzMDZkNzgzZDMxNmQ3ODhkMzI2ZDc5MWQzMzlkNzk0ZDM1MmQ3OTUuNWQzNjUuNWQ3OTdkMzc5ZDc5N2QzODZkNzM1ZDQwNGQ2ODguNWQ0MDcuNWQ2NDJkNDExZDU5OGQ0MTBkNTU0ZDQwOWQ1MDcuNWQ0MDhkNDYxZDQwN2Q0MDBkNDE2ZDM5OGQ0NDlkMzkzLjVkNDk1ZDM4OWQ1NDFkMzg0LjVkNTk0LjVkMzgwZDY0OGQzNzVkNzA2ZDM3MGQ3NjRkMzY3ZDgxOS41ZDM2NGQ4NzVkMzYzZDkyNS41ZDM2MmQ5NzZkMzY2ZDEwMTVkMjQ5ZDEwMjRkMjg4ZDQwN2hSM2Q3OTdSNGQ3OTdSNWQwUjZkNzI1UjdkMFI4ZDcyNVI5ZDc3OVIxMGQ1NDBSMTFpODRSMTJkMFIxM2Q3OTdSMTRhaTFpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTJoZzoxOTZvUjFkMTI2M1IyYWQxMDRkMTAwN2QxMDBkMTAxMmQ4Ny41ZDEwMTFkNzVkMTAxMGQ2MmQxMDA1ZDQ5ZDEwMDBkMzkuNWQ5OTMuNWQzMGQ5ODdkMzJkOTgyZDQyZDk1NWQ2My41ZDg5OGQ4NWQ4NDFkMTExLjVkNzY5LjVkMTM4ZDY5OGQxNjcuNWQ2MTlkMTk3ZDU0MGQyMjMuNWQ0NjguNWQyNTBkMzk3ZDI3MWQzNDAuNWQyOTJkMjg0ZDMwMmQyNTZkMzEwZDIzM2QzMTNkMjEzLjVkMzE2ZDE5NGQzMjIuNWQxODBkMzI5ZDE2NmQzNDIuNWQxNTguNWQzNTZkMTUxZDM4NWQxNTFkNDIxZDE3MmQ0NDVkMjAwLjVkNDY5ZDIyOWQ0ODdkMjYyLjVkNTA1ZDI5NmQ1MTguNWQzMzNkNTMyZDM3MGQ1NDUuNWQ0MDdkNTU5ZDQ0NGQ1NzQuNWQ0ODBkNTkwZDUxNmQ2MTNkNTQ3ZDYyMWQ1NTlkNjM2LjVkNTYzZDY1MmQ1NjdkNjcwLjVkNTY3LjVkNjg5ZDU2OGQ3MDguNWQ1NjYuNWQ3MjhkNTY1ZDc0NGQ1NjdkNzYwZDU2OWQ3NzAuNWQ1NzUuNWQ3ODFkNTgyZDc4MWQ1OThkNzg1ZDYxOWQ3NzdkNjI5ZDc2OWQ2MzlkNzU0LjVkNjQyLjVkNzQwZDY0NmQ3MjEuNWQ2NDUuNWQ3MDNkNjQ1ZDY4Ny41ZDY0NGQ2NzJkNjQzZDY2MmQ2NDMuNWQ2NTJkNjQ0ZDY1NGQ2NTBkNjY2ZDY4N2Q2ODAuNWQ3MzJkNjk1ZDc3N2Q3MTNkODIyZDczMWQ4NjdkNzUyZDkwOWQ3NzNkOTUxZDc5OGQ5ODFkNzkzZDk4N2Q3ODBkOTk4LjVkNzY3ZDEwMTBkNzUzLjVkMTAyMC41ZDc0MGQxMDMxZDcyOC41ZDEwMzhkNzE3ZDEwNDVkNzE1ZDEwNDJkNTM5ZDY3MGQxOThkNzU0ZDE5M2Q3NzRkMTg0LjVkODA2LjVkMTc2ZDgzOWQxNjQuNWQ4NzUuNWQxNTNkOTEyZDEzOGQ5NDcuNWQxMjNkOTgzZDEwNGQxMDA3ZDM3NGQyOTZkMzY4ZDM0MWQzNTEuNWQzODkuNWQzMzVkNDM4ZDMxNC41ZDQ4NS41ZDI5NGQ1MzNkMjczZDU3Ny41ZDI1MmQ2MjJkMjM2ZDY1OWQyNzJkNjU5ZDMwOGQ2NTEuNWQzNDRkNjQ0ZDM3OGQ2MzIuNWQ0MTJkNjIxZDQ0NGQ2MDhkNDc2ZDU5NWQ1MDVkNTg0ZDUwMmQ1NzBkNDk2ZDU0NS41ZDQ5MGQ1MjFkNDgxLjVkNDkyLjVkNDczZDQ2NGQ0NjIuNWQ0MzNkNDUyZDQwMmQ0MzguNWQzNzVkNDI1ZDM0OGQ0MDlkMzI3ZDM5M2QzMDZkMzc0ZDI5NmQyNThkNDZkMjU4ZDQxZDI2Ny41ZDMzLjVkMjc3ZDI2ZDI4OWQyMGQzMDJkMTNkMzIwZDVkMzQ2ZDVkMzU1LjVkMTZkMzY1ZDI3ZDM2NWQ0N2QzNjVkNjJkMzU3LjVkNzAuNWQzNTBkNzlkMzM4LjVkODNkMzI3ZDg3ZDMxMy41ZDg4ZDMwMGQ4OWQyODhkODlkMjcyZDg5ZDI2NWQ3OS41ZDI1OGQ3MGQyNThkNDZkNDM4ZDQ2ZDQzOGQ0MWQ0NDcuNWQzMy41ZDQ1N2QyNmQ0NjlkMjBkNDgzZDEzZDUwMWQ1ZDUyN2Q1ZDUzNi41ZDE2ZDU0NmQyN2Q1NDZkNDdkNTQ2ZDYyZDUzOC41ZDcwLjVkNTMxZDc5ZDUxOS41ZDgzZDUwOGQ4N2Q0OTRkODhkNDgwZDg5ZDQ2OGQ4OWQ0NTJkODlkNDQ1ZDc5LjVkNDM4ZDcwZDQzOGQ0NmhSM2Q4MjBSNGQ3OThSNWQzMFI2ZDEwMTlSN2QtMjFSOGQ5ODlSOWQ3NzlSMTBkNTQwUjExaTE5NlIxMmQzMFIxM2Q4MjBSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTJpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjgzb1IxZDEyNjNSMmFkMTlkOTEwZDE5ZDg5OGQyNy41ZDg4Ni41ZDM2ZDg3NWQ0N2Q4NjVkNThkODU1ZDY4LjVkODQ4ZDc5ZDg0MWQ4M2Q4MzhkODVkODg4ZDExMy41ZDkxNGQxNDJkOTQwZDE4Ni41ZDk0Ny41ZDIzMWQ5NTVkMjg2LjVkOTQ3LjVkMzQyZDk0MGQzOTlkOTIyLjVkNDU2ZDkwNWQ1MDhkODgwZDU2MGQ4NTVkNTk4LjVkODI4LjVkNjM3ZDgwMmQ2NTUuNWQ3NzdkNjc0ZDc1MmQ2NjRkNzMzZDE0NWQ2MTdkMTM1ZDYxNGQxMjAuNWQ2MDYuNWQxMDZkNTk5ZDkzZDU4OS41ZDgwZDU4MGQ3MWQ1NjguNWQ2MmQ1NTdkNjJkNTQ1ZDYyZDQ5OGQ5Ni41ZDQ1OWQxMzFkNDIwZDE4NWQzODkuNWQyMzlkMzU5ZDMwNWQzMzZkMzcxZDMxM2Q0MzNkMjk3LjVkNDk1ZDI4MmQ1NDYuNWQyNzRkNTk4ZDI2NmQ2MjNkMjY0ZDYzMGQyNjdkNjQ2ZDI2OC41ZDY2MmQyNzBkNjc3LjVkMjc0ZDY5M2QyNzhkNzAzLjVkMjg1ZDcxNGQyOTJkNzEwZDMwNmQ3MTFkMzI0ZDY4OWQzMzYuNWQ2NjdkMzQ5ZDYzMC41ZDM1OGQ1OTRkMzY3ZDU0Ny41ZDM3My41ZDUwMWQzODBkNDUyZDM4OGQ0MDNkMzk2ZDM1NmQ0MDYuNWQzMDlkNDE3ZDI3MS41ZDQzMi41ZDIzNGQ0NDhkMjEwLjVkNDcwZDE4N2Q0OTJkMTg2ZDUyNGQxODZkNTI3ZDE5My41ZDUzMC41ZDIwMWQ1MzRkMjIyLjVkNTQwZDI0NGQ1NDZkMjgzLjVkNTU2LjVkMzIzZDU2N2QzODcuNWQ1ODQuNWQ0NTJkNjAyZDU0NS41ZDYyOC41ZDYzOWQ2NTVkNzY4ZDY5MmQ3ODVkNzMxZDc3Ny41ZDc2NmQ3NzBkODAxZDc0NGQ4MzEuNWQ3MThkODYyZDY3Ny41ZDg4OWQ2MzdkOTE2ZDU5MGQ5MzcuNWQ1NDNkOTU5ZDQ5Mi41ZDk3NS41ZDQ0MmQ5OTJkMzk1LjVkMTAwMy41ZDM0OWQxMDE1ZDMxMC41ZDEwMjAuNWQyNzJkMTAyNmQyNDhkMTAyNWQyMjhkMTAyNWQxOTBkMTAxNy41ZDE1MmQxMDEwZDExNGQ5OTVkNzZkOTgwZDQ3LjVkOTU4LjVkMTlkOTM3ZDE5ZDkxMGhSM2Q4MjNSNGQ3ODVSNWQxOVI2ZDc2MFI3ZC0yUjhkNzQxUjlkNzc5UjEwZDU0MFIxMWk4M1IxMmQxOVIxM2Q4MjNSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTk1b1IxZDEyNjNSMmFkMTA0ZDEwMDdkMTAwZDEwMTJkODcuNWQxMDExZDc1ZDEwMTBkNjJkMTAwNWQ0OWQxMDAwZDM5LjVkOTkzLjVkMzBkOTg3ZDMyZDk4MmQ0MmQ5NTVkNjMuNWQ4OThkODVkODQxZDExMS41ZDc2OS41ZDEzOGQ2OThkMTY3LjVkNjE5ZDE5N2Q1NDBkMjIzLjVkNDY4LjVkMjUwZDM5N2QyNzFkMzQwLjVkMjkyZDI4NGQzMDJkMjU2ZDMxMGQyMzNkMzEzZDIxMy41ZDMxNmQxOTRkMzIyLjVkMTgwZDMyOWQxNjZkMzQyLjVkMTU4LjVkMzU2ZDE1MWQzODVkMTUxZDQyMWQxNzJkNDQ1ZDIwMC41ZDQ2OWQyMjlkNDg3ZDI2Mi41ZDUwNWQyOTZkNTE4LjVkMzMzZDUzMmQzNzBkNTQ1LjVkNDA3ZDU1OWQ0NDRkNTc0LjVkNDgwZDU5MGQ1MTZkNjEzZDU0N2Q2MjFkNTU5ZDYzNi41ZDU2M2Q2NTJkNTY3ZDY3MC41ZDU2Ny41ZDY4OWQ1NjhkNzA4LjVkNTY2LjVkNzI4ZDU2NWQ3NDRkNTY3ZDc2MGQ1NjlkNzcwLjVkNTc1LjVkNzgxZDU4MmQ3ODFkNTk4ZDc4NWQ2MTlkNzc3ZDYyOWQ3NjlkNjM5ZDc1NC41ZDY0Mi41ZDc0MGQ2NDZkNzIxLjVkNjQ1LjVkNzAzZDY0NWQ2ODcuNWQ2NDRkNjcyZDY0M2Q2NjJkNjQzLjVkNjUyZDY0NGQ2NTRkNjUwZDY2NmQ2ODdkNjgwLjVkNzMyZDY5NWQ3NzdkNzEzZDgyMmQ3MzFkODY3ZDc1MmQ5MDlkNzczZDk1MWQ3OThkOTgxZDc5M2Q5ODdkNzgwZDk5OC41ZDc2N2QxMDEwZDc1My41ZDEwMjAuNWQ3NDBkMTAzMWQ3MjguNWQxMDM4ZDcxN2QxMDQ1ZDcxNWQxMDQyZDUzOWQ2NzBkMTk4ZDc1NGQxOTNkNzc0ZDE4NC41ZDgwNi41ZDE3NmQ4MzlkMTY0LjVkODc1LjVkMTUzZDkxMmQxMzhkOTQ3LjVkMTIzZDk4M2QxMDRkMTAwN2QzNzRkMjk2ZDM2OGQzNDFkMzUxLjVkMzg5LjVkMzM1ZDQzOGQzMTQuNWQ0ODUuNWQyOTRkNTMzZDI3M2Q1NzcuNWQyNTJkNjIyZDIzNmQ2NTlkMjcyZDY1OWQzMDhkNjUxLjVkMzQ0ZDY0NGQzNzhkNjMyLjVkNDEyZDYyMWQ0NDRkNjA4ZDQ3NmQ1OTVkNTA1ZDU4NGQ1MDJkNTcwZDQ5NmQ1NDUuNWQ0OTBkNTIxZDQ4MS41ZDQ5Mi41ZDQ3M2Q0NjRkNDYyLjVkNDMzZDQ1MmQ0MDJkNDM4LjVkMzc1ZDQyNWQzNDhkNDA5ZDMyN2QzOTNkMzA2ZDM3NGQyOTZkMzk2ZDc4ZDM3MWQ1NmQzNTJkNDFkMzMzZDI2ZDMxMy41ZDI3LjVkMjk0ZDI5ZDI3MC41ZDUxLjVkMjQ3ZDc0ZDIxMWQxMjdkMjA3ZDEyN2QyMDBkMTI2ZDE5M2QxMjVkMTg2ZDEyMmQxNzlkMTE5ZDE3M2QxMTRkMTY3ZDEwOWQxNjVkMTAxZDE4NGQ0MWQyMjEuNWQtNWQyNTlkLTUxZDMwMWQtNjhkMzE4ZC03NWQzMzMuNWQtNjlkMzQ5ZC02M2QzNjQuNWQtNTAuNWQzODBkLTM4ZDM5NC41ZC0yMS41ZDQwOWQtNWQ0MjQuNWQxMGQ0NDBkMjVkNDU2LjVkMzVkNDczZDQ1ZDQ5MWQ0NWQ1MTlkNDVkNTM0LjVkMzYuNWQ1NTBkMjhkNTYzZDExLjVkNTc2ZC01ZDU5MS41ZC0yOWQ2MDdkLTUzZDYzNWQtODNkNjQzZC04M2Q2NTFkLTY5LjVkNjU5ZC01NmQ2NTlkLTQ2ZDY2NGQtMThkNjUzZDlkNjQyZDM2ZDYyMC41ZDU4ZDU5OWQ4MGQ1NjkuNWQ5NWQ1NDBkMTEwZDUwOWQxMTQuNWQ0NzhkMTE5ZDQ0OC41ZDExMWQ0MTlkMTAzZDM5NmQ3OGhSM2Q4MjBSNGQ3OThSNWQzMFI2ZDExMDdSN2QtMjFSOGQxMDc3UjlkNzc5UjEwZDU0MFIxMWkxOTVSMTJkMzBSMTNkODIwUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkyaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6ODJvUjFkMTI2M1IyYWQxODJkOTgyZDE4MmQ5OTJkMTc0LjVkOTk3ZDE2N2QxMDAyZDE1Ny41ZDEwMDRkMTQ4ZDEwMDZkMTM5ZDEwMDZkMTMwZDEwMDZkMTI2ZDEwMDZkMTAwZDEwMDZkODhkOTgwZDc2ZDk1NGQ3Mi41ZDkwNS41ZDY5ZDg1N2Q3MC41ZDc4OWQ3MmQ3MjFkNzMuNWQ2MzhkNzVkNTU1ZDcyLjVkNDU4LjVkNzBkMzYyZDU4ZDI1NmQ3MGQyMzVkODMuNWQyMzNkOTdkMjMxZDEwOWQyMzlkMTIxZDI0N2QxMzFkMjYwZDE0MWQyNzNkMTQ3ZDI4MmQxNzhkMjUyZDIzM2QyMzYuNWQyODhkMjIxZDM1Mi41ZDIxN2Q0MTdkMjEzZDQ4NGQyMjAuNWQ1NTFkMjI4ZDYwNmQyNDRkNjYxZDI2MGQ2OTcuNWQyODRkNzM0ZDMwOGQ3MzcuNWQzMzhkNzQxZDM2OGQ3MDVkNDAzZDY2OWQ0MzhkNTc4ZDQ3NmQ1NjRkNDgyZDUzNWQ0OTIuNWQ1MDZkNTAzZDQ2OWQ1MTUuNWQ0MzJkNTI4ZDM5Mi41ZDU0MmQzNTNkNTU2ZDMxN2Q1NjkuNWQyODFkNTgzZDI1NGQ1OTQuNWQyMjdkNjA2ZDIxNmQ2MTRkMjE2ZDYyMGQyMjFkNjI0LjVkMjI2ZDYyOWQyNDQuNWQ2MzkuNWQyNjNkNjUwZDMwMWQ2NzBkMzM5ZDY5MGQ0MDVkNzI2ZDQ3MWQ3NjJkNTcwZDgxNy41ZDY2OWQ4NzNkODExZDk1NWQ4MTZkOTU5ZDgyMy41ZDk2NGQ4MzFkOTY5ZDgzNy41ZDk3NmQ4NDRkOTgzZDg0OWQ5OTAuNWQ4NTRkOTk4ZDg1NGQxMDA3ZDg1NGQxMDIwZDg0NGQxMDI2LjVkODM0ZDEwMzNkODIwZDEwMzZkODA2ZDEwMzlkNzkxZDEwMzlkNzc2ZDEwMzlkNzY2ZDEwMzlkNzUxZDEwMzlkNzE1LjVkMTAxOGQ2ODBkOTk3ZDYzMWQ5NjQuNWQ1ODJkOTMyZDUyNGQ4OTJkNDY2ZDg1MmQ0MDZkODEzLjVkMzQ2ZDc3NWQyODhkNzQzLjVkMjMwZDcxMmQxODJkNjk1ZDE4MmQ5ODJkMTY0ZDM2MGQxNTVkMzc0ZDE1Mi41ZDM5Ny41ZDE1MGQ0MjFkMTUzLjVkNDQ2ZDE1N2Q0NzFkMTY0LjVkNDkzZDE3MmQ1MTVkMTgyZDUyNWQxOTNkNTI5ZDIyNC41ZDUyMi41ZDI1NmQ1MTZkMjk5ZDUwM2QzNDJkNDkwZDM5MWQ0NzEuNWQ0NDBkNDUzZDQ4NC41ZDQzMi41ZDUyOWQ0MTJkNTY0LjVkMzkxZDYwMGQzNzBkNjE1LjVkMzUxLjVkNjMxZDMzM2Q2MjIuNWQzMTguNWQ2MTRkMzA0ZDU3MGQyOTZkNTQ4ZDI5NmQ1MTIuNWQyOTUuNWQ0NzdkMjk1ZDQzNi41ZDI5NmQzOTZkMjk3ZDM1M2QzMDBkMzEwZDMwM2QyNzIuNWQzMTAuNWQyMzVkMzE4ZDIwNmQzMzBkMTc3ZDM0MmQxNjRkMzYwaFIzZDkxM1I0ZDg1NFI1ZDU4UjZkODExUjdkLTE1UjhkNzUzUjlkNzc5UjEwZDU0MFIxMWk4MlIxMmQ1OFIxM2Q5MTNSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTk0b1IxZDEyNjNSMmFkMTA0ZDEwMDdkMTAwZDEwMTJkODcuNWQxMDExZDc1ZDEwMTBkNjJkMTAwNWQ0OWQxMDAwZDM5LjVkOTkzLjVkMzBkOTg3ZDMyZDk4MmQ0MmQ5NTVkNjMuNWQ4OThkODVkODQxZDExMS41ZDc2OS41ZDEzOGQ2OThkMTY3LjVkNjE5ZDE5N2Q1NDBkMjIzLjVkNDY4LjVkMjUwZDM5N2QyNzFkMzQwLjVkMjkyZDI4NGQzMDJkMjU2ZDMxMGQyMzNkMzEzZDIxMy41ZDMxNmQxOTRkMzIyLjVkMTgwZDMyOWQxNjZkMzQyLjVkMTU4LjVkMzU2ZDE1MWQzODVkMTUxZDQyMWQxNzJkNDQ1ZDIwMC41ZDQ2OWQyMjlkNDg3ZDI2Mi41ZDUwNWQyOTZkNTE4LjVkMzMzZDUzMmQzNzBkNTQ1LjVkNDA3ZDU1OWQ0NDRkNTc0LjVkNDgwZDU5MGQ1MTZkNjEzZDU0N2Q2MjFkNTU5ZDYzNi41ZDU2M2Q2NTJkNTY3ZDY3MC41ZDU2Ny41ZDY4OWQ1NjhkNzA4LjVkNTY2LjVkNzI4ZDU2NWQ3NDRkNTY3ZDc2MGQ1NjlkNzcwLjVkNTc1LjVkNzgxZDU4MmQ3ODFkNTk4ZDc4NWQ2MTlkNzc3ZDYyOWQ3NjlkNjM5ZDc1NC41ZDY0Mi41ZDc0MGQ2NDZkNzIxLjVkNjQ1LjVkNzAzZDY0NWQ2ODcuNWQ2NDRkNjcyZDY0M2Q2NjJkNjQzLjVkNjUyZDY0NGQ2NTRkNjUwZDY2NmQ2ODdkNjgwLjVkNzMyZDY5NWQ3NzdkNzEzZDgyMmQ3MzFkODY3ZDc1MmQ5MDlkNzczZDk1MWQ3OThkOTgxZDc5M2Q5ODdkNzgwZDk5OC41ZDc2N2QxMDEwZDc1My41ZDEwMjAuNWQ3NDBkMTAzMWQ3MjguNWQxMDM4ZDcxN2QxMDQ1ZDcxNWQxMDQyZDUzOWQ2NzBkMTk4ZDc1NGQxOTNkNzc0ZDE4NC41ZDgwNi41ZDE3NmQ4MzlkMTY0LjVkODc1LjVkMTUzZDkxMmQxMzhkOTQ3LjVkMTIzZDk4M2QxMDRkMTAwN2QzNzRkMjk2ZDM2OGQzNDFkMzUxLjVkMzg5LjVkMzM1ZDQzOGQzMTQuNWQ0ODUuNWQyOTRkNTMzZDI3M2Q1NzcuNWQyNTJkNjIyZDIzNmQ2NTlkMjcyZDY1OWQzMDhkNjUxLjVkMzQ0ZDY0NGQzNzhkNjMyLjVkNDEyZDYyMWQ0NDRkNjA4ZDQ3NmQ1OTVkNTA1ZDU4NGQ1MDJkNTcwZDQ5NmQ1NDUuNWQ0OTBkNTIxZDQ4MS41ZDQ5Mi41ZDQ3M2Q0NjRkNDYyLjVkNDMzZDQ1MmQ0MDJkNDM4LjVkMzc1ZDQyNWQzNDhkNDA5ZDMyN2QzOTNkMzA2ZDM3NGQyOTZkMTk3ZDEzNWQxOTdkMTIwZDIxMGQ5N2QyMjNkNzRkMjQ3ZDQ5LjVkMjcxZDI1ZDMwNC41ZDAuNWQzMzhkLTI0ZDM3OGQtNDJkNDA1ZC0yNWQ0MjUuNWQtMTEuNWQ0NDZkMmQ0NjRkMTguNWQ0ODJkMzVkNTAwLjVkNThkNTE5ZDgxZDU0MmQxMThkNTUwZDEzM2Q1NTAuNWQxNDZkNTUxZDE1OWQ1NDVkMTY3ZDUzOWQxNzVkNTI3LjVkMTc2ZDUxNmQxNzdkNTAwZDE2OGQ0ODJkMTU1ZDQ3MmQxNDhkNDYyZDE0MWQ0NTZkMTM2LjVkNDUwZDEzMmQ0NDUuNWQxMjdkNDQxZDEyMmQ0MzIuNWQxMTMuNWQ0MjRkMTA1ZDQwOS41ZDkwZDM5NWQ3NWQzNjlkNDlkMzQyZDY4ZDMyMi41ZDg0ZDMwM2QxMDBkMjg5ZDExNS41ZDI3NWQxMzFkMjY1LjVkMTQ2LjVkMjU2ZDE2MmQyNDlkMTgwZDIyNmQxODBkMjExLjVkMTczLjVkMTk3ZDE2N2QxOTdkMTM1aFIzZDgyMFI0ZDc5OFI1ZDMwUjZkMTA2NlI3ZC0yMVI4ZDEwMzZSOWQ3NzlSMTBkNTQwUjExaTE5NFIxMmQzMFIxM2Q4MjBSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTJpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6ODFvUjFkMTI2M1IyYWQzNGQ3MzVkMzRkNjM5ZDYxLjVkNTQ4LjVkODlkNDU4ZDE0M2QzODhkMTk3ZDMxOGQyNzUuNWQyNzUuNWQzNTRkMjMzZDQ1NmQyMzNkNTU1ZDIyOGQ2MjZkMjU0LjVkNjk3ZDI4MWQ3NDEuNWQzMjguNWQ3ODZkMzc2ZDgwNi41ZDQzOWQ4MjdkNTAyZDgyNWQ1NzBkODIzZDYzOGQ4MDFkNzA1ZDc3OWQ3NzJkNzQwZDgyN2Q3MzZkODQ2ZDc0NC41ZDg1OWQ3NTNkODcyZDc2OGQ4ODFkNzgzZDg5MGQ4MDEuNWQ4OTcuNWQ4MjBkOTA1ZDgzNS41ZDkxMy41ZDg1MWQ5MjJkODYwZDkzMy41ZDg2OWQ5NDVkODY1ZDk2MmQ4NjBkOTY1ZDg1MGQ5NjlkODQwZDk3M2Q4MzBkOTc2ZDgyMGQ5NzlkODEyZDk4MWQ4MDRkOTgzZDgwM2Q5ODJkNzg3ZDk3OWQ3NzMuNWQ5NjkuNWQ3NjBkOTYwZDc0Ni41ZDk0OS41ZDczM2Q5MzlkNzE5ZDkzMGQ3MDVkOTIxZDY4OWQ5MTlkNjYzZDk0M2Q2MjVkOTYyLjVkNTg3ZDk4MmQ1NDIuNWQ5OTZkNDk4ZDEwMTBkNDQ5LjVkMTAxNy41ZDQwMWQxMDI1ZDM1NmQxMDI1ZDI5NmQxMDI1ZDIzOC41ZDEwMDNkMTgxZDk4MWQxMzUuNWQ5NDJkOTBkOTAzZDYyZDg1MGQzNGQ3OTdkMzRkNzM1ZDEzNmQ3MDNkMTM2ZDc3MWQxNTdkODE3ZDE3OGQ4NjNkMjE1LjVkODkxZDI1M2Q5MTlkMzA0ZDkzMWQzNTVkOTQzZDQxNmQ5NDNkNDQwZDk0M2Q0NjguNWQ5NDIuNWQ0OTdkOTQyZDUyNWQ5MzYuNWQ1NTNkOTMxZDU3N2Q5MThkNjAxZDkwNWQ2MTZkODc5ZDM4OGQ2NzFkMzg3ZDY3MWQzODYuNWQ2NjcuNWQzODZkNjY0ZDM4NmQ2NjJkMzg2ZDY1MGQzOTFkNjQzLjVkMzk2ZDYzN2Q0MDRkNjMzLjVkNDEyZDYzMGQ0MjFkNjI5ZDQzMGQ2MjhkNDM5ZDYyOGQ0NzNkNjI4ZDUwMy41ZDY0OGQ1MzRkNjY4ZDU2Mi41ZDY5NWQ1OTFkNzIyZDYxOS41ZDc1MC41ZDY0OGQ3NzlkNjc4ZDc5NmQ3MDNkNzU2ZDcxNi41ZDcyMS41ZDczMGQ2ODdkNzM2ZDY1My41ZDc0MmQ2MjBkNzQzZDU4NGQ3NDRkNTQ4ZDc0NGQ1MDVkNzM3ZDQ2MGQ3MjIuNWQ0MjRkNzA4ZDM4OGQ2NzJkMzYyLjVkNjM2ZDMzN2Q1NzAuNWQzMjRkNTA1ZDMxMWQzOTdkMzEyZDM1NmQzMTJkMzIwLjVkMzMyLjVkMjg1ZDM1M2QyNTZkMzg2ZDIyN2Q0MTlkMjA0LjVkNDYxZDE4MmQ1MDNkMTY3ZDU0Ni41ZDE1MmQ1OTBkMTQ0ZDYzMWQxMzZkNjcyZDEzNmQ3MDNoUjNkOTEzUjRkODY5UjVkMzRSNmQ3OTZSN2QtMVI4ZDc2MlI5ZDc3OVIxMGQ1NDBSMTFpODFSMTJkMzRSMTNkOTEzUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTkzb1IxZDEyNjNSMmFkMTA0ZDEwMDdkMTAwZDEwMTJkODcuNWQxMDExZDc1ZDEwMTBkNjJkMTAwNWQ0OWQxMDAwZDM5LjVkOTkzLjVkMzBkOTg3ZDMyZDk4MmQ0MmQ5NTVkNjMuNWQ4OThkODVkODQxZDExMS41ZDc2OS41ZDEzOGQ2OThkMTY3LjVkNjE5ZDE5N2Q1NDBkMjIzLjVkNDY4LjVkMjUwZDM5N2QyNzFkMzQwLjVkMjkyZDI4NGQzMDJkMjU2ZDMxMGQyMzNkMzEzZDIxMy41ZDMxNmQxOTRkMzIyLjVkMTgwZDMyOWQxNjZkMzQyLjVkMTU4LjVkMzU2ZDE1MWQzODVkMTUxZDQyMWQxNzJkNDQ1ZDIwMC41ZDQ2OWQyMjlkNDg3ZDI2Mi41ZDUwNWQyOTZkNTE4LjVkMzMzZDUzMmQzNzBkNTQ1LjVkNDA3ZDU1OWQ0NDRkNTc0LjVkNDgwZDU5MGQ1MTZkNjEzZDU0N2Q2MjFkNTU5ZDYzNi41ZDU2M2Q2NTJkNTY3ZDY3MC41ZDU2Ny41ZDY4OWQ1NjhkNzA4LjVkNTY2LjVkNzI4ZDU2NWQ3NDRkNTY3ZDc2MGQ1NjlkNzcwLjVkNTc1LjVkNzgxZDU4MmQ3ODFkNTk4ZDc4NWQ2MTlkNzc3ZDYyOWQ3NjlkNjM5ZDc1NC41ZDY0Mi41ZDc0MGQ2NDZkNzIxLjVkNjQ1LjVkNzAzZDY0NWQ2ODcuNWQ2NDRkNjcyZDY0M2Q2NjJkNjQzLjVkNjUyZDY0NGQ2NTRkNjUwZDY2NmQ2ODdkNjgwLjVkNzMyZDY5NWQ3NzdkNzEzZDgyMmQ3MzFkODY3ZDc1MmQ5MDlkNzczZDk1MWQ3OThkOTgxZDc5M2Q5ODdkNzgwZDk5OC41ZDc2N2QxMDEwZDc1My41ZDEwMjAuNWQ3NDBkMTAzMWQ3MjguNWQxMDM4ZDcxN2QxMDQ1ZDcxNWQxMDQyZDUzOWQ2NzBkMTk4ZDc1NGQxOTNkNzc0ZDE4NC41ZDgwNi41ZDE3NmQ4MzlkMTY0LjVkODc1LjVkMTUzZDkxMmQxMzhkOTQ3LjVkMTIzZDk4M2QxMDRkMTAwN2QzNzRkMjk2ZDM2OGQzNDFkMzUxLjVkMzg5LjVkMzM1ZDQzOGQzMTQuNWQ0ODUuNWQyOTRkNTMzZDI3M2Q1NzcuNWQyNTJkNjIyZDIzNmQ2NTlkMjcyZDY1OWQzMDhkNjUxLjVkMzQ0ZDY0NGQzNzhkNjMyLjVkNDEyZDYyMWQ0NDRkNjA4ZDQ3NmQ1OTVkNTA1ZDU4NGQ1MDJkNTcwZDQ5NmQ1NDUuNWQ0OTBkNTIxZDQ4MS41ZDQ5Mi41ZDQ3M2Q0NjRkNDYyLjVkNDMzZDQ1MmQ0MDJkNDM4LjVkMzc1ZDQyNWQzNDhkNDA5ZDMyN2QzOTNkMzA2ZDM3NGQyOTZkMzQzZC01MWQzNTZkLTY3ZDM2OGQtNzJkMzgwZC03N2QzODhkLTczLjVkMzk2ZC03MGQ0MDFkLTYwLjVkNDA2ZC01MWQ0MDZkLTQwZDQwM2QtMjhkMzk4LjVkLTE4LjVkMzk0ZC05ZDM4M2Q0ZDM3MmQxN2QzNTFkMzUuNWQzMzBkNTRkMjk2ZDgyZDI1N2Q0N2QzNDNkLTUxaFIzZDgyMFI0ZDc5OFI1ZDMwUjZkMTEwMVI3ZC0yMVI4ZDEwNzFSOWQ3NzlSMTBkNTQwUjExaTE5M1IxMmQzMFIxM2Q4MjBSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTJpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kyaTJoZzo4MG9SMWQxMjYzUjJhZDQ3MGQyNTZkNDg1ZDI1NmQ1MTVkMjU4ZDU0NWQyNjBkNTgxZDI2NmQ2MTdkMjcyZDY1NWQyODJkNjkzZDI5MmQ3MjQuNWQzMDhkNzU2ZDMyNGQ3NzZkMzQ3ZDc5NmQzNzBkNzk2ZDQwMWQ3OTZkNDY5ZDc2MC41ZDUxOS41ZDcyNWQ1NzBkNjY4ZDYwN2Q2MTFkNjQ0ZDU0MGQ2NjhkNDY5ZDY5MmQzOTcuNWQ3MDZkMzI2ZDcyMGQyNjEuNWQ3MjUuNWQxOTdkNzMxZDE1M2Q3MzFkMTQ3ZDEwMTFkMTQ3ZDEwMjBkMTM0ZDEwMjNkMTIxZDEwMjZkMTAzLjVkMTAyNmQ4NmQxMDI2ZDcwZDEwMjQuNWQ1NGQxMDIzZDQ4ZDEwMjRkNDhkOTUyZDQ3LjVkODgxZDQ3ZDgxMGQ0OGQ3MzNkNTVkNjM5ZDU4ZDU2Ni41ZDYxZDQ5NGQ3MS41ZDQ0MWQ4MmQzODhkMTA0LjVkMzUyLjVkMTI3ZDMxN2QxNzEuNWQyOTUuNWQyMTZkMjc0ZDI4OGQyNjVkMzYwZDI1NmQ0NzBkMjU2ZDE3M2Q0NTlkMTcxZDQ3NGQxNjZkNDk1ZDE2MWQ1MTZkMTU2LjVkNTM4LjVkMTUyZDU2MWQxNTAuNWQ1ODIuNWQxNDlkNjA0ZDE1NWQ2MjAuNWQxNjFkNjM3ZDE3Ni41ZDY0NmQxOTJkNjU1ZDIyMWQ2NTFkMjUwZDY1MWQyOTdkNjQ3LjVkMzQ0ZDY0NGQzOTYuNWQ2MzUuNWQ0NDlkNjI3ZDUwMmQ2MTEuNWQ1NTVkNTk2ZDU5Ny41ZDU3Mi41ZDY0MGQ1NDlkNjY3ZDUxNi41ZDY5NGQ0ODRkNjk0ZDQ0MGQ2ODdkNDA4ZDY2MS41ZDM4NS41ZDYzNmQzNjNkNTk4LjVkMzUwZDU2MWQzMzdkNTE2ZDMzMi41ZDQ3MWQzMjhkNDI0LjVkMzMxZDM3OGQzMzRkMzM0ZDM0NGQyOTBkMzU0ZDI1NWQzNzAuNWQyMjBkMzg3ZDE5OGQ0MDkuNWQxNzZkNDMyZDE3M2Q0NTloUjNkODE2UjRkNzk2UjVkNDdSNmQ3NjhSN2QtMlI4ZDcyMVI5ZDc3OVIxMGQ1NDBSMTFpODBSMTJkNDdSMTNkODE2UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxOTJvUjFkMTI2M1IyYWQzNTNkNzU4ZDM0OWQ3NjNkMzM2LjVkNzYyZDMyNGQ3NjFkMzExZDc1NmQyOThkNzUxZDI4OC41ZDc0NC41ZDI3OWQ3MzhkMjgxZDczM2QyOTFkNzA2ZDMxMi41ZDY0OWQzMzRkNTkyZDM2MC41ZDUyMC41ZDM4N2Q0NDlkNDE2LjVkMzcwZDQ0NmQyOTFkNDcyLjVkMjE5LjVkNDk5ZDE0OGQ1MjBkOTEuNWQ1NDFkMzVkNTUxZDdkNTU5ZC0xNmQ1NjJkLTM1LjVkNTY1ZC01NWQ1NzEuNWQtNjlkNTc4ZC04M2Q1OTEuNWQtOTAuNWQ2MDVkLTk4ZDYzNGQtOThkNjcwZC03N2Q2OTRkLTQ4LjVkNzE4ZC0yMGQ3MzZkMTMuNWQ3NTRkNDdkNzY3LjVkODRkNzgxZDEyMWQ3OTQuNWQxNThkODA4ZDE5NWQ4MjMuNWQyMzFkODM5ZDI2N2Q4NjJkMjk4ZDg3MGQzMTBkODg1LjVkMzE0ZDkwMWQzMThkOTE5LjVkMzE4LjVkOTM4ZDMxOWQ5NTcuNWQzMTcuNWQ5NzdkMzE2ZDk5M2QzMThkMTAwOWQzMjBkMTAxOS41ZDMyNi41ZDEwMzBkMzMzZDEwMzBkMzQ5ZDEwMzRkMzcwZDEwMjZkMzgwZDEwMThkMzkwZDEwMDMuNWQzOTMuNWQ5ODlkMzk3ZDk3MC41ZDM5Ni41ZDk1MmQzOTZkOTM2LjVkMzk1ZDkyMWQzOTRkOTExZDM5NC41ZDkwMWQzOTVkOTAzZDQwMWQ5MTVkNDM4ZDkyOS41ZDQ4M2Q5NDRkNTI4ZDk2MmQ1NzNkOTgwZDYxOGQxMDAxZDY2MGQxMDIyZDcwMmQxMDQ3ZDczMmQxMDQyZDczOGQxMDI5ZDc0OS41ZDEwMTZkNzYxZDEwMDIuNWQ3NzEuNWQ5ODlkNzgyZDk3Ny41ZDc4OWQ5NjZkNzk2ZDk2NGQ3OTNkNzg4ZDQyMWQ0NDdkNTA1ZDQ0MmQ1MjVkNDMzLjVkNTU3LjVkNDI1ZDU5MGQ0MTMuNWQ2MjYuNWQ0MDJkNjYzZDM4N2Q2OTguNWQzNzJkNzM0ZDM1M2Q3NThkNjIzZDQ3ZDYxN2Q5MmQ2MDAuNWQxNDAuNWQ1ODRkMTg5ZDU2My41ZDIzNi41ZDU0M2QyODRkNTIyZDMyOC41ZDUwMWQzNzNkNDg1ZDQxMGQ1MjFkNDEwZDU1N2Q0MDIuNWQ1OTNkMzk1ZDYyN2QzODMuNWQ2NjFkMzcyZDY5M2QzNTlkNzI1ZDM0NmQ3NTRkMzM1ZDc1MWQzMjFkNzQ1ZDI5Ni41ZDczOWQyNzJkNzMwLjVkMjQzLjVkNzIyZDIxNWQ3MTEuNWQxODRkNzAxZDE1M2Q2ODcuNWQxMjZkNjc0ZDk5ZDY1OGQ3OGQ2NDJkNTdkNjIzZDQ3ZDQ0N2QzOWQ0MjZkOTNkMzk0ZDcxZDM3NWQ1N2QzNTZkNDNkMzQ1ZDMyZDMzNGQyMWQzMjhkMTEuNWQzMjJkMmQzMThkLTExZDMxNmQtMjRkMzE3LjVkLTM2ZDMxOWQtNDhkMzI1ZC01NC41ZDMzMWQtNjFkMzQwLjVkLTU5LjVkMzUwZC01OGQzNjNkLTQzZDQ0N2QzOWhSM2Q4MjBSNGQ3OTFSNWQyM1I2ZDEwODVSN2QtMjhSOGQxMDYyUjlkNzc5UjEwZDU0MFIxMWkxOTJSMTJkMjNSMTNkODIwUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkyaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkyaTNpM2kzaTNpM2kzaTNpM2kyaGc6NzlvUjFkMTI2M1IyYWQyOGQ2NTBkMjhkNTY0ZDU3LjVkNDkzZDg3ZDQyMmQxMzhkMzcxLjVkMTg5ZDMyMWQyNTlkMjkzZDMyOWQyNjVkNDEwZDI2NWQ0ODhkMjY1ZDU2MS41ZDI4NC41ZDYzNWQzMDRkNjkyZDM0NWQ3NDlkMzg2ZDc4My41ZDQ0OS41ZDgxOGQ1MTNkODE4ZDYwMmQ4MThkODA4ZDcyMS41ZDkwN2Q2MjVkMTAwNmQ0MjRkMTAwNmQzMzlkMTAwNmQyNjYuNWQ5ODZkMTk0ZDk2NmQxNDFkOTIzLjVkODhkODgxZDU4ZDgxMy41ZDI4ZDc0NmQyOGQ2NTBkMTMwZDYzMGQxMzBkNzc5ZDIwNC41ZDg1MmQyNzlkOTI1ZDQyN2Q5MjVkNTAxZDkyNWQ1NjJkOTAyZDYyM2Q4NzlkNjY2ZDgzNy41ZDcwOWQ3OTZkNzMyLjVkNzM4LjVkNzU2ZDY4MWQ3NTZkNjExZDc1NmQ1NDFkNzI2ZDQ5MS41ZDY5NmQ0NDJkNjQ4ZDQxMC41ZDYwMGQzNzlkNTM4LjVkMzY1ZDQ3N2QzNTFkNDE0ZDM1MWQzNThkMzUxZDMwNi41ZDM3M2QyNTVkMzk1ZDIxNmQ0MzIuNWQxNzdkNDcwZDE1My41ZDUyMWQxMzBkNTcyZDEzMGQ2MzBoUjNkODU4UjRkODE4UjVkMjhSNmQ3NTlSN2QxOFI4ZDczMVI5ZDc3OVIxMGQ1NDBSMTFpNzlSMTJkMjhSMTNkODU4UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjE5MW9SMWQxMjYzUjJhZDMwN2QyMDNkMzA3ZDE2MGQzNTFkMTYwZDM2OWQxNTVkMzgwLjVkMTYxZDM5MmQxNjdkMzk4ZDE3OGQ0MDRkMTg5ZDQwNGQyMDMuNWQ0MDRkMjE4ZDM5OGQyMjlkMzkyZDI0MGQzODBkMjQ2ZDM2OGQyNTJkMzUxZDI0N2QzMDdkMjQ3ZDMwN2QyMDNkMTYzZC0xODFkMTg1ZC0xOTRkMjIyLjVkLTIxNGQyNjBkLTIzNGQzMDIuNWQtMjU4LjVkMzQ1ZC0yODNkMzg5ZC0zMTFkNDMzZC0zMzlkNDY4ZC0zNjhkNTAzZC0zOTdkNTI0LjVkLTQyNS41ZDU0NmQtNDU0ZDU0My41ZC00NzkuNWQ1NDFkLTUwNWQ1MTFkLTUyN2Q0ODFkLTU0OWQ0MTNkLTU2NWQzNjhkLTU2NWQzMjVkLTU1OC41ZDI4MmQtNTUyZDIzOS41ZC01NDMuNWQxOTdkLTUzNWQxNTQuNWQtNTI4LjVkMTEyZC01MjJkNjlkLTUyMmQ2MmQtNTIyZDU0ZC01MjcuNWQ0NmQtNTMzZDM4LjVkLTU0MWQzMWQtNTQ5ZDI1ZC01NTkuNWQxOWQtNTcwZDE3ZC01NzlkMTEzZC02MTBkMjAyLjVkLTYyMS41ZDI5MmQtNjMzZDM2Ny41ZC02MjcuNWQ0NDNkLTYyMmQ1MDFkLTYwMS41ZDU1OWQtNTgxZDU5MWQtNTQ4LjVkNjIzZC01MTZkNjI1LjVkLTQ3My41ZDYyOGQtNDMxZDU5NC41ZC0zODJkNTYxZC0zMzNkNDg2LjVkLTI3OWQ0MTJkLTIyNWQyODlkLTE3MGQ0MzNkLTEyOWQ0MzNkLTEwMGQ0MjJkLTk5ZDM5NC41ZC05Ny41ZDM2N2QtOTZkMzMzZC05Ni41ZDI5OWQtOTdkMjY0ZC0xMDAuNWQyMjlkLTEwNGQyMDNkLTExMy41ZDE3N2QtMTIzZDE2NC41ZC0xMzlkMTUyZC0xNTVkMTYzZC0xODFoUjNkNjQ3UjRkNjM1UjVkMTdSNmQ3ODVSN2QxN1I4ZDc2OFI5ZDc3OVIxMGQ1NDBSMTFpMTkxUjEyZDE3UjEzZDY0N1IxNGFpMWkzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTJpM2kzaTNpM2kzaTNoZzo3OG9SMWQxMjYzUjJhZDYzOGQxMDIwZDU5MWQ5MzhkNTMwLjVkODU0LjVkNDcwZDc3MWQ0MDZkNjg2LjVkMzQyZDYwMmQyNzlkNTE4ZDIxNmQ0MzRkMTY0ZDM1MWQxNTVkMzkwZDE1MGQ0NDJkMTQ1ZDQ5NGQxNDIuNWQ1NTNkMTQwZDYxMmQxMzkuNWQ2NzQuNWQxMzlkNzM3ZDEzOWQ3OTcuNWQxMzlkODU4ZDEzOGQ5MTNkMTM3ZDk2OGQxMzRkMTAxMWQxMTdkMTAyNmQxMDMuNWQxMDMwZDkwZDEwMzRkNzFkMTAzNGQ1M2QxMDM0ZDQxZDEwMjcuNWQyOWQxMDIxZDMxZDk5MWQzN2Q5NDBkNDJkODczLjVkNDdkODA3ZDUwLjVkNzMzLjVkNTRkNjYwZDU2ZDU4MmQ1OGQ1MDRkNTlkNDMwLjVkNjBkMzU3ZDYwZDI5MC41ZDYwZDIyNGQ1OGQxNzNkNzhkMTU0ZDkxZDE0Mi41ZDEwNGQxMzFkMTE2LjVkMTMxZDEyOWQxMzFkMTQ0ZDE0NGQxNTlkMTU3ZDE4MmQxODhkMjA1ZDIxOWQyNDBkMjY5ZDI3NWQzMTlkMzI3ZDM5M2QzNzlkNDY3ZDQ1Mi41ZDU2Ni41ZDUyNmQ2NjZkNjI2ZDc5NWQ2NTBkMTczZDY2M2QxNDhkNjc3ZDEzOC41ZDY5MWQxMjlkNzE0ZDEyOWQ3MzVkMTI5ZDc0NGQxNDQuNWQ3NTNkMTYwZDc1NmQxODFkNzU5ZDIwMmQ3NTcuNWQyMjNkNzU2ZDI0NGQ3NTZkMjU1ZDc1NmQyOTRkNzU3ZDM2MGQ3NThkNDI2ZDc1OC41ZDUwNGQ3NTlkNTgyZDc1OC41ZDY2NC41ZDc1OGQ3NDdkNzU1ZDgyMGQ3NTJkODkzZDc0NmQ5NDguNWQ3NDBkMTAwNGQ3MjlkMTAyOGQ2MzhkMTAyMGhSM2Q4MDNSNGQ3NTlSNWQyOVI2ZDg5NVI3ZC0xMFI4ZDg2NlI5ZDc3OVIxMGQ1NDBSMTFpNzhSMTJkMjlSMTNkODAzUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaGc6MTkwb1IxZDEyNjNSMmFkMTg5ZDcwMWQyNjBkNjgzZDMxOGQ2NTMuNWQzNzZkNjI0ZDQxOGQ1ODlkNDYwZDU1NGQ0ODVkNTE4ZDUxMGQ0ODJkNTE0LjVkNDUyZDUxOWQ0MjJkNTAyLjVkNDAxLjVkNDg2ZDM4MWQ0NDQuNWQzNzhkNDAzZDM3NWQzMzUuNWQzOTIuNWQyNjhkNDEwZDE3MmQ0NTZkMTI4ZDQwMGQxNTJkMzg4ZDE4OGQzNzFkMjI0ZDM1NGQyNjRkMzMzZDMwNGQzMTJkMzQ0LjVkMjg5ZDM4NWQyNjZkNDE5ZDI0M2Q0NTNkMjIwZDQ3Ni41ZDE5OGQ1MDBkMTc2ZDUwNS41ZDE1OGQ1MTFkMTQwZDQ5NWQxMjYuNWQ0NzlkMTEzZDQzNWQxMDZkMzgwZDEwNmQzMjhkMTE3LjVkMjc2ZDEyOWQyMjQuNWQxNDIuNWQxNzNkMTU2ZDEyMS41ZDE2N2Q3MGQxNzhkMTdkMTc4ZDE3ZDE3MWQxNy41ZDE2MWQxOGQxNTFkMjAuNWQxNDAuNWQyM2QxMzBkMjguNWQxMjEuNWQzNGQxMTNkNDVkMTA5ZDk4ZDk2ZDE1Ni41ZDgxLjVkMjE1ZDY3ZDI3My41ZDU1ZDMzMmQ0M2QzODdkMzYuNWQ0NDJkMzBkNDg3ZDMzZDUzMmQzNmQ1NjMuNWQ1MS41ZDU5NWQ2N2Q2MDdkOThkNjA3ZDEzMWQ1ODhkMTYyZDU2OWQxOTNkNTQyZDIyMWQ1MTVkMjQ5ZDQ4NS41ZDI3My41ZDQ1NmQyOThkNDM1ZDMxN2Q1MTdkMzE4ZDU2MWQzMzhkNjA1ZDM1OGQ2MThkMzg5ZDYzMWQ0MjBkNjE4LjVkNDU5LjVkNjA2ZDQ5OWQ1NzZkNTM5ZDU0NmQ1NzlkNTAzZDYxNi41ZDQ2MGQ2NTRkNDEyLjVkNjgyZDM2NWQ3MTBkMzE3ZDcyNC41ZDI2OWQ3MzlkMjMwZDczM2QyMTZkNzMzZDIwMi41ZDcyNmQxODlkNzE5ZDE4OWQ3MDFkMjUyZDk5N2QyNTRkOTg5ZDI3Ni41ZDk1MWQyOTlkOTEzZDMzNWQ4NTYuNWQzNzFkODAwZDQxNi41ZDcyOS41ZDQ2MmQ2NTlkNTA5LjVkNTg2LjVkNTU3ZDUxNGQ2MDIuNWQ0NDQuNWQ2NDhkMzc1ZDY4NWQzMTkuNWQ3MjJkMjY0ZDc0NS41ZDIyOC41ZDc2OWQxOTNkNzczZDE4OGQ3ODNkMTk0ZDc3NWQyMjdkNzY3ZDI2MGQ3NDVkMzEyLjVkNzIzZDM2NWQ2ODkuNWQ0MzEuNWQ2NTZkNDk4ZDYxNS41ZDU3MGQ1NzVkNjQyZDUzMGQ3MTQuNWQ0ODVkNzg3ZDQ0MGQ4NTEuNWQzOTVkOTE2ZDM1Mi41ZDk2Ny41ZDMxMGQxMDE5ZDI3NWQxMDQ5ZDI2NmQxMDQ5ZDI2MWQxMDQyLjVkMjU2ZDEwMzZkMjU0ZDEwMjdkMjUyZDEwMThkMjUyZDEwMDkuNWQyNTJkMTAwMWQyNTJkOTk3aFIzZDExMDRSNGQxMDY3UjVkMTNSNmQ4MzZSN2QtMjVSOGQ4MjNSOWQ3NzlSMTBkNTQwUjExaTE5MFIxMmQxM1IxM2QxMTA0UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6NzdvUjFkMTI2M1IyYWQ5MDZkOTYyZDkwNGQ5NDRkODk5LjVkOTA2LjVkODk1ZDg2OWQ4ODlkODIyZDg4M2Q3NzVkODc2LjVkNzIzZDg3MGQ2NzFkODYzLjVkNjI0ZDg1N2Q1NzdkODUyZDUzOS41ZDg0N2Q1MDJkODQ1ZDQ4NGQ4NDVkNDU4ZDg0My41ZDQzN2Q4NDJkNDE2ZDgzMy41ZDQxMS41ZDgyNWQ0MDdkODA3ZDQyNGQ3ODlkNDQxZDc1Ni41ZDQ5MWQ3MjRkNTQxZDY3NC41ZDYzMGQ2MjVkNzE5ZDU1NGQ4NThkNTQ3ZDg3MmQ1MzQuNWQ4NzYuNWQ1MjJkODgxZDUwNy41ZDg3Mi41ZDQ5M2Q4NjRkNDc3LjVkODQwLjVkNDYyZDgxN2Q0NTBkNzc1ZDIyMGQyODZkMjEyZDMwMWQyMDVkMzM0ZDE5OGQzNjdkMTkyZDQwOS41ZDE4NmQ0NTJkMTgxZDUwMC41ZDE3NmQ1NDlkMTcyZDU5NS41ZDE2OGQ2NDJkMTY1ZDY4My41ZDE2MmQ3MjVkMTYwZDc1NGQxNTVkNzg2ZDE1NS41ZDgxNi41ZDE1NmQ4NDdkMTU3LjVkODczLjVkMTU5ZDkwMGQxNTlkOTIyZDE1OWQ5NDRkMTUxLjVkOTU4LjVkMTQ0ZDk3M2QxMjYuNWQ5ODBkMTA5ZDk4N2Q3NmQ5ODRkNTVkOTg0ZDQ0ZDk3My41ZDMzZDk2M2QzNWQ5NDFkNDBkOTAyZDQ3ZDg0MC41ZDU0ZDc3OWQ2M2Q3MDguNWQ3MmQ2MzhkODFkNTY1LjVkOTBkNDkzZDk4ZDQzMi41ZDEwNmQzNzJkMTExZDMyOS41ZDExNmQyODdkMTE4ZDI3NmQxMjJkMjQ4ZDEyN2QyMjhkMTMyZDIwOGQxNDJkMTk1ZDE1MmQxODJkMTY5ZDE3Ni41ZDE4NmQxNzFkMjE0ZDE3MWQyNTJkMTkwZDI4NC41ZDIzMGQzMTdkMjcwZDM0NWQzMjAuNWQzNzNkMzcxZDM5OGQ0MjYuNWQ0MjNkNDgyZDQ0NS41ZDUzMS41ZDQ2OGQ1ODFkNDg5LjVkNjE4LjVkNTExZDY1NmQ1MzJkNjcxZDc4MmQyMzZkODE2ZDIxMWQ4NDEuNWQyMTguNWQ4NjdkMjI2ZDg4NmQyNThkOTA1ZDI5MGQ5MTlkMzQyZDkzM2QzOTRkOTQ0ZDQ1NmQ5NTVkNTE4ZDk2M2Q1ODYuNWQ5NzFkNjU1ZDk3OC41ZDcyMGQ5ODZkNzg1ZDk5NGQ4NDIuNWQxMDAyZDkwMGQxMDEyZDk0MWQxMDE5ZDk4M2QxMDA1LjVkMTAwMi41ZDk5MmQxMDIyZDk3MmQxMDIyZDk1MmQxMDIyZDkzMmQxMDA2ZDkxMmQ5OTBkOTA2ZDk2MmhSM2QxMDU5UjRkMTAxOVI1ZDMzUjZkODUzUjdkMlI4ZDgyMFI5ZDc3OVIxMGQ1NDBSMTFpNzdSMTJkMzNSMTNkMTA1OVIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjE4OW9SMWQxMjYzUjJhZDYzZC0xNGQ2MWQtNDJkNzMuNWQtNDkuNWQ4NmQtNTdkMTAzZC01N2QxMTdkLTU3ZDEyOWQtNTRkMTQxZC01MWQxNDZkLTM0ZDEyNWQ2MDhkMTI0ZDYyMGQxMTMuNWQ2MjlkMTAzZDYzOGQ5MGQ2NDEuNWQ3N2Q2NDVkNjMuNWQ2NDIuNWQ1MGQ2NDBkNDNkNjMxZDQ0ZDYwN2Q0NS41ZDU1NmQ0N2Q1MDVkNDlkNDQxLjVkNTFkMzc4ZDUzZDMwOGQ1NWQyMzhkNTdkMTc0LjVkNTlkMTExZDYwLjVkNjAuNWQ2MmQxMGQ2M2QtMTRkMjlkOTcyZDMxZDk2NGQ1My41ZDkyNmQ3NmQ4ODhkMTEyZDgzMS41ZDE0OGQ3NzVkMTkzLjVkNzA0LjVkMjM5ZDYzNGQyODYuNWQ1NjEuNWQzMzRkNDg5ZDM3OS41ZDQxOS41ZDQyNWQzNTBkNDYyZDI5NC41ZDQ5OWQyMzlkNTIyLjVkMjAzLjVkNTQ2ZDE2OGQ1NTBkMTYzZDU2MGQxNjlkNTUyZDIwMmQ1NDRkMjM1ZDUyMmQyODcuNWQ1MDBkMzQwZDQ2Ni41ZDQwNi41ZDQzM2Q0NzNkMzkyLjVkNTQ1ZDM1MmQ2MTdkMzA3ZDY4OS41ZDI2MmQ3NjJkMjE3ZDgyNi41ZDE3MmQ4OTFkMTI5LjVkOTQyLjVkODdkOTk0ZDUyZDEwMjRkNDNkMTAyNGQzOGQxMDE3LjVkMzNkMTAxMWQzMWQxMDAyZDI5ZDk5M2QyOWQ5ODQuNWQyOWQ5NzZkMjlkOTcyaFIzZDgzMFI0ZDgxMlI1ZDI5UjZkODYxUjdkMFI4ZDgzMlI5ZDc3OVIxMGQ1NDBSMTFpMTg5UjEyZDI5UjEzZDgzMFIxNGFpMWkzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjc2b1IxZDEyNjNSMmFkNjlkOTk4ZDgwZDk1NWQ4NmQ4ODVkOTJkODE1ZDk1LjVkNzMyLjVkOTlkNjUwZDk5LjVkNTYyLjVkMTAwZDQ3NWQ5OS41ZDM5N2Q5OWQzMTlkOTguNWQyNThkOThkMTk3ZDk4ZDE2N2QxOThkMTcwZDE4NmQ5MDNkODQ1ZDkyMWQ4NjZkOTI3ZDg2NGQ5NDNkODYyZDk1OWQ4NDVkOTc0LjVkODI4ZDk5MGQ3OTkuNWQxMDAwZDc3MWQxMDEwZDc0MGQxMDA0ZDY5ZDk5OGhSM2Q4ODZSNGQ4NjZSNWQ2OVI2ZDg1N1I3ZDE0UjhkNzg4UjlkNzc5UjEwZDU0MFIxMWk3NlIxMmQ2OVIxM2Q4ODZSMTRhaTFpM2kzaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kyaGc6MTg4b1IxZDEyNjNSMmFkMTMwZC0zOGQxMjhkLTY2ZDE0MC41ZC03My41ZDE1M2QtODFkMTcwZC04MWQxODRkLTgxZDE5NmQtNzhkMjA4ZC03NWQyMTNkLTU4ZDE5MmQ1ODRkMTkxZDU5NmQxODAuNWQ2MDVkMTcwZDYxNGQxNTdkNjE3LjVkMTQ0ZDYyMWQxMzAuNWQ2MTguNWQxMTdkNjE2ZDExMGQ2MDdkMTExZDU4M2QxMTIuNWQ1MzJkMTE0ZDQ4MWQxMTZkNDE3LjVkMTE4ZDM1NGQxMjBkMjg0ZDEyMmQyMTRkMTI0ZDE1MC41ZDEyNmQ4N2QxMjcuNWQzNi41ZDEyOWQtMTRkMTMwZC0zOGQyNzJkNzI2ZDI3NGQ3MThkMjk2LjVkNjgwZDMxOWQ2NDJkMzU1ZDU4NS41ZDM5MWQ1MjlkNDM2LjVkNDU4LjVkNDgyZDM4OGQ1MjkuNWQzMTUuNWQ1NzdkMjQzZDYyMi41ZDE3My41ZDY2OGQxMDRkNzA1ZDQ4LjVkNzQyZC03ZDc2NS41ZC00Mi41ZDc4OWQtNzhkNzkzZC04M2Q4MDNkLTc3ZDc5NWQtNDRkNzg3ZC0xMWQ3NjVkNDEuNWQ3NDNkOTRkNzA5LjVkMTYwLjVkNjc2ZDIyN2Q2MzUuNWQyOTlkNTk1ZDM3MWQ1NTBkNDQzLjVkNTA1ZDUxNmQ0NjBkNTgwLjVkNDE1ZDY0NWQzNzIuNWQ2OTYuNWQzMzBkNzQ4ZDI5NWQ3NzhkMjg2ZDc3OGQyODFkNzcxLjVkMjc2ZDc2NWQyNzRkNzU2ZDI3MmQ3NDdkMjcyZDczOC41ZDI3MmQ3MzBkMjcyZDcyNmhSM2Q3OTRSNGQ3NjdSNWQxNlI2ZDg1MVI3ZC0xMFI4ZDgzNVI5ZDc3OVIxMGQ1NDBSMTFpMTg4UjEyZDE2UjEzZDc5NFIxNGFpMWkzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjc1b1IxZDEyNjNSMmFkNTVkOTk1ZDYwZDk4MGQ2My41ZDkzOWQ2N2Q4OThkNjlkODQwZDcxZDc4MmQ3Mi41ZDcxMmQ3NGQ2NDJkNzZkNTcwZDc4ZDQ5OGQ4MC41ZDQyOC41ZDgzZDM1OWQ4OGQzMDJkOTNkMjQ1ZDEwMGQyMDUuNWQxMDdkMTY2ZDExOGQxNTNkMTIxZDE0MWQxMzIuNWQxMzVkMTQ0ZDEyOWQxNThkMTI2LjVkMTcyZDEyNGQxODVkMTI0ZDE5OGQxMjRkMjAzZDEyNGQyMDJkMTQxZDIwMC41ZDE3MC41ZDE5OWQyMDBkMTk3ZDIzNmQxOTVkMjcyZDE5Mi41ZDMxMS41ZDE5MGQzNTFkMTg3LjVkMzg3LjVkMTg1ZDQyNGQxODNkNDU1ZDE4MWQ0ODZkMTgwZDUwNWQyNjFkNDYzZDMzNi41ZDQxNS41ZDQxMmQzNjhkNDc4ZDMyNy41ZDU0NGQyODdkNTk3LjVkMjYwZDY1MWQyMzNkNjg5ZDIzM2Q3MDJkMjMzZDcxMS41ZDI0M2Q3MjFkMjUzZDcyMWQyNjZkNzIxZDI4NmQ2OThkMzA4LjVkNjc1ZDMzMWQ2MzYuNWQzNTZkNTk4ZDM4MWQ1NDkuNWQ0MDcuNWQ1MDFkNDM0ZDQ1MC41ZDQ2MGQ0MDBkNDg2ZDM1MS41ZDUxMS41ZDMwM2Q1MzdkMjY0LjVkNTYwLjVkMjI2ZDU4NGQyMDNkNjA0ZDE4MGQ2MjRkMTgwZDY0MGQyMDJkNjU0ZDI1NGQ2NzdkMzA2ZDcwMGQzNzFkNzI5ZDQzNmQ3NThkNTA1ZDc5MS41ZDU3NGQ4MjVkNjMxLjVkODU4ZDY4OWQ4OTFkNzI1LjVkOTIzZDc2MmQ5NTVkNzYxZDk4MmQ3NjFkOTkyZDc1NC41ZDk5N2Q3NDhkMTAwMmQ3MzkuNWQxMDA0ZDczMWQxMDA2ZDcyMi41ZDEwMDZkNzE0ZDEwMDZkNzEwZDEwMDZkNjcwZDEwMDZkNjM0ZDk5Mi41ZDU5OGQ5NzlkNTYxLjVkOTU3LjVkNTI1ZDkzNmQ0ODZkOTA4LjVkNDQ3ZDg4MWQ0MDBkODUzZDM1M2Q4MjVkMjk3ZDc5OWQyNDFkNzczZDE3MGQ3NTRkMTcwZDEwMDRkMTY3ZDEwMDlkMTQ3ZDEwMTVkMTI3ZDEwMjFkMTA0LjVkMTAyM2Q4MmQxMDI1ZDY1LjVkMTAxOS41ZDQ5ZDEwMTRkNTVkOTk1aFIzZDc3NVI0ZDc2MlI1ZDQ5UjZkOTAwUjdkLTFSOGQ4NTFSOWQ3NzlSMTBkNTQwUjExaTc1UjEyZDQ5UjEzZDc3NVIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNoZzoxODdvUjFkMTI2M1IyYWQxNDdkOTY0ZDEwNWQ5NDhkOTJkOTMwLjVkNzlkOTEzZDg2LjVkODk1ZDk0ZDg3N2QxMThkODU4ZDE0MmQ4MzlkMTc0ZDgxOWQyMDZkNzk5ZDI0MmQ3NzguNWQyNzhkNzU4ZDMwOS41ZDczNy41ZDM0MWQ3MTdkMzY0ZDY5NS41ZDM4N2Q2NzRkMzkzZDY1M2Q2MmQ1MjlkMTI1ZDQ2OGQxNjZkNDk3ZDIwMi41ZDUxNGQyMzlkNTMxZDI3Mi41ZDU0MWQzMDZkNTUxZDMzOGQ1NTcuNWQzNzBkNTY0ZDQwMmQ1NzIuNWQ0MzRkNTgxZDQ2NmQ1OTUuNWQ0OThkNjEwZDUzM2Q2MzVkNTAxZDY3NGQ0NTEuNWQ3MTMuNWQ0MDJkNzUzZDM0Ny41ZDc5NGQyOTNkODM1ZDI0MGQ4NzcuNWQxODdkOTIwZDE0N2Q5NjRkNDMxZDkyOWQzODlkOTEzZDM3NmQ4OTUuNWQzNjNkODc4ZDM3MC41ZDg2MGQzNzhkODQyZDQwMmQ4MjNkNDI2ZDgwNGQ0NThkNzg0ZDQ5MGQ3NjRkNTI2ZDc0My41ZDU2MmQ3MjNkNTkzLjVkNzAyLjVkNjI1ZDY4MmQ2NDhkNjYwLjVkNjcxZDYzOWQ2NzdkNjE4ZDM0NmQ0OTRkNDA5ZDQzM2Q0NTBkNDYyZDQ4Ni41ZDQ3OWQ1MjNkNDk2ZDU1Ni41ZDUwNmQ1OTBkNTE2ZDYyMmQ1MjIuNWQ2NTRkNTI5ZDY4NmQ1MzcuNWQ3MThkNTQ2ZDc1MGQ1NjAuNWQ3ODJkNTc1ZDgxN2Q2MDBkNzg1ZDYzOWQ3MzUuNWQ2NzguNWQ2ODZkNzE4ZDYzMS41ZDc1OWQ1NzdkODAwZDUyNGQ4NDIuNWQ0NzFkODg1ZDQzMWQ5MjloUjNkODM3UjRkODE3UjVkNjJSNmQ1OTFSN2Q2MFI4ZDUyOVI5ZDc3OVIxMGQ1NDBSMTFpMTg3UjEyZDYyUjEzZDgzN1IxNGFpMWkzaTNpM2kzaTNpM2kzaTNpMmkyaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpMmkyaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzo3NG9SMWQxMjYzUjJhZDExZDc5NmQxMWQ3ODFkMTguNWQ3NjUuNWQyNmQ3NTBkMzcuNWQ3MzYuNWQ0OWQ3MjNkNjNkNzE0LjVkNzdkNzA2ZDkxZDcwNmQ5MmQ3NTNkMTA5LjVkNzg5ZDEyN2Q4MjVkMTU3ZDg1MWQxODdkODc3ZDIyNS41ZDg5My41ZDI2NGQ5MTBkMzA2LjVkOTE4LjVkMzQ5ZDkyN2QzOTIuNWQ5MjguNWQ0MzZkOTMwZDQ3NWQ5MjVkNDk3ZDkxNGQ1MDkuNWQ4NzlkNTIyZDg0NGQ1MjhkNzkzLjVkNTM0ZDc0M2Q1MzUuNWQ2ODJkNTM3ZDYyMWQ1MzZkNTU5ZDUzNWQ0OTdkNTM0ZDQzOWQ1MzNkMzgxZDUzMy41ZDMzNmQ1MzRkMjkxZDUzOC41ZDI2My41ZDU0M2QyMzZkNTU0ZDIzNmQ2MzhkMjM2ZDYzOGQyNTFkNjQwLjVkMjg4ZDY0M2QzMjVkNjQ1ZDM3NmQ2NDdkNDI3ZDY0OC41ZDQ4OC41ZDY1MGQ1NTBkNjQ3LjVkNjE0ZDY0NWQ2NzhkNjM5ZDc0MGQ2MzNkODAyZDYxOS41ZDg1NWQ2MDZkOTA4ZDU4NS41ZDk0N2Q1NjVkOTg2ZDUzNGQxMDA0ZDUwNWQxMDIwZDQ1Ny41ZDEwMjMuNWQ0MTBkMTAyN2QzNTVkMTAxOS41ZDMwMGQxMDEyZDI0Mi41ZDk5My41ZDE4NWQ5NzVkMTM2LjVkOTQ3ZDg4ZDkxOWQ1NGQ4ODFkMjBkODQzZDExZDc5NmhSM2Q2NzhSNGQ2NTBSNWQxMVI2ZDc4OFI3ZC0zUjhkNzc3UjlkNzc5UjEwZDU0MFIxMWk3NFIxMmQxMVIxM2Q2NzhSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxODZvUjFkMTI2M1IyYWQ2M2Q0MzhkNjNkMzU2ZDk5ZDI5Ny41ZDEzNWQyMzlkMTkwZDIwMGQyNDVkMTYxZDMxMGQxNDAuNWQzNzVkMTIwZDQzNGQxMTRkNDkxZDExMWQ1NDFkMTI4LjVkNTkxZDE0NmQ2MjdkMTc4ZDY2M2QyMTBkNjgyLjVkMjU0ZDcwMmQyOThkNjk3ZDM0N2Q2OTdkNDI5ZDY2NC41ZDQ5MC41ZDYzMmQ1NTJkNTc4ZDU5My41ZDUyNGQ2MzVkNDUyLjVkNjU1LjVkMzgxZDY3NmQzMDNkNjc2ZDE4NWQ2NzZkMTI0ZDYyMWQ2M2Q1NjZkNjNkNDM4ZDE0OWQ0NjhkMTQ5ZDUxMGQxNTkuNWQ1MzVkMTcwZDU2MGQxOTAuNWQ1NzIuNWQyMTFkNTg1ZDI0MC41ZDU4OWQyNzBkNTkzZDMwOWQ1OTNkMzY5ZDU5M2Q0MjVkNTgxLjVkNDgxZDU3MGQ1MjRkNTQyLjVkNTY3ZDUxNWQ1OTNkNDY5LjVkNjE5ZDQyNGQ2MTlkMzU2ZDYxOWQzMjFkNjA5ZDI4OS41ZDU5OWQyNThkNTc5ZDIzNC41ZDU1OWQyMTFkNTMwZDE5N2Q1MDFkMTgzZDQ2NGQxODNkNDE1ZDE5MWQzNjZkMjAxLjVkMzE3ZDIxMmQyNzRkMjM5LjVkMjMxZDI2N2QxOThkMzIwLjVkMTY1ZDM3NGQxNDlkNDY4aFIzZDM0OFI0ZDMxOFI1ZDI3UjZkNjQ3UjdkMzQ4UjhkNjIwUjlkNzc5UjEwZDU0MFIxMWkxODZSMTJkMjdSMTNkMzQ4UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzo3M29SMWQxMjYzUjJhZDQ4ZDEwMDRkNDFkOTg5ZDM4ZDk1MS41ZDM1ZDkxNGQzMy41ZDg2My41ZDMyZDgxM2QzM2Q3NTNkMzRkNjkzZDM1LjVkNjMyLjVkMzdkNTcyZDM5ZDUxNS41ZDQxZDQ1OWQ0My41ZDQxNS41ZDQ2ZDM3MmQ0N2QzNDUuNWQ0OGQzMTlkNDhkMzE4ZDYzZDMwOWQ3NC41ZDMwM2Q4NmQyOTdkMTAxZDI5N2QxMTBkMjk3ZDEyMC41ZDMwMWQxMzFkMzA1ZDEzMWQzMThkMTMxZDEwMDRkMTMxZDEwMTdkMTIwLjVkMTAyMWQxMTBkMTAyNWQxMDFkMTAyNWQ4NmQxMDI1ZDc0LjVkMTAxOWQ2M2QxMDEzZDQ4ZDEwMDRoUjNkMTk0UjRkMTMxUjVkMzJSNmQ3MjdSN2QtMVI4ZDY5NVI5ZDc3OVIxMGQ1NDBSMTFpNzNSMTJkMzJSMTNkMTk0UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2hnOjE4NW9SMWQxMjYzUjJhZDYzZDE5ZDYxZC05ZDczLjVkLTE2LjVkODZkLTI0ZDEwM2QtMjRkMTE3ZC0yNGQxMjlkLTIxZDE0MWQtMThkMTQ2ZC0xZDEyNWQ2NDFkMTI0ZDY1M2QxMTMuNWQ2NjJkMTAzZDY3MWQ5MGQ2NzQuNWQ3N2Q2NzhkNjMuNWQ2NzUuNWQ1MGQ2NzNkNDNkNjY0ZDQ0ZDY0MGQ0NS41ZDU4OWQ0N2Q1MzhkNDlkNDc0LjVkNTFkNDExZDUzZDM0MWQ1NWQyNzFkNTdkMjA3LjVkNTlkMTQ0ZDYwLjVkOTMuNWQ2MmQ0M2Q2M2QxOWhSM2QxNDRSNGQxMTVSNWQzNVI2ZDcwOFI3ZDM0M1I4ZDY3M1I5ZDc3OVIxMGQ1NDBSMTFpMTg1UjEyZDM1UjEzZDE0NFIxNGFpMWkzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjcyb1IxZDEyNjNSMmFkNzBkNjkyZDUyZDY4OWQzOWQ2ODNkMjZkNjc3ZDI2ZDY2MmQyNmQ2NDlkMzUuNWQ2MzZkNDVkNjIzZDU2LjVkNjA5LjVkNjhkNTk2ZDc4ZDU4MC41ZDg4ZDU2NWQ5MGQ1NDdkOTFkNTM0ZDkzZDUwNi41ZDk1ZDQ3OWQ5Ny41ZDQ0NGQxMDBkNDA5ZDEwMmQzNzAuNWQxMDRkMzMyZDEwNmQyOTdkMTA4ZDI2MmQxMDkuNWQyMzQuNWQxMTFkMjA3ZDExMWQxOTRkMTE4ZDE4NmQxMjkuNWQxNzUuNWQxNDFkMTY1ZDE1My41ZDE1OWQxNjZkMTUzZDE3N2QxNTQuNWQxODhkMTU2ZDE5NGQxNzNkMTg2ZDU2N2QxOTBkNTY2ZDIxNGQ1NjZkMjM4ZDU2NmQyNzNkNTY1LjVkMzA4ZDU2NWQzNTAuNWQ1NjNkMzkzZDU2MWQ0MzNkNTU2LjVkNDczZDU1MmQ1MDZkNTQ1ZDUzOWQ1MzhkNTU3ZDUyNmQ1NTdkMTMxZDU2MGQxMjNkNTcxLjVkMTE4LjVkNTgzZDExNGQ1OThkMTEyZDYxM2QxMTBkNjI3LjVkMTEwZDY0MmQxMTBkNjUwZDExMWQ2NTBkMTM0ZDY1MS41ZDE4M2Q2NTNkMjMyZDY1NWQyOTNkNjU3ZDM1NGQ2NTkuNWQ0MjJkNjYyZDQ5MGQ2NjRkNTUxZDY2NmQ2MTJkNjY4ZDY2MWQ2NzBkNzEwZDY3MWQ3MzNkNjc1ZDc5OWQ2ODhkODYxLjVkNzAxZDkyNGQ3MzNkOTgyZDcwN2Q5OTFkNjc5LjVkOTk3LjVkNjUyZDEwMDRkNjA5ZDEwMDRkNTc0ZDkxN2Q1NjEuNWQ4MTlkNTQ5ZDcyMWQ1NDdkNjMwZDQ5NWQ2MjlkNDUzZDYyOC41ZDQxMWQ2MjhkMzcxZDYzMWQzMzFkNjM0ZDI4OC41ZDY0My41ZDI0NmQ2NTNkMTk0ZDY3MWQxODdkNzQ0ZDE5MmQ4MjJkMTk3ZDkwMGQyMTRkOTgyZDExNWQxMDMyZDcwZDY5MmhSM2Q3NzVSNGQ3MzNSNWQyNlI2ZDkxNFI3ZC04UjhkODg4UjlkNzc5UjEwZDU0MFIxMWk3MlIxMmQyNlIxM2Q3NzVSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTJoZzoxODRvUjFkMTI2M1IyYWQ1NGQxMjU0ZDk0ZDEyNThkMTMzLjVkMTI1MWQxNzNkMTI0NGQyMDIuNWQxMjMyLjVkMjMyZDEyMjFkMjQ3ZDEyMDdkMjYyZDExOTNkMjU0LjVkMTE4MmQyNDdkMTE3MWQyMTFkMTE2Ni41ZDE3NWQxMTYyZDEwM2QxMTY4ZDg4ZDExNjhkNzkuNWQxMTUzZDcxZDExMzhkNjYuNWQxMTE3ZDYyZDEwOTZkNjFkMTA3M2Q2MGQxMDUwZDYwZDEwMzNkNTZkOTk4ZDY0LjVkOTkxLjVkNzNkOTg1ZDg0ZDk5MS41ZDk1ZDk5OGQxMDNkMTAxMC41ZDExMWQxMDIzZDEwNmQxMDI3ZDEwNmQxMDQ0ZDEwNS41ZDEwNTkuNWQxMDVkMTA3NWQxMDdkMTA4N2QxMDlkMTA5OWQxMTQuNWQxMTA2ZDEyMGQxMTEzZDEzMWQxMTEzZDE4OWQxMTA3ZDIyNi41ZDExMTQuNWQyNjRkMTEyMmQyODNkMTEzOC41ZDMwMmQxMTU1ZDMwNWQxMTc3LjVkMzA4ZDEyMDBkMjk3ZDEyMjNkMjg2ZDEyNDZkMjYzLjVkMTI2Ni41ZDI0MWQxMjg3ZDIwOS41ZDEzMDBkMTc4ZDEzMTNkMTM5ZDEzMTVkMTAwZDEzMTdkNTdkMTMwM2Q1NGQxMzAzZDU0ZDEyOTYuNWQ1NGQxMjkwZDU0LjVkMTI4MS41ZDU1ZDEyNzNkNTUuNWQxMjY1ZDU2ZDEyNTdkNTRkMTI1NGhSM2QzNDFSNGQzMDhSNWQ1NFI2ZDM5UjdkLTI5M1I4ZC0xNVI5ZDc3OVIxMGQ1NDBSMTFpMTg0UjEyZDU0UjEzZDM0MVIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjcxb1IxZDEyNjNSMmFkNjIwZDg1NmQ1ODRkODgxZDU0MmQ5MTAuNWQ1MDBkOTQwZDQ1NC41ZDk2NWQ0MDlkOTkwZDM2MS41ZDEwMDYuNWQzMTRkMTAyM2QyNjZkMTAyM2QyMThkMTAyM2QxNzQuNWQxMDAzLjVkMTMxZDk4NGQ5OGQ5NTFkNjVkOTE4ZDQ2ZDg3NC41ZDI3ZDgzMWQyN2Q3ODNkMzFkNzE3ZDQ4LjVkNjQ4ZDY2ZDU3OWQ5NS41ZDUxNWQxMjVkNDUxZDE2N2QzOTVkMjA5ZDMzOWQyNjIuNWQyOTcuNWQzMTZkMjU2ZDM4MWQyMzIuNWQ0NDZkMjA5ZDUyMmQyMTBkNTM1ZDIxMGQ1NTFkMjA5LjVkNTY3ZDIwOWQ1ODAuNWQyMTJkNTk0ZDIxNWQ2MDIuNWQyMjQuNWQ2MTFkMjM0ZDYwOWQyNTRkNTA4ZDI1OWQ0MjFkMzAwLjVkMzM0ZDM0MmQyNjkuNWQ0MTFkMjA1ZDQ4MGQxNjhkNTczZDEzMWQ2NjZkMTMxZDc3M2QxMzFkODE1ZDE0NC41ZDg0N2QxNThkODc5ZDE4MS41ZDkwMGQyMDVkOTIxZDIzOGQ5MzJkMjcxZDk0M2QzMTBkOTQzZDMyOWQ5NDNkMzYwZDkzNS41ZDM5MWQ5MjhkNDI2LjVkOTE1ZDQ2MmQ5MDJkNDk4ZDg4NGQ1MzRkODY2ZDU2My41ZDg0NC41ZDU5M2Q4MjNkNjExLjVkNzk5LjVkNjMwZDc3NmQ2MzBkNzUyZDYzMGQ1NjdkNjE3ZDU2NmQ1OTFkNTcwZDU2NWQ1NzRkNTMyLjVkNTgwZDUwMGQ1ODZkNDY1ZDU5My41ZDQzMGQ2MDFkMzk3LjVkNjA4ZDM2NWQ2MTVkMzM4LjVkNjIwLjVkMzEyZDYyNmQyOThkNjI4ZDI5MWQ2MjVkMjgyLjVkNjIwLjVkMjc0ZDYxNmQyNzNkNjA3LjVkMjcyZDU5OWQyODMuNWQ1ODVkMjk1ZDU3MWQzMjhkNTQ5ZDMzMGQ1NDhkMzU1ZDU0My41ZDM4MGQ1MzlkNDE4LjVkNTMzZDQ1N2Q1MjdkNTA0ZDUxOS41ZDU1MWQ1MTJkNTk3LjVkNTA1ZDY0NGQ0OThkNjg1LjVkNDkyZDcyN2Q0ODZkNzU0ZDQ4MmQ3NjdkNDg0ZDc4NS41ZDQ4MWQ4MDRkNDc4ZDgyMWQ0NzlkODM4ZDQ4MGQ4NDlkNDg4LjVkODYwZDQ5N2Q4NThkNTIzZDc1NGQ1NjVkNzQ1ZDU5NWQ3NDBkNjM1LjVkNzM1ZDY3NmQ3MzNkNzIyZDczMWQ3NjhkNzMxZDgxN2Q3MzFkODY2ZDczMS41ZDkxMy41ZDczMmQ5NjFkNzMyLjVkMTAwNWQ3MzNkMTA0OWQ3MzNkMTA4NWQ3MjZkMTA4OWQ3MDlkMTA5NC41ZDY5MmQxMTAwZDY3My41ZDExMDIuNWQ2NTVkMTEwNWQ2MzkuNWQxMTAyZDYyNGQxMDk5ZDYyMGQxMDg1ZDYyMGQ4NTZkNjIwZDg1NmhSM2Q4ODZSNGQ4NjBSNWQyN1I2ZDgxNVI3ZC04MVI4ZDc4OFI5ZDc3OVIxMGQ1NDBSMTFpNzFSMTJkMjdSMTNkODg2UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkyaGc6MTgzb1IxZDEyNjNSMmFkMTlkNzI0ZDI1ZDY5NGQ0MmQ2ODIuNWQ1OWQ2NzFkNzdkNjczLjVkOTVkNjc2ZDExMGQ2OTBkMTI1ZDcwNGQxMjdkNzI1ZDEyN2Q3NTVkMTE1ZDc2NC41ZDEwM2Q3NzRkNzhkNzc0ZDcwZDc3NGQ2MGQ3NzAuNWQ1MGQ3NjdkNDFkNzYxZDMyZDc1NWQyNS41ZDc0NS41ZDE5ZDczNmQxOWQ3MjRoUjNkMTgwUjRkMTI3UjVkMTlSNmQzNTNSN2QyNTBSOGQzMzRSOWQ3NzlSMTBkNTQwUjExaTE4M1IxMmQxOVIxM2QxODBSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjcwb1IxZDEyNjNSMmFkMTE4ZDgxNmQ3M2Q4MTBkNTguNWQ4MDBkNDRkNzkwZDQ5LjVkNzc2ZDU1ZDc2MmQ3NWQ3NDRkOTVkNzI2ZDExOWQ3MDNkMTE5ZDY0OWQxMDlkNTk3ZDk5ZDU0NWQ4Ni41ZDQ5My41ZDc0ZDQ0MmQ2NGQzOTAuNWQ1NGQzMzlkNTRkMjg2ZDU0ZDI1NGQ2N2QyNDNkODBkMjMyZDExMmQyMzJkMTMwZDIzMmQxMzcuNWQyMzguNWQxNDVkMjQ1ZDE0Ny41ZDI1NWQxNTBkMjY1ZDE1MC41ZDI3Ni41ZDE1MWQyODhkMTU0ZDI5OGQxNTdkMzA4ZDE2NmQzMTQuNWQxNzVkMzIxZDE5NGQzMjFkMjc4ZDMyMGQzNjEuNWQzMDdkNDQ1ZDI5NGQ1MjguNWQyODAuNWQ2MTJkMjY3ZDY5NS41ZDI1OGQ3NzlkMjQ5ZDg2NWQyNTZkODY2ZDI4MGQ4NzBkMjk3LjVkODc0ZDMxNWQ4NzMuNWQzMjYuNWQ4NzNkMzM4ZDg2NWQzNDJkODU3ZDM0NmQ4MzNkMzQyZDgwOGQzNDNkNzY2LjVkMzQ0LjVkNzI1ZDM0NmQ2NzQuNWQzNDguNWQ2MjRkMzUxZDU2Ny41ZDM1NC41ZDUxMWQzNThkNDU2ZDM2M2Q0MDFkMzY4ZDM1MWQzNzVkMzAxZDM4MmQyNjNkMzkxLjVkMjI1ZDQwMWQyMDJkNDEyLjVkMTc5ZDQyNGQxNzlkNDM5ZDE3OWQ0NDZkMTgwZDQ2NmQxODFkNDg2ZDE4M2Q1MTFkMTg1ZDUzNmQxODguNWQ1NjMuNWQxOTJkNTkxZDE5Ni41ZDYxMy41ZDIwMWQ2MzZkMjA3ZDY1MWQyMTNkNjY2ZDIyMGQ2NjZkMjkxZDY2NmQzNjRkNjU0ZDQzN2Q2NDJkNTEwLjVkNjI3ZDU4NGQ2MTJkNjU3ZDYwMGQ3MzBkNTg4ZDgwMmQ1ODhkODA0ZDU4OGQ4MDMuNWQ1OTdkODAzZDYwNmQ4MDJkNjE3LjVkODAxZDYyOWQ4MDAuNWQ2MzguNWQ4MDBkNjQ4ZDgwMmQ2NDhkNzcxZDY2NWQ3MTlkNjc3ZDY2N2Q2ODlkNjA2ZDY5Ny41ZDU0NWQ3MDZkNDgxLjVkNzEzZDQxOGQ3MjBkMzY0ZDcyOC41ZDMxMGQ3MzdkMjcxZDc0OGQyMzJkNzU5ZDIyMWQ3NzVkMjA3ZDEwMjBkMTk5ZDEwMjhkMTg4LjVkMTAzMC41ZDE3OGQxMDMzZDE2Ni41ZDEwMzIuNWQxNTVkMTAzMmQxNDIuNWQxMDMxZDEzMGQxMDMwZDExOGQxMDMwZDExOGQ4MTZkMTE4ZDgxNmhSM2Q4ODZSNGQ4NzRSNWQ0NFI2ZDc5MlI3ZC05UjhkNzQ4UjlkNzc5UjEwZDU0MFIxMWk3MFIxMmQ0NFIxM2Q4ODZSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpMmkyaGc6MTgyb1IxZDEyNjNSMmFkNDM3ZDEwMjVkNDM1ZDEwMjVkNDIwZDEwMjRkNDA1ZDEwMjNkMzg3ZDEwMjJkMzg1ZDEwMjJkMzg1ZDk4M2QzODVkOTQ0ZDM4NmQ4ODVkMzg3ZDgyNmQzODguNWQ3NThkMzkwZDY5MGQzOTEuNWQ2MzFkMzkzZDU3MmQzOTNkNTMzZDM5M2Q0OTRkMzkxZDQ5NGQzODZkNDk0ZDM4My41ZDQ5M2QzODFkNDkyZDM3N2Q0OTJkMzc0ZDQ5MmQzNzJkNTMxZDM3MGQ1NzBkMzY5ZDYyOWQzNjhkNjg4ZDM2N2Q3NTYuNWQzNjZkODI1ZDM2NS41ZDg4NGQzNjVkOTQzZDM2NC41ZDk4MmQzNjRkMTAyMWQzNjRkMTAyMWQzNTZkMTAyMWQzNDRkMTAyMmQzMzJkMTAyM2QzMjAuNWQxMDE5LjVkMzA5ZDEwMTZkMzAxLjVkMTAwNS41ZDI5NGQ5OTVkMjk1ZDk3NGQyOTZkOTY1ZDI5N2Q5NDdkMjk4ZDkyOWQyOTguNWQ5MDYuNWQyOTlkODg0ZDI5OS41ZDg2MGQzMDBkODM2ZDMwMC41ZDgxNGQzMDFkNzkyZDMwMWQ3NzQuNWQzMDFkNzU3ZDMwMmQ3NDlkMTg1ZDcyNmQxMTkuNWQ2ODUuNWQ1NGQ2NDVkMzMuNWQ2MDFkMTNkNTU3ZDMzLjVkNTE1LjVkNTRkNDc0ZDExMGQ0NDlkMTY2ZDQyNGQyNTRkNDIyZDM0MmQ0MjBkNDU2ZDQ1NWQ0MzdkMTAyNWhSM2Q0ODVSNGQ0NTZSNWQxM1I2ZDYwNFI3ZC0xUjhkNTkxUjlkNzc5UjEwZDU0MFIxMWkxODJSMTJkMTNSMTNkNDg1UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaGc6NjlvUjFkMTI2M1IyYWQ0M2QyMjZkNjlkMjMzZDExNC41ZDIzNC41ZDE2MGQyMzZkMjE0LjVkMjM1ZDI2OWQyMzRkMzI4LjVkMjMyZDM4OGQyMzBkNDQxLjVkMjMwZDQ5NWQyMzBkNTM5ZDIzMy41ZDU4M2QyMzdkNjA4ZDI0NmQ2MDhkMzA4ZDU3NGQzMTNkNTE1ZDMxNGQ0NTZkMzE1ZDM4OWQzMTUuNWQzMjJkMzE2ZDI1NWQzMTkuNWQxODhkMzIzZDEzOGQzMzRkMTI5ZDM3NWQxMjVkNDAyLjVkMTIxZDQzMGQxMTkuNWQ0NTAuNWQxMThkNDcxZDExOC41ZDQ4OWQxMTlkNTA3ZDEyMC41ZDUyNy41ZDEyMmQ1NDhkMTIzLjVkNTc1ZDEyNWQ2MDJkMTI1ZDY0MWQxODlkNjQxZDI0OS41ZDYzNC41ZDMxMGQ2MjhkMzY5LjVkNjE5LjVkNDI5ZDYxMWQ0ODlkNjA0LjVkNTQ5ZDU5OGQ2MTJkNTk4ZDYxMmQ2NjZkMTM0ZDcyNmQxNDFkOTMxZDIzNWQ5MzFkMzExZDkyNS41ZDM4N2Q5MjBkNDU1LjVkOTE0ZDUyNGQ5MDhkNTkxZDkwMi41ZDY1OGQ4OTdkNzMzZDg5N2Q3MzNkOTA4ZDcyN2Q5MjMuNWQ3MjFkOTM5ZDcxMWQ5NTEuNWQ3MDFkOTY0ZDY4OC41ZDk3MC41ZDY3NmQ5NzdkNjY0ZDk2OGQ1OTVkOTc2ZDUxMS41ZDk4My41ZDQyOGQ5OTFkMzQyLjVkOTk4LjVkMjU3ZDEwMDZkMTc3LjVkMTAxMi41ZDk4ZDEwMTlkMzhkMTAyNGQ0M2QyMjZoUjNkNzU3UjRkNzMzUjVkMzhSNmQ3OThSN2QwUjhkNzYwUjlkNzc5UjEwZDU0MFIxMWk2OVIxMmQzOFIxM2Q3NTdSMTRhaTFpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmhnOjE4MW9SMWQxMjYzUjJhZDU1OGQxMDIwZDU1MWQxMDUyZDUzNi41ZDEwNTYuNWQ1MjJkMTA2MWQ0OTZkMTA0NmQ0OTRkMTA0NWQ0OTMuNWQxMDMzZDQ5M2QxMDIxZDQ5M2QxMDA4LjVkNDkzZDk5NmQ0OTIuNWQ5ODZkNDkyZDk3NmQ0OTBkOTc3ZDQ0NmQxMDEyZDM4OC41ZDEwMTcuNWQzMzFkMTAyM2QyNzcuNWQxMDEwZDIyNGQ5OTdkMTgyZDk3M2QxNDBkOTQ5ZDEyNmQ5MjVkMTI1ZDk1MmQxMjYuNWQ5ODBkMTI4ZDEwMDhkMTI5ZDEwMzVkMTMwZDEwNjJkMTI5LjVkMTA4NmQxMjlkMTExMGQxMjNkMTEyN2QxMTZkMTE0N2QxMDBkMTE1NmQ4NGQxMTY1ZDUzZDExNTZkNTVkMTE0NWQ1My41ZDExMDQuNWQ1MmQxMDY0ZDQ5ZDEwMDZkNDZkOTQ4ZDQzLjVkODc5ZDQxZDgxMGQ0MWQ3NDIuNWQ0MWQ2NzVkNDVkNjE1ZDQ5ZDU1NWQ1OWQ1MTVkNzBkNDczZDg5LjVkNDY3LjVkMTA5ZDQ2MmQxNDFkNDkxZDE0MGQ1MzhkMTM2ZDU3Ny41ZDEzMmQ2MTdkMTI5ZDY1NS41ZDEyNmQ2OTRkMTI3ZDczNC41ZDEyOGQ3NzVkMTM3ZDgyNGQxNTNkODUwZDE4My41ZDg3MS41ZDIxNGQ4OTNkMjUwZDkwOGQyODZkOTIzZDMyNC41ZDkyOWQzNjNkOTM1ZDM5Ni41ZDkzMGQ0MzBkOTI1ZDQ1NC41ZDkwNmQ0NzlkODg3ZDQ4N2Q4NTJkNDk2ZDc5NmQ0OTZkNzQ5ZDQ5NmQ3MDJkNDkyZDY2M2Q0ODhkNjI0ZDQ4M2Q1OTMuNWQ0NzhkNTYzZDQ3OC41ZDU0MWQ0NzlkNTE5ZDQ4Ny41ZDUwNS41ZDQ5NmQ0OTJkNTE4ZDQ4NmQ1MzRkNTAzZDU0NWQ1NDAuNWQ1NTZkNTc4ZDU2Mi41ZDYyNy41ZDU2OWQ2NzdkNTcxZDczMy41ZDU3M2Q3OTBkNTcyZDg0NGQ1NzFkODk4ZDU2Ny41ZDk0NC41ZDU2NGQ5OTFkNTU4ZDEwMjBoUjNkNjI4UjRkNTczUjVkNDFSNmQ1NjJSN2QtMTQxUjhkNTIxUjlkNzc5UjEwZDU0MFIxMWkxODFSMTJkNDFSMTNkNjI4UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzo2OG9SMWQxMjYzUjJhZDQ4ZDIyN2Q1MmQyMjdkNjVkMjI3ZDc4ZDIyN2Q5MS41ZDIyOS41ZDEwNWQyMzJkMTE2LjVkMjM4ZDEyOGQyNDRkMTMxZDI1NmQxNThkMjQ3ZDIwMWQyMzlkMjQ0ZDIzMWQyOTZkMjI3LjVkMzQ4ZDIyNGQ0MDUuNWQyMjUuNWQ0NjNkMjI3ZDUxOWQyMzYuNWQ1NzVkMjQ2ZDYyNS41ZDI2NWQ2NzZkMjg0ZDcxNC41ZDMxNWQ3NTNkMzQ2ZDc3NS41ZDM5MGQ3OThkNDM0ZDc5OGQ0OTVkODAzZDU1MGQ3ODAuNWQ2MDMuNWQ3NThkNjU3ZDcxNmQ3MDdkNjc0ZDc1N2Q2MTdkODAyZDU2MGQ4NDdkNDk2LjVkODg0ZDQzM2Q5MjFkMzY2LjVkOTQ5LjVkMzAwZDk3OGQyNDBkOTk0LjVkMTgwZDEwMTFkMTI5LjVkMTAxNWQ3OWQxMDE5ZDQ4ZDEwMDdkNDhkMjI3ZDcxNGQ1MDVkNzA3ZDQ0NGQ2NzNkNDAzLjVkNjM5ZDM2M2Q1ODlkMzM5LjVkNTM5ZDMxNmQ0NzguNWQzMDcuNWQ0MThkMjk5ZDM1OGQzMDFkMjk4ZDMwM2QyNDRkMzEzLjVkMTkwZDMyNGQxNTNkMzM5ZDE1M2Q5MzVkMTk0ZDkzNWQyNTEuNWQ5MThkMzA5ZDkwMWQzNzEuNWQ4NzFkNDM0ZDg0MWQ0OTUuNWQ3OTkuNWQ1NTdkNzU4ZDYwNS41ZDcxMC41ZDY1NGQ2NjNkNjg0ZDYxMC41ZDcxNGQ1NThkNzE0ZDUwNWhSM2Q4MzBSNGQ4MDNSNWQ0OFI2ZDgwMFI3ZDVSOGQ3NTJSOWQ3NzlSMTBkNTQwUjExaTY4UjEyZDQ4UjEzZDgzMFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkxaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNoZzoxODBvUjFkMTI2M1IyYWQxMTdkMjY4ZDEzMGQyNTJkMTQyZDI0N2QxNTRkMjQyZDE2MmQyNDUuNWQxNzBkMjQ5ZDE3NWQyNTguNWQxODBkMjY4ZDE4MGQyNzlkMTc3ZDI5MWQxNzIuNWQzMDAuNWQxNjhkMzEwZDE1N2QzMjNkMTQ2ZDMzNmQxMjVkMzU0LjVkMTA0ZDM3M2Q3MGQ0MDFkMzFkMzY2ZDExN2QyNjhoUjNkMjIwUjRkMTgwUjVkMzFSNmQ3ODJSN2Q2MjNSOGQ3NTFSOWQ3NzlSMTBkNTQwUjExaTE4MFIxMmQzMVIxM2QyMjBSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTJpMmhnOjY3b1IxZDEyNjNSMmFkMjdkNzEyZDI3ZDYwOWQ2NGQ1MTVkMTAxZDQyMWQxNjUuNWQzNDkuNWQyMzBkMjc4ZDMxNy41ZDIzNS41ZDQwNWQxOTNkNTA3ZDE5M2Q1NDhkMTkzZDU3NS41ZDE5Ny41ZDYwM2QyMDJkNjIwZDIxNi41ZDYzN2QyMzFkNjQ0LjVkMjU4ZDY1MmQyODVkNjUyZDMzMGQ1OTRkMjcyZDUzMC41ZDI1Ny41ZDQ2N2QyNDNkNDA2LjVkMjYwLjVkMzQ2ZDI3OGQyOTIuNWQzMjIuNWQyMzlkMzY3ZDIwMC41ZDQyNi41ZDE2MmQ0ODZkMTQyLjVkNTU1LjVkMTIzZDYyNWQxMzBkNjkyZDEzMGQ3NTVkMTUyLjVkODAyLjVkMTc1ZDg1MGQyMTMuNWQ4ODFkMjUyZDkxMmQzMDRkOTI3LjVkMzU2ZDk0M2Q0MTVkOTQzZDQ4OWQ5MzdkNTQ1ZDkxOGQ2MDFkODk5ZDY0Ny41ZDg3MmQ2OTRkODQ1ZDczNi41ZDgxMy41ZDc3OWQ3ODJkODI2ZDc1MmQ4MzVkNzUyZDg0NC41ZDc1M2Q4NTRkNzU0ZDg2MmQ3NTdkODcwZDc2MGQ4NzVkNzY2LjVkODgwZDc3M2Q4ODBkNzg1ZDgzMGQ4MjlkNzcyZDg3M2Q3MTRkOTE3ZDY0OS41ZDk1MS41ZDU4NWQ5ODZkNTE0LjVkMTAwNi41ZDQ0NGQxMDI3ZDM3MGQxMDI1ZDMwNGQxMDI1ZDI0MmQxMDAyLjVkMTgwZDk4MGQxMzJkOTM4LjVkODRkODk3ZDU1LjVkODM5LjVkMjdkNzgyZDI3ZDcxMmhSM2Q5MDZSNGQ4ODBSNWQyN1I2ZDgzMVI3ZC0zUjhkODA0UjlkNzc5UjEwZDU0MFIxMWk2N1IxMmQyN1IxM2Q5MDZSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjE3OW9SMWQxMjYzUjJhZDE5OGQ2MTlkMjY5ZDYwMWQzMjdkNTcxLjVkMzg1ZDU0MmQ0MjdkNTA3ZDQ2OWQ0NzJkNDk0ZDQzNmQ1MTlkNDAwZDUyMy41ZDM3MGQ1MjhkMzQwZDUxMS41ZDMxOS41ZDQ5NWQyOTlkNDUzLjVkMjk2ZDQxMmQyOTNkMzQ0LjVkMzEwLjVkMjc3ZDMyOGQxODFkMzc0ZDEzN2QzMThkMTYxZDMwNmQxOTdkMjg5ZDIzM2QyNzJkMjczZDI1MWQzMTNkMjMwZDM1My41ZDIwN2QzOTRkMTg0ZDQyOGQxNjFkNDYyZDEzOGQ0ODUuNWQxMTZkNTA5ZDk0ZDUxNC41ZDc2ZDUyMGQ1OGQ1MDRkNDQuNWQ0ODhkMzFkNDQ0ZDI0ZDM4OWQyNGQzMzdkMzUuNWQyODVkNDdkMjMzLjVkNjAuNWQxODJkNzRkMTMwLjVkODVkNzlkOTZkMjZkOTZkMjZkODlkMjYuNWQ3OWQyN2Q2OWQyOS41ZDU4LjVkMzJkNDhkMzcuNWQzOS41ZDQzZDMxZDU0ZDI3ZDEwN2QxNGQxNjUuNWQtMC41ZDIyNGQtMTVkMjgyLjVkLTI3ZDM0MWQtMzlkMzk2ZC00NS41ZDQ1MWQtNTJkNDk2ZC00OWQ1NDFkLTQ2ZDU3Mi41ZC0zMC41ZDYwNGQtMTVkNjE2ZDE2ZDYxNmQ0OWQ1OTdkODBkNTc4ZDExMWQ1NTFkMTM5ZDUyNGQxNjdkNDk0LjVkMTkxLjVkNDY1ZDIxNmQ0NDRkMjM1ZDUyNmQyMzZkNTcwZDI1NmQ2MTRkMjc2ZDYyN2QzMDdkNjQwZDMzOGQ2MjcuNWQzNzcuNWQ2MTVkNDE3ZDU4NWQ0NTdkNTU1ZDQ5N2Q1MTJkNTM0LjVkNDY5ZDU3MmQ0MjEuNWQ2MDBkMzc0ZDYyOGQzMjZkNjQyLjVkMjc4ZDY1N2QyMzlkNjUxZDIyNWQ2NTFkMjExLjVkNjQ0ZDE5OGQ2MzdkMTk4ZDYxOWhSM2Q0MjBSNGQzODdSNWQyMFI2ZDc3N1I3ZDM2OVI4ZDc1N1I5ZDc3OVIxMGQ1NDBSMTFpMTc5UjEyZDIwUjEzZDQyMFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjY2b1IxZDEyNjNSMmFkODFkMTAwNGQ3OGQ5MjRkNzMuNWQ4MzlkNjlkNzU0ZDY2LjVkNjYxLjVkNjRkNTY5ZDY1ZDQ2N2Q2NmQzNjVkNzRkMjUxZDYwZDI1MWQ0OWQyNDhkMzhkMjQ1ZDM4ZDIyNGQzOGQyMDlkNDkuNWQyMDEuNWQ2MWQxOTRkODFkMTk0ZDE1NWQxNzhkMjM1LjVkMTc0LjVkMzE2ZDE3MWQzOTEuNWQxNzlkNDY3ZDE4N2Q1MzIuNWQyMDVkNTk4ZDIyM2Q2NDJkMjQ5ZDY4NmQyNzVkNzAzZDMwOGQ3MjBkMzQxZDY5OS41ZDM3OS41ZDY3OWQ0MThkNjE1ZDQ2MC41ZDU1MWQ1MDNkNDMzZDU0N2Q1ODdkNTU1ZDY4M2Q1NzcuNWQ3NzlkNjAwZDgyOGQ2MzEuNWQ4NzdkNjYzZDg4My41ZDcwMC41ZDg5MGQ3MzhkODY1LjVkNzc3LjVkODQxZDgxN2Q3ODkuNWQ4NTZkNzM4ZDg5NWQ2NzAuNWQ5MjhkNjAzZDk2MWQ1MjVkOTg2ZDQ0N2QxMDExZDM2OGQxMDIzZDI4OWQxMDM1ZDIxNC41ZDEwMzEuNWQxNDBkMTAyOGQ4MWQxMDA0ZDE5NGQ5NDJkMzk2ZDkzMGQ1MjQuNWQ4OTNkNjUzZDg1NmQ3MTIuNWQ4MTAuNWQ3NzJkNzY1ZDc2NC41ZDcxOS41ZDc1N2Q2NzRkNjg2LjVkNjQ1LjVkNjE2ZDYxN2Q0ODQuNWQ2MTRkMzUzZDYxMWQxNjRkNjUwZDE5NGQ5NDJkMzA1ZDI1NWQzMDBkMjU1ZDI3OWQyNTVkMjU4ZDI1NWQyMzRkMjU2LjVkMjEwZDI1OGQxODlkMjYyLjVkMTY4ZDI2N2QxNjRkMjc2ZDE1MWQ1MjhkMTgyZDUyOGQyMjhkNTIxLjVkMjc0ZDUxNWQzMjQuNWQ1MDNkMzc1ZDQ5MWQ0MjVkNDc0ZDQ3NWQ0NTdkNTE0LjVkNDM3ZDU1NGQ0MTdkNTc5ZDM5NGQ2MDRkMzcxZDYwNGQzNDdkNjA0ZDMyNGQ1ODZkMzA4LjVkNTY4ZDI5M2Q1NDBkMjgyLjVkNTEyZDI3MmQ0NzcuNWQyNjYuNWQ0NDNkMjYxZDQwOS41ZDI1OC41ZDM3NmQyNTZkMzQ4ZDI1NS41ZDMyMGQyNTVkMzA1ZDI1NWhSM2Q5MTBSNGQ4OTBSNWQzOFI2ZDg1M1I3ZC0xMVI4ZDgxNVI5ZDc3OVIxMGQ1NDBSMTFpNjZSMTJkMzhSMTNkOTEwUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTJpMWkzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxNzhvUjFkMTI2M1IyYWQ0OGQ1NTdkOTBkNTIwZDE0MmQ0NjMuNWQxOTRkNDA3ZDI0M2QzNDMuNWQyOTJkMjgwZDMzMWQyMTUuNWQzNzBkMTUxZDM4NS41ZDk2ZDQwMWQ0MWQzODdkMi41ZDM3M2QtMzZkMzE2ZC00OGQyODBkLTQ4ZDI1Mi41ZC0zNy41ZDIyNWQtMjdkMjAyLjVkLTExZDE4MGQ1ZDE2MC41ZDI0ZDE0MWQ0M2QxMjBkNTlkOTlkNzVkNzVkODUuNWQ1MWQ5NmQyMGQ5NmQyMWQ1NWQ1My41ZDE2ZDg2ZC0yM2QxMzMuNWQtNTNkMTgxZC04M2QyMzdkLTk5LjVkMjkzZC0xMTZkMzQyLjVkLTExMWQzOTJkLTEwNmQ0MjdkLTc2ZDQ2MmQtNDZkNDY4ZDE3ZDQ2OGQ4NmQ0NDQuNWQxNTRkNDIxZDIyMmQzODQuNWQyODZkMzQ4ZDM1MGQzMDIuNWQ0MDhkMjU3ZDQ2NmQyMTRkNTE2ZDI3MmQ1MjFkMzMwLjVkNTA1ZDM4OWQ0ODlkNDQ2ZDQ2OGQ1MDNkNDQ3ZDU1OS41ZDQyOC41ZDYxNmQ0MTBkNjcyZDQxMGQ2ODdkNDEwZDcwMC41ZDQxN2Q3MTRkNDI0ZDcxNGQ0NDNkNzE0ZDQ2MmQ3MDFkNDc1ZDY4OGQ0ODhkNjY4ZDQ5NmQ2NDhkNTA0ZDYyNC41ZDUwNy41ZDYwMWQ1MTFkNTgwZDUxM2Q1NTlkNTE1ZDU0My41ZDUxNWQ1MjhkNTE1ZDUyNWQ1MTZkNTE0ZDUxOGQ0ODUuNWQ1MjYuNWQ0NTdkNTM1ZDQxOC41ZDU0NmQzODBkNTU3ZDMzNS41ZDU2OC41ZDI5MWQ1ODBkMjQ2LjVkNTg5ZDIwMmQ1OThkMTYyZDYwM2QxMjJkNjA4ZDk0ZDYwNmQ2NmQ2MDRkNTIuNWQ1OTIuNWQzOWQ1ODFkNDhkNTU3aFIzZDQ4MFI0ZDQ0NVI1ZDEyUjZkNzkxUjdkNDEwUjhkNzc5UjlkNzc5UjEwZDU0MFIxMWkxNzhSMTJkMTJSMTNkNDgwUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6NjVvUjFkMTI2M1IyYWQxMDRkMTAwN2QxMDBkMTAxMmQ4Ny41ZDEwMTFkNzVkMTAxMGQ2MmQxMDA1ZDQ5ZDEwMDBkMzkuNWQ5OTMuNWQzMGQ5ODdkMzJkOTgyZDQyZDk1NWQ2My41ZDg5OGQ4NWQ4NDFkMTExLjVkNzY5LjVkMTM4ZDY5OGQxNjcuNWQ2MTlkMTk3ZDU0MGQyMjMuNWQ0NjguNWQyNTBkMzk3ZDI3MWQzNDAuNWQyOTJkMjg0ZDMwMmQyNTZkMzEwZDIzM2QzMTNkMjEzLjVkMzE2ZDE5NGQzMjIuNWQxODBkMzI5ZDE2NmQzNDIuNWQxNTguNWQzNTZkMTUxZDM4NWQxNTFkNDIxZDE3MmQ0NDVkMjAwLjVkNDY5ZDIyOWQ0ODdkMjYyLjVkNTA1ZDI5NmQ1MTguNWQzMzNkNTMyZDM3MGQ1NDUuNWQ0MDdkNTU5ZDQ0NGQ1NzQuNWQ0ODBkNTkwZDUxNmQ2MTNkNTQ3ZDYyMWQ1NTlkNjM2LjVkNTYzZDY1MmQ1NjdkNjcwLjVkNTY3LjVkNjg5ZDU2OGQ3MDguNWQ1NjYuNWQ3MjhkNTY1ZDc0NGQ1NjdkNzYwZDU2OWQ3NzAuNWQ1NzUuNWQ3ODFkNTgyZDc4MWQ1OThkNzg1ZDYxOWQ3NzdkNjI5ZDc2OWQ2MzlkNzU0LjVkNjQyLjVkNzQwZDY0NmQ3MjEuNWQ2NDUuNWQ3MDNkNjQ1ZDY4Ny41ZDY0NGQ2NzJkNjQzZDY2MmQ2NDMuNWQ2NTJkNjQ0ZDY1NGQ2NTBkNjY2ZDY4N2Q2ODAuNWQ3MzJkNjk1ZDc3N2Q3MTNkODIyZDczMWQ4NjdkNzUyZDkwOWQ3NzNkOTUxZDc5OGQ5ODFkNzkzZDk4N2Q3ODBkOTk4LjVkNzY3ZDEwMTBkNzUzLjVkMTAyMC41ZDc0MGQxMDMxZDcyOC41ZDEwMzhkNzE3ZDEwNDVkNzE1ZDEwNDJkNTM5ZDY3MGQxOThkNzU0ZDE5M2Q3NzRkMTg0LjVkODA2LjVkMTc2ZDgzOWQxNjQuNWQ4NzUuNWQxNTNkOTEyZDEzOGQ5NDcuNWQxMjNkOTgzZDEwNGQxMDA3ZDM3NGQyOTZkMzY4ZDM0MWQzNTEuNWQzODkuNWQzMzVkNDM4ZDMxNC41ZDQ4NS41ZDI5NGQ1MzNkMjczZDU3Ny41ZDI1MmQ2MjJkMjM2ZDY1OWQyNzJkNjU5ZDMwOGQ2NTEuNWQzNDRkNjQ0ZDM3OGQ2MzIuNWQ0MTJkNjIxZDQ0NGQ2MDhkNDc2ZDU5NWQ1MDVkNTg0ZDUwMmQ1NzBkNDk2ZDU0NS41ZDQ5MGQ1MjFkNDgxLjVkNDkyLjVkNDczZDQ2NGQ0NjIuNWQ0MzNkNDUyZDQwMmQ0MzguNWQzNzVkNDI1ZDM0OGQ0MDlkMzI3ZDM5M2QzMDZkMzc0ZDI5NmhSM2Q4MjBSNGQ3OThSNWQzMFI2ZDg3M1I3ZC0yMVI4ZDg0M1I5ZDc3OVIxMGQ1NDBSMTFpNjVSMTJkMzBSMTNkODIwUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkyaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxNzdvUjFkMTI2M1IyYWQ4OWQ5OThkODlkOTgxZDEwMy41ZDk3NC41ZDExOGQ5NjhkMTMzZDk2NmQxNTZkOTYzZDIwMmQ5NTUuNWQyNDhkOTQ4ZDMwM2Q5MzhkMzAxZDkxMWQyOThkODc5ZDI5NWQ4NDdkMjkwLjVkODE0ZDI4NmQ3ODFkMjc5ZDc0OWQyNzJkNzE3ZDI2M2Q2OTFkMjM3ZDY5MWQyMTEuNWQ2OTcuNWQxODZkNzA0ZDE2MC41ZDcxMS41ZDEzNWQ3MTlkMTA4LjVkNzI2ZDgyZDczM2Q1NGQ3MzRkMzlkNzM0ZDMxZDcxNmQyM2Q2OThkMjNkNjc5ZDI2M2Q2MjlkMjYzZDQyMmQyNjNkNDEzZDI2OGQ0MDguNWQyNzNkNDA0ZDI4MGQ0MDEuNWQyODdkMzk5ZDI5NC41ZDM5OC41ZDMwMmQzOThkMzA2ZDM5OGQzMjhkMzk4ZDMzNC41ZDQwNS41ZDM0MWQ0MTNkMzQ2ZDQ0MmQzNDhkNDUxZDM1MS41ZDQ3NWQzNTVkNDk5ZDM1OC41ZDUyNS41ZDM2MmQ1NTJkMzY0LjVkNTc1LjVkMzY3ZDU5OWQzNjhkNjA4ZDYwMWQ1ODFkNjAxZDYxMGQ1OTguNWQ2MjMuNWQ1OTZkNjM3ZDU3NWQ2NDQuNWQ1NTRkNjUyZDUwNS41ZDY1OWQ0NTdkNjY2ZDM2NmQ2ODJkMzYxZDcwOGQzNjRkNzM3LjVkMzY3ZDc2N2QzNzJkNzk4ZDM3N2Q4MjlkMzgyLjVkODYwLjVkMzg4ZDg5MmQzODlkOTIyZDQ0OWQ5MTFkNTAwLjVkOTAzZDU1MmQ4OTVkNTc4ZDg5MmQ2MDNkODkyZDYyMC41ZDkwMC41ZDYzOGQ5MDlkNjQzLjVkOTIwLjVkNjQ5ZDkzMmQ2NDJkOTQ0LjVkNjM1ZDk1N2Q2MTJkOTY0ZDE1MmQxMDMwZDE0NGQxMDMwZDEzM2QxMDI5ZDEyMmQxMDI4ZDExMi41ZDEwMjQuNWQxMDNkMTAyMWQ5NmQxMDE1ZDg5ZDEwMDlkODlkOTk4aFIzZDY3MVI0ZDY0OVI1ZDIzUjZkNjI2UjdkLTZSOGQ2MDNSOWQ3NzlSMTBkNTQwUjExaTE3N1IxMmQyM1IxM2Q2NzFSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2hnOjY0b1IxZDEyNjNSMmFkMzRkNzY1ZDM0ZDY4NGQ1N2Q2MDguNWQ4MGQ1MzNkMTIxLjVkNDY3ZDE2M2Q0MDFkMjE5LjVkMzQ2LjVkMjc2ZDI5MmQzNDMuNWQyNTNkNDExZDIxNGQ0ODYuNWQxOTIuNWQ1NjJkMTcxZDY0MWQxNzFkNzE1ZDE3MWQ3OTJkMTg4LjVkODY5ZDIwNmQ5MzJkMjQ0LjVkOTk1ZDI4M2QxMDM1ZDM0My41ZDEwNzVkNDA0ZDEwNzVkNDg5ZDEwNzVkNTI5ZDEwNTcuNWQ1NThkMTA0MGQ1ODdkMTAxMS41ZDYwNS41ZDk4M2Q2MjRkOTQ3ZDYzMmQ5MTFkNjQwZDg3My41ZDYzOC41ZDgzNmQ2MzdkODAxZDYyNmQ3NjZkNjE1ZDc0MGQ1OTZkNjY0ZDY2MGQ2MDVkNjg1LjVkNTQ2ZDcxMWQ1MDRkNzA5ZDQ2MmQ3MDdkNDM4LjVkNjgzZDQxNWQ2NTlkNDEyZDYyNC41ZDQwOWQ1OTBkNDI2LjVkNTUwLjVkNDQ0ZDUxMWQ0ODQuNWQ0NzcuNWQ1MjVkNDQ0ZDU4OC41ZDQyMi41ZDY1MmQ0MDFkNzQwZDQwMmQ3NzZkMzk5ZDc5NC41ZDQwOGQ4MTNkNDE3ZDgyMi41ZDQzMy41ZDgzMmQ0NTBkODM2LjVkNDcwZDg0MWQ0OTBkODQ5ZDUwN2Q4NTdkNTI0ZDg3MS41ZDUzNmQ4ODZkNTQ4ZDkxNmQ1NDhkOTM1ZDU0OGQ5NTJkNTQ0ZDk2OWQ1NDBkOTgyLjVkNTMxLjVkOTk2ZDUyM2QxMDA0ZDUwOWQxMDEyZDQ5NWQxMDEyZDQ3NWQxMDA2ZDQyMmQ5NzJkMzc4LjVkOTM4ZDMzNWQ4ODguNWQzMDMuNWQ4MzlkMjcyZDc4MC41ZDI1My41ZDcyMmQyMzVkNjY4ZDIzMGQ1NjNkMjMwZDQ2Ni41ZDI2OGQzNzBkMzA2ZDI5Ni41ZDM3NC41ZDIyM2Q0NDNkMTc5LjVkNTM3ZDEzNmQ2MzFkMTM2ZDc0MmQxNTFkNzg3ZDE3OS41ZDgyMC41ZDIwOGQ4NTRkMjQzLjVkODc3LjVkMjc5ZDkwMWQzMTkuNWQ5MTYuNWQzNjBkOTMyZDQwMGQ5NDEuNWQ0NDBkOTUxZDQ3NmQ5NTZkNTEyZDk2MWQ1NDBkOTY0ZDY0NWQ5NTVkNzQwLjVkOTQzZDgzNmQ5MzFkOTIzZDkwNWQxMDEwZDg3OWQxMDg4LjVkODMzLjVkMTE2N2Q3ODhkMTIzOWQ3MTNkMTI0N2Q3MDlkMTI1Ny41ZDcwOS41ZDEyNjhkNzEwZDEyNzhkNzE0ZDEyODhkNzE4ZDEyOTVkNzI1LjVkMTMwMmQ3MzNkMTMwM2Q3NDNkMTMwMmQ3ODVkMTI3MS41ZDgyMC41ZDEyNDFkODU2ZDExOTBkODg1LjVkMTEzOWQ5MTVkMTA3NGQ5MzhkMTAwOWQ5NjFkOTM5ZDk3OC41ZDg2OWQ5OTZkODAwZDEwMDdkNzMxZDEwMThkNjcyLjVkMTAyNGQ2MTRkMTAzMGQ1NzJkMTAzMGQ1MzBkMTAzMGQ1MTRkMTAyNWQ0NzNkMTAyNWQ0MjEuNWQxMDIxLjVkMzcwZDEwMThkMzE3ZDEwMDcuNWQyNjRkOTk3ZDIxM2Q5NzlkMTYyZDk2MWQxMjJkOTMyLjVkODJkOTA0ZDU4ZDg2Mi41ZDM0ZDgyMWQzNGQ3NjVkNzE4ZDQ5OWQ3MTRkNDc5ZDY5MS41ZDQ3NWQ2NjlkNDcxZDYzOWQ0NzhkNjA5ZDQ4NWQ1NzZkNTAxZDU0M2Q1MTdkNTE4ZDUzNy41ZDQ5M2Q1NThkNDgwLjVkNTgxLjVkNDY4ZDYwNWQ0NzhkNjI2ZDQ4OGQ2MzlkNTIyZDYzNWQ1NTZkNjMxZDU5NWQ2MTNkNjM0ZDU5NWQ2NjkuNWQ1NjZkNzA1ZDUzN2Q3MThkNDk5aFIzZDEzMzVSNGQxMzAzUjVkMzRSNmQ4NTNSN2QtNlI4ZDgxOVI5ZDc3OVIxMGQ1NDBSMTFpNjRSMTJkMzRSMTNkMTMzNVIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjE3Nm9SMWQxMjYzUjJhZDMxZDU4NmQzMWQ1NDRkNDZkNTE5LjVkNjFkNDk1ZDg0ZDQ4NWQxMDdkNDc1ZDEzNGQ0NzhkMTYxZDQ4MWQxODVkNDk1ZDIwOWQ1MDlkMjI2ZDUzMS41ZDI0M2Q1NTRkMjQ2ZDU4MmQyNDZkNjQ1ZDIyMGQ2NjUuNWQxOTRkNjg2ZDE0M2Q2ODZkMTI3ZDY4NmQxMDcuNWQ2ODBkODhkNjc0ZDcxZDY2MS41ZDU0ZDY0OWQ0Mi41ZDYzMGQzMWQ2MTFkMzFkNTg2ZDE4N2Q1NjFkMTY2ZDUzOGQxNDJkNTMzZDExOGQ1MjhkMTAxZDUzNy41ZDg0ZDU0N2Q4MGQ1NjguNWQ3NmQ1OTBkOTVkNjIxZDExOGQ2NDBkMTM5LjVkNjQyZDE2MWQ2NDRkMTc1ZDYzNGQxODlkNjI0ZDE5My41ZDYwNC41ZDE5OGQ1ODVkMTg3ZDU2MWhSM2QyODFSNGQyNDZSNWQzMVI2ZDU0OVI3ZDMzOFI4ZDUxOFI5ZDc3OVIxMGQ1NDBSMTFpMTc2UjEyZDMxUjEzZDI4MVIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2hnOjYzb1IxZDEyNjNSMmFkMzAzZDk4MmQzMDNkOTM5ZDM0N2Q5MzlkMzY1ZDkzNGQzNzYuNWQ5NDBkMzg4ZDk0NmQzOTRkOTU3ZDQwMGQ5NjhkNDAwZDk4Mi41ZDQwMGQ5OTdkMzk0ZDEwMDhkMzg4ZDEwMTlkMzc2ZDEwMjVkMzY0ZDEwMzFkMzQ3ZDEwMjZkMzAzZDEwMjZkMzAzZDk4MmQxNTlkNTk4ZDE4MWQ1ODVkMjE4LjVkNTY1ZDI1NmQ1NDVkMjk4LjVkNTIwLjVkMzQxZDQ5NmQzODVkNDY4ZDQyOWQ0NDBkNDY0ZDQxMWQ0OTlkMzgyZDUyMC41ZDM1My41ZDU0MmQzMjVkNTM5LjVkMjk5LjVkNTM3ZDI3NGQ1MDdkMjUyZDQ3N2QyMzBkNDA5ZDIxNGQzNjRkMjE0ZDMyMWQyMjAuNWQyNzhkMjI3ZDIzNS41ZDIzNS41ZDE5M2QyNDRkMTUwLjVkMjUwLjVkMTA4ZDI1N2Q2NWQyNTdkNThkMjU3ZDUwZDI1MS41ZDQyZDI0NmQzNC41ZDIzOGQyN2QyMzBkMjFkMjE5LjVkMTVkMjA5ZDEzZDIwMGQxMDlkMTY5ZDE5OC41ZDE1Ny41ZDI4OGQxNDZkMzYzLjVkMTUxLjVkNDM5ZDE1N2Q0OTdkMTc3LjVkNTU1ZDE5OGQ1ODdkMjMwLjVkNjE5ZDI2M2Q2MjEuNWQzMDUuNWQ2MjRkMzQ4ZDU5MC41ZDM5N2Q1NTdkNDQ2ZDQ4Mi41ZDUwMGQ0MDhkNTU0ZDI4NWQ2MDlkNDI5ZDY1MGQ0MjlkNjc5ZDQxOGQ2ODBkMzkwLjVkNjgxLjVkMzYzZDY4M2QzMjlkNjgyLjVkMjk1ZDY4MmQyNjBkNjc4LjVkMjI1ZDY3NWQxOTlkNjY1LjVkMTczZDY1NmQxNjAuNWQ2NDBkMTQ4ZDYyNGQxNTlkNTk4aFIzZDY0N1I0ZDYyNFI1ZDEzUjZkODc4UjdkLTdSOGQ4NjVSOWQ3NzlSMTBkNTQwUjExaTYzUjEyZDEzUjEzZDY0N1IxNGFpMWkzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTJpM2kzaTNpM2kzaTNoZzoxNzVvUjFkMTI2M1IyYWQzN2QzMjVkMzdkMzA4ZDUxLjVkMzAxLjVkNjZkMjk1ZDgxZDI5M2QxMzhkMjg1ZDE5Mi41ZDI3NS41ZDI0N2QyNjZkMzA2ZDI2MGQzMzFkMjYwZDM0OC41ZDI2OC41ZDM2NmQyNzdkMzcxLjVkMjg4LjVkMzc3ZDMwMGQzNzBkMzEyLjVkMzYzZDMyNWQzNDBkMzMyZDEwMGQzNTdkOTJkMzU3ZDgxZDM1NmQ3MGQzNTVkNjAuNWQzNTEuNWQ1MWQzNDhkNDRkMzQyZDM3ZDMzNmQzN2QzMjVoUjNkMzk3UjRkMzc3UjVkMzdSNmQ3NjRSN2Q2NjdSOGQ3MjdSOWQ3NzlSMTBkNTQwUjExaTE3NVIxMmQzN1IxM2QzOTdSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2hnOjYyb1IxZDEyNjNSMmFkMTQ3ZDk2NGQxMDVkOTQ4ZDkyZDkzMC41ZDc5ZDkxM2Q4Ni41ZDg5NWQ5NGQ4NzdkMTE4ZDg1OGQxNDJkODM5ZDE3NGQ4MTlkMjA2ZDc5OWQyNDJkNzc4LjVkMjc4ZDc1OGQzMDkuNWQ3MzcuNWQzNDFkNzE3ZDM2NGQ2OTUuNWQzODdkNjc0ZDM5M2Q2NTNkNjJkNTI5ZDEyNWQ0NjhkMTY2ZDQ5N2QyMDIuNWQ1MTRkMjM5ZDUzMWQyNzIuNWQ1NDFkMzA2ZDU1MWQzMzhkNTU3LjVkMzcwZDU2NGQ0MDJkNTcyLjVkNDM0ZDU4MWQ0NjZkNTk1LjVkNDk4ZDYxMGQ1MzNkNjM1ZDUwMWQ2NzRkNDUxLjVkNzEzLjVkNDAyZDc1M2QzNDcuNWQ3OTRkMjkzZDgzNWQyNDBkODc3LjVkMTg3ZDkyMGQxNDdkOTY0aFIzZDYwNFI0ZDUzM1I1ZDYyUjZkNTU2UjdkNjBSOGQ0OTRSOWQ3NzlSMTBkNTQwUjExaTYyUjEyZDYyUjEzZDYwNFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpMmkyaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxNzRvUjFkMTI2M1IyYWQ0OGQ3ODZkNTFkNzM1ZDY0LjVkNjc1LjVkNzhkNjE2ZDEwMWQ1NTdkMTI0ZDQ5OGQxNTYuNWQ0NDMuNWQxODlkMzg5ZDIzMmQzNDdkMjc1ZDMwNWQzMjhkMjgwZDM4MWQyNTVkNDQ1ZDI1NWQ1MjlkMjU1ZDU5MGQyODcuNWQ2NTFkMzIwZDY5MWQzNzNkNzMxZDQyNmQ3NTBkNDk0LjVkNzY5ZDU2M2Q3NjlkNjM2ZDc2OWQ3MzFkNzM3LjVkODAzLjVkNzA2ZDg3NmQ2NDlkOTI1LjVkNTkyZDk3NWQ1MTMuNWQxMDAwLjVkNDM1ZDEwMjZkMzQxZDEwMjZkMjk1ZDEwMjZkMjQyZDEwMTJkMTg5ZDk5OGQxNDQuNWQ5NjlkMTAwZDk0MGQ3MmQ4OTQuNWQ0NGQ4NDlkNDhkNzg2ZDMxNmQ4MTlkMzE2ZDgyNGQzMTJkODI2LjVkMzA4ZDgyOWQzMDNkODI5LjVkMjk4ZDgzMGQyOTMuNWQ4MzBkMjg5ZDgzMGQyODdkODMwZDI2NmQ4MzBkMjYxLjVkODAyLjVkMjU3ZDc3NWQyNThkNzI3ZDI1OWQ2NzlkMjYwZDYxNGQyNjFkNTQ5ZDI1MmQ0NzRkMjU4ZDQ2NGQyNjVkNDYzZDI3MmQ0NjJkMjc4ZDQ2NmQyODRkNDcwZDI4OS41ZDQ3NmQyOTVkNDgyZDI5OGQ0ODZkMzE0ZDQ3MmQzNDIuNWQ0NjQuNWQzNzFkNDU3ZDQwNGQ0NTVkNDM3ZDQ1M2Q0NzEuNWQ0NTYuNWQ1MDZkNDYwZDUzNC41ZDQ2OGQ1NjNkNDc2ZDU4MmQ0ODdkNjAxZDQ5OGQ2MDNkNTEyLjVkNjA1ZDUyN2Q1ODZkNTQzLjVkNTY3ZDU2MGQ1MjBkNTc4ZDUwOWQ1ODNkNDgxLjVkNTkxLjVkNDU0ZDYwMGQ0MjRkNjEwZDM5NGQ2MjBkMzY4ZDYyOWQzNDJkNjM4ZDMzM2Q2NDRkMzMzZDY0OGQzNDBkNjUxLjVkMzQ3ZDY1NWQzNzdkNjcwZDQwN2Q2ODVkNDY5ZDcxNi41ZDUzMWQ3NDhkNjQxZDgwNmQ2NDVkODA5ZDY1MWQ4MTMuNWQ2NTdkODE4ZDY2MGQ4MjNkNzA3ZDc0M2Q3MDdkNjIzZDcxMGQ0NzFkNjM0ZDM5MC41ZDU1OGQzMTBkNDE0ZDMxOGQzNzNkMzExZDMzNS41ZDMzNi41ZDI5OGQzNjJkMjY1LjVkNDA2ZDIzM2Q0NTBkMjA2LjVkNTA2LjVkMTgwZDU2M2QxNjFkNjE4ZDE0MmQ2NzNkMTMxLjVkNzIwLjVkMTIxZDc2OGQxMjFkNzk1ZDEyMWQ4NDhkMTQyZDg4MWQxNjNkOTE0ZDE5Ny41ZDkzMi41ZDIzMmQ5NTFkMjc0LjVkOTU3LjVkMzE3ZDk2NGQzNjFkOTY0ZDU1OWQ5NjRkNjQ2ZDg0NWQ2MzhkODQ3ZDYzMC41ZDg0Ni41ZDYyM2Q4NDZkNjE4ZDg0NmQ2MDZkODQ2ZDU3MS41ZDgyNWQ1MzdkODA0ZDQ5Mi41ZDc3NmQ0NDhkNzQ4ZDQwMC41ZDcyMWQzNTNkNjk0ZDMxNmQ2ODJkMzE2ZDgxOWQzMDZkNTIzZDMwMWQ1MjlkMzAwZDU0MC41ZDI5OWQ1NTJkMzAxZDU2NGQzMDNkNTc2ZDMwN2Q1ODYuNWQzMTFkNTk3ZDMxNmQ2MDJkMzIzZDYwNGQzNDlkNTk4ZDM3NWQ1OTJkNDA3LjVkNTgxLjVkNDQwZDU3MWQ0NzIuNWQ1NThkNTA1ZDU0NWQ1MjQuNWQ1MzJkNTQ0ZDUxOWQ1NDVkNTA4LjVkNTQ2ZDQ5OGQ1MTZkNDkzZDQ5OWQ0OTNkNDY3LjVkNDkzZDQzNmQ0OTNkNDAzLjVkNDk1ZDM3MWQ0OTdkMzQzLjVkNTAzLjVkMzE2ZDUxMGQzMDZkNTIzaFIzZDgwOFI0ZDc2OVI1ZDQ0UjZkNzY5UjdkLTJSOGQ3MjVSOWQ3NzlSMTBkNTQwUjExaTE3NFIxMmQ0NFIxM2Q4MDhSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjYxb1IxZDEyNjNSMmFkODhkODA3ZDg4ZDgwMmQ5NmQ3OTRkMTA0ZDc4NmQxMDlkNzg2ZDE1OWQ3NzhkMTk2LjVkNzcyLjVkMjM0ZDc2N2QyNjUuNWQ3NjMuNWQyOTdkNzYwZDMyNS41ZDc1N2QzNTRkNzU0ZDM4NC41ZDc1MGQ0MTVkNzQ2ZDQ1MGQ3NDBkNDg1ZDczNGQ1MzFkNzI1ZDU2MGQ3MjVkNTY4LjVkNzQzLjVkNTc3ZDc2MmQ1NzJkNzg4ZDUwMWQ3ODhkNDQ3ZDc5OGQzOTNkODA4ZDM0Mi41ZDgxOS41ZDI5MmQ4MzFkMjM5ZDg0MC41ZDE4NmQ4NTBkMTE4ZDg1MGQxMDNkODUwZDk1LjVkODQxZDg4ZDgzMmQ4OGQ4MDdkMTA1ZDYyMGQxMDZkNjE4ZDEyNmQ2MTUuNWQxNDZkNjEzZDE3N2Q2MDkuNWQyMDhkNjA2ZDI0Ny41ZDYwMS41ZDI4N2Q1OTdkMzI4LjVkNTkyLjVkMzcwZDU4OGQ0MTAuNWQ1ODNkNDUxZDU3OGQ0ODRkNTczZDUwNGQ1NjdkNTE0LjVkNTczZDUyNWQ1NzlkNTI3ZDU5MWQ1MjlkNjAzZDUyMy41ZDYxNi41ZDUxOGQ2MzBkNTA2ZDYzOGQxNDJkNjg3ZDEzNmQ2ODdkMTI2LjVkNjg3LjVkMTE3ZDY4OGQxMDdkNjg2LjVkOTdkNjg1ZDg5LjVkNjgwLjVkODJkNjc2ZDgwZDY2NWQxMDVkNjIwaFIzZDYzMFI0ZDU3N1I1ZDgwUjZkNDU3UjdkMTc0UjhkMzc3UjlkNzc5UjEwZDU0MFIxMWk2MVIxMmQ4MFIxM2Q2MzBSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTJoZzoxNzNvUjFkMTI2M1IyYWhSM2Q4NjVSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDc3OVIxMGQ1NDBSMTFpMTczUjEyZDBSMTNkODY1UjE0YWhnOjYwb1IxZDEyNjNSMmFkMTA1ZDczOGQxNDVkNzA3ZDE5OC41ZDY2NGQyNTJkNjIxZDMwNy41ZDU3OGQzNjNkNTM1ZDQxNGQ0OTcuNWQ0NjVkNDYwZDUwMWQ0NDBkNTEwZDQ0MWQ1MTZkNDQ5ZDUyMmQ0NTdkNTI1LjVkNDY4ZDUyOWQ0NzlkNTI4LjVkNDkwLjVkNTI4ZDUwMmQ1MjRkNTA5ZDIzMGQ3MzNkMjQ5ZDc0MmQyODMuNWQ3NTguNWQzMThkNzc1ZDM2MWQ3OTZkNDA0ZDgxN2Q0NTAuNWQ4NDJkNDk3ZDg2N2Q1MzlkODk1ZDUzN2Q4OTdkNTMzLjVkOTA1LjVkNTMwZDkxNGQ1MjUuNWQ5MjMuNWQ1MjFkOTMzZDUxN2Q5NDEuNWQ1MTNkOTUwZDUxMWQ5NTBkNDg3ZDkzNWQ0NTEuNWQ5MjFkNDE2ZDkwN2QzNzVkODkyZDMzNGQ4NzdkMjkxLjVkODYwLjVkMjQ5ZDg0NGQyMTJkODI1LjVkMTc1ZDgwN2QxNDYuNWQ3ODUuNWQxMThkNzY0ZDEwNWQ3MzhoUjNkNjA5UjRkNTM5UjVkMTA1UjZkNTg0UjdkNzRSOGQ0NzlSOWQ3NzlSMTBkNTQwUjExaTYwUjEyZDEwNVIxM2Q2MDlSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTcyb1IxZDEyNjNSMmFkNzE2ZDg3M2Q2NzlkODc3ZDY2M2Q4NzIuNWQ2NDdkODY4ZDY0Mi41ZDg0OGQ2MzhkODI4ZDY0MC41ZDc4OC41ZDY0M2Q3NDlkNjQzZDY4M2Q5MWQ2OTJkOTVkNjEwZDE2OWQ2MTNkMjU1ZDYwNmQzNDFkNTk5ZDQyNi41ZDU5Mi41ZDUxMmQ1ODZkNTkxLjVkNTg0LjVkNjcxZDU4M2Q3MzRkNTk4ZDczMGQ2NDBkNzI5ZDY2NWQ3MjhkNjkwZDcyOGQ3MDdkNzI4ZDcyNGQ3MjhkNzM2LjVkNzI4ZDc0OWQ3MjcuNWQ3NjUuNWQ3MjdkNzgyZDcyNGQ4MDdkNzIxZDgzMmQ3MTZkODczaFIzZDc2N1I0ZDczNFI1ZDkxUjZkNDQxUjdkMTQ3UjhkMzUwUjlkNzc5UjEwZDU0MFIxMWkxNzJSMTJkOTFSMTNkNzY3UjE0YWkxaTNpM2kzaTNpMmkyaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzo1OW9SMWQxMjYzUjJhZC0yOGQxMjMyZC0yZDExNDRkMTYuNWQxMDgzLjVkMzVkMTAyM2Q0Ny41ZDk4My41ZDYwZDk0NGQ2N2Q5MjIuNWQ3NGQ5MDFkNzhkODkxZDgyZDg4MWQ4M2Q4NzkuNWQ4NGQ4NzhkODVkODc4ZDEwNWQ4NzhkMTEyLjVkODkxZDEyMGQ5MDRkMTIwZDkyMGQxMjBkOTU4ZDExNS41ZDEwMDMuNWQxMTFkMTA0OWQ5NmQxMDkzZDgxZDExMzdkNTEuNWQxMTc0LjVkMjJkMTIxMmQtMjhkMTIzMmQzM2Q2MjFkMzVkNTk3ZDQ4LjVkNTg2ZDYyZDU3NWQ3Ny41ZDU3NWQ5M2Q1NzVkMTA2ZDU4Ni41ZDExOWQ1OThkMTIwZDYyMGQxMjBkNjI5ZDExNWQ2NDBkMTEwZDY1MWQ5N2Q2NTFkOTBkNjUxZDc5LjVkNjUwZDY5ZDY0OWQ1OC41ZDY0NmQ0OGQ2NDNkNDAuNWQ2MzdkMzNkNjMxZDMzZDYyMWhSM2QxNTlSNGQxMjBSNWQtMjhSNmQ0NDlSN2QtMjA4UjhkNDc3UjlkNzc5UjEwZDU0MFIxMWk1OVIxMmQtMjhSMTNkMTU5UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjE3MW9SMWQxMjYzUjJhZDEwNWQ3MzhkMTQ1ZDcwN2QxOTguNWQ2NjRkMjUyZDYyMWQzMDcuNWQ1NzhkMzYzZDUzNWQ0MTRkNDk3LjVkNDY1ZDQ2MGQ1MDFkNDQwZDUxMGQ0NDFkNTE2ZDQ0OWQ1MjJkNDU3ZDUyNS41ZDQ2OGQ1MjlkNDc5ZDUyOC41ZDQ5MC41ZDUyOGQ1MDJkNTI0ZDUwOWQyMzBkNzMzZDI0OWQ3NDJkMjgzLjVkNzU4LjVkMzE4ZDc3NWQzNjFkNzk2ZDQwNGQ4MTdkNDUwLjVkODQyZDQ5N2Q4NjdkNTM5ZDg5NWQ1MzdkODk3ZDUzMy41ZDkwNS41ZDUzMGQ5MTRkNTI1LjVkOTIzLjVkNTIxZDkzM2Q1MTdkOTQxLjVkNTEzZDk1MGQ1MTFkOTUwZDQ4N2Q5MzVkNDUxLjVkOTIxZDQxNmQ5MDdkMzc1ZDg5MmQzMzRkODc3ZDI5MS41ZDg2MC41ZDI0OWQ4NDRkMjEyZDgyNS41ZDE3NWQ4MDdkMTQ2LjVkNzg1LjVkMTE4ZDc2NGQxMDVkNzM4ZDM5N2Q3MTBkNDM3ZDY3OWQ0OTAuNWQ2MzZkNTQ0ZDU5M2Q1OTkuNWQ1NTBkNjU1ZDUwN2Q3MDZkNDY5LjVkNzU3ZDQzMmQ3OTNkNDEyZDgwMmQ0MTNkODA4ZDQyMWQ4MTRkNDI5ZDgxNy41ZDQ0MGQ4MjFkNDUxZDgyMC41ZDQ2Mi41ZDgyMGQ0NzRkODE2ZDQ4MWQ1MjJkNzA1ZDU0MWQ3MTRkNTc1LjVkNzMwLjVkNjEwZDc0N2Q2NTNkNzY4ZDY5NmQ3ODlkNzQyLjVkODE0ZDc4OWQ4MzlkODMxZDg2N2Q4MjlkODY5ZDgyNS41ZDg3Ny41ZDgyMmQ4ODZkODE3LjVkODk1LjVkODEzZDkwNWQ4MDlkOTEzLjVkODA1ZDkyMmQ4MDNkOTIyZDc3OWQ5MDdkNzQzLjVkODkzZDcwOGQ4NzlkNjY3ZDg2NGQ2MjZkODQ5ZDU4My41ZDgzMi41ZDU0MWQ4MTZkNTA0ZDc5Ny41ZDQ2N2Q3NzlkNDM4LjVkNzU3LjVkNDEwZDczNmQzOTdkNzEwaFIzZDg5N1I0ZDgzMVI1ZDEwNVI2ZDYxMlI3ZDc0UjhkNTA3UjlkNzc5UjEwZDU0MFIxMWkxNzFSMTJkMTA1UjEzZDg5N1IxNGFpMWkzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzo1OG9SMWQxMjYzUjJhZDk2ZDg2NmQ5NmQ4NDdkMTEzZDgzMGQxMzBkODEzZDE0OWQ4MTNkMTczZDgxM2QxODMuNWQ4MjdkMTk0ZDg0MWQxOTMuNWQ4NTdkMTkzZDg3M2QxODJkODg2ZDE3MWQ4OTlkMTUwZDg5OGQxNDJkODk4ZDEzM2Q4OTYuNWQxMjRkODk1ZDExNS41ZDg5MS41ZDEwN2Q4ODhkMTAxLjVkODgxLjVkOTZkODc1ZDk2ZDg2NmQ1NmQ2MjdkNDBkNjIyZDM4LjVkNjExLjVkMzdkNjAxZDQ0LjVkNTkwLjVkNTJkNTgwZDY0ZDU3MmQ3NmQ1NjRkODdkNTYzZDEyNmQ1NjhkMTM5ZDU4NmQxNTJkNjA0ZDE0NS41ZDYxOWQxMzlkNjM0ZDExNWQ2NDBkOTFkNjQ2ZDU2ZDYyN2hSM2QyMTRSNGQxOTRSNWQzN1I2ZDQ2MVI3ZDEyNVI4ZDQyNFI5ZDc3OVIxMGQ1NDBSMTFpNThSMTJkMzdSMTNkMjE0UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNoZzoxNzBvUjFkMTI2M1IyYWQ1MzRkNTMxZDUwNWQ1NzZkNDY3ZDYxMi41ZDQyOWQ2NDlkMzgzLjVkNjc0LjVkMzM4ZDcwMGQyODQuNWQ3MTJkMjMxZDcyNGQxNzJkNzE5ZDE1MWQ3MTlkMTI3ZDcxNGQxMDNkNzA5ZDgyLjVkNjk4ZDYyZDY4N2Q0OWQ2NjlkMzZkNjUxZDM2ZDYyNGQyNWQ1NjhkNDAuNWQ1MTAuNWQ1NmQ0NTNkODlkMzk5LjVkMTIyZDM0NmQxNzBkMzAwLjVkMjE4ZDI1NWQyNzIuNWQyMjMuNWQzMjdkMTkyZDM4NC41ZDE3OGQ0NDJkMTY0ZDQ5NmQxNzRkNTM3ZDE3NGQ1NjBkMjAxZDU4M2QyMjhkNTk0LjVkMjczZDYwNmQzMThkNjA5ZDM3Ni41ZDYxMmQ0MzVkNjE0ZDQ5N2Q2MTZkNTU5ZDYxOS41ZDYxOS41ZDYyM2Q2ODBkNjM1ZDczMGQ1NjFkNzMwZDU1NmQ2OTZkNTUzLjVkNjcwZDU1MWQ2NDRkNTQ5ZDYyMS41ZDU0N2Q1OTlkNTQzLjVkNTc4ZDU0MGQ1NTdkNTM0ZDUzMWQ0NThkMjY0ZDQxOWQyNjFkMzc3LjVkMjc0LjVkMzM2ZDI4OGQyOTcuNWQzMTIuNWQyNTlkMzM3ZDIyNS41ZDM3MC41ZDE5MmQ0MDRkMTY3ZDQ0MGQxNDJkNDc2ZDEyOC41ZDUxMS41ZDExNWQ1NDdkMTE3LjVkNTc3ZDEyMGQ2MDdkMTQwZDYyOGQxNjBkNjQ5ZDIwMmQ2NTZkMjYyZDY1NWQzMTcuNWQ2MjUuNWQzNzNkNTk2ZDQxNi41ZDU1Mi41ZDQ2MGQ1MDlkNDg5ZDQ1OC41ZDUxOGQ0MDhkNTI2LjVkMzY1ZDUzNWQzMjJkNTE5ZDI5M2Q1MDNkMjY0ZDQ1OGQyNjRoUjNkMzE5UjRkMjg0UjVkMTZSNmQ1OTdSN2QyOTBSOGQ1ODFSOWQ3NzlSMTBkNTQwUjExaTE3MFIxMmQxNlIxM2QzMTlSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjU3b1IxZDEyNjNSMmFkMzA5ZDEwMjRkMjkzZDEwMjFkMjgxZDEwMDVkMjY5ZDk4OWQyNjlkOTY2ZDMxNWQ5MzhkMzYzLjVkOTA0LjVkNDEyZDg3MWQ0NTJkODI4LjVkNDkyZDc4NmQ1MTkuNWQ3MzIuNWQ1NDdkNjc5ZDU1MmQ2MTBkNTEwZDYwOGQ0NjUuNWQ2MTRkNDIxZDYyMGQzNzdkNjI3LjVkMzMzZDYzNWQyODkuNWQ2NDFkMjQ2ZDY0N2QyMDQuNWQ2NDMuNWQxNjNkNjQwZDEyNS41ZDYyNWQ4OGQ2MTBkNTVkNTc2ZDMxZDU0M2Q0MC41ZDUwMy41ZDUwZDQ2NGQ4Mi41ZDQyNWQxMTVkMzg2ZDE2My41ZDM1MWQyMTJkMzE2ZDI2NWQyOTJkMzE4ZDI2OGQzNjguNWQyNThkNDE5ZDI0OGQ0NTZkMjU5ZDUzNGQyODNkNTc5LjVkMzI4ZDYyNWQzNzNkNjQ0ZDQzMC41ZDY2M2Q0ODhkNjU5ZDU1My41ZDY1NWQ2MTlkNjMzZDY4NC41ZDYxMWQ3NTBkNTc1LjVkODEwLjVkNTQwZDg3MWQ0OTYuNWQ5MTcuNWQ0NTNkOTY0ZDQwNC41ZDk5M2QzNTZkMTAyMmQzMDlkMTAyNGQxNTVkNTQxZDE5NWQ1NTlkMjQ0LjVkNTY0ZDI5NGQ1NjlkMzQ1LjVkNTY0LjVkMzk3ZDU2MGQ0NDlkNTQ3ZDUwMWQ1MzRkNTQ4ZDUxNWQ1NTZkNDgyZDU1MmQ0NTEuNWQ1NDhkNDIxZDUzMi41ZDM5Ni41ZDUxN2QzNzJkNDkwLjVkMzU2ZDQ2NGQzNDBkNDI3ZDMzOGQzNzdkMzM4ZDMyOGQzNDhkMjc5ZDM1OGQyNDAuNWQzODEuNWQyMDJkNDA1ZDE3OC41ZDQ0NGQxNTVkNDgzZDE1NWQ1NDFoUjNkNzI5UjRkNjYzUjVkMzFSNmQ3NzZSN2QwUjhkNzQ1UjlkNzc5UjEwZDU0MFIxMWk1N1IxMmQzMVIxM2Q3MjlSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxNjlvUjFkMTI2M1IyYWQ0OGQ3ODZkNTFkNzM1ZDY0LjVkNjc1LjVkNzhkNjE2ZDEwMWQ1NTdkMTI0ZDQ5OGQxNTYuNWQ0NDMuNWQxODlkMzg5ZDIzMmQzNDdkMjc1ZDMwNWQzMjhkMjgwZDM4MWQyNTVkNDQ1ZDI1NWQ1MjlkMjU1ZDU5MGQyODcuNWQ2NTFkMzIwZDY5MWQzNzNkNzMxZDQyNmQ3NTBkNDk0LjVkNzY5ZDU2M2Q3NjlkNjM2ZDc2OWQ3MzFkNzM3LjVkODAzLjVkNzA2ZDg3NmQ2NDlkOTI1LjVkNTkyZDk3NWQ1MTMuNWQxMDAwLjVkNDM1ZDEwMjZkMzQxZDEwMjZkMjk1ZDEwMjZkMjQyZDEwMTJkMTg5ZDk5OGQxNDQuNWQ5NjlkMTAwZDk0MGQ3MmQ4OTQuNWQ0NGQ4NDlkNDhkNzg2ZDEyMWQ3OTVkMTIxZDg0OGQxNDJkODgxZDE2M2Q5MTRkMTk3LjVkOTMyLjVkMjMyZDk1MWQyNzQuNWQ5NTcuNWQzMTdkOTY0ZDM2MWQ5NjRkNTMzZDk2NGQ2MjBkODc1ZDcwN2Q3ODZkNzA3ZDYyM2Q3MTBkNDcxZDYzNGQzOTAuNWQ1NThkMzEwZDQxNGQzMThkMzczZDMxMWQzMzUuNWQzMzYuNWQyOThkMzYyZDI2NS41ZDQwNmQyMzNkNDUwZDIwNi41ZDUwNi41ZDE4MGQ1NjNkMTYxZDYxOGQxNDJkNjczZDEzMS41ZDcyMC41ZDEyMWQ3NjhkMTIxZDc5NWQyMDVkNzE2ZDIwM2Q2NzZkMjE0LjVkNjM2ZDIyNmQ1OTZkMjQ3LjVkNTU5LjVkMjY5ZDUyM2QyOThkNDkyZDMyN2Q0NjFkMzU5ZDQzOS41ZDM5MWQ0MThkNDIzLjVkNDA3ZDQ1NmQzOTZkNDg2ZDQwMGQ0OThkNDAwZDUwOC41ZDQwMmQ1MTlkNDA0ZDUyNy41ZDQxMWQ1MzZkNDE4ZDU0MWQ0MzEuNWQ1NDZkNDQ1ZDU0NmQ0NjdkNTQ2ZDQ4OWQ1MzNkNTA0ZDUyMGQ1MTlkNTEwZDUzMGQ1MDdkNTA0ZDUwMWQ0ODdkNDk1ZDQ3MGQ0NzVkNDcwZDQ0MmQ0ODFkNDAyLjVkNTAxLjVkMzYzZDUyMmQzMzBkNTUxLjVkMjk3ZDU4MWQyNzdkNjE4LjVkMjU3ZDY1NmQyNjJkNjk5ZDI2MmQ3MzhkMjcxLjVkNzYxLjVkMjgxZDc4NWQyOTdkNzk3LjVkMzEzZDgxMGQzMzMuNWQ4MTQuNWQzNTRkODE5ZDM3NWQ4MTlkNDA3ZDgxOWQ0MzcuNWQ4MDQuNWQ0NjhkNzkwZDQ5Ny41ZDc3MmQ1MjdkNzU0ZDU1NWQ3MzkuNWQ1ODNkNzI1ZDYxMGQ3MjVkNjIwZDcyNWQ2MjguNWQ3MzAuNWQ2MzdkNzM2ZDYzM2Q3NjFkNjMwZDc3N2Q2MTNkNzkyLjVkNTk2ZDgwOGQ1NzAuNWQ4MjJkNTQ1ZDgzNmQ1MTQuNWQ4NDguNWQ0ODRkODYxZDQ1NmQ4NjkuNWQ0MjhkODc4ZDQwNWQ4ODNkMzgyZDg4OGQzNzFkODg4ZDM0NmQ4ODhkMzE3ZDg3OS41ZDI4OGQ4NzFkMjYzZDg1MWQyMzhkODMxZDIyMS41ZDc5OGQyMDVkNzY1ZDIwNWQ3MTZoUjNkODA4UjRkNzY5UjVkNDRSNmQ3NjlSN2QtMlI4ZDcyNVI5ZDc3OVIxMGQ1NDBSMTFpMTY5UjEyZDQ0UjEzZDgwOFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjU2b1IxZDEyNjNSMmFkMjhkODM4ZDI4ZDgwNmQ0Ny41ZDc3NmQ2N2Q3NDZkOTFkNzE4LjVkMTE1ZDY5MWQxMzQuNWQ2NjZkMTU0ZDY0MWQxNTRkNjIwZDE1NGQ2MDVkMTQ3ZDU5M2QxNDBkNTgxZDEzMS41ZDU3MGQxMjNkNTU5ZDExNmQ1NDYuNWQxMDlkNTM0ZDEwOWQ1MTdkMTA5ZDQ3MmQxMjlkNDM2LjVkMTQ5ZDQwMWQxODJkMzc0ZDIxNWQzNDdkMjU3LjVkMzI4ZDMwMGQzMDlkMzQ0ZDI5N2QzODhkMjg1ZDQzMC41ZDI3OS41ZDQ3M2QyNzRkNTA2ZDI3NGQ1NDBkMjc0ZDU4MGQyNzUuNWQ2MjBkMjc3ZDY1NC41ZDI4OGQ2ODlkMjk5ZDcxMmQzMjMuNWQ3MzVkMzQ4ZDczNWQzOTNkNzM0ZDQzNGQ3MTQuNWQ0NjdkNjk1ZDUwMGQ2NzFkNTI2ZDcwNWQ1NDBkNzI5ZDU1My41ZDc1M2Q1NjdkNzY4ZDU4NWQ3ODNkNjAzZDc5MGQ2MjlkNzk3ZDY1NWQ3OTdkNjkyZDc5N2Q3NDlkNzc2LjVkNzk1LjVkNzU2ZDg0MmQ3MjEuNWQ4NzlkNjg3ZDkxNmQ2NDEuNWQ5NDMuNWQ1OTZkOTcxZDU0NWQ5ODlkNDk0ZDEwMDdkNDQxZDEwMTZkMzg4ZDEwMjVkMzM5ZDEwMjVkMzA5ZDEwMjVkMjc0LjVkMTAyMS41ZDI0MGQxMDE4ZDIwNS41ZDEwMTBkMTcxZDEwMDJkMTM5ZDk4OGQxMDdkOTc0ZDgyLjVkOTUzZDU4ZDkzMmQ0M2Q5MDRkMjhkODc2ZDI4ZDgzOGQxMjlkODI0ZDEyOWQ4NzFkMTUzLjVkODk5ZDE3OGQ5MjdkMjE0LjVkOTQxLjVkMjUxZDk1NmQyOTMuNWQ5NjBkMzM2ZDk2NGQzNzNkOTY0ZDQzOGQ5NjRkNTAwZDk0N2Q1NjJkOTMwZDYxMGQ4OTUuNWQ2NThkODYxZDY4N2Q4MDkuNWQ3MTZkNzU4ZDcxNmQ2ODlkNzAxZDYzOWQ2NTMuNWQ2MTVkNjA2ZDU5MWQ1NDIuNWQ1ODguNWQ0NzlkNTg2ZDQwOC41ZDYwMy41ZDMzOGQ2MjFkMjc4ZDY1Mi41ZDIxOGQ2ODRkMTc2ZDcyOGQxMzRkNzcyZDEyOWQ4MjRkMjEyZDQ5MmQyMTJkNTI5ZDIzNmQ1NDguNWQyNjBkNTY4ZDI5OGQ1NjhkMzIwZDU3MGQzNTVkNTY0ZDM5MGQ1NThkNDMwZDU0Ni41ZDQ3MGQ1MzVkNTEwLjVkNTE5LjVkNTUxZDUwNGQ1ODUuNWQ0ODZkNjIwZDQ2OGQ2NDMuNWQ0NDkuNWQ2NjdkNDMxZDY3M2Q0MTNkNjczZDM5MWQ2NjNkMzc0ZDY1M2QzNTdkNjMxZDM1N2Q2MDZkMzQ1ZDU2N2QzMzguNWQ1MjhkMzMyZDQ4My41ZDMzM2Q0MzlkMzM0ZDM5M2QzNDNkMzQ3ZDM1MmQzMDlkMzcxZDI3MWQzOTBkMjQ0LjVkNDIwZDIxOGQ0NTBkMjEyZDQ5MmhSM2Q4MzBSNGQ3OTdSNWQyOFI2ZDc1MFI3ZC0xUjhkNzIyUjlkNzc5UjEwZDU0MFIxMWk1NlIxMmQyOFIxM2Q4MzBSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTY4b1IxZDEyNjNSMmFkODNkMjM1ZDgzZDIzMGQ5Mi41ZDIyMi41ZDEwMmQyMTVkMTE0ZDIwOWQxMjdkMjAyZDE0NWQxOTRkMTcxZDE5NGQxODAuNWQyMDVkMTkwZDIxNmQxOTBkMjM2ZDE5MGQyNTFkMTgyLjVkMjU5LjVkMTc1ZDI2OGQxNjMuNWQyNzJkMTUyZDI3NmQxMzguNWQyNzdkMTI1ZDI3OGQxMTNkMjc4ZDk3ZDI3OGQ5MGQyNjguNWQ4M2QyNTlkODNkMjM1ZDI2M2QyMzVkMjYzZDIzMGQyNzIuNWQyMjIuNWQyODJkMjE1ZDI5NGQyMDlkMzA4ZDIwMmQzMjZkMTk0ZDM1MmQxOTRkMzYxLjVkMjA1ZDM3MWQyMTZkMzcxZDIzNmQzNzFkMjUxZDM2My41ZDI1OS41ZDM1NmQyNjhkMzQ0LjVkMjcyZDMzM2QyNzZkMzE5ZDI3N2QzMDVkMjc4ZDI5M2QyNzhkMjc3ZDI3OGQyNzBkMjY4LjVkMjYzZDI1OWQyNjNkMjM1aFIzZDQ3NVI0ZDM3MVI1ZDgzUjZkODMwUjdkNzQ2UjhkNzQ3UjlkNzc5UjEwZDU0MFIxMWkxNjhSMTJkODNSMTNkNDc1UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjU1b1IxZDEyNjNSMmFkNTcwZDQyNmQ1MDNkNDI2ZDQzNi41ZDQzMGQzNzBkNDM0ZDMwMy41ZDQzOGQyMzdkNDQyZDE3MGQ0NDRkMTAzZDQ0NmQzNWQ0NDJkMjJkNDM2ZDE3LjVkNDI5LjVkMTNkNDIzZDEzZDQxMmQxM2Q0MDFkMTcuNWQzOTRkMjJkMzg3ZDM1ZDM4MWQxMjNkMzg0ZDIwOS41ZDM3NC41ZDI5NmQzNjVkMzgxLjVkMzUyZDQ2N2QzMzlkNTUyZDMyNy41ZDYzN2QzMTZkNzIyZDMxNmQ3NDJkMzE2ZDc1M2QzMjcuNWQ3NjRkMzM5ZDc2MmQzNTlkNzA2ZDQyMWQ2NTFkNDk2LjVkNTk2ZDU3MmQ1NTUuNWQ2NTUuNWQ1MTVkNzM5ZDQ5NS41ZDgyNy41ZDQ3NmQ5MTZkNDkyZDEwMDRkMzg4ZDEwMjRkMzg4ZDEwMjBkMzg3ZDEwMDkuNWQzODZkOTk5ZDM4NS41ZDk4Ny41ZDM4NWQ5NzZkMzg0LjVkOTY2ZDM4NGQ5NTZkMzg0ZDk1MWQzODJkOTAxZDM5M2Q4NTEuNWQ0MDRkODAyZDQyMi41ZDc1NC41ZDQ0MWQ3MDdkNDYzLjVkNjYyZDQ4NmQ2MTdkNTA3ZDU3NS41ZDUyOGQ1MzRkNTQ1ZDQ5Ni41ZDU2MmQ0NTlkNTcwZDQyNmhSM2Q3ODhSNGQ3NjRSNWQxM1I2ZDcwOFI3ZDBSOGQ2OTVSOWQ3NzlSMTBkNTQwUjExaTU1UjEyZDEzUjEzZDc4OFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxNjdvUjFkMTI2M1IyYWQ4MWQ5MzhkMTQxZDkyOGQxOTcuNWQ5MTIuNWQyNTRkODk3ZDMwMS41ZDg3OWQzNDlkODYxZDM4My41ZDg0MmQ0MThkODIzZDQzNWQ4MDdkNDUyZDc5MWQ0NDhkNzc5ZDQ0NGQ3NjdkNDEzZDc2M2QzODJkNzU5ZDMyMmQ3NjMuNWQyNjJkNzY4ZDE2NmQ3ODVkMTMwZDc4NGQxMDEuNWQ3NzFkNzNkNzU4ZDUzZDczOWQzM2Q3MjBkMjIuNWQ2OTcuNWQxMmQ2NzVkMTJkNjU0ZDEyZDYxMmQ0NmQ1NzIuNWQ4MGQ1MzNkMTM1ZDUwMGQ5M2Q0ODFkNzBkNDQ4LjVkNDdkNDE2ZDQ3ZDM4NGQ0N2QzNTFkNjkuNWQzMTguNWQ5MmQyODZkMTMwZDI1N2QxNjhkMjI4ZDIxOGQyMDQuNWQyNjhkMTgxZDMyM2QxNjYuNWQzNzhkMTUyZDQzNS41ZDE0Ny41ZDQ5M2QxNDNkNTQ2ZDE1M2Q1NzZkMTUzZDU4MWQxNzkuNWQ1ODZkMjA2ZDU4NmQyNjVkNTQ1ZDI0N2Q0OTcuNWQyMzguNWQ0NTBkMjMwZDQwMmQyMzJkMzU0ZDIzNGQzMDlkMjQ1LjVkMjY0ZDI1N2QyMjkuNWQyNzcuNWQxOTVkMjk4ZDE3M2QzMjhkMTUxZDM1OGQxNTBkMzk2ZDE1MGQ0MTdkMTY2LjVkNDIzLjVkMTgzZDQzMGQyMDUuNWQ0MjkuNWQyMjhkNDI5ZDI1Mi41ZDQyNC41ZDI3N2Q0MjBkMjkyZDQyMGQ0MDFkMzk3ZDQ3MWQzOTZkNTQxZDM5NWQ1NzYuNWQ0MTAuNWQ2MTJkNDI2ZDYxNi41ZDQ1NC41ZDYyMWQ0ODNkNjAwLjVkNTE4ZDU4MGQ1NTNkNTM2LjVkNTkxLjVkNDkzZDYzMGQ0MzNkNjY2ZDUxMmQ2NzRkNTQ0LjVkNjk5LjVkNTc3ZDcyNWQ1NzJkNzU5ZDU2N2Q3OTNkNTMwZDgzMWQ0OTNkODY5ZDQzMmQ5MDNkMzcxZDkzN2QyOTJkOTYyZDIxM2Q5ODdkMTI0ZDk5NGQxMTlkOTk0ZDExM2Q5ODYuNWQxMDdkOTc5ZDEwMC41ZDk2OWQ5NGQ5NTlkODlkOTUwZDg0ZDk0MWQ4MWQ5MzhkMTE1ZDY2NmQxMTVkNjgwZDEyMmQ2ODdkMTI5ZDY5NGQxNDBkNjk3ZDE1MWQ3MDBkMTY1ZDcwMGQxNzlkNzAwZDE5NGQ2OThkMjUyZDY3OWQzMDQuNWQ2NTQuNWQzNTdkNjMwZDM5N2Q2MDVkNDM3ZDU4MGQ0NjEuNWQ1NTZkNDg2ZDUzMmQ0ODlkNTE0ZDQ5MmQ0ODdkNDY3LjVkNDc4ZDQ0M2Q0NjlkNDAzLjVkNDc0ZDM2NGQ0NzlkMzE2ZDQ5NmQyNjhkNTEzZDIyNS41ZDUzOWQxODNkNTY1ZDE1MmQ1OTcuNWQxMjFkNjMwZDExNWQ2NjZoUjNkNjQzUjRkNjIxUjVkMTJSNmQ4ODFSN2QzMFI4ZDg2OVI5ZDc3OVIxMGQ1NDBSMTFpMTY3UjEyZDEyUjEzZDY0M1IxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzo1NG9SMWQxMjYzUjJhZDI3ZDY1OGQyN2Q2MDlkNDMuNWQ1NTVkNjBkNTAxZDg5ZDQ0OS41ZDExOGQzOThkMTU3LjVkMzUxLjVkMTk3ZDMwNWQyNDMuNWQyNjkuNWQyOTBkMjM0ZDM0MWQyMTMuNWQzOTJkMTkzZDQ0NGQxOTNkNDYyZDE5M2Q0NzRkMTk5LjVkNDg2ZDIwNmQ0ODRkMjM2ZDQwOWQyNTBkMzQ0LjVkMjkxZDI4MGQzMzJkMjMyLjVkMzkxLjVkMTg1ZDQ1MWQxNThkNTIzLjVkMTMxZDU5NmQxMzFkNjcyZDEzMWQ2OTFkMTQwZDcyNmQxNDlkNzYxZDE2NC41ZDc5NWQxODBkODI5ZDIwMWQ4NTQuNWQyMjJkODgwZDI0NmQ4ODBkMjY2ZDg2NGQyOTJkODM3LjVkMzE4ZDgxMWQzNTBkNzgxZDM4MmQ3NTFkNDE5LjVkNzIwZDQ1N2Q2ODlkNDk5ZDY2NGQ1NDFkNjM5ZDU4Ny41ZDYyMy41ZDYzNGQ2MDhkNjg0ZDYwN2Q3MDZkNjA3ZDcyM2Q2MTcuNWQ3NDBkNjI4ZDc1MS41ZDY0NWQ3NjNkNjYyZDc2OWQ2ODNkNzc1ZDcwNGQ3NzVkNzI0ZDc2NGQ4MDRkNzI2ZDg2Mi41ZDY4OGQ5MjFkNjMzZDk1OWQ1NzhkOTk3ZDUxMWQxMDE0LjVkNDQ0ZDEwMzJkMzc1LjVkMTAyOGQzMDdkMTAyNGQyNDMuNWQ5OTlkMTgwZDk3NGQxMzFkOTI4ZDgyZDg4MmQ1My41ZDgxNC41ZDI1ZDc0N2QyN2Q2NThkNjUxZDY5MGQ2MjZkNjkwZDU5NWQ3MDRkNTY0ZDcxOGQ1MzIuNWQ3NDBkNTAxZDc2MmQ0NjkuNWQ3ODkuNWQ0MzhkODE3ZDQxMC41ZDg0My41ZDM4M2Q4NzBkMzYxLjVkODkzZDM0MGQ5MTZkMzI4ZDkyOWQzNzRkOTM3ZDQzNWQ5MjguNWQ0OTZkOTIwZDU1MmQ4OTVkNjA4ZDg3MGQ2NDguNWQ4MjkuNWQ2ODlkNzg5ZDY5M2Q3MzNkNjkzZDY5MGQ2NTFkNjkwaFIzZDgwM1I0ZDc3NVI1ZDI1UjZkODMxUjdkLThSOGQ4MDZSOWQ3NzlSMTBkNTQwUjExaTU0UjEyZDI1UjEzZDgwM1IxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTY2b1IxZDEyNjNSMmFkMTI3ZDY2MmQxMTdkOTgxZDExNmQ5OTNkMTA1LjVkMTAwMmQ5NWQxMDExZDgyZDEwMTQuNWQ2OWQxMDE4ZDU1LjVkMTAxNS41ZDQyZDEwMTNkMzVkMTAwNGQzNmQ5ODRkMzdkOTQ5ZDM4ZDkxNGQzOWQ4NjguNWQ0MGQ4MjNkNDEuNWQ3NzAuNWQ0M2Q3MThkNDVkNjYyZDEyN2Q2NjJkNDZkNjMxZDQ5ZDUzOGQ1MS41ZDQ2NWQ1NGQzOTJkNTVkMzU5ZDUzZDMzMWQ2NS41ZDMyMy41ZDc4ZDMxNmQ5NWQzMTZkMTA5ZDMxNmQxMjFkMzE5ZDEzM2QzMjJkMTM4ZDMzOWQxMjhkNjMyZDQ2ZDYzMWhSM2QxNjRSNGQxMzhSNWQzNVI2ZDcwOFI3ZDZSOGQ2NzNSOWQ3NzlSMTBkNTQwUjExaTE2NlIxMmQzNVIxM2QxNjRSMTRhaTFpMmkzaTNpM2kzaTNpM2kzaTNpMmkxaTNpM2kzaTNpM2kzaTJpMmhnOjUzb1IxZDEyNjNSMmFkMTU2ZDk4NGQxNTZkOTU4ZDE3NS41ZDkzNmQxOTVkOTE0ZDIyMWQ5MTRkMjIxZDkzNmQyNTFkOTM2ZDI4OWQ5MzVkMzI3ZDkzNGQzNjYuNWQ5MjguNWQ0MDZkOTIzZDQ0My41ZDkxMmQ0ODFkOTAxZDUxMGQ4ODFkNTM5ZDg2MWQ1NTdkODMwLjVkNTc1ZDgwMGQ1NzVkNzU1ZDU3NWQ3MTJkNTUyLjVkNjg2LjVkNTMwZDY2MWQ0OTdkNjQ4LjVkNDY0ZDYzNmQ0MjUuNWQ2MzIuNWQzODdkNjI5ZDM1NGQ2MjlkMzE5ZDYyOWQyODdkNjM5ZDI1NWQ2NDlkMjIzLjVkNjYxZDE5MmQ2NzNkMTYwLjVkNjgzZDEyOWQ2OTNkOTZkNjkzZDg3ZDY5M2Q3Ni41ZDY5M2Q2NmQ2OTNkNTYuNWQ2OTAuNWQ0N2Q2ODhkNDAuNWQ2ODJkMzRkNjc2ZDM0ZDY2M2QzNGQ2NjFkMzQuNWQ2NTZkMzVkNjUxZDM1ZDY1MGQzN2Q2MzZkNDBkNjA3ZDQzZDU3OGQ0N2Q1NDFkNTFkNTA0ZDU1LjVkNDYzLjVkNjBkNDIzZDY0LjVkMzg2ZDY5ZDM0OWQ3MmQzMTkuNWQ3NWQyOTBkNzdkMjc2ZDgyZDI2MGQ5M2QyNTcuNWQxMDRkMjU1ZDExOGQyNTVkMTQyZDI1NWQxNTBkMjY0ZDE1OGQyNzNkMTU4LjVkMjg3LjVkMTU5ZDMwMmQxNTUuNWQzMTkuNWQxNTJkMzM3ZDE1MmQzNTNkMjQwZDM1M2QzMjdkMzM0LjVkNDE0ZDMxNmQ1MDBkMjkzLjVkNTg2ZDI3MWQ2NzJkMjUyZDc1OGQyMzNkODQ2ZDIzM2Q4NTlkMjMzZDg3MGQyMzZkODgxZDIzOWQ4ODZkMjU2ZDg4MmQyNzFkODY5ZDI4MS41ZDg1NmQyOTJkODI3ZDMwMS41ZDc5OGQzMTFkNzQ4ZDMyMmQ2OThkMzMzZDYxOWQzNDkuNWQ1NDBkMzY2ZDQyN2QzOTBkMzE0ZDQxNGQxNjBkNDQ5ZDE2MGQ2MDlkMjAxZDYwNWQyNTJkNTk3ZDMwM2Q1ODlkMzU2LjVkNTg0ZDQxMGQ1NzlkNDYxLjVkNTgxZDUxM2Q1ODNkNTU1ZDU5OS41ZDU5N2Q2MTZkNjI0LjVkNjUwZDY1MmQ2ODRkNjU4ZDc0M2Q2NThkNzk2ZDYzOGQ4MzdkNjE4ZDg3OGQ1ODQuNWQ5MDkuNWQ1NTFkOTQxZDUwNi41ZDk2Mi41ZDQ2MmQ5ODRkNDEzLjVkOTk4ZDM2NWQxMDEyZDMxNS41ZDEwMThkMjY2ZDEwMjRkMjIxZDEwMjRkMTg2ZDEwMjRkMTcxZDEwMTdkMTU2ZDEwMTBkMTU2ZDk4NGhSM2Q5MDZSNGQ4ODZSNWQzNFI2ZDc5MVI3ZDBSOGQ3NTdSOWQ3NzlSMTBkNTQwUjExaTUzUjEyZDM0UjEzZDkwNlIxNGFpMWkzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxNjVvUjFkMTI2M1IyYWQxNTFkNjY1ZDE1MmQ2NjRkMTY2LjVkNjYyZDE4MWQ2NjBkMjA1ZDY1N2QyMjlkNjU0ZDI2MGQ2NTFkMjkxZDY0OGQzMjZkNjQ0ZDMyNmQ2MjlkMzI2LjVkNjE1ZDMyN2Q2MDFkMzI4ZDU4OGQtNmQyNDdkLTE4ZDIzM2QtMTAuNWQyMjEuNWQtM2QyMTBkMTEuNWQyMDEuNWQyNmQxOTNkNDFkMTg4ZDU2ZDE4M2Q2MGQxODNkODBkMTk4ZDk1LjVkMjA4LjVkMTExZDIxOWQxMjYuNWQyMzEuNWQxNDJkMjQ0ZDE2MWQyNjJkMTgwZDI4MGQyMDguNWQzMTFkMjM3ZDM0MmQyNzcuNWQzODguNWQzMThkNDM1ZDM3NmQ1MDVkNDE0ZDM5NGQ0NDNkMzIzLjVkNDcyZDI1M2Q0OTUuNWQyMTJkNTE5ZDE3MWQ1MzguNWQxNTQuNWQ1NThkMTM4ZDU3OGQxMzVkNTg0ZDEzNWQ1OTEuNWQxNDBkNTk5ZDE0NWQ2MDUuNWQxNTNkNjEyZDE2MWQ2MTcuNWQxNzBkNjIzZDE3OWQ2MjZkMTg3ZDYwNmQyMjlkNTgxZDI3Ni41ZDU1NmQzMjRkNTMwZDM3NmQ1MDRkNDI4ZDQ3OGQ0ODRkNDUyZDU0MGQ0MzFkNjAwZDQyOWQ2MzJkNDU3ZDYyOGQ0ODJkNjI1ZDUwN2Q2MjJkNTMwZDYxOGQ1NTBkNjEyZDU2MC41ZDYxOGQ1NzFkNjI0ZDU3M2Q2MzZkNTc1ZDY0OGQ1NjkuNWQ2NjEuNWQ1NjRkNjc1ZDU1MmQ2ODNkNDI2ZDcwMGQ0MjNkNzU3ZDQ1NGQ3NTJkNDg5LjVkNzQ2LjVkNTI1ZDc0MWQ1NzNkNzMxZDYwMmQ3MzFkNjEwLjVkNzQ5LjVkNjE5ZDc2OGQ2MTRkNzk0ZDU1NWQ3OTVkNTA4LjVkODAxLjVkNDYyZDgwOGQ0MjBkODE4ZDQxMGQxMDIwZDQwN2QxMDI5ZDM5Mi41ZDEwMzlkMzc4ZDEwNDlkMzYyZDEwNTJkMzQ2ZDEwNTVkMzMyZDEwNDYuNWQzMThkMTAzOGQzMTVkMTAxMWQzMThkMTAwNWQzMjAuNWQ5ODlkMzIzZDk3M2QzMjRkOTUwZDMyNWQ5MjdkMzI2ZDg5OC41ZDMyN2Q4NzBkMzI3ZDgzOGQyODlkODQ2ZDI0OWQ4NTFkMjA5ZDg1NmQxNjBkODU2ZDE0NWQ4NTZkMTM3LjVkODQ3ZDEzMGQ4MzhkMTMwZDgxM2QxMzBkODA4ZDEzOGQ4MDBkMTQ2ZDc5MmQxNTFkNzkyZDIwOGQ3ODNkMjQ5LjVkNzc3LjVkMjkxZDc3MmQzMjZkNzY4ZDMyNmQ3MTRkMTg4ZDczMmQxODJkNzMyZDE3Mi41ZDczMi41ZDE2M2Q3MzNkMTUzZDczMS41ZDE0M2Q3MzBkMTM1LjVkNzI1LjVkMTI4ZDcyMWQxMjZkNzEwZDE1MWQ2NjVoUjNkNjg0UjRkNjI2UjVkLTE4UjZkODg5UjdkLTMxUjhkOTA3UjlkNzc5UjEwZDU0MFIxMWkxNjVSMTJkLTE4UjEzZDY4NFIxNGFpMWkzaTNpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kyaTJpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpMmkzaTNpM2kzaTJoZzo1Mm9SMWQxMjYzUjJhZDQ3MWQ3ODBkNDE5ZDc4MGQzODAuNWQ3ODBkMzQyZDc4MGQzMDUuNWQ3NzkuNWQyNjlkNzc5ZDIzMC41ZDc3OWQxOTJkNzc5ZDE0MGQ3NzlkMTMyZDc3OWQxMjMuNWQ3NzhkMTE1ZDc3N2QxMDcuNWQ3NzRkMTAwZDc3MWQ5NS41ZDc2NWQ5MWQ3NTlkOTFkNzQ4ZDE0MWQ2ODRkMTg5ZDYxOWQyMzdkNTU0ZDI4MS41ZDQ5Ni41ZDMyNmQ0MzlkMzY2ZDM5NGQ0MDZkMzQ5ZDQ0MGQzMjZkNDc0ZDMwM2Q1MDAuNWQzMDYuNWQ1MjdkMzEwZDU0NWQzNDlkNTYzZDM4OGQ1NzAuNWQ0NjdkNTc4ZDU0NmQ1NzRkNjc1ZDg1MGQ2NzFkODUwZDY3NmQ4NDlkNjg2LjVkODQ4ZDY5N2Q4NDVkNzA3LjVkODQyZDcxOGQ4MzhkNzI2ZDgzNGQ3MzRkODI4ZDczNWQ1OTZkNzU0ZDU4N2Q3NzhkNTgyZDgxM2Q1NzdkODQ4ZDU3NGQ4ODYuNWQ1NzFkOTI1ZDU3MGQ5NjNkNTY5ZDEwMDFkNTY5ZDEwMzJkNTYxZDEwMzJkNTQ1ZDEwMzUuNWQ1MjlkMTAzOWQ1MTIuNWQxMDQxLjVkNDk2ZDEwNDRkNDgyLjVkMTA0MmQ0NjlkMTA0MGQ0NjZkMTAyOGQ0NzFkNzgwZDQ3MWQ0MjJkNDQ0ZDQ1OWQ0MDQuNWQ0OTQuNWQzNjVkNTMwZDMyNy41ZDU2NS41ZDI5MGQ2MDFkMjYwZDYzNy41ZDIzMGQ2NzRkMjIyZDcxM2QyODJkNzE0ZDM0My41ZDcwNi41ZDQwNWQ2OTlkNDcxZDY5MmQ0NzFkNDIyaFIzZDg3MVI0ZDg1MFI1ZDkxUjZkNzIxUjdkLTIwUjhkNjMwUjlkNzc5UjEwZDU0MFIxMWk1MlIxMmQ5MVIxM2Q4NzFSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpMmkxaTNpM2kzaTNpM2kzaTJoZzoxNjRvUjFkMTI2M1IyYWQtMWQ5ODhkMWQ5ODdkMTRkOTc2ZDI3ZDk2NWQ0NGQ5NTBkNjFkOTM1ZDc4LjVkOTIwZDk2ZDkwNWQxMDdkODk0ZDU4ZDgzOGQ1OGQ3MjNkNThkNjYwZDc5LjVkNjExLjVkMTAxZDU2M2QxMzdkNTI2ZDExN2Q1MDdkOTlkNDg5ZDgxZDQ3MWQ2Ny41ZDQ1Ny41ZDU0ZDQ0NGQ0NmQ0MzZkMzhkNDI4ZDM4ZDQyOGQxMjhkMzQ0ZDE2M2QzODJkMTg3LjVkNDA5LjVkMjEyZDQzN2QyMzBkNDU3ZDI3OGQ0MzFkMzI5LjVkNDE3LjVkMzgxZDQwNGQ0MjlkMzk5ZDQ4NmQzOTZkNTM4ZDQxNWQ1NDdkNDA1ZDU2MGQzODguNWQ1NzNkMzcyZDU4N2QzNTUuNWQ2MDFkMzM5ZDYxNGQzMjMuNWQ2MjdkMzA4ZDYzNmQyOTlkNjU0ZDI5OWQ2NjguNWQzMDUuNWQ2ODNkMzEyZDY5M2QzMjEuNWQ3MDNkMzMxZDcwOC41ZDM0MmQ3MTRkMzUzZDcxNGQzNjJkNzA4ZDM3M2Q2OTcuNWQzODkuNWQ2ODdkNDA2ZDY3NmQ0MjIuNWQ2NjVkNDM5ZDY1NGQ0NTRkNjQzZDQ2OWQ2MzdkNDc4ZDY2NmQ1MTBkNjgxLjVkNTQ4LjVkNjk3ZDU4N2Q2OTJkNjMyZDY5MmQ2ODRkNjc4LjVkNzI3LjVkNjY1ZDc3MWQ2NDFkODA3ZDY3OWQ4NDNkNzA4LjVkODc0LjVkNzM4ZDkwNmQ3NTBkOTIyZDc1MGQ5MjhkNzQzZDkzOC41ZDczNmQ5NDlkNzI2LjVkOTU5LjVkNzE3ZDk3MGQ3MDZkOTc5ZDY5NWQ5ODhkNjg3ZDk5MmQ2NTlkOTgwZDYyOC41ZDk1MC41ZDU5OGQ5MjFkNTY0ZDg4NWQ1MTBkOTIzZDQ0MS41ZDk0MmQzNzNkOTYxZDI5OGQ5NjFkMjcwZDk2MWQyNDUuNWQ5NTguNWQyMjFkOTU2ZDE5OWQ5NTBkMTkyZDk1NmQxNzhkOTY4ZDE2NGQ5ODBkMTQ4LjVkOTkyLjVkMTMzZDEwMDVkMTE5LjVkMTAxNmQxMDZkMTAyN2QxMDFkMTAzMGQ5MmQxMDMxZDc3ZDEwMjhkNjJkMTAyNWQ0Ni41ZDEwMTkuNWQzMWQxMDE0ZDE3LjVkMTAwNS41ZDRkOTk3ZC0xZDk4OGQxMzRkNzY1ZDEzNGQ4MDdkMTQ0LjVkODMyZDE1NWQ4NTdkMTc1LjVkODY5LjVkMTk2ZDg4MmQyMjUuNWQ4ODZkMjU1ZDg5MGQyOTRkODkwZDM1NGQ4OTBkNDEwZDg3OC41ZDQ2NmQ4NjdkNTA5ZDgzOS41ZDU1MmQ4MTJkNTc4ZDc2Ni41ZDYwNGQ3MjFkNjA0ZDY1M2Q2MDRkNjE4ZDU5NGQ1ODYuNWQ1ODRkNTU1ZDU2NGQ1MzEuNWQ1NDRkNTA4ZDUxNWQ0OTRkNDg2ZDQ4MGQ0NDlkNDgwZDQwMGQ0ODhkMzUxZDQ5OC41ZDMwMmQ1MDlkMjU5ZDUzNi41ZDIxNmQ1NjRkMTgzZDYxNy41ZDE1MGQ2NzFkMTM0ZDc2NWhSM2Q3MjBSNGQ3NTBSNWQtMVI2ZDcyNVI3ZC03UjhkNzI2UjlkNzc5UjEwZDU0MFIxMWkxNjRSMTJkLTFSMTNkNzIwUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzo1MW9SMWQxMjYzUjJhZDE4NWQ5OTNkMjU2ZDk3NWQzMTRkOTQ1LjVkMzcyZDkxNmQ0MTRkODgxZDQ1NmQ4NDZkNDgxZDgxMGQ1MDZkNzc0ZDUxMC41ZDc0NGQ1MTVkNzE0ZDQ5OC41ZDY5My41ZDQ4MmQ2NzNkNDQwLjVkNjcwZDM5OWQ2NjdkMzMxLjVkNjg0LjVkMjY0ZDcwMmQxNjhkNzQ4ZDEyNGQ2OTJkMTQ4ZDY4MGQxODRkNjYzZDIyMGQ2NDZkMjYwZDYyNWQzMDBkNjA0ZDM0MC41ZDU4MWQzODFkNTU4ZDQxNWQ1MzVkNDQ5ZDUxMmQ0NzIuNWQ0OTBkNDk2ZDQ2OGQ1MDEuNWQ0NTBkNTA3ZDQzMmQ0OTFkNDE4LjVkNDc1ZDQwNWQ0MzFkMzk4ZDM3NmQzOThkMzI0ZDQwOS41ZDI3MmQ0MjFkMjIwLjVkNDM0LjVkMTY5ZDQ0OGQxMTcuNWQ0NTlkNjZkNDcwZDEzZDQ3MGQxM2Q0NjNkMTMuNWQ0NTNkMTRkNDQzZDE2LjVkNDMyLjVkMTlkNDIyZDI0LjVkNDEzLjVkMzBkNDA1ZDQxZDQwMWQ5NGQzODhkMTUyLjVkMzczLjVkMjExZDM1OWQyNjkuNWQzNDdkMzI4ZDMzNWQzODNkMzI4LjVkNDM4ZDMyMmQ0ODNkMzI1ZDUyOGQzMjhkNTU5LjVkMzQzLjVkNTkxZDM1OWQ2MDNkMzkwZDYwM2Q0MjNkNTg0ZDQ1NGQ1NjVkNDg1ZDUzOGQ1MTNkNTExZDU0MWQ0ODEuNWQ1NjUuNWQ0NTJkNTkwZDQzMWQ2MDlkNTEzZDYxMGQ1NTdkNjMwZDYwMWQ2NTBkNjE0ZDY4MWQ2MjdkNzEyZDYxNC41ZDc1MS41ZDYwMmQ3OTFkNTcyZDgzMWQ1NDJkODcxZDQ5OWQ5MDguNWQ0NTZkOTQ2ZDQwOC41ZDk3NGQzNjFkMTAwMmQzMTNkMTAxNi41ZDI2NWQxMDMxZDIyNmQxMDI1ZDIxMmQxMDI1ZDE5OC41ZDEwMThkMTg1ZDEwMTFkMTg1ZDk5M2hSM2Q2NTFSNGQ2MjdSNWQxM1I2ZDcwMlI3ZC03UjhkNjg5UjlkNzc5UjEwZDU0MFIxMWk1MVIxMmQxM1IxM2Q2NTFSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxNjNvUjFkMTI2M1IyYWQtMjdkNjg1ZC0yN2Q2NjhkLTEyLjVkNjYxLjVkMmQ2NTVkMTdkNjUzZDM3ZDY1MWQ2Ni41ZDY0Ny41ZDk2ZDY0NGQxMTZkNjQwZDExOWQ1NjFkMTI0ZDUwNGQxMjlkNDQ3ZDE0MWQ0MDcuNWQxNTNkMzY4ZDE3NC41ZDM0NC41ZDE5NmQzMjFkMjMzZDMwOGQzMTZkMjgwZDM4Mi41ZDI3Ni41ZDQ0OWQyNzNkNDk5LjVkMjg1ZDU1MGQyOTdkNTg1ZDMyMC41ZDYyMGQzNDRkNjQwLjVkMzY5ZDY2MWQzOTRkNjY3ZDQxNmQ2NzNkNDM4ZDY2NS41ZDQ0OGQ2NThkNDU4ZDYzN2Q0NTFkNjE2ZDQ0NGQ1ODJkNDExZDU3MGQzOTlkNTQyLjVkMzgzZDUxNWQzNjdkNDc5ZDM1NS41ZDQ0M2QzNDRkNDAzZDM0MGQzNjNkMzM2ZDMyNmQzNDYuNWQyODlkMzU3ZDI1Ny41ZDM4N2QyMjZkNDE3ZDIwOWQ0NzJkMTkwZDYyNmQxOTZkNjI1ZDIxMC41ZDYyNS41ZDIyNWQ2MjZkMjQxLjVkNjI3ZDI1OGQ2MjhkMjcyLjVkNjI4LjVkMjg3ZDYyOWQyOTRkNjI4ZDMxOWQ2MjhkMzM2LjVkNjM2LjVkMzU0ZDY0NWQzNTkuNWQ2NTYuNWQzNjVkNjY4ZDM1OGQ2ODAuNWQzNTFkNjkzZDMyOGQ3MDBkMTg5ZDcwMWQxNTVkOTQyZDIwNWQ5MzNkMjQzZDkyNmQyODFkOTE5ZDMxMi41ZDkxNWQzNDRkOTExZDM3M2Q5MTEuNWQ0MDJkOTEyZDQzNGQ5MTdkNDY2ZDkyMmQ1MDVkOTMyZDU0NGQ5NDJkNTk1ZDk1OWQ2MDNkOTYyZDYwNmQ5NjkuNWQ2MDlkOTc3ZDYwNmQ5ODUuNWQ2MDNkOTk0ZDU5MmQxMDAxLjVkNTgxZDEwMDlkNTYxZDEwMTFkNTQyZDEwMTNkNTIyLjVkMTAwOWQ1MDNkMTAwNWQ0NzguNWQ5OTlkNDU0ZDk5M2Q0MjIuNWQ5ODcuNWQzOTFkOTgyZDM0OWQ5ODJkMzIxZDk4MmQzMDNkOTg1ZDI4NWQ5ODhkMjcwLjVkOTkzZDI1NmQ5OThkMjQxLjVkMTAwNGQyMjdkMTAxMGQyMDUuNWQxMDE0LjVkMTg0ZDEwMTlkMTUyZDEwMjJkMTIwZDEwMjVkNzFkMTAyNGQ3N2QxMDAxZDgxZDk2NmQ4NWQ5MzFkODhkODg5ZDkxZDg0N2Q5Mi41ZDgwMS41ZDk0ZDc1NmQ5NmQ3MTFkMzZkNzE3ZDI4ZDcxN2QxN2Q3MTZkNmQ3MTVkLTMuNWQ3MTEuNWQtMTNkNzA4ZC0yMGQ3MDJkLTI3ZDY5NmQtMjdkNjg1aFIzZDY5MFI0ZDY3M1I1ZC0yN1I2ZDc1MVI3ZC0xUjhkNzc4UjlkNzc5UjEwZDU0MFIxMWkxNjNSMTJkLTI3UjEzZDY5MFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTJpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNoZzo1MG9SMWQxMjYzUjJhZDQ4ZDk2MmQ5MGQ5MjVkMTQyZDg2OC41ZDE5NGQ4MTJkMjQzZDc0OC41ZDI5MmQ2ODVkMzMxZDYyMC41ZDM3MGQ1NTZkMzg1LjVkNTAxZDQwMWQ0NDZkMzg3ZDQwNy41ZDM3M2QzNjlkMzE2ZDM1N2QyODBkMzU3ZDI1Mi41ZDM2Ny41ZDIyNWQzNzhkMjAyLjVkMzk0ZDE4MGQ0MTBkMTYwLjVkNDI5ZDE0MWQ0NDhkMTIwZDQ2NGQ5OWQ0ODBkNzVkNDkwLjVkNTFkNTAxZDIwZDUwMWQyMWQ0NjBkNTMuNWQ0MjFkODZkMzgyZDEzMy41ZDM1MmQxODFkMzIyZDIzN2QzMDUuNWQyOTNkMjg5ZDM0Mi41ZDI5NGQzOTJkMjk5ZDQyN2QzMjlkNDYyZDM1OWQ0NjhkNDIyZDQ2OGQ0OTFkNDQ0LjVkNTU5ZDQyMWQ2MjdkMzg0LjVkNjkxZDM0OGQ3NTVkMzAyLjVkODEzZDI1N2Q4NzFkMjE0ZDkyMWQyNzJkOTI2ZDMzMC41ZDkxMGQzODlkODk0ZDQ0NmQ4NzNkNTAzZDg1MmQ1NTkuNWQ4MzMuNWQ2MTZkODE1ZDY3MmQ4MTVkNjg3ZDgxNWQ3MDAuNWQ4MjJkNzE0ZDgyOWQ3MTRkODQ4ZDcxNGQ4NjdkNzAxZDg4MGQ2ODhkODkzZDY2OGQ5MDFkNjQ4ZDkwOWQ2MjQuNWQ5MTIuNWQ2MDFkOTE2ZDU4MGQ5MThkNTU5ZDkyMGQ1NDMuNWQ5MjBkNTI4ZDkyMGQ1MjVkOTIxZDUxNGQ5MjNkNDg1LjVkOTMxLjVkNDU3ZDk0MGQ0MTguNWQ5NTFkMzgwZDk2MmQzMzUuNWQ5NzMuNWQyOTFkOTg1ZDI0Ni41ZDk5NGQyMDJkMTAwM2QxNjJkMTAwOGQxMjJkMTAxM2Q5NGQxMDExZDY2ZDEwMDlkNTIuNWQ5OTcuNWQzOWQ5ODZkNDhkOTYyaFIzZDczM1I0ZDcxNFI1ZDIwUjZkNzM1UjdkMTFSOGQ3MTVSOWQ3NzlSMTBkNTQwUjExaTUwUjEyZDIwUjEzZDczM1IxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjE2Mm9SMWQxMjYzUjJhZDM3MWQxMDE5ZDM1NGQxMDIxZDM0MGQxMDIyLjVkMzI2ZDEwMjRkMzE4ZDEwMjRkMjc0ZDEwMjRkMjIzZDEwMTRkMTcyZDEwMDRkMTI4LjVkOTgxZDg1ZDk1OGQ1NmQ5MjAuNWQyN2Q4ODNkMjdkODI3ZDIyZDc3NGQ1MC41ZDcyMWQ3OWQ2NjhkMTI4ZDYyMmQxNzdkNTc2ZDI0MC41ZDU0MGQzMDRkNTA0ZDM3MGQ0ODRkMzcwZDMxMmQ0NDRkMzEyZDQ0M2Q0NjhkNDY1ZDQ2NmQ0OTZkNDY0ZDUyN2Q0NjJkNTU1ZDQ2OGQ1ODNkNDc0ZDYwM2Q0OTAuNWQ2MjNkNTA3ZDYyM2Q1NDJkNjIzZDU1NWQ2MTYuNWQ1NjVkNjEwZDU3NWQ2MDAuNWQ1ODRkNTkxZDU5M2Q1ODBkNjAwZDU2OWQ2MDdkNTYwZDYxNGQ1NTRkNTg0ZDU0NWQ1NjlkNTM2ZDU1NGQ1MjEuNWQ1NDkuNWQ1MDdkNTQ1ZDQ4Ny41ZDU0OC41ZDQ2OGQ1NTJkNDQzZDU1OWQ0NDJkOTI3ZDQ4MWQ5MTVkNTE4LjVkODk5LjVkNTU2ZDg4NGQ1OTIuNWQ4NjkuNWQ2MjlkODU1ZDY2NC41ZDg0NS41ZDcwMGQ4MzZkNzM1ZDgzNmQ3NDNkODM2ZDc1MS41ZDgzN2Q3NjBkODM4ZDc2Ni41ZDg0Mi41ZDc3M2Q4NDdkNzc1LjVkODU1LjVkNzc4ZDg2NGQ3NzVkODc5ZDc3MGQ4OTlkNzM2ZDkxNy41ZDcwMmQ5MzZkNjUzLjVkOTUzZDYwNWQ5NzBkNTQ4LjVkOTg0ZDQ5MmQ5OThkNDQyZDEwMDdkNDQyZDExMDdkNDQyZDExMDlkNDMyZDExMDlkNDIyZDExMDlkNDA5LjVkMTEwOWQzOTdkMTEwOWQzODUuNWQxMTA5LjVkMzc0ZDExMTBkMzcyZDExMTFkMzcxZDEwMTlkMzI0ZDk0NmQzNDhkOTQ2ZDM3MWQ5NDNkMzcwZDU4MmQzMjFkNjAwZDI3NC41ZDYyNGQyMjhkNjQ4ZDE5M2Q2NzYuNWQxNThkNzA1ZDEzOS41ZDczOGQxMjFkNzcxZDEyN2Q4MDhkMTI3ZDg1MmQxNDRkODc5ZDE2MWQ5MDZkMTg4LjVkOTIxZDIxNmQ5MzZkMjUxLjVkOTQxZDI4N2Q5NDZkMzI0ZDk0NmhSM2Q4MTBSNGQ3NzhSNWQyMlI2ZDcxMlI3ZC04N1I4ZDY5MFI5ZDc3OVIxMGQ1NDBSMTFpMTYyUjEyZDIyUjEzZDgxMFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTJpMmkyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTJpMWkzaTJpM2kzaTNpM2kzaTNpM2kzaGc6NDlvUjFkMTI2M1IyYWQ1NWQzNTlkNTNkMzMxZDY1LjVkMzIzLjVkNzhkMzE2ZDk1ZDMxNmQxMDlkMzE2ZDEyMWQzMTlkMTMzZDMyMmQxMzhkMzM5ZDExN2Q5ODFkMTE2ZDk5M2QxMDUuNWQxMDAyZDk1ZDEwMTFkODJkMTAxNC41ZDY5ZDEwMThkNTUuNWQxMDE1LjVkNDJkMTAxM2QzNWQxMDA0ZDM2ZDk4MGQzNy41ZDkyOWQzOWQ4NzhkNDFkODE0LjVkNDNkNzUxZDQ1ZDY4MWQ0N2Q2MTFkNDlkNTQ3LjVkNTFkNDg0ZDUyLjVkNDMzLjVkNTRkMzgzZDU1ZDM1OWhSM2QxNjRSNGQxMzhSNWQzNVI2ZDcwOFI3ZDZSOGQ2NzNSOWQ3NzlSMTBkNTQwUjExaTQ5UjEyZDM1UjEzZDE2NFIxNGFpMWkzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjE2MW9SMWQxMjYzUjJhZDgxZDExOWQ5MWQxMTlkMTA0ZDExOS41ZDExN2QxMjBkMTI5ZDEyM2QxNDFkMTI2ZDE0OWQxMzIuNWQxNTdkMTM5ZDE1N2QxNTFkMTQ5ZDE3OGQxMzJkMTkyLjVkMTE1ZDIwN2Q5Ni41ZDIxMC41ZDc4ZDIxNGQ2MmQyMDhkNDZkMjAyZDQwZDE4OS41ZDM0ZDE3N2Q0Mi41ZDE1OC41ZDUxZDE0MGQ4MWQxMTlkMTQwZC05MjNkMTM3ZC05MTFkMTM1LjVkLTg3Mi41ZDEzNGQtODM0ZDEzMy41ZC03NzguNWQxMzNkLTcyM2QxMzNkLTY1NWQxMzNkLTU4N2QxMzIuNWQtNTE2ZDEzMmQtNDQ1ZDEzMWQtMzc1LjVkMTMwZC0zMDZkMTI4ZC0yNDhkMTI2ZC0xOTBkMTIyLjVkLTE0Ny41ZDExOWQtMTA1ZDExM2QtODhkMjlkLTg4ZDI5ZC0xOTFkMzMuNWQtMjk0LjVkMzhkLTM5OGQ0M2QtNTAxLjVkNDhkLTYwNWQ1Mi41ZC03MDlkNTdkLTgxM2Q1N2QtOTE4ZDE0MGQtOTIzaFIzZDE3M1I0ZDE1NVI1ZDI4UjZkODI4UjdkOVI4ZDgwMFI5ZDc3OVIxMGQ1NDBSMTFpMTYxUjEyZDI4UjEzZDE3M1IxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kyaGc6NDhvUjFkMTI2M1IyYWQ0OGQ3ODZkNTFkNzM1ZDY0LjVkNjc1LjVkNzhkNjE2ZDEwMWQ1NTdkMTI0ZDQ5OGQxNTYuNWQ0NDMuNWQxODlkMzg5ZDIzMmQzNDdkMjc1ZDMwNWQzMjhkMjgwZDM4MWQyNTVkNDQ1ZDI1NWQ1MjlkMjU1ZDU5MGQyODcuNWQ2NTFkMzIwZDY5MWQzNzNkNzMxZDQyNmQ3NTBkNDk0LjVkNzY5ZDU2M2Q3NjlkNjM2ZDc2OWQ3MzFkNzM3LjVkODAzLjVkNzA2ZDg3NmQ2NDlkOTI1LjVkNTkyZDk3NWQ1MTMuNWQxMDAwLjVkNDM1ZDEwMjZkMzQxZDEwMjZkMjk1ZDEwMjZkMjQyZDEwMTJkMTg5ZDk5OGQxNDQuNWQ5NjlkMTAwZDk0MGQ3MmQ4OTQuNWQ0NGQ4NDlkNDhkNzg2ZDEyMWQ3OTVkMTIxZDg0OGQxNDJkODgxZDE2M2Q5MTRkMTk3LjVkOTMyLjVkMjMyZDk1MWQyNzQuNWQ5NTcuNWQzMTdkOTY0ZDM2MWQ5NjRkNTMzZDk2NGQ2MjBkODc1ZDcwN2Q3ODZkNzA3ZDYyM2Q3MTBkNDcxZDYzNGQzOTAuNWQ1NThkMzEwZDQxNGQzMThkMzczZDMxMWQzMzUuNWQzMzYuNWQyOThkMzYyZDI2NS41ZDQwNmQyMzNkNDUwZDIwNi41ZDUwNi41ZDE4MGQ1NjNkMTYxZDYxOGQxNDJkNjczZDEzMS41ZDcyMC41ZDEyMWQ3NjhkMTIxZDc5NWhSM2Q4MDhSNGQ3NjlSNWQ0NFI2ZDc2OVI3ZC0yUjhkNzI1UjlkNzc5UjEwZDU0MFIxMWk0OFIxMmQ0NFIxM2Q4MDhSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxNjBvUjFkMTI2M1IyYWhSM2Q1MTJSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDc3OVIxMGQ1NDBSMTFpMTYwUjEyZDBSMTNkNTEyUjE0YWhnOjQ3b1IxZDEyNjNSMmFkMjZkOTcyZDI4ZDk2NGQ1MC41ZDkyNmQ3M2Q4ODhkMTA5ZDgzMS41ZDE0NWQ3NzVkMTkwLjVkNzA0LjVkMjM2ZDYzNGQyODMuNWQ1NjEuNWQzMzFkNDg5ZDM3Ni41ZDQxOS41ZDQyMmQzNTBkNDU5ZDI5NC41ZDQ5NmQyMzlkNTE5LjVkMjAzLjVkNTQzZDE2OGQ1NDdkMTYzZDU1N2QxNjlkNTQ5ZDIwMmQ1NDFkMjM1ZDUxOWQyODcuNWQ0OTdkMzQwZDQ2My41ZDQwNi41ZDQzMGQ0NzNkMzg5LjVkNTQ1ZDM0OWQ2MTdkMzA0ZDY4OS41ZDI1OWQ3NjJkMjE0ZDgyNi41ZDE2OWQ4OTFkMTI2LjVkOTQyLjVkODRkOTk0ZDQ5ZDEwMjRkNDBkMTAyNGQzNWQxMDE3LjVkMzBkMTAxMWQyOGQxMDAyZDI2ZDk5M2QyNmQ5ODQuNWQyNmQ5NzZkMjZkOTcyaFIzZDU4MlI0ZDU1N1I1ZDI2UjZkODYxUjdkMFI4ZDgzNVI5ZDc3OVIxMGQ1NDBSMTFpNDdSMTJkMjZSMTNkNTgyUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjE1OW9SMWQxMjYzUjJhaFIzZDg2NVI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkNzc5UjEwZDU0MFIxMWkxNTlSMTJkMFIxM2Q4NjVSMTRhaGc6NDZvUjFkMTI2M1IyYWQ1N2QxMDI1ZDMyZDEwMjJkMjlkMTAwNy41ZDI2ZDk5M2QzNC41ZDk3N2Q0M2Q5NjFkNTkuNWQ5NDlkNzZkOTM3ZDkwZDk0MWQxMTZkOTQxZDEyNS41ZDk1MmQxMzVkOTYzZDEzNWQ5ODNkMTM1ZDk5OGQxMjcuNWQxMDA2LjVkMTIwZDEwMTVkMTA4LjVkMTAxOWQ5N2QxMDIzZDgzZDEwMjRkNjlkMTAyNWQ1N2QxMDI1aFIzZDE4MFI0ZDEzNVI1ZDI2UjZkODdSN2QtMVI4ZDYxUjlkNzc5UjEwZDU0MFIxMWk0NlIxMmQyNlIxM2QxODBSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjE1OG9SMWQxMjYzUjJhaFIzZDg2NVI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkNzc5UjEwZDU0MFIxMWkxNThSMTJkMFIxM2Q4NjVSMTRhaGc6NDVvUjFkMTI2M1IyYWQzN2Q3MjJkMzdkNzA1ZDUxLjVkNjk4LjVkNjZkNjkyZDgxZDY5MGQxMzhkNjgyZDE5Mi41ZDY3Mi41ZDI0N2Q2NjNkMzA2ZDY1N2QzMzFkNjU3ZDM0OC41ZDY2NS41ZDM2NmQ2NzRkMzcxLjVkNjg1LjVkMzc3ZDY5N2QzNzBkNzA5LjVkMzYzZDcyMmQzNDBkNzI5ZDEwMGQ3NTRkOTJkNzU0ZDgxZDc1M2Q3MGQ3NTJkNjAuNWQ3NDguNWQ1MWQ3NDVkNDRkNzM5ZDM3ZDczM2QzN2Q3MjJoUjNkMzk3UjRkMzc3UjVkMzdSNmQzNjdSN2QyNzBSOGQzMzBSOWQ3NzlSMTBkNTQwUjExaTQ1UjEyZDM3UjEzZDM5N1IxNGFpMWkzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaGc6MTU3b1IxZDEyNjNSMmFoUjNkODY1UjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQ3NzlSMTBkNTQwUjExaTE1N1IxMmQwUjEzZDg2NVIxNGFoZzo0NG9SMWQxMjYzUjJhZDYwZDkxNmQ2OGQ5MDBkNzcuNWQ4OTcuNWQ4N2Q4OTVkMTAxZDg5NWQxMTBkODk1ZDExOWQ4OTcuNWQxMjhkOTAwZDEzNWQ5MDUuNWQxNDJkOTExZDE0NC41ZDkxOWQxNDdkOTI3ZDE0M2Q5MzhkMTM2ZDk1NGQxMjVkOTczLjVkMTE0ZDk5M2QxMDEuNWQxMDEzLjVkODlkMTAzNGQ3Ni41ZDEwNTNkNjRkMTA3MmQ1NWQxMDg2ZDUyZDEwOTFkNDMuNWQxMTAwZDM1ZDExMDlkMjNkMTExN2QxMWQxMTI1ZC0yLjVkMTEyOWQtMTZkMTEzM2QtMjhkMTEyOGQ2MGQ5MTZoUjNkMjI4UjRkMTQ3UjVkLTI4UjZkMTI5UjdkLTEwOVI4ZDE1N1I5ZDc3OVIxMGQ1NDBSMTFpNDRSMTJkLTI4UjEzZDIyOFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmhnOjE1Nm9SMWQxMjYzUjJhaFIzZDg2NVI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkNzc5UjEwZDU0MFIxMWkxNTZSMTJkMFIxM2Q4NjVSMTRhaGc6NDNvUjFkMTI2M1IyYWQzMDVkOTYyZDMwM2Q5MzVkMzAwZDkwMC41ZDI5N2Q4NjZkMjkyLjVkODI5ZDI4OGQ3OTJkMjgwLjVkNzU2ZDI3M2Q3MjBkMjYzZDY5MWQyMzdkNjkxZDIxMS41ZDY5Ny41ZDE4NmQ3MDRkMTYwLjVkNzExLjVkMTM1ZDcxOWQxMDguNWQ3MjZkODJkNzMzZDU0ZDczNGQzOWQ3MzRkMjZkNzI3ZDEzZDcyMGQxM2Q3MDFkMTNkNjg2ZDMxLjVkNjc4LjVkNTBkNjcxZDc4ZDY2N2QxMDZkNjYzZDEzOGQ2NjFkMTcwZDY1OWQxOThkNjU2ZDIyNmQ2NTNkMjQ0LjVkNjQ3ZDI2M2Q2NDFkMjYzZDYyOWQyNjNkNDIyZDI2M2Q0MTNkMjY4ZDQwOC41ZDI3M2Q0MDRkMjgwZDQwMS41ZDI4N2QzOTlkMjk0LjVkMzk4LjVkMzAyZDM5OGQzMDZkMzk4ZDMyOGQzOThkMzM0LjVkNDA1LjVkMzQxZDQxM2QzNDZkNDQyZDM0OGQ0NTFkMzUxLjVkNDc1ZDM1NWQ0OTlkMzU4LjVkNTI1LjVkMzYyZDU1MmQzNjQuNWQ1NzUuNWQzNjdkNTk5ZDM2OGQ2MDhkNjQyZDYwOGQ2NDJkNjI3ZDYyNS41ZDYzOC41ZDYwOWQ2NTBkNTgyLjVkNjU2ZDU1NmQ2NjJkNTI0LjVkNjYzLjVkNDkzZDY2NWQ0NjIuNWQ2NjUuNWQ0MzJkNjY2ZDQwNi41ZDY2N2QzODFkNjY4ZDM2OGQ2NzFkMzYzZDcwMWQzNjdkNzM4ZDM3MWQ3NzVkMzc3ZDgxMy41ZDM4M2Q4NTJkMzg3LjVkODkwLjVkMzkyZDkyOWQzODhkOTYyZDM4MmQ5NjdkMzY5ZDk3Mi41ZDM1NmQ5NzhkMzQyLjVkOTgwLjVkMzI5ZDk4M2QzMTguNWQ5NzkuNWQzMDhkOTc2ZDMwNWQ5NjJoUjNkNjcxUjRkNjQyUjVkMTNSNmQ2MjZSN2Q0MVI4ZDYxM1I5ZDc3OVIxMGQ1NDBSMTFpNDNSMTJkMTNSMTNkNjcxUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTU1b1IxZDEyNjNSMmFoUjNkODY1UjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQ3NzlSMTBkNTQwUjExaTE1NVIxMmQwUjEzZDg2NVIxNGFoZzo0Mm9SMWQxMjYzUjJhZDI4MWQ2OTZkMjU5ZDcxNWQyMzlkNzQzZDIxOWQ3NzFkMTk4ZDc5Ny41ZDE3N2Q4MjRkMTUyZDg0M2QxMjdkODYyZDk0ZDg2MmQ4OWQ4NjJkODFkODU0ZDczZDg0NmQ3M2Q4NDFkODVkODE5ZDEwMi41ZDc4Ni41ZDEyMGQ3NTRkMTM4LjVkNzE3ZDE1N2Q2ODBkMTczZDY0MmQxODlkNjA0ZDE5OGQ1NzFkMTk4ZDU3MGQxOTguNWQ1NjZkMTk5ZDU2MmQxOTlkNTYwZDE5OWQ1NDJkMTg2ZDUyOWQxNzNkNTE2ZDE1NGQ1MDQuNWQxMzVkNDkzZDExNGQ0ODEuNWQ5M2Q0NzBkNzYuNWQ0NTRkNjBkNDM4ZDUyZDQxNi41ZDQ0ZDM5NWQ1MmQzNjRkODNkMzY1ZDEwNmQzNzNkMTI5ZDM4MWQxNDdkMzkxLjVkMTY1ZDQwMmQxODBkNDE0ZDE5NWQ0MjZkMjEwZDQzNC41ZDIyNWQ0NDNkMjQyZDQ0N2QyNTlkNDUxZDI4MWQ0NDZkMzg0ZDE3N2QzODhkMTY3ZDM5NmQxNjEuNWQ0MDRkMTU2ZDQxNGQxNTMuNWQ0MjRkMTUxZDQzNC41ZDE1MC41ZDQ0NWQxNTBkNDU0ZDE1MGQ0NTRkMTg5ZDQ0OGQyMjQuNWQ0NDJkMjYwZDQzNC41ZDI5NS41ZDQyN2QzMzFkNDIxZDM2N2Q0MTVkNDAzZDQxNWQ0NDJkNDQ4ZDQ0MmQ0NzcuNWQ0MzUuNWQ1MDdkNDI5ZDUzNi41ZDQyMC41ZDU2NmQ0MTJkNTk1LjVkNDA1LjVkNjI1ZDM5OWQ2NTdkMzk5ZDY1N2Q0MzlkNjM4ZDQ2MWQ2MTlkNDgzZDU5MWQ0OTZkNTYzZDUwOWQ1MzBkNTE3LjVkNDk3ZDUyNmQ0NjlkNTM4LjVkNDQxZDU1MWQ0MjJkNTcyZDQwM2Q1OTNkNDAzZDYzMWQ0MDNkNjU3ZDQxMGQ2ODJkNDE3ZDcwN2Q0MjVkNzMyZDQzM2Q3NTdkNDQwZDc4MmQ0NDdkODA3ZDQ0N2Q4MzNkNDQ3ZDg1NWQ0MjlkODYzLjVkNDExZDg3MmQzODRkODgzZDM1OWQ4NzFkMzQ5ZDg0NC41ZDMzOWQ4MThkMzMyZDc4OS41ZDMyNWQ3NjFkMzE1LjVkNzM0LjVkMzA2ZDcwOGQyODFkNjk2aFIzZDY1MFI0ZDY1N1I1ZDQ0UjZkODc0UjdkMTQxUjhkODMwUjlkNzc5UjEwZDU0MFIxMWk0MlIxMmQ0NFIxM2Q2NTBSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTU0b1IxZDEyNjNSMmFoUjNkODY1UjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQ3NzlSMTBkNTQwUjExaTE1NFIxMmQwUjEzZDg2NVIxNGFoZzo0MW9SMWQxMjYzUjJhZDEzOWQxMDA0ZDE2MGQ5NTFkMTkyZDkwNS41ZDIyNGQ4NjBkMjU0ZDgxNC41ZDI4NGQ3NjlkMzA1LjVkNzIwZDMyN2Q2NzFkMzI3ZDYxMGQzMjdkNTEwZDMwMy41ZDQzNWQyODBkMzYwZDI0MC41ZDI5OC41ZDIwMWQyMzdkMTQ4ZDE4M2Q5NWQxMjlkMzVkNzBkMzVkNjlkMzRkNjJkMzNkNTVkMzNkNTBkMzNkMjJkNDcuNWQxMy41ZDYyZDVkODhkNWQxNDRkNWQxOTBkMzcuNWQyMzZkNzBkMjcyZDEyMmQzMDhkMTc0ZDMzNC41ZDIzOS41ZDM2MWQzMDVkMzc4ZDM3MWQzOTVkNDM3ZDQwMy41ZDQ5Ny41ZDQxMmQ1NThkNDEyZDYwMGQ0MTJkNjI2ZDQwNGQ2NjhkMzk2ZDcxMGQzODAuNWQ3NTdkMzY1ZDgwNGQzNDNkODUxLjVkMzIxZDg5OWQyOTNkOTM3LjVkMjY1ZDk3NmQyMzEuNWQxMDAwZDE5OGQxMDI0ZDE2MGQxMDI0ZDE1NWQxMDI0ZDE0N2QxMDE2LjVkMTM5ZDEwMDlkMTM5ZDEwMDRoUjNkNDUwUjRkNDEyUjVkMzNSNmQxMDE5UjdkMFI4ZDk4NlI5ZDc3OVIxMGQ1NDBSMTFpNDFSMTJkMzNSMTNkNDUwUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjE1M29SMWQxMjYzUjJhaFIzZDg2NVI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkNzc5UjEwZDU0MFIxMWkxNTNSMTJkMFIxM2Q4NjVSMTRhaGc6NDBvUjFkMTI2M1IyYWQxOWQ1NzNkMTlkNTQ3ZDI1ZDUwNi41ZDMxZDQ2NmQ0MS41ZDQxNi41ZDUyZDM2N2Q2Ny41ZDMxM2Q4M2QyNTlkMTAzZDIwNi41ZDEyM2QxNTRkMTQ2ZDEwNi41ZDE2OWQ1OWQxOTUuNWQyM2QyMjJkLTEzZDI1MWQtMzQuNWQyODBkLTU2ZDMxMWQtNTZkMzI1ZC01NmQzMzZkLTUzLjVkMzQ3ZC01MWQzNTJkLTM1ZDMwNGQzM2QyNjIuNWQ5Ni41ZDIyMWQxNjBkMTg5LjVkMjI3ZDE1OGQyOTRkMTQwZDM2N2QxMjJkNDQwZDEyMmQ1MjZkMTIyZDU4OWQxNDJkNjQ3ZDE2MmQ3MDVkMTg1LjVkNzYwLjVkMjA5ZDgxNmQyMjlkODcwLjVkMjQ5ZDkyNWQyNDlkOTgyZDI0OWQ5OTFkMjQ0ZDk5NS41ZDIzOWQxMDAwZDIzMmQxMDAyLjVkMjI1ZDEwMDVkMjE4ZDEwMDUuNWQyMTFkMTAwNmQyMDdkMTAwNmQxNzJkMTAwNmQxNDQuNWQ5NzlkMTE3ZDk1MmQ5Ni41ZDkxMC41ZDc2ZDg2OWQ2MWQ4MThkNDZkNzY3ZDM3ZDcxOWQyOGQ2NzFkMjMuNWQ2MzEuNWQxOWQ1OTJkMTlkNTczaFIzZDM4MVI0ZDM1MlI1ZDE5UjZkMTA4MFI3ZDE4UjhkMTA2MVI5ZDc3OVIxMGQ1NDBSMTFpNDBSMTJkMTlSMTNkMzgxUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxNTJvUjFkMTI2M1IyYWhSM2Q4NjVSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDc3OVIxMGQ1NDBSMTFpMTUyUjEyZDBSMTNkODY1UjE0YWhnOjM5b1IxZDEyNjNSMmFkMTA0ZDI1NmQxMzFkMjQ3ZDE0NGQyNTRkMTU3ZDI2MWQxNTkuNWQyNzkuNWQxNjJkMjk4ZDE1Ni41ZDMyMy41ZDE1MWQzNDlkMTQxZDM3Ni41ZDEzMWQ0MDRkMTE4LjVkNDI5LjVkMTA2ZDQ1NWQ5NGQ0NzJkMzRkNDc2ZDEwNGQyNTZoUjNkMjA3UjRkMTYyUjVkMzRSNmQ3NzdSN2Q1NDhSOGQ3NDNSOWQ3NzlSMTBkNTQwUjExaTM5UjEyZDM0UjEzZDIwN1IxNGFpMWkzaTNpM2kzaTNpM2kyaTJoZzoxNTFvUjFkMTI2M1IyYWhSM2Q4NjVSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDc3OVIxMGQ1NDBSMTFpMTUxUjEyZDBSMTNkODY1UjE0YWhnOjM4b1IxZDEyNjNSMmFkMTMxZDEwMjRkMTIyZDEwMjVkOTlkMTAxOS41ZDc2ZDEwMTRkNTMuNWQxMDA0ZDMxZDk5NGQxNmQ5ODBkMWQ5NjZkOWQ5NTBkMjM2ZDU4OGQyMDlkNTQzZDE5MmQ1MDkuNWQxNzVkNDc2ZDE2NS41ZDQ0NS41ZDE1NmQ0MTVkMTUyZDM4M2QxNDhkMzUxZDE0OGQzMTBkMTUyZDI0M2QxNzZkMTg5ZDIwMGQxMzVkMjMzZDk5ZDI2NmQ2M2QzMDNkNDYuNWQzNDBkMzBkMzcwZDM4ZDQwMGQ0NmQ0MTguNWQ3OS41ZDQzN2QxMTNkNDMzLjVkMTc3ZDQzMGQyNDFkMzk4LjVkMzM3LjVkMzY3ZDQzNGQyOThkNTY3ZDI5OGQ1ODRkMzE1ZDYwOC41ZDMzMmQ2MzNkMzU4ZDY1OWQzODRkNjg1ZDQxNC41ZDcxMWQ0NDVkNzM3ZDQ3My41ZDc1N2Q1MDJkNzc3ZDUyNWQ3OTBkNTQ4ZDgwM2Q1NTdkODAzZDU5N2Q3ODBkNjIyZDc2MS41ZDY0N2Q3NDNkNjY0ZDcyNi41ZDY4MWQ3MTBkNjkzLjVkNjk0ZDcwNmQ2NzhkNzIxZDY1OWQ3MzZkNjQwZDc1Ni41ZDYxNi41ZDc3N2Q1OTNkODExZDU2MmQ4MTNkNTYyZDgyMGQ1NjVkODI3ZDU2OGQ4MzQuNWQ1NzIuNWQ4NDJkNTc3ZDg0OGQ1ODEuNWQ4NTRkNTg2ZDg1NGQ1ODhkODUxZDU5MmQ4NDFkNjExZDgzMWQ2MzBkODA0LjVkNjYyZDc3OGQ2OTRkNzMxLjVkNzM4LjVkNjg1ZDc4M2Q2MDlkODM4ZDY3MWQ4NjlkNzA1ZDg4N2Q3MzlkOTA1ZDc1NWQ5MTRkNzcxZDkyM2Q3NzRkOTI1LjVkNzc3ZDkyOGQ3NzdkOTI5ZDc3N2Q5NDFkNzcxLjVkOTQ4ZDc2NmQ5NTVkNzU4ZDk1OC41ZDc1MGQ5NjJkNzQwLjVkOTYzZDczMWQ5NjRkNzIyZDk2NGQ2OTVkOTY0ZDY3Mi41ZDk1My41ZDY1MGQ5NDNkNjI4LjVkOTMwLjVkNjA3ZDkxOGQ1ODVkOTA3LjVkNTYzZDg5N2Q1MzdkODk3ZDQ5OGQ5MTdkNDUxZDk0MS41ZDQwNGQ5NjZkMzUyZDk4Ni41ZDMwMGQxMDA3ZDI0NGQxMDE5ZDE4OGQxMDMxZDEzMWQxMDI0ZDI3NmQ2NTBkMjYyZDY2NWQyMzguNWQ2OTUuNWQyMTVkNzI2ZDE5MGQ3NjNkMTY1ZDgwMGQxNDNkODM4LjVkMTIxZDg3N2QxMDkuNWQ5MDcuNWQ5OGQ5MzhkMTAxLjVkOTU1LjVkMTA1ZDk3M2QxMzFkOTY4ZDE4M2Q5NjhkMjI3LjVkOTYxZDI3MmQ5NTRkMzEzLjVkOTQwLjVkMzU1ZDkyN2QzOTYuNWQ5MDZkNDM4ZDg4NWQ0ODRkODU4ZDI3NmQ2NTBkMjA3ZDMyOWQyMDdkMzU1ZDIwOS41ZDM3Ny41ZDIxMmQ0MDBkMjE3LjVkNDIxZDIyM2Q0NDJkMjMyLjVkNDYyLjVkMjQyZDQ4M2QyNTZkNTA1ZDI4OGQ0ODdkMzEwZDQ0NmQzMzJkNDA1ZDM0NS41ZDM1Ni41ZDM1OWQzMDhkMzY1ZDI1OS41ZDM3MWQyMTFkMzcxZDE3OGQzNzFkMTYzZDM3MmQxNTAuNWQzNzNkMTM4ZDM3MGQxMjlkMzY3ZDEyMGQzNTlkMTE1ZDM1MWQxMTBkMzMzZDExMGQyOThkMTEwZDI3NGQxMzMuNWQyNTBkMTU3ZDIzNWQxOTAuNWQyMjBkMjI0ZDIxMy41ZDI2MmQyMDdkMzAwZDIwN2QzMjloUjNkODU4UjRkODU0UjVkMVI2ZDk5NFI3ZC03UjhkOTkzUjlkNzc5UjEwZDU0MFIxMWkzOFIxMmQxUjEzZDg1OFIxNGFpMWkzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTJpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTUwb1IxZDEyNjNSMmFoUjNkODY1UjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQ3NzlSMTBkNTQwUjExaTE1MFIxMmQwUjEzZDg2NVIxNGFoZzozN29SMWQxMjYzUjJhaFIzZDg2NVI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkNzc5UjEwZDU0MFIxMWkzN1IxMmQwUjEzZDg2NVIxNGFoZzoxNDlvUjFkMTI2M1IyYWhSM2Q4NjVSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDc3OVIxMGQ1NDBSMTFpMTQ5UjEyZDBSMTNkODY1UjE0YWhnOjM2b1IxZDEyNjNSMmFkMzE5ZDc4MmQzMjNkNzkyZDMwNWQ3OTdkMjg3ZDgwMmQyNjMuNWQ4MDRkMjQwZDgwNmQyMTlkODA1LjVkMTk4ZDgwNWQxOTVkODA1ZDE5MmQ4MDRkMTg5LjVkNzk2ZDE4N2Q3ODhkMTg1ZDc3OGQxODNkNzY4ZDE4MWQ3NTlkMTc5ZDc1MGQxNzdkNzQ4ZDE4MmQ3MzhkMjAzZDczMmQyMjRkNzI2ZDI0OC41ZDcyMmQyNzNkNzE4ZDI5NS41ZDcxNi41ZDMxOGQ3MTVkMzI2ZDcxM2QzMjZkNTQ3ZDMyMmQ1NDdkMjk3ZDU0N2QyNzJkNTQ3ZDIzN2Q1NDVkMjAyZDU0M2QxNjNkNTM3ZDEyNGQ1MzFkOTFkNTE5LjVkNThkNTA4ZDM2ZDQ4OWQxNGQ0NzBkMTRkNDQyZDdkNDA4ZDE4LjVkMzc5ZDMwZDM1MGQ1Mi41ZDMyNS41ZDc1ZDMwMWQxMDZkMjgyZDEzN2QyNjNkMTY5LjVkMjQ5ZDIwMmQyMzVkMjMyLjVkMjI2ZDI2M2QyMTdkMjg1ZDIxNGQyODVkLTc2ZDM0NmQtNzZkMzg4ZDE3M2Q2MzdkMTczZDYzN2QyMjVkNDEwZDI1N2Q0MDlkNDk1ZDY5MmQ0OTVkNjk2ZDU0OWQ2ODEuNWQ1ODYuNWQ2NjdkNjI0ZDY0MmQ2NTBkNjE3ZDY3NmQ1ODVkNjkyLjVkNTUzZDcwOWQ1MjIuNWQ3MjJkNDkyZDczNWQ0NjYuNWQ3NDdkNDQxZDc1OWQ0MjlkNzc1ZDQzMGQ3ODdkNDMzLjVkODE2LjVkNDM3ZDg0NmQ0NDBkODc5ZDQ0M2Q5MTJkNDQ2ZDk0MWQ0NDlkOTcwZDQ1MWQ5ODJkNDUxZDk5NWQ0NTFkMTAwN2Q0MzZkMTAxMy41ZDQyMWQxMDIwZDQwMS41ZDEwMjMuNWQzODJkMTAyN2QzNjNkMTAyOGQzNDRkMTAyOWQzMzZkMTAyOWQzMTlkNzgyZDU5N2Q1NThkNTg4ZDU0NWQ1NjZkNTQxZDU0NGQ1MzdkNTE3ZDUzOS41ZDQ5MGQ1NDJkNDYzLjVkNTQ5ZDQzN2Q1NTZkNDIxZDU2M2Q0MjlkNjcxZDQ0NmQ2NjZkNDc0LjVkNjU2LjVkNTAzZDY0N2Q1MzBkNjMzZDU1N2Q2MTlkNTc3ZDYwMGQ1OTdkNTgxZDU5N2Q1NThkMTE0ZDQzNGQxMTRkNDU5ZDEyOS41ZDQ3MGQxNDVkNDgxZDE2N2Q0ODQuNWQxODlkNDg4ZDIxM2Q0ODYuNWQyMzdkNDg1ZDI1M2Q0ODVkMjU3ZDQ4NWQyNjcuNWQ0ODVkMjc4ZDQ4NWQyODkuNWQ0ODVkMzAxZDQ4NWQzMTFkNDg0LjVkMzIxZDQ4NGQzMjZkNDg0ZDMwNWQyOThkMzA1ZDI5NmQyOTUuNWQyOTQuNWQyODZkMjkzZDI4MGQyOTNkMjU2ZDI5M2QyMjdkMzA1LjVkMTk4ZDMxOGQxNzNkMzM4LjVkMTQ4ZDM1OWQxMzFkMzg0ZDExNGQ0MDlkMTE0ZDQzNGhSM2Q3MTNSNGQ2OTZSNWQ3UjZkMTEwMFI3ZC01UjhkMTA5M1I5ZDc3OVIxMGQ1NDBSMTFpMzZSMTJkN1IxM2Q3MTNSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTJpMmkyaTJpMmkyaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpMmkxaTNpM2kzaTNpMmkzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNoZzoxNDhvUjFkMTI2M1IyYWhSM2Q4NjVSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDc3OVIxMGQ1NDBSMTFpMTQ4UjEyZDBSMTNkODY1UjE0YWhnOjM1b1IxZDEyNjNSMmFkMTA4ZDYwMGQxMDhkNTg0ZDExNi41ZDU3Ni41ZDEyNWQ1NjlkMTM4ZDU2NmQxNTFkNTYzZDE2NmQ1NjRkMTgxZDU2NWQxOTVkNTY3LjVkMjA5ZDU3MGQyMTkuNWQ1NzIuNWQyMzBkNTc1ZDIzM2Q1NzVkMjMzZDQ2NGQyMjVkNDY0ZDIwNC41ZDQ2MS41ZDE4NGQ0NTlkMTYxZDQ1NS41ZDEzOGQ0NTJkMTE3ZDQ0OC41ZDk2ZDQ0NWQ4OGQ0NDNkNzFkNDM0ZDcwZDQyMi41ZDY5ZDQxMWQ4OGQ0MDFkOTZkMzk5ZDExN2QzOTZkMTM4ZDM5M2QxNjFkMzg5LjVkMTg0ZDM4NmQyMDQuNWQzODMuNWQyMjVkMzgxZDIzM2QzODFkMjMzZDIzNmQyMzNkMjI3ZDIzOGQyMjIuNWQyNDNkMjE4ZDI0OS41ZDIxNmQyNTZkMjE0ZDI2M2QyMTMuNWQyNzBkMjEzZDI3NWQyMTNkMjgwZDIxM2QyODdkMjEzLjVkMjk0ZDIxNGQzMDAuNWQyMTZkMzA3ZDIxOGQzMTEuNWQyMjIuNWQzMTZkMjI3ZDMxNmQyMzZkMzE2ZDM3M2Q0NDFkMzYwZDQ0MWQxOTRkNTA0ZDE5NGQ1NDVkMzYwZDc2NWQzNjBkNzY1ZDM4N2Q3NTFkNDAxLjVkNzM3ZDQxNmQ3MTZkNDIyZDY5NWQ0MjhkNjY4LjVkNDI3LjVkNjQyZDQyN2Q2MThkNDI0ZDU5NGQ0MjFkNTc0ZDQxNy41ZDU1NGQ0MTRkNTQ1ZDQxNGQ1NDVkNTQyZDU4MmQ1NDJkNjE4ZDUzOC41ZDY1NGQ1MzVkNjkwZDUzMS41ZDcyNmQ1MjhkNzYyZDUyNC41ZDc5OGQ1MjFkODM2ZDUyMWQ4MzZkNTQ3ZDgzNmQ1NjBkODE2LjVkNTY5ZDc5N2Q1NzhkNzY3LjVkNTg0ZDczOGQ1OTBkNzAyLjVkNTkzLjVkNjY3ZDU5N2Q2MzQuNWQ2MDBkNjAyZDYwM2Q1NzcuNWQ2MDVkNTUzZDYwN2Q1NDVkNjA5ZDU0M2Q2NDlkNTQxZDY3OGQ1MzlkNzA3ZDUyOS41ZDcyNS41ZDUyMGQ3NDRkNDk5LjVkNzUzZDQ3OWQ3NjJkNDQxZDc2MmQ0NDFkNjM4ZDM3NGQ2MzNkMzQ2ZDY0MC41ZDMxOGQ2NDhkMzEyLjVkNjYzZDMwN2Q2NzhkMzE1ZDY5Ni41ZDMyM2Q3MTVkMzI3ZDczMmQzMzFkNzQ5ZDMyMi41ZDc2MS41ZDMxNGQ3NzRkMjc1ZDc3NmQyNzJkNzc2ZDI2NGQ3NzZkMjU2ZDc3NmQyNTRkNzc1ZDI1MmQ3MjVkMjQwZDY5NWQyMjhkNjY1ZDIxMS41ZDY0OC41ZDE5NWQ2MzJkMTc3ZDYyNmQxNTlkNjIwZDE0My41ZDYxNy41ZDEyOGQ2MTVkMTE4ZDYxMi41ZDEwOGQ2MTBkMTA4ZDYwMGQ0MjRkNDIxZDQxNGQ0MjFkMzk2ZDQyM2QzNzhkNDI1ZDM2MGQ0MjhkMzQyZDQzMWQzMjlkNDM1ZDMxNmQ0MzlkMzE2ZDQ0M2QzMTZkNTc1ZDM0NGQ1NzVkMzcwZDU3NC41ZDM5NmQ1NzRkNDE2LjVkNTY1LjVkNDM3ZDU1N2Q0NDkuNWQ1MzguNWQ0NjJkNTIwZDQ2MmQ0ODRkNDYyZDQ2M2Q0NjAuNWQ0NTAuNWQ0NTlkNDM4ZDQ1NWQ0MzEuNWQ0NTFkNDI1ZDQ0My41ZDQyM2Q0MzZkNDIxZDQyNGQ0MjFoUjNkODE2UjRkODM2UjVkNjlSNmQ4MzBSN2QyNDhSOGQ3NjFSOWQ3NzlSMTBkNTQwUjExaTM1UjEyZDY5UjEzZDgxNlIxNGFpMWkzaTNpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpMmkyaTJpMmkyaTJpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNoZzoxNDdvUjFkMTI2M1IyYWhSM2Q4NjVSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDc3OVIxMGQ1NDBSMTFpMTQ3UjEyZDBSMTNkODY1UjE0YWhnOjM0b1IxZDEyNjNSMmFkMTg0ZDI0N2QxODRkMjMxZDE4M2QyMDUuNWQxODJkMTgwZDE4NWQxNTNkMTg4ZDEyNmQxOTcuNWQxMDNkMjA3ZDgwZDIyN2Q3MGQyNDlkOTBkMjQ5ZDMzOWQyNjlkMzgxZDI2N2QzODNkMjYxLjVkMzg2LjVkMjU2ZDM5MGQyNDkuNWQzOTNkMjQzZDM5NmQyMzYuNWQzOTguNWQyMzBkNDAxZDIyN2Q0MDFkMjE0ZDQwMWQyMDUuNWQzOTBkMTk3ZDM3OWQxOTIuNWQzNjJkMTg4ZDM0NWQxODZkMzI1LjVkMTg0ZDMwNmQxODMuNWQyODlkMTgzZDI3MmQxODMuNWQyNjBkMTg0ZDI0OGQxODRkMjQ3ZDY5ZDI1NmQ2OWQyNDBkNjhkMjE0LjVkNjdkMTg5ZDcwZDE2MmQ3M2QxMzVkODJkMTEyZDkxZDg5ZDExMmQ3OWQxMzNkOTlkMTMzZDM0OGQxNTRkMzkwZDE1MmQzOTJkMTQ2ZDM5NS41ZDE0MGQzOTlkMTMzLjVkNDAyLjVkMTI3ZDQwNmQxMjFkNDA4LjVkMTE1ZDQxMWQxMTJkNDExZDk4ZDQxMWQ5MGQ0MDBkODJkMzg5ZDc3ZDM3MmQ3MmQzNTVkNzBkMzM1LjVkNjhkMzE2ZDY4ZDI5OC41ZDY4ZDI4MWQ2OC41ZDI2OWQ2OWQyNTdkNjlkMjU2aFIzZDMwM1I0ZDI2OVI1ZDY3UjZkOTU0UjdkNjEzUjhkODg3UjlkNzc5UjEwZDU0MFIxMWkzNFIxMmQ2N1IxM2QzMDNSMTRhaTFpM2kzaTNpM2kyaTJpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kyaTJpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTQ2b1IxZDEyNjNSMmFoUjNkODY1UjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQ3NzlSMTBkNTQwUjExaTE0NlIxMmQwUjEzZDg2NVIxNGFoZzozM29SMWQxMjYzUjJhZDc5ZDk0MGQ4OWQ5NDBkMTAyZDk0MC41ZDExNWQ5NDFkMTI3ZDk0NGQxMzlkOTQ3ZDE0N2Q5NTMuNWQxNTVkOTYwZDE1NWQ5NzJkMTQ3ZDk5OWQxMzBkMTAxMy41ZDExM2QxMDI4ZDk0LjVkMTAzMS41ZDc2ZDEwMzVkNjBkMTAyOWQ0NGQxMDIzZDM4ZDEwMTAuNWQzMmQ5OThkNDAuNWQ5NzkuNWQ0OWQ5NjFkNzlkOTQwZDEzOGQtMTAyZDEzNWQtOTBkMTMzLjVkLTUxLjVkMTMyZC0xM2QxMzEuNWQ0Mi41ZDEzMWQ5OGQxMzFkMTY2ZDEzMWQyMzRkMTMwLjVkMzA1ZDEzMGQzNzZkMTI5ZDQ0NS41ZDEyOGQ1MTVkMTI2ZDU3M2QxMjRkNjMxZDEyMC41ZDY3My41ZDExN2Q3MTZkMTExZDczM2QyN2Q3MzNkMjdkNjMwZDMxLjVkNTI2LjVkMzZkNDIzZDQxZDMxOS41ZDQ2ZDIxNmQ1MC41ZDExMmQ1NWQ4ZDU1ZC05N2QxMzhkLTEwMmhSM2QxNzNSNGQxNTVSNWQyN1I2ZDExMjZSN2QtMTFSOGQxMDk5UjlkNzc5UjEwZDU0MFIxMWkzM1IxMmQyN1IxM2QxNzNSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kyaTNpM2kzaTNpMmhnOjE0NW9SMWQxMjYzUjJhaFIzZDg2NVI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkNzc5UjEwZDU0MFIxMWkxNDVSMTJkMFIxM2Q4NjVSMTRhaGc6MzJvUjFkMTI2M1IyYWhSM2Q1MTJSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDc3OVIxMGQ1NDBSMTFpMzJSMTJkMFIxM2Q1MTJSMTRhaGc6MTQ0b1IxZDEyNjNSMmFoUjNkODY1UjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQ3NzlSMTBkNTQwUjExaTE0NFIxMmQwUjEzZDg2NVIxNGFoZzoxNDNvUjFkMTI2M1IyYWhSM2Q4NjVSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDc3OVIxMGQ1NDBSMTFpMTQzUjEyZDBSMTNkODY1UjE0YWhnOjI1NW9SMWQxMjYzUjJhZDI5N2QxNDk1ZDI4M2QxNTI5ZDI2NC41ZDE1NDJkMjQ2ZDE1NTVkMjMxZDE1NTMuNWQyMTZkMTU1MmQyMDguNWQxNTM3LjVkMjAxZDE1MjNkMjA5ZDE1MDJkMjIzZDE0NDVkMjQxLjVkMTM4NGQyNjBkMTMyM2QyODBkMTI2M2QzMDBkMTIwM2QzMjBkMTE0NS41ZDM0MGQxMDg4ZDM1OGQxMDM3ZDM0N2QxMDI2ZDMyNi41ZDEwMDAuNWQzMDZkOTc1ZDI4MGQ5NDFkMjU0ZDkwN2QyMjQuNWQ4NjYuNWQxOTVkODI2ZDE2NmQ3ODUuNWQxMzdkNzQ1ZDExMC41ZDcwNi41ZDg0ZDY2OGQ2NWQ2MzdkNDZkNjA2ZDM2ZDU4Ni41ZDI2ZDU2N2QyOWQ1NjNkNzZkNTE1ZDk5ZDUzN2QxMjhkNTY4LjVkMTU3ZDYwMGQxODdkNjM2LjVkMjE3ZDY3M2QyNDhkNzEyZDI3OWQ3NTFkMzA3ZDc4OC41ZDMzNWQ4MjZkMzU4LjVkODU5LjVkMzgyZDg5M2QzOThkOTE4ZDQxN2Q4NzdkNDI3LjVkODUzLjVkNDM4ZDgzMGQ0NDZkODA5LjVkNDU0ZDc4OWQ0NjNkNzY2ZDQ3MmQ3NDNkNDg4LjVkNzAzZDUwNWQ2NjNkNTMyLjVkNjAxZDU2MGQ1MzlkNjA2ZDQ0MGQ2MTNkNDM3ZDYyN2Q0MzUuNWQ2NDFkNDM0ZDY1NGQ0MzcuNWQ2NjdkNDQxZDY3NC41ZDQ1MS41ZDY4MmQ0NjJkNjc4ZDQ4MWQyOTdkMTQ5NWQyOTdkMTQ5NWQyMDdkMjM1ZDIwN2QyMzBkMjE2LjVkMjIyLjVkMjI2ZDIxNWQyMzhkMjA5ZDI1MWQyMDJkMjY5ZDE5NGQyOTVkMTk0ZDMwNC41ZDIwNWQzMTRkMjE2ZDMxNGQyMzZkMzE0ZDI1MWQzMDYuNWQyNTkuNWQyOTlkMjY4ZDI4Ny41ZDI3MmQyNzZkMjc2ZDI2Mi41ZDI3N2QyNDlkMjc4ZDIzN2QyNzhkMjIxZDI3OGQyMTRkMjY4LjVkMjA3ZDI1OWQyMDdkMjM1ZDM4N2QyMzVkMzg3ZDIzMGQzOTYuNWQyMjIuNWQ0MDZkMjE1ZDQxOGQyMDlkNDMyZDIwMmQ0NTBkMTk0ZDQ3NmQxOTRkNDg1LjVkMjA1ZDQ5NWQyMTZkNDk1ZDIzNmQ0OTVkMjUxZDQ4Ny41ZDI1OS41ZDQ4MGQyNjhkNDY4LjVkMjcyZDQ1N2QyNzZkNDQzZDI3N2Q0MjlkMjc4ZDQxN2QyNzhkNDAxZDI3OGQzOTRkMjY4LjVkMzg3ZDI1OWQzODdkMjM1aFIzZDcwMlI0ZDY4MlI1ZDI2UjZkODMwUjdkLTUzMVI4ZDgwNFI5ZDc3OVIxMGQ1NDBSMTFpMjU1UjEyZDI2UjEzZDcwMlIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTJpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxNDJvUjFkMTI2M1IyYWhSM2Q4NjVSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDc3OVIxMGQ1NDBSMTFpMTQyUjEyZDBSMTNkODY1UjE0YWhnOjI1NG9SMWQxMjYzUjJhZDMwZDI5N2Q1NGQyODdkNzBkMjg1LjVkODZkMjg0ZDk2ZDMwM2QxMDZkMzIyZDExMWQzNjhkMTE2ZDQxNGQxMTlkNDk5ZDI1OWQ0NTZkMzU5ZDQ1MGQ0NTlkNDQ0ZDUyMi41ZDQ2My41ZDU4NmQ0ODNkNjE0ZDUyM2Q2NDJkNTYzZDYzNy41ZDYxMi41ZDYzM2Q2NjJkNTk3LjVkNzE1LjVkNTYyZDc2OWQ0OTguNWQ4MTZkNDM1ZDg2M2QzNDVkODk3LjVkMjU1ZDkzMmQxNDFkOTQ0ZDE0M2Q5ODdkMTQxLjVkMTAzMWQxNDBkMTA3NWQxNDZkMTEyMmQxNTJkMTE2OGQxMjhkMTE4Ny41ZDEwNGQxMjA3ZDYyZDEyMDJkMzBkMjk3ZDM4OGQ1MjFkMzQ5ZDUyMWQzMDJkNTMwZDI1NWQ1MzlkMjE0LjVkNTYwLjVkMTc0ZDU4MmQxNDhkNjE4LjVkMTIyZDY1NWQxMjVkNzA5ZDEzMWQ4NjBkMjcwZDgyOWQzNTguNWQ3OTEuNWQ0NDdkNzU0ZDQ5NGQ3MTYuNWQ1NDFkNjc5ZDU1MWQ2NDMuNWQ1NjFkNjA4ZDU0My41ZDU4MWQ1MjZkNTU0ZDQ4NC41ZDUzNy41ZDQ0M2Q1MjFkMzg4ZDUyMWhSM2Q2NjRSNGQ2NDJSNWQzMFI2ZDc0MFI3ZC0xODNSOGQ3MTBSOWQ3NzlSMTBkNTQwUjExaTI1NFIxMmQzMFIxM2Q2NjRSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTFpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaGc6MTQxb1IxZDEyNjNSMmFoUjNkODY1UjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQ3NzlSMTBkNTQwUjExaTE0MVIxMmQwUjEzZDg2NVIxNGFoZzoyNTNvUjFkMTI2M1IyYWQyOTdkMTQ5NWQyODNkMTUyOWQyNjQuNWQxNTQyZDI0NmQxNTU1ZDIzMWQxNTUzLjVkMjE2ZDE1NTJkMjA4LjVkMTUzNy41ZDIwMWQxNTIzZDIwOWQxNTAyZDIyM2QxNDQ1ZDI0MS41ZDEzODRkMjYwZDEzMjNkMjgwZDEyNjNkMzAwZDEyMDNkMzIwZDExNDUuNWQzNDBkMTA4OGQzNThkMTAzN2QzNDdkMTAyNmQzMjYuNWQxMDAwLjVkMzA2ZDk3NWQyODBkOTQxZDI1NGQ5MDdkMjI0LjVkODY2LjVkMTk1ZDgyNmQxNjZkNzg1LjVkMTM3ZDc0NWQxMTAuNWQ3MDYuNWQ4NGQ2NjhkNjVkNjM3ZDQ2ZDYwNmQzNmQ1ODYuNWQyNmQ1NjdkMjlkNTYzZDc2ZDUxNWQ5OWQ1MzdkMTI4ZDU2OC41ZDE1N2Q2MDBkMTg3ZDYzNi41ZDIxN2Q2NzNkMjQ4ZDcxMmQyNzlkNzUxZDMwN2Q3ODguNWQzMzVkODI2ZDM1OC41ZDg1OS41ZDM4MmQ4OTNkMzk4ZDkxOGQ0MTdkODc3ZDQyNy41ZDg1My41ZDQzOGQ4MzBkNDQ2ZDgwOS41ZDQ1NGQ3ODlkNDYzZDc2NmQ0NzJkNzQzZDQ4OC41ZDcwM2Q1MDVkNjYzZDUzMi41ZDYwMWQ1NjBkNTM5ZDYwNmQ0NDBkNjEzZDQzN2Q2MjdkNDM1LjVkNjQxZDQzNGQ2NTRkNDM3LjVkNjY3ZDQ0MWQ2NzQuNWQ0NTEuNWQ2ODJkNDYyZDY3OGQ0ODFkMjk3ZDE0OTVkMjk3ZDE0OTVkMzYyZDI2OGQzNzVkMjUyZDM4N2QyNDdkMzk5ZDI0MmQ0MDdkMjQ1LjVkNDE1ZDI0OWQ0MjBkMjU4LjVkNDI1ZDI2OGQ0MjVkMjc5ZDQyMmQyOTFkNDE3LjVkMzAwLjVkNDEzZDMxMGQ0MDJkMzIzZDM5MWQzMzZkMzcwZDM1NC41ZDM0OWQzNzNkMzE1ZDQwMWQyNzZkMzY2ZDM2MmQyNjhoUjNkNzAyUjRkNjgyUjVkMjZSNmQ3ODJSN2QtNTMxUjhkNzU2UjlkNzc5UjEwZDU0MFIxMWkyNTNSMTJkMjZSMTNkNzAyUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpMmkxaTNpM2kzaTNpM2kzaTNpM2kyaTJoZzoxNDBvUjFkMTI2M1IyYWhSM2Q4NjVSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDc3OVIxMGQ1NDBSMTFpMTQwUjEyZDBSMTNkODY1UjE0YWhnOjI1Mm9SMWQxMjYzUjJhZDI4ZDg1OGQyOGQ4MzhkMjQuNWQ4MDJkMjFkNzY2ZDE4LjVkNzIzLjVkMTZkNjgxZDE2LjVkNjM3ZDE3ZDU5M2QyNGQ1NTcuNWQzMWQ1MjJkNDYuNWQ0OTlkNjJkNDc2ZDkxZDQ3NmQxMjZkNDg2ZDEzOC41ZDUwMmQxNTFkNTE4ZDE0OS41ZDU0MWQxNDhkNTY0ZDEzNy41ZDU5NGQxMjdkNjI0ZDExNmQ2NjIuNWQxMDVkNzAxZDk5ZDc0Ny41ZDkzZDc5NGQxMDFkODUwZDExMGQ4ODZkMTM3LjVkOTA1LjVkMTY1ZDkyNWQyMDNkOTMwLjVkMjQxZDkzNmQyODQuNWQ5MjkuNWQzMjhkOTIzZDM2OWQ5MDcuNWQ0MTBkODkyZDQ0NGQ4NjkuNWQ0NzhkODQ3ZDQ5N2Q4MjFkNTA3ZDc3MWQ1MDhkNzI5LjVkNTA5ZDY4OGQ1MDZkNjQ5ZDUwM2Q2MTBkNDk4ZDU2OS41ZDQ5M2Q1MjlkNDkyZDQ4MGQ1MzBkNDY0ZDU1MmQ0ODVkNTc0ZDUwNmQ1ODUuNWQ1NTAuNWQ1OTdkNTk1ZDYwMWQ2NTZkNjA1ZDcxN2Q2MDUuNWQ3ODEuNWQ2MDZkODQ2ZDYwNmQ5MDdkNjA2ZDk2OGQ2MTFkMTAxMWQ1ODRkMTAzN2Q1NTQuNWQxMDE2ZDUyNWQ5OTVkNTA5ZDkyNWQ0OTNkOTM5ZDQ1NGQ5NTkuNWQ0MTVkOTgwZDM2NC41ZDk5NmQzMTRkMTAxMmQyNTguNWQxMDE5ZDIwM2QxMDI2ZDE1NWQxMDE0ZDEwN2QxMDAyZDcyZDk2NS41ZDM3ZDkyOWQyOGQ4NThkMTgxZDIzNWQxODFkMjMwZDE5MC41ZDIyMi41ZDIwMGQyMTVkMjEyZDIwOWQyMjVkMjAyZDI0M2QxOTRkMjY5ZDE5NGQyNzguNWQyMDVkMjg4ZDIxNmQyODhkMjM2ZDI4OGQyNTFkMjgwLjVkMjU5LjVkMjczZDI2OGQyNjEuNWQyNzJkMjUwZDI3NmQyMzYuNWQyNzdkMjIzZDI3OGQyMTFkMjc4ZDE5NWQyNzhkMTg4ZDI2OC41ZDE4MWQyNTlkMTgxZDIzNWQzNjFkMjM1ZDM2MWQyMzBkMzcwLjVkMjIyLjVkMzgwZDIxNWQzOTJkMjA5ZDQwNmQyMDJkNDI0ZDE5NGQ0NTBkMTk0ZDQ1OS41ZDIwNWQ0NjlkMjE2ZDQ2OWQyMzZkNDY5ZDI1MWQ0NjEuNWQyNTkuNWQ0NTRkMjY4ZDQ0Mi41ZDI3MmQ0MzFkMjc2ZDQxN2QyNzdkNDAzZDI3OGQzOTFkMjc4ZDM3NWQyNzhkMzY4ZDI2OC41ZDM2MWQyNTlkMzYxZDIzNWhSM2Q2NTBSNGQ2MTFSNWQxNlI2ZDgzMFI3ZC0xM1I4ZDgxNFI5ZDc3OVIxMGQ1NDBSMTFpMjUyUjEyZDE2UjEzZDY1MFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjEzOW9SMWQxMjYzUjJhaFIzZDg2NVI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkNzc5UjEwZDU0MFIxMWkxMzlSMTJkMFIxM2Q4NjVSMTRhaGc6MjUxb1IxZDEyNjNSMmFkMjhkODU4ZDI4ZDgzOGQyNC41ZDgwMmQyMWQ3NjZkMTguNWQ3MjMuNWQxNmQ2ODFkMTYuNWQ2MzdkMTdkNTkzZDI0ZDU1Ny41ZDMxZDUyMmQ0Ni41ZDQ5OWQ2MmQ0NzZkOTFkNDc2ZDEyNmQ0ODZkMTM4LjVkNTAyZDE1MWQ1MThkMTQ5LjVkNTQxZDE0OGQ1NjRkMTM3LjVkNTk0ZDEyN2Q2MjRkMTE2ZDY2Mi41ZDEwNWQ3MDFkOTlkNzQ3LjVkOTNkNzk0ZDEwMWQ4NTBkMTEwZDg4NmQxMzcuNWQ5MDUuNWQxNjVkOTI1ZDIwM2Q5MzAuNWQyNDFkOTM2ZDI4NC41ZDkyOS41ZDMyOGQ5MjNkMzY5ZDkwNy41ZDQxMGQ4OTJkNDQ0ZDg2OS41ZDQ3OGQ4NDdkNDk3ZDgyMWQ1MDdkNzcxZDUwOGQ3MjkuNWQ1MDlkNjg4ZDUwNmQ2NDlkNTAzZDYxMGQ0OThkNTY5LjVkNDkzZDUyOWQ0OTJkNDgwZDUzMGQ0NjRkNTUyZDQ4NWQ1NzRkNTA2ZDU4NS41ZDU1MC41ZDU5N2Q1OTVkNjAxZDY1NmQ2MDVkNzE3ZDYwNS41ZDc4MS41ZDYwNmQ4NDZkNjA2ZDkwN2Q2MDZkOTY4ZDYxMWQxMDExZDU4NGQxMDM3ZDU1NC41ZDEwMTZkNTI1ZDk5NWQ1MDlkOTI1ZDQ5M2Q5MzlkNDU0ZDk1OS41ZDQxNWQ5ODBkMzY0LjVkOTk2ZDMxNGQxMDEyZDI1OC41ZDEwMTlkMjAzZDEwMjZkMTU1ZDEwMTRkMTA3ZDEwMDJkNzJkOTY1LjVkMzdkOTI5ZDI4ZDg1OGQxNDJkMzQyZDE0MmQzMjdkMTU1ZDMwNGQxNjhkMjgxZDE5MmQyNTYuNWQyMTZkMjMyZDI0OS41ZDIwNy41ZDI4M2QxODNkMzIzZDE2NWQzNTBkMTgyZDM3MC41ZDE5NS41ZDM5MWQyMDlkNDA5ZDIyNS41ZDQyN2QyNDJkNDQ1LjVkMjY1ZDQ2NGQyODhkNDg3ZDMyNWQ0OTVkMzQwZDQ5NS41ZDM1M2Q0OTZkMzY2ZDQ5MGQzNzRkNDg0ZDM4MmQ0NzIuNWQzODNkNDYxZDM4NGQ0NDVkMzc1ZDQyN2QzNjJkNDE3ZDM1NWQ0MDdkMzQ4ZDQwMWQzNDMuNWQzOTVkMzM5ZDM5MC41ZDMzNGQzODZkMzI5ZDM3Ny41ZDMyMC41ZDM2OWQzMTJkMzU0LjVkMjk3ZDM0MGQyODJkMzE0ZDI1NmQyODdkMjc1ZDI2Ny41ZDI5MWQyNDhkMzA3ZDIzNGQzMjIuNWQyMjBkMzM4ZDIxMC41ZDM1My41ZDIwMWQzNjlkMTk0ZDM4N2QxNzFkMzg3ZDE1Ni41ZDM4MC41ZDE0MmQzNzRkMTQyZDM0MmhSM2Q2NTBSNGQ2MTFSNWQxNlI2ZDg1OVI3ZC0xM1I4ZDg0M1I5ZDc3OVIxMGQ1NDBSMTFpMjUxUjEyZDE2UjEzZDY1MFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTM4b1IxZDEyNjNSMmFoUjNkODY1UjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQ3NzlSMTBkNTQwUjExaTEzOFIxMmQwUjEzZDg2NVIxNGFoZzoyNTBvUjFkMTI2M1IyYWQyOGQ4NThkMjhkODM4ZDI0LjVkODAyZDIxZDc2NmQxOC41ZDcyMy41ZDE2ZDY4MWQxNi41ZDYzN2QxN2Q1OTNkMjRkNTU3LjVkMzFkNTIyZDQ2LjVkNDk5ZDYyZDQ3NmQ5MWQ0NzZkMTI2ZDQ4NmQxMzguNWQ1MDJkMTUxZDUxOGQxNDkuNWQ1NDFkMTQ4ZDU2NGQxMzcuNWQ1OTRkMTI3ZDYyNGQxMTZkNjYyLjVkMTA1ZDcwMWQ5OWQ3NDcuNWQ5M2Q3OTRkMTAxZDg1MGQxMTBkODg2ZDEzNy41ZDkwNS41ZDE2NWQ5MjVkMjAzZDkzMC41ZDI0MWQ5MzZkMjg0LjVkOTI5LjVkMzI4ZDkyM2QzNjlkOTA3LjVkNDEwZDg5MmQ0NDRkODY5LjVkNDc4ZDg0N2Q0OTdkODIxZDUwN2Q3NzFkNTA4ZDcyOS41ZDUwOWQ2ODhkNTA2ZDY0OWQ1MDNkNjEwZDQ5OGQ1NjkuNWQ0OTNkNTI5ZDQ5MmQ0ODBkNTMwZDQ2NGQ1NTJkNDg1ZDU3NGQ1MDZkNTg1LjVkNTUwLjVkNTk3ZDU5NWQ2MDFkNjU2ZDYwNWQ3MTdkNjA1LjVkNzgxLjVkNjA2ZDg0NmQ2MDZkOTA3ZDYwNmQ5NjhkNjExZDEwMTFkNTg0ZDEwMzdkNTU0LjVkMTAxNmQ1MjVkOTk1ZDUwOWQ5MjVkNDkzZDkzOWQ0NTRkOTU5LjVkNDE1ZDk4MGQzNjQuNWQ5OTZkMzE0ZDEwMTJkMjU4LjVkMTAxOWQyMDNkMTAyNmQxNTVkMTAxNGQxMDdkMTAwMmQ3MmQ5NjUuNWQzN2Q5MjlkMjhkODU4ZDMzNmQyNjhkMzQ5ZDI1MmQzNjFkMjQ3ZDM3M2QyNDJkMzgxZDI0NS41ZDM4OWQyNDlkMzk0ZDI1OC41ZDM5OWQyNjhkMzk5ZDI3OWQzOTZkMjkxZDM5MS41ZDMwMC41ZDM4N2QzMTBkMzc2ZDMyM2QzNjVkMzM2ZDM0NGQzNTQuNWQzMjNkMzczZDI4OWQ0MDFkMjUwZDM2NmQzMzZkMjY4aFIzZDY1MFI0ZDYxMVI1ZDE2UjZkNzgyUjdkLTEzUjhkNzY2UjlkNzc5UjEwZDU0MFIxMWkyNTBSMTJkMTZSMTNkNjUwUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTJpMmhnOjEzN29SMWQxMjYzUjJhaFIzZDg2NVI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkNzc5UjEwZDU0MFIxMWkxMzdSMTJkMFIxM2Q4NjVSMTRhaGc6MjQ5b1IxZDEyNjNSMmFkMjhkODU4ZDI4ZDgzOGQyNC41ZDgwMmQyMWQ3NjZkMTguNWQ3MjMuNWQxNmQ2ODFkMTYuNWQ2MzdkMTdkNTkzZDI0ZDU1Ny41ZDMxZDUyMmQ0Ni41ZDQ5OWQ2MmQ0NzZkOTFkNDc2ZDEyNmQ0ODZkMTM4LjVkNTAyZDE1MWQ1MThkMTQ5LjVkNTQxZDE0OGQ1NjRkMTM3LjVkNTk0ZDEyN2Q2MjRkMTE2ZDY2Mi41ZDEwNWQ3MDFkOTlkNzQ3LjVkOTNkNzk0ZDEwMWQ4NTBkMTEwZDg4NmQxMzcuNWQ5MDUuNWQxNjVkOTI1ZDIwM2Q5MzAuNWQyNDFkOTM2ZDI4NC41ZDkyOS41ZDMyOGQ5MjNkMzY5ZDkwNy41ZDQxMGQ4OTJkNDQ0ZDg2OS41ZDQ3OGQ4NDdkNDk3ZDgyMWQ1MDdkNzcxZDUwOGQ3MjkuNWQ1MDlkNjg4ZDUwNmQ2NDlkNTAzZDYxMGQ0OThkNTY5LjVkNDkzZDUyOWQ0OTJkNDgwZDUzMGQ0NjRkNTUyZDQ4NWQ1NzRkNTA2ZDU4NS41ZDU1MC41ZDU5N2Q1OTVkNjAxZDY1NmQ2MDVkNzE3ZDYwNS41ZDc4MS41ZDYwNmQ4NDZkNjA2ZDkwN2Q2MDZkOTY4ZDYxMWQxMDExZDU4NGQxMDM3ZDU1NC41ZDEwMTZkNTI1ZDk5NWQ1MDlkOTI1ZDQ5M2Q5MzlkNDU0ZDk1OS41ZDQxNWQ5ODBkMzY0LjVkOTk2ZDMxNGQxMDEyZDI1OC41ZDEwMTlkMjAzZDEwMjZkMTU1ZDEwMTRkMTA3ZDEwMDJkNzJkOTY1LjVkMzdkOTI5ZDI4ZDg1OGQzOTJkMzUzZDM3MWQ0MDdkMzM5ZDM4NWQzMjBkMzcxZDMwMWQzNTdkMjkwZDM0NmQyNzlkMzM1ZDI3M2QzMjUuNWQyNjdkMzE2ZDI2M2QzMDNkMjYxZDI5MGQyNjIuNWQyNzhkMjY0ZDI2NmQyNzBkMjU5LjVkMjc2ZDI1M2QyODUuNWQyNTQuNWQyOTVkMjU2ZDMwOGQyNzFkMzkyZDM1M2hSM2Q2NTBSNGQ2MTFSNWQxNlI2ZDc3MVI3ZC0xM1I4ZDc1NVI5ZDc3OVIxMGQ1NDBSMTFpMjQ5UjEyZDE2UjEzZDY1MFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTJpM2kzaTNpM2kzaTNpM2kzaTJoZzoxMzZvUjFkMTI2M1IyYWhSM2Q4NjVSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDc3OVIxMGQ1NDBSMTFpMTM2UjEyZDBSMTNkODY1UjE0YWhnOjI0OG9SMWQxMjYzUjJhZDY1ZDc4N2Q2NWQ3MDVkMTAxZDY0Ni41ZDEzN2Q1ODhkMTkyZDU0OWQyNDdkNTEwZDMxMmQ0ODkuNWQzNzdkNDY5ZDQzNmQ0NjNkNDkzZDQ2MGQ1NDNkNDc3LjVkNTkzZDQ5NWQ2MjlkNTI3ZDY2NWQ1NTlkNjg0LjVkNjAzZDcwNGQ2NDdkNjk5ZDY5NmQ2OTlkNzc4ZDY2Ni41ZDgzOS41ZDYzNGQ5MDFkNTgwZDk0Mi41ZDUyNmQ5ODRkNDU0LjVkMTAwNC41ZDM4M2QxMDI1ZDMwNWQxMDI1ZDE4N2QxMDI1ZDEyNmQ5NzBkNjVkOTE1ZDY1ZDc4N2QxNTFkODE3ZDE1MWQ4NTlkMTYxLjVkODg0ZDE3MmQ5MDlkMTkyLjVkOTIxLjVkMjEzZDkzNGQyNDIuNWQ5MzhkMjcyZDk0MmQzMTFkOTQyZDM3MWQ5NDJkNDI3ZDkzMC41ZDQ4M2Q5MTlkNTI2ZDg5MS41ZDU2OWQ4NjRkNTk1ZDgxOC41ZDYyMWQ3NzNkNjIxZDcwNWQ2MjFkNjcwZDYxMWQ2MzguNWQ2MDFkNjA3ZDU4MWQ1ODMuNWQ1NjFkNTYwZDUzMmQ1NDZkNTAzZDUzMmQ0NjZkNTMyZDQxN2Q1NDBkMzY4ZDU1MC41ZDMxOWQ1NjFkMjc2ZDU4OC41ZDIzM2Q2MTZkMjAwZDY2OS41ZDE2N2Q3MjNkMTUxZDgxN2QxNTdkMTAzMWQxNTlkMTAyM2QxODEuNWQ5ODVkMjA0ZDk0N2QyNDBkODkwLjVkMjc2ZDgzNGQzMjEuNWQ3NjMuNWQzNjdkNjkzZDQxNC41ZDYyMC41ZDQ2MmQ1NDhkNTA3LjVkNDc4LjVkNTUzZDQwOWQ1OTBkMzUzLjVkNjI3ZDI5OGQ2NTAuNWQyNjIuNWQ2NzRkMjI3ZDY3OGQyMjJkNjg4ZDIyOGQ2ODBkMjYxZDY3MmQyOTRkNjUwZDM0Ni41ZDYyOGQzOTlkNTk0LjVkNDY1LjVkNTYxZDUzMmQ1MjAuNWQ2MDRkNDgwZDY3NmQ0MzVkNzQ4LjVkMzkwZDgyMWQzNDVkODg1LjVkMzAwZDk1MGQyNTcuNWQxMDAxLjVkMjE1ZDEwNTNkMTgwZDEwODNkMTcxZDEwODNkMTY2ZDEwNzYuNWQxNjFkMTA3MGQxNTlkMTA2MWQxNTdkMTA1MmQxNTdkMTA0My41ZDE1N2QxMDM1ZDE1N2QxMDMxaFIzZDcyMFI0ZDcwNFI1ZDY1UjZkNjM0UjdkLTU5UjhkNTY5UjlkNzc5UjEwZDU0MFIxMWkyNDhSMTJkNjVSMTNkNzIwUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxMzVvUjFkMTI2M1IyYWhSM2Q4NjVSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDc3OVIxMGQ1NDBSMTFpMTM1UjEyZDBSMTNkODY1UjE0YWhnOjI0N29SMWQxMjYzUjJhZDIxM2Q4NTNkMjEzZDgzNGQyMzBkODE3ZDI0N2Q4MDBkMjY2ZDgwMGQyOTBkODAwZDMwMC41ZDgxNGQzMTFkODI4ZDMxMC41ZDg0NGQzMTBkODYwZDI5OWQ4NzNkMjg4ZDg4NmQyNjdkODg1ZDI1OWQ4ODVkMjUwZDg4My41ZDI0MWQ4ODJkMjMyLjVkODc4LjVkMjI0ZDg3NWQyMTguNWQ4NjguNWQyMTNkODYyZDIxM2Q4NTNkMTczZDYxNGQxNTdkNjA5ZDE1NS41ZDU5OC41ZDE1NGQ1ODhkMTYxLjVkNTc3LjVkMTY5ZDU2N2QxODFkNTU5ZDE5M2Q1NTFkMjA0ZDU1MGQyNDNkNTU1ZDI1NmQ1NzNkMjY5ZDU5MWQyNjIuNWQ2MDZkMjU2ZDYyMWQyMzJkNjI3ZDIwOGQ2MzNkMTczZDYxNGQ3MmQ3MjJkNzJkNzA1ZDg2LjVkNjk4LjVkMTAxZDY5MmQxMTZkNjkwZDE3M2Q2ODJkMjI3LjVkNjcyLjVkMjgyZDY2M2QzNDFkNjU3ZDM2NmQ2NTdkMzgzLjVkNjY1LjVkNDAxZDY3NGQ0MDYuNWQ2ODUuNWQ0MTJkNjk3ZDQwNWQ3MDkuNWQzOThkNzIyZDM3NWQ3MjlkMTM1ZDc1NGQxMjdkNzU0ZDExNmQ3NTNkMTA1ZDc1MmQ5NS41ZDc0OC41ZDg2ZDc0NWQ3OWQ3MzlkNzJkNzMzZDcyZDcyMmhSM2Q0NDBSNGQ0MTJSNWQ3MlI2ZDQ3NFI3ZDEzOFI4ZDQwMlI5ZDc3OVIxMGQ1NDBSMTFpMjQ3UjEyZDcyUjEzZDQ0MFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2hnOjEzNG9SMWQxMjYzUjJhaFIzZDg2NVI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkNzc5UjEwZDU0MFIxMWkxMzRSMTJkMFIxM2Q4NjVSMTRhaGc6MjQ2b1IxZDEyNjNSMmFkNjVkNzg3ZDY1ZDcwNWQxMDFkNjQ2LjVkMTM3ZDU4OGQxOTJkNTQ5ZDI0N2Q1MTBkMzEyZDQ4OS41ZDM3N2Q0NjlkNDM2ZDQ2M2Q0OTNkNDYwZDU0M2Q0NzcuNWQ1OTNkNDk1ZDYyOWQ1MjdkNjY1ZDU1OWQ2ODQuNWQ2MDNkNzA0ZDY0N2Q2OTlkNjk2ZDY5OWQ3NzhkNjY2LjVkODM5LjVkNjM0ZDkwMWQ1ODBkOTQyLjVkNTI2ZDk4NGQ0NTQuNWQxMDA0LjVkMzgzZDEwMjVkMzA1ZDEwMjVkMTg3ZDEwMjVkMTI2ZDk3MGQ2NWQ5MTVkNjVkNzg3ZDE1MWQ4MTdkMTUxZDg1OWQxNjEuNWQ4ODRkMTcyZDkwOWQxOTIuNWQ5MjEuNWQyMTNkOTM0ZDI0Mi41ZDkzOGQyNzJkOTQyZDMxMWQ5NDJkMzcxZDk0MmQ0MjdkOTMwLjVkNDgzZDkxOWQ1MjZkODkxLjVkNTY5ZDg2NGQ1OTVkODE4LjVkNjIxZDc3M2Q2MjFkNzA1ZDYyMWQ2NzBkNjExZDYzOC41ZDYwMWQ2MDdkNTgxZDU4My41ZDU2MWQ1NjBkNTMyZDU0NmQ1MDNkNTMyZDQ2NmQ1MzJkNDE3ZDU0MGQzNjhkNTUwLjVkMzE5ZDU2MWQyNzZkNTg4LjVkMjMzZDYxNmQyMDBkNjY5LjVkMTY3ZDcyM2QxNTFkODE3ZDIxNmQyMzVkMjE2ZDIzMGQyMjUuNWQyMjIuNWQyMzVkMjE1ZDI0N2QyMDlkMjYwZDIwMmQyNzhkMTk0ZDMwNGQxOTRkMzEzLjVkMjA1ZDMyM2QyMTZkMzIzZDIzNmQzMjNkMjUxZDMxNS41ZDI1OS41ZDMwOGQyNjhkMjk2LjVkMjcyZDI4NWQyNzZkMjcxLjVkMjc3ZDI1OGQyNzhkMjQ2ZDI3OGQyMzBkMjc4ZDIyM2QyNjguNWQyMTZkMjU5ZDIxNmQyMzVkMzk2ZDIzNWQzOTZkMjMwZDQwNS41ZDIyMi41ZDQxNWQyMTVkNDI3ZDIwOWQ0NDFkMjAyZDQ1OWQxOTRkNDg1ZDE5NGQ0OTQuNWQyMDVkNTA0ZDIxNmQ1MDRkMjM2ZDUwNGQyNTFkNDk2LjVkMjU5LjVkNDg5ZDI2OGQ0NzcuNWQyNzJkNDY2ZDI3NmQ0NTJkMjc3ZDQzOGQyNzhkNDI2ZDI3OGQ0MTBkMjc4ZDQwM2QyNjguNWQzOTZkMjU5ZDM5NmQyMzVoUjNkNzIwUjRkNzA0UjVkNjVSNmQ4MzBSN2QtMVI4ZDc2NVI5ZDc3OVIxMGQ1NDBSMTFpMjQ2UjEyZDY1UjEzZDcyMFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTMzb1IxZDEyNjNSMmFoUjNkODY1UjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQ3NzlSMTBkNTQwUjExaTEzM1IxMmQwUjEzZDg2NVIxNGFoZzoyNDVvUjFkMTI2M1IyYWQ2NWQ3ODdkNjVkNzA1ZDEwMWQ2NDYuNWQxMzdkNTg4ZDE5MmQ1NDlkMjQ3ZDUxMGQzMTJkNDg5LjVkMzc3ZDQ2OWQ0MzZkNDYzZDQ5M2Q0NjBkNTQzZDQ3Ny41ZDU5M2Q0OTVkNjI5ZDUyN2Q2NjVkNTU5ZDY4NC41ZDYwM2Q3MDRkNjQ3ZDY5OWQ2OTZkNjk5ZDc3OGQ2NjYuNWQ4MzkuNWQ2MzRkOTAxZDU4MGQ5NDIuNWQ1MjZkOTg0ZDQ1NC41ZDEwMDQuNWQzODNkMTAyNWQzMDVkMTAyNWQxODdkMTAyNWQxMjZkOTcwZDY1ZDkxNWQ2NWQ3ODdkMTUxZDgxN2QxNTFkODU5ZDE2MS41ZDg4NGQxNzJkOTA5ZDE5Mi41ZDkyMS41ZDIxM2Q5MzRkMjQyLjVkOTM4ZDI3MmQ5NDJkMzExZDk0MmQzNzFkOTQyZDQyN2Q5MzAuNWQ0ODNkOTE5ZDUyNmQ4OTEuNWQ1NjlkODY0ZDU5NWQ4MTguNWQ2MjFkNzczZDYyMWQ3MDVkNjIxZDY3MGQ2MTFkNjM4LjVkNjAxZDYwN2Q1ODFkNTgzLjVkNTYxZDU2MGQ1MzJkNTQ2ZDUwM2Q1MzJkNDY2ZDUzMmQ0MTdkNTQwZDM2OGQ1NTAuNWQzMTlkNTYxZDI3NmQ1ODguNWQyMzNkNjE2ZDIwMGQ2NjkuNWQxNjdkNzIzZDE1MWQ4MTdkMzMzZDM2N2QzMDhkMzQ1ZDI4OWQzMzBkMjcwZDMxNWQyNTAuNWQzMTYuNWQyMzFkMzE4ZDIwNy41ZDM0MC41ZDE4NGQzNjNkMTQ4ZDQxNmQxNDRkNDE2ZDEzN2Q0MTVkMTMwZDQxNGQxMjNkNDExZDExNmQ0MDhkMTEwZDQwM2QxMDRkMzk4ZDEwMmQzOTBkMTIxZDMzMGQxNTguNWQyODRkMTk2ZDIzOGQyMzhkMjIxZDI1NWQyMTRkMjcwLjVkMjIwZDI4NmQyMjZkMzAxLjVkMjM4LjVkMzE3ZDI1MWQzMzEuNWQyNjcuNWQzNDZkMjg0ZDM2MS41ZDI5OWQzNzdkMzE0ZDM5My41ZDMyNGQ0MTBkMzM0ZDQyOGQzMzRkNDU2ZDMzNGQ0NzEuNWQzMjUuNWQ0ODdkMzE3ZDUwMGQzMDAuNWQ1MTNkMjg0ZDUyOC41ZDI2MGQ1NDRkMjM2ZDU3MmQyMDZkNTgwZDIwNmQ1ODhkMjE5LjVkNTk2ZDIzM2Q1OTZkMjQzZDYwMWQyNzFkNTkwZDI5OGQ1NzlkMzI1ZDU1Ny41ZDM0N2Q1MzZkMzY5ZDUwNi41ZDM4NGQ0NzdkMzk5ZDQ0NmQ0MDMuNWQ0MTVkNDA4ZDM4NS41ZDQwMGQzNTZkMzkyZDMzM2QzNjdoUjNkNzIwUjRkNzA0UjVkNjVSNmQ4MThSN2QtMVI4ZDc1M1I5ZDc3OVIxMGQ1NDBSMTFpMjQ1UjEyZDY1UjEzZDcyMFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjEzMm9SMWQxMjYzUjJhaFIzZDg2NVI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkNzc5UjEwZDU0MFIxMWkxMzJSMTJkMFIxM2Q4NjVSMTRhaGc6MjQ0b1IxZDEyNjNSMmFkNjVkNzg3ZDY1ZDcwNWQxMDFkNjQ2LjVkMTM3ZDU4OGQxOTJkNTQ5ZDI0N2Q1MTBkMzEyZDQ4OS41ZDM3N2Q0NjlkNDM2ZDQ2M2Q0OTNkNDYwZDU0M2Q0NzcuNWQ1OTNkNDk1ZDYyOWQ1MjdkNjY1ZDU1OWQ2ODQuNWQ2MDNkNzA0ZDY0N2Q2OTlkNjk2ZDY5OWQ3NzhkNjY2LjVkODM5LjVkNjM0ZDkwMWQ1ODBkOTQyLjVkNTI2ZDk4NGQ0NTQuNWQxMDA0LjVkMzgzZDEwMjVkMzA1ZDEwMjVkMTg3ZDEwMjVkMTI2ZDk3MGQ2NWQ5MTVkNjVkNzg3ZDE1MWQ4MTdkMTUxZDg1OWQxNjEuNWQ4ODRkMTcyZDkwOWQxOTIuNWQ5MjEuNWQyMTNkOTM0ZDI0Mi41ZDkzOGQyNzJkOTQyZDMxMWQ5NDJkMzcxZDk0MmQ0MjdkOTMwLjVkNDgzZDkxOWQ1MjZkODkxLjVkNTY5ZDg2NGQ1OTVkODE4LjVkNjIxZDc3M2Q2MjFkNzA1ZDYyMWQ2NzBkNjExZDYzOC41ZDYwMWQ2MDdkNTgxZDU4My41ZDU2MWQ1NjBkNTMyZDU0NmQ1MDNkNTMyZDQ2NmQ1MzJkNDE3ZDU0MGQzNjhkNTUwLjVkMzE5ZDU2MWQyNzZkNTg4LjVkMjMzZDYxNmQyMDBkNjY5LjVkMTY3ZDcyM2QxNTFkODE3ZDE3N2QzNDJkMTc3ZDMyN2QxOTBkMzA0ZDIwM2QyODFkMjI3ZDI1Ni41ZDI1MWQyMzJkMjg0LjVkMjA3LjVkMzE4ZDE4M2QzNThkMTY1ZDM4NWQxODJkNDA1LjVkMTk1LjVkNDI2ZDIwOWQ0NDRkMjI1LjVkNDYyZDI0MmQ0ODAuNWQyNjVkNDk5ZDI4OGQ1MjJkMzI1ZDUzMGQzNDBkNTMwLjVkMzUzZDUzMWQzNjZkNTI1ZDM3NGQ1MTlkMzgyZDUwNy41ZDM4M2Q0OTZkMzg0ZDQ4MGQzNzVkNDYyZDM2MmQ0NTJkMzU1ZDQ0MmQzNDhkNDM2ZDM0My41ZDQzMGQzMzlkNDI1LjVkMzM0ZDQyMWQzMjlkNDEyLjVkMzIwLjVkNDA0ZDMxMmQzODkuNWQyOTdkMzc1ZDI4MmQzNDlkMjU2ZDMyMmQyNzVkMzAyLjVkMjkxZDI4M2QzMDdkMjY5ZDMyMi41ZDI1NWQzMzhkMjQ1LjVkMzUzLjVkMjM2ZDM2OWQyMjlkMzg3ZDIwNmQzODdkMTkxLjVkMzgwLjVkMTc3ZDM3NGQxNzdkMzQyaFIzZDcyMFI0ZDcwNFI1ZDY1UjZkODU5UjdkLTFSOGQ3OTRSOWQ3NzlSMTBkNTQwUjExaTI0NFIxMmQ2NVIxM2Q3MjBSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTMxb1IxZDEyNjNSMmFkMTQzZDk5NGQxNDNkOTc0ZDE2NmQ5NjJkNTYwZDI3NmQ1NjVkMjY3ZDU3MS41ZDI2Mi41ZDU3OGQyNThkNTg2ZDI2MmQ1OTRkMjY2ZDYwM2QyNzlkNjEyZDI5MmQ2MjNkMzE4ZDIxOWQxMDI1ZDIwOWQxMDI1ZDE5NmQxMDI0LjVkMTgzZDEwMjRkMTcxZDEwMjFkMTU5ZDEwMThkMTUxZDEwMTJkMTQzZDEwMDZkMTQzZDk5NGQ2NDJkOTQzZDYxM2Q5NDJkNTk1LjVkOTI1ZDU3OGQ5MDhkNTcxLjVkODgzZDU2NWQ4NThkNTY5ZDgyOS41ZDU3M2Q4MDFkNTg3LjVkNzc4ZDYwMmQ3NTVkNjI2LjVkNzQxLjVkNjUxZDcyOGQ2ODVkNzMyZDcwMWQ3MzJkNzI3LjVkNzMzZDc1NGQ3MzRkNzgwZDc0MGQ4MDZkNzQ2ZDgyNmQ3NTlkODQ2ZDc3MmQ4NTFkNzk2ZDg1OGQ4MzNkODM1LjVkODYwLjVkODEzZDg4OGQ3NzhkOTA2LjVkNzQzZDkyNWQ3MDQuNWQ5MzRkNjY2ZDk0M2Q2NDJkOTQzZDc3NGQ3ODdkNzQ3ZDc4N2Q3MjIuNWQ3OTBkNjk4ZDc5M2Q2NzkuNWQ4MDMuNWQ2NjFkODE0ZDY1MC41ZDgzMy41ZDY0MGQ4NTNkNjQwZDg4NWQ2NjdkODg1ZDY5MWQ4ODFkNzE1ZDg3N2Q3MzMuNWQ4NjZkNzUyZDg1NWQ3NjNkODM2ZDc3NGQ4MTdkNzc0ZDc4N2QxOWQ1MTVkMTlkNDgyZDQwZDQ1M2Q2MWQ0MjRkOTJkNDAzZDEyM2QzODJkMTU4LjVkMzY5LjVkMTk0ZDM1N2QyMjJkMzU3ZDIzOGQzNTdkMjU0LjVkMzU5LjVkMjcxZDM2MmQyODRkMzY5LjVkMjk3ZDM3N2QzMDVkMzg5LjVkMzEzZDQwMmQzMTNkNDIzZDMxM2Q0NTNkMjg4ZDQ3OS41ZDI2M2Q1MDZkMjI3LjVkNTI1LjVkMTkyZDU0NWQxNTRkNTU2LjVkMTE2ZDU2OGQ5MGQ1NjhkNzhkNTY4ZDY1LjVkNTY1LjVkNTNkNTYzZDQyLjVkNTU2LjVkMzJkNTUwZDI1LjVkNTQwZDE5ZDUzMGQxOWQ1MTVkMjA3ZDQzOWQxOTZkNDM5ZDE4MmQ0NDNkMTY4ZDQ0N2QxNTQuNWQ0NTQuNWQxNDFkNDYyZDEzMmQ0NzIuNWQxMjNkNDgzZDEyM2Q0OTVkMTIzZDQ5NmQxMjMuNWQ1MDBkMTI0ZDUwNGQxMjRkNTA1ZDIwN2Q0NjRkMjA3ZDQzOWhSM2Q4NzlSNGQ4NThSNWQxOVI2ZDc2NlI3ZC0xUjhkNzQ3UjlkNzc5UjEwZDU0MFIxMWkxMzFSMTJkMTlSMTNkODc5UjE0YWkxaTNpMmkzaTNpM2kzaTJpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kyaTJoZzoyNDNvUjFkMTI2M1IyYWQ2NWQ3ODdkNjVkNzA1ZDEwMWQ2NDYuNWQxMzdkNTg4ZDE5MmQ1NDlkMjQ3ZDUxMGQzMTJkNDg5LjVkMzc3ZDQ2OWQ0MzZkNDYzZDQ5M2Q0NjBkNTQzZDQ3Ny41ZDU5M2Q0OTVkNjI5ZDUyN2Q2NjVkNTU5ZDY4NC41ZDYwM2Q3MDRkNjQ3ZDY5OWQ2OTZkNjk5ZDc3OGQ2NjYuNWQ4MzkuNWQ2MzRkOTAxZDU4MGQ5NDIuNWQ1MjZkOTg0ZDQ1NC41ZDEwMDQuNWQzODNkMTAyNWQzMDVkMTAyNWQxODdkMTAyNWQxMjZkOTcwZDY1ZDkxNWQ2NWQ3ODdkMTUxZDgxN2QxNTFkODU5ZDE2MS41ZDg4NGQxNzJkOTA5ZDE5Mi41ZDkyMS41ZDIxM2Q5MzRkMjQyLjVkOTM4ZDI3MmQ5NDJkMzExZDk0MmQzNzFkOTQyZDQyN2Q5MzAuNWQ0ODNkOTE5ZDUyNmQ4OTEuNWQ1NjlkODY0ZDU5NWQ4MTguNWQ2MjFkNzczZDYyMWQ3MDVkNjIxZDY3MGQ2MTFkNjM4LjVkNjAxZDYwN2Q1ODFkNTgzLjVkNTYxZDU2MGQ1MzJkNTQ2ZDUwM2Q1MzJkNDY2ZDUzMmQ0MTdkNTQwZDM2OGQ1NTAuNWQzMTlkNTYxZDI3NmQ1ODguNWQyMzNkNjE2ZDIwMGQ2NjkuNWQxNjdkNzIzZDE1MWQ4MTdkMzcxZDI2OGQzODRkMjUyZDM5NmQyNDdkNDA4ZDI0MmQ0MTZkMjQ1LjVkNDI0ZDI0OWQ0MjlkMjU4LjVkNDM0ZDI2OGQ0MzRkMjc5ZDQzMWQyOTFkNDI2LjVkMzAwLjVkNDIyZDMxMGQ0MTFkMzIzZDQwMGQzMzZkMzc5ZDM1NC41ZDM1OGQzNzNkMzI0ZDQwMWQyODVkMzY2ZDM3MWQyNjhoUjNkNzIwUjRkNzA0UjVkNjVSNmQ3ODJSN2QtMVI4ZDcxN1I5ZDc3OVIxMGQ1NDBSMTFpMjQzUjEyZDY1UjEzZDcyMFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTJpMmhnOjEzMG9SMWQxMjYzUjJhaFIzZDg2NVI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkNzc5UjEwZDU0MFIxMWkxMzBSMTJkMFIxM2Q4NjVSMTRhaGc6MjQyb1IxZDEyNjNSMmFkNjVkNzg3ZDY1ZDcwNWQxMDFkNjQ2LjVkMTM3ZDU4OGQxOTJkNTQ5ZDI0N2Q1MTBkMzEyZDQ4OS41ZDM3N2Q0NjlkNDM2ZDQ2M2Q0OTNkNDYwZDU0M2Q0NzcuNWQ1OTNkNDk1ZDYyOWQ1MjdkNjY1ZDU1OWQ2ODQuNWQ2MDNkNzA0ZDY0N2Q2OTlkNjk2ZDY5OWQ3NzhkNjY2LjVkODM5LjVkNjM0ZDkwMWQ1ODBkOTQyLjVkNTI2ZDk4NGQ0NTQuNWQxMDA0LjVkMzgzZDEwMjVkMzA1ZDEwMjVkMTg3ZDEwMjVkMTI2ZDk3MGQ2NWQ5MTVkNjVkNzg3ZDE1MWQ4MTdkMTUxZDg1OWQxNjEuNWQ4ODRkMTcyZDkwOWQxOTIuNWQ5MjEuNWQyMTNkOTM0ZDI0Mi41ZDkzOGQyNzJkOTQyZDMxMWQ5NDJkMzcxZDk0MmQ0MjdkOTMwLjVkNDgzZDkxOWQ1MjZkODkxLjVkNTY5ZDg2NGQ1OTVkODE4LjVkNjIxZDc3M2Q2MjFkNzA1ZDYyMWQ2NzBkNjExZDYzOC41ZDYwMWQ2MDdkNTgxZDU4My41ZDU2MWQ1NjBkNTMyZDU0NmQ1MDNkNTMyZDQ2NmQ1MzJkNDE3ZDU0MGQzNjhkNTUwLjVkMzE5ZDU2MWQyNzZkNTg4LjVkMjMzZDYxNmQyMDBkNjY5LjVkMTY3ZDcyM2QxNTFkODE3ZDQyN2QzNTNkNDA2ZDQwN2QzNzRkMzg1ZDM1NWQzNzFkMzM2ZDM1N2QzMjVkMzQ2ZDMxNGQzMzVkMzA4ZDMyNS41ZDMwMmQzMTZkMjk4ZDMwM2QyOTZkMjkwZDI5Ny41ZDI3OGQyOTlkMjY2ZDMwNWQyNTkuNWQzMTFkMjUzZDMyMC41ZDI1NC41ZDMzMGQyNTZkMzQzZDI3MWQ0MjdkMzUzaFIzZDcyMFI0ZDcwNFI1ZDY1UjZkNzcxUjdkLTFSOGQ3MDZSOWQ3NzlSMTBkNTQwUjExaTI0MlIxMmQ2NVIxM2Q3MjBSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTJpM2kzaTNpM2kzaTNpM2kzaTJoZzoxMjlvUjFkMTI2M1IyYWhSM2Q4NjVSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDc3OVIxMGQ1NDBSMTFpMTI5UjEyZDBSMTNkODY1UjE0YWhnOjI0MW9SMWQxMjYzUjJhZDUwNWQ1MzJkNTEyZDUxNmQ0OTBkNTEzLjVkNDY4ZDUxMWQ0MzBkNTE4ZDM5MmQ1MjVkMzQ1ZDU0MGQyOThkNTU1ZDI1NS41ZDU3NS41ZDIxM2Q1OTZkMTgxLjVkNjIxZDE1MGQ2NDZkMTQzZDY3MWQxNDJkMTAxMWQ1OWQxMDExZDUzZDk5N2Q0OS41ZDk2Ni41ZDQ2ZDkzNmQ0NGQ4OTQuNWQ0MmQ4NTNkNDEuNWQ4MDQuNWQ0MWQ3NTZkNDJkNzA2LjVkNDNkNjU3ZDQ1ZDYwOS41ZDQ3ZDU2MmQ0OS41ZDUyM2Q1MmQ0ODRkNTQuNWQ0NTcuNWQ1N2Q0MzFkNjBkNDIyZDcxZDQxNGQ4NWQ0MDdkOTlkNDAwZDExM2Q0MDBkMTMxZDQwMWQxMzcuNWQ0MjMuNWQxNDRkNDQ2ZDE0NGQ0NzQuNWQxNDRkNTAzZDE0MC41ZDUzMGQxMzdkNTU3ZDEzN2Q1NjdkMjQxZDQ5MGQzMTZkNDU1ZDM5MWQ0MjBkNDQyLjVkNDE4ZDQ5NGQ0MTZkNTI1ZDQ0MmQ1NTZkNDY4ZDU3M2Q1MTRkNTkwZDU2MGQ1OTUuNWQ2MjEuNWQ2MDFkNjgzZDYwMmQ3NTFkNjAzZDgxOWQ2MDJkODg5LjVkNjAxZDk2MGQ2MDRkMTAyNGQ1OTJkMTAzMGQ1ODcuNWQxMDMxZDU4M2QxMDMyZDU3Ny41ZDEwMzAuNWQ1NzJkMTAyOWQ1NjNkMTAyN2Q1NTRkMTAyNWQ1MzVkMTAyNGQ1MjNkOTc1ZDUyMS41ZDkxMmQ1MjBkODQ5ZDUyMWQ3ODNkNTIyZDcxN2Q1MjBkNjUyZDUxOGQ1ODdkNTA1ZDUzMmQzMDZkMjk0ZDI4MWQyNzJkMjYyZDI1N2QyNDNkMjQyZDIyMy41ZDI0My41ZDIwNGQyNDVkMTgwLjVkMjY3LjVkMTU3ZDI5MGQxMjFkMzQzZDExN2QzNDNkMTEwZDM0MmQxMDNkMzQxZDk2ZDMzOGQ4OWQzMzVkODNkMzMwZDc3ZDMyNWQ3NWQzMTdkOTRkMjU3ZDEzMS41ZDIxMWQxNjlkMTY1ZDIxMWQxNDhkMjI4ZDE0MWQyNDMuNWQxNDdkMjU5ZDE1M2QyNzQuNWQxNjUuNWQyOTBkMTc4ZDMwNC41ZDE5NC41ZDMxOWQyMTFkMzM0LjVkMjI2ZDM1MGQyNDFkMzY2LjVkMjUxZDM4M2QyNjFkNDAxZDI2MWQ0MjlkMjYxZDQ0NC41ZDI1Mi41ZDQ2MGQyNDRkNDczZDIyNy41ZDQ4NmQyMTFkNTAxLjVkMTg3ZDUxN2QxNjNkNTQ1ZDEzM2Q1NTNkMTMzZDU2MWQxNDYuNWQ1NjlkMTYwZDU2OWQxNzBkNTc0ZDE5OGQ1NjNkMjI1ZDU1MmQyNTJkNTMwLjVkMjc0ZDUwOWQyOTZkNDc5LjVkMzExZDQ1MGQzMjZkNDE5ZDMzMC41ZDM4OGQzMzVkMzU4LjVkMzI3ZDMyOWQzMTlkMzA2ZDI5NGhSM2Q2NDBSNGQ2MDRSNWQ0MVI2ZDg5MVI3ZC04UjhkODUwUjlkNzc5UjEwZDU0MFIxMWkyNDFSMTJkNDFSMTNkNjQwUjE0YWkxaTNpM2kzaTNpM2kzaTJpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxMjhvUjFkMTI2M1IyYWhSM2Q4NjVSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZDc3OVIxMGQ1NDBSMTFpMTI4UjEyZDBSMTNkODY1UjE0YWhnOjI0MG9SMWQxMjYzUjJhZDM2MmQ0NjNkNDQ3ZDQyMGQ0MThkMzczZDM3OGQzNDMuNWQzMzhkMzE0ZDI5OGQyOTlkMjk4ZDI3NmQzMTZkMjYzZDMzNGQyNTBkMzUwZDI0N2QzNzlkMjYxZDQwNGQyNzQuNWQ0MjlkMjg4ZDQ1MmQzMDNkNDc1ZDMxOGQ0OTguNWQzMzdkNTIyZDM1NmQ1NDhkMzgxZDYzOWQzMTZkNjkxZDM3OGQ2MDRkNDQyZDYyOGQ0ODlkNjQ2ZDU0NC41ZDY2NGQ2MDBkNjcxZDY1Ny41ZDY3OGQ3MTVkNjczZDc3MC41ZDY2OGQ4MjZkNjQ3ZDg3My41ZDYyNmQ5MjFkNTg2LjVkOTU2LjVkNTQ3ZDk5MmQ0ODZkMTAxMGQ0NDlkMTAyMWQzOTcuNWQxMDExLjVkMzQ2ZDEwMDJkMjkzZDk3OGQyNDBkOTU0ZDE5MC41ZDkyMGQxNDFkODg2ZDEwOC41ZDg0Ny41ZDc2ZDgwOWQ2NmQ3NzAuNWQ1NmQ3MzJkODFkNzAwZDEzMGQ2NTBkMTg2LjVkNjMzZDI0M2Q2MTZkMzA1LjVkNjE4LjVkMzY4ZDYyMWQ0MzcuNWQ2MzZkNTA3ZDY1MWQ1ODNkNjY2ZDU4MWQ2NDNkNTc0ZDYxOC41ZDU2N2Q1OTRkNTU3ZDU3MWQ1NDdkNTQ4ZDUzNS41ZDUyN2Q1MjRkNTA2ZDUxM2Q0ODlkNDE0ZDU0NWQzNjJkNDYzZDE4MmQ3MzRkMTgyZDc5MWQyMDZkODI5ZDIzMGQ4NjdkMjY4LjVkODkwLjVkMzA3ZDkxNGQzNTYuNWQ5MjMuNWQ0MDZkOTMzZDQ1N2Q5MzNkNDk0ZDkzMWQ1MjAuNWQ5MTUuNWQ1NDdkOTAwZDU2M2Q4NzZkNTc5ZDg1MmQ1ODNkODIxLjVkNTg3ZDc5MWQ1NzlkNzU5ZDUzMmQ3NDFkNDc5LjVkNzI4ZDQyN2Q3MTVkMzc0LjVkNzEwLjVkMzIyZDcwNmQyNzIuNWQ3MTEuNWQyMjNkNzE3ZDE4MmQ3MzRoUjNkNzQyUjRkNjkxUjVkNTZSNmQ3NzdSN2QzUjhkNzIxUjlkNzc5UjEwZDU0MFIxMWkyNDBSMTJkNTZSMTNkNzQyUjE0YWkxaTJpM2kzaTNpM2kzaTNpM2kzaTJpMmkyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTJpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjEyN29SMWQxMjYzUjJhaFIzZDg2NVI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkNzc5UjEwZDU0MFIxMWkxMjdSMTJkMFIxM2Q4NjVSMTRhaGc6MjM5b1IxZDEyNjNSMmFkMTQ2ZDQzN2QxNTVkNTYwZDE2MmQ2OTguNWQxNjlkODM3ZDE3NGQ5NzhkMTY5ZDk5OGQxNTMuNWQxMDA3ZDEzOGQxMDE2ZDEyMGQxMDE2LjVkMTAyZDEwMTdkODYuNWQxMDExZDcxZDEwMDVkNjdkOTk1ZDY3ZDQzN2QxNDZkNDM3ZC00N2QyMzVkLTQ3ZDIzMGQtMzcuNWQyMjIuNWQtMjhkMjE1ZC0xNmQyMDlkLTNkMjAyZDE1ZDE5NGQ0MWQxOTRkNTAuNWQyMDVkNjBkMjE2ZDYwZDIzNmQ2MGQyNTFkNTIuNWQyNTkuNWQ0NWQyNjhkMzMuNWQyNzJkMjJkMjc2ZDguNWQyNzdkLTVkMjc4ZC0xN2QyNzhkLTMzZDI3OGQtNDBkMjY4LjVkLTQ3ZDI1OWQtNDdkMjM1ZDEzM2QyMzVkMTMzZDIzMGQxNDIuNWQyMjIuNWQxNTJkMjE1ZDE2NGQyMDlkMTc4ZDIwMmQxOTZkMTk0ZDIyMmQxOTRkMjMxLjVkMjA1ZDI0MWQyMTZkMjQxZDIzNmQyNDFkMjUxZDIzMy41ZDI1OS41ZDIyNmQyNjhkMjE0LjVkMjcyZDIwM2QyNzZkMTg5ZDI3N2QxNzVkMjc4ZDE2M2QyNzhkMTQ3ZDI3OGQxNDBkMjY4LjVkMTMzZDI1OWQxMzNkMjM1aFIzZDE5NFI0ZDI0MVI1ZC00N1I2ZDgzMFI3ZDdSOGQ4NzdSOWQ3NzlSMTBkNTQwUjExaTIzOVIxMmQtNDdSMTNkMTk0UjE0YWkxaTNpM2kzaTNpM2kzaTJpMmkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjEyNm9SMWQxMjYzUjJhZDI2M2QzNjdkMjM4ZDM0NWQyMTlkMzMwZDIwMGQzMTVkMTgwLjVkMzE2LjVkMTYxZDMxOGQxMzcuNWQzNDAuNWQxMTRkMzYzZDc4ZDQxNmQ3NGQ0MTZkNjdkNDE1ZDYwZDQxNGQ1M2Q0MTFkNDZkNDA4ZDQwZDQwM2QzNGQzOThkMzJkMzkwZDUxZDMzMGQ4OC41ZDI4NGQxMjZkMjM4ZDE2OGQyMjFkMTg1ZDIxNGQyMDAuNWQyMjBkMjE2ZDIyNmQyMzEuNWQyMzguNWQyNDdkMjUxZDI2MS41ZDI2Ny41ZDI3NmQyODRkMjkxLjVkMjk5ZDMwN2QzMTRkMzIzLjVkMzI0ZDM0MGQzMzRkMzU4ZDMzNGQzODZkMzM0ZDQwMS41ZDMyNS41ZDQxN2QzMTdkNDMwZDMwMC41ZDQ0M2QyODRkNDU4LjVkMjYwZDQ3NGQyMzZkNTAyZDIwNmQ1MDZkMjA2ZDUxMi41ZDIwOC41ZDUxOWQyMTFkNTI1ZDIxNS41ZDUzMWQyMjBkNTM1ZDIyNWQ1MzlkMjMwZDUzOWQyMzVkNTQ0ZDI2M2Q1MzJkMjkwLjVkNTIwZDMxOGQ0OTdkMzQxZDQ3NGQzNjRkNDQzZDM4MGQ0MTJkMzk2ZDM3OS41ZDQwMS41ZDM0N2Q0MDdkMzE2LjVkMzk5LjVkMjg2ZDM5MmQyNjNkMzY3aFIzZDU2OVI0ZDU0NFI1ZDMyUjZkODE4UjdkNjA4UjhkNzg2UjlkNzc5UjEwZDU0MFIxMWkxMjZSMTJkMzJSMTNkNTY5UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MjM4b1IxZDEyNjNSMmFkMTQ2ZDQzN2QxNTVkNTYwZDE2MmQ2OTguNWQxNjlkODM3ZDE3NGQ5NzhkMTY5ZDk5OGQxNTMuNWQxMDA3ZDEzOGQxMDE2ZDEyMGQxMDE2LjVkMTAyZDEwMTdkODYuNWQxMDExZDcxZDEwMDVkNjdkOTk1ZDY3ZDQzN2QxNDZkNDM3ZC04NmQzNDJkLTg2ZDMyN2QtNzNkMzA0ZC02MGQyODFkLTM2ZDI1Ni41ZC0xMmQyMzJkMjEuNWQyMDcuNWQ1NWQxODNkOTVkMTY1ZDEyMmQxODJkMTQyLjVkMTk1LjVkMTYzZDIwOWQxODFkMjI1LjVkMTk5ZDI0MmQyMTcuNWQyNjVkMjM2ZDI4OGQyNTlkMzI1ZDI2N2QzNDBkMjY3LjVkMzUzZDI2OGQzNjZkMjYyZDM3NGQyNTZkMzgyZDI0NC41ZDM4M2QyMzNkMzg0ZDIxN2QzNzVkMTk5ZDM2MmQxODlkMzU1ZDE3OWQzNDhkMTczZDM0My41ZDE2N2QzMzlkMTYyLjVkMzM0ZDE1OGQzMjlkMTQ5LjVkMzIwLjVkMTQxZDMxMmQxMjYuNWQyOTdkMTEyZDI4MmQ4NmQyNTZkNTlkMjc1ZDM5LjVkMjkxZDIwZDMwN2Q2ZDMyMi41ZC04ZDMzOGQtMTcuNWQzNTMuNWQtMjdkMzY5ZC0zNGQzODdkLTU3ZDM4N2QtNzEuNWQzODAuNWQtODZkMzc0ZC04NmQzNDJoUjNkMTk0UjRkMjY4UjVkLTg2UjZkODU5UjdkN1I4ZDk0NVI5ZDc3OVIxMGQ1NDBSMTFpMjM4UjEyZC04NlIxM2QxOTRSMTRhaTFpM2kzaTNpM2kzaTNpMmkyaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxMjVvUjFkMTI2M1IyYWQzNWQxMjk2ZDMwZDEyMDZkNDNkMTIwMmQ2OS41ZDEyMDJkOTZkMTIwMmQxMjYuNWQxMTk0ZDE1N2QxMTg2ZDE4Ny41ZDExNjQuNWQyMThkMTE0M2QyNDBkMTA5Ni41ZDI2MmQxMDUwZDI3MC41ZDk3MS41ZDI3OWQ4OTNkMjY2ZDc3MmQyNzhkNzczZDMwNmQ3NTZkMzM0ZDczOWQzNjEuNWQ3MTQuNWQzODlkNjkwZDQwNi41ZDY2My41ZDQyNGQ2MzdkNDE1ZDYxOWQ0MTVkNjA0ZDQwNS41ZDU5MmQzOTZkNTgwZDM4MS41ZDU3MC41ZDM2N2Q1NjFkMzUwZDU1MS41ZDMzM2Q1NDJkMzE4LjVkNTMxLjVkMzA0ZDUyMWQyOTQuNWQ1MDguNWQyODVkNDk2ZDI4NWQ0NzhkMjkxZDM1MmQyODFkMjY1LjVkMjcxZDE3OWQyNTFkMTIyLjVkMjMxZDY2ZDIwNWQzNGQxNzlkMmQxNTNkLTE0ZDEyN2QtMzBkMTAzZC0zNmQ3OWQtNDJkNjVkLTQ2ZDY1ZC0xMTNkMTQxZC0xMTNkMTkzLjVkLTg1ZDI0NmQtNTdkMjgxZC0xMS41ZDMxNmQzNGQzMzVkOTIuNWQzNTRkMTUxZDM2M2QyMTJkMzcyZDI3M2QzNzNkMzMyZDM3NGQzOTFkMzcyZDQzOGQzODVkNDY2ZDQxMGQ0ODdkNDM1ZDUwOGQ0NjFkNTI3LjVkNDg3ZDU0N2Q1MDcuNWQ1NjhkNTI4ZDU4OWQ1MzFkNjE4ZDUyOWQ2NTdkNTA1ZDY4Ny41ZDQ4MWQ3MThkNDUwLjVkNzQxLjVkNDIwZDc2NWQzOTIuNWQ3ODAuNWQzNjVkNzk2ZDM1N2Q4MDVkMzUwZDg2MmQzNDYuNWQ5MTlkMzQzZDk3NmQzMzQuNWQxMDI4LjVkMzI2ZDEwODFkMzA5ZDExMjcuNWQyOTJkMTE3NGQyNThkMTIwOS41ZDIyNGQxMjQ1ZDE3MC41ZDEyNjhkMTE3ZDEyOTFkMzVkMTI5NmhSM2Q2MTNSNGQ1MzFSNWQzMFI2ZDExMzdSN2QtMjcyUjhkMTEwN1I5ZDc3OVIxMGQ1NDBSMTFpMTI1UjEyZDMwUjEzZDYxM1IxNGFpMWkyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoyMzdvUjFkMTI2M1IyYWQxNDZkNDM3ZDE1NWQ1NjBkMTYyZDY5OC41ZDE2OWQ4MzdkMTc0ZDk3OGQxNjlkOTk4ZDE1My41ZDEwMDdkMTM4ZDEwMTZkMTIwZDEwMTYuNWQxMDJkMTAxN2Q4Ni41ZDEwMTFkNzFkMTAwNWQ2N2Q5OTVkNjdkNDM3ZDE0NmQ0MzdkMTI3ZDIyNWQxNDBkMjA5ZDE1MmQyMDRkMTY0ZDE5OWQxNzJkMjAyLjVkMTgwZDIwNmQxODVkMjE1LjVkMTkwZDIyNWQxOTBkMjM2ZDE4N2QyNDhkMTgyLjVkMjU3LjVkMTc4ZDI2N2QxNjdkMjgwZDE1NmQyOTNkMTM1ZDMxMS41ZDExNGQzMzBkODBkMzU4ZDQxZDMyM2QxMjdkMjI1aFIzZDE5NFI0ZDE5MFI1ZDQxUjZkODI1UjdkN1I4ZDc4NFI5ZDc3OVIxMGQ1NDBSMTFpMjM3UjEyZDQxUjEzZDE5NFIxNGFpMWkzaTNpM2kzaTNpM2kyaTJpMWkzaTNpM2kzaTNpM2kzaTNpMmkyaGc6MTI0b1IxZDEyNjNSMmFkNjVkLTIwMWQxMzlkLTIwMWQxMzlkMTEwN2QxMzlkMTEwOWQxMjlkMTEwOWQxMTlkMTEwOWQxMDYuNWQxMTA5ZDk0ZDExMDlkODIuNWQxMTA5LjVkNzFkMTExMGQ2OWQxMTExZDY1ZC0yMDFoUjNkMTg2UjRkMTM5UjVkNjVSNmQxMjI1UjdkLTg3UjhkMTE2MFI5ZDc3OVIxMGQ1NDBSMTFpMTI0UjEyZDY1UjEzZDE4NlIxNGFpMWkyaTJpM2kzaTNpM2kyaGc6MjM2b1IxZDEyNjNSMmFkNjdkNDM3ZDY3ZDk5NWQ3MWQxMDA1ZDg2LjVkMTAxMWQxMDJkMTAxN2QxMjBkMTAxNi41ZDEzOGQxMDE2ZDE1My41ZDEwMDdkMTY5ZDk5OGQxNzRkOTc4ZDE2OWQ4MzdkMTYyZDY5OC41ZDE1NWQ1NjBkMTQ2ZDQzN2Q2N2Q0MzdkMTY1ZDI4OGQxNDRkMzQyZDExMmQzMjBkOTNkMzA2ZDc0ZDI5MmQ2M2QyODFkNTJkMjcwZDQ2ZDI2MC41ZDQwZDI1MWQzNmQyMzhkMzRkMjI1ZDM1LjVkMjEzZDM3ZDIwMWQ0M2QxOTQuNWQ0OWQxODhkNTguNWQxODkuNWQ2OGQxOTFkODFkMjA2ZDE2NWQyODhoUjNkMTk0UjRkMTc0UjVkMzRSNmQ4MzZSN2Q3UjhkODAyUjlkNzc5UjEwZDU0MFIxMWkyMzZSMTJkMzRSMTNkMTk0UjE0YWkxaTJpM2kzaTNpM2kzaTNpMmkxaTJpM2kzaTNpM2kzaTNpM2kzaTJoZzoxMjNvUjFkMTI2M1IyYWQ1MzlkMTE5N2Q0NjBkMTE5MmQ0MDguNWQxMTY5ZDM1N2QxMTQ2ZDMyNC41ZDExMDkuNWQyOTJkMTA3M2QyNzUuNWQxMDI2LjVkMjU5ZDk4MGQyNTAuNWQ5MjYuNWQyNDJkODczZDIzOC41ZDgxNS41ZDIzNWQ3NThkMjI5ZDcwMGQyMjFkNjg1ZDE5Ny41ZDY2Ny41ZDE3NGQ2NTBkMTQ3ZDYyOC41ZDEyMGQ2MDdkOTYuNWQ1ODBkNzNkNTUzZDY1ZDUxOWQ2OWQ0ODhkNzkuNWQ0NjdkOTBkNDQ2ZDEwNGQ0MzFkMTE4ZDQxNmQxMzRkNDA1ZDE1MGQzOTRkMTY1ZDM4My41ZDE4MGQzNzNkMTkzLjVkMzYwZDIwN2QzNDdkMjE1ZDMyOGQyMTNkMjgxZDIwNy41ZDIyMC41ZDIwMmQxNjBkMjAwLjVkOTdkMTk5ZDM0ZDIwNmQtMjYuNWQyMTNkLTg3ZDIzNi41ZC0xMzRkMjYwZC0xODFkMzA0LjVkLTIxMGQzNDlkLTIzOWQ0MjJkLTIzOWQ0MjJkLTE3MWQ0MDNkLTE3MmQzODMuNWQtMTY5LjVkMzY0ZC0xNjdkMzQ2LjVkLTE1MmQzMjlkLTEzN2QzMTVkLTEwMy41ZDMwMWQtNzBkMjkzLjVkLTEwZDI4NmQ1MGQyODYuNWQxNDIuNWQyODdkMjM1ZDI5OGQzNjlkMjk4ZDM5NmQyNzguNWQ0MTIuNWQyNTlkNDI5ZDIzNS41ZDQ0My41ZDIxMmQ0NThkMTkyLjVkNDczZDE3M2Q0ODhkMTczZDUxMWQxNjdkNTIzZDE3My41ZDUzOS41ZDE4MGQ1NTZkMTkzLjVkNTczLjVkMjA3ZDU5MWQyMjVkNjA4ZDI0M2Q2MjVkMjYxZDYzOGQyNzlkNjUxZDI5NGQ2NTlkMzA5ZDY2N2QzMTdkNjY2ZDMwNGQ3ODlkMzEyLjVkODY4ZDMyMWQ5NDdkMzQyZDk5NC41ZDM2M2QxMDQyZDM5Mi41ZDEwNjRkNDIyZDEwODZkNDUxLjVkMTA5NGQ0ODFkMTEwMmQ1MDZkMTEwMmQ1MzFkMTEwMmQ1NDRkMTEwNmQ1MzlkMTE5N2Q1MzlkMTE5N2hSM2Q0NTFSNGQ1NDRSNWQ2NVI2ZDEyNjNSN2QtMTczUjhkMTE5OFI5ZDc3OVIxMGQ1NDBSMTFpMTIzUjEyZDY1UjEzZDQ1MVIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTJoZzoyMzVvUjFkMTI2M1IyYWQyN2Q4NjBkMThkNzc5ZDQyLjVkNzAyZDY3ZDYyNWQxMTYuNWQ1NjZkMTY2ZDUwN2QyMzZkNDcyLjVkMzA2ZDQzOGQzODlkNDQwZDQwM2Q0NDBkNDI2LjVkNDQ0ZDQ1MGQ0NDhkNDc2LjVkNDU2LjVkNTAzZDQ2NWQ1MjguNWQ0NzhkNTU0ZDQ5MWQ1NzMuNWQ1MDlkNTkzZDUyN2Q2MDNkNTQ5LjVkNjEzZDU3MmQ2MDhkNjAwZDU2N2Q2MjlkNTEzLjVkNjQwZDQ2MGQ2NTFkNDA0LjVkNjU1LjVkMzQ5ZDY2MGQyOTZkNjYzLjVkMjQzZDY2N2QyMDMuNWQ2ODJkMTY0ZDY5N2QxNDIuNWQ3MjkuNWQxMjFkNzYyZDEyOWQ4MjNkMTQ0ZDg3OGQxNzguNWQ5MDRkMjEzZDkzMGQyNTguNWQ5MzUuNWQzMDRkOTQxZDM1NS41ZDkzMC41ZDQwN2Q5MjBkNDU2LjVkOTAzZDUwNmQ4ODZkNTQ5ZDg2N2Q1OTJkODQ4ZDYyMGQ4MzZkNjMzZDgzNmQ2NDJkODQ1LjVkNjUxZDg1NWQ2NTFkODY4ZDYyNmQ5MTFkNTc1ZDk0NWQ1MjRkOTc5ZDQ2MGQxMDAwZDM5NmQxMDIxZDMyNi41ZDEwMjZkMjU3ZDEwMzFkMTk2ZDEwMTZkMTM1ZDEwMDFkODlkOTYzZDQzZDkyNWQyN2Q4NjBkMzgwZDUxNWQzNjJkNTE1ZDMzNmQ1MTlkMzEwZDUyM2QyODZkNTMzZDI2MmQ1NDNkMjQ0LjVkNTU5ZDIyN2Q1NzVkMjI3ZDYwMGQ0NzVkNTU5ZDQ1OWQ1MzVkNDMzLjVkNTI1ZDQwOGQ1MTVkMzgwZDUxNWQyMDJkMjM1ZDIwMmQyMzBkMjExLjVkMjIyLjVkMjIxZDIxNWQyMzNkMjA5ZDI0NmQyMDJkMjY0ZDE5NGQyOTBkMTk0ZDI5OS41ZDIwNWQzMDlkMjE2ZDMwOWQyMzZkMzA5ZDI1MWQzMDEuNWQyNTkuNWQyOTRkMjY4ZDI4Mi41ZDI3MmQyNzFkMjc2ZDI1Ny41ZDI3N2QyNDRkMjc4ZDIzMmQyNzhkMjE2ZDI3OGQyMDlkMjY4LjVkMjAyZDI1OWQyMDJkMjM1ZDM4MmQyMzVkMzgyZDIzMGQzOTEuNWQyMjIuNWQ0MDFkMjE1ZDQxM2QyMDlkNDI3ZDIwMmQ0NDVkMTk0ZDQ3MWQxOTRkNDgwLjVkMjA1ZDQ5MGQyMTZkNDkwZDIzNmQ0OTBkMjUxZDQ4Mi41ZDI1OS41ZDQ3NWQyNjhkNDYzLjVkMjcyZDQ1MmQyNzZkNDM4ZDI3N2Q0MjRkMjc4ZDQxMmQyNzhkMzk2ZDI3OGQzODlkMjY4LjVkMzgyZDI1OWQzODJkMjM1aFIzZDY5MlI0ZDY1MVI1ZDE4UjZkODMwUjdkLTdSOGQ4MTJSOWQ3NzlSMTBkNTQwUjExaTIzNVIxMmQxOFIxM2Q2OTJSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTJpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTIyb1IxZDEyNjNSMmFkMTEzZDg3MWQxNThkODI3ZDE5OWQ3OTFkMjQwZDc1NWQyNzcuNWQ3MjFkMzE1ZDY4N2QzNTFkNjUxZDM4N2Q2MTVkNDIzZDU3MWQzNzlkNTY5ZDMzMGQ1NzNkMjgxZDU3N2QyMzRkNTgyLjVkMTg3ZDU4OGQxNDUuNWQ1OTIuNWQxMDRkNTk3ZDc0LjVkNTk3ZDQ1ZDU5N2QzMS41ZDU5MGQxOGQ1ODNkMjdkNTY2ZDM2ZDU0OWQ1NGQ1MzZkNzJkNTIzZDg5ZDUyM2Q5NGQ1MjNkOTkuNWQ1MjJkMTA1ZDUyMWQxMTlkNTE5ZDEzM2Q1MTdkMTU4LjVkNTE0ZDE4NGQ1MTFkMjI3LjVkNTA2LjVkMjcxZDUwMmQzMzYuNWQ0OTZkNDAyZDQ5MGQ0OTdkNDgzZDUzNmQ0ODhkNTQ5ZDUwMy41ZDU2MmQ1MTlkNTU1ZDU0M2Q1NDhkNTY3ZDUyNS41ZDU5Ny41ZDUwM2Q2MjhkNDcwZDY2MmQ0MzdkNjk2ZDM5OGQ3MzJkMzU5ZDc2OGQzMTkuNWQ4MDMuNWQyODBkODM5ZDI0NGQ4NzIuNWQyMDhkOTA2ZDE4MWQ5MzRkMjI1ZDkzN2QyNTkuNWQ5MzdkMjk0ZDkzN2QzMjMuNWQ5MzUuNWQzNTNkOTM0ZDM4MWQ5MzJkNDA5ZDkzMGQ0MzkuNWQ5MjkuNWQ0NzBkOTI5ZDUwNmQ5MzAuNWQ1NDJkOTMyZDU4OWQ5MzhkNTk2ZDkzOGQ2MDQuNWQ5NDIuNWQ2MTNkOTQ3ZDYxOC41ZDk1Ni41ZDYyNGQ5NjZkNjI1LjVkOTgwZDYyN2Q5OTRkNjIwZDEwMTJkNTc4ZDEwMDdkNTIzLjVkMTAwOWQ0NjlkMTAxMWQ0MTFkMTAxNWQzNTNkMTAxOWQyOTVkMTAyMy41ZDIzN2QxMDI4ZDE4OC41ZDEwMjhkMTQwZDEwMjhkMTA0LjVkMTAyMS41ZDY5ZDEwMTVkNTVkOTk4ZDQxZDk4MWQ1My41ZDk1MGQ2NmQ5MTlkMTEzZDg3MWhSM2Q2MzRSNGQ2MjdSNWQxOFI2ZDU0MVI3ZC00UjhkNTIzUjlkNzc5UjEwZDU0MFIxMWkxMjJSMTJkMThSMTNkNjM0UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjIzNG9SMWQxMjYzUjJhZDI3ZDg2MGQxOGQ3NzlkNDIuNWQ3MDJkNjdkNjI1ZDExNi41ZDU2NmQxNjZkNTA3ZDIzNmQ0NzIuNWQzMDZkNDM4ZDM4OWQ0NDBkNDAzZDQ0MGQ0MjYuNWQ0NDRkNDUwZDQ0OGQ0NzYuNWQ0NTYuNWQ1MDNkNDY1ZDUyOC41ZDQ3OGQ1NTRkNDkxZDU3My41ZDUwOWQ1OTNkNTI3ZDYwM2Q1NDkuNWQ2MTNkNTcyZDYwOGQ2MDBkNTY3ZDYyOWQ1MTMuNWQ2NDBkNDYwZDY1MWQ0MDQuNWQ2NTUuNWQzNDlkNjYwZDI5NmQ2NjMuNWQyNDNkNjY3ZDIwMy41ZDY4MmQxNjRkNjk3ZDE0Mi41ZDcyOS41ZDEyMWQ3NjJkMTI5ZDgyM2QxNDRkODc4ZDE3OC41ZDkwNGQyMTNkOTMwZDI1OC41ZDkzNS41ZDMwNGQ5NDFkMzU1LjVkOTMwLjVkNDA3ZDkyMGQ0NTYuNWQ5MDNkNTA2ZDg4NmQ1NDlkODY3ZDU5MmQ4NDhkNjIwZDgzNmQ2MzNkODM2ZDY0MmQ4NDUuNWQ2NTFkODU1ZDY1MWQ4NjhkNjI2ZDkxMWQ1NzVkOTQ1ZDUyNGQ5NzlkNDYwZDEwMDBkMzk2ZDEwMjFkMzI2LjVkMTAyNmQyNTdkMTAzMWQxOTZkMTAxNmQxMzVkMTAwMWQ4OWQ5NjNkNDNkOTI1ZDI3ZDg2MGQzODBkNTE1ZDM2MmQ1MTVkMzM2ZDUxOWQzMTBkNTIzZDI4NmQ1MzNkMjYyZDU0M2QyNDQuNWQ1NTlkMjI3ZDU3NWQyMjdkNjAwZDQ3NWQ1NTlkNDU5ZDUzNWQ0MzMuNWQ1MjVkNDA4ZDUxNWQzODBkNTE1ZDE2M2QzNDJkMTYzZDMyN2QxNzZkMzA0ZDE4OWQyODFkMjEzZDI1Ni41ZDIzN2QyMzJkMjcwLjVkMjA3LjVkMzA0ZDE4M2QzNDRkMTY1ZDM3MWQxODJkMzkxLjVkMTk1LjVkNDEyZDIwOWQ0MzBkMjI1LjVkNDQ4ZDI0MmQ0NjYuNWQyNjVkNDg1ZDI4OGQ1MDhkMzI1ZDUxNmQzNDBkNTE2LjVkMzUzZDUxN2QzNjZkNTExZDM3NGQ1MDVkMzgyZDQ5My41ZDM4M2Q0ODJkMzg0ZDQ2NmQzNzVkNDQ4ZDM2MmQ0MzhkMzU1ZDQyOGQzNDhkNDIyZDM0My41ZDQxNmQzMzlkNDExLjVkMzM0ZDQwN2QzMjlkMzk4LjVkMzIwLjVkMzkwZDMxMmQzNzUuNWQyOTdkMzYxZDI4MmQzMzVkMjU2ZDMwOGQyNzVkMjg4LjVkMjkxZDI2OWQzMDdkMjU1ZDMyMi41ZDI0MWQzMzhkMjMxLjVkMzUzLjVkMjIyZDM2OWQyMTVkMzg3ZDE5MmQzODdkMTc3LjVkMzgwLjVkMTYzZDM3NGQxNjNkMzQyaFIzZDY5MlI0ZDY1MVI1ZDE4UjZkODU5UjdkLTdSOGQ4NDFSOWQ3NzlSMTBkNTQwUjExaTIzNFIxMmQxOFIxM2Q2OTJSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTJpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxMjFvUjFkMTI2M1IyYWQyOTdkMTQ5NWQyODNkMTUyOWQyNjQuNWQxNTQyZDI0NmQxNTU1ZDIzMWQxNTUzLjVkMjE2ZDE1NTJkMjA4LjVkMTUzNy41ZDIwMWQxNTIzZDIwOWQxNTAyZDIyM2QxNDQ1ZDI0MS41ZDEzODRkMjYwZDEzMjNkMjgwZDEyNjNkMzAwZDEyMDNkMzIwZDExNDUuNWQzNDBkMTA4OGQzNThkMTAzN2QzNDdkMTAyNmQzMjYuNWQxMDAwLjVkMzA2ZDk3NWQyODBkOTQxZDI1NGQ5MDdkMjI0LjVkODY2LjVkMTk1ZDgyNmQxNjZkNzg1LjVkMTM3ZDc0NWQxMTAuNWQ3MDYuNWQ4NGQ2NjhkNjVkNjM3ZDQ2ZDYwNmQzNmQ1ODYuNWQyNmQ1NjdkMjlkNTYzZDc2ZDUxNWQ5OWQ1MzdkMTI4ZDU2OC41ZDE1N2Q2MDBkMTg3ZDYzNi41ZDIxN2Q2NzNkMjQ4ZDcxMmQyNzlkNzUxZDMwN2Q3ODguNWQzMzVkODI2ZDM1OC41ZDg1OS41ZDM4MmQ4OTNkMzk4ZDkxOGQ0MTdkODc3ZDQyNy41ZDg1My41ZDQzOGQ4MzBkNDQ2ZDgwOS41ZDQ1NGQ3ODlkNDYzZDc2NmQ0NzJkNzQzZDQ4OC41ZDcwM2Q1MDVkNjYzZDUzMi41ZDYwMWQ1NjBkNTM5ZDYwNmQ0NDBkNjEzZDQzN2Q2MjdkNDM1LjVkNjQxZDQzNGQ2NTRkNDM3LjVkNjY3ZDQ0MWQ2NzQuNWQ0NTEuNWQ2ODJkNDYyZDY3OGQ0ODFkMjk3ZDE0OTVkMjk3ZDE0OTVoUjNkNzAyUjRkNjgyUjVkMjZSNmQ1OTBSN2QtNTMxUjhkNTY0UjlkNzc5UjEwZDU0MFIxMWkxMjFSMTJkMjZSMTNkNzAyUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpMmhnOjIzM29SMWQxMjYzUjJhZDI3ZDg2MGQxOGQ3NzlkNDIuNWQ3MDJkNjdkNjI1ZDExNi41ZDU2NmQxNjZkNTA3ZDIzNmQ0NzIuNWQzMDZkNDM4ZDM4OWQ0NDBkNDAzZDQ0MGQ0MjYuNWQ0NDRkNDUwZDQ0OGQ0NzYuNWQ0NTYuNWQ1MDNkNDY1ZDUyOC41ZDQ3OGQ1NTRkNDkxZDU3My41ZDUwOWQ1OTNkNTI3ZDYwM2Q1NDkuNWQ2MTNkNTcyZDYwOGQ2MDBkNTY3ZDYyOWQ1MTMuNWQ2NDBkNDYwZDY1MWQ0MDQuNWQ2NTUuNWQzNDlkNjYwZDI5NmQ2NjMuNWQyNDNkNjY3ZDIwMy41ZDY4MmQxNjRkNjk3ZDE0Mi41ZDcyOS41ZDEyMWQ3NjJkMTI5ZDgyM2QxNDRkODc4ZDE3OC41ZDkwNGQyMTNkOTMwZDI1OC41ZDkzNS41ZDMwNGQ5NDFkMzU1LjVkOTMwLjVkNDA3ZDkyMGQ0NTYuNWQ5MDNkNTA2ZDg4NmQ1NDlkODY3ZDU5MmQ4NDhkNjIwZDgzNmQ2MzNkODM2ZDY0MmQ4NDUuNWQ2NTFkODU1ZDY1MWQ4NjhkNjI2ZDkxMWQ1NzVkOTQ1ZDUyNGQ5NzlkNDYwZDEwMDBkMzk2ZDEwMjFkMzI2LjVkMTAyNmQyNTdkMTAzMWQxOTZkMTAxNmQxMzVkMTAwMWQ4OWQ5NjNkNDNkOTI1ZDI3ZDg2MGQzODBkNTE1ZDM2MmQ1MTVkMzM2ZDUxOWQzMTBkNTIzZDI4NmQ1MzNkMjYyZDU0M2QyNDQuNWQ1NTlkMjI3ZDU3NWQyMjdkNjAwZDQ3NWQ1NTlkNDU5ZDUzNWQ0MzMuNWQ1MjVkNDA4ZDUxNWQzODBkNTE1ZDM1N2QyNjhkMzcwZDI1MmQzODJkMjQ3ZDM5NGQyNDJkNDAyZDI0NS41ZDQxMGQyNDlkNDE1ZDI1OC41ZDQyMGQyNjhkNDIwZDI3OWQ0MTdkMjkxZDQxMi41ZDMwMC41ZDQwOGQzMTBkMzk3ZDMyM2QzODZkMzM2ZDM2NWQzNTQuNWQzNDRkMzczZDMxMGQ0MDFkMjcxZDM2NmQzNTdkMjY4aFIzZDY5MlI0ZDY1MVI1ZDE4UjZkNzgyUjdkLTdSOGQ3NjRSOWQ3NzlSMTBkNTQwUjExaTIzM1IxMmQxOFIxM2Q2OTJSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTJpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTJpMmhnOjEyMG9SMWQxMjYzUjJhZDMzZDk4NmQzNmQ5ODNkNTBkOTY4LjVkNjRkOTU0ZDgzZDkzMi41ZDEwMmQ5MTFkMTI0ZDg4NWQxNDZkODU5ZDE2N2Q4MzNkMTg4ZDgwN2QyMDUuNWQ3ODNkMjIzZDc1OWQyMzJkNzQyZDE3M2Q2NzdkMTI3ZDYyNmQxMDdkNjA0ZDg4ZDU4My41ZDY5ZDU2M2Q1NC41ZDU0Ni41ZDQwZDUzMGQzMWQ1MTkuNWQyMmQ1MDlkMjJkNTA5ZDk1ZDQzMWQxMzNkNDc3ZDE1Ni41ZDUwNy41ZDE4MGQ1MzhkMTk1LjVkNTU4LjVkMjExZDU3OWQyMjEuNWQ1OTIuNWQyMzJkNjA2ZDI0Mi41ZDYxOGQyNTNkNjMwZDI2NmQ2NDRkMjc5ZDY1OGQzMDFkNjc5ZDMxOGQ2NTdkMzM5ZDYyNS41ZDM2MGQ1OTRkMzg0ZDU1OWQ0MDhkNTI0ZDQzM2Q0ODlkNDU4ZDQ1NGQ0ODRkNDI0ZDQ5OWQ0MjRkNTEwLjVkNDMwZDUyMmQ0MzZkNTMwZDQ0NC41ZDUzOGQ0NTNkNTQyLjVkNDYzZDU0N2Q0NzNkNTQ3ZDQ4MmQ1MjVkNTMwZDUwMC41ZDU2NWQ0NzZkNjAwZDQ1My41ZDYyOC41ZDQzMWQ2NTdkNDEyLjVkNjgyLjVkMzk0ZDcwOGQzODNkNzM4ZDQxM2Q3NTlkNDQ3ZDc5MS41ZDQ4MWQ4MjRkNTExLjVkODU3LjVkNTQyZDg5MWQ1NjUuNWQ5MjBkNTg5ZDk0OWQ1OTlkOTY0ZDU5OWQ5NjlkNTkzLjVkOTc4LjVkNTg4ZDk4OGQ1ODBkOTk4ZDU3MmQxMDA4ZDU2My41ZDEwMTYuNWQ1NTVkMTAyNWQ1NDhkMTAyOGQ1MjRkMTAxNmQ0OThkOTg3ZDQ3MmQ5NThkNDQzLjVkOTIzZDQxNWQ4ODhkMzg0ZDg1M2QzNTNkODE4ZDMyMGQ3OTVkMzAyZDgxNWQyNzVkODQ4ZDI0OGQ4ODFkMjE4LjVkOTE1LjVkMTg5ZDk1MGQxNjEuNWQ5ODBkMTM0ZDEwMTBkMTE1ZDEwMjRkMTA4ZDEwMjVkOTZkMTAyMi41ZDg0ZDEwMjBkNzEuNWQxMDE1ZDU5ZDEwMTBkNDhkMTAwMi41ZDM3ZDk5NWQzM2Q5ODZoUjNkNjAyUjRkNTk5UjVkMjJSNmQ2MDBSN2QtNFI4ZDU3OFI5ZDc3OVIxMGQ1NDBSMTFpMTIwUjEyZDIyUjEzZDYwMlIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoyMzJvUjFkMTI2M1IyYWQyN2Q4NjBkMThkNzc5ZDQyLjVkNzAyZDY3ZDYyNWQxMTYuNWQ1NjZkMTY2ZDUwN2QyMzZkNDcyLjVkMzA2ZDQzOGQzODlkNDQwZDQwM2Q0NDBkNDI2LjVkNDQ0ZDQ1MGQ0NDhkNDc2LjVkNDU2LjVkNTAzZDQ2NWQ1MjguNWQ0NzhkNTU0ZDQ5MWQ1NzMuNWQ1MDlkNTkzZDUyN2Q2MDNkNTQ5LjVkNjEzZDU3MmQ2MDhkNjAwZDU2N2Q2MjlkNTEzLjVkNjQwZDQ2MGQ2NTFkNDA0LjVkNjU1LjVkMzQ5ZDY2MGQyOTZkNjYzLjVkMjQzZDY2N2QyMDMuNWQ2ODJkMTY0ZDY5N2QxNDIuNWQ3MjkuNWQxMjFkNzYyZDEyOWQ4MjNkMTQ0ZDg3OGQxNzguNWQ5MDRkMjEzZDkzMGQyNTguNWQ5MzUuNWQzMDRkOTQxZDM1NS41ZDkzMC41ZDQwN2Q5MjBkNDU2LjVkOTAzZDUwNmQ4ODZkNTQ5ZDg2N2Q1OTJkODQ4ZDYyMGQ4MzZkNjMzZDgzNmQ2NDJkODQ1LjVkNjUxZDg1NWQ2NTFkODY4ZDYyNmQ5MTFkNTc1ZDk0NWQ1MjRkOTc5ZDQ2MGQxMDAwZDM5NmQxMDIxZDMyNi41ZDEwMjZkMjU3ZDEwMzFkMTk2ZDEwMTZkMTM1ZDEwMDFkODlkOTYzZDQzZDkyNWQyN2Q4NjBkMzgwZDUxNWQzNjJkNTE1ZDMzNmQ1MTlkMzEwZDUyM2QyODZkNTMzZDI2MmQ1NDNkMjQ0LjVkNTU5ZDIyN2Q1NzVkMjI3ZDYwMGQ0NzVkNTU5ZDQ1OWQ1MzVkNDMzLjVkNTI1ZDQwOGQ1MTVkMzgwZDUxNWQ0MTNkMzUzZDM5MmQ0MDdkMzYwZDM4NWQzNDFkMzcxZDMyMmQzNTdkMzExZDM0NmQzMDBkMzM1ZDI5NGQzMjUuNWQyODhkMzE2ZDI4NGQzMDNkMjgyZDI5MGQyODMuNWQyNzhkMjg1ZDI2NmQyOTFkMjU5LjVkMjk3ZDI1M2QzMDYuNWQyNTQuNWQzMTZkMjU2ZDMyOWQyNzFkNDEzZDM1M2hSM2Q2OTJSNGQ2NTFSNWQxOFI2ZDc3MVI3ZC03UjhkNzUzUjlkNzc5UjEwZDU0MFIxMWkyMzJSMTJkMThSMTNkNjkyUjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kyaTNpM2kxaTJpM2kzaTNpM2kzaTNpM2kzaTJoZzoxMTlvUjFkMTI2M1IyYWQ1MDlkNjc5ZDQ4MmQ3NzBkNDYzLjVkODQ3LjVkNDQ1ZDkyNWQ0MjYuNWQ5NzZkNDA4ZDEwMjdkMzg0LjVkMTA0NC41ZDM2MWQxMDYyZDMyM2QxMDMzZDMwMmQxMDExZDI3NC41ZDk2OGQyNDdkOTI1ZDIxNy41ZDg3MmQxODhkODE5ZDE1OS41ZDc2MS41ZDEzMWQ3MDRkMTA4LjVkNjUyLjVkODZkNjAxZDcyZDU2MS41ZDU4ZDUyMmQ1OGQ1MDVkNThkNDgyZDcxLjVkNDc2LjVkODVkNDcxZDEwMi41ZDQ3NmQxMjBkNDgxZDEzNy41ZDQ5Mi41ZDE1NWQ1MDRkMTYzZDUxNWQxNzJkNTI4ZDE4NC41ZDU1OWQxOTdkNTkwZDIxNS41ZDYzN2QyMzRkNjg0ZDI1OWQ3NDQuNWQyODRkODA1ZDMxOWQ4NzdkMzM1ZDg1MmQzNTAuNWQ4MTUuNWQzNjZkNzc5ZDM4MWQ3MzlkMzk2ZDY5OWQ0MTBkNjU5LjVkNDI0ZDYyMGQ0MzguNWQ1ODhkNDUzZDU1NmQ0NjguNWQ1MzZkNDg0ZDUxNmQ1MDBkNTE1ZDUxMWQ1MDlkNTMxLjVkNTI3LjVkNTUyZDU0NmQ1NzhkNTc5ZDYwNGQ2MTJkNjMyLjVkNjU0LjVkNjYxZDY5N2Q2ODcuNWQ3MzdkNzE0ZDc3N2Q3MzZkODEwLjVkNzU4ZDg0NGQ3NzBkODU5ZDc3OGQ4NTlkNzg1LjVkODI5ZDc5M2Q3OTlkODAyLjVkNzU0ZDgxMmQ3MDlkODI0ZDY1N2Q4MzZkNjA1ZDg1M2Q1NjBkODcwZDUxNWQ4OTMuNWQ0ODVkOTE3ZDQ1NWQ5NDlkNDU1ZDk2N2Q0NTVkOTc0LjVkNDY4LjVkOTgyZDQ4MmQ5ODBkNDk4ZDk2NmQ1NDBkOTQ5ZDU5NC41ZDkzMmQ2NDlkOTE0LjVkNzA2ZDg5N2Q3NjNkODc4LjVkODE4LjVkODYwZDg3NGQ4NDJkOTE4LjVkODI0ZDk2M2Q4MDYuNWQ5OTEuNWQ3ODlkMTAyMGQ3NzRkMTAyNGQ3NjJkMTAzMGQ3NDQuNWQxMDE2ZDcyN2QxMDAyZDcwNS41ZDk3NWQ2ODRkOTQ4ZDY2MGQ5MTFkNjM2ZDg3NGQ2MTAuNWQ4MzMuNWQ1ODVkNzkzZDU1OWQ3NTIuNWQ1MzNkNzEyZDUwOWQ2NzloUjNkMTAzNVI0ZDk4MlI1ZDU4UjZkNTY5UjdkLTM4UjhkNTExUjlkNzc5UjEwZDU0MFIxMWkxMTlSMTJkNThSMTNkMTAzNVIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoyMzFvUjFkMTI2M1IyYWQyN2Q4MjdkMjNkNzgxZDQ0ZDczNS41ZDY1ZDY5MGQxMDIuNWQ2NDguNWQxNDBkNjA3ZDE5MC41ZDU3MS41ZDI0MWQ1MzZkMjk3ZDUxMWQzNTNkNDg2ZDQxMC41ZDQ3My41ZDQ2OGQ0NjFkNTE5ZDQ2NmQ1MzhkNDY2ZDU1N2Q0NjhkNTc2ZDQ3MGQ1OTAuNWQ0NzhkNjA1ZDQ4NmQ2MTRkNTAxZDYyM2Q1MTZkNjIzZDU0MmQ2MjNkNTU1ZDYxNi41ZDU2NWQ2MTBkNTc1ZDYwMC41ZDU4NGQ1OTFkNTkzZDU4MGQ2MDBkNTY5ZDYwN2Q1NjBkNjE0ZDU1N2Q2MDBkNTU0ZDU4Ny41ZDU1MWQ1NzVkNTQ0LjVkNTY1LjVkNTM4ZDU1NmQ1MjcuNWQ1NTAuNWQ1MTdkNTQ1ZDUwMGQ1NDVkNDQxZDU1N2QzNzIuNWQ1ODEuNWQzMDRkNjA2ZDI0Ni41ZDY0MGQxODlkNjc0ZDE1NGQ3MTYuNWQxMTlkNzU5ZDEyN2Q4MDhkMTI3ZDg1MmQxNDRkODc5ZDE2MWQ5MDZkMTg4LjVkOTIxZDIxNmQ5MzZkMjUxLjVkOTQxZDI4N2Q5NDZkMzI0ZDk0NmQzODFkOTQ2ZDQzNC41ZDkyOWQ0ODhkOTEyZDUzOWQ4OTFkNTkwZDg3MGQ2MzlkODUzZDY4OGQ4MzZkNzM1ZDgzNmQ3NDNkODM2ZDc1MS41ZDgzN2Q3NjBkODM4ZDc2Ni41ZDg0Mi41ZDc3M2Q4NDdkNzc1LjVkODU1LjVkNzc4ZDg2NGQ3NzVkODc5ZDc3MGQ4OTdkNzM5LjVkOTE1ZDcwOWQ5MzNkNjY0LjVkOTQ5ZDYyMGQ5NjVkNTY3LjVkOTc5ZDUxNWQ5OTNkNDY1LjVkMTAwM2Q0MTZkMTAxM2QzNzYuNWQxMDE4LjVkMzM3ZDEwMjRkMzE4ZDEwMjRkMjc0ZDEwMjRkMjIzZDEwMTRkMTcyZDEwMDRkMTI4LjVkOTgxZDg1ZDk1OGQ1NmQ5MjAuNWQyN2Q4ODNkMjdkODI3ZDIxM2QxMjU0ZDI1M2QxMjU4ZDI5Mi41ZDEyNTFkMzMyZDEyNDRkMzYxLjVkMTIzMi41ZDM5MWQxMjIxZDQwNmQxMjA3ZDQyMWQxMTkzZDQxMy41ZDExODJkNDA2ZDExNzFkMzcwZDExNjYuNWQzMzRkMTE2MmQyNjJkMTE2OGQyNDdkMTE2OGQyMzguNWQxMTUzZDIzMGQxMTM4ZDIyNS41ZDExMTdkMjIxZDEwOTZkMjIwZDEwNzNkMjE5ZDEwNTBkMjE5ZDEwMzNkMjE1ZDk5OGQyMjMuNWQ5OTEuNWQyMzJkOTg1ZDI0M2Q5OTEuNWQyNTRkOTk4ZDI2MmQxMDEwLjVkMjcwZDEwMjNkMjY1ZDEwMjdkMjY1ZDEwNDRkMjY0LjVkMTA1OS41ZDI2NGQxMDc1ZDI2NmQxMDg3ZDI2OGQxMDk5ZDI3My41ZDExMDZkMjc5ZDExMTNkMjkwZDExMTNkMzQ4ZDExMDdkMzg1LjVkMTExNC41ZDQyM2QxMTIyZDQ0MmQxMTM4LjVkNDYxZDExNTVkNDY0ZDExNzcuNWQ0NjdkMTIwMGQ0NTZkMTIyM2Q0NDVkMTI0NmQ0MjIuNWQxMjY2LjVkNDAwZDEyODdkMzY4LjVkMTMwMGQzMzdkMTMxM2QyOThkMTMxNWQyNTlkMTMxN2QyMTZkMTMwM2QyMTNkMTMwM2QyMTNkMTI5Ni41ZDIxM2QxMjkwZDIxMy41ZDEyODEuNWQyMTRkMTI3M2QyMTQuNWQxMjY1ZDIxNWQxMjU3ZDIxM2QxMjU0aFIzZDgxMFI0ZDc3OFI1ZDIzUjZkNTYzUjdkLTI5M1I4ZDU0MFI5ZDc3OVIxMGQ1NDBSMTFpMjMxUjEyZDIzUjEzZDgxMFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjExOG9SMWQxMjYzUjJhZDQ1ZDU0MGQ0MGQ1MjRkNDdkNTA3ZDU0ZDQ5MGQ2Ni41ZDQ4MGQ3OWQ0NzBkOTNkNDcwLjVkMTA3ZDQ3MWQxMTZkNDg5ZDMyNmQ4NzlkMzM2ZDg2M2QzNThkODIyLjVkMzgwZDc4MmQ0MDhkNzMxZDQzNmQ2ODBkNDY2LjVkNjI0ZDQ5N2Q1NjhkNTIzLjVkNTIyZDU1MGQ0NzZkNTY5LjVkNDQ2ZDU4OWQ0MTZkNTk1ZDQxNmQ2MDhkNDE2ZDYxOGQ0MjJkNjI4ZDQyOGQ2MzQuNWQ0MzcuNWQ2NDFkNDQ3ZDY0My41ZDQ1OGQ2NDZkNDY5ZDY0NWQ0NzlkNTkxZDU5NWQ1NTJkNjgxZDUxM2Q3NjdkNDg0LjVkODI3LjVkNDU2ZDg4OGQ0MzdkOTI2LjVkNDE4ZDk2NWQ0MDIuNWQ5ODcuNWQzODdkMTAxMGQzNzRkMTAxOGQzNjFkMTAyNmQzNDZkMTAyNmQzMjZkMTAyNmQyOTMuNWQ5ODdkMjYxZDk0OGQyMjAuNWQ4ODEuNWQxODBkODE1ZDEzNWQ3MjYuNWQ5MGQ2MzhkNDVkNTQwaFIzZDY2NFI0ZDY0NlI1ZDQwUjZkNjA4UjdkLTJSOGQ1NjhSOWQ3NzlSMTBkNTQwUjExaTExOFIxMmQ0MFIxM2Q2NjRSMTRhaTFpM2kzaTNpM2kyaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjIzMG9SMWQxMjYzUjJhZDUyNWQ4MTdkNDk2ZDg2MmQ0NThkODk4LjVkNDIwZDkzNWQzNzQuNWQ5NjAuNWQzMjlkOTg2ZDI3NS41ZDk5OGQyMjJkMTAxMGQxNjNkMTAwNWQxNDJkMTAwNWQxMThkMTAwMGQ5NGQ5OTVkNzMuNWQ5ODRkNTNkOTczZDQwZDk1NWQyN2Q5MzdkMjdkOTEwZDE2ZDg1NGQzMS41ZDc5Ni41ZDQ3ZDczOWQ4MGQ2ODUuNWQxMTNkNjMyZDE2MWQ1ODYuNWQyMDlkNTQxZDI2My41ZDUwOS41ZDMxOGQ0NzhkMzc1LjVkNDY0ZDQzM2Q0NTBkNDg3ZDQ2MGQ1MjhkNDYwZDU1MWQ0ODdkNTc0ZDUxNGQ1ODUuNWQ1NTlkNTk3ZDYwNGQ2MDBkNjYyLjVkNjAzZDcyMWQ2MDVkNzgzZDYwN2Q4NDVkNjEwLjVkOTA1LjVkNjE0ZDk2NmQ2MjZkMTAxNmQ1NTJkMTAxNmQ1NDdkOTgyZDU0NC41ZDk1NmQ1NDJkOTMwZDU0MGQ5MDcuNWQ1MzhkODg1ZDUzNC41ZDg2NGQ1MzFkODQzZDUyNWQ4MTdkNDQ5ZDU1MGQ0MTBkNTQ3ZDM2OC41ZDU2MC41ZDMyN2Q1NzRkMjg4LjVkNTk4LjVkMjUwZDYyM2QyMTYuNWQ2NTYuNWQxODNkNjkwZDE1OGQ3MjZkMTMzZDc2MmQxMTkuNWQ3OTcuNWQxMDZkODMzZDEwOC41ZDg2M2QxMTFkODkzZDEzMWQ5MTRkMTUxZDkzNWQxOTNkOTQyZDI1M2Q5NDFkMzA4LjVkOTExLjVkMzY0ZDg4MmQ0MDcuNWQ4MzguNWQ0NTFkNzk1ZDQ4MGQ3NDQuNWQ1MDlkNjk0ZDUxNy41ZDY1MWQ1MjZkNjA4ZDUxMGQ1NzlkNDk0ZDU1MGQ0NDlkNTUwZDU0OWQ4ODBkNTQwZDc5OWQ1NjQuNWQ3MjJkNTg5ZDY0NWQ2MzguNWQ1ODZkNjg4ZDUyN2Q3NThkNDkyLjVkODI4ZDQ1OGQ5MTFkNDYwZDkyNWQ0NjBkOTQ4LjVkNDY0ZDk3MmQ0NjhkOTk4LjVkNDc2LjVkMTAyNWQ0ODVkMTA1MC41ZDQ5OGQxMDc2ZDUxMWQxMDk1LjVkNTI5ZDExMTVkNTQ3ZDExMjVkNTY5LjVkMTEzNWQ1OTJkMTEzMGQ2MjBkMTA4OWQ2NDlkMTAzNS41ZDY2MGQ5ODJkNjcxZDkyNi41ZDY3NS41ZDg3MWQ2ODBkODE4ZDY4My41ZDc2NWQ2ODdkNzI1LjVkNzAyZDY4NmQ3MTdkNjY0LjVkNzQ5LjVkNjQzZDc4MmQ2NTFkODQzZDY2NmQ4OThkNzAwLjVkOTI0ZDczNWQ5NTBkNzgwLjVkOTU1LjVkODI2ZDk2MWQ4NzcuNWQ5NTAuNWQ5MjlkOTQwZDk3OC41ZDkyM2QxMDI4ZDkwNmQxMDcxZDg4N2QxMTE0ZDg2OGQxMTQyZDg1NmQxMTU1ZDg1NmQxMTY0ZDg2NS41ZDExNzNkODc1ZDExNzNkODg4ZDExNDhkOTMxZDEwOTdkOTY1ZDEwNDZkOTk5ZDk4MmQxMDIwZDkxOGQxMDQxZDg0OC41ZDEwNDZkNzc5ZDEwNTFkNzE4ZDEwMzZkNjU3ZDEwMjFkNjExZDk4M2Q1NjVkOTQ1ZDU0OWQ4ODBkOTAyZDUzNWQ4ODRkNTM1ZDg1OGQ1MzlkODMyZDU0M2Q4MDhkNTUzZDc4NGQ1NjNkNzY2LjVkNTc5ZDc0OWQ1OTVkNzQ5ZDYyMGQ5OTdkNTc5ZDk4MWQ1NTVkOTU1LjVkNTQ1ZDkzMGQ1MzVkOTAyZDUzNWhSM2QxMTgyUjRkMTE3M1I1ZDE2UjZkNTc0UjdkLTI3UjhkNTU4UjlkNzc5UjEwZDU0MFIxMWkyMzBSMTJkMTZSMTNkMTE4MlIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMWkzaTNpM2kzaTJpM2kzaGc6MTE3b1IxZDEyNjNSMmFkMjhkODU4ZDI4ZDgzOGQyNC41ZDgwMmQyMWQ3NjZkMTguNWQ3MjMuNWQxNmQ2ODFkMTYuNWQ2MzdkMTdkNTkzZDI0ZDU1Ny41ZDMxZDUyMmQ0Ni41ZDQ5OWQ2MmQ0NzZkOTFkNDc2ZDEyNmQ0ODZkMTM4LjVkNTAyZDE1MWQ1MThkMTQ5LjVkNTQxZDE0OGQ1NjRkMTM3LjVkNTk0ZDEyN2Q2MjRkMTE2ZDY2Mi41ZDEwNWQ3MDFkOTlkNzQ3LjVkOTNkNzk0ZDEwMWQ4NTBkMTEwZDg4NmQxMzcuNWQ5MDUuNWQxNjVkOTI1ZDIwM2Q5MzAuNWQyNDFkOTM2ZDI4NC41ZDkyOS41ZDMyOGQ5MjNkMzY5ZDkwNy41ZDQxMGQ4OTJkNDQ0ZDg2OS41ZDQ3OGQ4NDdkNDk3ZDgyMWQ1MDdkNzcxZDUwOGQ3MjkuNWQ1MDlkNjg4ZDUwNmQ2NDlkNTAzZDYxMGQ0OThkNTY5LjVkNDkzZDUyOWQ0OTJkNDgwZDUzMGQ0NjRkNTUyZDQ4NWQ1NzRkNTA2ZDU4NS41ZDU1MC41ZDU5N2Q1OTVkNjAxZDY1NmQ2MDVkNzE3ZDYwNS41ZDc4MS41ZDYwNmQ4NDZkNjA2ZDkwN2Q2MDZkOTY4ZDYxMWQxMDExZDU4NGQxMDM3ZDU1NC41ZDEwMTZkNTI1ZDk5NWQ1MDlkOTI1ZDQ5M2Q5MzlkNDU0ZDk1OS41ZDQxNWQ5ODBkMzY0LjVkOTk2ZDMxNGQxMDEyZDI1OC41ZDEwMTlkMjAzZDEwMjZkMTU1ZDEwMTRkMTA3ZDEwMDJkNzJkOTY1LjVkMzdkOTI5ZDI4ZDg1OGhSM2Q2NTBSNGQ2MTFSNWQxNlI2ZDU2MFI3ZC0xM1I4ZDU0NFI5ZDc3OVIxMGQ1NDBSMTFpMTE3UjEyZDE2UjEzZDY1MFIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjIyOW9SMWQxMjYzUjJhZDUyNWQ4MTdkNDk2ZDg2MmQ0NThkODk4LjVkNDIwZDkzNWQzNzQuNWQ5NjAuNWQzMjlkOTg2ZDI3NS41ZDk5OGQyMjJkMTAxMGQxNjNkMTAwNWQxNDJkMTAwNWQxMThkMTAwMGQ5NGQ5OTVkNzMuNWQ5ODRkNTNkOTczZDQwZDk1NWQyN2Q5MzdkMjdkOTEwZDE2ZDg1NGQzMS41ZDc5Ni41ZDQ3ZDczOWQ4MGQ2ODUuNWQxMTNkNjMyZDE2MWQ1ODYuNWQyMDlkNTQxZDI2My41ZDUwOS41ZDMxOGQ0NzhkMzc1LjVkNDY0ZDQzM2Q0NTBkNDg3ZDQ2MGQ1MjhkNDYwZDU1MWQ0ODdkNTc0ZDUxNGQ1ODUuNWQ1NTlkNTk3ZDYwNGQ2MDBkNjYyLjVkNjAzZDcyMWQ2MDVkNzgzZDYwN2Q4NDVkNjEwLjVkOTA1LjVkNjE0ZDk2NmQ2MjZkMTAxNmQ1NTJkMTAxNmQ1NDdkOTgyZDU0NC41ZDk1NmQ1NDJkOTMwZDU0MGQ5MDcuNWQ1MzhkODg1ZDUzNC41ZDg2NGQ1MzFkODQzZDUyNWQ4MTdkNDQ5ZDU1MGQ0MTBkNTQ3ZDM2OC41ZDU2MC41ZDMyN2Q1NzRkMjg4LjVkNTk4LjVkMjUwZDYyM2QyMTYuNWQ2NTYuNWQxODNkNjkwZDE1OGQ3MjZkMTMzZDc2MmQxMTkuNWQ3OTcuNWQxMDZkODMzZDEwOC41ZDg2M2QxMTFkODkzZDEzMWQ5MTRkMTUxZDkzNWQxOTNkOTQyZDI1M2Q5NDFkMzA4LjVkOTExLjVkMzY0ZDg4MmQ0MDcuNWQ4MzguNWQ0NTFkNzk1ZDQ4MGQ3NDQuNWQ1MDlkNjk0ZDUxNy41ZDY1MWQ1MjZkNjA4ZDUxMGQ1NzlkNDk0ZDU1MGQ0NDlkNTUwZDIzMWQ0NDlkMjMxZDQwN2QyNDZkMzgyLjVkMjYxZDM1OGQyODRkMzQ4ZDMwN2QzMzhkMzM0ZDM0MWQzNjFkMzQ0ZDM4NWQzNThkNDA5ZDM3MmQ0MjZkMzk0LjVkNDQzZDQxN2Q0NDZkNDQ1ZDQ0NmQ1MDhkNDIwZDUyOC41ZDM5NGQ1NDlkMzQzZDU0OWQzMjdkNTQ5ZDMwNy41ZDU0M2QyODhkNTM3ZDI3MWQ1MjQuNWQyNTRkNTEyZDI0Mi41ZDQ5M2QyMzFkNDc0ZDIzMWQ0NDlkMzg3ZDQyNGQzNjZkNDAxZDM0MmQzOTZkMzE4ZDM5MWQzMDFkNDAwLjVkMjg0ZDQxMGQyODBkNDMxLjVkMjc2ZDQ1M2QyOTVkNDg0ZDMxOGQ1MDNkMzM5LjVkNTA1ZDM2MWQ1MDdkMzc1ZDQ5N2QzODlkNDg3ZDM5My41ZDQ2Ny41ZDM5OGQ0NDhkMzg3ZDQyNGhSM2Q2NTFSNGQ2MjZSNWQxNlI2ZDY4NlI3ZDhSOGQ2NzBSOWQ3NzlSMTBkNTQwUjExaTIyOVIxMmQxNlIxM2Q2NTFSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaGc6MTE2b1IxZDEyNjNSMmFkMjJkNjIzZDIwZDUzN2QyMDdkNTM3ZDIwN2QyMTRkMjExZDIwMmQyMjEuNWQxOTJkMjMyZDE4MmQyNDRkMTc3ZDI1NmQxNzJkMjY5ZDE3NS41ZDI4MmQxNzlkMjkxZDE5NGQzMDFkMjM1ZDMwNWQyNzYuNWQzMDlkMzE4ZDMxMGQzNTkuNWQzMTFkNDAxZDMxMS41ZDQ0Mi41ZDMxMmQ0ODRkMzE1ZDUyNGQzMzRkNTIxZDM1OWQ1MjAuNWQzODRkNTIwZDQwOS41ZDUxOS41ZDQzNWQ1MTlkNDU5LjVkNTE4LjVkNDg0ZDUxOGQ1MDRkNTE2ZDUwMGQ2MDZkMzE4ZDYwMWQzMTdkNjYzZDMxOGQ3MTUuNWQzMTlkNzY4ZDMyMC41ZDgxOGQzMjJkODY4ZDMyM2Q5MjBkMzI0ZDk3MmQzMjRkMTAzM2QyODNkMTA1MWQyNjEuNWQxMDM2LjVkMjQwZDEwMjJkMjMxZDk4OGQyMjJkOTU0ZDIyMmQ5MDVkMjIyZDg1NmQyMjMuNWQ4MDQuNWQyMjVkNzUzZDIyNWQ3MDVkMjI1ZDY1N2QyMTZkNjIzZDIyZDYyM2hSM2Q1MThSNGQ1MDRSNWQyMFI2ZDg1MlI3ZC0yN1I4ZDgzMlI5ZDc3OVIxMGQ1NDBSMTFpMTE2UjEyZDIwUjEzZDUxOFIxNGFpMWkyaTJpMmkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaTJpM2kzaTNpM2kzaTNpM2kzaTNpM2kyaGc6MjI4b1IxZDEyNjNSMmFkNTI1ZDgxN2Q0OTZkODYyZDQ1OGQ4OTguNWQ0MjBkOTM1ZDM3NC41ZDk2MC41ZDMyOWQ5ODZkMjc1LjVkOTk4ZDIyMmQxMDEwZDE2M2QxMDA1ZDE0MmQxMDA1ZDExOGQxMDAwZDk0ZDk5NWQ3My41ZDk4NGQ1M2Q5NzNkNDBkOTU1ZDI3ZDkzN2QyN2Q5MTBkMTZkODU0ZDMxLjVkNzk2LjVkNDdkNzM5ZDgwZDY4NS41ZDExM2Q2MzJkMTYxZDU4Ni41ZDIwOWQ1NDFkMjYzLjVkNTA5LjVkMzE4ZDQ3OGQzNzUuNWQ0NjRkNDMzZDQ1MGQ0ODdkNDYwZDUyOGQ0NjBkNTUxZDQ4N2Q1NzRkNTE0ZDU4NS41ZDU1OWQ1OTdkNjA0ZDYwMGQ2NjIuNWQ2MDNkNzIxZDYwNWQ3ODNkNjA3ZDg0NWQ2MTAuNWQ5MDUuNWQ2MTRkOTY2ZDYyNmQxMDE2ZDU1MmQxMDE2ZDU0N2Q5ODJkNTQ0LjVkOTU2ZDU0MmQ5MzBkNTQwZDkwNy41ZDUzOGQ4ODVkNTM0LjVkODY0ZDUzMWQ4NDNkNTI1ZDgxN2Q0NDlkNTUwZDQxMGQ1NDdkMzY4LjVkNTYwLjVkMzI3ZDU3NGQyODguNWQ1OTguNWQyNTBkNjIzZDIxNi41ZDY1Ni41ZDE4M2Q2OTBkMTU4ZDcyNmQxMzNkNzYyZDExOS41ZDc5Ny41ZDEwNmQ4MzNkMTA4LjVkODYzZDExMWQ4OTNkMTMxZDkxNGQxNTFkOTM1ZDE5M2Q5NDJkMjUzZDk0MWQzMDguNWQ5MTEuNWQzNjRkODgyZDQwNy41ZDgzOC41ZDQ1MWQ3OTVkNDgwZDc0NC41ZDUwOWQ2OTRkNTE3LjVkNjUxZDUyNmQ2MDhkNTEwZDU3OWQ0OTRkNTUwZDQ0OWQ1NTBkMTgxZDIzNWQxODFkMjMwZDE5MC41ZDIyMi41ZDIwMGQyMTVkMjEyZDIwOWQyMjVkMjAyZDI0M2QxOTRkMjY5ZDE5NGQyNzguNWQyMDVkMjg4ZDIxNmQyODhkMjM2ZDI4OGQyNTFkMjgwLjVkMjU5LjVkMjczZDI2OGQyNjEuNWQyNzJkMjUwZDI3NmQyMzYuNWQyNzdkMjIzZDI3OGQyMTFkMjc4ZDE5NWQyNzhkMTg4ZDI2OC41ZDE4MWQyNTlkMTgxZDIzNWQzNjFkMjM1ZDM2MWQyMzBkMzcwLjVkMjIyLjVkMzgwZDIxNWQzOTJkMjA5ZDQwNmQyMDJkNDI0ZDE5NGQ0NTBkMTk0ZDQ1OS41ZDIwNWQ0NjlkMjE2ZDQ2OWQyMzZkNDY5ZDI1MWQ0NjEuNWQyNTkuNWQ0NTRkMjY4ZDQ0Mi41ZDI3MmQ0MzFkMjc2ZDQxN2QyNzdkNDAzZDI3OGQzOTFkMjc4ZDM3NWQyNzhkMzY4ZDI2OC41ZDM2MWQyNTlkMzYxZDIzNWhSM2Q2NTFSNGQ2MjZSNWQxNlI2ZDgzMFI3ZDhSOGQ4MTRSOWQ3NzlSMTBkNTQwUjExaTIyOFIxMmQxNlIxM2Q2NTFSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2hnOjExNW9SMWQxMjYzUjJhZDE3M2QxMDA0ZDI0NGQ5ODFkMzA1LjVkOTUwZDM2N2Q5MTlkNDA4LjVkODg5ZDQ1MGQ4NTlkNDY0LjVkODMzLjVkNDc5ZDgwOGQ0NTYuNWQ3OTVkNDM0ZDc4MmQzNjhkNzg2LjVkMzAyZDc5MWQxODFkODIxZDE0NWQ4MjBkMTE2LjVkODA3ZDg4ZDc5NGQ2OGQ3NzVkNDhkNzU2ZDM3LjVkNzMzLjVkMjdkNzExZDI3ZDY5MGQyN2Q2NTdkNDkuNWQ2MjQuNWQ3MmQ1OTJkMTEwZDU2M2QxNDhkNTM0ZDE5OGQ1MTAuNWQyNDhkNDg3ZDMwM2Q0NzIuNWQzNThkNDU4ZDQxNS41ZDQ1My41ZDQ3M2Q0NDlkNTI2ZDQ1OWQ1NTZkNDU5ZDU2MWQ0ODUuNWQ1NjZkNTEyZDU2NmQ1NzFkNTI1ZDU1MmQ0NzcuNWQ1NDRkNDMwZDUzNmQzODJkNTM4ZDMzNGQ1NDBkMjg5ZDU1MS41ZDI0NGQ1NjNkMjA5LjVkNTgzLjVkMTc1ZDYwNGQxNTNkNjM0ZDEzMWQ2NjRkMTMwZDcwMmQxMzBkNzIzZDE0Ni41ZDcyOS41ZDE2M2Q3MzZkMTg1LjVkNzM1LjVkMjA4ZDczNWQyMzIuNWQ3MzAuNWQyNTdkNzI2ZDI3MmQ3MjZkNDA3ZDY5N2Q0ODJkNzAyZDU1N2Q3MDdkNTgzZDczNGQ2MDlkNzYxZDU5MWQ4MDMuNWQ1NzNkODQ2ZDUyMS41ZDg5M2Q0NzBkOTQwZDM5MWQ5ODQuNWQzMTJkMTAyOWQyMTZkMTA2MGQyMTFkMTA2MGQyMDVkMTA1Mi41ZDE5OWQxMDQ1ZDE5Mi41ZDEwMzVkMTg2ZDEwMjVkMTgxZDEwMTZkMTc2ZDEwMDdkMTczZDEwMDRoUjNkNjQzUjRkNjA5UjVkMjdSNmQ1NzVSN2QtMzZSOGQ1NDhSOWQ3NzlSMTBkNTQwUjExaTExNVIxMmQyN1IxM2Q2NDNSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MjI3b1IxZDEyNjNSMmFkNTI1ZDgxN2Q0OTZkODYyZDQ1OGQ4OTguNWQ0MjBkOTM1ZDM3NC41ZDk2MC41ZDMyOWQ5ODZkMjc1LjVkOTk4ZDIyMmQxMDEwZDE2M2QxMDA1ZDE0MmQxMDA1ZDExOGQxMDAwZDk0ZDk5NWQ3My41ZDk4NGQ1M2Q5NzNkNDBkOTU1ZDI3ZDkzN2QyN2Q5MTBkMTZkODU0ZDMxLjVkNzk2LjVkNDdkNzM5ZDgwZDY4NS41ZDExM2Q2MzJkMTYxZDU4Ni41ZDIwOWQ1NDFkMjYzLjVkNTA5LjVkMzE4ZDQ3OGQzNzUuNWQ0NjRkNDMzZDQ1MGQ0ODdkNDYwZDUyOGQ0NjBkNTUxZDQ4N2Q1NzRkNTE0ZDU4NS41ZDU1OWQ1OTdkNjA0ZDYwMGQ2NjIuNWQ2MDNkNzIxZDYwNWQ3ODNkNjA3ZDg0NWQ2MTAuNWQ5MDUuNWQ2MTRkOTY2ZDYyNmQxMDE2ZDU1MmQxMDE2ZDU0N2Q5ODJkNTQ0LjVkOTU2ZDU0MmQ5MzBkNTQwZDkwNy41ZDUzOGQ4ODVkNTM0LjVkODY0ZDUzMWQ4NDNkNTI1ZDgxN2Q0NDlkNTUwZDQxMGQ1NDdkMzY4LjVkNTYwLjVkMzI3ZDU3NGQyODguNWQ1OTguNWQyNTBkNjIzZDIxNi41ZDY1Ni41ZDE4M2Q2OTBkMTU4ZDcyNmQxMzNkNzYyZDExOS41ZDc5Ny41ZDEwNmQ4MzNkMTA4LjVkODYzZDExMWQ4OTNkMTMxZDkxNGQxNTFkOTM1ZDE5M2Q5NDJkMjUzZDk0MWQzMDguNWQ5MTEuNWQzNjRkODgyZDQwNy41ZDgzOC41ZDQ1MWQ3OTVkNDgwZDc0NC41ZDUwOWQ2OTRkNTE3LjVkNjUxZDUyNmQ2MDhkNTEwZDU3OWQ0OTRkNTUwZDQ0OWQ1NTBkMjk5ZDM2N2QyNzRkMzQ1ZDI1NWQzMzBkMjM2ZDMxNWQyMTYuNWQzMTYuNWQxOTdkMzE4ZDE3My41ZDM0MC41ZDE1MGQzNjNkMTE0ZDQxNmQxMTBkNDE2ZDEwM2Q0MTVkOTZkNDE0ZDg5ZDQxMWQ4MmQ0MDhkNzZkNDAzZDcwZDM5OGQ2OGQzOTBkODdkMzMwZDEyNC41ZDI4NGQxNjJkMjM4ZDIwNGQyMjFkMjIxZDIxNGQyMzYuNWQyMjBkMjUyZDIyNmQyNjcuNWQyMzguNWQyODNkMjUxZDI5Ny41ZDI2Ny41ZDMxMmQyODRkMzI3LjVkMjk5ZDM0M2QzMTRkMzU5LjVkMzI0ZDM3NmQzMzRkMzk0ZDMzNGQ0MjJkMzM0ZDQzNy41ZDMyNS41ZDQ1M2QzMTdkNDY2ZDMwMC41ZDQ3OWQyODRkNDk0LjVkMjYwZDUxMGQyMzZkNTM4ZDIwNmQ1NDZkMjA2ZDU1NGQyMTkuNWQ1NjJkMjMzZDU2MmQyNDNkNTY3ZDI3MWQ1NTZkMjk4ZDU0NWQzMjVkNTIzLjVkMzQ3ZDUwMmQzNjlkNDcyLjVkMzg0ZDQ0M2QzOTlkNDEyZDQwMy41ZDM4MWQ0MDhkMzUxLjVkNDAwZDMyMmQzOTJkMjk5ZDM2N2hSM2Q2NTFSNGQ2MjZSNWQxNlI2ZDgxOFI3ZDhSOGQ4MDJSOWQ3NzlSMTBkNTQwUjExaTIyN1IxMmQxNlIxM2Q2NTFSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoxMTRvUjFkMTI2M1IyYWQzNGQ0NTJkMzRkNDMzZDQ3LjVkNDI3ZDYxZDQyMWQ3N2Q0MjFkMTAzZDQyMWQxMTguNWQ0NDIuNWQxMzRkNDY0ZDE0Mi41ZDQ5Mi41ZDE1MWQ1MjFkMTU0LjVkNTQ4LjVkMTU4ZDU3NmQxNjBkNTg4ZDE5N2Q1NTRkMjQzZDUyNWQyODlkNDk2ZDM0NS41ZDQ3NS41ZDQwMmQ0NTVkNDcxLjVkNDQ1LjVkNTQxZDQzNmQ2MjdkNDQxZDY1NGQ0MzVkNjY3LjVkNDUyLjVkNjgxZDQ3MGQ2ODNkNDk0ZDY4NWQ1MThkNjc1LjVkNTQxZDY2NmQ1NjRkNjQ3ZDU2OGQ2MTJkNTQyZDU2Mi41ZDUzNC41ZDUxM2Q1MjdkNDU5LjVkNTM1ZDQwNmQ1NDNkMzU0ZDU2NC41ZDMwMmQ1ODZkMjYxLjVkNjE5ZDIyMWQ2NTJkMTk3LjVkNjk1ZDE3NGQ3MzhkMTc4ZDc4OGQxNzhkODE5ZDE4MmQ4NDguNWQxODZkODc4ZDE5MC41ZDkwNy41ZDE5NWQ5MzdkMTk5ZDk2Ni41ZDIwM2Q5OTZkMjAzZDEwMjZkMTc2ZDEwMjhkMTU5LjVkMTAzM2QxNDNkMTAzOGQxMzJkMTAzNy41ZDEyMWQxMDM3ZDExM2QxMDI3LjVkMTA1ZDEwMThkOTVkOTg5ZDk0ZDk4MmQ5MGQ5NDdkODZkOTEyZDgwLjVkODYyZDc1ZDgxMmQ2OGQ3NTIuNWQ2MWQ2OTNkNTQuNWQ2MzUuNWQ0OGQ1NzhkNDIuNWQ1MjkuNWQzN2Q0ODFkMzRkNDUyaFIzZDcwNlI0ZDY4NVI1ZDM0UjZkNjAzUjdkLTE0UjhkNTY5UjlkNzc5UjEwZDU0MFIxMWkxMTRSMTJkMzRSMTNkNzA2UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoyMjZvUjFkMTI2M1IyYWQ1MjVkODE3ZDQ5NmQ4NjJkNDU4ZDg5OC41ZDQyMGQ5MzVkMzc0LjVkOTYwLjVkMzI5ZDk4NmQyNzUuNWQ5OThkMjIyZDEwMTBkMTYzZDEwMDVkMTQyZDEwMDVkMTE4ZDEwMDBkOTRkOTk1ZDczLjVkOTg0ZDUzZDk3M2Q0MGQ5NTVkMjdkOTM3ZDI3ZDkxMGQxNmQ4NTRkMzEuNWQ3OTYuNWQ0N2Q3MzlkODBkNjg1LjVkMTEzZDYzMmQxNjFkNTg2LjVkMjA5ZDU0MWQyNjMuNWQ1MDkuNWQzMThkNDc4ZDM3NS41ZDQ2NGQ0MzNkNDUwZDQ4N2Q0NjBkNTI4ZDQ2MGQ1NTFkNDg3ZDU3NGQ1MTRkNTg1LjVkNTU5ZDU5N2Q2MDRkNjAwZDY2Mi41ZDYwM2Q3MjFkNjA1ZDc4M2Q2MDdkODQ1ZDYxMC41ZDkwNS41ZDYxNGQ5NjZkNjI2ZDEwMTZkNTUyZDEwMTZkNTQ3ZDk4MmQ1NDQuNWQ5NTZkNTQyZDkzMGQ1NDBkOTA3LjVkNTM4ZDg4NWQ1MzQuNWQ4NjRkNTMxZDg0M2Q1MjVkODE3ZDQ0OWQ1NTBkNDEwZDU0N2QzNjguNWQ1NjAuNWQzMjdkNTc0ZDI4OC41ZDU5OC41ZDI1MGQ2MjNkMjE2LjVkNjU2LjVkMTgzZDY5MGQxNThkNzI2ZDEzM2Q3NjJkMTE5LjVkNzk3LjVkMTA2ZDgzM2QxMDguNWQ4NjNkMTExZDg5M2QxMzFkOTE0ZDE1MWQ5MzVkMTkzZDk0MmQyNTNkOTQxZDMwOC41ZDkxMS41ZDM2NGQ4ODJkNDA3LjVkODM4LjVkNDUxZDc5NWQ0ODBkNzQ0LjVkNTA5ZDY5NGQ1MTcuNWQ2NTFkNTI2ZDYwOGQ1MTBkNTc5ZDQ5NGQ1NTBkNDQ5ZDU1MGQxNDJkMzQyZDE0MmQzMjdkMTU1ZDMwNGQxNjhkMjgxZDE5MmQyNTYuNWQyMTZkMjMyZDI0OS41ZDIwNy41ZDI4M2QxODNkMzIzZDE2NWQzNTBkMTgyZDM3MC41ZDE5NS41ZDM5MWQyMDlkNDA5ZDIyNS41ZDQyN2QyNDJkNDQ1LjVkMjY1ZDQ2NGQyODhkNDg3ZDMyNWQ0OTVkMzQwZDQ5NS41ZDM1M2Q0OTZkMzY2ZDQ5MGQzNzRkNDg0ZDM4MmQ0NzIuNWQzODNkNDYxZDM4NGQ0NDVkMzc1ZDQyN2QzNjJkNDE3ZDM1NWQ0MDdkMzQ4ZDQwMWQzNDMuNWQzOTVkMzM5ZDM5MC41ZDMzNGQzODZkMzI5ZDM3Ny41ZDMyMC41ZDM2OWQzMTJkMzU0LjVkMjk3ZDM0MGQyODJkMzE0ZDI1NmQyODdkMjc1ZDI2Ny41ZDI5MWQyNDhkMzA3ZDIzNGQzMjIuNWQyMjBkMzM4ZDIxMC41ZDM1My41ZDIwMWQzNjlkMTk0ZDM4N2QxNzFkMzg3ZDE1Ni41ZDM4MC41ZDE0MmQzNzRkMTQyZDM0MmhSM2Q2NTFSNGQ2MjZSNWQxNlI2ZDg1OVI3ZDhSOGQ4NDNSOWQ3NzlSMTBkNTQwUjExaTIyNlIxMmQxNlIxM2Q2NTFSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaGc6MTEzb1IxZDEyNjNSMmFkNTI1ZDkyMWQ0OTlkOTQ1ZDQ2MGQ5NjVkNDIxZDk4NWQzNzhkOTk5ZDMzNWQxMDEzZDI5Mi41ZDEwMjAuNWQyNTBkMTAyOGQyMTZkMTAyOGQxOTNkMTAyOGQxNjMuNWQxMDIzZDEzNGQxMDE4ZDEwOGQxMDA2LjVkODJkOTk1ZDY0ZDk3NS41ZDQ2ZDk1NmQ0NmQ5MjdkNDJkODcwZDU4ZDgxN2Q3NGQ3NjRkMTA1ZDcxOC41ZDEzNmQ2NzNkMTgwZDYzNmQyMjRkNTk5ZDI3NWQ1NzMuNWQzMjZkNTQ4ZDM4MS41ZDUzNWQ0MzdkNTIyZDQ5MmQ1MjRkNTI4ZDUyNGQ1NTguNWQ1NTBkNTg5ZDU3NmQ2MDlkNjA5ZDYwOWQ4MjZkNjEwZDEwMzhkNjExZDEyNTBkNjI1ZDE0NjdkNjEzZDE0NjdkNjA1LjVkMTQ2N2Q1OThkMTQ2N2Q1OTAuNWQxNDY3LjVkNTgzZDE0NjhkNTcyLjVkMTQ2OGQ1NjJkMTQ2OGQ1NDRkMTQ2OGQ1MjVkOTIxZDE0MGQ4ODRkMTQwZDkwOGQxNDlkOTIxZDE1OGQ5MzRkMTczZDkzOS41ZDE4OGQ5NDVkMjA3ZDk0NS41ZDIyNmQ5NDZkMjQ2ZDk0NmQyODhkOTQ2ZDMzMS41ZDkzNy41ZDM3NWQ5MjlkNDEwLjVkOTA5ZDQ0NmQ4ODlkNDY5ZDg1NC41ZDQ5MmQ4MjBkNDkyZDc2OWQ0OTJkNzU4ZDQ5NS41ZDczMS41ZDQ5OWQ3MDVkNTAwZDY3Ny41ZDUwMWQ2NTBkNDk2ZDYyOWQ0OTFkNjA4ZDQ3NWQ2MDhkNDE1ZDYwOGQzNTUuNWQ2MjdkMjk2ZDY0NmQyNDhkNjgyZDIwMGQ3MThkMTcwZDc2OWQxNDBkODIwZDE0MGQ4ODRoUjNkNjU3UjRkNjI1UjVkNDJSNmQ1MDJSN2QtNDQ0UjhkNDYwUjlkNzc5UjEwZDU0MFIxMWkxMTNSMTJkNDJSMTNkNjU3UjE0YWkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNoZzoyMjVvUjFkMTI2M1IyYWQ1MjVkODE3ZDQ5NmQ4NjJkNDU4ZDg5OC41ZDQyMGQ5MzVkMzc0LjVkOTYwLjVkMzI5ZDk4NmQyNzUuNWQ5OThkMjIyZDEwMTBkMTYzZDEwMDVkMTQyZDEwMDVkMTE4ZDEwMDBkOTRkOTk1ZDczLjVkOTg0ZDUzZDk3M2Q0MGQ5NTVkMjdkOTM3ZDI3ZDkxMGQxNmQ4NTRkMzEuNWQ3OTYuNWQ0N2Q3MzlkODBkNjg1LjVkMTEzZDYzMmQxNjFkNTg2LjVkMjA5ZDU0MWQyNjMuNWQ1MDkuNWQzMThkNDc4ZDM3NS41ZDQ2NGQ0MzNkNDUwZDQ4N2Q0NjBkNTI4ZDQ2MGQ1NTFkNDg3ZDU3NGQ1MTRkNTg1LjVkNTU5ZDU5N2Q2MDRkNjAwZDY2Mi41ZDYwM2Q3MjFkNjA1ZDc4M2Q2MDdkODQ1ZDYxMC41ZDkwNS41ZDYxNGQ5NjZkNjI2ZDEwMTZkNTUyZDEwMTZkNTQ3ZDk4MmQ1NDQuNWQ5NTZkNTQyZDkzMGQ1NDBkOTA3LjVkNTM4ZDg4NWQ1MzQuNWQ4NjRkNTMxZDg0M2Q1MjVkODE3ZDQ0OWQ1NTBkNDEwZDU0N2QzNjguNWQ1NjAuNWQzMjdkNTc0ZDI4OC41ZDU5OC41ZDI1MGQ2MjNkMjE2LjVkNjU2LjVkMTgzZDY5MGQxNThkNzI2ZDEzM2Q3NjJkMTE5LjVkNzk3LjVkMTA2ZDgzM2QxMDguNWQ4NjNkMTExZDg5M2QxMzFkOTE0ZDE1MWQ5MzVkMTkzZDk0MmQyNTNkOTQxZDMwOC41ZDkxMS41ZDM2NGQ4ODJkNDA3LjVkODM4LjVkNDUxZDc5NWQ0ODBkNzQ0LjVkNTA5ZDY5NGQ1MTcuNWQ2NTFkNTI2ZDYwOGQ1MTBkNTc5ZDQ5NGQ1NTBkNDQ5ZDU1MGQzMzdkMjY4ZDM1MGQyNTJkMzYyZDI0N2QzNzRkMjQyZDM4MmQyNDUuNWQzOTBkMjQ5ZDM5NWQyNTguNWQ0MDBkMjY4ZDQwMGQyNzlkMzk3ZDI5MWQzOTIuNWQzMDAuNWQzODhkMzEwZDM3N2QzMjNkMzY2ZDMzNmQzNDVkMzU0LjVkMzI0ZDM3M2QyOTBkNDAxZDI1MWQzNjZkMzM3ZDI2OGhSM2Q2NTFSNGQ2MjZSNWQxNlI2ZDc4MlI3ZDhSOGQ3NjZSOWQ3NzlSMTBkNTQwUjExaTIyNVIxMmQxNlIxM2Q2NTFSMTRhaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTJpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kxaTNpM2kzaTNpM2kzaTNpM2kyaTJoZzoxMTJvUjFkMTI2M1IyYWQ3N2Q0OTZkODFkNDkyZDkyZDQ4N2QxMDNkNDgyZDExNWQ0ODIuNWQxMjdkNDgzZDEzOGQ0OTJkMTQ5ZDUwMWQxNTRkNTIzZDI5N2Q0NzVkMzk5ZDQ2Ny41ZDUwMWQ0NjBkNTY1ZDQ4MS41ZDYyOWQ1MDNkNjU3ZDU0Ny41ZDY4NWQ1OTJkNjgwZDY0Ny41ZDY3NWQ3MDNkNjM4LjVkNzY0ZDYwMmQ4MjVkNTM2LjVkODc5ZDQ3MWQ5MzNkMzc4LjVkOTc0LjVkMjg2ZDEwMTZkMTcwZDEwMzNkMTcwZDEwNDdkMTcwLjVkMTA3N2QxNzFkMTEwN2QxNzJkMTE0NWQxNzNkMTE4M2QxNzMuNWQxMjI1ZDE3NGQxMjY3ZDE3NWQxMzA1LjVkMTc2ZDEzNDRkMTc3LjVkMTM3NWQxNzlkMTQwNmQxODFkMTQyMWQxODdkMTQ2N2QxNjNkMTQ4Ni41ZDEzOWQxNTA2ZDk3ZDE1MDFkNzdkNDk2ZDQyM2Q1NDVkMzg0ZDU0NWQzMzdkNTU0ZDI5MGQ1NjNkMjQ5LjVkNTg0LjVkMjA5ZDYwNmQxODNkNjQyLjVkMTU3ZDY3OWQxNjBkNzMzZDE2MGQ5NDlkMjk5ZDkxOGQzODhkODc2ZDQ3N2Q4MzRkNTI0LjVkNzg5ZDU3MmQ3NDRkNTgzZDcwMGQ1OTRkNjU2ZDU3N2Q2MjEuNWQ1NjBkNTg3ZDUxOWQ1NjZkNDc4ZDU0NWQ0MjNkNTQ1aFIzZDcxM1I0ZDY4NVI1ZDc3UjZkNTY0UjdkLTQ4MlI4ZDQ4N1I5ZDc3OVIxMGQ1NDBSMTFpMTEyUjEyZDc3UjEzZDcxM1IxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkxaTNpM2kzaTNpMmkzaTNpM2kzaTNpM2hnOjIyNG9SMWQxMjYzUjJhZDUyNWQ4MTdkNDk2ZDg2MmQ0NThkODk4LjVkNDIwZDkzNWQzNzQuNWQ5NjAuNWQzMjlkOTg2ZDI3NS41ZDk5OGQyMjJkMTAxMGQxNjNkMTAwNWQxNDJkMTAwNWQxMThkMTAwMGQ5NGQ5OTVkNzMuNWQ5ODRkNTNkOTczZDQwZDk1NWQyN2Q5MzdkMjdkOTEwZDE2ZDg1NGQzMS41ZDc5Ni41ZDQ3ZDczOWQ4MGQ2ODUuNWQxMTNkNjMyZDE2MWQ1ODYuNWQyMDlkNTQxZDI2My41ZDUwOS41ZDMxOGQ0NzhkMzc1LjVkNDY0ZDQzM2Q0NTBkNDg3ZDQ2MGQ1MjhkNDYwZDU1MWQ0ODdkNTc0ZDUxNGQ1ODUuNWQ1NTlkNTk3ZDYwNGQ2MDBkNjYyLjVkNjAzZDcyMWQ2MDVkNzgzZDYwN2Q4NDVkNjEwLjVkOTA1LjVkNjE0ZDk2NmQ2MjZkMTAxNmQ1NTJkMTAxNmQ1NDdkOTgyZDU0NC41ZDk1NmQ1NDJkOTMwZDU0MGQ5MDcuNWQ1MzhkODg1ZDUzNC41ZDg2NGQ1MzFkODQzZDUyNWQ4MTdkNDQ5ZDU1MGQ0MTBkNTQ3ZDM2OC41ZDU2MC41ZDMyN2Q1NzRkMjg4LjVkNTk4LjVkMjUwZDYyM2QyMTYuNWQ2NTYuNWQxODNkNjkwZDE1OGQ3MjZkMTMzZDc2MmQxMTkuNWQ3OTcuNWQxMDZkODMzZDEwOC41ZDg2M2QxMTFkODkzZDEzMWQ5MTRkMTUxZDkzNWQxOTNkOTQyZDI1M2Q5NDFkMzA4LjVkOTExLjVkMzY0ZDg4MmQ0MDcuNWQ4MzguNWQ0NTFkNzk1ZDQ4MGQ3NDQuNWQ1MDlkNjk0ZDUxNy41ZDY1MWQ1MjZkNjA4ZDUxMGQ1NzlkNDk0ZDU1MGQ0NDlkNTUwZDM5M2QzNTNkMzcyZDQwN2QzNDBkMzg1ZDMyMWQzNzFkMzAyZDM1N2QyOTFkMzQ2ZDI4MGQzMzVkMjc0ZDMyNS41ZDI2OGQzMTZkMjY0ZDMwM2QyNjJkMjkwZDI2My41ZDI3OGQyNjVkMjY2ZDI3MWQyNTkuNWQyNzdkMjUzZDI4Ni41ZDI1NC41ZDI5NmQyNTZkMzA5ZDI3MWQzOTNkMzUzaFIzZDY1MVI0ZDYyNlI1ZDE2UjZkNzcxUjdkOFI4ZDc1NVI5ZDc3OVIxMGQ1NDBSMTFpMjI0UjEyZDE2UjEzZDY1MVIxNGFpMWkzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpMmkzaTNpM2kzaTFpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTNpM2kzaTFpMmkzaTNpM2kzaTNpM2kzaTNpMmhnaHk4OmZvbnROYW1leTIxOkFyY2hpdGVjdHMlMjBEYXVnaHRlcmc"}];
flash.display.DisplayObject.GRAPHICS_INVALID = 2;
flash.display.DisplayObject.MATRIX_INVALID = 4;
flash.display.DisplayObject.MATRIX_CHAIN_INVALID = 8;
flash.display.DisplayObject.MATRIX_OVERRIDDEN = 16;
flash.display.DisplayObject.TRANSFORM_INVALID = 32;
flash.display.DisplayObject.BOUNDS_INVALID = 64;
flash.display.DisplayObject.RENDER_VALIDATE_IN_PROGRESS = 1024;
flash.display.DisplayObject.ALL_RENDER_FLAGS = 98;
DefaultAssetLibrary.className = new haxe.ds.StringMap();
DefaultAssetLibrary.path = new haxe.ds.StringMap();
DefaultAssetLibrary.type = new haxe.ds.StringMap();
flash.text.Font.DEFAULT_FONT_DATA = "q:55oy6:ascentd950.5y4:dataad84d277.5d564d277.5d564d320.5d293d1024d187.5d1024d442.5d362.5d84d362.5d84d277.5hy6:_widthd651.5y4:xMaxd564y4:xMind84y4:yMaxd746.5y4:yMind0y7:_heightd662.5y7:leadingd168y7:descentd241.5y8:charCodei55y15:leftsideBearingd84y12:advanceWidthd651.5y8:commandsai1i2i2i2i2i2i2i2hg:111oR0d950.5R1ad313.5d528.5d239.5d528.5d196.5d586.25d153.5d644d153.5d744.5d153.5d845d196.25d902.75d239d960.5d313.5d960.5d387d960.5d430d902.5d473d844.5d473d744.5d473d645d430d586.75d387d528.5d313.5d528.5d313.5d450.5d433.5d450.5d502d528.5d570.5d606.5d570.5d744.5d570.5d882d502d960.25d433.5d1038.5d313.5d1038.5d193d1038.5d124.75d960.25d56.5d882d56.5d744.5d56.5d606.5d124.75d528.5d193d450.5d313.5d450.5hR2d626.5R3d570.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i111R11d56.5R12d626.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:54oR0d950.5R1ad338d610.5d270d610.5d230.25d657d190.5d703.5d190.5d784.5d190.5d865d230.25d911.75d270d958.5d338d958.5d406d958.5d445.75d911.75d485.5d865d485.5d784.5d485.5d703.5d445.75d657d406d610.5d338d610.5d538.5d294d538.5d386d500.5d368d461.75d358.5d423d349d385d349d285d349d232.25d416.5d179.5d484d172d620.5d201.5d577d246d553.75d290.5d530.5d344d530.5d456.5d530.5d521.75d598.75d587d667d587d784.5d587d899.5d519d969d451d1038.5d338d1038.5d208.5d1038.5d140d939.25d71.5d840d71.5d651.5d71.5d474.5d155.5d369.25d239.5d264d381d264d419d264d457.75d271.5d496.5d279d538.5d294hR2d651.5R3d587R4d71.5R5d760R6d-14.5R7d688.5R8d168R9d241.5R10i54R11d71.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3hg:110oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i110R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:53oR0d950.5R1ad110.5d277.5d507d277.5d507d362.5d203d362.5d203d545.5d225d538d247d534.25d269d530.5d291d530.5d416d530.5d489d599d562d667.5d562d784.5d562d905d487d971.75d412d1038.5d275.5d1038.5d228.5d1038.5d179.75d1030.5d131d1022.5d79d1006.5d79d905d124d929.5d172d941.5d220d953.5d273.5d953.5d360d953.5d410.5d908d461d862.5d461d784.5d461d706.5d410.5d661d360d615.5d273.5d615.5d233d615.5d192.75d624.5d152.5d633.5d110.5d652.5d110.5d277.5hR2d651.5R3d562R4d79R5d746.5R6d-14.5R7d667.5R8d168R9d241.5R10i53R11d79R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i2hg:109oR0d950.5R1ad532.5d571.5d567d509.5d615d480d663d450.5d728d450.5d815.5d450.5d863d511.75d910.5d573d910.5d686d910.5d1024d818d1024d818d689d818d608.5d789.5d569.5d761d530.5d702.5d530.5d631d530.5d589.5d578d548d625.5d548d707.5d548d1024d455.5d1024d455.5d689d455.5d608d427d569.25d398.5d530.5d339d530.5d268.5d530.5d227d578.25d185.5d626d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d217d499.5d261d475d305d450.5d365.5d450.5d426.5d450.5d469.25d481.5d512d512.5d532.5d571.5hR2d997.5R3d910.5R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i109R11d93R12d997.5R13ai1i3i3i3i3i2i2i2i3i3i3i3i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:52oR0d950.5R1ad387d365.5d132d764d387d764d387d365.5d360.5d277.5d487.5d277.5d487.5d764d594d764d594d848d487.5d848d487.5d1024d387d1024d387d848d50d848d50d750.5d360.5d277.5hR2d651.5R3d594R4d50R5d746.5R6d0R7d696.5R8d168R9d241.5R10i52R11d50R12d651.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2hg:108oR0d950.5R1ad96.5d246d188.5d246d188.5d1024d96.5d1024d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i108R11d96.5R12d284.5R13ai1i2i2i2i2hg:51oR0d950.5R1ad415.5d621.5d488d637d528.75d686d569.5d735d569.5d807d569.5d917.5d493.5d978d417.5d1038.5d277.5d1038.5d230.5d1038.5d180.75d1029.25d131d1020d78d1001.5d78d904d120d928.5d170d941d220d953.5d274.5d953.5d369.5d953.5d419.25d916d469d878.5d469d807d469d741d422.75d703.75d376.5d666.5d294d666.5d207d666.5d207d583.5d298d583.5d372.5d583.5d412d553.75d451.5d524d451.5d468d451.5d410.5d410.75d379.75d370d349d294d349d252.5d349d205d358d157.5d367d100.5d386d100.5d296d158d280d208.25d272d258.5d264d303d264d418d264d485d316.25d552d368.5d552d457.5d552d519.5d516.5d562.25d481d605d415.5d621.5hR2d651.5R3d569.5R4d78R5d760R6d-14.5R7d682R8d168R9d241.5R10i51R11d78R12d651.5R13ai1i3i3i3i3i3i3i2i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:107oR0d950.5R1ad93d246d185.5d246d185.5d705.5d460d464d577.5d464d280.5d726d590d1024d470d1024d185.5d750.5d185.5d1024d93d1024d93d246hR2d593R3d590R4d93R5d778R6d0R7d685R8d168R9d241.5R10i107R11d93R12d593R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:50oR0d950.5R1ad196.5d939d549d939d549d1024d75d1024d75d939d132.5d879.5d231.75d779.25d331d679d356.5d650d405d595.5d424.25d557.75d443.5d520d443.5d483.5d443.5d424d401.75d386.5d360d349d293d349d245.5d349d192.75d365.5d140d382d80d415.5d80d313.5d141d289d194d276.5d247d264d291d264d407d264d476d322d545d380d545d477d545d523d527.75d564.25d510.5d605.5d465d661.5d452.5d676d385.5d745.25d318.5d814.5d196.5d939hR2d651.5R3d549R4d75R5d760R6d0R7d685R8d168R9d241.5R10i50R11d75R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:106oR0d950.5R1ad96.5d464d188.5d464d188.5d1034d188.5d1141d147.75d1189d107d1237d16.5d1237d-18.5d1237d-18.5d1159d6d1159d58.5d1159d77.5d1134.75d96.5d1110.5d96.5d1034d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d-18.5R5d778R6d-213R7d796.5R8d168R9d241.5R10i106R11d-18.5R12d284.5R13ai1i2i2i3i3i2i2i2i3i3i2i1i2i2i2i2hg:49oR0d950.5R1ad127d939d292d939d292d369.5d112.5d405.5d112.5d313.5d291d277.5d392d277.5d392d939d557d939d557d1024d127d1024d127d939hR2d651.5R3d557R4d112.5R5d746.5R6d0R7d634R8d168R9d241.5R10i49R11d112.5R12d651.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:105oR0d950.5R1ad96.5d464d188.5d464d188.5d1024d96.5d1024d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i105R11d96.5R12d284.5R13ai1i2i2i2i2i1i2i2i2i2hg:48oR0d950.5R1ad325.5d344d247.5d344d208.25d420.75d169d497.5d169d651.5d169d805d208.25d881.75d247.5d958.5d325.5d958.5d404d958.5d443.25d881.75d482.5d805d482.5d651.5d482.5d497.5d443.25d420.75d404d344d325.5d344d325.5d264d451d264d517.25d363.25d583.5d462.5d583.5d651.5d583.5d840d517.25d939.25d451d1038.5d325.5d1038.5d200d1038.5d133.75d939.25d67.5d840d67.5d651.5d67.5d462.5d133.75d363.25d200d264d325.5d264hR2d651.5R3d583.5R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i48R11d67.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:104oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d246d185.5d246d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d778R6d0R7d685R8d168R9d241.5R10i104R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:47oR0d950.5R1ad260d277.5d345d277.5d85d1119d0d1119d260d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i47R11d0R12d345R13ai1i2i2i2i2hg:103oR0d950.5R1ad465d737.5d465d637.5d423.75d582.5d382.5d527.5d308d527.5d234d527.5d192.75d582.5d151.5d637.5d151.5d737.5d151.5d837d192.75d892d234d947d308d947d382.5d947d423.75d892d465d837d465d737.5d557d954.5d557d1097.5d493.5d1167.25d430d1237d299d1237d250.5d1237d207.5d1229.75d164.5d1222.5d124d1207.5d124d1118d164.5d1140d204d1150.5d243.5d1161d284.5d1161d375d1161d420d1113.75d465d1066.5d465d971d465d925.5d436.5d975d392d999.5d347.5d1024d285.5d1024d182.5d1024d119.5d945.5d56.5d867d56.5d737.5d56.5d607.5d119.5d529d182.5d450.5d285.5d450.5d347.5d450.5d392d475d436.5d499.5d465d549d465d464d557d464d557d954.5hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i103R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i2i3i3i3i3i2i3i3i3i3i3i3i3i3i2i2i2hg:46oR0d950.5R1ad109.5d897d215d897d215d1024d109.5d1024d109.5d897hR2d325.5R3d215R4d109.5R5d127R6d0R7d17.5R8d168R9d241.5R10i46R11d109.5R12d325.5R13ai1i2i2i2i2hg:102oR0d950.5R1ad380d246d380d322.5d292d322.5d242.5d322.5d223.25d342.5d204d362.5d204d414.5d204d464d355.5d464d355.5d535.5d204d535.5d204d1024d111.5d1024d111.5d535.5d23.5d535.5d23.5d464d111.5d464d111.5d425d111.5d331.5d155d288.75d198.5d246d293d246d380d246hR2d360.5R3d380R4d23.5R5d778R6d0R7d754.5R8d168R9d241.5R10i102R11d23.5R12d360.5R13ai1i2i2i3i3i2i2i2i2i2i2i2i2i2i2i2i3i3i2hg:45oR0d950.5R1ad50d702.5d319.5d702.5d319.5d784.5d50d784.5d50d702.5hR2d369.5R3d319.5R4d50R5d321.5R6d239.5R7d271.5R8d168R9d241.5R10i45R11d50R12d369.5R13ai1i2i2i2i2hg:101oR0d950.5R1ad575.5d721d575.5d766d152.5d766d158.5d861d209.75d910.75d261d960.5d352.5d960.5d405.5d960.5d455.25d947.5d505d934.5d554d908.5d554d995.5d504.5d1016.5d452.5d1027.5d400.5d1038.5d347d1038.5d213d1038.5d134.75d960.5d56.5d882.5d56.5d749.5d56.5d612d130.75d531.25d205d450.5d331d450.5d444d450.5d509.75d523.25d575.5d596d575.5d721d483.5d694d482.5d618.5d441.25d573.5d400d528.5d332d528.5d255d528.5d208.75d572d162.5d615.5d155.5d694.5d483.5d694hR2d630R3d575.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i101R11d56.5R12d630R13ai1i2i2i3i3i3i3i2i3i3i3i3i3i3i3i3i1i3i3i3i3i2hg:44oR0d950.5R1ad120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d325.5R3d225.5R4d79R5d127R6d-119R7d48R8d168R9d241.5R10i44R11d79R12d325.5R13ai1i2i2i2i2i2i2hg:100oR0d950.5R1ad465d549d465d246d557d246d557d1024d465d1024d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5hR2d650R3d557R4d56.5R5d778R6d-14.5R7d721.5R8d168R9d241.5R10i100R11d56.5R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:43oR0d950.5R1ad471d382d471d660.5d749.5d660.5d749.5d745.5d471d745.5d471d1024d387d1024d387d745.5d108.5d745.5d108.5d660.5d387d660.5d387d382d471d382hR2d858R3d749.5R4d108.5R5d642R6d0R7d533.5R8d168R9d241.5R10i43R11d108.5R12d858R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:99oR0d950.5R1ad499.5d485.5d499.5d571.5d460.5d550d421.25d539.25d382d528.5d342d528.5d252.5d528.5d203d585.25d153.5d642d153.5d744.5d153.5d847d203d903.75d252.5d960.5d342d960.5d382d960.5d421.25d949.75d460.5d939d499.5d917.5d499.5d1002.5d461d1020.5d419.75d1029.5d378.5d1038.5d332d1038.5d205.5d1038.5d131d959d56.5d879.5d56.5d744.5d56.5d607.5d131.75d529d207d450.5d338d450.5d380.5d450.5d421d459.25d461.5d468d499.5d485.5hR2d563R3d499.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i99R11d56.5R12d563R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:42oR0d950.5R1ad481.5d400.5d302d497.5d481.5d595d452.5d644d284.5d542.5d284.5d731d227.5d731d227.5d542.5d59.5d644d30.5d595d210d497.5d30.5d400.5d59.5d351d227.5d452.5d227.5d264d284.5d264d284.5d452.5d452.5d351d481.5d400.5hR2d512R3d481.5R4d30.5R5d760R6d293R7d729.5R8d168R9d241.5R10i42R11d30.5R12d512R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:98oR0d950.5R1ad498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d185.5d1024d93d1024d93d246d185.5d246d185.5d549hR2d650R3d594R4d93R5d778R6d-14.5R7d685R8d168R9d241.5R10i98R11d93R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:41oR0d950.5R1ad82d247d162d247d237d365d274.25d478d311.5d591d311.5d702.5d311.5d814.5d274.25d928d237d1041.5d162d1159d82d1159d148.5d1044.5d181.25d931.25d214d818d214d702.5d214d587d181.25d474.5d148.5d362d82d247hR2d399.5R3d311.5R4d82R5d777R6d-135R7d695R8d168R9d241.5R10i41R11d82R12d399.5R13ai1i2i3i3i3i3i2i3i3i3i3hg:97oR0d950.5R1ad351d742.5d239.5d742.5d196.5d768d153.5d793.5d153.5d855d153.5d904d185.75d932.75d218d961.5d273.5d961.5d350d961.5d396.25d907.25d442.5d853d442.5d763d442.5d742.5d351d742.5d534.5d704.5d534.5d1024d442.5d1024d442.5d939d411d990d364d1014.25d317d1038.5d249d1038.5d163d1038.5d112.25d990.25d61.5d942d61.5d861d61.5d766.5d124.75d718.5d188d670.5d313.5d670.5d442.5d670.5d442.5d661.5d442.5d598d400.75d563.25d359d528.5d283.5d528.5d235.5d528.5d190d540d144.5d551.5d102.5d574.5d102.5d489.5d153d470d200.5d460.25d248d450.5d293d450.5d414.5d450.5d474.5d513.5d534.5d576.5d534.5d704.5hR2d627.5R3d534.5R4d61.5R5d573.5R6d-14.5R7d512R8d168R9d241.5R10i97R11d61.5R12d627.5R13ai1i3i3i3i3i3i3i2i2i1i2i2i2i3i3i3i3i3i3i2i2i3i3i3i3i2i3i3i3i3hg:40oR0d950.5R1ad317.5d247d250.5d362d218d474.5d185.5d587d185.5d702.5d185.5d818d218.25d931.25d251d1044.5d317.5d1159d237.5d1159d162.5d1041.5d125.25d928d88d814.5d88d702.5d88d591d125d478d162d365d237.5d247d317.5d247hR2d399.5R3d317.5R4d88R5d777R6d-135R7d689R8d168R9d241.5R10i40R11d88R12d399.5R13ai1i3i3i3i3i2i3i3i3i3i2hg:96oR0d950.5R1ad183.5d205d324.5d392d248d392d85d205d183.5d205hR2d512R3d324.5R4d85R5d819R6d632R7d734R8d168R9d241.5R10i96R11d85R12d512R13ai1i2i2i2i2hg:39oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5hR2d281.5R3d183.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i39R11d98.5R12d281.5R13ai1i2i2i2i2hg:95oR0d950.5R1ad522d1194d522d1265.5d-10d1265.5d-10d1194d522d1194hR2d512R3d522R4d-10R5d-170R6d-241.5R7d-160R8d168R9d241.5R10i95R11d-10R12d512R13ai1i2i2i2i2hg:38oR0d950.5R1ad249d622.5d203.5d663d182.25d703.25d161d743.5d161d787.5d161d860.5d214d909d267d957.5d347d957.5d394.5d957.5d436d941.75d477.5d926d514d894d249d622.5d319.5d566.5d573.5d826.5d603d782d619.5d731.25d636d680.5d639d623.5d732d623.5d726d689.5d700d754d674d818.5d627.5d881.5d767d1024d641d1024d569.5d950.5d517.5d995d460.5d1016.75d403.5d1038.5d338d1038.5d217.5d1038.5d141d969.75d64.5d901d64.5d793.5d64.5d729.5d98d673.25d131.5d617d198.5d567.5d174.5d536d162d504.75d149.5d473.5d149.5d443.5d149.5d362.5d205d313.25d260.5d264d352.5d264d394d264d435.25d273d476.5d282d519d300d519d391d475.5d367.5d436d355.25d396.5d343d362.5d343d310d343d277.25d370.75d244.5d398.5d244.5d442.5d244.5d468d259.25d493.75d274d519.5d319.5d566.5hR2d798.5R3d767R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i38R11d64.5R12d798.5R13ai1i3i3i3i3i3i3i2i1i2i3i3i2i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3hg:94oR0d950.5R1ad478d277.5d749.5d556d649d556d429d358.5d209d556d108.5d556d380d277.5d478d277.5hR2d858R3d749.5R4d108.5R5d746.5R6d468R7d638R8d168R9d241.5R10i94R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:37oR0d950.5R1ad744.5d695.5d701d695.5d676.25d732.5d651.5d769.5d651.5d835.5d651.5d900.5d676.25d937.75d701d975d744.5d975d787d975d811.75d937.75d836.5d900.5d836.5d835.5d836.5d770d811.75d732.75d787d695.5d744.5d695.5d744.5d632d823.5d632d870d687d916.5d742d916.5d835.5d916.5d929d869.75d983.75d823d1038.5d744.5d1038.5d664.5d1038.5d618d983.75d571.5d929d571.5d835.5d571.5d741.5d618.25d686.75d665d632d744.5d632d228.5d327.5d185.5d327.5d160.75d364.75d136d402d136d467d136d533d160.5d570d185d607d228.5d607d272d607d296.75d570d321.5d533d321.5d467d321.5d402.5d296.5d365d271.5d327.5d228.5d327.5d680d264d760d264d293d1038.5d213d1038.5d680d264d228.5d264d307.5d264d354.5d318.75d401.5d373.5d401.5d467d401.5d561.5d354.75d616d308d670.5d228.5d670.5d149d670.5d102.75d615.75d56.5d561d56.5d467d56.5d374d103d319d149.5d264d228.5d264hR2d973R3d916.5R4d56.5R5d760R6d-14.5R7d703.5R8d168R9d241.5R10i37R11d56.5R12d973R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i2i2i2i2i1i3i3i3i3i3i3i3i3hg:93oR0d950.5R1ad311.5d246d311.5d1159d99.5d1159d99.5d1087.5d219d1087.5d219d317.5d99.5d317.5d99.5d246d311.5d246hR2d399.5R3d311.5R4d99.5R5d778R6d-135R7d678.5R8d168R9d241.5R10i93R11d99.5R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:36oR0d950.5R1ad346d1174.5d296d1174.5d295.5d1024d243d1023d190.5d1011.75d138d1000.5d85d978d85d888d136d920d188.25d936.25d240.5d952.5d296d953d296d725d185.5d707d135.25d664d85d621d85d546d85d464.5d139.5d417.5d194d370.5d296d363.5d296d246d346d246d346d362d392.5d364d436d371.75d479.5d379.5d521d393d521d480.5d479.5d459.5d435.75d448d392d436.5d346d434.5d346d648d459.5d665.5d513d710.5d566.5d755.5d566.5d833.5d566.5d918d509.75d966.75d453d1015.5d346d1023d346d1174.5d296d639d296d434d238d440.5d207.5d467d177d493.5d177d537.5d177d580.5d205.25d604.5d233.5d628.5d296d639d346d735d346d951.5d409.5d943d441.75d915.5d474d888d474d843d474d799d443.25d773d412.5d747d346d735hR2d651.5R3d566.5R4d85R5d778R6d-150.5R7d693R8d168R9d241.5R10i36R11d85R12d651.5R13ai1i2i2i3i3i2i3i3i2i3i3i3i3i2i2i2i3i3i2i3i3i2i3i3i3i3i2i1i2i3i3i3i3i1i2i3i3i3i3hg:92oR0d950.5R1ad85d277.5d345d1119d260d1119d0d277.5d85d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i92R11d0R12d345R13ai1i2i2i2i2hg:35oR0d950.5R1ad523.5d573.5d378d573.5d336d740.5d482.5d740.5d523.5d573.5d448.5d289d396.5d496.5d542.5d496.5d595d289d675d289d623.5d496.5d779.5d496.5d779.5d573.5d604d573.5d563d740.5d722d740.5d722d817d543.5d817d491.5d1024d411.5d1024d463d817d316.5d817d265d1024d184.5d1024d236.5d817d79d817d79d740.5d255d740.5d297d573.5d136d573.5d136d496.5d316.5d496.5d367.5d289d448.5d289hR2d858R3d779.5R4d79R5d735R6d0R7d656R8d168R9d241.5R10i35R11d79R12d858R13ai1i2i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:91oR0d950.5R1ad88d246d300d246d300d317.5d180d317.5d180d1087.5d300d1087.5d300d1159d88d1159d88d246hR2d399.5R3d300R4d88R5d778R6d-135R7d690R8d168R9d241.5R10i91R11d88R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:34oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5d372.5d277.5d372.5d555d287.5d555d287.5d277.5d372.5d277.5hR2d471R3d372.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i34R11d98.5R12d471R13ai1i2i2i2i2i1i2i2i2i2hg:90oR0d950.5R1ad57.5d277.5d644d277.5d644d354.5d172d939d655.5d939d655.5d1024d46d1024d46d947d518d362.5d57.5d362.5d57.5d277.5hR2d701.5R3d655.5R4d46R5d746.5R6d0R7d700.5R8d168R9d241.5R10i90R11d46R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:33oR0d950.5R1ad154.5d897d256d897d256d1024d154.5d1024d154.5d897d154.5d277.5d256d277.5d256d605d246d783.5d165d783.5d154.5d605d154.5d277.5hR2d410.5R3d256R4d154.5R5d746.5R6d0R7d592R8d168R9d241.5R10i33R11d154.5R12d410.5R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:89oR0d950.5R1ad-2d277.5d106.5d277.5d313.5d584.5d519d277.5d627.5d277.5d363.5d668.5d363.5d1024d262d1024d262d668.5d-2d277.5hR2d625.5R3d627.5R4d-2R5d746.5R6d0R7d748.5R8d168R9d241.5R10i89R11d-2R12d625.5R13ai1i2i2i2i2i2i2i2i2i2hg:32oR0d950.5R1ahR2d325.5R3d0R4d0R5d0R6d0R7d0R8d168R9d241.5R10i32R11d0R12d325.5R13ahg:88oR0d950.5R1ad64.5d277.5d173d277.5d358.5d555d545d277.5d653.5d277.5d413.5d636d669.5d1024d561d1024d351d706.5d139.5d1024d30.5d1024d297d625.5d64.5d277.5hR2d701.5R3d669.5R4d30.5R5d746.5R6d0R7d716R8d168R9d241.5R10i88R11d30.5R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:87oR0d950.5R1ad34d277.5d136d277.5d293d908.5d449.5d277.5d563d277.5d720d908.5d876.5d277.5d979d277.5d791.5d1024d664.5d1024d507d376d348d1024d221d1024d34d277.5hR2d1012.5R3d979R4d34R5d746.5R6d0R7d712.5R8d168R9d241.5R10i87R11d34R12d1012.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:86oR0d950.5R1ad293d1024d8d277.5d113.5d277.5d350d906d587d277.5d692d277.5d407.5d1024d293d1024hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i86R11d8R12d700.5R13ai1i2i2i2i2i2i2i2hg:85oR0d950.5R1ad89d277.5d190.5d277.5d190.5d731d190.5d851d234d903.75d277.5d956.5d375d956.5d472d956.5d515.5d903.75d559d851d559d731d559d277.5d660.5d277.5d660.5d743.5d660.5d889.5d588.25d964d516d1038.5d375d1038.5d233.5d1038.5d161.25d964d89d889.5d89d743.5d89d277.5hR2d749.5R3d660.5R4d89R5d746.5R6d-14.5R7d657.5R8d168R9d241.5R10i85R11d89R12d749.5R13ai1i2i2i3i3i3i3i2i2i2i3i3i3i3i2hg:84oR0d950.5R1ad-3d277.5d628.5d277.5d628.5d362.5d363.5d362.5d363.5d1024d262d1024d262d362.5d-3d362.5d-3d277.5hR2d625.5R3d628.5R4d-3R5d746.5R6d0R7d749.5R8d168R9d241.5R10i84R11d-3R12d625.5R13ai1i2i2i2i2i2i2i2i2hg:83oR0d950.5R1ad548d302d548d400.5d490.5d373d439.5d359.5d388.5d346d341d346d258.5d346d213.75d378d169d410d169d469d169d518.5d198.75d543.75d228.5d569d311.5d584.5d372.5d597d485.5d618.5d539.25d672.75d593d727d593d818d593d926.5d520.25d982.5d447.5d1038.5d307d1038.5d254d1038.5d194.25d1026.5d134.5d1014.5d70.5d991d70.5d887d132d921.5d191d939d250d956.5d307d956.5d393.5d956.5d440.5d922.5d487.5d888.5d487.5d825.5d487.5d770.5d453.75d739.5d420d708.5d343d693d281.5d681d168.5d658.5d118d610.5d67.5d562.5d67.5d477d67.5d378d137.25d321d207d264d329.5d264d382d264d436.5d273.5d491d283d548d302hR2d650R3d593R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i83R11d67.5R12d650R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:82oR0d950.5R1ad454.5d674d487d685d517.75d721d548.5d757d579.5d820d682d1024d573.5d1024d478d832.5d441d757.5d406.25d733d371.5d708.5d311.5d708.5d201.5d708.5d201.5d1024d100.5d1024d100.5d277.5d328.5d277.5d456.5d277.5d519.5d331d582.5d384.5d582.5d492.5d582.5d563d549.75d609.5d517d656d454.5d674d201.5d360.5d201.5d625.5d328.5d625.5d401.5d625.5d438.75d591.75d476d558d476d492.5d476d427d438.75d393.75d401.5d360.5d328.5d360.5d201.5d360.5hR2d711.5R3d682R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i82R11d100.5R12d711.5R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i3i3i3i3i1i2i2i3i3i3i3i2hg:81oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d545d1010.5d678d1156d556d1156d445.5d1036.5d429d1037.5d420.25d1038d411.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.25d57.5d828d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d781.5d696.25d874d644d966.5d545d1010.5hR2d806R3d748.5R4d57.5R5d760R6d-132R7d702.5R8d168R9d241.5R10i81R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i2i2i2i3i3i3i3i3i3i3i3i3i3hg:80oR0d950.5R1ad201.5d360.5d201.5d641d328.5d641d399d641d437.5d604.5d476d568d476d500.5d476d433.5d437.5d397d399d360.5d328.5d360.5d201.5d360.5d100.5d277.5d328.5d277.5d454d277.5d518.25d334.25d582.5d391d582.5d500.5d582.5d611d518.25d667.5d454d724d328.5d724d201.5d724d201.5d1024d100.5d1024d100.5d277.5hR2d617.5R3d582.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i80R11d100.5R12d617.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2i2i2hg:79oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d828d654.5d933.25d560.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.5d57.5d828.5d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264hR2d806R3d748.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i79R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:78oR0d950.5R1ad100.5d277.5d236.5d277.5d567.5d902d567.5d277.5d665.5d277.5d665.5d1024d529.5d1024d198.5d399.5d198.5d1024d100.5d1024d100.5d277.5hR2d766R3d665.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i78R11d100.5R12d766R13ai1i2i2i2i2i2i2i2i2i2i2hg:77oR0d950.5R1ad100.5d277.5d251d277.5d441.5d785.5d633d277.5d783.5d277.5d783.5d1024d685d1024d685d368.5d492.5d880.5d391d880.5d198.5d368.5d198.5d1024d100.5d1024d100.5d277.5hR2d883.5R3d783.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i77R11d100.5R12d883.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:76oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d939d565d939d565d1024d100.5d1024d100.5d277.5hR2d570.5R3d565R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i76R11d100.5R12d570.5R13ai1i2i2i2i2i2i2hg:75oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d593d536.5d277.5d666.5d277.5d296d625.5d693d1024d560d1024d201.5d664.5d201.5d1024d100.5d1024d100.5d277.5hR2d671.5R3d693R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i75R11d100.5R12d671.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:74oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d972d201.5d1107d150.25d1168d99d1229d-14.5d1229d-53d1229d-53d1144d-21.5d1144d45.5d1144d73d1106.5d100.5d1069d100.5d972d100.5d277.5hR2d302R3d201.5R4d-53R5d746.5R6d-205R7d799.5R8d168R9d241.5R10i74R11d-53R12d302R13ai1i2i2i3i3i2i2i2i3i3i2hg:73oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d1024d100.5d1024d100.5d277.5hR2d302R3d201.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i73R11d100.5R12d302R13ai1i2i2i2i2hg:72oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d583.5d568.5d583.5d568.5d277.5d669.5d277.5d669.5d1024d568.5d1024d568.5d668.5d201.5d668.5d201.5d1024d100.5d1024d100.5d277.5hR2d770R3d669.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i72R11d100.5R12d770R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:71oR0d950.5R1ad609.5d917.5d609.5d717d444.5d717d444.5d634d709.5d634d709.5d954.5d651d996d580.5d1017.25d510d1038.5d430d1038.5d255d1038.5d156.25d936.25d57.5d834d57.5d651.5d57.5d468.5d156.25d366.25d255d264d430d264d503d264d568.75d282d634.5d300d690d335d690d442.5d634d395d571d371d508d347d438.5d347d301.5d347d232.75d423.5d164d500d164d651.5d164d802.5d232.75d879d301.5d955.5d438.5d955.5d492d955.5d534d946.25d576d937d609.5d917.5hR2d793.5R3d709.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i71R11d57.5R12d793.5R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:70oR0d950.5R1ad100.5d277.5d529.5d277.5d529.5d362.5d201.5d362.5d201.5d582.5d497.5d582.5d497.5d667.5d201.5d667.5d201.5d1024d100.5d1024d100.5d277.5hR2d589R3d529.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i70R11d100.5R12d589R13ai1i2i2i2i2i2i2i2i2i2i2hg:126oR0d950.5R1ad749.5d615.5d749.5d704.5d697d744d652.25d761d607.5d778d559d778d504d778d431d748.5d425.5d746.5d423d745.5d419.5d744d412d741.5d334.5d710.5d287.5d710.5d243.5d710.5d200.5d729.75d157.5d749d108.5d790.5d108.5d701.5d161d662d205.75d644.75d250.5d627.5d299d627.5d354d627.5d427.5d657.5d432.5d659.5d435d660.5d439d662d446d664.5d523.5d695.5d570.5d695.5d613.5d695.5d655.75d676.5d698d657.5d749.5d615.5hR2d858R3d749.5R4d108.5R5d408.5R6d233.5R7d300R8d168R9d241.5R10i126R11d108.5R12d858R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:69oR0d950.5R1ad100.5d277.5d572.5d277.5d572.5d362.5d201.5d362.5d201.5d583.5d557d583.5d557d668.5d201.5d668.5d201.5d939d581.5d939d581.5d1024d100.5d1024d100.5d277.5hR2d647R3d581.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i69R11d100.5R12d647R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:125oR0d950.5R1ad128d1119d163d1119d233d1119d254.25d1097.5d275.5d1076d275.5d1004.5d275.5d880.5d275.5d802.5d298d767d320.5d731.5d376d718d320.5d705.5d298d670d275.5d634.5d275.5d556d275.5d432d275.5d361d254.25d339.25d233d317.5d163d317.5d128d317.5d128d246d159.5d246d284d246d325.75d282.75d367.5d319.5d367.5d430d367.5d550d367.5d624.5d394.5d653.25d421.5d682d492.5d682d523.5d682d523.5d753.5d492.5d753.5d421.5d753.5d394.5d782.5d367.5d811.5d367.5d887d367.5d1006.5d367.5d1117d325.75d1154d284d1191d159.5d1191d128d1191d128d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i125R11d128R12d651.5R13ai1i2i3i3i2i3i3i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2hg:68oR0d950.5R1ad201.5d360.5d201.5d941d323.5d941d478d941d549.75d871d621.5d801d621.5d650d621.5d500d549.75d430.25d478d360.5d323.5d360.5d201.5d360.5d100.5d277.5d308d277.5d525d277.5d626.5d367.75d728d458d728d650d728d843d626d933.5d524d1024d308d1024d100.5d1024d100.5d277.5hR2d788.5R3d728R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i68R11d100.5R12d788.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2hg:124oR0d950.5R1ad215d241.5d215d1265.5d130d1265.5d130d241.5d215d241.5hR2d345R3d215R4d130R5d782.5R6d-241.5R7d652.5R8d168R9d241.5R10i124R11d130R12d345R13ai1i2i2i2i2hg:67oR0d950.5R1ad659.5d335d659.5d441.5d608.5d394d550.75d370.5d493d347d428d347d300d347d232d425.25d164d503.5d164d651.5d164d799d232d877.25d300d955.5d428d955.5d493d955.5d550.75d932d608.5d908.5d659.5d861d659.5d966.5d606.5d1002.5d547.25d1020.5d488d1038.5d422d1038.5d252.5d1038.5d155d934.75d57.5d831d57.5d651.5d57.5d471.5d155d367.75d252.5d264d422d264d489d264d548.25d281.75d607.5d299.5d659.5d335hR2d715R3d659.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i67R11d57.5R12d715R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:123oR0d950.5R1ad523.5d1119d523.5d1191d492.5d1191d368d1191d325.75d1154d283.5d1117d283.5d1006.5d283.5d887d283.5d811.5d256.5d782.5d229.5d753.5d158.5d753.5d128d753.5d128d682d158.5d682d230d682d256.75d653.25d283.5d624.5d283.5d550d283.5d430d283.5d319.5d325.75d282.75d368d246d492.5d246d523.5d246d523.5d317.5d489.5d317.5d419d317.5d397.5d339.5d376d361.5d376d432d376d556d376d634.5d353.25d670d330.5d705.5d275.5d718d331d731.5d353.5d767d376d802.5d376d880.5d376d1004.5d376d1075d397.5d1097d419d1119d489.5d1119d523.5d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i123R11d128R12d651.5R13ai1i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i3i3i2i3i3i2hg:66oR0d950.5R1ad201.5d667.5d201.5d941d363.5d941d445d941d484.25d907.25d523.5d873.5d523.5d804d523.5d734d484.25d700.75d445d667.5d363.5d667.5d201.5d667.5d201.5d360.5d201.5d585.5d351d585.5d425d585.5d461.25d557.75d497.5d530d497.5d473d497.5d416.5d461.25d388.5d425d360.5d351d360.5d201.5d360.5d100.5d277.5d358.5d277.5d474d277.5d536.5d325.5d599d373.5d599d462d599d530.5d567d571d535d611.5d473d621.5d547.5d637.5d588.75d688.25d630d739d630d815d630d915d562d969.5d494d1024d368.5d1024d100.5d1024d100.5d277.5hR2d702.5R3d630R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i66R11d100.5R12d702.5R13ai1i2i2i3i3i3i3i2i1i2i2i3i3i3i3i2i1i2i3i3i3i3i3i3i3i3i2i2hg:122oR0d950.5R1ad56.5d464d493.5d464d493.5d548d147.5d950.5d493.5d950.5d493.5d1024d44d1024d44d940d390d537.5d56.5d537.5d56.5d464hR2d537.5R3d493.5R4d44R5d560R6d0R7d516R8d168R9d241.5R10i122R11d44R12d537.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:65oR0d950.5R1ad350d377d213d748.5d487.5d748.5d350d377d293d277.5d407.5d277.5d692d1024d587d1024d519d832.5d182.5d832.5d114.5d1024d8d1024d293d277.5hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i65R11d8R12d700.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2hg:121oR0d950.5R1ad329.5d1076d290.5d1176d253.5d1206.5d216.5d1237d154.5d1237d81d1237d81d1160d135d1160d173d1160d194d1142d215d1124d240.5d1057d257d1015d30.5d464d128d464d303d902d478d464d575.5d464d329.5d1076hR2d606R3d575.5R4d30.5R5d560R6d-213R7d529.5R8d168R9d241.5R10i121R11d30.5R12d606R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i2i2hg:64oR0d950.5R1ad381d755.5d381d827d416.5d867.75d452d908.5d514d908.5d575.5d908.5d610.75d867.5d646d826.5d646d755.5d646d685.5d610d644.25d574d603d513d603d452.5d603d416.75d644d381d685d381d755.5d653.5d905d623.5d943.5d584.75d961.75d546d980d494.5d980d408.5d980d354.75d917.75d301d855.5d301d755.5d301d655.5d355d593d409d530.5d494.5d530.5d546d530.5d585d549.25d624d568d653.5d606d653.5d540.5d725d540.5d725d908.5d798d897.5d839.25d841.75d880.5d786d880.5d697.5d880.5d644d864.75d597d849d550d817d510d765d444.5d690.25d409.75d615.5d375d527.5d375d466d375d409.5d391.25d353d407.5d305d439.5d226.5d490.5d182.25d573.25d138d656d138d752.5d138d832d166.75d901.5d195.5d971d250d1024d302.5d1076d371.5d1103.25d440.5d1130.5d519d1130.5d583.5d1130.5d645.75d1108.75d708d1087d760d1046.5d805d1102d742.5d1150.5d668.75d1176.25d595d1202d519d1202d426.5d1202d344.5d1169.25d262.5d1136.5d198.5d1074d134.5d1011.5d101d929.25d67.5d847d67.5d752.5d67.5d661.5d101.5d579d135.5d496.5d198.5d434d263d370.5d347.5d336.75d432d303d526.5d303d632.5d303d723.25d346.5d814d390d875.5d470d913d519d932.75d576.5d952.5d634d952.5d695.5d952.5d827d873d903d793.5d979d653.5d982d653.5d905hR2d1024R3d952.5R4d67.5R5d721R6d-178R7d653.5R8d168R9d241.5R10i64R11d67.5R12d1024R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2hg:120oR0d950.5R1ad562d464d359.5d736.5d572.5d1024d464d1024d301d804d138d1024d29.5d1024d247d731d48d464d156.5d464d305d663.5d453.5d464d562d464hR2d606R3d572.5R4d29.5R5d560R6d0R7d530.5R8d168R9d241.5R10i120R11d29.5R12d606R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:63oR0d950.5R1ad195.5d897d297d897d297d1024d195.5d1024d195.5d897d294d823.5d198.5d823.5d198.5d746.5d198.5d696d212.5d663.5d226.5d631d271.5d588d316.5d543.5d345d517d357.75d493.5d370.5d470d370.5d445.5d370.5d401d337.75d373.5d305d346d251d346d211.5d346d166.75d363.5d122d381d73.5d414.5d73.5d320.5d120.5d292d168.75d278d217d264d268.5d264d360.5d264d416.25d312.5d472d361d472d440.5d472d478.5d454d512.75d436d547d391d590d347d633d323.5d656.5d313.75d669.75d304d683d300d695.5d297d706d295.5d721d294d736d294d762d294d823.5hR2d543.5R3d472R4d73.5R5d760R6d0R7d686.5R8d168R9d241.5R10i63R11d73.5R12d543.5R13ai1i2i2i2i2i1i2i2i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i2hg:119oR0d950.5R1ad43d464d135d464d250d901d364.5d464d473d464d588d901d702.5d464d794.5d464d648d1024d539.5d1024d419d565d298d1024d189.5d1024d43d464hR2d837.5R3d794.5R4d43R5d560R6d0R7d517R8d168R9d241.5R10i119R11d43R12d837.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:62oR0d950.5R1ad108.5d520d108.5d429d749.5d661.5d749.5d744.5d108.5d977d108.5d886d623.5d703.5d108.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i62R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:118oR0d950.5R1ad30.5d464d128d464d303d934d478d464d575.5d464d365.5d1024d240.5d1024d30.5d464hR2d606R3d575.5R4d30.5R5d560R6d0R7d529.5R8d168R9d241.5R10i118R11d30.5R12d606R13ai1i2i2i2i2i2i2i2hg:61oR0d950.5R1ad108.5d559d749.5d559d749.5d643d108.5d643d108.5d559d108.5d763d749.5d763d749.5d848d108.5d848d108.5d763hR2d858R3d749.5R4d108.5R5d465R6d176R7d356.5R8d168R9d241.5R10i61R11d108.5R12d858R13ai1i2i2i2i2i1i2i2i2i2hg:117oR0d950.5R1ad87d803d87d464d179d464d179d799.5d179d879d210d918.75d241d958.5d303d958.5d377.5d958.5d420.75d911d464d863.5d464d781.5d464d464d556d464d556d1024d464d1024d464d938d430.5d989d386.25d1013.75d342d1038.5d283.5d1038.5d187d1038.5d137d978.5d87d918.5d87d803hR2d649R3d556R4d87R5d560R6d-14.5R7d473R8d168R9d241.5R10i117R11d87R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:60oR0d950.5R1ad749.5d520d233.5d703.5d749.5d886d749.5d977d108.5d744.5d108.5d661.5d749.5d429d749.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i60R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:116oR0d950.5R1ad187.5d305d187.5d464d377d464d377d535.5d187.5d535.5d187.5d839.5d187.5d908d206.25d927.5d225d947d282.5d947d377d947d377d1024d282.5d1024d176d1024d135.5d984.25d95d944.5d95d839.5d95d535.5d27.5d535.5d27.5d464d95d464d95d305d187.5d305hR2d401.5R3d377R4d27.5R5d719R6d0R7d691.5R8d168R9d241.5R10i116R11d27.5R12d401.5R13ai1i2i2i2i2i2i3i3i2i2i2i3i3i2i2i2i2i2i2hg:59oR0d950.5R1ad120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5d120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d345R3d225.5R4d79R5d529.5R6d-119R7d450.5R8d168R9d241.5R10i59R11d79R12d345R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:115oR0d950.5R1ad453.5d480.5d453.5d567.5d414.5d547.5d372.5d537.5d330.5d527.5d285.5d527.5d217d527.5d182.75d548.5d148.5d569.5d148.5d611.5d148.5d643.5d173d661.75d197.5d680d271.5d696.5d303d703.5d401d724.5d442.25d762.75d483.5d801d483.5d869.5d483.5d947.5d421.75d993d360d1038.5d252d1038.5d207d1038.5d158.25d1029.75d109.5d1021d55.5d1003.5d55.5d908.5d106.5d935d156d948.25d205.5d961.5d254d961.5d319d961.5d354d939.25d389d917d389d876.5d389d839d363.75d819d338.5d799d253d780.5d221d773d135.5d755d97.5d717.75d59.5d680.5d59.5d615.5d59.5d536.5d115.5d493.5d171.5d450.5d274.5d450.5d325.5d450.5d370.5d458d415.5d465.5d453.5d480.5hR2d533.5R3d483.5R4d55.5R5d573.5R6d-14.5R7d518R8d168R9d241.5R10i115R11d55.5R12d533.5R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:58oR0d950.5R1ad120d897d225.5d897d225.5d1024d120d1024d120d897d120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5hR2d345R3d225.5R4d120R5d529.5R6d0R7d409.5R8d168R9d241.5R10i58R11d120R12d345R13ai1i2i2i2i2i1i2i2i2i2hg:114oR0d950.5R1ad421d550d405.5d541d387.25d536.75d369d532.5d347d532.5d269d532.5d227.25d583.25d185.5d634d185.5d729d185.5d1024d93d1024d93d464d185.5d464d185.5d551d214.5d500d261d475.25d307.5d450.5d374d450.5d383.5d450.5d395d451.75d406.5d453d420.5d455.5d421d550hR2d421R3d421R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i114R11d93R12d421R13ai1i3i3i3i3i2i2i2i2i2i3i3i3i3i2hg:57oR0d950.5R1ad112.5d1008.5d112.5d916.5d150.5d934.5d189.5d944d228.5d953.5d266d953.5d366d953.5d418.75d886.25d471.5d819d479d682d450d725d405.5d748d361d771d307d771d195d771d129.75d703.25d64.5d635.5d64.5d518d64.5d403d132.5d333.5d200.5d264d313.5d264d443d264d511.25d363.25d579.5d462.5d579.5d651.5d579.5d828d495.75d933.25d412d1038.5d270.5d1038.5d232.5d1038.5d193.5d1031d154.5d1023.5d112.5d1008.5d313.5d692d381.5d692d421.25d645.5d461d599d461d518d461d437.5d421.25d390.75d381.5d344d313.5d344d245.5d344d205.75d390.75d166d437.5d166d518d166d599d205.75d645.5d245.5d692d313.5d692hR2d651.5R3d579.5R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i57R11d64.5R12d651.5R13ai1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:113oR0d950.5R1ad151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d465d464d557d464d557d1237d465d1237d465d940hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i113R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:56oR0d950.5R1ad325.5d669.5d253.5d669.5d212.25d708d171d746.5d171d814d171d881.5d212.25d920d253.5d958.5d325.5d958.5d397.5d958.5d439d919.75d480.5d881d480.5d814d480.5d746.5d439.25d708d398d669.5d325.5d669.5d224.5d626.5d159.5d610.5d123.25d566d87d521.5d87d457.5d87d368d150.75d316d214.5d264d325.5d264d437d264d500.5d316d564d368d564d457.5d564d521.5d527.75d566d491.5d610.5d427d626.5d500d643.5d540.75d693d581.5d742.5d581.5d814d581.5d922.5d515.25d980.5d449d1038.5d325.5d1038.5d202d1038.5d135.75d980.5d69.5d922.5d69.5d814d69.5d742.5d110.5d693d151.5d643.5d224.5d626.5d187.5d467d187.5d525d223.75d557.5d260d590d325.5d590d390.5d590d427.25d557.5d464d525d464d467d464d409d427.25d376.5d390.5d344d325.5d344d260d344d223.75d376.5d187.5d409d187.5d467hR2d651.5R3d581.5R4d69.5R5d760R6d-14.5R7d690.5R8d168R9d241.5R10i56R11d69.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:112oR0d950.5R1ad185.5d940d185.5d1237d93d1237d93d464d185.5d464d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5hR2d650R3d594R4d93R5d573.5R6d-213R7d480.5R8d168R9d241.5R10i112R11d93R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hgh";
flash.text.Font.DEFAULT_FONT_SCALE = 9.0;
flash.text.Font.DEFAULT_FONT_NAME = "Bitstream_Vera_Sans";
flash.text.Font.DEFAULT_CLASS_NAME = "flash.text.Font";
flash.text.Font.__registeredFonts = new Array();
flash.events.Event.ACTIVATE = "activate";
flash.events.Event.ADDED = "added";
flash.events.Event.ADDED_TO_STAGE = "addedToStage";
flash.events.Event.CANCEL = "cancel";
flash.events.Event.CHANGE = "change";
flash.events.Event.CLOSE = "close";
flash.events.Event.COMPLETE = "complete";
flash.events.Event.CONNECT = "connect";
flash.events.Event.CONTEXT3D_CREATE = "context3DCreate";
flash.events.Event.DEACTIVATE = "deactivate";
flash.events.Event.ENTER_FRAME = "enterFrame";
flash.events.Event.ID3 = "id3";
flash.events.Event.INIT = "init";
flash.events.Event.MOUSE_LEAVE = "mouseLeave";
flash.events.Event.OPEN = "open";
flash.events.Event.REMOVED = "removed";
flash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
flash.events.Event.RENDER = "render";
flash.events.Event.RESIZE = "resize";
flash.events.Event.SCROLL = "scroll";
flash.events.Event.SELECT = "select";
flash.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
flash.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
flash.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
flash.events.Event.UNLOAD = "unload";
flash.events.Event.SOUND_COMPLETE = "soundComplete";
com.saumya.catchThemAll.events.LifeEvent.END = "lifeEndEvent";
com.saumya.catchThemAll.events.UserSelectionEvent.SELECTED = "userSelectedEvent";
com.saumya.catchThemAll.ui.HomeView.OK_EVENT = "okEvent";
com.saumya.core.events.UserEvent.GENERIC = "userGenericEvent";
com.saumya.core.events.UserEvent.MODAL_LAYER_CLICK = "userModalLayerClickEvent";
flash.Lib.HTML_ACCELEROMETER_EVENT_TYPE = "devicemotion";
flash.Lib.HTML_ORIENTATION_EVENT_TYPE = "orientationchange";
flash.Lib.DEFAULT_HEIGHT = 500;
flash.Lib.DEFAULT_WIDTH = 500;
flash.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseover","mouseout","mousewheel","dblclick","click"];
flash.Lib.HTML_TOUCH_EVENT_TYPES = ["touchstart","touchmove","touchend"];
flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES = ["mousedown","mousemove","mouseup"];
flash.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown","resize","blur","focus"];
flash.Lib.NME_IDENTIFIER = "haxe:openfl";
flash.Lib.VENDOR_HTML_TAG = "data-";
flash.Lib.starttime = haxe.Timer.stamp();
flash.display._BitmapData.MinstdGenerator.a = 16807;
flash.display._BitmapData.MinstdGenerator.m = -2147483648 - 1;
flash.display.BitmapDataChannel.ALPHA = 8;
flash.display.BitmapDataChannel.BLUE = 4;
flash.display.BitmapDataChannel.GREEN = 2;
flash.display.BitmapDataChannel.RED = 1;
flash.display.Graphics.TILE_SCALE = 1;
flash.display.Graphics.TILE_ROTATION = 2;
flash.display.Graphics.TILE_RGB = 4;
flash.display.Graphics.TILE_ALPHA = 8;
flash.display.Graphics.TILE_TRANS_2x2 = 16;
flash.display.Graphics.TILE_BLEND_NORMAL = 0;
flash.display.Graphics.TILE_BLEND_ADD = 65536;
flash.display.Graphics.BMP_REPEAT = 16;
flash.display.Graphics.BMP_SMOOTH = 65536;
flash.display.Graphics.CORNER_ROUND = 0;
flash.display.Graphics.CORNER_MITER = 4096;
flash.display.Graphics.CORNER_BEVEL = 8192;
flash.display.Graphics.CURVE = 2;
flash.display.Graphics.END_NONE = 0;
flash.display.Graphics.END_ROUND = 256;
flash.display.Graphics.END_SQUARE = 512;
flash.display.Graphics.LINE = 1;
flash.display.Graphics.MOVE = 0;
flash.display.Graphics.__MAX_DIM = 5000;
flash.display.Graphics.PIXEL_HINTING = 16384;
flash.display.Graphics.RADIAL = 1;
flash.display.Graphics.SCALE_HORIZONTAL = 2;
flash.display.Graphics.SCALE_NONE = 0;
flash.display.Graphics.SCALE_NORMAL = 3;
flash.display.Graphics.SCALE_VERTICAL = 1;
flash.display.Graphics.SPREAD_REPEAT = 2;
flash.display.Graphics.SPREAD_REFLECT = 4;
flash.display.GraphicsPathCommand.LINE_TO = 2;
flash.display.GraphicsPathCommand.MOVE_TO = 1;
flash.display.GraphicsPathCommand.CURVE_TO = 3;
flash.display.GraphicsPathCommand.WIDE_LINE_TO = 5;
flash.display.GraphicsPathCommand.WIDE_MOVE_TO = 4;
flash.display.GraphicsPathCommand.NO_OP = 0;
flash.display.GraphicsPathCommand.CUBIC_CURVE_TO = 6;
flash.events.MouseEvent.CLICK = "click";
flash.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
flash.events.MouseEvent.MOUSE_DOWN = "mouseDown";
flash.events.MouseEvent.MOUSE_MOVE = "mouseMove";
flash.events.MouseEvent.MOUSE_OUT = "mouseOut";
flash.events.MouseEvent.MOUSE_OVER = "mouseOver";
flash.events.MouseEvent.MOUSE_UP = "mouseUp";
flash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
flash.events.MouseEvent.RIGHT_CLICK = "rightClick";
flash.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
flash.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
flash.events.MouseEvent.ROLL_OUT = "rollOut";
flash.events.MouseEvent.ROLL_OVER = "rollOver";
flash.display.Stage.NAME = "Stage";
flash.display.Stage.OrientationPortrait = 1;
flash.display.Stage.OrientationPortraitUpsideDown = 2;
flash.display.Stage.OrientationLandscapeRight = 3;
flash.display.Stage.OrientationLandscapeLeft = 4;
flash.display.Stage.__acceleration = { x : 0.0, y : 1.0, z : 0.0};
flash.display.Stage.DEFAULT_FRAMERATE = 0.0;
flash.display.Stage.UI_EVENTS_QUEUE_MAX = 1000;
flash.display.Stage.__mouseChanges = [flash.events.MouseEvent.MOUSE_OUT,flash.events.MouseEvent.MOUSE_OVER,flash.events.MouseEvent.ROLL_OUT,flash.events.MouseEvent.ROLL_OVER];
flash.display.Stage.__touchChanges = ["touchOut","touchOver","touchRollOut","touchRollOver"];
flash.display.StageQuality.BEST = "best";
flash.display.StageQuality.HIGH = "high";
flash.display.StageQuality.MEDIUM = "medium";
flash.display.StageQuality.LOW = "low";
flash.errors.Error.DEFAULT_TO_STRING = "Error";
flash.events.TextEvent.LINK = "link";
flash.events.TextEvent.TEXT_INPUT = "textInput";
flash.events.ErrorEvent.ERROR = "error";
flash.events.Listener.sIDs = 1;
flash.events.EventPhase.CAPTURING_PHASE = 0;
flash.events.EventPhase.AT_TARGET = 1;
flash.events.EventPhase.BUBBLING_PHASE = 2;
flash.events.FocusEvent.FOCUS_IN = "focusIn";
flash.events.FocusEvent.FOCUS_OUT = "focusOut";
flash.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
flash.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
flash.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
flash.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
flash.events.IOErrorEvent.IO_ERROR = "ioError";
flash.events.KeyboardEvent.KEY_DOWN = "keyDown";
flash.events.KeyboardEvent.KEY_UP = "keyUp";
flash.events.ProgressEvent.PROGRESS = "progress";
flash.events.ProgressEvent.SOCKET_DATA = "socketData";
flash.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";
flash.events.TimerEvent.TIMER = "timer";
flash.events.TimerEvent.TIMER_COMPLETE = "timerComplete";
flash.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
flash.events.TouchEvent.TOUCH_END = "touchEnd";
flash.events.TouchEvent.TOUCH_MOVE = "touchMove";
flash.events.TouchEvent.TOUCH_OUT = "touchOut";
flash.events.TouchEvent.TOUCH_OVER = "touchOver";
flash.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
flash.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
flash.events.TouchEvent.TOUCH_TAP = "touchTap";
flash.filters.DropShadowFilter.DEGREES_FULL_RADIUS = 360.0;
flash.geom.Transform.DEG_TO_RAD = Math.PI / 180.0;
flash.media.Sound.EXTENSION_MP3 = "mp3";
flash.media.Sound.EXTENSION_OGG = "ogg";
flash.media.Sound.EXTENSION_WAV = "wav";
flash.media.Sound.EXTENSION_AAC = "aac";
flash.media.Sound.MEDIA_TYPE_MP3 = "audio/mpeg";
flash.media.Sound.MEDIA_TYPE_OGG = "audio/ogg; codecs=\"vorbis\"";
flash.media.Sound.MEDIA_TYPE_WAV = "audio/wav; codecs=\"1\"";
flash.media.Sound.MEDIA_TYPE_AAC = "audio/mp4; codecs=\"mp4a.40.2\"";
flash.net.URLRequestMethod.DELETE = "DELETE";
flash.net.URLRequestMethod.GET = "GET";
flash.net.URLRequestMethod.HEAD = "HEAD";
flash.net.URLRequestMethod.OPTIONS = "OPTIONS";
flash.net.URLRequestMethod.POST = "POST";
flash.net.URLRequestMethod.PUT = "PUT";
flash.system.ApplicationDomain.currentDomain = new flash.system.ApplicationDomain(null);
flash.system.SecurityDomain.currentDomain = new flash.system.SecurityDomain();
flash.text.TextField.mDefaultFont = "Bitstream_Vera_Sans";
flash.text.FontInstance.mSolidFonts = new haxe.ds.StringMap();
flash.text.TextFieldAutoSize.CENTER = "CENTER";
flash.text.TextFieldAutoSize.LEFT = "LEFT";
flash.text.TextFieldAutoSize.NONE = "NONE";
flash.text.TextFieldAutoSize.RIGHT = "RIGHT";
flash.text.TextFieldType.DYNAMIC = "DYNAMIC";
flash.text.TextFieldType.INPUT = "INPUT";
flash.ui.Keyboard.NUMBER_0 = 48;
flash.ui.Keyboard.NUMBER_1 = 49;
flash.ui.Keyboard.NUMBER_2 = 50;
flash.ui.Keyboard.NUMBER_3 = 51;
flash.ui.Keyboard.NUMBER_4 = 52;
flash.ui.Keyboard.NUMBER_5 = 53;
flash.ui.Keyboard.NUMBER_6 = 54;
flash.ui.Keyboard.NUMBER_7 = 55;
flash.ui.Keyboard.NUMBER_8 = 56;
flash.ui.Keyboard.NUMBER_9 = 57;
flash.ui.Keyboard.A = 65;
flash.ui.Keyboard.B = 66;
flash.ui.Keyboard.C = 67;
flash.ui.Keyboard.D = 68;
flash.ui.Keyboard.E = 69;
flash.ui.Keyboard.F = 70;
flash.ui.Keyboard.G = 71;
flash.ui.Keyboard.H = 72;
flash.ui.Keyboard.I = 73;
flash.ui.Keyboard.J = 74;
flash.ui.Keyboard.K = 75;
flash.ui.Keyboard.L = 76;
flash.ui.Keyboard.M = 77;
flash.ui.Keyboard.N = 78;
flash.ui.Keyboard.O = 79;
flash.ui.Keyboard.P = 80;
flash.ui.Keyboard.Q = 81;
flash.ui.Keyboard.R = 82;
flash.ui.Keyboard.S = 83;
flash.ui.Keyboard.T = 84;
flash.ui.Keyboard.U = 85;
flash.ui.Keyboard.V = 86;
flash.ui.Keyboard.W = 87;
flash.ui.Keyboard.X = 88;
flash.ui.Keyboard.Y = 89;
flash.ui.Keyboard.Z = 90;
flash.ui.Keyboard.NUMPAD_0 = 96;
flash.ui.Keyboard.NUMPAD_1 = 97;
flash.ui.Keyboard.NUMPAD_2 = 98;
flash.ui.Keyboard.NUMPAD_3 = 99;
flash.ui.Keyboard.NUMPAD_4 = 100;
flash.ui.Keyboard.NUMPAD_5 = 101;
flash.ui.Keyboard.NUMPAD_6 = 102;
flash.ui.Keyboard.NUMPAD_7 = 103;
flash.ui.Keyboard.NUMPAD_8 = 104;
flash.ui.Keyboard.NUMPAD_9 = 105;
flash.ui.Keyboard.NUMPAD_MULTIPLY = 106;
flash.ui.Keyboard.NUMPAD_ADD = 107;
flash.ui.Keyboard.NUMPAD_ENTER = 108;
flash.ui.Keyboard.NUMPAD_SUBTRACT = 109;
flash.ui.Keyboard.NUMPAD_DECIMAL = 110;
flash.ui.Keyboard.NUMPAD_DIVIDE = 111;
flash.ui.Keyboard.F1 = 112;
flash.ui.Keyboard.F2 = 113;
flash.ui.Keyboard.F3 = 114;
flash.ui.Keyboard.F4 = 115;
flash.ui.Keyboard.F5 = 116;
flash.ui.Keyboard.F6 = 117;
flash.ui.Keyboard.F7 = 118;
flash.ui.Keyboard.F8 = 119;
flash.ui.Keyboard.F9 = 120;
flash.ui.Keyboard.F10 = 121;
flash.ui.Keyboard.F11 = 122;
flash.ui.Keyboard.F12 = 123;
flash.ui.Keyboard.F13 = 124;
flash.ui.Keyboard.F14 = 125;
flash.ui.Keyboard.F15 = 126;
flash.ui.Keyboard.BACKSPACE = 8;
flash.ui.Keyboard.TAB = 9;
flash.ui.Keyboard.ENTER = 13;
flash.ui.Keyboard.SHIFT = 16;
flash.ui.Keyboard.CONTROL = 17;
flash.ui.Keyboard.CAPS_LOCK = 18;
flash.ui.Keyboard.ESCAPE = 27;
flash.ui.Keyboard.SPACE = 32;
flash.ui.Keyboard.PAGE_UP = 33;
flash.ui.Keyboard.PAGE_DOWN = 34;
flash.ui.Keyboard.END = 35;
flash.ui.Keyboard.HOME = 36;
flash.ui.Keyboard.LEFT = 37;
flash.ui.Keyboard.RIGHT = 39;
flash.ui.Keyboard.UP = 38;
flash.ui.Keyboard.DOWN = 40;
flash.ui.Keyboard.INSERT = 45;
flash.ui.Keyboard.DELETE = 46;
flash.ui.Keyboard.NUMLOCK = 144;
flash.ui.Keyboard.BREAK = 19;
flash.ui.Keyboard.SEMICOLON = 186;
flash.ui.Keyboard.EQUAL = 187;
flash.ui.Keyboard.COMMA = 188;
flash.ui.Keyboard.MINUS = 189;
flash.ui.Keyboard.PERIOD = 190;
flash.ui.Keyboard.SLASH = 191;
flash.ui.Keyboard.BACKQUOTE = 192;
flash.ui.Keyboard.LEFTBRACKET = 219;
flash.ui.Keyboard.BACKSLASH = 220;
flash.ui.Keyboard.RIGHTBRACKET = 221;
flash.ui.Keyboard.DOM_VK_CANCEL = 3;
flash.ui.Keyboard.DOM_VK_HELP = 6;
flash.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
flash.ui.Keyboard.DOM_VK_TAB = 9;
flash.ui.Keyboard.DOM_VK_CLEAR = 12;
flash.ui.Keyboard.DOM_VK_RETURN = 13;
flash.ui.Keyboard.DOM_VK_ENTER = 14;
flash.ui.Keyboard.DOM_VK_SHIFT = 16;
flash.ui.Keyboard.DOM_VK_CONTROL = 17;
flash.ui.Keyboard.DOM_VK_ALT = 18;
flash.ui.Keyboard.DOM_VK_PAUSE = 19;
flash.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
flash.ui.Keyboard.DOM_VK_ESCAPE = 27;
flash.ui.Keyboard.DOM_VK_SPACE = 32;
flash.ui.Keyboard.DOM_VK_PAGE_UP = 33;
flash.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
flash.ui.Keyboard.DOM_VK_END = 35;
flash.ui.Keyboard.DOM_VK_HOME = 36;
flash.ui.Keyboard.DOM_VK_LEFT = 37;
flash.ui.Keyboard.DOM_VK_UP = 38;
flash.ui.Keyboard.DOM_VK_RIGHT = 39;
flash.ui.Keyboard.DOM_VK_DOWN = 40;
flash.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
flash.ui.Keyboard.DOM_VK_INSERT = 45;
flash.ui.Keyboard.DOM_VK_DELETE = 46;
flash.ui.Keyboard.DOM_VK_0 = 48;
flash.ui.Keyboard.DOM_VK_1 = 49;
flash.ui.Keyboard.DOM_VK_2 = 50;
flash.ui.Keyboard.DOM_VK_3 = 51;
flash.ui.Keyboard.DOM_VK_4 = 52;
flash.ui.Keyboard.DOM_VK_5 = 53;
flash.ui.Keyboard.DOM_VK_6 = 54;
flash.ui.Keyboard.DOM_VK_7 = 55;
flash.ui.Keyboard.DOM_VK_8 = 56;
flash.ui.Keyboard.DOM_VK_9 = 57;
flash.ui.Keyboard.DOM_VK_SEMICOLON = 59;
flash.ui.Keyboard.DOM_VK_EQUALS = 61;
flash.ui.Keyboard.DOM_VK_A = 65;
flash.ui.Keyboard.DOM_VK_B = 66;
flash.ui.Keyboard.DOM_VK_C = 67;
flash.ui.Keyboard.DOM_VK_D = 68;
flash.ui.Keyboard.DOM_VK_E = 69;
flash.ui.Keyboard.DOM_VK_F = 70;
flash.ui.Keyboard.DOM_VK_G = 71;
flash.ui.Keyboard.DOM_VK_H = 72;
flash.ui.Keyboard.DOM_VK_I = 73;
flash.ui.Keyboard.DOM_VK_J = 74;
flash.ui.Keyboard.DOM_VK_K = 75;
flash.ui.Keyboard.DOM_VK_L = 76;
flash.ui.Keyboard.DOM_VK_M = 77;
flash.ui.Keyboard.DOM_VK_N = 78;
flash.ui.Keyboard.DOM_VK_O = 79;
flash.ui.Keyboard.DOM_VK_P = 80;
flash.ui.Keyboard.DOM_VK_Q = 81;
flash.ui.Keyboard.DOM_VK_R = 82;
flash.ui.Keyboard.DOM_VK_S = 83;
flash.ui.Keyboard.DOM_VK_T = 84;
flash.ui.Keyboard.DOM_VK_U = 85;
flash.ui.Keyboard.DOM_VK_V = 86;
flash.ui.Keyboard.DOM_VK_W = 87;
flash.ui.Keyboard.DOM_VK_X = 88;
flash.ui.Keyboard.DOM_VK_Y = 89;
flash.ui.Keyboard.DOM_VK_Z = 90;
flash.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
flash.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
flash.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
flash.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
flash.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
flash.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
flash.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
flash.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
flash.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
flash.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
flash.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
flash.ui.Keyboard.DOM_VK_MULTIPLY = 106;
flash.ui.Keyboard.DOM_VK_ADD = 107;
flash.ui.Keyboard.DOM_VK_SEPARATOR = 108;
flash.ui.Keyboard.DOM_VK_SUBTRACT = 109;
flash.ui.Keyboard.DOM_VK_DECIMAL = 110;
flash.ui.Keyboard.DOM_VK_DIVIDE = 111;
flash.ui.Keyboard.DOM_VK_F1 = 112;
flash.ui.Keyboard.DOM_VK_F2 = 113;
flash.ui.Keyboard.DOM_VK_F3 = 114;
flash.ui.Keyboard.DOM_VK_F4 = 115;
flash.ui.Keyboard.DOM_VK_F5 = 116;
flash.ui.Keyboard.DOM_VK_F6 = 117;
flash.ui.Keyboard.DOM_VK_F7 = 118;
flash.ui.Keyboard.DOM_VK_F8 = 119;
flash.ui.Keyboard.DOM_VK_F9 = 120;
flash.ui.Keyboard.DOM_VK_F10 = 121;
flash.ui.Keyboard.DOM_VK_F11 = 122;
flash.ui.Keyboard.DOM_VK_F12 = 123;
flash.ui.Keyboard.DOM_VK_F13 = 124;
flash.ui.Keyboard.DOM_VK_F14 = 125;
flash.ui.Keyboard.DOM_VK_F15 = 126;
flash.ui.Keyboard.DOM_VK_F16 = 127;
flash.ui.Keyboard.DOM_VK_F17 = 128;
flash.ui.Keyboard.DOM_VK_F18 = 129;
flash.ui.Keyboard.DOM_VK_F19 = 130;
flash.ui.Keyboard.DOM_VK_F20 = 131;
flash.ui.Keyboard.DOM_VK_F21 = 132;
flash.ui.Keyboard.DOM_VK_F22 = 133;
flash.ui.Keyboard.DOM_VK_F23 = 134;
flash.ui.Keyboard.DOM_VK_F24 = 135;
flash.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
flash.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
flash.ui.Keyboard.DOM_VK_COMMA = 188;
flash.ui.Keyboard.DOM_VK_PERIOD = 190;
flash.ui.Keyboard.DOM_VK_SLASH = 191;
flash.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
flash.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
flash.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
flash.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
flash.ui.Keyboard.DOM_VK_QUOTE = 222;
flash.ui.Keyboard.DOM_VK_META = 224;
flash.ui.Keyboard.DOM_VK_KANA = 21;
flash.ui.Keyboard.DOM_VK_HANGUL = 21;
flash.ui.Keyboard.DOM_VK_JUNJA = 23;
flash.ui.Keyboard.DOM_VK_FINAL = 24;
flash.ui.Keyboard.DOM_VK_HANJA = 25;
flash.ui.Keyboard.DOM_VK_KANJI = 25;
flash.ui.Keyboard.DOM_VK_CONVERT = 28;
flash.ui.Keyboard.DOM_VK_NONCONVERT = 29;
flash.ui.Keyboard.DOM_VK_ACEPT = 30;
flash.ui.Keyboard.DOM_VK_MODECHANGE = 31;
flash.ui.Keyboard.DOM_VK_SELECT = 41;
flash.ui.Keyboard.DOM_VK_PRINT = 42;
flash.ui.Keyboard.DOM_VK_EXECUTE = 43;
flash.ui.Keyboard.DOM_VK_SLEEP = 95;
flash.utils.Endian.BIG_ENDIAN = "bigEndian";
flash.utils.Endian.LITTLE_ENDIAN = "littleEndian";
flash.utils.Uuid.UID_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
haxe.Template.splitter = new EReg("(::[A-Za-z0-9_ ()&|!+=/><*.\"-]+::|\\$\\$([A-Za-z0-9_-]+)\\()","");
haxe.Template.expr_splitter = new EReg("(\\(|\\)|[ \r\n\t]*\"[^\"]*\"[ \r\n\t]*|[!+=/><*.&|-]+)","");
haxe.Template.expr_trim = new EReg("^[ ]*([^ ]+)[ ]*$","");
haxe.Template.expr_int = new EReg("^[0-9]+$","");
haxe.Template.expr_float = new EReg("^([+-]?)(?=\\d|,\\d)\\d*(,\\d*)?([Ee]([+-]?\\d+))?$","");
haxe.Template.globals = { };
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.ds.ObjectMap.count = 0;
js.Browser.window = typeof window != "undefined" ? window : null;
js.Browser.document = typeof window != "undefined" ? window.document : null;
motion.actuators.SimpleActuator.actuators = new Array();
motion.actuators.SimpleActuator.actuatorsLength = 0;
motion.actuators.SimpleActuator.addedEvent = false;
motion.Actuate.defaultActuator = motion.actuators.SimpleActuator;
motion.Actuate.defaultEase = motion.easing.Expo.get_easeOut();
motion.Actuate.targetLibraries = new haxe.ds.ObjectMap();
openfl.Assets.cache = new openfl.AssetCache();
openfl.Assets.libraries = new haxe.ds.StringMap();
openfl.Assets.initialized = false;
openfl.display.Tilesheet.TILE_SCALE = 1;
openfl.display.Tilesheet.TILE_ROTATION = 2;
openfl.display.Tilesheet.TILE_RGB = 4;
openfl.display.Tilesheet.TILE_ALPHA = 8;
openfl.display.Tilesheet.TILE_TRANS_2x2 = 16;
openfl.display.Tilesheet.TILE_BLEND_NORMAL = 0;
openfl.display.Tilesheet.TILE_BLEND_ADD = 65536;
openfl.display.Tilesheet.TILE_BLEND_MULTIPLY = 131072;
openfl.display.Tilesheet.TILE_BLEND_SCREEN = 262144;
ApplicationMain.main();
})();
