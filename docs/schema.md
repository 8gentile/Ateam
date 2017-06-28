# Schema

- Not null constraints have been left off some table columns to facilitate faster test navigation.

## USERS

column name       | data type |	details
-----------------|:-----------:|--------------------------:|
id	             |integer	     | primary key
fname	           | string	     | not null, indexed
lname	           | string	     | not null, indexed
email	           | string	     | not null, indexed, unique
password_digest	 | string	     |  not_null
session_token	   | string	     | indexed, unique
avatar |  attachment |


## MEMBERSHIPS

column name       | data type |	details
-----------------|:-----------:|----------------------------------:|
id	             |  integer	   |   primary key
user_id	         |  	integer   |	foreign key, indexed
team_id	       |  integer	   |   foreign key, indexed


## INVITES

column name       | data type |	details
-----------------|:-----------:|----------------------------------:|
id	             |  integer	   |   primary key
email	         |  	string   |	not null
team_id	       |  integer	   |   not null, foreign key, indexed
pending | boolean |


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

## POSTS

column name       | data type | details
-----------------|:-----------:|--------------------------:|
id  | integer | primary key
title   | string |
body    | text |
team_id | integer | foreign key, indexed
user_id | integer |foreign key, indexed

## COMMENTS

column name       | data type |	details
-----------------|:-----------:|--------------------------:|
id	|integer | primary key
body | text | not null
user_id	|integer | foreign key, indexed
post_id |integer | foreign key, indexed



## ATTENDEES

column name       | data type |	details
-----------------|:-----------:|--------------------------:|
id	| integer |	primary key
user_id	| integer |	foreign key, indexed
event_id	| integer |	foreign key, indexed
