<template>
	<div id="createAlarm">
		<button @click="toggleNewAlarm">Ajouter une alarme</button>
		<div class="hide-div" v-if="show_newAlarm">
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
            let formatMonth = dateActual.getMonth();
            let formatDay = dateActual.getDay();
            if (formatMonth<10){
                formatMonth="0"+formatMonth;
            }
            if (formatDay<10){
                formatDay="0"+formatDay;
            }
            if (this.newHours<10){
                this.newHours="0"+this.newHours
            }
            if (this.newMinutes<10){
                this.newMinutes="0"+this.newMinutes
            }
            let date = (formatMonth +" "+ formatDay+", "+ dateActual.getFullYear()+" "+this.newHours+":"+this.newMinutes);
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
<style>
.hide-div{
        margin-top: 1em;
        margin-bottom: 5em;
    }

    .hide-div input,.hide-div button{
        margin-left: 1em;
    }
</style>