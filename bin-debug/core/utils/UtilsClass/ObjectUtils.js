var ObjectUtils;
(function (ObjectUtils) {
    ObjectUtils.objs = [];
    ObjectUtils.objID = 0;
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
            if (obj.numChildren > 0) {
                for (var i = 0; i < obj.numChildren; i++) {
                    ObjectUtils.delObj(obj.getChildAt(i));
                }
            }
            if (obj.parent != null && obj.parent != undefined) {
                obj.parent.removeChild(obj);
            }
            ObjectUtils.objs[obj.objID] = null;
        }
    }
    ObjectUtils.delObj = delObj;
})(ObjectUtils || (ObjectUtils = {}));
//# sourceMappingURL=ObjectUtils.js.map