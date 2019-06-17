<template>
  <div id="wrapper">
    <!-- <img id="logo" src="~@/assets/logo.png" alt="electron-vue"> -->
    <main>
      <h1>{{post_content_hint}}</h1>
      <div class="container">
        <div v-for="(item,index) in items" :key="item.id" class="column" @click="jumpNewsView(item,index)">
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
        </div>
      </div>
      <!-- <div class="right-side">
        <img src="../assets/g.gif" alt="gif">
      </div>-->
    </main>
    <footer class="footer" @click="loadmore">
      <span>加载更多</span>
    </footer>
  </div>
</template>

<script>
import { log } from "util";
import data from "../../../test.json";

export default {
  name: "landing-page",
  data() {
    return {
      post_content_hint: "",
      items: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData(url) {
      let self = this;
      this.post_content_hint = data.post_content_hint;
      data.data.forEach(e => {
        self.items.push(JSON.parse(e.content));
        console.log(JSON.parse(e.content));
      });
      // 'http://www.smallzip.com/test/public/index.php/index/Index/get'
      // this.$http.post('http://is.snssdk.com/api/news/feed/v51/')
      // url = url || 'http://is.snssdk.com/api/news/feed/v51/'
      // this.$http.get(url)
      // .then(e => {
      //   self.post_content_hint = e.data.post_content_hint;
      //   e.data.data.forEach(e => {
      //     self.items.push(JSON.parse(e.content));
      //   });
      // }).catch(e => {
      //   console.log(e);
      // })
    },
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    jumpNewsView(item,index) {
      this.$store.dispatch('jumpNewsView',item,index)
      this.$router.push('/newsView')
    },
    loadmore() {
      let u = 'http://is.snssdk.com/api/news/feed/v51/?category=news_hot&refer=1&count=20&min_behot_time=1491981025&last_refresh_sub_entrance_interval=1491981165&loc_mode=&loc_time=1491981000&latitude=&longitude=&city=&tt_from=pull&lac=&cid=&cp=&iid=0123456789&device_id=12345678952&ac=wifi&channel=&aid=&app_name=&version_code=&version_name=&device_platform=&ab_version=&ab_client=&ab_group=&ab_feature=&abflag=3&ssmix=a&device_type=&device_brand=&language=zh&os_api=&os_version=&openudid=1b8d5bf69dc4a561&manifest_version_code=&resolution=&dpi=&update_version_code=&_rticket='
      this.getData(u)
    }
  },
  filters: {
    time(t) {
      let date = new Date(t);
      return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}

#wrapper {
  /* background: */
  /* radial-gradient( */
  /* ellipse at top left, */
  /* rgba(255, 255, 255, 1) 40%, */
  /* rgba(229, 229, 229, .9) 100% */
  /* ); */
  /* height: 100vh; */
  padding: 60px 80px;
  /* width: 100vw; */
}

#logo {
  height: auto;
  margin-bottom: 20px;
  width: 420px;
}

main {
  /* display: flex; */
}

.container {
  column-count:2;
  column-gap: 2rem;
}

.column {
  display: flex;
  width: 43vw;
  margin-top: 2rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

.itemLeft,.itemRight {
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

.footer {
  margin-top: 80px !important;
  width: 100px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  text-align: center;
  background-color: #42b983;
  color: #fff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  cursor: pointer;
}

.footer:hover {
  background-color: #38af79;
}
</style>
