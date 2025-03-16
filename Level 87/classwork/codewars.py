def type_validation(variable, type_str):
    return type(variable).__name__ == type_str


print(type_validation(42, "int"))    
print(type_validation("42", "int"))  
print(type_validation(3.14, "float"))  
print(type_validation(True, "bool"))   
