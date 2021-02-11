<template>
<div id = "main">
	<h1 class = "title">Mes Réveils</h1>
	<div class ="alarm">
		<ul>
            <li v-for="alarm in alarms">{{ alarm.label }}<span> {{alarm.date | format}}</span>
            <button @click="toggleAlarm" id="symbol">✎</button><button @click="delateAlarm">&#128465;</button></li>
            <div class = "hide-div" v-if="show_Alarm">
                <input type="text" v-model="newLabel" placeholder="Saisir le nom de votre alarme" />
                <input type="number" v-model="newHours" placeholder="Saisir l'heure" />
                <input type="number" v-model="newMinutes" placeholder="Saisir la minute"/>
                <button @click="modifAlarm">Save</button>
            </div>
        </ul>
	</div>
    <audio id="audio1" src="../assets/alarm_sound.mp3" preload="auto"></audio>
</div>
</template>

<script>

export default {
    name: "Alarm",
    // on récupère avec prop les alarmes
    props: ["alarms"],
    data() {
        return {
            show_Alarm: false,
            newLabel: "",
            newHours:"",
            newMinutes:"",
        };
    },

    //Ajout d'un filtre pour l'affichage des réveils
    filters: {
            format : function (date) {
            const dateToFormat = new Date(date);
            let formatMinutes;
            let formatHours;
            if (dateToFormat.getMinutes()<10){
                formatMinutes = "0" + dateToFormat.getMinutes();
            }
            else{
                formatMinutes = dateToFormat.getMinutes();
            }
            
            if (dateToFormat.getHours()<10){
                formatHours = "0" + dateToFormat.getHours();
            }
            else{
                formatHours = dateToFormat.getHours();
            }
           
            return formatHours+"h"+formatMinutes;
        }
    },

    //On initialise la fonction pour se lancer au démarrage de l'app
    mounted() {
        this.SetTimerCheck()
    },

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
            let formatMonth = dateActual.getMonth();
            let formatDay = dateActual.getDay();
            // on formate les dates pour qu'elles soient toutes sous le même format
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
            let dateToPush = (formatMonth +" "+ formatDay+", "+ dateActual.getFullYear()+" "+this.newHours+":"+this.newMinutes);
            this.alarms = [{ label: this.newLabel, date: dateToPush }];
            this.toggleAlarm();
        },

        //toute les minutes lance la fonction CheckAlarm    
        SetTimerCheck: function(){
            setInterval(()=>{ this.CheckAlarm() }, 60000);
            
            
        },

        //On vérifie que la date actuelle correspont à une date de notre liste d'alarme.
        CheckAlarm: function(){
            let current = new Date();
            let formatMonth = current.getMonth();
            let formatDay = current.getDay();
            if (formatMonth<10){
                formatMonth="0"+formatMonth;
            }
            if (formatDay<10){
                formatDay="0"+formatDay;
            }
            let date1 = (formatMonth+" "+formatDay+", "+ current.getFullYear()+" "+current.getHours() +":"+current.getMinutes());
            for(let i = 0; i<this.alarms.length; i++){
                if(date1 == this.alarms[i].date) {
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
    .hide-div{
        margin-top: 1em;
        margin-bottom: 5em;
    }

    .hide-div input,.hide-div button{
        margin-left: 1em;
    }
   
</style>