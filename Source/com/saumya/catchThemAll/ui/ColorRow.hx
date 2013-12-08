package com.saumya.catchThemAll.ui;

import com.saumya.core.FiveBasicColor;
import com.saumya.core.ui.shape.ColorSquare;
import flash.display.Sprite;

/**
 * Used for rows for color
 * @author saumya
 * @version 1.0.0
 */
class ColorRow extends Sprite
{
	private var squares:Array<ColorSquare>;
	private var numSquares:Int;

	private var countRed:Int;
	private var countGreen:Int;
	private var countBlue:Int;
	private var countYellow:Int;
	private var countPink:Int;
	
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
		this.initializeColorCounts();
		this.construct();
	}
	private function initializeColorCounts():Void
	{
		this.countRed=0;
		this.countGreen=0;
		this.countBlue=0;
		this.countYellow=0;
		this.countPink=0;
	}
	
	private function construct() 
	{
		//trace('construct');
		for (i in 0...this.numSquares) {
			var n:Int = Math.ceil(this.numSquares * Math.random());
			//trace(i + ':' + n);
			var cs:ColorSquare=new ColorSquare();
			
			switch(n) {
				case 1:
					//trace(i+' : '+FiveBasicColor.RED);
					cs.changeColor(FiveBasicColor.RED);
					this.countRed++;
				case 2:
					//trace(i+' : '+FiveBasicColor.GREEN);
					cs.changeColor(FiveBasicColor.GREEN);
					this.countGreen++;
				case 3:
					//trace(i+' : '+FiveBasicColor.BLUE);
					cs.changeColor(FiveBasicColor.BLUE);
					this.countBlue++;
				case 4:
					//trace(i+' : '+FiveBasicColor.YELLOW);
					cs.changeColor(FiveBasicColor.YELLOW);
					this.countYellow++;
				case 5:
					//trace(i+' : '+FiveBasicColor.PINK);
					cs.changeColor(FiveBasicColor.PINK);
					this.countPink++;
				default:
					//trace('Not Handled YET ! condition='+n);
			}

			#if ios
			cs.x = (50) + i * (100 + 5);
			cs.y = 55;
			#else
			cs.x = 30 + i * (60 + 5);
			cs.y = 30;
			#end

			this.addChild(cs);
			this.squares.push(cs);
		}
		
		
		this.render();
	}
	
	private function render() 
	{
		//trace('render');
	}
	
	public function shuffleColors():Void
	{
		this.initializeColorCounts();
		for (i in 0...this.numSquares) {
			var n:Int = Math.ceil(this.numSquares * Math.random());
			//trace(i + ':' + n);
			var cs:ColorSquare = cast(this.squares[i]);
			
			switch(n) {
				case 1:
					//trace(i+' : '+FiveBasicColor.RED);
					cs.changeColor(FiveBasicColor.RED);
					this.countRed++;
				case 2:
					//trace(i+' : '+FiveBasicColor.GREEN);
					cs.changeColor(FiveBasicColor.GREEN);
					this.countGreen++;
				case 3:
					//trace(i+' : '+FiveBasicColor.BLUE);
					cs.changeColor(FiveBasicColor.BLUE);
					this.countBlue++;
				case 4:
					//trace(i+' : '+FiveBasicColor.YELLOW);
					cs.changeColor(FiveBasicColor.YELLOW);
					this.countYellow++;
				case 5:
					//trace(i+' : '+FiveBasicColor.PINK);
					cs.changeColor(FiveBasicColor.PINK);
					this.countPink++;
				default:
					//trace('Not Handled YET ! condition='+n);
			}
			
			//cs.x=i*(60+5);
			//this.addChild(cs);
		}
	}

	public function logCounts():Void
	{
		trace('logCounts : red='+this.countRed+':green='+this.countGreen+':blue='+this.countBlue+':yellow='+this.countYellow+':pink='+this.countPink);
	}
	public function getCount(color:FiveBasicColor):Int
	{
		var count:Int=0;
		switch (color) {
			case FiveBasicColor.RED:
				count=this.countRed;
			case FiveBasicColor.GREEN:
				count=this.countGreen;
			case FiveBasicColor.BLUE:
				count=this.countBlue;
			case FiveBasicColor.YELLOW:
				count=this.countYellow;
			case FiveBasicColor.PINK:
				count=this.countPink;
		}
		return count;
	}
	
}