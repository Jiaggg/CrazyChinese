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
var GameType3Panel = (function (_super) {
    __extends(GameType3Panel, _super);
    function GameType3Panel() {
        var _this = _super.call(this) || this;
        _this.bg = null;
        _this.btnBack = null;
        return _this;
    }
    // 初始化面板
    GameType3Panel.prototype.initPanel = function () {
        this.bg = new egret.Bitmap();
        this.bg.width = GameConfig.curWidth();
        this.bg.height = GameConfig.curHeight();
        this.bg.texture = this.assets.getTexture("bg_2");
        this.addChild(this.bg);
        this.bg.touchEnabled = false;
        this.btnBack = new EButton(this, "restart", null, null, "后退", 80, 2);
        this.btnBack.x = 10;
        this.btnBack.y = 10;
        this.addChild(this.btnBack);
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnBackTouchTap, this);
        this.updateData();
    };
    GameType3Panel.prototype.updateData = function () {
    };
    GameType3Panel.prototype.onBtnBackTouchTap = function (e) {
        Global.dispatchEvent(MainNotify.closeGameType3PanelNotify, null, false);
        Global.dispatchEvent(MainNotify.openStartPanelNotify, null, false);
    };
    return GameType3Panel;
}(BasePanel));
__reflect(GameType3Panel.prototype, "GameType3Panel");
//# sourceMappingURL=GameType3Panel.js.map