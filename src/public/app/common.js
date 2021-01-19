$(() => {
    $('#navbar').load('../components/navbar.html', loginIfNeeded)
    $('#content').load('../components/all-posts.html')
    $('#footer').load('../components/footer.html')
})

function loginIfNeeded() {
    let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
    if(currentUser == null){
        $.post('/api/users', {}, (data) => {
            console.log(`Logged in as ${data.name}`);
            window.localStorage.user = JSON.stringify(data);
            $('#nav-username').text(data.name)
        })
    }
    else {
        console.log(`Resuming session as ${currentUser.name}`);
        $('#nav-username').text(currentUser.name)
    }
}