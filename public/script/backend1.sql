create database aas;
use aas;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    email VARCHAR(80) NOT NULL,
    password VARCHAR(70) NOT NULL,
    contact_no int not null,
    user_type int not null
    
);
INSERT INTO users (fname, lname, email, password, contact_no, user_type) 
VALUES ('admin', 'admin', 'admin@example.com', '1234', '000', 2);

INSERT INTO users (fname, lname, email, password, contact_no, user_type) 
VALUES ('ahmed', 'umair', 'au@gmail.com', '1234', '0110', 0);

select * from users;


ALTER TABLE users;
CREATE TABLE tour_company (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    company_name VARCHAR(255) NOT NULL,
    documents VARCHAR(255) NOT NULL,
    cnic VARCHAR(50) NOT NULL,
    statas VARCHAR(50) NOT NULL,
    registration_number INT,
    account_number VARCHAR(50), -- Define the datatype for account number
    bank_name VARCHAR(100), -- Define the datatype for bank name
    account_holder VARCHAR(100), -- Define the datatype for account holder
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


INSERT INTO tour_company ( user_id, documents,cnic,statas,account_number,bank_name,account_holder,company_name)
VALUES (2, 'D:\Smstr_7_\collaborat\Documents\20240423074751__download.jpg', 3502391957661,'pending',112311111,'Summit Bank','hassan obaid','Alpha Travllers');

INSERT INTO tour_company ( user_id, documents,cnic,statas,account_number,bank_name,account_holder,company_name)
VALUES (3, 'D:\Smstr_7_\collaborat\Documents\20240423074751__download.jpg', 3502391957661,'pending',112311111,'World Bank','ahmed umair','Beta Travllers');


select * from tour_company;






CREATE TABLE tour (
    tourid INT AUTO_INCREMENT PRIMARY KEY,
    company_id INT,
    title VARCHAR(100),
    descreption TEXT,
    image_url varchar(200),
    price int,
    number_of_persons INT,
    location VARCHAR(100),
    number_of_days INT,
    departure_date DATE,
    FOREIGN KEY (company_id) REFERENCES tour_company(id)
);




drop table tour;

INSERT INTO tour (company_id, title, descreption,image_url,price,number_of_persons,location,number_of_days,departure_date)
VALUES (2, 'Murree Journey', 'A journey of enjoying Murree beauty','../images/murree.jpg',200,5,'Murree',4,'2024-09-30');

select * from tour;

ALTER TABLE tour
ADD departure_date DATE,
ADD number_of_days INT;


select * from tour;


MODIFY COLUMN contact_no VARCHAR(20) NOT NULL;
show global variables like 'PORT';