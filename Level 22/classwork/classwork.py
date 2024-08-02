def greet():
    print("Hello, World!")

greet()



def greet(name):
    print("Hello " + name)

greet("rostomi")
greet("rostomi")
greet("rostomi")




def even_odd(numbers_list):
    for number in numbers_list:
        if number % 2 == 0:
            print(str(number) + " is even")
        else:
            print(str(number) + " is odd")


even_odd([1, 2, 3, 4, 5, 6, 7])
    