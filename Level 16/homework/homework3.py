list1 = [1,2,3,4,5,6,7,8,9]
list2 = [10,11,12,13,14,15]
odd_list1 = []
odd_list2 = []

for x in list1:
    if x % 2 == 0:
        odd_list1.append(x)
else:
    pass

for x in list2:
    if x % 2 == 0:
        odd_list2.append(x)
else:
    pass

odd1 = sum(odd_list1)
odd2 = sum(odd_list2)

print(odd1)
print(odd2)