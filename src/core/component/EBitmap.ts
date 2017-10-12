  /**
    * 继承bitmap的自定义bitmap
    * by jia
    * assets: 图集
    * textureName ：图集key
    */
class EBitmap extends egret.Bitmap {
	public constructor(textureName:string, assets:egret.SpriteSheet = null) {
		super();
		if(assets == null)
		{
			assets = RES.getRes("assets");
		}
		this.init(assets, textureName);
	}

	private init(assets:egret.SpriteSheet, textureName:string){
		this.texture = assets.getTexture(textureName);
	}
}