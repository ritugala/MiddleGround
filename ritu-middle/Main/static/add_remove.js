$(document).on('click', '.btn-add', function(e)
        {

            
            e.preventDefault();
    
            var controlForm = $('.controls form:first'),
                currentEntry = $(this).parents('.entry:first'),
                newEntry = $(currentEntry.clone()).appendTo(controlForm);

            newEntry.find('input').val('');
            
            var input_added = document.querySelectorAll('.form-control');
            
            controlForm.find('.entry:not(:last) .btn-add')
                .removeClass('btn-add').addClass('close')
                .html("x");
                
        }).on('click', '.close', function(e)
        {
            $(this).parents('.entry:first').remove();
            var btn_Added = document.querySelectorAll('.btn_succ');
            console.log("in_remove");
            
            e.preventDefault();
            return false;
        }).on('click', '.form-control', function(){
            
            var input_added = document.querySelectorAll('.form-control');

            // Set their ids
            for (var i = 1; i <= input_added.length; i++)
                {
                    input_added[i-1].id = 'abc-' + i;
                    input_added[i-1].name='xyz-' + i;
                }
            var n=document.getElementById("hide_i");
            n.value=input_added.length;
            var currentInp = $(this).attr("id");
            console.log(n.value);
            console.log(document.getElementById(currentInp).name);

            var placeBox = new google.maps.places.Autocomplete(document.getElementById(currentInp));

        }).on('click', '.btn_add', function(){
            
            geocodeAddress(new google.maps.Geocoder(), map);
        });
        
