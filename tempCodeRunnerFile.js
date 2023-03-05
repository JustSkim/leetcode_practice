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
        candidates.sort(function(a,b){return a-b;});
        let begin=0,final=getFinal(0,lang-1,target);
        console.log("final = "+final)
        let result =  combination(begin,final,target,-1);
        result.sort();
        return result;
    }
    function combination(begin,final,target,jianshu){
        var arrayCount = [], arrayTemp = [];
        
        for(let i=final;i>=begin;i--){
            let temp = candidates[i];
            if(temp>target || (jianshu>0 && jianshu<temp)){
                console.log("target = "+target+",jianshu = "+jianshu+",temp = "+temp)
                break;
            }
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
        }
        return arrayCount;
    }
    function getFinal(start,fin,tar){
        if(candidates[start]>tar)return -1;
        else{
            var x=start;
            while(x<=fin){
                if(candidates[x==tar])return x;
                if(candidates[x]>tar){
                    return x-1;
                }
                else x+=1;
            }
            return fin;
        }   
    }
};

var candidates = [2,4,8,16], target = 16;
console.log(combinationSum(candidates,target));