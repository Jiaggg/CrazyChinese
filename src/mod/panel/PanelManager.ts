  /**
    * 面板管理类
    * by dily
    * (c) copyright false,0,0,2014 - 2035
    * All Rights Reserved. 
    * 面板的管理类
    */
module PanelManager {

	export var panelList = [];
	var curPanelID = 0;
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
        // Global.addEventListener(MainNotify.openStartPanelNotify,this.openStartPanel,this)
        // Global.addEventListener(MainNotify.closeStartPanelNotify,this.closeStartPanel,this)
        // Global.addEventListener(MainNotify.openGamePanelNotify,this.openGamePanel,this)
        // Global.addEventListener(MainNotify.closeGamePanelNotify,this.closeGamePanel,this)
        // Global.addEventListener(MainNotify.openGameOverPanelNotify,this.openGameOverPanel,this)
        // Global.addEventListener(MainNotify.closeGameOverPanelNotify,this.closeGameOverPanel,this)
		// Global.addEventListener(MainNotify.openGameType1PanelNotify,this.openGameType1Panel,this);
        // Global.addEventListener(MainNotify.closeGameType1PanelNotify,this.closeGameType1Panel,this);
		// Global.addEventListener(MainNotify.openGameType2PanelNotify,this.openGameType2Panel,this);
        // Global.addEventListener(MainNotify.closeGameType2PanelNotify,this.closeGameType2Panel,this);
		// Global.addEventListener(MainNotify.openGameType3PanelNotify,this.openGameType3Panel,this);
        // Global.addEventListener(MainNotify.closeGameType3PanelNotify,this.closeGameType3Panel,this);

	} 
	export function addPanel(panel:any):void
	{
		PanelManager.panelList[panel.panelID] = panel;
		PanelManager.openPanelByID(panel.panelID);
	}

	export function closePanel(panel:any):void
	{
		if(panel != null)
		{
			PanelManager.closePanelByID(panel.panelID);
		}
	}


	export function openPanelByID(panelID:number):void{
		let oldPanelID:number = curPanelID;
		if(oldPanelID != 0 && oldPanelID == panelID)
			return;
		var	curPanel:any = PanelManager.panelList[panelID];
		if(curPanel == null)
			return;
		var oldPanel:any = PanelManager.panelList[oldPanelID];
		if(oldPanel != null)
		{
			switch(oldPanel.panelData.closeType)
			{
				case UIEnum.CloseType.cache:
					oldPanel.visable = false;
					break;
				case UIEnum.CloseType.close:
					oldPanel.closePanel();
					break;
				case UIEnum.CloseType.ignort:
					
					break;
				default:
					oldPanel.closePanel();
					break;
			}
		}
		curPanel.visable = true;
		PopUpManager.addPopUp(curPanel,curPanel.panelData.dark, curPanel.panelData.popUpWidth, curPanel.panelData.popUpHeight, curPanel.panelData.effectType, curPanel.panelData.isAlert);
	}
	/**
	 * 关闭panel
	 * @panelID:panelID
	 */
	export function closePanelByID(panelID:number):void{
		let panel:any  = PanelManager.panelList[panelID];
		if(panel != null)
		{
			let panelData:PanelData = panel.panelData;
			if(panelData != null)
			{
				switch(panelData.closeType)
				{
					case UIEnum.CloseType.cache:
						panel.visable = false;
						break;
					case UIEnum.CloseType.ignort:
						break;
					case UIEnum.CloseType.close:
						PanelManager.panelList[panelID] = null;
						panel.closePanel();
						break;
					default:
						PanelManager.panelList[panelID] = null;
						panel.closePanel();
						break;
				}
			}
		}
	} 

	// // 打开模式1界面
	// export function openGameType1Panel():void{ 
	// 	if(this.gameType1 == null){
	// 		this.gameType1 = new GameType1Panel();
	// 	}
	// 	addPanel(this.gameType1);
	// 	// PopUpManager.addPopUp(this.gameType1,false,0,0,4);
	// 	// this.gameType1.updateData();
	// } 
	// // 关闭模式1界面
	// export function closeGameType1Panel():void{ 
	// 	if(this.gameType1 != null){
	// 		PanelManager.closePanel(this.gameType1);
	// 		this.gameType1 = null;
	// 	}
	// } 



	// 打开开始界面
	export function openStartPanel():void{ 
		if(this.startPanel == null){
			this.startPanel = new StartPanel();
		}
		PanelManager.addPanel(this.startPanel);
		// this.startPanel.updateData();
		// PopUpManager.addPopUp(this.startPanel,false,0,0,0);
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


