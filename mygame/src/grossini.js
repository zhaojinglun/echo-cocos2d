var Grossini = cc.Sprite.extend({
	isTouching:false,
    ctor:function(){
        this._super();
        this.initWithFile(s_Grossini);
    },
    onEnter:function(){
        cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);
        this._super();
    },
    onExit:function(){
        cc.Director.getInstance().getTouchDispatcher().removeDelegate(this);
        this._super();
    },
    containsTouchLocation:function(touch){
    	var point = touch.getLocation();
    	var contentSize  =  this.getContentSize();
    	var myRect = cc.rect(0,0,contentSize.width,contentSize.height);
    	myRect.origin.x += this.getPosition().x-this.getContentSize().width/2;
    	return cc.Rect.CCRectContainsPoint(myRect,point);
    },
    onTouchBegan:function(touch,event){
    	if(this.isTouching) return false;
    	if(!this.containsTouchLocation(touch)) return false;
    	this.isTouching = true;
    	return true;
    },
    onTouchMoved:function(touch,event){
    	this.setPositionX(touch.getLocation().x);
    },
    onTouchEnded:function(touch,event){
    	this.isTouching = false; 
    },
});