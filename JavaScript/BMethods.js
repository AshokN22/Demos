var a = [34,56,89,12,97];
var b = a.valueOf();
var c = a.toString();
var d = a.shift();
var e = a.unshift(8);
var f = a.pop();
var g = a.push(67,89);
document.write("<BR><BR><BR><center><table border=1>");
document.write("<tr>");
document.write("<th><b>Method<b></th>");
document.write("<th>Main String</th>");
document.write("<th>Output</th>");
document.write("</tr>");
document.write("<tr>");
document.write("<td><b>valueOf<b></td>");
document.write("<td>"+b+"</td>");
document.write("<td>"+typeof b+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<tr>");
document.write("<td><b>shift<b></td>");
document.write("<td>"+d+"</td>");
document.write("<td>"+typeof d+"</td>");
document.write("</tr>");
document.write("<td><b>toString<b></td>");
document.write("<td>"+c+"</td>");
document.write("<td>"+typeof c+"</td>");
document.write("</tr>");
document.write("</tr>");
document.write("<td><b>unshift<b></td>");
document.write("<td>"+e+"</td>");
document.write("<td>"+typeof e+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td><b>pop<b></td>");
document.write("<td>"+f+"</td>");
document.write("<td>"+typeof f+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<tr>");
document.write("<td><b>push<b></td>");
document.write("<td>"+g+"</td>");
document.write("<td>"+typeof g+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("</table></center>");


