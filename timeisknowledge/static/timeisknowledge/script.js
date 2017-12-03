$(document).ready(function() {
    var t;
    var time;

    var clicked = false;
    var countup;
    var second = 0;
    var millisecond = 0;
    var secondstring = "00s ";

    function startTimer() {
        countup = setInterval(function() {
            millisecond++;

            if(millisecond == 100)
            {
                millisecond = 0;
                second++;
                if(second < 10)
                {
                    secondstring = "0" + second.toString() + "s ";
                }
                else
                {
                    secondstring = second.toString() + "s ";
                }
            }

            $("#clock-button").text(secondstring + millisecond.toString() + "ms");
        }, 10);
    }

    function stopTimer() {
        clearInterval(countup);
    }



    $("#fact-container").hide();
    $("time-display").hide();

    $("#clock-button").click(function() {
        if(clicked == false)
        {
            clicked = true;
            startTimer();
            $("#clock").css("animationPlayState", "running");
            $("#clock-button").css("animationPlayState", "running");

        }
        else if(clicked == true)
        {
            stopTimer();
            $("#clock").css("animationPlayState", "paused");
            $("#clock-button").css("animationPlayState", "paused");
            $("#clock").fadeOut(1200);
            setTimeout(function() {
                $("#fact-container").show(1200);
            }, 2000);
            $("#time-display").text(secondstring + millisecond.toString() + "ms");

            var totalTime = (second + millisecond / 100).toString();
            console.log(totalTime);

            // Get the fact
            $.ajax({
              url:"/TimeIsKnowledge/fact/",
              type: "get",
              data: {
                time: totalTime,
              },
              success: function(response) {
                $("#fact").text(response.fact);
                $("#fact").attr("href", response.link);
              },
              failure: function(xhr) {
                $("#fact").text("Did not get any fact");
              },
            });
        }
    });

    $("#fact-button").click(function() {
        clicked = false;
        second = 0;
        millisecond = 0;
        secondstring = "00s ";
        $("#fact-container").hide(1200);
        setTimeout(function() {
                $("#clock").fadeIn(1200);
            }, 2000);
        $("#clock-button").text("00s 00ms");
    });
});
