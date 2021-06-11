#Internal Use library for matrix functions


def generate_zeros(size_x,size_y):
    return [[0 for x in range(size_x)] for y in range(size_y)]


def generate_numbers(size_x,size_y):
    return [[y*size_x+x for x in range(size_x)] for y in range(size_y)]


def find_neighbours_equal(matrix,x,y,match):
    limit_x = len(matrix)
    limit_y = len(matrix[0])
    results = []
    for dx in (-1,0,1):
        for dy in (-1,0,1):
            if dx or dy:
                if 0<=x+dx<limit_x and 0<=y+dy<limit_y:
                    if matrix[y+dy][x+dx] == match:
                        results.append((y+dy,x+dx))
    return results


def find_neighbours(matrix,x,y):
    limit_x = len(matrix)
    limit_y = len(matrix[0])
    results = []
    for dx in (-1,0,1):
        for dy in (-1,0,1):
            if dx or dy:
                if 0<=x+dx<limit_x and 0<=y+dy<limit_y:
                    results.append((y+dy,x+dx))
    return results


def number_to_coords(number,size_x):
    x = number%size_x
    y = number//size_x
    return (x,y)