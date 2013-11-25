package com.saumya.catchThemAll.ui;

import com.saumya.core.FiveBasicColor;
import com.saumya.core.ui.shape.ColorSquare;
import com.saumya.catchThemAll.events.UserSelectionEvent;
import flash.display.Bitmap;
import flash.display.Sprite;
import flash.events.MouseEvent;
import flash.events.Event;
import openfl.Assets;

/**
 * ...
 * @author saumya
 */
class ColorRowInstruction extends Sprite
{
	private var squares:Array<ColorSquare>;
	private var numSquares:Int;
	
	public function new() 
	{
		super();
		this.initialize();
	}
	
	private function initialize() 
	{
		//trace('initialize');
		this.squares = new Array();
		this.numSquares = 5;
		
		this.construct();
	}
	
	private function construct() 
	{
		//trace('construct');
		for (i in 0...this.numSquares) {
			//var n:Int = Math.round(this.numSquares * Math.random());
			//trace(i + ':' + n);
			var cs:ColorSquare=new ColorSquare();
			//cs.addEventListener(MouseEvent.CLICK, onUserClick);
			//var textMap:Bitmap = new Bitmap (Assets.getBitmapData ("images/n0.png"));
			//var num:Int=0;
			switch(i+1) {
				case 1:
					cs.changeColor(FiveBasicColor.RED);
					//textMap= new Bitmap (Assets.getBitmapData ("images/n1.png"));
				case 2:
					cs.changeColor(FiveBasicColor.GREEN);
					//textMap= new Bitmap (Assets.getBitmapData ("images/n2.png"));
				case 3:
					cs.changeColor(FiveBasicColor.BLUE);
					//textMap= new Bitmap (Assets.getBitmapData ("images/n3.png"));
				case 4:
					cs.changeColor(FiveBasicColor.YELLOW);
					//textMap= new Bitmap (Assets.getBitmapData ("images/n4.png"));
				case 5:
					cs.changeColor(FiveBasicColor.PINK);
					//textMap= new Bitmap (Assets.getBitmapData ("images/n5.png"));
				default:
					trace('Not Handled YET ! condition='+i);
			}
			
			cs.x = 30 + i * (60 + 5);
			cs.y = 30;
			//cs.addTextNumber(textMap);
			cs.addTextNumber(i);
			this.addChild(cs);
			
		}
		
		
		//this.render();
	}
	
	private function render() 
	{
		trace('render');
	}
	/*
	private function onUserClick(e:MouseEvent):Void{
		var cs:ColorSquare = cast (e.target);
		//trace(cs.getColorNum()+' : '+cs.getColor());
		var ev:UserSelectionEvent=new UserSelectionEvent(UserSelectionEvent.SELECTED);
		ev.colorNum=cs.getColorNum();
		ev.colorValue=cs.getColor();
		//this.dispatchEvent(new Event('userPickedEvent',true,true));
		this.dispatchEvent(ev);
	}
	*/
	
}