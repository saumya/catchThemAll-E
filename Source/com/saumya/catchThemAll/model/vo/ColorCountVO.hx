package com.saumya.catchThemAll.model.vo;

import com.saumya.core.FiveBasicColor;
/**
 * 
 * @author saumya
 * @version 1.0.0
 */
class ColorCountVO
{
	private var color:FiveBasicColor;
	private var count:Int;

	public function new() 
	{
		this.initialize();
	}
	
	private function initialize() 
	{
		this.color = FiveBasicColor.RED;
		this.count = 0;
	}
	
	public function setColorCount(newColor:FiveBasicColor,newCount:Int):Void
	{
		this.color = newColor;
		this.count = newCount;
	}
	
	public function getColor():FiveBasicColor
	{
		return this.color;
	}
	public function getCount():Int
	{
		return this.count;
	}
	
}