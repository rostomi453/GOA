#lambda function-ის დახამრებით შექმენით ფუნქცია რომელიც ესალმება მომხმარებელს, მაგალიტად თუ მომხარებელმა შემოიტანა მნიშვნელობა Name, დაპრინტეთ Hello Name!

greet = lambda name: print(f"Hello {name}!")
greet("Name")  


#Map-ის გამოყენებით list-ში მოცემულ ყველა მნიშვნელობას დაუმატეთ თავისი თავი (გაამრავლეთ ორზე) და გამოიტანეთ მიღებული მნიშვნელობები list-ის სახით

numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)  


#Filter-ის გამოყენებით list-ში შეინახეთ მხოლოდ ისეთი მნიშველობები მოცემული list-იდან რომელიც უნაშთოდ იყოფა 5-ზე (5-ის ჯერადია):listn = [1,3,5,6,7,10,15,21,25.5,30,101,105]

listn = [1, 3, 5, 6, 7, 10, 15, 21, 25.5, 30, 101, 105]
divisible_by_5 = list(filter(lambda x: isinstance(x, int) and x % 5 == 0, listn))
print(divisible_by_5)  

#შექმენით Set მოცემული მნიშვნელობებით:setn = {"Goa", "Novatori", "Stem", 123, True, 1, False, 0}

setn = {"Goa", "Novatori", "Stem", 123, True, 1, False, 0}
print(setn)  
