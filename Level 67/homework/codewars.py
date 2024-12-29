def digital_root(n):
    if n < 10:
        return n
    return digital_root(sum(int(digit) for digit in str(n)))

print(digital_root(16))     
print(digital_root(942))    
print(digital_root(132189)) 
print(digital_root(493193)) 
