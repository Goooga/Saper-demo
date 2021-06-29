message = "brsmg"
key = "key"
alp = "abcdefghijklmnopqrstuvwxyz"
result = ""
#for i, char in enumerate(message):
    #key_index = i%3
    #key_char = key[key_index]
    #char_index = alp.index(char)
    #key_hcar = alp.index(key_char)
    #char_index = (char_index + key_index+1)%26
    #char = alp[char_index]
    #result += char
for i, char in enumerate(message):
    key_index = i%len(key)
    key_char = key[key_index]
    char_index = alp.index(char)
    key_hcar = alp.index(key_char)
    char_index = (char_index - key_index-1)%26
    char = alp[char_index]
    result += char   
print(result)