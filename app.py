# Import the functions we need from flask
from flask import Flask
from flask import render_template 
from flask import jsonify

# Import the functions we need from SQL Alchemy
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy import func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.sql import label


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

# this is route for table page
@app.route("/table")
def tableRoute():
    webpage = render_template("table.html")
    return webpage

@app.route("/superdict")
def QuerySuperDict():

    #open a session, run the query, then close it again
    session = Session(engine)
    results = session.query(table.JOB_CATEGORY, table.JOB_TITLE, table.SALARY_ESTIMATE, table.JOB_DESCRIPTION, table.RATING, table.COMPANY_NAME, table.LOCATION,table.LAT, table.LONG, table.HEADQUARTERS, table.SIZE, table.TYPE_OF_OWNERSHIP, table.INDUSTRY, table.SECTOR, table.REVENUE, table.COMPETITORS, table.EASY_APPLY, table.MIN_SALARY, table.MAX_SALARY, table.AVERAGE_SALARY).all()
    #results = session.execute("select * from data_jobs")
    session.close()
    
    super_dictionary = []
    for JOB_CATEGORY, JOB_TITLE, SALARY_ESTIMATE, JOB_DESCRIPTION, RATING, COMPANY_NAME, LOCATION,LAT, LONG, HEADQUARTERS, SIZE, TYPE_OF_OWNERSHIP, INDUSTRY, SECTOR, REVENUE, COMPETITORS, EASY_APPLY, MIN_SALARY, MAX_SALARY, AVERAGE_SALARY in results:
        dict = {}
        dict["job_category"] = JOB_CATEGORY
        dict["job_title"] = JOB_TITLE
        dict["salary_estimate"] = SALARY_ESTIMATE
        dict["job_description"] = JOB_DESCRIPTION
        dict["rating"] = RATING
        dict["company_name"] = COMPANY_NAME
        dict["location"] = LOCATION
        dict["lat"] = LAT
        dict["long"] = LONG
        dict["headquarters"] = HEADQUARTERS
        dict["size"] = SIZE
        dict["type_of_ownership"] = TYPE_OF_OWNERSHIP
        dict["industry"] = INDUSTRY
        dict["sector"] = SECTOR
        dict["revenue"] = REVENUE
        dict["competitors"] = COMPETITORS
        dict["easy_apply"] = EASY_APPLY
        dict["min_salary"] = MIN_SALARY
        dict["max_salary"] = MAX_SALARY
        dict["average_salary"] = AVERAGE_SALARY
        super_dictionary.append(dict)

    return jsonify(super_dictionary)



@app.route("/tabledict")
def QueryTableDict():

    #open a session, run the query, then close it again
    session = Session(engine)
    results = session.query(table.JOB_CATEGORY, table.JOB_TITLE, table.SALARY_ESTIMATE, table.RATING, table.LOCATION, table.INDUSTRY, table.AVERAGE_SALARY).all()
    #results = session.execute("select * from data_jobs")
    session.close()
    
    table_dictionary = []
    for JOB_CATEGORY, JOB_TITLE, SALARY_ESTIMATE, RATING,  LOCATION, INDUSTRY,  AVERAGE_SALARY in results:
        dict = {}
        dict["job_category"] = JOB_CATEGORY
        dict["job_title"] = JOB_TITLE
        dict["salary_estimate"] = SALARY_ESTIMATE
        dict["rating"] = RATING
        dict["location"] = LOCATION
        dict["industry"] = INDUSTRY
        dict["average_salary"] = AVERAGE_SALARY
        table_dictionary.append(dict)

    return jsonify(table_dictionary)

# @app.route('/minsalaryscatter')
# def QueryMinSalaryScatter():

#     session = Session(engine)
#     results = session.query(table.RATING, table.MIN_SALARY)
#     session.close

#     min_salary_vs_rating_dictionary = []
#     for RATING, MIN_SALARY in results:
#         dict = {}
#         dict["rating"] = RATING
#         dict["min_salary"] = MIN_SALARY
#         min_salary_vs_rating_dictionary.append(dict)

#     return jsonify(min_salary_vs_rating_dictionary)

# @app.route('/maxsalaryscatter')
# def QueryMaxSalaryScatter():

#     session = Session(engine)
#     results = session.query(table.RATING, table.MAX_SALARY)
#     session.close

#     max_salary_vs_rating_dictionary = []
#     for RATING, MAX_SALARY in results:
#         dict = {}
#         dict["rating"] = RATING
#         dict["max_salary"] = MAX_SALARY
#         max_salary_vs_rating_dictionary.append(dict)

#     return jsonify(max_salary_vs_rating_dictionary)

# @app.route('/averagesalaryscatter')
# def QueryAverageSalaryScatter():

