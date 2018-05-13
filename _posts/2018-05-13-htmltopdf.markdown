---
layout: post
title: 输出pdf文件
date: '2018-05-10 07:00:00'
categories: [前端实战]
tags: [htmltopdf]
---

# html2canvas
  * 直接在浏览器端，对整个或局部页面进行‘截图’；
  * 并不是真的截图，而是通过遍历页面DOM结构，收集所有元素信息及相应样式，渲染出canvas image；
  * 由于html2canvas只能将它能处理的生成canvas image，因此渲染出来的结果并不是100%与原来一致；
  * 不需要服务器参与，整个图片都由客户端浏览器生成，使用很方便；
  * API

    ~~~
    html2canvas(element, {
      onrendered: function(canvas) {
        // canvas is the final rendered <canvas> element
      }
    });
    ~~~

# jsPDF
  * 用于浏览器端生成PDF
  * 生成pdf需要把转化的元素添加到jsPDF实例中，也有添加html的功能，但某些元素无法生成在pdf中，因此可以使用html2canvas + jsPDF的方式将页面转成pdf。
  * 通过html2canvas将遍历页面元素，并渲染生成canvas，然后将canvas图片格式添加到jsPDF实例，生成pdf。


# 来源
  * https://github.com/linwalker/render-html-to-pdf

  