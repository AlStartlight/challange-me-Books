/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    return nums.reduce((item,num,index)=>{
        if(item.length) return item
        const complements = target - num;
        if(map.hasOwnProperty(complements)){
            return [map[complements],index];
        }
        map[num] = index;
        return item;
    },[])
};