car ={
    "name": "dodge challenger hellcat",
    "year": "2015",
    "engine":"6.2L  V8"
}
print(car)


print()


person_dict = {
    "name":"rostomi",
    "age":16
}



person_dict["surname"] = "gotsiridze"

person_dict.update({"email":"rostomigo@gmail.com"})




print(person_dict)



print()



for key in person_dict:
    print(person_dict.get(key))

print()



empty_dict = {}
for i in range(1,1001):
    empty_dict[f"item_(i)"] = i
    print(empty_dict)



