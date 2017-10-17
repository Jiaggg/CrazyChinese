  /**
	* 游戏配置文件
	* by dily
	* (c) copyright 2014 - 2035
	* All Rights Reserved. 
	* 存放游戏的配置数据
	* 比如：游戏界面尺寸、分享随机百分比、获取系统数据
    */
module GameConfig {

	//是否调试显示帧频
	// 以下语句写在游戏初始化方法里
    // if(GameConfig.isDebug){
    //     egret.Profiler.getInstance().run();
    // }
	export var isDebug:boolean = false;
	export var panelID:number = 0;
	//是否在线
	export var isOnLine:boolean = navigator.onLine;

	//是不是微信浏览
	export function isWeiXin():boolean{ 
		var ua = window.navigator.userAgent.toLowerCase(); 
		var microStr = "" + ua.match(/MicroMessenger/i);
		if(microStr == "null"){
			return false;
		}else if(microStr == "micromessenger"){
			return true;
		}
	} 

	//是不是大屏
	export function isBigScreen():boolean{ 
		return (document.body.clientHeight/document.body.clientWidth > 1.32);
	} 

	//获得浏览器类型 pc android ios -- 可扩展为其他 如 微信、qqzone、qq、微博、校内、facebook
	export function systemType():string{ 
		var ua = window.navigator.userAgent.toLowerCase(); 
		var microStr = "" + ua.match(/MicroMessenger/i);
		if(("" + ua.match(/windows nt/i)) == "windows nt"){
			return "windows";
		}else if(("" + ua.match(/iphone/i)) == "iphone"){
			return "ios";
		}else if(("" + ua.match(/android/i)) == "android"){
			return "android";
		}else if(("" + ua.match(/ipad/i)) == "ipad"){
			return "ipad";
		}else if(("" + ua.match(/linux/i)) == "linux"){
			return "linux";
		}else if(("" + ua.match(/mac/i)) == "mac"){
			return "mac";
		}else if(("" + ua.match(/ucbrower/i)) == "ucbrower"){
			return "ucbrower";
		}else{
			console.log("未知系统类型");
		}
	}  

	//获得平台类型 如 微信、qqzone、qq、微博、校内、facebook
	export function platformType():string{ 
		var ua = window.navigator.userAgent.toLowerCase(); 
		if(("" + ua.match(/micromessenger/i)) == "micromessenger"){
			return "micromessenger";
		}else if(("" + ua.match(/qzone/i)) == "qzone"){
			return "qzone";
		}else if(("" + ua.match(/weibo/i)) == "weibo"){
			return "weibo";
		}else if(("" + ua.match(/qq/i)) == "qq"){
			return "qq";
		}else if(("" + ua.match(/renren/i)) == "renren"){
			return "renren";
		}else if(("" + ua.match(/txmicroblog/i)) == "txmicroblog"){
			return "txmicroblog";
		}else if(("" + ua.match(/douban/i)) == "douban"){
			return "douban";
		}else{
			return "other";
		}
	} 

	var curScene:GameScene;
	//当前游戏场景类
	export function gameScene():GameScene{ 
		if(this.curScene == null){
			this.curScene = new GameScene();
		}
		return this.curScene;
	}

	//当前舞台
	export function curStage():egret.Stage{ 
		return egret.MainContext.instance.stage;
	}

	//当前面板
	export var curPanel:egret.DisplayObjectContainer;

	//当前游戏宽度
	export function curWidth():number{ 
		return egret.MainContext.instance.stage.stageWidth;
	}

	//当前游戏宽度
	export function curHeight():number{ 
		return egret.MainContext.instance.stage.stageHeight;
	}

	//是横屏还是竖屏
	export function isVertical():boolean{ 
		var angle = window["orientation"]; 
		if(angle == 90){
			return false;
		}else{
			return true;
		}
	} 
  export function getPanelID():number{
		GameConfig.panelID ++;
		return GameConfig.panelID;
	}

    /**----------------------------------FAQ:-----------------------------*/

	// 横屏解决方法 by 张宇
	// http://bbs.egret-labs.org/thread-529-1-1.html

	//声音解决方法 by east
	// http://bbs.egret-labs.org/forum.php?mod=viewthread&tid=386&pid=1770&page=1&extra=#pid1770

	//js调用ts的方法
	// document_class 查看egretProperties
	// 在egret_loader中有如下代码：
	// var rootClass;
	// if(document_class){
	//     rootClass = egret.getDefinitionByName(document_class);
	// }
	// var rootContainer = new rootClass();
	// rootContainer就是主ts中的this
	// 在index中直接调用rootContainer就ok了

	//ts调用js的方法
	// 使用如下方法：
	// window["_smq"]

	//上传图片
	// http://a3147972.blog.51cto.com/2366547/1551066
	
}



