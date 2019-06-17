<template>
  <div>
    <h1 @click="back">返回页面</h1>
    <div class="container">
      <!-- <div class="column">
        <div class="itemLeft">
          <img :src="item.middle_image.url" alt v-if="item.has_image" width="100%">
          <img
            v-else
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553500645014&di=a82f52c91d22dbf204a04986df74a3f6&imgtype=0&src=http%3A%2F%2Fsc.jb51.net%2Fuploads%2Fallimg%2F150716%2F14-150G6093925932.jpg"
            alt="媒体"
            width="100%"
          >
        </div>
        <div class="itemRight">
          <div class="media">
            <img :src="item.media_info.avatar_url" alt="媒体" width="20" height="20">
            <span>{{item.source}}</span>
            <span>{{item.publish_time | time}}</span>
          </div>
          <p class="title">{{ item.title }}</p>
          <p class="abstract">{{item.abstract}}</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "news",
  data() {
    return {};
  },
  computed:mapState({
    item() {
      console.log(this.$store.getters.newsViewItem);
      return this.$store.getters.newsViewItem
    },
    index() {
      return this.$store.getters.newsViewIndex
    }
  }),
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.container {
}

.column {
  display: flex;
  width: 43vw;
  margin-top: 2rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

.itemLeft,
.itemRight {
  width: 50vw;
}
.itemRight {
  padding: 1rem;
}
.media {
  display: flex;
  height: 20px;
  line-height: 20px;
}
.media > span {
  margin-left: 8px;
  font-size: 0.8rem;
  color: #aaa;
}

.title {
  font-weight: 600;
  font-size: 1.1rem;
}

.abstract {
  color: #444;
}
</style>
