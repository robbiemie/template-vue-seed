<template>
  <div>
    <Header/>
  </div>
</template>

<script>
import Header from '@/module/Header.vue'
import Mock from 'mockjs'

export default {
  name: 'app',
  components: {
    Header
  },
  mounted () {
    const data = Mock.mock({
      'list|1-10': [{
        'id|+1': 1
      }]
    })
    console.log('data', JSON.stringify(data))
  }
}
</script>
