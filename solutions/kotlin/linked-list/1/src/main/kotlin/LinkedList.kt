class Deque<T> {
    private class Node<T>(val value: T) {
        var next: Node<T>? = null
        var prev: Node<T>? = null
    }

    private var head: Node<T>? = null
    private var tail: Node<T>? = null

    fun push(value: T) {
        val newNode = Node(value)
        if (head == null) {
            head = newNode
            tail = newNode
        } else {
            tail?.next = newNode
            newNode.prev = tail
            tail = newNode
        }
    }

    fun pop(): T? {
        if (tail == null) return null
        val value = tail?.value
        if (head == tail) {
            head = null
            tail = null
        } else {
            tail = tail?.prev
            tail?.next = null
        }
        return value
    }

    fun unshift(value: T) {
        val newNode = Node(value)
        if (head == null) {
            head = newNode
            tail = newNode
        } else {
            newNode.next = head
            head?.prev = newNode
            head = newNode
        }
    }

    fun shift(): T? {
        if (head == null) return null
        val value = head?.value
        if (head == tail) {
            head = null
            tail = null
        } else {
            head = head?.next
            head?.prev = null
        }
        return value
    }
}
