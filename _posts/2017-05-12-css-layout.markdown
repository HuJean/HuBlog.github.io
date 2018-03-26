---
layout: post
title: CSS之页面布局
date: '2017-05-12 07:00:00'
categories: [CSS]
tags: [Layout]

---

# 两栏布局（左边宽度固定，右边自动适应）
 * 左浮动其中一个DIV，使其脱离文档流，另一个DIV不设置浮动即可。设置浮动可以让元素脱离正常的文档流，使后面的元素占据浮动元素本身的位置。但是浮动元素只能影响后面的元素的位置，而不能够影响前面的元素，也不能叠加在前面的元素上。

    ![]({{site.baseurl}}/assets/images/2017/layout_1.jpg)

  * 使用绝对定位方法，是固定宽度的DIV固定在左侧，然后设置自适应的层的左边距。

    ![]({{site.baseurl}}/assets/images/2017/layout_2.jpg)

  * 增加一个浮动层，设置宽度为100%，包裹中的自适应宽度层设置左边距，然后控制固定宽度的层的负外边距(不兼容IE6)

    ![]({{site.baseurl}}/assets/images/2017/layout_3-1.jpg)

---
# 三栏布局（左右宽度固定，中间自适应宽度）
  * 设置浮动，使文档脱离文档流，注意层的顺序

    ![]({{site.baseurl}}/assets/images/2017/layout_4.jpg)

  * 同样通过负边距来实现，缺点是需要另外增加一个层

    ![]({{site.baseurl}}/assets/images/2017/layout_5.jpg)

  * 也可以通过绝对定位来实现

    ![]({{site.baseurl}}/assets/images/2017/layout_6.jpg)

---
# 三栏布局（左右自适应，中间宽度固定）
  * 这个有点变态，一般没这么布局的

    ![]({{site.baseurl}}/assets/images/2017/layout_7.jpg)

---
# 居中
  * 水平居中
     * 子元素是块级元素且宽度没有设定：在这种情况下，实际上也不存在水平居中一说，因为子元素是块级元素没有设定宽度，那么它会充满整个父级元素的宽度，即在水平位置上宽度和父元素一致
     * 子元素是行内元素，子元素宽度是由其内容撑开的：给父元素设定text-align:center;
     * 子元素是块级元素且宽度已经设定
        > * 给子元素添加margin:0 auto; 上下边界为0，左右则根据宽度自适应；
        > * 通过计算指定父元素的padding-left或padding-right
        > * 计算得到子元素的margin-left或margin-right
        > * 通过子元素相对父元素绝对定位 box-sizing: border-box; 宽度就是包含border+padding+content
        > * 利用flex-box                     
      
          ![]({{site.baseurl}}/assets/images/2017/layout_8.jpg)

  * 垂直居中
    * 子元素是行内元素，高度是由其内容撑开的：设定父元素的line-height为其高度来使得子元素垂直居中；
    * 子元素是块级元素但是子元素高度没有设定，在这种情况下实际上是不知道子元素的高度的，无法通过计算得到padding或margin来调整
      > * 通过给父元素设定display:table-cell;vertical-align:middle来解决
      > * flexbox 

        ![]({{site.baseurl}}/assets/images/2017/layout_10.jpg)
 
    * 子元素是块级元素且高度已经设定
      > * 计算子元素的margin-top或margin-bottom，计算方法为父(元素高度-子元素高度)/2
      > * 计算父元素的padding-top或padding-bottom，计算方法为(父元素高度-子元素高度)/2
      > * 利用绝对定位，让子元素相对于父元素绝对定位
      > * 利用flexbox  

        ![]({{site.baseurl}}/assets/images/2017/layout_11.jpg)

---
# Flex-flow 详解
  * 弹性布局是CSS3引入的强大的布局方式
  * 父类属性
    * flex-direction：排列方向row &#124;row-reverse &#124; column &#124; column-reverse;
    * flex-wrap：子项在容器内的换行效果nowrap &#124; wrap &#124; wrap-reverse;
    * justify-content：子项在容器内水平对齐方式flex-start &#124; flex-end &#124; center &#124; space-between &#124; space-around;
    * align-items：子项在容器内垂直对齐方式flex-start &#124; flex-end &#124; center &#124; baseline &#124; stretch;
    * align-content：多行子项在容器内整体垂直对齐方式flex-start &#124; flex-end &#124; center &#124; space-between &#124; space-around  &#124; stretch;
  * 子类属性
    * Order：子项们的排列顺序
    * flex-grow：子项宽度之和不足父元素宽度时，子项拉伸的比例
    * flex-shrink：子项宽度之和超过父元素宽度时，子项缩放的比例
    * flex-basis：子项的初始宽度，若子项宽度之和超过父元素宽度时，子项按照flex-basis的比例缩放
    * align-self：单个子项与其他项目不一样的对齐方式

---
# Position 定位
  * static：取消覆盖之前的定位（position的默认值）
  * relative：相对定位，仍然占据原来的位置
    * 元素设置了relative时，是相对于元素本身位置进行定位
    * 元素设置了relative后，可以通过“T-R-B-L”改变元素当前所在的位置，但元素移位后，同样点有当初的物理空间位；
    * 元素设置了relative后，如果没有进行任何的“T-R-B-L”设置，元素不会进行任何位置改变。
  * absolute：绝对定位
    * 给元素指定了absolute，整个元素就会漂出文档流，而且元素自身的物理空间也同时消失了。
    * 绝对定位元素的任何祖先元素没有进行任何的“relative”或者“absolute”设置，那么绝对定位的元素的参考物就是html”
    * 页面中的其他元素位置也发生了变化。
  * relative和absolute的结合：如果一个元素绝对定位后，其参照物是以离自身最近元素是否设置了相对定位，如果有设置将以离自己最近元素定位，如果没有将往其祖先元素寻找相对定位元素，一直找到html为止。
    * relative和absolute实现布局效果
    * 设置固定高度
    * Float浮动（高度自适应）
    * 多列浮动
    * 清除浮动

---
