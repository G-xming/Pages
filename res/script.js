function windowpopup() {
    var w = window.open("about:blank", "_blank", "status=no,toolbar=no,location=no,directories=no,resizable=yes,scrollbars=yes,width=9999999,height=99999")
    w.document.write('<script>document.title = "about:blank";</script>' +	
}