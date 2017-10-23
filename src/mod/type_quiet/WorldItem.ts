class woldItem extends EButton 
{
	private context:any;
	
	public constructor(context: any, data:woldItemData, clickFun: Function, param:any, rightImg:string, wrongImg:string, isEffect:Boolean = false, cartoonType: number = 1)
	{
		let imgName:string = "cell_bg";
		let assetsName: string = "assets";
		let fontSize: number = 30;
		let	wold: string = "玊";
		 var backFun: Function = function () {
            if (clickFun != null) {
                    clickFun.apply(context, [param]);
                }
        };
		super(context, imgName, backFun, param,  wold, fontSize, cartoonType, assetsName);
		this.initShowImg(rightImg, wrongImg);
		if(isEffect)
		{
			//TODO 提示特效
		}

	}
	private _itemData:woldItemData;
	get itemData():woldItemData
	{
		return this._itemData;
	}

	set itemData(data:woldItemData)
	{
		this._itemData = data;
	}

	private imgWrong:EBitmap;
	private imgRight:EBitmap;

    private _wold: string; 
	get wold(): string {
        return this._wold;
    }
    set wold(wold: string) {
        this._wold = wold;
		this.text = wold;
    }

	private _isRight:boolean;
	get isRight():boolean
	{
		return this._isRight;
	}
	set isRight(isRight:boolean){
		this._isRight = isRight;
		this.imgRight.visible = isRight;
		this.imgWrong.visible = !isRight;
	}

	private	initShowImg(rightImg:string, wrongImg:string):void
	{
		this.imgRight = new EBitmap(rightImg);
		this.addChild(this.imgRight);

		this.imgWrong =  new EBitmap(wrongImg);
		this.addChild(this.imgWrong);

		this.imgRight.visible = false;
		this.imgWrong.visible = false;
	}

}