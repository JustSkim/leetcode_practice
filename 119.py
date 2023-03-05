class Solution:
    def getRow(self, rowIndex):
        if rowIndex==0:
            return [1]
        if rowIndex==1:
            return [1,1]
        if rowIndex==2:
            return [1,2,1]
        List = [1,2,1]
        i = 2
        a=2
        b=1
        while i<rowIndex:
            p=1
            while p<=i:
                if p-1!=0:
                    b=a
                else: 
                    b=1
                a=List[p]
                List[p]=a+b
                p = p+1
            #最后要添加一个1
            List.append(1)
            i = i+1
        return List
print("Start!")
A = Solution()
list = A.getRow(4)
print(A.getRow(4))