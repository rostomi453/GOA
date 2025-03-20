def calculator(a, b, op):
    if not (isinstance(a, (int, float)) and isinstance(b, (int, float))):
        return "unknown value"
    
    if op == '+':
        return a + b
    elif op == '-':
        return a - b
    elif op == '*':
        return a * b
    elif op == '/':
        return a / b if b != 0 else "unknown value"
    else:
        return "unknown value"


print(calculator(1, 2, '+'))  
print(calculator(1, 2, '$'))  