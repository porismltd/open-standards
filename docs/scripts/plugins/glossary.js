(function () {
    'use strict';

    var parseHtml = function (html) {
        var t = document.createElement('template');
        t.innerHTML = html;
        return t.content.cloneNode(true);
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

    var highlight = function (html, items) {
        return html; ///// SAFETY

        var regex;
        var realHtml = parseHtml(html);

        for (var i = 0; i < items.length; i++) {
            regex = createRegEx(items[i]);
            html = html.replace(regex, '$1');
        }

        console.log(html);

        return html;
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