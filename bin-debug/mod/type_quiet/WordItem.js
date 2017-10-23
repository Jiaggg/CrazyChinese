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
var WordItem = (function (_super) {
    __extends(WordItem, _super);
    function WordItem(context, clickFun, param, rightImg, wrongImg, isEffect, cartoonType) {
        if (isEffect === void 0) { isEffect = false; }
        if (cartoonType === void 0) { cartoonType = 1; }
        var _this = this;
        var imgName = "cell_bg";
        var assetsName = "assets";
        var fontSize = 30;
        var word = "玊";
        var backFun = function () {
            if (clickFun != null) {
                clickFun.apply(context, [param]);
            }
        };
        _this = _super.call(this, context, imgName, backFun, param, word, fontSize, cartoonType, assetsName) || this;
        _this.initShowImg(rightImg, wrongImg);
        if (isEffect) {
            //TODO 提示特效
        }
        return _this;
    }
    Object.defineProperty(WordItem.prototype, "word", {
        get: function () {
            return this._word;
        },
        set: function (word) {
            this._word = word;
            this.text = word;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WordItem.prototype, "isRight", {
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
    WordItem.prototype.initShowImg = function (rightImg, wrongImg) {
        this.imgRight = new EBitmap(rightImg);
        this.addChild(this.imgRight);
        this.imgWrong = new EBitmap(wrongImg);
        this.addChild(this.imgWrong);
        this.imgRight.visible = false;
        this.imgWrong.visible = false;
    };
    return WordItem;
}(EButton));
__reflect(WordItem.prototype, "WordItem");
//# sourceMappingURL=WordItem.js.map