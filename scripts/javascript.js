$( document ).ready(function() {
  //Accordion

  //Stops accordion from opening if a button inside the accordion button is clicked
  $(".accordion__button .button--icon").click(function () {
    event.stopPropagation();
  });

  //Basic accordion functionality
  $(".accordion").click(function () {
    $(this).toggleClass("accordion--active");
    if ($(this).hasClass("accordion--active")) {
      $(this).next(".accordion__content").slideDown();
    } else {
      $(this).next(".accordion__content").slideUp();
    }
  });

  // Close the accordion if the user clicks outside of selectlist
  $(window).click(function (event) {
    if (!event.target.matches(".accordion__button--select-list")) {
      const selectListBtns = $(".accordion__button--select-list");
      let i;
      for (i = 0; i < selectListBtns.length; i++) {
        $(selectListBtns[i]).removeClass("accordion--active");
        $(selectListBtns[i]).next(".accordion__content").slideUp();
      }
    }
  });

  //Accordion focus on accordion button parent container
  $(".accordion__button").focus(function () {
    $(this).closest(".accordion__container").addClass("focus");
  });

  $(".accordion__button").blur(function () {
    $(this).closest(".accordion__container").removeClass("focus");
  });

  //=========================================================================

  //Modal

  //Stop body scroll when modal is open

  //Lock focus to modal when modal is open
  $(document).ready(function () {
    var findInsiders = function (elem) {
      var tabbable = elem
        .find("select, input, textarea, button, a")
        .filter(":visible");

      var firstTabbable = tabbable.first();
      var lastTabbable = tabbable.last();
      /*set focus on first input*/
      firstTabbable.focus();

      /*redirect last tab to first input*/
      lastTabbable.on("keydown", function (e) {
        if (e.which === 9 && !e.shiftKey) {
          e.preventDefault();
          firstTabbable.focus();
        }
      });

      /*redirect first shift+tab to last input*/
      firstTabbable.on("keydown", function (e) {
        if (e.which === 9 && e.shiftKey) {
          e.preventDefault();
          lastTabbable.focus();
        }
      });

      /* allow escape key to close insiders div */
      elem.on("keyup", function (e) {
        if (e.keyCode === 27) {
          elem.hide();
        }
      });
    };

    findInsiders($(".modal"));
  });
});


  //Selectlist accordion functionality
  function selectListOptionClick($this) {
    $($this)
      .closest(".accordion__container--select-list")
      .find(".accordion__button--select-list")
      .first()
      .attr("data-selected", $($this).data("value"));
    $($this)
      .closest(".accordion__container--select-list")
      .find(".accordion__button--select-list")
      .first()
      .html($($this).text());
  }
