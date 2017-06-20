# Schema

- Not null constraints have been left off all table columns to facilitate faster test navigation.

## USERS

column name       | data type |	details
-----------------|:-----------:|--------------------------:|
id	             |integer	     | primary key
name	           | string	     | indexed
email	           | string	     | indexed, unique
password_digest	 | string	     |
session_token	   | string	     | indexed, unique


## MEMBERSHIPS

column name       | data type |	details
-----------------|:-----------:|----------------------------------:|
id	             |  integer	   |   primary key
(join)	         |  user_id	   |   integer,	foreign key
team_id	       |  integer	   |   foreign key


## TEAMS

column name       | data type |	details
-----------------|:-----------:|---------------------------------:|
id	           |    integer	 | primary key
manager_id	   |  integer	   | foreign key, indexed
name	         |  string	   | indexed


## TODOLISTS

column name       | data type |	details
-----------------|:-----------:|--------------------------------:|
id	             |  integer	   | primary key
title	         |    string	 |
team_id	       |    integer	 | foreign key, indexed
user_id     | integer | foreign key, indexed
done | boolean | 


## TODOITEMS

column name       | data type |	details
-----------------|:-----------:|--------------------------:|
id	| integer | primary key
title	|string	|
done	| boolean|
list_id	| integer	| foreign key, indexed
schedule_id	| integer	| foreign key, indexed

## SCHEDULES

column name       | data type |	details
-----------------|:-----------:|--------------------------:|
id	| integer	| primary key
team_id	| integer	| foreign key, indexed, unique

## EVENTS

column name       | data type |	details
-----------------|:-----------:|--------------------------:|
id	| integer	| primary key
schedule_id	| integer| 	foreign key, indexed
title	| string	|
description	| text	|
start_date	| datetime	|
end_date	| datetime	|
user_id	| integer	| foreign key, indexed

## BOARDS

column name       | data type |	details
-----------------|:-----------:|--------------------------:|
id	|integer | primary key
team_id	|integer | foreign key, indexed, unique


## POSTS

column name       | data type |	details
-----------------|:-----------:|--------------------------:|
id	| integer | primary key
title	| string |
body	| text |
user_id	| integer |foreign key, indexed

## ATTENDEES

column name       | data type |	details
-----------------|:-----------:|--------------------------:|
id	| integer |	primary key
user_id	| integer |	foreign key, indexed
event_id	| integer |	foreign key, indexed
