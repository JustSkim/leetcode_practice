var addBinary = function(a, b) {
    if(a.length<b.length)return addBinary(b,a);
    else{
        let len1 = a.length,len2 = b.length, count = 0, i =0;
        a = a.split('').reverse();
        b = b.split('').reverse();
        while(i<len2){
            if(count == 1){
                if(a[i]!=b[i])a[i]='0';
                else if(a[i]==0){count=0;a[i]='1';}
                else if(i==len1-1){
                    a[i]='1';
                    a[i+1]='1';
                    count=0;
                }
                else a[i]='1';
            }
            else if(a[i]!=b[i])a[i]='1';
            else if(a[i]=='0'){}
            else if(a[i]=='1'){
                a[i]='0';
                if(i==len1-1) a[i+1]='1';
                else{
                    count = 1;
                }
            }
            i++;
        }

        while(a[i]==1&&count==1){
            a[i]='0';
            if(i==len1-1){
                a[++i]='1';
                count=0;
            }
            else{
                i++;
            }
        }
        if(count==1&&a[i]=='0')a[i]='1';

        a = a.reverse();
        console.log(a);
        len1 = a.length;
        var str = '';
        for(let j=0;j<len1;j++){
            str+=a[j];
        }
        return str;
    }
};
console.log(addBinary("1111","1111"));