class woldItemData {
	public constructor() {
	}

	// 汉字id
	public woldID:number = 0;
	// 形近字id列表
    public nearlywolds:Array<NearlywoldsData> = new Array<NearlywoldsData>();
	// 形近字个数
	public nearlyNum:number = 0;
	// 汉字data
	public woldData:woldData = null

}