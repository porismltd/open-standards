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
})