module ObjectUtils
{
	export var objs = [];
	export var objID:number = 0;
	export var undefinedObjs = [];

	export function  addObj(obj:any):void
	{
		if(obj != null && obj != undefined)
		{
			obj.objid = ObjectUtils.objID;
			ObjectUtils.objs[ObjectUtils.objID] = obj;
			ObjectUtils.objID ++
		}
	}
	
	export function delObj(obj:any):void
	{
		if(obj != null && obj != undefined)
		{
			if(obj.objID != 0 && obj.objID != undefined)
			{
				ObjectUtils.objs[obj.objID] = null;
			}
			else
			{
				//收集未加入对象池的对象
				if(GameConfig.isDebug)
				{
					ObjectUtils.undefinedObjs.unshift([obj]);
				}
			}
			if(obj.numChildren > 0)
			{
				for (var i = 0; i < obj.numChildren; i ++) 
				{
					let child:any = obj.getChildAt(i);
					if(child != null && child != undefined)
					{
						if(child.dispose != null && child.dispose != undefined)
						{
							child.dispose();
						}
					}
					ObjectUtils.delObj(child);
				}
			}
			obj = null;
		}
	}
}