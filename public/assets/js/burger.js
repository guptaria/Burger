// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burger-status").on("click", function(event) {
      var id = $(this).data("id");
      var newstatus = $(this).data("newstatus");
  
      var newBurgerStatus = {
        devoured: "true"
      };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newBurgerStatus
      }).then(
        function() {
          console.log("Burger is eaten", newBurgerStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bur").val().trim(),
        devoured:"false"
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Burger Ready to eat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});