def manual_count(input_string, count_char):
    count = 0
    for char in input_string:
        if char == count_char:
            count += 1
    return count

print(manual_count("Hello World", "l"))  

print(manual_count("Hello World", "o")) 

print(manual_count("Hello World", "x")) 

