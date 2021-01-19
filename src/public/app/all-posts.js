$(async () => {
    await loadPosts();
})
async function loadPosts() {
    $.get('/api/posts', {}, (data) => {
        for(let p of data){
            let str = `<a href="#" class="card-link" id="${p.id}">Read More</a>`;
            getCards(p, 4, str, 200);
        }
        $(".card-link").click((ev) => {
            let postId = $(ev.target).attr('id');
            console.log(`/api/posts/${postId}`);
            $.get(`/api/posts/${postId}`, {}, (data) => {
                $('#posts-container').empty();
                getCards(data, 12, "", 0);
            })
        })
    })
}

function getCards(data, wdt, str, lim){
    let body;
    if(!lim)body = data.body;
    else body = data.body.substr(0, lim) + '...';
    $('#posts-container').append($(`
        <div class="col-${wdt}">
            <div class="card" style="width: auto;">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${data.user.name}</h6>
                    <p class="card-text">${body}</p>
                    ${str}
                </div>
            </div>
        </div>
    `))
}