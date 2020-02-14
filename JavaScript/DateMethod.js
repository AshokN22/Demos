
var a = new Date();
var b = new Date();
b.setFullYear(2002,0,22);
var c = new Date();
c.setDate(18);
var d = c.getDate();
var e = c.toTimeString();
document.write("<BR><BR><BR><center><table border=1>");
document.write("<tr>");
document.write("<th><b>Method<b></th>");
document.write("<th>output</th>");
document.write("</tr>");
document.write("<tr>");
document.write("<td><b>Current Date<b></td>");
document.write("<td>"+a+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td><b>setFullYear<b></td>");
document.write("<td>"+b+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td><b>setDate<b></td>");
document.write("<td>"+c+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td><b>getDate<b></td>");
document.write("<td>"+d+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td><b>getTime<b></td>");
document.write("<td>"+e+"</td>");
document.write("</tr>");
document.write("</table></center>");


