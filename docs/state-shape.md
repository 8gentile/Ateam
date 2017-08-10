
{
  - session: {
    currentUser: {
      id: 1,
      email: "docReader@github.io"
    },
    errors: []
  },

  - teams: {
    1: {
      id: 1,
      name: "Ateam",
      manager_id: 1,
      todoLists: {
        todoItems: []
      },
      schedule: {
        events: []
      },
      board: {
        posts: []
      },

    },
    2: { ... }
  },

  - todoLists: {
    1: {
      id: 1,
      title: "Shaping the State",
      done: false,
      todoItems: []
    },
    2: { ... }
  },

  - todoItems: {
    1: {
      id: 1,
      title: "Be granular",
      done: false,
      list_id: 1,
    }
    2: { ... }
  },

  - schedules: {
    1: {
      id: 1,
      team_id: 1,
      events: []
    }
  },

  - events: {
    1: {
      id: 1,
      title: "Full Stack Proposal Deadline!",

    },
    2: { ... }
  }

  - boards: {
    1: {
      id: 1,
      team_id: 1,
      posts: []
    },
    2: { ... }
  }

  - posts: {
    1: {
      id: 1,
      title: "Time to go to work!",
      body: "Finally, food for thought.",
      user_id: 1
    },
    2: { ... }
  }

}
