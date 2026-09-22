function div1() {
	const div = document.createElement('div');

	div.className = 'medium default-ltr-iqcdef-cache-1dcjcj4';

	return (div);
}

function button() {
	const btn = document.createElement('button');

	btn.id = 'pip-master-btn';
	btn.ariaLabel = 'Picture-in-Picture';
	btn.className = 'default-ltr-iqcdef-cache-1enhvti';

	return (btn);
}

function div2() {
	const div = document.createElement('div');

	div.className = 'control-medium default-ltr-iqcdef-cache-iyulz3';
	div.role = 'presentation';

	return (div);
}

function svg1() {
	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

	svg.setAttribute('viewBox', '0 0 24 24');
	svg.setAttribute('width', '24');
	svg.setAttribute('height', '24');
	svg.setAttribute('data-icon', 'PIPMedium')
	svg.setAttribute('data-icon-id', ':r12:')
	svg.setAttribute('aria-hidden', 'true')
	svg.setAttribute('fill', 'none');
	svg.setAttribute('role', 'img');

	return (svg);
}

function path1() {
	const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

	path.setAttribute('fill', 'currentColor');
	path.setAttribute('fill-rule', 'evenodd');
	path.setAttribute('d', 'M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z');
	path.setAttribute('clip-rule', 'evenodd');

	return (path);
}

function buildPipButton() {
	const div = div1();
	const btn = button();

	btn.addEventListener('click', () => {
		if (document.querySelector('video').disablePictureInPicture == true) {
			document.querySelector('video').disablePictureInPicture = false;
		}
		document.querySelector('video').requestPictureInPicture();
	});

	const btnDiv = div2();
	const svg = svg1();
	const path = path1();

	div.appendChild(btn);
	btn.appendChild(btnDiv);
	btnDiv.appendChild(svg);
	svg.appendChild(path);

	return (div);
}

function getbottomLine() {
	const bottomLine = document.querySelector('[data-uia="controls-standard"]');

	if (!bottomLine) {
		console.log("Buttons could not be found !");
	}

	return (bottomLine);
}

function buttonScript() {
	if (document.getElementById('pip-master-btn') != null) {
		return;
	}
	const btn = buildPipButton();
	const bottomLine = getbottomLine();

	if (bottomLine == null) {
		return;
	}
	const rightButtonFirstDiv = document.getElementsByClassName('default-ltr-iqcdef-cache-1npqywr')
	rightButtonFirstDiv[8].before(btn);
}

console.log("PIP Master loaded !");
var targetNode = document.body;
var config = {
	attributes: true,
	attributeFilter: ['class'],
	childList: true,
	subtree: true
}
var callback = function () {
	buttonScript();
}
var observer = new MutationObserver(callback);

observer.observe(targetNode, config);