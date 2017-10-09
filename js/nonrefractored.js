// check off specific Todos by Clicking
$('li').click(function () {
    //if li is grey turn it black
    if ($(this).css('color') === 'rgb(128, 128, 128)') {
         $(this).css({
            color: 'black',
            textDecoration: 'none'
        });
    } else {
        // else turn it grey
        $(this).css({
            color: 'grey',
            textDecoration: 'line-through'
        });
    }
});

// click on X to delete Todo
$('span').click(function(event){
    // remove the li
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    // right now it activates the li strike through as well as the span
    // need to avoid event bubbling
    event.stopPropagation();
});

// here we would run into trouble with the .click() method as mentioned in advanced jQuery txt notes!!!!