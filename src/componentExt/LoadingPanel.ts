  /**
    * 加载类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 加载主游戏资源
    */
class LoadingPanel extends egret.Sprite {

    private mySheet: egret.SpriteSheet;
    private pgBg: egret.Bitmap;
    private pgBar: egret.Bitmap;
    private textField: egret.TextField;
    private bg: egret.Sprite = new egret.Sprite();
    private w: number = 0;
    private h: number = 0;
    constructor() {
        super();
        this.mySheet = RES.getRes("load");
        this.createView();
        ObjectUtils.addObj(this);
    }

    private createView(): void {
        this.w = egret.MainContext.instance.stage.stageWidth;
        this.h = egret.MainContext.instance.stage.stageHeight;

        this.bg.graphics.beginFill(0x313131, 1);
        this.bg.graphics.drawRect(0, 0, this.w, this.h);
        this.bg.graphics.endFill();
        this.bg.width = this.w;
        this.bg.height = this.h;
        this.addChild(this.bg);
        this.touchEnabled = true;
        ObjectUtils.addObj(this.bg);

        this.pgBg = new EBitmap("pgBg", this.mySheet);
        this.pgBg.anchorOffsetX = this.pgBg.width/2;
        this.pgBg.anchorOffsetY = this.pgBg.height/2;
        this.pgBg.x = this.w / 2;
        this.pgBg.y = this.h / 2;
        this.addChild(this.pgBg);

        this.pgBar = new EBitmap("pgBar", this.mySheet);
        this.pgBar.texture = this.mySheet.getTexture("pgBar");
        // this.pgBar.anchorOffsetX = this.pgBg.width/2;
        this.pgBar.anchorOffsetY = this.pgBg.height/2;
        this.pgBar.x = this.pgBg.x - this.pgBg.width/2 + 5;
        this.pgBar.y = this.h / 2 + 3;
        this.addChild(this.pgBar);

        this.textField = new ETextField();
        this.textField.size = 24;
        this.textField.textColor = UIEnum.TextColors.white;
        this.textField.bold = true;
        this.textField.stroke = 1;
        this.textField.strokeColor = UIEnum.TextColors.black;
        this.addChild(this.textField);
        this.textField.width = 100;
        this.textField.x = this.w / 2 - this.textField.width / 2;
        this.textField.y = this.h / 2 - this.textField.height / 2 - 10;
        this.textField.textAlign = "center";
        this.textField.text = "0%";
    }

    public setProgress(current, total): void {
        var rate: number = Math.round((current / total) * 100);
        this.textField.text = rate + "%";
        this.pgBar.width = 282 * (current / total);
    }

    public dispose():void
    {
        ObjectUtils.delObj(this);
    }
}