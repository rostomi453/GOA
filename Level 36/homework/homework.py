def compare_strings(str1, str2):
    def process_string(s):
        # Convert to uppercase
        s = s.upper()
        # Treat null values as empty strings
        if s in {"NULL", "NIL", "NONE", " "}:
            return ""
        # Check if the string contains only letters
        if not s.isalpha():
            return ""
        return s
    
    # Process both strings
    str1_processed = process_string(str1)
    str2_processed = process_string(str2)
    
    # Calculate the sum of ASCII values
    sum1 = sum(ord(char) for char in str1_processed)
    sum2 = sum(ord(char) for char in str2_processed)
    
    return sum1 == sum2

# Example usage
print(compare_strings("hello", "HELLO"))  # True
print(compare_strings("world", "WORLD"))  # True
print(compare_strings("Null", "NONE"))    # True
print(compare_strings("abc123", "abc"))    # False
print(compare_strings("Test", "test"))     # True
print(compare_strings("Null", "null"))     # True
print(compare_strings("foo", "bar"))       # False