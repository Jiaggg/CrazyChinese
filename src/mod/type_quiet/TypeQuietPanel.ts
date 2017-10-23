class TypeQuietPanel extends BasePanel{
    public constructor(){
        super();
    }
	private bg: egret.Bitmap = null;
    private btnBack:EButton = null;
    private loadSheet:egret.SpriteSheet = null;

    private bgword:egret.Bitmap = null;
    private txtword:egret.TextField = null;
    private bgPinyin:egret.Bitmap = null;
    private txtPinyin:egret.TextField = null;
    private btnPause:EButton = null;
    private bgTime:egret.Bitmap = null;
    private barTime:egret.Bitmap = null;
    private txtTime:egret.TextField = null;

    private wordItems:Array<WordItem> = null;
    // 初始化面板
    public initPanel():void{
        this.wordItems = new Array<WordItem>();

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

        this.bgword = new EBitmap("btn_type");
        this.bgword.x = 100;
        this.bgword.y = 100;
        this.addChild(this.bgword);   

        this.txtword = new ETextField();
        this.txtword.size = 110;
        this.txtword.textColor = 0xFFFFFF;
        this.txtword.bold = true;
        this.txtword.stroke = 1;
        this.txtword.strokeColor = 0x000000;
        this.txtword.width = this.bgword.width;
        this.txtword.x = this.bgword.x ;
        this.txtword.y =  this.bgword.y + 35;
        this.txtword.textAlign = "center";
        this.txtword.text = "玉";
        this.addChild(this.txtword);

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

        for(let item in this.wordItems)
        {
            ObjectUtils.delObj(item);
        }
        TypeQuietManager.getInstance().setCurLev(1);
        let randomWords:Array<string> = TypeQuietManager.getInstance().randomWords;
        let rows:number = TypeQuietManager.getInstance().wordLevData.rows;
        let columns:number = TypeQuietManager.getInstance().wordLevData.columns;
        let index:number = 0;
        for (var i = 0; i < rows; i ++) 
            {
                for (var j = 0; j < columns; j ++) 
                {
                    let item = new WordItem(this, this.onwordItemClick, index, "cell_bg","cell_bg", false, 0);
                    item.x = 60 + (item.width + 5) * i;
                    item.y = 400 + (item.height + 5) * j;
                    item.word = randomWords[index];
                    this.addChild(item);
                    this.wordItems[index] = item;
                    index ++ ;
                }
            }
    }
    public onBtnBackTouchTap(e:egret.TouchEvent):void
    {
        this.closePanel();
    }

    public onwordItemClick(index:number):void
    {
        let item:WordItem = this.wordItems[index];
        let isRight:boolean = TypeQuietManager.getInstance().checkIsRight(index);
        if(item != null)
        {
            item.isRight = isRight;
        }
    }



}