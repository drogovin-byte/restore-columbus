CREATE TABLE `membership_leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`membership_tier` varchar(64) NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `membership_leads_id` PRIMARY KEY(`id`)
);
