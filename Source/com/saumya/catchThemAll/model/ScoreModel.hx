package com.saumya.catchThemAll.model;

/**
 * 
 * @author saumya
 * @version 1.0.0
 */
class ScoreModel
{
	private var right:Int;
	private var wrong:Int;
	private var total:Int;
	
	public function new() 
	{
		this.initialize();
	}
	
	private function initialize() 
	{
		this.right = 0;
		this.wrong = 0;
		this.total = 0;
	}
	
	public function incrementCorrectCount():Void
	{
		this.right++;
		this.total++;
	}
	
	public function incrementInCorrectCount():Void
	{
		this.wrong++;
		this.total++;
	}
	
	public function getTotalCount():Int
	{
		return this.total;
	}
	public function getCorrectCount():Int
	{
		return this.right;
	}
	public function getWrongCount():Int
	{
		return this.wrong;
	}
	
}