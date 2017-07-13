User.destroy_all
Team.destroy_all
Membership.destroy_all

User.create(
  fname: "Jan",
  lname: "Skylar",
  email: "jan@news.com",
  password: "password"
)

User.create(
  fname: "Wayne",
  lname: "Skylar",
  email: "wayne@news.com",
  password: "password"
)

User.create(
  fname: "Nick",
  lname: "Gentile",
  email: "dev@ateam.com",
  password: "create"
)

User.create(
  fname: "Termina",
  lname: "McGillicutty",
  email: "sedulity@appacademy.io",
  password: "starward"
)

Team.create(
  name: "Ateam",
  manager_id: 3
)

Membership.create(
  user_id: 1,
  team_id: 1
)

Membership.create(
  user_id: 2,
  team_id: 1
)

Membership.create(
  user_id: 3,
  team_id: 1
)

Membership.create(
  user_id: 4,
  team_id: 1
)
