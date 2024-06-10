from turtle import *


#we want to paint a house


width(7)
color("green")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)


forward(70)
color("red")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

color("Orange")
penup()
goto(200, 200)
pendown()

begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()


color("purple")
begin_fill()
penup()
goto(180, 180)
pendown()
left(110)
right(80)
forward(45)
right(90)
forward(45)
right(90)
forward(45)
right(90)
forward(45)
end_fill()

begin_fill()
penup()
goto(70,180)
pendown()
right(90)
forward(45)
right(90)
forward(45)
right(90)
forward(45)
right(90)
forward(45)
end_fill()







exitonclick()
