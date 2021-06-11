import matrixFunctions
import random
from tkinter import *


FIELD = []
MINEFIELD = []
SIZE_X = 10
SIZE_Y = 10
MINE_COUNT = 10
OPEN_COUNT = 0
MARK_COUNT = 0
TILE_SIZE = 50

def item_clicked(event):
    global FIELD,MINEFIELD
    canvas_item_id = c.find_withtag('current')[-1]
    for row in FIELD:
        for tile in row:
            if tile.tile == canvas_item_id:
                if not tile.open:
                    tile.open_cell()
                return

def item_clicked_right(event):
    global FIELD,MINEFIELD
    canvas_item_id = c.find_withtag('current')[-1]
    for row in FIELD:
        for tile in row:
            if tile.tile == canvas_item_id:
                if not tile.marked:
                    tile.mark_cell()
                return


def GameOver():
    l=Label(root,text="U lose")
    l.pack()

class Tile():
    def __init__(self,row,cell):
        global TILE_SIZE
        self.tile = c.create_rectangle(cell*TILE_SIZE,
        row*TILE_SIZE,
        (cell+1)*TILE_SIZE,
        (row+1)*TILE_SIZE,
        fill = 'gray',
        outline="black")
        self.text = c.create_text((cell+0.5)*TILE_SIZE,(row+0.5)*TILE_SIZE,text="")
        self.row = row
        self.cell = cell
        self.open = False
        self.marked = False
        return None

    def open_cell(self):
        global MINEFIELD
        content = MINEFIELD[self.row][self.cell]
        if content =='m':
            c.itemconfig(self.tile,fill='red')
            GameOver()
        elif content:
            c.itemconfig(self.tile,fill='green')
            c.itemconfig(self.text,text=str(content))
        else:
            c.itemconfig(self.tile,fill='white')
        root.update()
    
    def mark_cell(self):
        global MINEFIELD
        content = MINEFIELD[self.row][self.cell]
        if content =='m':
            c.itemconfig(self.tile,fill='red')
            GameOver()
        elif content:
            c.itemconfig(self.tile,fill='green')
            c.itemconfig(self.text,text=str(content))
        else:
            c.itemconfig(self.tile,fill='white')
        root.update()        



root = Tk()
c = Canvas(root,width = TILE_SIZE*SIZE_X,height = TILE_SIZE*SIZE_Y,bg="white")
c.bind("<Button-1>",item_clicked)
c.bind("<Button-3>",item_clicked)
c.pack()


mines = random.sample(range(SIZE_X*SIZE_Y),MINE_COUNT)
MINEFIELD = [['m' if row*SIZE_X+cell in mines else 0 for cell in range(SIZE_X)]for row in range(SIZE_Y)]

for row in range(SIZE_X):
    for cell in range(SIZE_Y):
        if MINEFIELD[row][cell] != 'm':
            MINEFIELD[row][cell] = len(matrixFunctions.find_neighbours_equal(MINEFIELD,cell,row,'m'))

FIELD = [[Tile(row,cell) for cell in range(SIZE_X)] for row in range(SIZE_Y)]

root.mainloop()