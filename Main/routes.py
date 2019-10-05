from flask import render_template, url_for, flash, redirect, request
from Main.forms import LocationForm

from Main import app

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/dynamic", methods=(['GET', 'POST']))
def Meet():
    
    form = LocationForm()
    
    if form.final_submit.data==True or form.new_user.data==True:
        n=request.values.get("hide_f")
       
        for s in range(int(n)):
          print(request.values.get("xyz-"+str(s)))
           # print("hello")
        
        return render_template("dynamic.html", form=form)
    else:
        print(form.new_user.data, form.final_submit.data, form.address1.data)
        print("elseHello")
        return render_template("dynamic.html", form=form)
