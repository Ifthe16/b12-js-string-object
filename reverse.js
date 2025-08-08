const sentence = 'I am learning web Dev.';
let reverse = '';
// const result = '.veD bew gninrael ma I';

for (const letter of sentence) {
    console.log(letter);
    reverse = letter + reverse;
    console.log(reverse);
}
console.log(reverse);

// ignore this solution
let rev = '';
for (let i = 0; i < sentence.length; i++) {
    // console.log(i);
    const letter = sentence[i];
    rev = letter + rev;
    console.log(rev);
}
console.log(rev);

// shortcut

const reversed = sentence.split('').reverse().join('');
console.log(reversed);