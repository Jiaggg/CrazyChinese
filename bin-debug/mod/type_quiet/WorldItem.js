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
var WorldItem = (function (_super) {
    __extends(WorldItem, _super);
    function WorldItem(context, clickFun, rightImg, wrongImg, isEffect, cartoonType) {
        if (isEffect === void 0) { isEffect = false; }
        if (cartoonType === void 0) { cartoonType = 1; }
        var _this = this;
        var imgName = "cell_bg";
        var assetsName = "assets";
        var fontSize = 30;
        var world = "玊";
        var backFun = function () {
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
        _this = _super.call(this, context, imgName, backFun, null, world, fontSize, cartoonType, assetsName) || this;
        _this.initShowImg(rightImg, wrongImg);
        if (isEffect) {
            //TODO 提示特效
        }
        return _this;
    }
    Object.defineProperty(WorldItem.prototype, "world", {
        get: function () {
            return this._world;
        },
        set: function (world) {
            this._world = world;
            this.text = world;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorldItem.prototype, "isRight", {
        get: function () {
            return this._isRight;
        },
        set: function (isRight) {
            this._isRight = isRight;
            this.imgRight.visible = isRight;
            this.imgWrong.visible = !isRight;
        },
        enumerable: true,
        configurable: true
    });
    WorldItem.prototype.initShowImg = function (rightImg, wrongImg) {
        this.imgRight = new EBitmap(rightImg);
        this.addChild(this.imgRight);
        this.imgWrong = new EBitmap(wrongImg);
        this.addChild(this.imgWrong);
        this.imgRight.visible = false;
        this.imgWrong.visible = false;
    };
    return WorldItem;
}(EButton));
__reflect(WorldItem.prototype, "WorldItem");
//# sourceMappingURL=WorldItem.js.map