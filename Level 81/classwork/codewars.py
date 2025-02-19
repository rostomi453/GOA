def bonus_time(salary, bonus):
    currency = "$"  
    total = salary * 10 if bonus else salary
    return f"{currency}{total}"

print(bonus_time(1000, True))  
print(bonus_time(500, False))  
