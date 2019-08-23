---
id: finding-memo
title: Finding Memo
author: ri7nz
authorTitle: Undefined @ evilfactorylabs
authorURL: https://twitter.com/ri7nz
authorImageURL: https://avatars2.githubusercontent.com/u/16365952?s=96&v=4
authorTwitter: ri7nz
tags: [Frontend, JavaScript, Functional]
---

Tulisan singkat ini merupakan tulisan yang saya tulis berdasarkan `Perjalanan` Hidup di tatanan dunia `Javascript`.
Artikel sebelumnya sudah di Publish oleh @108kb tentang reduce, sebuah fungsi untuk mengolah jenis nilai `Array`, `Array.reduce(fn, accumulator)`.
Yeah, tulisan ini juga tidak jauh beda, tentang `functional` tentunya. 

# Fibonacci 

Fibonacci adalah metode perhitungan matematika yang dicetuskan oleh seorang matematikawan asal Italia, Leonardo Fibonacci Da Pisa.
Berikut pola deretan angkanya 

```
1 1 2 3 5 8 13 21 .... N
```
Berupa pola angka atau deretan angka sampai (N) `Kiamat` #EH (Please, jangan ditanya mau sampai nilai berapa N tersebut).
```
p = angka sebelumnya
n = angka selanjutnya
...
N    P
1    0
1    1
2    1
3    2
5    3
8    5
13   8
21   13
```

Cara mennyelesaikan masalah tersebut di `Javascript` ? 
```javascript
for(let p=0, n=1; p < 21;){
    console.log('Fib: ', n);
    let temp = n;
    n = p + n; 
    p = temp; 
}
```
atau, Kita kembangkan sedikit menjadi sebuah fungsi:
```javascript
/* 
  @name Fib ❂
  @description Menampilkan deretan angka fibonacci. 😇
  @param {Number} range
  @return {Void}
 */
const Fib = range => {
  let p = 0, n = 1;
  while(p < range){
    console.log('Fib: ', n);
    let temp = n;
    n = p + n, p = temp;
  }
}   
```
hasilnya, seperti ini:
```yaml
Fib: 1
Fib: 1
Fib: 2
Fib: 3
Fib: 5
Fib: 8
Fib: 13
Fib: 21
```
