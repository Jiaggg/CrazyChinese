class TypeQuietManager extends BaseManager
{
	private _wordLevData:WordLevData = null;
	private _wordBaseData:WordBaseData = null;
	private _rightwords:Array<number> = null;
	private _randomWords:Array<string> = null;
	private _curLev:number = 0
	private _curWordID:number = 0;
	private _curName:string = "";

	public constructor() 
	{
		super();
		this._rightwords = new Array<number>();
		this.setCurLev(0);
	}

	private static _instance:TypeQuietManager = null;
	public static getInstance():TypeQuietManager{
		if(this._instance==null)
			this._instance = new TypeQuietManager();
		return this._instance;
	}

	get curLev():number
	{
		return this._curLev;
	}

	public setCurLev(lev:number):void
	{
		this._curLev = lev;
		this._wordLevData = DataTemplateManager.getInstance().getWordLeveDataByLev(this._curLev);

		if(this._wordLevData != null)
		{
			this._curWordID = this._wordLevData.wordID;
			this._wordBaseData = DataTemplateManager.getInstance().getWordBaseDataByID(this._curWordID);
			this._curName = this._wordBaseData.wordName;
			this.InitRandoWords();
		}
	}

	public InitRandoWords():void
	{
		this._randomWords = new Array<string>();
		let  nearlywords:Array<string> = this._wordBaseData.nearlywords;
		let totalNum = this._wordLevData.gridNum;
		let rightNum = this._wordLevData.rightNum;
		let nearlyLen:number = nearlywords.length
		// 随机形近字
		for (var i = 0; i < totalNum; i ++) 
		{
			let index = Global.GetRandomNum(0, nearlyLen - 1);
			this._randomWords[i] = nearlywords[index];
		}
		// 随机正确的位置，修改
		this._rightwords = Global.getRandomCount(rightNum, 1, this._randomWords.length);
		for (var i = 0; i < this._rightwords.length; i ++) 
		{
			this._randomWords[i] = this._curName;
		}
	}

	get randomWords():Array<string>
	{
		return this._randomWords;
	}

	get wordBaseData():WordBaseData
	{
		return this._wordBaseData;
	}
	get wordLevData():WordLevData
	{
		return this._wordLevData;
	}

	public checkIsRight(index:number):boolean
	{
		return this._randomWords[index] == this._curName;
	}
}