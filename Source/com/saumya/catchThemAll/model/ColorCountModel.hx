package com.saumya.catchThemAll.model;
import com.saumya.catchThemAll.model.vo.ColorCountVO;
import com.saumya.core.FiveBasicColor;

/**
 * ...
 * @author saumya
 * @version 1.0.0
 */
class ColorCountModel
{
	private var count:Array<ColorCountVO>;
	//
	private var countPoint:Int;
	private var maxColorCount:ColorCountVO;

	public function new() 
	{
		this.initialize();
	}
	
	private function initialize():Void
	{
		this.count = new Array();
		this.countPoint = 0;
		this.maxColorCount = new ColorCountVO();
	}
	
	public function add(newColor:ColorCountVO):Void
	{
		this.count.push(newColor);
	}
	
	public function getAll() :Array<ColorCountVO>
	{
		return this.count;
	}
	
	public function sortMax():Void
	{
		this.countPoint = 0;
		this.findMax();
	}
	
	public function testCall():Void
	{
		trace('testCall : TODO : all the sorting implementations');
	}
	
	/**
	 * Make sure to call "sortMax()" before calling this method.
	 * 
	 * @return The ColorCountVO is having both the color and its count
	 */
	public function getMaxCountColor():ColorCountVO {
		return this.maxColorCount;
	}
	
	private function findMax():Void
	{
		if (this.countPoint<(this.count.length)) {
			var a:ColorCountVO = cast(this.count[this.countPoint]);
			//var b:ColorCountVO = cast(this.count[this.countPoint + 1]);
			//var c:ColorCountVO = this.getMax(a, b);
			this.maxColorCount = this.getMax(this.maxColorCount,a);
			//trace('Max=' + c);
			this.countPoint += 1;
			this.findMax();
		}else {
			//trace('findMax : Done : '+this.maxColorCount);
		}
		
	}
	
	private function getMax(a:ColorCountVO,b:ColorCountVO):ColorCountVO
	{
		var ai:Int = a.getCount();
		var bi:Int = b.getCount();
		var result:ColorCountVO = new ColorCountVO();
		if (ai>bi) {
			result = a;
		}else if (bi>ai) {
			result = b;
		}else {
			//trace('TODO: fix this, both are same');
			result = a;//for the timebeing
		}
		return result;
	}
	
}