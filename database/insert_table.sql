select count(*) from combined;
---create new table  with PK
--copy from combined into new table with pk.

insert into DATA_JOBS (
 JOB_CATEGORY,
 JOB_TITLE,
 SALARY_ESTIMATE,
 JOB_DESCRIPTION,
 RATING,
 COMPANY_NAME,
 LOCATION,
 HEADQUARTERS,
 SIZE,
 FOUNDED,
 TYPE_OF_OWNERSHIP,
 INDUSTRY,
 SECTOR,
 REVENUE,
 COMPETITORS,
 EASY_APPLY)
SELECT "Job Category",
 "Job Title",
 "Salary Estimate",
 "Job Description",
 cast ("Rating" as float),
 "Company Name",
 "Location",
 "Headquarters",
 "Size",
 cast ("Founded" as float),
 "Type of ownership",
 "Industry",
 "Sector",
 "Revenue",
 "Competitors",
 "Easy Apply"
 from combined;
 
--- check insert worked
select * from DATA_JOBS;

commit;
