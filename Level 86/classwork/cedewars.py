def smallest_integer(matrix):  
    numbers = set(num for row in matrix for num in row)
    return next(i for i in range(len(numbers) + 1) if i not in numbers)
