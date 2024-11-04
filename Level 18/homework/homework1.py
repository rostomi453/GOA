lesson = {
    "qartuli": 10,
    "matemetita": 9,
    "inglisuri": 9,
    "istori": 10
}


sashualo = sum(lesson.values()) // len (lesson)

for subject,score in lesson.items():
    print(f"{subject}  :  {score}")




print(sashualo)