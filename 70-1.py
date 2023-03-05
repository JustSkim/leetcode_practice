'''
爬楼梯，传统的使用递归方法，费时间、空间
'''
class Solution:
    #@functools.lru_cache(100)  在LeetCode中运行要加这个缓存的
    def climbStairs(self, n: int) -> int:
        if n<=3:
            return n
        return self.climbStairs(n-1)+self.climbStairs(n-2)

A = Solution()
print(A.climbStairs(33))