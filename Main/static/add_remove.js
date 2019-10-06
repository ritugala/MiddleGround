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
                .removeClass('btn-succ').addClass('close')
                .html("x");
                
        }).on('click', '.close', function(e)
        {
            $(this).parents('.entry:first').remove();
            var btn_Added = document.querySelectorAll('.btn_succ');
            
            e.preventDefault();
            return false;
        }).on('click', '.form-control', function(){
            
            var input_added = document.querySelectorAll('.form-control');

            // Set their ids
            for (var i = 0; i < input_added.length; i++)
                {
                    input_added[i].id = 'abc-' + i;
                    input_added[i].name='xyz-' + i;
                }
            var n=document.getElementById("hide_i");
            n.value=input_added.length;
            var currentInp = $(this).attr("id");
            console.log(n.value);
            console.log(document.getElementById(currentInp).name);

            var placeBox = new google.maps.places.Autocomplete(document.getElementById(currentInp));
            //if(n.value>1)
                //{geocodeAddress(new google.maps.Geocoder(), map, n.value-2);}
            //else {
                //console.log("in else");
           // }
        });
        
