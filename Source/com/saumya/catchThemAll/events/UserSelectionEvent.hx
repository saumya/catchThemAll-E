package com.saumya.catchThemAll.events;

import flash.events.Event;
import com.saumya.core.FiveBasicColor;

class UserSelectionEvent extends Event
{
	public static var SELECTED:String='userSelectedEvent';

	public var colorNum:Int;
	public var colorValue:FiveBasicColor;

	public function new(type : String , ?bubbles : Bool=true , ?cancelable : Bool=true)
	{
		super(type,bubbles,cancelable);
	}

	override public function clone():UserSelectionEvent
	{
		var e:UserSelectionEvent=new UserSelectionEvent(this.type,this.bubbles,this.cancelable);
		e.colorNum=this.colorNum;
		e.colorValue=this.colorValue;
		return e;
	}
}