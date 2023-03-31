from typing import List
'''
leetcode代码直接复制会报错
NameError: name 'List' is not defined
'''
class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        #严格递增，意味着nums[i+1]至少比nums[i]大1，而不会相等
        #建立一个同等长度的list来存储true/false表示，该位置上的元素是否被访问过
        l1 = [ item >= 0 for item in nums]
        #获得相等长度的，初始值全为True的数组
        # print(l1)

        lang = len(nums)
        if lang <3:
            return 0
        
        i = 0
        requestValue = 0
        count = 0
        while i < lang-1:
            if l1[i] == True:
                l1[i] = False
                triplet = self.getTriplets(nums,diff,i,lang)
                if triplet:
                    count += 1
            else:
                pass
            i += 1
        return count
    
    def getTriplets(self, nums:List[int], diff:int, start:int, lang:int):
        #start参数作为起始查询的序号, lang是长度
        #要找出另外两个元素，要返回相应的三元组
        if(start > lang-3):
            return False
        requestValue = nums[start] + diff
        a = start
        b = 0
        c = 0
        j = start + 1
        while j <= lang-1:
            if nums[j] == requestValue:
                if b == 0:
                    b = j
                    requestValue = nums[j] + diff
                else:
                    c = j
                    return (a,b,c)
                
            j += 1



        return False

A = Solution();
print(A.arithmeticTriplets([1,2,3,4,5,6],2))