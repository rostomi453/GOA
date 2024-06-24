user_guess=int(input("pleas enter your age"))

if user_guess > 5 and user_guess < 12:
    print("You are a child")
elif user_guess > 12 and user_guess < 18:
    print("You are a teenager")
elif user_guess > 18:
    print("You are an adult") 
