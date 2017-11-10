function fillBlogEntries(username)
{
  steem.api.getDiscussionsByBlog({tag: username, limit: 10}, function(err, blog) 
    {
      var blogContainer = $('#blog');
      for (var i = 0; i < blog.length; i++) 
      {
        blogContainer.append('<div><a target="_blank" href="https://steemit.com' + 
          blog[i].url + '">'+ blog[i].created + ' ' + blog[i].title  + '</div></a>');
      }
    });
}
