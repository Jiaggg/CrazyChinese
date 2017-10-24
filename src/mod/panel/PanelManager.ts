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


	// 初始化所有面板
	export function initPanel():void{ 
		var _width = document.documentElement.clientWidth;
    	var _height = document.documentElement.clientHeight;
    	if(_width < _height){
    		GlobalData.initIsVertical = true;
    	}

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
					PanelManager.closePanel(oldPanel);
					break;
				case UIEnum.CloseType.ignort:
					
					break;
				default:
					PanelManager.closePanel(oldPanel);
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
						panel.panelData = null;
						panel.assets = null;
						PopUpManager.removePopUp(panel);
						ObjectUtils.delObj(panel);
						break;
					default:
						PanelManager.panelList[panelID] = null;
						panel.panelData = null;
						panel.assets = null;
						PopUpManager.removePopUp(panel);
						ObjectUtils.delObj(panel);
						break;
				}
			}
		}
	} 

	// 打开开始界面
	export function openStartPanel():void{ 
		if(this.startPanel == null){
			this.startPanel = new StartPanel();
		}
		PanelManager.addPanel(this.startPanel);
	} 
	// 关闭开始界面
	export function closeStartPanel():void{ 		
		if(this.startPanel != null){
			PopUpManager.removePopUp(this.startPanel,3);
			this.startPanel = null;
		}
	} 
}


