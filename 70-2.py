'''
使用动态规划的方法，比方说我们求f(n)，就要求f(n-1)，f(n-2)，这里的f(n)会给出n级台阶的爬法种类数
这个过程反过来，从4开始，f(2)+f(3)=f(4), f(3)+f(4)=f(5)
用四个变量a,b,c,temp来分别置换三个数，相当于 滚动数组，节省空间、时间（特别是空间的节省）
'''
class Solution:
    def climbStairs(self, n: int) -> int:
        if n<=3:
            return n
        i=3
        a=2
        b=3
        c=a+b
        while i!=n:
            temp=c
            c=b+c
            a=b
            b=temp
            i = i+1
        return b