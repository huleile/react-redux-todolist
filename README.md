# react-redux-todolist
第一次练习 redux 实现单向数据流管理,实现一个 todo 列表

### 如何使用
* git clone https://github.com/huleile/react-redux-todolist.git
* cd react-redux-todolist
* cnpm / npm install 
* 启动 npm start
* 打包 npm run build


### 碰到的问题，记录
* store 最初的 state 数据来源于 reducer, combainReducers 方法里的对象 key 组成的我们的 Init state, 大小写敏感切记
* action 将用户的操作抽象为对应的事件, UI Event => Actions, 可以称之为 Action Creator / Action Factory / Action Package 等
* reducer 将对用户操作的响应进行抽象, 接收当前的 state 和 Action, 返回响应后的 new state, 为纯方法
* container 容器组件担任 state 与 component的连接工作, 通过 connect 方法, 将 state 与 其对应的 UI component 绑定到一起


### TODO
* 中间件
* 异步操作
* Ajax请求
