export const fetchPosts = teamId => {
	return $.ajax({
		method: 'GET',
		url: `/api/teams/${teamId}/posts`,
	})
};