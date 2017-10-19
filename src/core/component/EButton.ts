/**
  * 图片button类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  * 可以有图片，文字，动画
  * todo:九宫格、多动画、图字等
  */

class EButton extends egret.DisplayObjectContainer {

    private textField: egret.TextField;
    private assets: egret.SpriteSheet = RES.getRes("assets");//名称不一样的话需要修改
    private btnImg: egret.Bitmap;
    private backFun: Function;
    private isPlayCartoon: Boolean = false;
    private cartoonType: number = 1;
    private fontSize:number = UIEnum.FontSize.buttonSize;
    private textAlign:string = UIEnum.TextAlign.center;
    private param = { context: null, data: null };//回调参数
    /**
    * imgName       图片
    * backFun       点击方法 如果需要在backFun中使用this的，小心使用这个
    * descStr       按钮描述
    * fontSize      字体大小
    * cartoonType   动画类型 1:【可爱】按下变小，放开弹大 2:按下变小，放开轻微弹大 3：按下变小，放开变大
    * 注意：如果有动画的话，只有动画结束才会触发click事件
    */
    public constructor(context: any, imgName: string, backFun: Function = null, data:any = null, descStr: string = "", fontSize: number = UIEnum.FontSize.buttonSize, cartoonType: number = 1, assetsName: string = "assets") {
        super();
        this.param.context = context;
        this.param.data = data;
        this.init(imgName, backFun, descStr, fontSize, cartoonType, assetsName);
        ObjectUtils.addObj(this);
    }

    private init(imgName: string, backFun: Function = null, descStr: string = "", fontSize: number = UIEnum.FontSize.buttonSize, cartoonType: number = 1, assetsName: string = "assets"): void {
        this.cartoonType = cartoonType;
        this.backFun = backFun;
        this.fontSize = fontSize;
        this.btnImg = new egret.Bitmap();
        if (assetsName != "assets") {
            this.assets = RES.getRes(assetsName);
        }
        this.btnImg.texture = this.assets.getTexture(imgName);
        this.addChild(this.btnImg);
        this.initText(descStr);
        this.touchEnabled = true;
        if(this.backFun != null)
        {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbuttonTouchTap, this);
        }
    }

    private onbuttonTouchTap(e): void {
        if (this.isPlayCartoon) {
            return;
        }
        this.isPlayCartoon = true;
        var onComplete2: Function = function () {
            this.isPlayCartoon = false;
            if (this.backFun != null) {
                    this.backFun.apply(this.param.context, [this.param.data]);
                }
        };
        if(this.cartoonType > 0){
            var onComplete1: Function = function () {
                if (this.cartoonType == 1) {
                    egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, x: this.x - this.btnImg.width / 4, y: this.y - this.btnImg.height / 4 }, 200, egret.Ease.elasticOut).call(onComplete2, this);
                } else if (this.cartoonType == 2) {
                    egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, x: this.x - this.btnImg.width / 4, y: this.y - this.btnImg.height / 4 }, 200, egret.Ease.backOut).call(onComplete2, this);
                } else if (this.cartoonType == 3) {
                    egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, x: this.x - this.btnImg.width / 4, y: this.y - this.btnImg.height / 4 }, 80).call(onComplete2, this);
                }
            };
            egret.Tween.get(this).to({ scaleX: 0.5, scaleY: 0.5, x: this.x + this.btnImg.width / 4, y: this.y + this.btnImg.height / 4 }, 80, egret.Ease.sineIn).call(onComplete1, this);
        }
        else{
            onComplete2.apply(null);
        }
    }

    //设置绑定数据
    public setBindData(data): void {
        this.param.data = data;
    }

    //获取绑定数据
    public getBindData(): any {
        return this.param.data;
    }

    public getBitmap(): egret.Bitmap {
        return this.btnImg;
    }

    private _text:string;
    get text():string
    {
        return this._text;
    }
    set text(text:string)
    {
        this._text = text;
        this.initText(text)
    }

    private initText(world:string):void
    {
        if (world != "") 
        {
            if( this.textField == null)
            {
                this.textField = new ETextField();
                this.textField.size = this.fontSize;
                this.textField.textAlign = this.textAlign;
                this.textField.stroke = 1;
                this.textField.strokeColor = UIEnum.TextColors.glass;
                this.textField.width = this.btnImg.width;
                this.addChild(this.textField);
            }
            this.textField.text = world;
            this.textField.x = this.btnImg.width / 2 - this.textField.width / 2;
            this.textField.y = this.btnImg.height / 2 - this.textField.height / 2;
        }
    }

    public dispose():void
    {
        if(this.cartoonType)
        {
            egret.Tween.removeTweens(this);
        }
       this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onbuttonTouchTap, this);
       this.backFun = null
    } 


}
   