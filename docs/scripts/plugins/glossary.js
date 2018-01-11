(function () {
    'use strict';

    var parseHtml = function (html) {
        var parser = new DOMParser();
        return parser.parseFromString(html, 'text/html');
    };

    

    var loadGlossary = function (success) {

        var createId = function (item) {
            return item.term.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
        };
    
        var createUrl = function (item) {
            return '#/glossary?id=' + createId(item);
        };
    
        var createRegEx = function (item) {
            var term = item.term;
    
            return new RegExp('\\b(' + term + ')\\b', 'i')
        };

        Docsify.get('glossary.json').then(function (items) {
            
            items = JSON.parse(items);

            items = _.orderBy(items, ['term'], ['asc']);

            _.forEach(items, function (item) {
                item.id = createId(item);
                item.url = createUrl(item);
                item.regex = createRegEx(item);
            });

            Docsify.glossary.items = items;
            success(items);
        });
    };

    var firstIndexOf = function (text, items) {
        var first = null, match;

        _.forEach(items, function (item) {
            match = item.regex.exec(text);
            if (!match)
                return;
            if (first && first.index < match.index)
                return;            
            match.item = item;
            first = match;
        });

        return first;
    };

    var replaceTerms = function (html, items) {
        
        var result = [];
        var match;

        while (match = firstIndexOf(html, items)) {
            result.push(html.substring(0, match.index));
            //result.push('<span class="glossary-item">' + match[1] + '<sup><span><span class="heading">' + match.item.term + '</span>' + match.item.definition + '</span></sup></span>');
            result.push('<glossary-term text="' + match[1] + '" term="' + match.item.term + '" definition="' + match.item.definition + '" url="' + match.item.url + '"></glossary-term>')
            html = html.substring(match.index + match[1].length);
        }

        return result.join('') + html;
    };

    var findAndReplaceAllTerms = function (node, items) {
        var html = replaceTerms(node.textContent, items);

        if (node.textContent === html)
            return;

        var parentNode = node.parentElement;

        var fakeParentNode = document.createElement('span');
        fakeParentNode.innerHTML = html;
        var currentNode;

        while (currentNode = fakeParentNode.firstChild) {
            parentNode.insertBefore(currentNode, node);
        }
        
        parentNode.removeChild(node);
    };

    var highlightTerms = function (el, items) {
        //return;

        var walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
        var node, replacements = [];
        var textNodes = [];

        while (node = walk.nextNode()) {
            if (node.nodeType !== Node.TEXT_NODE)
                continue;
            textNodes.push(node);
        }

        var html;

        for (var i = 0; i < textNodes.length; i++) {
            findAndReplaceAllTerms(textNodes[i], items);
        }
    };

    var highlight = function (html, items) {
        var regex;
        var domHtml = parseHtml(html);

        highlightTerms(domHtml, items);     

        var body = domHtml.getElementsByTagName('body')[0];
        return body.innerHTML;
    };

    var install = function (hook, vm) {

        hook.init(function() {
            Docsify.glossary = {};
        });
        
        hook.afterEach(function (html, next) {
            
            if (Docsify.glossary.items) {
                html = highlight(html, Docsify.glossary.items);
                next(html);
            }
            else {
                loadGlossary(function (items) {
                    html = highlight(html, items);
                    next(html);
                });
            }            
        });
    };

    $docsify.plugins = [].concat(install, $docsify.plugins);

    Vue.component('glossary-display', {
        template: '<div class="glossary"><dl class="item" v-for="item in items"><dt v-bind:id="item.id"><a v-bind:href="item.url" v-bind:data-id="item.id" class="anchor"><span>{{item.term}}</span></a></dt><dd>{{item.definition}}</dd></dl></div>',
        data: function () {
            
            var items = !!Docsify.glossary && !!Docsify.glossary.items ? Docsify.glossary.items : [];

            return {
                items: items
            };
        }
    });

    var glossaryPopup = new (function () {        
        var _fadeTimeoutId = false;      
        var _hideTimeoutId = false;
        var _hoverDiv = document.getElementById('glossary-term-hover');
        
        _hoverDiv = document.createElement('DIV');
        _hoverDiv.setAttribute('id', 'glossary-term-hover');
        _hoverDiv.innerHTML = '<dl><dt><a></a></dt><dd></dd></dl>';
        document.body.appendChild(_hoverDiv);

        var showNow = function () {
            clearTimeout(_fadeTimeoutId);
            clearTimeout(_hideTimeoutId);

            _hoverDiv.style.zIndex = 1;
            _hoverDiv.className = 'visible';
        };

        var hideNow = function () {
            clearTimeout(_fadeTimeoutId);
            clearTimeout(_hideTimeoutId);

            _hoverDiv.style.zIndex = -1000;
            _hoverDiv.className = 'hidden';
        };

        this.show = function (target, item) {
            _hoverDiv.querySelector('a').setAttribute('href', item.url);
            _hoverDiv.querySelector('dd').innerText = item.definition;
            _hoverDiv.querySelector('a').innerText = item.term;

            var rect = target.getBoundingClientRect();

            var left = rect.width + rect.left;
            if ((left + _hoverDiv.offsetWidth) > window.innerWidth) {
                left = rect.left - _hoverDiv.offsetWidth;
                if (left < 0)
                    left = 0;
            }

            var top = rect.height + rect.top;
            if ((top + _hoverDiv.offsetHeight) > window.innerHeight) {
                top = rect.top - _hoverDiv.offsetHeight;
                if (top < 0)
                    top = 0;
            }
            
            _hoverDiv.style.left = Math.round(left) + 'px';
            _hoverDiv.style.top = Math.round(top) + 'px';

            showNow();
        };

        var hide = function () {
            _fadeTimeoutId = setTimeout(function () {
                _hoverDiv.className = 'hidden';
            }, 500);

            _hideTimeoutId = setTimeout(function () {
                hideNow();
            }, 1000);
        };

        this.hide = function () {
            hide();
        };

        _hoverDiv.querySelector('a').addEventListener('click', function () {
            hideNow();
        });

        _hoverDiv.addEventListener('mouseenter', function () {
            showNow();
        });

        _hoverDiv.addEventListener('mouseleave', function () {
            hide();
        });
    })();

    Vue.component('glossary-term', {
        template: '<span class="glossary-item" v-on:mouseenter="show" v-on:mouseleave="hide">{{text}}</span>',
        props: ['text', 'term', 'definition', 'url'],
        methods: {
            show: function (e) {
                glossaryPopup.show(e.target, this);
            },
            hide: function (e) {
                glossaryPopup.hide();
            }
        }
    });

}());