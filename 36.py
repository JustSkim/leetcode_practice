class Solution:
    def window(self,i,j):
        #返回所处的第几个九宫格，按照从上到下，从左到右的顺序
        gezi = [[0,1,2],[3,4,5],[6,7,8]]
        return gezi[int(i/3)][int(j/3)]
    def isValidSudoku(self, board):
        #哈希表，以空间换时间
        l1 = [0]*9  #每一行每个数字的数量
        l2 = [[0]*9]*9  #每一列每个数字的数量
        l3 = [[0]*9]*9  #每3*3九宫格每个数字的数量
        i = 0
        j = 0
        while i<9:
            l1=[0,0,0,0,0,0,0,0,0]
            while j<9:
                temp = board[i][j]
                if temp == '.':
                    break
                else:
                    temp = int(temp)
                if l1[temp]>0:
                    return False
                else:
                    l1[temp]+=1
                    if l2[j][temp]==1:
                        return False
                    else:
                        l2[j][temp]+=1
                    k = self.window(i,j)
                    if l3[k][temp]!=0:
                        return False
                    else:
                        l3[k][temp]+=1        
                j+=1
            i+=1
        return True

print("START!")
A =Solution()
board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
print(A.isValidSudoku(board))