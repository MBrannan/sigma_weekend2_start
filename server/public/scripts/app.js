var cohortMember = 0;

$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data) {
      console.log(data.sigmanauts);
      var students = data.sigmanauts;
        var currStudent = students[cohortMember];
        $("#sigma").append().children().last('div class="person"></div>');
        var $el = $("#sigma").children().last();
          $el.append('<h2>' + currStudent.git_username + '</h2>');
          $el.append('<p>' + "Username: " + currStudent.name + '</p>');
          $el.append('<p>' + "Shoutout: " + currStudent.shoutout + '</p>');

      $("#nextStudentButton").on("click", function buttonNext() {
        console.log("testing this");
          for (var i = 0; i < students.length; i++) {
              cohortMember++;
              if (cohortMember === students.length - 1) {
                cohortMember = 0;
              }
            }
          });
      $("#previousStudentButton").on("click", function buttonPrevious() {
        console.log("testing");
          for (var i = 0; i < students.length; i++) {
              cohortMember--;
              if (cohortMember === 0) {
                cohortMember = students.length;
              }
            }
          });
        }
      });
    });
// function updateDom(data, i) {
  //   $("#sigma").append().children().last('div class="person"></div>');
  //   var $el = $("#sigma").children().last();
  //     $el.append('<h2>' + data.sigmanauts[i].git_username + '</h2>');
  //     $el.append('<p>' + "Username " + data.sigmanauts[i].name + '</p>');
  //     $el.append('<p>' + "Shoutout " + data.sigmanauts[i].shoutout + '</p>');
  //     console.log(data.sigmanauts[i].name);
  // }
