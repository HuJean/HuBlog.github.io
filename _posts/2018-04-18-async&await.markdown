---
layout: post
title: JavaScript中的async和await
date: '2018-04-18 14:14:00'
categories: [JS]
tags: [ES7]
---

# async
  * 定义

    ~~~
    async function testAsync() {
        return "hello async";
    }
    const result = testAsync();
    console.log(result);
    ~~~

  * 输出

    ~~~
    Promise {<resolved>: "hello async"}
      __proto__:Promise
        [[PromiseStatus]]:"resolved"
        [[PromiseValue]]:"hello async"
    ~~~

    * async函数（包含函数语句、函数表达式、Lambda表达式）会返回一个Promise对象，如果在函数中 return一个直接量，async会把这个直接量通过Promise.resolve()封装成 Promise对象。

# await
  * await等待的是一个表达式，这个表达式的计算结果是Promise对象或者其它值
  * await是一个让出线程的标志。await后面的函数会先执行一遍，然后就会跳出整个async函数来执行后面js栈（后面会详述）的代码。等本轮事件循环执行完了之后又会跳回到async函数中等待await.
  * 样例1

    ~~~
    function testSometing() {
     console.log("执行testSometing");
     return "testSometing";
    }
     
    async function testAsync() {
     console.log("执行testAsync");
     return Promise.resolve("hello async");
    }
     
    async function test() {
     console.log("test start...");
     const v1 = await testSometing();//关键点1
     console.log(v1);
     const v2 = await testAsync();
     console.log(v2);
     console.log(v1, v2);
    }
     
    test();
     
    var promise = new Promise((resolve)=> { console.log("promise start.."); resolve("promise");});//关键点2
    promise.then((val)=> console.log(val));
     
    console.log("test end...")
    ~~~

  * 输出

    ~~~
    test start...
    执行testSometing
    promise start..
    test end...
    testSometing
    执行testAsync
    promise
    hello async
    testSometing hello async
    ~~~



