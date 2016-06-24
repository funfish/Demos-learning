#!/use/bin/env python3
# -*- coding: utf-8 -*-
from urllib.request import urlopen
import re, string
import threading, queue, time
import io, sys  
from flask import Flask, request, render_template

douban_app = Flask(__name__)


sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8') #改变标准输出的默认编码  
content_Q = queue.Queue()
items = []

class doubanThread(threading.Thread) :
    def __init__(self, func):
        super(doubanThread, self).__init__()
        self.func = func

    def run(self):
        self.func()

def controlThread():
    global content_Q
    while not content_Q.empty():
        url = content_Q.get()
        print('url: %s' % url)
        get_title(get_page(url))
        time.sleep(1)
        content_Q.task_done()

def get_page(url):
    try :
        page = urlopen(url).read().decode('utf-8')
    except e:
        print(e)
    return page

def get_title(page):
    titles = re.findall(r'<span class="title">(.*?)</span>', page, re.S)
    for index, item in enumerate(titles):
        if item.find('&nbsp') == -1:
            items.append(item)

def main():
    global content_Q
    threads = []
    douban_url = 'https://movie.douban.com/top250?start={page}'
    for index_url in range(10):
        content_Q.put(douban_url.format(page = index_url * 25))
    for index_thread in range(4):
        thread =  doubanThread(controlThread)
        thread.start()
        threads.append(thread)
    for thread in threads:
        thread.join()
    content_Q.join()
    #with open("movie.txt", "w+") as movieFile:
    #    for item in items:
    #        movieFile.write(item + '\n')
    
    print('End')



@douban_app.route('/', methods=['GET', 'POST'])
def home():
    return 	render_template('home.html', items=items)

if __name__ == '__main__':
    print('Start')
    main()
    if items:
    	douban_app.run()