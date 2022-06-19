// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function hideLoadingDiv() {
    setTimeout(function () {
        document.getElementById('alert').classList.add('hidden');
    }, 2000); 
    console.log("in hide loading div");
    // setTimeout(function() {
    //     $('#msg').fadeOut('fast');
    // }, 2000); // <-- time in milliseconds
}