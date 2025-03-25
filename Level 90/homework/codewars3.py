def battle(group1, group2):
    def group_power(group):
        return sum(ord(char) - ord('A') + 1 for char in group)
    
    power1 = group_power(group1)
    power2 = group_power(group2)
    
    if power1 > power2:
        return group1
    elif power2 > power1:
        return group2
    else:
        return "Tie!"