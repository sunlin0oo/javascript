export default class MinHeap{
    // 大小堆
   heap = []
    
    swap(index1,index2){
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }
    // index为节点坐标
    //左子树的坐标
    getLeftNode(index){
        return (index + 1)*2 - 1
    }
    //右子树的坐标
    getRightNode(index){
        return (index + 1)*2
    }
    //父节点的坐标
    getParentNode(index){
        if(index === 0) return undefined;
        return (index - 1)>>1//Math.floor((x-1)/2)
    }

    // 向上移动
    shiftUp(index){
        // 父节点的坐标
        let parentIndex = this.getParentNode(index);
        // 小顶堆
        // 父节点坐标大于本坐标则进行交换
        if(index != 0 && (this.heap[parentIndex]>this.heap[index])){
            this.swap(parentIndex,index);
            this.shiftUp(parentIndex)
        }
    }
    // 向下==>堆中每一个节点的值必须大于或者等于（小于或等于）其左右子树的值（大顶堆，小顶堆）
    shitDown(index) {
        let rightIndex = this.getRightNode(index)
        let leftIndex = this.getLeftNode(index)

        if(leftIndex < this.heap.length && (this.heap[leftIndex] < this.heap[index])) {
            this.swap(index, leftIndex)
            this.shitDown(leftIndex)
        }
        if(rightIndex < this.heap.length && (this.heap[rightIndex] < this.heap[index])) {
            this.swap(rightIndex, index)
            this.shitDown(rightIndex)
        }
    }

    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }
}