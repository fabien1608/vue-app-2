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
	</div>
    <audio id="audio1" src="alarm_sound.mp3" preload="auto"></audio>
</div>
</template>

<script>
export default {
    name: "Alarm",
    props: ["alarms"],
    data() {
        return {
            show_Alarm: false,
            newLabel: "",
            newHours:"",
            newMinutes:"",
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
    mounted(){this.SetTimerCheck},

    methods: {
        
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
        },

        SetTimerCheck: function(){
            setInterval(function(){ this.CheckAlarm(); }, 60000);
        },
        
        CheckAlarm: function(){
            let current = new Date();
            let date1 = (current.getMonth() +" "+ current.getDay()+", "+ current.getFullYear()+" "+current.getHours() +":"+current.getMinutes());
            for(let i = 0; i<=this.alarms.length; inc++){
                if(date1 == alarms[i].date) {
                    this.playAlarm();
                }
            }
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