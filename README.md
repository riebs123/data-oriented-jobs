
<b>Project Description / Overview:</b>
Our goal is to analyze job listings by city for data oriented roles across the US.

<b>Datasets</b>

Data Analyst Jobs by Location: https://www.kaggle.com/andrewmvd/data-analyst-jobs 
Data Scientist Jobs: https://www.kaggle.com/andrewmvd/data-scientist-jobs 
Data Engineer: https://www.kaggle.com/andrewmvd/data-engineer-jobs 
Business Analyst: https://www.kaggle.com/andrewmvd/business-analyst-jobs 

<b>Before Running</b>

Update config.py file with your PostGres credentials (username=<yourPGuser>, password <yourPGpw>, db=DataJobs)
Update config.js file with your MapBox API credentials
Login to pgAdmin and create a database called DataJobs
Make sure you create your DB BEFORE running the data_jobs_etl.ipynb
Run all cells in jupyter notebook
Run app.py
Enter this address in your Chrome browser: http://127.0.0.1:5000/. You will see that this loads the index page
Interact with the top left control to change visualizations across the index page
Click the link that says ‘click to browse jobs’ to load a different page (http://127.0.0.1:5000/table). You will see the page displays all jobs postings data
