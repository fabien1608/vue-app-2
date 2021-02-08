<template>
	<div id="createAlarm">
		<button @click="toggleNewAlarm">Ajouter une alarme</button>
		<div v-if="show_newAlarm">
			<input type="text" v-model="newLabel" placeholder="Saisir le nom de votre alarme" />
			<input type="number" v-model="newHours" placeholder="Saisir l'heure" />
			<input type="number" v-model="newMinutes" placeholder="Saisir la minute"/>
			<button @click="addAlarm">add</button>
			<button @click="toggleNewAlarm">cancel</button>
		</div>
	</div>
</template>

<script>
export default{
	name: "CreateAlarm",
	data() {
		return {
			show_newAlarm: false,
            newLabel: "",
            newHours:"",
            newMinutes:"",
		};
	},
	methods: {

		addAlarm: function(){
            let dateActual = new Date();
            let date = (dateActual.getMonth() +" "+ dateActual.getDay()+", "+ dateActual.getFullYear()+" "+this.newHours+":"+this.newMinutes);
            const label = this.newLabel;
            this.$emit("create-alarm", {
            	label,
            	date,
            });
            this.show_newAlarm = !this.show_newAlarm;
            this.newLabel ="";
            this.newHours = " ";
            this.newMinutes = " ";
        },

        hide_newAlarm: function(){
            this.show_newAlarm = false;
        },
        
        toggleNewAlarm: function(){
            this.show_newAlarm = !this.show_newAlarm;
            this.newLabel ="";
            this.newHours = " ";
            this.newMinutes = " ";
        },
	},
};
</script>
