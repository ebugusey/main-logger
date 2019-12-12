BEGIN NOT ATOMIC

CREATE TABLE `bad_boobs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `message` varchar(255) DEFAULT NULL,
  `not_nice` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `idx_message` (`message`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `commands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `command` varchar(255) DEFAULT NULL,
  `date_insert` datetime DEFAULT NULL,
  `done` tinyint(4) DEFAULT NULL,
  `from` varchar(255) DEFAULT NULL,
  `jid` varchar(255) DEFAULT NULL,
  `where_to_answer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `jids` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jid` varchar(255) DEFAULT NULL,
  `nick` varchar(255) DEFAULT NULL,
  `date_insert` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stanza_id` varchar(255) DEFAULT NULL,
  `nick` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `mdate` datetime DEFAULT NULL,
  `short_date` date DEFAULT NULL,
  `message_type` varchar(1) DEFAULT NULL,
  `jid` varchar(255) DEFAULT NULL,
  `readed` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `speak` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `nick` varchar(255) DEFAULT NULL,
  `jid` varchar(255) DEFAULT NULL,
  `active` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `track` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nick` varchar(255) DEFAULT NULL,
  `track_number` varchar(255) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `active` tinyint(4) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `from` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `track_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `track_number` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `state_time` datetime DEFAULT NULL,
  `readed` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

END
