def vampire_test(fang1, fang2):
    product = fang1 * fang2

    product_str = str(product)
    fangs_str = str(fang1) + str(fang2)

  
    return sorted(product_str) == sorted(fangs_str)

