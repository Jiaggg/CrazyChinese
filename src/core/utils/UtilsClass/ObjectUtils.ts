module ObjectUtils
{
	export var objs = [];
	export var objID:number = 0;

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
			if(obj.numChildren > 0)
			{
				for (var i = 0; i < obj.numChildren; i ++) 
				{
					ObjectUtils.delObj(obj.getChildAt(i));
				}
			}
			if(obj.parent != null && obj.parent != undefined) 
			{
				obj.parent.removeChild(obj);
			}
			ObjectUtils.objs[obj.objID] = null;
		}
	}
}