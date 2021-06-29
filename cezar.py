for x in range(97, 123):
    print(f"{x}:{chr(x)}")
message = "zoo"
result = ""
key = 1 
for char in message:    
    num = (ord(char)-96+key)%26
    result+=chr(num+96)
print(result)