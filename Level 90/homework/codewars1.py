def count_zeros(N):
    count = 0
    for i in range(1, N+1):
        count += str(i).count('0')
    return count


print(count_zeros(10))  
print(count_zeros(20)) 
print(count_zeros(100))
print(count_zeros(200)) 
