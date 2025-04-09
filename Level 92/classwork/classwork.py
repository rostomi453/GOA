#ternary operator-ის დახმარებით დაწერეთ პროგრამა, თუ მომხამრებლის მიერ შემოტანილი რიცხვი არის 2-ის ჯერადი გამოიტანოს "Two", სხვა შემთხვევაში გამოიტანეთ იგივე რიცხვი

num = int(input("შეიყვანეთ რიცხვი: "))
print("Two" if num % 2 == 0 else num)


#ternary operator-ის დახმარებით დაწერეთ პროგრამა, თუ მომხამრებლის მიერ შემოტანილი რიცხვი არის ლუწი გამოიტანოს ამ რიცხვის 8-ზე ნამრავლი, თუ კენტია გამოიტანოს 9-ზე ნამრავლი


num = int(input("შეიყვანეთ რიცხვი: "))
print(num * 8 if num % 2 == 0 else num * 9)


#შექმენით ფუნქცია chekNumber რომელიც იღებს ერთ პარამეტრს, სადაც გექნებათ ternary operator, თუ რიცხვი არის დადებითი გამოიტანეთ "Positive", ხოლო თუ უარყოფითია გამოიტანეთ "Negative" (არგუმენტი ყოველთვის იქნება ან 0-ზე მეტი, ან ნაკლები)

def checkNumber(n):
    print("Positive" if n > 0 else "Negative")

# მაგალითი:
checkNumber(5)
checkNumber(-2)


#შექმენით ფუნქცია რომელსაც გადაეცემა მასივი და აბრუნებს ამ მასივიდან რენდომ ელემეტს.

import random

def getRandomElement(arr):
    return random.choice(arr)

# მაგალითი:
print(getRandomElement([1, 2, 3, 4, 5]))
