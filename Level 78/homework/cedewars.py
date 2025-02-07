def two_sum(nums, target):
    num_to_index = {}
    
    for index, num in enumerate(nums):
        complement = target - num
        
        if complement in num_to_index:
            return (num_to_index[complement], index)
        
  
        num_to_index[num] = index
    
   
    return None

print(two_sum([1, 2, 3], 4))  
print(two_sum([3, 2, 4], 6))  