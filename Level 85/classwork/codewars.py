def char_concat(s):
    n = len(s)
    mid = n // 2
    result = []
    
    for i in range(mid):
        result.append(s[i] + s[-(i+1)] + str(i+1))
    
    return "".join(result)
