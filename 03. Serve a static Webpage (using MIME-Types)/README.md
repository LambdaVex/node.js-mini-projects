A MIME type is a label used to identify a type of data. It is used so software can know how to handle the data. It serves the same purpose on the Internet that file extensions do on Microsoft Windows.
So if a server says "This is text/html" the client can go "Ah, this is an HTML document, I can render that internally", while if the server says "This is application/pdf" the client can go "Ah, I need to launch the FoxIt PDF Reader plugin that the user has installed and that has registered itself as the application/pdf handler."
You'll most commonly find them in the headers of HTTP messages (to describe the content that an HTTP server is responding with or the formatting of the data that is being POSTed in a request) and in email headers (to describe the message format and attachments).

Usually (not always) browsers will work well without specifying Mime-types, but if you wanna be sure everything is alright, it is better to use them. 

#### Start the server:
```
node server.js
```
#### Call the server:
```
http://localhost:8584/
```
