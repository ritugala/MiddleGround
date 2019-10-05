from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from Main.models import Locations


class LocationForm(FlaskForm):
    address1 = StringField('Address', validators=[DataRequired()])
    address2 = StringField('Address', validators=[DataRequired()])
    new_user = SubmitField()
    final_submit = SubmitField('Go!')

