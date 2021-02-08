<template>
  <div class="home">
    <Alarm msg="Welcome to Your Alarm"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Alarm from '@/components/Alarm.vue'

export default {
  name: 'AlarmView',
  components: {
    Alarm
  }
}
</script>
