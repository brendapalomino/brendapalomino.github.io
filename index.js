$(document).ready(function() {
    // only show CodePen link if on debug view (with no header)
    if (location.pathname.indexOf('debug') > -1) {
        $('#view-on-codepen').css('display','inline-table')
    }
});