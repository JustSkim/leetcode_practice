class Solution:
    def Judge(self,a):
        if (a>="a" and a <="z") or (a>="A" and a <="Z") or (a>="0" and a<="9"):
            return True
        return False
    def isPalindrome(self, s: str) -> bool:
        lang = len(s)
        if lang==1:
            return True
        #从lang>=2开始就不能简单判断，如"a." 、",ss" 这一类形式是回文串，注意还要考虑字符串中的数字
        if lang==2:
            if (self.Judge(s[0])) and (self.Judge(s[1])):
                return s[0].lower()==s[1].lower()
            return True
        i=0
        j=lang-1
        while i<j:
            while not self.Judge(s[i]):
                if i>=j:
                    break
                i = i+1
            a = s[i].lower()
            while not self.Judge(s[j]):
                if j<=i:
                    break
                j = j-1
            b = s[j].lower()
            if a!=b:
                return False
            else:
                i = i+1
                j = j-1
        return True
print("Start!")
A = Solution()
print(A.isPalindrome("122O221"))