class Solution:
    def countSegments(self, s: str) -> int:
        count = 0
        i = 0
        lang = len(s)
        if lang==0:
            return 0
        elif lang==1:
            if s==' ':
                return 0
            return 1
        if s[0]==' ':
            zifu = False
        else:
            zifu = True
        while i < lang:
            if s[i]!=' ':
                zifu = True
                if i==lang-1:
                    count += 1
            else:
                if zifu:
                    count+=1
                    zifu = False
                else:
                    zifu = False
            i += 1

        return count

A = Solution()
print(A.countSegments("a, bb, cc, cc#, "))