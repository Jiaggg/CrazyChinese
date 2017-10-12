var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
  * 继承bitmap的自定义bitmap
  * by jia
  * assets: 图集
  * textureName ：图集key
  */
var EBitmap = (function (_super) {
    __extends(EBitmap, _super);
    function EBitmap(textureName, assets) {
        if (assets === void 0) { assets = null; }
        var _this = _super.call(this) || this;
        if (assets == null) {
            assets = RES.getRes("assets");
        }
        _this.init(assets, textureName);
        return _this;
    }
    EBitmap.prototype.init = function (assets, textureName) {
        this.texture = assets.getTexture(textureName);
    };
    return EBitmap;
}(egret.Bitmap));
__reflect(EBitmap.prototype, "EBitmap");
//# sourceMappingURL=EBitmap.js.map