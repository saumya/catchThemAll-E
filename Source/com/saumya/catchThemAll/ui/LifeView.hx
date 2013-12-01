package com.saumya.catchThemAll.ui;

import flash.display.Sprite;
import flash.display.Bitmap;
import flash.text.TextField;
import flash.text.TextFieldAutoSize;
import flash.text.TextFormat;
import flash.text.TextFormatAlign;

import openfl.Assets;

class LifeView extends Sprite
{
	private var bg:Bitmap;
	private var life:Bitmap;
	private var lifeText:TextField;

	public function new()
	{
		super();
		this.initialize();
	}
	private function initialize():Void
	{
		this.bg=new Bitmap(Assets.getBitmapData ("images/life_line_bg_gfx.png"));
		this.life=new Bitmap(Assets.getBitmapData ("images/life_line_gfx.png"));
		this.life.x=this.life.y=5;
		this.lifeText=new TextField();
		this.lifeText.selectable=false;
		this.lifeText.autoSize=TextFieldAutoSize.LEFT;
		
		//
		var font = Assets.getFont ("fonts/ArchitectsDaughter.ttf");
		var formatGeneral = new TextFormat();
		formatGeneral.font = font.fontName;
		formatGeneral.align = TextFormatAlign.LEFT;
		formatGeneral.size = 20;
		formatGeneral.color = 0xFFFFFF;
		//
		this.lifeText.defaultTextFormat = formatGeneral;
		this.lifeText.x=25;
		this.lifeText.y=12;
		this.lifeText.text='LIFE';
		//
		this.construct();
	}
	private function construct():Void
	{
		this.addChild(this.bg);
		this.addChild(this.life);
		this.addChild(this.lifeText);
		//lastly
		//this.render();
	}

	public function render():Void
	{

	}

	public function updateLife(value:Float):Void
	{
		this.life.scaleX=value;
	}
}