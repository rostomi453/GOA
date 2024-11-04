# 1. მომხმარებელმა 5-ჯერ უნდა შეიტანოს თავისი საყვარელი მანქანის სახელი
car_names = []  # ვქმნით ცარიელ სიას მანქანების სახელებისთვის

# for ციკლი 5-ჯერ მუშაობს
for i in range(5):
    # მომხმარებელს მოეთხოვება მანქანის სახელი
    car = input("შეიყვანეთ თქვენი საყვარელი მანქანის სახელი: ")
    car_names.append(car)  # მანქანის სახელი ემატება სიაში

print("მანქანების სახელები:", car_names)  # გამოტანა სიაში მანქანების სახელები


# 2. საყვარელი მუსიკის/კინოს სახელების სია
favorite_media = ["Interstellar", "The Godfather", "Bohemian Rhapsody", "Inception", "Pulp Fiction"]
# გამორჩეული ფილმის/მუსიკის გამოტანა
print("გამორჩეული ფილმი/მუსიკა:", favorite_media[0])  # პირველი ელემენტი გამოდის


# 3. ნებისმიერი სახის ინფორმაციის სია
information_list = ["Python", "AI", "ChatGPT", "OpenAI", "Programming"]
information_list[2] = 25  # მესამე ელემენტის (ChatGPT) შეცვლა ასაკით (25)
print("განახლებული ინფორმაცია:", information_list)  # გამოტანა განახლებული სიის


# 4. საყვარელი ხილის სია
favorite_fruits = ["პომიდორი", "ბანანი", "სათლური", "ნესვი", "მსხალი"]
favorite_fruits.append("კივი")  # სიაში ახალი ხილის დამატება
favorite_fruits.pop(1)  # მეორე ხილის (ბანანი) ამოღება
print("ახალი ხილის სია:", favorite_fruits)  # საბოლოო სიის გამოტანა


# 5. max, min და sum ფუნქციების კლონები
def my_max(numbers):
    # ყველაზე დიდი ციფრის მოძებნა
    max_value = numbers[0]  # ვიწყებთ პირველი ელემენტით
    for number in numbers:
        if number > max_value:
            max_value = number  # მაქსიმალური მნიშვნელობა განახლება
    return max_value

def my_min(numbers):
    # ყველაზე პატარა ციფრის მოძებნა
    min_value = numbers[0]  # ვიწყებთ პირველი ელემენტით
    for number in numbers:
        if number < min_value:
            min_value = number  # მინიმალური მნიშვნელობა განახლება
    return min_value

def my_sum(numbers):
    # ყველა ციფრის ჯამი
    total = 0  # ჯამის საწყისი მნიშვნელობა
    for number in numbers:
        total += number  # მნიშვნელობების დამატება
    return total


# 6. მომხმარებელს 5 სახელი უნდა შეიტანოს
name_list = []  # ვქმნით ცარიელ სიას სახელებისთვის
for i in range(5):
    name = input("შეიყვანეთ სახელი: ")
    name_list.append(name)  # სახელი ემატება სიაში

# ყოველ სახელზე შევსების რაოდენობის დათვლა
name_counts = {}  # ხანგრძლივი სია სახელების რაოდენობისათვის
for name in name_list:
    if name in name_counts:
        name_counts[name] += 1  # თუ სახელი უკვე არსებობს, რაოდენობა მატულობს
    else:
        name_counts[name] = 1  # ახალ სახელს 1-ის რაოდენობა მიენიჭება

print("სახელების რაოდენობა:", name_counts)  # რაოდენობის გამოტანა


# 7. ნომრების სია 1-დან 5-მდე
numbers = [1, 2, 3, 4, 5]
numbers.pop()  # ბოლო ნომრის (5) ამოღება
numbers.pop(0)  # პირველი ნომრის (1) ამოღება
print("საბოლოო სია:", numbers)  # საბოლოო სიის გამოტანა
