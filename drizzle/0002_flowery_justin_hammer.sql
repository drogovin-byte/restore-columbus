ALTER TABLE `membership_leads` ADD `status` enum('new','contacted','converted','not_interested') DEFAULT 'new' NOT NULL;--> statement-breakpoint
ALTER TABLE `membership_leads` ADD `notes` text;--> statement-breakpoint
ALTER TABLE `membership_leads` ADD `assigned_to_id` int;--> statement-breakpoint
ALTER TABLE `membership_leads` ADD `updatedAt` timestamp DEFAULT (now()) NOT NULL ON UPDATE CURRENT_TIMESTAMP;