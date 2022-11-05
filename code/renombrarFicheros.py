import os

# folder path
dir_path = '..\\images\\carrousel'

# list to store files
secuencial = 1

# Iterate directory
for path in os.listdir(dir_path):
    # check if current path is a file
    print(path)
    
    os.rename(dir_path + "\\" + path,dir_path + "\\" + str(secuencial).zfill(3) + ".jpg")
    secuencial+=1