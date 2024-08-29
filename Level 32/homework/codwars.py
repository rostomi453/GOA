
def find_outlier(integers):
    odd_count = 0
    even_count = 0
    odd_numbers = []
    even_numbers = []
    for num in integers:
        if num % 2 == 0:
            even_count += 1
            even_numbers.append(num)
        else:
            odd_count += 1
            odd_numbers.append(num)
    if odd_count == 1:
        return odd_numbers[0]
    elif even_count == 1:
        return even_numbers[0]
    print(find_outlier)

