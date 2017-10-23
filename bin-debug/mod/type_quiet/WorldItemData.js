var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var woldItemData = (function () {
    function woldItemData() {
        // 汉字id
        this.woldID = 0;
        // 形近字id列表
        this.nearlywolds = new Array();
        // 形近字个数
        this.nearlyNum = 0;
        // 汉字data
        this.woldData = null;
    }
    return woldItemData;
}());
__reflect(woldItemData.prototype, "woldItemData");
//# sourceMappingURL=wordItemData.js.map