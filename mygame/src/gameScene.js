var GameScene = cc.Scene.extend({
     onEnter:function () {
        this._super();
        //添加Layer
		this.gameLayer = cc.Layer.create();
		this.addChild(this.gameLayer);
		//添加背景
		var bg = cc.Sprite.create(s_Background);
		this.gameLayer.addChild(bg,0);
		//设置背景的锚点和位置
		bg.setAnchorPoint(cc.p(0,0));
		bg.setPosition(cc.p(0,0));
		//添加精灵
        this.grossini = new Grossini();
        this.grossini.setAnchorPoint(cc.p(0.5, 0));
        this.grossini.setPosition(cc.p(325, 0));
        this.gameLayer.addChild(this.grossini,1);
     }
}); 