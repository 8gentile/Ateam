export const fetchPosts = teamId => {
	return $.ajax({
		method: 'GET',
		url: `/api/teams/${teamId}/posts`,
	})
};

export const fetchPost = postId => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`,
  })
};

export const createPost = post => {
  return $.ajax({
    method: 'POST',
    url: `/api/posts/`,
    data: { post },
  })
};