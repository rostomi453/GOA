#შექმენით lambda function რომელიც გამოიტანს მომხმარებლის მიერ შემოტანილი რიცხვის 2-ზე გაყოფისას მიღებულ ნასთს:lambda x:, აქ x აღნიშნავს არგუმენტს, მის შემდეგ კი დაწერეთ ფუნქცია

remainder = lambda x: x % 2
print(remainder(7))  # Output: 1

#შექმენით set და შეინახეთ მასში სხვადასხვა მონაცემთა ტიპის მნიშვნელობა,  ბოლოში კი დაამატეთ True და 1, შემდეგ კი შეამოწმეთ გამოიტანს თუ არა ორივე მნიშვნელობას


my_set = {42, "hello", 3.14, (1, 2)}
my_set.add(True)
my_set.add(1)

print(my_set)

#შექმენით dictionary, გადაეცით მას სამი key: name, lastname და age, შემდეგ დაპრინტეთ მათი მნიშვნელობები

# Dictionary
person = {"name": "Andria", "lastname": "Arakhamia", "age": 30}
print(person["name"])
print(person["lastname"])
print(person["age"])

#map-ის დახმარებით გადაუარეთ ლისტ-ს და გაზარდეთ ყველა მნიშვნელობა ორჯერ, მაგალითად [1, 2, 3] -> [2, 4, 6]

numbers = [1, 2, 3]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)  # Output: [2, 4, 6]
#filter-ის დახმარებით გამოიტანეთ list-იდან მხოლოდ ის მნიშვნელობები რომელიც უნაშთოდ იყოფა 3-ზე

numbers = [1, 3, 4, 6, 9, 10]
divisible_by_3 = list(filter(lambda x: x % 3 == 0, numbers))
print(divisible_by_3)  # Output: [3, 6, 9]


#შექმენით სია რომელშიც მოათავსებთ ნებისმიერ რიცხვებს (მაგ: 5, 12, 18, 7, 25)   და გამოიყენეთ filter და lambda

numbers = [5, 12, 18, 7, 25]
filtered = list(filter(lambda x: x > 10, numbers))
print(filtered)  # Output: [12, 18, 25]


#შექმენით სია და  გამოიყენეთ map() ფუნქცია და დაამატეთ 10 ელემენტი თქვენ ელემენტებს

numbers = [1, 2, 3, 4]
plus_ten = list(map(lambda x: x + 10, numbers))
print(plus_ten)  # Output: [11, 12, 13, 14]


#შექმენით სია და გამოიყენეთ filter() ფუნქცია, რომ მოლოდ კენტი რიცხვები გამოიტანოს


numbers = [1, 2, 3, 4, 5]
odd_numbers = list(filter(lambda x: x % 2 != 0, numbers))
print(odd_numbers)  # Output: [1, 3, 5]


#შექმენით სია და გამოიყენეთ reduce() ფუნქცია რომ გამოთვალოს ყველა რიცხვის ჯამი თქვენი სიიდან

from functools import reduce

numbers = [1, 2, 3, 4, 5]
total = reduce(lambda x, y: x + y, numbers)
print(total)  # Output: 15
