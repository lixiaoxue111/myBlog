import Mock from 'mockjs'
let Random = Mock.Random;

let treeHoleData = req => {
    let treeHoleList = [];
    for(let i=0;i<30;i++){
        let treeHole = {
            date:Random.date('yyyy-MM-dd'),
            content:Random.paragraph()
        };
        treeHoleList.push(treeHole);
    }
    return treeHoleList;
};
Mock.mock('http://www.xiaoxue.com/getTreeList',treeHoleData);