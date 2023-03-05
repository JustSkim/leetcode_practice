class Solution:
    def isUgly(self, n: int) -> bool:
        if n < 7:
            return n>0
        #注意，根据定义，1,2,3,4,5,6都是丑数，但单个7不是
        #1024这一类也是丑数（可以等于多个2相乘，而不需其他数）
        #53>5  是质数，因数只有1和自己本身，不是丑数！
        while(n%2==0):
            n=n/2
        while(n%3==0):
            n=n/3
        while(n%5==0):
            n=n/5
        return n==1