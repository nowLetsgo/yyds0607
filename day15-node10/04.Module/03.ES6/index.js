//1.引入默认暴露的模块
import add from "./add";

//2.引入分别暴露的模块(必须用解构赋值的方式去接受)
import {
    name,
    mins
} from './mins'

//3.引入统一暴露的模块(如果重名，可以使用as来起一个别名)
/* import {
    name as myName,
    age,
    sex,
    say
} from './student' */


// 4. 不想解构赋值一个个拿到暴露的功能， 想要放在一个对象中(引入全部并起一个别名)
import * as person from './person'