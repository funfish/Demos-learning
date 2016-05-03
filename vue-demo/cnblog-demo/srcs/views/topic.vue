<template>
	<section id="page">
	<li v-for="item in items">
		<div class="top">
			<h2>{{item.title}}</h2>
			<h3>作者：{{item.name}}</h3>			
				<p>发布于:{{item.time}}</p>				
		</div>
		<div class="content">
			<p v-for="p in item.content">{{p}}</p>
		</div>
	</li>
	</section>
</template>

<script>
	export default {
		data (){
			return {
				items: [],
				pageUrl: '',
				user: '',
			}
		},
		route:{
            data(transition) {
            	this.pageUrl	= transition.to.params.id;
            	this.user = transition.to.params.user;
				this.start();
			}
		},
		methods: {
			getData() {				
          		let url = require("url"),
                    superagent = require("superagent"),
                    cheerio = require("cheerio");
                let date = [],//存放爬到的网页信息
                    pageNum = 1,  //要爬取文章的页数
                 	that = this;
                    superagent.get('http://www.cnblogs.com/' + that.user + '/p/' + that.pageUrl + '.html').end(function(err,pres) {
                        // 常规的错误处理
                      if (err) console.log(err);
                      let $ = cheerio.load(pres.text);
                        let datec={};
						datec.title = $('#cb_post_title_url').text();
	                    datec.name = that.user;
	                    datec.time = $('#post-date').text();
	                    $ = cheerio.load(pres.text);
	                    let contentPCo=$('#cnblogs_post_body p');
	                    let contentP=[];
	                    for (let i = 0; i<contentPCo.length; i++) {
	                    	let change = contentPCo.eq(i).text();
	                    	if (change.slice(0,1)==0) change = change.slice(2,change.length);
	                    	contentP.push(change);
	                    }
	                    datec.content= contentP;
                        date.push(datec);                   
                    })
                return date;                          
			},
			start() {
				this.items = this.getData();
			}
		}								
	}
</script>

<style lang='sass'>
h2{
	margin: 2px 0.6em 10px;
    font-size: 1.5em;
    font-family: Arial;
    color: #0088ff;
    line-height: 2em;
    border-bottom:  1px solid #d5dbdb;
}
  .top{
  	display: inline-block;
    width: 355/375*100%;
    min-width: 300px;
    color: #0088ff;
    font-size: 0.75em;
    span{
    	padding: 5px;
    }
    p{
    	float: left;
    	margin: 5px 0; 
    }
  }
  .content{
  	margin-top: 5px;
  	font-size: 0.8em;
  	font-family: Arial;
  	p{
  		line-height: 1.5em;
  		text-indent: 2em;
  	}
  }
</style>