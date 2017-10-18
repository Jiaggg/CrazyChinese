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
var TypeQuietPanel = (function (_super) {
    __extends(TypeQuietPanel, _super);
    function TypeQuietPanel() {
        var _this = _super.call(this) || this;
        _this.bg = null;
        _this.btnBack = null;
        _this.loadSheet = null;
        _this.bgWorld = null;
        _this.txtWorld = null;
        _this.bgPinyin = null;
        _this.txtPinyin = null;
        _this.btnPause = null;
        _this.bgTime = null;
        _this.barTime = null;
        _this.txtTime = null;
        _this.worldItems = [];
        return _this;
    }
    // 初始化面板
    TypeQuietPanel.prototype.initPanel = function () {
        // this.panelData.closeType = UIEnum.CloseType.cache;
        this.loadSheet = RES.getRes("load");
        this.bg = new EBitmap("bg_1");
        this.bg.width = GameConfig.curWidth();
        this.bg.height = GameConfig.curHeight();
        this.addChild(this.bg);
        this.bg.touchEnabled = false;
        this.btnBack = new EButton(this, "restart", null, null, "后退", 80, 2);
        this.btnBack.x = 10;
        this.btnBack.y = 10;
        this.addChild(this.btnBack);
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnBackTouchTap, this);
        this.bgWorld = new EBitmap("btn_type");
        this.bgWorld.x = 100;
        this.bgWorld.y = 100;
        this.addChild(this.bgWorld);
        this.txtWorld = new ETextField();
        this.txtWorld.size = 110;
        this.txtWorld.textColor = 0xFFFFFF;
        this.txtWorld.bold = true;
        this.txtWorld.stroke = 1;
        this.txtWorld.strokeColor = 0x000000;
        this.txtWorld.width = this.bgWorld.width;
        this.txtWorld.x = this.bgWorld.x;
        this.txtWorld.y = this.bgWorld.y + 35;
        this.txtWorld.textAlign = "center";
        this.txtWorld.text = "玉";
        this.addChild(this.txtWorld);
        this.bgPinyin = new EBitmap("word_spell_bg");
        this.bgPinyin.x = 300;
        this.bgPinyin.y = 180;
        this.addChild(this.bgPinyin);
        this.txtPinyin = new ETextField();
        this.txtPinyin.size = 40;
        this.txtPinyin.textColor = 0xFFFFFF;
        this.txtPinyin.bold = true;
        this.txtPinyin.stroke = 1;
        this.txtPinyin.strokeColor = 0x000000;
        this.addChild(this.txtPinyin);
        this.txtPinyin.width = this.bgPinyin.width;
        this.txtPinyin.x = this.bgPinyin.x;
        this.txtPinyin.y = this.bgPinyin.y + 10;
        this.txtPinyin.textAlign = "center";
        this.txtPinyin.text = "su";
        this.bgTime = new EBitmap("pgBg", this.loadSheet);
        this.bgTime.anchorOffsetX = this.bgTime.width / 2;
        this.bgTime.anchorOffsetY = this.bgTime.height / 2;
        this.bgTime.x = this.w / 2;
        this.bgTime.y = this.h / 2;
        this.addChild(this.bgTime);
        this.barTime = new EBitmap("pgBar", this.loadSheet);
        // this.pgBar.anchorOffsetX = this.pgBg.width/2;
        this.barTime.anchorOffsetY = this.barTime.height / 2;
        this.barTime.x = this.barTime.x - this.barTime.width / 2 + 10;
        this.barTime.y = this.h / 2 + 7;
        this.addChild(this.barTime);
        this.txtTime = new ETextField();
        this.txtTime.size = 24;
        this.txtTime.textColor = 0xFFFFFF;
        this.txtTime.bold = true;
        this.txtTime.stroke = 1;
        this.txtTime.strokeColor = UIEnum.TextColors.black;
        this.addChild(this.txtTime);
        this.txtTime.width = this.bgTime.width;
        this.txtTime.x = this.bgTime.x;
        this.txtTime.y = this.bgTime.y;
        this.txtTime.textAlign = "center";
        this.txtTime.text = "30";
    };
    TypeQuietPanel.prototype.updateData = function () {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                var item = new WorldItem(this, null, "cell_bg", "cell_bg", false, 0);
                item.x = 60 + (item.width + 5) * i;
                item.y = 400 + (item.height + 5) * j;
                this.addChild(item);
                this.worldItems[i] = item;
            }
        }
    };
    TypeQuietPanel.prototype.onBtnBackTouchTap = function (e) {
        PanelManager.closePanel(this);
    };
    return TypeQuietPanel;
}(BasePanel));
__reflect(TypeQuietPanel.prototype, "TypeQuietPanel");
//# sourceMappingURL=TypeQuietPanel.js.map