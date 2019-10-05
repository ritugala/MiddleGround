from flask import render_template, url_for, flash, redirect, request


from Main import app

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/MeetInTheMiddle")
def Meet():
    return render_template("")

