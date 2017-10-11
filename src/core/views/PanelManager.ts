  /**
    * 面板管理类
    * by dily
    * (c) copyright false,0,0,2014 - 2035
    * All Rights Reserved. 
    * 面板的管理类
    */
module PanelManager {

	var gameType1:GameType1Panel = null;
	var gameType2:GameType2Panel = null;
	var gameType3:GameType3Panel = null;


    var startPanel:StartPanel;
    var gamePanel:GamePanel;
    var gameOverPanel:GameOverPanel;



	// 初始化所有面板
	export function initPanel():void{ 
		var _width = document.documentElement.clientWidth;
    	var _height = document.documentElement.clientHeight;
    	if(_width < _height){
    		GlobalData.initIsVertical = true;
    	}

        Global.addEventListener(MainNotify.openStartPanelNotify,this.openStartPanel,this)
        Global.addEventListener(MainNotify.closeStartPanelNotify,this.closeStartPanel,this)

        Global.addEventListener(MainNotify.openGamePanelNotify,this.openGamePanel,this)
        Global.addEventListener(MainNotify.closeGamePanelNotify,this.closeGamePanel,this)

        Global.addEventListener(MainNotify.openGameOverPanelNotify,this.openGameOverPanel,this)
        Global.addEventListener(MainNotify.closeGameOverPanelNotify,this.closeGameOverPanel,this)

		Global.addEventListener(MainNotify.openGameType1PanelNotify,this.openGameType1Panel,this);
        Global.addEventListener(MainNotify.closeGameType1PanelNotify,this.closeGameType1Panel,this);

		Global.addEventListener(MainNotify.openGameType2PanelNotify,this.openGameType2Panel,this);
        Global.addEventListener(MainNotify.closeGameType2PanelNotify,this.closeGameType2Panel,this);

		Global.addEventListener(MainNotify.openGameType3PanelNotify,this.openGameType3Panel,this);
        Global.addEventListener(MainNotify.closeGameType3PanelNotify,this.closeGameType3Panel,this);

	} 

	// 打开模式1界面
	export function openGameType1Panel():void{ 
		if(this.gameType1 == null){
			this.gameType1 = new GameType1Panel();
		}
		PopUpManager.addPopUp(this.gameType1,false,0,0,0);
		this.gameType1.updateData();
	} 
	// 关闭模式1界面
	export function closeGameType1Panel():void{ 
		if(this.gameType1 != null){
			PopUpManager.removePopUp(this.gameType1,3);
			this.gameType1 = null;
		}
	} 

	// 打开模式2界面
	export function openGameType2Panel():void{ 
		if(this.gameType2 == null){
			this.gameType2 = new GameType2Panel();
		}
		PopUpManager.addPopUp(this.gameType2,false,0,0,0);
		this.gameType2.updateData();
	} 
	// 关闭模式2界面
	export function closeGameType2Panel():void{ 
		if(this.gameType2 != null){
			PopUpManager.removePopUp(this.gameType2,3);
			this.gameType2 = null;
		}
	} 

	// 打开模式3界面
	export function openGameType3Panel():void{ 
		if(this.gameType3 == null){
			this.gameType3 = new GameType3Panel();
		}
		PopUpManager.addPopUp(this.gameType3,false,0,0,0);
		this.gameType3.updateData();
	} 
	// 关闭模式3界面
	export function closeGameType3Panel():void{ 
		if(this.gameType3 != null){
			PopUpManager.removePopUp(this.gameType3,3);
			this.gameType3 = null;
		}
	} 


	// 打开开始界面
	export function openStartPanel():void{ 
		if(this.startPanel == null){
			this.startPanel = new StartPanel();
		}
		this.startPanel.updateData();
		PopUpManager.addPopUp(this.startPanel,false,0,0,0);
	} 
	// 关闭开始界面
	export function closeStartPanel():void{ 
		if(this.startPanel != null){
			PopUpManager.removePopUp(this.startPanel,3);
			this.startPanel = null;
		}
	} 



	// 打开游戏界面
	export function openGamePanel():void{ 
		if(this.gamePanel == null){
			this.gamePanel = new GamePanel();
			PopUpManager.addPopUp(this.gamePanel,false,0,0,3);
		}
	} 
	// 关闭游戏界面
	export function closeGamePanel():void{ 
		if(this.gamePanel != null){
			PopUpManager.removePopUp(this.gamePanel,3);
			this.gamePanel = null;
		}
	} 
	// 打开结束界面
	export function openGameOverPanel():void{ 
		if(this.gameOverPanel == null){
			this.gameOverPanel = new GameOverPanel();
			PopUpManager.addPopUp(this.gameOverPanel,false,0,0,3);
		}
	} 
	// 关闭结束界面
	export function closeGameOverPanel():void{ 
		if(this.gameOverPanel != null){
			PopUpManager.removePopUp(this.gameOverPanel,3);
			this.gameOverPanel = null;
		}
	} 
}


