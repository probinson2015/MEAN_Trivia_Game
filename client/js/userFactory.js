app.factory('UserFactory', function($http, $location){
	return{
		// var that = this;
		setName: function(){
			while ( !this.name || this.name.length < 3){
				this.name = prompt('Please enter your name...');
			}
		},
		getName: function(){
			return this.name;
		},
		resetName: function(){
			this.name= null;
			this.setName();
		}
	}
})