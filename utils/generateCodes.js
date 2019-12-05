const position = {
    HEAD: 'HD',
    VICE: 'VC',
    MEMBER: 'MR',
};
const codes = {
    vice: [],
    head: [],
    member: [],
};

const randInt = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
};

for (let i = 0; i < 50; i++) {
    codes.head.push(
        `${position.HEAD}-${randInt(1000, 10000)}${randInt(10, 100)}`
    );
}

console.log(codes.head);
