def reverse_letter(str):
    return ''.join(c for c in str if c.isalpha())[::-1]

print(reverse_letter("krishan"))  
print(reverse_letter("ultr53o?n"))  
