def HQ9(input_char):
    if input_char == 'H':
        return 'Hello World!'
    elif input_char == 'Q':
        return input_char
    elif input_char == '9':
        lyrics = []
        for i in range(99, 0, -1):
            if i > 1:
                lyrics.append(f"{i} bottles of beer on the wall, {i} bottles of beer.")
                lyrics.append(f"Take one down and pass it around, {i-1} bottle{'s' if i-1 > 1 else ''} of beer on the wall.")
            else:
                lyrics.append("1 bottle of beer on the wall, 1 bottle of beer.")
                lyrics.append("Take one down and pass it around, no more bottles of beer on the wall.")
        lyrics.append("No more bottles of beer on the wall, no more bottles of beer.")
        lyrics.append("Go to the store and buy some more, 99 bottles of beer on the wall.")
        return '\n'.join(lyrics)
    else:
        return None

# Example usage
print(HQ9('H'))  # Output: 'Hello World!'
print(HQ9('Q'))  # Output: 'Q'
print(HQ9('9'))  # Output: Full lyrics of 99 Bottles of Beer
