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
var DataTemplateManager = (function (_super) {
    __extends(DataTemplateManager, _super);
    function DataTemplateManager() {
        var _this = _super.call(this) || this;
        _this.jsres = null;
        _this._wordBaseData = null;
        _this._wordLevData = null;
        _this.jsres = RES.getRes("jsontpl_json");
        _this.initData();
        return _this;
    }
    DataTemplateManager.getInstance = function () {
        if (this._instance == null)
            this._instance = new DataTemplateManager();
        return this._instance;
    };
    DataTemplateManager.prototype.initData = function () {
        this.initWordBaseData();
        this.initWordLevData();
    };
    DataTemplateManager.prototype.initWordBaseData = function () {
        this._wordBaseData = new Object();
        var configData = this.jsres.word_base_data;
        if (configData != null) {
            for (var i = 0; i < configData.length; i++) {
                var wordData = configData[i];
                this._wordBaseData[wordData.wordID] = wordData;
            }
        }
    };
    DataTemplateManager.prototype.getWordBaseDataByID = function (wordID) {
        return this._wordBaseData[wordID];
    };
    DataTemplateManager.prototype.initWordLevData = function () {
        this._wordLevData = new Object();
        var configData = this.jsres.word_lev_data;
        if (configData != null) {
            for (var i = 0; i < configData.length; i++) {
                var wordLevData = configData[i];
                this._wordLevData[wordLevData.lev] = wordLevData;
            }
        }
    };
    DataTemplateManager.prototype.getWordLeveDataByLev = function (curLev) {
        return this._wordLevData[curLev];
    };
    DataTemplateManager._instance = null;
    return DataTemplateManager;
}(BaseManager));
__reflect(DataTemplateManager.prototype, "DataTemplateManager");
//# sourceMappingURL=DataTemplateManager.js.map