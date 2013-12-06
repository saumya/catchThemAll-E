package com.saumya.catchThemAll;

import com.saumya.catchThemAll.events.LifeEvent;
import com.saumya.catchThemAll.model.ColorCountModel;
import com.saumya.catchThemAll.model.ScoreModel;
import com.saumya.catchThemAll.model.vo.ColorCountVO;
import com.saumya.catchThemAll.ui.ColorRow;
import com.saumya.catchThemAll.ui.ColorRowResponder;
import com.saumya.catchThemAll.events.UserSelectionEvent;
import com.saumya.catchThemAll.ui.HomeView;
//import com.saumya.catchThemAll.ui.ModalLayer;
import com.saumya.catchThemAll.ui.ResponseDisplay;
import com.saumya.catchThemAll.ui.ScoreCardView;
import com.saumya.core.events.UserEvent;
import com.saumya.core.ui.BackgroundView;
import com.saumya.core.ui.shape.ColorSquare;
import com.saumya.core.ui.shape.RectangleBase;
import com.saumya.core.FiveBasicColor;

import openfl.Assets;

import flash.display.Bitmap;
import flash.display.Graphics;
import flash.display.Sprite;
import flash.events.Event;

import motion.Actuate;
import motion.easing.Quad;

/**
 * Its the starting point of the view of the actual application.
 * @author saumya
 * @version 1.0.0
 */
class ApplicationView extends Sprite
{
	private var widthX:Float;
	private var heightX:Float;
	private var bg:BackgroundView;
	private var homeScreen:HomeView;

	private var numRows:Int;
	private var allRows:Array<ColorRow>;
	
	private var rowHolder:Sprite;
	private var scaleFactor:Float;

	private  var cRowResponder:ColorRowResponder;

	//private var colorCounts:Array<ColorCountVO>;
	private var ccModel:ColorCountModel;
	private var scoreModel:ScoreModel;
	//
	//private var modalLayer:ModalLayer;
	private var userResponseDisplay:ResponseDisplay;
	private var scoreView:ScoreCardView;
	//
	private var animateInCount:Int;
	private var animateOutCount:Int;
	
	
	public function new(stageWidth:Float,stageHeight:Float) 
	{
		super();
		this.initialize(stageWidth,stageHeight);
	}
	
	private function initialize(stageWidth:Float,stageHeight:Float):Void 
	{
		//trace('initialize');
		this.widthX = stageWidth;
		this.heightX = stageHeight;
		
		this.bg = new BackgroundView();
		this.bg.setSize(this.widthX, this.heightX);
		this.homeScreen = new HomeView();
		this.homeScreen.move((stageWidth-this.homeScreen.width)/2,(stageHeight-this.homeScreen.height)/2);
		
		//calculating numRows depending upon the height
		var numR:Int = Math.floor(stageHeight / 80);//doing before, now will depend upon level
		this.numRows = numR;//previously used settings : default=8, sony experia E=6
		//this.numRows = 5;
		
		this.allRows=new Array();
		this.rowHolder = new Sprite();
		var g:Graphics = this.rowHolder.graphics;
		g.beginFill(0xFF0000);
		g.drawRect(0,0,2,200);
		g.endFill();
		this.addChild(this.rowHolder);
		//this.colorCounts=new Array();
		this.ccModel = new ColorCountModel();
		this.scoreModel = new ScoreModel();
		//
		/*
		this.modalLayer = new ModalLayer();
		this.modalLayer.visible = false;
		*/
		this.userResponseDisplay = new ResponseDisplay();
		this.scoreView = new ScoreCardView();
		//
		this.animateInCount = 0;
		this.animateOutCount = 0;
		
		this.homeScreen.addEventListener(HomeView.OK_EVENT,onOkEventOnHome);
		this.addEventListener(UserSelectionEvent.SELECTED, onUserPicked);
		this.addEventListener(UserEvent.MODAL_LAYER_CLICK, onUserClickModalLayer);
		this.addEventListener(LifeEvent.END,onLifeEnd);
		
		this.addEventListener(Event.ADDED_TO_STAGE, onAddedToStage);
		//this.construct();
	}
	
	private function onOkEventOnHome(e:Event):Void 
	{
		this.homeScreen.visible = false;
		this.render();
		
		//flash.system.System.exit(0);//close the app
		//Sys.command("ls");//system command
	}
	
	private function onAddedToStage(e:Event):Void 
	{
		removeEventListener(Event.ADDED_TO_STAGE, onAddedToStage);
		//initialise the application
		this.construct();
	}

	private function construct():Void 
	{
		this.addChild(this.bg);
		this.addChild(this.homeScreen);
		
		//moved to user action on home screen
		//this.render();
	}
	
