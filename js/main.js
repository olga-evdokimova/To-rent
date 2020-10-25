
window.onload = function () {
	var elements = document.getElementsByTagName('*'), i;

	var request = 0;

	for (i in elements) {
		if (elements[i].hasAttribute && elements[i].hasAttribute('html')) {
			fragment(elements[i], elements[i].getAttribute('html'));
			request += 1;
		}
	}
	function fragment(el, url) {
		var localTest = /^(?:file):/,
			xmlhttp = new XMLHttpRequest(),
			status = 0;

		xmlhttp.onreadystatechange = function () {
			/* if we are on a local protocol, and we have response text, we'll assume
 *  				things were sucessful */
			if (xmlhttp.readyState == 4) {
				status = xmlhttp.status;
			}
			if (localTest.test(location.href) && xmlhttp.responseText) {
				status = 200;
			}
			if (xmlhttp.readyState == 4 && status == 200) {
				el.outerHTML = xmlhttp.responseText;
				request -= 1;
				if (request == 0) postmain()
			}
		}

		try {
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		} catch (err) {
			/* todo catch error */
		}
	}
}