#     session = Session(engine)
#     results = session.query(table.RATING, table.AVERAGE_SALARY)
#     session.close

#     average_salary_vs_rating_dictionary = []
#     for RATING, AVERAGE_SALARY in results:
#         dict = {}
#         dict["rating"] = RATING
#         dict["average_salary"] = AVERAGE_SALARY
#         average_salary_vs_rating_dictionary.append(dict)

#     return jsonify(average_salary_vs_rating_dictionary)

@app.route('/jobbubbles')
def QueryJobBubbleChart():

    session = Session(engine)
    results = session.query(table.JOB_CATEGORY, table.LOCATION, table.LAT, table.LONG, label('JOB_COUNT', func.count(table.JOB_CATEGORY))).group_by(table.JOB_CATEGORY, table.LOCATION, table.LAT, table.LONG).filter(table.LAT.isnot(None))
    session.close

    job_bubble_dict = []
    for JOB_CATEGORY, LOCATION, LAT, LONG, JOB_COUNT in results:
        dict = {}
        dict["job_category"] = JOB_CATEGORY
        dict["location"] = LOCATION
        dict["lat"] = LAT
        dict["long"] = LONG
        dict["job_count"] = JOB_COUNT
        job_bubble_dict.append(dict)

    return jsonify(job_bubble_dict)

@app.route('/salarybox')
def QuerySalaryBox():

    session = Session(engine)
    results = session.query(table.JOB_CATEGORY, table.MIN_SALARY, table.MAX_SALARY, table.AVERAGE_SALARY).group_by(table.MIN_SALARY, table.MAX_SALARY, table.AVERAGE_SALARY, table.JOB_CATEGORY).filter(table.MIN_SALARY.isnot(None))
    session.close

    salary_dictionary = []
    for JOB_CATEGORY, MIN_SALARY, MAX_SALARY, AVERAGE_SALARY in results:
        dict = {}
        dict["job_category"] = JOB_CATEGORY
        dict["min_salary"] = MIN_SALARY
        dict["max_salary"] = MAX_SALARY
        dict["average_salary"] = AVERAGE_SALARY
        salary_dictionary.append(dict)

    return jsonify(salary_dictionary)


# @app.route('/minsalarybox')
# def QueryMinSalaryBox():

#     session = Session(engine)
#     results = session.query(table.JOB_CATEGORY, table.MIN_SALARY)
#     session.close

#     min_salary_dictionary = []
#     for JOB_CATEGORY, MIN_SALARY in results:
#         dict = {}
#         dict["job_category"] = JOB_CATEGORY
#         dict["min_salary"] = MIN_SALARY
#         min_salary_dictionary.append(dict)

#     return jsonify(min_salary_dictionary)

# @app.route('/maxsalarybox')
# def QueryMaxSalaryBox():

#     session = Session(engine)
#     results = session.query(table.JOB_CATEGORY, table.MAX_SALARY)
#     session.close

#     max_salary_dictionary = []
#     for JOB_CATEGORY, MAX_SALARY in results:
#         dict = {}
#         dict["job_category"] = JOB_CATEGORY
#         dict["max_salary"] = MAX_SALARY
#         max_salary_dictionary.append(dict)

#     return jsonify(max_salary_dictionary)

# @app.route('/averagesalarybox')
# def QueryAverageSalaryBox():

#     session = Session(engine)
#     results = session.query(table.JOB_CATEGORY, table.AVERAGE_SALARY).filter(table.AVERAGE_SALARY.isnot(None))
#     session.close

#     average_salary_dictionary = []
#     for JOB_CATEGORY, AVERAGE_SALARY in results:
#         dict = {}
#         dict["job_category"] = JOB_CATEGORY
#         dict["average_salary"] = AVERAGE_SALARY
#         average_salary_dictionary.append(dict)

#     return jsonify(average_salary_dictionary)

@app.route("/salaryvscompanyrating")
def QuerySalaryVsRatings():

    session = Session(engine)
    results = session.query(table.JOB_CATEGORY, table.MIN_SALARY, table.MAX_SALARY, table.AVERAGE_SALARY, table.RATING).filter(table.RATING !=-1)
    session.close

    salary_vs_rating_dict = []
    for JOB_CATEGORY, MIN_SALARY, MAX_SALARY, AVERAGE_SALARY, RATING in results:
        dict = {}
        dict["job_category"] = JOB_CATEGORY
        dict["min_salary"] = MIN_SALARY
        dict["max_salary"] = MAX_SALARY
        dict["average_salary"] = AVERAGE_SALARY
        dict["rating"] = RATING
        salary_vs_rating_dict.append(dict)

    return jsonify(salary_vs_rating_dict)

if __name__ == '__main__':
    app.run(debug=True)