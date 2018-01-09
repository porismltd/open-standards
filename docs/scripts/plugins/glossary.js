(function () {
    'use strict';

    var parseHtml = function (html) {
        var parser = new DOMParser();
        return parser.parseFromString(html, 'text/html');
    };

    var createId = function (item) {
        return item.term.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
    };

    var createUrl = function (item) {
        return '#/glossary?id=' + createId(item);
    };

    var createRegEx = function (item) {
        var term = item.term;

        return new RegExp('\\b(' + term + ')\\b', 'gi')
    };

    var loadGlossary = function (success) {
        Docsify.get('glossary.json').then(function (items) {
            items = JSON.parse(items);
            Docsify.glossary.items = items;
            success(items);
        });
    };

    var highlightNodes = function (el, items) {
        //return;

        var walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
        var node, replacements = [];
        var textNodes = [];

        while (node = walk.nextNode()) {
            if (node.nodeType !== Node.TEXT_NODE)
                continue;
            textNodes.push(node);
        }

        var noChange = true, i, j, item, regex, html;

        for (i = 0; i < textNodes.length; i++) {
            node = textNodes[i];
            html = node.textContent;

            for (j = 0; j < items.length; j++) {
                item = items[j];
                regex = item.regex;
                if (!html.match(regex)) {
                    continue;
                }
                noChange = false;
                html = html.replace(regex, '<span style="background-color: red">$1</span>');
            }

            if (noChange)
                return;

            var parentNode = node.parentElement;

            var fakeParentNode = document.createElement('span');
            fakeParentNode.innerHTML = html;
            var currentNode;

            while (currentNode = fakeParentNode.firstChild) {
                parentNode.insertBefore(currentNode, node);
            }
            
            parentNode.removeChild(node);
        }
    };

    var highlight = function (html, items) {
        //return html; ///// SAFETY

        var regex;
        var domHtml = parseHtml(html);

        for (var i = 0; i < items.length; i++) {
            items[i].regex = createRegEx(items[i]);
        }

        highlightNodes(domHtml, items);     

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
        template: '<div class="glossary"><dl class="item" v-for="item in items"><dt v-bind:id="createId(item)"><a v-bind:href="createUrl(item)" v-bind:data-id="createId(item)" class="anchor"><span>{{item.term}}</span></a></dt><dd>{{item.definition}}</dd></dl></div>',
        data: function () {
            
            var items = !!Docsify.glossary && !!Docsify.glossary.items ? Docsify.glossary.items : [];

            return {
                items: items
            };
        },
        methods: {
            createId: function (item) {
                return createId(item);
            },
            createUrl: function (item) {
                return '#/glossary?id=' + createId(item);
            }
        }
    });

}());