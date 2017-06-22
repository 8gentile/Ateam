export const signup = (email, fname, lname, password) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user: { email, fname, lname, password } }
  });
};

export const login = (email, password) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user: { email, password } }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};
