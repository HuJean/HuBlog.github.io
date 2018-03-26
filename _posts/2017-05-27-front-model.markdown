---
layout: post
title: 前端模型
date: '2017-05-27 07:00:00'
categories: [Front-end]
tags: [Model]
---

# 工作模式
  * 图形界面的应用程序提供给用户可视化的操作界面，这个界面提供给数据和信息。
  * 用户输入行为（键盘，鼠标等）会执行一些业务逻辑，可能会导致对应用程序数据的变更，数据的变更自然需要用户界面的同步变更以提供最准确的信息。
  * View不仅要响应用户操作的业务逻辑，而且要同步Model的变更。

    ![]({{site.url}}/assets/images/2017/M1.jpg)

---
# MVC
  * 把应用程序分成View、Model层，还额外的加了一个Controller层，它的职责就是专门管理应用程序的业务逻辑。
  * 用户的对View操作以后，View捕获到这个操作，会把处理的权利交移给Controller（Pass calls）；Controller接着会执行相关的业务逻辑，这些业务逻辑可能需要对Model进行相应的操作；当Model变更了以后，会通过观察者模式（Observer Pattern）通知View；View通过观察者模式收到Model变更的消息以后，会向Model请求最新的数据，然后重新更新界面。
    * 把业务逻辑全部分离到Controller中，模块化程度高。当业务逻辑变更的时候，不需要变更View和Model，只需要Controller换成另外一个Controller就行了（Swappable Controller）。观察者模式可以做到多视图同时更新。
    * Controller测试困难。因为视图同步操作是由View自己执行，而View只能在有UI的环境下运行。在没有UI环境下对Controller进行单元测试的时候，Controller业务逻辑的正确性是无法验证的：Controller更新Model的时候，无法对View的更新操作进行断言。View无法组件化。View是强依赖特定的Model的，如果需要把这个View抽出来作为一个另外一个应用程序可复用的组件就困难了。因为不同程序的Domain Model是不一样的。

      ![]({{site.url}}/assets/images/2017/M2.jpg)

---
# MVP
  * MVP打破了View原来对于Model的依赖，其余的依赖关系和MVC模式一致。
  * 用户对View的操作都会从View交移给Presenter。Presenter同样的会执行相应的业务逻辑，并且对Model进行相应的操作；而这时候Model也是通过观察者模式把自己变更的消息传递出去，但是是传给Presenter而不是View。Presenter获取到Model变更的消息以后，通过View提供的接口更新界面。
    * 便于测试。Presenter对View是通过接口进行，在对Presenter进行不依赖UI环境的单元测试的时候。可以通过模拟一个View对象，这个对象只需要实现了View的接口即可。然后依赖注入到Presenter中，单元测试的时候就可以完整的测试Presenter业务逻辑的正确性；View可以进行组件化。在MVP当中，View不依赖Model。这样就可以让View从特定的业务场景中脱离出来，可以说View可以做到对业务逻辑完全无知。它只需要提供一系列接口提供给上层操作。这样就可以做高度可复用的View组件。
    * Presenter中除了业务逻辑以外，还有大量的View->Model，Model->View的手动同步逻辑，造成Presenter比较笨重，维护起来会比较困难。

      ![]({{site.url}}/assets/images/2017/M3.jpg)

---
# MVVM
  * 可以看作是一种特殊的MVP（Passive View）模式，或者说是对MVP模式的一种改良。
    * MVVM的调用关系和MVP一样。但是，在ViewModel当中会有一个叫Binder，或者是Data-binding engine的东西。以前全部由Presenter负责的View和Model之间数据同步操作交由给Binder处理。你只需要在View的模版语法当中，指令式地声明View上的显示的内容是和Model的哪一块数据绑定的。当ViewModel对进行Model更新的时候，Binder会自动把数据更新到View上去，当用户对View进行操作（例如表单输入），Binder也会自动把数据更新到Model上去。这种方式称为：Two-way data-binding，双向数据绑定。可以简单而不恰当地理解为一个模版引擎，但是会根据数据变更实时渲染。
    * MVVM把View和Model的同步逻辑自动化了。以前Presenter负责的View和Model同步不再手动地进行操作，而是交由框架所提供的Binder进行负责。只需要告诉Binder，View显示的数据对应的是Model哪一部分即可。
    * 提高可维护性。解决了MVP大量的手动View和Model同步的问题，提供双向绑定机制。提高了代码的可维护性。简化测试。因为同步逻辑是交由Binder做的，View跟着Model同时变更，所以只需要保证Model的正确性，View就正确。大大减少了对View同步更新的测试。
    * 过于简单的图形界面不适用，或说牛刀杀鸡。对于大型的图形应用程序，视图状态较多，ViewModel的构建和维护的成本都会比较高。数据绑定的声明是指令式地写在View的模版当中的，这些内容是没办法去打断点debug的。

      ![]({{site.url}}/assets/images/2017/M4.jpg)

---
# SPA
  * single-page application，它将所有的活动局限于一个Web页面中，仅在该Web页面初始化时加载相应的HTML、JavaScript 和 CSS。
  * 一旦页面加载完成了，SPA不会因为用户的操作而进行页面的重新加载或跳转。而是利用 JavaScript 动态的变换HTML的内（采用的是div切换显示和隐藏），从而实现UI与用户的交互。由于避免了页面的重新加载，SPA 可以提供较为流畅的用户体验。
  * 得益于ajax，我们可以实现无跳转刷新，又多亏了浏览器的histroy机制，我们用hash的变化从而可以实现推动界面变化。
    * 通过hashchange事件，我们可以监视#后面字符，一旦发生改变，就会触发此事件，也是大家常说的URL 的锚部分。
    * 局部刷新，这属于AJAX（阿贾克斯）的内容

---
# 前端模板
  * 将 HTML 代码（View 层）和 JS 代码（Controller 层）混杂在了一起，UI 与逻辑代码混杂在一起，阅读起来会非常吃力。一旦业务复杂起来，或者多人维护的情况下，几乎会失控。而且如果需要拼接的 HTML 代码里有很多引号的话（比如有大量的 href 属性，src 属性），那么就非常容易出错了（这样干过的应该深有体会）。这样一来，如果前端需要改 HTML 代码，只需要改模板即可。这样做的优点很明显，前端 UI和逻辑代码不再混杂，阅读体验良好，改动起来也方便了许多。

    ![]({{site.url}}/assets/images/2017/M5.jpg)

    ![]({{site.url}}/assets/images/2017/m6.jpg)
