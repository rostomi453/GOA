def elevator_distance(floors):
    return sum(abs(floors[i] - floors[i-1]) for i in range(1, len(floors)))


print(elevator_distance([5,2,8]))  
print(elevator_distance([1,2,3]))  
print(elevator_distance([7,1,7,1])) 
print(elevator_distance([3,3])) 
