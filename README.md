# 2.ea-tund_parooli-generaator

Kasutame päris mitu 6 ja 12 tähelist sõna eraldi `word.js` failis `word` objektis:

```js
var words = {
	'6': ["aabits","aadama",....],
	'12': ["aadamakahvel","aadlikonvent",...]
};
```
Selleks, et kätte saada nt esimene 6-täheline sõna peab kirjutama `words[6][0]` 
