def similarity(a, b):
    i, j = 0, 0
    intersection = 0
    union = 0
    last_added = None  

    while i < len(a) or j < len(b):
        if i < len(a) and (j >= len(b) or a[i] < b[j]):
            if last_added != a[i]:
                union += 1
                last_added = a[i]
            i += 1
        elif j < len(b) and (i >= len(a) or a[i] > b[j]):
            if last_added != b[j]:
                union += 1
                last_added = b[j]
            j += 1
        else:  
            if last_added != a[i]: 
                intersection += 1
                union += 1
                last_added = a[i]
            i += 1
            j += 1
    
    return intersection / union if union > 0 else 1 


a = [1, 2, 3, 5, 7]
b = [2, 3, 5, 6]
print(similarity(a, b)) 
