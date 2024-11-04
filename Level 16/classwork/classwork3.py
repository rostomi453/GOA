int_list = [32,8,9,12.5,6]

intt = min(int_list)
intt1 = max(int_list)

new_list = []

new_list.append(intt)
new_list.append(intt1)

int_list.remove(intt)
int_list.remove(intt1)

print(new_list)

print(int_list)

print(intt)

print(intt1)