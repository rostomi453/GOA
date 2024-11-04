#1) ფუნქცია რომელსაც გადაეცემა სვეტი და რიგი (row, col) და გამოპრინტავს თითოეული ელემენტის პოზიციას სვეტი-სვეტ , მაგ: ( 2, 2 ) --->  row: 1 col:1, row: 1 col:2, row: 2 col: 1, row:2 col:2 


def print_positions(rows, cols):
    for i in range(1, rows + 1):
        for j in range(1, cols + 1):
            print(f"row: {i}, col: {j}")


print_positions(2, 2)



#2) ფუნქცია რომელიც ქმნის გამრავლების ტაბულას 1-10 და აბრუნებს მათ 2D მასივის ფორმაში ანუ ასეთში:  [  [1,2,3...],  [2,4,6...],  [3,6...]...  ]



def multiplication_table():
    table = [[i * j for j in range(1, 11)] for i in range(1, 11)]
    return table


result = multiplication_table()
for row in result:
    print(row)





#3) ფუნქცია რომელსაც გადაეცემა რიცხვი და გამოპრინტავს ყველა იმ რიცხვის მაგალითს სადაც მეორე რიცხვი მეტია პირველზე, ანუ თუ გადავეცით რიცხვი სამი, ყველა წყვილი იქნებოდა: (1,1) (1,2) (1,3) (2,1) (2,2) (2,3) (3,1) (3,2) (3,3) ----> აქედან უუნდა გამოვიტანოთ მხოლოდ (1,2), (2,3), (1,3)





def print_valid_pairs(n):
    pairs = [(i, j) for i in range(1, n + 1) for j in range(1, n + 1) if j > i]
    for pair in pairs:
        print(pair)


print_valid_pairs(3)


