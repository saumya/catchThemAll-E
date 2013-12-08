package com.saumya.catchThemAll.ui;
import com.saumya.core.ui.shape.Logo;
import flash.display.Bitmap;
import flash.display.Sprite;
import flash.events.Event;
import flash.events.MouseEvent;
import openfl.Assets;

/**
 * ...
 * @author saumya
 */
class HomeView extends Sprite
{
	private var logo:Logo;
	private var colorRow:ColorRowInstruction;
	private var instruction:Bitmap;
	private var btnOK:Sprite;
	
	public static var OK_EVENT:String = 'okEvent';

	public function new() 
	{
		super();
		this.initialize();
	}
	
	private function initialize() :Void
	{
		this.logo = new Logo();
		this.colorRow = new ColorRowInstruction();


		this.btnOK = new Sprite();
		this.btnOK.addChild(new Bitmap (Assets.getBitmapData ("images/btn_ok.png")));

		this.btnOK.width = 80;
		this.btnOK.height = 44;

		#if ios
		this.logo.x = 180;
		this.colorRow.x = 200;
		this.colorRow.y = 200;

		this.instruction = new Bitmap (Assets.getBitmapData ("images/instruction@2x.png"));
		this.instruction.y = 250;

		this.btnOK.x = 320;//(640/2)-(80/2)
		this.btnOK.y = 800;
		#else
		this.colorRow.x = 15;
		this.colorRow.y = 110;

		this.instruction = new Bitmap (Assets.getBitmapData ("images/instruction.png"));
		this.instruction.y = 180;

		this.btnOK.x = 135;//175-(80/2)
		this.btnOK.y = 400;
		#end


		
		this.btnOK.addEventListener(MouseEvent.CLICK, onUserClick);
		//
		this.construct();
	}
	
	private function onUserClick(e:MouseEvent):Void 
	{
		//trace('onUserClick');
		var ev:Event = new Event(HomeView.OK_EVENT);
		this.dispatchEvent(ev);
	}
	
	private function construct() :Void
	{
		this.render();
	}
	
	private function render() :Void
	{
		this.addChild(this.logo);
		this.addChild(this.colorRow);
		this.addChild(this.instruction);
		this.addChild(this.btnOK);
	}
	
	public function move(xPos:Float,yPos:Float):Void
	{
		this.x = xPos;
		this.y = yPos;
	}
	
}