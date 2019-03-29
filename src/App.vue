<template>
  <div>
    123
  </div>
</template>

<script>

import Mock from 'mockjs'
export default {
  name: 'app',
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
