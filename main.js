const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code == "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1FCXM_pt-PTBR982BR982&oq=" + input + "&aqs=chrome..69i57j46i433i512j0i433i512j46i433i512l2j0i433i512j46i512j0i512j0i433i512j0i512.1313j0j7&sourceid=chrome&ie=UTF-8";
}