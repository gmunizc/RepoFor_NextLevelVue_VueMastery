export const formFieldMixin = {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number]
  },
  methods: {
    updateValue(event) {
      console.log('This is called from the mixin!')
      this.$emit('input', event.target.value)
    }
  }
}
