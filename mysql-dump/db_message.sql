CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender_id` int(11) NOT NULL,
  `recipient_id` int(11) NOT NULL,
  `msg_text` text NOT NULL,
  `created_at` datetime DEFAULT NOW(),
  `updated_at` datetime DEFAULT NOW(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `messages` */

insert  into `messages`(`id`,`sender_id`,`recipient_id`,`msg_text`,`created_at`,`updated_at`) values 
(1,10,2,'Halo Gan','2019-10-28 09:45:25','2019-10-28 09:45:25'),
(2,2,22,'Hai men','2019-10-28 09:54:59','2019-10-28 09:54:59'),
(3,2,22,'Kirim sini men','2019-10-28 09:54:59','2019-10-28 09:54:59'),
(4,3,23,'Ogah ah','2019-10-29 19:44:59','2019-10-29 09:54:59'),
(5,3,23,'Ogah neng','2019-10-29 19:44:59','2019-10-29 09:54:59'),
(6,3,23,'ayok neng','2019-10-29 19:44:59','2019-10-29 09:54:59');
