CREATE TABLE `membership_signups` (
	`id` int AUTO_INCREMENT NOT NULL,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`studio_id` varchar(64) NOT NULL,
	`goal` varchar(255) NOT NULL,
	`membership_tier` varchar(64) NOT NULL,
	`status` enum('new','contacted','converted','not_interested') NOT NULL DEFAULT 'new',
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `membership_signups_id` PRIMARY KEY(`id`)
);
