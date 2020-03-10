#!C:\Program Files\WindowsApps\PythonSoftwareFoundation.Python.3.7_3.7.1776.0_x64__qbz5n2kfra8p0\python.exe

import cgi

form = cgi.FieldStorage()

firstName =  form.getvalue('firstName')

lastName = form.getvalue('lastName')

schoolName = form.getvalue('school')




print("Content-Type: text/html\n")

print("<!DOCTYPE html>\n")

print("<html>\n")

print("<title>PYTHON FORM RESULT</title>\n")

print("<link rel='stylesheet' href='pythonStyle.css'>\n")

print("<body>\n")

print("<div id='container'>")

print("<h1>Example Form Result</h1>")

print("<table>")

print("<tr>")
print("<td>firstName: </td>")
print("<td>" + firstName + "</td><br>")
print("</tr>")

print("<tr>")
print("<td>lastName: </td>")
print("<td>" + lastName + "</td><br>")
print("</tr>")

print("<tr>")
print("<td>school: </td>")
print("<td>" + schoolName + "</td>")
print("</tr>")

print("</table>")

print("<p>Hello " + firstName + " " + lastName +  "</p>")

print("<p>Your current school is " + schoolName + "</p>")

print("<button><a href='exampleForm.html'>GO BACK</a></button>")

print("</div>")

print("</body>\n")
print("</html>\n")


