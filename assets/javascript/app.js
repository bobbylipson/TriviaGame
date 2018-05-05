$(document).ready(function(){
    $("#start-button").click(function(){
        var number = 60;
        alert("Play Ball!");
      $("#start-button").on("click", start);
      $("#submit").on("click", finish);
      $("#restart").on("click", restart);

      function start(){
          counter = setInterval(timer, 1000);
          showMe(".question");
          showMe(".answers");
          showMe("#submit");
            hideMe("#start-button");
            hideMe(".rules");
            hideMe("#restart");
            hideMe("#results");
      }

      function timer(){
          number--
          $("#show-number").html("<h2>" + number + "</h2>");
          if (number === 0){
              alert("Shot Clock Violation")
              stop();
          }
      }
      function stop(){
          clearInterval(counter);
          $("#results").show();
          $("#restart").show();
                $(".question").hide();
                $(".answers").hide();
                $("#submit").hide();
      }
      function finish(){
          number = 1;
          clearInterval(counter);
          timer();
      }
      function restart(){
          number = 60;
          start();
      }
      function hideMe(e) {
          $(e).hide();
      }
      function showMe(e) {
          $(e).show();
      }

      start();
    });
});

$(document).ready(function(){
    $("#results").click(function(){
        if (!$("input[@name=q1]:checked").val() ||
        !$("input[@name=q2]:checked").val() ||
        !$("input[@name=q3]:checked").val() ||
        !$("input[@name=q4]:checked").val() ||
        !$("input[@name=q5]:checked").val() ||
        !$("input[@name=q6]:checked").val()
    ) {
        alert("Clock is still running");
    }
    else {
        var cat1name = "1";
        var cat2name = "2";
        var cat3name = "3";
        var cat4name = "4";
        var cat5name = "5";
        var cat6name = "6";
        var cat7name = "none";

        var cat1 = ($("input[@name=q1]:checked").val() !="a");
        var cat2 = ($("input[@name=q2]:checked").val() !="b");
        var cat3 = ($("input[@name=q3]:checked").val() !="c");
        var cat4 = ($("input[@name=q4]:checked").val() !="d");
        var cat5 = ($("input[@name=q5]:checked").val() !="a");
        var cat6 = ($("input[@name=q6]:checked").val() !="d");
        var cat7 = (!cat1 && !cat2 && !cat3 && !cat4 && !cat5 && !cat6); var categories = [];

        if (cat1) { categories.push(cat1name) };
        if (cat2) { categories.push(cat2name) };
        if (cat3) { categories.push(cat3name) };
        if (cat4) { categories.push(cat4name) };
        if (cat5) { categories.push(cat5name) };
        if (cat6) { categories.push(cat6name) };
        if (cat7) { categories.push(cat7name) };

        var catStr = "You answered the following questions incorrectly: + catagories.join(', ') + ";
        $("#catagorylist").text(catStr);
        $("#catagorylist").show("slow");

        if (cat1) { $("catagory1").show("slow"); };
        if (cat2) { $("catagory2").show("slow"); };
        if (cat3) { $("catagory3").show("slow"); };
        if (cat4) { $("catagory4").show("slow"); };
        if (cat5) { $("catagory5").show("slow"); };
        if (cat6) { $("catagory6").show("slow"); };
        if (cat7) { $("catagory7").show("slow"); };
        { $("#closing").show("slow"); };

    }
    });
});