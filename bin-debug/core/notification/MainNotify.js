/**
  * 游戏配置文件
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 存放游戏的配置数据
  * 比如：游戏界面尺寸、分享随机百分比、获取系统数据
  */
var MainNotify;
(function (MainNotify) {
    //横屏竖屏切换
    MainNotify.onOrientationChange = "onOrientationChange";
    //陀螺仪监听
    MainNotify.onDeviceOrientation = "onDeviceOrientation";
    //摇一摇监听
    MainNotify.onDeviceMotion = "onDeviceMotion";
    //关闭提示
    MainNotify.closeAlertNotify = "closeAlertNotify";
    //关闭分享
    MainNotify.closeShareNotify = "closeAlertNotify";
    //更新分享信息
    MainNotify.updateShareNotify = "updateShareNotify";
    /**面板开关事件*/
    //打开开始界面
    MainNotify.openStartPanelNotify = "openStartPanelNotify";
    //关闭开始界面
    MainNotify.closeStartPanelNotify = "closeStartPanelNotify";
    //打开游戏模式界面  
    MainNotify.openGameTypePanelNotify = "openGameTypePanelNotify";
    //关闭游戏模式界面
    MainNotify.closeGameTypePanelNotify = "closeGameTypePanelNotify";
    //打开静界面  Type1界面
    MainNotify.openGameType1PanelNotify = "openGameType1PanelNotify";
    //关闭静界面
    MainNotify.closeGameType1PanelNotify = "closeGameType1PanelNotify";
    //打开心界面  Type2界面
    MainNotify.openGameType2PanelNotify = "openGameType1Pane2Notify";
    //关闭静界面
    MainNotify.closeGameType2PanelNotify = "closeGameType2PanelNotify";
    //打开禅界面  Type3界面
    MainNotify.openGameType3PanelNotify = "openGameType3PanelNotify";
    //关闭静界面
    MainNotify.closeGameType3PanelNotify = "closeGameType3PanelNotify";
    //打开游戏界面
    MainNotify.openGamePanelNotify = "openGamePanelNotify";
    //关闭游戏界面
    MainNotify.closeGamePanelNotify = "closeGamePanelNotify";
    //打开结束界面
    MainNotify.openGameOverPanelNotify = "openGameOverPanelNotify";
    //关闭结束界面
    MainNotify.closeGameOverPanelNotify = "closeGameOverPanelNotify";
    //打开设置界面
    MainNotify.openSetPanelNotify = "openSetPanelNotify";
    //关闭设置界面
    MainNotify.closeSetPanelNotify = "closeSetPanelNotify";
    //打开提示界面
    MainNotify.openAlertPanelNotify = "openAlertPanelNotify";
    //关闭提示界面
    MainNotify.closeAlertPanelNotify = "closeAlertPanelNotify";
})(MainNotify || (MainNotify = {}));
//# sourceMappingURL=MainNotify.js.map