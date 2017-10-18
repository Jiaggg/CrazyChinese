/**
  * 图片button类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 可以有图片，文字，动画
  * todo:九宫格、多动画、图字等
  */
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
var EButton = (function (_super) {
    __extends(EButton, _super);
    /**
    * imgName       图片
    * backFun       点击方法 如果需要在backFun中使用this的，小心使用这个
    * descStr       按钮描述
    * fontSize      字体大小
    * cartoonType   动画类型 1:【可爱】按下变小，放开弹大 2:按下变小，放开轻微弹大 3：按下变小，放开变大
    * 注意：如果有动画的话，只有动画结束才会触发click事件
    */
    function EButton(context, imgName, backFun, data, descStr, fontSize, cartoonType, assetsName) {
        if (backFun === void 0) { backFun = null; }
        if (data === void 0) { data = null; }
        if (descStr === void 0) { descStr = ""; }
        if (fontSize === void 0) { fontSize = UIEnum.FontSize.buttonSize; }
        if (cartoonType === void 0) { cartoonType = 1; }
        if (assetsName === void 0) { assetsName = "assets"; }
        var _this = _super.call(this) || this;
        _this.assets = RES.getRes("assets"); //名称不一样的话需要修改
        _this.isPlayCartoon = false;
        _this.cartoonType = 1;
        _this.fontSize = UIEnum.FontSize.buttonSize;
        _this.textAlign = UIEnum.TextAlign.center;
        _this.param = { context: null, data: null }; //回调参数
        _this.param.context = context;
        _this.param.data = data;
        _this.init(imgName, backFun, descStr, fontSize, cartoonType, assetsName);
        ObjectUtils.addObj(_this);
        return _this;
    }
    EButton.prototype.init = function (imgName, backFun, descStr, fontSize, cartoonType, assetsName) {
        if (backFun === void 0) { backFun = null; }
        if (descStr === void 0) { descStr = ""; }
        if (fontSize === void 0) { fontSize = UIEnum.FontSize.buttonSize; }
        if (cartoonType === void 0) { cartoonType = 1; }
        if (assetsName === void 0) { assetsName = "assets"; }
        this.cartoonType = cartoonType;
        this.backFun = backFun;
        this.fontSize = fontSize;
        this.btnImg = new egret.Bitmap();
        if (assetsName != "assets") {
            this.assets = RES.getRes(assetsName);
        }
        this.btnImg.texture = this.assets.getTexture(imgName);
        this.addChild(this.btnImg);
        this.initText(descStr);
        this.touchEnabled = true;
        if (this.backFun != null) {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbuttonTouchTap, this);
        }
    };
    EButton.prototype.onbuttonTouchTap = function (e) {
        if (this.isPlayCartoon) {
            return;
        }
        this.isPlayCartoon = true;
        var onComplete2 = function () {
            this.isPlayCartoon = false;
            if (this.backFun != null) {
                this.backFun.apply(this.param.context, [this.param.data]);
            }
        };
        if (this.cartoonType > 0) {
            var onComplete1 = function () {
                if (this.cartoonType == 1) {
                    egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, x: this.x - this.btnImg.width / 4, y: this.y - this.btnImg.height / 4 }, 200, egret.Ease.elasticOut).call(onComplete2, this);
                }
                else if (this.cartoonType == 2) {
                    egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, x: this.x - this.btnImg.width / 4, y: this.y - this.btnImg.height / 4 }, 200, egret.Ease.backOut).call(onComplete2, this);
                }
                else if (this.cartoonType == 3) {
                    egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, x: this.x - this.btnImg.width / 4, y: this.y - this.btnImg.height / 4 }, 80).call(onComplete2, this);
                }
            };
            egret.Tween.get(this).to({ scaleX: 0.5, scaleY: 0.5, x: this.x + this.btnImg.width / 4, y: this.y + this.btnImg.height / 4 }, 80, egret.Ease.sineIn).call(onComplete1, this);
        }
        else {
            onComplete2.apply(null);
        }
    };
    //设置绑定数据
    EButton.prototype.setBindData = function (data) {
        this.param.data = data;
    };
    //获取绑定数据
    EButton.prototype.getBindData = function () {
        return this.param.data;
    };
    EButton.prototype.getBitmap = function () {
        return this.btnImg;
    };
    Object.defineProperty(EButton.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
            this.initText(text);
        },
        enumerable: true,
        configurable: true
    });
    EButton.prototype.initText = function (world) {
        if (world != "") {
            if (this.textField == null) {
                this.textField = new ETextField();
                this.textField.size = this.fontSize;
                this.textField.textAlign = this.textAlign;
                this.textField.stroke = 1;
                this.textField.strokeColor = UIEnum.TextColors.glass;
                this.textField.width = this.btnImg.width;
                this.addChild(this.textField);
            }
            this.textField.text = world;
            this.textField.x = this.btnImg.width / 2 - this.textField.width / 2;
            this.textField.y = this.btnImg.height / 2 - this.textField.height / 2;
        }
    };
    return EButton;
}(egret.DisplayObjectContainer));
__reflect(EButton.prototype, "EButton");
//# sourceMappingURL=EButton.js.map