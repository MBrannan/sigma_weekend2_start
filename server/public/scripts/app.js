var sigmaValue = 0;
var cohortMember = 0;

$(document).ready(function(){


function getSigmaData() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      getSigmaData();
      console.log("ajax fucking pls");
      updateDom();
      }
    });
  };
});
function updateDom(data) {
  for (var i = 0; i < data.length; i++) {
    $("#sigma-data ").append('div class="person"></div>');
    var $el = $("#sigma-data").children().last();
      $el.append('<h2>' + data.sigmanauts.name + '</h2>');
      $el.append('<h2>' + data.sigmanauts.git_username + '</h2>');
      $el.append('<h2>' + data.sigmanauts.shoutout + '</h2>');
    };
  }

function buttonNext() {
  $("#nextStudentButton").on("click", function() {
    cohortMember++;
    if (cohortMember === data.length) {
      cohortMember = 0;
    }
  });
}
function buttonPrevious() {
  $("#previousStudentButton").on("click", function() {
    cohortMember--;
    if (cohortMember === 0) {
      cohortMember = data.length;
    }
  });
}
