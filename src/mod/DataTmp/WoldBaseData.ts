class WordBaseData {
	public constructor() {
	}
	// 汉字id
	public wordID:number = 0
	// 汉字拼音
	public wordSpell:string = "";
	// 汉字中文
	public wordName:string = "";
	// 汉字释义
	public desc:string = "";
	// 形近字列表
	public nearlywords:Array<string> = new Array<string>();

}