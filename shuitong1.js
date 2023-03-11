/**
 * @param {number[]} height
 * @return {number}
 */

 var maxArea = function(height) {
    if(height.length==2)return Math.min(height[0],height[1]);

    /*
    先确定表中两条最高的两条线a和b（a左b右），由这两条线围城的面积S，比a和b中任意两线围城的要大
    */
    var a=0,b=0,direction;
    //direction该移动哪边的指针（哪边的木条短），用0表示左，1表示右，2表示两者相等！！（最麻烦了）
    //-1代表左边的指针已经完全遍历结束，找到了最合适的那根木条，-2代表右边的指针已经完全遍历结束
    const lang = height.length;
    for(let i=0;i<lang;i++){
        //height[a]为最大（之一）
        if(height[i]>height[a])
            a=i;
    }
    if(a==0)b=1;
    for(let i=0;i<lang;i++){
        if(height[i]>=height[b] && i!=a)//这里用>=而上面对a的判断用<，是为了在[0,9,10,0,10,10]的情况下，找到最右边的两个最大数之一
            b=i;
    }
    if(a>b){
        //当height[a]>height[b]时最大的在右边，次大的在左边，注意不是二者相等
        a = [ b , b = a ] [ 0 ];;//调换位置，保证a左b右，height[a]<height[b]
        direction = 0;//左边小，从左边的指针开始移动
    }else if(height[b]>height[a]){
        direction = 1;//右边小，从右边的指针开始移动
    }else{
        //b>a，b在a右边，且height[a]==height[b]
        direction=2;
    }
    var S = (b-a)*Math.min(height[a],height[b]);
    /*
    然后用双指针法，先把a向外移动，逐个试探是否能大于现在面积S，移到一个确定的新位置C后，
    再移动b这个指针，看看b的右边是否存在更大的组合，直到两个指针碰到最边上为止，结束
    */

    return search(height,a,b,S,direction);
};

function search(height,left,right,S,direction){
    var a=left,b=right,result;//result用于保存计算结果，不用重复两次计算
    const lang = height.length;

    if(direction==2){
        let left_result = search(height,left,right,S,0);
        let right_result = search(height,left,right,S,1);
        return left_result>right_result?left_result:right_result;
    }
    else if(direction==-2){
        while(a!=-1){
            result=calculate(height,a,right) ;
            if(result > S){
                left=a;
                S=result;
            }
            a--;
        }
        return S;
    }else if(direction==-1){
        while(b!=lang){
            result=calculate(height,left,b);
            if(result > S){
                right=b;
                S=result;
            }
            b++;
        }
        return S;
    }

    //双指针法，但只移动小的那根指针！！
    while(direction==0){
        result=calculate(height,a,right);
        while(result <= S){
            if(a==0){
                return search(height,left,right,S,-1);
            }
            a--;
        }
        if(result>S){
            left=a;
            S=result;
            if(left==0) direction=-1;
            else if(height[left]>height[right])direction=1;
            else direction=0;
        }
        return search(height,left,right,S,direction);
    }
    while(direction==1){
        result=calculate(height,left,b);
        while(result <= S){
            if(b==lang-1){
                return search(height,left,right,S,-2);
            }
            b++;
        }
        if(result>S){
            right=b;
            S=result;
            if(right==lang-1)direction=-2;
            else if(height[left]>height[right])direction=1;
            else direction=0;
        }
        return search(height,left,right,S,direction);
    }
    
    return S;
}
function calculate(height,a,b){
    return Math.min(height[a],height[b])*(b-a);
} 


console.log(maxArea([1,8,6,2,5,4,8,25,7]))