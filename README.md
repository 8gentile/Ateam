# Äteam

[Äteam live](https://ateam2018.herokuapp.com/)

Basecamp is a project management application that has a wide range of features despite a minimalist UI design. My first experience with Basecamp was in 2014 when I was part of a small development team. When designing the Äteam clone, I opted to focus on the team-based user interactions rather than cater to larger organizations with both projects and teams.

## Features

- Account creation and user authentication
- User avatar upload feature
- Team Creation with the ability to add/remove users and dynamically display user avatars on Team Cards from the Team Index page
- Team Show pages with Todo Lists and Message Boards
- Create, read and update for both Lists and Boards
- Todo List Item done/undone functionality
- Create/Destroy comments for both Message Board posts and Todo Lists
- Modals for displaying User profile information

## Implementation

### User Authentication
User authentication is handled in the session slice and through the back end via a session token. Passwords are hashed using the BCrypt gem, and the resulting password digest is stored in the database. When a user logs in, the password is rehashed and compared to the original encrypted password in order to verify the user's credentials.

Users have the option to replace their default avatar with their own custom avatar. GIF files are accepted for animated avatars that will display adjacent/above any content they create.
![Screenshot of User Edit Page](/docs/screens/edit_user.png)

### Team Organization
After logging in, a user has a link to their Team index in the header. They have the option to create a new Team via the team button card and any new teams created will be displayed in the header adjacent to the Teams index link.
Users are joined to Teams via a Memberships join table that has foreign keys for both Users and Teams. When users are added to a Team, a membership is created by searching the users table by email, finding the user ID and creating a membership that includes the user ID and the team ID of the team that dispatched the request.
![Screenshot of Add/Remove Members Page](/docs/screens/members.png)


### To-do Lists
The lists have a title and body and also follow the Basecamp card theme. List items are displayed on the List card from the list index so that users can get a preview of the items a list contains.
![Screenshot of Todo List Index Page](/docs/screens/todo_index.png)

Once a member of a team, a user is free to create/read/update/destroy lists and mark list items done/undone. Lists items can also be removed. All of these features update the state in real-time. Comments can also be added and updated in real-time. Only the author of a comment can remove it.
![Screenshot of List Show Page](/docs/screens/todo_show.png)


### Message Board
Members of a team can also post messages to the message board. Posts are listed by the order in which they were created, with the most recent posts appearing at the top. The number of comments are displayed next to the post title, along with the post author's avatar and name.
![Screenshot of Message Board](/docs/screens/board.png)

## Future Directions
The Team functionalities can be augmented with the addition of a few features.

### Schedules



Please feel free to use a different markup language if you do not plan to run
<tt>rake doc:app</tt>.
