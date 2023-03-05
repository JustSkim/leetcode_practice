/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const lang = candidates.length;
    if(lang==0)return [];
    else if(lang==1){
        if(target%candidates[0]==0){
            var arr = new Array(target/candidates[0]);//必须先定义长度
            arr.fill(candidates[0],0,arr.length)//才能对所有元素进行填充
            return [arr];
        }
        return []
    }
    else{
        //candidate要先从小到大排列
        candidates.sort(function(a,b){return a-b;});//默认的排序，会把数组转字符后排序，因此[1,2,3,22]会被排成[1,2,22,3]
        let begin=0,final=getFinal(0,lang-1,target,target);
        console.log("final = "+final)
        let result =  combination(begin,final,target);
        result.sort();
        return result;
    }
    function combination(begin,final,target){
        var arrayCount = [], arrayTemp = [];
        let final_yuan = final;
        for(let i=final;i>=begin;i--){
            let temp = candidates[i];
            if(temp>target)
                break;
            if(target==temp){
                arrayCount.push.apply(arrayCount,[[temp]]);
                continue;
            }
            if(i==begin & target<candidates[begin])break;
            final = getFinal(begin,final,target-temp,temp);
            arrayTemp = combination(begin,final,target-temp,temp);
            if(arrayTemp.length!=0){
                for(let j=0;j<arrayTemp.length;j++){
                    arrayTemp[j].push(temp);
                }
                arrayCount.push.apply(arrayCount,arrayTemp);//避免内存浪费
            }
            final = final_yuan//最后，final位要回到最初的时候，否则在上边会被修改
        }
        return arrayCount;
    }
    function getFinal(start,fin,tar,jianshu){
        var min = tar>jianshu?jianshu:tar;
        if(candidates[start]>min)return start;
        else{
            var x=start;
            while(x<=fin){
                if(candidates[x]==min)return x;
                if(candidates[x]>min){
                    return x-1;
                }
                else x+=1;
            }
            return fin;
        }   
    }
};

var candidates = [2,7,3,1],target=9;
console.log(combinationSum(candidates,target));