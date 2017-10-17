var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PanelData = (function () {
    function PanelData() {
        this.panelID = GameConfig.getPanelID();
        /**背景是否变黑 */
        this.dark = false;
        /**指定弹窗宽度，定位使用 */
        this.popUpWidth = 0;
        /**指定弹窗高度，定位使用 */
        this.popUpHeight = 0;
        /**0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上 */
        this.effectType = 0;
        /** */
        this.isAlert = false;
        /**关闭方式 */
        this.closeType = UIEnum.CloseType.close;
    }
    return PanelData;
}());
__reflect(PanelData.prototype, "PanelData");
//# sourceMappingURL=PanelData.js.map