list1 = [1,2,3,4,5,6,7,8,9]
list2 = [11,12,13,14,15,16]
list3 = [21,22,23,24,25,26]
list4 = [31,32,33,34,35,36]

even_list = []
odd_list = []


for x in list1:
    if x % 2 == 0:
        even_list.append(x)
    else:
        odd_list.append(x)


for x in list2:
    if x % 2 == 0:
        even_list.append(x)
    else:
        odd_list.append(x)
        

for x in list3:
    if x % 2 == 0:
        even_list.append(x)
    else:
        odd_list.append(x)
        

for x in list4:
    if x % 2 == 0:
        even_list.append(x)
    else:
        odd_list.append(x)
        
print(odd_list)
print(even_list)