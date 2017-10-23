class TypeQuietManager 
{

	private _woldItems:Array<woldItem> = null;
	private _rightwolds:Array<woldData> = null;
	
	public constructor() 
	{
		this._woldItems = new Array<woldItem>();
		this._rightwolds = new Array<woldData>();
	}
	get woldItems():Array<woldItem>{
		return this._woldItems;
	}
	
	public addwoldItem(item:woldItem):void
	{
		let len:number = this._woldItems.length;
		this._woldItems[len] = item;
	}
	
	public removeAllwoldItems():void
	{
		for(let item in this._woldItems)
		{
			ObjectUtils.delObj(item);
		}
	}

	public removewoldItemNyIndex(index:number):void
	{
		ObjectUtils.delObj(this._woldItems[index]);
	}


}