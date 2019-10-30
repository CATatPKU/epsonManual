/*

 Oxygen WebHelp Plugin
 Copyright (c) 1998-2017 Syncro Soft SRL, Romania.  All rights reserved.

 */

var pageSearch = window.location.href;
var pageHash = window.location.hash;
var isModerator = false;
var isAnonymous = false;
var pathName = window.location.pathname;

$(".bt_close").click(closeDialog);
$(".bt_cancel").click(function () {
    $(".bt_close").click();
});

$("#l_addNewCmt").click(showNewCommentDialog);
// post or edit comment
//$("#l_bt_submit_nc").click(submitComment);

$("#bt_recover").click(recover);

//$("#bt_signUp").click(signUp);

//debug("js 4");
$("#bt_yesDelete").click(deleteComment);
//debug("js 5");
$("#bt_noDelete").click(hideDeleteDialog);
//debug("js 5");

$("#bt_approveAll").click(showApproveAllDialog);
//debug("js 6");
$("#bt_yesApprove").click(approveAllComments);

$("#bt_noApprove").click(hideApproveDialog);


$("#bt_logIn").click(function () {
    $(".anonymous_post_cmt").remove();
    $('#loginResponse').html('');
    showLoggInDialog();
});

$("#bt_profile").click(updateUserProfile);

$("#bt_logOff").click(loggOffUser);

$(document).ready(function () {

    $(window).on("scroll", function () {
        if ((eval($("#bt_new").position().top - $(window).scrollTop()) < $("#comments").height()) && $("#l_addNewCmt").is(":visible")) {
            $("#comments").addClass('float_comments');
        } else {
            $("#comments").removeClass('float_comments');
        }
    });

});

if (checkConfig()) {
    showComments(pagePath);
}

