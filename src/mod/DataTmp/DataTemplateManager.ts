class DataTemplateManager extends BaseManager {
	private jsres:any = null;
	public constructor() {
		super();
		this.jsres = RES.getRes("jsontpl_json");
		this.initData();
	}

	private static _instance:DataTemplateManager = null;
	public static getInstance():DataTemplateManager{
		if(this._instance==null)
			this._instance = new DataTemplateManager();
		return this._instance;
	}

	public initData():void
	{
		this.initWordBaseData();
		this.initWordLevData();
	}

	private _wordBaseData:Object= null;
	private initWordBaseData() 
	{
		this._wordBaseData = new Object();
		let configData:Array<WordBaseData> = this.jsres.word_base_data as Array<WordBaseData>;
		if(configData != null)
		{
			for(var i:number = 0; i < configData.length; i++)
			{
				let wordData:WordBaseData = configData[i];
				this._wordBaseData[wordData.wordID] = wordData
			}
		}
	}

	public getWordBaseDataByID(wordID:number):WordBaseData
	{
		return this._wordBaseData[wordID];
	}
	

	private _wordLevData:Object= null;
	private initWordLevData() 
	{
		this._wordLevData = new Object();
		let configData:Array<WordLevData> = this.jsres.word_lev_data as Array<WordLevData>;
		if(configData != null)
		{
			for(var i:number = 0; i < configData.length; i++)
			{
				let wordLevData:WordLevData = configData[i];
				this._wordLevData[wordLevData.lev] = wordLevData
			}
		}
	}

	public getWordLeveDataByLev(curLev:number):WordLevData
	{
		return this._wordLevData[curLev];
	}
	
}