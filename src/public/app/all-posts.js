$(async () => {
    await loadPosts();
})
async function loadPosts() {
    $.get('/api/posts', {}, (data) => {
        for(let p of data){
            let str = `<a href="#" class="card-link" id="${p.id}">Read More</a>`;
            getCard(p, 4, str, 200, 1);
        }
        $(".card-link").click((ev) => {
            let postId = $(ev.target).attr('id');
            console.log(`/api/posts/${postId}`);
            $.get(`/api/posts/${postId}`, {}, (data) => {
                $('#posts-container').empty();
                getCard(data, 12, "", 0, 1);
                createCommentForm();
                $.get(`/api/comments/${postId}`, {}, (data) => {
                    for(let p of data)getCard(p, 12, "", 0, 0);
                })
                $('#comment-create').click((ev) => {
                    let body = $('#comment-body').val();
                    let userdata = JSON.parse(window.localStorage.user);
                    let id = userdata.id;
                    $.post('/', {
                        userId: id,
                        postId: postId,
                        body: body
                    }, (data) => {
                        console.log('created');
                    })
                })
            })
        })
    })
}

function getCard(data, wdt, str, lim, f){
    let body, title;
    if(!lim)body = data.body;
    else body = data.body.substr(0, lim) + '...';
    if(f)title = `<h5 class="card-title">${data.title}</h5>`;
    else title = "";
    $('#posts-container').append($(`
        <div class="col-${wdt}">
            <div class="card" style="width: auto;">
                <div class="card-body">
                    ${title}
                    <h6 class="card-subtitle mb-2 text-muted">${data.user.name}</h6>
                    <p class="card-text">${body}</p>
                    ${str}
                </div>
            </div>
        </div>
    `))
}

function createCommentForm(){
    $('#posts-container').append($(`
        <div class="col-12">
            <h1 class="display-6 text-center">Write Comment</h1>
            <div class="form-group">
                <textarea class="form-control" id="comment-body"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" id="comment-create">Create Comment</button>
        </div>
    `))
}

