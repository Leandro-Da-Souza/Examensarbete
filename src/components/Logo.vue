<template>
  <div>
      <img src="@/assets/Logo.svg" alt="logo" :style="{width: size}"/>
  </div>
</template>

<script>
export default {
    name:"Logo",
    props: {
        size: {
            type: String,
            default: '8rem'
        }
    }
}
</script>
