  /**
	* 游戏配置文件
	* by dily
	* (c) copyright 2014 - 2035
	* All Rights Reserved. 
	* 存放游戏的配置数据
	* 比如：游戏界面尺寸、分享随机百分比、获取系统数据
    */
module MainNotify {

	//横屏竖屏切换
	export var onOrientationChange:string = "onOrientationChange";
	//陀螺仪监听
	export var onDeviceOrientation:string = "onDeviceOrientation";
	//摇一摇监听
	export var onDeviceMotion:string = "onDeviceMotion";
	//关闭提示
	export var closeAlertNotify:string = "closeAlertNotify";	
	//关闭分享
	export var closeShareNotify:string = "closeAlertNotify";
	//更新分享信息
	export var updateShareNotify:string = "updateShareNotify";

	/**面板开关事件*/
	//打开开始界面
	export var openStartPanelNotify:string = "openStartPanelNotify";
	//关闭开始界面
	export var closeStartPanelNotify:string = "closeStartPanelNotify";

	//打开游戏模式界面  
 	export var openGameTypePanelNotify:string = "openGameTypePanelNotify";
	//关闭游戏模式界面
	export var closeGameTypePanelNotify:string = "closeGameTypePanelNotify";


	//打开静界面  Type1界面
 	export var openGameType1PanelNotify:string = "openGameType1PanelNotify";
	//关闭静界面
	export var closeGameType1PanelNotify:string = "closeGameType1PanelNotify";

	//打开心界面  Type2界面
 	export var openGameType2PanelNotify:string = "openGameType1Pane2Notify";
	//关闭静界面
	export var closeGameType2PanelNotify:string = "closeGameType2PanelNotify";

	//打开禅界面  Type3界面
 	export var openGameType3PanelNotify:string = "openGameType3PanelNotify";
	//关闭静界面
	export var closeGameType3PanelNotify:string = "closeGameType3PanelNotify";




	//打开游戏界面
	export var openGamePanelNotify:string = "openGamePanelNotify";
	//关闭游戏界面
	export var closeGamePanelNotify:string = "closeGamePanelNotify";
	//打开结束界面
	export var openGameOverPanelNotify:string = "openGameOverPanelNotify";
	//关闭结束界面
	export var closeGameOverPanelNotify:string = "closeGameOverPanelNotify";

	//打开设置界面
	export var openSetPanelNotify:string = "openSetPanelNotify";
	//关闭设置界面
	export var closeSetPanelNotify:string = "closeSetPanelNotify";
	//打开提示界面
	export var openAlertPanelNotify:string = "openAlertPanelNotify";
	//关闭提示界面
	export var closeAlertPanelNotify:string = "closeAlertPanelNotify";

}



