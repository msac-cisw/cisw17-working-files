## HTML Forms

What is a form?

Used to collect user input.

What does a form look like?

```
<form>
    First name:
    <input type="text" id="fname">
    Favorite Number (between 1 and 10):
    <input type="range" id="fnum" min="1" max="10">
    <input type="submit" id="submit" value="Submit">
</form>
```

Two ways send data to the server: GET & POST

## W3.css

Simple framework for styling your webpages.

W3.CSS is free, open source, and uses standard CSS only (no JavaScript).

## Saying Hello?

Type your name into a page, when you press the button, the page says hello to you by name.

Enter your name in a form in the html file

In the JS:

- Set our variables for the form and the message
- Create the function to update the message div using myForm.name.value
- Add event listener to the button

How did we prevent the form from clearing when a user hits Enter or Return?

event.preventDefault();


