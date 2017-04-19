module.exports = {
	content:{
		name:{type:String},
		comment:{type:String},	
		date:{type:String}
	},
	user:{ 
		name:{type:String,required:true},
		password:{type:String,required:true},
	}
};