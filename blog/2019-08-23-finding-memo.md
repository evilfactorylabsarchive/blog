---
id: finding-memo
title: Finding Memo
author: ri7nz
authorTitle: Bad Guy @ evilfactorylabs
authorURL: https://twitter.com/ri7nz
authorImageURL: https://avatars2.githubusercontent.com/u/16365952?s=96&v=4
authorTwitter: ri7nz
tags: [JavaScript, Functional, Memoize, Measure, Performance]
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

Sekarang, kita lanjut membuat `Functional` untuk mendapatkan berapa nilai `Fibonacci` dari 10, contohnya.

```javascript
Fib(10) // ekspektasinya adalah 55
```

Why ? 

```sql
 -------------------------
| 1 1 2 3 5 8 13 21 34 55 |
 -------------------------
| 1 2 3 4 5 6 7  8  9  10 |
 -------------------------
```

Cara menyelesaikannya, kita bisa membuat sebuah fungsi `Recursive`, contohnya seperti ini: 

```javascript
// fib.js 
module.exports = function Fib(num){ 
    return num <= 1 ? num : Fib(num-1) + Fib(num-2) 
}
```

Fungsi `Recursive` yakni fungsi dalam pemrograman yang menggabungkan 2 konsep antara metode [optimasi matematika / pemrograman matematika](https://en.wikipedia.org/wiki/Mathematical_optimization) dan metode pemrograman komputer, atau biasa juga disebut sebagai bagian dari [Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming).

Namun, metode penyelesaian masalah `Fibonacci` diatas begitu lambat jika parameter yang diberikan nilainya semakin besar. 
Mari kita ukur waktu ekseskusi dari fungsi `Fib(num)` diatas dengan membuat fungsi untuk mengukur fungsi sederhana, yang kita sebut `measure(fn, param)`, contoh kodenya ada dibawah ini:

```javascript
/* @url https://nodejs.org/api/perf_hooks.html#perf_hooks_performance_timing_api */

const {PerformanceObserver,performance} = require('perf_hooks')

module.exports = function measure(fn, param){
    console.log('Mengukur Waktu Ekseskusi dari fungsi:', fn.name)
    console.log('dengan Parameter:', param)

    let result = null;

    const wrap = performance.timerify(fn.bind(this, param))

    const obs = new PerformanceObserver((list) => {
        result = list.getEntries()[0].duration 
        console.log(result);
        obs.disconnect();
    });

    obs.observe({ entryTypes: ['function'] });

    wrap();

    return result 
}
```

cara mengukur nya seperti apa, berikut contohnya saya menggunakan Node.js
```javascript
const measure = require('./measure')

const Fib = require('./fib') // kode fibonacci simpan yah namanya fib.js or whatever

// definisikan parameter apa saja yg akan diberikan untuk fungsi Fib 
const params = [ 10, 15, 20 ]

// definisikan list array untuk menampung semua hasil
const resultOfFib = params.map(param => measure(Fib, param))

console.log(resultOfFib)
// outputnya berupa array 
// contoh hasil yg saya dapatan
[ 0.033238, 0.347195, 1.120716, 17.617482 ]
```

# Memo
Dari fungsi diatas, dapat menghasilkan angka `Fibonacci` sesuai parameter yang kita berikan.
Jika nilai 

