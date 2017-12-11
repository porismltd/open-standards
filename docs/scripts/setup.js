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


Vue.component('button-counter', {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1
            this.$emit('increment')
        }
    },
});


Vue.component('format-sample', {
    props: ['tab'],
    template: document.getElementById('template-format-samples') ? document.getElementById('template-format-samples').innerHTML : '',
    data: function () {
        return { selected: this.tab }
    },
    methods: {
        select: function (item) {
            this.selected = item;
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

        var cssDeclarations = [];

        accordionDivs.forEach(function (el, index) {
            originalHeight = el.style.height;
            el.style.height = 'auto';

            cssDeclarations.push('.incentive-scheme .accordion > section:nth-child(' + (index + 1) + ').selected > div { height: ' + el.offsetHeight + 'px; }');

            el.style.height = originalHeight;
        });

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
