from flask import render_template, url_for, flash, redirect, request
from Main.models import Locations
from Main.forms import LocationForm
from Main.geocoding import MidPoint


from Main import app, db

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/MeetInTheMiddle", methods=['GET', 'POST'])
def Meet():
    count = 0
    form = LocationForm()
    # if(form.validate_on_submit() and form.new_user.data==True):
    #     count+=1
    #     Addr = Locations(address = form.address.data, id = count)
    #
    #     db.session.add(Addr)

    if(form.validate_on_submit() and form.final_submit.data==True):
        addr = [form.address1.data, form.address2.data]
        #addr = [a.address for a in Locations.query.all()] #check this statement
        print(addr)
        #n = Locations.query().count() #check otherwise use count
        n = 2
        print(n)
        MidPoint(n, addr)
    return render_template("dynamic.html", form = form)


