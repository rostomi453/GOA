def likes(names):
    """
    Generate a display text based on the number of people who like an item.

    :param names: List of names of people who like the item.
    :return: A string representing the like text.
    """
    n = len(names)
    if n == 0:
        return "no one likes this"
    elif n == 1:
        return f"{names[0]} likes this"
    elif n == 2:
        return f"{names[0]} and {names[1]} like this"
    elif n == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {n - 2} others like this"

# Example usage:
print(likes([]))                                 # "no one likes this"
print(likes(["Peter"]))                         # "Peter likes this"
print(likes(["Jacob", "Alex"]))                 # "Jacob and Alex like this"
print(likes(["Max", "John", "Mark"]))           # "Max, John and Mark like this"
print(likes(["Alex", "Jacob", "Mark", "Max"]))  # "Alex, Jacob and 2 others like this"
