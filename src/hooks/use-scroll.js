import { onMounted, onUnmounted, onActivated, onDeactivated, ref } from "vue";
import { throttle } from 'underscore'

const useScroll = () => {
  const isReachBottom = ref(false);
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);

  // 监听window滚动加载数据
  const scrollListenerHandler = throttle(() => {
    // 窗体高度
    clientHeight.value = document.documentElement.clientHeight;
    // 滚动位置
    scrollTop.value = document.documentElement.scrollTop;
    // 滚动高度
    scrollHeight.value = document.documentElement.scrollHeight;
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      // 滚动到底部了
      isReachBottom.value = true;
      // if (reachBottomCB) {
      //   reachBottomCB();
      // }
    }
  }, 500)

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });

  // 活跃时增加监听
  onActivated(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });

  // 移除
  onDeactivated(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });

  return { isReachBottom, clientHeight, scrollTop, scrollHeight };
};

export default useScroll;
