$(document).on(click,function () {
    $("#downloadResume").click(function (e) {
        e.preventDefault();
          
        window.location.href 
            = "./downloadables/resume.pdf";
    });
});