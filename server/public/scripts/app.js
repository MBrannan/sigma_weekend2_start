var cohortMember = 0;
var students;

$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data) {
      students = data.sigmanauts;
      updateDom();
      createCarousel();
      moveCarousel();

      $("#nextStudentButton").on("click", function buttonNext() {
      cohortMember++;
      console.log("pls");
        if (cohortMember >= students.length) {
          cohortMember = 0;
        }
      updateDom();
      moveCarousel();
    });

      $("#previousStudentButton").on("click", function buttonPrevious() {
      cohortMember--;
        if (cohortMember < 0) {
          cohortMember = students.length - 1;
        }
      updateDom();
      moveCarousel();
    });

    function createCarousel() {
      students.forEach(function(student, i) {
        $("#carousel").append("<li></li>");
        $("li").last().data("member", i);
      });
    };

    function moveCarousel() {
      $("#carousel").children().each(function(i, item) {
      console.log($("#carousel").children());
      if ($(this).data("member") == cohortMember) {
        $(this).addClass("cohortMember");
      } else {
        $(this).removeClass("cohortMember");
      }
    });
  }
    function updateDom() {
    var currStudent = students[cohortMember];
    // $("#sigma").append().children().last('div class="person"></div>');
    // var $el = $("#sigma").children().last();
      $("#githubLink").html(currStudent.git_username);
      $("#name").text(currStudent.name);
      $("#shoutout").html(currStudent.shoutout);
    }
  }
});
});
