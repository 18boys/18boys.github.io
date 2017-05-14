/**
 * 帮助类
 * Created by lishuai on 2017/5/12.
 */


/**
 * 随机获取给定list中指定数量的对象
 * @param list 源list
 * @param target 目标数量
 */

function getRandomList(list, target){
    if(list.length<target){
        return list;
    }
    var result = [];
    var size = list.length;

    for (var i = target; i > 0; i--, size--) {
        var index = Math.floor((Math.random()) * size);
        result.push(list.splice(index, 1)[0]);
    }
    return result;
}

module.exports={
    getRandomList : getRandomList 
};