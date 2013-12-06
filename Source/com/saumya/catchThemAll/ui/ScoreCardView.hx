package com.saumya.catchThemAll.ui;
import com.saumya.catchThemAll.events.LifeEvent;
import flash.display.Bitmap;
import flash.display.Graphics;
import flash.display.Sprite;
import flash.events.Event;
import flash.events.TimerEvent;
import flash.text.TextField;
import flash.text.TextFormat;
import flash.text.TextFormatAlign;
import flash.text.TextFieldAutoSize;
import flash.utils.Timer;

import openfl.Assets;

/**
 * 
 * Courtesy,
 * Font : 
 * 
 * BoB : http://www.behance.net/gallery/BoB-Font/9982645 , by: http://www.behance.net/silencemunky 	
 * ArchitectsDaughter : http://www.fontsquirrel.com/fonts/architects-daughter, by: http://www.fontsquirrel.com/fonts/list/foundry/kimberly-geswein
 * 
 * 
 * 
 * @author saumya
 * @version 1.0.0
 */
class ScoreCardView extends Sprite
{
	private var total:TextField;
	private var correct:TextField;
	private var wrong:TextField;
	
	private var lifeRemaining:Int;
	private var lifeMax:Int;
	private var lifeView:LifeView;
	
	private var formatGeneral:TextFormat;
	private var formatLeftAlign:TextFormat;
	private var formatCenterAlign:TextFormat;
	private var formatRightAlign:TextFormat;
	
	private var timerLife:Timer;

	public function new() 
	{
		super();
		this.initialize();
	}
	
	private function initialize() 
	{
		this.total = new TextField();
		this.correct = new TextField();
		this.wrong = new TextField();
		this.lifeView=new LifeView();
		//var font = Assets.getFont ("fonts/BoB.ttf");
		var font = Assets.getFont ("fonts/ArchitectsDaughter.ttf");
		//font designs
		this.formatGeneral = new TextFormat();
		this.formatGeneral.font = font.fontName;
		this.formatGeneral.align = TextFormatAlign.RIGHT;
		this.formatGeneral.size = 20;
		this.formatGeneral.color = 0x000000;
		
		this.formatLeftAlign = new TextFormat();
		this.formatLeftAlign.font = font.fontName;
		this.formatLeftAlign.align = TextFormatAlign.LEFT;
		this.formatLeftAlign.size = 30;
		this.formatLeftAlign.color = 0xFFFFFF;
		
		this.formatCenterAlign = new TextFormat();
		this.formatCenterAlign.font = font.fontName;
		this.formatCenterAlign.align = TextFormatAlign.CENTER;
		this.formatCenterAlign.size = 30;
		this.formatCenterAlign.color = 0xFFFFFF;
		
		this.formatRightAlign = new TextFormat();
		this.formatRightAlign.font = font.fontName;
		this.formatRightAlign.align = TextFormatAlign.RIGHT;
		this.formatRightAlign.size = 16;
		this.formatRightAlign.color = 0xFFFFFF;
		//
		this.total.defaultTextFormat = this.correct.defaultTextFormat = this.wrong.defaultTextFormat = this.formatLeftAlign;
		
		this.total.x = this.total.y = 0;
		this.correct.y = 30;
		this.wrong.y = 50;

		this.total.width = this.correct.width = this.wrong.width  = 200;
		this.total.height = this.correct.height = this.wrong.height = 40;
		
		this.total.text = "TOTAL:0";
		this.correct.text = "CORRECT:0";
		this.wrong.text = "Wrong:0";

		this.total.selectable = this.correct.selectable = this.wrong.selectable = false;
		
		this.addEventListener(Event.ADDED_TO_STAGE,onAddedToStage);
	}
	private function onAddedToStage(e:Event):Void
	{
		#if html5
		this.lifeMax=50;
		#else
		if(this.stage.stageHeight<=500){
			this.lifeMax=100;
		}else if((this.stage.stageHeight>500)&&this.stage.stageHeight<=1000){
			this.lifeMax=200;
		}else{
			this.lifeMax=300;
		}
		#end
		this.lifeRemaining=this.lifeMax;
		//
		this.timerLife = new Timer(this.lifeMax);
		this.lifeView.updateLife(this.lifeRemaining/this.lifeMax,this.lifeRemaining);

		this.timerLife.addEventListener(TimerEvent.TIMER,onTimer);
		this.timerLife.addEventListener(TimerEvent.TIMER_COMPLETE,onTimerComplete);
		//
		this.construct();
	}
	
	private function onTimerComplete(e:TimerEvent):Void 
	{
		trace('timerComplete');
	}
	
	private function onTimer(e:TimerEvent):Void 
	{
		this.lifeRemaining --;
		this.lifeView.updateLife(this.lifeRemaining/this.lifeMax,this.lifeRemaining);
		if (this.lifeRemaining<=0) {
			this.stopLife();
			var le:LifeEvent = new LifeEvent(LifeEvent.END, true);
			this.dispatchEvent(le);
		}
	}
	
	private function construct() 
	{
		this.addChild(this.total);
		this.addChild(this.lifeView);
	}
	
	public function showBackground(bgWidth:Float,bgHeight:Float):Void
	{
		
		this.lifeView.x=bgWidth-(this.lifeView.width+5);
		this.lifeView.y=10;
	}
	
	public function setScore(totalNum:Int,correctNum:Int):Void
	{
		this.total.text = correctNum + ' / ' + totalNum;
	}
	
	public function startLife():Void
	{
		this.timerLife.start();
	}
	
	public function stopLife():Void
	{
		this.timerLife.reset();
		this.lifeRemaining = this.lifeMax;
	}
	
}