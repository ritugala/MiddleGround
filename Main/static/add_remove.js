<!DOCTYPE html>

<head>
    <link rel="stylesheet" href="../static/dynamic.css">
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
</head> 

<body>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
    
    <div class="parent">
            <div class="absolute">

                    <div class="card border-secondary mb-3" style="max-width: 18rem;" style="align-items: center;">
                            <div class="card-header"><b>Add People</b></div>
                            <div class="container" style="align-items: center;">
                                <div class="row">
                                    <div class="control-group" id="fields">
                                        <label class="control-label" for="field1">Enter Locations</label>
                                        
                                        <div class="controls">
                                        <form role="form" method="POST" action="">
                                        <fieldset class="form-group">
                                            
                                            <div class="form-group">
                                                {{ form.final_submit(class="btn-outline-info") }}
                                            </div>
                    
                    
                                                <div class="entry input-group col-xs-3 form-group" id="listof">
                                                    
                                                    {{ form.address1(class="form-control form-control-lg", id="autocomplete" , placeholder="Enter location") }}
                    
                                                            <div class="form-group">
                                                                     {{ form.new_user(class="btn-add") }}
                                                            </div>
                                                    
                                                </div>
                    
                    
                                               
                                                <input type="hidden" name="hide_f" id="hide_i" value="0" >
                    
                                        </fieldset>    
                                        </form>
                    
                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

            </div>
            

    </div>
    

    
        <div id='map'></div>
        
        <script>



        document.getElementsByClassName("close").value="x";
        document.getElementsByClassName("btn_add").value="+";
        var map;

        function initialize(){
            initMap();
            initAutocomplete();
        }

        function initMap() {
            console.log("initmap called");
            var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: -34.397, lng: 150.644}
        });
        var geocoder = new google.maps.Geocoder();

        document.getElementById('new_user').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
        
        }


        
        var counter=1;
        function geocodeAddress(geocoder, resultsMap) {
        console.log("geo called");
        console.log('abc-'+String(counter));
        var address = document.getElementById('abc-'+String(counter)).value;
        counter++;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK' ) {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }


        var placeSearch, autocomplete;
        var input_loc;
        function initAutocomplete() {
            
            // Create the autocomplete object, restricting the search predictions to
            // geographical location types.
            
            //do something with each element
            autocomplete = new google.maps.places.Autocomplete(document.getElementById("autocomplete"),{types: ['geocode']});
             
            // Avoid paying for data that you don't need by restricting the set of
            // place fields that are returned to just the address components.
            autocomplete.setFields(['address_component']);
        }

    
        function geolocate() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                var geolocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var circle = new google.maps.Circle(
                    {center: geolocation, radius: position.coords.accuracy});
                    autocomplete.setBounds(circle.getBounds());
                });
            }
        }


</script>
        <script type="text/javascript" src="../static/add_remove.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCd3yT-00TDYD1gYM6WWWKTO6kxOVr-ho8&libraries=places&callback=initialize"
        async defer></script>

        
    
</body>

</html>
