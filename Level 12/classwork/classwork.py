#შექმენით while ციკლი რომელიც დაბეჭდავს რიცხხვებს 20-დან 1-ის ჩათვლით 



num = 20
while num >= 1:
    print(num)
    num -= 1



#შექმენით while ციკლი რომელიც დაბეჭდავს 0-დან 10-ის ჩათვლით ლუწ რიცხვებს არ გამოიყენოთ if 



num = 0
while num <= 10:
    print(num)
    num += 2



#შექმენით while ციკლი რომელიც 0-დან  10-ის ჩათვლის გამოიტანს ყველა რიცხვის ჯამს 


num = 0
total_sum = 0
while num <= 10:
    total_sum += num
    num += 1
print("სრული ჯამი:", total_sum)
