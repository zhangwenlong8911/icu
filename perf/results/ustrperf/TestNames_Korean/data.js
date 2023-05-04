window.BENCHMARK_DATA = {
  "lastUpdate": 1683217610651,
  "repoUrl": "https://github.com/zhangwenlong8911/icu",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "vichang@google.com",
            "name": "Victor Chang",
            "username": "gvictor"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "530ca9817641c6a90c9c8c5028996de1d559e4a8",
          "message": "ICU-22371 Fix ULocale.getISOLanguages() API docs",
          "timestamp": "2023-05-03T11:13:32-07:00",
          "tree_id": "4c0c892bf64dfe4a34ef1a0a7b2b2404e1bc60d7",
          "url": "https://github.com/zhangwenlong8911/icu/commit/530ca9817641c6a90c9c8c5028996de1d559e4a8"
        },
        "date": 1683212077768,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 15.7111,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 17.4249,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 20.3623,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 28.6826,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 34.7819,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 31.0403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 20.2396,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 12.6,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 110.6642,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.545,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 47.8066,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 45.1853,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vichang@google.com",
            "name": "Victor Chang",
            "username": "gvictor"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "530ca9817641c6a90c9c8c5028996de1d559e4a8",
          "message": "ICU-22371 Fix ULocale.getISOLanguages() API docs",
          "timestamp": "2023-05-03T11:13:32-07:00",
          "tree_id": "4c0c892bf64dfe4a34ef1a0a7b2b2404e1bc60d7",
          "url": "https://github.com/zhangwenlong8911/icu/commit/530ca9817641c6a90c9c8c5028996de1d559e4a8"
        },
        "date": 1683215256441,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 15.5646,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 17.5375,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 20.3115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 28.7202,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 34.7986,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 30.9859,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 20.2185,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 12.603,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 114.0718,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.4925,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 47.5612,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 45.1219,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zhangwenlong@loongson.cn",
            "name": "Wenlong Zhang",
            "username": "zhangwenlong8911"
          },
          "committer": {
            "email": "zhangwenlong@loongson.cn",
            "name": "Wenlong Zhang",
            "username": "zhangwenlong8911"
          },
          "distinct": true,
          "id": "d71f793a027b72496d6cb31d6ddc941c9ec6914d",
          "message": "fix build error for loongarch64\n\nupdate config.guess config.sub\ncurl -sL -o config.guess 'https://git.savannah.gnu.org/gitweb/?p=config.git;a=blob_plain;f=config.guess;hb=HEAD'\ncurl -sL -o config.sub 'https://git.savannah.gnu.org/gitweb/?p=config.git;a=blob_plain;f=config.sub;hb=HEAD'\n\nSigned-off-by: Wenlong Zhang <zhangwenlong@loongson.cn>",
          "timestamp": "2023-05-04T20:32:46+08:00",
          "tree_id": "6450a07640b4cfb607bbcb67a26360b508ca8881",
          "url": "https://github.com/zhangwenlong8911/icu/commit/d71f793a027b72496d6cb31d6ddc941c9ec6914d"
        },
        "date": 1683217608489,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.9473,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 24.617,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 29.0095,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 40.3899,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 49.7212,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 45.7398,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 28.9525,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 19.2812,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 142.6229,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 29.172,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 63.3733,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.6904,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}