var ObjectUtils;
(function (ObjectUtils) {
    ObjectUtils.objs = [];
    ObjectUtils.objID = 0;
    ObjectUtils.undefinedObjs = [];
    function addObj(obj) {
        if (obj != null && obj != undefined) {
            obj.objid = ObjectUtils.objID;
            ObjectUtils.objs[ObjectUtils.objID] = obj;
            ObjectUtils.objID++;
        }
    }
    ObjectUtils.addObj = addObj;
    function delObj(obj) {
        if (obj != null && obj != undefined) {
            if (obj.objID != 0 && obj.objID != undefined) {
                ObjectUtils.objs[obj.objID] = null;
            }
            else {
                //收集未加入对象池的对象
                if (GameConfig.isDebug) {
                    ObjectUtils.undefinedObjs.unshift([obj]);
                }
            }
            if (obj.numChildren > 0) {
                for (var i = 0; i < obj.numChildren; i++) {
                    var child = obj.getChildAt(i);
                    if (child != null && child != undefined) {
                        if (child.dispose != null && child.dispose != undefined) {
                            child.dispose();
                        }
                    }
                    ObjectUtils.delObj(child);
                }
            }
            obj = null;
        }
    }
    ObjectUtils.delObj = delObj;
})(ObjectUtils || (ObjectUtils = {}));
//# sourceMappingURL=ObjectUtils.js.map