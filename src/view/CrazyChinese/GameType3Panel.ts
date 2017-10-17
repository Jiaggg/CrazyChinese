class GameType3Panel extends BasePanel{
    public constructor(){
        super();
    }
	private bg: egret.Bitmap = null;
    private btnBack:EButton = null;
    // 初始化面板
    public initPanel():void{
		this.bg = new egret.Bitmap();
        this.bg.width = GameConfig.curWidth();
        this.bg.height = GameConfig.curHeight();
        this.bg.texture = this.assets.getTexture("bg_2");
        this.addChild(this.bg);   
        this.bg.touchEnabled = false;   
     
        this.btnBack = new EButton(this,"restart",null, null, "后退",80,2);
        this.btnBack.x = 10;
        this.btnBack.y = 10;   
        this.addChild(this.btnBack);
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnBackTouchTap,this); 

        this.updateData();
	}

    public updateData():void
    {

    }

    public onBtnBackTouchTap(e:egret.TouchEvent):void{
        Global.dispatchEvent(MainNotify.closeGameType3PanelNotify,null,false);
        Global.dispatchEvent(MainNotify.openStartPanelNotify,null,false);
    }
}