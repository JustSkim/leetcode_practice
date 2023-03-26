
import re

class Solution:
    #类输入的参数和输出都被要求是str类型
    def simplifyPath(self, path: str) -> str:
        result = re.split('/+', path)
        print(result)
        return self.dealList(result)
    
    def dealList(self,list):
        resultStr = ''
        resultList = []
        #resultList中可以存放或者删去字符元素

        lang = len(list)
        #第一项如果为空（也就是源字符串以'/'开头，那么就直接忽略掉）
        if lang == 0 or list[0]=='..' :
            return '/'
        elif list[0]=='.' or list[0]=='':
            pass
        elif lang == 1:
            return '/'+list[0]
        else:
            resultList.append(list[0])



        # 遇到'.'，直接删除
        # 遇到'..'，将其与前面一个删除
        # 如果删除了'..'与其前面一位后，超过了根目录，也就是'..'前面一位已经是根目录，说明路径跳转报错，直接回到根目录
        i = 1


        while i < lang-1 :
            #针对多个'../../../'连续的情况
            if list[i]=='..':
                i += 1

                # 这种情况在linux路径中不合法，但题意要求按根路径处理
                if len(resultList)==0:
                    #return '/'
                    continue
                
                #数组删去最后一个元素
                resultList.pop()
                continue


            if list[i] == '.':
                i+=1
                continue
            if list[i] == '':
                i+=1
                continue
            else:
                resultList.append(list[i])
                i += 1
                continue
    
        


        #最后一项如果为空（也就是源字符串以'/'结尾，也直接忽略掉）



        if list[i] == '.' or list[i] == '':
            resultStr = '/'+'/'.join(resultList)
            return resultStr
        elif list[i] == '..':
            if len(resultList)!=0:
                resultList.pop()
                resultStr = '/'+'/'.join(resultList)
                return resultStr
            else:
                return '/'
        else:
            if len(resultList)!=0:
                resultStr = '/'+'/'.join(resultList)
            return resultStr+'/'+list[i]


        

ab = Solution();
path = '/dssd//dsd////asdsd/../dfsfsf/./ferwe/'
path1 = "/////..////..//../"
path2 = '/home//foo/'
path3 = 'home'
path4 = '/a/../../b/../c//.//'
path5 = '/...'
path6 = '/..'
b = ab.simplifyPath(path6)
print(b)

