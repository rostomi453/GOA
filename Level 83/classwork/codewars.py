def update_light(current):
    transitions = {
        "green": "yellow",
        "yellow": "red",
        "red": "green"
    }
    return transitions.get(current, "Invalid state")


print(update_light("green"))  
print(update_light("yellow")) 
print(update_light("red"))    
