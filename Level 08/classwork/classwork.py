# მომხმარებლის ასაკის მიღება
age = int(input("გთხოვთ, შეიტანოთ თქვენი ასაკი: "))

# ასაკის გადამოწმება
if 18 <= age <= 25:
    print("თქვენი ასაკი 18-დან 25-ის ჩათვლითაა.")
else:
    print("თქვენი ასაკი 18-დან 25-ის ჩათვლით არ არის.")

# მომხმარებლის ბიუჯეტის მიღება
budget = float(input("გთხოვთ, შეიტანოთ თქვენი ბიუჯეტი (ლარებში): "))

# ბიუჯეტის გადამოწმება
if budget > 100:
    print("თქვენი ბიუჯეტი 100 ლარზე მეტია.")
elif budget > 50:
    print("თქვენი ბიუჯეტი 50 ლარზე მეტია, მაგრამ 100 ლარზე ნაკლები.")
else:
    print("თქვენი ბიუჯეტი 50 ლარზე ნაკლებია.")
