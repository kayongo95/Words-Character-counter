// const inputEl = document.getElementById('input');
// const countButtonEl = document.getElementById('count-button');
// const wordCountEl = document.getElementById('word-count');
// const charCountEl = document.getElementById('char-count');

// let wordCount = 0;
// let charCount = 0;

// countButtonEl.addEventListener('click', () => {
//     const text = inputEl.value.trim();
//     const words = inputValue.split(/\s+/);
//     wordCount = words.length;
//     charCount = text.length;

//     wordCountEl.textContent = `${wordCount} words`;
//     charCountEl.textContent = `${charCount} characters`;
// });

const inputEl = document.getElementById('input');
const countButtonEl = document.getElementById('count-button');
const wordCountEl = document.getElementById('word-count');
const charCountEl = document.getElementById('char-count');

let wordCount = 0;
let charCount = 0;

countButtonEl.addEventListener('click', () => {
    const text = inputEl.value.trim();
    const words = text.split(/\s+/);
    wordCount = words.length;
    charCount = text.length;

    wordCountEl.textContent = `Words: ${wordCount}`;
    charCountEl.textContent = `Characters: ${charCount}`;
});