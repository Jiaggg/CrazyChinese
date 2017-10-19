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
var ESpriteSheet = (function (_super) {
    __extends(ESpriteSheet, _super);
    function ESpriteSheet(texture) {
        return _super.call(this, texture) || this;
    }
    return ESpriteSheet;
}(egret.SpriteSheet));
__reflect(ESpriteSheet.prototype, "ESpriteSheet");
//# sourceMappingURL=ESpriteSheet.js.map