	private function render() :Void
	{
		/*
		trace('render : width=' + this.width + ' :: height=' + this.height);
		trace('render : widthX=' + this.widthX + ' :: heightX=' + this.heightX);
		*/
		this.addChild(this.rowHolder);
		//check, whether its first time
		if (this.scoreModel.getTotalCount() <= 0) {
			//var lastY:Float = 0;
			//create the rows
			for (i in 0...this.numRows) {
				var cRow:ColorRow = new ColorRow();
				/*
				trace('crow : width='+cRow.width+' :: stageWidth='+this.widthX);
				trace('crow : height='+cRow.height+' :: stageHeight='+this.heightX);
				*/
				this.scaleFactor = (this.widthX/cRow.width);
				//trace('crow : scaleFactor=(this.widthX/cRow.width)='+this.scaleFactor);
				cRow.y = i*(60+5);
				//just putting something to render
				//cRow.x=1000;
				//cRow.alpha =0;
				//Actuate.tween (cRow, 0.8*(Math.random()), { alpha: 1, x:0 } ).ease (Quad.easeOut);
				this.rowHolder.addChild(cRow);
				this.allRows.push(cRow);
				this.animateIn(cRow);
			}
			//
			this.rowHolder.x = (this.stage.stageWidth-this.rowHolder.width)/2;
			//
			this.cRowResponder = new ColorRowResponder();
			//this.cRowResponder.x = (this.widthX - this.cRowResponder.width) / 2;
			this.cRowResponder.x = this.rowHolder.x;
			this.cRowResponder.y=this.height-(60+5);
			
			this.addChild(this.cRowResponder);
			this.cRowResponder.visible = false;
			//#end
		}else{
			//trace("NOT FIRST TIME : DO NOT CREATE RESPONDER : RE-USE THE ASSETS");
			for (i in 0...this.numRows) {
				var cRow:ColorRow = this.allRows[i];
				//just putting something to render
				cRow.x = 1000;
				cRow.shuffleColors();
				this.animateIn(cRow);
			}
		}
		
		
		//check
		var red:Int = 0;
		var green:Int = 0;
		var blue:Int = 0;
		var yellow:Int = 0;
		var pink:Int = 0;

		for (i in 0...this.numRows) {
			var cRow:ColorRow = cast (this.allRows[i]);
			//trace('i='+i+' : cRow='+cRow);
			//cRow.logCounts();
			//trace('red='+cRow.getCount(FiveBasicColor.RED));
			red += cRow.getCount(FiveBasicColor.RED);
			green += cRow.getCount(FiveBasicColor.GREEN);
			blue += cRow.getCount(FiveBasicColor.BLUE);
			yellow += cRow.getCount(FiveBasicColor.YELLOW);
			pink += cRow.getCount(FiveBasicColor.PINK);
		}
		
		//trace('total : red='+red+' :green='+green+' :blue='+blue+' :yellow='+yellow+' :pink='+pink);

		//TODO: check for max or re-do
		//this.colorCounts=[red,green,blue,yellow,pink];
		//haxe.ds.ArraySort.sort(this.colorCounts, cmp : (Unknown<0> -> Unknown<0> -> Int) );
		//this.colorCounts.sort();
		//trace(this.colorCounts);
		for (j in 1...6) {
			var c:ColorCountVO = new ColorCountVO();
			switch(j) {
				case 1:
					c.setColorCount(FiveBasicColor.RED, red);
				case 2:
					c.setColorCount(FiveBasicColor.GREEN, green);
				case 3:
					c.setColorCount(FiveBasicColor.BLUE, blue);
				case 4:
					c.setColorCount(FiveBasicColor.YELLOW, yellow);
				case 5:
					c.setColorCount(FiveBasicColor.PINK, pink);
			}
			//this.colorCounts.push(c);
			this.ccModel.add(c);
		}
		//trace(this.colorCounts);
		//trace(this.ccModel.getAll());
		this.ccModel.sortMax();
		//trace('Max='+this.ccModel.getMaxCountColor());
		//add the modal layers
		//this.addChild(this.modalLayer);
		this.addChild(this.userResponseDisplay);
		this.addChild(this.scoreView);
		this.scoreView.visible=true;
	}

	//event handlers
	private function onUserPicked(e:UserSelectionEvent):Void
	{
		//trace('onUserPicked : colorNum=' + e.colorNum + ' ::colorValue=' + e.colorValue);
		this.scoreView.stopLife();
		var mc:ColorCountVO = this.ccModel.getMaxCountColor();
		//trace('Max=' + mc);
		//trace('Correct Ans : colorNum=' + mc.getCount() + ' ::colorValue=' + mc.getColor());
		//trace(e.colorValue == mc.getColor());
		if (e.colorValue == mc.getColor()) {
			//trace('CORRECT');
			this.scoreModel.incrementCorrectCount();
			this.displayModalResponse(true);
		}else {
			//trace('WRONG');
			this.scoreModel.incrementInCorrectCount();
			this.displayModalResponse(false);
		}
		//trace(this.scoreModel);
		this.scoreView.setScore(this.scoreModel.getTotalCount(), this.scoreModel.getCorrectCount());
		//this.scoreView.showBackground(this.widthX,this.heightX);
		//this.scoreView.showBackground(this.widthX,50);
		//TODO: render the score card
		this.cRowResponder.visible = false;
	}
	
