def sum_of_positives(numbers):
    return sum(num for num in numbers if num > 0)

# Example usage
result = sum_of_positives([1, -4, 7, 12])
print(result)  # Output: 20
