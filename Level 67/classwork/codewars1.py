def cat_mouse(string):
    distance = string.index('m') - string.index('C') - 1
    return "Caught!" if distance <= 3 else "Escaped!"

