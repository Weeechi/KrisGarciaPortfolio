window.onScroll = function () {myFunction()}

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYoffset >= sticky) {
      navbar.classlist.add(`sticky`);
  }else{
    navbar.classlist.remove(`sticky`);
  }
}
