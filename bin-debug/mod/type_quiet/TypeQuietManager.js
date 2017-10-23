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
var TypeQuietManager = (function (_super) {
    __extends(TypeQuietManager, _super);
    function TypeQuietManager() {
        var _this = _super.call(this) || this;
        _this._wordLevData = null;
        _this._wordBaseData = null;
        _this._rightwords = null;
        _this._randomWords = null;
        _this._curLev = 0;
        _this._curWordID = 0;
        _this._curName = "";
        _this._rightwords = new Array();
        _this.setCurLev(0);
        return _this;
    }
    TypeQuietManager.getInstance = function () {
        if (this._instance == null)
            this._instance = new TypeQuietManager();
        return this._instance;
    };
    Object.defineProperty(TypeQuietManager.prototype, "curLev", {
        get: function () {
            return this._curLev;
        },
        enumerable: true,
        configurable: true
    });
    TypeQuietManager.prototype.setCurLev = function (lev) {
        this._curLev = lev;
        this._wordLevData = DataTemplateManager.getInstance().getWordLeveDataByLev(this._curLev);
        if (this._wordLevData != null) {
            this._curWordID = this._wordLevData.wordID;
            this._wordBaseData = DataTemplateManager.getInstance().getWordBaseDataByID(this._curWordID);
            this._curName = this._wordBaseData.wordName;
            this.InitRandoWords();
        }
    };
    TypeQuietManager.prototype.InitRandoWords = function () {
        this._randomWords = new Array();
        var nearlywords = this._wordBaseData.nearlywords;
        var totalNum = this._wordLevData.gridNum;
        var rightNum = this._wordLevData.rightNum;
        var nearlyLen = nearlywords.length;
        // 随机形近字
        for (var i = 0; i < totalNum; i++) {
            var index = Global.GetRandomNum(0, nearlyLen - 1);
            this._randomWords[i] = nearlywords[index];
        }
        // 随机正确的位置，修改
        this._rightwords = Global.getRandomCount(rightNum, 1, this._randomWords.length);
        for (var i = 0; i < this._rightwords.length; i++) {
            this._randomWords[i] = this._curName;
        }
    };
    Object.defineProperty(TypeQuietManager.prototype, "randomWords", {
        get: function () {
            return this._randomWords;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeQuietManager.prototype, "wordBaseData", {
        get: function () {
            return this._wordBaseData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeQuietManager.prototype, "wordLevData", {
        get: function () {
            return this._wordLevData;
        },
        enumerable: true,
        configurable: true
    });
    TypeQuietManager.prototype.checkIsRight = function (index) {
        return this._randomWords[index] == this._curName;
    };
    TypeQuietManager._instance = null;
    return TypeQuietManager;
}(BaseManager));
__reflect(TypeQuietManager.prototype, "TypeQuietManager");
//# sourceMappingURL=TypeQuietManager.js.map