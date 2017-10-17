var UIEnum;
(function (UIEnum) {
    // 颜色表
    UIEnum.TextColors = {
        glass: 0x000000,
        white: 0xFFFFFF,
        milkWhite: 0xfbf1af,
        grayWhite: 0xceb6a2,
        yellow: 0xffff00,
        lightYellow: 0xffd375,
        orangeYellow: 0xff9900,
        red: 0xf11300,
        green: 0x00e500,
        blue: 0x1a94d7,
        grayBlue: 0x2f5177,
        purple: 0xe938f2,
        pink: 0xFF3030,
        black: 0x2e2d2d,
        golden: 0xFFD700 //金色
    };
    //字体大小表
    UIEnum.FontSize = {
        littleSize: 12,
        middleSize: 18,
        normalSize: 24,
        buttonSize: 30,
        bigSize: 36 //大型字体大小
    };
    UIEnum.TextAlign = {
        center: "center",
        left: "left",
        right: "right"
    };
    UIEnum.CloseType = {
        // 直接关闭
        close: 1,
        // 缓存界面
        cache: 2,
        // 不关闭
        ignort: 3
    };
    UIEnum.PanelEffectType = {
        /**没有动画 */
        none: 0,
        /**从中间轻微弹出 */
        center1: 1,
        /**从中间猛烈弹出 */
        center2: 2,
        /**：从左向右 */
        left_right: 3,
        /**从右向左 */
        right_left: 4,
        /**从上到下  */
        up_down: 5,
        /**从下到上 */
        down_up: 6
    };
})(UIEnum || (UIEnum = {}));
//# sourceMappingURL=UIEnum.js.map