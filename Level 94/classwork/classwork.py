#filter-ის გამოყენებით ლისტიდან გამოიტანეთ მხოლოდ ის ელემენტები, რომელიც უნაშთოდ იყოფა 12-ზე
 
def filter_divisible_by_12(numbers):
    return list(filter(lambda x: x % 12 == 0, numbers))

# მაგალითი
numbers = [12, 15, 24, 36, 50, 60, 72]
filtered_numbers = filter_divisible_by_12(numbers)
print(filtered_numbers)




