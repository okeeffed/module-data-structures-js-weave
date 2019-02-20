// first, update queue
class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this
            .data
            .unshift(record);
    }

    remove() {
        return this
            .data
            .pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

// using weave
const weave = (srcOne, srcTwo) => {
    const q = new Queue();
    while (srcOne.length) {
        q.add(srcOne.pop());
    }

    const qTwo = new Queue();
    while (srcTwo.length) {
        qTwo.add(srcTwo.pop());
    }

    const res = runWeave(q, qTwo);
    return res;
}

const runWeave = (qOne, qTwo) => {
    const weave = new Queue();

    while (qOne.peek() || qTwo.peek()) {
        if (qOne.peek()) {
            weave.add(qOne.remove());
        }

        if (qTwo.peek()) {
            weave.add(qTwo.remove());
        }
    }

    return weave;
}

module.exports = weave;