function windowpopup() {
	let x = prompt('Message Input Below', 'My Input')
	let y = prompt('Title Input Below', 'My Input')
    var w = window.open("about:blank", "_blank", "status=no,toolbar=no,location=no,directories=no,resizable=yes,scrollbars=yes,width=9999999,height=99999")
    // w.document.write('<script>document.title = "X";</script>')
	w.document.write('<h1>You Typed:</h1>')
	w.document.write('<h1 id="a">Use the prompt to pick what will show on this line</h1>')
	w.document.getElementById('a').innerHTML = x
	w.document.title = y
	w.document.write('<br>')
	w.document.write('<h1>Title:</h1>')
	w.document.write('<h1 id="b">Title Here</h1>')
	w.document.getElementById('b').innerHTML = w.document.title
	w.document.write('<br>')
	w.document.write('<h1>URL:</h1>')
	w.document.write('<h1 id="c">URL Here</h1>')
	w.document.getElementById('c').innerHTML = w.document.URL
}