var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WordLevData = (function () {
    function WordLevData() {
        // 当前关卡
        this.lev = 0;
        // 汉字id
        this.wordID = 0;
        // 正确个数
        this.rightNum = 0;
        // 格子数
        this.gridNum = 0;
        // 行数
        this.rows = 0;
        // 列数
        this.columns = 0;
    }
    return WordLevData;
}());
__reflect(WordLevData.prototype, "WordLevData");
//# sourceMappingURL=WordLevData.js.map