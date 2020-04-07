#!C:\Program Files\WindowsApps\PythonSoftwareFoundation.Python.3.7_3.7.1776.0_x64__qbz5n2kfra8p0\python.exe


#Import and Read student.json



import json
import sys

s = open("student.json")

studentData = json.load(s)

for i in studentData["Student"]:
    print(i)


# mystatus = "200 OK"

# sys.stdout.write("Status: %s\n" % mystatus)
# sys.stdout.write("Content-Type: application/json")
# sys.stdout.write("\n\n")
# sys.stdout.write(json.dumps(studentData))

# print(json.dumps(studentData))