	private function onUserClickModalLayer(e:UserEvent):Void 
	{
		//trace('onUserClickModalLayer : TODO : re-render the Question');
		this.hideModalResponse();
		//remove all the rows
		for (i in 0...this.numRows) {
			var cRow:ColorRow = cast(this.allRows[i]);
			this.animateOut(cRow);//Now remove is occuring at the end of the animation
		}
	}
	
	private function onLifeEnd(e:LifeEvent):Void 
	{
		//make a negetive score
		this.scoreModel.incrementInCorrectCount();
		this.displayModalResponse(false,true);
		this.scoreView.setScore(this.scoreModel.getTotalCount(), this.scoreModel.getCorrectCount());
		this.cRowResponder.visible = false;
	}
	
	/**
	 * Displays the modal dialogue, disabling everything behind
	 * @param	isCorrect
	 */
	private function displayModalResponse(isCorrect:Bool,?isTimeUp:Bool=false):Void
	{
		//trace('displayModalResponse');
		if(isTimeUp==true){
			this.userResponseDisplay.showTimeUp();
		}else{
			this.userResponseDisplay.showResponse(isCorrect);
		}
		
		/*
		this.modalLayer.reInitialize(this.width,this.height);
		this.modalLayer.visible = true;
		*/
		Actuate.tween (this.userResponseDisplay, 0.2, { scaleX:1.5, scaleY:1.5, alpha:1 } ).ease (Quad.easeIn).onComplete(animteToRightSize);
	}
	private function animteToRightSize():Void
	{
		Actuate.tween (this.userResponseDisplay, 0.2, { scaleX:1, scaleY:1} ).ease (Quad.easeOut);
	}

	private function hideModalResponse():Void
	{
		//this.userResponseDisplay.hideResponse();
		//this.modalLayer.visible=false;
		Actuate.tween (this.userResponseDisplay, 0.2, { scaleX:0.01, scaleY:0.01, alpha:0 } ).ease (Quad.easeOut);
	}
	
	private function animateIn(cRow:ColorRow):Void
	{
		//var xVal:Float = (this.widthX - cRow.width) / 2;
		var xVal:Float = 0;	
		//var xVal:Float = 0;
		Actuate.tween (cRow, 0.8*(1 + Math.random()), { x:xVal } ).ease (Quad.easeOut).onComplete(animInComplete,[cRow]);
	}
	private function animateOut(cRow:ColorRow):Void
	{
		Actuate.tween (cRow, 0.8*(2*Math.random()), { x:-1000 } ).ease (Quad.easeIn).onComplete(animOutComplete,[cRow]);
	}
	
	private function animInComplete(cRow:ColorRow):Void
	{	
		this.animateInCount++;
		if (this.animateInCount >= this.numRows) {
			//reset
			this.animateInCount = 0;
			//enable the responder
			this.cRowResponder.visible = true;
			//
			this.scoreView.startLife();
		}
	}
	private function animOutComplete(cRow:ColorRow):Void
	{
		//this.removeChild(cRow);
		this.animateOutCount++;
		//If all the animation are done
		if (this.animateOutCount>=this.numRows) {
			//all the animation are done
			//reset 
			//this.allRows=new Array();
			this.ccModel = new ColorCountModel();
			this.animateOutCount = 0;
			//Now render again
			//this.render();
			//this.homeScreen.visible=true;
			//check attempts, if its 10, disply the home screen again.
			this.checkAttempts();
		}
	}

	private function checkAttempts():Void
	{
		if((this.scoreModel.getTotalCount()%10)==0){
			this.homeScreen.visible=true;
			this.scoreView.visible=false;
		}else{
			this.render();
		}
	}



	//Use for first setting the size
	public function resize(newWidth:Float,newHeight:Float):Void
	{
		this.widthX = newWidth;
		this.heightX = newHeight;
		this.bg.setSize(newWidth, newHeight);
		
		#if html5
		var xpos:Float = (this.stage.stageWidth-this.userResponseDisplay.width)/2;
		var ypos:Float = (this.stage.stageHeight-this.userResponseDisplay.height)/2;
		this.rowHolder.x = (newWidth-this.rowHolder.width)/2;
		//this.rowHolder.x = this.stage.stageWidth/2;
		#else
		var xpos:Float = (this.stage.stageWidth)/2;
		var ypos:Float = (this.stage.stageHeight)/2;
		#end

		this.userResponseDisplay.move(xpos,ypos);
		this.scoreView.showBackground(this.widthX, 50);
	}
	
	public function scaleWithNewSize(newWidth:Float,newHeight:Float):Void
	{
		this.scaleX = newWidth / this.widthX;
		this.scaleY = newHeight / this.heightX;
	}
	
}