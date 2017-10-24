/**
  * 面板管理类
  * by dily
  * (c) copyright false,0,0,2014 - 2035
  * All Rights Reserved.
  * 面板的管理类
  */
var PanelManager;
(function (PanelManager) {
    PanelManager.panelList = [];
    var curPanelID = 0;
    var startPanel;
    // 初始化所有面板
    function initPanel() {
        var _width = document.documentElement.clientWidth;
        var _height = document.documentElement.clientHeight;
        if (_width < _height) {
            GlobalData.initIsVertical = true;
        }
    }
    PanelManager.initPanel = initPanel;
    function addPanel(panel) {
        PanelManager.panelList[panel.panelID] = panel;
        PanelManager.openPanelByID(panel.panelID);
    }
    PanelManager.addPanel = addPanel;
    function closePanel(panel) {
        if (panel != null) {
            PanelManager.closePanelByID(panel.panelID);
        }
    }
    PanelManager.closePanel = closePanel;
    function openPanelByID(panelID) {
        var oldPanelID = curPanelID;
        if (oldPanelID != 0 && oldPanelID == panelID)
            return;
        var curPanel = PanelManager.panelList[panelID];
        if (curPanel == null)
            return;
        var oldPanel = PanelManager.panelList[oldPanelID];
        if (oldPanel != null) {
            switch (oldPanel.panelData.closeType) {
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
        PopUpManager.addPopUp(curPanel, curPanel.panelData.dark, curPanel.panelData.popUpWidth, curPanel.panelData.popUpHeight, curPanel.panelData.effectType, curPanel.panelData.isAlert);
    }
    PanelManager.openPanelByID = openPanelByID;
    /**
     * 关闭panel
     * @panelID:panelID
     */
    function closePanelByID(panelID) {
        var panel = PanelManager.panelList[panelID];
        if (panel != null) {
            var panelData = panel.panelData;
            if (panelData != null) {
                switch (panelData.closeType) {
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
    PanelManager.closePanelByID = closePanelByID;
    // 打开开始界面
    function openStartPanel() {
        if (this.startPanel == null) {
            this.startPanel = new StartPanel();
        }
        PanelManager.addPanel(this.startPanel);
    }
    PanelManager.openStartPanel = openStartPanel;
    // 关闭开始界面
    function closeStartPanel() {
        if (this.startPanel != null) {
            PopUpManager.removePopUp(this.startPanel, 3);
            this.startPanel = null;
        }
    }
    PanelManager.closeStartPanel = closeStartPanel;
})(PanelManager || (PanelManager = {}));
//# sourceMappingURL=PanelManager.js.map