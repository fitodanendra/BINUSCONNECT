var settingsmenu = document.querySelector(".settings-menu");

function settingsMenuToggle(){
  settingsmenu.classList.toggle("settings-menu-height");
}

function filterPosts() {
    var searchValue = document.getElementById('searchInput').value.toLowerCase();
    var postContainers = document.getElementsByClassName('post-container');

    for (var i = 0; i < postContainers.length; i++) {
        var name = postContainers[i].getAttribute('data-name').toLowerCase();
        if (name.includes(searchValue)) {
            postContainers[i].style.display = 'block';
        } else {
            postContainers[i].style.display = 'none';
        }
    }
}

// Event listener to trigger the filterPosts function when the search input changes
document.getElementById('searchInput').addEventListener('input', filterPosts);