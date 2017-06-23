# Component Hierarchy

Disclaimer: pretty sure this is not correct. Needs revision.

## AuthFormContainer
  AuthForm
## TeamIndexContainer
  TeamIndex
## TeamNavContainer
  TeamHeader (TeamName/Members, AddNewMember)
  TeamNav
## TodoNavContainer
  TeamNavContainer
  TodoListHeader(Todo Headline/total-todos, CreateAListButton)
  TodoListIndex
  CreateListForm
## TodoListContainer (revise, wireframe:8)
  TeamNavContainer
  TodoList
  TodoListItem
  TodoItemForm
## ScheduleContainer
  ScheduleHeader
  MonthList
  MonthListItem
  EventItem
  TodoListBlock
  TodoListItem
## EventCreateContainer
  CreateHeader
## EventFormContainer
## EventFormContainer
  EventForm
  InputFields
  Labels
## EventShowContainer
  TeamNavContainer
  EventShow
## PostIndexContainer
  TeamNavContainer
  PostIndex (MessageBoard)
  BoardHeader
  CreatePostButton
  PostItem
## CreatePostContainer
  CreateHeader
  PostForm
  CreateButton
## PostContainer
  TeamNavContainer
  Post
## GroupChatContainer
  TeamNavContainer
  GroupChat

## DocIndexContainer
  TeamNavContainer
  DocIndex
  DocItem
## DocFormContainer
  CreateHeader
  DocForm

## DocContainer
  TeamNavHeader
  Doc

# Routes

Path    |     Component
|--------:|:---------------|
"/signup" | "AuthFormContainer"
"/login" | "AuthFormContainer"
"users/:userId/teams" | "TeamIndexContainer"
"users/:userId/:teamId" | "TeamContainer"
"/%/%/:teamId/todoLists" | "TodoIndexContainer"
"/%/%/%/todoLists/:todoListId" | "TodoListContainer"
"/%/%/:teamId/schedule" | "ScheduleContainer"
"/%/%/%/schedule/:eventId" | "EventContainer"
"/%/%/:teamId/posts" | "PostIndexContainer"
"/%/%/:teamId/posts" | "PostFormContainer"
"/%/%/%/posts/:postId" | "ShowPostContainer"
"/%/%/%/posts/:postId" | "PostFormContainer"
"/%/%/:teamId/campfire" | "GroupChatContainer"
"/%/%/:teamId/docs" | "DocIndexContainer"
"/%/%/:teamId/docs" | "DocFormContainer"
"/%/%/:teamId/docs/docId" | "DocContainer"
