package com.saumya.catchThemAll.ui;
import com.saumya.core.events.UserEvent;
import flash.display.Graphics;
import flash.display.Sprite;
import flash.events.MouseEvent;

/**
 * ...
 * @author saumya
 */
class ModalLayer extends Sprite
{
	private var widthX:Float;
	private var heightX:Float;
	
	public function new() 
	{
		super();
		this.initialize(100,200);//just a default setting
	}
	
	private function initialize(newWidth:Float,newHeight:Float):Void 
	{
		this.addEventListener(MouseEvent.CLICK, onUserClick);
		this.widthX = newWidth;
		this.heightX = newHeight;
		this.construct();
	}
	public function reInitialize(newWidth:Float,newHeight:Float):Void
	{
		this.widthX = newWidth;
		this.heightX = newHeight;
		this.construct();
	}
	
	private function construct():Void
	{
		this.render();
	}
	
	private function onUserClick(e:MouseEvent):Void 
	{
		var ev:UserEvent = new UserEvent(UserEvent.MODAL_LAYER_CLICK);
		this.dispatchEvent(ev);
	}
	
	private function render() 
	{
		var g:Graphics = this.graphics;
		g.clear();
		g.beginFill(0xFFFFFF, 0.5);
		g.drawRect(0, 0, this.widthX, this.heightX);
		g.endFill();
	}
	
}