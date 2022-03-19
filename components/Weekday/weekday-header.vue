<template>
  <div>
    <strong>#{{ number }}</strong> {{ time }}
  </div>
</template>

<script>
export default {
  name: "weekday-header",

  props: {
    number: {
      type: Number,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },
  },
};
</script>