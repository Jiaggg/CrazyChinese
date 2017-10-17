class PanelData {
	public constructor() {
	}
	public panelID:number = GameConfig.getPanelID();
	/**背景是否变黑 */
	public dark:boolean = false; 
	/**指定弹窗宽度，定位使用 */
	public popUpWidth:number = 0; 
	/**指定弹窗高度，定位使用 */
	public popUpHeight:number = 0; 
	/**0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上 */
	public effectType:number = 0; 
	/** */
	public isAlert:boolean = false;
	/**关闭方式 */
	public closeType:number =  UIEnum.CloseType.close;
}