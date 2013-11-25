package com.saumya.catchThemAll.events;

import flash.events.Event;
import com.saumya.core.FiveBasicColor;

class LifeEvent extends Event
{
	public static var END:String='lifeEndEvent';


	public function new(type : String , ?bubbles : Bool=true , ?cancelable : Bool=true)
	{
		super(type,bubbles,cancelable);
	}

	override public function clone():UserSelectionEvent
	{
		var e:UserSelectionEvent=new UserSelectionEvent(this.type,this.bubbles,this.cancelable);
		
		return e;
	}
}