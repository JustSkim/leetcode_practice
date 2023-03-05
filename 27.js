/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle=='')return 0;
    let lang = haystack.length,i = 0;
    if(needle.length==1){
        while(i<lang){
            if(haystack[i]==needle[0])
                return i;
            else i++;
        }      
    }
    else if(needle.length==2){
        let lang = haystack.length,i = 0;
        let temp = (needle[0]==needle[1])?2:1
        while(i<lang-1){
            if(haystack[i]==needle[0]){
                if(needle[1]==haystack[i+1])return i;
                else i+=temp;
            }
            else i++;
        }
    }else{
        //使用KMP算法
        let arr =  calcNext(needle),j=0,n=needle.length;
        console.log(arr);
        while (i <= lang - n + j) {
            while (haystack[i] === needle[j]) {
                i++;
                j++;
                if (j === n) return i-n;
            }
            if (j === 0) {
                i++;
            } else {
                j = arr[j - 1] + 1;
            }
        }
    }
    return -1;
};
function calcNext(str) {
    let next = [-1],
        len = str.length,
        i = 1,
        j = -1;
    for (i = 1; i < len; i++) {
        while (str[i] !== str[j + 1] && j > -1) {
            j = next[j];
        }
        if (str[j + 1] === str[i]) {
            j = j + 1;
        }
        next[i] = j;
    }
    return next;
}
var a="aabaaabaaac",b="aabaaac";
console.log(strStr(a,b));