var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TypeQuietManager = (function () {
    function TypeQuietManager() {
        this._woldItems = null;
        this._rightwolds = null;
        this._woldItems = new Array();
        this._rightwolds = new Array();
    }
    Object.defineProperty(TypeQuietManager.prototype, "woldItems", {
        get: function () {
            return this._woldItems;
        },
        enumerable: true,
        configurable: true
    });
    TypeQuietManager.prototype.addwoldItem = function (item) {
        var len = this._woldItems.length;
        this._woldItems[len] = item;
    };
    TypeQuietManager.prototype.removeAllwoldItems = function () {
        for (var item in this._woldItems) {
            ObjectUtils.delObj(item);
        }
    };
    TypeQuietManager.prototype.removewoldItemNyIndex = function (index) {
        ObjectUtils.delObj(this._woldItems[index]);
    };
    return TypeQuietManager;
}());
__reflect(TypeQuietManager.prototype, "TypeQuietManager");
//# sourceMappingURL=TypeQuietManager.js.map