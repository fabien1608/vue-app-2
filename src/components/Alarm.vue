<template>
<div id = "main">
	<h1 class = "title">Mes Réveils</h1>
	<div class ="alarm">
		<ul>
            <li v-for="alarm in alarms">{{ alarm.label }}<span> {{alarm.date | format}}</span>
            <button @click="toggleAlarm" id="symbol">✎</button><button @click="delateAlarm">&#128465;</button></li>
            <div v-if="show_Alarm">
                <input type="text" v-model="newLabel" placeholder="Saisir le nom de votre alarme" />
                <input type="number" v-model="newHours" placeholder="Saisir l'heure" />
                <input type="number" v-model="newMinutes" placeholder="Saisir la minute"/>
                <button @click="modifAlarm">Save</button>
            </div>
        </ul>
		<button @click="toggleNewAlarm">Ajouter une alarme</button>
		<div v-if="show_newAlarm">
			<input type="text" v-model="newLabel" placeholder="Saisir le nom de votre alarme" />
			<input type="text" v-model="newHours" placeholder="Saisir l'heure" />
			<input type="text" v-model="newMinutes" placeholder="Saisir la minute"/>
			<button @click="addAlarm">add</button>
			<button @click="toggleNewAlarm">cancel</button>
		</div>
	</div>
    <audio id="audio1" src="alarm_sound.mp3" preload="auto"></audio>
</div>
</template>

<script>

export default {
    name: "Alarm",
    data() {
        return {
            show_Alarm: false,
            show_newAlarm: false,
            newLabel: "",
            newHours:"",
            newMinutes:"",
            alarms: [
            {
            label: 'test Alarm',
            date:'03 13, 08 04:20'
            }], 
        };
    },

    filters: {
        format : function (date) {
            const dateToFormat = new Date(date);
            let formatMinutes;
            if (dateToFormat.getMinutes()<10){
                formatMinutes = "0" + dateToFormat.getMinutes();
            }
            else{
                formatMinutes = dateToFormat.getMinutes();
            }
            return dateToFormat.getHours()+"h"+ formatMinutes;
        }
    },

    methods: {
        addAlarm: function(){
            let dateActual = new Date();
            let dateToPush = (dateActual.getMonth() +" "+ dateActual.getDay()+", "+ dateActual.getFullYear()+" "+this.newHours+":"+this.newMinutes);
            this.alarms.push({label: this.newLabel, date: dateToPush.toString()});
            this.show_newAlarm = !this.show_newAlarm;
            this.newLabel ="";
            this.newHours = " ";
            this.newMinutes = " ";
            let time1 = dateActual.getTime();
            let dateAlarm = new Date(dateToPush);
            let time2 = dateAlarm.getTime();
            let interval = time1 - time2;
            console.log(typeof interval);
            console.log(interval);
            let alarmChrono = setTimeout(()=>{this.playAlarm()} ,10000);

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

        toggleAlarm: function(){
            this.show_Alarm =!this.show_Alarm;
        }, 

        delateAlarm: function(){
            let indexWanted =  this.alarms.indexOf(this.alarms.label);
            this.alarms.splice(indexWanted,1);
        },

        playAlarm: function(){
            document.getElementById('audio1').play();
        },

        modifAlarm: function(){
            let dateActual = new Date();
            let dateToPush = (dateActual.getMonth() +" "+ dateActual.getDay()+", "+ dateActual.getFullYear()+" "+this.newHours+":"+this.newMinutes);
            this.alarms = [{ label: this.newLabel, date: dateToPush }];
        }
        
       
    },

};
</script>
<style>
    .title{
        text-align: center;
    }
    .alarm{
        margin-left: 50px ;
        text-align: left;
    }
    #symbol{
        margin-left:50px;
        font-weight:normal;
    }
   
</style>