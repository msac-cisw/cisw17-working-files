<!-- HTML Forms -->

https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form

https://www.w3schools.com/html/html_forms.asp

An HTML form is used to collect user input. The user input is most often sent to a server for processing.

Essential elements of a form the form, inputs, labels

<form>
    <label for="userName">User Name</label> <br>
    <input type="text" id="userName" name="userName">
    <button id="login">Login</button>
</form>

*default text input width is 20 characters*

Input Types:


- button
- checkbox
- color
- date
- datetime-local
- email
- file
- hidden
- image
- month
- number
- password
- radio
- range
- reset
- search
- submit
- tel
- text
- time
- url
- week


GET or POST?

The GET method is the method used by the browser to ask the server to send back a given resource: "Hey server, I want to get this resource." In this case, the browser sends an empty body. Because the body is empty, if a form is sent using this method the data sent to the server is appended to the URL.

Since the GET method has been used, you'll see the URL www.foo.com/?say=Hi&to=Mom appear in the browser address bar when you submit the form

The POST method is a little different. It's the method the browser uses to talk to the server when asking for a response that takes into account the data provided in the body of the HTTP request: "Hey server, take a look at this data and send me back an appropriate result." If a form is sent using this method, the data is appended to the body of the HTTP request.