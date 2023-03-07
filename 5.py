class Solution:
    #以单个字母为中心进行两端扩展，回文子串有奇数个字符
    def extend1(self,s):
        #初始的最长回文子串设置，一个字符也是回文串
        str1 = s[0]
        maxLength = 1
        lang = len(s)
        i = 1 #从1开始，左边和右边才都全有值
        while i<lang-1:
            p = i-1
            q = i+1
            while p>=0 and q<=lang-1:
                if s[p]==s[q]:
                    p -= 1
                    q += 1
                else:
                    break
            
            if (q-1-p)>maxLength:
                str1 =s[p+1:q]
                maxLength = q-p-1
            i += 1       
        return str1
    #不以字母为中心的扩展，回文子串有偶数个字符

    def extend2(self,s):
        #初始的最长回文子串设置，一个字符也是回文串
        str1 = s[0]
        maxLength = 1
        lang = len(s)
        i = 1 #从1开始
        while i<=lang-1:
            p = i-1
            q = i
            while p>=0 and q<=lang-1:
                if s[p]==s[q]:
                    p -= 1
                    q += 1
                else:
                    break
            
            if (q-1-p)>maxLength:
                str1 =s[p+1:q]
                maxLength = q-p-1
            i += 1       
        return str1

    def longestPalindrome(self, s: str) -> str:
        if len(s)==2 and s[0]==s[1]:
            return s
        elif len(s)<=2:
            return s[0]
        str1 = self.extend1(s)
        str2 = self.extend2(s)
        if len(str1)>len(str2):
            return str1    
        return str2

A = Solution()
print(A.longestPalindrome("abb"))