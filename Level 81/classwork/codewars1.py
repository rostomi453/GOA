def number(lines):
    return [f"{i + 1}: {line}" for i, line in enumerate(lines)]

print(number([])) 
print(number(["a", "b", "c"]))  
