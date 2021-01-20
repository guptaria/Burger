// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burger-status").on("click", function(event) {
      var id = $(this).data("id");
      var newEaten = $(this).data("newEaten") === false;
  
      var newBurgerStatus = {
        devoured: newEaten
      };
  console.log(`id: ${id}`);
  console.log(`devoured ${newBurgerStatus.devoured}`)

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerStatus
      }).then(
        function() {
          console.log("Burger is eaten", newEaten);
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
        devoured: "false"
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

  //   $(".delete-burger").on("click", function (event) {
  //     console.log("working")
  //     var id = $(this).data("id");

  //     // Send the DELETE request.
  //     $.ajax("/api/burgers/" + id, {
  //         type: "DELETE"
  //     }).then(
  //         function () {

  //             // Reload the page to get the updated list
  //             location.reload();
  //         }
  //     );
  // });


});