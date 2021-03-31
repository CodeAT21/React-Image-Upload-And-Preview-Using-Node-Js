200 OK
201 Created
404 Not Found

git clone https://gitlab.com/techsubscribe/login.git . 
git checkout -b staging
git pull origin staging


const mysql = require('mysql2');

const connection = mysql.createConnection({

    host     : 'localhost',

    user     : 'bookbubw_f7bsw43wusers',        

    password : 'CnViPL$,2',    

    database : 'bookbubw_2021awscreate'      

});

module.exports = connection;
//------------- register ------------------------------------------------------------
CREATE TABLE `register` (
  `register_id` int(255) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `register`
  ADD PRIMARY KEY (`register_id`);
  
ALTER TABLE `register`
  MODIFY `register_id` int(255) NOT NULL AUTO_INCREMENT;
  
ALTER TABLE `register`
  ADD `ipaddress` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  ADD `profile_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  ADD `member` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  ADD `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  ADD `member_price` float(10,2) NOT NULL;
  
 ALTER TABLE `register`
  ADD `update_member_price` float(10,2) NOT NULL,
  ADD `update_member` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL;
 
  

 
//----------------------------------------------------------------------------------
 CREATE TABLE `price` (
  `price_id` int(255) NOT NULL,
  `Bronze`  float(10,2) NOT NULL,
  `Silver`  float(10,2) NOT NULL,
  `Gold`  float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
ALTER TABLE `price`
  ADD PRIMARY KEY (`price_id`);

ALTER TABLE `price`
  MODIFY `price_id` int(255) NOT NULL AUTO_INCREMENT;
 
 
   
//-----------------------------------------------------------------------------------
CREATE TABLE `paypalpay` (
  `pay_id` int(255) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `member_id` int(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `txn_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_gross` float(10,2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `currency_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 
  
  
//-----------------------------------------------------------------------------------
CREATE TABLE `stripepay` (
  `stripe_id` int(255) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `member_id` int(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `txn_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_gross` float(10,2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `currency_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

//-----------------------------------------------------------------------------------
CREATE TABLE `booksadds` (
  `books_id` int(255) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagefront` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` float(10,2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `websitelink` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `purchaselink` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `other` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentbook` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentamount` float(10,2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentstatus` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

 ALTER TABLE `booksadds`
  ADD `upgradeplan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL; 
  
  ALTER TABLE `booksadds`
  ADD `upgradeplanamount` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL;
  //-----------------------------------------------------------------------------------
CREATE TABLE `audiobookadd` (
  `audio_id` int(255) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `written` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `narrated` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagefront` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `hrs` int(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mins` int(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` float(10,2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `websitelink` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `purchaselink` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentbook` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentamount` float(10,2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentstatus` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

  //-----------------------------------------------------------------------------------
CREATE TABLE `publisher` (
  `publisher_id` int(255) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagefront` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `websitelink` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentbook` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentamount` float(10,2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentstatus` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

//-----------------------------------------------------------------------------------
CREATE TABLE `video` (
  `video_id` int(255) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentbook` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentamount` float(10,2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentstatus` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 


 //-----------------------------------------------------------------------------------

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  