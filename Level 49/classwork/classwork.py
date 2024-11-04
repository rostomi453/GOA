# 2D ბულეანიების მასივის შექმნა
matrix = [
    [True, False, True],
    [False, True, False],
    [True, True, False]
]

# ელემენტების შეცვლა: True <-> False
for i in range(len(arr)):
    for j in range(len(arr[i])):
        matrix[i][j] = not matrix[i][j]  # not ოპერატორი ამოყოფს მნიშვნელობას

# შედეგის დაბეჭდვა
for row in matrix:
    print(row)
