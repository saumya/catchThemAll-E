package com.saumya.catchThemAll.ui;

import com.saumya.core.FiveBasicColor;
import com.saumya.core.ui.shape.ColorSquare;
import com.saumya.catchThemAll.events.UserSelectionEvent;
import flash.display.Sprite;
import flash.events.MouseEvent;
import flash.events.Event;

/**
 * ...
 * @author saumya
 */
class ColorRowResponder extends Sprite
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
			

			switch(i+1) {
				case 1:
					cs.changeColor(FiveBasicColor.RED);
				case 2:
					cs.changeColor(FiveBasicColor.GREEN);
				case 3:
					cs.changeColor(FiveBasicColor.BLUE);
				case 4:
					cs.changeColor(FiveBasicColor.YELLOW);
				case 5:
					cs.changeColor(FiveBasicColor.PINK);
				default:
					trace('Not Handled YET ! condition='+i);
			}

			#if ios
			cs.x= 50 + i*(100+5);
			cs.y= 10 ;
			#else
			cs.x= 30 + i*(60+5);
			cs.y= 30 ;
			#end
			
			
			this.addChild(cs);
			cs.addEventListener(MouseEvent.CLICK,onUserClick);
		}
		
		
		this.render();
	}
	
	private function render() 
	{
		//trace('render');
	}

	private function onUserClick(e:MouseEvent):Void{
		var cs:ColorSquare = cast (e.currentTarget,ColorSquare);
		var ev:UserSelectionEvent=new UserSelectionEvent(UserSelectionEvent.SELECTED);
		ev.colorNum=cs.getColorNum();
		ev.colorValue=cs.getColor();
		this.dispatchEvent(ev);
	}
	
}