
lightbox.option({
  'fitImagesInViewport': true,
  'showImageNumberLabel': false,
  'wrapAround': true
});

// var searchImg = document.getElementById('searchB');
// var liList =  document.getElementsByTagName('li');
//
// for ( var i = 0; i < liList.length; i += 1) {
//   liList[i].style.display ='none';
// }

// function filterImg();
//
// const input = document.querySelector('input');
//
// const searchValue = input.value;
//
// const li = document.querySelectorAll('li');
//
// const title = document.querySelectorAll('li a data-title');
//
// if (search.textcontent == li.textcontent);

function filterImg() {

    var input, filter, ul, li, a, i;
    // INPUT FUNCTION TO GET SEARCH ITEM
    input = document.getElementById('searchB');
    filter = input.value.toUpperCase();

    ul = document.getElementById("ulList");
    li = ul.getElementsByTagName('li');
    // a = ul.getElementsByTagName('a').textcontent();

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
