class Solution:
    def generateParenthesis(self, n):
        if n==1:
            return ["()"]
        elif n==2:
            return ["(())","()()"]
        l0 = []
        i = 1
        j = n-i
        for z in self.generateParenthesis(n-1):
            l0.append("("+z+")")
        while i<=j:
            #计算各种排列组合情况，i大于j的时候就意味着都计算完了
            l1 = self.generateParenthesis(i)
            if i==j:
                #两个的排列组合相同，算一个就行
                l2 = l1
                for x in l1:
                    for y in l2:
                        if x != y:
                            l0.append(x+y)
                break
            else:
                #不同则两个的排列组合都要算
                l2 = self.generateParenthesis(j)
                for x in l1:
                    for y in l2:
                        l0.append(x+y)
                        l0.append(y+x)
            i += 1
            j = n-i
        l0 = list(set(l0))
        return l0

print("START!")
A = Solution()
print(A.generateParenthesis(4))