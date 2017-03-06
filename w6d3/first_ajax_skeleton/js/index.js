console.log("Hello from the JavaScript console!");

$.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b",
  type: "GET",
  data: "http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b",
  success: function(data){
    console.log(data);
  }

});
console.log("done");
// Your AJAX request here

// Add another console log here, outside your AJAX request
