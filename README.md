　因为有了recat-thunk这个中间件，所以action可以是一个函数，这个函数有个参数是dispatch。store发现action 是一个函数，会自动执行这个函数。
