  /**
    * 面板基类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 面板的基本属性和方法
    */
class BasePanel extends egret.DisplayObjectContainer{

    public assets:egret.SpriteSheet;
    public w:number = 0;
    public h:number = 0;
    private _panelData:PanelData;
    get panelData():PanelData{
        return this._panelData;
    }
    set panelData(data:PanelData){
        if(data != null)
        {
            let panelID =  this._panelData.panelID;
            data.panelID = panelID;
        }
        this._panelData = data;
    }
    private _panelID:number;    
    get panelID():number{
        return this._panelData.panelID;
    }
    // 构造函数
    public constructor(assetsName = "assets"){
        super();
        this.assets = RES.getRes(assetsName);
        this.w = GameConfig.curWidth();
        this.h = GameConfig.curHeight();
        this._panelData = new PanelData();
        this.initPanel();
        ObjectUtils.addObj(this);
    }

    // 初始化面板
    public initPanel():void{
        
    }

    // 初始化面板数据
    public initData():void{
    }

    public initEvent():void
    {

    }

    public removeEvent():void
    {

    }

    // 进入面板
    public onEnter():void{
    }

    // 退出面板
    public onExit():void{
        
    }

    // 关闭面板
    public closePanel():void{
        this.removeEvent();
        this.panelData = null;
        this.assets = null;
        PopUpManager.removePopUp(this);
        ObjectUtils.delObj(this);
    }    

    // 获取面板宽度
    public getWidth():number{
        return this.width;
    }    

    // 获取面板高度
    public getHeight():number{
        return this.height;
    }   

    public dispose():void
    {
        ObjectUtils.delObj(this);
    } 
}

