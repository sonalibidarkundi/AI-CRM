CREATE DATABASE ai_crm;
USE ai_crm;

CREATE TABLE interactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hcp_name VARCHAR(100) NOT NULL,
    hospital VARCHAR(150),
    specialty VARCHAR(100),
    interaction_type VARCHAR(50),
    product_discussed VARCHAR(100),
    discussion_summary TEXT,
    interaction_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SHOW TABLES;

SELECT * FROM ai_crm.hcps;

DESCRIBE hcp;
ALTER TABLE hcp 
ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP;

SELECT DATABASE();
SHOW TABLES;
DESCRIBE hcps;

ALTER TABLE users
ADD COLUMN password VARCHAR(255) NOT NULL DEFAULT 'admin123';

SELECT DATABASE();
DESCRIBE users;
delete from users where id=3;
select * from users;
SELECT id,name,email,phone,designation FROM users;





-- =====================================================
-- AI FIRST CRM - HCP MODULE
-- COMPLETE DATABASE QUERIES
-- =====================================================


-- =====================================================
-- 1. CREATE DATABASE
-- =====================================================

CREATE DATABASE ai_crm;

USE ai_crm;



-- =====================================================
-- 2. USER TABLE
-- =====================================================

CREATE TABLE users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(100) UNIQUE NOT NULL,

    phone VARCHAR(15),

    password VARCHAR(255) NOT NULL,

    designation VARCHAR(100),

    role VARCHAR(50) DEFAULT 'Sales Representative',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



-- =====================================================
-- INSERT DEFAULT USER
-- =====================================================

INSERT INTO users
(
name,
email,
phone,
password,
designation,
role
)

VALUES
(
'Admin',
'admin@gmail.com',
'9876543210',
'admin123',
'CRM Admin',
'Admin'
);



-- =====================================================
-- LOGIN QUERY
-- =====================================================

SELECT *

FROM users

WHERE email='admin@gmail.com'

AND password='admin123';



-- =====================================================
-- GET PROFILE
-- API: GET /profile/
-- =====================================================

SELECT

id,
name,
email,
phone,
designation,
role

FROM users

WHERE id=1;



-- =====================================================
-- UPDATE PROFILE
-- API: PUT /profile/
-- =====================================================

UPDATE users

SET

name='Updated Name',

email='updated@gmail.com',

phone='9999999999',

designation='Manager'


WHERE id=1;



-- =====================================================
-- CHANGE PASSWORD
-- API: PUT /profile/password
-- =====================================================

UPDATE users

SET password='new_password'

WHERE id=1;



-- =====================================================
-- =====================================================
-- HCP MODULE
-- =====================================================
-- =====================================================



-- CREATE HCP TABLE

CREATE TABLE hcp (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    hospital VARCHAR(150),

    specialty VARCHAR(100),

    department VARCHAR(100),

    city VARCHAR(100),

    state VARCHAR(100),

    phone VARCHAR(15),

    email VARCHAR(100),

    status VARCHAR(50) DEFAULT 'Active',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



-- =====================================================
-- ADD HCP
-- API: POST /hcp
-- =====================================================


INSERT INTO hcp
(
name,
hospital,
specialty,
department,
city,
state,
phone,
email,
status
)

VALUES
(
'Dr. Raj Kumar',
'Apollo Hospital',
'Cardiology',
'Heart Department',
'Bangalore',
'Karnataka',
'9876543210',
'doctor@gmail.com',
'Active'
);



-- =====================================================
-- GET ALL HCP
-- API: GET /hcp
-- =====================================================


SELECT *

FROM hcp

ORDER BY created_at DESC;



-- =====================================================
-- SEARCH HCP
-- =====================================================


SELECT *

FROM hcp

WHERE name LIKE '%Raj%'

OR hospital LIKE '%Apollo%'

OR specialty LIKE '%Cardiology%';



-- =====================================================
-- UPDATE HCP
-- =====================================================


UPDATE hcp

SET

hospital='Manipal Hospital',

specialty='Neurology',

phone='8888888888'


WHERE id=1;



-- =====================================================
-- DELETE HCP
-- =====================================================


DELETE FROM hcp

WHERE id=1;





-- =====================================================
-- =====================================================
-- INTERACTION MODULE
-- =====================================================
-- =====================================================



CREATE TABLE interactions (

id INT AUTO_INCREMENT PRIMARY KEY,


hcp_id INT,


interaction_type VARCHAR(50),


product_discussed VARCHAR(150),


discussion_summary TEXT,


interaction_date DATE,


created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


FOREIGN KEY(hcp_id)

REFERENCES hcp(id)

ON DELETE CASCADE

);



-- =====================================================
-- LOG INTERACTION
-- API: POST /interaction
-- =====================================================


INSERT INTO interactions

(
hcp_id,
interaction_type,
product_discussed,
discussion_summary,
interaction_date
)


VALUES

(
1,
'Visit',
'Medicine Product A',
'Discussed product benefits and pricing',
'2026-07-19'
);




-- =====================================================
-- GET ALL INTERACTIONS
-- =====================================================


SELECT

i.id,

h.name AS HCP_Name,

h.hospital,

i.interaction_type,

i.product_discussed,

i.discussion_summary,

i.interaction_date


FROM interactions i


JOIN hcp h


ON i.hcp_id=h.id;



-- =====================================================
-- UPDATE INTERACTION
-- =====================================================


UPDATE interactions

SET

discussion_summary='Updated discussion'


WHERE id=1;




-- =====================================================
-- DELETE INTERACTION
-- =====================================================


DELETE FROM interactions

WHERE id=1;





-- =====================================================
-- =====================================================
-- DASHBOARD QUERIES
-- =====================================================
-- =====================================================



-- TOTAL HCP COUNT

SELECT COUNT(*) AS total_hcp

FROM hcp;



-- TODAY INTERACTIONS


SELECT COUNT(*) AS today_interactions

FROM interactions

WHERE interaction_date = CURDATE();




-- PENDING FOLLOW UPS

SELECT COUNT(*)

FROM interactions

WHERE interaction_date < CURDATE();





-- RECENT INTERACTIONS


SELECT *

FROM interactions

ORDER BY created_at DESC

LIMIT 10;





-- =====================================================
-- AI SUGGESTION DATA
-- =====================================================


SELECT

h.name,

h.specialty,

i.discussion_summary,

i.product_discussed


FROM hcp h


JOIN interactions i


ON h.id=i.hcp_id;

