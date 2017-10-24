var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RandomWordData = (function () {
    function RandomWordData() {
        this.index = 0;
        this.word = "";
    }
    return RandomWordData;
}());
__reflect(RandomWordData.prototype, "RandomWordData");
//# sourceMappingURL=RandomWordData.js.map