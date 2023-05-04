window.BENCHMARK_DATA = {
  "lastUpdate": 1683216651310,
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
        "date": 1683211419206,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestIsAlpha",
            "value": 4.6556,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsUpper",
            "value": 4.6209,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsLower",
            "value": 3.9819,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsDigit",
            "value": 4.6118,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsSpace",
            "value": 5.1881,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsAlphaNumeric",
            "value": 4.6625,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsPrint",
            "value": 3.9817,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsControl",
            "value": 4.3259,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestToLower",
            "value": 5.3653,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestToUpper",
            "value": 5.7044,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsWhiteSpace",
            "value": 5.1442,
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
        "date": 1683214606728,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestIsAlpha",
            "value": 4.3737,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsUpper",
            "value": 4.3535,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsLower",
            "value": 3.9992,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsDigit",
            "value": 4.3731,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsSpace",
            "value": 5.1594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsAlphaNumeric",
            "value": 4.3735,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsPrint",
            "value": 3.9995,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsControl",
            "value": 4.3738,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestToLower",
            "value": 5.8659,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestToUpper",
            "value": 5.2007,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsWhiteSpace",
            "value": 5.1592,
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
          "id": "63b5c19ebdf359c0ed59dae4eb9a03638003659e",
          "message": "fix build error for loongarch64\n\ncurl -sL -o config.guess 'https://git.savannah.gnu.org/gitweb/?p=config.git;a=blob_plain;f=config.guess;hb=HEAD'\ncurl -sL -o config.sub 'https://git.savannah.gnu.org/gitweb/?p=config.git;a=blob_plain;f=config.sub;hb=HEAD'\n\nSigned-off-by: Wenlong Zhang <zhangwenlong@loongson.cn>",
          "timestamp": "2023-05-04T20:31:27+08:00",
          "tree_id": "6450a07640b4cfb607bbcb67a26360b508ca8881",
          "url": "https://github.com/zhangwenlong8911/icu/commit/63b5c19ebdf359c0ed59dae4eb9a03638003659e"
        },
        "date": 1683215459147,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestIsAlpha",
            "value": 5.2519,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsUpper",
            "value": 5.2547,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsLower",
            "value": 4.5529,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsDigit",
            "value": 5.2427,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsSpace",
            "value": 5.9677,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsAlphaNumeric",
            "value": 5.255,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsPrint",
            "value": 4.5003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsControl",
            "value": 4.8921,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestToLower",
            "value": 6.0944,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestToUpper",
            "value": 6.5272,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsWhiteSpace",
            "value": 5.7905,
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
        "date": 1683216626298,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestIsAlpha",
            "value": 5.4697,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsUpper",
            "value": 5.4251,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsLower",
            "value": 4.6777,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsDigit",
            "value": 5.4105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsSpace",
            "value": 6.1234,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsAlphaNumeric",
            "value": 5.4777,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsPrint",
            "value": 4.6545,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsControl",
            "value": 5.0843,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestToLower",
            "value": 6.2711,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestToUpper",
            "value": 6.7172,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIsWhiteSpace",
            "value": 5.9034,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}