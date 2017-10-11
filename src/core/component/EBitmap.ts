  /**
    * 继承bitmap的自定义bitmap
    * by jia
    * assets: 图集
    * textureName ：图集key
    */
class EBitmap extends egret.Bitmap {
	public constructor(assets:egret.SpriteSheet, textureName:string) {
		super();
		if(assets == null)
		{
			assets = RES.getRes("assets");
		}
		this.init(assets, textureName);
	}

	private init(assets:egret.SpriteSheet, textureName:string){
		this.texture = assets.getTexture("bg");
	}
}