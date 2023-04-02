
class Solution:
    def maskPII(self, s: str) -> str:
        '''
        可以基于最后一位是数字、电话号码中限定的特定字符，还是字母来判断所给的是邮箱还是电话号码：
        对于电话号码，判断长度位数，可知道国家代码是几位数字，然后保留最后四位，其他按格式输出
        对于邮箱，将@符号后的全部转一次小写，第1位和@符号前1位转小写，中间用五个*号拼接，输出
        '''
        if s[-1].isdigit() or s[-1] in ('(',")","-","+"," "):
            '''
            要将其中的非数字字符去除
            '''
            lang = len(s)
            temp = ''
            for item in s:
                if item.isdigit():
                    temp+=item
            
            lang = len(temp)

            if lang == 10:
                return "***-***-"+temp[6:]
            elif lang == 11:
                return "+*-***-***-"+temp[7:]
            elif lang == 12:
                return "+**-***-***-"+temp[8:]
            elif lang == 13:
                return "+***-***-***-"+temp[9:]
            else:
                return "ERROR"
        else:
            # 第一步全体转小写
            s = s.lower()
            (s1,s2)=s.split("@")
            return s1[0]+"*****"+s1[-1]+"@"+s2
            
        
test = Solution();
#print(test.maskPII("1122335647890"))
s = "newton@leetod112.som"
s1 = "2(ds54)-dsd7485767)-=+5"
s2 = "+5(4266)719-677-"
print(test.maskPII(s2))