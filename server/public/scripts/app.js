var cohortMember = 0;
var i = 0;

$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data) {
      updateDom(data, i);
      console.log(data);
      }
    });
function updateDom(data, i) {
    $("#sigma").append().children().last('div class="person"></div>');
    var $el = $("#sigma").children().last();
      $el.append('<h2>' + data[i].git_username + '</h2>');
      $el.append('<p>' + "Username " + data[i].name + '</p>');
      $el.append('<p>' + "Shoutout " + data[i].shoutout + '</p>');
      console.log(data.sigmanauts[i].name);
  }

function buttonNext() {
  $("#nextStudentButton").on("click", function() {
    cohortMember++;
    if (cohortMember === sigmanauts.length) {
      cohortMember = 0;
    }
  });
}
function buttonPrevious() {
  $("#previousStudentButton").on("click", function() {
    cohortMember--;
    if (cohortMember === 0) {
      cohortMember = sigmanauts.length;
    }
  });
}
});
