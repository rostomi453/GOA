
def add_numbers(numbers): 
    new_list = []
    for number in numbers:
        if number % 2 == 0:
            new_list.append(number / 2)
        else:
            new_list.append(number * 2)
    return new_list

numbers = [1, 2, 3, 4]
numbers = [5, 10, 3, 5]

print(add_numbers(numbers))



        