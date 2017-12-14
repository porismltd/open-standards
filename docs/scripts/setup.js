var header = new Vue({
    el: 'body > header',
    data: {
        q: ''
    },
    methods: {
        search: function () {
            if (this.q) {
                location.href = '/doc.html?#/?q=' + this.q;
            }
        }
    }
});


Vue.component('format-sample', {
    props: ['tab', 'hiddenTabs'],
    template: document.getElementById('template-format-samples') ? document.getElementById('template-format-samples').innerHTML : '',
    data: function () {
        return { selected: this.tab }
    },
    methods: {
        select: function (item) {
            this.selected = item;
        },
        isVisible: function (item) {
            var hiddenTabs = this.hiddenTabs;
            return !(hiddenTabs && hiddenTabs.indexOf && hiddenTabs.indexOf(item) > -1);
        }
    }
});


Vue.component('incentive-scheme', {
    props: ['tab'],
    template: document.getElementById('template-incentive-scheme') ? document.getElementById('template-incentive-scheme').innerHTML : '',
    data: function () {
        return { selected: this.tab }
    },
    mounted: function () {
        var accordionDivs = (this.$el.querySelectorAll('.accordion > section > div'));
        var originalHeight;

        var cssDeclarations = [], el;

        for (var index = 0; index < accordionDivs.length; index++) {
            el = accordionDivs[index];

            originalHeight = el.style.height;
            el.style.height = 'auto';

            cssDeclarations.push('.incentive-scheme .accordion > section:nth-child(' + (index + 1) + ').selected > div { height: ' + el.offsetHeight + 'px; }');

            el.style.height = originalHeight;
        }

        var node = document.createElement('style');
        node.innerHTML = cssDeclarations.join('\n');
        document.body.appendChild(node);
    },
    methods: {
        select: function (item) {
            this.selected = item;
        }
    }
});
