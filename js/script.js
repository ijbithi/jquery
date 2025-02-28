$(document).ready(function(){
	$('#btn1').click(function(){
		alert("Hello World");
	});
	$('#btn2').click(function(){
		$('.h2').show();
	});
	$('#btn3').click(function(){
		$('.h2').hide();
	});
	$('.input').change(function(){
		alert("hello");
	});
	$('').dblclick(function(){
		alert("Hi,I am Bithi.");
	});
	$(".div1").delagate(".p1", "click" function(){
		$(".p1").css("background-color","red")
	});
	 // click each item for hide
  $("p").click(function () {
    // $(this).hide();
  });
  // hide show toggle
  $("#hide").click(function () {
    $(".hide_show").hide();
  });
  // show
  $("#show").click(function () {
    $(".hide_show").show();
  });
  // toggle
  $("#toggle").click(function () {
    $(".hide_show").toggle();
  });

  $("input").click(function () {
    $(this).css("background-color", "orange");
  });
  //   on blur
  $("input").blur(function () {
    $(this).css("background-color", "cyan");
  });

  // fadeIn
  $("#fade_btn").click(function () {
    // $("#fade_toggle").fadeIn();
    // $("#fade_toggle").fadeOut();
    $("#fade_toggle").fadeToggle(1000);
  });
  // slide toggle
  $("#flip").click(function () {
    // $("#panel").slideUp();
    // $("#panel").slideDown();
    $("#panel").slideToggle();
  });
  // left to right
  $("#animation1Btn").click(function () {
    $("#animation1").animate({
      left: "300px",
      opacity: ".7",
      height: "150px",
      width: "150px",
    });
  });
  $("#animation2Btn").click(function () {
    $("#animation2").animate({
      left: "300px",
      opacity: ".7",
      height: "+=150px",
      width: "+=150px",
    });
  });
  $("#animation3Btn").click(function () {
    $("#animation3").animate({
      height: "toggle",
    });
  });

  $("#animation4Btn").click(function () {
    var div = $("#animation4");
    div.animate({ height: "300px", opacity: "0.4" }, "slow");
    div.animate({ width: "300px", opacity: "0.8" }, "slow");
    div.animate({ width: "100px", opacity: "0.4" }, "slow");
    div.animate({ height: "100px", opacity: "0.8" }, "slow");
  });
  $("#animation5Btn").click(function () {
    var div = $("#animation5");
    div.animate({ width: "300px", height: "200px" }, "slow");
    div.animate({ fontSize: "48px" }, "slow");
  });

  // stop
  $("#flip1").click(function () {
    var div = $("#panel1");
    div.slideToggle(5000);
  });
  $("#slide_stop_btn").click(function () {
    var div = $("#panel1");
    div.stop();
  });
  // show text  html
  $("#show_text").click(function () {
    alert("Text: " + $("#text").text());
  });
  $("#show_html").click(function () {
    alert("HTML: " + $("#text").html());
  });
  $("#show_value").click(function () {
    alert("Value: " + $("#name").val());
  });
  $("#set_text_btn").click(function () {
    $("#set_text").text("Text have set by Ij Bithi");
  });
  $("#set_html_btn").click(function () {
    $("#set_html").html("<strong>Good Morning</strong>");
  });
  $("#set_value_btn").click(function () {
    $("#set_value").val("Ij Bithi");
  });

  // append element
  $("#append_btnP").click(function () {
    $("#append_text").append("<p>This text is appended by Clicker</p>");
  });
  $("#prepend_btnP").click(function () {
    $("#append_text").prepend("<p>This text is appended by Clicker</p>");
  });
  $("#append_btnLi").click(function () {
    $("#append_ol").append("<li>Appended List item</li>");
  });
  $("#prepend_btnLi").click(function () {
    $("#append_ol").prepend("<li>Prepended List item</li>");
  });
  // remove text
  $("#removeBtn").click(function () {
    $("#remove_div").remove();
  });
  // remove all text with class p
  $("#removeAllP").click(function () {
    $("p").remove(".text");
  });
  // empty text
  $("#emptyBtn").click(function () {
    $("#empty_text").empty();
  });
  // addClass
  $("#addClass").click(function () {
    $(".add_h1, .add_h2, .add_p").toggleClass("orange");
    $(".add_div").toggleClass("font_size");
  });
  // ancenstors
  $(".span").parent().css({ color: "red", border: "2px solid orange" });
  // $(".span_parends").parents().css({ color: "red", border: "2px solid orange" });
  $(".span_parends")
    .parents("ul")
    .css({ color: "red", border: "2px solid orange" });
  $(".parentsUntil")
    .parentsUntil("div")
    .css({ color: "red", border: "2px solid orange" });

  // decendants
  $(".descendants").children().css({ color: "red", border: "2px solid red" });
  $(".descendants1")
    .children("p.first")
    .css({ color: "blue", border: "2px solid yellow" });
  // find
  $(".descendants1")
    .find("span")
    .css({ color: "blue", border: "2px solid Gold" });

  // siblings
  $(".h2").siblings().css({ color: "blue", border: "2px solid yellow" });
  $(".h2_sib")
    .siblings("p")
    .css({ color: "blue", border: "2px solid goldenRod" });
  // next
  $(".h2_next").next().css({ color: "blue", border: "2px solid goldenRod" });
  $(".h2_next1")
    .nextAll()
    .css({ color: "blue", border: "2px solid goldenRod" });
  $(".nu1")
    .nextUntil(".nu2")
    .css({ color: "blue", border: "2px solid goldenRod" });

  // filtering
  $(".first1").first().css({ color: "white", backgroundColor: "black" });
  $(".last").last().css({ color: "white", backgroundColor: "black" });
  // eq( )
  $(".eq").eq(2).css({ backgroundColor: "green", color: "white" });
  $("p")
    .filter(".filter")
    .css({ backgroundColor: "goldenRod", color: "white" });
  // $("p").not(".not").css({ backgroundColor: "goldenRod", color: "white" });
  $("#loadBtn").click(function () {
    $("#load").load("Change_file.txt", function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "success") {
        alert("External content loaded successfully!");
      } else alert("Error: " + xhr.status + ": " + xhr.statusTxt);
    });
  });
  // get
  $("#getBtn").click(function () {
    $.get("Change_file.txt", function (data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
  //  post
  $("#postBtn").click(function () {
    $.post(
      "Change_file.txt",
      {
        name: "Israt Bithi",
        city: "Dhaka",
      },
      function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
      }
    );
  });

  // search filter
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
  $("#myInput1").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});