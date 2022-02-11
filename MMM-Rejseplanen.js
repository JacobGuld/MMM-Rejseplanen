
module.register('Rejseplanen', {

    defaults: {
        text = 'test'
    },

    start: function(){
        Log.log(this.name + ' is loaded!');
    },

    getDom: function(){

        var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
    }
});