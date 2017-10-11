/**
  * 面板管理类
  * by dily
  * (c) copyright false,0,0,2014 - 2035
  * All Rights Reserved.
  * 面板的管理类
  */
var PanelManager;
(function (PanelManager) {
    var gameType1 = null;
    var gameType2 = null;
    var gameType3 = null;
    var startPanel;
    var gamePanel;
    var gameOverPanel;
    // 初始化所有面板
    function initPanel() {
        var _width = document.documentElement.clientWidth;
        var _height = document.documentElement.clientHeight;
        if (_width < _height) {
            GlobalData.initIsVertical = true;
        }
        Global.addEventListener(MainNotify.openStartPanelNotify, this.openStartPanel, this);
        Global.addEventListener(MainNotify.closeStartPanelNotify, this.closeStartPanel, this);
        Global.addEventListener(MainNotify.openGamePanelNotify, this.openGamePanel, this);
        Global.addEventListener(MainNotify.closeGamePanelNotify, this.closeGamePanel, this);
        Global.addEventListener(MainNotify.openGameOverPanelNotify, this.openGameOverPanel, this);
        Global.addEventListener(MainNotify.closeGameOverPanelNotify, this.closeGameOverPanel, this);
        Global.addEventListener(MainNotify.openGameType1PanelNotify, this.openGameType1Panel, this);
        Global.addEventListener(MainNotify.closeGameType1PanelNotify, this.closeGameType1Panel, this);
        Global.addEventListener(MainNotify.openGameType2PanelNotify, this.openGameType2Panel, this);
        Global.addEventListener(MainNotify.closeGameType2PanelNotify, this.closeGameType2Panel, this);
        Global.addEventListener(MainNotify.openGameType3PanelNotify, this.openGameType3Panel, this);
        Global.addEventListener(MainNotify.closeGameType3PanelNotify, this.closeGameType3Panel, this);
    }
    PanelManager.initPanel = initPanel;
    // 打开模式1界面
    function openGameType1Panel() {
        if (this.gameType1 == null) {
            this.gameType1 = new GameType1Panel();
        }
        PopUpManager.addPopUp(this.gameType1, false, 0, 0, 0);
        this.gameType1.updateData();
    }
    PanelManager.openGameType1Panel = openGameType1Panel;
    // 关闭模式1界面
    function closeGameType1Panel() {
        if (this.gameType1 != null) {
            PopUpManager.removePopUp(this.gameType1, 3);
            this.gameType1 = null;
        }
    }
    PanelManager.closeGameType1Panel = closeGameType1Panel;
    // 打开模式2界面
    function openGameType2Panel() {
        if (this.gameType2 == null) {
            this.gameType2 = new GameType2Panel();
        }
        PopUpManager.addPopUp(this.gameType2, false, 0, 0, 0);
        this.gameType2.updateData();
    }
    PanelManager.openGameType2Panel = openGameType2Panel;
    // 关闭模式2界面
    function closeGameType2Panel() {
        if (this.gameType2 != null) {
            PopUpManager.removePopUp(this.gameType2, 3);
            this.gameType2 = null;
        }
    }
    PanelManager.closeGameType2Panel = closeGameType2Panel;
    // 打开模式3界面
    function openGameType3Panel() {
        if (this.gameType3 == null) {
            this.gameType3 = new GameType3Panel();
        }
        PopUpManager.addPopUp(this.gameType3, false, 0, 0, 0);
        this.gameType3.updateData();
    }
    PanelManager.openGameType3Panel = openGameType3Panel;
    // 关闭模式3界面
    function closeGameType3Panel() {
        if (this.gameType3 != null) {
            PopUpManager.removePopUp(this.gameType3, 3);
            this.gameType3 = null;
        }
    }
    PanelManager.closeGameType3Panel = closeGameType3Panel;
    // 打开开始界面
    function openStartPanel() {
        if (this.startPanel == null) {
            this.startPanel = new StartPanel();
        }
        this.startPanel.updateData();
        PopUpManager.addPopUp(this.startPanel, false, 0, 0, 0);
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
    // 打开游戏界面
    function openGamePanel() {
        if (this.gamePanel == null) {
            this.gamePanel = new GamePanel();
            PopUpManager.addPopUp(this.gamePanel, false, 0, 0, 3);
        }
    }
    PanelManager.openGamePanel = openGamePanel;
    // 关闭游戏界面
    function closeGamePanel() {
        if (this.gamePanel != null) {
            PopUpManager.removePopUp(this.gamePanel, 3);
            this.gamePanel = null;
        }
    }
    PanelManager.closeGamePanel = closeGamePanel;
    // 打开结束界面
    function openGameOverPanel() {
        if (this.gameOverPanel == null) {
            this.gameOverPanel = new GameOverPanel();
            PopUpManager.addPopUp(this.gameOverPanel, false, 0, 0, 3);
        }
    }
    PanelManager.openGameOverPanel = openGameOverPanel;
    // 关闭结束界面
    function closeGameOverPanel() {
        if (this.gameOverPanel != null) {
            PopUpManager.removePopUp(this.gameOverPanel, 3);
            this.gameOverPanel = null;
        }
    }
    PanelManager.closeGameOverPanel = closeGameOverPanel;
})(PanelManager || (PanelManager = {}));
//# sourceMappingURL=PanelManager.js.map