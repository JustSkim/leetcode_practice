/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
    if(height.length==2)return Math.min(height[0],height[1]);

    /*
    先确定表中两条最高的两天线a和b（a左b右），由这两条线围城的面积S，比a和b中任意两线围城的要大
    */
    var a=0,b=0,direction;//该移动哪边的指针（哪边的木条短），用0表示左，1表示右，2表示两者相等！！（最麻烦了）
    const lang = height.length;
    for(let i=0;i<lang;i++){
        //height[a]为最大（之一）
        if(height[i]>height[a])
            a=i;
    }
    if(a==0)b=1;
    for(let i=0;i<lang;i++){
        if(height[i]>=height[b] && i!=a)//这里用>=而上面对a的判断用<是为了在[0,9,10,0,10,10]的情况下，找到最右边的两个最大数之一
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
    再移动b这个指针，看看b的右边是否存在更大的组合，直到两个指针碰到嘴边上为止，结束
    */

    return search(height,a,b,S,direction);
};

function search(height,left,right,S,direction){
    var a=left,b=right;
    const lang = height.length;
    if(direction==2){
        let left_result = search(height,left,right,S,0);
        let right_result = search(height,left,right,S,1);
        return left_result>right_result?left_result:right_result;
    }
    while(a!=0 && b!=lang-1){
        //双指针法，但只移动小的那根指针！！
        while(direction==0&&a!=0){
            while(calculate(height,a,right) <= S){
                if(a==0)break;
                a--;
            }
            if(calculate(height,a,right)>S){
                left=a;
                S=calculate(height,left,right);
            }
        }
        while(direction==1&&b!=lang-1){
            while(calculate(height,left,b) <= S){
                if(b==lang-1)break;
                b++;
            }
            if(calculate(height,left,b)>S){
                right=b;
                S=calculate(height,left,b);
            }
        }

        //如果两根一样大，那么这种情况是最麻烦的！！[0,0,0,...,44,0,...,0,99,99,0,...,98,0,...,1,0]
        //可能上面的会先把左指针移到44，那么右指针只能选择99或者最远的1（取决于距离），而错过了左99右98这种更大的组合
        if(height[a]==height[b]){
            let a1=a,a2=a,b1=b,b2=b,S1=S,S2=S,left1=left,left2=left,right1=right,right2=right;
            while(a1!=0&&b1!=lang-1){
                while(calculate(height,a1,right1) <= S1){
                    if(a1==0)break;
                    a1--;
                }
                if(calculate(height,a1,right1)>S1){
                    left1=a1;
                    S1=calculate(height,left1,right1);
                }
                while(calculate(height,left1,b1) <= S1){
                    if(b1==lang-1)break;
                    b1++;
                }
                if(calculate(height,left1,b1)>S1){
                    right1=b1;
                    S1=calculate(height,left1,b1);
                }
            }
            while(a2!=0&&b2!=lang-1){
                while(calculate(height,left2,b2) <= S2){
                    if(b2==lang-1)break;
                    b2++;
                }
                if(calculate(height,left2,b2)>S2){
                    right2=b2;
                    S2=calculate(height,left2,b2);
                }
                while(calculate(height,a2,right2) <= S2){
                    if(a2==0)break;
                    a2--;
                }
                if(calculate(height,a2,right2)>S2){
                    left2=a2;
                    S2=calculate(height,left2,right2);
                }
            }
            if(S1>S2){
                a=a1,
                b=b1,
                S=S1;
                left=left1,right=right1;
            }else{
                a=a2,
                b=b2,
                S=S2;
                left=left2,right=right2;
            }
        }
    }
    console.log("left=",left,"right=",right,"height[left]=",height[left],"height[right]",height[right]);
    //由于上述循环的终止有两种可能情况，我们下面要进行分析
    while(a!=0){
        a--;
        if(calculate(height,a,right) > S){
            left=a;
            S=calculate(height,left,right);
        }
    }
    while(b!=lang-1){
        b++;
        if(calculate(height,left,b) > S){
            right=b;
            S=calculate(height,left,right);
        }
    }

    if(height[left]<height[right]){
        //左小右大，看看右边有没有比左边大的数能满足
        for(let i=right+1;i<lang;i++){
            if(height[i]>height[left])right=i;
        }
    }
    else{
        //右小左大，看看左边有没有比右边大的数能满足
        for(let i=a-1;i>-1;i--){
            if(height[i]>height[right])left=i;
        }
    }
    S=calculate(height,left,right);
    console.log("left=",left,"right=",right,"height[left]=",height[left],"height[right]",height[right]);
    return S;
}
function calculate(height,a,b){
    return Math.min(height[a],height[b])*(b-a);
} 

let array=[177,112,74,197,90,16,4,61,103,133,198,4,121,143,55,138,47,167,165,159,93,85,53,118,127,171,137,65,135,45,151,64,109,25,61,152,194,65,165,97,199,163,53,72,58,108,10,105,27,127,64,120,164,70,190,91,41,127,109,176,172,12,193,34,38,54,138,184,120,103,33,71,66,86,143,125,146,105,182,173,184,199,46,148,69,36,192,110,116,53,38,40,65,31,74,103,86,12,39,158];
console.log(array.length);

console.log(maxArea(array));