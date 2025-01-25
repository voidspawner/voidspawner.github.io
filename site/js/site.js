
var header, footer, buy, body, html, appear;

function rescroll(e) {
	const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	const scroll = this.scrollY / 400;
	const scroll_down = (height - window.innerHeight - this.scrollY) / 200;
	var opacity = 1 - scroll;
	if (opacity > 0) {
		header.style.opacity = opacity;
		header.style.top = `${-scroll * 10}rem`;
		if (header.style.visibility == 'hidden' || header.style.visibility == '') {
			header.style.visibility = 'visible';
			header.style.display = 'block';
			buy.classList.remove('show');
		}
	} else {
		header.style.visibility = 'hidden';
		header.style.display = 'none';
		buy.classList.add('show');
	}
	opacity = 1 - scroll_down;
	if (opacity > 0) {
		footer.style.opacity = opacity;
		footer.style.bottom = `${-scroll_down * 2}rem`;
		footer.style.visibility = 'visible';
	} else {
		footer.style.visibility = 'hidden';
	}
	for (var index = 0; index < appear.length; index++) {
		var item = appear[index];
		const rect = item.getBoundingClientRect();
		if (!item.classList.contains('show') && rect.top <= window.innerHeight && rect.bottom >= 0) {
			if (item.tagName == 'A') {
				item.style.transitionDuration = `${Math.random() * 4}s`;
			}
			item.classList.add('show');
		}
	}
}

window.addEventListener('load', function() {
	header = document.getElementsByTagName('header').item(0);
	footer = document.getElementsByTagName('footer').item(0);
	buy = document.getElementsByClassName('buy').item(0);
	appear = document.getElementsByClassName('appear');
	body = document.body;
	html = document.documentElement;
	window.addEventListener('scroll', rescroll);
	setTimeout(function() {
		const link = footer.getElementsByClassName('email').item(0);
		email = ('voidspawner###' + '2025###' + '@###' + 'gmail###' + '.###' + 'com###').replace(/###/g, '');
		link.href = 'mailto:' + email;
		link.innerHTML = email;
		link.style.opacity = 1;
	}, 5000);
	rescroll(window);
});

function go(url) {
	window.location.href = url;
}