import ShallowRender from 'react-test-renderer/shallow'
import ReactTestUtil from 'react-dom/test-utils'
// 导入组件
import App from '../App'
// 固定套路
describe('react-test-render', function(){
    it('app的名字是sunlin',function(){
        // 首先要基于ShallowRender创建一个对象，然后利用创建好的对象去渲染组件，再通过它去输出渲染好的(虚拟)dom节点
        const render = new ShallowRender();
        render.render(<App></App>)
        console.log(render.getRenderOutput().props.children[0].props.children);
        // 断言语句
        expect(render.getRenderOutput().props.children[0].type).toBe('h1');
        expect(render.getRenderOutput().props.children[0].props.children).toBe('todo-list');
    })
    it('删除功能',function(){
        const app = ReactTestUtil.renderIntoDocument(<App></App>);
        // 在App中利用标签查询长度
        let todoitems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,'li');
        console.log(todoitems.length);
        // 在第0项找button按钮
        let deleteButton = todoitems[0].querySelector('button');
        // 模拟点击删除按钮
        ReactTestUtil.Simulate.click(deleteButton);
        // 获取删除后的标签长度
        let todoitemAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,'li');

        expect(todoitems.length-1).toBe(todoitemAfterClick.length);
    })

    it('添加功能',function(){
        const app = ReactTestUtil.renderIntoDocument(<App></App>);
        // 利用标签查询长度
        let todoitems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,'li');
        console.log(todoitems.length);
        // 在App中找input标签
        let addInput = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,'input');
        addInput.value = 'sunlin'
        let addButton = ReactTestUtil.findRenderedDOMComponentWithClass(app,'add');
        // 模拟点击删除按钮
        ReactTestUtil.Simulate.click(addButton);
        // 获取删除后的标签长度
        let todoitemAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,'li');

        expect(todoitems.length+1).toBe(todoitemAfterClick.length);
    })
})