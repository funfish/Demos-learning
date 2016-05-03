<template>
	<section id="page">
		<ul id="list">
			<li v-for="item in topics"  v-link="{name:'topic', params:{user:item.nameE, id:item.id}}">
				<h3>{{item.title}}</h3>
        <div class="content">
          <img :src="item.imgSrc" class="avatar" v-if="item.imgSrc">
          <img src="../assets/images/index.png" class="avatar" v-if="item.imgSrc==0">
          <div class="info">
              <div class ="name">{{item.name}}</div>
              <div class="right">
                <b>{{item.comment}}</b>/{{item.readNum}}
              </div>
          </div>
        </div>
			</li>
		</ul>
	</section>
</template>
<script>
	export default {
		data() {
			return {
				topics: []
			}
		},
		route: {
			data(transition) {
				this.geTopics();
			}
		},
		methods: {
			getData() {				
          let url = require("url"),
              superagent = require("superagent"),
              cheerio = require("cheerio");
                 
          let pageUrls = [],  //存放收集文章页面网站
              date = [],//存放爬到的网页信息
              pageNum = 1;  //要爬取文章的页数
                 
          for(let i = 1 ; i <= pageNum; i++) {
              pageUrls.push('http://www.cnblogs.com/?CategoryId=808&CategoryType=%22SiteHome%22&ItemListActionName=%22PostList%22&PageIndex='+ i +'&ParentCategoryId=0');
          }; 
          pageUrls.forEach(function(pageUrl) {
              superagent.get(pageUrl).end(function(err,pres) {
                  console.log('fetch ' + pageUrl + ' successful');
                  // 常规的错误处理
                  if (err) console.log(err);
                  let $ = cheerio.load(pres.text);
                  let curPageUrls = $('.titlelnk');
                  for(let i = 0 ; i < curPageUrls.length ; i++){
                      let datec={};
                      let articleUrl = curPageUrls.eq(i).attr('href');
                      datec.title= $('.titlelnk').eq(i).text();
                      datec.name= $('.lightblue').eq(i).text();
                      datec.comment = $('.gray').eq(i*2).text();
                      datec.readNum = $('.gray').eq(i*2+1).text();
                      datec.imgSrc = $('.pfs').eq(i).attr('src')||0;
                      datec.nameE = articleUrl.split('/p/')[0].split('/')[3];
                      datec.id = articleUrl.split('/p/')[1].split('.')[0];
                      date.push(datec);                     
                  };                    
              })
          }); 
          return date;                          
			},
			geTopics() {
				this.topics = this.getData();
			}
		}
	}
</script>
<style lang="sass">
  #list{
    li{
      padding: 5px 8px;
      border-bottom:  1px solid #d5dbdb;
      width: 355/375*100%;
      min-width: 300px;
      h3{
        font-size: 1em;
        line-height: 1.5;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .content{
        padding-top: 2px;
        font-size: 0.85em;
        display: flex;
        div b{
          color: #42b983;
        }
      }
    }
  }
  img{
    overflow: hidden;
  }
  .info{
    width: 305/355*100%;
    div{
      padding: 0.9em 0;
      -webkit-flex: 1;  /* Safari 6.1+ */
      -ms-flex: 1;  /* IE 10 */    
      flex: 1;
    }
  }
.name{
  float:left;
}
.right{
  float: right;
  margin-right: 0.5em;
}
</style>