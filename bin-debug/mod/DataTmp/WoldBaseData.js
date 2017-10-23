var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WordBaseData = (function () {
    function WordBaseData() {
        // 汉字id
        this.wordID = 0;
        // 汉字拼音
        this.wordSpell = "";
        // 汉字中文
        this.wordName = "";
        // 汉字释义
        this.desc = "";
        // 形近字列表
        this.nearlywords = new Array();
    }
    return WordBaseData;
}());
__reflect(WordBaseData.prototype, "WordBaseData");
//# sourceMappingURL=WoldBaseData.js.map