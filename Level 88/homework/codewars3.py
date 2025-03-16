def even_numbers(arr, n):
    evens = []
    for num in reversed(arr):
        if num % 2 == 0:
            evens.append(num)
        if len(evens) == n:
            break
    return evens[::-1]
