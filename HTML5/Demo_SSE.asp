<%
Response.ContentType = "text/event-stream"
Call Response.AddHeader("Access-Control-Allow-Origin","http://localhost/")
Response.Expires = -1
Response.Write("data: The server time is: " & now())
Response.Flush()
%>