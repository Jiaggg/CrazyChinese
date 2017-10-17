module UIEnum {
	// 颜色表
	export var TextColors = {
		glass:0x000000,//白色
		white:0xFFFFFF,//白色
		milkWhite:0xfbf1af,//乳白色 
		grayWhite:0xceb6a2,//灰白色
		yellow:0xffff00,//金黄色 
		lightYellow:0xffd375,//淡黄色
		orangeYellow:0xff9900,//橘黄色//道具名称 //玩家姓名
		red:0xf11300,//红色
		green:0x00e500,//绿色 
		blue:0x1a94d7,//蓝色 
		grayBlue:0x2f5177,//墨蓝色 
		purple:0xe938f2,//紫色 
		pink:0xFF3030,//粉色 
		black:0x2e2d2d,//黑色
		golden:0xFFD700 //金色
	}
	//字体大小表
	export var FontSize = {
		littleSize:12,//小型字体大小
		middleSize:18,//中型字体大小
		normalSize:24,//正常字体大小
		buttonSize:30,//正常字体大小
		bigSize:36//大型字体大小
	}

	export var TextAlign = {
		center:"center",
		left:"left",
		right:"right"
	}

	export var CloseType = {
		// 直接关闭
		close:1,
		// 缓存界面
		cache:2,
		// 不关闭
		ignort:3
	}
	export var PanelEffectType = {
	/**没有动画 */
	none:0,
	/**从中间轻微弹出 */
	center1:1,
	/**从中间猛烈弹出 */
	center2:2,
	/**：从左向右 */
	left_right:3,
	/**从右向左 */
	right_left:4,
	/**从上到下  */
	up_down:5,
	/**从下到上 */
	down_up:6
	}
}