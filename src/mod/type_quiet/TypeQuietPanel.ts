class TypeQuietPanel extends BasePanel{
    public constructor(){
        super();
    }
	private bg: egret.Bitmap = null;
    private btnBack:EButton = null;
    private loadSheet:egret.SpriteSheet = null;

    private bgwold:egret.Bitmap = null;
    private txtwold:egret.TextField = null;
    private bgPinyin:egret.Bitmap = null;
    private txtPinyin:egret.TextField = null;
    private btnPause:EButton = null;
    private bgTime:egret.Bitmap = null;
    private barTime:egret.Bitmap = null;
    private txtTime:egret.TextField = null;

    private woldItems:Array<woldItem> = null;
    // 初始化面板
    public initPanel():void{
        this.woldItems = new Array<woldItem>();

        // this.panelData.closeType = UIEnum.CloseType.cache;
        this.loadSheet = RES.getRes("load");
        this.bg = new EBitmap("bg_1");
        this.bg.width = GameConfig.curWidth();
        this.bg.height = GameConfig.curHeight();
        this.addChild(this.bg);   
        this.bg.touchEnabled = false;   

        this.btnBack = new EButton(this,"restart",null,null,"后退",80,2);
        this.btnBack.x = 10;
        this.btnBack.y = 10;   
        this.addChild(this.btnBack);
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnBackTouchTap,this); 

        this.bgwold = new EBitmap("btn_type");
        this.bgwold.x = 100;
        this.bgwold.y = 100;
        this.addChild(this.bgwold);   

        this.txtwold = new ETextField();
        this.txtwold.size = 110;
        this.txtwold.textColor = 0xFFFFFF;
        this.txtwold.bold = true;
        this.txtwold.stroke = 1;
        this.txtwold.strokeColor = 0x000000;
        this.txtwold.width = this.bgwold.width;
        this.txtwold.x = this.bgwold.x ;
        this.txtwold.y =  this.bgwold.y + 35;
        this.txtwold.textAlign = "center";
        this.txtwold.text = "玉";
        this.addChild(this.txtwold);

        this.bgPinyin = new EBitmap("word_spell_bg");
        this.bgPinyin.x = 300;
        this.bgPinyin.y = 180;
        this.addChild(this.bgPinyin);   

        this.txtPinyin = new ETextField()
        this.txtPinyin.size = 40;
        this.txtPinyin.textColor = 0xFFFFFF;
        this.txtPinyin.bold = true;
        this.txtPinyin.stroke = 1;
        this.txtPinyin.strokeColor = 0x000000;
        this.addChild(this.txtPinyin);
        this.txtPinyin.width = this.bgPinyin.width;
        this.txtPinyin.x = this.bgPinyin.x ;
        this.txtPinyin.y = this.bgPinyin.y + 10;
        this.txtPinyin.textAlign = "center";
        this.txtPinyin.text = "su";

        this.bgTime = new EBitmap("pgBg", this.loadSheet);
        this.bgTime.anchorOffsetX = this.bgTime.width/2;
        this.bgTime.anchorOffsetY = this.bgTime.height/2;
        this.bgTime.x = this.w / 2;
        this.bgTime.y = this.h / 2;
        this.addChild(this.bgTime);
        

        this.barTime = new EBitmap("pgBar", this.loadSheet);
        // this.pgBar.anchorOffsetX = this.pgBg.width/2;
        this.barTime.anchorOffsetY = this.barTime.height/2;
        this.barTime.x = this.barTime.x - this.barTime.width/2 + 10;
        this.barTime.y = this.h / 2 + 7;
        this.addChild(this.barTime);

        this.txtTime = new ETextField();
        this.txtTime.size = 24;
        this.txtTime.textColor = 0xFFFFFF;
        this.txtTime.bold = true;
        this.txtTime.stroke = 1;
        this.txtTime.strokeColor = UIEnum.TextColors.black;
        this.addChild(this.txtTime);
        this.txtTime.width = this.bgTime.width;
        this.txtTime.x = this.bgTime.x;
        this.txtTime.y = this.bgTime.y;
        this.txtTime.textAlign = "center";
        this.txtTime.text = "30";
        this.updateData();
	}

    public  updateData():void
    {
        for(let item in this.woldItems)
        {
            ObjectUtils.delObj(item);
        }
       for (var i = 0; i < 8; i ++) 
        {
             for (var j = 0; j < 8; j ++) 
            {
                let len:number = this.woldItems.length;
                let item = new woldItem(this, null, this.onwoldItemClick, len, "cell_bg","cell_bg", false, 0);
                item.x = 60 + (item.width + 5) * i;
                item.y = 400 + (item.height + 5) * j;
                this.addChild(item);
                this.woldItems[len] = item;
            }
        }
    }
    public onBtnBackTouchTap(e:egret.TouchEvent):void
    {
        this.closePanel();
    }

    public onwoldItemClick(index:number):void
    {
        let item:woldItem = this.woldItems[index];
        if(item != null)
        {

        }
    }



}