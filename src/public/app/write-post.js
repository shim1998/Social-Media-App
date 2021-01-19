$(() => {
    let post_title = $('#post-title');
    let post_body = $('#post-body');
    let sub_btn = $('#post-create');
    sub_btn.click(() => {
        let userdata = JSON.parse(window.localStorage.user);
        let id = userdata.id;
        $.post('/api/posts', {
            userId: id,
            title: post_title.val(),
            body: post_body.val()
        }, () => {
            console.log('created');
        })
    })
})