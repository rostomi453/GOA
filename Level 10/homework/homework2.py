num1 = int(input("enter number: "))
num2 = int(input("enter number: "))

sum = 0

sum1 = 1

for i in range(num1, num2):
    sum = sum + i
    sum1 = sum1 * i


print(sum)
print(sum1)