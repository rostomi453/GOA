def capitalize(s):
    even_caps = ""
    odd_caps = ""
    
    for i in range(len(s)):
        if i % 2 == 0:
            even_caps += s[i].upper()
            odd_caps += s[i]
        else:
            even_caps += s[i]
            odd_caps += s[i].upper()
    
    return [even_caps,odd_caps]