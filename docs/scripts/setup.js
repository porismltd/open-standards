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
})


Vue.component('format-sample', {
    props: ['tab'],
    template: document.getElementById('template-format-samples') || '',
    data: function () {
        return { selected: this.tab }
    },
    methods: {
        select: function (item) {
            this.selected = item;
        }
    }
});


// var main = new Vue({
//     el: '#main',
//     data: { helloMessage: 'HELLO FROM VUE' }
// });
