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
var woldItem = (function (_super) {
    __extends(woldItem, _super);
    function woldItem(context, data, clickFun, param, rightImg, wrongImg, isEffect, cartoonType) {
        if (isEffect === void 0) { isEffect = false; }
        if (cartoonType === void 0) { cartoonType = 1; }
        var _this = this;
        var imgName = "cell_bg";
        var assetsName = "assets";
        var fontSize = 30;
        var wold = "玊";
        var backFun = function () {
            if (clickFun != null) {
                clickFun.apply(context, [param]);
            }
        };
        _this = _super.call(this, context, imgName, backFun, param, wold, fontSize, cartoonType, assetsName) || this;
        _this.initShowImg(rightImg, wrongImg);
        if (isEffect) {
            //TODO 提示特效
        }
        return _this;
    }
    Object.defineProperty(woldItem.prototype, "itemData", {
        get: function () {
            return this._itemData;
        },
        set: function (data) {
            this._itemData = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(woldItem.prototype, "wold", {
        get: function () {
            return this._wold;
        },
        set: function (wold) {
            this._wold = wold;
            this.text = wold;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(woldItem.prototype, "isRight", {
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
    woldItem.prototype.initShowImg = function (rightImg, wrongImg) {
        this.imgRight = new EBitmap(rightImg);
        this.addChild(this.imgRight);
        this.imgWrong = new EBitmap(wrongImg);
        this.addChild(this.imgWrong);
        this.imgRight.visible = false;
        this.imgWrong.visible = false;
    };
    return woldItem;
}(EButton));
__reflect(woldItem.prototype, "woldItem");
//# sourceMappingURL=wordItem.js.map