new_list = [1,2,3,4,5,6,"gio","givi"]


int_list = []


str_list = []



for x in new_list:
    if isinstance(x,int):
        int_list.append(x)
    else:
        str_list.append(x)

print(sum(int_list))
strr = "".join(str(x) for x in str_list)
print(strr)