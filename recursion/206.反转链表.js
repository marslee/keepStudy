/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//解法1
// 将curr指针指向prev
// 然后更新prev和curr即顺移
// 设置哨兵节点 null，初始化时将head节点指向null，
// 重复以上动作直到当前节点为尾节点的节点null
/* var reverseList = function (head) {
    if (head == null || head.next == null) return head;

    let prev = null;
    let curr = head;
    while (curr != null) {

        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;

}; */

//解法2: 尾递归
//同解法1一样, 将当前节点指向前一个节点的操作之后，来顺移更新前一个、当前、和下一个节点的操作
/* var reverseList = function (head) {
    //顺移
    let reverse = (prev, curr) => {
        //为空结束
        if (!curr) return prev;
        //保存next
        let next = curr.next;
        //反转
        curr.next = prev;
        return reverse(curr, next);
    }

    return reverse(null, head);
} */


//解法3: 递归
var reverseList = function (head) {
    //1.终止条件：链表套路
    if (head == null || head.next == null) return head;

    //根据第二步，返回给上一级的是反转后的链表
    // 存储当前节点的下一个节点
    let next = head.next;
    let newHead = reverseList(next);
    //反转, 后一个节点连接当前节点
    next.next = head;
    //断开head
    head.next = null;

    //2.确定返回值，尾指针，即是反转后的头
    return newHead;
};

//解法4：栈解
// 既然是反转，那么符合栈先进后出的特点
// 将原节点依次入栈
// 出栈时，重新构造链表改变指向
// 同样设置哨兵节点 ,最后返回哨兵的next即为所求
// var reverseList = function (head) {
//     let tmp = head;

//     //哨兵
//     let tHead = new ListNode(0);
//     let pre = tHead;
//     let stack = [];

//     //遍历入栈
//     while (tmp) {
//         stack.push(tmp.val);
//         tmp = tmp.next;
//     }

//     while (stack.length != 0) {
//         //出栈
//         pre.next = new ListNode(stack.pop());
//         pre = pre.next;
//     }
//     return tHead.next;
// }

// @lc code=end