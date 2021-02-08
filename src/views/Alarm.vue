<template>
  <div class="home">
    <Alarm :alarms="alarms"></Alarm>
    <CreateAlarm @create-alarm="createAlarm">
    </CreateAlarm>
  </div>
</template>

<script>
// @ is an alias to /src
import Alarm from '@/components/Alarm.vue'
import CreateAlarm from '@/components/CreateAlarm'

export default {
  name: 'AlarmView',
  components: {
    Alarm,
    CreateAlarm
  },
  data() {
  	return {
            show_Alarm: false,
            //show_newAlarm: false,
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
    methods: {
    	createAlarm(newAlarm) {
    		this.alarms.push(newAlarm);
    	},
    },
}
</script>
