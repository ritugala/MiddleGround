$(document).on('click', '.btn-add', function(e)
        {

            
            e.preventDefault();
    
            var controlForm = $('.controls form:first'),
                currentEntry = $(this).parents('.entry:first'),
                newEntry = $(currentEntry.clone()).appendTo(controlForm);

            newEntry.find('input').val('');
            
            
            
            controlForm.find('.entry:not(:last) .btn-add')
                .removeClass('btn-add').addClass('close')
                .removeClass('btn-succ').addClass('close')
                .html("x");
                
        }).on('click', '.close', function(e)
        {
            $(this).parents('.entry:first').remove();
            
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
            var s=document.getElementById("hide_i");
            s.value=input_added.length;
            console.log(s.value);
            var currentInp = $(this).attr("id");
            console.log(document.getElementById(currentInp).name);
            var placeBox = new google.maps.places.Autocomplete(document.getElementById(currentInp));
        });
