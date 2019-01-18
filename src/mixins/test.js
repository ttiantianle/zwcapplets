import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
<<<<<<< HEAD
      // console.log('mixin method tap')
=======
      console.log('mixin method tap')
>>>>>>> 256a0947500c7558359fb4ace2421fa6d735e210
    }
  }

  onShow() {
<<<<<<< HEAD
    // console.log('mixin onShow')
  }

  onLoad() {
    // console.log('mixin onLoad')
=======
    console.log('mixin onShow')
  }

  onLoad() {
    console.log('mixin onLoad')
>>>>>>> 256a0947500c7558359fb4ace2421fa6d735e210
  }
}
