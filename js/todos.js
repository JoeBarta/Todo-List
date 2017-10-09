// check off specific Todos by Clicking
// when an li is clicked inside of a ul run this code
$('ul').on('click', 'li', function () {
    // refractored with CSS to make the code just one line to strike through todo
    $(this).toggleClass('completed');
});

// click on X to delete Todo
// when a span is clicked inside of a ul run this code
$('ul').on('click', 'span', function (event) {
    // remove the li
    $(this).parent().fadeOut(1000, function () {
        $(this).remove();
    });
    // right now it activates the li strike through as well as the span
    // need to avoid event bubbling
    event.stopPropagation();
});

$('input[type="text"]').keypress(function (event) {
    if (event.which === 13) {
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val('');
        // create new li and add to ul
        $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
    }
});

// toggle on plus sign
$('.fa-plus').click(function(){
    $('input[type="text"]').fadeToggle();
});