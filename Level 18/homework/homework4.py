shoping_card = {}

number_items = int(input("ramdeni items yidva gnebavt"))


for x in range(number_items):
    item = input(f"{x+1}  items saxeli:  ")
    raodenoba = int(input(f"{x+1}  raodenoba:  "))
    shoping_card[item] = raodenoba


print("nayidi itemebi: \n")
for item,raodenoba in shoping_card.item():
    print(f"{item} : {raodenoba}")