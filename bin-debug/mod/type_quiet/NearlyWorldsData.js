var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NearlywoldsData = (function () {
    function NearlywoldsData() {
        // 汉字id
        this.woldID = 0;
        // 刷新权重
        this.weight = 0;
    }
    return NearlywoldsData;
}());
__reflect(NearlywoldsData.prototype, "NearlywoldsData");
//# sourceMappingURL=NearlywordsData.js.map