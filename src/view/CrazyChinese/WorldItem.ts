class WorldItem extends EButton 
{
	private context:any;
	public constructor(context: any, clickFun: Function, rightImg:string, wrongImg:string, isEffect:Boolean = false, cartoonType: number = 1)
	{
		let imgName:string = "cell_bg";
		let assetsName: string = "assets";
		let fontSize: number = 30;
		let	world: string = "玊";
		 var backFun: Function = function () {
            this.isPlayCartoon = false;
            if (this.clickFun != null) {
                    this.clickFun.apply(this.context, [this.param.data]);
                }
            // egret.setTimeout(function () {
            //     if (this.backFun != null) {
            //         this.backFun.apply(this.param.context, [this.param.data]);
            //     }
            // }, this, 300);
        };
		super(context, imgName, backFun, null,  world, fontSize, cartoonType, assetsName);
		this.initShowImg(rightImg, wrongImg);
		if(isEffect)
		{
			//TODO 提示特效
		}

	}
	private imgWrong:EBitmap;
	private imgRight:EBitmap;

    private _world: string; 
	get world(): string {
        return this._world;
    }
    set world(world: string) {
        this._world = world;
		this.text = world;
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