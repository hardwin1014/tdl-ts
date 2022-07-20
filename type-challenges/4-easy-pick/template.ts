// ts联合类型 union
// union类型约束 会一个一个对比
// [title, completed]
// [title, completed,description]
type MyPick<T, K extends keyof T> = {
    // 遍历联合类型,如果P不存在怎么办，使用extends约束一下,keyof会获取T里面所有的key
    [P in K] : T[P];
}

// js 对比学习
function myPick(todo, keys){
    const obj = {}
    keys.forEach(key => {
        if(key in todo){
            obj[key] = todo[key]
        }
    })

    return obj
}

// 涉及到的知识点
// 1. 返回一个对象
// 2. 遍历foreach  mapped
// - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3. todo[key] 取值 indexed
// - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// 4. 看看 key 在不在 todo 里面
//    1. keyof  lookup  取出对象中的 keys
//     - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
//    2. extends 条件约束
//     - https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
