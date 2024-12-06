def get_matrix(n):
    if n < 0:
        return "Size must be greater than or equal to 0."
    return [[1 if i == j else 0 for j in range(n)] for i in range(n)]
