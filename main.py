def countdown_pattern(n):
    if not isinstance(n, int):
        return "Argument must be an integer value."
    if n < 1:
        return "Argument must be a positive integer greater than 0"
    pattern = ""
    numbers = range(n, 0, -1)
    for i in numbers:
        if pattern == "":
            pattern = str(i)
        else:
            pattern = pattern + " " + str(i)
    return pattern
       









    

"
    