var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var woldData = (function () {
    function woldData() {
        // 汉字id
        this.woldID = 0;
        // 汉字拼音
        this.woldSpell = "";
        // 汉字中文
        this.woldName = "";
        // 汉字释义
        this.desc = "";
    }
    return woldData;
}());
__reflect(woldData.prototype, "woldData");
//# sourceMappingURL=wordData.js.map