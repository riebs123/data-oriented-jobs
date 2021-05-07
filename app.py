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
table = base.classes.data_jobs

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0 

#This is the route for the primary page
@app.route("/")
def IndexRoute():
    webpage = render_template("index.html")
    return webpage

@app.route("/superdict")
def QuerySuperDict():

    #open a session, run the query, then close it again
    session = session(engine)
    results = session.query(table.job_category, table.job_title, table.salary_estimate, table.job_description, table.rating, table.company_name, table.location, table.headquarters, table.size, table.type_of_ownership, table.industry, table.sector, table.revenue, table.competitors, table.easy_apply)
    session.close

    super_dictionary = []
    for job_category, job_title, salary_estimate, job_description, rating, company_name, location, headquarters, size, type_of_ownership, industry, sector, revenue, competitors, easy_apply in results:
        dict = {}
        dict["job_category"] = job_category
        dict["job_title"] = job_title
        dict["salary_estimate"] = salary_estimate
        dict["job_description"] = job_description
        dict["rating"] = rating
        dict["company_name"] = company_name
        dict["location"] = location
        dict["headquarters"] = headquarters
        dict["size"] = size
        dict["type_of_ownership"] = type_of_ownership
        dict["industry"] = industry
        dict["sector"] = sector
        dict["revenue"] = revenue
        dict["competitors"] = competitors
        dict["easy_apply"] = easy_apply
        super_dictionary.append(dict)

        return jsonify(super_dictionary)
        

#@app.route('/salaryscatter')
#def QuerySalaryScatter():

#    session = session(engine)
#    results = session.query(table.)

#@app.route("/salaryvscompanyrating")

if __name__ == '__main__':
    app.run(debug=True)