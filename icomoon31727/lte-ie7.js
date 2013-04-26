/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-arrow-right-alt1' : '&#xe000;',
			'icon-rss-alt' : '&#xe001;',
			'icon-rss' : '&#xe002;',
			'icon-play-alt' : '&#xe003;',
			'icon-map-pin-stroke' : '&#xe004;',
			'icon-left-quote' : '&#xe005;',
			'icon-right-quote' : '&#xe006;',
			'icon-left-quote-alt' : '&#xe007;',
			'icon-right-quote-alt' : '&#xe008;',
			'icon-checkmark' : '&#xe009;',
			'icon-cancel' : '&#xe00a;',
			'icon-facebook' : '&#xe00b;',
			'icon-twitter' : '&#xe00c;',
			'icon-blogger' : '&#xe00d;',
			'icon-mail' : '&#xe00e;',
			'icon-mail-2' : '&#xe00f;',
			'icon-mail-3' : '&#xe010;',
			'icon-linkedin' : '&#xe011;',
			'icon-menu' : '&#xe012;',
			'icon-envelop' : '&#xe013;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};