
lightbox.option({
  'fitImagesInViewport': true,
  'showImageNumberLabel': false,
  'wrapAround': true
});

function filterImg() {

    var input, filter, ul, li, a, i;
    // INPUT FUNCTION TO GET SEARCH ITEM
    input = document.getElementById('searchB');
    filter = input.value.toUpperCase();
    //-------------------------------------
    ul = document.getElementById("ulList");
    li = ul.getElementsByTagName('li');

    // LOOPS THROUGH ALL LIST ITEMS TO FIND THE ONE THAT MATCHES
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
