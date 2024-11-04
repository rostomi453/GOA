numbers = [ 536 , 524,  565 ,  567 ,  583 ,789 , 3455 ,635]

print(min(numbers))


temperature = [4 , 2 , 14 , 23 , 12 , -4 , 11]

print(min(temperature))



price = [4,  3, 6, 5 , 7 ,1 , 4 ,  5 ,6 ,  8 ] 


print(min(price))




numbers = [1,2,14,0,5,6,-8]

min_number = numbers[0]

for number in numbers:
    if min_number > number:
        min_number = number

print(min_number)