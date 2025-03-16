def cat_mouse(s):
    cat_pos = s.index('C')  
    mouse_pos = s.index('m')  
    distance = mouse_pos - cat_pos - 1 
    
    if distance > 3:
        return "Escaped!"
    else:
        return "Caught!"
