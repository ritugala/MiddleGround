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
        });
