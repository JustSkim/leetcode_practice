class Solution:
    def countVowelStrings(self, n: int) -> int:
        if n == 0:
            return 0
        if n == 1:
            return 5
        if n == 2:
            return 15

        if n == 3:
            return (5+4+3+2+1)+(4+3+2+1)+(3+2+1)+(2+1)+1

        previousList = [15,10,6,3,1]
        tempList = [0,0,0,0,1]
        
        i = 3
        while i < n:
            tempList[3]=previousList[3]+previousList[4]
            tempList[2]=previousList[2]+previousList[3]+previousList[4]
            tempList[1]=previousList[1]+previousList[2]+previousList[3]+previousList[4]
            tempList[0]=previousList[0]+previousList[1]+previousList[2]+previousList[3]+previousList[4]
            i += 1
            previousList = tempList
            tempList = [0,0,0,0,1]
        return previousList[0]+previousList[1]+previousList[2]+previousList[3]+previousList[4]
        
