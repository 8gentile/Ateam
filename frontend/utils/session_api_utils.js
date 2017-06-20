export const signup = (email, password) => {
  return $.ajax({
    method: 'POST',
    url: '/api/user',
    data: { user: { email, password } }
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
