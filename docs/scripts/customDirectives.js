define(['domReady!'], function (document) {

    Vue.directive('highlight-selected', {
        bind: function (el) {
            var div = document.createElement('DIV');
            div.classList.add('selection');
            el.appendChild(div);

            this.selectionDiv = div;
        },

        componentUpdated: function (el) {
            var selectedEl = el.querySelector('.selected');

            // could use offsetParent i think
            var containerRect = el.getBoundingClientRect();
            var selectedRect = selectedEl.getBoundingClientRect();
            var top = selectedRect.top - containerRect.top;

            // assumes el is relativly positioned
            this.selectionDiv.style.top = top + 'px';
            this.selectionDiv.style.height = selectedRect.height + 'px';

            console.log(top);
        },

        unbind: function () {
            this.selectionDiv.remove();
        }
    });

});