package com.saumya.catchThemAll.ui;

import flash.display.Bitmap;
import flash.display.Sprite;
import flash.events.MouseEvent;

import com.saumya.core.events.UserEvent;

import openfl.Assets;

import motion.Actuate;
import motion.easing.Quad;

/**
 * ...
 * @author saumya
 */
class ResponseDisplay extends Sprite
{
	private var correct:Bitmap;
	private var inCorrect:Bitmap;

	public function new() 
	{
		super();
		this.initialize();
	}
	
	private function initialize():Void
	{
		this.correct = new Bitmap (Assets.getBitmapData ("images/correct.png"));
		this.correct.smoothing = true;
		//this.correct.alpha = 0.4;
		this.inCorrect = new Bitmap (Assets.getBitmapData ("images/incorrect.png"));
		this.inCorrect.smoothing = true;
		
		//this.correct.width = this.correct.height = this.inCorrect.width = this.inCorrect.height = 200;
		this.correct.visible = false;
		this.inCorrect.visible = false;
		//
		this.addEventListener(MouseEvent.CLICK, onUserClick);
		this.construct();
	}
	
	private function construct():Void
	{
		this.addChild(this.correct);
		this.addChild(this.inCorrect);
		this.correct.x=this.correct.y=-(this.correct.width/2);
		this.inCorrect.x=this.inCorrect.y=-(this.inCorrect.width/2);
		this.render();
	}
	
	private function render() 
	{
		this.correct.visible = false;
		this.inCorrect.visible = false;
	}

	private function onUserClick(e:MouseEvent):Void 
	{
		/*
		if(this.correct.visible){
			//Actuate.tween (this.correct, 0.2, { x:1000 } ).ease (Quad.easeOut).onComplete(notify);
			Actuate.tween (this.correct, 0.2, { scaleX:0.1, scaleY:0.1 } ).ease (Quad.easeOut).onComplete(notify);
		}else{
			//Actuate.tween (this.inCorrect, 0.2, { x:1000 } ).ease (Quad.easeOut).onComplete(notify);
			Actuate.tween (this.inCorrect, 0.2, { scaleX:0.1, scaleY:0.1 } ).ease (Quad.easeOut).onComplete(notify);
		}
		*/
		this.notify();
	}
	private function notify():Void
	{
		var ev:UserEvent = new UserEvent(UserEvent.MODAL_LAYER_CLICK);
		this.dispatchEvent(ev);
	}
	
	public function showResponse(isCorrect:Bool):Void
	{
		if (isCorrect) {
			this.correct.visible = true;
			this.inCorrect.visible = false;
			/*
			//this.correct.scaleX=this.correct.scaleY=0.1;
			//Actuate.tween (this.correct, 0.2, { scaleX:1, scaleY:1 } ).ease (Quad.easeOut);
			//this.correct.alpha=0;
			this.correct.x=-1000;
			Actuate.tween (this.correct, 0.2, { x:0 } ).ease (Quad.easeOut);
			*/
		}else {
			this.correct.visible = false;
			this.inCorrect.visible = true;
			/*
			//this.inCorrect.scaleX=this.inCorrect.scaleY=0.1;
			//Actuate.tween (this.inCorrect, 0.2, { scaleX:1, scaleY:1 } ).ease (Quad.easeOut);
			//this.inCorrect.alpha=0;
			this.inCorrect.x=-1000;
			Actuate.tween (this.inCorrect, 0.2, { x:0 } ).ease (Quad.easeOut);
			*/
		}
	}
	
	public function hideResponse():Void
	{
		this.render();
	}

	public function move(xPos:Float,yPos:Float):Void
	{
		this.x = xPos;
		this.y = yPos;
	}
}