package com.saumya.catchThemAll.ui;
import com.saumya.catchThemAll.events.LifeEvent;
import flash.display.Bitmap;
import flash.display.Graphics;
import flash.display.Sprite;
import flash.events.TimerEvent;
import flash.text.TextField;
import flash.text.TextFormat;
import flash.text.TextFormatAlign;
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
	private var circleBg:Sprite;
	
	private var life:TextField;
	private var lifeRemaining:Int;
	private var lifeMax:Int;
	
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
		
		this.life = new TextField();
		this.lifeRemaining = 100;
		this.lifeMax = this.lifeRemaining;
		
		this.circleBg = new Sprite();
		var circleMap:Bitmap = new Bitmap (Assets.getBitmapData ("images/circle_1.png"));
		this.circleBg.addChild(circleMap);
		this.circleBg.addChild(this.life);
		//
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
		this.formatRightAlign.size = 30;
		this.formatRightAlign.color = 0xFFFFFF;
		//
		this.total.defaultTextFormat = this.correct.defaultTextFormat = this.wrong.defaultTextFormat = this.formatLeftAlign;
		this.life.defaultTextFormat = this.formatCenterAlign;
		
		this.total.x = this.total.y = 0;
		this.correct.y = 30;
		this.wrong.y = 50;
		
		/*
		this.life.y = 50;
		this.circleBg.y = 50;
		*/
		
		this.total.width = this.correct.width = this.wrong.width  = 200;
		this.total.height = this.correct.height = this.wrong.height = 40;
		
		this.total.text = "TOTAL:0";
		this.correct.text = "CORRECT:0";
		this.wrong.text = "Wrong:0";
		
		this.life.width = 54;
		this.life.height = 40;
		//this.life.text = 'LIFE:' + this.lifeRemaining;
		this.life.text = '' + this.lifeRemaining;
		this.life.x = 10;
		this.life.y = 10;
		
		this.total.selectable = this.correct.selectable = this.wrong.selectable = this.life.selectable = false;
		//
		this.timerLife = new Timer(100);
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
		//this.life.text = 'LIFE:' + this.lifeRemaining;
		this.life.text = '' + this.lifeRemaining;
		if (this.lifeRemaining<=0) {
			this.stopLife();
			var le:LifeEvent = new LifeEvent(LifeEvent.END, true);
			this.dispatchEvent(le);
		}
	}
	
	private function construct() 
	{
		this.addChild(this.total);
		//this.addChild(this.correct);
		
		//this.addChild(this.wrong);
		
		//this.addChild(this.life);
		this.addChild(this.circleBg);
	}
	
	public function showBackground(bgWidth:Float,bgHeight:Float):Void
	{
		/*
		var g:Graphics = this.graphics;
		g.clear();
		g.beginFill(0xFFFFFF, 0.4);
		g.drawRect(0, 0, bgWidth, bgHeight);
		g.endFill();
		*/
		//this.life.x = bgWidth - (this.life.width);
		/*
		this.life.x = bgWidth - 250;
		this.life.y = 0;
		*/
		//this.life.x = 10;
		//this.life.y = 50;
		this.circleBg.x = bgWidth - 90;
		this.circleBg.y = 10;
	}
	
	public function setScore(totalNum:Int,correctNum:Int):Void
	{
		/*
		this.total.text = 'TOTAL:'+totalNum;
		this.correct.text = 'CORRECT:'+correctNum;
		*/
		//this.wrong.text = totalNum - correctNum;
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