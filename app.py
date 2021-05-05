# Import the functions we need from flask
from flask import Flask
from flask import render_template 
from flask import jsonify

# Import the functions we need from SQL Alchemy
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

#import config.py
from config import username, password, db

# Define the database connection parameters
connection_string = f'postgresql://{username}:{password}@localhost:5432/{db}'

# Connect to the database
engine = create_engine(connection_string)
base = automap_base()
base.prepare(engine, reflect=True)

# Choose the table we wish to use
table = base.classes.combined

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0 

#This is the route for the primary page
@app.route("/")
def IndexRoute():
    webpage = render_template("index.html")
    return webpage

@app.route("/salaryvscompanyrating")

if __name__ == '__main__':
    app.run(debug=True)