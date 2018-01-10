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

    Vue.component('glossary-term', {
        template: '<span class="glossary-item">{{text}}<sup v-on:click.stop.prevent="click"><span><span class="heading">{{term}}</span>{{definition}}</span></sup></span>',
        props: ['text', 'term', 'definition', 'url'],
        methods: {
            click: function (e) {
                console.log('glossary-term.click');
                console.log(this.url);
                window.location.hash = this.url;
                return false; 
            }
        }
    });

}());