--CREATE DATABASE SatInt_db;
--USE SatInt_db;

CREATE TABLE users (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(16) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(60) NOT NULL
);

DESCRIBE users;


CREATE TABLE HOME (
    created_at timestamp PRIMARY KEY DEFAULT current_timestamp,

    section text NOT NULL,
    content TEXT NOT NULL,
    path_to_image VARCHAR(64) NOT NULL,

    user VARCHAR(16) NOT NULL,
    user_id INT NOT NULL
);

CREATE TABLE OURTEAM (
    created_at timestamp PRIMARY KEY DEFAULT current_timestamp,

    name VARCHAR(64) NOT NULL,
    team VARCHAR(16) NOT NULL,
    description TEXT NOT NULL,
    major_contributions VARCHAR(64) NOT NULL,
    contact VARCHAR(64),
    path_to_image VARCHAR(64),
    leader BOOLEAN,


    user VARCHAR(16) NOT NULL,
    user_id INT NOT NULL
);

CREATE TABLE PROJECT (
    created_at timestamp PRIMARY KEY DEFAULT current_timestamp,

    section VARCHAR(64) NOT NULL,
    content TEXT NOT NULL,
    
    user VARCHAR(16) NOT NULL,
    user_id INT NOT NULL
);

CREATE TABLE NEWS (
    created_at timestamp PRIMARY KEY DEFAULT current_timestamp,

    title VARCHAR(64) NOT NULL,
    subtitle VARCHAR(64) NOT NULL,
    path_to_source VARCHAR(1024) NOT NULL,
    source_type VARCHAR(16) NOT NULL,

    user VARCHAR(16) NOT NULL,
    user_id INT NOT NULL
);

--CREATE TABLE SUPPORT (
--    created_at timestamp PRIMARY KEY DEFAULT current_timestamp,
--    
--    user VARCHAR(16) NOT NULL,
--    user_id INT(11) NOT NULL,
--);




DESCRIBE texts;